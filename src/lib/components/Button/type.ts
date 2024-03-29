export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: string;
}
