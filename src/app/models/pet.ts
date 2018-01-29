import {Owner} from './owner';
import {Visit} from './visit';
import {PetType} from './pettype';
export interface Pet {
  id: number;
  name: string;
  birthDate: string;
  type: PetType;
  owner: Owner;
  visits: Visit[];
}


