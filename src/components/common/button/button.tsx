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
  isRound?: boolean
}

const Button: React.FC<IProps> = (props) => {
  const { children, className, isRound, ...rest } = props

  return (
    <button
      className={classNames({
			  'button': true,
			  'button_round': isRound,
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
