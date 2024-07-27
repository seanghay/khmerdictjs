(function() {
  // ../../../build/app/ui/obj/kmwuibutton.js
  var _b;
  if (!((_b = keyman === null || keyman === void 0 ? void 0 : keyman.ui) === null || _b === void 0 ? void 0 : _b.name)) {
    try {
      keymanweb_1 = keyman;
      util_1 = keymanweb_1.util;
      if (util_1.isTouchDevice()) {
        throw "";
      }
      UIButton = /* @__PURE__ */ function() {
        function UIButton2() {
          var _this = this;
          this.name = "button";
          this.init = false;
          this.initTimer = null;
          this.keyboardSelector = null;
          this.KeymanWeb_DefaultKeyboardHelp = '<span style="font-size:7.5pt">KeymanWeb is not running.  Choose a keyboard from the list</span>';
          this._KeymanWeb_KbdList = null;
          this._KMWSel = null;
          this._IsHelpVisible = false;
          this._DefaultKeyboardID = "";
          this.updateTimer = 0;
          this.updateList = true;
          this._insertedElem = null;
          this._SelectKeyboard = function(_id) {
            var id = "";
            if (typeof _id == "object") {
              var t = null;
              if (typeof _id.target != "undefined" && _id.target) {
                t = _id.target;
              } else if (typeof _id.srcElement != "undefined" && _id.srcElement) {
                t = _id.srcElement;
              }
              if (t) {
                id = t.id;
              }
            }
            var _r = /^KMWSel_(.*)\$(.*)$/;
            var _rv = _r.exec(id), _lgc = "", _name = "";
            if (_rv !== null) {
              _name = _rv[1].split("$")[0];
              _lgc = id.split("$")[1];
              if (_this._KMWSel != null) {
                _this._KMWSel.className = "";
              }
              var _k = document.getElementById(id);
              if (_k) {
                _k.className = "selected";
              }
              _this._KMWSel = _k;
              keymanweb_1.setActiveKeyboard(_name, _lgc);
            } else {
              _name = null;
            }
            keymanweb_1.focusLastActiveElement();
            var osk = keymanweb_1.osk;
            if (osk && osk.isEnabled()) {
              osk.show(true);
            }
            _this._ShowKeyboardButton(_name);
            return false;
          };
          this._SelectorMouseDown = function(e) {
            var x = keymanweb_1.getLastActiveElement();
            if (!x) {
              _this._FocusFirstInput();
            } else {
              keymanweb_1.focusLastActiveElement();
            }
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(1);
            }
          };
          this._SelectorMouseUp = function(e) {
            var x = keymanweb_1.getLastActiveElement();
            if (!x) {
              _this._FocusFirstInput();
            } else {
              keymanweb_1.focusLastActiveElement();
            }
          };
          this._SelectorMouseOver = function(e) {
            _this._ShowSelected();
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(1);
            }
            document.getElementById("kmwico_li").className = "sfhover";
            _this._ShowKeyboardButton();
          };
          this._SelectorMouseOut = function(e) {
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(0);
            }
            document.getElementById("kmwico_li").className = "sfunhover";
          };
          this._ShowKeymanWebKeyboard = function() {
            var kbdId = document.getElementById("KMW_Keyboard");
            var osk = keymanweb_1.osk;
            if (kbdId.className != "kmw_disabled" && osk && osk.show) {
              if (osk.isEnabled()) {
                osk.hide();
              } else {
                osk.show(true);
              }
            }
            if (window.event) {
              window.event.returnValue = false;
            }
            keymanweb_1.focusLastActiveElement();
            return false;
          };
          this.initialize = function() {
            if (_this.initTimer) {
              window.clearTimeout(_this.initTimer);
              _this.initTimer = null;
            }
            if (!keymanweb_1.initialized) {
              _this.initTimer = window.setTimeout(_this.initialize, 50);
              return;
            }
            if (_this.init || util_1.isTouchDevice()) {
              return;
            }
            _this.init = true;
            util_1.addStyleSheet(_this._Appearance);
            _this._KeymanWeb_KbdList = util_1.createElement("ul");
            _this._KeymanWeb_KbdList.id = "KeymanWeb_KbdList";
            var _elem = document.getElementById("KeymanWebControl");
            if (!_elem) {
              var _elems = document.getElementsByTagName("div");
              for (var _i = 0; _i < _elems.length; _i++) {
                if (_elems[_i].className == "KeymanWebControl") {
                  _elem = _elems[_i];
                  {
                    break;
                  }
                }
              }
            }
            if (!_elem && document.body != null) {
              _elem = document.createElement("DIV");
              _elem.id = "KeymanWebControl";
              document.body.insertBefore(_elem, document.body.firstChild);
              _this._insertedElem = _elem;
            }
            var imgPath = util_1.getOption("resources") + "ui/button/";
            if (_elem) {
              var dx = document.createElement("DIV");
              var ds = dx.style;
              ds.clear = "both";
              _elem.parentNode.insertBefore(dx, _elem.nextSibling);
              var _btn = util_1.createElement("img");
              var _ul = util_1.createElement("ul");
              var _li0 = util_1.createElement("li");
              _btn.id = "kmwico_a";
              _btn.src = imgPath + "kmw_button.gif";
              _btn.onclick = function() {
                return false;
              };
              _li0.appendChild(_btn);
              _li0.id = "kmwico_li";
              _ul.appendChild(_li0);
              _ul.id = "kmwico";
              _ul.style.display = "block";
              _elem.appendChild(_ul);
            } else {
              return;
            }
            if (!keymanweb_1["iOS"]) {
              var _li = util_1.createElement("li");
              var _a = util_1.createElement("a");
              var _img = util_1.createElement("img");
              _img.src = imgPath + "kbdicon.gif";
              _a.appendChild(_img);
              var _txt1 = document.createTextNode(" Hide Keyboard");
              var _txt2 = document.createTextNode(" Show Keyboard");
              var _sp1 = util_1.createElement("span");
              _sp1.id = "KMW_KbdVisibleMsg";
              _sp1.appendChild(_txt1);
              _a.appendChild(_sp1);
              var _sp2 = util_1.createElement("span");
              _sp2.id = "KMW_KbdHiddenMsg";
              _sp2.appendChild(_txt2);
              _a.appendChild(_sp2);
              _a.onmousedown = _this._ShowKeymanWebKeyboard;
              _a.href = "#";
              _a.id = "KMW_Keyboard";
              _li.id = "KMW_ButtonUI_KbdIcon";
              _li.appendChild(_a);
              _this._KMWSel = _a;
              _this._KeymanWeb_KbdList.appendChild(_li);
            }
            var _li1 = util_1.createElement("li");
            _li1.id = "KMW_ButtonUI_KbdList";
            var _a1 = util_1.createElement("a");
            _a1.appendChild(document.createTextNode("(System keyboard)"));
            _a1.onclick = _this._SelectKeyboard;
            _a1.href = "#";
            _a1.id = "KMWSel_$";
            _a1.className = "selected";
            _li1.appendChild(_a1);
            _this._KMWSel = _a1;
            _this._KeymanWeb_KbdList.appendChild(_li1);
            _this.updateKeyboardList();
            document.getElementById("kmwico_li").appendChild(_this._KeymanWeb_KbdList);
            var _sfEl = document.getElementById("kmwico_li");
            util_1.attachDOMEvent(_sfEl, "mousedown", _this._SelectorMouseDown);
            util_1.attachDOMEvent(_sfEl, "mouseover", _this._SelectorMouseOver);
            util_1.attachDOMEvent(_sfEl, "mouseout", _this._SelectorMouseOut);
            util_1.attachDOMEvent(_sfEl, "mouseup", _this._SelectorMouseUp);
            _this.registerEvents();
            keymanweb_1.focusLastActiveElement();
          };
          this.updateKeyboardList = function() {
            _this.updateList = false;
            if (!_this.init) {
              return;
            }
            for (var i_1 = _this._KeymanWeb_KbdList.childNodes.length; i_1 > 2; i_1--) {
              _this._KeymanWeb_KbdList.removeChild(_this._KeymanWeb_KbdList.childNodes[i_1 - 1]);
            }
            var kbds = keymanweb_1.getKeyboards();
            if (kbds.length > 0) {
              for (var i = 0; i < kbds.length; i++) {
                _this.registerKeyboard(kbds[i].InternalName, kbds[i].LanguageName, kbds[i].Name, kbds[i].LanguageCode);
              }
            }
          };
          this._Appearance = "\n#kmwico, #kmwkbd {\n  vertical-align: middle;\n}\n\n#KeymanWebControl {\n  float:left;\n}\n\n#KeymanWebControl * {\n  letter-spacing: 0px !important;\n  line-height: 1li !important;\n  white-space: nowrap !important;\n}\n\n#KeymanWebControl #kmwico img {\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n#KeymanWebControl #kmwico, #kmwico ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#KeymanWebControl #kmwico_a {\n  display: block;\n  /* border: none !important; */\n  width: 22px; height: 23px;                                 /* sizes needed for kmw_button.gif */\n}\n\n#KeymanWebControl #kmwico li {\n  text-align: left;\n}\n\n#KeymanWebControl #kmwico li ul {\n  display: block;\n  position: absolute;\n  left: -5999px;\n  border: solid 2px #ad4a28;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 4px 4px 2px #666;\n  z-index: 10011; /* above the osk */\n}\n\n#KeymanWebControl #kmwico li.sfunhover ul {\n  display: none; left: -5999px;\n}\n\n#KeymanWebControl #kmwico li:hover ul, #kmwico li.sfhover ul {\n  display: block;\n  left: auto;\n}\n\n#KeymanWebControl #kmwico ul li {\n  float: none;\n  padding: 0 !important;\n  margin: 0 !important;\n  width: 136px !important;\n}\n\n#KeymanWebControl #KMW_LanguageName {\n  font-weight: bold;\n}\n\n#KeymanWebControl #kmwico ul li a, #kmwico ul li a:visited {\n  display: block;\n  padding: 2px 4px !important;\n  border: none !important;\n  /* width: auto; */\n  color: #404040;\n  font-family: Tahoma,Verdana,Arial,sans-serif;\n  font-size: 8pt;\n  text-decoration: none;\n}\n\n#KeymanWebControl #kmwico ul li a.selected {\n  font-weight: bold;\n  color: black;\n}\n\n#KeymanWebControl #kmwico ul li a:hover {\n  color: white;\n  background-color: #ad4a28;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_disabled, #KeymanWebControl #kmwico ul li a.kmw_disabled:hover {\n  color: #c0c0c0; cursor: default;\n  background-color: white;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_show span#KMW_KbdHiddenMsg, #KeymanWebControl #kmwico ul li a.kmw_disabled span#KMW_KbdVisibleMsg {\n  display: none;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_show span#KMW_KbdVisibleMsg {\n  display: inline;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_hide span#KMW_KbdHiddenMsg {\n  display: inline;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_hide span#KMW_KbdVisibleMsg {\n  display: none;\n}\n\n#KeymanWebControl #kmwico ul li#KMW_ButtonUI_KbdIcon {\n  border-bottom: solid 1px #ad4a28;\n}\n";
        }
        UIButton2.prototype._ShowSelected = function() {
          var kbd = keymanweb_1.getActiveKeyboard();
          var lgc = keymanweb_1.getActiveLanguage();
          var kList = this._KeymanWeb_KbdList.childNodes;
          var _r = /^KMWSel_(.*)\$(.*)$/;
          for (var i_2 = 1; i_2 < kList.length; i_2++) {
            kList[i_2].childNodes[0].className = "";
          }
          var i;
          for (i = 2; i < kList.length; i++) {
            var _rv = _r.exec(kList[i].childNodes[0].id);
            if (_rv && _rv[1] == kbd && _rv[2] == lgc) {
              break;
            }
          }
          if (i >= kList.length) {
            i = 1;
          }
          kList[i].childNodes[0].className = "selected";
        };
        UIButton2.prototype._FocusFirstInput = function() {
          var ip = null;
          var tp = null;
          var iList = document.getElementsByTagName("input");
          var tList = document.getElementsByTagName("textarea");
          var i;
          for (i = 0; i < iList.length; i++) {
            if (iList[i].type == "text") {
              break;
            }
          }
          if (i < iList.length) {
            ip = iList[i];
          }
          if (tList.length > 0) {
            tp = tList[0];
          }
          if (!ip && !tp) {
            return;
          } else if (ip && !tp) {
            ip.focus();
          } else if (tp && !ip) {
            tp.focus();
          } else if (ip.offsetTop < tp.offsetTop) {
            ip.focus();
          } else if (ip.offsetTop > tp.offsetTop) {
            tp.focus();
          } else if (ip.offsetLeft < tp.offsetLeft) {
            ip.focus();
          } else {
            tp.focus();
          }
        };
        UIButton2.prototype._ShowKeyboardButton = function(_name) {
          var kbdName = keymanweb_1.getActiveKeyboard();
          var kbdId = document.getElementById("KMW_Keyboard");
          if (arguments.length > 0) {
            kbdName = _name;
          }
          if (kbdId) {
            if (kbdName == "" || keymanweb_1.isCJK()) {
              kbdId.className = "kmw_disabled";
            } else {
              var osk = keymanweb_1.osk;
              kbdId.className = osk && osk.isEnabled() ? "kmw_show" : "kmw_hide";
            }
          }
        };
        UIButton2.prototype.registerEvents = function() {
          var _this = this;
          var osk = keymanweb_1.osk;
          if (!osk) {
            return;
          }
          osk.addEventListener("show", function(oskPosition) {
            var t = keymanweb_1.getLastActiveElement();
            if (t) {
              if (!oskPosition["userLocated"]) {
                oskPosition["x"] = util_1.getAbsoluteX(t);
                oskPosition["y"] = util_1.getAbsoluteY(t) + t.offsetHeight;
              }
            }
            _this._ShowKeyboardButton();
            return oskPosition;
          });
          osk.addEventListener("hide", function(obj) {
            if (arguments.length > 0 && obj["hiddenByUser"]) {
              var _a = document.getElementById("KMW_Keyboard");
              if (_a) {
                _a.className = "kmw_hide";
              }
            }
          });
        };
        UIButton2.prototype.shutdown = function() {
          var root = this._insertedElem;
          if (root) {
            root.parentNode.removeChild(root);
          }
        };
        UIButton2.prototype.registerKeyboard = function(Lki, Lkl, Lkn, Lklc) {
          var _li2 = util_1.createElement("li");
          var _a2 = util_1.createElement("a");
          var _t = Lkn.replace(/\s?keyboard/i, "");
          if (Lkl) {
            var lg = Lkl.split(",")[0];
            if (Lkn.search(lg) == -1) {
              _t = lg + " (" + _t + ")";
            }
          }
          if (_t.length > 26) {
            _t = _t.substr(0, 24) + "\u2026";
          }
          _a2.appendChild(document.createTextNode(_t));
          _a2.onclick = this._SelectKeyboard;
          _a2.href = "#";
          _a2.id = "KMWSel_" + Lki + "$" + Lklc;
          _li2.appendChild(_a2);
          this._KeymanWeb_KbdList.appendChild(_li2);
        };
        return UIButton2;
      }();
      ui_1 = keymanweb_1.ui = new UIButton();
      keymanweb_1.addEventListener("keyboardregistered", function(p) {
        ui_1.updateList = true;
        if (ui_1.updateTimer) {
          clearTimeout(ui_1.updateTimer);
        }
        ui_1.updateTimer = window.setTimeout(ui_1.updateKeyboardList, 20);
      });
      ui_1.initialize();
    } catch (err) {
    }
  }
  var keymanweb_1;
  var util_1;
  var UIButton;
  var ui_1;
})();
//# sourceMappingURL=kmwuibutton.js.map
