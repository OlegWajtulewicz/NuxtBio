
<template>
  <div data-scroll-container>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
}

html {
  background-color: var(--background-color);
  color: var(--text-primary);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

/* Smooth Scroll Styles */
html.has-scroll-smooth {
  overflow: hidden;
  position: fixed;
  inset: 0;
}

[data-scroll-container] {
  min-height: 100vh;
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>