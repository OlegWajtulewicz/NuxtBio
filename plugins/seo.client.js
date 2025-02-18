export default defineNuxtPlugin((nuxtApp) => {
  let prevTitle = '';
  
  // Функция обновления SEO-метаданных
  const updateSEO = () => {
    if (!process.client) return;

    const route = nuxtApp.$router.currentRoute.value;
    const lang = nuxtApp.$i18n.locale.value;
    
    // Получаем название текущей страницы
    const pageName = route.path.split('/').filter(Boolean).pop() || 'home';
    
    if (general.isTransitionStart) {
      // Сохраняем текущий заголовок
      prevTitle = document.title;
    } else {
      // Используем существующие ключи для заголовка
      document.title = nuxtApp.$i18n.t(`pages.${pageName}.title`);

      // Обновляем мета-теги
      const metaTags = document.getElementsByTagName('meta');
      
      // Обновляем og:title
      const ogTitle = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:title');
      if (ogTitle) {
        ogTitle.setAttribute('content', document.title);
      }

      // Обновляем twitter:title
      const twitterTitle = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'twitter:title');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', document.title);
      }
    }
  };

  const updateLang = () => {
    const lang = nuxtApp.$i18n.locale.value;
    
    if (process.client) {
      document.documentElement.lang = lang;
      // Добавляем класс для языка
      document.documentElement.className = `lang-${lang}`;
    }

    // ... остальной код updateLang
  };

  if (process.client) {
    // Вызываем при инициализации
    updateSEO();
    updateLang();
    
    // Вызываем при смене страницы
    nuxtApp.hook('page:start', updateSEO);
    nuxtApp.hook('page:start', updateLang);
    
    // Вызываем при смене языка
    nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
      if (process.client) {
        document.documentElement.lang = newLocale;
        document.documentElement.className = `lang-${newLocale}`;
      }
      updateSEO();
    };
  }
}); 
