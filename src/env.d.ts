/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PRODUCTION_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_APP_OGDESCRIPTION: string
  // more env variables...
}
  
interface ImportMeta {
  readonly env: ImportMetaEnv
}