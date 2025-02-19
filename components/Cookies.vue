<script setup>
import { onMounted, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isClient = ref(false)
const bannerVisible = ref(false)
const settingsButtonVisible = ref(false)

function hideBanner() {
  bannerVisible.value = false
  settingsButtonVisible.value = true
  const banner = document.getElementById('cookie-consent-banner')
  if (banner) {
    banner.classList.remove('visible')
  }
}

function showBanner() {
  bannerVisible.value = true
  settingsButtonVisible.value = false
  const banner = document.getElementById('cookie-consent-banner')
  if (banner) {
    banner.classList.add('visible')
  }
  // Переустанавливаем обработчики при каждом показе баннера
  setupEventListeners()
}

function checkConsentState() {
  const consentMode = JSON.parse(localStorage.getItem('consentMode'))
  if (!consentMode) {
    showBanner()
  } else {
    settingsButtonVisible.value = true
  }
}

// Обработчики в виде методов
const handleAcceptAll = () => {
  setConsent({
    necessary: true,
    analytics: true,
    preferences: true,
    marketing: true,
  })
  hideBanner()
}

const handleAcceptSome = () => {
  const analytics = document.getElementById('consent-analytics')?.checked || false
  const preferences = document.getElementById('consent-preferences')?.checked || false
  const marketing = document.getElementById('consent-marketing')?.checked || false
  
  setConsent({
    necessary: true,
    analytics,
    preferences,
    marketing,
  })
  hideBanner()
}

const handleRejectAll = () => {
  setConsent({
    necessary: false,
    analytics: false,
    preferences: false,
    marketing: false,
  })
  hideBanner()
}

function setupEventListeners() {
  // Удаляем старые обработчики перед добавлением новых
  const acceptAllBtn = document.getElementById('btn-accept-all')
  const acceptSomeBtn = document.getElementById('btn-accept-some')
  const rejectAllBtn = document.getElementById('btn-reject-all')
  const openConsentBtn = document.getElementById('btn-open-consent')

  if (acceptAllBtn) {
    acceptAllBtn.removeEventListener('click', handleAcceptAll)
    acceptAllBtn.addEventListener('click', handleAcceptAll)
  }

  if (acceptSomeBtn) {
    acceptSomeBtn.removeEventListener('click', handleAcceptSome)
    acceptSomeBtn.addEventListener('click', handleAcceptSome)
  }

  if (rejectAllBtn) {
    rejectAllBtn.removeEventListener('click', handleRejectAll)
    rejectAllBtn.addEventListener('click', handleRejectAll)
  }

  if (openConsentBtn) {
    openConsentBtn.removeEventListener('click', showBanner)
    openConsentBtn.addEventListener('click', showBanner)
  }
}

function setConsent(consent) {
  const consentMode = {
    functionality_storage: consent.necessary ? 'granted' : 'denied',
    security_storage: consent.necessary ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    personalization: consent.preferences ? 'granted' : 'denied',
  }

  if (window.gtag) {
    window.gtag('consent', 'update', consentMode)
  }
  
  localStorage.setItem('consentMode', JSON.stringify(consentMode))
}

watch(locale, () => {
  if (isClient.value && bannerVisible.value) {
    setupEventListeners()
  }
})

onMounted(() => {
  isClient.value = true
  checkConsentState()
  setupEventListeners()
})
</script>

<template>
  <ClientOnly>
    <div>
      <div 
        id="cookie-consent-banner" 
        class="cookie-consent-banner"
        :class="{ visible: bannerVisible }"
      >
        <div class="cookie-consent-banner__container">
          <h3>{{ $t('cookies.title') }}</h3>
          <p>{{ $t('cookies.description') }}<strong><a href=""> cookies.</a></strong></p>
          <div class="cookie-consent-banner__buttons">
            <button id="btn-accept-all" class="cookie-consent-button btn-success">
              {{ $t('cookies.accept_all') }}
            </button>
            <button id="btn-accept-some" class="cookie-consent-button btn-outline">
              {{ $t('cookies.save') }}
            </button>
            <button id="btn-reject-all" class="cookie-consent-button btn-grayscale">
              {{ $t('cookies.reject') }}
            </button>
          </div>
          
          <div class="cookie-consent-options">
            <label>
              <input id="consent-necessary" type="checkbox" value="Necessary" checked disabled>
              {{ $t('cookies.necessary') }}
            </label>
            <label>
              <input id="consent-analytics" type="checkbox" value="Analytics" checked>
              {{ $t('cookies.analytics') }}
            </label>
            <label>
              <input id="consent-preferences" type="checkbox" value="Preferences" checked>
              {{ $t('cookies.preferences') }}
            </label>
            <label>
              <input id="consent-marketing" type="checkbox" value="Marketing">
              {{ $t('cookies.marketing') }}
            </label>
          </div>
        </div>
      </div>
      
      
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/cookies';
</style> 