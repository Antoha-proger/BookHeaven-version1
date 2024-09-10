import { useRootStore } from './stores/store'

const store = useRootStore()

export function closeNewsModalWindow() {
  store.isModalShow = false
}

export function openNewsModalWindow(event) {
  store.isModalShow = true

  const newId = event.target.id

  console.log(newId)
}
