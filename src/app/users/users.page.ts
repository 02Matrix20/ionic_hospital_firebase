import { Component, OnInit } from '@angular/core';
import { DataGetterService } from "../services/data-getter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  userGroupId: number;
  userGroupName: string;
  users: any[];

  textData: string;

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedData: SharedDataService) {
      this.userGroupId = +this.route.snapshot.paramMap.get('userGroupId');
    }

  ngOnInit() {
    this.userGroupName = this.route.snapshot.paramMap.get('userGroupName');
    this.dataGetter.getUsers(this.userGroupId).subscribe(
      data => {
        this.users = data;
      }
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

}
