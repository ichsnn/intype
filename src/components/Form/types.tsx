import React from 'react';

export interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export interface FormSelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label?: string;
  options: OptionProps[];
}

export interface OptionProps {
  label: string;
  value: string;
  selected?: boolean;
}

export type RefInputType = React.LegacyRef<HTMLInputElement> | undefined;
export type RefSelectType = React.LegacyRef<HTMLSelectElement> | undefined;
