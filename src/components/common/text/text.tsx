import React from 'react'
import classNames from 'classnames'

import './text.scss'

interface IProps {
  type: 'p' | 's' | 'header'
  className?: string
  children: React.ReactNode
}

const Text: React.FC<IProps> = (props) => {
  const { type, className, children, ...rest } = props

  return (
    <p
      className={classNames({
			  'text': true,
			  [`text_${type}`]: true,
			  [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </p>
  )
}

Text.defaultProps = {
  'className': '',
}

export default Text
