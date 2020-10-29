import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysAdminRoutingModule } from './sys-admin-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LockComponent } from './lock/lock.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ContentComponent } from './content/content.component';
import { SiderComponent } from './sider/sider.component';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, LockComponent, MenuComponent, ContentComponent, SiderComponent],
  imports: [
    CommonModule,
    SysAdminRoutingModule,
    NzAvatarModule,
    NzIconModule,
    NzGridModule,
    NzInputModule,
    FormsModule,
    NzToolTipModule,
    NzMenuModule
  ]
})
export class SysAdminModule { }
