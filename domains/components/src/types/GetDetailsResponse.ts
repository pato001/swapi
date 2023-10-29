import { Character } from './Character'
import { Film } from './Film'
import { Planet } from './Planet'
import { Specie } from './Specie'
import { Starship } from './Starship'
import { Vehicle } from './Vehicle'

export type GetDetailsResponse = Character &
  Film &
  Planet &
  Specie &
  Starship &
  Vehicle
