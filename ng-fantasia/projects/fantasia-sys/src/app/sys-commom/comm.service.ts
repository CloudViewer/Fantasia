import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CommService {

  private subject: Subject<any> = new Subject<any>();

  constructor() { }

  /**
   * 设置发布信息
   * @param selectedPointsIfo 
   */
  public setPublish(selectedPointsIfo: any): void {
    this.subject.next(selectedPointsIfo);
  }

  /**
   * 订阅发布信息
   */
  public currentSubscription(): Observable<any> {
    return this.subject.asObservable();
  }
}
