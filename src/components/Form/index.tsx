import { PropsWithChildren, forwardRef, useImperativeHandle } from 'react';
import { FormInputProps } from './types';
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
  (
    props: FormInputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ) => {
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

export function FormInputWrapper(props: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{props.children}</div>;
}
