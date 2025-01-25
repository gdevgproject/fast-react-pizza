import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header className='bg-yellow-500'>
      <Link to='/'>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Minh</p>
    </header>
  )
}
