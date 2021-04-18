# Angular Learning

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Install

```sh
# 授予被访问目录可读写权限，避免出现 
# Error: EACCES: permission denied, access '/usr/local/node-v14.15.0/lib/node_modules' 的错误
sudo chmod -R 777 /usr/local/node-v14.15.0

# 配置 NPM 国内淘宝镜像源
npm config set registry https://registry.npm.taobao.org

# 全局安装 angular CLI 工具
npm install -g @angular/cli

# 将 ng 命令设为全局命令
sudo ln -s /usr/local/node-v14.15.0/bin/ng /usr/local/bin/ng
```

## Create a project

```sh
# 在当前目录下新建一个名为 my-angular-project 的 Angular 项目
ng new my-angular-project
```

### Create a component

```sh
ng generate component components/demo/test-component

# 或者使用缩写形式
ng g c components/demo/test-component
```

向文件`src/app/app.component.html`中添加以下内容：

```html
<h1>My Angular Project</h1>

<app-test-component></app-test-component>
```

```sh
# 启动 Node 服务器
ng serve

# 访问 http://localhost:4200/
# 即可看到 src/app/app.component.html 的内容
```

## Demo List

1. [生成一个组件](./docs/1-generate-a-component.md)
2. [自定义组件标签名](docs/2-customize-the-component-name.md)
3. [服务与依赖注入](docs/3-service-and-dependency-injection.md)
4. [关于表单](docs/4-about-form-element.md)
5. [更新服务数据](docs/5-update-service-data.md)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
