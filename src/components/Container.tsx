import { HTMLAttributes, forwardRef } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & { narrow?: boolean }

export const Container = forwardRef<HTMLDivElement, Props>(
  ({ narrow = false, className = '', ...rest }, ref) => {
    const classes = ['container', narrow ? 'container-narrow' : '', className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...rest} />
  }
)

Container.displayName = 'Container'
