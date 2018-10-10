
import { Pet } from './pet';

export interface Owner {
  id: number;
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  telephone: string;
  pets: Pet[];
}



