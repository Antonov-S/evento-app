import { EventoEvent } from "@/app/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section>
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}
