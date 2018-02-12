import { Court } from './court.model';

export interface CourtSchedule {
  day: Date;
  court: Court;
  events: Event[];
}

export interface Event {
  id: string;
  start: Date;
  end: Date;
  description: string;
}
