import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  success?: boolean;
  whitePrimary?: boolean;
  danger?: boolean;
  normal?: boolean;
  whiteSecondary?: boolean;
  color?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}
