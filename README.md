# intl-tel-code

> 数据参考：[国际电话区号列表](https://zh.wikipedia.org/wiki/国际电话区号列表)

支持 `es` `umd` 格式。

## 使用

### 安装

```bash
npm install intl-tel-code
```

或

```bash
yarn add intl-tel-code
```

---

在浏览器中使用 `script` 标签直接引入文件，并使用全局变量 `intlTelCode` 。

```html
<script src="https://unpkg.com/intl-tel-code@latest/dist/intl-tel-code.umd.js"></script>
```

如果使用浏览器引入，建议将项目下载到本地或内部 cdn 服务器。

### 示例

```javascript
import intlTelCode from 'intl-tel-code';

console.log(intlTelCode);
```

## 数据格式

```typescript
type Data = {
  code: string;
  cn: string;
  en: string;
  py: string;
}[];
```

## License

MIT
