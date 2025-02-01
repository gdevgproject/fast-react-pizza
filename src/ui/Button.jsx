import { Link } from 'react-router'

export default function Button({ children, disabled, to, type = 'primary', onClick }) {
  const base =
    'rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed text-sm '

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 sm:px-5 sm:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm',
    secondary:
      'rounded-full font-semibold tracking-wide text-stone-400 border-2 border-stone-300 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-300 hover:text-stone-800 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5 focus:text-stone-800 text-sm'
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
