import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  info1: string[] = ['Linn Zhou', '1996-09-08', 'reg.lynnzh@gmail.com', 'Hangzhou'];
  info2: string[] = ['Bob Brown', '1997-09-08', 'reg.bob@gmail.com', 'Nanchang'];
  info3: string[] = ['Alice Taylor', '1998-09-08', 'reg.alice@gmail.com', 'Nanjing'];

  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }

  constructor() { }

  updateInfo(form: any) {
    this.info1.push(form);
    this.info2.push(form);
    this.info3.push(form);
  }

}
