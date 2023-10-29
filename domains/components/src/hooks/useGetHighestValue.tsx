import { useEffect, useState } from 'react'
import { createStore, get, keys } from 'idb-keyval'

type highestItemProps = {
  key: IDBValidKey
  value: number
}
const useGetHighestValue = (storeName: string) => {
  const [highestItem, setHighestItem] = useState<highestItemProps>({
    key: 0,
    value: 0
  })
  const customStore = createStore(storeName, 'keyval')

  useEffect(() => {
    const fetchHighestItem = async () => {
      try {
        const allKeys = await keys(customStore)
        let highestValue = -Infinity
        let highestItemKey = null
        for (const key of allKeys) {
          const value = await get(key, customStore)
          if (value > highestValue) {
            highestValue = value
            highestItemKey = key
          }
        }

        if (highestItemKey) {
          const highestItemValue = await get(highestItemKey, customStore)
          setHighestItem({ key: highestItemKey, value: highestItemValue })
        }
      } catch (error) {
        console.error('Error fetching highest value item:', error)
      }
    }

    fetchHighestItem()

    // Cleanup function
    return () => {
      // Any cleanup code if necessary
    }
  }, [storeName])

  return highestItem
}

export default useGetHighestValue
