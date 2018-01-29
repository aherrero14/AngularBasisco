import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from '../../models/owner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {

  public owners: Array<Owner>;

  constructor(private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(
      data => { this.owners = data; }
    );
  }

  onSelect(owner: Owner) {
    this.router.navigate(['/owners', owner.id]);
  }
}


