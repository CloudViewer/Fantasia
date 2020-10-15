import { Component, OnInit, HostListener } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'sys-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  bodyW: number = 0;              // 页面宽
  isFullscreen: boolean = false;  // 是否全屏
  isCollapsed: boolean = false;   // Menu 收缩控制
  isLock: boolean = false;        // 页面锁定控制

  constructor(private tools: CommService) { }




  /**
   * 监听页面大小改变
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.bodyW = event.target.innerWidth;

    // 通过页面大小改变来确定全屏Icon状态变化
    let full_status = event.target.document['fullscreen'] || event.target.document['webkitIsFullScreen'] || event.target.document['mozFullScreen'] || false;
    !full_status ? this.isFullscreen = false : this.isFullscreen = true;
  }


  ngOnInit() {
    this.bodyW = document.body.clientWidth;
  }


  /**
   * 导航栏Menu收缩功能
   */
  doMenu() {
    this.isCollapsed = this.isCollapsed ? false : true;
    this.tools.setPublish({ code: 'MENU', isCollapsed: this.isCollapsed });
  }


  /**
   * 导航栏全屏放大功能
   */
  doZoom() {
    this.isFullscreen = this.isFullscreen ? false : true;
    this.doFullscreen();
  }

  doLock() {
    this.isLock = this.isLock ? false : true;
    this.tools.setPublish({ code: 'lock', isLock: this.isLock });
    this.tools.currentSubscription().subscribe(e => {
      this.isLock = e;
    })
  }

  doBell(code: string) {
    console.log('BELL');
  }

  doTag(code: string) {
    console.log('TAG');
  }

  doPay(code: string) {
    console.log('PAY');
  }

  doGithub(code: string) {
    console.log('GITHUB');
  }


  /**
   * 全屏事件
   */
  doFullscreen() {
    if (this.isFullscreen) {
      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { // Firefox 
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { // Chrome, Safari and Opera 
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { // IE/Edge 
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
    } else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { // Firefox 
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { // Chrome, Safari and Opera 
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { // IE/Edge 
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
    }
  }

}
