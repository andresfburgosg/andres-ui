import type { ButtonProps } from './Button.types'
import { buttonVariants } from './Button.variants'
import { DynamicIcon } from './../DynamicIcon/DynamicIcon'
import { cn } from './../../lib/cn'

function ButtonIcon({ icon, prevIcon }: { icon: boolean; prevIcon: string }) {
  return (
    <>
      {prevIcon !== '' ? (
        <DynamicIcon iconName={prevIcon} className={!icon ? 'mr-2' : ''} />
      ) : (
        icon === true && <DynamicIcon iconName="question_mark" />
      )}
    </>
  )
}

export function Button({
  variant,
  size,
  density,
  fullWidth,
  rounded,
  elevation,
  loading = false,
  disabled,
  icon = false,
  prevIcon = '',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-busy={loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          density,
          fullWidth,
          rounded,
          elevation,
          icon
        }),
        className
      )}
    >
      {loading && (
        <span
          aria-hidden="true"
          className={`${!icon ? 'mr-2' : ''} size-4 animate-spin rounded-full border-2 border-current border-t-transparent`}
        />
      )}
      {!loading && <ButtonIcon icon={icon} prevIcon={prevIcon} />}
      {!icon && children}
    </button>
  )
}
