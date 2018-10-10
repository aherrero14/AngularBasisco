import { Component, OnInit } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  owner: Owner;
  errorMessage: string;

  constructor(private ownerService: OwnerService, private router: Router) {

  }

  ngOnInit() {
    this.owner = <Owner>{};
  }

  onSubmit(owner: Owner) {
    owner.id = null;
    this.ownerService.addOwner(owner).subscribe(
      new_owner => {
        this.owner = new_owner;
        this.gotoOwnersList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoOwnersList() {
    this.router.navigate(['/owners']);
  }

}


