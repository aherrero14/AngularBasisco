import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../owner.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Owner} from '../../models/owner';
import {Pet} from '../../models/pet';
import {Visit} from '../../models/visit';

@Component({
  selector: 'app-detail-owner',
  templateUrl: './detail-owner.component.html',
  styleUrls: ['./detail-owner.component.css']
})
export class DetailOwnerComponent implements OnInit {

  errorMessage: string;
  owner: Owner;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService) {  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(ownerId).subscribe(
      owner => this.owner = owner,
      error => this.errorMessage = <any> error);
  }


}

