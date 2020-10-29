import { Component, OnInit, Input } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'sys-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {

  @Input() menuTree: any[];
  
  isCollapsed: boolean = false; // 是否收缩
  // tooltipTitle:string = '';


  constructor(private tools: CommService) { }

  ngOnInit() {
    // 订阅menu状态的改变
    this.tools.currentSubscription().subscribe(res => {
      if (res && res.code == 'MENU') {
        this.isCollapsed = res.isCollapsed;
        // this.tooltipTitle = this.isCollapsed ? 'Admin' : ''
      }
    });
  }

}
