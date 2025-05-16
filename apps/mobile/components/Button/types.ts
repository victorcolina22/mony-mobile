import { TouchableOpacityProps } from 'react-native';

/**
 * Props for the Button component
 * @interface ButtonProps
 * @extends {TouchableOpacityProps} - Extends all props from React Native's TouchableOpacity
 */
export interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  variant?: ButtonVariants;
}

/**
 * Available button style variants
 * @typedef {('primary'|'secondary')} ButtonVariants
 */
export type ButtonVariants = 'primary' | 'secondary';
