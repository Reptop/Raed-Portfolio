// components/theme.js
import { extendTheme } from '@chakra-ui/react'

const gruvboxColors = {
  light: {
    background: "#fbf1c7", // Gruvbox light bg
    text: "#3c3836", // Dark text
    primary: "#b57614", // Gruvbox yellow
    accent: "#689d6a" // Gruvbox green
  },

  dark: {
    background: "#282828", // Gruvbox dark bg
    text: "#ebdbb2", // Light text
    primary: "#fabd2f", // Gruvbox yellow
    accent: "#8ec07c" // Gruvbox green
  }
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Start in dark mode (Gruvbox dark)
    useSystemColorMode: false,
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? gruvboxColors.dark.background : gruvboxColors.light.background,
        color: props.colorMode === "dark" ? gruvboxColors.dark.text : gruvboxColors.light.text,
      }
    })
  },
  colors: {
    brand: gruvboxColors
  }
})

export default theme

