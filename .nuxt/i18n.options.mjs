
// @ts-nocheck


export const localeCodes =  [
  "en",
  "ru",
  "pl"
]

export const localeLoaders = {
  "en": [],
  "ru": [],
  "pl": []
}

export const vueI18nConfigs = [
  () => import("../i18n.config.js?hash=c231e734&config=1" /* webpackChunkName: "__i18n_config_js_c231e734" */)
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false,
    "generatedLocaleFilePathFormat": "absolute"
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false,
    "optimizeTranslationDirective": true
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.js",
  "locales": [
    "en",
    "ru",
    "pl"
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_locale",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "no_prefix",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "language": "en",
    "code": "en"
  },
  {
    "language": "ru",
    "code": "ru"
  },
  {
    "language": "pl",
    "code": "pl"
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
