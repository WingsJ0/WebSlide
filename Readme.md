# 网页幻灯片

用于生成网页幻灯片的 Node 程序，由多个输入文件（html、css、js、json），最终输出为一个 HTML 文件。

## 示例

[网页幻灯片](http://wings-j.gitee.io/webslide)

右下角的按钮可翻页。

示例源文件可见[demo/#input](demo/#input)。

## 使用方法

1. 在项目目录下运行`npm link`。
2. 在工作目录下新建`#input`文件夹，在这个文件夹中编写幻灯片内容（html、css、json）。
3. 在工作目录下运行`web-slide`。

运行成功后在工作目录下会生成#output 文件夹。

观察模式：

```sh
web-slide --watch
```

## 输入

所有输入（配置、幻灯片、资源）放置在 **#input** 文件中，所有输出产生在 **#output** 中。

### 配置

配置文件类型为 JSON，默认名称为 **\$config.json** 。

配置项可见：[./src/config/runtime.js](./src/config/runtime.js)

### 全局脚本

全局脚本会在 DOMContentLoad 后执行，默认名称为 **\$config.js**。

模块可使用 CommonJs 和 ES 模块方式引入。

### 全局样式

全局样式会应用到所有幻灯片中，默认名称为 **\$config.css** 。
在\$config.css 中设置`#Slide`的属性可以配置全局样式。

内置的 id 和 class 使用大坨峰和连字符命名，自定义的 id 和 class 建议使用小拓峰和连字符命名。

### 幻灯片

幻灯片以 HTML 文件组织，一个 HTML 文件代表一张幻灯片。

幻灯片以 HTML 的名称排序。

#### 模板

```html
<body></body>
<style></style>
<script></script>
```

body、style、script 的内容会被提取并添加到页面中。

## API

Broadcast（广播，详见：**./src/web/core/broadcast/index.js**），会触发事件：

- render：渲染

## 样式

详见**./src/web/style**。
