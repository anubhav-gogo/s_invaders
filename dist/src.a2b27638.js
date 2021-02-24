// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/hero.png":[function(require,module,exports) {
module.exports = "/hero.c0a374e7.png";
},{}],"src/entity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'div' : _ref$tag,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;

    _classCallCheck(this, Entity);

    this.el = document.createElement(tag);
    document.body.appendChild(this.el);
    this.el.className = 'entity ' + className;
  }

  _createClass(Entity, [{
    key: "setX",
    value: function setX(x) {
      this.x = x;
      this.el.style.left = "".concat(this.x, "px");
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.y = y;
      this.el.style.top = "".concat(this.y, "px");
    }
  }, {
    key: "remove",
    value: function remove() {
      this.el.remove();
      this.el = null;
    }
  }]);

  return Entity;
}();

exports.Entity = Entity;
},{}],"src/ship.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ship = void 0;

var _hero = _interopRequireDefault(require("../img/hero.png"));

var _entity = require("./entity");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Ship = /*#__PURE__*/function (_Entity) {
  _inherits(Ship, _Entity);

  var _super = _createSuper(Ship);

  function Ship(_ref) {
    var _this;

    var removeLife = _ref.removeLife,
        getOverlappingBullet = _ref.getOverlappingBullet,
        removeBullet = _ref.removeBullet;

    _classCallCheck(this, Ship);

    _this = _super.call(this, {
      tag: 'img'
    });
    _this.el.src = _hero.default;
    _this.SPEED = 2;
    _this.SHIP_WIDTH = 50;
    _this.canFire = true;
    _this.isAlive = true;
    _this.removeLife = removeLife;
    _this.removeBullet = removeBullet;
    _this.getOverlappingBullet = getOverlappingBullet;

    _this.spawn();

    return _this;
  }

  _createClass(Ship, [{
    key: "spawn",
    value: function spawn() {
      this.isAlive = true;
      this.el.style.opacity = 1;
      this.setX(window.innerWidth / 2);
      this.setY(window.innerHeight - 80);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (!this.isAlive) return;
      this.setX(this.x + this.SPEED);
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.setX(this.x - this.SPEED);
    }
  }, {
    key: "fire",
    value: function fire(_ref2) {
      var _this2 = this;

      var createBullet = _ref2.createBullet;

      if (this.canFire && this.isAlive) {
        this.canFire = false;
        createBullet({
          x: this.x + this.SHIP_WIDTH / 2,
          y: this.y
        });
        setTimeout(function () {
          _this2.canFire = true;
        }, 600);
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      var _this3 = this;

      this.isAlive = false;
      setTimeout(function () {
        _this3.spawn();
      }, 3000);
      this.el.style.opacity = 0;
    }
  }, {
    key: "update",
    value: function update() {
      var bullet = this.getOverlappingBullet(this);

      if (bullet && bullet.isAlien && this.isAlive) {
        //kill ship
        this.removeBullet(bullet);
        this.removeLife();
        this.kill();
      }
    }
  }]);

  return Ship;
}(_entity.Entity);

exports.Ship = Ship;
},{"../img/hero.png":"img/hero.png","./entity":"src/entity.js"}],"src/bullet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bullet = void 0;

var _entity = require("./entity");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Bullet = /*#__PURE__*/function (_Entity) {
  _inherits(Bullet, _Entity);

  var _super = _createSuper(Bullet);

  function Bullet(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        isAlien = _ref.isAlien;

    _classCallCheck(this, Bullet);

    _this = _super.call(this, {
      className: 'bullet'
    });
    _this.SPEED = 3;
    _this.isAlien = isAlien;

    _this.setX(x);

    _this.setY(y);

    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      var dy = this.isAlien ? this.SPEED : -this.SPEED;
      this.setY(this.y + dy);
    }
  }]);

  return Bullet;
}(_entity.Entity);

exports.Bullet = Bullet;
},{"./entity":"src/entity.js"}],"img/enemy.png":[function(require,module,exports) {
module.exports = "/enemy.3b21f546.png";
},{}],"src/alien.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alien = void 0;

var _entity = require("./entity");

