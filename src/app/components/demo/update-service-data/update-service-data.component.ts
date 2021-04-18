import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from 'src/app/services/demo/customer-info.service';

@Component({
  selector: 'app-update-service-data',
  templateUrl: './update-service-data.component.html',
  styleUrls: ['./update-service-data.component.scss']
})
export class UpdateServiceDataComponent implements OnInit {

  // 组件中的属性和方法可以在模板（HTML文件）中调用
  // 例如：<li *ngFor="let info of infoReceived1">{{info}}</li>
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  // 这里可以在构造器中直接注入组件中 providers 中的服务
  // 并在方法中直接调用服务的方法及属性
  constructor(private receivedService: CustomerInfoService) { }

  ngOnInit(): void {
  }

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.receivedService.getInfo1();
  }
  getInfoFromServiceClass2() {
    this.infoReceived2 = this.receivedService.getInfo2();
  }
  getInfoFromServiceClass3() {
    this.infoReceived3 = this.receivedService.getInfo3();
  }

  updateInfo(form: any) {
    this.receivedService.updateInfo(form.value.extra_info);
  }

}
