import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "about-layout" | "cookie-layout" | "home-layout" | "layouts-types" | "privacy-layout" | "work-layout"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}