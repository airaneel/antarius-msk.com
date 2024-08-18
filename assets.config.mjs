import fs from 'fs-extra'

try {
    fs.copySync('./src/assets', './dist/assets')
    globalThis.console.log('Assets copy success!')
} catch (error) {
    globalThis.console.error(error)
}
