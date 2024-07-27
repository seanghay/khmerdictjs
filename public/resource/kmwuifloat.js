(function() {
  // ../../../build/app/ui/obj/kmwuifloat.js
  var _a;
  if (!((_a = keyman === null || keyman === void 0 ? void 0 : keyman.ui) === null || _a === void 0 ? void 0 : _a.name)) {
    try {
      keymanweb_1 = keyman;
      util_1 = keymanweb_1.util;
      dbg = keymanweb_1["debug"];
      if (util_1.isTouchDevice()) {
        throw "";
      }
      UIFloat = /* @__PURE__ */ function() {
        function UIFloat2() {
          var _this = this;
          this.name = "float";
          this.KeyboardSelector = null;
          this.outerDiv = null;
          this.innerDiv = null;
          this.oskButton = null;
          this.kbdIcon = null;
          this.selecting = false;
          this.updateList = true;
          this.updateTimer = 0;
          this.floatRight = false;
          this.initialized = false;
          this.initTimer = 0;
          this.toggleOSK = function() {
            keymanweb_1.activatingUI(true);
            var osk = keymanweb_1.osk;
            if (osk && osk.show) {
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
            keymanweb_1.activatingUI(false);
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
            if (_this.initialized || util_1.isTouchDevice()) {
              return;
            }
            var imgPath = util_1.getOption("resources") + "ui/float/";
            _this.outerDiv = util_1.createElement("div");
            _this.innerDiv = util_1.createElement("div");
            _this.kbdIcon = util_1.createElement("img");
            _this.outerDiv.innerHTML = "<a href='http://keyman.com/web/' target='KeymanWebHelp'><img src='" + imgPath + "kmicon.gif' border='0' style='padding: 0px 2px 0 1px; margin:0px;' title='KeymanWeb' alt='KeymanWeb' /></a>";
            var s = _this.outerDiv.style;
            s.backgroundColor = "white";
            s.border = "solid 1px black";
            s.position = "absolute";
            s.height = "18px";
            s.font = "bold 8pt sans-serif";
            s.display = "none";
            s.textAlign = "left";
            s.overflow = "hidden";
            util_1.attachDOMEvent(_this.outerDiv, "mousedown", _this._SelectorMouseDown);
            util_1.attachDOMEvent(_this.outerDiv, "mouseover", _this._SelectorMouseOver);
            util_1.attachDOMEvent(_this.outerDiv, "mouseout", _this._SelectorMouseOut);
            _this.registerEvents();
            _this.kbdIcon.src = imgPath + "kbdicon.gif";
            _this.kbdIcon.title = "Display visual keyboard";
            _this.oskButtonState(false);
            var Lhdiv = util_1.createElement("div");
            _this.oskButton = Lhdiv;
            Lhdiv.onclick = _this.toggleOSK;
            Lhdiv.appendChild(_this.kbdIcon);
            _this.innerDiv.appendChild(Lhdiv);
            _this.outerDiv.appendChild(_this.innerDiv);
            document.body.appendChild(_this.outerDiv);
            _this.KeyboardSelector = util_1.createElement("select");
            s = _this.KeyboardSelector.style;
            s.font = "8pt sans-serif";
            s.backgroundColor = "#f3e5de";
            s.border = "solid 1px #7B9EBD";
            s.height = "16px";
            s.margin = "1px 2px 0px 2px";
            s.left = "20px";
            s.top = "0px";
            s.position = "absolute";
            s.maxWidth = "150px";
            util_1.attachDOMEvent(_this.KeyboardSelector, "change", _this.SelectKeyboardChange);
            util_1.attachDOMEvent(_this.KeyboardSelector, "blur", _this.SelectBlur);
            _this.innerDiv.appendChild(_this.KeyboardSelector);
            var opt = util_1.getOption("ui"), dfltKeyboard = "(System keyboard)";
            if (opt && typeof opt == "object") {
              if (typeof opt["position"] == "string" && opt["position"] == "right") {
                _this.floatRight = true;
              }
              if (typeof opt["default"] == "string") {
                dfltKeyboard = opt["default"];
              }
            }
            var Lopt = util_1.createElement("option");
            Lopt.value = "-";
            Lopt.innerHTML = dfltKeyboard;
            _this.KeyboardSelector.appendChild(Lopt);
            Lopt = null;
            _this.initialized = true;
            _this.updateKeyboardList();
          };
          this._UnloadUserInterface = function() {
            _this.KeyboardSelector = _this.innerDiv = _this.outerDiv = _this.kbdIcon = null;
          };
          this.updateKeyboardList = function() {
            if (_this.updateList) {
              if (!_this.initialized) {
                _this.initialize();
              }
              var opts = _this.KeyboardSelector.getElementsByTagName("OPTION");
              for (var i = opts.length; i > 1; i--) {
                _this.KeyboardSelector.removeChild(opts[i - 1]);
              }
              var Lkbds = keymanweb_1.getKeyboards();
              for (var Ln = 0; Ln < Lkbds.length; Ln++) {
                var Lopt = util_1.createElement("option");
                Lopt.value = Lkbds[Ln].InternalName + ":" + Lkbds[Ln].LanguageCode;
                Lopt.innerHTML = Lkbds[Ln].Name.replace(/\s?keyboard/i, "");
                if (Lkbds[Ln].LanguageName) {
                  var lg = Lkbds[Ln].LanguageName;
                  lg = lg.split(",")[0];
                  if (Lkbds[Ln].Name.search(lg) == -1) {
                    Lopt.innerHTML = lg + " (" + Lopt.innerHTML + ")";
                  }
                }
                _this.KeyboardSelector.appendChild(Lopt);
                Lopt = null;
              }
            }
            _this.updateList = false;
            var sk = keymanweb_1.getSavedKeyboard().split(":");
            if (sk.length < 2) {
              sk[1] = "";
            }
            _this.updateMenu(sk[0], sk[1]);
            if (keymanweb_1.getLastActiveElement()) {
              _this.HideInterface();
              _this.ShowInterface();
            }
          };
          this.updateMenu = function(kbd, lg) {
            var i = 0;
            if (!_this.initialized) {
              return;
            }
            var match = kbd;
            if (lg != "") {
              match += ":" + lg;
            }
            if (kbd == "") {
              _this.KeyboardSelector.selectedIndex = 0;
            } else {
              var opt = _this.KeyboardSelector.getElementsByTagName("option");
              for (i = 0; i < opt.length; i++) {
                var t = opt[i].value;
                if (lg == "") {
                  t = t.split(":")[0];
                }
                if (t == match) {
                  _this.KeyboardSelector.selectedIndex = i;
                  break;
                }
              }
            }
          };
          this.oskButtonState = function(oskEnabled) {
            var s = _this.kbdIcon.style;
            s.width = "24px";
            s.height = "13px";
            s.top = "1px";
            s.verticalAlign = "bottom";
            s.padding = "2px 2px 1px 2px";
            s.position = "absolute";
            s.border = oskEnabled ? "inset 1px #808080" : "none";
            s.background = oskEnabled ? "#f7e7de" : "white";
            s.display = "block";
            if (_this.initialized) {
              _this.oskButton.style.display = "block";
            }
          };
          this._SelectorMouseDown = function(e) {
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(1);
            }
          };
          this._SelectorMouseOver = function(e) {
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(1);
            }
          };
          this._SelectorMouseOut = function(e) {
            if (keymanweb_1.activatingUI) {
              keymanweb_1.activatingUI(0);
            }
          };
          this.SelectKeyboardChange = function(e) {
            keymanweb_1.activatingUI(true);
            if (_this.KeyboardSelector.value != "-") {
              var i = _this.KeyboardSelector.selectedIndex;
              var t = _this.KeyboardSelector.options[i].value.split(":");
              keymanweb_1.setActiveKeyboard(t[0], t[1]);
            } else {
              keymanweb_1.setActiveKeyboard("");
            }
            keymanweb_1.focusLastActiveElement();
            keymanweb_1.activatingUI(false);
            _this.selecting = true;
          };
          this.SelectBlur = function(e) {
            if (!_this.selecting) {
              keymanweb_1.focusLastActiveElement();
            }
            _this.selecting = false;
          };
          this.ShowInterface = function(Px, Py) {
            if (!_this.initialized)
              return;
            var Ls = _this.outerDiv.style;
            if (Px && Py) {
              Ls.left = Px + "px";
              Ls.top = Py + "px";
            }
            Ls.display = "block";
            _this.kbdIcon.style.left = _this.KeyboardSelector.offsetWidth + 24 + "px";
            _this.addButtonOSK();
            _this.updateMenu(keymanweb_1.getActiveKeyboard(), keymanweb_1.getActiveLanguage());
          };
          this.HideInterface = function() {
            if (!_this.initialized) {
              return;
            }
            _this.outerDiv.style.display = "none";
          };
          this.addButtonOSK = function() {
            if (_this.oskButton != null) {
              if (keymanweb_1.isCJK() || _this.KeyboardSelector.selectedIndex == 0) {
                _this.oskButton.style.display = "none";
                _this.outerDiv.style.width = _this.KeyboardSelector.offsetWidth + 30 + "px";
              } else {
                _this.oskButton.style.display = "block";
                var osk = keymanweb_1.osk;
                if (osk) {
                  _this.oskButtonState(osk.isEnabled());
                } else {
                  _this.oskButtonState(false);
                }
                _this.outerDiv.style.width = _this.KeyboardSelector.offsetWidth + 56 + "px";
              }
            }
          };
          this._Resize = function(e) {
            if (_this.outerDiv.style.display == "block") {
              var elem = keymanweb_1.getLastActiveElement();
              if (_this.floatRight) {
                _this.ShowInterface(util_1.getAbsoluteX(elem) + elem.offsetWidth + 1, util_1.getAbsoluteY(elem) + 1);
              } else {
                _this.ShowInterface(util_1.getAbsoluteX(elem) + 1, util_1.getAbsoluteY(elem) + elem.offsetHeight + 1);
              }
            }
            return true;
          };
        }
        UIFloat2.prototype.shutdown = function() {
          var root = this.outerDiv;
          if (root) {
            root.parentNode.removeChild(root);
          }
          this._UnloadUserInterface();
          if (window.removeEventListener) {
            window.removeEventListener("resize", this._Resize, false);
          }
        };
        UIFloat2.prototype.registerEvents = function() {
          var _this = this;
          keymanweb_1.addEventListener("keyboardregistered", function(p) {
            _this.updateList = true;
            if (_this.updateTimer) {
              clearTimeout(_this.updateTimer);
            }
            _this.updateTimer = window.setTimeout(_this.updateKeyboardList, 200);
          });
          keymanweb_1.addEventListener("keyboardloaded", function(p) {
            var sk = keymanweb_1.getSavedKeyboard().split(":");
            if (sk.length > 1) {
              _this.updateMenu(sk[0], sk[1]);
            }
          });
          keymanweb_1.addEventListener("keyboardchange", function(p) {
            _this.updateMenu(p.internalName, p.languageCode);
            _this.addButtonOSK();
          });
          var osk = keymanweb_1.osk;
          if (!osk) {
            return;
          }
          osk.addEventListener("show", function(oskPosition) {
            _this.addButtonOSK();
            return oskPosition;
          });
          osk.addEventListener("hide", function(hiddenByUser) {
            if (_this.initialized) {
              _this.oskButtonState(false);
            }
          });
        };
        return UIFloat2;
      }();
      ui_1 = keymanweb_1.ui = new UIFloat();
      keymanweb_1.addEventListener("controlfocused", function(params) {
        if (params.activeControl == null || params.activeControl["_kmwAttachment"]) {
          if (ui_1.floatRight) {
            ui_1.ShowInterface(util_1.getAbsoluteX(params.target) + params.target.offsetWidth + 1, util_1.getAbsoluteY(params.target) + 1);
          } else {
            ui_1.ShowInterface(util_1.getAbsoluteX(params.target), util_1.getAbsoluteY(params.target) - parseInt(util_1.getStyleValue(ui_1.outerDiv, "height"), 10) - 2);
          }
        }
        return true;
      });
      keymanweb_1.addEventListener("controlblurred", function(params) {
        if (!params.event) {
          return true;
        }
        if (!params.isActivating) {
          ui_1.HideInterface();
        }
        return true;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", ui_1._Resize, false);
      }
      ui_1.initialize();
    } catch (err) {
    }
  }
  var keymanweb_1;
  var util_1;
  var dbg;
  var UIFloat;
  var ui_1;
})();
//# sourceMappingURL=kmwuifloat.js.map
