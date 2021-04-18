## About form element

```sh
# 生成组件
ng generate component components/demo/about-form-element

# 或者使用缩写形式
ng g c components/demo/about-form-element

```

表单参考：<https://angular.io/guide/forms>

这里使用了一个名为`ngModel`的指令，参考：<https://angular.io/api/forms/NgModel#description>

```html
<input #name="ngModel" required minlength="3" maxlength="12" type="text" name="firstname" class="form-control" ngModel>
```

需要注意的是，使用表单元素，需要在`app.module.ts`文件中引入（import）`FormsModule`模块：

```ts
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenerateAComponentComponent,
    CustomizeComponentNameComponent,
    ServiceAndDependencyInjectionComponent,
    AboutFormElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

然后向文件`src/app/app.component.html`中添加以下内容：

```html
<app-about-form-element></app-about-form-element>
```

这里引入了 Bootstrap 样式框架：

```sh
npm install bootstrap jquery popper.js
```

然后应该在`angular.json`文件中的`projects-architect-build-options`下的`styles`和`scripts`数组中分别调用需要使用的 CSS 和 JavaScript 文件：

```json
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
```

重新启用 angular serve：`ng serve`
