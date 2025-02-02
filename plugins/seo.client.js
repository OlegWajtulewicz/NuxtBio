export default defineNuxtPlugin((nuxtApp) => {
  // Функция обновления SEO-метаданных
  const updateSEO = () => {
    if (!process.client) return;

    const route = nuxtApp.$router.currentRoute.value;
    const lang = nuxtApp.$i18n.locale.value;
    
    // Получаем название текущей страницы
    const pageName = route.path.split('/').filter(Boolean).pop() || 'home';
    
    // Используем существующие ключи для заголовка
    document.title = `${nuxtApp.$i18n.t(pageName)} | Portfolio`;

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
  };

  if (process.client) {
    // Вызываем при инициализации
    updateSEO();
    
    // Вызываем при смене страницы
    nuxtApp.hook('page:start', updateSEO);
    
    // Вызываем при смене языка
    nuxtApp.$i18n.onBeforeLanguageSwitch = () => {
      updateSEO();
    };
  }
}); 
