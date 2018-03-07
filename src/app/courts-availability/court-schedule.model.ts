import { Court } from './court.model';

export interface CourtSchedule {
  day: Date;
  court: Court;
  entries: Entry[];
}

export interface Entry {
  id: string;
  start: Date;
  end: Date;
  description: string;
}

export interface CourtTime {
  court: Court;
  startTime: Date;
}
