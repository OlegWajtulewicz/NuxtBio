<script setup>
import { onMounted } from 'vue'

function showBanner() {
  document.getElementById('cookie-consent-banner').classList.add('visible');
}

onMounted(() => {
  const openConsentBtn = document.getElementById('btn-open-consent')
  if (openConsentBtn) {
    openConsentBtn.addEventListener('click', showBanner)
  }
})
</script>
<template>
  <div>
    <section class="section policy" data-watch="navigator" data-watch-threshold="0.1">
      <div class="policy__container container-small-s">
        <div class="policy__row">
          <div class="policy__flex-col textblock">
            <p>{{ $t('cookie_page.intro.text1') }}</p>
            <p>{{ $t('cookie_page.intro.text2') }}</p>
            <p>{{ $t('cookie_page.intro.text3') }}</p>
            <p>{{ $t('cookie_page.intro.text4') }}</p>
            <p>{{ $t('cookie_page.intro.text5') }}</p>

            <button id="btn-open-consent" class="hello__btn btn btn-click magnetic open-consent-btn" data-strength="70" data-strength-text="25">
              <div class="btn-fill"></div>
              <span class="btn-text">
                <i hidden class="btn__text" style="display:none;"></i>
                <span class="btn-text-inner change">{{ $t('cookie_page.button.text') }}</span>
              </span>
            </button>

            <p>{{ $t('cookie_page.settings.text1') }}</p>
            <p>{{ $t('cookie_page.settings.text2') }}</p>
            <p>{{ $t('cookie_page.settings.text3') }}</p>

            <p><strong>{{ $t('cookie_page.categories.title') }}</strong></p>
            <p><strong>{{ $t('cookie_page.categories.necessary.title') }}</strong></p>
            <p>{{ $t('cookie_page.categories.necessary.description') }}</p>

            <p><strong>{{ $t('cookie_page.categories.analytics.title') }}</strong></p>
            <p>{{ $t('cookie_page.categories.analytics.description') }}</p>

            <p><strong>{{ $t('cookie_page.categories.preferences.title') }}</strong></p>
            <p>{{ $t('cookie_page.categories.preferences.description') }}</p>

            <p><strong>{{ $t('cookie_page.categories.marketing.title') }}</strong></p>
            <p>{{ $t('cookie_page.categories.marketing.description') }}</p>

            <p><strong>{{ $t('cookie_page.google_consent.title') }}</strong></p>
            <p>{{ $t('cookie_page.google_consent.ad_storage.title') }}</p>
            <ul>
              <li>{{ $t('cookie_page.google_consent.ad_storage.description') }}</li>
            </ul>

            <p>{{ $t('cookie_page.google_consent.analytics_storage.title') }}</p>
            <ul>
              <li>{{ $t('cookie_page.google_consent.analytics_storage.description') }}</li>
            </ul>

            <p>{{ $t('cookie_page.google_consent.functionality_storage.title') }}</p>
            <ul>
              <li>{{ $t('cookie_page.google_consent.functionality_storage.description') }}</li>
            </ul>

            <p>{{ $t('cookie_page.google_consent.personalization.title') }}</p>
            <ul>
              <li>{{ $t('cookie_page.google_consent.personalization.description') }}</li>
            </ul>

            <p>{{ $t('cookie_page.google_consent.security_storage.title') }}</p>
            <ul>
              <li>{{ $t('cookie_page.google_consent.security_storage.description') }}</li>
            </ul>

            <p><strong>{{ $t('cookie_page.importance.title') }}</strong></p>
            <ul>
              <li>{{ $t('cookie_page.importance.points.0') }}</li>
              <li>{{ $t('cookie_page.importance.points.1') }}</li>
            </ul>

            <p><strong>{{ $t('cookie_page.management.title') }}</strong></p>
            <p>{{ $t('cookie_page.management.text1') }}</p>
            <p>{{ $t('cookie_page.management.text2') }}</p>

            <p><strong>{{ $t('cookie_page.device_settings.title') }}</strong></p>
            <p>{{ $t('cookie_page.device_settings.text1') }}</p>
            <p>{{ $t('cookie_page.device_settings.text2') }}</p>

            <p><strong>{{ $t('cookie_page.interest_based_ads.title') }}</strong></p>
            <p>{{ $t('cookie_page.interest_based_ads.text') }}</p>

            <p><strong>{{ $t('cookie_page.consequences.title') }}</strong></p>
            <p>{{ $t('cookie_page.consequences.text') }}</p>

            <p><strong>{{ $t('cookie_page.contact.title') }}</strong></p>
            <p>{{ $t('cookie_page.contact.name') }}<br>
              {{ $t('cookie_page.contact.address') }}<br>
              {{ $t('cookie_page.contact.postal') }}<br>
              {{ $t('cookie_page.contact.phone') }} <a href="tel:+48780132019">+48 780 132 019</a><br>
              {{ $t('cookie_page.contact.email') }} <a href="mailto:vaitulevichaleh@gmail.com">vaitulevichaleh@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/cookies-page';
</style> 

