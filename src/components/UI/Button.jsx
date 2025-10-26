import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className = ""
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";

  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
    ghost:
      "text-indigo-600 hover:bg-indigo-50 disabled:text-gray-400 disabled:hover:bg-transparent disabled:cursor-not-allowed"
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  };

  const styles = `
    ${baseStyles}
    ${variantStyles[variant] || ""}
    ${sizeStyles[size] || ""}
    ${className}
  `.trim();

  return (
    <button
      className={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
