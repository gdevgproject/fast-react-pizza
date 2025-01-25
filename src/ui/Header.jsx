import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/users/Username'

export default function Header() {
  return (
    <header className='bg-yellow-500 uppercase'>
      <Link to='/' className='tracking-widest'>
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  )
}
