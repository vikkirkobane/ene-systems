import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-orange-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-orange-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right' | 'justify';
  text_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters (no defaults)
  fill_background_color?: string;
  effect_box_shadow?: string;
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  // Required parameters with defaults
  text = "Watch Demo Videos",
  text_font_size = "15",
  text_font_family = "Inter",
  text_font_weight = "600",
  text_line_height = "19px",
  text_text_align = "left",
  text_color = "#ffffff",
  border_border = "2 solid #ffffff",
  border_border_radius = "18px",
  
  // Optional parameters (no defaults)
  fill_background_color,
  effect_box_shadow,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidBackgroundColor = fill_background_color && typeof fill_background_color === 'string' && fill_background_color.trim() !== '';
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Map style values to Tailwind classes
  const getFontSize = (size: string) => {
    if (size === "15") return "text-sm";
    return `text-[${size}px]`;
  };

  const getFontWeight = (weight: string) => {
    if (weight === "600") return "font-semibold";
    return `font-[${weight}]`;
  };

  const getLineHeight = (height: string) => {
    if (height === "19px") return "leading-sm";
    return `leading-[${height}]`;
  };

  const getTextColor = (color: string) => {
    if (color === "#ffffff") return "text-text-white";
    return `text-[${color}]`;
  };

  const getBorderRadius = (radius: string) => {
    if (radius === "18px") return "rounded-md";
    return `rounded-[${radius}]`;
  };

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidBackgroundColor ? `bg-[${fill_background_color}]` : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
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

  // Safe click handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        requiredClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;