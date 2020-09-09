let dataType = {
  "[object String]": "string",
  "[object Number]": "number",
  "[object Boolean]": "boolean",
  "[object Symbol]": "Symbol",
  "[object Undefined]": "undefined",
  "[object Null]": "null",
  "[object Function]": "function",
  "[object Date]": "date",
  "[object Array]": "array",
  "[object RegExp]": "regexp",
  "[object Object]": "object",
  "[object Error]": "error",
  "[object HTMLDocument]": "htmlDocument",
  "[object Window]": "window",
};
export default {
  typeof(v) {
    return dataType[Object.prototype.toString.call(v)];
  },
  propEmpty(val) {
    return (
      /(number|boolean)/gi.test(typeof val) ||
      (!/\[object (undefined|null)]/gi.test(Object.prototype.toString.call(val)) && !!val)
    );
  },
};
