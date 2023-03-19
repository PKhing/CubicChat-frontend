import { styled } from 'config/theme'

export const StyledTypography = styled('div', {
  fontFamily: '$loopless',

  variants: {
    variant: {
      h1: {
        fontSize: '$60',
        fontWeight: 700,
        '@md': {
          fontSize: '$40',
        },
      },

      h2: {
        fontSize: '$48',
        fontWeight: 700,
        '@md': {
          fontSize: '$28',
        },
      },

      h3: {
        fontSize: '$30',
        fontWeight: 700,
        '@md': {
          fontSize: '$24',
        },
      },

      h4: {
        fontSize: '$24',
        fontWeight: 700,
        '@md': {
          fontSize: '$20',
        },
      },

      h5: {
        fontSize: '$20',
        fontWeight: 600,
        '@md': {
          fontSize: '$18',
        },
      },

      h6: {
        fontSize: '$14',
        fontWeight: 500,
      },

      body1: {
        fontSize: '$16',
        fontWeight: 400,
      },

      body2: {
        fontSize: '$14',
        fontWeight: 400,
      },

      subtitle1: {
        fontSize: '$14',
        fontWeight: 400,
      },

      subtitle2: {
        fontSize: '$12',
        fontWeight: 500,
        '@md': {
          fontSize: '$10',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'body1',
  },
})
