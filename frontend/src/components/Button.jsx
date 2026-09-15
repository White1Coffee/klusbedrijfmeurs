
const variants = {
  primary:
    "bg-green-700 text-white hover:bg-green-800 focus:ring-green-500",
  secondary:
    "bg-white text-green-800 border border-green-200 hover:bg-green-50 focus:ring-green-500",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg px-5 py-3
        font-semibold
        transition duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
