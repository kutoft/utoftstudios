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

    window.matchMedia(query).addEventListener('change', (ev) => {
      if (ev.matches) {
        setState('dark')
      }
    })

    return () => window.matchMedia(query).removeEventListener('change')
  }, [query])

  return { state, setState }
}

export default useMatchMedia
