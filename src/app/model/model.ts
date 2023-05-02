export type Person = {
    name: string
    bornDate: string
    deathDate: string
  };

export interface GraveDetails {
    location: string
    note: string
    persons: Person[]
}