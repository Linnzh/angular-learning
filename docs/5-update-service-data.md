## Service and dependency injection

```sh
# 生成组件
ng generate component components/demo/update-service-data

# 或者使用缩写形式
ng g c components/demo/update-service-data

# 生成服务
# 这里依旧使用 customer-info.service
```

服务参考：<https://angular.io/tutorial/toh-pt4>

在模板文件中也使用了`*ngFor`关键字，用来循环数组元素：

```html
<ul class="list-group">
  <li *ngFor="let info of infoReceived2">{{info}}</li>
</ul>
```

另外，表单提交事件`(ngSubmit)="updateInfo(form)"`可以调用组件中定义的方法：

```html
<form #form="ngForm" (ngSubmit)="updateInfo(form)">
    <div class="form">
        <label for="extra_info">附加的信息：</label>
        <input type="text" name="extra_info" ngModel>
        <button type="button" name="extra_btn">Extra Info</button>
    </div>
</form>
```

```ts
// update-service-data.component.ts
  updateInfo(form: any) {
    this.receivedService.updateInfo(form.value.extra_info);
  }

// customer-info.service.ts
  updateInfo(form: any) {
    this.info1.push(form);
    this.info2.push(form);
    this.info3.push(form);
  }
```

然后向文件`src/app/app.component.html`中添加以下内容：

```html
<app-update-service-data></app-update-service-data>
```
