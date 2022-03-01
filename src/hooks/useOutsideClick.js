import { useEffect, useRef } from 'react'

const useOutsideClick = (callback) => {
  const ref = useRef()

  const handle = (event) => {
    if (!ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handle, true)

    return () => document.removeEventListener('click', handle, true)
  })

  return ref
}

export default useOutsideClick
