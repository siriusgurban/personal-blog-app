import { useLayoutEffect } from 'react'

export function useTitle(title: string) {
  useLayoutEffect(() => {
    document.title = title
  }, [title])
}

export default useTitle
