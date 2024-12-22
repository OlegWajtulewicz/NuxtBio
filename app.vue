<template>
  <div data-scroll-container>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* --------------------------------- Base Styles --------------------------------- */
html {
  background-color: var(--background-color);
  color: var(--text-primary);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

/* --------------------------------- Locomotive Scroll --------------------------------- */
html.has-scroll-smooth {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

[data-scroll-container] {
  min-height: 100vh;
  width: 100%;
}
</style>