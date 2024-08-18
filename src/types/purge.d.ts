// purgecss-webpack-plugin.d.ts
declare module 'purgecss-webpack-plugin' {
  interface PurgeCSSPluginOptions {
    // Define the options here according to the actual plugin API
    paths: string[]
  }

  class PurgeCSSPlugin {
    constructor(options: PurgeCSSPluginOptions)
  }

  export = PurgeCSSPlugin
}
