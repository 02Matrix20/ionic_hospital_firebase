import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataGetterService, UserGroup } from "../../services/data-getter.service";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
})
export class UserGroupComponent implements OnInit {

  @Input() userGroup: UserGroup;
  @Input() isNew: boolean;
  @Output() addUserGroup = new EventEmitter();
  @Output() cancelAddingUserGroup = new EventEmitter();
  title: string;

  constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
    if(this.isNew) {
      this.userGroup = {
        id: null,
        docName: '',
        name: '',
        year: null
      };
      this.title = 'Новий пацієнт';
    }
  }

  addNew() {
    if(this.isNew) {
      this.addUserGroup.emit(this.userGroup);
    }
  }

  cancelAdding() {
    if(this.isNew) {
      this.cancelAddingUserGroup.emit();
    }
  }

  saveUserGroup() {
    this.dataGetter.editUserGroup(this.userGroup).subscribe(
      data => console.log(data)
    );
  }
}
