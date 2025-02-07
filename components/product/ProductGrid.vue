<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Компонент для отображения сетки продуктов
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview')
      }
    })
  }, {
    threshold: 0.1
  })

  // Наблюдаем за всеми карточками
  document.querySelectorAll('.items-grid-product__card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<template>
  <div class="prod_container">
    <div class="product__items-grid items-grid-product">
      <div class="items-grid-product__card-title" data-scroll>
        <div class="items-grid-product__item item-grid-product">
          <strong class="item-grid-product__title">{{ t('productPizza.search.title') }}</strong>
          <br>
          <p class="item-grid-product__text">{{ t('productPizza.search.text') }}</p>
        </div>
      </div>

      <div class="items-grid-product__group1">
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/search.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="search">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.profile.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.profile.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/filters.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="filters">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/login.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="login">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.filtration.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.filtration.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.routes.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.routes.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/acc.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="acc">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/modal.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="modal">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.auth.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.auth.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/toast.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="toast">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.alerts.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.alerts.text') }}</p>
          </div>
        </div>
      </div>

      <div class="items-grid-product__card-title" data-scroll>
        <div class="items-grid-product__item item-grid-product">
          <strong class="item-grid-product__title">{{ t('productPizza.basket.title') }}</strong>
          <br>
          <p class="item-grid-product__text">{{ t('productPizza.basket.text') }}</p>
        </div>
      </div>
      
      <div class="items-grid-product__group2">
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/cart.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="cart">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/pay.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="pay">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.purchase.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.purchase.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/drawer.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="drawer">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <p class="item-grid-product__text">{{ t('productPizza.email.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/check.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="check">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/admin.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="admin">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <strong class="item-grid-product__title">{{ t('productPizza.dashboard.title') }}</strong>
            <br>
            <p class="item-grid-product__text">{{ t('productPizza.dashboard.text') }}</p>
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/product-page.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="product-page">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/role.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="role">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__image">
            <img src="/img/product/dashboard.png" data-scroll data-scroll-speed="-0.5" class="ibg" alt="dashboard">
          </div>
        </div>
        <div class="items-grid-product__card" data-scroll>
          <div class="items-grid-product__item item-grid-product">
            <p class="item-grid-product__text">{{ t('productPizza.admin.text') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/components/product.scss';
.prod_container {
  max-width: 80em;
  margin-inline: auto;
  padding-inline: var(--container-padding);
}
.items-grid-product {
  &__card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--border-radius) * 0.5);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

.item-grid-product {
  &__title {
    margin-bottom: 1em;
    font-weight: 300;
    opacity: 0.5;
  }

  &__text {
    line-height: 1.6;
  }
}
</style>