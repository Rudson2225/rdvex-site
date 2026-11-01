import { HTMLAttributes, forwardRef } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ hover = true, padding = 'md', className = '', ...rest }, ref) => {
    const pad = padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6'
    const classes = ['card', pad, hover ? 'card-hover' : '', className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...rest} />
  }
)

Card.displayName = 'Card'
