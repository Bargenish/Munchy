import { Component, OnInit, Input } from '@angular/core';
import { DALService } from '../../../../services/dal.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  public opened: boolean = false;
  @Input() public id: string;
  constructor(private dal: DALService) { }

  ngOnInit() {
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
    if (status=="yes") {
      this.dal.deleteEntity("seller", this.id);
    }
  }

  public open() {
    this.opened = true;
  }
}
