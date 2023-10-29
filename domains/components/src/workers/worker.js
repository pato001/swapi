let highestValue = { id: 0, value: 0 }

onmessage = function (event) {
  const { objectStoreName } = event.data
  // Open a connection to the IndexedDB
  const request = indexedDB.open(objectStoreName)

  request.onupgradeneeded = function (event) {
    const db = event.target.result

    // Create an object store if it doesn't exist
    if (!db.objectStoreNames.contains(objectStoreName)) {
      db.createObjectStore(objectStoreName, { keyPath: 'id' })
    }
  }

  request.onsuccess = function (event) {
    const db = event.target.result
    // Access the object store
    const transaction = db.transaction('keyval', 'readonly')
    const objectStore = transaction.objectStore('keyval')
    // Open a cursor to iterate through all entries
    const cursorRequest = objectStore.openCursor()
    cursorRequest.onsuccess = function (event) {
      const cursor = event.target.result
      if (cursor) {
        const { value } = cursor
        if (value > highestValue.value) {
          highestValue = { value: cursor.value, key: cursor.key }
        }
        cursor.continue()
      } else {
        postMessage(highestValue)
      }
    }
  }

  // Handle any error events
  request.onerror = function (event) {
    console.log('Error:', event.target.error)
  }

  // Close the database connection
  request.onblocked = function () {
    console.log('Database connection blocked')
  }
}
