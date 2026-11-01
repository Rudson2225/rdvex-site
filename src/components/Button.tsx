import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }
type Props = ButtonAsButton | ButtonAsLink

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant = 'primary', size = 'md', fullWidth = false, loading, leftIcon, rightIcon, className = '', children, as = 'button', ...rest }, ref) => {
    const classes = [
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      fullWidth ? 'btn-full' : '',
      className
    ].filter(Boolean).join(' ')

    if (as === 'a') {
      return (
        <a ref={ref as any} className={classes} aria-busy={loading ? 'true' : undefined} {...rest as any}>
          {loading ? <span className="btn-spinner" aria-hidden /> : leftIcon}
          <span>{children}</span>
          {!loading && rightIcon}
        </a>
      )
    }
    return (
      <button ref={ref as any} className={classes} disabled={loading || (rest as any).disabled} aria-busy={loading ? 'true' : undefined} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {loading ? <span className="btn-spinner" aria-hidden /> : leftIcon}
        <span>{children}</span>
        {!loading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
