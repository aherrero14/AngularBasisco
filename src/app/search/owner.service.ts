import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable()
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getOwners() {
    return this.httpClient.get<Owner[]>('http://localhost:9966/petclinic/api/owners');
  }

  getOwnerById(id) {
    return this.httpClient.get<Owner>('http://localhost:9966/petclinic/api/owners/' + id);
  }
}


