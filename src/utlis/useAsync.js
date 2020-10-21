import React from 'react'
import useSafeDispatch from './useSafeDispatch'

const defaultInitialState = { status: 'idle', data: null, error: null }
function useAsync(initialState) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  })
  const [{ status, data, error }, dispatch] = React.useReducer(
    (state, action) => ({ ...state, ...action }),
    initialStateRef.current
  )
  const [cache, setCache] = React.useState([])

  const safeDispatch = useSafeDispatch(dispatch)

  const run = React.useCallback(
    (promise, key) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        )
      }
      // promise is being invoked when the run() is called
      // api call already happened
      if (key && cache.filter((x) => x.key === key)[0]) {
        return new Promise((res, rej) => {
          safeDispatch({
            data: cache.filter((x) => x.key === key)[0].data,
            status: 'cached',
          })
          return cache.filter((x) => x.key === key)[0].data
        })
      }
      safeDispatch({ status: 'pending' })
      return promise.then(
        (data) => {
          safeDispatch({ data, status: 'resolved' })

          setCache((c) => {
            const obj = {
              key,
              data,
            }
            const _c = c
            const i = _c.findIndex((x) => x.key === key)
            if (i > -1) {
              _c[i] = obj
              return _c
            }
            _c.push(obj)
            return _c
          })

          return data
        },
        (error) => {
          safeDispatch({ status: 'rejected', error })
          return error
        }
      )
    },
    [safeDispatch]
  )

  const setData = React.useCallback((data) => safeDispatch({ data }), [
    safeDispatch,
  ])
  const setError = React.useCallback((error) => safeDispatch({ error }), [
    safeDispatch,
  ])
  const reset = React.useCallback(() => safeDispatch(initialStateRef.current), [
    safeDispatch,
  ])

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export default useAsync
