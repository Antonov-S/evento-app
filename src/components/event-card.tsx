import { EventoEvent } from "@/app/lib/types";

type EventCardProp = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProp) {
  return <section>{event.name}</section>;
}
