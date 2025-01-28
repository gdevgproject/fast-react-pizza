import { Link } from 'react-router'

export default function Button({ children, disabled, to }) {
  const className =
    'rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4'

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}
