import React, { CSSProperties } from 'react'
import classNames from 'classnames'

import './input.scss'

interface IProps {
  value: string
  onChange: (e: any) => void
  placeholder?: string
  className?: string
  padding?: string
  style?: CSSProperties
  maxLength?: number
}

const Input: React.FC<IProps> = (props) => {
  const { onChange, className, ...rest } = props

  return (
    <input
      className={classNames({
			  'input': true,
			  [className || '']: Boolean(className),
      })}
      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
			  onChange(event?.target?.value)
      }}
      {...rest}
    />
  )
}

Input.defaultProps = {
  'className': '',
  'padding': '0rem',
}

export default Input
