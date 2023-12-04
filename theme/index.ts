import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#1B262E',
  white: '#F8F9FB',

  darkgrey_1: '#354349',
  darkmidgrey_2: '#606D76',
  midgrey_3: '#A9B4BC',
  midcleargrey_4: '#C5CDD2',
  cleargrey_5: '#E7ECF0',

  blue: '#2A4BA0',
  blueover: '#153075',
  yellow: '#F9B023',
  cleaeryellow: '#FFC83A',
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.blue,
  },
  spacing: {
    spacing_4: 4,
    spacing_8: 8,
    spacing_12: 12,
    spacing_16: 16,
    spacing_20: 20,
    spacing_24: 24,
    spacing_28: 28,
    spacing_32: 32,
    spacing_36: 36,
    spacing_40: 40,
    spacing_44: 44,
    spacing_48: 48,
    spacing_52: 52,
    spacing_56: 56,
    spacing_60: 60,
    spacing_64: 64,
    spacing_68: 68,
    spacing_72: 72,
    spacing_76: 76,
    spacing_80: 80,
  },
  textVariants: {
    //header
    heading_01: {
      fontSize: 30,
      bold: {
        fontWeight: 'bold',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },
    heading_02: {
      fontSize: 26,
      bold: {
        fontWeight: 'bold',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },
    heading_03: {
      fontSize: 20,
      bold: {
        fontWeight: 'bold',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },
    heading_04: {
      fontSize: 18,
      bold: {
        fontWeight: 'bold',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },

    //body
    body_01: {
      fontSize: 16,
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },

    body_02: {
      fontSize: 14,
      semibold: {
        fontWeight: 'semibold',
      },
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },

    //labels
    labels: {
      fontSize: 12,
      medium: {
        fontWeight: 'medium',
      },
      regular: {
        fontWeight: 'regular',
      },
    },

    //button
    button_01: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    button_02: {
      fontWeight: 'bold',
      fontSize: 12,
    },

    defaults: {
      // We can define a default text variant here.
    },
  },
})

export type Theme = typeof theme
export default theme
