function Event () {
  let store = {}
  const getState = () => store
  const dispatch = (type, ...args) => {
    store[type].forEach(i => i(...args))
  }
  const subscribe = (type, payload) => {
    store[type] = store[type] || []
    store[type].push(payload)
  }
  return {
    dispatch,
    getState,
    subscribe
  }
}

export default Event()
