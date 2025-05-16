import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine Tailwind classes
 * @param {...ClassValue} inputs - An array of Tailwind classes
 * @returns {string} The combined Tailwind classes
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