var _enemy = _interopRequireDefault(require("../img/enemy.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LEFT = 'left';
var RIGHT = 'right';
var POINTS_PER_KILL = 20;

var Alien = /*#__PURE__*/function (_Entity) {
  _inherits(Alien, _Entity);

  var _super = _createSuper(Alien);

  function Alien(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        getOverlappingBullet = _ref.getOverlappingBullet,
        removeAlien = _ref.removeAlien,
        removeBullet = _ref.removeBullet,
        addToScore = _ref.addToScore;

    _classCallCheck(this, Alien);

    _this = _super.call(this, {
      tag: 'img'
    });
    _this.el.src = _enemy.default;

    _this.setX(x);

    _this.SPEED = 2.5;
    _this.DownSpeed = 30;

    _this.setY(y);

    _this.direction = LEFT;
    _this.getOverlappingBullet = getOverlappingBullet;
    _this.removeAlien = removeAlien;
    _this.removeBullet = removeBullet;
    _this.addToScore = addToScore;
    return _this;
  }

  _createClass(Alien, [{
    key: "setDirectionLeft",
    value: function setDirectionLeft() {
      this.direction = LEFT;
    }
  }, {
    key: "setDirectionRight",
    value: function setDirectionRight() {
      this.direction = RIGHT;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.setY(this.y + this.DownSpeed);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.direction === LEFT) {
        this.setX(this.x - this.SPEED);
      } else {
        this.setX(this.x + this.SPEED);
      } //if a bullet hit me, delete the bullet and delete myself


      var bullet = this.getOverlappingBullet(this);

      if (bullet && !bullet.isAlien) {
        this.removeAlien(this);
        this.removeBullet(bullet);
        this.addToScore(POINTS_PER_KILL);
      }
    }
  }]);

  return Alien;
}(_entity.Entity);

exports.Alien = Alien;
},{"./entity":"src/entity.js","../img/enemy.png":"img/enemy.png"}],"src/score.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Score = void 0;

var _entity = require("./entity");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Score = /*#__PURE__*/function (_Entity) {
  _inherits(Score, _Entity);

  var _super = _createSuper(Score);

  function Score() {
    var _this;

    _classCallCheck(this, Score);

    _this = _super.call(this);
    _this.score = 0;

    _this.setX(window.innerWidth / 2);

    _this.setY(20);

    _this.refreshText();

    return _this;
  }

  _createClass(Score, [{
    key: "addToScore",
    value: function addToScore(amount) {
      this.score += amount;
      this.refreshText();
    }
  }, {
    key: "refreshText",
    value: function refreshText() {
      this.el.innerText = "Score: ".concat(this.score);
    }
  }]);

  return Score;
}(_entity.Entity);

exports.Score = Score;
},{"./entity":"src/entity.js"}],"src/lives.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lives = void 0;

var _entity = require("./entity");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Lives = /*#__PURE__*/function (_Entity) {
  _inherits(Lives, _Entity);

  var _super = _createSuper(Lives);

  function Lives() {
    var _this;

    _classCallCheck(this, Lives);

    _this = _super.call(this);
    _this.lives = 3;

    _this.setX(window.innerWidth / 2);

    _this.setY(window.innerHeight - 20);

    _this.refreshText();

    return _this;
  }

  _createClass(Lives, [{
    key: "removeLife",
    value: function removeLife() {
      this.lives--;
      this.refreshText();
    }
  }, {
    key: "refreshText",
    value: function refreshText() {
      this.el.innerText = new Array(this.lives).fill("\u2661").join(' ');
    }
  }]);

  return Lives;
}(_entity.Entity);

