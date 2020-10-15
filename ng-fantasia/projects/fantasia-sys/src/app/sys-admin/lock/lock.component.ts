import { Component, OnInit } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'sys-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.less']
})
export class LockComponent implements OnInit {

  constructor(private tools: CommService) { }

  private lock: any = {
    isLock: false,           // 是否锁定
    passwordVisible: false,  // 控制Lock状态下的输入框图标
    password: '',            // Lock状态下的输入框值
    tooltipTitle: '',
    isClose: false,
    lockScale_TIO: null
  }


  ngOnInit() {
    this.tools.currentSubscription().subscribe((value: any) => {
      this.show(value.isLock)
    })
  }


  show(isLock: boolean) {
    this.lock.isClose = false;
    clearTimeout(this.lock.lockScale_TIO);
    this.lock.isLock = isLock;
  }


  /**
   * 页面解锁
   */
  unLock() {
    if (this.lock.password == "admin") {
      this.lock.isClose = true;
      clearTimeout(this.lock.lockScale_TIO);
      this.lock.lockScale_TIO = setTimeout(() => {
        this.lock.isLock = false;
        this.lock.passwordVisible = false;
        this.lock.password = '';
        this.tools.setPublish(false);
      }, 200);
    }
  }
}
