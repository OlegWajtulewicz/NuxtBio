<script setup>
import { works } from '@/data/works'
import { products } from '@/data/product'
import ProductHeader from '@/components/product/ProductHeader.vue'
import ProductImage from '@/components/product/ProductImage.vue'
import ProductInfo from '@/components/product/ProductInfo.vue'
import ProductVideo from '@/components/product/ProductVideo.vue'
import ProductDevices from '@/components/product/ProductDevices.vue'
import ProductButton from '@/components/product/ProductButton.vue'
import PageHead from '@/components/PageHead.vue'
import USkeleton from '@/components/ui/USkeleton.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const isLoading = ref(true)
const isError = ref(false)
const errorMessage = ref('')

// Находим детальную информацию о проекте
const product = computed(() => {
  const slug = route.params.slug?.toString().toLowerCase()
  return products[slug]
})

// Если проект не найден, перенаправляем на страницу работ
watchEffect(() => {
  if (!isLoading.value && !product.value) {
    isError.value = true
    errorMessage.value = t('project_not_found') || 'Проект не найден'
    router.push('/work')
  }
})

onMounted(async () => {
  try {
    if (!product.value) return

    // Загружаем все изображения
    const imagesToLoad = [
      product.value.mainImage,
      ...(product.value.devices || []),
      ...(product.value.features?.map(f => f.image) || [])
    ].filter(Boolean)

    await Promise.all(
      imagesToLoad.map(src => 
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve // Продолжаем даже если изображение не загрузилось
          img.src = src
        })
      )
    )
  } catch (error) {
    console.error('Error loading images:', error)
    isError.value = true
    errorMessage.value = t('error_loading_images') || 'Ошибка при загрузке изображений'
  } finally {
    isLoading.value = false
  }
})

// Мета-теги для SEO
useHead({
  title: product.value ? `${product.value.title} • Aleh Vaitulevich` : t('project_not_found') || 'Проект не найден',
  meta: [
    {
      name: 'description',
      content: product.value?.description || ''
    }
  ]
})

definePageMeta({
  layout: 'slug-layout'
})
</script>

<template>
  <div>
    <MouseCursor :projects="works"  />
    <PageHead />
    
    <!-- Скелетон загрузки -->
    <div v-if="isLoading" class="loading-skeleton">
      <div class="skeleton-container">
        <!-- Хедер проекта -->
        <div class="skeleton-header-wrap">
          <USkeleton class="skeleton-title" :ui="{ background: 'skeleton--bg' }" />
          <USkeleton class="skeleton-button" :ui="{ background: 'skeleton--bg' }" />
        </div>
        
        <!-- Главное изображение -->
        <USkeleton class="skeleton-main-image" :ui="{ background: 'skeleton--bg' }" />
        
        <!-- Информация о проекте -->
        <div class="skeleton-info-wrap">
          <div class="skeleton-info-left">
            <USkeleton class="skeleton-subtitle" :ui="{ background: 'skeleton--bg' }" />
            <div class="skeleton-stack">
              <USkeleton v-for="i in 6" :key="i" class="skeleton-stack-item" :ui="{ background: 'skeleton--bg' }" />
            </div>
          </div>
          <div class="skeleton-info-right">
            <USkeleton class="skeleton-project-title" :ui="{ background: 'skeleton--bg' }" />
            <USkeleton class="skeleton-description" :ui="{ background: 'skeleton--bg' }" />
          </div>
        </div>
      </div>
    </div>

    <!-- Основной контент -->
     
    <section 
        v-else-if="product" 
        class="product-wrap" 
        :class="`gradient-${product.color}`" 
        data-scroll-section
        >
      
      <div class="product">
        <div class="product__container">
          <ProductHeader :link="product.liveUrl" :subtitle="product.subtitle" />
          <ProductImage :image="product.mainImage" :title="product.title" />
          <ProductInfo 
            :stack="product.stack" 
            :title="product.title"
            :description="product.description"
          />
          <div class="section-padding"></div>
        </div>
      </div>

      <template v-if="product.slug !== 'pizza-next'">
        <ProductVideo 
          v-if="product.video" 
          :video="product.video"
          :color="product.color"
        />
        
        <ProductDevices 
          v-if="product.devices?.length" 
          :devices="product.devices" 
          :title="product.title" 
        />
      </template>

      <ProductGrid v-if="product.slug === 'pizza-next'" />

      <ProductButton />
    </section>

    <!-- Сообщение об ошибке -->
    <div v-else class="error-container">
      <p>{{ errorMessage }}</p>
      <NuxtLink to="/work" class="back-link">{{ t('back_to_works') || 'Вернуться к работам' }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/styles/components/product.scss';

.product-wrap {
  position: relative;
  overflow: hidden;
  z-index: 5;
  &.gradient-orangeOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(38, 16%, 10%));
  }

  &.gradient-blueOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(210, 16%, 12%));
  }

  &.gradient-yellowOp {
    background: linear-gradient(to bottom, var(--background-color), rgb(37, 37, 31));
  }

  &.gradient-violetOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(280, 16%, 12%));
  }

  &.gradient-brownOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(37, 25%, 10%));
  }

  &.gradient-greyOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(0, 0%, 10%));
  }

  &.gradient-blue1Op {
    background: linear-gradient(to bottom, var(--background-color), hsl(210, 16%, 12%));
  }

  &.gradient-redOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(0, 21%, 10%));
  }

  &.gradient-pinkOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(300, 16%, 12%));
  }

  &.gradient-cyanOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(180, 25%, 15%));
  }

  &.gradient-tealOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(180, 17%, 10%));
  }
  
  &.gradient-greenOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(120, 14%, 10%));
  }

  &.gradient-orange6Op {
    background: linear-gradient(to bottom, var(--background-color), hsl(37, 24%, 15%));
  }

  &.gradient-graphiteOp {
    background: linear-gradient(to bottom, var(--background-color), hsl(0, 0%, 10%));
  }

  // Добавьте другие цвета по необходимости
}


.loading-skeleton {
  padding: 2rem;
  
  .skeleton-container {
    max-width: 80em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skeleton-header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .skeleton-title {
    width: 100px;
    height: 2rem;
    border-radius: .5em;
  }

  .skeleton-button {
    width: 8em;
    height: 4rem;
    border-radius: 2em;
  }

  .skeleton-main-image {
    width: 100%;
    height: 50vh;
    border-radius: var(--border-radius);
  }

  .skeleton-info-wrap {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .skeleton-info-left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .skeleton-info-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .skeleton-subtitle {
    width: 80px;
    height: 1.5rem;
    border-radius: .5em;
  }

  .skeleton-stack {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .skeleton-stack-item {
    height: 1.5rem;
    width: 80%;
    border-radius: .5em;
  }

  .skeleton-project-title {
    height: 2.5rem;
    width: 70%;
    border-radius: .5em;
  }

  .skeleton-description {
    height: 8rem;
    width: 100%;
    border-radius: .5em;
  }
}

.error-container {
  text-align: center;
  padding: 4rem 2rem;

  .back-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid currentColor;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: all 0.3s ease;
    
    
  }
}


</style>