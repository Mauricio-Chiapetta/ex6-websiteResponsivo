export function Button({ type, title }) {
  return (
    <button
      className="p-2 bg-indigo-600 rounded-xl w-36 text-neutral-100 font-medium hover:bg-indigo-500 transition duration-300"
      type={type}
    >
      {title}
    </button>
  );
}
