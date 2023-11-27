import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  cloneElement,
  forwardRef,
} from 'react'
import { FieldValues } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element
  name: string
  label?: string
  error?: FieldValues
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon: Icon, error = null, ...rest },
  ref,
) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-gray-200 text-sm">
          {label}
        </label>
      )}
      <div
        className={`${
          error
            ? 'border border-red-300 rounded-lg h-11 flex items-center gap-2 pl-2 pr-2 bg-white'
            : 'border border-gray-100 rounded-lg h-11 flex items-center gap-2 pl-2 pr-2 bg-white'
        }`}
      >
        {error && Icon
          ? cloneElement(Icon, { size: 20, color: '#F35663' })
          : Icon && cloneElement(Icon, { size: 20, color: '#A1AFCB' })}
        <input
          name={name}
          autoComplete="none"
          className="bg-transparent text-base text-gray-200"
          ref={ref}
          {...rest}
        />
      </div>
      {!!error && (
        <div className="text-red-400 text-xs pl-2">{error.message}</div>
      )}
    </>
  )
}
export const Input = forwardRef(InputBase)
