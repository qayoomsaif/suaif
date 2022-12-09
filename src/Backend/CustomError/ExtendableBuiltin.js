module.exports = function ExtendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }
  Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
  ExtendableBuiltin.prototype = Object.create(cls.prototype);
  Object.setPrototypeOf(ExtendableBuiltin, cls);

  return ExtendableBuiltin;
}
