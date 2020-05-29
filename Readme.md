# 网页幻灯片

用于生成网页幻灯片的Node程序，由多个输入文件（html、css、js、json），最终输出为一个HTML文件。

## 目录结构

所有输入（配置、幻灯片、资源）放置在 **#input** 文件中，所有输出产生在 **#output** 中。

### 配置

配置文件类型为JSON，默认名称为 **$config.json** 。

### 全局样式

全局样式会应用到所有幻灯片中，默认名称为 **$config.css** 。   
在$config.css中设置`#Slide`的属性可以配置全局样式。

内置的id和class使用大坨峰和连字符命名，自定义的id和class建议使用小拓峰和连字符命名。

### 幻灯片

幻灯片以HTML文件组织，一个HTML文件代表一张幻灯片。		

幻灯片以HTML的名称排序。

#### 模板

```html
<body></body>
<style></style>
<script></script>
```

body、style、script的内容会被提取并添加到页面中。