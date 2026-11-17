import { cva } from 'class-variance-authority'

export const buttonVariants = cva(['btn'], {
  variants: {
    variant: {
      default: 'btn-default',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      tertiary: 'btn-tertiary',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
      info: 'btn-info'
    },
    size: {
      xs: 'btn-size-xs',
      sm: 'btn-size-sm',
      md: 'btn-size-md',
      lg: 'btn-size-lg',
      xl: 'btn-size-xl'
    },
    density: {
      reduced: 'btn-density-reduced',
      comfortable: 'btn-density-comfortable',
      default: 'btn-density-default'
    },
    fullWidth: {
      true: 'w-full',
      false: ''
    },
    rounded: {
      zero: 'rounded-zero',
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      default: 'rounded-default',
      lg: 'rounded-lg',
      xl: 'rounded-xl'
    },
    elevation: {
      0: 'btn-elevation-0',
      2: 'btn-elevation-2',
      3: 'btn-elevation-3',
      4: 'btn-elevation-4',
      5: 'btn-elevation-5'
    },
    icon: {
      true: 'btn-icon',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    density: 'default',
    fullWidth: false,
    rounded: 'default',
    elevation: 2,
    icon: false
  }
})
