import { mount } from 'react_module/ReactModule'
import React, { useRef, useEffect } from 'react'

export default () => {
  const ref = useRef(null);
  const mountedRef = useRef(false)

  useEffect(() => {
    if (!mountedRef.current) {
      mount(ref.current)
      mountedRef.current = true
    }
  }, [mountedRef])

  return <div ref={ref} />
}