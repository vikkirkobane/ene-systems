import React, { useState, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed hover:border-opacity-80',
  {
    variants: {
      variant: {
        default: 'focus:ring-orange-500 focus:border-orange-500',
        error: 'border-red-500 focus:ring-red-500 focus:border-red-500',
        success: 'border-green-500 focus:ring-green-500 focus:border-green-500',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-3 py-2',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface EditTextProps extends 
  Pick<React.InputHTMLAttributes<HTMLInputElement>, Exclude<keyof React.InputHTMLAttributes<HTMLInputElement>, 'size'>>,
  VariantProps<typeof inputClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right';
  text_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters (no defaults)
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
  
  // Standard React props
  variant?: 'default' | 'error' | 'success';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
  containerClassName?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "Email",
  text_font_size = "15",
  text_font_family = "Inter",
  text_font_weight = "400",
  text_line_height = "19px",
  text_text_align = "left",
  text_color = "#0000007f",
  border_border = "1 solid #0000007f",
  border_border_radius = "8px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  label,
  error,
  helperText,
  className,
  containerClassName,
  disabled = false,
  type = "text",
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';

  // Map style values to Tailwind classes
  const getFontSize = (size: string) => {
    if (size === "15") return "text-sm";
    return `text-[${size}px]`;
  };

  const getFontWeight = (weight: string) => {
    if (weight === "400") return "font-normal";
    return `font-[${weight}]`;
  };

  const getLineHeight = (height: string) => {
    if (height === "19px") return "leading-sm";
    return `leading-[${height}]`;
  };

  const getTextColor = (color: string) => {
    if (color === "#0000007f") return "text-text-secondary";
    return `text-[${color}]`;
  };

  const getBorderRadius = (radius: string) => {
    if (radius === "8px") return "rounded-sm";
    return `rounded-[${radius}]`;
  };

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    hasValidMargin ? `m-[${margin}]` : '',
  ].filter(Boolean).join(' ');

  // Build required Tailwind classes
  const requiredClasses = [
    getFontSize(text_font_size),
    `font-[${text_font_family}]`,
    getFontWeight(text_font_weight),
    getLineHeight(text_line_height),
    `text-${text_text_align}`,
    getTextColor(text_color),
    `border-[${border_border}]`,
    getBorderRadius(border_border_radius),
  ].join(' ');

  // Determine variant based on error state
  const inputVariant = error ? 'error' : variant;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <div className={twMerge('flex flex-col', containerClassName)}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={twMerge(
          inputClasses({ variant: inputVariant, size }),
          requiredClasses,
          optionalClasses,
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
        {...props}
      />
      {error && (
        <span 
          id={`${props.id}-error`}
          className="text-sm text-red-600 mt-1"
          role="alert"
        >
          {error}
        </span>
      )}
      {helperText && !error && (
        <span 
          id={`${props.id}-helper`}
          className="text-sm text-gray-500 mt-1"
        >
          {helperText}
        </span>
      )}
    </div>
  );
});

EditText.displayName = 'EditText';

export default EditText;