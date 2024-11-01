export function Card({ imgSrc, name, tech }) {
  return (
    <div className="bg-white p-9 rounded-lg shadow-lg h-64 flex flex-col items-center w-96 mb-14 dark:bg-zinc-950 dark:shadow-neutral-900">
      <img className="rounded-full mb-2" src={imgSrc} alt={tech} />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-500">{tech}</p>
    </div>
  );
}
