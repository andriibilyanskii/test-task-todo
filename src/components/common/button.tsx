import React, { CSSProperties } from 'react'
import classNames from 'classnames'

import './button.scss'

interface IProps {
  children?: React.ReactNode
  onClick?: (e: any) => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  style?: CSSProperties
}

const Button: React.FC<IProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <button
      className={classNames({
			  'button': true,
			  [className || '']: Boolean(className),
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  'disabled': false,
  'type': 'button',
}

export default Button
