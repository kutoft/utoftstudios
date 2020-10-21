import React from 'react'

function useNextId(data) {
  const [nextId, setNextId] = React.useState()

  const memoData = React.useMemo(() => data, [data])

  React.useEffect(() => {
    if (memoData) {
      const highestId = memoData
        .map((d) => d.id)
        .reduce((a, b) => Math.max(a, b), 0)
      setNextId(parseInt(highestId) + 1)
    } else {
      setNextId(0)
    }
  }, [memoData])

  return { nextId }
}

export default useNextId
