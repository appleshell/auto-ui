import cn from 'classnames'
import * as React from 'react'
import IconCheck from '../icon/check'
import IconClose from '../icon/close'
import './style/index.scss'

interface IProps {
  i?: string
  o?: string
  active: boolean
  icon?: boolean
  disabled?: boolean
  className?: string
  children?: null
  onChange: (checked: boolean) => void
  [otherProps: string]: any
}

const Switch: React.FC<IProps> = props => {
  const { i, o, active, icon, disabled, className, onChange, ...otherProps } = props

  const composeClassName = cn(
    'x-switch',
    {
      'x-switch--active': active,
      'x-switch--io': i && o,
      'x-switch--disabled': disabled,
    },
    className,
  )

  const hasIO: boolean = !!i && !!o

  const onClick = () => {
    if (disabled || !onChange) {
      return
    }
    onChange(!active)
  }

  return (
    <button {...otherProps} className={composeClassName} onClick={onClick}>
      {hasIO && <sub>{props.i}</sub>}
      {hasIO && <sup>{props.o}</sup>}
      <em>
        {icon && !active && <IconClose />}
        {icon && active && <IconCheck />}
      </em>
    </button>
  )
}

export default Switch
