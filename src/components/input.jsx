export function Input({ name, placeholder, id, type }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required
      className="w-11/12 p-2 rounded-lg shadow-inner shadow-black/20 dark:bg-black dark:shadow-inner dark:shadow-neutral-600/25"
    ></input>
  );
}
