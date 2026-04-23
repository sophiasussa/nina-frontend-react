export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition px-4 py-2";

  const variants = {
    default: "bg-[#84D1D0] text-white hover:bg-[#6bbcbc]",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
