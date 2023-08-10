import * as Tooltip from '@radix-ui/react-tooltip'

import './styles.css'

export const TooltipContent = ({ title, ...props }) => {
  return (
    <Tooltip.Portal>
      <Tooltip.Content
        {...props}
        className={`tooltip_wrapper ${props.className}`}
        side="top"
        align="end"
        alignOffset={-45}
        sideOffset={10}
      >
        <span>{title}</span>
        <Tooltip.Arrow className="tooltip_arrow" />
      </Tooltip.Content>
    </Tooltip.Portal>
  )
}
