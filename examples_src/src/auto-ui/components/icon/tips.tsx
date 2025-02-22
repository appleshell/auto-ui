import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

interface IProps {
  className?: string
}

const IconTips: React.FC<IProps> = props => {
  return (
    <svg
      className={cn('x-icon', props.className)}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <path d="M512 987.751C249.685 987.751 36.249 774.35 36.249 512 36.249 249.685 249.685 36.249 512 36.249c262.349 0 475.751 213.402 475.751 475.751S774.35 987.751 512 987.751z m0-883.236C287.3 104.515 104.515 287.3 104.515 512c0 224.667 182.784 407.485 407.485 407.485 224.667 0 407.485-182.784 407.485-407.485S736.667 104.515 512 104.515z" />
      <path d="M460.8 290.133c0 28.278 22.923 51.2 51.2 51.2s51.2-22.922 51.2-51.2-22.923-51.2-51.2-51.2-51.2 22.923-51.2 51.2zM512 785.067c-18.843 0-34.133-15.257-34.133-34.134v-307.2c0-18.842 15.29-34.133 34.133-34.133s34.133 15.29 34.133 34.133v307.2c0 18.877-15.29 34.134-34.133 34.134z" />
    </svg>
  )
}

export default IconTips
