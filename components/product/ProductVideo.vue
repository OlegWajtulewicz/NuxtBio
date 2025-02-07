<script setup>
defineProps({
  video: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="product__video-wrap video-wrap-product" :class="color">
    <div class="video-wrap-product__container">
      <div class="video-wrap-product__body">
        <figure>
          <div class="video-wrap-product__video-overlay playpauze">
            <video playsinline autoplay muted loop :src="video" frameborder="0" allowfullscreen></video>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/components/product.scss';

.video-wrap-product {
  &.orangeOp {
	  background-color: #ff91001a;
  }
  &.blueOp {
    background-color: #3da1ff1a;
  }
  &.yellowOp {
    background-color: var(--yellow);
  }
  &.violetOp {
    background-color: var(--violet);
  }
  &.brownOp {
    background-color: var(--brown);
  }
  &.greyOp {
    background-color: var(--grey);
  }
  &.blue1Op {
    background-color: var(--blue);
  }
  &.redOp {
    background-color: var(--red);
  }
  &.pinkOp {
    background-color: var(--pink);
  }
  &.cyanOp {
    background-color: var(--cyan);
  }
  &.tealOp {
    background-color: var(--teal);
  }
  &.greenOp {
    background-color: var(--green);
  }
  &.orange6Op {
    background-color: var(--orange6);
  }
  &.graphiteOp {
    background-color: var(--graphite);
  }
}
</style>