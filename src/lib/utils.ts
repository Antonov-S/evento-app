import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FETCH_URL } from "./constants";
import { EventoEvent } from "@/app/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function getEvents(city: string) {
  const response = await fetch(`${FETCH_URL}?city=${city}`);
  const events: EventoEvent[] = await response.json();

  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(`${FETCH_URL}/${slug}`);
  const event = await response.json();

  return event;
}
