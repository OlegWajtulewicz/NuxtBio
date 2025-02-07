<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="product-page-button">
    <div class="product-page-button__container">
      <a href="mailto:vaitulevichaleh@gmail.com" class="footer__mail product__btn btn magnetic" data-btn-hover data-strength="70" data-strength-text="40">
        <div class="btn__bg"></div>
        <div class="btn__circle-wrap">
          <div class="btn__circle">
            <div class="before__100"></div>
          </div>
        </div>
        <span class="btn__text">
          <p class="btn-text-p change">{{ t('want_same') || 'I want the same' }}</p>
        </span>
        <div class="btn__border"></div>
      </a>
    </div>
  </div>
</template> 