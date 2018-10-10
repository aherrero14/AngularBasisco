import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getOwners() {
    return this.httpClient.get<Owner[]>('http://svq-gkmbz42:9966/petclinic/api/owners');
  }

  getOwnerById(id) {
    return this.httpClient.get<Owner>('http://svq-gkmbz42:9966/petclinic/api/owners/' + id);
  }

  addOwner(owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.post<Owner>('http://svq-gkmbz42:9966/petclinic/api/owners', owner, { headers });
  }

}


