import { PropsWithChildren, forwardRef, useImperativeHandle } from 'react';
import {
  FormInputProps,
  FormSelectProps,
  RefInputType,
  RefSelectType,
} from './types';
import cn from 'classnames';

export function Form(
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) {
  return <form {...props}>{props.children}</form>;
}

export const FormInput = forwardRef(
  (props: FormInputProps, ref: RefInputType) => {
    return (
      <>
        {props.label && (
          <label
            htmlFor={props.id}
            className={cn('font-bold', {
              "after:content-['*'] after:text-red-500": props.required,
            })}
          >
            {props.label}
            &nbsp;
          </label>
        )}
        <input
          {...props}
          ref={ref}
          className="border border-slate-900 px-3 py-2 text-base rounded-lg shadow-inner"
        />
      </>
    );
  }
);

// export const FormSelect = (props: FormSelectProps) => {
//   return <select {...props}></select>
// }

export const FormSelect = forwardRef(
  ({ options, ...props }: FormSelectProps, ref: RefSelectType) => {
    return (
      <>
        {props.label && (
          <label
            htmlFor={props.id}
            className={cn('font-bold', {
              "after:content-['*'] after:text-red-500": props.required,
            })}
          >
            {props.label}
            &nbsp;
          </label>
        )}
        <select
          {...props}
          ref={ref}
          className="border border-slate-900 px-3 py-2 text-base rounded-lg shadow-inner"
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={option.selected}
            >{option.label}</option>
          ))}
        </select>
      </>
    );
  }
);

export function FormInputWrapper(props: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{props.children}</div>;
}
