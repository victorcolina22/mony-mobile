import { ButtonVariants } from './types';

/**
 * Maps button variants to their background color classes
 * @constant {Record<ButtonVariants, string>} VARIANTS
 */
export const VARIANTS: Record<ButtonVariants, string> = {
  primary: 'bg-mony-gray',
  secondary: 'bg-mony-white',
};

/**
 * Maps button variants to their text color classes
 * @constant {Record<ButtonVariants, string>} TEXT_VARIANTS
 */
export const TEXT_VARIANTS: Record<ButtonVariants, string> = {
  primary: 'text-mony-white',
  secondary: 'text-mony-gray',
};
