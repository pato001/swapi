import { Character } from './Character'
import { Film } from './Film'
import { Planet } from './Planet'
import { Specie } from './Specie'
import { Starship } from './Starship'
import { Vehicle } from './Vehicle'

export type GetListResponse = {
  count: number
  next: string
  previous: string
  results: Character[] | Film[] | Planet[] | Specie[] | Starship[] | Vehicle[]
}
