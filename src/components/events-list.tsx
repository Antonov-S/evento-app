import { EventoEvent } from "@/app/lib/types";
import EventCard from "./event-card";
import { sleep } from "@/lib/utils";
import { FETCH_URL } from "@/lib/constants";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  await sleep(2000);

  const response = await fetch(`${FETCH_URL}?city=${city}`);
  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}
