import * as Stitches from '@stitches/react'

import { palette } from './palette'

export const { styled, keyframes, getCssText, config } =
  Stitches.createStitches({
    prefix: 'sme-coop',
    theme: {
      colors: {
        ...palette,
      },
      fontSizes: {
        60: '3.75rem',
        48: '3rem',
        40: '2.5rem',
        36: '2.25rem',
        30: '1.875rem',
        28: '1.75rem',
        24: '1.5rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
        10: '0.625rem',
        8: '0.5rem',
      },
      fonts: {
        loopless: "'Poppins', 'Prompt', sans-serif",
      },
    },

    media: {
      xs: '(max-width: 360px)',
      sm: '(max-width: 496px)',
      md: '(max-width: 768px)',
      lg: '(max-width: 960px)',
      xl: '(max-width: 1280px)',
    },
  })

export type CSS = Stitches.CSS<typeof config>

Stitches.globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Prompt:wght@400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap')",
  ],
})()
