import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "about-layout" | "default" | "home-layout" | "layouts-types" | "work-layout"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}