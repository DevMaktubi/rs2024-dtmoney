import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: '#00875F',
    'primary-dark': '#015F43',
    'primary-light': '#00B37E',
    secondary: '#F75A68',
    'secondary-dark': '#AA2834',
    'secondary-light': '#F75A68',
    base: {
      1: '#121214',
      2: '#202024',
      3: '#29292E',
      4: '#323238',
      5: '#7C7C8A',
      6: '#C4C4CC',
      7: '#E1E1E6',
      white: '#FFFFFF'
    }
  },
  styles: {
    global: {
      ':focus': {
        outline: '0',
        boxShadow: '0 0 0 2px primary'
      },
      'body': {
        backgroundColor: 'base.2',
        color: 'base.7',
        '-webkit-font-smoothing': 'antialised'
      },
      'body, input, textarea, button': {
        font: '400 1rem Roboto, sans-serif'
      }
    }
  }
})