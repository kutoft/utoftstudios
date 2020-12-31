import React from 'react'

function useMatchMedia(initialState, query) {
  const [state, setState] = React.useState(() => {
    if (typeof initialState === 'function') {
      return initialState()
    }
    return initialState
  })

  const matchMedia = React.useCallback(() => {
    if (!query) {
      throw new Error('Must pass a media query')
    }
    return window.matchMedia(query)
  }, [query])

  React.useEffect(() => {
    if (!query) {
      throw new Error('Must pass a media query')
    }

    const eventListener = (ev) => {
      if (ev.matches) {
        setState(true)
        return
      }
      setState(false)
    }

    window.matchMedia(query).addEventListener('change', eventListener)

    return () =>
      window.matchMedia(query).removeEventListener('change', eventListener)
  }, [query])

  return { state, setState }
}

export default useMatchMedia
