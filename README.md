# 常用工具函数
```text
$ npm install your-package-name
```
### 递归深拷贝 deepClone(obj)
### 防抖debounce(func, wait, immediate = false)
example：
```javascript
debounce(this.putFormDetail.bind(this),3000,true)
```
### 节流throttle(func, delay)
### 用于获取 URL 中的查询参数getQueryString(name)
### 格式化时间戳formatDate(date, format)
example：
```javascript
formatDate(new Date(), 'yyyy-MM-dd')
//目前支持yyyy-MM-dd 、 yyyy/MM/dd 、 MM/dd/yyyy
```

### 检查一个元素是否在可视区域内isInViewport(element)
### 判断两个对象是否相等isEqual(obj1, obj2)
### 滚动到页面顶部scrollToTop()
### 获取浏览器窗口尺寸getWindowSize()
### 获取 URL 参数值getQueryParam(name) 
### 将对象转为 URL 查询参数字符串objToQueryString(obj)
### 判断浏览器是否支持某个 CSS 属性isCssPropertySupported(property) 
### 判断是否是移动设备isMobile()
### 判断是否是微信浏览器isWechat()
### 判断是否是 Safari 浏览器isSafari()
### 数组工具函数arrayUtils
#### arrayUtils包含：
1. 数组扁平化 flatten(array)
2. 去重 unique(array)
3. 是否包含指定元素 contains(array,item)
4. 根据指定属性去重 uniqueByProp(array,prop)
5. 求交集 intersection(array1,array2)
6. 求差集 difference(array1,array2)
7. 求并集 union(array1,array2)
8. 求最大值 max(array)
9. 求最小值 min(array)
10. 根据指定条件筛选 filterByProp(array,prop,value)
11. 对象数组排序 sortByProp(array, prop, direction = 'asc')
12. 数组分组 groupBy(array,key)
 
