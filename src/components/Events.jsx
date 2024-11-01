// Events.js
import { eventsData } from "../eventsData";

export function Events() {
  return (
    <div className="grid grid-cols-2 gap-4 grid-rows-4 p-5">
      {eventsData.map((event, index) => (
        <div
          key={index}
          className=" bg-white p-4 rounded-lg drop-shadow-md text-left dark:dark:bg-zinc-950  dark:shadow-neutral-900"
        >
          <h3 className="font-semibold mb-3">
            {event.time} - {event.title}
          </h3>
          <p>
            {event.speaker}: {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}