exports.Lives = Lives;
},{"./entity":"src/entity.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _ship = require("./ship");

var _bullet = require("./bullet");

var _alien = require("./alien");

var _score = require("./score");

var _lives = require("./lives");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scoreGui = new _score.Score();
var livesGui = new _lives.Lives();
var ALIEN_COLS = 10;
var ALIEN_ROWS = 3;

var keys = _defineProperty({
  a: false,
  b: false
}, " ", false);

var bullets = [];

var removeAlien = function removeAlien(alien) {
  aliens.splice(aliens.indexOf(alien), 1);
  alien.remove();

  for (var row = 0; row < aliensGrid.length; row++) {
    for (var col = 0; col < aliensGrid.length; col++) {
      if (aliensGrid[row][col] === alien) {
        aliensGrid[row][col] = null;
      }
    }
  }
};

var removeBullet = function removeBullet(bullet) {
  bullets.splice(bullets.indexOf(bullet), 1);
  bullet.remove();
};

var isOverlapping = function isOverlapping(entity1, entity2) {
  var rect1 = entity1.el.getBoundingClientRect();
  var rect2 = entity2.el.getBoundingClientRect();
  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
};

var getOverlappingBullet = function getOverlappingBullet(entity) {
  var _iterator = _createForOfIteratorHelper(bullets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var bullet = _step.value;

      if (isOverlapping(entity, bullet)) {
        return bullet;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

var aliens = [];
var aliensGrid = [];
var ship = new _ship.Ship({
  removeLife: function removeLife() {
    return livesGui.removeLife();
  },
  removeBullet: removeBullet,
  getOverlappingBullet: getOverlappingBullet
});

for (var row = 0; row < 3; row++) {
  var aliensCol = [];

  for (var col = 0; col < 10; col++) {
    var alien = new _alien.Alien({
      x: col * 80 + 300,
      y: row * 80 + 30,
      getOverlappingBullet: getOverlappingBullet,
      removeAlien: removeAlien,
      removeBullet: removeBullet,
      addToScore: function addToScore(amount) {
        return scoreGui.addToScore(amount);
      }
    });
    aliens.push(alien);
    aliensCol.push(alien);
  }

  aliensGrid.push(aliensCol);
}

var getBottomAliens = function getBottomAliens() {
  var bottomAliens = [];

  for (var _col = 0; _col < ALIEN_COLS; _col++) {
    for (var _row = ALIEN_ROWS - 1; _row >= 0; _row--) {
      if (aliensGrid[_row][_col]) {
        bottomAliens.push(aliensGrid[_row][_col]);
        break;
      }
    }
  }

  return bottomAliens;
};

var getRandomAlien = function getRandomAlien(aliensList) {
  return aliensList[parseInt(Math.random() * aliensList.length)];
};

var aliensFireBullet = function aliensFireBullet() {
  var bottomAliens = getBottomAliens();
  var randomAlien = getRandomAlien(bottomAliens); //fire bullet from random alien

  createBullet({
    x: randomAlien.x + 15,
    y: randomAlien.y + 30,
    isAlien: true
  });
};

setInterval(aliensFireBullet, 1500);

var getLeftMostAlien = function getLeftMostAlien() {
  return aliens.reduce(function (minimumAlien, currentAlien) {
    return currentAlien.x < minimumAlien ? currentAlien : minimumAlien;
  });
};

var getRightMostAlien = function getRightMostAlien() {
  return aliens.reduce(function (maximumAlien, currentAlien) {
    return currentAlien.x > maximumAlien ? currentAlien : maximumAlien;
  });
};

var createBullet = function createBullet(_ref) {
  var x = _ref.x,
      y = _ref.y,
      _ref$isAlien = _ref.isAlien,
      isAlien = _ref$isAlien === void 0 ? false : _ref$isAlien;
  bullets.push(new _bullet.Bullet({
    x: x,
    y: y,
    isAlien: isAlien
  }));
};

document.addEventListener('keydown', function (e) {
  keys[e.key] = true; // console.log(keys);
});
document.addEventListener('keyup', function (e) {
  keys[e.key] = false; // console.log(keys);
});

var update = function update() {
  if (keys['d'] && ship.x < window.innerWidth - ship.SHIP_WIDTH) {
    ship.moveRight();
  } else if (keys['a'] && ship.x > 0) {
    ship.moveLeft();
  }

  if (keys[" "]) {
    //create a bullet
    ship.fire({
      createBullet: createBullet
    });
  }

  ship.update();
  bullets.forEach(function (bullet) {
    bullet.update();

    if (bullet.y < 0) {
      bullet.remove();
      bullets.splice(bullets.indexOf(bullet), 1);
    }
  });
  aliens.forEach(function (alien) {
    alien.update();
  });
  var leftMostAlien = getLeftMostAlien();

  if (leftMostAlien.x < 30) {
    aliens.forEach(function (alien) {
      alien.setDirectionRight();
      alien.moveDown();
    });
  }

  var rightMostAlien = getRightMostAlien();

  if (rightMostAlien.x > innerWidth - 800) {
    aliens.forEach(function (alien) {
      alien.setDirectionLeft();
      alien.moveDown();
    });
  }
};

setInterval(update, 20);
},{"./ship":"src/ship.js","./bullet":"src/bullet.js","./alien":"src/alien.js","./score":"src/score.js","./lives":"src/lives.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53873" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map