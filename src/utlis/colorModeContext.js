import React from 'react'
import useMatchMedia from './useMatchMedia'

const ColorModeContext = React.createContext()
ColorModeContext.displayName = 'ColorModeContext'

const getInitialColorMode = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('utoft_colorMode') || 'light'
  }
  return 'light'
}

const ColorModeProvider = (props) => {
  const { state: colorMode, setState: setColorMode } = useMatchMedia(
    getInitialColorMode,
    '(prefers-color-scheme: dark)'
  )

  React.useEffect(() => {
    const storage = window.localStorage.getItem('utoft_colorMode')
    if (storage) {
      setColorMode(storage)
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('utoft_colorMode', colorMode)
  }, [colorMode])

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }} {...props} />
  )
}
const useColorMode = () => {
  return React.useContext(ColorModeContext)
}

export { ColorModeProvider, useColorMode }
