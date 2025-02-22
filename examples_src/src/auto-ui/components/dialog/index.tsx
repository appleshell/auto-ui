import cn from 'classnames'
import * as React from 'react'
import { createPortal } from 'react-dom'
import IconClose from '../icon/close_s'
import Modal from '../modal/index'
import './style/index.scss'

interface IProps {
  className?: string
  height?: number | string
  visible?: boolean
  onMaskClick?: () => void
  onCloseClick?: () => void
  addonTop?: React.ReactNode
  addonBottom?: React.ReactNode
  [otherProps: string]: any
}

class Dialog extends React.Component<IProps> {
  static Scroller: React.FC<IScrollerProps>
  private div: Element | undefined = void 0

  constructor(props: IProps) {
    super(props)
    this.div = document.createElement('div')
    this.div.classList.add('_x_dialog_')
    document.body.appendChild(this.div)
  }

  componentWillUnmount() {
    if (this.div) {
      document.body.removeChild(this.div)
    }
  }

  content() {
    const {
      className,
      height,
      visible,
      children,
      onMaskClick,
      onCloseClick,
      ...otherProps
    } = this.props

    const composeClassName = cn('x-dialog', className)

    return (
      <Modal
        {...otherProps}
        visible={visible}
        height={height}
        onMaskClick={onMaskClick}
        className={composeClassName}
      >
        {onCloseClick && (
          <button className="x-dialog__close" onClick={onCloseClick}>
            <IconClose />
          </button>
        )}
        <div className="x-dialog__inner">{children}</div>
      </Modal>
    )
  }

  render() {
    return this.div && createPortal(this.content(), this.div)
  }
}

interface IScrollerProps {
  className?: string
  [otherProps: string]: any
}

const Scroller: React.FC<IScrollerProps> = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-dialog__scroller', className)

  return (
    <div {...otherProps} className={composeClassName}>
      <div className="x-dialog__inscroller">{children}</div>
    </div>
  )
}

Dialog.Scroller = Scroller

export default Dialog
