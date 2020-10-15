import { Component, OnInit, HostListener } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(private tools: CommService) { }

  ngOnInit() {
    this.tools.currentSubscription().subscribe((value: any) => {
      // console.log(1)
      // console.log(value)
    })
  }

}
