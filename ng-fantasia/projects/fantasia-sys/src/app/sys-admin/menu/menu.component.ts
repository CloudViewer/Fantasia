import { Component, OnInit, Input } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'sys-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input() menuTree: any[];     // 菜单树 通过父组件传入

  isCollapsed: boolean = false; // 菜单是否收缩

  constructor(private tools: CommService) { }

  ngOnInit() {
    this.tools.currentSubscription().subscribe(res => {
      if (res && res.code == 'MENU') {
        this.isCollapsed = res.isCollapsed;
      }
    });
  }

}
