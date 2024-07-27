(function() {
  // ../../../build/app/ui/obj/kmwuitoggle.js
  var _b;
  if (!((_b = keyman === null || keyman === void 0 ? void 0 : keyman.ui) === null || _b === void 0 ? void 0 : _b.name)) {
    try {
      keymanweb_1 = keyman;
      util_1 = keymanweb_1.util;
      if (util_1.isTouchDevice()) {
        throw "";
      }
      ToggleUI = /* @__PURE__ */ function() {
        function ToggleUI2() {
          var _this = this;
          this.name = "toggle";
          this.initialized = false;
          this.controller = null;
          this.oskButton = null;
          this.kbdButton = null;
          this.controllerHovered = false;
          this.keyboards = [];
          this.lastActiveKeyboard = -1;
          this.selectedMenuItem = null;
          this.updateList = true;
          this.updateTimer = null;
          this.switchOsk = function() {
            if (keymanweb_1.getActiveKeyboard() == "" || keymanweb_1.isCJK()) {
              return;
            }
            if (keymanweb_1.osk) {
              var newState = !keymanweb_1.osk.isEnabled();
              keymanweb_1.osk.show(newState);
              _this.oskButton._setSelected(newState);
            }
          };
          this.switchSingleKbd = function() {
            var _v = keymanweb_1.getActiveKeyboard() == "";
            var nLastKbd = 0, kbdName = "", lgCode = "";
            if (_v) {
              if (_this.keyboards.length == 0) {
                return;
              }
              if (_this.lastActiveKeyboard < _this.keyboards.length && _this.lastActiveKeyboard >= 0) {
                nLastKbd = _this.lastActiveKeyboard;
              }
              kbdName = _this.keyboards[nLastKbd]._InternalName;
              lgCode = _this.keyboards[nLastKbd]._LanguageCode;
              keymanweb_1.setActiveKeyboard(kbdName, lgCode);
              _this.lastActiveKeyboard = nLastKbd;
            } else {
              keymanweb_1.setActiveKeyboard("");
            }
            if (_this.kbdButton) {
              _this.kbdButton._setSelected(_v);
            }
          };
          this.switchNextKbd = function() {
            var _v = keymanweb_1.getActiveKeyboard() == "";
            var kbdName = "", lgCode = "";
            if (_v) {
              if (_this.keyboards.length == 0) {
                return;
              }
              kbdName = _this.keyboards[0]._InternalName;
              lgCode = _this.keyboards[0]._LanguageCode;
              keymanweb_1.setActiveKeyboard(kbdName, lgCode);
              _this.lastActiveKeyboard = 0;
            } else {
              if (_this.lastActiveKeyboard == _this.keyboards.length - 1) {
                keymanweb_1.setActiveKeyboard("");
                _v = false;
              } else {
                kbdName = _this.keyboards[++_this.lastActiveKeyboard]._InternalName;
                lgCode = _this.keyboards[_this.lastActiveKeyboard]._LanguageCode;
                keymanweb_1.setActiveKeyboard(kbdName, lgCode);
                _v = true;
              }
            }
            if (_this.kbdButton) {
              _this.kbdButton._setSelected(_v);
            }
          };
          this.updateKeyboardList = function() {
            if (!(keymanweb_1.initialized || _this.initialized)) {
              return;
            }
            _this.updateList = false;
            var _kbds = keymanweb_1.getKeyboards();
            var imgPath = util_1.getOption("resources") + "ui/toggle/";
            if (_kbds.length > 1) {
              var _kmw_ctrl_img = document.getElementById("KMW_Controller_Img");
              _kmw_ctrl_img.src = imgPath + "kmw_logo_16_down.gif";
              _kmw_ctrl_img.style.width = "100%";
              _this.controller.style.background = "url(" + imgPath + "kmwcontroller2x.gif)";
              _this.kbdButton.getElem().id = "kmwico";
              _this.kbdButton.getElem().style.width = "36px";
              _this.kbdButton._onmouseover = function() {
                _this.keyboardMenu.className = "sfhover";
              };
              _this.kbdButton._onmouseout = function() {
                _this.keyboardMenu.className = "sfunhover";
              };
              _this.kbdButton._onclick = null;
              _this.createMenu();
            } else if (_kbds.length == 1) {
              var _kmw_ctrl_img = document.getElementById("KMW_Controller_Img");
              _kmw_ctrl_img.src = imgPath + "kmw_logo_16.gif";
              _this.kbdButton.getElem().id = "kmwico";
              _this.kbdButton.getElem().style.width = "24px";
              var Lki = _kbds[0].InternalName;
              var Lklc = _kbds[0].LanguageCode;
              _this.controller.style.background = "url(" + imgPath + "kmwcontroller2.gif)";
              _this.keyboards.push({ _InternalName: Lki, _LanguageCode: Lklc, _Index: 0 });
              _this.kbdButton._onclick = _this.switchSingleKbd;
              _this.kbdButton._onmouseover = function() {
              };
              _this.kbdButton._onmouseout = function() {
              };
              _this.createMenu();
              if (typeof _this.keyboardMenu != "undefined") {
                delete _this.keyboardMenu;
              }
            }
            var sk = keymanweb_1.getSavedKeyboard().split(":");
            _this.updateMenu(sk[0], sk[1]);
          };
        }
        ToggleUI2.prototype.doFocus = function(someElement, focusing, activeControl) {
          if (!this.initialized) {
            return;
          }
          if (window.event && keymanweb_1.isAttached(window.event.srcElement)) {
            someElement = window.event.srcElement;
          }
          if (focusing) {
            this.controller.style.display = "block";
          } else {
            if (!keymanweb_1.getUIState().activationPending && !this.controllerHovered) {
              this.controller.style.display = "none";
            }
          }
          var w, h;
          var p = util_1.getAbsolute(someElement);
          var x = p.x;
          var y = p.y;
          var ownerDoc = someElement.ownerDocument;
          if (ownerDoc.designMode == "on" && ownerDoc.defaultView && ownerDoc.defaultView.frameElement) {
            w = ownerDoc.defaultView.frameElement.clientWidth;
            h = ownerDoc.defaultView.frameElement.clientHeight;
          } else {
            w = someElement.offsetWidth;
            h = someElement.offsetHeight;
          }
          if (x + w > window.innerWidth + document.documentElement.scrollLeft - this.controller.offsetWidth - 1) {
            y += h;
          } else {
            x += w + 2;
            y += h - 29;
          }
          if (isNaN(x) || isNaN(y)) {
            return;
          }
          this.controller.style.left = x + "px";
          this.controller.style.top = y + "px";
        };
        ToggleUI2.prototype.registerEvents = function() {
          var _this = this;
          var osk = keymanweb_1.osk;
          if (!osk) {
            return;
          }
          osk.addEventListener("show", function(oskPosition) {
            _this.controller.style.display = "block";
            _this.oskButton._setSelected(true);
            return oskPosition;
          });
          osk.addEventListener("hide", function(byUser) {
            if (byUser["HiddenByUser"]) {
              _this.oskButton._setSelected(false);
            }
          });
        };
        ;
        ToggleUI2.prototype.button = function(_src, _caption, _selected) {
          var ui = this;
          var Button = function() {
            function Button2() {
              var _this = this;
              this._onclick = null;
              this._onmouseover = null;
              this._onmouseout = null;
              this._down = false;
              this._over = false;
              this.__mouseover = function() {
                ui.controllerHovered = true;
                _this._over = true;
                if (_this._onmouseover != null) {
                  _this._onmouseover();
                }
                _this.__updatestyle();
              };
              this.__mouseout = function() {
                ui.controllerHovered = false;
                _this._over = false;
                if (_this._onmouseout != null) {
                  _this._onmouseout();
                }
                _this.__updatestyle();
              };
              this.__click = function() {
                keymanweb_1.activatingUI(false);
                if (_this._onclick != null) {
                  return _this._onclick();
                }
                return false;
              };
              this.__mousedown = function() {
                keymanweb_1.activatingUI(true);
                _this._down = true;
                _this.__updatestyle();
                return false;
              };
              this.__mouseup = function() {
                _this._down = false;
                _this.__updatestyle();
              };
              this._selected = _selected;
              var imgPath = util_1.getOption("resources") + "ui/toggle/";
              var _elemImg = util_1.createElement("img");
              this._elem = util_1.createElement("div");
              this._elem["_owningObject"] = this;
              _elemImg.style.display = "block";
              _elemImg.src = imgPath + _src;
              _elemImg.id = "KMW_Controller_Img";
              this._elem.style.margin = "0px";
              this._elem.style.width = "24px";
              this._elem.style.height = "24px";
              this._elem.style.zIndex = "10002";
              this._elem.style.lineHeight = "100%";
              this._elem.style["styleFloat"] = this._elem.style.cssFloat = "left";
              _elemImg.title = _caption;
              _elemImg.alt = _caption;
              this._elem.appendChild(_elemImg);
              this._elem.onmouseover = this.__mouseover;
              this._elem.onmouseout = this.__mouseout;
              this._elem.onmousedown = this.__mousedown;
              this._elem.onmouseup = this.__mouseup;
              _elemImg["_owningObject"] = this;
              _elemImg.onclick = this.__click;
              this.__updatestyle();
            }
            Button2.prototype.getElem = function() {
              return this._elem;
            };
            ;
            Button2.prototype.__updatestyle = function() {
              var ss = this._elem.style;
              if (this._over) {
                ss.margin = "0px";
                if (this._selected) {
                  ss.border = "solid 1px #ad4a28";
                  ss.background = "#dfb4b4";
                } else {
                  ss.border = "solid 1px #dfb4b4";
                  ss.background = "#f3e5de";
                }
              } else if (this._selected) {
                ss.background = "#f3e5de";
                ss.margin = "0px";
                ss.border = "solid 1px #ad4a28";
              } else {
                ss.background = "none";
                ss.margin = "1px";
                ss.border = "none";
              }
            };
            ;
            Button2.prototype._setSelected = function(_value) {
              keymanweb_1.activatingUI(false);
              this._selected = _value;
              this.__updatestyle();
            };
            ;
            Button2.prototype._getSelected = function() {
              return this._selected;
            };
            ;
            Button2.prototype._getOver = function() {
              return this._over;
            };
            ;
            Button2.prototype._getDown = function() {
              return this._down;
            };
            ;
            return Button2;
          }();
          return new Button();
        };
        ;
        ToggleUI2.prototype.initialize = function() {
          if (!keymanweb_1.initialized || util_1.isTouchDevice()) {
            return;
          }
          if (!this.initialized) {
            this.controller = util_1.createElement("div");
          } else {
            this.controller.innerHTML = "";
          }
          var imgPath = util_1.getOption("resources") + "ui/toggle/";
          this.controller.style.background = "url(" + imgPath + "kmwcontroller2x.gif)";
          this.controller.style.padding = "1px 2px";
          var v1 = util_1.loadCookie("KeymanWeb_Keyboard");
          var kbdEnabledOnLoad = false;
          if (typeof v1.current != "undefined") {
            kbdEnabledOnLoad = v1.current.indexOf("---") < 0;
          }
          this.kbdButton = this.button("kmw_logo_16.gif", "Use Web Keyboard", kbdEnabledOnLoad);
          this.controller.appendChild(this.kbdButton.getElem());
          var v2 = util_1.loadCookie("KeymanWeb_OnScreenKeyboard");
          var oskEnabledOnLoad = true;
          if (typeof v2.visible != "undefined") {
            oskEnabledOnLoad = v2.visible == 1;
          }
          this.oskButton = this.button("kmw_osk_16.gif", "Show On Screen Keyboard", oskEnabledOnLoad);
          this.oskButton._onclick = this.switchOsk;
          this.controller.appendChild(this.oskButton.getElem());
          if (!this.initialized) {
            this.controller.style.display = "none";
          }
          this.controller.style.zIndex = "10001";
          this.controller.style.position = "absolute";
          if (!this.initialized) {
            document.body.appendChild(this.controller);
          }
          this.initialized = true;
          this.updateKeyboardList();
          this.registerEvents();
          util_1.addStyleSheet(this.stylingCSS);
        };
        ToggleUI2.prototype.shutdown = function() {
          var root = this.controller;
          if (root) {
            root.parentNode.removeChild(root);
          }
        };
        ToggleUI2.prototype.selectKbd = function(_kbd) {
          var _name, _lgCode, _index;
          if (_kbd < 0) {
            _name = "";
            _lgCode = "";
            _index = "";
          } else {
            _name = this.keyboards[_kbd]._InternalName;
            _lgCode = this.keyboards[_kbd]._LanguageCode;
            _index = this.keyboards[_kbd]._Index;
          }
          keymanweb_1.setActiveKeyboard(_name, _lgCode);
          keymanweb_1.focusLastActiveElement();
          this.kbdButton._setSelected(_name != "");
          if (_kbd >= 0) {
            this.lastActiveKeyboard = _kbd;
          }
          return false;
        };
        ;
        ToggleUI2.prototype.updateMenu = function(kbdName, lgCode) {
          var _k = document.getElementById("KMWSel_$");
          for (var i = 0; i < this.keyboards.length; i++) {
            if (this.keyboards[i]._InternalName == kbdName && this.keyboards[i]._LanguageCode == lgCode) {
              _k = document.getElementById("KMWSel_" + this.keyboards[i]._InternalName + "$" + this.keyboards[i]._Index);
            }
          }
          if (_k) {
            if (this.selectedMenuItem != null) {
              this.selectedMenuItem.className = "";
            }
            _k.className = "selected";
            this.selectedMenuItem = _k;
          }
          if (!this.oskButton) {
            return;
          }
          if (lgCode == "cmn" || lgCode == "jpn" || lgCode == "kor") {
            this.oskButton.getElem().style.display = "none";
          } else if (kbdName == "") {
            this.oskButton.getElem().style.display = "none";
          } else {
            this.oskButton.getElem().style.display = "block";
          }
        };
        Object.defineProperty(ToggleUI2.prototype, "stylingCSS", {
          get: function() {
            return "\n#KeymanWeb_KbdList {\n  display: block;\n  position: absolute;\n  width: auto;\n  line-height: 100%;\n  margin: 0;\n  clear: both;\n  float: none;\n  top: auto;\n  border: solid 2px #ad4a28;\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 4px 4px 2px rgba(136,136,136,.5);\n  -webkit-box-shadow: 4px 4px 2px rgba(136,136,136,.5);\n  -moz-box-shadow: 4px 4px 2px rgba(136,136,136,.5);\n  list-style: none;\n  padding: 0;\n  background: white;\n  max-height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  white-space: nowrap;\n  z-index: 10001; /* above the osk */\n}\n\n.sfunhover#KeymanWeb_KbdList {\n  display: none; left: -999px;\n}\n\n.sfhover#KeymanWeb_KbdList {\n  display: block;\n  left: auto;\n}\n\n#KeymanWeb_KbdList li {\n  float: none;\n  width: auto;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n\n#KeymanWeb_KbdList li a {\n  display: block;\n  padding: 2px 4px;\n  color: #404040;\n  font-family: Tahoma,Verdana,Arial,sans-serif;\n  font-size: 8pt;\n  text-decoration: none;\n}\n\n#KeymanWeb_KbdList li a.selected {\n  font-weight: bold;\n  color: black;\n}\n\n#KeymanWeb_KbdList li a:hover {\n  color: white;\n  background-color: #ad4a28;\n  text-decoration: underline;\n}\n";
          },
          enumerable: false,
          configurable: true
        });
        ToggleUI2.prototype.createMenu = function() {
          var _this = this;
          if (typeof this.keyboardMenu == "undefined") {
            this.keyboardMenu = util_1.createElement("ul");
            this.keyboardMenu.id = "KeymanWeb_KbdList";
            this.keyboardMenu.className = "sfunhover";
          } else {
            this.keyboardMenu.innerHTML = "";
          }
          var _li = util_1.createElement("li");
          var _a = util_1.createElement("a");
          _a.innerHTML = "(System keyboard)";
          _a.href = "#";
          _a.onclick = function() {
            return _this.selectKbd(-1);
          };
          _a.id = "KMWSel_$";
          _a.className = "selected";
          _li.appendChild(_a);
          this.selectedMenuItem = _a;
          this.keyboardMenu.appendChild(_li);
          var _kbds = keymanweb_1.getKeyboards(), _added = [];
          this.keyboards = [];
          for (var _kbd = 0; _kbd < _kbds.length; _kbd++) {
            var _li1 = util_1.createElement("li");
            var _a1 = util_1.createElement("a");
            _a1.innerHTML = _kbds[_kbd].LanguageName + " - " + _kbds[_kbd].Name;
            if (!_added[_kbds[_kbd].InternalName])
              _added[_kbds[_kbd].InternalName] = 0;
            _added[_kbds[_kbd].InternalName]++;
            var _n = _added[_kbds[_kbd].InternalName];
            this.keyboards.push({ _InternalName: _kbds[_kbd].InternalName, _LanguageCode: _kbds[_kbd].LanguageCode, _Index: _n });
            _a1.href = "#";
            _a1.onclick = function(x) {
              return function() {
                return _this.selectKbd(x);
              };
            }(this.keyboards.length - 1);
            _a1.id = "KMWSel_" + _kbds[_kbd].InternalName + "$" + _n;
            _li1.appendChild(_a1);
            this.keyboardMenu.appendChild(_li1);
          }
          if (this.keyboardMenu.parentNode != this.kbdButton.getElem()) {
            this.kbdButton.getElem().appendChild(this.keyboardMenu);
          }
        };
        ;
        return ToggleUI2;
      }();
      ui_1 = keymanweb_1.ui = new ToggleUI();
      keymanweb_1.addHotKey(191, 32, ui_1.switchSingleKbd);
      keymanweb_1.addHotKey(191, 48, ui_1.switchNextKbd);
      keymanweb_1.addHotKey(191, 64, ui_1.switchOsk);
      keymanweb_1.addEventListener("controlfocused", function(params) {
        ui_1.doFocus(params.target, true, params.activeControl);
      });
      keymanweb_1.addEventListener("controlblurred", function(params) {
        ui_1.doFocus(params.target, false, null);
      });
      keymanweb_1.addEventListener("keyboardregistered", function(p) {
        ui_1.updateList = true;
        if (ui_1.updateTimer) {
          clearTimeout(ui_1.updateTimer);
        }
        ui_1.updateTimer = window.setTimeout(ui_1.updateKeyboardList, 200);
      });
      keymanweb_1.addEventListener("keyboardchange", function(p) {
        ui_1.updateMenu(p.internalName, p.languageCode);
      });
      ui_1.initialize();
    } catch (ex) {
    }
  }
  var keymanweb_1;
  var util_1;
  var ToggleUI;
  var ui_1;
})();
//# sourceMappingURL=kmwuitoggle.js.map
