## Customize the Componnet Name

```sh
ng generate component components/demo/customize-component-name

# 或者使用缩写形式
ng g c components/demo/customize-component-name
```

然后在生成的 customize-component-name.componnet.ts 文件中可以看到：

```ts

@Component({
  selector: 'app-customize-component-name',
  templateUrl: './customize-component-name.component.html',
  styleUrls: ['./customize-component-name.component.scss']
})

```

其中`@Component`下的`selector`表示的是自定义 HTML 标签的名称，将其改为`customize-component-name`，即可在其他地方使用这个标签名。

向文件`src/app/app.component.html`中添加以下内容：

```html
<h1>My Angular Project</h1>

<customize-component-name></customize-component-name>
```
