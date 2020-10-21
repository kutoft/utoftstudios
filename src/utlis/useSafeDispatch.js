import React from 'react'

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)
  // TODO: NEXT JS THROWING A CONSOLE ERROR BECAUSE I WAS USING USELAYOUTEFFECT
  React.useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  )
}

export default useSafeDispatch
