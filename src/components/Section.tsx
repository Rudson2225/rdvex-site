import { HTMLAttributes, forwardRef } from 'react'

type Props = HTMLAttributes<HTMLElement> & { alt?: boolean; id?: string }

export const Section = forwardRef<HTMLElement, Props>(
  ({ alt = false, className = '', ...rest }, ref) => {
    const classes = ['section', alt ? 'section-alt' : '', className].filter(Boolean).join(' ')
    return <section ref={ref} className={classes} {...rest} />
  }
)

Section.displayName = 'Section'
