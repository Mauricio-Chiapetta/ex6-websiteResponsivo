export function Button({ type, title, className }) {
  return (
    <button
      type={type}
      className={`w-36 p-2 bg-indigo-600 rounded-xl text-neutral-100 font-medium hover:bg-indigo-500 transition duration-300 ${className}`}
    >
      {title}
    </button>
  );
}