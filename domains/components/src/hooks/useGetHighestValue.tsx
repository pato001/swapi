import { useEffect, useState } from 'react'

// TYPES
type HighestItemProps = {
  key: IDBValidKey | null
  value: number
}

const useGetHighestValue = (storeName: string): HighestItemProps => {
  const [highestItem, setHighestItem] = useState<HighestItemProps>({
    key: null,
    value: 0
  })

  useEffect(() => {
    const worker = new Worker(new URL('../workers/worker.js', import.meta.url))

    worker.addEventListener('message', event => {
      const { key, value, error } = event.data
      if (error) {
        console.error('Error fetching highest value item')
        return
      }
      setHighestItem({ key, value })
    })

    worker.postMessage({ objectStoreName: storeName })

    return () => {
      worker.terminate()
    }
  }, [storeName])

  return highestItem
}

export default useGetHighestValue
