## Service and dependency injection

```sh
# 生成组件
ng generate component components/demo/service-and-dependency-injection

# 或者使用缩写形式
ng g c components/demo/service-and-dependency-injection

# 生成服务
ng g s services/demo/customer-info
```

服务参考：<https://angular.io/tutorial/toh-pt4>

在模板文件中也使用了`*ngFor`关键字，用来循环数组元素：

```html
<ul class="list-group">
  <li *ngFor="let info of infoReceived2">{{info}}</li>
</ul>
```

另外，点击事件`(click)=funcName()`可以调用组件中定义的方法：

```html
<button type="button" name="button" (click)='getInfoFromServiceClass1()'>Info 1</button>
```

然后向文件`src/app/app.component.html`中添加以下内容：

```html
<h1>My Angular Project</h1>

<app-service-and-dependency-injection></app-service-and-dependency-injection>
```
