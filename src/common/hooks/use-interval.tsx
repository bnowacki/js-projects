import * as React from 'react'

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef<() => void | null>()
  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  })
  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
