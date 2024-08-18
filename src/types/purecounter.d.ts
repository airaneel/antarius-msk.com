declare module '@srexi/purecounterjs' {
  interface PureCounterOptions {
    start?: number
    end?: number
    duration?: number
    delay?: number
    once?: boolean
    pulse?: boolean
    decimals?: number
    legacy?: boolean
    filesizing?: boolean
    currency?: boolean
    separator?: boolean
    formater?: string
    selector?: string
  }

  export default class PureCounter {
    constructor(options?: PureCounterOptions)
  }
}
