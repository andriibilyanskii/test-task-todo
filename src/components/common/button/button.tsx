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
  buttonType?: 'default' | 'round' | 'transparent' | 'tag'
}

const Button: React.FC<IProps> = (props) => {
  const { children, className, buttonType, ...rest } = props

  return (
    <button
      className={classNames({
			  'button': true,
        [`button_${buttonType}`]: true,
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
  'buttonType': 'default',
}

export default Button
