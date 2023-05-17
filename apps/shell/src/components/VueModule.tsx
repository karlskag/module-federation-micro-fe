import { mount } from 'vue_module/VueModule'
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