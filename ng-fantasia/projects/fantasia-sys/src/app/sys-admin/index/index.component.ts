import { Component, OnInit } from '@angular/core';
import { CommService } from '../../sys-commom/comm.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  menuTree: any[];

  constructor(private tools: CommService) { }

  ngOnInit() {
    this.menuTree = [
      {
        title: '主页',
        mid: 1,
        fid: 0,
        icon: {
          type: 'home',
          theme: ''
        },
        lev: 1,
        routerLink: 'learnadmin/home',
        children: [],
        open: false,
        selected: false,
        disabled: false,
      },
      {
        title: '用户管理',
        mid: 2,
        fid: 0,
        icon: {
          type: 'user',
          theme: ''
        },
        lev: 1,
        routerLink: '',
        children: [
          {
            title: '用户列表',
            mid: 3,
            fid: 2,
            icon: {
              type: '',
              theme: ''
            },
            lev: 2,
            routerLink: 'learnadmin/user/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '待开发...',
            mid: 4,
            fid: 2,
            icon: {
              type: '',
              theme: ''
            },
            lev: 2,
            routerLink: '',
            children: [
              {
                title: '清除-1',
                mid: 23,
                fid: 4,
                icon: {
                  type: '',
                  theme: ''
                },
                lev: 3,
                routerLink: '',
                children: [
                  {
                    title: '清除-2',
                    mid: 24,
                    fid: 23,
                    icon: {
                      type: '',
                      theme: ''
                    },
                    lev: 4,
                    routerLink: 'learnadmin/user/none/cache/c',
                    children: [],
                    open: false,
                    selected: false,
                    disabled: false,
                  }
                ],
                open: false,
                selected: false,
                disabled: false,
              }
            ],
            open: false,
            selected: false,
            disabled: false,
          }
        ],
        open: false,
        selected: false,
        disabled: false,
      },
      {
        title: '博客管理',
        mid: 5,
        fid: 0,
        icon: {
          type: 'form',
          theme: ''
        },
        lev: 1,
        routerLink: '',
        children: [
          {
            title: '博客列表',
            mid: 6,
            fid: 5,
            icon: {
              type: '',
              theme: ''
            },
            lev: 2,
            routerLink: 'learnadmin/blog/list',
            children: [

            ],
            open: false,
            selected: false,
            disabled: false,
          },
          {
            title: '待审核...',
            mid: 7,
            fid: 5,
            icon: {
              type: '',
              theme: ''
            },
            lev: 2,
            routerLink: 'learnadmin/blog/audit',
            children: [],
            open: false,
            selected: false,
            disabled: false,
          }
        ],
        open: false,
        selected: false,
        disabled: false,
      }
    ];
  }

}
