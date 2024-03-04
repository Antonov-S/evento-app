import { EventoEvent } from "@/app/lib/types";
import { FETCH_URL } from "@/lib/constants";
import EventCard from "./event-card";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const response = await fetch(`${FETCH_URL}?city=${city}`, {
    next: {
      revalidate: 300
    }
  });
  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}
