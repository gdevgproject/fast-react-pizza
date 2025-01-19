import { useLoaderData } from 'react-router'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  const menu = useLoaderData()

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

// Không gây side effect vì loader chạy ở App.jsx và loader có thể đặt ở bất kỳ đâu
export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
