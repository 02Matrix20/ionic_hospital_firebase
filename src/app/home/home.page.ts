import { Component } from '@angular/core';
import { DataGetterService, UserGroup } from "../services/data-getter.service";
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userGroups: UserGroup[];
  userName: string;

  showNew = false;
  showEdit = -1;
  title = 'Hospital'

  constructor(private dataGetter: DataGetterService,
              private sharedData: SharedDataService) {
    this.dataGetter.getUserGroups().subscribe(
      (data) => {
        this.userGroups = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  ionViewDidEnter() {
    if (this.sharedData.getTextData() != '') {
      this.title = this.sharedData.getTextData();
    }
  }

  add() {
    this.showNew = true;
  }

  delete(userGroup){
    this.dataGetter.deleteUserGroup(userGroup).subscribe(
      res => {
        this.dataGetter.getUserGroups().subscribe(
          (data) => {
            this.userGroups = data;
          }
        );
      }
    );
  }

  addUserGroup(newUserGroup){
    this.dataGetter.addUserGroup(newUserGroup).subscribe(
      res => {
        this.dataGetter.getUserGroups().subscribe(
          (data) => {
            this.userGroups = data;
          }
        );
      }
    );
    this.showNew = false;
  }
}
