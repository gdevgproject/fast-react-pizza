import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import { getUser } from '../users/userSlice'
import CartItem from './CartItem'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
  const cart = useSelector(getCart)
  const username = useSelector(getUser)
  const dispatch = useDispatch()

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b border-stone-200'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className='mt-9 space-x-2'>
        <Button to='/order/new' type='primary'>
          Order pizzas
        </Button>
        <Button type='secondary' onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
