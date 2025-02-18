<script setup>
import { onMounted, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isClient = ref(false)

function hideBanner() {
  document.getElementById('cookie-consent-banner').classList.remove('visible');
}

function showBanner() {
  document.getElementById('cookie-consent-banner').classList.add('visible');
}

// Проверяем состояние из localStorage
function checkConsentState() {
  const consentMode = JSON.parse(localStorage.getItem('consentMode'));
  if (!consentMode) {
    // Если нет сохраненных настроек, показываем баннер
    showBanner();
  }
}

// Устанавливаем обработчики событий для кнопок
function setupEventListeners() {
  // Проверяем наличие элементов перед добавлением обработчиков
  const acceptAllBtn = document.getElementById('btn-accept-all')
  const acceptSomeBtn = document.getElementById('btn-accept-some')
  const rejectAllBtn = document.getElementById('btn-reject-all')
  const openConsentBtn = document.getElementById('btn-open-consent')

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => {
      setConsent({
        necessary: true,
        analytics: true,
        preferences: true,
        marketing: true,
      });
      hideBanner();
    });
  }

  if (acceptSomeBtn) {
    acceptSomeBtn.addEventListener('click', () => {
      setConsent({
        necessary: true,
        analytics: document.getElementById('consent-analytics').checked,
        preferences: document.getElementById('consent-preferences').checked,
        marketing: document.getElementById('consent-marketing').checked,
      });
      hideBanner();
    });
  }

  if (rejectAllBtn) {
    rejectAllBtn.addEventListener('click', () => {
      setConsent({
        necessary: false,
        analytics: false,
        preferences: false,
        marketing: false,
      });
      hideBanner();
    });
  }

  if (openConsentBtn) {
    openConsentBtn.addEventListener('click', () => {
      showBanner();
    });
  }
}

// Сохраняем настройки в localStorage и отправляем в gtag
function setConsent(consent) {
  const consentMode = {
    functionality_storage: consent.necessary ? 'granted' : 'denied',
    security_storage: consent.necessary ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    personalization: consent.preferences ? 'granted' : 'denied',
  };

  // Проверяем наличие gtag
  if (window.gtag) {
    window.gtag('consent', 'update', consentMode);
  }
  
  localStorage.setItem('consentMode', JSON.stringify(consentMode));
}

// Обновляем обработчики при изменении языка
watch(locale, () => {
  if (isClient.value) {
    // Небольшая задержка, чтобы DOM успел обновиться
    setTimeout(() => {
      setupEventListeners()
    }, 100)
  }
})

onMounted(() => {
  isClient.value = true
  checkConsentState();
  setupEventListeners();
});

</script>

<template>
  <ClientOnly>
    <div>
      <div id="cookie-consent-banner" class="cookie-consent-banner">
        <div class="cookie-consent-banner__container">
          <h3>{{ $t('cookies.title') }}</h3>
          <p>{{ $t('cookies.description') }}<strong><a href=""> cookies.</a></strong></p>
          <div class="cookie-consent-banner__buttons">
            <button id="btn-accept-all" class="cookie-consent-button btn-success">{{ $t('cookies.accept_all') }}</button>
            <button id="btn-accept-some" class="cookie-consent-button btn-outline">{{ $t('cookies.save') }}</button>
            <button id="btn-reject-all" class="cookie-consent-button btn-grayscale">{{ $t('cookies.reject') }}</button>
          </div>
          
          <div class="cookie-consent-options">
            <label><input id="consent-necessary" type="checkbox" value="Necessary" checked disabled>{{ $t('cookies.necessary') }}</label>
            <label><input id="consent-analytics" type="checkbox" value="Analytics" checked>{{ $t('cookies.analytics') }}</label>
            <label><input id="consent-preferences" type="checkbox" value="Preferences" checked>{{ $t('cookies.preferences') }}</label>
            <label><input id="consent-marketing" type="checkbox" value="Marketing">{{ $t('cookies.marketing') }}</label>
          </div>
        </div>
      </div>
      <!-- Добавляем кнопку для открытия настроек -->
      <button id="btn-open-consent" style="display: none;">
        {{ $t('cookies.settings') }}
      </button>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/cookies';
</style> 