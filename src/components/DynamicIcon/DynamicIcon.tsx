import Icon from '@mui/material/Icon'
import type { DynamicIconProps } from './DynamicIcon.types'

export function DynamicIcon({ iconName, className = '' }: DynamicIconProps) {
  return (
    <Icon className={className} sx={{ fontSize: 'inherit', color: 'inherit' }}>
      {iconName}
    </Icon>
  )
}
