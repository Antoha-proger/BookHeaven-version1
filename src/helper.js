import { useRootStore } from './stores/store'

const store = useRootStore()

export function closeNewsModalWindow() {
  store.isNewsModalShow = false
}

export function openNewsModalWindow(event) {
  store.isNewsModalShow = true

  const newId = event.target.id

  store.selectedNew = store.news[newId]

  // console.log(newId)
}
