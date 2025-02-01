import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'

export default function Username() {
  const username = useSelector(selectUser)
  if (!username) return null
  return <div className='hidden text-sm font-semibold md:block'>{username}</div>
}
