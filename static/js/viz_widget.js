(function(window, undefined) {
  (function(window, undefined) {
    var 
    readyList, rootjQuery, core_strundefined = typeof undefined, document = window.document, location = window.location, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "1.9.1", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
      return letter.toUpperCase();
    }, completed = function(event) {
      if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
        detach();
        jQuery.ready();
      }
    }, detach = function() {
      if (document.addEventListener) {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
      } else {
        document.detachEvent("onreadystatechange", completed);
        window.detachEvent("onload", completed);
      }
    };
    jQuery.fn = jQuery.prototype = {jquery: core_version,constructor: jQuery,init: function(selector, context, rootjQuery) {
      var match, elem;
      if (!selector) {
        return this;
      }
      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document.getElementById(match[2]);
            if (elem && elem.parentNode) {
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              }
              this.length = 1;
              this[0] = elem;
            }
            this.context = document;
            this.selector = selector;
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
      } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
      }
      if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
      }
      return jQuery.makeArray(selector, this);
    },selector: "",length: 0,size: function() {
      return this.length;
    },toArray: function() {
      return core_slice.call(this);
    },get: function(num) {
      return num == null ? this.toArray() : (num < 0 ? this[this.length + num] : this[num]);
    },pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },each: function(callback, args) {
      return jQuery.each(this, callback, args);
    },ready: function(fn) {
      jQuery.ready.promise().done(fn);
      return this;
    },slice: function() {
      return this.pushStack(core_slice.apply(this, arguments));
    },first: function() {
      return this.eq(0);
    },last: function() {
      return this.eq(-1);
    },eq: function(i) {
      var len = this.length, j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },end: function() {
      return this.prevObject || this.constructor(null);
    },push: core_push,sort: [].sort,splice: [].splice};
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
      var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (typeof target !== "object" && !jQuery.isFunction(target)) {
        target = {};
      }
      if (length === i) {
        target = this;
        --i;
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && jQuery.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }
              target[name] = jQuery.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({noConflict: function(deep) {
      if (window.$ === jQuery) {
        window.$ = _$;
      }
      if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
      }
      return jQuery;
    },isReady: false,readyWait: 1,holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      if (!document.body) {
        return setTimeout(jQuery.ready);
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.trigger) {
        jQuery(document).trigger("ready").off("ready");
      }
    },isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },isArray: Array.isArray || function(obj) {
      return jQuery.type(obj) === "array";
    },isWindow: function(obj) {
      return obj != null && obj == obj.window;
    },isNumeric: function(obj) {
      return !isNaN(parseFloat(obj)) && isFinite(obj);
    },type: function(obj) {
      if (obj == null) {
        return String(obj);
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
    },isPlainObject: function(obj) {
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      try {
        if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return key === undefined || core_hasOwn.call(obj, key);
    },isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },error: function(msg) {
      throw new Error(msg);
    },parseHTML: function(data, context, keepScripts) {
      if (!data || typeof data !== "string") {
        return null;
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      context = context || document;
      var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = jQuery.buildFragment([data], context, scripts);
      if (scripts) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    },parseJSON: function(data) {
      if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
      }
      if (data === null) {
        return data;
      }
      if (typeof data === "string") {
        data = jQuery.trim(data);
        if (data) {
          if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
            return (new Function("return " + data))();
          }
        }
      }
      jQuery.error("Invalid JSON: " + data);
    },parseXML: function(data) {
      var xml, tmp;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        if (window.DOMParser) {
          tmp = new DOMParser();
          xml = tmp.parseFromString(data, "text/xml");
        } else {
          xml = new ActiveXObject("Microsoft.XMLDOM");
          xml.async = "false";
          xml.loadXML(data);
        }
      } catch (e) {
        xml = undefined;
      }
      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }
      return xml;
    },noop: function() {
    },globalEval: function(data) {
      if (data && jQuery.trim(data)) {
        (window.execScript || function(data) {
          window["eval"].call(window, data);
        })(data);
      }
    },camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },each: function(obj, callback, args) {
      var value, i = 0, length = obj.length, isArray = isArraylike(obj);
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function(text) {
      return text == null ? "" : core_trim.call(text);
    } : function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          core_push.call(ret, arr);
        }
      }
      return ret;
    },inArray: function(elem, arr, i) {
      var len;
      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }
        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
        for (; i < len; i++) {
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }
      return -1;
    },merge: function(first, second) {
      var l = second.length, i = first.length, j = 0;
      if (typeof l === "number") {
        for (; j < l; j++) {
          first[i++] = second[j];
        }
      } else {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }
      first.length = i;
      return first;
    },grep: function(elems, callback, inv) {
      var retVal, ret = [], i = 0, length = elems.length;
      inv = !!inv;
      for (; i < length; i++) {
        retVal = !!callback(elems[i], i);
        if (inv !== retVal) {
          ret.push(elems[i]);
        }
      }
      return ret;
    },map: function(elems, callback, arg) {
      var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret[ret.length] = value;
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret[ret.length] = value;
          }
        }
      }
      return core_concat.apply([], ret);
    },guid: 1,proxy: function(fn, context) {
      var args, proxy, tmp;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = core_slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(core_slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },access: function(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0, length = elems.length, bulk = key == null;
      if (jQuery.type(key) === "object") {
        chainable = true;
        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== undefined) {
        chainable = true;
        if (!jQuery.isFunction(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem, key, value) {
              return bulk.call(jQuery(elem), value);
            };
          }
        }
        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    },now: function() {
      return (new Date()).getTime();
    }});
    jQuery.ready.promise = function(obj) {
      if (!readyList) {
        readyList = jQuery.Deferred();
        if (document.readyState === "complete") {
          setTimeout(jQuery.ready);
        } else if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", completed, false);
          window.addEventListener("load", completed, false);
        } else {
          document.attachEvent("onreadystatechange", completed);
          window.attachEvent("onload", completed);
          var top = false;
          try {
            top = window.frameElement == null && document.documentElement;
          } catch (e) {
          }
          if (top && top.doScroll) {
            (function doScrollCheck() {
              if (!jQuery.isReady) {
                try {
                  top.doScroll("left");
                } catch (e) {
                  return setTimeout(doScrollCheck, 50);
                }
                detach();
                jQuery.ready();
              }
            })();
          }
        }
      }
      return readyList.promise(obj);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
      var length = obj.length, type = jQuery.type(obj);
      if (jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.nodeType === 1 && length) {
        return true;
      }
      return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
    }
    rootjQuery = jQuery(document);
    var optionsCache = {};
    function createOptions(options) {
      var object = optionsCache[options] = {};
      jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery.Callbacks = function(options) {
      options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);
      var 
      firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function(data) {
        memory = options.memory && data;
        fired = true;
        firingIndex = firingStart || 0;
        firingStart = 0;
        firingLength = list.length;
        firing = true;
        for (; list && firingIndex < firingLength; firingIndex++) {
          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
            memory = false;
            break;
          }
        }
        firing = false;
        if (list) {
          if (stack) {
            if (stack.length) {
              fire(stack.shift());
            }
          } else if (memory) {
            list = [];
          } else {
            self.disable();
          }
        }
      }, self = {add: function() {
        if (list) {
          var start = list.length;
          (function add(args) {
            jQuery.each(args, function(_, arg) {
              var type = jQuery.type(arg);
              if (type === "function") {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && type !== "string") {
                add(arg);
              }
            });
          })(arguments);
          if (firing) {
            firingLength = list.length;
          } else if (memory) {
            firingStart = start;
            fire(memory);
          }
        }
        return this;
      },remove: function() {
        if (list) {
          jQuery.each(arguments, function(_, arg) {
            var index;
            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (firing) {
                if (index <= firingLength) {
                  firingLength--;
                }
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            }
          });
        }
        return this;
      },has: function(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
      },empty: function() {
        list = [];
        return this;
      },disable: function() {
        list = stack = memory = undefined;
        return this;
      },disabled: function() {
        return !list;
      },lock: function() {
        stack = undefined;
        if (!memory) {
          self.disable();
        }
        return this;
      },locked: function() {
        return !stack;
      },fireWith: function(context, args) {
        args = args || [];
        args = [context, args.slice ? args.slice() : args];
        if (list && (!fired || stack)) {
          if (firing) {
            stack.push(args);
          } else {
            fire(args);
          }
        }
        return this;
      },fire: function() {
        self.fireWith(this, arguments);
        return this;
      },fired: function() {
        return !!fired;
      }};
      return self;
    };
    jQuery.extend({Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], state = "pending", promise = {state: function() {
        return state;
      },always: function() {
        deferred.done(arguments).fail(arguments);
        return this;
      },then: function() {
        var fns = arguments;
        return jQuery.Deferred(function(newDefer) {
          jQuery.each(tuples, function(i, tuple) {
            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
            deferred[tuple[1]](function() {
              var returned = fn && fn.apply(this, arguments);
              if (returned && jQuery.isFunction(returned.promise)) {
                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
              } else {
                newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
              }
            });
          });
          fns = null;
        }).promise();
      },promise: function(obj) {
        return obj != null ? jQuery.extend(obj, promise) : promise;
      }}, deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2], stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },when: function(subordinate) {
      var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
        return function(value) {
          contexts[i] = this;
          values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
          if (values === progressValues) {
            deferred.notifyWith(contexts, values);
          } else if (!(--remaining)) {
            deferred.resolveWith(contexts, values);
          }
        };
      }, progressValues, progressContexts, resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }});
    jQuery.support = (function() {
      var support, all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
      div.setAttribute("className", "t");
      div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
      all = div.getElementsByTagName("*");
      a = div.getElementsByTagName("a")[0];
      if (!all || !a || !all.length) {
        return {};
      }
      select = document.createElement("select");
      opt = select.appendChild(document.createElement("option"));
      input = div.getElementsByTagName("input")[0];
      a.style.cssText = "top:1px;float:left;opacity:.5";
      support = {getSetAttribute: div.className !== "t",leadingWhitespace: div.firstChild.nodeType === 3,tbody: !div.getElementsByTagName("tbody").length,htmlSerialize: !!div.getElementsByTagName("link").length,style: /top/.test(a.getAttribute("style")),hrefNormalized: a.getAttribute("href") === "/a",opacity: /^0.5/.test(a.style.opacity),cssFloat: !!a.style.cssFloat,checkOn: !!input.value,optSelected: opt.selected,enctype: !!document.createElement("form").enctype,html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",boxModel: document.compatMode === "CSS1Compat",deleteExpando: true,noCloneEvent: true,inlineBlockNeedsLayout: false,shrinkWrapBlocks: false,reliableMarginRight: true,boxSizingReliable: true,pixelPosition: false};
      input.checked = true;
      support.noCloneChecked = input.cloneNode(true).checked;
      select.disabled = true;
      support.optDisabled = !opt.disabled;
      try {
        delete div.test;
      } catch (e) {
        support.deleteExpando = false;
      }
      input = document.createElement("input");
      input.setAttribute("value", "");
      support.input = input.getAttribute("value") === "";
      input.value = "t";
      input.setAttribute("type", "radio");
      support.radioValue = input.value === "t";
      input.setAttribute("checked", "t");
      input.setAttribute("name", "t");
      fragment = document.createDocumentFragment();
      fragment.appendChild(input);
      support.appendChecked = input.checked;
      support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
      if (div.attachEvent) {
        div.attachEvent("onclick", function() {
          support.noCloneEvent = false;
        });
        div.cloneNode(true).click();
      }
      for (i in {submit: true,change: true,focusin: true}) {
        div.setAttribute(eventName = "on" + i, "t");
        support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
      }
      div.style.backgroundClip = "content-box";
      div.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
      jQuery(function() {
        var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
        if (!body) {
          return;
        }
        container = document.createElement("div");
        container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        body.appendChild(container).appendChild(div);
        div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
        tds = div.getElementsByTagName("td");
        tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
        isSupported = (tds[0].offsetHeight === 0);
        tds[0].style.display = "";
        tds[1].style.display = "none";
        support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
        div.innerHTML = "";
        div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
        support.boxSizing = (div.offsetWidth === 4);
        support.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== 1);
        if (window.getComputedStyle) {
          support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
          support.boxSizingReliable = (window.getComputedStyle(div, null) || {width: "4px"}).width === "4px";
          marginDiv = div.appendChild(document.createElement("div"));
          marginDiv.style.cssText = div.style.cssText = divReset;
          marginDiv.style.marginRight = marginDiv.style.width = "0";
          div.style.width = "1px";
          support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
        }
        if (typeof div.style.zoom !== core_strundefined) {
          div.innerHTML = "";
          div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
          support.inlineBlockNeedsLayout = (div.offsetWidth === 3);
          div.style.display = "block";
          div.innerHTML = "<div></div>";
          div.firstChild.style.width = "5px";
          support.shrinkWrapBlocks = (div.offsetWidth !== 3);
          if (support.inlineBlockNeedsLayout) {
            body.style.zoom = 1;
          }
        }
        body.removeChild(container);
        container = div = tds = marginDiv = null;
      });
      all = select = fragment = opt = a = input = null;
      return support;
    })();
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
      if (!jQuery.acceptData(elem)) {
        return;
      }
      var thisCache, ret, internalKey = jQuery.expando, getByName = typeof name === "string", isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
      if ((!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined) {
        return;
      }
      if (!id) {
        if (isNode) {
          elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
        } else {
          id = internalKey;
        }
      }
      if (!cache[id]) {
        cache[id] = {};
        if (!isNode) {
          cache[id].toJSON = jQuery.noop;
        }
      }
      if (typeof name === "object" || typeof name === "function") {
        if (pvt) {
          cache[id] = jQuery.extend(cache[id], name);
        } else {
          cache[id].data = jQuery.extend(cache[id].data, name);
        }
      }
      thisCache = cache[id];
      if (!pvt) {
        if (!thisCache.data) {
          thisCache.data = {};
        }
        thisCache = thisCache.data;
      }
      if (data !== undefined) {
        thisCache[jQuery.camelCase(name)] = data;
      }
      if (getByName) {
        ret = thisCache[name];
        if (ret == null) {
          ret = thisCache[jQuery.camelCase(name)];
        }
      } else {
        ret = thisCache;
      }
      return ret;
    }
    function internalRemoveData(elem, name, pvt) {
      if (!jQuery.acceptData(elem)) {
        return;
      }
      var i, l, thisCache, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
      if (!cache[id]) {
        return;
      }
      if (name) {
        thisCache = pvt ? cache[id] : cache[id].data;
        if (thisCache) {
          if (!jQuery.isArray(name)) {
            if (name in thisCache) {
              name = [name];
            } else {
              name = jQuery.camelCase(name);
              if (name in thisCache) {
                name = [name];
              } else {
                name = name.split(" ");
              }
            }
          } else {
            name = name.concat(jQuery.map(name, jQuery.camelCase));
          }
          for (i = 0, l = name.length; i < l; i++) {
            delete thisCache[name[i]];
          }
          if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
            return;
          }
        }
      }
      if (!pvt) {
        delete cache[id].data;
        if (!isEmptyDataObject(cache[id])) {
          return;
        }
      }
      if (isNode) {
        jQuery.cleanData([elem], true);
      } else if (jQuery.support.deleteExpando || cache != cache.window) {
        delete cache[id];
      } else {
        cache[id] = null;
      }
    }
    jQuery.extend({cache: {},expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),noData: {"embed": true,"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet": true},hasData: function(elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },data: function(elem, name, data) {
      return internalData(elem, name, data);
    },removeData: function(elem, name) {
      return internalRemoveData(elem, name);
    },_data: function(elem, name, data) {
      return internalData(elem, name, data, true);
    },_removeData: function(elem, name) {
      return internalRemoveData(elem, name, true);
    },acceptData: function(elem) {
      if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
        return false;
      }
      var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
      return !noData || noData !== true && elem.getAttribute("classid") === noData;
    }});
    jQuery.fn.extend({data: function(key, value) {
      var attrs, name, elem = this[0], i = 0, data = null;
      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);
          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            attrs = elem.attributes;
            for (; i < attrs.length; i++) {
              name = attrs[i].name;
              if (!name.indexOf("data-")) {
                name = jQuery.camelCase(name.slice(5));
                dataAttr(elem, name, data[name]);
              }
            }
            jQuery._data(elem, "parsedAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          jQuery.data(this, key);
        });
      }
      return jQuery.access(this, function(value) {
        if (value === undefined) {
          return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        }
        this.each(function() {
          jQuery.data(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },removeData: function(key) {
      return this.each(function() {
        jQuery.removeData(this, key);
      });
    }});
    function dataAttr(elem, key, data) {
      if (data === undefined && elem.nodeType === 1) {
        var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
          try {
            data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
          } catch (e) {
          }
          jQuery.data(elem, key, data);
        } else {
          data = undefined;
        }
      }
      return data;
    }
    function isEmptyDataObject(obj) {
      var name;
      for (name in obj) {
        if (name === "data" && jQuery.isEmptyObject(obj[name])) {
          continue;
        }
        if (name !== "toJSON") {
          return false;
        }
      }
      return true;
    }
    jQuery.extend({queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = jQuery._data(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
        jQuery.dequeue(elem, type);
      };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      hooks.cur = fn;
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },_queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return jQuery._data(elem, key) || jQuery._data(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
        jQuery._removeData(elem, type + "queue");
        jQuery._removeData(elem, key);
      })});
    }});
    jQuery.fn.extend({queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },delay: function(time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = setTimeout(next, time);
        hooks.stop = function() {
          clearTimeout(timeout);
        };
      });
    },clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },promise: function(type, obj) {
      var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
        if (!(--count)) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = jQuery._data(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }});
    var nodeHook, boolHook, rclass = /[\t\r\n]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
    jQuery.fn.extend({attr: function(name, value) {
      return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
    },removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    },prop: function(name, value) {
      return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
    },removeProp: function(name) {
      name = jQuery.propFix[name] || name;
      return this.each(function() {
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {
        }
      });
    },addClass: function(value) {
      var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(core_rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            elem.className = jQuery.trim(cur);
          }
        }
      }
      return this;
    },removeClass: function(value) {
      var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(core_rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            elem.className = value ? jQuery.trim(cur) : "";
          }
        }
      }
      return this;
    },toggleClass: function(value, stateVal) {
      var type = typeof value, isBool = typeof stateVal === "boolean";
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function() {
        if (type === "string") {
          var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.match(core_rnotwhite) || [];
          while ((className = classNames[i++])) {
            state = isBool ? state : !self.hasClass(className);
            self[state ? "addClass" : "removeClass"](className);
          }
        } else if (type === core_strundefined || type === "boolean") {
          if (this.className) {
            jQuery._data(this, "__className__", this.className);
          }
          this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
        }
      });
    },hasClass: function(selector) {
      var className = " " + selector + " ", i = 0, l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    },val: function(value) {
      var ret, hooks, isFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val, self = jQuery(this);
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, self.val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
    jQuery.extend({valHooks: {option: {get: function(elem) {
      var val = elem.attributes.value;
      return !val || val.specified ? elem.value : elem.text;
    }},select: {get: function(elem) {
      var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
      for (; i < max; i++) {
        option = options[i];
        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
          value = jQuery(option).val();
          if (one) {
            return value;
          }
          values.push(value);
        }
      }
      return values;
    },set: function(elem, value) {
      var values = jQuery.makeArray(value);
      jQuery(elem).find("option").each(function() {
        this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
      });
      if (!values.length) {
        elem.selectedIndex = -1;
      }
      return values;
    }}},attr: function(elem, name, value) {
      var hooks, notxml, ret, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === core_strundefined) {
        return jQuery.prop(elem, name, value);
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        if (typeof elem.getAttribute !== core_strundefined) {
          ret = elem.getAttribute(name);
        }
        return ret == null ? undefined : ret;
      }
    },removeAttr: function(elem, value) {
      var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (rboolean.test(name)) {
            if (!getSetAttribute && ruseDefault.test(name)) {
              elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
            } else {
              elem[propName] = false;
            }
          } else {
            jQuery.attr(elem, name, "");
          }
          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },attrHooks: {type: {set: function(elem, value) {
      if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
        var val = elem.value;
        elem.setAttribute("type", value);
        if (val) {
          elem.value = val;
        }
        return value;
      }
    }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(elem, name, value) {
      var ret, hooks, notxml, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          return (elem[name] = value);
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        } else {
          return elem[name];
        }
      }
    },propHooks: {tabIndex: {get: function(elem) {
      var attributeNode = elem.getAttributeNode("tabindex");
      return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
    }}}});
    boolHook = {get: function(elem, name) {
      var 
    prop = jQuery.prop(elem, name), attr = typeof prop === "boolean" && elem.getAttribute(name), detail = typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null : ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr : elem.getAttributeNode(name);
    return detail && detail.value !== false ? name.toLowerCase() : undefined;
    },set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {
        elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
      }
      return name;
    }};
    if (!getSetInput || !getSetAttribute) {
      jQuery.attrHooks.value = {get: function(elem, name) {
        var ret = elem.getAttributeNode(name);
        return jQuery.nodeName(elem, "input") ? elem.defaultValue : ret && ret.specified ? ret.value : undefined;
      },set: function(elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          elem.defaultValue = value;
        } else {
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }};
    }
    if (!getSetAttribute) {
      nodeHook = jQuery.valHooks.button = {get: function(elem, name) {
        var ret = elem.getAttributeNode(name);
        return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
      },set: function(elem, value, name) {
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode((ret = elem.ownerDocument.createAttribute(name)));
        }
        ret.value = value += "";
        return name === "value" || value === elem.getAttribute(name) ? value : undefined;
      }};
      jQuery.attrHooks.contenteditable = {get: nodeHook.get,set: function(elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }};
      jQuery.each(["width", "height"], function(i, name) {
        jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {set: function(elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }});
      });
    }
    if (!jQuery.support.hrefNormalized) {
      jQuery.each(["href", "src", "width", "height"], function(i, name) {
        jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {get: function(elem) {
          var ret = elem.getAttribute(name, 2);
          return ret == null ? undefined : ret;
        }});
      });
      jQuery.each(["href", "src"], function(i, name) {
        jQuery.propHooks[name] = {get: function(elem) {
          return elem.getAttribute(name, 4);
        }};
      });
    }
    if (!jQuery.support.style) {
      jQuery.attrHooks.style = {get: function(elem) {
        return elem.style.cssText || undefined;
      },set: function(elem, value) {
        return (elem.style.cssText = value + "");
      }};
    }
    if (!jQuery.support.optSelected) {
      jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {get: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      }});
    }
    if (!jQuery.support.enctype) {
      jQuery.propFix.enctype = "encoding";
    }
    if (!jQuery.support.checkOn) {
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {get: function(elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        }};
      });
    }
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
        }
      }});
    });
    var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    jQuery.event = {global: {},add: function(elem, types, handler, data, selector) {
      var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        };
        eventHandle.elem = elem;
      }
      types = (types || "").match(core_rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({type: type,origType: origType,data: data,handler: handler,guid: handler.guid,selector: selector,needsContext: selector && jQuery.expr.match.needsContext.test(selector),namespace: namespaces.join(".")}, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
      elem = null;
    },remove: function(elem, types, handler, selector, mappedTypes) {
      var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(core_rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, "events");
      }
    },trigger: function(event, data, elem, onlyHandlers) {
      var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") >= 0) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = true;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
          event.preventDefault();
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {
            }
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },handlers: function(event, handlers) {
      var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur != this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({elem: cur,handlers: matches});
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({elem: this,handlers: handlers.slice(delegateCount)});
      }
      return handlerQueue;
    },fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(event, original) {
      if (event.which == null) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }
      return event;
    }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(event, original) {
      var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
      if (event.pageX == null && original.clientX != null) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      }
      if (!event.relatedTarget && fromElement) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
      }
      if (!event.which && button !== undefined) {
        event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
      }
      return event;
    }},special: {load: {noBubble: true},click: {trigger: function() {
      if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
        this.click();
        return false;
      }
    }},focus: {trigger: function() {
      if (this !== document.activeElement && this.focus) {
        try {
          this.focus();
          return false;
        } catch (e) {
        }
      }
    },delegateType: "focusin"},blur: {trigger: function() {
      if (this === document.activeElement && this.blur) {
        this.blur();
        return false;
      }
    },delegateType: "focusout"},beforeunload: {postDispatch: function(event) {
      if (event.result !== undefined) {
        event.originalEvent.returnValue = event.result;
      }
    }}},simulate: function(type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, {type: type,isSimulated: true,originalEvent: {}});
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }};
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle, false);
      }
    } : function(elem, type, handle) {
      var name = "on" + type;
      if (elem.detachEvent) {
        if (typeof elem[name] === core_strundefined) {
          elem[name] = null;
        }
        elem.detachEvent(name, handle);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || jQuery.now();
      this[jQuery.expando] = true;
    };
  jQuery.Event.prototype = {isDefaultPrevented: returnFalse,isPropagationStopped: returnFalse,isImmediatePropagationStopped: returnFalse,preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = returnTrue;
    if (!e) {
      return;
    }
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  },stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = returnTrue;
    if (!e) {
      return;
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.cancelBubble = true;
  },stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  }};
  jQuery.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(orig, fix) {
    jQuery.event.special[orig] = {delegateType: fix,bindType: fix,handle: function(event) {
      var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
      if (!related || (related !== target && !jQuery.contains(target, related))) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = fix;
      }
      return ret;
    }};
  });
  if (!jQuery.support.submitBubbles) {
    jQuery.event.special.submit = {setup: function() {
      if (jQuery.nodeName(this, "form")) {
        return false;
      }
      jQuery.event.add(this, "click._submit keypress._submit", function(e) {
        var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
        if (form && !jQuery._data(form, "submitBubbles")) {
          jQuery.event.add(form, "submit._submit", function(event) {
            event._submit_bubble = true;
          });
          jQuery._data(form, "submitBubbles", true);
        }
      });
    },postDispatch: function(event) {
      if (event._submit_bubble) {
        delete event._submit_bubble;
        if (this.parentNode && !event.isTrigger) {
          jQuery.event.simulate("submit", this.parentNode, event, true);
        }
      }
    },teardown: function() {
      if (jQuery.nodeName(this, "form")) {
        return false;
      }
      jQuery.event.remove(this, "._submit");
    }};
  }
  if (!jQuery.support.changeBubbles) {
    jQuery.event.special.change = {setup: function() {
      if (rformElems.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") {
          jQuery.event.add(this, "propertychange._change", function(event) {
            if (event.originalEvent.propertyName === "checked") {
              this._just_changed = true;
            }
          });
          jQuery.event.add(this, "click._change", function(event) {
            if (this._just_changed && !event.isTrigger) {
              this._just_changed = false;
            }
            jQuery.event.simulate("change", this, event, true);
          });
        }
        return false;
      }
      jQuery.event.add(this, "beforeactivate._change", function(e) {
        var elem = e.target;
        if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
          jQuery.event.add(elem, "change._change", function(event) {
            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
              jQuery.event.simulate("change", this.parentNode, event, true);
            }
          });
          jQuery._data(elem, "changeBubbles", true);
        }
      });
    },handle: function(event) {
      var elem = event.target;
      if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
        return event.handleObj.handler.apply(this, arguments);
      }
    },teardown: function() {
      jQuery.event.remove(this, "._change");
      return !rformElems.test(this.nodeName);
    }};
  }
  if (!jQuery.support.focusinBubbles) {
    jQuery.each({focus: "focusin",blur: "focusout"}, function(orig, fix) {
      var attaches = 0, handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[fix] = {setup: function() {
        if (attaches++ === 0) {
          document.addEventListener(orig, handler, true);
        }
      },teardown: function() {
        if (--attaches === 0) {
          document.removeEventListener(orig, handler, true);
        }
      }};
    });
  }
  jQuery.fn.extend({on: function(types, selector, data, fn, one) {
    var type, origFn;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        this.on(type, selector, data, types[type], one);
      }
      return this;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return this;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return this.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  },one: function(types, selector, data, fn) {
    return this.on(types, selector, data, fn, 1);
  },off: function(types, selector, fn) {
    var handleObj, type;
    if (types && types.preventDefault && types.handleObj) {
      handleObj = types.handleObj;
      jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
      return this;
    }
    if (typeof types === "object") {
      for (type in types) {
        this.off(type, selector, types[type]);
      }
      return this;
    }
    if (selector === false || typeof selector === "function") {
      fn = selector;
      selector = undefined;
    }
    if (fn === false) {
      fn = returnFalse;
    }
    return this.each(function() {
      jQuery.event.remove(this, types, fn, selector);
    });
  },bind: function(types, data, fn) {
    return this.on(types, null, data, fn);
  },unbind: function(types, fn) {
    return this.off(types, null, fn);
  },delegate: function(selector, types, data, fn) {
    return this.on(types, selector, data, fn);
  },undelegate: function(selector, types, fn) {
    return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
  },trigger: function(type, data) {
    return this.each(function() {
      jQuery.event.trigger(type, data, this);
    });
  },triggerHandler: function(type, data) {
    var elem = this[0];
    if (elem) {
      return jQuery.event.trigger(type, data, elem, true);
    }
  }});
  (function(window, undefined) {
    var i, cachedruns, Expr, getText, isXML, compile, hasDuplicate, outermostContext, setDocument, document, docElem, documentIsXML, rbuggyQSA, rbuggyMatches, matches, contains, sortOrder, expando = "sizzle" + -(new Date()), preferredDoc = window.document, support = {}, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, arr = [], pop = arr.pop, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
      var i = 0, len = this.length;
      for (; i < len; i++) {
        if (this[i] === elem) {
          return i;
        }
      }
      return -1;
    }, whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), operators = "([*^$|!~]?=)", attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {"ID": new RegExp("^#(" + characterEncoding + ")"),"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),"NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),"ATTR": new RegExp("^" + attributes),"PSEUDO": new RegExp("^" + pseudos),"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + 
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")}, rsibling = /[\x20\t\r\n\f]*[+~]/, rnative = /^[^{]+\{\s*\[native code/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, funescape = function(_, escaped) {
        var high = "0x" + escaped - 0x10000;
        return high !== high ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
      };
      try {
        slice.call(preferredDoc.documentElement.childNodes, 0)[0].nodeType;
      } catch (e) {
        slice = function(i) {
          var elem, results = [];
          while ((elem = this[i++])) {
            results.push(elem);
          }
          return results;
        };
      }
      function isNative(fn) {
        return rnative.test(fn + "");
      }
      function createCache() {
        var cache, keys = [];
        return (cache = function(key, value) {
          if (keys.push(key += " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return (cache[key] = value);
        });
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var div = document.createElement("div");
        try {
          return fn(div);
        } catch (e) {
          return false;
        }finally {
          div = null;
        }
      }
      function Sizzle(selector, context, results, seed) {
        var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        results = results || [];
        if (!selector || typeof selector !== "string") {
          return results;
        }
        if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
          return [];
        }
        if (!documentIsXML && !seed) {
          if ((match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                elem = context.getElementById(m);
                if (elem && elem.parentNode) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
              return results;
            } else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
              push.apply(results, slice.call(context.getElementsByClassName(m), 0));
              return results;
            }
          }
          if (support.qsa && !rbuggyQSA.test(selector)) {
            old = true;
            nid = expando;
            newContext = context;
            newSelector = nodeType === 9 && selector;
            if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
              groups = tokenize(selector);
              if ((old = context.getAttribute("id"))) {
                nid = old.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", nid);
              }
              nid = "[id='" + nid + "'] ";
              i = groups.length;
              while (i--) {
                groups[i] = nid + toSelector(groups[i]);
              }
              newContext = rsibling.test(selector) && context.parentNode || context;
              newSelector = groups.join(",");
            }
            if (newSelector) {
              try {
                push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
                return results;
              } catch (qsaError) {
              }finally {
                if (!old) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      isXML = Sizzle.isXML = function(elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
      };
      setDocument = Sizzle.setDocument = function(node) {
        var doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
          return document;
        }
        document = doc;
        docElem = doc.documentElement;
        documentIsXML = isXML(doc);
        support.tagNameNoComments = assert(function(div) {
          div.appendChild(doc.createComment(""));
          return !div.getElementsByTagName("*").length;
        });
        support.attributes = assert(function(div) {
          div.innerHTML = "<select></select>";
          var type = typeof div.lastChild.getAttribute("multiple");
          return type !== "boolean" && type !== "string";
        });
        support.getByClassName = assert(function(div) {
          div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
          if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
            return false;
          }
          div.lastChild.className = "e";
          return div.getElementsByClassName("e").length === 2;
        });
        support.getByName = assert(function(div) {
          div.id = expando + 0;
          div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
          docElem.insertBefore(div, docElem.firstChild);
          var pass = doc.getElementsByName && doc.getElementsByName(expando).length === 2 + 
            doc.getElementsByName(expando + 0).length;
          support.getIdNotName = !doc.getElementById(expando);
          docElem.removeChild(div);
          return pass;
        });
        Expr.attrHandle = assert(function(div) {
          div.innerHTML = "<a href='#'></a>";
          return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
        }) ? {} : {"href": function(elem) {
          return elem.getAttribute("href", 2);
        },"type": function(elem) {
          return elem.getAttribute("type");
        }};
        if (support.getIdNotName) {
          Expr.find["ID"] = function(id, context) {
            if (typeof context.getElementById !== strundefined && !documentIsXML) {
              var m = context.getElementById(id);
              return m && m.parentNode ? [m] : [];
            }
          };
          Expr.filter["ID"] = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
        } else {
          Expr.find["ID"] = function(id, context) {
            if (typeof context.getElementById !== strundefined && !documentIsXML) {
              var m = context.getElementById(id);
              return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
            }
          };
          Expr.filter["ID"] = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
              return node && node.value === attrId;
            };
          };
        }
        Expr.find["TAG"] = support.tagNameNoComments ? function(tag, context) {
          if (typeof context.getElementsByTagName !== strundefined) {
            return context.getElementsByTagName(tag);
          }
        } : function(tag, context) {
          var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
          if (tag === "*") {
            while ((elem = results[i++])) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }
            return tmp;
          }
          return results;
        };
        Expr.find["NAME"] = support.getByName && function(tag, context) {
          if (typeof context.getElementsByName !== strundefined) {
            return context.getElementsByName(name);
          }
        };
        Expr.find["CLASS"] = support.getByClassName && function(className, context) {
          if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyMatches = [];
        rbuggyQSA = [":focus"];
        if ((support.qsa = isNative(doc.querySelectorAll))) {
          assert(function(div) {
            div.innerHTML = "<select><option selected=''></option></select>";
            if (!div.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            }
            if (!div.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
          });
          assert(function(div) {
            div.innerHTML = "<input type='hidden' i=''/>";
            if (div.querySelectorAll("[i^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
            }
            if (!div.querySelectorAll(":enabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            div.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }
        if ((support.matchesSelector = isNative((matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
          assert(function(div) {
            support.disconnectedMatch = matches.call(div, "div");
            matches.call(div, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }
        rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = new RegExp(rbuggyMatches.join("|"));
        contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function(a, b) {
          if (b) {
            while ((b = b.parentNode)) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        };
        sortOrder = docElem.compareDocumentPosition ? function(a, b) {
          var compare;
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          if ((compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b))) {
            if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
              if (a === doc || contains(preferredDoc, a)) {
                return -1;
              }
              if (b === doc || contains(preferredDoc, b)) {
                return 1;
              }
              return 0;
            }
            return compare & 4 ? -1 : 1;
          }
          return a.compareDocumentPosition ? -1 : 1;
        } : function(a, b) {
          var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
          if (a === b) {
            hasDuplicate = true;
            return 0;
          } else if (!aup || !bup) {
            return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0;
          } else if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          while ((cur = cur.parentNode)) {
            ap.unshift(cur);
          }
          cur = b;
          while ((cur = cur.parentNode)) {
            bp.unshift(cur);
          }
          while (ap[i] === bp[i]) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        };
        hasDuplicate = false;
        [0, 0].sort(sortOrder);
        support.detectDuplicates = hasDuplicate;
        return document;
      };
      Sizzle.matches = function(expr, elements) {
        return Sizzle(expr, null, null, elements);
      };
      Sizzle.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        expr = expr.replace(rattributeQuotes, "='$1']");
        if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      };
      Sizzle.contains = function(context, elem) {
        if ((context.ownerDocument || context) !== document) {
          setDocument(context);
        }
        return contains(context, elem);
      };
      Sizzle.attr = function(elem, name) {
        var val;
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        if (!documentIsXML) {
          name = name.toLowerCase();
        }
        if ((val = Expr.attrHandle[name])) {
          return val(elem);
        }
        if (documentIsXML || support.attributes) {
          return elem.getAttribute(name);
        }
        return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
      };
      Sizzle.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      Sizzle.uniqueSort = function(results) {
        var elem, duplicates = [], i = 1, j = 0;
        hasDuplicate = !support.detectDuplicates;
        results.sort(sortOrder);
        if (hasDuplicate) {
          for (; (elem = results[i]); i++) {
            if (elem === results[i - 1]) {
              j = duplicates.push(i);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }
        return results;
      };
      function siblingCheck(a, b) {
        var cur = b && a, diff = cur && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
        if (diff) {
          return diff;
        }
        if (cur) {
          while ((cur = cur.nextSibling)) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function createInputPseudo(type) {
        return function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function(elem) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches) {
            var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
            while (i--) {
              if (seed[(j = matchIndexes[i])]) {
                seed[j] = !(matches[j] = seed[j]);
              }
            }
          });
        });
      }
      getText = Sizzle.getText = function(elem) {
        var node, ret = "", i = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          for (; (node = elem[i]); i++) {
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      };
      Expr = Sizzle.selectors = {cacheLength: 50,createPseudo: markFunction,match: matchExpr,find: {},relative: {">": {dir: "parentNode",first: true}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: true},"~": {dir: "previousSibling"}},preFilter: {"ATTR": function(match) {
        match[1] = match[1].replace(runescape, funescape);
        match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }
        return match.slice(0, 4);
      },"CHILD": function(match) {
        match[1] = match[1].toLowerCase();
        if (match[1].slice(0, 3) === "nth") {
          if (!match[3]) {
            Sizzle.error(match[0]);
          }
          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +((match[7] + match[8]) || match[3] === "odd");
        } else if (match[3]) {
          Sizzle.error(match[0]);
        }
        return match;
      },"PSEUDO": function(match) {
        var excess, unquoted = !match[5] && match[2];
        if (matchExpr["CHILD"].test(match[0])) {
          return null;
        }
        if (match[4]) {
          match[2] = match[4];
        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        }
        return match.slice(0, 3);
      }},filter: {"TAG": function(nodeName) {
        if (nodeName === "*") {
          return function() {
            return true;
          };
        }
        nodeName = nodeName.replace(runescape, funescape).toLowerCase();
        return function(elem) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
      },"CLASS": function(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
          return pattern.test(elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "");
        });
      },"ATTR": function(name, operator, check) {
        return function(elem) {
          var result = Sizzle.attr(elem, name);
          if (result == null) {
            return operator === "!=";
          }
          if (!operator) {
            return true;
          }
          result += "";
          return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
        };
      },"CHILD": function(type, what, argument, first, last) {
        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
        return first === 1 && last === 0 ? function(elem) {
          return !!elem.parentNode;
        } : function(elem, context, xml) {
          var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
          if (parent) {
            if (simple) {
              while (dir) {
                node = elem;
                while ((node = node[dir])) {
                  if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                    return false;
                  }
                }
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }
            start = [forward ? parent.firstChild : parent.lastChild];
            if (forward && useCache) {
              outerCache = parent[expando] || (parent[expando] = {});
              cache = outerCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = cache[0] === dirruns && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];
              while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                if (node.nodeType === 1 && ++diff && node === elem) {
                  outerCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
              diff = cache[1];
            } else {
              while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                  if (useCache) {
                    (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                  }
                  if (node === elem) {
                    break;
                  }
                }
              }
            }
            diff -= last;
            return diff === first || (diff % first === 0 && diff / first >= 0);
          }
        };
      },"PSEUDO": function(pseudo, argument) {
        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx, matched = fn(seed, argument), i = matched.length;
              while (i--) {
                idx = indexOf.call(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
      }},pseudos: {"not": markFunction(function(selector) {
        var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
          var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
          while (i--) {
            if ((elem = unmatched[i])) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) : function(elem, context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results);
          return !results.pop();
        };
      }),"has": markFunction(function(selector) {
        return function(elem) {
          return Sizzle(selector, elem).length > 0;
        };
      }),"contains": markFunction(function(text) {
        return function(elem) {
          return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
        };
      }),"lang": markFunction(function(lang) {
        if (!ridentifier.test(lang || "")) {
          Sizzle.error("unsupported lang: " + lang);
        }
        lang = lang.replace(runescape, funescape).toLowerCase();
        return function(elem) {
          var elemLang;
          do {
            if ((elemLang = documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang)) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);
          return false;
        };
      }),"target": function(elem) {
        var hash = window.location && window.location.hash;
        return hash && hash.slice(1) === elem.id;
      },"root": function(elem) {
        return elem === docElem;
      },"focus": function(elem) {
        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
      },"enabled": function(elem) {
        return elem.disabled === false;
      },"disabled": function(elem) {
        return elem.disabled === true;
      },"checked": function(elem) {
        var nodeName = elem.nodeName.toLowerCase();
        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
      },"selected": function(elem) {
        if (elem.parentNode) {
          elem.parentNode.selectedIndex;
        }
        return elem.selected === true;
      },"empty": function(elem) {
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
            return false;
          }
        }
        return true;
      },"parent": function(elem) {
        return !Expr.pseudos["empty"](elem);
      },"header": function(elem) {
        return rheader.test(elem.nodeName);
      },"input": function(elem) {
        return rinputs.test(elem.nodeName);
      },"button": function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === "button" || name === "button";
      },"text": function(elem) {
        var attr;
        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
      },"first": createPositionalPseudo(function() {
        return [0];
      }),"last": createPositionalPseudo(function(matchIndexes, length) {
        return [length - 1];
      }),"eq": createPositionalPseudo(function(matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),"even": createPositionalPseudo(function(matchIndexes, length) {
        var i = 0;
        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }
        return matchIndexes;
      }),"odd": createPositionalPseudo(function(matchIndexes, length) {
        var i = 1;
        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }
        return matchIndexes;
      }),"lt": createPositionalPseudo(function(matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;
        for (; --i >= 0; ) {
          matchIndexes.push(i);
        }
        return matchIndexes;
      }),"gt": createPositionalPseudo(function(matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;
        for (; ++i < length; ) {
          matchIndexes.push(i);
        }
        return matchIndexes;
      })}};
      for (i in {radio: true,checkbox: true,file: true,password: true,image: true}) {
        Expr.pseudos[i] = createInputPseudo(i);
      }
      for (i in {submit: true,reset: true}) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      function tokenize(selector, parseOnly) {
        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if ((match = rcombinators.exec(soFar))) {
            matched = match.shift();
            tokens.push({value: matched,type: match[0].replace(rtrim, " ")});
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({value: matched,type: type,matches: match});
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }
      function toSelector(tokens) {
        var i = 0, len = tokens.length, selector = "";
        for (; i < len; i++) {
          selector += tokens[i].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
        return combinator.first ? function(elem, context, xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
        } : function(elem, context, xml) {
          var data, cache, outerCache, dirkey = dirruns + " " + doneName;
          if (xml) {
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                  if ((data = cache[1]) === true || data === cachedruns) {
                    return data === true;
                  }
                } else {
                  cache = outerCache[dir] = [dirkey];
                  cache[1] = matcher(elem, context, xml) || cachedruns;
                  if (cache[1] === true) {
                    return true;
                  }
                }
              }
            }
          }
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i = matchers.length;
          while (i--) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function condense(unmatched, map, filter, context, xml) {
        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
        for (; i < len; i++) {
          if ((elem = unmatched[i])) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml) {
          var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i = temp.length;
            while (i--) {
              if ((elem = temp[i])) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i = matcherOut.length;
                while (i--) {
                  if ((elem = matcherOut[i])) {
                    temp.push((matcherIn[i] = elem));
                  }
                }
                postFinder(null, (matcherOut = []), temp, xml);
              }
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml) {
          return (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        }];
        for (; i < len; i++) {
          if ((matcher = Expr.relative[tokens[i].type])) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
            if (matcher[expando]) {
              j = ++i;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
          var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
          if (outermost) {
            outermostContext = context !== document && context;
            cachedruns = matcherCachedRuns;
          }
          for (; (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;
              while ((matcher = elementMatchers[j++])) {
                if (matcher(elem, context, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                cachedruns = ++matcherCachedRuns;
              }
            }
            if (bySet) {
              if ((elem = !matcher && elem)) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i;
          if (bySet && i !== matchedCount) {
            j = 0;
            while ((matcher = setMatchers[j++])) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
              Sizzle.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      compile = Sizzle.compile = function(selector, group) {
        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          while (i--) {
            cached = matcherFromTokens(group[i]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        }
        return cached;
      };
      function multipleContexts(selector, contexts, results) {
        var i = 0, len = contexts.length;
        for (; i < len; i++) {
          Sizzle(selector, contexts[i], results);
        }
        return results;
      }
      function select(selector, context, results, seed) {
        var i, tokens, token, type, find, match = tokenize(selector);
        if (!seed) {
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
              context = Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0];
              if (!context) {
                return results;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i--) {
              token = tokens[i];
              if (Expr.relative[(type = token.type)]) {
                break;
              }
              if ((find = Expr.find[type])) {
                if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context))) {
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push.apply(results, slice.call(seed, 0));
                    return results;
                  }
                  break;
                }
              }
            }
          }
        }
        compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
        return results;
      }
      Expr.pseudos["nth"] = Expr.pseudos["eq"];
      function setFilters() {
      }
      Expr.filters = setFilters.prototype = Expr.pseudos;
      Expr.setFilters = new setFilters();
      setDocument();
      Sizzle.attr = jQuery.attr;
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
  })(window);
  var runtil = /Until$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, isSimple = /^.[^:#\[\.,]*$/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {children: true,contents: true,next: true,prev: true};
  jQuery.fn.extend({find: function(selector) {
    var i, ret, self, len = this.length;
    if (typeof selector !== "string") {
      self = this;
      return this.pushStack(jQuery(selector).filter(function() {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(self[i], this)) {
            return true;
          }
        }
      }));
    }
    ret = [];
    for (i = 0; i < len; i++) {
      jQuery.find(selector, this[i], ret);
    }
    ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
    ret.selector = (this.selector ? this.selector + " " : "") + selector;
    return ret;
  },has: function(target) {
    var i, targets = jQuery(target, this), len = targets.length;
    return this.filter(function() {
      for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
          return true;
        }
      }
    });
  },not: function(selector) {
    return this.pushStack(winnow(this, selector, false));
  },filter: function(selector) {
    return this.pushStack(winnow(this, selector, true));
  },is: function(selector) {
    return !!selector && (typeof selector === "string" ? rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
  },closest: function(selectors, context) {
    var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
    for (; i < l; i++) {
      cur = this[i];
      while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
        if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
          ret.push(cur);
          break;
        }
        cur = cur.parentNode;
      }
    }
    return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
  },index: function(elem) {
    if (!elem) {
      return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
    }
    if (typeof elem === "string") {
      return jQuery.inArray(this[0], jQuery(elem));
    }
    return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
  },add: function(selector, context) {
    var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector), all = jQuery.merge(this.get(), set);
    return this.pushStack(jQuery.unique(all));
  },addBack: function(selector) {
    return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
  }});
  jQuery.fn.andSelf = jQuery.fn.addBack;
  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);
    return cur;
  }
  jQuery.each({parent: function(elem) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },parents: function(elem) {
    return jQuery.dir(elem, "parentNode");
  },parentsUntil: function(elem, i, until) {
    return jQuery.dir(elem, "parentNode", until);
  },next: function(elem) {
    return sibling(elem, "nextSibling");
  },prev: function(elem) {
    return sibling(elem, "previousSibling");
  },nextAll: function(elem) {
    return jQuery.dir(elem, "nextSibling");
  },prevAll: function(elem) {
    return jQuery.dir(elem, "previousSibling");
  },nextUntil: function(elem, i, until) {
    return jQuery.dir(elem, "nextSibling", until);
  },prevUntil: function(elem, i, until) {
    return jQuery.dir(elem, "previousSibling", until);
  },siblings: function(elem) {
    return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
  },children: function(elem) {
    return jQuery.sibling(elem.firstChild);
  },contents: function(elem) {
    return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
  }}, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var ret = jQuery.map(this, fn, until);
      if (!runtil.test(name)) {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
      }
      ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
      if (this.length > 1 && rparentsprev.test(name)) {
        ret = ret.reverse();
      }
      return this.pushStack(ret);
    };
  });
  jQuery.extend({filter: function(expr, elems, not) {
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
  },dir: function(elem, dir, until) {
    var matched = [], cur = elem[dir];
    while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
      if (cur.nodeType === 1) {
        matched.push(cur);
      }
      cur = cur[dir];
    }
    return matched;
  },sibling: function(n, elem) {
    var r = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        r.push(n);
      }
    }
    return r;
  }});
  function winnow(elements, qualifier, keep) {
    qualifier = qualifier || 0;
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        var retVal = !!qualifier.call(elem, i, elem);
        return retVal === keep;
      });
    } else if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) === keep;
      });
    } else if (typeof qualifier === "string") {
      var filtered = jQuery.grep(elements, function(elem) {
        return elem.nodeType === 1;
      });
      if (isSimple.test(qualifier)) {
        return jQuery.filter(qualifier, filtered, !keep);
      } else {
        qualifier = jQuery.filter(qualifier, filtered);
      }
    }
    return jQuery.grep(elements, function(elem) {
      return (jQuery.inArray(elem, qualifier) >= 0) === keep;
    });
  }
  function createSafeFragment(document) {
    var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }
    return safeFrag;
  }
var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  jQuery.fn.extend({text: function(value) {
    return jQuery.access(this, function(value) {
      return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
    }, null, value, arguments.length);
  },wrapAll: function(html) {
    if (jQuery.isFunction(html)) {
      return this.each(function(i) {
        jQuery(this).wrapAll(html.call(this, i));
      });
    }
    if (this[0]) {
      var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
      if (this[0].parentNode) {
        wrap.insertBefore(this[0]);
      }
      wrap.map(function() {
        var elem = this;
        while (elem.firstChild && elem.firstChild.nodeType === 1) {
          elem = elem.firstChild;
        }
        return elem;
      }).append(this);
    }
    return this;
  },wrapInner: function(html) {
    if (jQuery.isFunction(html)) {
      return this.each(function(i) {
        jQuery(this).wrapInner(html.call(this, i));
      });
    }
    return this.each(function() {
      var self = jQuery(this), contents = self.contents();
      if (contents.length) {
        contents.wrapAll(html);
      } else {
        self.append(html);
      }
    });
  },wrap: function(html) {
    var isFunction = jQuery.isFunction(html);
    return this.each(function(i) {
      jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
    });
  },unwrap: function() {
    return this.parent().each(function() {
      if (!jQuery.nodeName(this, "body")) {
        jQuery(this).replaceWith(this.childNodes);
      }
    }).end();
  },append: function() {
    return this.domManip(arguments, true, function(elem) {
      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
        this.appendChild(elem);
      }
    });
  },prepend: function() {
    return this.domManip(arguments, true, function(elem) {
      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
        this.insertBefore(elem, this.firstChild);
      }
    });
  },before: function() {
    return this.domManip(arguments, false, function(elem) {
      if (this.parentNode) {
        this.parentNode.insertBefore(elem, this);
      }
    });
  },after: function() {
    return this.domManip(arguments, false, function(elem) {
      if (this.parentNode) {
        this.parentNode.insertBefore(elem, this.nextSibling);
      }
    });
  },remove: function(selector, keepData) {
    var elem, i = 0;
    for (; (elem = this[i]) != null; i++) {
      if (!selector || jQuery.filter(selector, [elem]).length > 0) {
        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
    }
    return this;
  },empty: function() {
    var elem, i = 0;
    for (; (elem = this[i]) != null; i++) {
      if (elem.nodeType === 1) {
        jQuery.cleanData(getAll(elem, false));
      }
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
      if (elem.options && jQuery.nodeName(elem, "select")) {
        elem.options.length = 0;
      }
    }
    return this;
  },clone: function(dataAndEvents, deepDataAndEvents) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    return this.map(function() {
      return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
    });
  },html: function(value) {
    return jQuery.access(this, function(value) {
      var elem = this[0] || {}, i = 0, l = this.length;
      if (value === undefined) {
        return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
      }
      if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
        value = value.replace(rxhtmlTag, "<$1></$2>");
        try {
          for (; i < l; i++) {
            elem = this[i] || {};
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.innerHTML = value;
            }
          }
          elem = 0;
        } catch (e) {
        }
      }
      if (elem) {
        this.empty().append(value);
      }
    }, null, value, arguments.length);
  },replaceWith: function(value) {
    var isFunc = jQuery.isFunction(value);
    if (!isFunc && typeof value !== "string") {
      value = jQuery(value).not(this).detach();
    }
    return this.domManip([value], true, function(elem) {
      var next = this.nextSibling, parent = this.parentNode;
      if (parent) {
        jQuery(this).remove();
        parent.insertBefore(elem, next);
      }
    });
  },detach: function(selector) {
    return this.remove(selector, true);
  },domManip: function(args, table, callback) {
    args = core_concat.apply([], args);
    var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
    if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
      return this.each(function(index) {
        var self = set.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, table ? self.html() : undefined);
        }
        self.domManip(args, table, callback);
      });
    }
    if (l) {
      fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first) {
        table = table && jQuery.nodeName(first, "tr");
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                jQuery.ajax({url: node.src,type: "GET",dataType: "script",async: false,global: false,"throws": true});
              } else {
                jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
              }
            }
          }
        }
        fragment = first = null;
      }
    }
    return this;
  }});
  function findOrAppend(elem, tag) {
    return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
  }
  function disableScript(elem) {
    var attr = elem.getAttributeNode("type");
    elem.type = (attr && attr.specified) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    var elem, i = 0;
    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }
  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }
    var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
    if (events) {
      delete curData.handle;
      curData.events = {};
      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }
  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;
    if (dest.nodeType !== 1) {
      return;
    }
    nodeName = dest.nodeName.toLowerCase();
    if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);
      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }
      dest.removeAttribute(jQuery.expando);
    }
    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }
      if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
      dest.defaultChecked = dest.checked = src.checked;
      if (dest.value !== src.value) {
        dest.value = src.value;
      }
    } else if (nodeName === "option") {
      dest.defaultSelected = dest.selected = src.defaultSelected;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  jQuery.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        core_push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  function getAll(context, tag) {
    var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }
  function fixDefaultChecked(elem) {
    if (manipulation_rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }
  jQuery.extend({clone: function(elem, dataAndEvents, deepDataAndEvents) {
    var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
    if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
      clone = elem.cloneNode(true);
    } else {
      fragmentDiv.innerHTML = elem.outerHTML;
      fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
    }
    if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
      destElements = getAll(clone);
      srcElements = getAll(elem);
      for (i = 0; (node = srcElements[i]) != null; ++i) {
        if (destElements[i]) {
          fixCloneNodeIssues(node, destElements[i]);
        }
      }
    }
    if (dataAndEvents) {
      if (deepDataAndEvents) {
        srcElements = srcElements || getAll(elem);
        destElements = destElements || getAll(clone);
        for (i = 0; (node = srcElements[i]) != null; i++) {
          cloneCopyEvent(node, destElements[i]);
        }
      } else {
        cloneCopyEvent(elem, clone);
      }
    }
    destElements = getAll(clone, "script");
    if (destElements.length > 0) {
      setGlobalEval(destElements, !inPage && getAll(elem, "script"));
    }
    destElements = srcElements = node = null;
    return clone;
  },buildFragment: function(elems, context, scripts, selection) {
    var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || safe.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
          }
          if (!jQuery.support.tbody) {
            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
            j = elem && elem.childNodes.length;
            while (j--) {
              if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
                elem.removeChild(tbody);
              }
            }
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp.textContent = "";
          while (tmp.firstChild) {
            tmp.removeChild(tmp.firstChild);
          }
          tmp = safe.lastChild;
        }
      }
    }
    if (tmp) {
      safe.removeChild(tmp);
    }
    if (!jQuery.support.appendChecked) {
      jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
    }
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) !== -1) {
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(safe.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    tmp = null;
    return safe;
  },cleanData: function(elems, acceptData) {
    var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
    for (; (elem = elems[i]) != null; i++) {
      if (acceptData || jQuery.acceptData(elem)) {
        id = elem[internalKey];
        data = id && cache[id];
        if (data) {
          if (data.events) {
            for (type in data.events) {
              if (special[type]) {
                jQuery.event.remove(elem, type);
              } else {
                jQuery.removeEvent(elem, type, data.handle);
              }
            }
          }
          if (cache[id]) {
            delete cache[id];
            if (deleteExpando) {
              delete elem[internalKey];
            } else if (typeof elem.removeAttribute !== core_strundefined) {
              elem.removeAttribute(internalKey);
            } else {
              elem[internalKey] = null;
            }
            core_deletedIds.push(id);
          }
        }
      }
    }
  }});
  var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {BODY: "block"}, cssShow = {position: "absolute",visibility: "hidden",display: "block"}, cssNormalTransform = {letterSpacing: 0,fontWeight: 400}, cssExpand = ["Top", "Right", "Bottom", "Left"], cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function isHidden(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  }
  function showHide(elements, show) {
    var display, elem, hidden, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = jQuery._data(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
        }
      } else {
        if (!values[index]) {
          hidden = isHidden(elem);
          if (display && display !== "none" || !hidden) {
            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.fn.extend({css: function(name, value) {
    return jQuery.access(this, function(elem, name, value) {
      var len, styles, map = {}, i = 0;
      if (jQuery.isArray(name)) {
        styles = getStyles(elem);
        len = name.length;
        for (; i < len; i++) {
          map[name[i]] = jQuery.css(elem, name[i], false, styles);
        }
        return map;
      }
      return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
    }, name, value, arguments.length > 1);
  },show: function() {
    return showHide(this, true);
  },hide: function() {
    return showHide(this);
  },toggle: function(state) {
    var bool = typeof state === "boolean";
    return this.each(function() {
      if (bool ? state : isHidden(this)) {
        jQuery(this).show();
      } else {
        jQuery(this).hide();
      }
    });
  }});
  jQuery.extend({cssHooks: {opacity: {get: function(elem, computed) {
    if (computed) {
      var ret = curCSS(elem, "opacity");
      return ret === "" ? "1" : ret;
    }
  }}},cssNumber: {"columnCount": true,"fillOpacity": true,"fontWeight": true,"lineHeight": true,"opacity": true,"orphans": true,"widows": true,"zIndex": true,"zoom": true},cssProps: {"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(elem, name, value, extra) {
    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
      return;
    }
    var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
    if (value !== undefined) {
      type = typeof value;
      if (type === "string" && (ret = rrelNum.exec(value))) {
        value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
        type = "number";
      }
      if (value == null || type === "number" && isNaN(value)) {
        return;
      }
      if (type === "number" && !jQuery.cssNumber[origName]) {
        value += "px";
      }
      if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
        style[name] = "inherit";
      }
      if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
        try {
          style[name] = value;
        } catch (e) {
        }
      }
    } else {
      if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
        return ret;
      }
      return style[name];
    }
  },css: function(elem, name, extra, styles) {
    var num, val, hooks, origName = jQuery.camelCase(name);
    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
    if (hooks && "get" in hooks) {
      val = hooks.get(elem, true, extra);
    }
    if (val === undefined) {
      val = curCSS(elem, name, styles);
    }
    if (val === "normal" && name in cssNormalTransform) {
      val = cssNormalTransform[name];
    }
    if (extra === "" || extra) {
      num = parseFloat(val);
      return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
    }
    return val;
  },swap: function(elem, options, callback, args) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  }});
  if (window.getComputedStyle) {
    getStyles = function(elem) {
      return window.getComputedStyle(elem, null);
    };
    curCSS = function(elem, name, _computed) {
      var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
      if (computed) {
        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = jQuery.style(elem, name);
        }
        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret;
    };
  } else if (document.documentElement.currentStyle) {
    getStyles = function(elem) {
      return elem.currentStyle;
    };
    curCSS = function(elem, name, _computed) {
      var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
      if (ret == null && style && style[name]) {
        ret = style[name];
      }
      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === "fontSize" ? "1em" : ret;
        ret = style.pixelLeft + "px";
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }
      return ret === "" ? "auto" : ret;
    };
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + 
      augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function css_defaultDisplay(nodeName) {
    var doc = document, display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
        doc.write("<!doctype html><html><body>");
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
    elem.remove();
    return display;
  }
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {get: function(elem, computed, extra) {
      if (computed) {
        return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
          return getWidthOrHeight(elem, name, extra);
        }) : getWidthOrHeight(elem, name, extra);
      }
    },set: function(elem, value, extra) {
      var styles = extra && getStyles(elem);
      return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
    }};
  });
  if (!jQuery.support.opacity) {
    jQuery.cssHooks.opacity = {get: function(elem, computed) {
      return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : computed ? "1" : "";
    },set: function(elem, value) {
      var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
      style.zoom = 1;
      if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
        style.removeAttribute("filter");
        if (value === "" || currentStyle && !currentStyle.filter) {
          return;
        }
      }
      style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
    }};
  }
  jQuery(function() {
    if (!jQuery.support.reliableMarginRight) {
      jQuery.cssHooks.marginRight = {get: function(elem, computed) {
        if (computed) {
          return jQuery.swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
        }
      }};
    }
    if (!jQuery.support.pixelPosition && jQuery.fn.position) {
      jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = {get: function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        }};
      });
    }
  });
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.hidden = function(elem) {
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
    };
    jQuery.expr.filters.visible = function(elem) {
      return !jQuery.expr.filters.hidden(elem);
    };
  }
  jQuery.each({margin: "",padding: "",border: "Width"}, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
      var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
      for (; i < 4; i++) {
        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
      }
      return expanded;
    }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  jQuery.fn.extend({serialize: function() {
    return jQuery.param(this.serializeArray());
  },serializeArray: function() {
    return this.map(function() {
      var elements = jQuery.prop(this, "elements");
      return elements ? jQuery.makeArray(elements) : this;
    }).filter(function() {
      var type = this.type;
      return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
    }).map(function(i, elem) {
      var val = jQuery(this).val();
      return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
        return {name: elem.name,value: val.replace(rCRLF, "\r\n")};
      }) : {name: elem.name,value: val.replace(rCRLF, "\r\n")};
    }).get();
  }});
  jQuery.param = function(a, traditional) {
    var prefix, s = [], add = function(key, value) {
      value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.hover = function(fnOver, fnOut) {
    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
  };
  var 
  ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
      ajaxLocation = location.href;
    } catch (e) {
      ajaxLocation = document.createElement("a");
      ajaxLocation.href = "";
      ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
        if (jQuery.isFunction(func)) {
          while ((dataType = dataTypes[i++])) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = (structure === transports);
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== undefined) {
          (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
        }
      }
      if (deep) {
        jQuery.extend(true, target, deep);
      }
      return target;
    }
    jQuery.fn.load = function(url, params, callback) {
      if (typeof url !== "string" && _load) {
        return _load.apply(this, arguments);
      }
      var selector, response, type, self = this, off = url.indexOf(" ");
      if (off >= 0) {
        selector = url.slice(off, url.length);
        url = url.slice(0, off);
      }
      if (jQuery.isFunction(params)) {
        callback = params;
        params = undefined;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self.length > 0) {
        jQuery.ajax({url: url,type: type,dataType: "html",data: params}).done(function(responseText) {
          response = arguments;
          self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).complete(callback && function(jqXHR, status) {
          self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
        });
      }
      return this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
      jQuery.fn[type] = function(fn) {
        return this.on(type, fn);
      };
    });
    jQuery.each(["get", "post"], function(i, method) {
      jQuery[method] = function(url, data, callback, type) {
        if (jQuery.isFunction(data)) {
          type = type || callback;
          callback = data;
          data = undefined;
        }
        return jQuery.ajax({url: url,type: method,dataType: type,data: data,success: callback});
      };
    });
    jQuery.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: ajaxLocation,type: "GET",isLocal: rlocalProtocol.test(ajaxLocParts[1]),global: true,processData: true,async: true,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": allTypes,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": window.String,"text html": true,"text json": jQuery.parseJSON,"text xml": jQuery.parseXML},flatOptions: {url: true,context: true}},ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },ajaxPrefilter: addToPrefiltersOrTransports(prefilters),ajaxTransport: addToPrefiltersOrTransports(transports),ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var 
      parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {readyState: 0,getResponseHeader: function(key) {
        var match;
        if (state === 2) {
          if (!responseHeaders) {
            responseHeaders = {};
            while ((match = rheaders.exec(responseHeadersString))) {
              responseHeaders[match[1].toLowerCase()] = match[2];
            }
          }
          match = responseHeaders[key.toLowerCase()];
        }
        return match == null ? null : match;
      },getAllResponseHeaders: function() {
        return state === 2 ? responseHeadersString : null;
      },setRequestHeader: function(name, value) {
        var lname = name.toLowerCase();
        if (!state) {
          name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
          requestHeaders[name] = value;
        }
        return this;
      },overrideMimeType: function(type) {
        if (!state) {
          s.mimeType = type;
        }
        return this;
      },statusCode: function(map) {
        var code;
        if (map) {
          if (state < 2) {
            for (code in map) {
              statusCode[code] = [statusCode[code], map[code]];
            }
          } else {
            jqXHR.always(map[jqXHR.status]);
          }
        }
        return this;
      },abort: function(statusText) {
        var finalText = statusText || strAbort;
        if (transport) {
          transport.abort(finalText);
        }
        done(0, finalText);
        return this;
      }};
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
        if (s.crossDomain == null) {
          parts = rurl.exec(s.url.toLowerCase());
          s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
        }
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery.param(s.data, s.traditional);
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (state === 2) {
          return jqXHR;
        }
        fireGlobals = s.global;
        if (fireGlobals && jQuery.active++ === 0) {
          jQuery.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url;
        if (!s.hasContent) {
          if (s.data) {
            cacheURL = (s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data);
            delete s.data;
          }
          if (s.cache === false) {
            s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
          }
        }
        if (s.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }
          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
        for (i in s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        for (i in {success: 1,error: 1,complete: 1}) {
          jqXHR[i](s[i]);
        }
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            state = 1;
            transport.send(requestHeaders, done);
          } catch (e) {
            if (state < 2) {
              done(-1, e);
            } else {
              throw e;
            }
          }
        }
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (state === 2) {
            return;
          }
          state = 2;
          if (timeoutTimer) {
            clearTimeout(timeoutTimer);
          }
          transport = undefined;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (status >= 200 && status < 300 || status === 304) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (status === 204) {
              isSuccess = true;
              statusText = "nocontent";
            } else if (status === 304) {
              isSuccess = true;
              statusText = "notmodified";
            } else {
              isSuccess = ajaxConvert(s, response);
              statusText = isSuccess.state;
              success = isSuccess.data;
              error = isSuccess.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = undefined;
          if (fireGlobals) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!(--jQuery.active)) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
    },getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    },getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    }});
    function ajaxHandleResponses(s, jqXHR, responses) {
      var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes, responseFields = s.responseFields;
      for (type in responseFields) {
        if (type in responses) {
          jqXHR[responseFields[type]] = responses[type];
        }
      }
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === undefined) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response) {
      var conv2, current, conv, tmp, converters = {}, i = 0, dataTypes = s.dataTypes.slice(), prev = dataTypes[0];
      if (s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      for (; (current = dataTypes[++i]); ) {
        if (current !== "*") {
          if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.splice(i--, 0, current);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s["throws"]) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {state: "parsererror",error: conv ? e : "No conversion from " + prev + " to " + current};
                }
              }
            }
          }
          prev = current;
        }
      }
      return {state: "success",data: response};
    }
    jQuery.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(text) {
      jQuery.globalEval(text);
      return text;
    }}});
    jQuery.ajaxPrefilter("script", function(s) {
      if (s.cache === undefined) {
        s.cache = false;
      }
      if (s.crossDomain) {
        s.type = "GET";
        s.global = false;
      }
    });
    jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain) {
        var script, head = document.head || jQuery("head")[0] || document.documentElement;
        return {send: function(_, callback) {
          script = document.createElement("script");
          script.async = true;
          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }
          script.src = s.url;
          script.onload = script.onreadystatechange = function(_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              script.onload = script.onreadystatechange = null;
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              script = null;
              if (!isAbort) {
                callback(200, "success");
              }
            }
          };
          head.insertBefore(script, head.firstChild);
        },abort: function() {
          if (script) {
            script.onload(undefined, true);
          }
        }};
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (ajax_nonce++));
      this[callback] = true;
      return callback;
    }});
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || s.dataTypes[0] === "jsonp") {
        callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
        if (jsonProp) {
          s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
          s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }
        s.converters["script json"] = function() {
          if (!responseContainer) {
            jQuery.error(callbackName + " was not called");
          }
          return responseContainer[0];
        };
        s.dataTypes[0] = "json";
        overwritten = window[callbackName];
        window[callbackName] = function() {
          responseContainer = arguments;
        };
        jqXHR.always(function() {
          window[callbackName] = overwritten;
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && jQuery.isFunction(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = undefined;
        });
        return "script";
      }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function() {
      var key;
      for (key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    };
    function createStandardXHR() {
      try {
        return new window.XMLHttpRequest();
      } catch (e) {
      }
    }
    function createActiveXHR() {
      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
      return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    if (xhrSupported) {
      jQuery.ajaxTransport(function(s) {
        if (!s.crossDomain || jQuery.support.cors) {
          var callback;
          return {send: function(headers, complete) {
            var handle, i, xhr = s.xhr();
            if (s.username) {
              xhr.open(s.type, s.url, s.async, s.username, s.password);
            } else {
              xhr.open(s.type, s.url, s.async);
            }
            if (s.xhrFields) {
              for (i in s.xhrFields) {
                xhr[i] = s.xhrFields[i];
              }
            }
            if (s.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(s.mimeType);
            }
            if (!s.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            try {
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
            } catch (err) {
            }
            xhr.send((s.hasContent && s.data) || null);
            callback = function(_, isAbort) {
              var status, responseHeaders, statusText, responses;
              try {
                if (callback && (isAbort || xhr.readyState === 4)) {
                  callback = undefined;
                  if (handle) {
                    xhr.onreadystatechange = jQuery.noop;
                    if (xhrOnUnloadAbort) {
                      delete xhrCallbacks[handle];
                    }
                  }
                  if (isAbort) {
                    if (xhr.readyState !== 4) {
                      xhr.abort();
                    }
                  } else {
                    responses = {};
                    status = xhr.status;
                    responseHeaders = xhr.getAllResponseHeaders();
                    if (typeof xhr.responseText === "string") {
                      responses.text = xhr.responseText;
                    }
                    try {
                      statusText = xhr.statusText;
                    } catch (e) {
                      statusText = "";
                    }
                    if (!status && s.isLocal && !s.crossDomain) {
                      status = responses.text ? 200 : 404;
                    } else if (status === 1223) {
                      status = 204;
                    }
                  }
                }
              } catch (firefoxAccessException) {
                if (!isAbort) {
                  complete(-1, firefoxAccessException);
                }
              }
              if (responses) {
                complete(status, statusText, responses, responseHeaders);
              }
            };
            if (!s.async) {
              callback();
            } else if (xhr.readyState === 4) {
              setTimeout(callback);
            } else {
              handle = ++xhrId;
              if (xhrOnUnloadAbort) {
                if (!xhrCallbacks) {
                  xhrCallbacks = {};
                  jQuery(window).unload(xhrOnUnloadAbort);
                }
                xhrCallbacks[handle] = callback;
              }
              xhr.onreadystatechange = callback;
            }
          },abort: function() {
            if (callback) {
              callback(undefined, true);
            }
          }};
        }
      });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {"*": [function(prop, value) {
      var end, unit, tween = this.createTween(prop, value), parts = rfxnum.exec(value), target = tween.cur(), start = +target || 0, scale = 1, maxIterations = 20;
      if (parts) {
        end = +parts[2];
        unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
        if (unit !== "px" && start) {
          start = jQuery.css(tween.elem, prop, true) || end || 1;
          do {
            scale = scale || ".5";
            start = start / scale;
            jQuery.style(tween.elem, prop, start + unit);
          } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
        }
        tween.unit = unit;
        tween.start = start;
        tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
      }
      return tween;
    }]};
    function createFxNow() {
      setTimeout(function() {
        fxNow = undefined;
      });
      return (fxNow = jQuery.now());
    }
    function createTweens(animation, props) {
      jQuery.each(props, function(prop, value) {
        var collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (collection[index].call(animation, prop, value)) {
            return;
          }
        }
      });
    }
    function Animation(elem, properties, options) {
      var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length) {
          return remaining;
        } else {
          deferred.resolveWith(elem, [animation]);
          return false;
        }
      }, animation = deferred.promise({elem: elem,props: jQuery.extend({}, properties),opts: jQuery.extend(true, {specialEasing: {}}, options),originalProperties: properties,originalOptions: options,startTime: fxNow || createFxNow(),duration: options.duration,tweens: [],createTween: function(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },stop: function(gotoEnd) {
        var index = 0, length = gotoEnd ? animation.tweens.length : 0;
        if (stopped) {
          return this;
        }
        stopped = true;
        for (; index < length; index++) {
          animation.tweens[index].run(1);
        }
        if (gotoEnd) {
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }
        return this;
      }}), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index < length; index++) {
        result = animationPrefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
          return result;
        }
      }
      createTweens(animation, props);
      if (jQuery.isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      }
      jQuery.fx.timer(jQuery.extend(tick, {elem: elem,anim: animation,queue: animation.opts.queue}));
      return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
      var value, name, index, easing, hooks;
      for (index in props) {
        name = jQuery.camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (jQuery.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }
        if (index !== name) {
          props[name] = value;
          delete props[index];
        }
        hooks = jQuery.cssHooks[name];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name];
          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }
    jQuery.Animation = jQuery.extend(Animation, {tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.split(" ");
      }
      var prop, index = 0, length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },prefilter: function(callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }});
    function defaultPrefilter(elem, props, opts) {
      var prop, index, length, value, dataShow, toggle, tween, hooks, oldfire, anim = this, style = elem.style, orig = {}, handled = [], hidden = elem.nodeType && isHidden(elem);
      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
          if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
            style.display = "inline-block";
          } else {
            style.zoom = 1;
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        if (!jQuery.support.shrinkWrapBlocks) {
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
      }
      for (index in props) {
        value = props[index];
        if (rfxtypes.exec(value)) {
          delete props[index];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            continue;
          }
          handled.push(index);
        }
      }
      length = handled.length;
      if (length) {
        dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          jQuery(elem).show();
        } else {
          anim.done(function() {
            jQuery(elem).hide();
          });
        }
        anim.done(function() {
          var prop;
          jQuery._removeData(elem, "fxshow");
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
        for (index = 0; index < length; index++) {
          prop = handled[index];
          tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
          orig[prop] = dataShow[prop] || jQuery.style(elem, prop);
          if (!(prop in dataShow)) {
            dataShow[prop] = tween.start;
            if (hidden) {
              tween.end = tween.start;
              tween.start = prop === "width" || prop === "height" ? 1 : 0;
            }
          }
        }
      }
    }
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {constructor: Tween,init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || "swing";
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },run: function(percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }};
    Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {get: function(tween) {
    var result;
    if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
      return tween.elem[tween.prop];
    }
    result = jQuery.css(tween.elem, tween.prop, "");
    return !result || result === "auto" ? 0 : result;
  },set: function(tween) {
    if (jQuery.fx.step[tween.prop]) {
      jQuery.fx.step[tween.prop](tween);
    } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
      jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
    } else {
      tween.elem[tween.prop] = tween.now;
    }
  }}};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
    if (tween.elem.nodeType && tween.elem.parentNode) {
      tween.elem[tween.prop] = tween.now;
    }
  }};
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.fn.extend({fadeTo: function(speed, to, easing, callback) {
    return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
  },animate: function(prop, speed, easing, callback) {
    var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
      var anim = Animation(this, jQuery.extend({}, prop), optall);
      doAnimation.finish = function() {
        anim.stop(true);
      };
      if (empty || jQuery._data(this, "finish")) {
        anim.stop(true);
      }
    };
    doAnimation.finish = doAnimation;
    return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
  },stop: function(type, clearQueue, gotoEnd) {
    var stopQueue = function(hooks) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop(gotoEnd);
    };
    if (typeof type !== "string") {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if (clearQueue && type !== false) {
      this.queue(type || "fx", []);
    }
    return this.each(function() {
      var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
      if (index) {
        if (data[index] && data[index].stop) {
          stopQueue(data[index]);
        }
      } else {
        for (index in data) {
          if (data[index] && data[index].stop && rrun.test(index)) {
            stopQueue(data[index]);
          }
        }
      }
      for (index = timers.length; index--; ) {
        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
          timers[index].anim.stop(gotoEnd);
          dequeue = false;
          timers.splice(index, 1);
        }
      }
      if (dequeue || !gotoEnd) {
        jQuery.dequeue(this, type);
      }
    });
  },finish: function(type) {
    if (type !== false) {
      type = type || "fx";
    }
    return this.each(function() {
      var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
      data.finish = true;
      jQuery.queue(this, type, []);
      if (hooks && hooks.cur && hooks.cur.finish) {
        hooks.cur.finish.call(this);
      }
      for (index = timers.length; index--; ) {
        if (timers[index].elem === this && timers[index].queue === type) {
          timers[index].anim.stop(true);
          timers.splice(index, 1);
        }
      }
      for (index = 0; index < length; index++) {
        if (queue[index] && queue[index].finish) {
          queue[index].finish.call(this);
        }
      }
      delete data.finish;
    });
  }});
  function genFx(type, includeWidth) {
    var which, attrs = {height: type}, i = 0;
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  jQuery.each({slideDown: genFx("show"),slideUp: genFx("hide"),slideToggle: genFx("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,duration: speed,easing: fn && easing || easing && !jQuery.isFunction(easing) && easing};
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.easing = {linear: function(p) {
    return p;
  },swing: function(p) {
    return 0.5 - Math.cos(p * Math.PI) / 2;
  }};
  jQuery.timers = [];
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.tick = function() {
    var timer, timers = jQuery.timers, i = 0;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    if (timer() && jQuery.timers.push(timer)) {
      jQuery.fx.start();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    clearInterval(timerId);
    timerId = null;
  };
jQuery.fx.speeds = {slow: 600,fast: 200,_default: 400};
  jQuery.fx.step = {};
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
  }
  jQuery.fn.offset = function(options) {
    if (arguments.length) {
      return options === undefined ? this : this.each(function(i) {
        jQuery.offset.setOffset(this, options, i);
      });
    }
    var docElem, win, box = {top: 0,left: 0}, elem = this[0], doc = elem && elem.ownerDocument;
    if (!doc) {
      return;
    }
    docElem = doc.documentElement;
    if (!jQuery.contains(docElem, elem)) {
      return box;
    }
    if (typeof elem.getBoundingClientRect !== core_strundefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)};
  };
  jQuery.offset = {setOffset: function(elem, options, i) {
    var position = jQuery.css(elem, "position");
    if (position === "static") {
      elem.style.position = "relative";
    }
    var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, props = {}, curPosition = {}, curTop, curLeft;
    if (calculatePosition) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat(curCSSTop) || 0;
      curLeft = parseFloat(curCSSLeft) || 0;
    }
    if (jQuery.isFunction(options)) {
      options = options.call(elem, i, curOffset);
    }
    if (options.top != null) {
      props.top = (options.top - curOffset.top) + curTop;
    }
    if (options.left != null) {
      props.left = (options.left - curOffset.left) + curLeft;
    }
    if ("using" in options) {
      options.using.call(elem, props);
    } else {
      curElem.css(props);
    }
  }};
  jQuery.fn.extend({position: function() {
    if (!this[0]) {
      return;
    }
    var offsetParent, offset, parentOffset = {top: 0,left: 0}, elem = this[0];
    if (jQuery.css(elem, "position") === "fixed") {
      offset = elem.getBoundingClientRect();
    } else {
      offsetParent = this.offsetParent();
      offset = this.offset();
      if (!jQuery.nodeName(offsetParent[0], "html")) {
        parentOffset = offsetParent.offset();
      }
      parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
      parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
    }
    return {top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)};
  },offsetParent: function() {
    return this.map(function() {
      var offsetParent = this.offsetParent || document.documentElement;
      while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || document.documentElement;
    });
  }});
  jQuery.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(method, prop) {
    var top = /Y/.test(prop);
    jQuery.fn[method] = function(val) {
      return jQuery.access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? (prop in win) ? win[prop] : win.document.documentElement[method] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }
  jQuery.each({Height: "height",Width: "width"}, function(name, type) {
    jQuery.each({padding: "inner" + name,content: type,"": "outer" + name}, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return jQuery.access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  window.jQuery = window.$ = jQuery;
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  })(window);
  !function($) {
    "use strict";
    $(function() {
      $.support.transition = (function() {
        var transitionEnd = (function() {
          var el = document.createElement('bootstrap'), transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd','MozTransition': 'transitionend','OTransition': 'oTransitionEnd otransitionend','transition': 'transitionend'}, name
          for (name in transEndEventNames) {
            if (el.style[name] !== undefined) {
              return transEndEventNames[name]
            }
          }
        }())
        return transitionEnd && {end: transitionEnd}
      })()
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]', Alert = function(el) {
      $(el).on('click', dismiss, this.close)
    }
    Alert.prototype.close = function(e) {
      var $this = $(this), selector = $this.attr('data-target'), $parent
      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
      }
      $parent = $(selector)
      e && e.preventDefault()
      $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())
      $parent.trigger(e = $.Event('close'))
      if (e.isDefaultPrevented())
        return
      $parent.removeClass('in')
      function removeElement() {
        $parent.trigger('closed').remove()
      }
      $.support.transition && $parent.hasClass('fade') ? $parent.on($.support.transition.end, removeElement) : removeElement()
    }
    var old = $.fn.alert
    $.fn.alert = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('alert')
        if (!data)
          $this.data('alert', (data = new Alert(this)))
        if (typeof option == 'string')
          data[option].call($this)
      })
    }
    $.fn.alert.Constructor = Alert
    $.fn.alert.noConflict = function() {
      $.fn.alert = old
      return this
    }
    $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)
  }(window.jQuery);
  !function($) {
    "use strict";
    var Button = function(element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.button.defaults, options)
    }
    Button.prototype.setState = function(state) {
      var d = 'disabled', $el = this.$element, data = $el.data(), val = $el.is('input') ? 'val' : 'html'
      state = state + 'Text'
      data.resetText || $el.data('resetText', $el[val]())
      $el[val](data[state] || this.options[state])
      setTimeout(function() {
        state == 'loadingText' ? $el.addClass(d).attr(d, d) : $el.removeClass(d).removeAttr(d)
      }, 0)
    }
    Button.prototype.toggle = function() {
      var $parent = this.$element.closest('[data-toggle="buttons-radio"]')
      $parent && $parent.find('.active').removeClass('active')
      this.$element.toggleClass('active')
    }
    var old = $.fn.button
    $.fn.button = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('button'), options = typeof option == 'object' && option
        if (!data)
          $this.data('button', (data = new Button(this, options)))
        if (option == 'toggle')
          data.toggle()
        else if (option)
          data.setState(option)
      })
    }
    $.fn.button.defaults = {loadingText: 'loading...'}
    $.fn.button.Constructor = Button
    $.fn.button.noConflict = function() {
      $.fn.button = old
      return this
    }
    $(document).on('click.button.data-api', '[data-toggle^=button]', function(e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn'))
        $btn = $btn.closest('.btn')
      $btn.button('toggle')
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Carousel = function(element, options) {
      this.$element = $(element)
      this.$indicators = this.$element.find('.carousel-indicators')
      this.options = options
      this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this)).on('mouseleave', $.proxy(this.cycle, this))
    }
    Carousel.prototype = {cycle: function(e) {
      if (!e)
        this.paused = false
      if (this.interval)
        clearInterval(this.interval);
      this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    },getActiveIndex: function() {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    },to: function(pos) {
      var activeIndex = this.getActiveIndex(), that = this
      if (pos > (this.$items.length - 1) || pos < 0)
        return
      if (this.sliding) {
        return this.$element.one('slid', function() {
          that.to(pos)
        })
      }
      if (activeIndex == pos) {
        return this.pause().cycle()
      }
      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    },pause: function(e) {
      if (!e)
        this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    },next: function() {
      if (this.sliding)
        return
      return this.slide('next')
    },prev: function() {
      if (this.sliding)
        return
      return this.slide('prev')
    },slide: function(type, next) {
      var $active = this.$element.find('.item.active'), $next = next || $active[type](), isCycling = this.interval, direction = type == 'next' ? 'left' : 'right', fallback = type == 'next' ? 'first' : 'last', that = this, e
      this.sliding = true
      isCycling && this.pause()
      $next = $next.length ? $next : this.$element.find('.item')[fallback]()
      e = $.Event('slide', {relatedTarget: $next[0],direction: direction})
      if ($next.hasClass('active'))
        return
      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function() {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }
      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
          return
        $next.addClass(type)
        $next[0].offsetWidth
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function() {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function() {
            that.$element.trigger('slid')
          }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
          return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }
      isCycling && this.cycle()
      return this
    }}
    var old = $.fn.carousel
    $.fn.carousel = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('carousel'), options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option), action = typeof option == 'string' ? option : options.slide
        if (!data)
          $this.data('carousel', (data = new Carousel(this, options)))
        if (typeof option == 'number')
          data.to(option)
        else if (action)
          data[action]()
        else if (options.interval)
          data.pause().cycle()
      })
    }
    $.fn.carousel.defaults = {interval: 5000,pause: 'hover'}
    $.fn.carousel.Constructor = Carousel
    $.fn.carousel.noConflict = function() {
      $.fn.carousel = old
      return this
    }
    $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
      var $this = $(this), href, $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')), options = $.extend({}, $target.data(), $this.data()), slideIndex
      $target.carousel(options)
      if (slideIndex = $this.attr('data-slide-to')) {
        $target.data('carousel').pause().to(slideIndex).cycle()
      }
      e.preventDefault()
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Collapse = function(element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.collapse.defaults, options)
      if (this.options.parent) {
        this.$parent = $(this.options.parent)
      }
      this.options.toggle && this.toggle()
    }
    Collapse.prototype = {constructor: Collapse,dimension: function() {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    },show: function() {
      var dimension, scroll, actives, hasData
      if (this.transitioning || this.$element.hasClass('in'))
        return
      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')
      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning)
          return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }
      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    },hide: function() {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in'))
        return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    },reset: function(size) {
      var dimension = this.dimension()
      this.$element.removeClass('collapse')
      [dimension](size || 'auto')
      [0].offsetWidth
      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')
      return this
    },transition: function(method, startEvent, completeEvent) {
      var that = this, complete = function() {
        if (startEvent.type == 'show')
          that.reset()
        that.transitioning = 0
        that.$element.trigger(completeEvent)
      }
      this.$element.trigger(startEvent)
      if (startEvent.isDefaultPrevented())
        return
      this.transitioning = 1
      this.$element[method]('in')
      $.support.transition && this.$element.hasClass('collapse') ? this.$element.one($.support.transition.end, complete) : complete()
    },toggle: function() {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }}
    var old = $.fn.collapse
    $.fn.collapse = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('collapse'), options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
        if (!data)
          $this.data('collapse', (data = new Collapse(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.collapse.defaults = {toggle: true}
    $.fn.collapse.Constructor = Collapse
    $.fn.collapse.noConflict = function() {
      $.fn.collapse = old
      return this
    }
    $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function(e) {
      var $this = $(this), href, target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''), option = $(target).data('collapse') ? 'toggle' : $this.data()
      $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
      $(target).collapse(option)
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Modal = function(element, options) {
      this.options = options
      this.$element = $(element).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
      this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
    }
    Modal.prototype = {constructor: Modal,toggle: function() {
      return this[!this.isShown ? 'show' : 'hide']()
    },show: function() {
      var that = this, e = $.Event('show')
      this.$element.trigger(e)
      if (this.isShown || e.isDefaultPrevented())
        return
      this.isShown = true
      this.escape()
      this.backdrop(function() {
        var transition = $.support.transition && that.$element.hasClass('fade')
        if (!that.$element.parent().length) {
          that.$element.appendTo(document.body)
        }
        that.$element.show()
        if (transition) {
          that.$element[0].offsetWidth
        }
        that.$element.addClass('in').attr('aria-hidden', false)
        that.enforceFocus()
        transition ? that.$element.one($.support.transition.end, function() {
          that.$element.focus().trigger('shown')
        }) : that.$element.focus().trigger('shown')
      })
    },hide: function(e) {
      e && e.preventDefault()
      var that = this
      e = $.Event('hide')
      this.$element.trigger(e)
      if (!this.isShown || e.isDefaultPrevented())
        return
      this.isShown = false
      this.escape()
      $(document).off('focusin.modal')
      this.$element.removeClass('in').attr('aria-hidden', true)
      $.support.transition && this.$element.hasClass('fade') ? this.hideWithTransition() : this.hideModal()
    },enforceFocus: function() {
      var that = this
      $(document).on('focusin.modal', function(e) {
        if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
          that.$element.focus()
        }
      })
    },escape: function() {
      var that = this
      if (this.isShown && this.options.keyboard) {
        this.$element.on('keyup.dismiss.modal', function(e) {
          e.which == 27 && that.hide()
        })
      } else if (!this.isShown) {
        this.$element.off('keyup.dismiss.modal')
      }
    },hideWithTransition: function() {
      var that = this, timeout = setTimeout(function() {
        that.$element.off($.support.transition.end)
        that.hideModal()
      }, 500)
      this.$element.one($.support.transition.end, function() {
        clearTimeout(timeout)
        that.hideModal()
      })
    },hideModal: function() {
      var that = this
      this.$element.hide()
      this.backdrop(function() {
        that.removeBackdrop()
        that.$element.trigger('hidden')
      })
    },removeBackdrop: function() {
      this.$backdrop && this.$backdrop.remove()
      this.$backdrop = null
    },backdrop: function(callback) {
      var that = this, animate = this.$element.hasClass('fade') ? 'fade' : ''
      if (this.isShown && this.options.backdrop) {
        var doAnimate = $.support.transition && animate
        this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body)
        this.$backdrop.click(this.options.backdrop == 'static' ? $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this))
        if (doAnimate)
          this.$backdrop[0].offsetWidth
        this.$backdrop.addClass('in')
        if (!callback)
          return
        doAnimate ? this.$backdrop.one($.support.transition.end, callback) : callback()
      } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass('in')
        $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback) : callback()
      } else if (callback) {
        callback()
      }
    }}
    var old = $.fn.modal
    $.fn.modal = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('modal'), options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
        if (!data)
          $this.data('modal', (data = new Modal(this, options)))
        if (typeof option == 'string')
          data[option]()
        else if (options.show)
          data.show()
      })
    }
    $.fn.modal.defaults = {backdrop: true,keyboard: true,show: true}
    $.fn.modal.Constructor = Modal
    $.fn.modal.noConflict = function() {
      $.fn.modal = old
      return this
    }
    $(document).on('click.modal.data-api', '[data-toggle="modal"]', function(e) {
      var $this = $(this), href = $this.attr('href'), $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))), option = $target.data('modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data())
      e.preventDefault()
      $target.modal(option).one('hide', function() {
        $this.focus()
      })
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Tooltip = function(element, options) {
      this.init('tooltip', element, options)
    }
    Tooltip.prototype = {constructor: Tooltip,init: function(type, element, options) {
      var eventIn, eventOut, triggers, trigger, i
      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true
      triggers = this.options.trigger.split(' ')
      for (i = triggers.length; i--; ) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }
      this.options.selector ? (this._options = $.extend({}, this.options, {trigger: 'manual',selector: ''})) : this.fixTitle()
    },getOptions: function(options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)
      if (options.delay && typeof options.delay == 'number') {
        options.delay = {show: options.delay,hide: options.delay}
      }
      return options
    },enter: function(e) {
      var defaults = $.fn[this.type].defaults, options = {}, self
      this._options && $.each(this._options, function(key, value) {
        if (defaults[key] != value)
          options[key] = value
      }, this)
      self = $(e.currentTarget)[this.type](options).data(this.type)
      if (!self.options.delay || !self.options.delay.show)
        return self.show()
      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in')
          self.show()
      }, self.options.delay.show)
    },leave: function(e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)
      if (this.timeout)
        clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide)
        return self.hide()
      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out')
          self.hide()
      }, self.options.delay.hide)
    },show: function() {
      var $tip, pos, actualWidth, actualHeight, placement, tp, e = $.Event('show')
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
          return
        $tip = this.tip()
        this.setContent()
        if (this.options.animation) {
          $tip.addClass('fade')
        }
        placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
        $tip.detach().css({top: 0,left: 0,display: 'block'})
        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
        pos = this.getPosition()
        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height,left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight,left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2,left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2,left: pos.left + pos.width}
            break
        }
        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    },applyPlacement: function(offset, placement) {
      var $tip = this.tip(), width = $tip[0].offsetWidth, height = $tip[0].offsetHeight, actualWidth, actualHeight, delta, replace
      $tip.offset(offset).addClass(placement).addClass('in')
      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight
      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }
      if (placement == 'bottom' || placement == 'top') {
        delta = 0
        if (offset.left < 0) {
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }
        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }
      if (replace)
        $tip.offset(offset)
    },replaceArrow: function(delta, dimension, position) {
      this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    },setContent: function() {
      var $tip = this.tip(), title = this.getTitle()
      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    },hide: function() {
      var that = this, $tip = this.tip(), e = $.Event('hide')
      this.$element.trigger(e)
      if (e.isDefaultPrevented())
        return
      $tip.removeClass('in')
      function removeWithAnimation() {
        var timeout = setTimeout(function() {
          $tip.off($.support.transition.end).detach()
        }, 500)
        $tip.one($.support.transition.end, function() {
          clearTimeout(timeout)
          $tip.detach()
        })
      }
      $.support.transition && this.$tip.hasClass('fade') ? removeWithAnimation() : $tip.detach()
      this.$element.trigger('hidden')
      return this
    },fixTitle: function() {
      var $e = this.$element
      if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    },hasContent: function() {
      return this.getTitle()
    },getPosition: function() {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {width: el.offsetWidth,height: el.offsetHeight}, this.$element.offset())
    },getTitle: function() {
      var title, $e = this.$element, o = this.options
      title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
      return title
    },tip: function() {
      return this.$tip = this.$tip || $(this.options.template)
    },arrow: function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },validate: function() {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    },enable: function() {
      this.enabled = true
    },disable: function() {
      this.enabled = false
    },toggleEnabled: function() {
      this.enabled = !this.enabled
    },toggle: function(e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    },destroy: function() {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }}
    var old = $.fn.tooltip
    $.fn.tooltip = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('tooltip'), options = typeof option == 'object' && option
        if (!data)
          $this.data('tooltip', (data = new Tooltip(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.tooltip.Constructor = Tooltip
    $.fn.tooltip.defaults = {animation: true,placement: 'top',selector: false,template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: 'hover focus',title: '',delay: 0,html: false,container: false}
    $.fn.tooltip.noConflict = function() {
      $.fn.tooltip = old
      return this
    }
  }(window.jQuery);
  !function($) {
    "use strict";
    var Popover = function(element, options) {
      this.init('popover', element, options)
    }
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {constructor: Popover,setContent: function() {
      var $tip = this.tip(), title = this.getTitle(), content = this.getContent()
      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
      $tip.removeClass('fade top bottom left right in')
    },hasContent: function() {
      return this.getTitle() || this.getContent()
    },getContent: function() {
      var content, $e = this.$element, o = this.options
      content = (typeof o.content == 'function' ? o.content.call($e[0]) : o.content) || $e.attr('data-content')
      return content
    },tip: function() {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    },destroy: function() {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }})
    var old = $.fn.popover
    $.fn.popover = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('popover'), options = typeof option == 'object' && option
        if (!data)
          $this.data('popover', (data = new Popover(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.popover.Constructor = Popover
    $.fn.popover.defaults = $.extend({}, $.fn.tooltip.defaults, {placement: 'right',trigger: 'click',content: '',template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
    $.fn.popover.noConflict = function() {
      $.fn.popover = old
      return this
    }
  }(window.jQuery);
  !function($) {
    "use strict";
    function ScrollSpy(element, options) {
      var process = $.proxy(this.process, this), $element = $(element).is('body') ? $(window) : $(element), href
      this.options = $.extend({}, $.fn.scrollspy.defaults, options)
      this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
      this.selector = (this.options.target || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) || '') + ' .nav li > a'
      this.$body = $('body')
      this.refresh()
      this.process()
    }
    ScrollSpy.prototype = {constructor: ScrollSpy,refresh: function() {
      var self = this, $targets
      this.offsets = $([])
      this.targets = $([])
      $targets = this.$body.find(this.selector).map(function() {
        var $el = $(this), href = $el.data('target') || $el.attr('href'), $href = /^#\w/.test(href) && $(href)
        return ($href && $href.length && [[$href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]]) || null
      }).sort(function(a, b) {
        return a[0] - b[0]
      }).each(function() {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
    },process: function() {
      var scrollTop = this.$scrollElement.scrollTop() + this.options.offset, scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, maxScroll = scrollHeight - this.$scrollElement.height(), offsets = this.offsets, targets = this.targets, activeTarget = this.activeTarget, i
      if (scrollTop >= maxScroll) {
        return activeTarget != (i = targets.last()[0]) && this.activate(i)
      }
      for (i = offsets.length; i--; ) {
        activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
      }
    },activate: function(target) {
      var active, selector
      this.activeTarget = target
      $(this.selector).parent('.active').removeClass('active')
      selector = this.selector 
      + '[data-target="' + target + '"],' 
      + this.selector + '[href="' + target + '"]'
      active = $(selector).parent('li').addClass('active')
      if (active.parent('.dropdown-menu').length) {
        active = active.closest('li.dropdown').addClass('active')
      }
      active.trigger('activate')
    }}
    var old = $.fn.scrollspy
    $.fn.scrollspy = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('scrollspy'), options = typeof option == 'object' && option
        if (!data)
          $this.data('scrollspy', (data = new ScrollSpy(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.scrollspy.Constructor = ScrollSpy
    $.fn.scrollspy.defaults = {offset: 10}
    $.fn.scrollspy.noConflict = function() {
      $.fn.scrollspy = old
      return this
    }
    $(window).on('load', function() {
      $('[data-spy="scroll"]').each(function() {
        var $spy = $(this)
        $spy.scrollspy($spy.data())
      })
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Tab = function(element) {
      this.element = $(element)
    }
    Tab.prototype = {constructor: Tab,show: function() {
      var $this = this.element, $ul = $this.closest('ul:not(.dropdown-menu)'), selector = $this.attr('data-target'), previous, $target, e
      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
      }
      if ($this.parent('li').hasClass('active'))
        return
      previous = $ul.find('.active:last a')[0]
      e = $.Event('show', {relatedTarget: previous})
      $this.trigger(e)
      if (e.isDefaultPrevented())
        return
      $target = $(selector)
      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function() {
        $this.trigger({type: 'shown',relatedTarget: previous})
      })
    },activate: function(element, container, callback) {
      var $active = container.find('> .active'), transition = callback && $.support.transition && $active.hasClass('fade')
      function next() {
        $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
        element.addClass('active')
        if (transition) {
          element[0].offsetWidth
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }
        if (element.parent('.dropdown-menu')) {
          element.closest('li.dropdown').addClass('active')
        }
        callback && callback()
      }
      transition ? $active.one($.support.transition.end, next) : next()
      $active.removeClass('in')
    }}
    var old = $.fn.tab
    $.fn.tab = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('tab')
        if (!data)
          $this.data('tab', (data = new Tab(this)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.tab.Constructor = Tab
    $.fn.tab.noConflict = function() {
      $.fn.tab = old
      return this
    }
    $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
      e.preventDefault()
      $(this).tab('show')
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Typeahead = function(element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.typeahead.defaults, options)
      this.matcher = this.options.matcher || this.matcher
      this.sorter = this.options.sorter || this.sorter
      this.highlighter = this.options.highlighter || this.highlighter
      this.updater = this.options.updater || this.updater
      this.source = this.options.source
      this.$menu = $(this.options.menu)
      this.shown = false
      this.listen()
    }
    Typeahead.prototype = {constructor: Typeahead,select: function() {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element.val(this.updater(val)).change()
      return this.hide()
    },updater: function(item) {
      return item
    },show: function() {
      var pos = $.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight})
      this.$menu.insertAfter(this.$element).css({top: pos.top + pos.height,left: pos.left}).show()
      this.shown = true
      return this
    },hide: function() {
      this.$menu.hide()
      this.shown = false
      return this
    },lookup: function(event) {
      var items
      this.query = this.$element.val()
      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }
      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source
      return items ? this.process(items) : this
    },process: function(items) {
      var that = this
      items = $.grep(items, function(item) {
        return that.matcher(item)
      })
      items = this.sorter(items)
      if (!items.length) {
        return this.shown ? this.hide() : this
      }
      return this.render(items.slice(0, this.options.items)).show()
    },matcher: function(item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    },sorter: function(items) {
      var beginswith = [], caseSensitive = [], caseInsensitive = [], item
      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase()))
          beginswith.push(item)
        else if (~item.indexOf(this.query))
          caseSensitive.push(item)
        else
          caseInsensitive.push(item)
      }
      return beginswith.concat(caseSensitive, caseInsensitive)
    },highlighter: function(item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function($1, match) {
        return '<strong>' + match + '</strong>'
      })
    },render: function(items) {
      var that = this
      items = $(items).map(function(i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })
      items.first().addClass('active')
      this.$menu.html(items)
      return this
    },next: function(event) {
      var active = this.$menu.find('.active').removeClass('active'), next = active.next()
      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }
      next.addClass('active')
    },prev: function(event) {
      var active = this.$menu.find('.active').removeClass('active'), prev = active.prev()
      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }
      prev.addClass('active')
    },listen: function() {
      this.$element.on('focus', $.proxy(this.focus, this)).on('blur', $.proxy(this.blur, this)).on('keypress', $.proxy(this.keypress, this)).on('keyup', $.proxy(this.keyup, this))
      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }
      this.$menu.on('click', $.proxy(this.click, this)).on('mouseenter', 'li', $.proxy(this.mouseenter, this)).on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    },eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    },move: function(e) {
      if (!this.shown)
        return
      switch (e.keyCode) {
        case 9:
        case 13:
        case 27:
          e.preventDefault()
          break
        case 38:
          e.preventDefault()
          this.prev()
          break
        case 40:
          e.preventDefault()
          this.next()
          break
      }
      e.stopPropagation()
    },keydown: function(e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27])
      this.move(e)
    },keypress: function(e) {
      if (this.suppressKeyPressRepeat)
        return
      this.move(e)
    },keyup: function(e) {
      switch (e.keyCode) {
        case 40:
        case 38:
        case 16:
        case 17:
        case 18:
          break
        case 9:
        case 13:
          if (!this.shown)
            return
          this.select()
          break
        case 27:
          if (!this.shown)
            return
          this.hide()
          break
        default:
          this.lookup()
      }
      e.stopPropagation()
      e.preventDefault()
    },focus: function(e) {
      this.focused = true
    },blur: function(e) {
      this.focused = false
      if (!this.mousedover && this.shown)
        this.hide()
    },click: function(e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    },mouseenter: function(e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    },mouseleave: function(e) {
      this.mousedover = false
      if (!this.focused && this.shown)
        this.hide()
    }}
    var old = $.fn.typeahead
    $.fn.typeahead = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('typeahead'), options = typeof option == 'object' && option
        if (!data)
          $this.data('typeahead', (data = new Typeahead(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.typeahead.defaults = {source: [],items: 8,menu: '<ul class="typeahead dropdown-menu"></ul>',item: '<li><a href="#"></a></li>',minLength: 1}
    $.fn.typeahead.Constructor = Typeahead
    $.fn.typeahead.noConflict = function() {
      $.fn.typeahead = old
      return this
    }
    $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function(e) {
      var $this = $(this)
      if ($this.data('typeahead'))
        return
      $this.typeahead($this.data())
    })
  }(window.jQuery);
  !function($) {
    "use strict";
    var Affix = function(element, options) {
      this.options = $.extend({}, $.fn.affix.defaults, options)
      this.$window = $(window).on('scroll.affix.data-api', $.proxy(this.checkPosition, this)).on('click.affix.data-api', $.proxy(function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
      }, this))
      this.$element = $(element)
      this.checkPosition()
    }
    Affix.prototype.checkPosition = function() {
      if (!this.$element.is(':visible'))
        return
      var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(), position = this.$element.offset(), offset = this.options.offset, offsetBottom = offset.bottom, offsetTop = offset.top, reset = 'affix affix-top affix-bottom', affix
      if (typeof offset != 'object')
        offsetBottom = offsetTop = offset
      if (typeof offsetTop == 'function')
        offsetTop = offset.top()
      if (typeof offsetBottom == 'function')
        offsetBottom = offset.bottom()
      affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && scrollTop <= offsetTop ? 'top' : false
      if (this.affixed === affix)
        return
      this.affixed = affix
      this.unpin = affix == 'bottom' ? position.top - scrollTop : null
      this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
    }
    var old = $.fn.affix
    $.fn.affix = function(option) {
      return this.each(function() {
        var $this = $(this), data = $this.data('affix'), options = typeof option == 'object' && option
        if (!data)
          $this.data('affix', (data = new Affix(this, options)))
        if (typeof option == 'string')
          data[option]()
      })
    }
    $.fn.affix.Constructor = Affix
    $.fn.affix.defaults = {offset: 0}
    $.fn.affix.noConflict = function() {
      $.fn.affix = old
      return this
    }
    $(window).on('load', function() {
      $('[data-spy="affix"]').each(function() {
        var $spy = $(this), data = $spy.data()
        data.offset = data.offset || {}
        data.offsetBottom && (data.offset.bottom = data.offsetBottom)
        data.offsetTop && (data.offset.top = data.offsetTop)
        $spy.affix(data)
      })
    })
  }(window.jQuery);
  (function(exports) {
    var App = exports.App || {};
    App.Model = {};
    App.Collection = {};
    App.View = {};
    App.Router = {};
    App.Utils = {};
    App.Constants = {dc: ["smf1", "atla", "smfd"],env: {VIZ: "viz",EMBEDDED: "embedded"},boserveHost: "https://observe.twitter.biz"};
    exports.App = App;
    $(window).load(function() {
      if (Modernizr.performance && App.Environment !== App.Constants.env.EMBEDDED) {
        var perf = performance.timing;
        VizAnalytics.trackNetworkLatency(perf.responseEnd - perf.fetchStart, window.location.pathname);
        setTimeout(function() {
          VizAnalytics.trackPageLoad(perf.loadEventEnd - perf.responseEnd, window.location.pathname);
        }, 0);
      }
    });
    var _interval;
    App.initInterval = function(model) {
      function cb(model, val) {
        clearInterval(_interval);
        var intervalLength = model.getIntervalTime() || 120000;
        if (val === true || val === 'live') {
          _interval = setInterval(function() {
            model.setLiveDate(model.get('time_span'));
          }, intervalLength);
        }
      }
      model.on('change:date', cb);
    }
    $(window).error(function(error) {
      var message, url, line;
      try {
        if (error && error.originalEvent) {
          error = error.originalEvent;
          if (error && error.message) {
            message = error.message;
            url = error.filename;
            line = error.lineno;
          } else {
            message = "(message empty)";
            url = document.location.href;
            line = "?";
          }
        }
      }
      finally {
        $.post('/analytics', {name: "errors/js",value: 1});
        if (message === "Uncaught Error: chart empty") {
          return false;
        }
        ObsAlert.add("error", "An error has occured: " + message);
        return false;
      }
    });
  }(window));
  (function(exports) {
    "use strict";
    var ANALYTICS_PATH = "/analytics";
    var VizAnalytics = {toolbarClick: function(level, name, val) {
      $.post(ANALYTICS_PATH, {name: "viz/" + level + "/toolbar_click/" + name,value: 1});
      if (typeof (val) !== "undefined") {
        $.post(ANALYTICS_PATH, {name: "viz/" + level + "/toolbar_click/" + name + "/" + val,value: 1});
      }
    },chartLoadSettings: function(name, value) {
      value = value || 1;
      $.post(ANALYTICS_PATH, {name: "viz/chart/load_settings/" + name,value: value});
    },query: function(name, value) {
      value = value || 1;
      $.post(ANALYTICS_PATH, {name: "viz/query/" + name,value: value});
    },chartLoad: function(name, value) {
      value = value || 1;
      $.post(ANALYTICS_PATH, {name: "viz/chart/load/" + name,value: value});
    },navigateUsingSearchBar: function() {
      $.post(ANALYTICS_PATH, {name: "viz/application/navigate_using_search_bar",value: 1});
    },trackShortLinkRequest: function() {
      $.post(ANALYTICS_PATH, {name: "viz/application/short_link_request",value: 1});
    },trackNetworkLatency: function(latency, pathname) {
      var dashboardId = this.getDashboardId(pathname);
      if (dashboardId != null) {
        $.post(ANALYTICS_PATH, {name: "global/db/latency",value: latency});
        $.post(ANALYTICS_PATH, {name: "db/" + dashboardId + "/latency",value: latency});
      } else {
        $.post(ANALYTICS_PATH, {name: "global/query/latency",value: latency});
      }
    },trackPageLoad: function(page_load, pathname) {
      var dashboardId = this.getDashboardId(pathname);
      if (dashboardId != null) {
        $.post(ANALYTICS_PATH, {name: "global/db/page_load",value: page_load});
        $.post(ANALYTICS_PATH, {name: "db/" + dashboardId + "/page_load",value: page_load});
      } else {
        $.post(ANALYTICS_PATH, {name: "global/query/page_load",value: page_load});
      }
    },getDashboardId: function(pathname) {
      var urlSplit = pathname.split("/");
      if (urlSplit[urlSplit.length - 2] == "dashboards") {
        return urlSplit[urlSplit.length - 1];
      }
      return null;
    },embeddedChartLoad: function() {
      $.post(App.Constants.boserveHost + ANALYTICS_PATH, {name: "viz/embeddedchart/load",value: 1});
    }}
    exports.VizAnalytics = VizAnalytics;
  }(window));
  (function(exports) {
    "use strict";
    var AlertsAPI = function() {
    };
    function getAlertsAPI(zone, path, success, error) {
      var url = alerts_apis[zone] + path;
      $.ajax({url: url,type: "GET",dataType: "json",success: success,error: error});
    }
    function callAmiAPI(path, success, error) {
      var url = path;
      $.ajax({url: url,type: "GET",dataType: "json",success: success,error: error});
    }
    function postAmiAPI(path, data, success, error) {
      var url = path;
      $.ajax({url: url,type: "POST",dataType: "json",data: data,success: success,error: error});
    }
    function deleteAmiAPI(path, data, success, error) {
      var url = path;
      $.ajax({url: url,type: "DELETE",dataType: "json",data: data,success: success,error: error});
    }
    function dateString(date) {
      return moment(date).utc().format('YYYY-MM-DD[T]HH:mm:ss[Z]');
    }
    AlertsAPI.prototype.getAllAlerts = function(callback) {
      var requests = [function(cb) {
        $.ajax({url: "/api/1/alerts",type: "GET",dataType: "json",success: function(data) {
          cb(null, {err: null,data: data});
        },error: function(error) {
          cb(null, {err: {msg: e.responseText,code: e.status,}});
        }});
      }];
      _.each(alerts_apis, function(url, zone) {
        requests.push(function(cb) {
          $.ajax({url: url + "/alerts?zone=" + zone,type: "GET",dataType: "json",success: function(data) {
            cb(null, {err: null,data: data,zone: zone});
          },error: function(error) {
            cb(null, {err: {msg: e.responseText,code: e.status}});
          }});
        });
      });
      var finalAlerts = [];
      async.parallel(requests, function(err, results) {
        var alertDefinitions = {};
        results[0].data.forEach(function(alert) {
          alert.zone = alert.dc;
          var key = alert.dc + ":" + alert.alert_url;
          alertDefinitions[key] = alert;
          if (ENV == "development") {
            var key2 = "atla" + ":" + alert.alert_url;
            alertDefinitions[key2] = _.extend({}, alert, {zone: "atla"});
          }
        });
        var alertResponses = results.slice(1);
        alertResponses.forEach(function(response) {
          var zone = response.zone;
          response.data.forEach(function(alert) {
            var alertDef = alertDefinitions[zone + ":" + alert.alert_id];
            if (alertDef) {
              alert.name = alertDef.name;
              alert.team_name = alertDef.team_name;
              alert.zone = zone;
              finalAlerts.push(alert);
            }
          });
        });
        finalAlerts.sort(function(a, b) {
          var c = a.name.localeCompare(b.name);
          if (c != 0)
            return c;
          return a.zone.localeCompare(b.zone);
        });
        callback(finalAlerts);
      });
    };
    AlertsAPI.prototype.getAlertDefinition = function(zone, alertId, success, error) {
      callAmiAPI(alertId + "/definition?zone=" + zone, success, error);
    }
    AlertsAPI.prototype.getAlertStateHistory = function(zone, alertId, from, to, success, error) {
      var params = {"with": "monitor_states"};
      if (from)
        params.from = dateString(from);
      if (to)
        params.to = dateString(to);
      var url = "/alerts/" + alertId + "/states?" + $.param(params);
      getAlertsAPI(zone, url, success, error);
    };
    AlertsAPI.prototype.getRuleStateHistory = function(zone, alertId, ruleId, from, to, success, error) {
      var params = {"with": "monitor_states"};
      if (from)
        params.from = dateString(from);
      if (to)
        params.to = dateString(to);
      var url = "/alerts/" + alertId + "/" + ruleId + "/states?" + $.param(params);
      getAlertsAPI(zone, url, success, error);
    };
    AlertsAPI.prototype.getAlertACL = function(zone, alertId, success, error) {
      callAmiAPI("/alerts/" + alertId + "/acl?zone=" + zone, success, error);
    };
    AlertsAPI.prototype.postAlertACL = function(zone, data, success, error) {
      postAmiAPI("/acl", data, success, error);
    };
    AlertsAPI.prototype.deleteAlertACL = function(zone, data, success, error) {
      deleteAmiAPI("/acl/", data, success, error);
    };
    AlertsAPI.prototype.getAlertState = function(zone, alertId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId, function(data) {
        var state = data.states[0];
        success(state);
      }, error);
    };
    AlertsAPI.prototype.getRuleState = function(zone, alertId, ruleId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/" + ruleId, function(data) {
        var state = data.states[0];
        success(state);
      }, error);
    };
    AlertsAPI.prototype.getMonitorState = function(zone, alertId, ruleId, monitorId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/" + ruleId + "/" + monitorId + ".json", function(data) {
        var state = data.states[0];
        success(state);
      }, error);
    };
    AlertsAPI.prototype.getRulesByAlertId = function(zone, alertId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/rules", success, error);
    };
    AlertsAPI.prototype.getRule = function(zone, alertId, ruleId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/" + ruleId, success, error);
    };
    AlertsAPI.prototype.getMonitorsByRuleId = function(zone, alertId, ruleId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/" + ruleId + "/monitors", success, error);
    };
    AlertsAPI.prototype.getMonitor = function(zone, alertId, ruleId, monitorId, success, error) {
      getAlertsAPI(zone, "/alerts/" + alertId + "/" + ruleId + "/" + monitorId + ".json", success, error);
    };
    AlertsAPI.prototype.getDeprecatedObjectKey = function(zone, snoozerKey, success, error) {
      var succ = function(result) {
        success(result.deprecated_object_key);
      };
      getAlertsAPI(zone, "/alerts/" + snoozerKey, succ, error);
    };
    AlertsAPI.prototype.getActiveSnoozers = function(zone, snoozerKey, deep, success, error) {
      deep = (deep == true);
      callAmiAPI("/alerts/snoozers/active?zone=" + zone + "&snoozer_key=" + snoozerKey + "&deep=" + deep, success, error)
    };
    AlertsAPI.prototype.getAllActiveSnoozers = function(success, error) {
      callAmiAPI("/alerts/snoozers/active", success, error);
    }
    AlertsAPI.prototype.getSnoozeHistory = function(zone, snoozerKey, deep, success, error) {
      deep = (deep == true);
      callAmiAPI("/alerts/snoozers/history?zone=" + zone + "&snoozer_key=" + snoozerKey + "&deep=" + deep, success, error)
    };
    AlertsAPI.prototype.createOrUpdateSnoozer = function(zone, snoozerKey, endsAtTs, reason, deprecatedObjectKey, success, error) {
      var params = {zone: zone,snoozer_key: snoozerKey,ends_at: App.Utils.timestampToFormattedDate(endsAtTs),deprecated_object_key: deprecatedObjectKey,reason: App.Utils.emptyStringtoNull(reason.trim())};
      postAmiAPI("../alerts/snoozers/snoozify", params, success, error);
    };
    AlertsAPI.prototype.deleteSnoozer = function(zone, snoozerKey, reason, deprecatedObjectKey, success, error) {
      var params = {zone: zone,snoozer_key: snoozerKey,delete_snoozer: true,deprecated_object_key: deprecatedObjectKey,reason: App.Utils.emptyStringtoNull(reason.trim())};
      postAmiAPI("../alerts/snoozers/snoozify", params, success, error);
    };
    exports.AlertsAPI = AlertsAPI;
  }(window));
  (function() {
    var async = {};
    var root, previous_async;
    root = this;
    if (root != null) {
      previous_async = root.async;
    }
    async.noConflict = function() {
      root.async = previous_async;
      return async;
    };
    function only_once(fn) {
      var called = false;
      return function() {
        if (called)
          throw new Error("Callback was already called.");
        called = true;
        fn.apply(root, arguments);
      }
    }
    var _forEach = function(arr, iterator) {
      if (arr.forEach) {
        return arr.forEach(iterator);
      }
      for (var i = 0; i < arr.length; i += 1) {
        iterator(arr[i], i, arr);
      }
    };
    var _map = function(arr, iterator) {
      if (arr.map) {
        return arr.map(iterator);
      }
      var results = [];
      _forEach(arr, function(x, i, a) {
        results.push(iterator(x, i, a));
      });
      return results;
    };
    var _reduce = function(arr, iterator, memo) {
      if (arr.reduce) {
        return arr.reduce(iterator, memo);
      }
      _forEach(arr, function(x, i, a) {
        memo = iterator(memo, x, i, a);
      });
      return memo;
    };
    var _keys = function(obj) {
      if (Object.keys) {
        return Object.keys(obj);
      }
      var keys = [];
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      return keys;
    };
    if (typeof process === 'undefined' || !(process.nextTick)) {
      if (typeof setImmediate === 'function') {
        async.nextTick = function(fn) {
          setImmediate(fn);
        };
      } 
      else {
        async.nextTick = function(fn) {
          setTimeout(fn, 0);
        };
      }
    } 
    else {
      async.nextTick = process.nextTick;
    }
    async.forEach = function(arr, iterator, callback) {
      callback = callback || function() {
      };
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      _forEach(arr, function(x) {
        iterator(x, only_once(function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            completed += 1;
            if (completed >= arr.length) {
              callback(null);
            }
          }
        }));
      });
    };
    async.forEachSeries = function(arr, iterator, callback) {
      callback = callback || function() {
      };
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      var iterate = function() {
        var sync = true;
        iterator(arr[completed], function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            completed += 1;
            if (completed >= arr.length) {
              callback(null);
            } 
            else {
              if (sync) {
                async.nextTick(iterate);
              } 
              else {
                iterate();
              }
            }
          }
        });
        sync = false;
      };
      iterate();
    };
    async.forEachLimit = function(arr, limit, iterator, callback) {
      var fn = _forEachLimit(limit);
      fn.apply(null, [arr, iterator, callback]);
    };
    var _forEachLimit = function(limit) {
      return function(arr, iterator, callback) {
        callback = callback || function() {
        };
        if (!arr.length || limit <= 0) {
          return callback();
        }
        var completed = 0;
        var started = 0;
        var running = 0;
        (function replenish() {
          if (completed >= arr.length) {
            return callback();
          }
          while (running < limit && started < arr.length) {
            started += 1;
            running += 1;
            iterator(arr[started - 1], function(err) {
              if (err) {
                callback(err);
                callback = function() {
                };
              } 
              else {
                completed += 1;
                running -= 1;
                if (completed >= arr.length) {
                  callback();
                } 
                else {
                  replenish();
                }
              }
            });
          }
        })();
      };
    };
    var doParallel = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [async.forEach].concat(args));
      };
    };
    var doParallelLimit = function(limit, fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [_forEachLimit(limit)].concat(args));
      };
    };
    var doSeries = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [async.forEachSeries].concat(args));
      };
    };
    var _asyncMap = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(err, v) {
          results[x.index] = v;
          callback(err);
        });
      }, function(err) {
        callback(err, results);
      });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function(arr, limit, iterator, callback) {
      return _mapLimit(limit)(arr, iterator, callback);
    };
    var _mapLimit = function(limit) {
      return doParallelLimit(limit, _asyncMap);
    };
    async.reduce = function(arr, memo, iterator, callback) {
      async.forEachSeries(arr, function(x, callback) {
        iterator(memo, x, function(err, v) {
          memo = v;
          callback(err);
        });
      }, function(err) {
        callback(err, memo);
      });
    };
    async.inject = async.reduce;
    async.foldl = async.reduce;
    async.reduceRight = function(arr, memo, iterator, callback) {
      var reversed = _map(arr, function(x) {
        return x;
      }).reverse();
      async.reduce(reversed, memo, iterator, callback);
    };
    async.foldr = async.reduceRight;
    var _filter = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(v) {
          if (v) {
            results.push(x);
          }
          callback();
        });
      }, function(err) {
        callback(_map(results.sort(function(a, b) {
          return a.index - b.index;
        }), function(x) {
          return x.value;
        }));
      });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    async.select = async.filter;
    async.selectSeries = async.filterSeries;
    var _reject = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(v) {
          if (!v) {
            results.push(x);
          }
          callback();
        });
      }, function(err) {
        callback(_map(results.sort(function(a, b) {
          return a.index - b.index;
        }), function(x) {
          return x.value;
        }));
      });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);
    var _detect = function(eachfn, arr, iterator, main_callback) {
      eachfn(arr, function(x, callback) {
        iterator(x, function(result) {
          if (result) {
            main_callback(x);
            main_callback = function() {
            };
          } 
          else {
            callback();
          }
        });
      }, function(err) {
        main_callback();
      });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);
    async.some = function(arr, iterator, main_callback) {
      async.forEach(arr, function(x, callback) {
        iterator(x, function(v) {
          if (v) {
            main_callback(true);
            main_callback = function() {
            };
          }
          callback();
        });
      }, function(err) {
        main_callback(false);
      });
    };
    async.any = async.some;
    async.every = function(arr, iterator, main_callback) {
      async.forEach(arr, function(x, callback) {
        iterator(x, function(v) {
          if (!v) {
            main_callback(false);
            main_callback = function() {
            };
          }
          callback();
        });
      }, function(err) {
        main_callback(true);
      });
    };
    async.all = async.every;
    async.sortBy = function(arr, iterator, callback) {
      async.map(arr, function(x, callback) {
        iterator(x, function(err, criteria) {
          if (err) {
            callback(err);
          } 
          else {
            callback(null, {value: x,criteria: criteria});
          }
        });
      }, function(err, results) {
        if (err) {
          return callback(err);
        } 
        else {
          var fn = function(left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
          };
          callback(null, _map(results.sort(fn), function(x) {
            return x.value;
          }));
        }
      });
    };
    async.auto = function(tasks, callback) {
      callback = callback || function() {
      };
      var keys = _keys(tasks);
      if (!keys.length) {
        return callback(null);
      }
      var results = {};
      var listeners = [];
      var addListener = function(fn) {
        listeners.unshift(fn);
      };
      var removeListener = function(fn) {
        for (var i = 0; i < listeners.length; i += 1) {
          if (listeners[i] === fn) {
            listeners.splice(i, 1);
            return;
          }
        }
      };
      var taskComplete = function() {
        _forEach(listeners.slice(0), function(fn) {
          fn();
        });
      };
      addListener(function() {
        if (_keys(results).length === keys.length) {
          callback(null, results);
          callback = function() {
          };
        }
      });
      _forEach(keys, function(k) {
        var task = (tasks[k] instanceof Function) ? [tasks[k]] : tasks[k];
        var taskCallback = function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            async.nextTick(taskComplete);
          }
        };
        var requires = task.slice(0, Math.abs(task.length - 1)) || [];
        var ready = function() {
          return _reduce(requires, function(a, x) {
            return (a && results.hasOwnProperty(x));
          }, true) && !results.hasOwnProperty(k);
        };
        if (ready()) {
          task[task.length - 1](taskCallback, results);
        } 
        else {
          var listener = function() {
            if (ready()) {
              removeListener(listener);
              task[task.length - 1](taskCallback, results);
            }
          };
          addListener(listener);
        }
      });
    };
    async.waterfall = function(tasks, callback) {
      callback = callback || function() {
      };
      if (!tasks.length) {
        return callback();
      }
      var wrapIterator = function(iterator) {
        return function(err) {
          if (err) {
            callback.apply(null, arguments);
            callback = function() {
            };
          } 
          else {
            var args = Array.prototype.slice.call(arguments, 1);
            var next = iterator.next();
            if (next) {
              args.push(wrapIterator(next));
            } 
            else {
              args.push(callback);
            }
            async.nextTick(function() {
              iterator.apply(null, args);
            });
          }
        };
      };
      wrapIterator(async.iterator(tasks))();
    };
    var _parallel = function(eachfn, tasks, callback) {
      callback = callback || function() {
      };
      if (tasks.constructor === Array) {
        eachfn.map(tasks, function(fn, callback) {
          if (fn) {
            fn(function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              callback.call(null, err, args);
            });
          }
        }, callback);
      } 
      else {
        var results = {};
        eachfn.forEach(_keys(tasks), function(k, callback) {
          tasks[k](function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            callback(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
    };
    async.parallel = function(tasks, callback) {
      _parallel({map: async.map,forEach: async.forEach}, tasks, callback);
    };
    async.parallelLimit = function(tasks, limit, callback) {
      _parallel({map: _mapLimit(limit),forEach: _forEachLimit(limit)}, tasks, callback);
    };
    async.series = function(tasks, callback) {
      callback = callback || function() {
      };
      if (tasks.constructor === Array) {
        async.mapSeries(tasks, function(fn, callback) {
          if (fn) {
            fn(function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              callback.call(null, err, args);
            });
          }
        }, callback);
      } 
      else {
        var results = {};
        async.forEachSeries(_keys(tasks), function(k, callback) {
          tasks[k](function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            callback(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
    };
    async.iterator = function(tasks) {
      var makeCallback = function(index) {
        var fn = function() {
          if (tasks.length) {
            tasks[index].apply(null, arguments);
          }
          return fn.next();
        };
        fn.next = function() {
          return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
        };
        return fn;
      };
      return makeCallback(0);
    };
    async.apply = function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
      };
    };
    var _concat = function(eachfn, arr, fn, callback) {
      var r = [];
      eachfn(arr, function(x, cb) {
        fn(x, function(err, y) {
          r = r.concat(y || []);
          cb(err);
        });
      }, function(err) {
        callback(err, r);
      });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);
    async.whilst = function(test, iterator, callback) {
      if (test()) {
        var sync = true;
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          if (sync) {
            async.nextTick(function() {
              async.whilst(test, iterator, callback);
            });
          } 
          else {
            async.whilst(test, iterator, callback);
          }
        });
        sync = false;
      } 
      else {
        callback();
      }
    };
    async.doWhilst = function(iterator, test, callback) {
      var sync = true;
      iterator(function(err) {
        if (err) {
          return callback(err);
        }
        if (test()) {
          if (sync) {
            async.nextTick(function() {
              async.doWhilst(iterator, test, callback);
            });
          } 
          else {
            async.doWhilst(iterator, test, callback);
          }
        } 
        else {
          callback();
        }
      });
      sync = false;
    };
    async.until = function(test, iterator, callback) {
      if (!test()) {
        var sync = true;
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          if (sync) {
            async.nextTick(function() {
              async.until(test, iterator, callback);
            });
          } 
          else {
            async.until(test, iterator, callback);
          }
        });
        sync = false;
      } 
      else {
        callback();
      }
    };
    async.doUntil = function(iterator, test, callback) {
      var sync = true;
      iterator(function(err) {
        if (err) {
          return callback(err);
        }
        if (!test()) {
          if (sync) {
            async.nextTick(function() {
              async.doUntil(iterator, test, callback);
            });
          } 
          else {
            async.doUntil(iterator, test, callback);
          }
        } 
        else {
          callback();
        }
      });
      sync = false;
    };
    async.queue = function(worker, concurrency) {
      function _insert(q, data, pos, callback) {
        if (data.constructor !== Array) {
          data = [data];
        }
        _forEach(data, function(task) {
          var item = {data: task,callback: typeof callback === 'function' ? callback : null};
          if (pos) {
            q.tasks.unshift(item);
          } else {
            q.tasks.push(item);
          }
          if (q.saturated && q.tasks.length === concurrency) {
            q.saturated();
          }
          async.nextTick(q.process);
        });
      }
      var workers = 0;
      var q = {tasks: [],concurrency: concurrency,saturated: null,empty: null,drain: null,push: function(data, callback) {
        _insert(q, data, false, callback);
      },unshift: function(data, callback) {
        _insert(q, data, true, callback);
      },process: function() {
        if (workers < q.concurrency && q.tasks.length) {
          var task = q.tasks.shift();
          if (q.empty && q.tasks.length === 0) {
            q.empty();
          }
          workers += 1;
          var sync = true;
          var next = function() {
            workers -= 1;
            if (task.callback) {
              task.callback.apply(task, arguments);
            }
            if (q.drain && q.tasks.length + workers === 0) {
              q.drain();
            }
            q.process();
          };
          var cb = only_once(function() {
            var cbArgs = arguments;
            if (sync) {
              async.nextTick(function() {
                next.apply(null, cbArgs);
              });
            } else {
              next.apply(null, arguments);
            }
          });
          worker(task.data, cb);
          sync = false;
        }
      },length: function() {
        return q.tasks.length;
      },running: function() {
        return workers;
      }};
      return q;
    };
    async.cargo = function(worker, payload) {
      var working = false, tasks = [];
      var cargo = {tasks: tasks,payload: payload,saturated: null,empty: null,drain: null,push: function(data, callback) {
        if (data.constructor !== Array) {
          data = [data];
        }
        _forEach(data, function(task) {
          tasks.push({data: task,callback: typeof callback === 'function' ? callback : null});
          if (cargo.saturated && tasks.length === payload) {
            cargo.saturated();
          }
        });
        async.nextTick(cargo.process);
      },process: function process() {
        if (working)
          return;
        if (tasks.length === 0) {
          if (cargo.drain)
            cargo.drain();
          return;
        }
        var ts = typeof payload === 'number' ? tasks.splice(0, payload) : tasks.splice(0);
        var ds = _map(ts, function(task) {
          return task.data;
        });
        if (cargo.empty)
          cargo.empty();
        working = true;
        worker(ds, function() {
          working = false;
          var args = arguments;
          _forEach(ts, function(data) {
            if (data.callback) {
              data.callback.apply(null, args);
            }
          });
          process();
        });
      },length: function() {
        return tasks.length;
      },running: function() {
        return working;
      }};
      return cargo;
    };
    var _console_fn = function(name) {
      return function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args.concat([function(err) {
          var args = Array.prototype.slice.call(arguments, 1);
          if (typeof console !== 'undefined') {
            if (err) {
              if (console.error) {
                console.error(err);
              }
            } 
            else if (console[name]) {
              _forEach(args, function(x) {
                console[name](x);
              });
            }
          }
        }]));
      };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    async.memoize = function(fn, hasher) {
      var memo = {};
      var queues = {};
      hasher = hasher || function(x) {
        return x;
      };
      var memoized = function() {
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();
        var key = hasher.apply(null, args);
        if (key in memo) {
          callback.apply(null, memo[key]);
        } 
        else if (key in queues) {
          queues[key].push(callback);
        } 
        else {
          queues[key] = [callback];
          fn.apply(null, args.concat([function() {
            memo[key] = arguments;
            var q = queues[key];
            delete queues[key];
            for (var i = 0, l = q.length; i < l; i++) {
              q[i].apply(null, arguments);
            }
          }]));
        }
      };
      memoized.memo = memo;
      memoized.unmemoized = fn;
      return memoized;
    };
    async.unmemoize = function(fn) {
      return function() {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };
    async.times = function(count, iterator, callback) {
      var counter = [];
      for (var i = 0; i < count; i++) {
        counter.push(i);
      }
      return async.map(counter, iterator, callback);
    };
    async.timesSeries = function(count, iterator, callback) {
      var counter = [];
      for (var i = 0; i < count; i++) {
        counter.push(i);
      }
      return async.mapSeries(counter, iterator, callback);
    };
    async.compose = function() {
      var fns = Array.prototype.reverse.call(arguments);
      return function() {
        var that = this;
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();
        async.reduce(fns, args, function(newargs, fn, cb) {
          fn.apply(that, newargs.concat([function() {
            var err = arguments[0];
            var nextargs = Array.prototype.slice.call(arguments, 1);
            cb(err, nextargs);
          }]))
        }, function(err, results) {
          callback.apply(that, [err].concat(results));
        });
      };
    };
    if (typeof define !== 'undefined' && define.amd) {
      define([], function() {
        return async;
      });
    } 
    else if (typeof module !== 'undefined' && module.exports) {
      module.exports = async;
    } 
    else {
      root.async = async;
    }
  }());
  ;
  window.Modernizr = function(a, b, c) {
    function w(a) {
      i.cssText = a
    }
    function x(a, b) {
      return w(prefixes.join(a + ";") + (b || ""))
    }
    function y(a, b) {
      return typeof a === b
    }
    function z(a, b) {
      return !!~("" + a).indexOf(b)
    }
    function A(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!z(e, "-") && i[e] !== c)
          return b == "pfx" ? e : !0
      }
      return !1
    }
    function B(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c)
          return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }
    function C(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + m.join(d + " ") + d).split(" ");
      return y(b, "string") || y(b, "undefined") ? A(e, b) : (e = (a + " " + n.join(d + " ") + d).split(" "), B(e, b, c))
    }
    var d = "2.6.2", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j, k = {}.toString, l = "Webkit Moz O ms", m = l.split(" "), n = l.toLowerCase().split(" "), o = {}, p = {}, q = {}, r = [], s = r.slice, t, u = {}.hasOwnProperty, v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
      return u.call(a, b)
    } : v = function(a, b) {
      return b in a && y(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function")
        throw new TypeError;
      var d = s.call(arguments, 1), e = function() {
        if (this instanceof e) {
          var a = function() {
          };
          a.prototype = c.prototype;
          var f = new a, g = c.apply(f, d.concat(s.call(arguments)));
          return Object(g) === g ? g : f
        }
        return c.apply(b, d.concat(s.call(arguments)))
      };
      return e
    });
    for (var D in o)
  v(o, D) && (t = D.toLowerCase(), e[t] = o[D](), r.push((e[t] ? "" : "no-") + t));
    return e.addTest = function(a, b) {
      if (typeof a == "object")
        for (var d in a)
          v(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c)
            return e;
          b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, w(""), h = j = null, function(a, b) {
      function k(a, b) {
        var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
      }
      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a
      }
      function m(a) {
        var b = i[a[g]];
        return b || (b = {}, h++, a[g] = h, i[h] = b), b
      }
      function n(a, c, f) {
        c || (c = b);
        if (j)
          return c.createElement(a);
        f || (f = m(c));
        var g;
        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
      }
      function o(a, c) {
        a || (a = b);
        if (j)
          return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
        for (; e < g; e++)
          d.createElement(f[e]);
        return d
      }
      function p(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
          return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
          return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(r, b.frag)
      }
      function q(a) {
        a || (a = b);
        var c = m(a);
        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
      }
      var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
      (function() {
        try {
          var a = b.createElement("a");
          a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
            b.createElement("a");
            var a = b.createDocumentFragment();
            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
          }()
        } catch (c) {
          f = !0, j = !0
        }
      })();
      var r = {elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS: c.shivCSS !== !1,supportsUnknownElements: j,shivMethods: c.shivMethods !== !1,type: "default",shivDocument: q,createElement: n,createDocumentFragment: o};
      a.html5 = r, q(b)
    }(this, b), e._version = d, e._domPrefixes = n, e._cssomPrefixes = m, e.testProp = function(a) {
      return A([a])
    }, e.testAllProps = C, e.prefixed = function(a, b, c) {
      return b ? C(a, b, c) : C(a, "pfx")
    }, e
  }(this, this.document), function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }
    function e(a) {
      return "string" == typeof a
    }
    function f() {
    }
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c])
            y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d,s: c,e: f,a: i,x: j};
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
      var a = B;
      return a.loader = {load: j,i: 0}, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
      return "[object Array]" == o.call(a)
    }, x = [], y = {}, z = {timeout: function(a, b) {
      return b.length && (a.timeout = b[0]), a
    }}, A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c,origUrl: c,prefixes: a}, e, f, g;
        for (f = 0; f < d; f++)
          g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++)
          c = x[f](c);
        return c
      }
      function g(a, e, f, g, h) {
        var i = b(a), j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c || (j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              }), g(a, j, b, 0, h);
              else if (Object(a) === a)
                for (n in m = function() {
                  var b = 0, c;
                  for (c in a)
                    a.hasOwnProperty(c) && b++;
                  return b
                }(), a)
                a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l()
                } : j[n] = function(a) {
                  return function() {
                    var b = [].slice.call(arguments);
                    a && a.apply(this, b), l()
                  }
                }(k[n])), g(a[n], j, b, n, h))
          } else
            !c && l()
        }
        var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a))
        g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
          Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d)
        k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"), j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d)
        e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  }, Modernizr.addTest("performance", !!Modernizr.prefixed("performance", window));
  (function(undefined) {
    var moment, VERSION = "2.0.0", round = Math.round, i, languages = {}, hasModule = (typeof module !== 'undefined' && module.exports), aspNetJsonRegex = /^\/?Date\((\-?\d+)/i, formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, parseMultipleFormatChunker = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, isoFormat = 'YYYY-MM-DDTHH:mm:ssZ', isoTimes = [['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/], ['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]], parseTimezoneChunker = /([\+\-]|\d\d)/gi, proxyGettersAndSetters = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), unitMillisecondFactors = {'Milliseconds': 1,'Seconds': 1e3,'Minutes': 6e4,'Hours': 36e5,'Days': 864e5,'Months': 2592e6,'Years': 31536e6}, formatFunctions = {}, ordinalizeTokens = 'DDD w W M D d'.split(' '), paddedTokens = 'M D H h m s w W'.split(' '), formatTokenFunctions = {M: function() {
      return this.month() + 1;
    },MMM: function(format) {
      return this.lang().monthsShort(this, format);
    },MMMM: function(format) {
      return this.lang().months(this, format);
    },D: function() {
      return this.date();
    },DDD: function() {
      return this.dayOfYear();
    },d: function() {
      return this.day();
    },dd: function(format) {
      return this.lang().weekdaysMin(this, format);
    },ddd: function(format) {
      return this.lang().weekdaysShort(this, format);
    },dddd: function(format) {
      return this.lang().weekdays(this, format);
    },w: function() {
      return this.week();
    },W: function() {
      return this.isoWeek();
    },YY: function() {
      return leftZeroFill(this.year() % 100, 2);
    },YYYY: function() {
      return leftZeroFill(this.year(), 4);
    },YYYYY: function() {
      return leftZeroFill(this.year(), 5);
    },a: function() {
      return this.lang().meridiem(this.hours(), this.minutes(), true);
    },A: function() {
      return this.lang().meridiem(this.hours(), this.minutes(), false);
    },H: function() {
      return this.hours();
    },h: function() {
      return this.hours() % 12 || 12;
    },m: function() {
      return this.minutes();
    },s: function() {
      return this.seconds();
    },S: function() {
      return ~~(this.milliseconds() / 100);
    },SS: function() {
      return leftZeroFill(~~(this.milliseconds() / 10), 2);
    },SSS: function() {
      return leftZeroFill(this.milliseconds(), 3);
    },Z: function() {
      var a = -this.zone(), b = "+";
      if (a < 0) {
        a = -a;
        b = "-";
      }
      return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
    },ZZ: function() {
      var a = -this.zone(), b = "+";
      if (a < 0) {
        a = -a;
        b = "-";
      }
      return b + leftZeroFill(~~(10 * a / 6), 4);
    },X: function() {
      return this.unix();
    }};
    function padToken(func, count) {
      return function(a) {
        return leftZeroFill(func.call(this, a), count);
      };
    }
    function ordinalizeToken(func) {
      return function(a) {
        return this.lang().ordinal(func.call(this, a));
      };
    }
    while (ordinalizeTokens.length) {
      i = ordinalizeTokens.pop();
      formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i]);
    }
    while (paddedTokens.length) {
      i = paddedTokens.pop();
      formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
    function Language() {
    }
    function Moment(config) {
      extend(this, config);
    }
    function Duration(duration) {
      var data = this._data = {}, years = duration.years || duration.year || duration.y || 0, months = duration.months || duration.month || duration.M || 0, weeks = duration.weeks || duration.week || duration.w || 0, days = duration.days || duration.day || duration.d || 0, hours = duration.hours || duration.hour || duration.h || 0, minutes = duration.minutes || duration.minute || duration.m || 0, seconds = duration.seconds || duration.second || duration.s || 0, milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;
      this._milliseconds = milliseconds + 
        seconds * 1e3 + 
        minutes * 6e4 + 
        hours * 36e5;
      this._days = days + 
        weeks * 7;
      this._months = months + 
        years * 12;
      data.milliseconds = milliseconds % 1000;
      seconds += absRound(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes += absRound(seconds / 60);
      data.minutes = minutes % 60;
      hours += absRound(minutes / 60);
      data.hours = hours % 24;
      days += absRound(hours / 24);
      days += weeks * 7;
      data.days = days % 30;
      months += absRound(days / 30);
      data.months = months % 12;
      years += absRound(months / 12);
      data.years = years;
    }
    function extend(a, b) {
      for (var i in b) {
        if (b.hasOwnProperty(i)) {
          a[i] = b[i];
        }
      }
      return a;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.ceil(number);
      } else {
        return Math.floor(number);
      }
    }
    function leftZeroFill(number, targetLength) {
      var output = number + '';
      while (output.length < targetLength) {
        output = '0' + output;
      }
      return output;
    }
    function addOrSubtractDurationFromMoment(mom, duration, isAdding) {
      var ms = duration._milliseconds, d = duration._days, M = duration._months, currentDate;
      if (ms) {
        mom._d.setTime(+mom + ms * isAdding);
      }
      if (d) {
        mom.date(mom.date() + d * isAdding);
      }
      if (M) {
        currentDate = mom.date();
        mom.date(1).month(mom.month() + M * isAdding).date(Math.min(currentDate, mom.daysInMonth()));
      }
    }
    function isArray(input) {
      return Object.prototype.toString.call(input) === '[object Array]';
    }
    function compareArrays(array1, array2) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
      for (i = 0; i < len; i++) {
        if (~~array1[i] !== ~~array2[i]) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    Language.prototype = {set: function(config) {
      var prop, i;
      for (i in config) {
        prop = config[i];
        if (typeof prop === 'function') {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
    },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(m) {
      return this._months[m.month()];
    },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(m) {
      return this._monthsShort[m.month()];
    },monthsParse: function(monthName) {
      var i, mom, regex, output;
      if (!this._monthsParse) {
        this._monthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        if (!this._monthsParse[i]) {
          mom = moment([2000, i]);
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(m) {
      return this._weekdays[m.day()];
    },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(m) {
      return this._weekdaysShort[m.day()];
    },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(m) {
      return this._weekdaysMin[m.day()];
    },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(key) {
      var output = this._longDateFormat[key];
      if (!output && this._longDateFormat[key.toUpperCase()]) {
        output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
          return val.slice(1);
        });
        this._longDateFormat[key] = output;
      }
      return output;
    },meridiem: function(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    },_calendar: {sameDay: '[Today at] LT',nextDay: '[Tomorrow at] LT',nextWeek: 'dddd [at] LT',lastDay: '[Yesterday at] LT',lastWeek: '[last] dddd [at] LT',sameElse: 'L'},calendar: function(key, mom) {
      var output = this._calendar[key];
      return typeof output === 'function' ? output.apply(mom) : output;
    },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return (typeof output === 'function') ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    },pastFuture: function(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    },ordinal: function(number) {
      return this._ordinal.replace("%d", number);
    },_ordinal: "%d",preparse: function(string) {
      return string;
    },postformat: function(string) {
      return string;
    },week: function(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy);
    },_week: {dow: 0,doy: 6}};
    function loadLang(key, values) {
      values.abbr = key;
      if (!languages[key]) {
        languages[key] = new Language();
      }
      languages[key].set(values);
      return languages[key];
    }
    function getLangDefinition(key) {
      if (!key) {
        return moment.fn._lang;
      }
      if (!languages[key] && hasModule) {
        require('./lang/' + key);
      }
      return languages[key];
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[.*\]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format) {
      var array = format.match(formattingTokens), i, length;
      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = "";
        for (i = 0; i < length; i++) {
          output += typeof array[i].call === 'function' ? array[i].call(mom, format) : array[i];
        }
        return output;
      };
    }
    function formatMoment(m, format) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return m.lang().longDateFormat(input) || input;
      }
      while (i-- && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      }
      if (!formatFunctions[format]) {
        formatFunctions[format] = makeFormatFunction(format);
      }
      return formatFunctions[format](m);
    }
    function getParseRegexForToken(token) {
      switch (token) {
        case 'DDDD':
          return parseTokenThreeDigits;
        case 'YYYY':
          return parseTokenFourDigits;
        case 'YYYYY':
          return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
          return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'a':
        case 'A':
          return parseTokenWord;
        case 'X':
          return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
          return parseTokenTimezone;
        case 'T':
          return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
          return parseTokenOneOrTwoDigits;
        default:
          return new RegExp(token.replace('\\', ''));
      }
    }
    function addTimeToArrayFromToken(token, input, config) {
      var a, b, datePartArray = config._a;
      switch (token) {
        case 'M':
        case 'MM':
          datePartArray[1] = (input == null) ? 0 : ~~input - 1;
          break;
        case 'MMM':
        case 'MMMM':
          a = getLangDefinition(config._l).monthsParse(input);
          if (a != null) {
            datePartArray[1] = a;
          } else {
            config._isValid = false;
          }
          break;
        case 'D':
        case 'DD':
        case 'DDD':
        case 'DDDD':
          if (input != null) {
            datePartArray[2] = ~~input;
          }
          break;
        case 'YY':
          datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
          break;
        case 'YYYY':
        case 'YYYYY':
          datePartArray[0] = ~~input;
          break;
        case 'a':
        case 'A':
          config._isPm = ((input + '').toLowerCase() === 'pm');
          break;
        case 'H':
        case 'HH':
        case 'h':
        case 'hh':
          datePartArray[3] = ~~input;
          break;
        case 'm':
        case 'mm':
          datePartArray[4] = ~~input;
          break;
        case 's':
        case 'ss':
          datePartArray[5] = ~~input;
          break;
        case 'S':
        case 'SS':
        case 'SSS':
          datePartArray[6] = ~~(('0.' + input) * 1000);
          break;
        case 'X':
          config._d = new Date(parseFloat(input) * 1000);
          break;
        case 'Z':
        case 'ZZ':
          config._useUTC = true;
          a = (input + '').match(parseTimezoneChunker);
          if (a && a[1]) {
            config._tzh = ~~a[1];
          }
          if (a && a[2]) {
            config._tzm = ~~a[2];
          }
          if (a && a[0] === '+') {
            config._tzh = -config._tzh;
            config._tzm = -config._tzm;
          }
          break;
      }
      if (input == null) {
        config._isValid = false;
      }
    }
    function dateFromArray(config) {
      var i, date, input = [];
      if (config._d) {
        return;
      }
      for (i = 0; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }
      input[3] += config._tzh || 0;
      input[4] += config._tzm || 0;
      date = new Date(0);
      if (config._useUTC) {
        date.setUTCFullYear(input[0], input[1], input[2]);
        date.setUTCHours(input[3], input[4], input[5], input[6]);
      } else {
        date.setFullYear(input[0], input[1], input[2]);
        date.setHours(input[3], input[4], input[5], input[6]);
      }
      config._d = date;
    }
    function makeDateFromStringAndFormat(config) {
      var tokens = config._f.match(formattingTokens), string = config._i, i, parsedInput;
      config._a = [];
      for (i = 0; i < tokens.length; i++) {
        parsedInput = (getParseRegexForToken(tokens[i]).exec(string) || [])[0];
        if (parsedInput) {
          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        }
        if (formatTokenFunctions[tokens[i]]) {
          addTimeToArrayFromToken(tokens[i], parsedInput, config);
        }
      }
      if (config._isPm && config._a[3] < 12) {
        config._a[3] += 12;
      }
      if (config._isPm === false && config._a[3] === 12) {
        config._a[3] = 0;
      }
      dateFromArray(config);
    }
    function makeDateFromStringAndArray(config) {
      var tempConfig, tempMoment, bestMoment, scoreToBeat = 99, i, currentDate, currentScore;
      while (config._f.length) {
        tempConfig = extend({}, config);
        tempConfig._f = config._f.pop();
        makeDateFromStringAndFormat(tempConfig);
        tempMoment = new Moment(tempConfig);
        if (tempMoment.isValid()) {
          bestMoment = tempMoment;
          break;
        }
        currentScore = compareArrays(tempConfig._a, tempMoment.toArray());
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempMoment;
        }
      }
      extend(config, bestMoment);
    }
    function makeDateFromString(config) {
      var i, string = config._i;
      if (isoRegex.exec(string)) {
        config._f = 'YYYY-MM-DDT';
        for (i = 0; i < 4; i++) {
          if (isoTimes[i][1].exec(string)) {
            config._f += isoTimes[i][0];
            break;
          }
        }
        if (parseTokenTimezone.exec(string)) {
          config._f += " Z";
        }
        makeDateFromStringAndFormat(config);
      } else {
        config._d = new Date(string);
      }
    }
    function makeDateFromInput(config) {
      var input = config._i, matched = aspNetJsonRegex.exec(input);
      if (input === undefined) {
        config._d = new Date();
      } else if (matched) {
        config._d = new Date(+matched[1]);
      } else if (typeof input === 'string') {
        makeDateFromString(config);
      } else if (isArray(input)) {
        config._a = input.slice(0);
        dateFromArray(config);
      } else {
        config._d = input instanceof Date ? new Date(+input) : new Date(input);
      }
    }
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
      return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime(milliseconds, withoutSuffix, lang) {
      var seconds = round(Math.abs(milliseconds) / 1000), minutes = round(seconds / 60), hours = round(minutes / 60), days = round(hours / 24), years = round(days / 365), args = seconds < 45 && ['s', seconds] || minutes === 1 && ['m'] || minutes < 45 && ['mm', minutes] || hours === 1 && ['h'] || hours < 22 && ['hh', hours] || days === 1 && ['d'] || days <= 25 && ['dd', days] || days <= 45 && ['M'] || days < 345 && ['MM', round(days / 30)] || years === 1 && ['y'] || ['yy', years];
      args[2] = withoutSuffix;
      args[3] = milliseconds > 0;
      args[4] = lang;
      return substituteTimeAgo.apply({}, args);
    }
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
      var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();
      if (daysToDayOfWeek > end) {
        daysToDayOfWeek -= 7;
      }
      if (daysToDayOfWeek < end - 7) {
        daysToDayOfWeek += 7;
      }
      return Math.ceil(moment(mom).add('d', daysToDayOfWeek).dayOfYear() / 7);
    }
    function makeMoment(config) {
      var input = config._i, format = config._f;
      if (input === null || input === '') {
        return null;
      }
      if (typeof input === 'string') {
        config._i = input = getLangDefinition().preparse(input);
      }
      if (moment.isMoment(input)) {
        config = extend({}, input);
        config._d = new Date(+input._d);
      } else if (format) {
        if (isArray(format)) {
          makeDateFromStringAndArray(config);
        } else {
          makeDateFromStringAndFormat(config);
        }
      } else {
        makeDateFromInput(config);
      }
      return new Moment(config);
    }
    moment = function(input, format, lang) {
      return makeMoment({_i: input,_f: format,_l: lang,_isUTC: false});
    };
    moment.utc = function(input, format, lang) {
      return makeMoment({_useUTC: true,_isUTC: true,_l: lang,_i: input,_f: format});
    };
    moment.unix = function(input) {
      return moment(input * 1000);
    };
    moment.duration = function(input, key) {
      var isDuration = moment.isDuration(input), isNumber = (typeof input === 'number'), duration = (isDuration ? input._data : (isNumber ? {} : input)), ret;
      if (isNumber) {
        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      }
      ret = new Duration(duration);
      if (isDuration && input.hasOwnProperty('_lang')) {
        ret._lang = input._lang;
      }
      return ret;
    };
    moment.version = VERSION;
    moment.defaultFormat = isoFormat;
    moment.lang = function(key, values) {
      var i;
      if (!key) {
        return moment.fn._lang._abbr;
      }
      if (values) {
        loadLang(key, values);
      } else if (!languages[key]) {
        getLangDefinition(key);
      }
      moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
    };
    moment.langData = function(key) {
      if (key && key._lang && key._lang._abbr) {
        key = key._lang._abbr;
      }
      return getLangDefinition(key);
    };
    moment.isMoment = function(obj) {
      return obj instanceof Moment;
    };
    moment.isDuration = function(obj) {
      return obj instanceof Duration;
    };
    moment.fn = Moment.prototype = {clone: function() {
      return moment(this);
    },valueOf: function() {
      return +this._d;
    },unix: function() {
      return Math.floor(+this._d / 1000);
    },toString: function() {
      return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    },toDate: function() {
      return this._d;
    },toJSON: function() {
      return moment.utc(this).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    },toArray: function() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
    },isValid: function() {
      if (this._isValid == null) {
        if (this._a) {
          this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
        } else {
          this._isValid = !isNaN(this._d.getTime());
        }
      }
      return !!this._isValid;
    },utc: function() {
      this._isUTC = true;
      return this;
    },local: function() {
      this._isUTC = false;
      return this;
    },format: function(inputString) {
      var output = formatMoment(this, inputString || moment.defaultFormat);
      return this.lang().postformat(output);
    },add: function(input, val) {
      var dur;
      if (typeof input === 'string') {
        dur = moment.duration(+val, input);
      } else {
        dur = moment.duration(input, val);
      }
      addOrSubtractDurationFromMoment(this, dur, 1);
      return this;
    },subtract: function(input, val) {
      var dur;
      if (typeof input === 'string') {
        dur = moment.duration(+val, input);
      } else {
        dur = moment.duration(input, val);
      }
      addOrSubtractDurationFromMoment(this, dur, -1);
      return this;
    },diff: function(input, units, asFloat) {
      var that = this._isUTC ? moment(input).utc() : moment(input).local(), zoneDiff = (this.zone() - that.zone()) * 6e4, diff, output;
      if (units) {
        units = units.replace(/s$/, '');
      }
      if (units === 'year' || units === 'month') {
        diff = (this.daysInMonth() + that.daysInMonth()) * 432e5;
        output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
        output += ((this - moment(this).startOf('month')) - (that - moment(that).startOf('month'))) / diff;
        if (units === 'year') {
          output = output / 12;
        }
      } else {
        diff = (this - that) - zoneDiff;
        output = units === 'second' ? diff / 1e3 : units === 'minute' ? diff / 6e4 : units === 'hour' ? diff / 36e5 : units === 'day' ? diff / 864e5 : units === 'week' ? diff / 6048e5 : diff;
      }
      return asFloat ? output : absRound(output);
    },from: function(time, withoutSuffix) {
      return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
    },fromNow: function(withoutSuffix) {
      return this.from(moment(), withoutSuffix);
    },calendar: function() {
      var diff = this.diff(moment().startOf('day'), 'days', true), format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      return this.format(this.lang().calendar(format, this));
    },isLeapYear: function() {
      var year = this.year();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },isDST: function() {
      return (this.zone() < moment([this.year()]).zone() || this.zone() < moment([this.year(), 5]).zone());
    },day: function(input) {
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return input == null ? day : this.add({d: input - day});
    },startOf: function(units) {
      units = units.replace(/s$/, '');
      switch (units) {
        case 'year':
          this.month(0);
        case 'month':
          this.date(1);
        case 'week':
        case 'day':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
      }
      if (units === 'week') {
        this.day(0);
      }
      return this;
    },endOf: function(units) {
      return this.startOf(units).add(units.replace(/s?$/, 's'), 1).subtract('ms', 1);
    },isAfter: function(input, units) {
      units = typeof units !== 'undefined' ? units : 'millisecond';
      return +this.clone().startOf(units) > +moment(input).startOf(units);
    },isBefore: function(input, units) {
      units = typeof units !== 'undefined' ? units : 'millisecond';
      return +this.clone().startOf(units) < +moment(input).startOf(units);
    },isSame: function(input, units) {
      units = typeof units !== 'undefined' ? units : 'millisecond';
      return +this.clone().startOf(units) === +moment(input).startOf(units);
    },zone: function() {
      return this._isUTC ? 0 : this._d.getTimezoneOffset();
    },daysInMonth: function() {
      return moment.utc([this.year(), this.month() + 1, 0]).date();
    },dayOfYear: function(input) {
      var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
    },isoWeek: function(input) {
      var week = weekOfYear(this, 1, 4);
      return input == null ? week : this.add("d", (input - week) * 7);
    },week: function(input) {
      var week = this.lang().week(this);
      return input == null ? week : this.add("d", (input - week) * 7);
    },lang: function(key) {
      if (key === undefined) {
        return this._lang;
      } else {
        this._lang = getLangDefinition(key);
        return this;
      }
    }};
    function makeGetterAndSetter(name, key) {
      moment.fn[name] = moment.fn[name + 's'] = function(input) {
        var utc = this._isUTC ? 'UTC' : '';
        if (input != null) {
          this._d['set' + utc + key](input);
          return this;
        } else {
          return this._d['get' + utc + key]();
        }
      };
    }
    for (i = 0; i < proxyGettersAndSetters.length; i++) {
      makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
    }
    makeGetterAndSetter('year', 'FullYear');
    moment.fn.days = moment.fn.day;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.duration.fn = Duration.prototype = {weeks: function() {
      return absRound(this.days() / 7);
    },valueOf: function() {
      return this._milliseconds + 
        this._days * 864e5 + 
        this._months * 2592e6;
    },humanize: function(withSuffix) {
      var difference = +this, output = relativeTime(difference, !withSuffix, this.lang());
      if (withSuffix) {
        output = this.lang().pastFuture(difference, output);
      }
      return this.lang().postformat(output);
    },lang: moment.fn.lang};
    function makeDurationGetter(name) {
      moment.duration.fn[name] = function() {
        return this._data[name];
      };
    }
    function makeDurationAsGetter(name, factor) {
      moment.duration.fn['as' + name] = function() {
        return +this / factor;
      };
    }
    for (i in unitMillisecondFactors) {
      if (unitMillisecondFactors.hasOwnProperty(i)) {
        makeDurationAsGetter(i, unitMillisecondFactors[i]);
        makeDurationGetter(i.toLowerCase());
      }
    }
    makeDurationAsGetter('Weeks', 6048e5);
    moment.lang('en', {ordinal: function(number) {
      var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }});
    if (hasModule) {
      module.exports = moment;
    }
    if (typeof ender === 'undefined') {
      this['moment'] = moment;
    }
    if (typeof define === "function" && define.amd) {
      define("moment", [], function() {
        return moment;
      });
    }
  }).call(this);
  (function() {
    var async = {};
    var root, previous_async;
    root = this;
    if (root != null) {
      previous_async = root.async;
    }
    async.noConflict = function() {
      root.async = previous_async;
      return async;
    };
    function only_once(fn) {
      var called = false;
      return function() {
        if (called)
          throw new Error("Callback was already called.");
        called = true;
        fn.apply(root, arguments);
      }
    }
    var _forEach = function(arr, iterator) {
      if (arr.forEach) {
        return arr.forEach(iterator);
      }
      for (var i = 0; i < arr.length; i += 1) {
        iterator(arr[i], i, arr);
      }
    };
    var _map = function(arr, iterator) {
      if (arr.map) {
        return arr.map(iterator);
      }
      var results = [];
      _forEach(arr, function(x, i, a) {
        results.push(iterator(x, i, a));
      });
      return results;
    };
    var _reduce = function(arr, iterator, memo) {
      if (arr.reduce) {
        return arr.reduce(iterator, memo);
      }
      _forEach(arr, function(x, i, a) {
        memo = iterator(memo, x, i, a);
      });
      return memo;
    };
    var _keys = function(obj) {
      if (Object.keys) {
        return Object.keys(obj);
      }
      var keys = [];
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      return keys;
    };
    if (typeof process === 'undefined' || !(process.nextTick)) {
      if (typeof setImmediate === 'function') {
        async.nextTick = function(fn) {
          setImmediate(fn);
        };
      } 
      else {
        async.nextTick = function(fn) {
          setTimeout(fn, 0);
        };
      }
    } 
    else {
      async.nextTick = process.nextTick;
    }
    async.forEach = function(arr, iterator, callback) {
      callback = callback || function() {
      };
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      _forEach(arr, function(x) {
        iterator(x, only_once(function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            completed += 1;
            if (completed >= arr.length) {
              callback(null);
            }
          }
        }));
      });
    };
    async.forEachSeries = function(arr, iterator, callback) {
      callback = callback || function() {
      };
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      var iterate = function() {
        var sync = true;
        iterator(arr[completed], function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            completed += 1;
            if (completed >= arr.length) {
              callback(null);
            } 
            else {
              if (sync) {
                async.nextTick(iterate);
              } 
              else {
                iterate();
              }
            }
          }
        });
        sync = false;
      };
      iterate();
    };
    async.forEachLimit = function(arr, limit, iterator, callback) {
      var fn = _forEachLimit(limit);
      fn.apply(null, [arr, iterator, callback]);
    };
    var _forEachLimit = function(limit) {
      return function(arr, iterator, callback) {
        callback = callback || function() {
        };
        if (!arr.length || limit <= 0) {
          return callback();
        }
        var completed = 0;
        var started = 0;
        var running = 0;
        (function replenish() {
          if (completed >= arr.length) {
            return callback();
          }
          while (running < limit && started < arr.length) {
            started += 1;
            running += 1;
            iterator(arr[started - 1], function(err) {
              if (err) {
                callback(err);
                callback = function() {
                };
              } 
              else {
                completed += 1;
                running -= 1;
                if (completed >= arr.length) {
                  callback();
                } 
                else {
                  replenish();
                }
              }
            });
          }
        })();
      };
    };
    var doParallel = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [async.forEach].concat(args));
      };
    };
    var doParallelLimit = function(limit, fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [_forEachLimit(limit)].concat(args));
      };
    };
    var doSeries = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(null, [async.forEachSeries].concat(args));
      };
    };
    var _asyncMap = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(err, v) {
          results[x.index] = v;
          callback(err);
        });
      }, function(err) {
        callback(err, results);
      });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function(arr, limit, iterator, callback) {
      return _mapLimit(limit)(arr, iterator, callback);
    };
    var _mapLimit = function(limit) {
      return doParallelLimit(limit, _asyncMap);
    };
    async.reduce = function(arr, memo, iterator, callback) {
      async.forEachSeries(arr, function(x, callback) {
        iterator(memo, x, function(err, v) {
          memo = v;
          callback(err);
        });
      }, function(err) {
        callback(err, memo);
      });
    };
    async.inject = async.reduce;
    async.foldl = async.reduce;
    async.reduceRight = function(arr, memo, iterator, callback) {
      var reversed = _map(arr, function(x) {
        return x;
      }).reverse();
      async.reduce(reversed, memo, iterator, callback);
    };
    async.foldr = async.reduceRight;
    var _filter = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(v) {
          if (v) {
            results.push(x);
          }
          callback();
        });
      }, function(err) {
        callback(_map(results.sort(function(a, b) {
          return a.index - b.index;
        }), function(x) {
          return x.value;
        }));
      });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    async.select = async.filter;
    async.selectSeries = async.filterSeries;
    var _reject = function(eachfn, arr, iterator, callback) {
      var results = [];
      arr = _map(arr, function(x, i) {
        return {index: i,value: x};
      });
      eachfn(arr, function(x, callback) {
        iterator(x.value, function(v) {
          if (!v) {
            results.push(x);
          }
          callback();
        });
      }, function(err) {
        callback(_map(results.sort(function(a, b) {
          return a.index - b.index;
        }), function(x) {
          return x.value;
        }));
      });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);
    var _detect = function(eachfn, arr, iterator, main_callback) {
      eachfn(arr, function(x, callback) {
        iterator(x, function(result) {
          if (result) {
            main_callback(x);
            main_callback = function() {
            };
          } 
          else {
            callback();
          }
        });
      }, function(err) {
        main_callback();
      });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);
    async.some = function(arr, iterator, main_callback) {
      async.forEach(arr, function(x, callback) {
        iterator(x, function(v) {
          if (v) {
            main_callback(true);
            main_callback = function() {
            };
          }
          callback();
        });
      }, function(err) {
        main_callback(false);
      });
    };
    async.any = async.some;
    async.every = function(arr, iterator, main_callback) {
      async.forEach(arr, function(x, callback) {
        iterator(x, function(v) {
          if (!v) {
            main_callback(false);
            main_callback = function() {
            };
          }
          callback();
        });
      }, function(err) {
        main_callback(true);
      });
    };
    async.all = async.every;
    async.sortBy = function(arr, iterator, callback) {
      async.map(arr, function(x, callback) {
        iterator(x, function(err, criteria) {
          if (err) {
            callback(err);
          } 
          else {
            callback(null, {value: x,criteria: criteria});
          }
        });
      }, function(err, results) {
        if (err) {
          return callback(err);
        } 
        else {
          var fn = function(left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
          };
          callback(null, _map(results.sort(fn), function(x) {
            return x.value;
          }));
        }
      });
    };
    async.auto = function(tasks, callback) {
      callback = callback || function() {
      };
      var keys = _keys(tasks);
      if (!keys.length) {
        return callback(null);
      }
      var results = {};
      var listeners = [];
      var addListener = function(fn) {
        listeners.unshift(fn);
      };
      var removeListener = function(fn) {
        for (var i = 0; i < listeners.length; i += 1) {
          if (listeners[i] === fn) {
            listeners.splice(i, 1);
            return;
          }
        }
      };
      var taskComplete = function() {
        _forEach(listeners.slice(0), function(fn) {
          fn();
        });
      };
      addListener(function() {
        if (_keys(results).length === keys.length) {
          callback(null, results);
          callback = function() {
          };
        }
      });
      _forEach(keys, function(k) {
        var task = (tasks[k] instanceof Function) ? [tasks[k]] : tasks[k];
        var taskCallback = function(err) {
          if (err) {
            callback(err);
            callback = function() {
            };
          } 
          else {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            async.nextTick(taskComplete);
          }
        };
        var requires = task.slice(0, Math.abs(task.length - 1)) || [];
        var ready = function() {
          return _reduce(requires, function(a, x) {
            return (a && results.hasOwnProperty(x));
          }, true) && !results.hasOwnProperty(k);
        };
        if (ready()) {
          task[task.length - 1](taskCallback, results);
        } 
        else {
          var listener = function() {
            if (ready()) {
              removeListener(listener);
              task[task.length - 1](taskCallback, results);
            }
          };
          addListener(listener);
        }
      });
    };
    async.waterfall = function(tasks, callback) {
      callback = callback || function() {
      };
      if (!tasks.length) {
        return callback();
      }
      var wrapIterator = function(iterator) {
        return function(err) {
          if (err) {
            callback.apply(null, arguments);
            callback = function() {
            };
          } 
          else {
            var args = Array.prototype.slice.call(arguments, 1);
            var next = iterator.next();
            if (next) {
              args.push(wrapIterator(next));
            } 
            else {
              args.push(callback);
            }
            async.nextTick(function() {
              iterator.apply(null, args);
            });
          }
        };
      };
      wrapIterator(async.iterator(tasks))();
    };
    var _parallel = function(eachfn, tasks, callback) {
      callback = callback || function() {
      };
      if (tasks.constructor === Array) {
        eachfn.map(tasks, function(fn, callback) {
          if (fn) {
            fn(function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              callback.call(null, err, args);
            });
          }
        }, callback);
      } 
      else {
        var results = {};
        eachfn.forEach(_keys(tasks), function(k, callback) {
          tasks[k](function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            callback(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
    };
    async.parallel = function(tasks, callback) {
      _parallel({map: async.map,forEach: async.forEach}, tasks, callback);
    };
    async.parallelLimit = function(tasks, limit, callback) {
      _parallel({map: _mapLimit(limit),forEach: _forEachLimit(limit)}, tasks, callback);
    };
    async.series = function(tasks, callback) {
      callback = callback || function() {
      };
      if (tasks.constructor === Array) {
        async.mapSeries(tasks, function(fn, callback) {
          if (fn) {
            fn(function(err) {
              var args = Array.prototype.slice.call(arguments, 1);
              if (args.length <= 1) {
                args = args[0];
              }
              callback.call(null, err, args);
            });
          }
        }, callback);
      } 
      else {
        var results = {};
        async.forEachSeries(_keys(tasks), function(k, callback) {
          tasks[k](function(err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
              args = args[0];
            }
            results[k] = args;
            callback(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
    };
    async.iterator = function(tasks) {
      var makeCallback = function(index) {
        var fn = function() {
          if (tasks.length) {
            tasks[index].apply(null, arguments);
          }
          return fn.next();
        };
        fn.next = function() {
          return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
        };
        return fn;
      };
      return makeCallback(0);
    };
    async.apply = function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
      };
    };
    var _concat = function(eachfn, arr, fn, callback) {
      var r = [];
      eachfn(arr, function(x, cb) {
        fn(x, function(err, y) {
          r = r.concat(y || []);
          cb(err);
        });
      }, function(err) {
        callback(err, r);
      });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);
    async.whilst = function(test, iterator, callback) {
      if (test()) {
        var sync = true;
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          if (sync) {
            async.nextTick(function() {
              async.whilst(test, iterator, callback);
            });
          } 
          else {
            async.whilst(test, iterator, callback);
          }
        });
        sync = false;
      } 
      else {
        callback();
      }
    };
    async.doWhilst = function(iterator, test, callback) {
      var sync = true;
      iterator(function(err) {
        if (err) {
          return callback(err);
        }
        if (test()) {
          if (sync) {
            async.nextTick(function() {
              async.doWhilst(iterator, test, callback);
            });
          } 
          else {
            async.doWhilst(iterator, test, callback);
          }
        } 
        else {
          callback();
        }
      });
      sync = false;
    };
    async.until = function(test, iterator, callback) {
      if (!test()) {
        var sync = true;
        iterator(function(err) {
          if (err) {
            return callback(err);
          }
          if (sync) {
            async.nextTick(function() {
              async.until(test, iterator, callback);
            });
          } 
          else {
            async.until(test, iterator, callback);
          }
        });
        sync = false;
      } 
      else {
        callback();
      }
    };
    async.doUntil = function(iterator, test, callback) {
      var sync = true;
      iterator(function(err) {
        if (err) {
          return callback(err);
        }
        if (!test()) {
          if (sync) {
            async.nextTick(function() {
              async.doUntil(iterator, test, callback);
            });
          } 
          else {
            async.doUntil(iterator, test, callback);
          }
        } 
        else {
          callback();
        }
      });
      sync = false;
    };
    async.queue = function(worker, concurrency) {
      function _insert(q, data, pos, callback) {
        if (data.constructor !== Array) {
          data = [data];
        }
        _forEach(data, function(task) {
          var item = {data: task,callback: typeof callback === 'function' ? callback : null};
          if (pos) {
            q.tasks.unshift(item);
          } else {
            q.tasks.push(item);
          }
          if (q.saturated && q.tasks.length === concurrency) {
            q.saturated();
          }
          async.nextTick(q.process);
        });
      }
      var workers = 0;
      var q = {tasks: [],concurrency: concurrency,saturated: null,empty: null,drain: null,push: function(data, callback) {
        _insert(q, data, false, callback);
      },unshift: function(data, callback) {
        _insert(q, data, true, callback);
      },process: function() {
        if (workers < q.concurrency && q.tasks.length) {
          var task = q.tasks.shift();
          if (q.empty && q.tasks.length === 0) {
            q.empty();
          }
          workers += 1;
          var sync = true;
          var next = function() {
            workers -= 1;
            if (task.callback) {
              task.callback.apply(task, arguments);
            }
            if (q.drain && q.tasks.length + workers === 0) {
              q.drain();
            }
            q.process();
          };
          var cb = only_once(function() {
            var cbArgs = arguments;
            if (sync) {
              async.nextTick(function() {
                next.apply(null, cbArgs);
              });
            } else {
              next.apply(null, arguments);
            }
          });
          worker(task.data, cb);
          sync = false;
        }
      },length: function() {
        return q.tasks.length;
      },running: function() {
        return workers;
      }};
      return q;
    };
    async.cargo = function(worker, payload) {
      var working = false, tasks = [];
      var cargo = {tasks: tasks,payload: payload,saturated: null,empty: null,drain: null,push: function(data, callback) {
        if (data.constructor !== Array) {
          data = [data];
        }
        _forEach(data, function(task) {
          tasks.push({data: task,callback: typeof callback === 'function' ? callback : null});
          if (cargo.saturated && tasks.length === payload) {
            cargo.saturated();
          }
        });
        async.nextTick(cargo.process);
      },process: function process() {
        if (working)
          return;
        if (tasks.length === 0) {
          if (cargo.drain)
            cargo.drain();
          return;
        }
        var ts = typeof payload === 'number' ? tasks.splice(0, payload) : tasks.splice(0);
        var ds = _map(ts, function(task) {
          return task.data;
        });
        if (cargo.empty)
          cargo.empty();
        working = true;
        worker(ds, function() {
          working = false;
          var args = arguments;
          _forEach(ts, function(data) {
            if (data.callback) {
              data.callback.apply(null, args);
            }
          });
          process();
        });
      },length: function() {
        return tasks.length;
      },running: function() {
        return working;
      }};
      return cargo;
    };
    var _console_fn = function(name) {
      return function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args.concat([function(err) {
          var args = Array.prototype.slice.call(arguments, 1);
          if (typeof console !== 'undefined') {
            if (err) {
              if (console.error) {
                console.error(err);
              }
            } 
            else if (console[name]) {
              _forEach(args, function(x) {
                console[name](x);
              });
            }
          }
        }]));
      };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    async.memoize = function(fn, hasher) {
      var memo = {};
      var queues = {};
      hasher = hasher || function(x) {
        return x;
      };
      var memoized = function() {
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();
        var key = hasher.apply(null, args);
        if (key in memo) {
          callback.apply(null, memo[key]);
        } 
        else if (key in queues) {
          queues[key].push(callback);
        } 
        else {
          queues[key] = [callback];
          fn.apply(null, args.concat([function() {
            memo[key] = arguments;
            var q = queues[key];
            delete queues[key];
            for (var i = 0, l = q.length; i < l; i++) {
              q[i].apply(null, arguments);
            }
          }]));
        }
      };
      memoized.memo = memo;
      memoized.unmemoized = fn;
      return memoized;
    };
    async.unmemoize = function(fn) {
      return function() {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };
    async.times = function(count, iterator, callback) {
      var counter = [];
      for (var i = 0; i < count; i++) {
        counter.push(i);
      }
      return async.map(counter, iterator, callback);
    };
    async.timesSeries = function(count, iterator, callback) {
      var counter = [];
      for (var i = 0; i < count; i++) {
        counter.push(i);
      }
      return async.mapSeries(counter, iterator, callback);
    };
    async.compose = function() {
      var fns = Array.prototype.reverse.call(arguments);
      return function() {
        var that = this;
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();
        async.reduce(fns, args, function(newargs, fn, cb) {
          fn.apply(that, newargs.concat([function() {
            var err = arguments[0];
            var nextargs = Array.prototype.slice.call(arguments, 1);
            cb(err, nextargs);
          }]))
        }, function(err, results) {
          callback.apply(that, [err].concat(results));
        });
      };
    };
    if (typeof define !== 'undefined' && define.amd) {
      define([], function() {
        return async;
      });
    } 
    else if (typeof module !== 'undefined' && module.exports) {
      module.exports = async;
    } 
    else {
      root.async = async;
    }
  }());
  ;
  (function(window, undefined) {
    var freeExports = typeof exports == 'object' && exports;
    var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal) {
      window = freeGlobal;
    }
    var arrayRef = [], objectRef = {};
    var idCounter = 0;
    var indicatorObject = objectRef;
    var oldDash = window._;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reFlags = /\w*$/;
    var reNative = RegExp('^' + 
      (objectRef.valueOf + '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$');
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reInterpolate = /<%=([\s\S]+?)%>/g;
    var reNoMatch = /($^)/;
    var reUnescapedHtml = /[&<>"']/g;
    var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
    var templateCounter = 0;
    var ceil = Math.ceil, concat = arrayRef.concat, floor = Math.floor, hasOwnProperty = objectRef.hasOwnProperty, push = arrayRef.push, toString = objectRef.toString;
    var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind, nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray, nativeIsFinite = window.isFinite, nativeIsNaN = window.isNaN, nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys, nativeMax = Math.max, nativeMin = Math.min, nativeRandom = Math.random;
    var argsClass = '[object Arguments]', arrayClass = '[object Array]', boolClass = '[object Boolean]', dateClass = '[object Date]', funcClass = '[object Function]', numberClass = '[object Number]', objectClass = '[object Object]', regexpClass = '[object RegExp]', stringClass = '[object String]';
    var isIeOpera = !!window.attachEvent, isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);
    var isBindFast = nativeBind && !isV8;
    var hasObjectSpliceBug = (hasObjectSpliceBug = {'0': 1,'length': 1}, arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0]);
    var argsAreObjects = arguments.constructor == Object;
    var objectTypes = {'boolean': false,'function': true,'object': true,'number': false,'string': false,'undefined': false};
    var stringEscapes = {'\\': '\\',"'": "'",'\n': 'n','\r': 'r','\t': 't','\u2028': 'u2028','\u2029': 'u2029'};
    function lodash(value) {
      if (value && typeof value == 'object' && value.__wrapped__) {
        return value;
      }
      if (!(this instanceof lodash)) {
        return new lodash(value);
      }
      this.__wrapped__ = value;
    }
    lodash.templateSettings = {'escape': /<%-([\s\S]+?)%>/g,'evaluate': /<%([\s\S]+?)%>/g,'interpolate': reInterpolate,'variable': ''};
    function charAtCallback(value) {
      return value.charCodeAt(0);
    }
    function compareAscending(a, b) {
      var ai = a.index, bi = b.index;
      a = a.criteria;
      b = b.criteria;
      if (a !== b) {
        if (a > b || typeof a == 'undefined') {
          return 1;
        }
        if (a < b || typeof b == 'undefined') {
          return -1;
        }
      }
      return ai < bi ? -1 : 1;
    }
    function createBound(func, thisArg, partialArgs, rightIndicator) {
      var isFunc = isFunction(func), isPartial = !partialArgs, key = thisArg;
      if (isPartial) {
        partialArgs = thisArg;
      }
      if (!isFunc) {
        thisArg = func;
      }
      function bound() {
        var args = arguments, thisBinding = isPartial ? this : thisArg;
        if (!isFunc) {
          func = thisArg[key];
        }
        if (partialArgs.length) {
          args = args.length ? (args = slice(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs;
        }
        if (this instanceof bound) {
          noop.prototype = func.prototype;
          thisBinding = new noop;
          noop.prototype = null;
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      return bound;
    }
    function createCallback(func, thisArg, argCount) {
      if (func == null) {
        return identity;
      }
      var type = typeof func;
      if (type != 'function') {
        if (type != 'object') {
          return function(object) {
            return object[func];
          };
        }
        var props = keys(func);
        return function(object) {
          var length = props.length, result = false;
          while (length--) {
            if (!(result = object[props[length]] === func[props[length]])) {
              break;
            }
          }
          return result;
        };
      }
      if (typeof thisArg != 'undefined') {
        if (argCount === 1) {
          return function(value) {
            return func.call(thisArg, value);
          };
        }
        if (argCount === 2) {
          return function(a, b) {
            return func.call(thisArg, a, b);
          };
        }
        if (argCount === 4) {
          return function(accumulator, value, index, object) {
            return func.call(thisArg, accumulator, value, index, object);
          };
        }
        return function(value, index, object) {
          return func.call(thisArg, value, index, object);
        };
      }
      return func;
    }
    var each = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable)
        return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg);
      var length = iterable.length;
      index = -1;
      if (typeof length == 'number') {
        while (++index < length) {
          if (callback(iterable[index], index, collection) === indicatorObject)
            return result
        }
      } 
      else {
        for (index in iterable) {
          if (hasOwnProperty.call(iterable, index)) {
            if (callback(iterable[index], index, collection) === indicatorObject)
              return result;
          }
        }
      }
    };
    function escapeStringChar(match) {
      return '\\' + stringEscapes[match];
    }
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }
    function isNode(value) {
      return typeof value.toString != 'function' && typeof (value + '') == 'string';
    }
    function noop() {
    }
    function slice(array, start, end) {
      start || (start = 0);
      if (typeof end == 'undefined') {
        end = array ? array.length : 0;
      }
      var index = -1, length = end - start || 0, result = Array(length < 0 ? 0 : length);
      while (++index < length) {
        result[index] = array[start + index];
      }
      return result;
    }
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }
    function isArguments(value) {
      return toString.call(value) == argsClass;
    }
    if (!isArguments(arguments)) {
      isArguments = function(value) {
        return value ? hasOwnProperty.call(value, 'callee') : false;
      };
    }
    var forIn = function(collection, callback) {
      var index, iterable = collection, result = iterable;
      if (!iterable)
        return result;
      if (!objectTypes[typeof iterable])
        return result;
      callback || (callback = identity);
      for (index in iterable) {
        if (callback(iterable[index], index, collection) === indicatorObject)
          return result;
      }
      return result
    };
    var forOwn = function(collection, callback) {
      var index, iterable = collection, result = iterable;
      if (!iterable)
        return result;
      if (!objectTypes[typeof iterable])
        return result;
      callback || (callback = identity);
      for (index in iterable) {
        if (hasOwnProperty.call(iterable, index)) {
          if (callback(iterable[index], index, collection) === indicatorObject)
            return result;
        }
      }
      return result
    };
    var isArray = nativeIsArray || function(value) {
      return (argsAreObjects && value instanceof Array) || toString.call(value) == arrayClass;
    };
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      return nativeKeys(object);
    };
    function shimIsPlainObject(value) {
      var result = false;
      if (!(value && typeof value == 'object') || isArguments(value)) {
        return result;
      }
      var ctor = value.constructor;
      if ((!isFunction(ctor)) || ctor instanceof ctor) {
        forIn(value, function(value, key) {
          result = key;
        });
        return result === false || hasOwnProperty.call(value, result);
      }
      return result;
    }
    function shimKeys(object) {
      var result = [];
      forOwn(object, function(value, key) {
        result.push(key);
      });
      return result;
    }
    var htmlEscapes = {'&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&#39;'};
    var htmlUnescapes = invert(htmlEscapes);
    function assign(object) {
      if (!object) {
        return object;
      }
      for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
        var iterable = arguments[argsIndex];
        if (iterable) {
          for (var key in iterable) {
            object[key] = iterable[key];
          }
        }
      }
      return object;
    }
    function clone(value) {
      return isObject(value) ? (isArray(value) ? slice(value) : assign({}, value)) : value
    }
    function defaults(object) {
      if (!object) {
        return object;
      }
      for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
        var iterable = arguments[argsIndex];
        if (iterable) {
          for (var key in iterable) {
            if (object[key] == null) {
              object[key] = iterable[key];
            }
          }
        }
      }
      return object;
    }
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }
    function has(object, property) {
      return object ? hasOwnProperty.call(object, property) : false;
    }
    function invert(object) {
      var index = -1, props = keys(object), length = props.length, result = {};
      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }
    function isBoolean(value) {
      return value === true || value === false || toString.call(value) == boolClass;
    }
    function isDate(value) {
      return value instanceof Date || toString.call(value) == dateClass;
    }
    function isElement(value) {
      return value ? value.nodeType === 1 : false;
    }
    function isEmpty(value) {
      if (!value) {
        return true;
      }
      if (isArray(value) || isString(value)) {
        return !value.length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    function isEqual(a, b, stackA, stackB) {
      if (a === b) {
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a, otherType = typeof b;
      if (a === a && (!a || (type != 'function' && type != 'object')) && (!b || (otherType != 'function' && otherType != 'object'))) {
        return false;
      }
      if (a == null || b == null) {
        return a === b;
      }
      var className = toString.call(a), otherClass = toString.call(b);
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          return +a == +b;
        case numberClass:
          return a != +a ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
        case regexpClass:
        case stringClass:
          return a == b + '';
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        if (a.__wrapped__ || b.__wrapped__) {
          return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, stackA, stackB);
        }
        if (className != objectClass) {
          return false;
        }
        var ctorA = a.constructor, ctorB = b.constructor;
        if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB)) {
          return false;
        }
      }
      stackA || (stackA = []);
      stackB || (stackB = []);
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var result = true, size = 0;
      stackA.push(a);
      stackB.push(b);
      if (isArr) {
        size = b.length;
        result = size == a.length;
        if (result) {
          while (size--) {
            if (!(result = isEqual(a[size], b[size], stackA, stackB))) {
              break;
            }
          }
        }
        return result;
      }
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          size++;
          return !(result = hasOwnProperty.call(a, key) && isEqual(a[key], value, stackA, stackB)) && indicatorObject;
        }
      });
      if (result) {
        forIn(a, function(value, key, a) {
          if (hasOwnProperty.call(a, key)) {
            return !(result = --size > -1) && indicatorObject;
          }
        });
      }
      return result;
    }
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }
    function isFunction(value) {
      return typeof value == 'function';
    }
    if (isFunction(/x/)) {
      isFunction = function(value) {
        return value instanceof Function || toString.call(value) == funcClass;
      };
    }
    function isObject(value) {
      return value ? objectTypes[typeof value] : false;
    }
    function isNaN(value) {
      return isNumber(value) && value != +value
    }
    function isNull(value) {
      return value === null;
    }
    function isNumber(value) {
      return typeof value == 'number' || toString.call(value) == numberClass;
    }
    function isRegExp(value) {
      return value instanceof RegExp || toString.call(value) == regexpClass;
    }
    function isString(value) {
      return typeof value == 'string' || toString.call(value) == stringClass;
    }
    function isUndefined(value) {
      return typeof value == 'undefined';
    }
    function omit(object) {
      var props = concat.apply(arrayRef, arguments), result = {};
      forIn(object, function(value, key) {
        if (indexOf(props, key, 1) < 0) {
          result[key] = value;
        }
      });
      return result;
    }
    function pairs(object) {
      var index = -1, props = keys(object), length = props.length, result = Array(length);
      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }
    function pick(object) {
      var index = 0, props = concat.apply(arrayRef, arguments), length = props.length, result = {};
      while (++index < length) {
        var prop = props[index];
        if (prop in object) {
          result[prop] = object[prop];
        }
      }
      return result;
    }
    function values(object) {
      var index = -1, props = keys(object), length = props.length, result = Array(length);
      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }
    function contains(collection, target) {
      var length = collection ? collection.length : 0, result = false;
      if (typeof length == 'number') {
        result = indexOf(collection, target) > -1;
      } else {
        each(collection, function(value) {
          return (result = value === target) && indicatorObject;
        });
      }
      return result;
    }
    function countBy(collection, callback, thisArg) {
      var result = {};
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
      });
      return result;
    }
    function every(collection, callback, thisArg) {
      var result = true;
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          return !(result = !!callback(value, index, collection)) && indicatorObject;
        });
      }
      return result;
    }
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }
    function find(collection, callback, thisArg) {
      var result;
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return indicatorObject;
        }
      });
      return result;
    }
    function findWhere(object, properties) {
      return where(object, properties, true);
    }
    function forEach(collection, callback, thisArg) {
      if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          if (callback(collection[index], index, collection) === indicatorObject) {
            break;
          }
        }
      } else {
        each(collection, callback, thisArg);
      }
      ;
    }
    function groupBy(collection, callback, thisArg) {
      var result = {};
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
      });
      return result;
    }
    function invoke(collection, methodName) {
      var args = slice(arguments, 2), index = -1, isFunc = typeof methodName == 'function', length = collection ? collection.length : 0, result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }
    function map(collection, callback, thisArg) {
      var index = -1, length = collection ? collection.length : 0, result = Array(typeof length == 'number' ? length : 0);
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        each(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }
    function max(collection, callback, thisArg) {
      var computed = -Infinity, result = computed;
      if (!callback && isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = createCallback(callback, thisArg);
        each(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    function min(collection, callback, thisArg) {
      var computed = Infinity, result = computed;
      if (!callback && isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = createCallback(callback, thisArg);
        each(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    var pluck = map;
    function reduce(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = createCallback(callback, thisArg, 4);
      if (isArray(collection)) {
        var index = -1, length = collection.length;
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        each(collection, function(value, index, collection) {
          accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
        });
      }
      return accumulator;
    }
    function reduceRight(collection, callback, accumulator, thisArg) {
      var iterable = collection, length = collection ? collection.length : 0, noaccum = arguments.length < 3;
      if (typeof length != 'number') {
        var props = keys(collection);
        length = props.length;
      }
      callback = createCallback(callback, thisArg, 4);
      forEach(collection, function(value, index, collection) {
        index = props ? props[--length] : --length;
        accumulator = noaccum ? (noaccum = false, iterable[index]) : callback(accumulator, iterable[index], index, collection);
      });
      return accumulator;
    }
    function reject(collection, callback, thisArg) {
      callback = createCallback(callback, thisArg);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }
    function shuffle(collection) {
      var index = -1, length = collection ? collection.length : 0, result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        var rand = floor(nativeRandom() * (++index + 1));
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }
    function some(collection, callback, thisArg) {
      var result;
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1, length = collection.length;
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          return (result = callback(value, index, collection)) && indicatorObject;
        });
      }
      return !!result;
    }
    function sortBy(collection, callback, thisArg) {
      var index = -1, length = collection ? collection.length : 0, result = Array(typeof length == 'number' ? length : 0);
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        result[++index] = {'criteria': callback(value, key, collection),'index': index,'value': value};
      });
      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        result[length] = result[length].value;
      }
      return result;
    }
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return slice(collection);
      }
      return values(collection);
    }
    function where(collection, properties, first) {
      return (first && isEmpty(properties)) ? null : (first ? find : filter)(collection, properties);
    }
    function compact(array) {
      var index = -1, length = array ? array.length : 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }
    function difference(array) {
      var index = -1, length = array.length, flattened = concat.apply(arrayRef, arguments), result = [];
      while (++index < length) {
        var value = array[index]
        if (indexOf(flattened, value, length) < 0) {
          result.push(value);
        }
      }
      return result
    }
    function first(array, callback, thisArg) {
      if (array) {
        var n = 0, length = array.length;
        if (typeof callback != 'number' && callback != null) {
          var index = -1;
          callback = createCallback(callback, thisArg);
          while (++index < length && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = callback;
          if (n == null || thisArg) {
            return array[0];
          }
        }
        return slice(array, 0, nativeMin(nativeMax(0, n), length));
      }
    }
    function flatten(array, shallow) {
      var index = -1, length = array ? array.length : 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (isArray(value)) {
          push.apply(result, shallow ? value : flatten(value));
        } else {
          result.push(value);
        }
      }
      return result;
    }
    function indexOf(array, value, fromIndex) {
      var index = -1, length = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
      } else if (fromIndex) {
        index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function initial(array, callback, thisArg) {
      if (!array) {
        return [];
      }
      var n = 0, length = array.length;
      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = createCallback(callback, thisArg);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }
    function intersection(array) {
      var args = arguments, argsLength = args.length, index = -1, length = array ? array.length : 0, result = [];
      outer: while (++index < length) {
        var value = array[index];
        if (indexOf(result, value) < 0) {
          var argsIndex = argsLength;
          while (--argsIndex) {
            if (indexOf(args[argsIndex], value) < 0) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      return result;
    }
    function last(array, callback, thisArg) {
      if (array) {
        var n = 0, length = array.length;
        if (typeof callback != 'number' && callback != null) {
          var index = length;
          callback = createCallback(callback, thisArg);
          while (index-- && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = callback;
          if (n == null || thisArg) {
            return array[length - 1];
          }
        }
        return slice(array, nativeMax(0, length - n));
      }
    }
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function object(keys, values) {
      var index = -1, length = keys ? keys.length : 0, result = {};
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else {
          result[key[0]] = key[1];
        }
      }
      return result;
    }
    function range(start, end, step) {
      start = +start || 0;
      step = +step || 1;
      if (end == null) {
        end = start;
        start = 0;
      }
      var index = -1, length = nativeMax(0, ceil((end - start) / step)), result = Array(length);
      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0, index = -1, length = array ? array.length : 0;
        callback = createCallback(callback, thisArg);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0, high = array ? array.length : low;
      callback = callback ? createCallback(callback, thisArg, 1) : identity;
      value = callback(value);
      while (low < high) {
        var mid = (low + high) >>> 1;
        callback(array[mid]) < value ? low = mid + 1 : high = mid;
      }
      return low;
    }
    function union() {
      return uniq(concat.apply(arrayRef, arguments));
    }
    function uniq(array, isSorted, callback, thisArg) {
      var index = -1, length = array ? array.length : 0, result = [], seen = result;
      if (typeof isSorted == 'function') {
        thisArg = callback;
        callback = isSorted;
        isSorted = false;
      }
      if (callback) {
        seen = [];
        callback = createCallback(callback, thisArg);
      }
      while (++index < length) {
        var value = array[index], computed = callback ? callback(value, index, array) : value;
        if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
          if (callback) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }
    function without(array) {
      var index = -1, length = array.length, result = [];
      while (++index < length) {
        var value = array[index]
        if (indexOf(arguments, value, 1) < 0) {
          result.push(value);
        }
      }
      return result
    }
    function zip(array) {
      var index = -1, length = array ? max(pluck(arguments, 'length')) : 0, result = Array(length);
      while (++index < length) {
        result[index] = pluck(arguments, index);
      }
      return result;
    }
    function after(n, func) {
      if (n < 1) {
        return func();
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }
    function bind(func, thisArg) {
      return isBindFast || (nativeBind && arguments.length > 2) ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, slice(arguments, 2));
    }
    function bindAll(object) {
      var funcs = concat.apply(arrayRef, arguments), index = funcs.length > 1 ? 0 : (funcs = functions(object), -1), length = funcs.length;
      while (++index < length) {
        var key = funcs[index];
        object[key] = bind(object[key], object);
      }
      return object;
    }
    function compose() {
      var funcs = arguments;
      return function() {
        var args = arguments, length = funcs.length;
        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }
    function debounce(func, wait, immediate) {
      var args, result, thisArg, timeoutId;
      function delayed() {
        timeoutId = null;
        if (!immediate) {
          result = func.apply(thisArg, args);
        }
      }
      return function() {
        var isImmediate = immediate && !timeoutId;
        args = arguments;
        thisArg = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(delayed, wait);
        if (isImmediate) {
          result = func.apply(thisArg, args);
        }
        return result;
      };
    }
    function delay(func, wait) {
      var args = slice(arguments, 2);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, wait);
    }
    function defer(func) {
      var args = slice(arguments, 1);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, 1);
    }
    if (isV8 && freeModule && typeof setImmediate == 'function') {
      defer = bind(setImmediate, window);
    }
    function memoize(func, resolver) {
      var cache = {};
      return function() {
        var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + '';
        return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments));
      };
    }
    function once(func) {
      var ran, result;
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);
        func = null;
        return result;
      };
    }
    function partial(func) {
      return createBound(func, slice(arguments, 1));
    }
    function throttle(func, wait) {
      var args, result, thisArg, timeoutId, lastCalled = 0;
      function trailingCall() {
        lastCalled = new Date;
        timeoutId = null;
        result = func.apply(thisArg, args);
      }
      return function() {
        var now = new Date, remaining = wait - (now - lastCalled);
        args = arguments;
        thisArg = this;
        if (remaining <= 0) {
          clearTimeout(timeoutId);
          timeoutId = null;
          lastCalled = now;
          result = func.apply(thisArg, args);
        } 
        else if (!timeoutId) {
          timeoutId = setTimeout(trailingCall, remaining);
        }
        return result;
      };
    }
    function wrap(value, wrapper) {
      return function() {
        var args = [value];
        push.apply(args, arguments);
        return wrapper.apply(this, args);
      };
    }
    function escape(string) {
      return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
    }
    function identity(value) {
      return value;
    }
    function mixin(object) {
      forEach(functions(object), function(methodName) {
        var func = lodash[methodName] = object[methodName];
        lodash.prototype[methodName] = function() {
          var args = [this.__wrapped__];
          push.apply(args, arguments);
          var result = func.apply(lodash, args);
          if (this.__chain__) {
            result = new lodash(result);
            result.__chain__ = true;
          }
          return result;
        };
      });
    }
    function noConflict() {
      window._ = oldDash;
      return this;
    }
    function random(min, max) {
      if (min == null && max == null) {
        max = 1;
      }
      min = +min || 0;
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + floor(nativeRandom() * ((+max || 0) - min + 1));
    }
    function result(object, property) {
      var value = object ? object[property] : null;
      return isFunction(value) ? object[property]() : value;
    }
    function template(text, data, options) {
      text || (text = '');
      options = defaults({}, options, lodash.templateSettings);
      var index = 0, source = "__p += '", variable = options.variable;
      var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + 
        (options.interpolate || reNoMatch).source + '|' + 
        (options.evaluate || reNoMatch).source + '|$', 'g');
      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, evaluateValue, offset) {
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
        if (escapeValue) {
          source += "' +\n_.escape(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;
        return match;
      });
      source += "';\n";
      if (!variable) {
        variable = 'obj';
        source = 'with (' + variable + ' || {}) {\n' + source + '\n}\n';
      }
      source = 'function(' + variable + ') {\n' + "var __t, __p = '', __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + 
        source + 'return __p\n}';
      try {
        var result = Function('_', 'return ' + source)(lodash);
      } catch (e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      result.source = source;
      return result;
    }
    function times(n, callback, thisArg) {
      n = +n || 0;
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = callback.call(thisArg, index);
      }
      return result;
    }
    function unescape(string) {
      return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
    }
    function uniqueId(prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    }
    function chain(value) {
      value = new lodash(value);
      value.__chain__ = true;
      return value;
    }
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }
    function wrapperChain() {
      this.__chain__ = true;
      return this;
    }
    function wrapperToString() {
      return this.__wrapped__ + '';
    }
    function wrapperValueOf() {
      return this.__wrapped__;
    }
    lodash.after = after;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.countBy = countBy;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.min = min;
    lodash.object = object;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.range = range;
    lodash.reject = reject;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.zip = zip;
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    lodash.clone = clone;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.findWhere = findWhere;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;
    lodash.first = first;
    lodash.last = last;
    lodash.take = first;
    lodash.head = first;
    lodash.chain = chain;
    lodash.VERSION = '1.0.1';
    mixin(lodash);
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.value = wrapperValueOf;
    each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__;
        func.apply(value, arguments);
        if (hasObjectSpliceBug && value.length === 0) {
          delete value[0];
        }
        return this;
      };
    });
    each(['concat', 'join', 'slice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__, result = func.apply(value, arguments);
        if (this.__chain__) {
          result = new lodash(result);
          result.__chain__ = true;
        }
        return result;
      };
    });
    if (freeExports) {
      if (freeModule) {
        (freeModule.exports = lodash)._ = lodash;
      } 
      else {
        freeExports._ = lodash;
      }
    } 
    else {
      window._ = lodash;
    }
  }(this));
  (function() {
    var root = this;
    var previousBackbone = root.Backbone;
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;
    var Backbone;
    if (typeof exports !== 'undefined') {
      Backbone = exports;
    } else {
      Backbone = root.Backbone = {};
    }
    Backbone.VERSION = '1.0.0';
    var _ = root._;
    if (!_ && (typeof require !== 'undefined'))
      _ = require('underscore');
    Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;
    Backbone.noConflict = function() {
      root.Backbone = previousBackbone;
      return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var Events = Backbone.Events = {on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback)
        return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback,context: context,ctx: context || this});
      return this;
    },once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback)
        return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context]))
        return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) || (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length)
            delete this._events[name];
        }
      }
      return this;
    },trigger: function(name) {
      if (!this._events)
        return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args))
        return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events)
        triggerEvents(events, args);
      if (allEvents)
        triggerEvents(allEvents, arguments);
      return this;
    },stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners)
        return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object')
        callback = this;
      if (obj)
        (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener)
          delete this._listeners[id];
      }
      return this;
    }};
    var eventSplitter = /\s+/;
    var eventsApi = function(obj, action, name, rest) {
      if (!name)
        return true;
      if (typeof name === 'object') {
        for (var key in name) {
          obj[action].apply(obj, [key, name[key]].concat(rest));
        }
        return false;
      }
      if (eventSplitter.test(name)) {
        var names = name.split(eventSplitter);
        for (var i = 0, l = names.length; i < l; i++) {
          obj[action].apply(obj, [names[i]].concat(rest));
        }
        return false;
      }
      return true;
    };
    var triggerEvents = function(events, args) {
      var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
      switch (args.length) {
        case 0:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
          return;
        case 1:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1);
          return;
        case 2:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
          return;
        case 3:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
          return;
        default:
          while (++i < l)
            (ev = events[i]).callback.apply(ev.ctx, args);
      }
    };
    var listenMethods = {listenTo: 'on',listenToOnce: 'once'};
    _.each(listenMethods, function(implementation, method) {
      Events[method] = function(obj, name, callback) {
        var listeners = this._listeners || (this._listeners = {});
        var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
        listeners[id] = obj;
        if (typeof name === 'object')
          callback = this;
        obj[implementation](name, callback, this);
        return this;
      };
    });
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
      var defaults;
      var attrs = attributes || {};
      options || (options = {});
      this.cid = _.uniqueId('c');
      this.attributes = {};
      _.extend(this, _.pick(options, modelOptions));
      if (options.parse)
        attrs = this.parse(attrs, options) || {};
      if (defaults = _.result(this, 'defaults')) {
        attrs = _.defaults({}, attrs, defaults);
      }
      this.set(attrs, options);
      this.changed = {};
      this.initialize.apply(this, arguments);
    };
    var modelOptions = ['url', 'urlRoot', 'collection'];
    _.extend(Model.prototype, Events, {changed: null,validationError: null,idAttribute: 'id',initialize: function() {
    },toJSON: function(options) {
      return _.clone(this.attributes);
    },sync: function() {
      return Backbone.sync.apply(this, arguments);
    },get: function(attr) {
      return this.attributes[attr];
    },escape: function(attr) {
      return _.escape(this.get(attr));
    },has: function(attr) {
      return this.get(attr) != null;
    },set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null)
        return this;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }
      options || (options = {});
      if (!this._validate(attrs, options))
        return false;
      unset = options.unset;
      silent = options.silent;
      changes = [];
      changing = this._changing;
      this._changing = true;
      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;
      if (this.idAttribute in attrs)
        this.id = attrs[this.idAttribute];
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val))
          changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }
      if (!silent) {
        if (changes.length)
          this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }
      if (changing)
        return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },clear: function(options) {
      var attrs = {};
      for (var key in this.attributes)
        attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },hasChanged: function(attr) {
      if (attr == null)
        return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },changedAttributes: function(diff) {
      if (!diff)
        return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr])))
          continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },previous: function(attr) {
      if (attr == null || !this._previousAttributes)
        return null;
      return this._previousAttributes[attr];
    },previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0)
        options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options))
          return false;
        if (success)
          success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }
      if (attrs && (!options || !options.wait) && !this.set(attrs, options))
        return false;
      options = _.extend({validate: true}, options);
      if (!this._validate(attrs, options))
        return false;
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }
      if (options.parse === void 0)
        options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait)
          serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success)
          success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch')
        options.attrs = attrs;
      xhr = this.sync(method, this, options);
      if (attrs && options.wait)
        this.attributes = attributes;
      return xhr;
    },destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };
      options.success = function(resp) {
        if (options.wait || model.isNew())
          destroy();
        if (success)
          success(model, resp, options);
        if (!model.isNew())
          model.trigger('sync', model, resp, options);
      };
      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);
      var xhr = this.sync('delete', this, options);
      if (!options.wait)
        destroy();
      return xhr;
    },url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew())
        return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },parse: function(resp, options) {
      return resp;
    },clone: function() {
      return new this.constructor(this.attributes);
    },isNew: function() {
      return this.id == null;
    },isValid: function(options) {
      return this._validate({}, _.extend(options || {}, {validate: true}));
    },_validate: function(attrs, options) {
      if (!options.validate || !this.validate)
        return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error)
        return true;
      this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
      return false;
    }});
    var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];
    _.each(modelMethods, function(method) {
      Model.prototype[method] = function() {
        var args = slice.call(arguments);
        args.unshift(this.attributes);
        return _[method].apply(_, args);
      };
    });
    var Collection = Backbone.Collection = function(models, options) {
      options || (options = {});
      if (options.url)
        this.url = options.url;
      if (options.model)
        this.model = options.model;
      if (options.comparator !== void 0)
        this.comparator = options.comparator;
      this._reset();
      this.initialize.apply(this, arguments);
      if (models)
        this.reset(models, _.extend({silent: true}, options));
    };
    var setOptions = {add: true,remove: true,merge: true};
    var addOptions = {add: true,merge: false,remove: false};
    _.extend(Collection.prototype, Events, {model: Model,initialize: function() {
    },toJSON: function(options) {
      return this.map(function(model) {
        return model.toJSON(options);
      });
    },sync: function() {
      return Backbone.sync.apply(this, arguments);
    },add: function(models, options) {
      return this.set(models, _.defaults(options || {}, addOptions));
    },remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model)
          continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },set: function(models, options) {
      options = _.defaults(options || {}, setOptions);
      if (options.parse)
        models = this.parse(models, options);
      if (!_.isArray(models))
        models = models ? [models] : [];
      var i, l, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(models[i], options)))
          continue;
        if (existing = this.get(model)) {
          if (options.remove)
            modelMap[existing.cid] = true;
          if (options.merge) {
            existing.set(model.attributes, options);
            if (sortable && !sort && existing.hasChanged(sortAttr))
              sort = true;
          }
        } else if (options.add) {
          toAdd.push(model);
          model.on('all', this._onModelEvent, this);
          this._byId[model.cid] = model;
          if (model.id != null)
            this._byId[model.id] = model;
        }
      }
      if (options.remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid])
            toRemove.push(model);
        }
        if (toRemove.length)
          this.remove(toRemove, options);
      }
      if (toAdd.length) {
        if (sortable)
          sort = true;
        this.length += toAdd.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(toAdd));
        } else {
          push.apply(this.models, toAdd);
        }
      }
      if (sort)
        this.sort({silent: true});
      if (options.silent)
        return this;
      for (i = 0, l = toAdd.length; i < l; i++) {
        (model = toAdd[i]).trigger('add', model, this, options);
      }
      if (sort)
        this.trigger('sort', this, options);
      return this;
    },reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models;
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent)
        this.trigger('reset', this, options);
      return this;
    },push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },slice: function(begin, end) {
      return this.models.slice(begin, end);
    },get: function(obj) {
      if (obj == null)
        return void 0;
      return this._byId[obj.id != null ? obj.id : obj.cid || obj];
    },at: function(index) {
      return this.models[index];
    },where: function(attrs, first) {
      if (_.isEmpty(attrs))
        return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key))
            return false;
        }
        return true;
      });
    },findWhere: function(attrs) {
      return this.where(attrs, true);
    },sort: function(options) {
      if (!this.comparator)
        throw new Error('Cannot sort a set without a comparator');
      options || (options = {});
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }
      if (!options.silent)
        this.trigger('sort', this, options);
      return this;
    },sortedIndex: function(model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    },pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0)
        options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success)
          success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options)))
        return false;
      if (!options.wait)
        this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(resp) {
        if (options.wait)
          collection.add(model, options);
        if (success)
          success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },parse: function(resp, options) {
      return resp;
    },clone: function() {
      return new this.constructor(this.models);
    },_reset: function() {
      this.length = 0;
      this.models = [];
      this._byId = {};
    },_prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection)
          attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) {
        this.trigger('invalid', this, attrs, options);
        return false;
      }
      return model;
    },_removeReference: function(model) {
      if (this === model.collection)
        delete model.collection;
      model.off('all', this._onModelEvent, this);
    },_onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this)
        return;
      if (event === 'destroy')
        this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null)
          this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }});
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl', 'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest', 'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf', 'isEmpty', 'chain'];
    _.each(methods, function(method) {
      Collection.prototype[method] = function() {
        var args = slice.call(arguments);
        args.unshift(this.models);
        return _[method].apply(_, args);
      };
    });
    var attributeMethods = ['groupBy', 'countBy', 'sortBy'];
    _.each(attributeMethods, function(method) {
      Collection.prototype[method] = function(value, context) {
        var iterator = _.isFunction(value) ? value : function(model) {
          return model.get(value);
        };
        return _[method](this.models, iterator, context);
      };
    });
    var View = Backbone.View = function(options) {
      this.cid = _.uniqueId('view');
      this._configure(options || {});
      this._ensureElement();
      this.initialize.apply(this, arguments);
      this.delegateEvents();
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
    _.extend(View.prototype, Events, {tagName: 'div',$: function(selector) {
      return this.$el.find(selector);
    },initialize: function() {
    },render: function() {
      return this;
    },remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },setElement: function(element, delegate) {
      if (this.$el)
        this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false)
        this.delegateEvents();
      return this;
    },delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events'))))
        return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method))
          method = this[events[key]];
        if (!method)
          continue;
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },_configure: function(options) {
      if (this.options)
        options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },_ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id)
          attrs.id = _.result(this, 'id');
        if (this.className)
          attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }});
    Backbone.sync = function(method, model, options) {
      var type = methodMap[method];
      _.defaults(options || (options = {}), {emulateHTTP: Backbone.emulateHTTP,emulateJSON: Backbone.emulateJSON});
      var params = {type: type,dataType: 'json'};
      if (!options.url) {
        params.url = _.result(model, 'url') || urlError();
      }
      if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        params.contentType = 'application/json';
        params.data = JSON.stringify(options.attrs || model.toJSON(options));
      }
      if (options.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.data = params.data ? {model: params.data} : {};
      }
      if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
        params.type = 'POST';
        if (options.emulateJSON)
          params.data._method = type;
        var beforeSend = options.beforeSend;
        options.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
          if (beforeSend)
            return beforeSend.apply(this, arguments);
        };
      }
      if (params.type !== 'GET' && !options.emulateJSON) {
        params.processData = false;
      }
      if (params.type === 'PATCH' && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
        params.xhr = function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        };
      }
      var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
      model.trigger('request', model, xhr, options);
      return xhr;
    };
    var methodMap = {'create': 'POST','update': 'PUT','patch': 'PATCH','delete': 'DELETE','read': 'GET'};
    Backbone.ajax = function() {
      return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = Backbone.Router = function(options) {
      options || (options = {});
      if (options.routes)
        this.routes = options.routes;
      this._bindRoutes();
      this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {initialize: function() {
    },route: function(route, name, callback) {
      if (!_.isRegExp(route))
        route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback)
        callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        callback && callback.apply(router, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },_bindRoutes: function() {
      if (!this.routes)
        return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },_routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
        return optional ? match : '([^\/]+)';
      }).replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },_extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param) {
        return param ? decodeURIComponent(param) : null;
      });
    }});
    var History = Backbone.History = function() {
      this.handlers = [];
      _.bindAll(this, 'checkUrl');
      if (typeof window !== 'undefined') {
        this.location = window.location;
        this.history = window.history;
      }
    };
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var isExplorer = /msie [\w.]+/;
    var trailingSlash = /\/$/;
    History.started = false;
    _.extend(History.prototype, Events, {interval: 50,getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root))
            fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },start: function(options) {
      if (History.started)
        throw new Error("Backbone.history has already been started");
      History.started = true;
      this.options = _.extend({}, {root: '/'}, this.options, options);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment = this.getFragment();
      var docMode = document.documentMode;
      var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');
      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        return true;
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }
      if (!this.options.silent)
        return this.loadUrl();
    },stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },route: function(route, callback) {
      this.handlers.unshift({route: route,callback: callback});
    },checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment)
        return false;
      if (this.iframe)
        this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },navigate: function(fragment, options) {
      if (!History.started)
        return false;
      if (!options || options === true)
        options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment)
        return;
      this.fragment = fragment;
      var url = this.root + fragment;
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          if (!options.replace)
            this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }
      } else {
        return this.location.assign(url);
      }
      if (options.trigger)
        this.loadUrl(fragment);
    },_updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        location.hash = '#' + fragment;
      }
    }});
    Backbone.history = new History;
    var extend = function(protoProps, staticProps) {
      var parent = this;
      var child;
      if (protoProps && _.has(protoProps, 'constructor')) {
        child = protoProps.constructor;
      } else {
        child = function() {
          return parent.apply(this, arguments);
        };
      }
      _.extend(child, parent, staticProps);
      var Surrogate = function() {
        this.constructor = child;
      };
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate;
      if (protoProps)
        _.extend(child.prototype, protoProps);
      child.__super__ = parent.prototype;
      return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
      throw new Error('A "url" property or function must be specified');
    };
    var wrapError = function(model, options) {
      var error = options.error;
      options.error = function(resp) {
        if (error)
          error(model, resp, options);
        model.trigger('error', model, resp, options);
      };
    };
  }).call(this);
  (function() {
    var numeral, VERSION = '1.4.7', languages = {}, currentLanguage = 'en', zeroFormat = null, hasModule = (typeof module !== 'undefined' && module.exports);
    function Numeral(number) {
      this._n = number;
    }
    function toFixed(value, precision, optionals) {
      var power = Math.pow(10, precision), output;
      output = (Math.round(value * power) / power).toFixed(precision);
      if (optionals) {
        var optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
        output = output.replace(optionalsRegExp, '');
      }
      return output;
    }
    function formatNumeral(n, format) {
      var output;
      if (format.indexOf('$') > -1) {
        output = formatCurrency(n, format);
      } else if (format.indexOf('%') > -1) {
        output = formatPercentage(n, format);
      } else if (format.indexOf(':') > -1) {
        output = formatTime(n, format);
      } else {
        output = formatNumber(n, format);
      }
      return output;
    }
    function unformatNumeral(n, string) {
      if (string.indexOf(':') > -1) {
        n._n = unformatTime(string);
      } else {
        if (string === zeroFormat) {
          n._n = 0;
        } else {
          var stringOriginal = string;
          if (languages[currentLanguage].delimiters.decimal !== '.') {
            string = string.replace(/\./g, '').replace(languages[currentLanguage].delimiters.decimal, '.');
          }
          var thousandRegExp = new RegExp(languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), millionRegExp = new RegExp(languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), billionRegExp = new RegExp(languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), trillionRegExp = new RegExp(languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          var prefixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], bytesMultiplier = false;
          for (var power = 0; power <= prefixes.length; power++) {
            bytesMultiplier = (string.indexOf(prefixes[power]) > -1) ? Math.pow(1024, power + 1) : false;
            if (bytesMultiplier) {
              break;
            }
          }
          n._n = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * Number(((string.indexOf('(') > -1) ? '-' : '') + string.replace(/[^0-9\.-]+/g, ''));
          n._n = (bytesMultiplier) ? Math.ceil(n._n) : n._n;
        }
      }
      return n._n;
    }
    function formatCurrency(n, format) {
      var prependSymbol = (format.indexOf('$') <= 1) ? true : false;
      var space = '';
      if (format.indexOf(' $') > -1) {
        space = ' ';
        format = format.replace(' $', '');
      } else if (format.indexOf('$ ') > -1) {
        space = ' ';
        format = format.replace('$ ', '');
      } else {
        format = format.replace('$', '');
      }
      var output = formatNumeral(n, format);
      if (prependSymbol) {
        if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
          output = output.split('');
          output.splice(1, 0, languages[currentLanguage].currency.symbol + space);
          output = output.join('');
        } else {
          output = languages[currentLanguage].currency.symbol + space + output;
        }
      } else {
        if (output.indexOf(')') > -1) {
          output = output.split('');
          output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
          output = output.join('');
        } else {
          output = output + space + languages[currentLanguage].currency.symbol;
        }
      }
      return output;
    }
    function formatPercentage(n, format) {
      var space = '';
      if (format.indexOf(' %') > -1) {
        space = ' ';
        format = format.replace(' %', '');
      } else {
        format = format.replace('%', '');
      }
      n._n = n._n * 100;
      var output = formatNumeral(n, format);
      if (output.indexOf(')') > -1) {
        output = output.split('');
        output.splice(-1, 0, space + '%');
        output = output.join('');
      } else {
        output = output + space + '%';
      }
      return output;
    }
    function formatTime(n, format) {
      var hours = Math.floor(n._n / 60 / 60), minutes = Math.floor((n._n - (hours * 60 * 60)) / 60), seconds = Math.round(n._n - (hours * 60 * 60) - (minutes * 60));
      return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }
    function unformatTime(string) {
      var timeArray = string.split(':'), seconds = 0;
      if (timeArray.length === 3) {
        seconds = seconds + (Number(timeArray[0]) * 60 * 60);
        seconds = seconds + (Number(timeArray[1]) * 60);
        seconds = seconds + Number(timeArray[2]);
      } else if (timeArray.lenght === 2) {
        seconds = seconds + (Number(timeArray[0]) * 60);
        seconds = seconds + Number(timeArray[1]);
      }
      return Number(seconds);
    }
    function formatNumber(n, format) {
      var negP = false, optDec = false, abbr = '', bytes = '', ord = '', abs = Math.abs(n._n);
      if (n._n === 0 && zeroFormat !== null) {
        return zeroFormat;
      } else {
        if (format.indexOf('(') > -1) {
          negP = true;
          format = format.slice(1, -1);
        }
        if (format.indexOf('a') > -1) {
          if (format.indexOf(' a') > -1) {
            abbr = ' ';
            format = format.replace(' a', '');
          } else {
            format = format.replace('a', '');
          }
          if (abs >= Math.pow(10, 12)) {
            abbr = abbr + languages[currentLanguage].abbreviations.trillion;
            n._n = n._n / Math.pow(10, 12);
          } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
            abbr = abbr + languages[currentLanguage].abbreviations.billion;
            n._n = n._n / Math.pow(10, 9);
          } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
            abbr = abbr + languages[currentLanguage].abbreviations.million;
            n._n = n._n / Math.pow(10, 6);
          } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
            abbr = abbr + languages[currentLanguage].abbreviations.thousand;
            n._n = n._n / Math.pow(10, 3);
          }
        }
        if (format.indexOf('b') > -1) {
          if (format.indexOf(' b') > -1) {
            bytes = ' ';
            format = format.replace(' b', '');
          } else {
            format = format.replace('b', '');
          }
          var prefixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], min, max;
          for (var power = 0; power <= prefixes.length; power++) {
            min = Math.pow(1024, power);
            max = Math.pow(1024, power + 1);
            if (n._n >= min && n._n < max) {
              bytes = bytes + prefixes[power];
              if (min > 0) {
                n._n = n._n / min;
              }
              break;
            }
          }
        }
        if (format.indexOf('o') > -1) {
          if (format.indexOf(' o') > -1) {
            ord = ' ';
            format = format.replace(' o', '');
          } else {
            format = format.replace('o', '');
          }
          ord = ord + languages[currentLanguage].ordinal(n._n);
        }
        if (format.indexOf('[.]') > -1) {
          optDec = true;
          format = format.replace('[.]', '.');
        }
        var w = n._n.toString().split('.')[0], precision = format.split('.')[1], thousands = format.indexOf(','), d = '', neg = false;
        if (precision) {
          if (precision.indexOf('[') > -1) {
            precision = precision.replace(']', '');
            precision = precision.split('[');
              d = toFixed(n._n, (precision[0].length + precision[1].length), precision[1].length);
          } else {
            d = toFixed(n._n, precision.length);
          }
          w = d.split('.')[0];
          if (d.split('.')[1].length) {
            d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
          } else {
            d = '';
          }
          if (optDec && Number(d.slice(1)) === 0) {
            d = '';
          }
        } else {
          w = toFixed(n._n, null);
        }
        if (w.indexOf('-') > -1) {
          w = w.slice(1);
          neg = true;
        }
        if (thousands > -1) {
          w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
        }
        if (format.indexOf('.') === 0) {
          w = '';
        }
        return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
      }
    }
    numeral = function(input) {
      if (numeral.isNumeral(input)) {
        input = input.value();
      } else if (!Number(input)) {
        input = 0;
      }
      return new Numeral(Number(input));
    };
    numeral.version = VERSION;
    numeral.isNumeral = function(obj) {
      return obj instanceof Numeral;
    };
    numeral.language = function(key, values) {
      if (!key) {
        return currentLanguage;
      }
      if (key && !values) {
        currentLanguage = key;
      }
      if (values || !languages[key]) {
        loadLanguage(key, values);
      }
      return numeral;
    };
    numeral.language('en', {delimiters: {thousands: ',',decimal: '.'},abbreviations: {thousand: 'k',million: 'm',billion: 'b',trillion: 't'},ordinal: function(number) {
      var b = number % 10;
      return (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
    },currency: {symbol: '$'}});
    numeral.zeroFormat = function(format) {
      if (typeof (format) === 'string') {
        zeroFormat = format;
      } else {
        zeroFormat = null;
      }
    };
    function loadLanguage(key, values) {
      languages[key] = values;
    }
    numeral.fn = Numeral.prototype = {clone: function() {
      return numeral(this);
    },format: function(inputString) {
      return formatNumeral(this, inputString ? inputString : numeral.defaultFormat);
    },unformat: function(inputString) {
      return unformatNumeral(this, inputString ? inputString : numeral.defaultFormat);
    },value: function() {
      return this._n;
    },valueOf: function() {
      return this._n;
    },set: function(value) {
      this._n = Number(value);
      return this;
    },add: function(value) {
      this._n = this._n + Number(value);
      return this;
    },subtract: function(value) {
      this._n = this._n - Number(value);
      return this;
    },multiply: function(value) {
      this._n = this._n * Number(value);
      return this;
    },divide: function(value) {
      this._n = this._n / Number(value);
      return this;
    },difference: function(value) {
      var difference = this._n - Number(value);
      if (difference < 0) {
        difference = -difference;
      }
      return difference;
    }};
    if (hasModule) {
      module.exports = numeral;
    }
    if (typeof ender === 'undefined') {
      this['numeral'] = numeral;
    }
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return numeral;
      });
    }
  }).call(this);
  (function(exports) {
    'use strict';
    function EventEmitter() {
    }
    var proto = EventEmitter.prototype, nativeIndexOf = Array.prototype.indexOf ? true : false;
    function indexOfListener(listener, listeners) {
      if (nativeIndexOf) {
        return listeners.indexOf(listener);
      }
      var i = listeners.length;
      while (i--) {
        if (listeners[i] === listener) {
          return i;
        }
      }
      return -1;
    }
    proto._getEvents = function() {
      return this._events || (this._events = {});
    };
    proto.getListeners = function(evt) {
      var events = this._getEvents(), response, key;
      if (typeof evt === 'object') {
        response = {};
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            response[key] = events[key];
          }
        }
      } 
      else {
        response = events[evt] || (events[evt] = []);
      }
      return response;
    };
    proto.getListenersAsObject = function(evt) {
      var listeners = this.getListeners(evt), response;
      if (listeners instanceof Array) {
        response = {};
        response[evt] = listeners;
      }
      return response || listeners;
    };
    proto.addListener = function(evt, listener) {
      var listeners = this.getListenersAsObject(evt), key;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key) && indexOfListener(listener, listeners[key]) === -1) {
          listeners[key].push(listener);
        }
      }
      return this;
    };
    proto.on = proto.addListener;
    proto.defineEvent = function(evt) {
      this.getListeners(evt);
      return this;
    };
    proto.defineEvents = function(evts) 
    {
      for (var i = 0; i < evts.length; i += 1) {
        this.defineEvent(evts[i]);
      }
      return this;
    };
    proto.removeListener = function(evt, listener) {
      var listeners = this.getListenersAsObject(evt), index, key;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          index = indexOfListener(listener, listeners[key]);
          if (index !== -1) {
            listeners[key].splice(index, 1);
          }
        }
      }
      return this;
    };
    proto.off = proto.removeListener;
    proto.addListeners = function(evt, listeners) {
      return this.manipulateListeners(false, evt, listeners);
    };
    proto.removeListeners = function(evt, listeners) {
      return this.manipulateListeners(true, evt, listeners);
    };
    proto.manipulateListeners = function(remove, evt, listeners) {
      var i, value, single = remove ? this.removeListener : this.addListener, multiple = remove ? this.removeListeners : this.addListeners;
      if (typeof evt === 'object' && !(evt instanceof RegExp)) {
        for (i in evt) {
          if (evt.hasOwnProperty(i) && (value = evt[i])) {
            if (typeof value === 'function') {
              single.call(this, i, value);
            } 
            else {
              multiple.call(this, i, value);
            }
          }
        }
      } 
      else {
        i = listeners.length;
        while (i--) {
          single.call(this, evt, listeners[i]);
        }
      }
      return this;
    };
    proto.removeEvent = function(evt) {
      var type = typeof evt, events = this._getEvents(), key;
      if (type === 'string') {
        delete events[evt];
      } 
      else if (type === 'object') {
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            delete events[key];
          }
        }
      } 
      else {
        delete this._events;
      }
      return this;
    };
    proto.emitEvent = function(evt, args) {
      var listeners = this.getListenersAsObject(evt), i, key, response;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          i = listeners[key].length;
          while (i--) {
            response = args ? listeners[key][i].apply(null, args) : listeners[key][i]();
            if (response === true) {
              this.removeListener(evt, listeners[key][i]);
            }
          }
        }
      }
      return this;
    };
    proto.trigger = proto.emitEvent;
    proto.emit = function(evt) {
      var args = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(evt, args);
    };
    if (typeof define === 'function' && define.amd) {
      define(function() {
        return EventEmitter;
      });
    } 
    else {
      exports.EventEmitter = EventEmitter;
    }
  }(this));
  'use strict';
  (function(window) {
    var Riflebird = {};
    setupModuleLoader(Riflebird);
    Riflebird.VERSION = "0.1.2";
    Riflebird.accessor = accessor;
    function CONSTANTS() {
    }
    function EVENTS() {
    }
    CONSTANTS.WIDTH = "width";
    CONSTANTS.HEIGHT = "height";
    CONSTANTS.LAYER = "layer";
    CONSTANTS.UNDEFINED = "undefined";
    CONSTANTS.DEFAULTCSS = {position: 'absolute',top: 0,left: 0};
    CONSTANTS.COLORS = ['#1f77b4', '#ff7f0e', '#d62728', '#5ad45a', '#9467bd', '#8c564b', '#661813', '#7f7f7f', '#17becf', '#393b79', '#637939', '#8c6d31', '#843c39', '#7b4173', '#9c9ede', '#966116', '#a32e52', '#3c8d3c', '#5254a3', '#8ca252', '#bd9e39', '#ad494a', '#a55194', '#faa226', '#ab2920', '#6f479b', '#c8811e', '#e377c2', '#4bb14b', '#a66ae8', '#7a223d', '#2d6a2d', '#cc3a67', '#6b6ecf', '#d6616b', '#ce6dbd'];
    EVENTS.DRAW = 'draw';
    EVENTS.RENDER = 'render';
    EVENTS.PIXELIZE = 'pixelize';
    EVENTS.SAMPLE = 'sample';
    EVENTS.NORMALIZE = 'normalize';
    EVENTS.READY = 'ready';
    Riflebird.register('Data', [], function() {
      function Data() {
        var self = this;
        self.__ready;
        self._minX;
        self._maxX;
        self._minY;
        self._maxY;
        self._xScale;
        self._yScale;
        self._width;
        self._height;
        self._data = {};
        self._numSamples;
        self._numSeries;
        self._x;
        self._y;
        self._getSeriesData;
        self._granularity;
      }
      var DataProto = Data.prototype;
      $.extend(DataProto, EventEmitter.prototype);
      DataProto._ready = accessor("__ready", false);
      DataProto.values = accessor("_getSeriesData", function(d) {
        return d.data;
      });
      DataProto.x = accessor("_x", function(d, i) {
        if (d) {
          return d.x;
        }
      });
      DataProto.y = accessor("_y", function(d, i) {
        if (d) {
          return d.y;
        }
      });
      DataProto.data = accessor("_inputData");
      DataProto.granularity = accessor("_granularity", 60);
      DataProto.width = accessor("_width", 0, function(width) {
        this.emit('change:width', width);
      });
      DataProto.height = accessor("_height", 0, function(height) {
        this.emit('change:height', height);
      });
      DataProto.numSamples = accessor("_numSamples", 0);
      DataProto.numSeries = accessor("_numSeries", 0);
      DataProto.xScale = accessor("_xScale");
      DataProto.yScale = accessor("_yScale");
      DataProto.minX = accessor('_minX');
      DataProto.maxX = accessor('_maxX');
      DataProto.minY = accessor('_minY');
      DataProto.maxY = accessor('_maxY');
      DataProto.metaData = function(metaData) {
        var self = this;
        if (arguments.length === 0)
          return self._data.meta;
        self._data.meta = metaData;
        return self;
      }
      DataProto.inputData = function(inputData) {
        var self = this;
        if (arguments.length === 0)
          return self._data.input;
        self._data.input = inputData;
        return self;
      }
      DataProto.sampledData = function(sampledData) {
        var self = this;
        if (arguments.length === 0)
          return self._data.sampled;
        self._data.sampled = sampledData;
        if (!sampledData || !sampledData.x || !sampledData.y)
          throw new Error('no data');
        self.numSeries(sampledData.y.length);
        self.numSamples(sampledData.x.length);
        return self;
      }
      DataProto.pixelData = function(pixelData) {
        var self = this;
        if (arguments.length === 0)
          return self._data.pixels;
        self._data.pixels = pixelData;
        return self;
      }
      DataProto.empty = function() {
        var self = this;
        self.emit('empty');
        return self;
      }
      return Data;
    });
    Riflebird.register('Chart', ['Renderer', 'Data', 'Sampler', 'Layer'], function(Renderer, Data, Sampler, Layer) {
      function delegateAccessor(attr, args) {
        var self = this;
        var response = self.model[attr].apply(this.model, args);
        if (args.length === 0) {
          return response;
        } else {
          return self;
        }
      }
      function Chart(el, opts) {
        var self = this;
        self.model = new Data();
        self.$el = $(el).css('position', 'relative');
        self.$el.data('chart', this);
        self.$container = $('<div class="rb-container"></div>');
        self._sampler;
        self._renderer;
        self._layers = generateCanvasLayers(self.model);
        renderChart(self);
        self.model.on('change:width', function(width) {
          self.$container.width(width);
        });
        self.model.on('change:height', function(height) {
          self.$container.height(height);
        });
      }
      var ChartProto = Chart.prototype;
      $.extend(ChartProto, EventEmitter.prototype);
      function generateCanvasLayers(model) {
        var $canvas, $visualLayer, $overlayLayer;
        $canvas = $('<canvas></canvas>');
        $visualLayer = $canvas.clone().css(CONSTANTS.DEFAULTCSS);
        $overlayLayer = $canvas.clone().css(CONSTANTS.DEFAULTCSS);
        return {VISUAL: Layer.getLayer($visualLayer, model),OVERLAY: Layer.getLayer($overlayLayer, model)}
      }
      function renderChart(chart) {
        var self = chart;
        self.$container.append(self._layers.VISUAL.$el).append(self._layers.OVERLAY.$el);
        self.$container.appendTo(self.$el);
      }
      ['granularity', 'values', 'x', 'y', 'data', 'width', 'height', 'minY', 'maxY', 'numSeries', 'numSamples', 'sampledData', 'pixelData', 'inputData', 'metaData'].forEach(function(attr) {
        ChartProto[attr] = function() {
          return delegateAccessor.call(this, attr, arguments);
        };
      });
      ChartProto.start = function() {
        return delegateAccessor.call(this, 'minX', arguments);
      }
      ChartProto.end = function() {
        return delegateAccessor.call(this, 'maxX', arguments);
      }
      ChartProto.scale = function(axis, value) {
        if (axis === 'x') {
          return delegateAccessor.call(this, 'xScale', arguments);
        } else {
          return delegateAccessor.call(this, 'yScale', arguments);
        }
      }
      ChartProto.sampler = function(sampler) {
        var self = this;
        if (!arguments.length) {
          if (typeof self._sampler !== CONSTANTS.UNDEFINED) {
            return self._sampler;
          } else {
            throw new Error('no valid sampler defined');
          }
        }
        if (!(sampler instanceof Sampler))
          throw new Error('not a valid sampler');
        self._sampler = sampler;
        self._sampler.model = self.model;
        return self;
      }
      ChartProto.renderer = function(renderer) {
        var self = this;
        if (!arguments.length) {
          if (typeof self._renderer !== CONSTANTS.UNDEFINED) {
            return self._renderer;
          } else {
            throw new Error('no valid renderer defined');
          }
        }
        if (!(renderer instanceof Renderer))
          throw new Error('no valid renderer found');
        self._renderer = renderer || new Renderer.Line;
        self._renderer.model = self.model;
        return self;
      }
      ChartProto.getOverlayLayer = function() {
        return this._layers.OVERLAY;
      };
      ChartProto.getVisualLayer = function() {
        return this._layers.VISUAL;
      };
      ChartProto.draw = function() {
        var self = this, sampler, renderer, model;
        sampler = self._sampler;
        renderer = self._renderer;
        model = self.model;
        if (self.width() === 0) {
          self.width(self.$el.width() || 400);
        }
        if (self.height() === 0) {
          self.height(self.$el.height() || 200);
        }
        self.normalize();
        self.sample();
        self.pixelize();
        self.render();
        self.getOverlayLayer().clear();
        if (model._ready() === false) {
          model._ready(true);
          self.emit(EVENTS.READY);
        }
        self.emit(EVENTS.DRAW);
        return self;
      };
      Chart.prototype.isReady = function() {
        return this.model._ready();
      }
      Chart.prototype.normalize = function() {
        var self = this;
        var state, model, sampler, normalized;
        model = self.model;
        sampler = self._sampler;
        sampler.normalizeData(model.data());
        return model.inputData();
      }
      Chart.prototype.sample = function() {
        var self = this;
        var state, model, sampler, inputData, sampledData;
        model = self.model;
        sampler = self._sampler;
        inputData = model.inputData();
        sampledData = sampler.sample(inputData);
        model.sampledData(sampledData);
        self.emit(EVENTS.SAMPLE, sampledData, model.numSeries(), model.numSamples());
        return model.sampledData();
      }
      Chart.prototype.pixelize = function() {
        var self = this;
        var state, model, renderer, pixelData, numSeries, numSamples;
        model = self.model;
        renderer = self._renderer;
        renderer.pixelize(model.sampledData());
        pixelData = model.pixelData();
        numSeries = model.numSeries();
        numSamples = model.numSamples();
        self.emit(EVENTS.PIXELIZE, pixelData, numSeries, numSamples);
        return model.pixelData();
      }
      Chart.prototype.render = function() {
        var self = this;
        var state, model, renderer, canvas, pixelData, numSeries, numSamples, visualLayer;
        model = self.model;
        renderer = self._renderer;
        self.getOverlayLayer().clear();
        visualLayer = self.getVisualLayer().clear();
        pixelData = model.pixelData();
        numSeries = model.numSeries();
        numSamples = model.numSamples();
        canvas = renderer.render(pixelData, numSeries, numSamples);
        self.emit(EVENTS.RENDER, pixelData, numSeries, numSamples);
        visualLayer.canvas().drawImage(canvas, 0, 0);
      }
      return Chart;
    });
    Riflebird.register('Layer', [], function() {
      function Layer($element, model) {
        var self = this, canvas;
        canvas = $element.get(0);
        if (!canvas)
          throw new Error('Canvas not found');
        self.model = model;
        self.$el = $element;
        self._context = canvas.getContext('2d');
        self._context.globalCompositeOperation = "destination-in";
        self.model.on('change:width', function(width) {
          self.$el.attr(CONSTANTS.WIDTH, width);
        });
        self.model.on('change:height', function(height) {
          self.$el.attr(CONSTANTS.HEIGHT, height);
        });
      }
      Layer.prototype.canvas = accessor("_context");
      Layer.prototype.clear = function(preserveTransformBool) {
        var self = this, width, height, context;
        width = self.$el.width();
        height = self.$el.height();
        context = self.canvas();
        if (preserveTransformBool) {
          context.save();
          context.setTransform(1, 0, 0, 1, 0, 0);
        }
        context.clearRect(0, 0, width, height);
        if (preserveTransformBool) {
          context.restore();
        }
        return self;
      };
      Layer.getLayer = function($el, model) {
        var layer = ($el.data(CONSTANTS.LAYER) || new Layer($el, model));
        $el.data(CONSTANTS.LAYER) || $el.data(CONSTANTS.LAYER, layer);
        return layer;
      }
      return Layer;
    });
    Riflebird.register('Renderer', [], function() {
      var TEMP_MIN_MAX = {};
      function Renderer() {
        var self = this;
        self.model;
        self.initialize.apply(self, slice(arguments, 1));
      }
      var RendererProto = Renderer.prototype;
      RendererProto.initialize = function() {
      };
      function findMinMaxForY(series, numSeries, numSamples, yValue) {
        var minY, maxY, yValues, i, j, yVal;
        for (i = 0; i < numSeries; i += 1) {
          yValues = series[i];
          for (j = 0; j < numSamples; j += 1) {
            yVal = yValues[j];
            if (isNaN(yVal))
              continue;
            if (typeof minY === 'undefined' || minY > yVal)
              minY = yVal;
            if (typeof maxY === 'undefined' || maxY < yVal)
              maxY = yVal;
          }
          ;
        }
        ;
        var padding = (maxY - minY) * 0.05;
        if (padding === 0 && maxY === minY)
          padding = Math.abs(maxY) * 0.05;
        if (minY !== 0) {
          if (minY > 0 && minY - padding < 0) {
            minY = 0;
          } else {
            minY -= padding;
          }
        }
        if (maxY === 0) {
          maxY = 0.05;
        } else {
          maxY += padding;
        }
        TEMP_MIN_MAX.minY = minY;
        TEMP_MIN_MAX.maxY = maxY;
      }
      RendererProto.pixelize = function(sampledData) {
        var self = this, width, height, minY, maxY, minX, maxX, xScale, yScale, series, numSeries, points, numSamples, xValues, yValues, point, pixels, i, j, yVal, xVal;
        width = self.model.width();
        height = self.model.height();
        xValues = sampledData.x;
        if (typeof sampledData === 'undefined')
          return;
        numSeries = self.model.numSeries();
        numSamples = self.model.numSamples();
        minY = self.model.minY();
        maxY = self.model.maxY();
        minX = self.model.minX();
        maxX = self.model.maxX();
        if (isNaN(minY) || isNaN(maxY)) {
          findMinMaxForY(sampledData.y, numSeries, numSamples);
          if (isNaN(minY))
            minY = TEMP_MIN_MAX.minY;
          if (isNaN(maxY))
            maxY = TEMP_MIN_MAX.maxY;
        }
        xScale = d3.scale.linear().domain([minX, maxX]).range([2, width]);
        yScale = d3.scale.linear().domain([minY, maxY]).range([height, 0]);
        pixels = {x: [],y: new Array(numSeries)};
        for (j = 0; j < numSamples; j += 1) {
          xVal = xScale(xValues[j]);
          pixels.x.push(xVal);
        }
        for (i = 0; i < numSeries; i += 1) {
          yValues = sampledData.y[i];
          pixels.y[i] = new Array(numSamples);
          for (j = 0; j < numSamples; j += 1) {
            if (!isNaN(yValues[j])) {
              yVal = yScale(yValues[j]);
              pixels.y[i][j] = yVal;
            } else {
              pixels.y[i][j] = undefined;
            }
          }
        }
        self.model.xScale(xScale);
        self.model.yScale(yScale);
        self.model.minY(minY);
        self.model.maxY(maxY);
        self.model.pixelData(pixels);
        return self;
      };
      Renderer.extend = extend;
      return Renderer;
    });
    Riflebird.register('Renderer.LineRenderer', ['Renderer'], function(Renderer) {
      var LineRenderer = Renderer.extend({initialize: function() {
        var self = this;
        self._lineWidth = 1;
        self._fill = false;
        self._stack = false;
        self._transparency = 0.8;
      },lineWidth: accessor("_lineWidth", 1),fill: accessor("_fill", false),stack: accessor("_stack", false),transparency: accessor("_transparency", 0.8),render: function(pixelData, numSeries, numSamples) {
        var self = this;
        var i, j, metaData, fillColor, colorStringConstructor, canvas, context, lineWidth, fill, t;
        canvas = document.createElement("canvas");
        canvas.width = self.model.width();
        canvas.height = self.model.height();
        metaData = self.model.metaData();
        context = canvas.getContext('2d');
        lineWidth = self._lineWidth;
        fill = self._fill;
        t = self._transparency;
        colorStringConstructor = ["rgb(", 0, ",", 0, ",", 0, ")"];
        context.lineWidth = lineWidth;
        for (i = 0; i < numSeries; i += 1) {
          fillColor = metaData[i].color;
          colorStringConstructor[1] = fillColor.r;
          colorStringConstructor[3] = fillColor.g;
          colorStringConstructor[5] = fillColor.b;
          context.strokeStyle = colorStringConstructor.join("");
          context.beginPath();
          for (j = 0; j < numSamples; j += 1) {
            context.lineTo(pixelData.x[j], pixelData.y[i][j]);
          }
          context.stroke();
          context.closePath();
        }
        if (fill) {
          self.doFill(context, pixelData, numSeries, numSamples);
        }
        return canvas;
      },doFill: function(context, pixelData, numSeries, numSamples) {
        var self = this;
        var i, j, m, metaData, fillColor, height, isYNaN, firstXVal, lastXVal, comparisonIndex, comparisonValue;
        height = self.model.height();
        metaData = self.model.metaData();
        for (i = numSeries - 1; i >= 0; i -= 1) {
          fillColor = metaData[i].color;
          context.fillStyle = "rgba(" + fillColor.r + "," + fillColor.g + "," + 
      fillColor.b + "," + self._transparency + ")";
    firstXVal = undefined;
    lastXVal = undefined;
    context.beginPath();
    for (j = 0; j < numSamples; j += 1) {
      isYNaN = isNaN(pixelData.y[i][j]);
      if (!firstXVal && !isYNaN) {
        firstXVal = pixelData.x[j];
        context.lineTo(firstXVal, height);
      }
      context.lineTo(pixelData.x[j], pixelData.y[i][j]);
      if (!isYNaN)
        lastXVal = pixelData.x[j];
    }
    if (self._stack === true && i > 0) {
      for (m = numSamples - 1; m >= 0; m -= 1) {
        if (isNaN(pixelData.y[i][m]))
          continue;
        comparisonIndex = i - 1;
        comparisonValue = pixelData.y[comparisonIndex][m];
        while (isNaN(comparisonValue)) {
          comparisonIndex--;
          if (comparisonIndex < 0) {
            comparisonValue = height;
            break;
          }
          comparisonValue = pixelData.y[comparisonIndex][m];
        }
        context.lineTo(pixelData.x[m], comparisonValue);
      }
    } else {
      context.lineTo(lastXVal, height);
      context.lineTo(firstXVal, height);
    }
    context.fill();
    context.closePath();
        }
      },});
      return LineRenderer;
    });
    Riflebird.register('Sampler', [], function() {
      function Sampler() {
        var self = this;
        self.model;
        self.initialize.apply(self, slice(arguments, 1));
      }
      var SamplerProto = Sampler.prototype;
      SamplerProto.initialize = function() {
      };
      SamplerProto.normalizeData = function(inputData) {
        var self = this, meta, numSeries, points, numSamples, point, x, y, getSeriesData, yValues, xValues, granularity, ySeries, numSamples, minX, maxX, normalizedData, model, tempNumPoints, tempValues, i, j;
        model = self.model;
        numSeries = inputData.length;
        x = model.x();
        y = model.y();
        getSeriesData = model.values();
        minX = model.minX();
        maxX = model.maxX();
        granularity = model.granularity();
        empty = true;
        meta = new Array(numSeries);
        yValues = new Array(numSeries);
        numSamples = Math.ceil(((maxX - minX) / granularity));
        xValues = [];
        for (i = 0; i < numSamples; i += 1) {
          xValues[i] = minX + (granularity * i);
        }
        numSamples++;
        xValues.push(maxX);
        model._empty = true;
        for (i = 0; i < numSeries; i += 1) {
          meta[i] = inputData[i].meta || {};
          meta[i].color = (typeof meta[i].color === "object") ? meta[i].color : hexToRgb(color(i));
          points = getSeriesData(inputData[i]) || [];
          tempNumPoints = points.length;
          tempValues = {};
          for (j = 0; j < tempNumPoints; j += 1) {
            tempValues[x(points[j])] = points[j][1];
          }
          ySeries = new Array(numSamples);
          for (j = 0; j < numSamples; j += 1) {
            point = tempValues[xValues[j]];
            if (!isNaN(point)) {
              ySeries[j] = parseFloat(point);
            } else {
              ySeries[j] = undefined;
            }
          }
          yValues[i] = ySeries;
        }
        ;
        if (tempNumPoints !== 0) {
          model._empty = false;
        }
        normalizedData = {x: xValues,y: yValues};
        model.metaData(meta);
        model.inputData(normalizedData);
      }
      Sampler.extend = extend;
      return Sampler;
    });
    Riflebird.register('Sampler.DataSampler', ['Sampler'], function(BaseSampler) {
      var DataSampler = BaseSampler.extend({sample: function(inputData) {
        var self = this, normalizedData, sampledData;
        normalizedData = inputData || self.model.inputData();
        sampledData = normalizedData;
        return sampledData;
      }});
      return DataSampler;
    });
    Riflebird.register('Plugin', ['Chart'], function(Chart) {
      function Plugin(chart) {
        var self = this;
        self.__events = {};
        self.chart = chart;
        self.name;
        self.initialize.apply(self, Array.prototype.slice.call(arguments, 1));
      }
      var PluginProto = Plugin.prototype;
      PluginProto.initialize = function() {
      };
      PluginProto.ready = function() {
      };
      PluginProto.listenTo = function(obj, evtName, cb) {
        var self = this;
        var __events = self.__events;
        if (typeof obj === "string" && arguments.length === 2) {
          cb = evtName;
          evtName = obj;
          obj = self.chart;
        }
        __events[evtName] = {obj: obj,cb: cb};
        if (typeof __events[evtName] !== CONSTANTS.UNDEFINED) {
          obj.off(evtName);
        }
        obj.on(evtName, cb);
      }
      PluginProto.stopListening = function() {
        var self = this;
        var __events = self.__events;
        __events && Object.keys(__events).forEach(function(evtName) {
          var evt = __events[evtName];
          evt.obj.off(evtName, evt.cb);
          __events[evtName] = undefined;
        });
        self.__events = {};
      }
      PluginProto.destroy = function() {
        var self = this;
        self.stopListening();
        self.chart.$el.removeData(self.name);
        self.__events = null;
        self.chart = null;
      }
      Plugin.register = function(name, PluginClass) {
        if (Chart.prototype[name])
          return;
        this.name = name;
        Chart.prototype[name] = function() {
          var self = this, dataKey, pluginObj;
          dataKey = 'rb-' + name;
          pluginObj = self.$el.data(dataKey);
          if (typeof pluginObj === CONSTANTS.UNDEFINED) {
            pluginObj = new PluginClass(self);
            pluginObj.name = dataKey;
            self.$el.data(dataKey, pluginObj);
            if (self.isReady() === true) {
              pluginObj.ready();
            } else {
              self.on(EVENTS.READY, function() {
                pluginObj.ready();
                self.off(EVENTS.READY);
              });
            }
          }
          return pluginObj;
        };
      }
      Plugin.extend = extend;
      return Plugin;
    });
    function slice(args, no) {
      return Array.prototype.slice.call(args, no);
    }
    function setupModuleLoader(baseObj) {
      function ensure(obj, name, factory) {
        return obj[name] || (obj[name] = factory());
      }
      var modules = {};
      return {register: ensure(baseObj, 'register', function() {
        return function module(name, requires, moduleInstance) {
          if (requires && modules.hasOwnProperty(name)) {
            modules[name] = {};
          }
          if (!requires) {
            throw Error('No module: ' + name);
          }
          modules[name] = {i: moduleInstance,r: requires}
          return moduleInstance;
        };
      }),load: ensure(baseObj, 'load', function() {
        return function(name) {
          var requireArray = [], nameSplits = name.split('.');
          if (!modules.hasOwnProperty(name))
            throw Error('No module: ' + name);
          if (modules[name].r.length > 0) {
            modules[name].r.forEach(function(r) {
              requireArray.push(baseObj[r] || baseObj.load(r));
            });
          }
          if (nameSplits.length > 1) {
            baseObj[nameSplits[0]][nameSplits[1]] = modules[name].i.apply(baseObj, requireArray);
          } else {
            baseObj[name] = modules[name].i.apply(baseObj, requireArray);
          }
          return baseObj[name];
        };
      })}
    }
    function rounded(somenum) {
      var rounded = (0.5 + somenum) | 0;
      rounded = ~~(0.5 + somenum);
      rounded = (0.5 + somenum) << 0;
      return rounded;
    }
    ;
    function color(i) {
      return CONSTANTS.COLORS[i % (CONSTANTS.COLORS.length)];
    }
    function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {r: parseInt(result[1], 16),g: parseInt(result[2], 16),b: parseInt(result[3], 16),hex: hex} : null;
    }
    function accessor(name, defaultValue, trigger) {
      return function(_) {
        var self = this;
        if (!arguments.length) {
          if (typeof (self[name]) !== 'undefined' && self[name] !== null) {
            return self[name];
          }
          return defaultValue;
        }
        self[name] = _;
        if (trigger) {
          trigger.apply(self, arguments);
        }
        return self;
      };
    }
    ;
    function extend(protoProps, staticProps) {
      var parent, child;
      parent = this;
      child = function() {
        parent.apply(this, arguments);
      }
      child.prototype = Object.create(parent.prototype);
      if (protoProps) {
        $.extend(child.prototype, protoProps);
      }
      if (staticProps) {
        $.extend(child, staticProps);
      }
      return child;
    }
    ;
    (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }());
    Riflebird.load('Chart');
    Riflebird.load('Sampler.DataSampler');
    Riflebird.load('Renderer.LineRenderer');
    Riflebird.CONSTANTS = CONSTANTS;
    Riflebird.EVENTS = EVENTS;
    Riflebird.Utils = {accessor: accessor,extend: extend,color: color,hexToRgb: hexToRgb}
    window.Riflebird = window.Riflebird || Riflebird;
  })(window);
  Riflebird.register('Plugin.Events', ['Plugin'], function(Plugin) {
    'use strict'
    Riflebird.EVENTS.HOVER = 'hover';
    Riflebird.EVENTS.ENTER = 'enter';
    Riflebird.EVENTS.LEAVE = 'leave';
    Riflebird.EVENTS.CLICK = 'click';
    function getPos($container, e) {
      var offset = $container.offset();
      e.posX = e.pageX - offset.left, e.posY = e.pageY - offset.top;
      return e;
    }
    var Events = Plugin.extend({ready: function() {
      var self = this;
      var _dataCache, chart, $container, _xScale;
      chart = self.chart;
      $container = chart.$container;
      _dataCache = {};
      _xScale = d3.scale.quantize().domain([2, chart.width()]).range(chart.sampledData().x);
      self.listenTo(Riflebird.EVENTS.DRAW, function() {
        _dataCache = {};
        _xScale = d3.scale.quantize().domain([2, chart.width()]).range(chart.sampledData().x);
      });
      $container.off().on('mousemove', function(e) {
        var timestamp, cacheValue;
        e = getPos($container, e);
        timestamp = _xScale(e.posX);
        cacheValue = _dataCache[timestamp];
        if (typeof cacheValue === Riflebird.CONSTANTS.UNDEFINED) {
          cacheValue = self.getDataForX(timestamp);
          _dataCache[timestamp] = cacheValue;
        }
        self.chart.emit(Riflebird.EVENTS.HOVER, e.posX, e.posY, cacheValue);
      }).on('mouseover', function(e) {
        e = getPos($container, e);
        chart.$el.addClass('active');
        self.chart.emit(Riflebird.EVENTS.ENTER, e.posX, e.posY);
      }).on('mouseout', function(e) {
        e = getPos($container, e);
        chart.getOverlayLayer().clear();
        chart.$el.removeClass('active');
        self.chart.emit(Riflebird.EVENTS.LEAVE, e.posX, e.posY);
      }).on('click', function(e) {
        e = getPos($container, e);
        self.chart.emit(Riflebird.EVENTS.CLICK, e.posX, e.posY);
      });
    },getDataForX: function(timestamp) {
      var self = this, chart, normalizedData, sampledData, pixelData, numSeries, yPixels, yVals, iidx, idx, i;
      chart = self.chart;
      numSeries = chart.numSeries();
      yPixels = new Array(numSeries);
      yVals = new Array(numSeries);
      normalizedData = chart.inputData();
      sampledData = chart.sampledData();
      pixelData = chart.pixelData();
      iidx = normalizedData.x.indexOf(timestamp);
      idx = sampledData.x.indexOf(timestamp);
      for (i = 0; i < numSeries; i += 1) {
        yPixels[i] = pixelData.y[i][idx];
        yVals[i] = normalizedData.y[i][iidx];
      }
      return {x: pixelData.x[idx],y: yPixels,xVal: timestamp,yVal: yVals};
    }});
    Plugin.register('events', Events);
    return Events;
  });
  Riflebird.register('Plugin.Legend', ['Plugin'], function(Plugin) {
    'use strict'
    var SELECTORS, TEMPLATES, MAX_WIDTH, $legendContainer, $legend, $legendRows, $legendMeta, accessor, hexToRgb, color;
    SELECTORS = {legend: '#rb-legend'};
    TEMPLATES = {'legendContainer': '<div id="rb-legend" class="hide"><div id="legend-content"></div></div>','row': '<li><span class="color-patch" style="background-color: {{color}}"></span><span class="metric-name">{{meta}}:</span><span title="{{val}}" class="val-name">{{val}}</span></li>'};
    $legendContainer = getLegend();
    $legendMeta = $('.meta-data', $legendContainer);
    $legend = $legendContainer.find('#legend-content');
    $legendRows = $legendContainer.find('li');
    hexToRgb = Riflebird.Utils.hexToRgb;
    color = Riflebird.Utils.color;
    accessor = Riflebird.Utils.accessor;
    function getLegend() {
      var $legendContainer = $(SELECTORS.legend);
      if ($legendContainer.length === 0) {
        $legendContainer = $(TEMPLATES.legendContainer);
        $legendContainer._freeze = false;
        $('body').append($legendContainer);
      }
      if ($('.meta-data', $legendContainer).length === 0) {
        $legendContainer.prepend('<div class="meta-data"></div>');
      }
      return $legendContainer;
    }
    function getAverageFromNumArr(numArr, numOfDec) {
      var i = numArr.length, j, sum;
      sum = 0;
      j = 0;
      while (i--) {
        if (isNaN(numArr[i])) {
          continue;
        }
        sum += numArr[i];
        j++;
      }
      return getNumWithSetDec((sum / j), numOfDec);
    }
    function getStandardDeviation(numArr, numOfDec) {
      var stdDev = Math.sqrt(getVariance(numArr, numOfDec));
      return getNumWithSetDec(stdDev, numOfDec);
    }
    function getNumWithSetDec(num, numOfDec) {
      var pow10s = Math.pow(10, numOfDec || 0);
      return (numOfDec) ? Math.round(pow10s * num) / pow10s : num;
    }
    function getVariance(numArr, numOfDec) {
      var avg = getAverageFromNumArr(numArr, numOfDec), i = numArr.length, v = 0;
      while (i--) {
        v += Math.pow((numArr[i] - avg), 2);
      }
      v /= numArr.length;
      return getNumWithSetDec(v, numOfDec);
    }
    var Legend = Plugin.extend({ready: function() {
      var self = this;
      var chart, model, $legend, colors;
      var data = [];
      console.log('Legend ready');
      self._freeze;
      self._outlier;
      chart = self.chart;
      model = chart.model;
      colors = {};
      self.listenTo(Riflebird.EVENTS.ENTER, function(e) {
        if ($legendContainer._freeze)
          return;
        chart.$container.trigger('mousemove', e);
        self.positionLegend();
      });
      self.listenTo(Riflebird.EVENTS.LEAVE, function(e) {
        if ($legendContainer._freeze)
          return;
        $legendContainer.addClass('hide');
        $legendContainer.css({width: 'auto',height: 'auto'});
        MAX_WIDTH = 0;
      });
      self.listenTo(Riflebird.EVENTS.HOVER, function(x, y, results) {
        if ($legendContainer._freeze)
          return;
        var t, html, timestamp;
        timestamp = results.xVal;
        model.metaData().forEach(function(metaData, i) {
          data[i] = data[i] || {};
          data[i].color = metaData.color.hex;
          data[i].meta = metaData.label;
          data[i].val = results.yVal[i];
          data[i].y = results.y[i];
        });
        t = data.splice(0, model.metaData().length);
        if (self._outlier == true) {
          t = self.calculateOutliers(t, results.yVal);
        } else {
          var height = self.chart.height();
          t.sort(function(a, b) {
            var va, vb;
            va = (typeof a.y === 'undefined') ? height : a.y;
            vb = (typeof b.y === 'undefined') ? height : b.y;
            return vb - va;
          });
        }
        self.populateLegend(timestamp, t, y);
      });
      self.listenTo(Riflebird.EVENTS.CLICK, function() {
        $legendContainer._freeze = !$legendContainer._freeze;
      });
    },outlier: accessor('_outlier', false),freeze: function(state) {
      if (typeof state === undefined) {
        return $legendContainer._freeze;
      }
      $legendContainer._freeze = state;
    },calculateOutliers: function(data, yVals) {
      var average, deviants, deviation, deviance, i;
      average = getAverageFromNumArr(yVals, 2);
      deviation = getStandardDeviation(yVals, 2);
      deviants = [];
      for (i = data.length - 1; i >= 0; --i) {
        if (!isNaN(data[i].val)) {
          deviance = data[i].val - average;
          data[i].deviation = Math.abs((data[i].val > average) ? (deviance < 0.0 ? 0.0 : deviance) : (deviance > 0.0 ? 0.0 : deviance));
          deviants.push(data[i]);
        }
      }
      deviants = deviants.sort(function(a, b) {
        return b.deviation - a.deviation;
      });
      $legendMeta.text('Average: ' + average);
      return deviants.splice(0, 5);
    },populateLegend: function(timestamp, items, y) {
      var self = this;
      var numItems, i, html, width;
      html = '<div class="legend-timestamp">' + moment.unix(timestamp).format('HH:mm:ss, MMM DD') + ' (' + moment.unix(timestamp).utc().format('HH:mm:ss, MMM DD') + ' - UTC)</div>';
      html += '<div id="scrollable-list"><ul>';
      numItems = items.length;
      var total = 0;
      for (i = numItems - 1; i >= 0; i -= 1) {
        html += TEMPLATES.row.replace('{{meta}}', items[i].meta.length > 150 ? items[i].meta.substring(0, 150) + '...' : items[i].meta).replace('{{color}}', items[i].color).replace('{{val}}', items[i].val).replace('{{val}}', !isNaN(items[i].val) ? numeral(items[i].val).format('0.[000]') : items[i].val);
        if (!isNaN(items[i].val)) {
          total += items[i].val;
        }
      }
      html += '</ul></div>'
      $legend.html(html);
      var list = $legend.find('ul');
      if (numItems > 1) {
        $legendContainer.find('.meta-data').text("Total: " + total);
      }
      var listMargin = $legendContainer.find('.meta-data').height() + 20;
      var scrollHeight = $legendContainer.height() - listMargin;
      var listDiv = $('#scrollable-list');
      listDiv.height(scrollHeight);
      listDiv.scrollTop(d3.scale.linear().domain([10, self.chart.model.height()]).rangeRound([0, list.height()])(y));
      width = $legendContainer.width();
      if (MAX_WIDTH && width < MAX_WIDTH) {
        $legendContainer.width(MAX_WIDTH);
        self.positionLegend();
      } else {
        MAX_WIDTH = width;
      }
    },positionLegend: function() {
      var self = this;
      $legendContainer.removeClass('hide');
      var offset, chartWidth, chartHeight, $win, winWidth, winHeight, winScrollTop, legendWidth, legendHeight, top, left, bottomHeight, chart, model, chartToWindowDistance, buffer = 40;
      chart = self.chart;
      model = chart.model;
      chartToWindowDistance = {};
      $win = $(window);
      offset = chart.$container.offset();
      chartWidth = model.width();
      chartHeight = model.height();
      winWidth = $win.width();
      winHeight = $win.height();
      legendWidth = $legendContainer.width();
      legendHeight = $legendContainer.height();
      winScrollTop = $win.scrollTop();
      chartToWindowDistance.left = offset.left;
      chartToWindowDistance.right = winWidth - (offset.left + chartWidth);
      chartToWindowDistance.top = offset.top - winScrollTop;
      chartToWindowDistance.bottom = winHeight - (chartToWindowDistance.top + chartHeight);
      left = offset.left + ((chartWidth / 2) - legendWidth / 2);
      if (left < 0)
        left = 0;
      if (left + legendWidth > winWidth) {
        left = left - ((left + legendWidth + 20) - winWidth);
      }
      if (chartToWindowDistance.bottom > chartToWindowDistance.top) {
        top = chartToWindowDistance.top + chartHeight + buffer;
        if (legendHeight > chartToWindowDistance.bottom) {
          bottomHeight = chartToWindowDistance.bottom - (buffer + 20);
        }
      } else {
        top = chartToWindowDistance.top - (legendHeight + buffer);
        if (top < 0) {
          top = 0;
          bottomHeight = chartToWindowDistance.top - buffer;
        }
      }
      bottomHeight && $legendContainer.height(bottomHeight);
      $legendContainer.css({top: winScrollTop + top,left: left});
    }});
    Plugin.register('legend', Legend);
    return Legend;
  });
  Riflebird.register('Plugin.Dot', ['Plugin'], function(Plugin) {
    var accessor;
    accessor = Riflebird.Utils.accessor;
    var Dot = Plugin.extend({ready: function() {
      console.log('dot ready');
      var self = this, chart, metaData;
      chart = self.chart;
      var layer = chart.getOverlayLayer(), context = layer.canvas(), radius = 4 || self.radius(), border = 1 || self.border(), x = 0, y = 0, results = [], resultsLength, p, i, colorStringConstructor = ["rgba(", 0, ",", 0, ",", 0, ",0.4)"];
      var drawDot = function() {
        var pixels;
        var colorSplit;
        layer.clear();
        for (i = 0; i < resultsLength; i += 1) {
          pixel = results[i];
          if (!pixel) {
            continue;
          }
          colorSplit = metaData[i].color;
          colorStringConstructor[1] = colorSplit.r;
          colorStringConstructor[3] = colorSplit.g;
          colorStringConstructor[5] = colorSplit.b;
          context.strokeStyle = colorSplit.hex;
          context.fillStyle = colorStringConstructor.join("");
          context.lineWidth = border;
          context.beginPath();
          context.arc(x, pixel, radius, 0, Math.PI * 2, false);
          context.stroke();
          context.fill();
          context.closePath();
        }
        ;
      }
      self.listenTo(Riflebird.EVENTS.DRAW, function() {
        metaData = chart.metaData();
      });
      self.listenTo(Riflebird.EVENTS.HOVER, function(ix, iy, iresults) {
        if (self._freeze || !iresults)
          return;
        y = iy;
        results = iresults.y;
        x = iresults.x;
        resultsLength = results.length;
        requestAnimationFrame(drawDot);
      });
      self.listenTo(Riflebird.EVENTS.CLICK, function() {
        self._freeze = true;
      });
      self.listenTo(Riflebird.EVENTS.ENTER, function() {
        self._freeze = false;
      });
      self.listenTo(Riflebird.EVENTS.LEAVE, function() {
        if (!self._freeze)
          return;
        requestAnimationFrame(drawDot);
      });
    },freeze: accessor("_freeze", false)});
    Plugin.register('dot', Dot);
    return Dot;
  });
  Riflebird.register('Plugin.Axis', ['Plugin', 'Layer'], function(Plugin, Layer) {
    'use strict'
    var SELECTORS, TEMPLATES, r, accessor;
    SELECTORS = {xaxis: '.xaxis',yaxis: '.yaxis'};
    TEMPLATES = {axisContainer: '<div class="rb-axis-container"></div>',xaxis: '<div class="xaxis"></div>',yaxis: '<div class="yaxis"></div>',xTick: '<div style="text-align: center"></div>',yTick: '<div></div>',clearDiv: '<div style="clear:both;"></div>'};
    accessor = Riflebird.Utils.accessor;
    var Axis = Plugin.extend();
    var AxisProto = Axis.prototype;
    AxisProto.initialize = function(opts) {
      console.log('init axis');
      var self = this;
      var $bgLayer;
      self.model = self.chart.model;
      self._xAxis;
      self._yAxis;
      self._border;
      self._gridLines;
      self._background;
      self._lineWidth;
      self._xTicks;
      self._yTicks;
      self._color;
      self._xFormatter;
      $bgLayer = $('<canvas></canvas>');
      self.chart.$container.prepend($bgLayer);
      self.$container = $(TEMPLATES.axisContainer);
      self._layer = Layer.getLayer($bgLayer, self.model);
      self._layer.$el.attr('width', self.model.width());
      self._layer.$el.attr('height', self.model.height());
      self.chart.$container.after(self.$container);
      self.listenTo(Riflebird.EVENTS.DRAW, function() {
        self.render();
      });
    }, AxisProto.xAxis = accessor("_xAxis", true);
    AxisProto.yAxis = accessor("_yAxis", true);
    AxisProto.border = accessor("_border", true);
    AxisProto.gridLines = accessor("_gridLines", true);
    AxisProto.background = accessor("_background", true);
    AxisProto.lineWidth = accessor("_lineWidth", 1);
    AxisProto.xTicks = accessor("_xTicks", 5);
    AxisProto.yTicks = accessor("_yTicks", 4);
    AxisProto.color = accessor("_color", "#dadada");
    AxisProto.xFormatter = accessor("_xFormatter", function(d) {
      var time = moment.unix(d);
      return time.format("HH:mm <br />MMM DD<br />") + moment(time).utc().format("HH:mm[Z]");
    });
    AxisProto.yFormatter = accessor("_yFormatter", function(d) {
      return numeral(d).format('0.[0000] a');
    });
    AxisProto.render = function() {
      var self = this;
      self._layer.clear();
      if (self.xAxis() || self.gridLines()) {
        self.renderXAxis();
      }
      if (self.yAxis() || self.gridLines()) {
        self.renderYAxis();
      }
      return self;
    };
    AxisProto.renderXAxis = function() {
      var self = this;
      var minX, maxX, step, $xaxisEl, formatter, values, tick, label, pixelX, i, tempMin, timestamp, xTimeScale, xScale, xTicks, numXTicks;
      minX = self.model.minX();
      maxX = self.model.maxX();
      xScale = self.model.xScale();
      xTimeScale = d3.time.scale().domain([moment.unix(minX).toDate(), moment.unix(maxX).toDate()]);
      xTicks = xTimeScale.ticks(self.xTicks());
      numXTicks = xTicks.length;
      $xaxisEl = self.$container.find(SELECTORS.xaxis);
      formatter = self.xFormatter();
      values = [];
      if (!$xaxisEl.length) {
        $xaxisEl = $(TEMPLATES.xaxis);
        self.$container.append($xaxisEl);
      } else {
        $xaxisEl.html("");
      }
      var lastSize = 0;
      var lastTickX = 0;
      for (i = 0; i < numXTicks; i += 1) {
        timestamp = moment(xTicks[i]).unix();
        pixelX = xScale(timestamp);
        label = formatter(timestamp);
        tick = $(TEMPLATES.xTick).append(label);
        if (pixelX >= lastTickX + lastSize + 10) {
          $xaxisEl.append(tick);
          tick.css({'position': 'absolute'});
          lastSize = tick.width();
          tick.css({'left': (pixelX === 0 ? pixelX : pixelX - lastSize / 2)});
          if (i === minX) {
            tick.css({'text-align': 'left'});
          } else if (i === numXTicks) {
            tick.css({'text-align': 'right'});
          }
          lastTickX = pixelX;
        }
        values.push(pixelX);
      }
      if (self.gridLines()) {
        self.drawVerticalGrid(values);
      }
      return self;
    };
    AxisProto.drawVerticalGrid = function(values) {
      var self = this, canvas = self._layer.canvas(), height = self.model.height(), width = self.model.width(), i, rgb = d3.rgb(self.color()), bg = self.background();
      canvas.strokeStyle = self.color();
      canvas.lineWidth = self.lineWidth();
      canvas.beginPath();
      canvas.moveTo(0, 0);
      canvas.lineTo(0, height);
      for (i = 0; i < values.length; i++) {
        canvas.moveTo(values[i], 0);
        canvas.lineTo(values[i], height);
      }
      canvas.moveTo(width, 0);
      canvas.lineTo(width, height);
      canvas.stroke();
      canvas.closePath();
    };
    AxisProto.renderYAxis = function() {
      var self = this, values = [], y, step, i, minY, maxY, formatter, $yaxisEl, val, yTicks, numYTicks, yScale;
      minY = self.model.minY();
      maxY = self.model.maxY();
      formatter = self.yFormatter();
      $yaxisEl = self.$container.find(SELECTORS.yaxis);
      yScale = self.model.yScale();
      yTicks = yScale.ticks(self.yTicks());
      numYTicks = yTicks.length;
      if (!$yaxisEl.length) {
        $yaxisEl = $(TEMPLATES.yaxis), self.$container.prepend($yaxisEl);
      } else {
        $yaxisEl.html("");
      }
      function createTick(value, y, idx) {
        var label = formatter(value), tick = $(TEMPLATES.yTick).html(label);
        tick.css({top: y,position: 'absolute'});
        if (idx === 0) {
          tick.addClass('tick-min');
        } else if (idx === numYTicks - 1) {
          tick.addClass('tick-max');
        }
        return tick;
      }
      for (i = 0; i < numYTicks; i += 1) {
        y = yScale(yTicks[i]);
        values.push(y);
        $yaxisEl.append(createTick(yTicks[i], y, i));
      }
      $yaxisEl.append(TEMPLATES.clearDiv);
      if (self.gridLines()) {
        self.drawHorizontalGrid(values);
      }
      return self;
    };
    AxisProto.drawHorizontalGrid = function(values) {
      var self = this, i, canvas = self._layer.canvas(), width = self.chart.width(), height = self.chart.height();
      canvas.strokeStyle = self.color();
      canvas.lineWidth = self.lineWidth();
      canvas.beginPath();
      canvas.moveTo(0, 0);
      canvas.lineTo(width, 0);
      for (i = 0; i < values.length; i++) {
        canvas.moveTo(0, values[i]);
        canvas.lineTo(width, values[i]);
      }
      ;
      canvas.moveTo(0, height);
      canvas.lineTo(width, height);
      canvas.stroke();
      canvas.closePath();
    };
    Plugin.register('axis', Axis);
    return Axis;
  });
  Riflebird.register('Plugin.Tracker', ['Plugin'], function(Plugin) {
    'use strict'
    var Tracker = Plugin.extend({chartList: Riflebird.Utils.accessor("_chartList"),initialize: function(opts) {
      console.log('init tracker plugin');
      var self = this;
    },enable: function() {
      var self = this;
      var chart, overlayLayer, context, width, height, x, xScale;
      chart = self.chart;
      overlayLayer = chart.getOverlayLayer();
      context = overlayLayer.canvas();
      height = chart.height();
      x = 0;
      var drawLine = function() {
        var color = '#8c1000';
        context.strokeStyle = color;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.closePath();
        context.stroke();
      }
      self.listenTo(Riflebird.EVENTS.HOVER, function(ix, iy, results) {
        var timestamp;
        x = ix;
        requestAnimationFrame(drawLine);
        timestamp = results.xVal;
        self._chartList && self._chartList.forEach(function(chart) {
          chart.tracker().showTracker(timestamp);
        });
      });
      self.listenTo(Riflebird.EVENTS.LEAVE, function() {
        self._chartList && self._chartList.forEach(function(chart) {
          chart.getOverlayLayer().clear();
        });
      });
    },disable: function() {
      var self = this;
      self.stopListening();
    },showTracker: function(timestamp) {
      var self = this;
      var chart, layer, height, xScale, x, context, color;
      chart = self.chart;
      layer = chart.getOverlayLayer();
      height = chart.height();
      xScale = chart.model.xScale();
      if (xScale) {
        x = xScale(timestamp);
        context = layer.canvas();
        layer.clear();
        context.strokeStyle = "#000";
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.closePath();
        context.stroke();
      }
    }});
    Plugin.register('tracker', Tracker);
    return Tracker;
  });
  Riflebird.register('Plugin.Marker', ['Plugin'], function(Plugin) {
    var TEMPLATE = {"MARKER": "<div class='rb-marker-info' style='position: absolute;'></div>"}
    var TYPES = {CRITICAL: "rgba(255,0,0,0.2)",CUSTOM: "rgba(110,148,240,0.2)",NORMAL: "rgba(0,150,0,0.2)",WARNING: "rgba(255,125,0,0.2)",ERROR: "rgba(125,125,125,0.2)"}
    var TYPES_SELECTED = {CRITICAL: "rgba(255,0,0,0.3)",CUSTOM: "rgba(110,148,240,0.3)",NORMAL: "rgba(0,150,0,0.3)",WARNING: "rgba(255,125,0,0.3)",ERROR: "rgba(125,125,125,0.3)"}
    var TYPES_CLICKED = {CRITICAL: "rgba(255,0,0,0.5)",CUSTOM: "rgba(110,148,240,0.5)",NORMAL: "rgba(0,150,0,0.5)",WARNING: "rgba(255,125,0,0.5)",ERROR: "rgba(125,125,125,0.5)"}
    var TYPES_HEIGHT_OFFSET = {CRITICAL: 2,CUSTOM: 1,WARNING: 2,ERROR: 2}
    var TYPES_HEIGHT_HOVER_OFFSET = {CRITICAL: 10,CUSTOM: 18,WARNING: 10,ERROR: 10}
    var Markers = Plugin.extend({chartList: Riflebird.Utils.accessor("_chartList"),initialize: function() {
      var self = this, chart = self.chart;
      self.markers = [];
      chart.on(Riflebird.EVENTS.DRAW, function(e) {
        self.draw();
      });
    },getTemplate: function() {
      return "<span class='rb-alert-header' style='background:{{background}}'>" + "<span class='rb-alert-name'>" + "<span class='status-label-no-count {{type}}-label has-tooltip' data-toggle='tooltip' title='{{type}} state!'><i class='{{alert_icon}} icon-white'></i></span>" + "{{#zone}}<span class='zone-annotation {{zone}}-annotation' data-toggle='tooltip' title='This alert is in {{zone}}'></span>{{/zone}} {{alert_name}} ({{updated_at}})</span>" + "{{#link}}<span class='rb-alert-link'><a href='{{link}}' target='_new'><i class='icon-circle-arrow-right'></i></a></span>{{/link}}" + "</span>" + "<div class='rb-content-header'>{{content_header}}" + "<div class='rb-alert-content'>" + "{{#rules}}<span class='rb-alert-item'>{{.}}</span>" + "{{/rules}}" + "</div></div>";
    },draw: function() {
      var self = this;
      var chart = self.chart;
      var xScale, $container, model;
      model = chart.model;
      chart.$el.find('.rb-marker-container').remove();
      $container = $('<div class="rb-marker-container"></div>');
      chart.$container.after($container);
      xScale = chart.model.xScale();
      self.markers = _.sortBy(self.markers, function(marker) {
        return marker.start - marker.end;
      });
      var $markerInfo = $(TEMPLATE.MARKER).css({top: chart.height() + 40,left: 0,opacity: 1.0,width: chart.width(),backgroundColor: 'white','border-radius': '4px','font-size': '11px','z-index': 1,'padding': '2px','border-right': '1px solid #bbb','border-left': '1px solid #bbb','border-top': '1px solid #bbb','border-bottom': '1px solid #bbb','box-shadow': '0px 0px 4px #ccc'});
      self.markers.forEach(function(markerObj, idx) {
        if (markerObj.end < model.minX())
          return;
        var type = markerObj.type;
        var fixedStart = Math.max(model.minX(), markerObj.start), fixedEnd = Math.min(model.maxX(), markerObj.end);
        var height = Math.min(chart.model.height() / self.markers.length, 25);
        var css = {top: -24 + (8) * TYPES_HEIGHT_OFFSET[type],left: xScale(fixedStart) - 5,height: 5,backgroundColor: TYPES[type],'white-space': 'nowrap',overflow: 'hidden','text-overflow': 'ellipsis','font-size': '10px','border-right': '1px solid ' + TYPES_SELECTED[type],'border-left': '1px solid ' + TYPES_SELECTED[type],'border-top': '1px dotted ' + TYPES_SELECTED[type],'border-bottom': '1px dotted ' + TYPES_SELECTED[type]}
        css.width = xScale(markerObj.end) - xScale(markerObj.start);
        var $marker = $(TEMPLATE.MARKER).css(css);
        $marker.data('bgc', TYPES[type]);
        $marker.attr('data-type', type);
        $marker.attr('data-time', markerObj.start);
        $marker.attr('data-id', markerObj.id);
        $marker.addClass('rb-marker');
        $container.append($marker);
        $marker.hover(function() {
          if ($container.find('.clicked').length > 0)
            return;
          self.showMarkerInfo($marker.attr("data-time"), $marker.attr("data-type"), $markerInfo)
          window.marker = $marker;
          $marker.css({opacity: 1,height: chart.model.height() + TYPES_HEIGHT_HOVER_OFFSET[type],top: -24 + (8) * TYPES_HEIGHT_OFFSET[type],'background-color': TYPES_SELECTED[type]});
          $($marker.find('.rb-alert-header')).css('background-color', TYPES_SELECTED[type]);
        }, function() {
          if ($container.find('.clicked').length > 0)
            return;
          window.marker = $marker;
          if (!$marker.hasClass('clicked')) {
            $markerInfo.detach();
          }
          $marker.css({opacity: 1,top: -24 + (8) * TYPES_HEIGHT_OFFSET[type],height: 5,'background-color': TYPES[type]});
        });
        $marker.click(function() {
          if ($(".clicked").length > 0 && !$marker.hasClass('clicked'))
            return;
          var unbindMarkerInfo = function() {
            $marker.removeClass('clicked');
            $markerInfo.detach();
            $marker.css({opacity: 1,top: -24 + (8) * TYPES_HEIGHT_OFFSET[type],height: 5,'background-color': TYPES[type]});
          }
          var click = false;
          if (!$marker.hasClass('clicked')) {
            click = true;
          }
          if (click) {
            $marker.addClass('clicked');
            $marker.css('background-color', TYPES_CLICKED[type]);
            $(document).keyup(function(e) {
              if (e.keyCode == 27) {
                unbindMarkerInfo();
              }
            });
          } else {
            unbindMarkerInfo();
          }
        });
      });
    },showMarkerInfo: function(time, type, markerInfo) {
      var $markerInfo = markerInfo;
      var self = this;
      var chart = self.chart;
      var $container = chart.$el.find(".rb-marker-container");
      if (type == 'CUSTOM') {
        var markersAtTime = _.filter(self.markers, function(marker) {
          return (marker.type == 'CUSTOM') && (Math.abs(marker.start - parseInt(time)) <= (60 * 10));
        });
      } else {
        var markersAtTime = _.sortBy(_.filter(self.markers, function(marker) {
          return (marker.type != 'CUSTOM') && Math.abs(marker.start - parseInt(time)) <= 120;
        }), function(marker) {
          if (marker.type == type) {
            return 0;
          } else if (marker.type == "CRITICAL") {
            return 1;
          } else if (marker.type == "WARNING") {
            return 2;
          } else {
            return 3;
          }
        });
      }
      var html = ""
      markersAtTime.forEach(function(markerObj, idx) {
        var alert_icon;
        switch (markerObj.type) {
          case 'CRITICAL':
            alert_icon = 'icon-remove-sign';
            break;
          case 'WARNING':
            alert_icon = 'icon-exclamation-sign';
            break;
          case 'ERROR':
            alert_icon = 'icon-question-sign';
            break;
          case 'CUSTOM':
            alert_icon = 'icon-info-sign';
            break;
        }
        if (markerObj.type == 'CUSTOM') {
          var link = markerObj.link;
        } else {
          var link = "https://observe.twitter.biz/alerts/" + markerObj.alert_name + "?zone=" + markerObj.zone + "#!state_history&start_date=" + markerObj.start + "&end_date=" + markerObj.end;
        }
        html += Mustache.render(self.getTemplate(), {updated_at: moment.unix(markerObj.start).format("HH:mm:ss") + " - " + moment.unix(markerObj.end).format("HH:mm:ss"),alert_name: markerObj.alert_name,alert_icon: alert_icon,zone: markerObj.zone,content_header: (markerObj.rules.length > 0) ? '+ ' + markerObj.rules.length + ' rules' : '',link: link,background: TYPES_SELECTED[markerObj.type],rules: markerObj.rules,type: markerObj.type});
      });
      $markerInfo.html(html);
      $markerInfo.find('.zone-annotation').tooltip();
      $container.append($markerInfo);
      $(".rb-content-header").hover(function() {
        $(this).find('.rb-alert-content').show();
      }, function() {
        $(this).find('.rb-alert-content').hide();
      });
    },ready: function() {
    },add: function(markerObj) {
      var self = this;
      self.markers.push(markerObj);
    },clear: function() {
      var self = this;
      self.chart.$container.siblings(".rb-marker-container").remove();
      self.markers = [];
    }});
    function createMarker(start, end, type, msg) {
      if (start === null)
        return null;
      if (type === null)
        type = 'normal';
      if (msg === null)
        msg = '';
      return {start: start,end: end,type: type,msg: msg};
    }
    Plugin.register('marker', Markers);
    return Markers;
  });
  Riflebird.register('Plugin.Tools', ['Plugin'], function(Plugin) {
    'use strict'
    var accessor, hexToRgb, color;
    accessor = Riflebird.Utils.accessor;
    hexToRgb = Riflebird.Utils.hexToRgb;
    color = Riflebird.Utils.color;
    function wiggle(data) {
      var x = data.x, m = x.length, y = data.y, n = y.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i)
          s1 += y[i][j];
        for (i = 0, s2 = 0, dx = x[j] - x[j - 1]; i < n; ++i) {
          for (k = 0, s3 = (y[i][j] - y[i][j - 1]) / (2 * dx); k < i; ++k) {
            s3 += (y[k][j] - y[k][j - 1]) / dx;
          }
          s2 += s3 * y[i][j];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0)
          o0 = o;
      }
      for (j = 0; j < m; ++j)
        y0[j] -= o0;
      return y0;
    }
    function silhouette(data) {
      var x = data.x, y = data.y, n = y.length, m = x.length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) {
          if (y[i][j])
            o += y[i][j];
        }
        if (o > max)
          max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    }
    function zero(data) {
      var x = data.x, j = -1, m = x.length, y0 = [];
      while (++j < m)
        y0[j] = 0;
      return y0;
    }
    var Tools = Plugin.extend({initialize: function() {
      var self = this;
      var chart, sampler;
      chart = self.chart;
      self._log = false;
      self._stack = false;
      self.listenTo(Riflebird.EVENTS.SAMPLE, function(sampledData, numSeries, numSamples) {
        var sampledData;
        chart.renderer().stack(self._stack);
        if (self._stack === true)
          chart.minY(0);
        sampledData = $.extend(true, {}, sampledData);
        if (self._log === true) {
          sampledData = self.doLog(sampledData, numSeries, numSamples);
          chart.sampledData(sampledData);
        }
        if (self._stack === true) {
          sampledData = self.doStack(sampledData, numSeries, numSamples);
          chart.sampledData(sampledData);
        }
      });
    },stack: accessor('_stack', false, function(val) {
      this.draw();
    }),log: accessor('_log', false, function(val) {
      this.draw();
    }),ready: function() {
      var self = this;
      self.listenTo(Riflebird.EVENTS.ENTER, function() {
        var $legend, $meta;
      });
    },draw: function() {
      var self = this;
      if (self.chart.isReady()) {
        self.chart.minY(undefined);
        self.chart.maxY(undefined);
        self.chart.draw();
      }
    },doStack: function(sampledData, numSeries, numSamples) {
      var self = this;
      var stack, i, j, o, tempSampledData, data;
      tempSampledData = $.extend(true, {}, sampledData);
      data = [];
      stack = zero(tempSampledData);
      for (j = 0; j < numSamples; j += 1) {
        o = stack[j];
        sampledData.y[0][j] += o;
        for (i = 1; i < numSeries; i += 1) {
          if (!isNaN(tempSampledData.y[i - 1][j])) {
            o = o + tempSampledData.y[i - 1][j];
          }
          sampledData.y[i][j] += o;
        }
      }
      return sampledData;
    },doLog: function(sampledData, numSeries, numPoints) {
      var self = this;
      var i, j, val;
      for (i = 0; i < numSeries; i += 1) {
        for (j = 0; j < numPoints; j += 1) {
          val = Math.log(sampledData.y[i][j]);
          if (isFinite(val)) {
            sampledData.y[i][j] = val;
          } else {
            sampledData.y[i][j] = undefined;
          }
        }
      }
      return sampledData;
    }});
    Plugin.register('tools', Tools);
    return Tools;
  });
  Riflebird.register('Plugin.YAxis', ['Plugin'], function(Plugin) {
    var YAxis = Plugin.extend({minY: function(minY) {
      var self = this;
      self.chart.model.minY(minY);
    },maxY: function(maxY) {
      var self = this;
      self.chart.model.maxY(maxY);
    },reset: function() {
      var self = this;
      self.chart.model.minY(undefined);
      self.chart.model.maxY(undefined);
      self.draw();
    },draw: function() {
      if (this.chart.isReady()) {
        this.chart.draw();
      }
    }});
    Plugin.register('yaxis', YAxis);
    return YAxis;
  });
  (function(exports) {
    'use strict'
    var CUCKOOURL = function(dc) {
      return 'https://cuckoo.' + dc + '.twitter.com/query';
    };
    var QueryChunker = function(opts) {
      var granularity = opts.granularity, dc = opts.dc, start = opts.start, end = opts.end, query = opts.query, name = opts.name;
      var self = this;
      var hoursDiff = (start - end) / 3600;
      this.chunkedResult = {};
      this.chunkSize = {};
      console.log("Query Chunkin'");
      switch (true) {
        case (hoursDiff <= 2):
          this.chunkSize = {units: 'h',amount: '1'};
          break;
        case (hoursDiff <= 6 && hoursDiff >= 0):
          this.chunkSize = {units: 'h',amount: '3'};
          break;
        case (hoursDiff <= 24):
          this.chunkSize = {units: 'h',amount: '6'};
          break;
        case (hoursDiff <= 144):
          this.chunkSize = {units: 'h',amount: '12'};
          break;
        case (hoursDiff > 144):
          this.chunkSize = {units: 'd',amount: '2'};
          break;
        default:
          this.chunkSize = {units: 'h',amount: '1'};
      }
      this._flattenChunks = function() {
        var result = [];
        var sortFunc = function(chunk) {
          return chunk[0] && chunk[0].length > 0 ? chunk[0][0] : 0;
        };
        for (var key in self.chunkedResult) {
          if (!self.chunkedResult.hasOwnProperty(key))
            return;
          var flattened = {};
          var chunks = self.chunkedResult[key];
          chunks = _.sortBy(chunks, sortFunc);
          flattened.data = _.flatten(chunks, true);
          flattened.meta = {label: key};
          result.push(flattened);
        }
        return result;
      };
      this._onQuerySuccess = function(result) {
        result.timeseries.forEach(function(ts) {
          if (!self.chunkedResult[ts.label]) {
            self.chunkedResult[ts.label] = [];
          }
          self.chunkedResult[ts.label].push(ts.data);
        });
      };
      this._onQueryError = function(result, status, err) {
        throw new Error("Query chunker error - " + err);
      };
      this._buildQueries = function(timeRanges) {
        return timeRanges.map(function(range) {
          return {granularity: granularity,start: range.start,end: range.end,query: query,name: name,client_source: 'viz-2'};
        });
      };
      this._chunkTimeRanges = function(end, start) {
        var ranges = [];
        var endTick = end;
        var startTick = moment.unix(end).startOf(self.chunkSize.units).unix();
        ranges.push({start: startTick,end: endTick});
        while (startTick > start) {
          endTick = startTick - 1;
          startTick = moment.unix(startTick).subtract(self.chunkSize.units, self.chunkSize.amount).unix();
          ranges.push({start: startTick,end: endTick});
        }
        return ranges;
      };
      this.execute = function(callback) {
        var timeRanges = self._chunkTimeRanges(start, end);
        var queries = self._buildQueries(timeRanges);
        var completed = 0;
        queries.forEach(function(query) {
          $.ajax({url: CUCKOOURL(dc),dataType: 'json',type: 'POST',data: {granularity: query.granularity,start: query.start,end: query.end,query: query.query,name: query.name,client_source: query.client_source},success: self._onQuerySuccess,error: self._onQueryError,complete: function(xhr, status) {
            completed++;
            if (completed == queries.length) {
              var queryResult = self._flattenChunks();
              var err = null;
              switch (status) {
                case "error":
                case "timeout":
                case "abort":
                case "parsererror":
                  err = xhr.responseText;
                  break;
              }
              callback(err, queryResult);
            }
          }});
        });
      };
    };
    exports.QueryChunker = QueryChunker;
  }(window));
  function test_buildQueries() {
    var q = new QueryChunker({granularity: 'm',dc: 'smf1',start: 1382733120,end: 1382725920,query: '99',name: 'test'});
    var ranges = [{start: 1382733120,end: 1382729520}, {start: 1382729520,end: 1382725920}];
    var chunks = q._buildQueries(ranges);
    if (chunks.length != 2)
      console.log("Expected to get 2 chunks but got " + chunks.length);
  }
  function test_chunkTimeRanges() {
    var q = new QueryChunker({});
    var ranges = q._chunkTimeRanges(1382733120, 1382725920);
    if (ranges.length != 3)
      console.log("Expected to get 3 ranges but got " + ranges.length);
    if (ranges[0].end != 1382733120)
      console.log("First range does not end at end");
    ranges.slice(1).forEach(function(range) {
      var startMoment = moment.unix(range.start);
      if (startMoment.minutes() !== 0 || startMoment.seconds() !== 0) {
        console.log("Start of range not on hour bound");
        console.dir(range);
      }
      var endMoment = moment.unix(range.end + 1);
      if (endMoment.minutes() !== 0 || endMoment.seconds() !== 0) {
        console.log("End of range not on hour bound");
        console.dir(range);
      }
    });
    ranges = q._chunkTimeRanges(1382733120, 1382646720);
    if (ranges.length != 25)
      console.log("Expected to get 25 ranges but got " + ranges.length);
  }
  var test_onQuerySuccess = function() {
    var mockResult = {timeseries: [{label: 'ts 1',data: [[1382975820, 100], [1382975880, 100], [1382975940, 100]]}]};
    var q = new QueryChunker({});
    q._onQuerySuccess(mockResult);
    if (!q.chunkedResult[mockResult.timeseries[0].label])
      console.log("Expected 'ts 1' timeseries to be in result");
    if (!_.isEqual(q.chunkedResult['ts 1'][0], mockResult.timeseries[0].data))
      console.log("Expected data for 'ts 1' to equal mock");
    var mockResultMulti = {timeseries: [{label: 'ts 1',data: [[1382975820, 100], [1382975880, 100], [1382975940, 100]]}, {label: 'ts 2',data: [[1382975520, 100], [1382975580, 100], [1382975640, 100]]}]};
    q = new QueryChunker({});
    q.chunkedResult['ts 1'] = [[[1382975820, 100], [1382975880, 100], [1382975940, 100]]];
    q._onQuerySuccess(mockResultMulti);
    if (!q.chunkedResult['ts 1'] || !q.chunkedResult['ts 2'])
      console.log("Expected 2 timeseries to be in result");
    if (q.chunkedResult['ts 1'].length != 2)
      console.log("Expected data to push to existing array for 'ts 1'");
  };
  var test_flattenChunks = function() {
    var mockChunks = {'ts 1': [[[1382976820, 100], [1382976880, 100], [1382976940, 100]], [[1382975820, 100], [1382975880, 100], [1382975940, 100]], [[1382977820, 100], [1382977880, 100], [1382977940, 100]]],'ts 2': [[[1382977820, 100], [1382977880, 100], [1382977940, 100]]]};
    var q = new QueryChunker({});
    q.chunkedResult = mockChunks;
    var r = q._flattenChunks();
    if (r.length != 2)
      console.log("Expected result to have 2 timeseries");
    if (r[0].data.length != 9)
      console.log("Expected final length to be 9");
    if (r[0].data[0][0] != 1382975820)
      console.log("Smallest time value is not first in result");
    if (r[0].data[8][0] != 1382977940)
      console.log("Largest time value is not last in result");
  };
  (function(exports) {
    if (!Riflebird)
      throw new Error('Riflebird Needs to be Included;');
    Riflebird.load('Plugin.Dot');
    Riflebird.load('Plugin.Axis');
    Riflebird.load('Plugin.Legend');
    Riflebird.load('Plugin.YAxis');
    Riflebird.load('Plugin.Tools');
    Riflebird.load('Plugin.Events');
    Riflebird.load('Plugin.Marker');
    Riflebird.load('Plugin.Tracker');
    Riflebird.load('Plugin.Marker');
    if (!Riflebird.Plugin.Dot)
      throw new Error('Dot Plugin is Missing;');
    if (!Riflebird.Plugin.Axis)
      throw new Error('Axis Plugin is Missing;');
    if (!Riflebird.Plugin.Legend)
      throw new Error('Legend Plugin is Missing;');
    if (!Riflebird.Plugin.YAxis)
      throw new Error('YAxis Plugin is Missing;');
    if (!Riflebird.Plugin.Tools)
      throw new Error('Tools Plugin is Missing;');
    if (!Riflebird.Plugin.Tracker)
      throw new Error('Tracker Plugin is Missing;');
    if (!Riflebird.Plugin.Marker)
      throw new Error('Marker Plugin is Missing;');
    if (!Riflebird.Plugin.Events)
      throw new Error('Events Plugin is Missing;');
    if (!Riflebird.Plugin.Marker)
      throw new Error('Marker Plugin is Missing;');
    var CUCKOOURL = function(dc) {
      return 'https://cuckoo.' + dc + '.twitter.com/query';
    }
    function ed(str) {
      return unescape(decodeURIComponent(encodeURIComponent(str)));
    }
    var GRANULARITIES = {'1': 's','60': 'm','3600': 'h','86400': 'd'};
    var GRANULARITY_FORMAT = {'1': 'YYYY-MM-DD HH:mm:ss','60': 'YYYY-MM-DD HH:mm','3600': 'YYYY-MM-DD HH','86400': 'YYYY-MM-DD'}
    var Cuckoo = function(sel) {
      var self = this;
      var $el = $(sel);
      self._queries;
      self.chart = new Riflebird.Chart($el).x(function(d) {
        return d[0];
      }).y(function(d) {
        return d[1];
      }).values(function(data) {
        return data.data;
      }).width($el.width()).height(250);
      self.chart.events();
      self.chart.axis();
    };
    var CuckooProto = Cuckoo.prototype;
    $.extend(CuckooProto, EventEmitter.prototype);
    CuckooProto.queries = Riflebird.accessor("_queries", []);
    CuckooProto.query = function(newQueries) {
      var self = this;
      var queries = [];
      newQueries.forEach(function(q) {
        q.query = ed(q.query);
        q.name = ed(q.name);
        q.dc = q.dc;
        if (q.color && q.color !== "#fff" && q.color !== "#ffffff") {
          q.color = Riflebird.Utils.hexToRgb(q.color);
        }
        queries.push(q);
      });
      self.queries(queries);
      return self;
    };
    CuckooProto.lineGraph = function() {
      var self = this
      self.chart.sampler(new Riflebird.Sampler.DataSampler).renderer(new Riflebird.Renderer.LineRenderer)
      self.chart.tools();
      self.chart.dot();
      self.chart.legend();
      self.chart.marker();
      self.chart.yaxis();
    }
    CuckooProto.drawChart = function(key) {
      var self = this;
      var chart = self.chart;
      var start, end, granularity, format, queries;
      start = self.chart.start();
      end = self.chart.end();
      granularity = self.chart.granularity();
      queries = self.queries();
      if (typeof start === 'undefined') {
        throw new Error('start date missing')
      } else {
        start = moment.unix(start);
      }
      if (typeof end === 'undefined') {
        end = moment();
      } else {
        end = moment.unix(end);
      }
      format = GRANULARITY_FORMAT[granularity];
      start = moment(start.format(format), format);
      end = moment(end.format(format), format);
      if (granularity === 86400) {
        start = start.add('h', 17);
        end = end.add('h', 17);
      }
      self.chart.start(start.unix());
      self.chart.end(end.unix() - granularity);
      self.emit('before');
      if (key) {
        self.getFromBlobStore(key).done(function(res) {
          var r = [];
          res.data.forEach(function(result, idx) {
            numSeries = result.timeseries.length;
            var meta;
            for (i = 0; i < numSeries; i += 1) {
              q = result.timeseries[i];
              meta = {};
              meta.label = q.label;
              queries[idx].color && (meta.color = queries[idx].color);
              r.push({data: q.data,meta: meta});
            }
          });
          chart.data(r).draw();
          self.emit('success');
        });
      } else if (window.chunk_queries) {
        var chunkers = [];
        queries.forEach(function(query) {
          var chunker = new QueryChunker({granularity: GRANULARITIES[self.chart.granularity()] || 'm',start: self.chart.end(),end: self.chart.start(),query: query.query,name: query.name,dc: query.dc});
          chunkers.push(chunker);
        });
        async.parallelLimit(chunkers, 1, function(err, results) {
          if (err) {
            self.emit('error', undefined, err);
          }
          chart.data(_.flatten(results, true)).draw();
          if (chart.model._empty) {
            self.emit('error', undefined, 'One or more queries returned no data');
          } else {
            self.emit('success');
          }
        });
      } else {
        self.getQuery().then(function() {
          var args = Array.prototype.slice.call(arguments, 1);
          var results = [], r = [];
          args.forEach(function(jqXhr) {
            results.push(jqXhr[0]);
          });
          results.forEach(function(result, idx) {
            numSeries = result.timeseries.length;
            if (numSeries > 3500) {
              ObsAlert.add('info', 'Only rendering the first 3500 of ' + numSeries + ' timeseries.');
              numSeries = 3500;
            }
            var meta;
            for (i = 0; i < numSeries; i += 1) {
              q = result.timeseries[i];
              meta = {};
              meta.label = q.label;
              queries[idx].color && (meta.color = queries[idx].color);
              r.push({data: q.data,meta: meta});
            }
          });
          chart.data(r).draw();
          if (chart.model._empty) {
            self.emit('error', undefined, 'One or more queries returned no data');
          } else {
            self.emit('success');
          }
        }, function(jqXhr, type, msg) {
          self.emit('error', type, jqXhr.responseText);
        });
      }
      return self;
    };
    CuckooProto.getFromBlobStore = function(key) {
      return $.get('/api/1/snapshots/1/charts/' + key);
    }
    CuckooProto.getQuery = function() {
      var self = this;
      var cuckooQueries = [];
      cuckooQueries.push({});
      self.queries().forEach(function(query) {
        cuckooQueries.push($.ajax({url: CUCKOOURL(query.dc),dataType: 'json',type: 'POST',data: {granularity: GRANULARITIES[self.chart.granularity()] || 'm',start: self.chart.start(),end: self.chart.end(),query: query.query,name: query.name,client_source: "viz-2"}}));
      });
      return $.when.apply($, cuckooQueries);
    }
    exports.CuckooChart = Cuckoo;
  }(window));
  (function() {
    var numeral, VERSION = '1.4.7', languages = {}, currentLanguage = 'en', zeroFormat = null, hasModule = (typeof module !== 'undefined' && module.exports);
    function Numeral(number) {
      this._n = number;
    }
    function toFixed(value, precision, optionals) {
      var power = Math.pow(10, precision), output;
      output = (Math.round(value * power) / power).toFixed(precision);
      if (optionals) {
        var optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
        output = output.replace(optionalsRegExp, '');
      }
      return output;
    }
    function formatNumeral(n, format) {
      var output;
      if (format.indexOf('$') > -1) {
        output = formatCurrency(n, format);
      } else if (format.indexOf('%') > -1) {
        output = formatPercentage(n, format);
      } else if (format.indexOf(':') > -1) {
        output = formatTime(n, format);
      } else {
        output = formatNumber(n, format);
      }
      return output;
    }
    function unformatNumeral(n, string) {
      if (string.indexOf(':') > -1) {
        n._n = unformatTime(string);
      } else {
        if (string === zeroFormat) {
          n._n = 0;
        } else {
          var stringOriginal = string;
          if (languages[currentLanguage].delimiters.decimal !== '.') {
            string = string.replace(/\./g, '').replace(languages[currentLanguage].delimiters.decimal, '.');
          }
          var thousandRegExp = new RegExp(languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), millionRegExp = new RegExp(languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), billionRegExp = new RegExp(languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$'), trillionRegExp = new RegExp(languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          var prefixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], bytesMultiplier = false;
          for (var power = 0; power <= prefixes.length; power++) {
            bytesMultiplier = (string.indexOf(prefixes[power]) > -1) ? Math.pow(1024, power + 1) : false;
            if (bytesMultiplier) {
              break;
            }
          }
          n._n = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * Number(((string.indexOf('(') > -1) ? '-' : '') + string.replace(/[^0-9\.-]+/g, ''));
          n._n = (bytesMultiplier) ? Math.ceil(n._n) : n._n;
        }
      }
      return n._n;
    }
    function formatCurrency(n, format) {
      var prependSymbol = (format.indexOf('$') <= 1) ? true : false;
      var space = '';
      if (format.indexOf(' $') > -1) {
        space = ' ';
        format = format.replace(' $', '');
      } else if (format.indexOf('$ ') > -1) {
        space = ' ';
        format = format.replace('$ ', '');
      } else {
        format = format.replace('$', '');
      }
      var output = formatNumeral(n, format);
      if (prependSymbol) {
        if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
          output = output.split('');
          output.splice(1, 0, languages[currentLanguage].currency.symbol + space);
          output = output.join('');
        } else {
          output = languages[currentLanguage].currency.symbol + space + output;
        }
      } else {
        if (output.indexOf(')') > -1) {
          output = output.split('');
          output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
          output = output.join('');
        } else {
          output = output + space + languages[currentLanguage].currency.symbol;
        }
      }
      return output;
    }
    function formatPercentage(n, format) {
      var space = '';
      if (format.indexOf(' %') > -1) {
        space = ' ';
        format = format.replace(' %', '');
      } else {
        format = format.replace('%', '');
      }
      n._n = n._n * 100;
      var output = formatNumeral(n, format);
      if (output.indexOf(')') > -1) {
        output = output.split('');
        output.splice(-1, 0, space + '%');
        output = output.join('');
      } else {
        output = output + space + '%';
      }
      return output;
    }
    function formatTime(n, format) {
      var hours = Math.floor(n._n / 60 / 60), minutes = Math.floor((n._n - (hours * 60 * 60)) / 60), seconds = Math.round(n._n - (hours * 60 * 60) - (minutes * 60));
      return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }
    function unformatTime(string) {
      var timeArray = string.split(':'), seconds = 0;
      if (timeArray.length === 3) {
        seconds = seconds + (Number(timeArray[0]) * 60 * 60);
        seconds = seconds + (Number(timeArray[1]) * 60);
        seconds = seconds + Number(timeArray[2]);
      } else if (timeArray.lenght === 2) {
        seconds = seconds + (Number(timeArray[0]) * 60);
        seconds = seconds + Number(timeArray[1]);
      }
      return Number(seconds);
    }
    function formatNumber(n, format) {
      var negP = false, optDec = false, abbr = '', bytes = '', ord = '', abs = Math.abs(n._n);
      if (n._n === 0 && zeroFormat !== null) {
        return zeroFormat;
      } else {
        if (format.indexOf('(') > -1) {
          negP = true;
          format = format.slice(1, -1);
        }
        if (format.indexOf('a') > -1) {
          if (format.indexOf(' a') > -1) {
            abbr = ' ';
            format = format.replace(' a', '');
          } else {
            format = format.replace('a', '');
          }
          if (abs >= Math.pow(10, 12)) {
            abbr = abbr + languages[currentLanguage].abbreviations.trillion;
            n._n = n._n / Math.pow(10, 12);
          } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
            abbr = abbr + languages[currentLanguage].abbreviations.billion;
            n._n = n._n / Math.pow(10, 9);
          } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
            abbr = abbr + languages[currentLanguage].abbreviations.million;
            n._n = n._n / Math.pow(10, 6);
          } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
            abbr = abbr + languages[currentLanguage].abbreviations.thousand;
            n._n = n._n / Math.pow(10, 3);
          }
        }
        if (format.indexOf('b') > -1) {
          if (format.indexOf(' b') > -1) {
            bytes = ' ';
            format = format.replace(' b', '');
          } else {
            format = format.replace('b', '');
          }
          var prefixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], min, max;
          for (var power = 0; power <= prefixes.length; power++) {
            min = Math.pow(1024, power);
            max = Math.pow(1024, power + 1);
            if (n._n >= min && n._n < max) {
              bytes = bytes + prefixes[power];
              if (min > 0) {
                n._n = n._n / min;
              }
              break;
            }
          }
        }
        if (format.indexOf('o') > -1) {
          if (format.indexOf(' o') > -1) {
            ord = ' ';
            format = format.replace(' o', '');
          } else {
            format = format.replace('o', '');
          }
          ord = ord + languages[currentLanguage].ordinal(n._n);
        }
        if (format.indexOf('[.]') > -1) {
          optDec = true;
          format = format.replace('[.]', '.');
        }
        var w = n._n.toString().split('.')[0], precision = format.split('.')[1], thousands = format.indexOf(','), d = '', neg = false;
        if (precision) {
          if (precision.indexOf('[') > -1) {
            precision = precision.replace(']', '');
            precision = precision.split('[');
              d = toFixed(n._n, (precision[0].length + precision[1].length), precision[1].length);
          } else {
            d = toFixed(n._n, precision.length);
          }
          w = d.split('.')[0];
          if (d.split('.')[1].length) {
            d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
          } else {
            d = '';
          }
          if (optDec && Number(d.slice(1)) === 0) {
            d = '';
          }
        } else {
          w = toFixed(n._n, null);
        }
        if (w.indexOf('-') > -1) {
          w = w.slice(1);
          neg = true;
        }
        if (thousands > -1) {
          w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
        }
        if (format.indexOf('.') === 0) {
          w = '';
        }
        return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
      }
    }
    numeral = function(input) {
      if (numeral.isNumeral(input)) {
        input = input.value();
      } else if (!Number(input)) {
        input = 0;
      }
      return new Numeral(Number(input));
    };
    numeral.version = VERSION;
    numeral.isNumeral = function(obj) {
      return obj instanceof Numeral;
    };
    numeral.language = function(key, values) {
      if (!key) {
        return currentLanguage;
      }
      if (key && !values) {
        currentLanguage = key;
      }
      if (values || !languages[key]) {
        loadLanguage(key, values);
      }
      return numeral;
    };
    numeral.language('en', {delimiters: {thousands: ',',decimal: '.'},abbreviations: {thousand: 'k',million: 'm',billion: 'b',trillion: 't'},ordinal: function(number) {
      var b = number % 10;
      return (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
    },currency: {symbol: '$'}});
    numeral.zeroFormat = function(format) {
      if (typeof (format) === 'string') {
        zeroFormat = format;
      } else {
        zeroFormat = null;
      }
    };
    function loadLanguage(key, values) {
      languages[key] = values;
    }
    numeral.fn = Numeral.prototype = {clone: function() {
      return numeral(this);
    },format: function(inputString) {
      return formatNumeral(this, inputString ? inputString : numeral.defaultFormat);
    },unformat: function(inputString) {
      return unformatNumeral(this, inputString ? inputString : numeral.defaultFormat);
    },value: function() {
      return this._n;
    },valueOf: function() {
      return this._n;
    },set: function(value) {
      this._n = Number(value);
      return this;
    },add: function(value) {
      this._n = this._n + Number(value);
      return this;
    },subtract: function(value) {
      this._n = this._n - Number(value);
      return this;
    },multiply: function(value) {
      this._n = this._n * Number(value);
      return this;
    },divide: function(value) {
      this._n = this._n / Number(value);
      return this;
    },difference: function(value) {
      var difference = this._n - Number(value);
      if (difference < 0) {
        difference = -difference;
      }
      return difference;
    }};
    if (hasModule) {
      module.exports = numeral;
    }
    if (typeof ender === 'undefined') {
      this['numeral'] = numeral;
    }
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return numeral;
      });
    }
  }).call(this);
  (function($) {
    var smartPhone = (window.orientation != undefined);
    var DateTimePicker = function(element, options) {
      this.id = dpgId++;
      this.init(element, options);
    };
    var dateToDate = function(dt) {
      if (typeof dt === 'string') {
        return new Date(dt);
      }
      return dt;
    };
    DateTimePicker.prototype = {constructor: DateTimePicker,init: function(element, options) {
      var icon;
      if (!(options.pickTime || options.pickDate))
        throw new Error('Must choose at least one picker');
      this.options = options;
      this.$element = $(element);
      this.language = options.language in dates ? options.language : 'en'
      this.pickDate = options.pickDate;
      this.pickTime = options.pickTime;
      this.isInput = this.$element.is('input');
      this.component = false;
      if (this.$element.find('.input-append') || this.$element.find('.input-prepend'))
        this.component = this.$element.find('.add-on');
      this.format = options.format;
      if (!this.format) {
        if (this.isInput)
          this.format = this.$element.data('format');
        else
          this.format = this.$element.find('input').data('format');
        if (!this.format)
          this.format = 'MM/dd/yyyy';
      }
      this._compileFormat();
      if (this.component) {
        icon = this.component.find('i');
      }
      if (this.pickTime) {
        if (icon && icon.length)
          this.timeIcon = icon.data('time-icon');
        if (!this.timeIcon)
          this.timeIcon = 'icon-time';
        icon.addClass(this.timeIcon);
      }
      if (this.pickDate) {
        if (icon && icon.length)
          this.dateIcon = icon.data('date-icon');
        if (!this.dateIcon)
          this.dateIcon = 'icon-calendar';
        icon.removeClass(this.timeIcon);
        icon.addClass(this.dateIcon);
      }
      this.widget = $(getTemplate(this.timeIcon, options.pickDate, options.pickTime, options.pick12HourFormat, options.pickSeconds, options.collapse)).appendTo('body');
      this.minViewMode = options.minViewMode || this.$element.data('date-minviewmode') || 0;
      if (typeof this.minViewMode === 'string') {
        switch (this.minViewMode) {
          case 'months':
            this.minViewMode = 1;
            break;
          case 'years':
            this.minViewMode = 2;
            break;
          default:
            this.minViewMode = 0;
            break;
        }
      }
      this.viewMode = options.viewMode || this.$element.data('date-viewmode') || 0;
      if (typeof this.viewMode === 'string') {
        switch (this.viewMode) {
          case 'months':
            this.viewMode = 1;
            break;
          case 'years':
            this.viewMode = 2;
            break;
          default:
            this.viewMode = 0;
            break;
        }
      }
      this.startViewMode = this.viewMode;
      this.weekStart = options.weekStart || this.$element.data('date-weekstart') || 0;
      this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
      this.setStartDate(options.startDate || this.$element.data('date-startdate'));
      this.setEndDate(options.endDate || this.$element.data('date-enddate'));
      this.fillDow();
      this.fillMonths();
      this.fillHours();
      this.fillMinutes();
      this.fillSeconds();
      this.update();
      this.showMode();
      this._attachDatePickerEvents();
    },show: function(e) {
      this.widget.show();
      this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight();
      this.place();
      this.$element.trigger({type: 'show',date: this._date});
      this._attachDatePickerGlobalEvents();
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
    },disable: function() {
      this.$element.find('input').prop('disabled', true);
      this._detachDatePickerEvents();
    },enable: function() {
      this.$element.find('input').prop('disabled', false);
      this._attachDatePickerEvents();
    },hide: function() {
      var collapse = this.widget.find('.collapse')
      for (var i = 0; i < collapse.length; i++) {
        var collapseData = collapse.eq(i).data('collapse');
        if (collapseData && collapseData.transitioning)
          return;
      }
      this.widget.hide();
      this.viewMode = this.startViewMode;
      this.showMode();
      this.set();
      this.$element.trigger({type: 'hide',date: this._date});
      this._detachDatePickerGlobalEvents();
    },set: function() {
      var formatted = '';
      if (!this._unset)
        formatted = this.formatDate(this._date);
      if (!this.isInput) {
        if (this.component) {
          var input = this.$element.find('input');
          input.val(formatted);
          this._resetMaskPos(input);
        }
        this.$element.data('date', formatted);
      } else {
        this.$element.val(formatted);
        this._resetMaskPos(this.$element);
      }
    },setValue: function(newDate) {
      if (!newDate) {
        this._unset = true;
      } else {
        this._unset = false;
      }
      if (typeof newDate === 'string') {
        this._date = this.parseDate(newDate);
      } else if (newDate) {
        this._date = new Date(newDate);
      }
      this.set();
      this.viewDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0);
      this.fillDate();
      this.fillTime();
    },getDate: function() {
      if (this._unset)
        return null;
      return new Date(this._date.valueOf());
    },setDate: function(date) {
      if (!date)
        this.setValue(null);
      else
        this.setValue(date.valueOf());
    },setStartDate: function(date) {
      if (date instanceof Date) {
        this.startDate = date;
      } else if (typeof date === 'string') {
        this.startDate = new UTCDate(date);
        if (!this.startDate.getUTCFullYear()) {
          this.startDate = -Infinity;
        }
      } else {
        this.startDate = -Infinity;
      }
      if (this.viewDate) {
        this.update();
      }
    },setEndDate: function(date) {
      if (date instanceof Date) {
        this.endDate = date;
      } else if (typeof date === 'string') {
        this.endDate = new UTCDate(date);
        if (!this.endDate.getUTCFullYear()) {
          this.endDate = Infinity;
        }
      } else {
        this.endDate = Infinity;
      }
      if (this.viewDate) {
        this.update();
      }
    },getLocalDate: function() {
      if (this._unset)
        return null;
      var d = this._date;
      return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
    },setLocalDate: function(localDate) {
      if (!localDate)
        this.setValue(null);
      else
        this.setValue(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds(), localDate.getMilliseconds()));
    },place: function() {
      var position = 'absolute';
      var offset = this.component ? this.component.offset() : this.$element.offset();
      this.width = this.component ? this.component.outerWidth() : this.$element.outerWidth();
      offset.top = offset.top + this.height;
      var $window = $(window);
      if (this.options.width != undefined) {
        this.widget.width(this.options.width);
      }
      if (this.options.orientation == 'left') {
        this.widget.addClass('left-oriented');
        offset.left = offset.left - this.widget.width() + 20;
      }
      if (this._isInFixed()) {
        position = 'fixed';
        offset.top -= $window.scrollTop();
        offset.left -= $window.scrollLeft();
      }
      if ($window.width() < offset.left + this.widget.outerWidth()) {
        offset.right = $window.width() - offset.left - this.width;
        offset.left = 'auto';
        this.widget.addClass('pull-right');
      } else {
        offset.right = 'auto';
        this.widget.removeClass('pull-right');
      }
      this.widget.css({position: position,top: offset.top,left: offset.left,right: offset.right});
    },notifyChange: function() {
      this.$element.trigger({type: 'changeDate',date: this.getDate(),localDate: this.getLocalDate()});
    },update: function(newDate) {
      var dateStr = newDate;
      if (!dateStr) {
        if (this.isInput) {
          dateStr = this.$element.val();
        } else {
          dateStr = this.$element.find('input').val();
        }
        if (dateStr) {
          this._date = this.parseDate(dateStr);
        }
        if (!this._date) {
          var tmp = new Date()
          this._date = UTCDate(tmp.getFullYear(), tmp.getMonth(), tmp.getDate(), tmp.getHours(), tmp.getMinutes(), tmp.getSeconds(), tmp.getMilliseconds())
        }
      }
      this.viewDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0);
      this.fillDate();
      this.fillTime();
    },fillDow: function() {
      var dowCnt = this.weekStart;
      var html = $('<tr>');
      while (dowCnt < this.weekStart + 7) {
        html.append('<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>');
      }
      this.widget.find('.datepicker-days thead').append(html);
    },fillMonths: function() {
      var html = '';
      var i = 0
      while (i < 12) {
        html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
      }
      this.widget.find('.datepicker-months td').append(html);
    },fillDate: function() {
      var year = this.viewDate.getUTCFullYear();
      var month = this.viewDate.getUTCMonth();
      var currentDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), this._date.getUTCDate(), 0, 0, 0, 0);
      var startYear = typeof this.startDate === 'object' ? this.startDate.getUTCFullYear() : -Infinity;
      var startMonth = typeof this.startDate === 'object' ? this.startDate.getUTCMonth() : -1;
      var endYear = typeof this.endDate === 'object' ? this.endDate.getUTCFullYear() : Infinity;
      var endMonth = typeof this.endDate === 'object' ? this.endDate.getUTCMonth() : 12;
      this.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
      this.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
      this.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');
      this.widget.find('.datepicker-days th:eq(1)').text(dates[this.language].months[month] + ' ' + year);
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0);
      var day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      if ((year == startYear && month <= startMonth) || year < startYear) {
        this.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
      }
      if ((year == endYear && month >= endMonth) || year > endYear) {
        this.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
      }
      var nextMonth = new Date(prevMonth.valueOf());
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var row;
      var clsName;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() === this.weekStart) {
          row = $('<tr>');
          html.push(row);
        }
        clsName = '';
        if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
          clsName += ' old';
        } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
          clsName += ' new';
        }
        if (prevMonth.valueOf() === currentDate.valueOf()) {
          clsName += ' active';
        }
        if ((prevMonth.valueOf() + 86400000) <= this.startDate) {
          clsName += ' disabled';
        }
        if (prevMonth.valueOf() > this.endDate) {
          clsName += ' disabled';
        }
        row.append('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.widget.find('.datepicker-days tbody').empty().append(html);
      var currentYear = this._date.getUTCFullYear();
      var months = this.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
      if (currentYear === year) {
        months.eq(this._date.getUTCMonth()).addClass('active');
      }
      if (currentYear - 1 < startYear) {
        this.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
      }
      if (currentYear + 1 > endYear) {
        this.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
      }
      for (var i = 0; i < 12; i++) {
        if ((year == startYear && startMonth > i) || (year < startYear)) {
          $(months[i]).addClass('disabled');
        } else if ((year == endYear && endMonth < i) || (year > endYear)) {
          $(months[i]).addClass('disabled');
        }
      }
      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.widget.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
      this.widget.find('.datepicker-years').find('th').removeClass('disabled');
      if (startYear > year) {
        this.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
      }
      if (endYear < year + 9) {
        this.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
      }
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
    },fillHours: function() {
      var table = this.widget.find('.timepicker .timepicker-hours table');
      table.parent().hide();
      var html = '';
      if (this.options.pick12HourFormat) {
        var current = 1;
        for (var i = 0; i < 3; i += 1) {
          html += '<tr>';
          for (var j = 0; j < 4; j += 1) {
            var c = current.toString();
            html += '<td class="hour">' + padLeft(c, 2, '0') + '</td>';
            current++;
          }
          html += '</tr>'
        }
      } else {
        var current = 0;
        for (var i = 0; i < 6; i += 1) {
          html += '<tr>';
          for (var j = 0; j < 4; j += 1) {
            var c = current.toString();
            html += '<td class="hour">' + padLeft(c, 2, '0') + '</td>';
            current++;
          }
          html += '</tr>'
        }
      }
      table.html(html);
    },fillMinutes: function() {
      var table = this.widget.find('.timepicker .timepicker-minutes table');
      table.parent().hide();
      var html = '';
      var current = 0;
      for (var i = 0; i < 5; i++) {
        html += '<tr>';
        for (var j = 0; j < 4; j += 1) {
          var c = current.toString();
          html += '<td class="minute">' + padLeft(c, 2, '0') + '</td>';
          current += 3;
        }
        html += '</tr>';
      }
      table.html(html);
    },fillSeconds: function() {
      var table = this.widget.find('.timepicker .timepicker-seconds table');
      table.parent().hide();
      var html = '';
      var current = 0;
      for (var i = 0; i < 5; i++) {
        html += '<tr>';
        for (var j = 0; j < 4; j += 1) {
          var c = current.toString();
          html += '<td class="second">' + padLeft(c, 2, '0') + '</td>';
          current += 3;
        }
        html += '</tr>';
      }
      table.html(html);
    },fillTime: function() {
      if (!this._date)
        return;
      var timeComponents = this.widget.find('.timepicker span[data-time-component]');
      var table = timeComponents.closest('table');
      var is12HourFormat = this.options.pick12HourFormat;
      var hour = this._date.getUTCHours();
      var period = 'AM';
      if (is12HourFormat) {
        if (hour >= 12)
          period = 'PM';
        if (hour === 0)
          hour = 12;
        else if (hour != 12)
          hour = hour % 12;
        this.widget.find('.timepicker [data-action=togglePeriod]').text(period);
      }
      hour = padLeft(hour.toString(), 2, '0');
      var minute = padLeft(this._date.getUTCMinutes().toString(), 2, '0');
      var second = padLeft(this._date.getUTCSeconds().toString(), 2, '0');
      timeComponents.filter('[data-time-component=hours]').text(hour);
      timeComponents.filter('[data-time-component=minutes]').text(minute);
      timeComponents.filter('[data-time-component=seconds]').text(second);
    },click: function(e) {
      e.stopPropagation();
      e.preventDefault();
      this._unset = false;
      var target = $(e.target).closest('span, td, th');
      if (target.length === 1) {
        if (!target.is('.disabled')) {
          switch (target[0].nodeName.toLowerCase()) {
            case 'th':
              switch (target[0].className) {
                case 'switch':
                  this.showMode(1);
                  break;
                case 'prev':
                case 'next':
                  var vd = this.viewDate;
                  var navFnc = DPGlobal.modes[this.viewMode].navFnc;
                  var step = DPGlobal.modes[this.viewMode].navStep;
                  if (target[0].className === 'prev')
                    step = step * -1;
                  vd['set' + navFnc](vd['get' + navFnc]() + step);
                  this.fillDate();
                  this.set();
                  break;
              }
              break;
            case 'span':
              if (target.is('.month')) {
                var month = target.parent().find('span').index(target);
                this.viewDate.setUTCMonth(month);
              } else {
                var year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);
              }
              if (this.viewMode !== 0) {
                this._date = UTCDate(this.viewDate.getUTCFullYear(), this.viewDate.getUTCMonth(), this.viewDate.getUTCDate(), this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds(), this._date.getUTCMilliseconds());
                this.notifyChange();
              }
              this.showMode(-1);
              this.fillDate();
              this.set();
              break;
            case 'td':
              if (target.is('.day')) {
                var day = parseInt(target.text(), 10) || 1;
                var month = this.viewDate.getUTCMonth();
                var year = this.viewDate.getUTCFullYear();
                if (target.is('.old')) {
                  if (month === 0) {
                    month = 11;
                    year -= 1;
                  } else {
                    month -= 1;
                  }
                } else if (target.is('.new')) {
                  if (month == 11) {
                    month = 0;
                    year += 1;
                  } else {
                    month += 1;
                  }
                }
                this._date = UTCDate(year, month, day, this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds(), this._date.getUTCMilliseconds());
                this.viewDate = UTCDate(year, month, Math.min(28, day), 0, 0, 0, 0);
                this.fillDate();
                this.set();
                this.notifyChange();
              }
              break;
          }
        }
      }
    },actions: {incrementHours: function(e) {
      this._date.setUTCHours(this._date.getUTCHours() + 1);
    },incrementMinutes: function(e) {
      this._date.setUTCMinutes(this._date.getUTCMinutes() + 1);
    },incrementSeconds: function(e) {
      this._date.setUTCSeconds(this._date.getUTCSeconds() + 1);
    },decrementHours: function(e) {
      this._date.setUTCHours(this._date.getUTCHours() - 1);
    },decrementMinutes: function(e) {
      this._date.setUTCMinutes(this._date.getUTCMinutes() - 1);
    },decrementSeconds: function(e) {
      this._date.setUTCSeconds(this._date.getUTCSeconds() - 1);
    },togglePeriod: function(e) {
      var hour = this._date.getUTCHours();
      if (hour >= 12)
        hour -= 12;
      else
        hour += 12;
      this._date.setUTCHours(hour);
    },showPicker: function() {
      this.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
      this.widget.find('.timepicker .timepicker-picker').show();
    },showHours: function() {
      this.widget.find('.timepicker .timepicker-picker').hide();
      this.widget.find('.timepicker .timepicker-hours').show();
    },showMinutes: function() {
      this.widget.find('.timepicker .timepicker-picker').hide();
      this.widget.find('.timepicker .timepicker-minutes').show();
    },showSeconds: function() {
      this.widget.find('.timepicker .timepicker-picker').hide();
      this.widget.find('.timepicker .timepicker-seconds').show();
    },selectHour: function(e) {
      var tgt = $(e.target);
      var value = parseInt(tgt.text(), 10);
      if (this.options.pick12HourFormat) {
        var current = this._date.getUTCHours();
        if (current >= 12) {
          if (value != 12)
            value = (value + 12) % 24;
        } else {
          if (value === 12)
            value = 0;
          else
            value = value % 12;
        }
      }
      this._date.setUTCHours(value);
      this.actions.showPicker.call(this);
    },selectMinute: function(e) {
      var tgt = $(e.target);
      var value = parseInt(tgt.text(), 10);
      this._date.setUTCMinutes(value);
      this.actions.showPicker.call(this);
    },selectSecond: function(e) {
      var tgt = $(e.target);
      var value = parseInt(tgt.text(), 10);
      this._date.setUTCSeconds(value);
      this.actions.showPicker.call(this);
    }},doAction: function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (!this._date)
        this._date = UTCDate(1970, 0, 0, 0, 0, 0, 0);
      var action = $(e.currentTarget).data('action');
      var rv = this.actions[action].apply(this, arguments);
      this.set();
      this.fillTime();
      this.notifyChange();
      return rv;
    },stopEvent: function(e) {
      e.stopPropagation();
      e.preventDefault();
    },keydown: function(e) {
      var self = this, k = e.which, input = $(e.target);
      if (k == 8 || k == 46) {
        setTimeout(function() {
          self._resetMaskPos(input);
        });
      }
    },keypress: function(e) {
      var k = e.which;
      if (k == 8 || k == 46) {
        return;
      }
      var input = $(e.target);
      var c = String.fromCharCode(k);
      var val = input.val() || '';
      val += c;
      var mask = this._mask[this._maskPos];
      if (!mask) {
        return false;
      }
      if (mask.end != val.length) {
        return;
      }
      if (!mask.pattern.test(val.slice(mask.start))) {
        val = val.slice(0, val.length - 1);
        while ((mask = this._mask[this._maskPos]) && mask.character) {
          val += mask.character;
          this._maskPos++;
        }
        val += c;
        if (mask.end != val.length) {
          input.val(val);
          return false;
        } else {
          if (!mask.pattern.test(val.slice(mask.start))) {
            input.val(val.slice(0, mask.start));
            return false;
          } else {
            input.val(val);
            this._maskPos++;
            return false;
          }
        }
      } else {
        this._maskPos++;
      }
    },change: function(e) {
      var input = $(e.target);
      var val = input.val();
      if (this._formatPattern.test(val)) {
        this.update();
        this.setValue(this._date.getTime());
        this.notifyChange();
        this.set();
      } else if (val && val.trim()) {
        this.setValue(this._date.getTime());
        if (this._date)
          this.set();
        else
          input.val('');
      } else {
        if (this._date) {
          this.setValue(null);
          this.notifyChange();
          this._unset = true;
        }
      }
      this._resetMaskPos(input);
    },showMode: function(dir) {
      if (dir) {
        this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
      }
      this.widget.find('.datepicker > div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
    },destroy: function() {
      this._detachDatePickerEvents();
      this._detachDatePickerGlobalEvents();
      this.widget.remove();
      this.$element.removeData('datetimepicker');
      this.component.removeData('datetimepicker');
    },formatDate: function(d) {
      return this.format.replace(formatReplacer, function(match) {
        var methodName, property, rv, len = match.length;
        if (match === 'ms')
          len = 1;
        property = dateFormatComponents[match].property
        if (property === 'Hours12') {
          rv = d.getUTCHours();
          if (rv === 0)
            rv = 12;
          else if (rv !== 12)
            rv = rv % 12;
        } else if (property === 'Period12') {
          if (d.getUTCHours() >= 12)
            return 'PM';
          else
            return 'AM';
        } else if (property === 'UTCYear') {
          rv = d.getUTCFullYear();
          rv = rv.toString().substr(2);
        } else {
          methodName = 'get' + property;
          rv = d[methodName]();
        }
        if (methodName === 'getUTCMonth')
          rv = rv + 1;
        return padLeft(rv.toString(), len, '0');
      });
    },parseDate: function(str) {
      var match, i, property, methodName, value, parsed = {};
      if (!(match = this._formatPattern.exec(str)))
        return null;
      for (i = 1; i < match.length; i++) {
        property = this._propertiesByIndex[i];
        if (!property)
          continue;
        value = match[i];
        if (/^\d+$/.test(value))
          value = parseInt(value, 10);
        parsed[property] = value;
      }
      return this._finishParsingDate(parsed);
    },_resetMaskPos: function(input) {
      var val = input.val();
      for (var i = 0; i < this._mask.length; i++) {
        if (this._mask[i].end > val.length) {
          this._maskPos = i;
          break;
        } else if (this._mask[i].end === val.length) {
          this._maskPos = i + 1;
          break;
        }
      }
    },_finishParsingDate: function(parsed) {
      var year, month, date, hours, minutes, seconds, milliseconds;
      year = parsed.UTCFullYear;
      if (parsed.UTCYear)
        year = 2000 + parsed.UTCYear;
      if (!year)
        year = 1970;
      if (parsed.UTCMonth)
        month = parsed.UTCMonth - 1;
      else
        month = 0;
      date = parsed.UTCDate || 1;
      hours = parsed.UTCHours || 0;
      minutes = parsed.UTCMinutes || 0;
      seconds = parsed.UTCSeconds || 0;
      milliseconds = parsed.UTCMilliseconds || 0;
      if (parsed.Hours12) {
        hours = parsed.Hours12;
      }
      if (parsed.Period12) {
        if (/pm/i.test(parsed.Period12)) {
          if (hours != 12)
            hours = (hours + 12) % 24;
        } else {
          hours = hours % 12;
        }
      }
      return UTCDate(year, month, date, hours, minutes, seconds, milliseconds);
    },_compileFormat: function() {
      var match, component, components = [], mask = [], str = this.format, propertiesByIndex = {}, i = 0, pos = 0;
      while (match = formatComponent.exec(str)) {
        component = match[0];
        if (component in dateFormatComponents) {
          i++;
          propertiesByIndex[i] = dateFormatComponents[component].property;
          components.push('\\s*' + dateFormatComponents[component].getPattern(this) + '\\s*');
          mask.push({pattern: new RegExp(dateFormatComponents[component].getPattern(this)),property: dateFormatComponents[component].property,start: pos,end: pos += component.length});
        } 
        else {
          components.push(escapeRegExp(component));
          mask.push({pattern: new RegExp(escapeRegExp(component)),character: component,start: pos,end: ++pos});
        }
        str = str.slice(component.length);
      }
      this._mask = mask;
      this._maskPos = 0;
      this._formatPattern = new RegExp('^\\s*' + components.join('') + '\\s*$');
      this._propertiesByIndex = propertiesByIndex;
    },_attachDatePickerEvents: function() {
      var self = this;
      this.widget.on('click', '.datepicker *', $.proxy(this.click, this));
      this.widget.on('click', '[data-action]', $.proxy(this.doAction, this));
      this.widget.on('mousedown', $.proxy(this.stopEvent, this));
      if (this.pickDate && this.pickTime) {
        this.widget.on('click.togglePicker', '.accordion-toggle', function(e) {
          e.stopPropagation();
          var $this = $(this);
          var $parent = $this.closest('ul');
          var expanded = $parent.find('.collapse.in');
          var closed = $parent.find('.collapse:not(.in)');
          if (expanded && expanded.length) {
            var collapseData = expanded.data('collapse');
            if (collapseData && collapseData.transitioning)
              return;
            expanded.collapse('hide');
            closed.collapse('show')
            $this.find('i').toggleClass(self.timeIcon + ' ' + self.dateIcon);
            self.$element.find('.add-on i').toggleClass(self.timeIcon + ' ' + self.dateIcon);
          }
        });
      }
      if (this.isInput) {
        this.$element.on({'focus': $.proxy(this.show, this),'change': $.proxy(this.change, this)});
        if (this.options.maskInput) {
          this.$element.on({'keydown': $.proxy(this.keydown, this),'keypress': $.proxy(this.keypress, this)});
        }
      } else {
        this.$element.on({'change': $.proxy(this.change, this)}, 'input');
        if (this.options.maskInput) {
          this.$element.on({'keydown': $.proxy(this.keydown, this),'keypress': $.proxy(this.keypress, this)}, 'input');
        }
        if (this.component) {
          this.component.on('click', $.proxy(this.show, this));
        } else {
          this.$element.on('click', $.proxy(this.show, this));
        }
      }
    },_attachDatePickerGlobalEvents: function() {
      $(window).on('resize.datetimepicker' + this.id, $.proxy(this.place, this));
      if (!this.isInput) {
        $(document).on('mousedown.datetimepicker' + this.id, $.proxy(this.hide, this));
      }
    },_detachDatePickerEvents: function() {
      this.widget.off('click', '.datepicker *', this.click);
      this.widget.off('click', '[data-action]');
      this.widget.off('mousedown', this.stopEvent);
      if (this.pickDate && this.pickTime) {
        this.widget.off('click.togglePicker');
      }
      if (this.isInput) {
        this.$element.off({'focus': this.show,'change': this.change});
        if (this.options.maskInput) {
          this.$element.off({'keydown': this.keydown,'keypress': this.keypress});
        }
      } else {
        this.$element.off({'change': this.change}, 'input');
        if (this.options.maskInput) {
          this.$element.off({'keydown': this.keydown,'keypress': this.keypress}, 'input');
        }
        if (this.component) {
          this.component.off('click', this.show);
        } else {
          this.$element.off('click', this.show);
        }
      }
    },_detachDatePickerGlobalEvents: function() {
      $(window).off('resize.datetimepicker' + this.id);
      if (!this.isInput) {
        $(document).off('mousedown.datetimepicker' + this.id);
      }
    },_isInFixed: function() {
      if (this.$element) {
        var parents = this.$element.parents();
        var inFixed = false;
        for (var i = 0; i < parents.length; i++) {
          if ($(parents[i]).css('position') == 'fixed') {
            inFixed = true;
            break;
          }
        }
        ;
        return inFixed;
      } else {
        return false;
      }
    }};
    $.fn.datetimepicker = function(option, val) {
      return this.each(function() {
        var $this = $(this), data = $this.data('datetimepicker'), options = typeof option === 'object' && option;
        if (!data) {
          $this.data('datetimepicker', (data = new DateTimePicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
        }
        if (typeof option === 'string')
          data[option](val);
      });
    };
    $.fn.datetimepicker.defaults = {maskInput: false,pickDate: true,pickTime: true,pick12HourFormat: false,pickSeconds: true,startDate: -Infinity,endDate: Infinity,collapse: true};
    $.fn.datetimepicker.Constructor = DateTimePicker;
    var dpgId = 0;
    var dates = $.fn.datetimepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}};
    var dateFormatComponents = {dd: {property: 'UTCDate',getPattern: function() {
      return '(0?[1-9]|[1-2][0-9]|3[0-1])\\b';
    }},MM: {property: 'UTCMonth',getPattern: function() {
      return '(0?[1-9]|1[0-2])\\b';
    }},yy: {property: 'UTCYear',getPattern: function() {
      return '(\\d{2})\\b'
    }},yyyy: {property: 'UTCFullYear',getPattern: function() {
      return '(\\d{4})\\b';
    }},hh: {property: 'UTCHours',getPattern: function() {
      return '(0?[0-9]|1[0-9]|2[0-3])\\b';
    }},mm: {property: 'UTCMinutes',getPattern: function() {
      return '(0?[0-9]|[1-5][0-9])\\b';
    }},ss: {property: 'UTCSeconds',getPattern: function() {
      return '(0?[0-9]|[1-5][0-9])\\b';
    }},ms: {property: 'UTCMilliseconds',getPattern: function() {
      return '([0-9]{1,3})\\b';
    }},HH: {property: 'Hours12',getPattern: function() {
      return '(0?[1-9]|1[0-2])\\b';
    }},PP: {property: 'Period12',getPattern: function() {
      return '(AM|PM|am|pm|Am|aM|Pm|pM)\\b';
    }}};
    var keys = [];
    for (var k in dateFormatComponents)
      keys.push(k);
    keys[keys.length - 1] += '\\b';
    keys.push('.');
    var formatComponent = new RegExp(keys.join('\\b|'));
    keys.pop();
    var formatReplacer = new RegExp(keys.join('\\b|'), 'g');
    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    function padLeft(s, l, c) {
      if (l < s.length)
        return s;
      else
        return Array(l - s.length + 1).join(c || ' ') + s;
    }
    function getTemplate(timeIcon, pickDate, pickTime, is12Hours, showSeconds, collapse) {
      if (pickDate && pickTime) {
        return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<ul>' + '<li' + (collapse ? ' class="collapse in"' : '') + '>' + '<div class="datepicker">' + 
          DPGlobal.template + '</div>' + '</li>' + '<li class="picker-switch accordion-toggle"><a><i class="' + timeIcon + '"></i></a></li>' + '<li' + (collapse ? ' class="collapse"' : '') + '>' + '<div class="timepicker">' + 
          TPGlobal.getTemplate(is12Hours, showSeconds) + '</div>' + '</li>' + '</ul>' + '</div>');
      } else if (pickTime) {
        return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="timepicker">' + 
          TPGlobal.getTemplate(is12Hours, showSeconds) + '</div>' + '</div>');
      } else {
        return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="datepicker">' + 
        DPGlobal.template + '</div>' + '</div>');
      }
    }
    function UTCDate() {
      return new Date(Date.UTC.apply(Date, arguments));
    }
    var DPGlobal = {modes: [{clsName: 'days',navFnc: 'UTCMonth',navStep: 1}, {clsName: 'months',navFnc: 'UTCFullYear',navStep: 1}, {clsName: 'years',navFnc: 'UTCFullYear',navStep: 10}],isLeapYear: function(year) {
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
    },getDaysInMonth: function(year, month) {
      return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },headTemplate: '<thead>' + '<tr>' + '<th class="prev">&lsaquo;</th>' + '<th colspan="5" class="switch"></th>' + '<th class="next">&rsaquo;</th>' + '</tr>' + '</thead>',contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'};
    DPGlobal.template = '<div class="datepicker-days">' + '<table class="table-condensed">' + 
      DPGlobal.headTemplate + '<tbody></tbody>' + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + 
      DPGlobal.headTemplate + 
      DPGlobal.contTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + 
      DPGlobal.headTemplate + 
      DPGlobal.contTemplate + '</table>' + '</div>';
    var TPGlobal = {hourTemplate: '<span data-action="showHours" data-time-component="hours" class="timepicker-hour"></span>',minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',secondTemplate: '<span data-action="showSeconds" data-time-component="seconds" class="timepicker-second"></span>'};
    TPGlobal.getTemplate = function(is12Hours, showSeconds) {
      return ('<div class="timepicker-picker">' + '<table class="table-condensed"' + 
        (is12Hours ? ' data-hour-format="12"' : '') + '>' + '<tr>' + '<td><a href="#" class="btn" data-action="incrementHours"><i class="icon-chevron-up"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="incrementMinutes"><i class="icon-chevron-up"></i></a></td>' + 
        (showSeconds ? '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="incrementSeconds"><i class="icon-chevron-up"></i></a></td>' : '') + 
        (is12Hours ? '<td class="separator"></td>' : '') + '</tr>' + '<tr>' + '<td>' + TPGlobal.hourTemplate + '</td> ' + '<td class="separator">:</td>' + '<td>' + TPGlobal.minuteTemplate + '</td> ' + 
        (showSeconds ? '<td class="separator">:</td>' + '<td>' + TPGlobal.secondTemplate + '</td>' : '') + 
        (is12Hours ? '<td class="separator"></td>' + '<td>' + '<button type="button" class="btn btn-primary" data-action="togglePeriod"></button>' + '</td>' : '') + '</tr>' + '<tr>' + '<td><a href="#" class="btn" data-action="decrementHours"><i class="icon-chevron-down"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="decrementMinutes"><i class="icon-chevron-down"></i></a></td>' + 
        (showSeconds ? '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="decrementSeconds"><i class="icon-chevron-down"></i></a></td>' : '') + 
        (is12Hours ? '<td class="separator"></td>' : '') + '</tr>' + '</table>' + '</div>' + '<div class="timepicker-hours" data-action="selectHour">' + '<table class="table-condensed">' + '</table>' + '</div>' + '<div class="timepicker-minutes" data-action="selectMinute">' + '<table class="table-condensed">' + '</table>' + '</div>' + 
        (showSeconds ? '<div class="timepicker-seconds" data-action="selectSecond">' + '<table class="table-condensed">' + '</table>' + '</div>' : ''));
    }
  })(window.jQuery);
  (function(exports) {
    'use strict'
    var Chart = Backbone.Model.extend({defaults: {cuckooshrike: '',chunky: '',filled: '',stack: '',scale: '',outliers: '',boxPlot: '',time_granularity: '',time_span: '',live_data: '',query: '',start_date: '',end_date: '',time_zone: '',y: '',is_visible: false,has_marker: false,id: '',source: '',attachments: []},getIntervalTime: function() {
      var min_interval = 1;
      switch (this.get('time_granularity')) {
        case '1':
          min_interval = 1 * 2 * 500;
          break;
        case 'hour':
          min_interval = 60 * 60 * 1000;
          break;
        case '86400':
          min_interval = 60 * 60 * 24 * 1000;
          break;
        default:
          min_interval = 60 * 2 * 1000;
          break;
      }
      switch (this.get('time_span')) {
        case 'minutes-10':
        case 'minutes-20':
        case 'minutes-30':
          return Math.max(min_interval, 1 * 2 * 500);
        case 'hours-2':
          return Math.max(min_interval, 60 * 2 * 1000);
        case 'hours-6':
          return Math.max(min_interval, 60 * 10 * 1000);
        case 'hours-12':
        case 'days-1':
        case 'days-3':
        case 'days-7':
          return Math.max(min_interval, 60 * 60 * 1000);
        default:
          return Math.max(min_interval, 60 * 2 * 1000);
      }
    },toParams: function(opts) {
      var json = this.toJSON();
      $.extend(json, opts);
      var omitKeys = ['is_visible', 'draw_state', 'id', 'live_data'];
      if (json.live_data === true) {
        omitKeys.push('start_date');
        omitKeys.push('end_date');
        omitKeys.push('time_zone');
      } else {
        omitKeys.push('time_span');
      }
      return $.param(_.omit(json, omitKeys));
    },setLiveDate: function(timespan, opts) {
      var self = this;
      var tempTimespan = timespan.split('-');
      self.set({'time_span': timespan,'start_date': moment().subtract(tempTimespan[0], parseInt(tempTimespan[1])).unix(),'end_date': moment().unix(),'time_zone': 'local'}, {silent: true});
      self.set('live_data', true, {silent: true});
      self.trigger('change:date', self, 'live');
      self.trigger('change', self, {start_date: self.get('start_date'),end_date: self.get('end_date')});
    },setCustomDate: function(start, end, timezone, opts) {
      var self = this;
      self.set({'time_span': 'hours-2','start_date': start,'end_date': end,'time_zone': timezone}, {silent: true});
      self.set('live_data', false, {silent: true});
      self.trigger('change:date', self, 'custom');
      self.trigger('change', self, {start_date: self.get('start_date'),end_date: self.get('end_date')});
    },setQuery: function(q) {
      var self = this;
      self.set('query', [], {silent: true});
      self.set('query', q);
    },setCustomY: function(minY, maxY) {
      var self = this;
      function getMultipliedValue(num) {
        if (!num)
          return undefined;
        var splitRegex = new RegExp('([0-9\-\.]+)([A-Za-z]*)');
        var split = splitRegex.exec(num);
        var number = parseFloat(split[1]), multiplier = split[2];
        var K = 1000, Ki = 1024;
        switch (multiplier) {
          case "":
            return number;
          case "k":
          case "K":
            return number * K;
          case "m":
          case "M":
            return number * K * K;
          case "b":
          case "B":
            return number * K * K * K;
          case "t":
          case "T":
            return number * K * K * K * K;
          case "Ki":
            return number * Ki;
          case "Mi":
            return number * Ki * Ki;
          case "Gi":
            return number * Ki * Ki * Ki;
          case "Ti":
            return number * Ki * Ki * Ki * Ki;
          default:
            return undefined;
        }
      }
      ;
      minY = getMultipliedValue(minY);
      maxY = getMultipliedValue(maxY);
      self.set('y', [isNaN(minY) ? undefined : minY, isNaN(maxY) ? undefined : maxY].join(','));
    }});
    var Dashboard = Chart.extend();
    var Charts = Backbone.Collection.extend({model: Chart,visibleCharts: function() {
      return this.where({is_visible: true});
    },invisibleCharts: function() {
      return this.where({is_visible: false});
    }});
    exports.Model.Chart = Chart;
    exports.Model.Dashboard = Dashboard;
    exports.Collection.Chart = Charts;
  }(App));
  (function(exports) {
    'use strict'
    var ChartContainer = Backbone.View.extend({initialize: function(opts) {
      var self = this;
      this.alertsAPI = new AlertsAPI();
      self.$el.data('chartContainer', self);
      self._router = opts.router;
      var $chartContainer = self.$el.find(".chart");
      if ($chartContainer.length === 0) {
        self.$el.append($('<div>').addClass("chart"));
        $chartContainer = self.$el.find(".chart");
      }
      var yaxis, ymin, ymax;
      self.cuckooChart = new CuckooChart($chartContainer);
      yaxis = $chartContainer.data('yaxis');
      ymin = $chartContainer.data('ymin');
      ymax = $chartContainer.data('ymax');
      self.cuckooChart.lineGraph();
      self.rfChart = self.cuckooChart.chart;
      opts.height && self.rfChart.height(opts.height);
      if (yaxis === "bytes") {
        self.rfChart.axis().yFormatter(function(d) {
          return numeral(d).format('0.0b');
        });
      }
      self.cuckooChart.on('before', function() {
        if (!self.model.get('cuckooshrike')) {
          $chartContainer.prepend("<img src='/img/loader.gif' class='loader'/>");
        }
      });
      self.cuckooChart.on('success', function() {
        $chartContainer.find('.loader').remove();
        self.$el.find('.chart-error').remove();
        VizAnalytics.chartLoad("success");
      });
      self.cuckooChart.chart.model.on('empty', function() {
        $chartContainer.find('.loader').remove();
      });
      self.cuckooChart.on('error', function(e, msg) {
        function tooltipPlacement($el) {
          var width = window.innerWidth;
          var left_pos = $el.offset().left;
          if (width - left_pos > 400)
            return 'right';
          return 'left';
        }
        var errorIcon = $('<i class="icon-exclamation-sign"/>');
        var iconWrapper = $('<span class="chart-control chart-error" title="' + msg + ' (Click to reload)' + '"/>').append(errorIcon).tooltip({placement: tooltipPlacement(self.$el)});
        var $title = self.$el.find('.chart-title');
        $title.find('.chart-error').remove();
        $title.append(iconWrapper);
        errorIcon.on('mouseenter', function(e) {
          $(e.target).removeClass().addClass('icon-repeat');
        }).on('mouseleave', function(e) {
          $(e.target).removeClass().addClass('icon-exclamation-sign');
        }).on('click', function(e) {
          $(this.parentNode).tooltip('destroy');
          var chartModel = self.model.collection._byId[self.model.id];
          chartModel.setLiveDate(chartModel.get('time_span'));
        });
        self.$el.find('img.loader').remove();
        VizAnalytics.chartLoad("error");
        throw new Error(msg);
      });
      self.model.on('change:filled', self.onFill, self);
      self.model.on('change:stack', self.onStack, self);
      self.model.on('change:boxPlot', self.onBoxPlot, self);
      self.model.on('change:scale', self.onScale, self);
      self.model.on('change:outliers', self.onOutliers, self);
      self.model.on('change:time_granularity', self.onTimeGranularity, self);
      self.model.on('change:query', self.onQueries, self);
      self.model.on('change:source', self.onQueries, self);
      self.model.on('change:is_visible', self.toggleEventDelegation, self);
      self.model.on('change', self.onChange, self);
    },events: {'click .yaxis .tick-max': '_showYAxisBox','click .yaxis .tick-min': '_showYAxisBox','click .chart-title a': '_redirectHandler','blur .yaxis input[name="tick-min"]': '_setYAxis','blur .yaxis input[name="tick-max"]': '_setYAxis','keyup .yaxis input[name="tick-min"]': '_setYAxis','keyup .yaxis input[name="tick-max"]': '_setYAxis','click .chart-embed-link': '_showEmbedModal'},_showEmbedModal: function(e) {
      var $chartContainer = $(this.el);
      var chartModel = this.model;
      if (typeof chartModel === 'undefined')
        return;
      var optionalConfig = '';
      if (!chartModel.get('live_data')) {
        optionalConfig += ' data-start-date="' + chartModel.get('start_date').toString() + '"' + ' data-end-date="' + chartModel.get('end_date').toString() + '"';
      }
      var embedCode = '<div class="viz-widget"' + 
        optionalConfig + ' data-title="' + $chartContainer.find('.chart-title>a').text() + '"' + ' data-queries=\'' + JSON.stringify(chartModel.get('query')) + '\'' + ' data-width=400 data-height=225></div>' + ' <script src="https://observe.twitter.biz/javascripts/viz2/lib/d3.js"' + ' type="text/javascript"></script>' + ' <script src="https://observe.twitter.biz/tools/viz_widget"' + ' type="text/javascript"></script>';
      $('#viz-widget-embed-code').val(embedCode);
      $('#viz-widget-embed-code-wiki').val('{html}' + embedCode + '{html}');
      $('#embed-link-modal').modal('show');
      VizAnalytics.toolbarClick("chart", "embed");
    },_showYAxisBox: function(e) {
      var $this = $(e.currentTarget);
      var tickName = $this.hasClass('tick-min') ? 'tick-min' : 'tick-max';
      var css = $this.attr('style') + ';font-size:10px; height: 15px; width:30px;';
      var $input = $("<input type='text' name='" + tickName + "' />").attr('style', css);
      $input.insertAfter(e.currentTarget).focus();
    },_setYAxis: function(e) {
      var self = this;
      if (e.type == 'focusout') {
        var $target = $(e.currentTarget);
        var y = self.model.get('y').split(',');
        if ($target.attr('name') === 'tick-min') {
          y[0] = $target.val();
        } else {
          y[1] = $target.val();
        }
        self.model.setCustomY(y[0], y[1]);
        $target.remove();
        self._router && self._router.navigate(self.model.toParams(), {trigger: false});
        VizAnalytics.toolbarClick("chart", "custom_y")
      } else if (e.keyCode == '13') {
        $(e.currentTarget).blur();
      }
    },_redirectHandler: function(e) {
      e.preventDefault();
      var self = this;
      var title = self.$el.find('.chart-title a');
      var href = title.attr("href");
      href += "#" + self.model.toParams();
      window.open(href);
    },onChange: function(model, change) {
      var value = model.get('query');
      if (value == null || value == '')
        return;
      var self = this;
      var start = model.get('start_date');
      var end = model.get('end_date');
      var keys = [];
      var drawKeys = ["source", "query", "time_granularity", "time_span", "start_date", "end_date", "boxPlot", "y"];
      if (model.get('time_zone') === 'utc') {
        var timezoneDifference = parseInt(moment().format('ZZ')) * 36;
        start = moment.unix(start).add('seconds', timezoneDifference).unix();
        end = moment.unix(end).add('seconds', timezoneDifference).unix();
      }
      keys = _.union(_.keys(model.changed), _.keys(change));
      if (_.intersection(keys, drawKeys).length > 0) {
        this.cuckooChart.chart.start(start).end(end);
        this._onCustomY(model, model.get('y'));
        if (model.get('key')) {
          this.cuckooChart.drawChart(model.get('key'));
        } else {
          this.cuckooChart.drawChart();
        }
      }
    },toggleEventDelegation: function() {
      if (this.model.get('is_visible')) {
        this.delegateEvents();
      } else {
        this.undelegateEvents();
      }
    },onFill: function(model, value) {
      this.rfChart.renderer().fill(value);
      if (this.rfChart.isReady()) {
        this.rfChart.draw();
      }
      VizAnalytics.chartLoadSettings("filled/" + value)
    },_onCustomY: function(model, value) {
      value = value.split(',');
      value[0] = isNaN(parseFloat(value[0])) ? undefined : parseFloat(value[0]);
      value[1] = isNaN(parseFloat(value[1])) ? undefined : parseFloat(value[1]);
      this.rfChart.yaxis().minY(value[0]);
      this.rfChart.yaxis().maxY(value[1]);
    },onStack: function(model, value) {
      this.rfChart.tools().stack(value);
      VizAnalytics.chartLoadSettings("stack/" + value)
    },onScale: function(model, value) {
      this.rfChart.tools().log(value === 'log');
      VizAnalytics.chartLoadSettings("log/" + value)
    },onBoxPlot: function(model, value) {
      if (value)
        this.cuckooChart.boxPlot();
      else
        this.cuckooChart.lineGraph();
      VizAnalytics.chartLoadSettings("box_plot/" + value)
    },onOutliers: function(model, value) {
      VizAnalytics.chartLoadSettings("outliers/" + value)
    },onTimeGranularity: function(model, value) {
      var g = parseInt(value) || 60;
      this.rfChart.granularity(g);
      VizAnalytics.chartLoadSettings("time_granularity/" + g)
    },onQueries: function(model, value) {
      var value = model.get('query'), source = model.get('source');
      var non_hidden_queries = value.map(function(query) {
        var newQuery = _.extend({}, query);
        if (source)
          newQuery.query = newQuery.query.replace(/\$source/g, source);
        return newQuery;
      });
      non_hidden_queries = _.reject(non_hidden_queries, function(query) {
        return (query.hidden && (query.hidden === 'true' || query.hidden === true));
      });
      this.cuckooChart.query(non_hidden_queries);
      VizAnalytics.chartLoadSettings("queries/count", non_hidden_queries.length)
    },onLegendFreeze: function() {
      var legend = this.rfChart.legend();
      legend.freeze(!legend.freeze());
    }});
    exports.View.ChartContainer = ChartContainer;
  }(App));
  (function(exports) {
    'use strict'
    var TIMEFORMAT = "YYYY-MM-DD HH:mm";
    function changeClass($el, value) {
      if (value) {
        $el.addClass('active');
      } else {
        $el.removeClass('active');
      }
    }
    var ChartToolbar = Backbone.View.extend({initialize: function(opts) {
      $('button[data-toggle=tooltip]').tooltip();
      var self = this;
      self.$customDateDOM = {'custom': self.$('button[data-time=custom]'),'container': self.$('.show-data-type[data-type=custom]'),'startdate': self.$('.custom-date input[name=start_date]'),'enddate': self.$('.custom-date input[name=end_date]'),'startdatepicker': self.$('.custom-date .start-date-picker'),'enddatepicker': self.$('.custom-date .end-date-picker'),'timezone': self.$('.custom-date select[name=timezone]'),'submit': self.$('.custom-date button')}
      $('.date-picker').datetimepicker({language: 'en',pick12HourFormat: false});
      self.$liveDateDOM = {'live': self.$('button[data-time=live]'),'container': self.$('.show-data-type[data-type=live]')}
      self.EVENTS = {SET: 'set',CHANGEDATE: 'change:date'};
      self._router = opts.router;
      self.model && self.startListening();
    },stopListening: function() {
      var self = this;
      self.model && self.model.off(null, null, self);
      self.model = undefined;
    },startListening: function(model) {
      var self = this;
      self.model = self.model || model;
      self.model.on('change', function(model) {
        model.set('custom_chart', true, {silent: true});
      }, self);
      self.model.on('change:time_granularity', self.onTimeGranularity, self);
      self.model.on('change:time_span', self.onTimeSpan, self);
      self.model.on('change:time_zone', self.onTimeZone, self);
      self.model.on('change:filled', self.onFill, self);
      self.model.on('change:stack', self.onStack, self);
      self.model.on('change:scale', self.onScale, self);
      self.model.on('change:outliers', self.onOutliers, self);
      self.model.on('change:boxPlot', self.onBoxPlot, self);
      self.model.on(self.EVENTS.CHANGEDATE, self.onDateChange, self);
      self.model.on('change:live_data', function(model, val) {
        self.model.trigger(self.EVENTS.CHANGEDATE, self.model, val ? 'live' : 'custom');
      }, self);
    },events: {'click button[data-type=time-granularity]': '_setTimeGranularity','click button[name=filled]': '_setFilled','click button[name=stack]': '_setStack','click button[name=outliers]': '_setOutliers','click button[name=boxPlot]': '_setBoxPlot','click button[name=log]': '_setLog','click button[data-type=data-time]': '_setLiveOrCustomDate','keypress input.source-input': '_setSource','click button[data-type=time-span]': '_setTimeSpan','click button[name=custom]': '_setCustomDate','keydown input.date-input-box': '_setCustomDate'},_setTimeGranularity: function(e) {
      var self = this;
      var value = $(e.currentTarget).data('timegranularity');
      self.model.set('time_granularity', parseInt(value));
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "time_granularity", value);
    },_setTimeSpan: function(e) {
      var self = this;
      var timespan = $(e.currentTarget).data('timespan');
      self.model.setLiveDate(timespan);
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "time_span", timespan);
    },_setFilled: function(e) {
      var self = this;
      var $el = $(e.currentTarget);
      var value = !$el.hasClass('active');
      self.model.set('filled', value);
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "filled", value);
    },_setLog: function(e) {
      var self = this;
      var $el = $(e.currentTarget);
      var value = !$el.hasClass('active');
      self.model.set('scale', value ? 'log' : 'linear');
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "log", value);
    },_setStack: function(e) {
      var self = this;
      var $el = $(e.currentTarget);
      var value = !$el.hasClass('active');
      self.model.set('stack', value);
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "stack", value);
    },_setOutliers: function(e) {
      var self = this;
      var $el = $(e.currentTarget);
      var value = !$el.hasClass('active');
      self.model.set('outliers', value);
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "outliers", value);
    },_setBoxPlot: function(e) {
      var self = this;
      var $el = $(e.currentTarget);
      var value = !$el.hasClass('active');
      self.model.set('boxPlot', value);
      self.model.trigger('change:url');
      VizAnalytics.toolbarClick(self.isChartOrDashboard(), "box_plot", value);
    },_setCustomDate: function(e) {
      if (e.type === "keydown" && e.keyCode !== 13)
        return;
      var self = this;
      var start = moment(self.$customDateDOM['startdate'].val())
      var end = moment(self.$customDateDOM['enddate'].val())
      var temp_moment = moment();
      start = start.unix();
      end = end.unix();
      if (end < start) {
        throw new RangeError("Specified end time is before start time!");
      }
      var timezone = self.$customDateDOM['timezone'].val();
      self.model.setCustomDate(start, end, timezone);
      self.model.trigger('change:url');
    },_setLiveOrCustomDate: function(e) {
      var self = this;
      if ($(e.currentTarget).data('time') === 'live') {
        self.model.setLiveDate('hours-2');
        VizAnalytics.toolbarClick(self.isChartOrDashboard(), "live_date");
      } else {
        self.model.trigger(self.EVENTS.CHANGEDATE, self.model, 'custom');
        self.$el.find("button[name=custom]").click();
        VizAnalytics.toolbarClick(self.isChartOrDashboard(), "custom_date");
      }
      self.model.trigger('change:url');
    },_setSource: function(e) {
      if (e.keyCode == 13) {
        var self = this;
        var source = $.trim($(e.currentTarget).val());
        self.model.set("source", source);
        self.model.trigger('change:url');
        VizAnalytics.toolbarClick(self.isChartOrDashboard(), "source", source);
      }
    },onFill: function(model, value) {
      var $el = this.$('button[name=filled]');
      changeClass($el, value);
    },onStack: function(model, value) {
      var $el = this.$('button[name=stack]');
      changeClass($el, value);
    },onScale: function(model, value) {
      var $el = this.$('button[name=log]');
      changeClass($el, value === 'log');
    },onOutliers: function(model, value) {
      var $el = this.$('button[name=outliers]');
      changeClass($el, value);
    },onBoxPlot: function(model, value) {
      var $el = this.$('button[name=boxPlot]');
      changeClass($el, value);
    },onTimeSpan: function(model, value) {
      var $btnGroup = this.$('button[data-type="time-span"]');
      $btnGroup.removeClass('active');
      this.$('button[data-timespan="' + value + '"]').addClass('active');
    },onTimeGranularity: function(model, value) {
      var $btnGroup = this.$('button[data-type="time-granularity"]');
      $btnGroup.removeClass('active');
      this.$('button[data-timegranularity="' + value + '"]').addClass('active');
    },onDateChange: function(model, val) {
      var self = this;
      var start_date, end_date;
      if (val === 'live') {
        self.$liveDateDOM['live'].addClass('active');
        self.$customDateDOM['custom'].removeClass('active');
        self.$liveDateDOM['container'].css('display', 'inline-block');
        self.$customDateDOM['container'].hide();
        self.onTimeSpan(self.model, self.model.get('time_span'));
      } else {
        start_date = moment.unix(self.model.get("start_date"));
        end_date = moment.unix(self.model.get("end_date"));
        self.$liveDateDOM['live'].removeClass('active');
        self.$customDateDOM['custom'].addClass('active');
        self.$liveDateDOM['container'].hide();
        self.$customDateDOM['container'].css('display', 'inline-block');
        self.$customDateDOM['startdatepicker'].datetimepicker('setValue', start_date.format(TIMEFORMAT));
        self.$customDateDOM['enddatepicker'].datetimepicker('setValue', end_date.format(TIMEFORMAT));
        self.$customDateDOM['timezone'].val(self.model.get('time_zone'));
        var dateRange = moment().unix() - self.model.get('start_date')
        if (self.model.get('time_granularity') === 60 && dateRange > 1209600) {
          ObsAlert.add('info', 'Data for minutely granularity is only available for the past 2 weeks.');
        }
      }
    },render: function(position) {
      var self = this;
      var modelJSON = self.model.toJSON();
      self.onFill(self.model, modelJSON.filled);
      self.onStack(self.model, modelJSON.stack);
      self.onScale(self.model, modelJSON.scale);
      self.onOutliers(self.model, modelJSON.outliers);
      self.onBoxPlot(self.model, modelJSON.boxPlot);
      self.onTimeGranularity(self.model, modelJSON.time_granularity);
      self.onTimeSpan(self.model, modelJSON.time_span);
      self.onDateChange(self.model, modelJSON.live_data ? 'live' : 'custom');
      self.show();
      var top_offset = -135, left_offset = -300, scrollTop = $(document).scrollTop();
      if (position.top - scrollTop < 180 && scrollTop > 32) {
        top_offset = 15;
      }
      if (position.left < 300) {
        left_offset = -position.left;
      }
      self.$el.css({top: position.top + top_offset,left: position.left + left_offset});
    },show: function() {
      this.$el.removeClass('hide');
    },hide: function() {
      this.$el.addClass('hide');
    },isChartOrDashboard: function() {
      if (typeof (this.model.get("id")) == "number") {
        return "chart";
      } else {
        return "dashboard";
      }
    }});
    exports.View.ChartToolbar = ChartToolbar;
  }(App));
  (function() {
    "use strict";
    window.Viz = window.Viz || {};
    if (Viz.widgets) {
      return false;
    }
    Viz.widgets = {};
    Viz.widgets.charts = [];
    Viz.widgets.HOST = 'https://observe.twitter.biz'; 
    Viz.widgets.CSS_URL='/stylesheets/viz_widget_packaged.css';
    Viz.widgets.TOOLBAR_TEMPLATE_URL = '/tools/templates/chart_settings';
    Viz.widgets.ZONE_IND_URL = Viz.widgets.HOST + '/tools/templates/zone_indicator';
    function loadCss(url) {
      var e = document.createElement('link');
      e.href = url;
      e.type = 'text/css';
      e.rel = 'stylesheet';
      e.media = 'screen';
      document.getElementsByTagName('head')[0].appendChild(e);
    }
    // HACK(pwannissorn): Observability team hardcode these images path in
    // their html file. We have to manually overwrite it.
    function correctMiniBtnPaths() {
      $('.btn-mini[name="filled"] img').attr('src', '/img/filled-icon.png');
      $('.btn-mini[name="stack"] img').attr('src', '/img/stack-icon.png');
      $('.btn-mini[name="log"] img').attr('src', '/img/log-icon.png');
    }
    function init() {
      console.log("this init is called");
      App.Environment = App.Constants.env.EMBEDDED;
      // loadCss(Viz.widgets.HOST + Viz.widgets.CSS_URL);
      createWidgets();
    }
    window.Viz.init = init;
    function getOptions($obj) {
      var options = {}, queryStr;
      queryStr = $obj.attr('data-queries');
      queryStr = queryStr.replace(/&#xa;/g, '');
      queryStr = queryStr.replace(/&quot;/g, '"');
      options.start_date = $obj.attr('data-start-date') || moment().subtract('hours', 2).unix();
      options.end_date = $obj.attr('data-end-date') || moment().unix();
      options.live_data = $obj.attr('data-start-date') ? false : true;
      options.granularity = '60';
      options.chartType = $obj.attr('data-chart-type') || 'chart';
      options.query = JSON.parse(queryStr) || [];
      options.width = Number($obj.attr('data-width')) || 400;
      options.height = Number($obj.attr('data-height')) || 400;
      options.dashboardId = $obj.attr('data-dashboard-id') || null;
      options.sectionIndex = $obj.attr('data-section-index') || null;
      options.toolbarOptions = $obj.attr('data-toolbar-options') || {};
      options.title = $obj.attr('data-title') || '';
      return options;
    }
    function fetchToolbarTemplate(callback) {
      $.getJSON(Viz.widgets.HOST + Viz.widgets.TOOLBAR_TEMPLATE_URL, function(res) {
        $('body').append(res.data);
        callback();
      });
    }
    function initToolbar() {
      var chartToolbar = new App.View.ChartToolbar({el: $('#chart-settings-container')});
      $(document).on('click', '.chart-settings', function() {
        var $this = $(this);
        if ($this.hasClass('active-toolbar')) {
          chartToolbar.hide();
          $(this).removeClass('active-toolbar');
          return;
        } else {
          $('.chart-settings').removeClass('active-toolbar');
          $this.addClass('active-toolbar');
        }
        var $chartContainer = $this.closest('.viz-widget');
        var chartModel = $chartContainer.data('model');
        if (typeof chartModel === 'undefined')
          return;
        chartToolbar.stopListening();
        chartToolbar.startListening(chartModel);
        chartToolbar.render($this.offset());
      });
      $(window).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest($('#chart-settings-container')).length === 0 && $target.closest('.bootstrap-datetimepicker-widget').length === 0 && !$('#chart-settings-container').hasClass('hide')) {
          chartToolbar.hide();
        }
      });
    }
    function renderZoneIndicator($el, queries) {
      var dcs = queries.map(function(q) {
        return q.dc;
      });
      dcs = dcs.filter(function(dc, i, a) {
        return i === a.indexOf(dc);
      });
      var url = Viz.widgets.ZONE_IND_URL + '?';
      dcs.forEach(function(dc) {
        url += 'dcs[]=' + dc + '&';
      });
      $.getJSON(url, function(result) {
        $el.append(result.data);
      });
    }
    function createWidgets() {
      $('.viz-widget:not(.viz-widget-rendered)').each(function(i, e) {
        var $chart = $('<div>').addClass('widget-chart'), $el = $(this), options = getOptions($(this)), model = new App.Model.Chart({start_date: options.start_date,end_date: options.end_date,live_data: options.live_data,granularity: options.granularity});
        $el.addClass('viz-widget-container');
        $el.addClass('viz-widget-rendered');
        $el.append($('<div>').addClass('chart-header').append($('<span>').addClass('chart-title').text(options.title)).append($('<div>').addClass('chart-settings chart-control').append($('<i>').addClass('icon-cog'))));
        $el.append($chart);
        $el.css({width: options.width + 'px',height: options.height + 'px'});
        $chart.css({width: options.width - 70 + 'px',height: options.height - 85 + 'px'});
        renderZoneIndicator($el, options.query);
        var chartContainer = new App.View.ChartContainer({el: $chart,model: model,router: null,set_shortcuts: true,height: options.height - 85});
        model.setQuery(options.query);
        $el.data('model', model);
        $el.data('chart', chartContainer);
        App.initInterval(model);
      });
      VizAnalytics.embeddedChartLoad($('.viz-widget').length);
      correctMiniBtnPaths();
    }
    $(document).ready(function() {
      init();
      fetchToolbarTemplate(initToolbar);
    });
  })();
})(window);

