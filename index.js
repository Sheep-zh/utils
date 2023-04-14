// 递归深拷贝
export function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(key => {
    clone[key] = deepClone(obj[key]);
  });

  return clone;
}
// 防抖
// debounce(this.putFormDetail.bind(this),3000,true)
export function debounce(func, wait, immediate = false) {
  let timeout; //创建一个标记用来存放定时器的返回值
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout); //每当用户输入时把前一个setTimeout clear()掉
    if (immediate) {  //判断是否立即执行
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        //然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        func.apply(this, arguments);
      }, wait);
    }
  };
}
// 节流
export function throttle(func, delay) {
  let lastTime = 0;
  return function () {
    const nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      func.apply(this, arguments);
      lastTime = nowTime;
    }
  }
}
//用于获取 URL 中的查询参数
export function getQueryString(name) {
  const search = window.location.search;

  if (!search) {
    return null;
  }

  const regex = new RegExp(`[?&]${name}=([^&]*)`);
  const match = regex.exec(search);

  return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : null;
}


// 格式化时间戳
// const now = new Date();
// console.log(formatDate(now, 'yyyy-MM-dd')); // 输出当前日期，格式为 yyyy-MM-dd
export function formatDate(date, format) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (format === 'yyyy-MM-dd') {
    return `${year}-${month}-${day}`;
  } else if (format === 'yyyy/MM/dd') {
    return `${year}/${month}/${day}`;
  } else if (format === 'MM/dd/yyyy') {
    return `${month}/${day}/${year}`;
  }

  return `${year}-${month}-${day}`;
}

// 检查一个元素是否在可视区域内
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
// 判断两个对象是否相等
export function isEqual(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (typeof obj1 === 'object' && obj1 !== null && obj2 !== null) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key) || !this.isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  return obj1 === obj2;
}
// 滚动到页面顶部
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// 获取浏览器窗口尺寸
export function getWindowSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
}
// 获取 URL 参数值
export function getQueryParam(name) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(name);
}

// 将对象转为 URL 查询参数字符串
export function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }
  return keyValuePairs.join('&');
}
// 判断浏览器是否支持某个 CSS 属性
export function isCssPropertySupported(property) {
  return property in document.body.style;
}
// 判断是否是移动设备
export function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|ios|ip(ad|hone|od)/i.test(userAgent);
}
// 判断是否是微信浏览器
export function isWechat() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /MicroMessenger/i.test(userAgent);
}
// 判断是否是 Safari 浏览器
export function isSafari() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /safari/i.test(userAgent) && !/chrome/i.test(userAgent);
}
// 数组工具函数
export const arrayUtils = {
  // 数组扁平化
  flatten: function (arr) {
    return arr.reduce(function (prev, cur) {
      return prev.concat(Array.isArray(cur) ? arrayUtils.flatten(cur) : cur);
    }, []);
  },
  // 去重
  unique: function (arr) {
    return [...new Set(arr)];
  },

  // 是否包含指定元素
  contains: function (arr, item) {
    return arr.indexOf(item) !== -1;
  },

  // 根据指定属性去重
  uniqueByProp: function (arr, prop) {
    const map = new Map();
    return arr.filter((item) => !map.has(item[prop]) && map.set(item[prop], 1));
  },

  // 求交集
  intersection: function (arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
  },

  // 求差集
  difference: function (arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
  },

  // 求并集
  union: function (arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  },

  // 求最大值
  max: function (arr) {
    return Math.max(...arr);
  },

  // 求最小值
  min: function (arr) {
    return Math.min(...arr);
  },
  // 根据指定条件筛选
  filterByProp: function (arr, prop, value) {
    return arr.filter((item) => item[prop] === value);
  },
  // 对象数组排序
  sortByProp: function (arr, prop, direction = 'asc') {
    const modifier = direction === 'desc' ? -1 : 1;
    return arr.sort((a, b) => {
      if (a[prop] < b[prop]) return -1 * modifier;
      if (a[prop] > b[prop]) return modifier;
      return 0;
    });
  },

  // 数组分组
  groupBy: function (arr, key) {
    return arr.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
};

