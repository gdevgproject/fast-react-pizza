import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/users/Username'

export default function Header() {
  return (
    <header className='font-pizza flex justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6'>
      <Link to='/' className='tracking-widest'>
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  )
}
