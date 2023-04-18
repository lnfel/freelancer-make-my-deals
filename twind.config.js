import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import { base } from '$app/paths'

export default defineConfig({
    /* @twind/with-sveltekit will use hashed class names in production by default
    * If you don't want this, uncomment the next line
    */
    // hash: false,
    presets: [presetAutoprefix(), presetTailwind()],
    theme: {
        extend: {
            backgroundImage: {
                hero: `
                    linear-gradient(to right, rgba(30, 41, 59, 50%), rgba(30, 41, 59, 50%)),
                    url('${base}/banner.jpeg')
                `
            },
            // backgroundSize: {
            //     hero: 'cover'
            // }
        }
    },
})
