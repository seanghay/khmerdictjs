(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };
  var __export = function(target, all) {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: function(k) {
            return from[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __reExport = function(target, mod, secondTarget) {
    return __copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
  };
  var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    );
  };

  // ../../../../node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../../../../node_modules/tslib/tslib.js": function(exports, module) {
      var __extends;
      var __assign2;
      var __rest;
      var __decorate;
      var __param;
      var __esDecorate;
      var __runInitializers;
      var __propKey;
      var __setFunctionName;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __classPrivateFieldIn;
      var __createBinding;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
          function accept(f) {
            if (f !== void 0 && typeof f !== "function")
              throw new TypeError("Function expected");
            return f;
          }
          var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
          var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
          var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
          var _, done = false;
          for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
              context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
              context.access[p] = contextIn.access[p];
            context.addInitializer = function(f) {
              if (done)
                throw new TypeError("Cannot add initializers after decoration has completed");
              extraInitializers.push(accept(f || null));
            };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
              if (result === void 0)
                continue;
              if (result === null || typeof result !== "object")
                throw new TypeError("Object expected");
              if (_ = accept(result.get))
                descriptor.get = _;
              if (_ = accept(result.set))
                descriptor.set = _;
              if (_ = accept(result.init))
                initializers.unshift(_);
            } else if (_ = accept(result)) {
              if (kind === "field")
                initializers.unshift(_);
              else
                descriptor[key] = _;
            }
          }
          if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
          done = true;
        };
        __runInitializers = function(thisArg, initializers, value) {
          var useValue = arguments.length > 2;
          for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
          }
          return useValue ? value : void 0;
        };
        __propKey = function(x) {
          return typeof x === "symbol" ? x : "".concat(x);
        };
        __setFunctionName = function(f, name, prefix) {
          if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
          return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        };
        __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign2);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__esDecorate", __esDecorate);
        exporter("__runInitializers", __runInitializers);
        exporter("__propKey", __propKey);
        exporter("__setFunctionName", __setFunctionName);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn);
      });
    }
  });

  // ../../../../common/web/tslib/build/index.js
  var build_exports = {};
  __export(build_exports, {
    tslib: function() {
      return tslib_1;
    }
  });
  __reExport(build_exports, __toESM(require_tslib(), 1));
  var tslib_1 = __toESM(require_tslib(), 1);

  // ../../../build/app/ui/obj/kmwuitoolbar.js
  var _a;
  if (!((_a = keyman === null || keyman === void 0 ? void 0 : keyman.ui) === null || _a === void 0 ? void 0 : _a.name)) {
    try {
      keymanweb_1 = keyman;
      util_1 = keymanweb_1.util;
      if (util_1.isTouchDevice()) {
        throw "";
      }
      controller = document.getElementById("KeymanWebControl");
      ToolbarUI = /* @__PURE__ */ function() {
        function ToolbarUI2() {
          var _this = this;
          this.init = false;
          this.toolbarNode = null;
          this.backgroundNode = null;
          this.browseMapNode = null;
          this.keyboardsButtonNode = null;
          this.languageButtonsNode = null;
          this.offButtonNode = null;
          this.offBarNode = null;
          this.oskButtonNode = null;
          this.oskBarNode = null;
          this.selectorNode = null;
          this.regionLanguageListNodes = {};
          this.regionsNode = null;
          this.regionNodes = null;
          this.langKeyboardNodes = [];
          this.langKeyboardListNodes = [];
          this.selectedRegion = "as";
          this.listedKeyboards = [];
          this.catchAllRegion = "un";
          this.keyboardListPriority = 0;
          this.maxListedKeyboards = 1;
          this.lastActiveControl = null;
          this.selectedKeyboard = null;
          this.selectedLanguage = "";
          this.helpOffsetX = 0;
          this.helpOffsetY = 0;
          this.keyboardsForLangPopup = null;
          this.lastSelectedKeyboard = null;
          this.languages = {};
          this.updateMap = false;
          this.startTimer = 0;
          this.lgText = "";
          this.name = "toolbar";
          this.ToolBar_Text = {
            Keyboards: "Languages",
            OffTitle: "Turn off KeymanWeb keyboards",
            Off: "Off",
            ShowOSK: "Show On Screen Keyboard",
            LanguageSelector: "Select language",
            SelectKeyboardPre: "Select ",
            SelectKeyboardSuf: "keyboard",
            AltKeyboardsPre: "Alternate keyboards for ",
            AltKeyboardsSuf: "",
            ca: "Central America",
            sa: "South America",
            na: "Americas",
            eu: "Europe",
            af: "Africa",
            un: "Undetermined",
            as: "Asia",
            oc: "Oceania"
          };
          this.addKeyboardsToMap = function() {
            if (_this.updateMap) {
              _this.updateMap = false;
            } else {
              return;
            }
            _this.regionLanguageListNodes = {};
            var Keyboards = keymanweb_1.getKeyboards();
            Keyboards.sort(_this.sortKeyboards);
            var n = 0;
            for (n = _this.regionsNode.children.length; n > 0; n--) {
              if (_this.regionsNode.children[n - 1].className == "kmw_selector_region") {
                _this.regionsNode.removeChild(_this.regionsNode.childNodes[n - 1]);
              }
            }
            for (var i in _this.regions) {
              _this.regionLanguageListNodes[i] = _this.createNode("div", null, "kmw_selector_region");
              var colNode = _this.createNode("div", null, "kmw_keyboard_col");
              var max = 0, count = 0, languageCode = "";
              for (var j = 0; j < Keyboards.length; j++) {
                var kbdRegion = Keyboards[j].RegionCode;
                if (!_this.regions[kbdRegion]) {
                  if (i != _this.catchAllRegion) {
                    continue;
                  }
                } else if (kbdRegion != i) {
                  continue;
                }
                var bcpSubtags = keymanweb_1.util.getLanguageCodes(Keyboards[j].LanguageCode);
                if (bcpSubtags[0] == languageCode) {
                  continue;
                }
                languageCode = bcpSubtags[0];
                max++;
              }
              max = Number(((max + 3) / 4).toFixed(0));
              languageCode = "";
              for (var j = 0; j < Keyboards.length; j++) {
                var kbdRegion_1 = Keyboards[j].RegionCode;
                if (!_this.regions[kbdRegion_1]) {
                  if (i != _this.catchAllRegion) {
                    continue;
                  }
                } else if (kbdRegion_1 != i) {
                  continue;
                }
                var bcpSubtags = keymanweb_1.util.getLanguageCodes(Keyboards[j].LanguageCode);
                if (bcpSubtags[0] == languageCode) {
                  var x = _this.languages[languageCode].keyboards;
                  if (x.push) {
                    x.push(Keyboards[j]);
                  } else {
                    _this.languages[languageCode].keyboards = x.concat(Keyboards[j]);
                  }
                  continue;
                }
                languageCode = bcpSubtags[0];
                _this.languages[languageCode] = {
                  id: Keyboards[j].LanguageCode,
                  name: Keyboards[j].LanguageName,
                  keyboards: [Keyboards[j]]
                };
                if (count % max == 0 && count > 0) {
                  _this.regionLanguageListNodes[i].appendChild(colNode);
                  colNode = _this.createNode("div", null, count / max == 3 ? "kmw_keyboard_col_right" : "kmw_keyboard_col");
                }
                count++;
                var langNode = _this.createNode("div", null, "kmw_language");
                var aNode = _this.createNode("a", null, null, Keyboards[j].LanguageName);
                aNode.href = "#";
                aNode.onclick = function(lang) {
                  return function(event) {
                    return _this.selectLanguage(event, lang);
                  };
                }(_this.languages[languageCode]);
                langNode.appendChild(aNode);
                colNode.appendChild(langNode);
                n++;
              }
              _this.regionLanguageListNodes[i].appendChild(colNode);
              _this.regionLanguageListNodes[i].appendChild(_this.createNode("div", null, "kmw_clear"));
              _this.regionsNode.appendChild(_this.regionLanguageListNodes[i]);
            }
            _this.loadCookie();
            _this.selectRegion(null, _this.selectedRegion);
            _this.enableControls();
            if (_this.lastSelectedKeyboard) {
              _this.changeKeyboardEvent(_this.lastSelectedKeyboard);
            }
            keymanweb_1.focusLastActiveElement();
          };
          this.sortKeyboards = function(a, b) {
            if (a.RegionCode < b.RegionCode) {
              return -2;
            }
            if (a.RegionCode > b.RegionCode) {
              return 2;
            }
            if (a.LanguageName < b.LanguageName) {
              return -1;
            }
            if (a.LanguageName > b.LanguageName) {
              return 1;
            }
            return 0;
          };
          this.registerKeyboard = function() {
            _this.updateMap = true;
            if (_this.startTimer) {
              clearTimeout(_this.startTimer);
            }
            _this.startTimer = window.setTimeout(_this.addKeyboardsToMap, 0);
          };
          this.hideKeyboardsForLanguage = function(event) {
            var e = _this.keyboardsForLangPopup;
            if (e) {
              e.style.display = "none";
            }
            _this.CancelPopupDismissal(_this.hideKeyboardsForLanguage);
            return _this.eventCapture(event);
          };
          this.showKeyboardsForLanguage = function(event, lang) {
            _this.hideKeyboardsPopup(event);
            var e = _this.langKeyboardListNodes[lang.id];
            if (e) {
              if (e.style.display == "block") {
                return _this.hideKeyboardsForLanguage(event);
              }
              e.style.display = "block";
              _this.keyboardsForLangPopup = e;
              _this.SetupPopupDismissal(e, _this.hideKeyboardsForLanguage);
            }
            return _this.eventCapture(event);
          };
          this.showOSK = function(event) {
            var osk = keymanweb_1.osk;
            if (!osk) {
              return;
            }
            keymanweb_1.activatingUI(true);
            if (osk && keymanweb_1.getActiveKeyboard() != "") {
              if (osk.isEnabled()) {
                osk.hide();
              } else {
                osk.show(true);
              }
            }
            _this.setLastFocus();
            keymanweb_1.activatingUI(false);
            return _this.eventCapture(event);
          };
          this.offButtonClickEvent = function(event) {
            if (_this.toolbarNode.className != "kmw_controls_disabled") {
              _this.hideKeyboardsForLanguage(null);
              if (_this.selectedLanguage) {
                var found = _this.findListedKeyboard(_this.selectedLanguage);
                if (found != null) {
                  _this.listedKeyboards[found].buttonNode.className = "kmw_button";
                }
              }
              _this.selectedKeyboard = null;
              _this.selectedLanguage = null;
              _this.offButtonNode.className = "kmw_button_selected";
            }
            _this.setLastFocus();
            keymanweb_1.setActiveKeyboard("", "");
            _this.saveCookie();
            _this.enableControls();
            return _this.eventCapture(event);
          };
          this.eventCapture = function(event) {
            if (!event) {
              event = window.event;
            }
            if (window.event) {
              window.event.returnValue = false;
            }
            if (event) {
              event.cancelBubble = true;
            }
            return false;
          };
          this.selectRegion = function(event, region) {
            var e = _this.browseMapNode;
            if (!e) {
              return _this.eventCapture(event);
            }
            e.className = "kmw_browsemap_" + region;
            if (typeof _this.regionLanguageListNodes[region] == "undefined") {
              _this.updateMap = true;
              _this.addKeyboardsToMap();
            }
            _this.regionLanguageListNodes[region].style.display = "block";
            _this.regionNodes[region].className = "selected";
            if (_this.selectedRegion != null && _this.selectedRegion != region) {
              _this.regionLanguageListNodes[_this.selectedRegion].style.display = "none";
              _this.regionNodes[_this.selectedRegion].className = "";
            }
            _this.selectedRegion = region;
            return _this.eventCapture(event);
          };
          this.unhoverRegion = function(event, region) {
            _this.browseMapNode.className = _this.selectedRegion == null ? "" : "kmw_browsemap_" + _this.selectedRegion;
            _this.regionNodes[region].className = _this.selectedRegion == region ? "selected" : "";
            return _this.eventCapture(event);
          };
          this.hoverRegion = function(event, region) {
            _this.browseMapNode.className = "kmw_browsemap_" + region + "_sel";
            _this.regionNodes[region].className = "hover";
            return _this.eventCapture(event);
          };
          this.focusControlEvent = function(params) {
            if (!_this.init) {
              return true;
            }
            var t = params.target;
            if (t.tagName.toLowerCase() == "textarea" || t.tagName.toLowerCase() == "input" && t.type.toLowerCase() == "text") {
              _this.lastActiveControl = t;
              if (_this.pluck(t, "kmw_disable")) {
                if (_this.toolbarNode.className != "kmw_controls_disabled") {
                  _this.toolbarNode.className = "kmw_controls_disabled";
                }
              } else {
                if (_this.selectedKeyboard != null) {
                  if (keymanweb_1.isCJK()) {
                    _this.oskButtonNode.style.display = _this.oskBarNode.style.display = "none";
                  } else {
                    var osk = keymanweb_1.osk;
                    _this.oskButtonNode.className = osk && osk.isEnabled() ? "kmw_button_selected" : "kmw_button";
                  }
                }
                if (_this.toolbarNode.className != "") {
                  _this.toolbarNode.className = "";
                }
                var offsetX = void 0, offsetY = void 0;
                if (t["KMW_HelpOffsetX"]) {
                  offsetX = t["KMW_HelpOffsetX"];
                } else {
                  offsetX = 64;
                }
                if (t["KMW_HelpOffsetY"]) {
                  offsetY = t["KMW_HelpOffsetY"];
                } else {
                  offsetY = 0;
                }
                _this.helpOffsetX = util_1.getAbsoluteX(t) + offsetX;
                _this.helpOffsetY = util_1.getAbsoluteY(t) + t.offsetHeight + offsetY;
              }
            }
            return true;
          };
          this.blurControlEvent = function() {
            if (!_this.init) {
              return true;
            }
            if (_this.oskButtonNode.style.display != "none") {
              _this.oskButtonNode.className = "kmw_button_disabled";
            }
            return true;
          };
          this.changeKeyboardEvent = function(p) {
            _this.lastSelectedKeyboard = null;
            var kbName = p.internalName, lgName = keymanweb_1.util.getLanguageCodes(p.languageCode)[0];
            if (lgName != "" && kbName != "") {
              var lg = _this.languages[lgName];
              if (lg != null) {
                for (var j = 0; j < lg.keyboards.length; j++) {
                  if (lg.keyboards[j].InternalName == kbName) {
                    _this.selectKeyboard(null, lg, lg.keyboards[j], false);
                    return true;
                  }
                }
              }
              _this.lastSelectedKeyboard = (0, build_exports.__assign)({}, p);
            }
            return true;
          };
          this.onShowOSK = function(oskPosition) {
            if (_this.init) {
              _this.oskButtonNode.className = "kmw_button_selected";
            }
            return oskPosition;
          };
          this.onHideOSK = function(p) {
            if (_this.init && p.HiddenByUser) {
              _this.oskButtonNode.className = "kmw_button";
            }
          };
          this.showKeyboardsPopup = function(event) {
            _this.addKeyboardsToMap();
            if (_this.toolbarNode.className == "kmw_controls_disabled") {
              return _this.eventCapture(event);
            }
            _this.hideKeyboardsForLanguage(null);
            if (_this.selectorNode.className == "kmw_over") {
              return _this.hideKeyboardsPopup(event);
            }
            _this.selectorNode.className = "kmw_over";
            _this.keyboardsButtonNode.className = "kmw_button_selected";
            _this.SetupPopupDismissal(_this.selectorNode, _this.hideKeyboardsPopup);
            return _this.eventCapture(event);
          };
          this.hideKeyboardsPopup = function(event) {
            _this.selectorNode.className = "";
            _this.keyboardsButtonNode.className = "kmw_button";
            _this.CancelPopupDismissal(_this.hideKeyboardsPopup);
            return _this.eventCapture(event);
          };
          this.hideAllPopups = function(event) {
            var e = _this.keyboardsForLangPopup;
            if ((!e || e.style.display == "none") && _this.selectorNode.className == "") {
              return true;
            }
            _this.hideKeyboardsPopup(event);
            _this.hideKeyboardsForLanguage(event);
            return _this.eventCapture(event);
          };
          this.dismissalCallback = null;
          this.popupElement = null;
          this.lastDismissalCallback = null;
          this.PopupDismissal = function(event) {
            var t = event && event.target || window.event && window.event.srcElement;
            if (t) {
              while (t.parentElement) {
                if (t == _this.popupElement) {
                  return null;
                }
                t = t.parentElement;
              }
            }
            if (t.nodeName == "#document") {
              _this.hideAllPopups(event);
            }
            return _this.dismissalCallback;
          };
        }
        ToolbarUI2.prototype.createNode = function(tag, id, className, innerHTML) {
          var node = document.createElement(tag);
          if (id) {
            node.id = id;
          }
          if (className) {
            node.className = className;
          }
          if (innerHTML) {
            node.innerHTML = innerHTML;
          }
          if (tag == "a" || tag == "area" || tag == "map") {
            node.ondragstart = function() {
              return false;
            };
          }
          return node;
        };
        ToolbarUI2.prototype.initialize = function() {
          var _this = this;
          if (!keymanweb_1.initialized || this.init) {
            return;
          }
          var e = document.getElementById("KeymanWebControl");
          if (!e) {
            if (document.body == null) {
              return;
            } else {
              e = document.createElement("div");
              e.id = "KeymanWebControl";
              document.body.insertBefore(e, document.body.firstChild);
              this._insertedElem = e;
            }
          }
          e.style.visibility = "hidden";
          e.style.maxHeight = "35px";
          this.init = true;
          if (util_1.isTouchDevice()) {
            return;
          }
          this.regions = {};
          this.regions["na"] = { t: this.ToolBar_Text["na"], m: "0,3,0,37,24,32,35,37,43,47,49,52,65,54,68,57,71,56,73,59,75,60,93,61,93,57,103,49,118,41,126,41,136,23,148,17,156,14,164,5,164,0,57,0,35,5,25,9,5,8,49,52,65,54,68,57,71,56,73,59,75,60,93,61,94,58,97,58,101,59,107,60,114,64,115,68,114,77,104,74,98,75,96,78,95,82,90,81,85,80,82,76,78,74,74,73,65,68,57,61,82,82,95,82,96,78,98,75,104,74,114,77,120,79,124,83,126,87,141,90,142,97,138,103,135,113,127,116,123,124,115,131,112,132,109,138,117,139,140,141,141,146,134,148,114,145,109,148,100,148,91,143,91,130,96,111,89,102,83,95,77,89" }, this.regions["eu"] = { t: this.ToolBar_Text["eu"], m: "145,29,146,19,158,14,171,6,187,2,206,1,217,4,227,11,231,16,231,33,227,34,225,35,225,37,227,39,228,44,228,47,227,48,223,46,218,44,215,43,208,43,203,45,202,48,205,52,201,52,195,49,189,50,187,48,177,48,175,49,166,50,147,33" }, this.regions["af"] = { t: this.ToolBar_Text["af"], m: "150,58,158,50,166,50,175,49,177,48,187,48,189,50,195,49,201,52,205,52,207,53,221,75,229,75,231,77,231,85,227,92,232,101,237,106,237,112,227,115,222,118,206,125,199,127,193,127,185,111,183,104,180,87,168,89,153,85,143,71,147,60" }, this.regions["as"] = { t: this.ToolBar_Text["as"], m: "219,1,221,6,228,12,231,16,231,33,227,34,225,35,225,37,227,39,229,45,232,48,239,48,240,49,239,53,242,60,243,65,249,70,252,81,259,87,271,87,278,95,289,100,303,101,311,98,320,98,323,98,323,84,311,81,308,73,307,65,317,57,330,50,334,44,348,36,364,38,375,34,375,8,355,8,336,5,292,1,285,0,219,0" }, this.regions["oc"] = { t: this.ToolBar_Text["oc"], m: "288,117,289,107,303,101,311,98,323,98,323,84,333,77,344,73,362,80,369,88,375,96,375,141,352,143,323,142,316,136,310,130,291,130" };
          this.regions["un"] = { t: this.ToolBar_Text["un"], m: "205,52,202,48,203,45,208,43,215,43,218,44,223,46,227,48,232,48,239,48,240,49,239,53,242,60,243,65,237,76,231,77,229,75,221,75,207,53" }, this.toolbarNode = this.createNode("div", "kmw_controls");
          this.toolbarNode.style.display = "block";
          util_1.linkStyleSheet(util_1.getOption("resources") + "ui/toolbar/kmwuitoolbar.css");
          var tbNode = this.createNode("a", "kmw_controls_start", null, " ");
          tbNode.href = "https://keyman.com/developer/keymanweb/";
          tbNode.target = "_blank";
          this.toolbarNode.appendChild(tbNode);
          this.keyboardsButtonNode = this.createNode("div", "kmw_btn_keyboards", "kmw_button");
          this.keyboardsButtonNode.title = this.ToolBar_Text.LanguageSelector;
          var aNode = this.createNode("a", null, "kmw_button_a");
          aNode.href = "#";
          aNode.onclick = this.showKeyboardsPopup;
          aNode.appendChild(this.createNode("div", "kmw_img_keyboards", "kmw_img"));
          aNode.appendChild(this.createNode("div", null, "kmw_a", this.ToolBar_Text.Keyboards));
          aNode.appendChild(this.createNode("div", null, "kmw_drop"));
          this.keyboardsButtonNode.appendChild(aNode);
          this.selectorNode = this.createNode("div", "kmw_selector");
          this.regionsNode = this.createNode("div", "kmw_selector_regions");
          this.browseMapNode = this.createNode("div", "kmw_browsemap");
          var imgNode = this.createNode("img", "kmw_region_browsemap");
          imgNode.src = util_1.getOption("resources") + "ui/toolbar/blank.gif";
          imgNode.useMap = "#kmw_worldgrey16";
          this.browseMapNode.appendChild(imgNode);
          var mapNode = this.createNode("map", "kmw_worldgrey16");
          mapNode.name = "kmw_worldgrey16";
          for (var i in this.regions) {
            var areaNode_1 = this.createNode("area");
            areaNode_1.shape = "poly";
            areaNode_1.alt = "";
            areaNode_1.href = "#";
            areaNode_1.title = this.regions[i].t;
            areaNode_1["hidefocus"] = "true";
            areaNode_1.onclick = function(i2) {
              return function(event) {
                return _this.selectRegion(event, i2);
              };
            }(i);
            areaNode_1.onmouseover = function(i2) {
              return function(event) {
                return _this.hoverRegion(event, i2);
              };
            }(i);
            areaNode_1.onmouseout = function(i2) {
              return function(event) {
                return _this.unhoverRegion(event, i2);
              };
            }(i);
            areaNode_1.coords = this.regions[i].m;
            mapNode.appendChild(areaNode_1);
          }
          var areaNode = this.createNode("area");
          areaNode.shape = "default";
          areaNode.noHref = true;
          areaNode.alt = "";
          areaNode.onclick = this.eventCapture;
          mapNode.appendChild(areaNode);
          this.browseMapNode.appendChild(mapNode);
          this.regionsNode.appendChild(this.browseMapNode);
          this.regionNodes = {};
          var listNode = this.createNode("ul");
          for (var i in this.regions) {
            var itemNode = this.createNode("li");
            this.regionNodes[i] = this.createNode("a", null, null, this.regions[i].t);
            this.regionNodes[i].href = "#";
            this.regionNodes[i].onclick = function(i2) {
              return function(event) {
                return _this.selectRegion(event, i2);
              };
            }(i);
            this.regionNodes[i].onmouseover = function(i2) {
              return function(event) {
                return _this.hoverRegion(event, i2);
              };
            }(i);
            this.regionNodes[i].onmouseout = function(i2) {
              return function(event) {
                return _this.unhoverRegion(event, i2);
              };
            }(i);
            itemNode.appendChild(this.regionNodes[i]);
            listNode.appendChild(itemNode);
          }
          this.regionsNode.appendChild(listNode);
          this.selectorNode.appendChild(this.regionsNode);
          this.keyboardsButtonNode.appendChild(this.selectorNode);
          this.toolbarNode.appendChild(this.keyboardsButtonNode);
          this.toolbarNode.appendChild(this.offBarNode = this.createNode("div", "kmw_bar_off", "kmw_bar"));
          this.offButtonNode = this.createNode("div", "kmw_btn_off", "kmw_button_selected");
          aNode = this.createNode("a", null, "kmw_button_a");
          aNode.href = "#";
          aNode.onclick = this.offButtonClickEvent;
          aNode.title = this.ToolBar_Text.OffTitle;
          aNode.appendChild(this.createNode("div", "kmw_img_off", "kmw_img"));
          aNode.appendChild(this.createNode("div", null, "kmw_a", this.ToolBar_Text.Off));
          this.offButtonNode.appendChild(aNode);
          this.toolbarNode.appendChild(this.offButtonNode);
          this.toolbarNode.appendChild(this.languageButtonsNode = this.createNode("div", "kmw_control_keyboards", "kmw_button"));
          this.toolbarNode.appendChild(this.oskBarNode = this.createNode("div", "kmw_bar_osk", "kmw_bar"));
          this.oskButtonNode = this.createNode("div", "kmw_btn_osk", "kmw_button");
          aNode = this.createNode("a", null, "kmw_button_a");
          aNode.href = "#";
          aNode.onclick = this.showOSK;
          aNode.onmousedown = function() {
            keymanweb_1.activatingUI(true);
          };
          aNode.title = this.ToolBar_Text.ShowOSK;
          aNode.appendChild(this.createNode("div", "kmw_img_osk", "kmw_img"));
          this.oskButtonNode.appendChild(aNode);
          this.toolbarNode.appendChild(this.oskButtonNode);
          this.toolbarNode.appendChild(this.createNode("div", "kmw_controls_end", null, " "));
          var img = this.createNode("div");
          img.id = "kmw_map_preload";
          this.toolbarNode.appendChild(img);
          this.toolbarNode.appendChild(this.createNode("br", null, "kmw_clear"));
          e.appendChild(this.toolbarNode);
          this.updateMap = true;
          if (this.startTimer) {
            clearTimeout(this.startTimer);
          }
          this.startTimer = window.setTimeout(this.addKeyboardsToMap, 0);
          util_1.attachDOMEvent(document.body, "click", this.hideAllPopups, false);
          this.selectedRegion = "eu";
          this.registerEvents();
          keymanweb_1.focusLastActiveElement();
        };
        ToolbarUI2.prototype.shutdown = function() {
          var root = this.toolbarNode;
          if (root) {
            root.parentNode.removeChild(root);
          }
          root = this._insertedElem;
          if (root) {
            root.parentNode.removeChild(root);
          }
        };
        ToolbarUI2.prototype.findListedKeyboard = function(lang) {
          if (typeof lang != "string") {
            lang = lang.id;
          }
          for (var i = 0; i < this.listedKeyboards.length; i++) {
            if (this.listedKeyboards[i].lang.id == lang) {
              return i;
            }
          }
          return null;
        };
        ToolbarUI2.prototype.addKeyboardToList = function(lang, kbd) {
          var _this = this;
          var found = this.findListedKeyboard(lang);
          if (found == null) {
            if (this.listedKeyboards.length >= this.maxListedKeyboards) {
              var oldestPriority = 2147483647, oldestFound = null;
              for (var i = 0; i < this.listedKeyboards.length; i++) {
                if (this.listedKeyboards[i].priority < oldestPriority) {
                  oldestFound = i;
                  oldestPriority = this.listedKeyboards[i].priority;
                }
              }
              if (oldestFound != null) {
                var rk = this.listedKeyboards[oldestFound];
                this.langKeyboardListNodes[rk.lang.id] = null;
                this.langKeyboardNodes[rk.lang.id] = null;
                this.languageButtonsNode.removeChild(rk.buttonNode);
                if (oldestFound == 0) {
                  this.listedKeyboards = this.listedKeyboards.slice(oldestFound + 1);
                } else if (oldestFound == this.listedKeyboards.length - 1) {
                  this.listedKeyboards = this.listedKeyboards.slice(0, oldestFound);
                } else {
                  this.listedKeyboards = this.listedKeyboards.slice(0, oldestFound).concat(this.listedKeyboards.slice(oldestFound + 1));
                }
              }
            }
            var buttonNode = this.createNode("div", null, "kmw_button");
            var aNode = this.createNode("a", null, "kmw_button_a" + (lang.keyboards.length > 1 ? " kmw_norightgap" : ""));
            aNode.href = "#";
            var p1 = this.ToolBar_Text["SelectKeyboardPre"] + kbd.Name;
            var p2 = this.ToolBar_Text["SelectKeyboardSuf"];
            if (p1.toLowerCase().indexOf(p2.toLowerCase()) < 0) {
              p1 = p1 + " " + p2;
            }
            aNode.title = p1;
            aNode.onclick = function(event) {
              return _this.selectLanguage(event, lang);
            };
            aNode.appendChild(this.createNode("div", "kmw_img_kbd", "kmw_img"));
            this.lgText = this.truncate(lang.name, 28);
            aNode.appendChild(this.createNode("div", null, "kmw_a", this.lgText));
            buttonNode.appendChild(aNode);
            var thisANode = aNode;
            if (lang.keyboards.length > 1) {
              aNode = this.createNode("a", null, "kmw_button_a kmw_noleftgap");
              aNode.href = "#";
              aNode.title = this.ToolBar_Text["AltKeyboardsPre"] + lang.name + this.ToolBar_Text["AltKeyboardsSuf"];
              aNode.onclick = function(event) {
                return _this.showKeyboardsForLanguage(event, lang);
              };
              var divNode = this.createNode("div", null, "kmw_a");
              var kbdText_1 = this.truncate(kbd.Name.replace(/\s?keyboard/i, ""), 40 - this.lgText.length);
              divNode.appendChild(this.langKeyboardNodes[lang.id] = this.createNode("span", null, "kmw_kbd", kbdText_1));
              aNode.appendChild(divNode);
              aNode.appendChild(this.createNode("div", null, "kmw_drop"));
              buttonNode.appendChild(aNode);
              this.langKeyboardListNodes[lang.id] = this.createNode("ul", null, "kmw_selector_kbd");
              this.langKeyboardListNodes[lang.id].style.display = "none";
              for (var n in lang.keyboards) {
                var itemNode = this.createNode("li");
                kbdText_1 = lang.keyboards[n].Name.replace(/\s?keyboard/i, "");
                kbdText_1 = kbdText_1 + " [" + lang.keyboards[n].LanguageCode + "]";
                aNode = this.createNode("a", null, null, kbdText_1);
                aNode.href = "#";
                aNode.title = "";
                aNode.onclick = function(lang2, kbd2) {
                  return function(event) {
                    return _this.selectKeyboard(event, lang2, kbd2, true);
                  };
                }(lang, lang.keyboards[n]);
                itemNode.appendChild(aNode);
                this.langKeyboardListNodes[lang.id].appendChild(itemNode);
              }
              buttonNode.appendChild(this.langKeyboardListNodes[lang.id]);
            }
            this.languageButtonsNode.appendChild(buttonNode);
            var thisLang = lang, thisButtonNode = buttonNode;
            this.listedKeyboards.push({ priority: this.keyboardListPriority++, lang: thisLang, keyboard: kbd, buttonNode: thisButtonNode, aNode: thisANode });
          } else {
            this.listedKeyboards[found].priority = this.keyboardListPriority++;
            this.listedKeyboards[found].keyboard = kbd;
            var e = this.langKeyboardNodes[lang.id];
            if (e) {
              var kbdText = kbd.Name.replace(/\s?keyboard/i, "");
              e.innerHTML = this.truncate(kbdText, 40 - this.lgText.length);
            }
            if (this.listedKeyboards[found].aNode) {
              var p1 = this.ToolBar_Text["SelectKeyboardPre"] + kbd.Name;
              var p2 = this.ToolBar_Text["SelectKeyboardSuf"];
              if (p1.toLowerCase().indexOf(p2.toLowerCase()) < 0) {
                p1 = p1 + " " + p2;
              }
              this.listedKeyboards[found].aNode.title = p1;
            }
          }
        };
        ToolbarUI2.prototype.truncate = function(PName, PLen) {
          if (PName.length <= PLen) {
            return PName;
          }
          return PName.substr(0, PLen - 1) + "\u2026";
        };
        ToolbarUI2.prototype.selectLanguage = function(event, lang) {
          var found = this.findListedKeyboard(lang);
          var kbd = null;
          if (found == null) {
            kbd = lang.keyboards[0];
          } else {
            kbd = this.listedKeyboards[found].keyboard;
          }
          if (!kbd) {
            return false;
          }
          return this.selectKeyboard(event, lang, kbd, true);
        };
        ToolbarUI2.prototype.selectKeyboard = function(event, lang, kbd, updateKeyman) {
          var _this = this;
          keymanweb_1.activatingUI(true);
          if (this.selectedLanguage) {
            var found = this.findListedKeyboard(this.selectedLanguage);
            if (found != null) {
              this.listedKeyboards[found].buttonNode.className = "kmw_button";
            }
          }
          this.offButtonNode.className = "kmw_button";
          this.selectedKeyboard = kbd;
          this.selectedLanguage = kbd.LanguageCode;
          this.addKeyboardToList(lang, kbd);
          if (updateKeyman) {
            keymanweb_1.setActiveKeyboard(kbd.InternalName, kbd.LanguageCode).then(function() {
              _this.setLastFocus();
            });
          }
          this.listedKeyboards[this.findListedKeyboard(lang)].buttonNode.className = "kmw_button_selected";
          this.saveCookie();
          this.enableControls();
          keymanweb_1.activatingUI(false);
          return this.hideKeyboardsPopup(event) || this.hideKeyboardsForLanguage(event);
        };
        ToolbarUI2.prototype.enableControls = function() {
          var elems = [
            this.offButtonNode,
            this.offBarNode,
            this.oskButtonNode,
            this.oskBarNode
          ];
          var hideOskButton = false;
          if (keymanweb_1.isCJK(this.selectedKeyboard)) {
            hideOskButton = true;
          } else if (this.selectedKeyboard == null) {
            hideOskButton = elems[2].style.display == "none";
          }
          if (this.selectedKeyboard != null || this.listedKeyboards.length > 0) {
            for (var i = 0; i < elems.length; i++) {
              elems[i].style.display = "";
            }
          } else {
            for (var i = 0; i < elems.length; i++) {
              elems[i].style.display = "none";
            }
          }
          if (hideOskButton) {
            this.oskButtonNode.style.display = this.oskBarNode.style.display = "none";
          } else if (this.selectedKeyboard == null) {
            this.oskButtonNode.className = "kmw_button_disabled";
          }
          this.toolbarNode.parentElement.style.visibility = "visible";
          return true;
        };
        ToolbarUI2.prototype.setLastFocus = function() {
          keymanweb_1.focusLastActiveElement();
        };
        ToolbarUI2.prototype.pluck = function(elem, property) {
          return elem.getAttribute ? elem.getAttribute(property) || elem[property] : elem[property];
        };
        ;
        ToolbarUI2.prototype.registerEvents = function() {
          var osk = keymanweb_1.osk;
          if (!osk) {
            return;
          }
          osk.addEventListener("show", this.onShowOSK);
          osk.addEventListener("hide", this.onHideOSK);
        };
        ToolbarUI2.prototype.SetupPopupDismissal = function(element, callback) {
          if (this.PopupDismissal == document.onclick) {
            this.CancelPopupDismissal(this.dismissalCallback);
          }
          this.dismissalCallback = callback;
          this.popupElement = element;
          this.lastDismissalCallback = document.onclick;
          document.onclick = this.PopupDismissal;
        };
        ToolbarUI2.prototype.CancelPopupDismissal = function(callback) {
          if (this.PopupDismissal == document.onclick) {
            document.onclick = this.lastDismissalCallback;
            this.lastDismissalCallback = null;
            this.dismissalCallback = null;
            this.popupElement = null;
          }
        };
        ToolbarUI2.prototype.loadCookie = function() {
          var currentKeyboard = "";
          var currentLgCode = "";
          var kc = util_1.loadCookie("KeymanWeb_Keyboard");
          if (kc.current != void 0) {
            currentKeyboard = kc.current.split(":")[0];
          }
          var c = util_1.loadCookie("KeymanWeb_Toolbar");
          if (c.region != void 0) {
            this.selectedRegion = c.region;
          }
          if (c.maxrecent != void 0) {
            for (var i = 0; i < c.maxrecent; i++) {
              if (c["recent" + i] != void 0) {
                var r = c["recent" + i].split(",");
                if (r.length == 2) {
                  var k = this.languages[r[0]];
                  if (k != null) {
                    for (var j = 0; j < k.keyboards.length; j++) {
                      if (k.keyboards[j].InternalName == r[1]) {
                        this.addKeyboardToList(k, k.keyboards[j]);
                        if (k.keyboards[j].InternalName == currentKeyboard) {
                          this.selectKeyboard(null, k, k.keyboards[j], true);
                          window.focus();
                          this.setLastFocus();
                          break;
                        }
                        break;
                      }
                    }
                  }
                }
              }
            }
          } else {
            var kbName = keymanweb_1.getActiveKeyboard();
            var lgName = keymanweb_1.getActiveLanguage();
            if (lgName != "" && kbName != "") {
              var lg = this.languages[lgName];
              if (lg != null) {
                for (var j = 0; j < lg.keyboards.length; j++) {
                  if (lg.keyboards[j].InternalName == kbName) {
                    this.selectKeyboard(null, lg, lg.keyboards[j], true);
                    window.focus();
                    this.setLastFocus();
                  }
                }
              }
            }
          }
        };
        ToolbarUI2.prototype.saveCookie = function() {
          var vs = {
            region: this.selectedRegion,
            maxrecent: this.listedKeyboards.length
          };
          vs.region = this.selectedRegion;
          vs.maxrecent = this.listedKeyboards.length;
          for (var i = 0; i < this.listedKeyboards.length; i++) {
            vs["recent" + i] = this.listedKeyboards[i].lang.id + "," + this.listedKeyboards[i].keyboard.InternalName;
          }
          util_1.saveCookie("KeymanWeb_Toolbar", vs);
        };
        return ToolbarUI2;
      }();
      ui = keymanweb_1.ui = new ToolbarUI();
      keymanweb_1.addEventListener("keyboardregistered", ui.registerKeyboard);
      keymanweb_1.addEventListener("controlfocused", ui.focusControlEvent);
      keymanweb_1.addEventListener("controlblurred", ui.blurControlEvent);
      keymanweb_1.addEventListener("keyboardchange", ui.changeKeyboardEvent);
      ui.initialize();
    } catch (ex) {
    }
  }
  var keymanweb_1;
  var util_1;
  var controller;
  var ToolbarUI;
  var ui;
})();
//# sourceMappingURL=kmwuitoolbar.js.map
