import { useSelector } from 'react-redux'

export const useStore = (name) => {
  return useSelector(state => state[name])
}
