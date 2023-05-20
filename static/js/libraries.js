/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function (a, b) {
  function G(a) {
    var b = (F[a] = {});
    return (
      p.each(a.split(s), function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(I, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == "string") {
        try {
          d =
            d === "true"
              ? !0
              : d === "false"
              ? !1
              : d === "null"
              ? null
              : +d + "" === d
              ? +d
              : H.test(d)
              ? p.parseJSON(d)
              : d;
        } catch (f) {}
        p.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function K(a) {
    var b;
    for (b in a) {
      if (b === "data" && p.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }
    return !0;
  }
  function ba() {
    return !1;
  }
  function bb() {
    return !0;
  }
  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function bi(a, b) {
    do a = a[b];
    while (a && a.nodeType !== 1);
    return a;
  }
  function bj(a, b, c) {
    b = b || 0;
    if (p.isFunction(b))
      return p.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return p.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if (typeof b == "string") {
      var d = p.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (be.test(b)) return p.filter(b, d, !c);
      b = p.filter(b, d);
    }
    return p.grep(a, function (a, d) {
      return p.inArray(a, b) >= 0 === c;
    });
  }
  function bk(a) {
    var b = bl.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function bC(a, b) {
    return (
      a.getElementsByTagName(b)[0] ||
      a.appendChild(a.ownerDocument.createElement(b))
    );
  }
  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) return;
    var c,
      d,
      e,
      f = p._data(a),
      g = p._data(b, f),
      h = f.events;
    if (h) {
      delete g.handle, (g.events = {});
      for (c in h)
        for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d]);
    }
    g.data && (g.data = p.extend({}, g.data));
  }
  function bE(a, b) {
    var c;
    if (b.nodeType !== 1) return;
    b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === "object"
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          p.support.html5Clone &&
            a.innerHTML &&
            !p.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : c === "input" && bv.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : c === "option"
        ? (b.selected = a.defaultSelected)
        : c === "input" || c === "textarea"
        ? (b.defaultValue = a.defaultValue)
        : c === "script" && b.text !== a.text && (b.text = a.text),
      b.removeAttribute(p.expando);
  }
  function bF(a) {
    return typeof a.getElementsByTagName != "undefined"
      ? a.getElementsByTagName("*")
      : typeof a.querySelectorAll != "undefined"
      ? a.querySelectorAll("*")
      : [];
  }
  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked);
  }
  function bY(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = bW.length;
    while (e--) {
      b = bW[e] + c;
      if (b in a) return b;
    }
    return d;
  }
  function bZ(a, b) {
    return (
      (a = b || a),
      p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    );
  }
  function b$(a, b) {
    var c,
      d,
      e = [],
      f = 0,
      g = a.length;
    for (; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      (e[f] = p._data(c, "olddisplay")),
        b
          ? (!e[f] && c.style.display === "none" && (c.style.display = ""),
            c.style.display === "" &&
              bZ(c) &&
              (e[f] = p._data(c, "olddisplay", cc(c.nodeName))))
          : ((d = bH(c, "display")),
            !e[f] && d !== "none" && p._data(c, "olddisplay", d));
    }
    for (f = 0; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      if (!b || c.style.display === "none" || c.style.display === "")
        c.style.display = b ? e[f] || "" : "none";
    }
    return a;
  }
  function b_(a, b, c) {
    var d = bP.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function ca(a, b, c, d) {
    var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
      f = 0;
    for (; e < 4; e += 2)
      c === "margin" && (f += p.css(a, c + bV[e], !0)),
        d
          ? (c === "content" &&
              (f -= parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "margin" &&
              (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
          : ((f += parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "padding" &&
              (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
    return f;
  }
  function cb(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
    if (d <= 0 || d == null) {
      d = bH(a, b);
      if (d < 0 || d == null) d = a.style[b];
      if (bQ.test(d)) return d;
      (e = f && (p.support.boxSizingReliable || d === a.style[b])),
        (d = parseFloat(d) || 0);
    }
    return d + ca(a, b, c || (f ? "border" : "content"), e) + "px";
  }
  function cc(a) {
    if (bS[a]) return bS[a];
    var b = p("<" + a + ">").appendTo(e.body),
      c = b.css("display");
    b.remove();
    if (c === "none" || c === "") {
      bI = e.body.appendChild(
        bI ||
          p.extend(e.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0,
          })
      );
      if (!bJ || !bI.createElement)
        (bJ = (bI.contentWindow || bI.contentDocument).document),
          bJ.write("<!doctype html><html><body>"),
          bJ.close();
      (b = bJ.body.appendChild(bJ.createElement(a))),
        (c = bH(b, "display")),
        e.body.removeChild(bI);
    }
    return (bS[a] = c), c;
  }
  function ci(a, b, c, d) {
    var e;
    if (p.isArray(b))
      p.each(b, function (b, e) {
        c || ce.test(a)
          ? d(a, e)
          : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d);
      });
    else if (!c && p.type(b) === "object")
      for (e in b) ci(a + "[" + e + "]", b[e], c, d);
    else d(a, b);
  }
  function cz(a) {
    return function (b, c) {
      typeof b != "string" && ((c = b), (b = "*"));
      var d,
        e,
        f,
        g = b.toLowerCase().split(s),
        h = 0,
        i = g.length;
      if (p.isFunction(c))
        for (; h < i; h++)
          (d = g[h]),
            (f = /^\+/.test(d)),
            f && (d = d.substr(1) || "*"),
            (e = a[d] = a[d] || []),
            e[f ? "unshift" : "push"](c);
    };
  }
  function cA(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h,
      i = a[f],
      j = 0,
      k = i ? i.length : 0,
      l = a === cv;
    for (; j < k && (l || !h); j++)
      (h = i[j](c, d, e)),
        typeof h == "string" &&
          (!l || g[h]
            ? (h = b)
            : (c.dataTypes.unshift(h), (h = cA(a, c, d, e, h, g))));
    return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h;
  }
  function cB(a, c) {
    var d,
      e,
      f = p.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && p.extend(!0, a, e);
  }
  function cC(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) f in d && (c[k[f]] = d[f]);
    while (j[0] === "*")
      j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break;
        }
    if (j[0] in d) g = j[0];
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }
        h || (h = f);
      }
      g = g || h;
    }
    if (g) return g !== j[0] && j.unshift(g), d[g];
  }
  function cD(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    a.dataFilter && (b = a.dataFilter(b, a.dataType));
    if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
    for (; (e = g[++j]); )
      if (e !== "*") {
        if (h !== "*" && h !== e) {
          c = i[h + " " + e] || i["* " + e];
          if (!c)
            for (d in i) {
              f = d.split(" ");
              if (f[1] === e) {
                c = i[h + " " + f[0]] || i["* " + f[0]];
                if (c) {
                  c === !0
                    ? (c = i[d])
                    : i[d] !== !0 && ((e = f[0]), g.splice(j--, 0, e));
                  break;
                }
              }
            }
          if (c !== !0)
            if (c && a["throws"]) b = c(b);
            else
              try {
                b = c(b);
              } catch (k) {
                return {
                  state: "parsererror",
                  error: c ? k : "No conversion from " + h + " to " + e,
                };
              }
        }
        h = e;
      }
    return {
      state: "success",
      data: b,
    };
  }
  function cL() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cM() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  function cU() {
    return (
      setTimeout(function () {
        cN = b;
      }, 0),
      (cN = p.now())
    );
  }
  function cV(a, b) {
    p.each(b, function (b, c) {
      var d = (cT[b] || []).concat(cT["*"]),
        e = 0,
        f = d.length;
      for (; e < f; e++) if (d[e].call(a, b, c)) return;
    });
  }
  function cW(a, b, c) {
    var d,
      e = 0,
      f = 0,
      g = cS.length,
      h = p.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length;
        for (; e < f; e++) j.tweens[e].run(d);
        return (
          h.notifyWith(a, [j, d, c]),
          d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: p.extend({}, b),
        opts: p.extend(
          !0,
          {
            specialEasing: {},
          },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: cN || cU(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = p.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(e), e;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          for (; c < d; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    cX(k, j.opts.specialEasing);
    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts);
      if (d) return d;
    }
    return (
      cV(j, k),
      p.isFunction(j.opts.start) && j.opts.start.call(a, j),
      p.fx.timer(
        p.extend(i, {
          anim: j,
          queue: j.opts.queue,
          elem: a,
        })
      ),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function cX(a, b) {
    var c, d, e, f, g;
    for (c in a) {
      (d = p.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        p.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = p.cssHooks[d]);
      if (g && "expand" in g) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
    }
  }
  function cY(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      q = a.nodeType && bZ(a);
    c.queue ||
      ((j = p._queueHooks(a, "fx")),
      j.unqueued == null &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function () {
          j.unqueued || k();
        })),
      j.unqueued++,
      l.always(function () {
        l.always(function () {
          j.unqueued--, p.queue(a, "fx").length || j.empty.fire();
        });
      })),
      a.nodeType === 1 &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        p.css(a, "display") === "inline" &&
          p.css(a, "float") === "none" &&
          (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline"
            ? (m.display = "inline-block")
            : (m.zoom = 1))),
      c.overflow &&
        ((m.overflow = "hidden"),
        p.support.shrinkWrapBlocks ||
          l.done(function () {
            (m.overflow = c.overflow[0]),
              (m.overflowX = c.overflow[1]),
              (m.overflowY = c.overflow[2]);
          }));
    for (d in b) {
      f = b[d];
      if (cP.exec(f)) {
        delete b[d];
        if (f === (q ? "hide" : "show")) continue;
        o.push(d);
      }
    }
    g = o.length;
    if (g) {
      (h = p._data(a, "fxshow") || p._data(a, "fxshow", {})),
        q
          ? p(a).show()
          : l.done(function () {
              p(a).hide();
            }),
        l.done(function () {
          var b;
          p.removeData(a, "fxshow", !0);
          for (b in n) p.style(a, b, n[b]);
        });
      for (d = 0; d < g; d++)
        (e = o[d]),
          (i = l.createTween(e, q ? h[e] : 0)),
          (n[e] = h[e] || p.style(a, e)),
          e in h ||
            ((h[e] = i.start),
            q &&
              ((i.end = i.start),
              (i.start = e === "width" || e === "height" ? 1 : 0)));
    }
  }
  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e);
  }
  function c$(a, b) {
    var c,
      d = {
        height: a,
      },
      e = 0;
    b = b ? 1 : 0;
    for (; e < 4; e += 2 - b)
      (c = bV[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function da(a) {
    return p.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  var c,
    d,
    e = a.document,
    f = a.location,
    g = a.navigator,
    h = a.jQuery,
    i = a.$,
    j = Array.prototype.push,
    k = Array.prototype.slice,
    l = Array.prototype.indexOf,
    m = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    o = String.prototype.trim,
    p = function (a, b) {
      return new p.fn.init(a, b, c);
    },
    q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    r = /\S/,
    s = /\s+/,
    t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    A = /^-ms-/,
    B = /-([\da-z])/gi,
    C = function (a, b) {
      return (b + "").toUpperCase();
    },
    D = function () {
      e.addEventListener
        ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready())
        : e.readyState === "complete" &&
          (e.detachEvent("onreadystatechange", D), p.ready());
    },
    E = {};
  (p.fn = p.prototype =
    {
      constructor: p,
      init: function (a, c, d) {
        var f, g, h, i;
        if (!a) return this;
        if (a.nodeType)
          return (this.context = this[0] = a), (this.length = 1), this;
        if (typeof a == "string") {
          a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3
            ? (f = [null, a, null])
            : (f = u.exec(a));
          if (f && (f[1] || !c)) {
            if (f[1])
              return (
                (c = c instanceof p ? c[0] : c),
                (i = c && c.nodeType ? c.ownerDocument || c : e),
                (a = p.parseHTML(f[1], i, !0)),
                v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
                p.merge(this, a)
              );
            g = e.getElementById(f[2]);
            if (g && g.parentNode) {
              if (g.id !== f[2]) return d.find(a);
              (this.length = 1), (this[0] = g);
            }
            return (this.context = e), (this.selector = a), this;
          }
          return !c || c.jquery
            ? (c || d).find(a)
            : this.constructor(c).find(a);
        }
        return p.isFunction(a)
          ? d.ready(a)
          : (a.selector !== b &&
              ((this.selector = a.selector), (this.context = a.context)),
            p.makeArray(a, this));
      },
      selector: "",
      jquery: "1.8.2",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return k.call(this);
      },
      get: function (a) {
        return a == null
          ? this.toArray()
          : a < 0
          ? this[this.length + a]
          : this[a];
      },
      pushStack: function (a, b, c) {
        var d = p.merge(this.constructor(), a);
        return (
          (d.prevObject = this),
          (d.context = this.context),
          b === "find"
            ? (d.selector = this.selector + (this.selector ? " " : "") + c)
            : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
          d
        );
      },
      each: function (a, b) {
        return p.each(this, a, b);
      },
      ready: function (a) {
        return p.ready.promise().done(a), this;
      },
      eq: function (a) {
        return (a = +a), a === -1 ? this.slice(a) : this.slice(a, a + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      slice: function () {
        return this.pushStack(
          k.apply(this, arguments),
          "slice",
          k.call(arguments).join(",")
        );
      },
      map: function (a) {
        return this.pushStack(
          p.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: j,
      sort: [].sort,
      splice: [].splice,
    }),
    (p.fn.init.prototype = p.fn),
    (p.extend = p.fn.extend =
      function () {
        var a,
          c,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
        typeof h == "boolean" && ((k = h), (h = arguments[1] || {}), (i = 2)),
          typeof h != "object" && !p.isFunction(h) && (h = {}),
          j === i && ((h = this), --i);
        for (; i < j; i++)
          if ((a = arguments[i]) != null)
            for (c in a) {
              (d = h[c]), (e = a[c]);
              if (h === e) continue;
              k && e && (p.isPlainObject(e) || (f = p.isArray(e)))
                ? (f
                    ? ((f = !1), (g = d && p.isArray(d) ? d : []))
                    : (g = d && p.isPlainObject(d) ? d : {}),
                  (h[c] = p.extend(k, g, e)))
                : e !== b && (h[c] = e);
            }
        return h;
      }),
    p.extend({
      noConflict: function (b) {
        return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? p.readyWait++ : p.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? --p.readyWait : p.isReady) return;
        if (!e.body) return setTimeout(p.ready, 1);
        p.isReady = !0;
        if (a !== !0 && --p.readyWait > 0) return;
        d.resolveWith(e, [p]),
          p.fn.trigger && p(e).trigger("ready").off("ready");
      },
      isFunction: function (a) {
        return p.type(a) === "function";
      },
      isArray:
        Array.isArray ||
        function (a) {
          return p.type(a) === "array";
        },
      isWindow: function (a) {
        return a != null && a == a.window;
      },
      isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function (a) {
        return a == null ? String(a) : E[m.call(a)] || "object";
      },
      isPlainObject: function (a) {
        if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !n.call(a, "constructor") &&
            !n.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        var d;
        for (d in a);
        return d === b || n.call(a, d);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      error: function (a) {
        throw new Error(a);
      },
      parseHTML: function (a, b, c) {
        var d;
        return !a || typeof a != "string"
          ? null
          : (typeof b == "boolean" && ((c = b), (b = 0)),
            (b = b || e),
            (d = v.exec(a))
              ? [b.createElement(d[1])]
              : ((d = p.buildFragment([a], b, c ? null : [])),
                p.merge(
                  [],
                  (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes
                )));
      },
      parseJSON: function (b) {
        if (!b || typeof b != "string") return null;
        b = p.trim(b);
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
        if (w.test(b.replace(y, "@").replace(z, "]").replace(x, "")))
          return new Function("return " + b)();
        p.error("Invalid JSON: " + b);
      },
      parseXML: function (c) {
        var d, e;
        if (!c || typeof c != "string") return null;
        try {
          a.DOMParser
            ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml")))
            : ((d = new ActiveXObject("Microsoft.XMLDOM")),
              (d.async = "false"),
              d.loadXML(c));
        } catch (f) {
          d = b;
        }
        return (
          (!d ||
            !d.documentElement ||
            d.getElementsByTagName("parsererror").length) &&
            p.error("Invalid XML: " + c),
          d
        );
      },
      noop: function () {},
      globalEval: function (b) {
        b &&
          r.test(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(A, "ms-").replace(B, C);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || p.isFunction(a);
        if (d) {
          if (h) {
            for (e in a) if (c.apply(a[e], d) === !1) break;
          } else for (; f < g; ) if (c.apply(a[f++], d) === !1) break;
        } else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break;
        } else for (; f < g; ) if (c.call(a[f], f, a[f++]) === !1) break;
        return a;
      },
      trim:
        o && !o.call("﻿ ")
          ? function (a) {
              return a == null ? "" : o.call(a);
            }
          : function (a) {
              return a == null ? "" : (a + "").replace(t, "");
            },
      makeArray: function (a, b) {
        var c,
          d = b || [];
        return (
          a != null &&
            ((c = p.type(a)),
            a.length == null ||
            c === "string" ||
            c === "function" ||
            c === "regexp" ||
            p.isWindow(a)
              ? j.call(d, a)
              : p.merge(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (l) return l.call(b, a, c);
          (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
          for (; c < d; c++) if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, c) {
        var d = c.length,
          e = a.length,
          f = 0;
        if (typeof d == "number") for (; f < d; f++) a[e++] = c[f];
        else while (c[f] !== b) a[e++] = c[f++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length;
        c = !!c;
        for (; f < g; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j =
            a instanceof p ||
            (i !== b &&
              typeof i == "number" &&
              ((i > 0 && a[0] && a[i - 1]) || i === 0 || p.isArray(a)));
        if (j)
          for (; h < i; h++)
            (e = c(a[h], h, d)), e != null && (g[g.length] = e);
        else for (f in a) (e = c(a[f], f, d)), e != null && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, f;
        return (
          typeof c == "string" && ((d = a[c]), (c = a), (a = d)),
          p.isFunction(a)
            ? ((e = k.call(arguments, 2)),
              (f = function () {
                return a.apply(c, e.concat(k.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || p.guid++),
              f)
            : b
        );
      },
      access: function (a, c, d, e, f, g, h) {
        var i,
          j = d == null,
          k = 0,
          l = a.length;
        if (d && typeof d == "object") {
          for (k in d) p.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          (i = h === b && p.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function (a, b, c) {
                    return i.call(p(a), c);
                  }))
                : (c.call(a, e), (c = null)));
          if (c)
            for (; k < l; k++)
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (p.ready.promise = function (b) {
      if (!d) {
        d = p.Deferred();
        if (e.readyState === "complete") setTimeout(p.ready, 1);
        else if (e.addEventListener)
          e.addEventListener("DOMContentLoaded", D, !1),
            a.addEventListener("load", p.ready, !1);
        else {
          e.attachEvent("onreadystatechange", D),
            a.attachEvent("onload", p.ready);
          var c = !1;
          try {
            c = a.frameElement == null && e.documentElement;
          } catch (f) {}
          c &&
            c.doScroll &&
            (function g() {
              if (!p.isReady) {
                try {
                  c.doScroll("left");
                } catch (a) {
                  return setTimeout(g, 50);
                }
                p.ready();
              }
            })();
        }
      }
      return d.promise(b);
    }),
    p.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase();
      }
    ),
    (c = p(e));
  var F = {};
  (p.Callbacks = function (a) {
    a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
    var c,
      d,
      e,
      f,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function (b) {
        (c = a.memory && b),
          (d = !0),
          (h = f || 0),
          (f = 0),
          (g = i.length),
          (e = !0);
        for (; i && h < g; h++)
          if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (e = !1),
          i && (j ? j.length && k(j.shift()) : c ? (i = []) : l.disable());
      },
      l = {
        add: function () {
          if (i) {
            var b = i.length;
            (function d(b) {
              p.each(b, function (b, c) {
                var e = p.type(c);
                e === "function" && (!a.unique || !l.has(c))
                  ? i.push(c)
                  : c && c.length && e !== "string" && d(c);
              });
            })(arguments),
              e ? (g = i.length) : c && ((f = b), k(c));
          }
          return this;
        },
        remove: function () {
          return (
            i &&
              p.each(arguments, function (a, b) {
                var c;
                while ((c = p.inArray(b, i, c)) > -1)
                  i.splice(c, 1), e && (c <= g && g--, c <= h && h--);
              }),
            this
          );
        },
        has: function (a) {
          return p.inArray(a, i) > -1;
        },
        empty: function () {
          return (i = []), this;
        },
        disable: function () {
          return (i = j = c = b), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (j = b), c || l.disable(), this;
        },
        locked: function () {
          return !j;
        },
        fireWith: function (a, b) {
          return (
            (b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            i && (!d || j) && (e ? j.push(b) : k(b)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return l;
  }),
    p.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return p
                .Deferred(function (c) {
                  p.each(b, function (b, d) {
                    var f = d[0],
                      g = a[b];
                    e[d[1]](
                      p.isFunction(g)
                        ? function () {
                            var a = g.apply(this, arguments);
                            a && p.isFunction(a.promise)
                              ? a
                                  .promise()
                                  .done(c.resolve)
                                  .fail(c.reject)
                                  .progress(c.notify)
                              : c[f + "With"](this === e ? c : this, [a]);
                          }
                        : c[f]
                    );
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return a != null ? p.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          p.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[a ^ 1][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = k.call(arguments),
          d = c.length,
          e = d !== 1 || (a && p.isFunction(a.promise)) ? d : 0,
          f = e === 1 ? a : p.Deferred(),
          g = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? k.call(arguments) : d),
                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
            };
          },
          h,
          i,
          j;
        if (d > 1) {
          (h = new Array(d)), (i = new Array(d)), (j = new Array(d));
          for (; b < d; b++)
            c[b] && p.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(g(b, j, c))
                  .fail(f.reject)
                  .progress(g(b, i, h))
              : --e;
        }
        return e || f.resolveWith(j, c), f.promise();
      },
    }),
    (p.support = (function () {
      var b,
        c,
        d,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = e.createElement("div");
      n.setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = n.getElementsByTagName("*")),
        (d = n.getElementsByTagName("a")[0]),
        (d.style.cssText = "top:1px;float:left;opacity:.5");
      if (!c || !c.length) return {};
      (f = e.createElement("select")),
        (g = f.appendChild(e.createElement("option"))),
        (h = n.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: n.firstChild.nodeType === 3,
          tbody: !n.getElementsByTagName("tbody").length,
          htmlSerialize: !!n.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: d.getAttribute("href") === "/a",
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: h.value === "on",
          optSelected: g.selected,
          getSetAttribute: n.className !== "t",
          enctype: !!e.createElement("form").enctype,
          html5Clone:
            e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
          boxModel: e.compatMode === "CSS1Compat",
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (h.checked = !0),
        (b.noCloneChecked = h.cloneNode(!0).checked),
        (f.disabled = !0),
        (b.optDisabled = !g.disabled);
      try {
        delete n.test;
      } catch (o) {
        b.deleteExpando = !1;
      }
      !n.addEventListener &&
        n.attachEvent &&
        n.fireEvent &&
        (n.attachEvent(
          "onclick",
          (m = function () {
            b.noCloneEvent = !1;
          })
        ),
        n.cloneNode(!0).fireEvent("onclick"),
        n.detachEvent("onclick", m)),
        (h = e.createElement("input")),
        (h.value = "t"),
        h.setAttribute("type", "radio"),
        (b.radioValue = h.value === "t"),
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        n.appendChild(h),
        (i = e.createDocumentFragment()),
        i.appendChild(n.lastChild),
        (b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = h.checked),
        i.removeChild(h),
        i.appendChild(n);
      if (n.attachEvent)
        for (k in {
          submit: !0,
          change: !0,
          focusin: !0,
        })
          (j = "on" + k),
            (l = j in n),
            l ||
              (n.setAttribute(j, "return;"), (l = typeof n[j] == "function")),
            (b[k + "Bubbles"] = l);
      return (
        p(function () {
          var c,
            d,
            f,
            g,
            h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            i = e.getElementsByTagName("body")[0];
          if (!i) return;
          (c = e.createElement("div")),
            (c.style.cssText =
              "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
            i.insertBefore(c, i.firstChild),
            (d = e.createElement("div")),
            c.appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (f = d.getElementsByTagName("td")),
            (f[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (l = f[0].offsetHeight === 0),
            (f[0].style.display = ""),
            (f[1].style.display = "none"),
            (b.reliableHiddenOffsets = l && f[0].offsetHeight === 0),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (b.boxSizing = d.offsetWidth === 4),
            (b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1),
            a.getComputedStyle &&
              ((b.pixelPosition =
                (a.getComputedStyle(d, null) || {}).top !== "1%"),
              (b.boxSizingReliable =
                (
                  a.getComputedStyle(d, null) || {
                    width: "4px",
                  }
                ).width === "4px"),
              (g = e.createElement("div")),
              (g.style.cssText = d.style.cssText = h),
              (g.style.marginRight = g.style.width = "0"),
              (d.style.width = "1px"),
              d.appendChild(g),
              (b.reliableMarginRight = !parseFloat(
                (a.getComputedStyle(g, null) || {}).marginRight
              ))),
            typeof d.style.zoom != "undefined" &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                h + "width:1px;padding:1px;display:inline;zoom:1"),
              (b.inlineBlockNeedsLayout = d.offsetWidth === 3),
              (d.style.display = "block"),
              (d.style.overflow = "visible"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (b.shrinkWrapBlocks = d.offsetWidth !== 3),
              (c.style.zoom = 1)),
            i.removeChild(c),
            (c = d = f = g = null);
        }),
        i.removeChild(n),
        (c = d = f = g = h = i = n = null),
        b
      );
    })());
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g;
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando]), !!a && !K(a)
      );
    },
    data: function (a, c, d, e) {
      if (!p.acceptData(a)) return;
      var f,
        g,
        h = p.expando,
        i = typeof c == "string",
        j = a.nodeType,
        k = j ? p.cache : a,
        l = j ? a[h] : a[h] && h;
      if ((!l || !k[l] || (!e && !k[l].data)) && i && d === b) return;
      l || (j ? (a[h] = l = p.deletedIds.pop() || p.guid++) : (l = h)),
        k[l] || ((k[l] = {}), j || (k[l].toJSON = p.noop));
      if (typeof c == "object" || typeof c == "function")
        e ? (k[l] = p.extend(k[l], c)) : (k[l].data = p.extend(k[l].data, c));
      return (
        (f = k[l]),
        e || (f.data || (f.data = {}), (f = f.data)),
        d !== b && (f[p.camelCase(c)] = d),
        i ? ((g = f[c]), g == null && (g = f[p.camelCase(c)])) : (g = f),
        g
      );
    },
    removeData: function (a, b, c) {
      if (!p.acceptData(a)) return;
      var d,
        e,
        f,
        g = a.nodeType,
        h = g ? p.cache : a,
        i = g ? a[p.expando] : p.expando;
      if (!h[i]) return;
      if (b) {
        d = c ? h[i] : h[i].data;
        if (d) {
          p.isArray(b) ||
            (b in d
              ? (b = [b])
              : ((b = p.camelCase(b)),
                b in d ? (b = [b]) : (b = b.split(" "))));
          for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
          if (!(c ? K : p.isEmptyObject)(d)) return;
        }
      }
      if (!c) {
        delete h[i].data;
        if (!K(h[i])) return;
      }
      g
        ? p.cleanData([a], !0)
        : p.support.deleteExpando || h != h.window
        ? delete h[i]
        : (h[i] = null);
    },
    _data: function (a, b, c) {
      return p.data(a, b, c, !0);
    },
    acceptData: function (a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
      return !b || (b !== !0 && a.getAttribute("classid") === b);
    },
  }),
    p.fn.extend({
      data: function (a, c) {
        var d,
          e,
          f,
          g,
          h,
          i = this[0],
          j = 0,
          k = null;
        if (a === b) {
          if (this.length) {
            k = p.data(i);
            if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
              f = i.attributes;
              for (h = f.length; j < h; j++)
                (g = f[j].name),
                  g.indexOf("data-") ||
                    ((g = p.camelCase(g.substring(5))), J(i, g, k[g]));
              p._data(i, "parsedAttrs", !0);
            }
          }
          return k;
        }
        return typeof a == "object"
          ? this.each(function () {
              p.data(this, a);
            })
          : ((d = a.split(".", 2)),
            (d[1] = d[1] ? "." + d[1] : ""),
            (e = d[1] + "!"),
            p.access(
              this,
              function (c) {
                if (c === b)
                  return (
                    (k = this.triggerHandler("getData" + e, [d[0]])),
                    k === b && i && ((k = p.data(i, a)), (k = J(i, a, k))),
                    k === b && d[1] ? this.data(d[0]) : k
                  );
                (d[1] = c),
                  this.each(function () {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d),
                      p.data(this, a, c),
                      b.triggerHandler("changeData" + e, d);
                  });
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (a) {
        return this.each(function () {
          p.removeData(this, a);
        });
      },
    }),
    p.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = p._data(a, b)),
            c &&
              (!d || p.isArray(c)
                ? (d = p._data(a, b, p.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = p.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = p._queueHooks(a, b),
          g = function () {
            p.dequeue(a, b);
          };
        e === "inprogress" && ((e = c.shift()), d--),
          e &&
            (b === "fx" && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          p._data(a, c) ||
          p._data(a, c, {
            empty: p.Callbacks("once memory").add(function () {
              p.removeData(a, b + "queue", !0), p.removeData(a, c, !0);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          typeof a != "string" && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? p.queue(this[0], a)
            : c === b
            ? this
            : this.each(function () {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a),
                  a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          p.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        return (
          (a = p.fx ? p.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          f = p.Deferred(),
          g = this,
          h = this.length,
          i = function () {
            --e || f.resolveWith(g, [g]);
          };
        typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
        while (h--)
          (d = p._data(g[h], a + "queueHooks")),
            d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c);
      },
    });
  var L,
    M,
    N,
    O = /[\t\r\n]/g,
    P = /\r/g,
    Q = /^(?:button|input)$/i,
    R = /^(?:button|input|object|select|textarea)$/i,
    S = /^a(?:rea|)$/i,
    T =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = p.support.getSetAttribute;
  p.fn.extend({
    attr: function (a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        p.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = p.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (c) {}
        })
      );
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == "string") {
        b = a.split(s);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              f = " " + e.className + " ";
              for (g = 0, h = b.length; g < h; g++)
                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
              e.className = p.trim(f);
            }
        }
      }
      return this;
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == "string") || a === b) {
        c = (a || "").split(s);
        for (h = 0, i = this.length; h < i; h++) {
          e = this[h];
          if (e.nodeType === 1 && e.className) {
            d = (" " + e.className + " ").replace(O, " ");
            for (f = 0, g = c.length; f < g; f++)
              while (d.indexOf(" " + c[f] + " ") >= 0)
                d = d.replace(" " + c[f] + " ", " ");
            e.className = a ? p.trim(d) : "";
          }
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == "boolean";
      return p.isFunction(a)
        ? this.each(function (c) {
            p(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if (c === "string") {
              var e,
                f = 0,
                g = p(this),
                h = b,
                i = a.split(s);
              while ((e = i[f++]))
                (h = d ? h : !g.hasClass(e)),
                  g[h ? "addClass" : "removeClass"](e);
            } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || "");
          });
    },
    hasClass: function (a) {
      var b = " " + a + " ",
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        f = this[0];
      if (!arguments.length) {
        if (f)
          return (
            (c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()]),
            c && "get" in c && (d = c.get(f, "value")) !== b
              ? d
              : ((d = f.value),
                typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
          );
        return;
      }
      return (
        (e = p.isFunction(a)),
        this.each(function (d) {
          var f,
            g = p(this);
          if (this.nodeType !== 1) return;
          e ? (f = a.call(this, d, g.val())) : (f = a),
            f == null
              ? (f = "")
              : typeof f == "number"
              ? (f += "")
              : p.isArray(f) &&
                (f = p.map(f, function (a) {
                  return a == null ? "" : a + "";
                })),
            (c =
              p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]);
          if (!c || !("set" in c) || c.set(this, f, "value") === b)
            this.value = f;
        })
      );
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = a.type === "select-one";
            if (f < 0) return null;
            (c = i ? f : 0), (d = i ? f + 1 : h.length);
            for (; c < d; c++) {
              e = h[c];
              if (
                e.selected &&
                (p.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute("disabled") === null) &&
                (!e.parentNode.disabled ||
                  !p.nodeName(e.parentNode, "optgroup"))
              ) {
                b = p(e).val();
                if (i) return b;
                g.push(b);
              }
            }
            return i && !g.length && h.length ? p(h[f]).val() : g;
          },
          set: function (a, b) {
            var c = p.makeArray(b);
            return (
              p(a)
                .find("option")
                .each(function () {
                  this.selected = p.inArray(p(this).val(), c) >= 0;
                }),
              c.length || (a.selectedIndex = -1),
              c
            );
          },
        },
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2) return;
        if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
        if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
        (h = i !== 1 || !p.isXMLDoc(a)),
          h &&
            ((c = c.toLowerCase()),
            (g = p.attrHooks[c] || (T.test(c) ? M : L)));
        if (d !== b) {
          if (d === null) {
            p.removeAttr(a, c);
            return;
          }
          return g && "set" in g && h && (f = g.set(a, d, c)) !== b
            ? f
            : (a.setAttribute(c, d + ""), d);
        }
        return g && "get" in g && h && (f = g.get(a, c)) !== null
          ? f
          : ((f = a.getAttribute(c)), f === null ? b : f);
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0;
        if (b && a.nodeType === 1) {
          d = b.split(s);
          for (; g < d.length; g++)
            (e = d[g]),
              e &&
                ((c = p.propFix[e] || e),
                (f = T.test(e)),
                f || p.attr(a, e, ""),
                a.removeAttribute(U ? e : c),
                f && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (Q.test(a.nodeName) && a.parentNode)
              p.error("type property can't be changed");
            else if (
              !p.support.radioValue &&
              b === "radio" &&
              p.nodeName(a, "input")
            ) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
        value: {
          get: function (a, b) {
            return L && p.nodeName(a, "button")
              ? L.get(a, b)
              : b in a
              ? a.value
              : null;
          },
          set: function (a, b, c) {
            if (L && p.nodeName(a, "button")) return L.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType;
        if (!a || h === 3 || h === 8 || h === 2) return;
        return (
          (g = h !== 1 || !p.isXMLDoc(a)),
          g && ((c = p.propFix[c] || c), (f = p.propHooks[c])),
          d !== b
            ? f && "set" in f && (e = f.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : f && "get" in f && (e = f.get(a, c)) !== null
            ? e
            : a[c]
        );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified
              ? parseInt(c.value, 10)
              : R.test(a.nodeName) || (S.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (M = {
      get: function (a, c) {
        var d,
          e = p.prop(a, c);
        return e === !0 ||
          (typeof e != "boolean" &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        return (
          b === !1
            ? p.removeAttr(a, c)
            : ((d = p.propFix[c] || c),
              d in a && (a[d] = !0),
              a.setAttribute(c, c.toLowerCase())),
          c
        );
      },
    }),
    U ||
      ((N = {
        name: !0,
        id: !0,
        coords: !0,
      }),
      (L = p.valHooks.button =
        {
          get: function (a, c) {
            var d;
            return (
              (d = a.getAttributeNode(c)),
              d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
            );
          },
          set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return (
              d || ((d = e.createAttribute(c)), a.setAttributeNode(d)),
              (d.value = b + "")
            );
          },
        }),
      p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
          set: function (a, c) {
            if (c === "") return a.setAttribute(b, "auto"), c;
          },
        });
      }),
      (p.attrHooks.contenteditable = {
        get: L.get,
        set: function (a, b, c) {
          b === "" && (b = "false"), L.set(a, b, c);
        },
      })),
    p.support.hrefNormalized ||
      p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    p.support.style ||
      (p.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      }),
    p.support.optSelected ||
      (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      })),
    p.support.enctype || (p.propFix.enctype = "encoding"),
    p.support.checkOn ||
      p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
          get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value;
          },
        };
      }),
    p.each(["radio", "checkbox"], function () {
      p.valHooks[this] = p.extend(p.valHooks[this], {
        set: function (a, b) {
          if (p.isArray(b)) return (a.checked = p.inArray(p(a).val(), b) >= 0);
        },
      });
    });
  var V = /^(?:textarea|input|select)$/i,
    W = /^([^\.]*|)(?:\.(.+)|)$/,
    X = /(?:^|\s)hover(\.\S+|)\b/,
    Y = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = function (a) {
      return p.event.special.hover
        ? a
        : a.replace(X, "mouseenter$1 mouseleave$1");
    };
  (p.event = {
    add: function (a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, q, r;
      if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a)))
        return;
      d.handler && ((o = d), (d = o.handler), (f = o.selector)),
        d.guid || (d.guid = p.guid++),
        (i = g.events),
        i || (g.events = i = {}),
        (h = g.handle),
        h ||
          ((g.handle = h =
            function (a) {
              return typeof p != "undefined" &&
                (!a || p.event.triggered !== a.type)
                ? p.event.dispatch.apply(h.elem, arguments)
                : b;
            }),
          (h.elem = a)),
        (c = p.trim(_(c)).split(" "));
      for (j = 0; j < c.length; j++) {
        (k = W.exec(c[j]) || []),
          (l = k[1]),
          (m = (k[2] || "").split(".").sort()),
          (r = p.event.special[l] || {}),
          (l = (f ? r.delegateType : r.bindType) || l),
          (r = p.event.special[l] || {}),
          (n = p.extend(
            {
              type: l,
              origType: k[1],
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && p.expr.match.needsContext.test(f),
              namespace: m.join("."),
            },
            o
          )),
          (q = i[l]);
        if (!q) {
          (q = i[l] = []), (q.delegateCount = 0);
          if (!r.setup || r.setup.call(a, e, m, h) === !1)
            a.addEventListener
              ? a.addEventListener(l, h, !1)
              : a.attachEvent && a.attachEvent("on" + l, h);
        }
        r.add &&
          (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
          f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
          (p.event.global[l] = !0);
      }
      a = null;
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        q,
        r = p.hasData(a) && p._data(a);
      if (!r || !(m = r.events)) return;
      b = p.trim(_(b || "")).split(" ");
      for (f = 0; f < b.length; f++) {
        (g = W.exec(b[f]) || []), (h = i = g[1]), (j = g[2]);
        if (!h) {
          for (h in m) p.event.remove(a, h + b[f], c, d, !0);
          continue;
        }
        (n = p.event.special[h] || {}),
          (h = (d ? n.delegateType : n.bindType) || h),
          (o = m[h] || []),
          (k = o.length),
          (j = j
            ? new RegExp(
                "(^|\\.)" +
                  j.split(".").sort().join("\\.(?:.*\\.|)") +
                  "(\\.|$)"
              )
            : null);
        for (l = 0; l < o.length; l++)
          (q = o[l]),
            (e || i === q.origType) &&
              (!c || c.guid === q.guid) &&
              (!j || j.test(q.namespace)) &&
              (!d || d === q.selector || (d === "**" && q.selector)) &&
              (o.splice(l--, 1),
              q.selector && o.delegateCount--,
              n.remove && n.remove.call(a, q));
        o.length === 0 &&
          k !== o.length &&
          ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) &&
            p.removeEvent(a, h, r.handle),
          delete m[h]);
      }
      p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0));
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0,
    },
    trigger: function (c, d, f, g) {
      if (!f || (f.nodeType !== 3 && f.nodeType !== 8)) {
        var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = c.type || c,
          t = [];
        if ($.test(s + p.event.triggered)) return;
        s.indexOf("!") >= 0 && ((s = s.slice(0, -1)), (i = !0)),
          s.indexOf(".") >= 0 &&
            ((t = s.split(".")), (s = t.shift()), t.sort());
        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
        (c =
          typeof c == "object"
            ? c[p.expando]
              ? c
              : new p.Event(s, c)
            : new p.Event(s)),
          (c.type = s),
          (c.isTrigger = !0),
          (c.exclusive = i),
          (c.namespace = t.join(".")),
          (c.namespace_re = c.namespace
            ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (m = s.indexOf(":") < 0 ? "on" + s : "");
        if (!f) {
          h = p.cache;
          for (j in h)
            h[j].events &&
              h[j].events[s] &&
              p.event.trigger(c, d, h[j].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = f),
          (d = d != null ? p.makeArray(d) : []),
          d.unshift(c),
          (n = p.event.special[s] || {});
        if (n.trigger && n.trigger.apply(f, d) === !1) return;
        q = [[f, n.bindType || s]];
        if (!g && !n.noBubble && !p.isWindow(f)) {
          (r = n.delegateType || s), (k = $.test(r + s) ? f : f.parentNode);
          for (l = f; k; k = k.parentNode) q.push([k, r]), (l = k);
          l === (f.ownerDocument || e) &&
            q.push([l.defaultView || l.parentWindow || a, r]);
        }
        for (j = 0; j < q.length && !c.isPropagationStopped(); j++)
          (k = q[j][0]),
            (c.type = q[j][1]),
            (o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle")),
            o && o.apply(k, d),
            (o = m && k[m]),
            o &&
              p.acceptData(k) &&
              o.apply &&
              o.apply(k, d) === !1 &&
              c.preventDefault();
        return (
          (c.type = s),
          !g &&
            !c.isDefaultPrevented() &&
            (!n._default || n._default.apply(f.ownerDocument, d) === !1) &&
            (s !== "click" || !p.nodeName(f, "a")) &&
            p.acceptData(f) &&
            m &&
            f[s] &&
            ((s !== "focus" && s !== "blur") || c.target.offsetWidth !== 0) &&
            !p.isWindow(f) &&
            ((l = f[m]),
            l && (f[m] = null),
            (p.event.triggered = s),
            f[s](),
            (p.event.triggered = b),
            l && (f[m] = l)),
          c.result
        );
      }
      return;
    },
    dispatch: function (c) {
      c = p.event.fix(c || a.event);
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        m,
        n,
        o = (p._data(this, "events") || {})[c.type] || [],
        q = o.delegateCount,
        r = k.call(arguments),
        s = !c.exclusive && !c.namespace,
        t = p.event.special[c.type] || {},
        u = [];
      (r[0] = c), (c.delegateTarget = this);
      if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
      if (q && (!c.button || c.type !== "click"))
        for (f = c.target; f != this; f = f.parentNode || this)
          if (f.disabled !== !0 || c.type !== "click") {
            (h = {}), (j = []);
            for (d = 0; d < q; d++)
              (l = o[d]),
                (m = l.selector),
                h[m] === b &&
                  (h[m] = l.needsContext
                    ? p(m, this).index(f) >= 0
                    : p.find(m, this, null, [f]).length),
                h[m] && j.push(l);
            j.length &&
              u.push({
                elem: f,
                matches: j,
              });
          }
      o.length > q &&
        u.push({
          elem: this,
          matches: o.slice(q),
        });
      for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
        (i = u[d]), (c.currentTarget = i.elem);
        for (
          e = 0;
          e < i.matches.length && !c.isImmediatePropagationStopped();
          e++
        ) {
          l = i.matches[e];
          if (
            s ||
            (!c.namespace && !l.namespace) ||
            (c.namespace_re && c.namespace_re.test(l.namespace))
          )
            (c.data = l.data),
              (c.handleObj = l),
              (g = (
                (p.event.special[l.origType] || {}).handle || l.handler
              ).apply(i.elem, r)),
              g !== b &&
                ((c.result = g),
                g === !1 && (c.preventDefault(), c.stopPropagation()));
        }
      }
      return t.postDispatch && t.postDispatch.call(this, c), c.result;
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          a.which == null &&
            (a.which = b.charCode != null ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, c) {
        var d,
          f,
          g,
          h = c.button,
          i = c.fromElement;
        return (
          a.pageX == null &&
            c.clientX != null &&
            ((d = a.target.ownerDocument || e),
            (f = d.documentElement),
            (g = d.body),
            (a.pageX =
              c.clientX +
              ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
              ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
            (a.pageY =
              c.clientY +
              ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
              ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? c.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[p.expando]) return a;
      var b,
        c,
        d = a,
        f = p.event.fixHooks[a.type] || {},
        g = f.props ? this.props.concat(f.props) : this.props;
      a = p.Event(d);
      for (b = g.length; b; ) (c = g[--b]), (a[c] = d[c]);
      return (
        a.target || (a.target = d.srcElement || e),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        f.filter ? f.filter(a, d) : a
      );
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        delegateType: "focusin",
      },
      blur: {
        delegateType: "focusout",
      },
      beforeunload: {
        setup: function (a, b, c) {
          p.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = p.extend(new p.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (p.event.handle = p.event.dispatch),
    (p.removeEvent = e.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c));
        }),
    (p.Event = function (a, b) {
      if (this instanceof p.Event)
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              a.returnValue === !1 ||
              (a.getPreventDefault && a.getPreventDefault())
                ? bb
                : ba))
          : (this.type = a),
          b && p.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || p.now()),
          (this[p.expando] = !0);
      else return new p.Event(a, b);
    }),
    (p.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
      },
      stopPropagation: function () {
        this.isPropagationStopped = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0);
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = bb), this.stopPropagation();
      },
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
    }),
    p.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      },
      function (a, b) {
        p.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj,
              g = f.selector;
            if (!e || (e !== d && !p.contains(d, e)))
              (a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b);
            return c;
          },
        };
      }
    ),
    p.support.submitBubbles ||
      (p.event.special.submit = {
        setup: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target,
              d =
                p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
            d &&
              !p._data(d, "_submit_attached") &&
              (p.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0;
              }),
              p._data(d, "_submit_attached", !0));
          });
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              p.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.remove(this, "._submit");
        },
      }),
    p.support.changeBubbles ||
      (p.event.special.change = {
        setup: function () {
          if (V.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")
              p.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" &&
                  (this._just_changed = !0);
              }),
                p.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    p.event.simulate("change", this, a, !0);
                });
            return !1;
          }
          p.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            V.test(b.nodeName) &&
              !p._data(b, "_change_attached") &&
              (p.event.add(b, "change._change", function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  p.event.simulate("change", this.parentNode, a, !0);
              }),
              p._data(b, "_change_attached", !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== "radio" && b.type !== "checkbox")
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !V.test(this.nodeName);
        },
      }),
    p.support.focusinBubbles ||
      p.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (a, b) {
          var c = 0,
            d = function (a) {
              p.event.simulate(b, a.target, p.event.fix(a), !0);
            };
          p.event.special[b] = {
            setup: function () {
              c++ === 0 && e.addEventListener(a, d, !0);
            },
            teardown: function () {
              --c === 0 && e.removeEventListener(a, d, !0);
            },
          };
        }
      ),
    p.fn.extend({
      on: function (a, c, d, e, f) {
        var g, h;
        if (typeof a == "object") {
          typeof c != "string" && ((d = d || c), (c = b));
          for (h in a) this.on(h, c, d, a[h], f);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == "string"
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = ba;
        else if (!e) return this;
        return (
          f === 1 &&
            ((g = e),
            (e = function (a) {
              return p().off(a), g.apply(this, arguments);
            }),
            (e.guid = g.guid || (g.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, a, e, d, c);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            p(a.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if (typeof a == "object") {
          for (f in a) this.off(f, c, a[f]);
          return this;
        }
        if (c === !1 || typeof c == "function") (d = c), (c = b);
        return (
          d === !1 && (d = ba),
          this.each(function () {
            p.event.remove(this, a, d, c);
          })
        );
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this;
      },
      die: function (a, b) {
        return p(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return arguments.length === 1
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          p.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return p.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function (c) {
            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
            return (
              p._data(this, "lastToggle" + a.guid, e + 1),
              c.preventDefault(),
              b[e].apply(this, arguments) || !1
            );
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        (p.fn[b] = function (a, c) {
          return (
            c == null && ((c = a), (a = null)),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
          );
        }),
          Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
          Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks);
      }
    ),
    (function (a, b) {
      function bc(a, b, c, d) {
        (c = c || []), (b = b || r);
        var e,
          f,
          i,
          j,
          k = b.nodeType;
        if (!a || typeof a != "string") return c;
        if (k !== 1 && k !== 9) return [];
        i = g(b);
        if (!i && !d)
          if ((e = P.exec(a)))
            if ((j = e[1])) {
              if (k === 9) {
                f = b.getElementById(j);
                if (!f || !f.parentNode) return c;
                if (f.id === j) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(j)) &&
                h(b, f) &&
                f.id === j
              )
                return c.push(f), c;
            } else {
              if (e[2])
                return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
              if ((j = e[3]) && _ && b.getElementsByClassName)
                return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c;
            }
        return bp(a.replace(L, "$1"), b, c, d, i);
      }
      function bd(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return c === "input" && b.type === a;
        };
      }
      function be(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return (c === "input" || c === "button") && b.type === a;
        };
      }
      function bf(a) {
        return z(function (b) {
          return (
            (b = +b),
            z(function (c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length;
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function bg(a, b, c) {
        if (a === b) return c;
        var d = a.nextSibling;
        while (d) {
          if (d === b) return -1;
          d = d.nextSibling;
        }
        return 1;
      }
      function bh(a, b) {
        var c,
          d,
          f,
          g,
          h,
          i,
          j,
          k = C[o][a];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = e.preFilter);
        while (h) {
          if (!c || (d = M.exec(h)))
            d && (h = h.slice(d[0].length)), i.push((f = []));
          c = !1;
          if ((d = N.exec(h)))
            f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = d[0].replace(L, " "));
          for (g in e.filter)
            (d = W[g].exec(h)) &&
              (!j[g] || (d = j[g](d, r, !0))) &&
              (f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = g),
              (c.matches = d));
          if (!c) break;
        }
        return b ? h.length : h ? bc.error(a) : C(a, i).slice(0);
      }
      function bi(a, b, d) {
        var e = b.dir,
          f = d && b.dir === "parentNode",
          g = u++;
        return b.first
          ? function (b, c, d) {
              while ((b = b[e])) if (f || b.nodeType === 1) return a(b, c, d);
            }
          : function (b, d, h) {
              if (!h) {
                var i,
                  j = t + " " + g + " ",
                  k = j + c;
                while ((b = b[e]))
                  if (f || b.nodeType === 1) {
                    if ((i = b[o]) === k) return b.sizset;
                    if (typeof i == "string" && i.indexOf(j) === 0) {
                      if (b.sizset) return b;
                    } else {
                      b[o] = k;
                      if (a(b, d, h)) return (b.sizset = !0), b;
                      b.sizset = !1;
                    }
                  }
              } else
                while ((b = b[e]))
                  if (f || b.nodeType === 1) if (a(b, d, h)) return b;
            };
      }
      function bj(a) {
        return a.length > 1
          ? function (b, c, d) {
              var e = a.length;
              while (e--) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function bk(a, b, c, d, e) {
        var f,
          g = [],
          h = 0,
          i = a.length,
          j = b != null;
        for (; h < i; h++)
          if ((f = a[h])) if (!c || c(f, d, e)) g.push(f), j && b.push(h);
        return g;
      }
      function bl(a, b, c, d, e, f) {
        return (
          d && !d[o] && (d = bl(d)),
          e && !e[o] && (e = bl(e, f)),
          z(function (f, g, h, i) {
            if (f && e) return;
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
              q = a && (f || !b) ? bk(p, m, a, h, i) : p,
              r = c ? (e || (f ? a : o || d) ? [] : g) : q;
            c && c(q, r, h, i);
            if (d) {
              (l = bk(r, n)), d(l, [], h, i), (j = l.length);
              while (j--) if ((k = l[j])) r[n[j]] = !(q[n[j]] = k);
            }
            if (f) {
              j = a && r.length;
              while (j--) if ((k = r[j])) f[m[j]] = !(g[m[j]] = k);
            } else (r = bk(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : w.apply(g, r);
          })
        );
      }
      function bm(a) {
        var b,
          c,
          d,
          f = a.length,
          g = e.relative[a[0].type],
          h = g || e.relative[" "],
          i = g ? 1 : 0,
          j = bi(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          k = bi(
            function (a) {
              return y.call(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== l)) ||
                ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
              );
            },
          ];
        for (; i < f; i++)
          if ((c = e.relative[a[i].type])) m = [bi(bj(m), c)];
          else {
            c = e.filter[a[i].type].apply(null, a[i].matches);
            if (c[o]) {
              d = ++i;
              for (; d < f; d++) if (e.relative[a[d].type]) break;
              return bl(
                i > 1 && bj(m),
                i > 1 &&
                  a
                    .slice(0, i - 1)
                    .join("")
                    .replace(L, "$1"),
                c,
                i < d && bm(a.slice(i, d)),
                d < f && bm((a = a.slice(d))),
                d < f && a.join("")
              );
            }
            m.push(c);
          }
        return bj(m);
      }
      function bn(a, b) {
        var d = b.length > 0,
          f = a.length > 0,
          g = function (h, i, j, k, m) {
            var n,
              o,
              p,
              q = [],
              s = 0,
              u = "0",
              x = h && [],
              y = m != null,
              z = l,
              A = h || (f && e.find.TAG("*", (m && i.parentNode) || i)),
              B = (t += z == null ? 1 : Math.E);
            y && ((l = i !== r && i), (c = g.el));
            for (; (n = A[u]) != null; u++) {
              if (f && n) {
                for (o = 0; (p = a[o]); o++)
                  if (p(n, i, j)) {
                    k.push(n);
                    break;
                  }
                y && ((t = B), (c = ++g.el));
              }
              d && ((n = !p && n) && s--, h && x.push(n));
            }
            s += u;
            if (d && u !== s) {
              for (o = 0; (p = b[o]); o++) p(x, q, i, j);
              if (h) {
                if (s > 0) while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                q = bk(q);
              }
              w.apply(k, q),
                y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k);
            }
            return y && ((t = B), (l = z)), x;
          };
        return (g.el = 0), d ? z(g) : g;
      }
      function bo(a, b, c, d) {
        var e = 0,
          f = b.length;
        for (; e < f; e++) bc(a, b[e], c, d);
        return c;
      }
      function bp(a, b, c, d, f) {
        var g,
          h,
          j,
          k,
          l,
          m = bh(a),
          n = m.length;
        if (!d && m.length === 1) {
          h = m[0] = m[0].slice(0);
          if (
            h.length > 2 &&
            (j = h[0]).type === "ID" &&
            b.nodeType === 9 &&
            !f &&
            e.relative[h[1].type]
          ) {
            b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
            if (!b) return c;
            a = a.slice(h.shift().length);
          }
          for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
            j = h[g];
            if (e.relative[(k = j.type)]) break;
            if ((l = e.find[k]))
              if (
                (d = l(
                  j.matches[0].replace(V, ""),
                  (R.test(h[0].type) && b.parentNode) || b,
                  f
                ))
              ) {
                h.splice(g, 1), (a = d.length && h.join(""));
                if (!a) return w.apply(c, x.call(d, 0)), c;
                break;
              }
          }
        }
        return i(a, m)(d, b, f, c, R.test(a)), c;
      }
      function bq() {}
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !0,
        n = "undefined",
        o = ("sizcache" + Math.random()).replace(".", ""),
        q = String,
        r = a.document,
        s = r.documentElement,
        t = 0,
        u = 0,
        v = [].pop,
        w = [].push,
        x = [].slice,
        y =
          [].indexOf ||
          function (a) {
            var b = 0,
              c = this.length;
            for (; b < c; b++) if (this[b] === a) return b;
            return -1;
          },
        z = function (a, b) {
          return (a[o] = b == null || b), a;
        },
        A = function () {
          var a = {},
            b = [];
          return z(function (c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()], (a[c] = d);
          }, a);
        },
        B = A(),
        C = A(),
        D = A(),
        E = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        G = F.replace("w", "w#"),
        H = "([*^$|!~]?=)",
        I =
          "\\[" +
          E +
          "*(" +
          F +
          ")" +
          E +
          "*(?:" +
          H +
          E +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          G +
          ")|)|)" +
          E +
          "*\\]",
        J =
          ":(" +
          F +
          ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
          I +
          ")|[^:]|\\\\.)*|.*))\\)|)",
        K =
          ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          E +
          "*((?:-\\d)?\\d*)" +
          E +
          "*\\)|)(?=[^-]|$)",
        L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
        M = new RegExp("^" + E + "*," + E + "*"),
        N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
        O = new RegExp(J),
        P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Q = /^:not/,
        R = /[\x20\t\r\n\f]*[+~]/,
        S = /:not\($/,
        T = /h\d/i,
        U = /input|select|textarea|button/i,
        V = /\\(?!\\)/g,
        W = {
          ID: new RegExp("^#(" + F + ")"),
          CLASS: new RegExp("^\\.(" + F + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
          TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + J),
          POS: new RegExp(K, "i"),
          CHILD: new RegExp(
            "^:(only|nth|first|last)-child(?:\\(" +
              E +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              E +
              "*(?:([+-]|)" +
              E +
              "*(\\d+)|))" +
              E +
              "*\\)|)",
            "i"
          ),
          needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i"),
        },
        X = function (a) {
          var b = r.createElement("div");
          try {
            return a(b);
          } catch (c) {
            return !1;
          } finally {
            b = null;
          }
        },
        Y = X(function (a) {
          return (
            a.appendChild(r.createComment("")),
            !a.getElementsByTagName("*").length
          );
        }),
        Z = X(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute !== n &&
              a.firstChild.getAttribute("href") === "#"
          );
        }),
        $ = X(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return b !== "boolean" && b !== "string";
        }),
        _ = X(function (a) {
          return (
            (a.innerHTML =
              "<div class='hidden e'></div><div class='hidden'></div>"),
            !a.getElementsByClassName || !a.getElementsByClassName("e").length
              ? !1
              : ((a.lastChild.className = "e"),
                a.getElementsByClassName("e").length === 2)
          );
        }),
        ba = X(function (a) {
          (a.id = o + 0),
            (a.innerHTML =
              "<a name='" + o + "'></a><div name='" + o + "'></div>"),
            s.insertBefore(a, s.firstChild);
          var b =
            r.getElementsByName &&
            r.getElementsByName(o).length ===
              2 + r.getElementsByName(o + 0).length;
          return (d = !r.getElementById(o)), s.removeChild(a), b;
        });
      try {
        x.call(s.childNodes, 0)[0].nodeType;
      } catch (bb) {
        x = function (a) {
          var b,
            c = [];
          for (; (b = this[a]); a++) c.push(b);
          return c;
        };
      }
      (bc.matches = function (a, b) {
        return bc(a, null, null, b);
      }),
        (bc.matchesSelector = function (a, b) {
          return bc(b, null, null, [a]).length > 0;
        }),
        (f = bc.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (e === 1 || e === 9 || e === 11) {
                if (typeof a.textContent == "string") return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += f(a);
              } else if (e === 3 || e === 4) return a.nodeValue;
            } else for (; (b = a[d]); d++) c += f(b);
            return c;
          }),
        (g = bc.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1;
          }),
        (h = bc.contains =
          s.contains
            ? function (a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                  d = b && b.parentNode;
                return (
                  a === d ||
                  !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                );
              }
            : s.compareDocumentPosition
            ? function (a, b) {
                return b && !!(a.compareDocumentPosition(b) & 16);
              }
            : function (a, b) {
                while ((b = b.parentNode)) if (b === a) return !0;
                return !1;
              }),
        (bc.attr = function (a, b) {
          var c,
            d = g(a);
          return (
            d || (b = b.toLowerCase()),
            (c = e.attrHandle[b])
              ? c(a)
              : d || $
              ? a.getAttribute(b)
              : ((c = a.getAttributeNode(b)),
                c
                  ? typeof a[b] == "boolean"
                    ? a[b]
                      ? b
                      : null
                    : c.specified
                    ? c.value
                    : null
                  : null)
          );
        }),
        (e = bc.selectors =
          {
            cacheLength: 50,
            createPseudo: z,
            match: W,
            attrHandle: Z
              ? {}
              : {
                  href: function (a) {
                    return a.getAttribute("href", 2);
                  },
                  type: function (a) {
                    return a.getAttribute("type");
                  },
                },
            find: {
              ID: d
                ? function (a, b, c) {
                    if (typeof b.getElementById !== n && !c) {
                      var d = b.getElementById(a);
                      return d && d.parentNode ? [d] : [];
                    }
                  }
                : function (a, c, d) {
                    if (typeof c.getElementById !== n && !d) {
                      var e = c.getElementById(a);
                      return e
                        ? e.id === a ||
                          (typeof e.getAttributeNode !== n &&
                            e.getAttributeNode("id").value === a)
                          ? [e]
                          : b
                        : [];
                    }
                  },
              TAG: Y
                ? function (a, b) {
                    if (typeof b.getElementsByTagName !== n)
                      return b.getElementsByTagName(a);
                  }
                : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if (a === "*") {
                      var d,
                        e = [],
                        f = 0;
                      for (; (d = c[f]); f++) d.nodeType === 1 && e.push(d);
                      return e;
                    }
                    return c;
                  },
              NAME:
                ba &&
                function (a, b) {
                  if (typeof b.getElementsByName !== n)
                    return b.getElementsByName(name);
                },
              CLASS:
                _ &&
                function (a, b, c) {
                  if (typeof b.getElementsByClassName !== n && !c)
                    return b.getElementsByClassName(a);
                },
            },
            relative: {
              ">": {
                dir: "parentNode",
                first: !0,
              },
              " ": {
                dir: "parentNode",
              },
              "+": {
                dir: "previousSibling",
                first: !0,
              },
              "~": {
                dir: "previousSibling",
              },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(V, "")),
                  (a[3] = (a[4] || a[5] || "").replace(V, "")),
                  a[2] === "~=" && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  a[1] === "nth"
                    ? (a[2] || bc.error(a[0]),
                      (a[3] = +(a[3]
                        ? a[4] + (a[5] || 1)
                        : 2 * (a[2] === "even" || a[2] === "odd"))),
                      (a[4] = +(a[6] + a[7] || a[2] === "odd")))
                    : a[2] && bc.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b, c;
                if (W.CHILD.test(a[0])) return null;
                if (a[3]) a[2] = a[3];
                else if ((b = a[4]))
                  O.test(b) &&
                    (c = bh(b, !0)) &&
                    (c = b.indexOf(")", b.length - c) - b.length) &&
                    ((b = b.slice(0, c)), (a[0] = a[0].slice(0, c))),
                    (a[2] = b);
                return a.slice(0, 3);
              },
            },
            filter: {
              ID: d
                ? function (a) {
                    return (
                      (a = a.replace(V, "")),
                      function (b) {
                        return b.getAttribute("id") === a;
                      }
                    );
                  }
                : function (a) {
                    return (
                      (a = a.replace(V, "")),
                      function (b) {
                        var c =
                          typeof b.getAttributeNode !== n &&
                          b.getAttributeNode("id");
                        return c && c.value === a;
                      }
                    );
                  },
              TAG: function (a) {
                return a === "*"
                  ? function () {
                      return !0;
                    }
                  : ((a = a.replace(V, "").toLowerCase()),
                    function (b) {
                      return b.nodeName && b.nodeName.toLowerCase() === a;
                    });
              },
              CLASS: function (a) {
                var b = B[o][a];
                return (
                  b ||
                    (b = B(
                      a,
                      new RegExp("(^|" + E + ")" + a + "(" + E + "|$)")
                    )),
                  function (a) {
                    return b.test(
                      a.className ||
                        (typeof a.getAttribute !== n &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }
                );
              },
              ATTR: function (a, b, c) {
                return function (d, e) {
                  var f = bc.attr(d, a);
                  return f == null
                    ? b === "!="
                    : b
                    ? ((f += ""),
                      b === "="
                        ? f === c
                        : b === "!="
                        ? f !== c
                        : b === "^="
                        ? c && f.indexOf(c) === 0
                        : b === "*="
                        ? c && f.indexOf(c) > -1
                        : b === "$="
                        ? c && f.substr(f.length - c.length) === c
                        : b === "~="
                        ? (" " + f + " ").indexOf(c) > -1
                        : b === "|="
                        ? f === c || f.substr(0, c.length + 1) === c + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d) {
                return a === "nth"
                  ? function (a) {
                      var b,
                        e,
                        f = a.parentNode;
                      if (c === 1 && d === 0) return !0;
                      if (f) {
                        e = 0;
                        for (b = f.firstChild; b; b = b.nextSibling)
                          if (b.nodeType === 1) {
                            e++;
                            if (a === b) break;
                          }
                      }
                      return (e -= d), e === c || (e % c === 0 && e / c >= 0);
                    }
                  : function (b) {
                      var c = b;
                      switch (a) {
                        case "only":
                        case "first":
                          while ((c = c.previousSibling))
                            if (c.nodeType === 1) return !1;
                          if (a === "first") return !0;
                          c = b;
                        case "last":
                          while ((c = c.nextSibling))
                            if (c.nodeType === 1) return !1;
                          return !0;
                      }
                    };
              },
              PSEUDO: function (a, b) {
                var c,
                  d =
                    e.pseudos[a] ||
                    e.setFilters[a.toLowerCase()] ||
                    bc.error("unsupported pseudo: " + a);
                return d[o]
                  ? d(b)
                  : d.length > 1
                  ? ((c = [a, a, "", b]),
                    e.setFilters.hasOwnProperty(a.toLowerCase())
                      ? z(function (a, c) {
                          var e,
                            f = d(a, b),
                            g = f.length;
                          while (g--)
                            (e = y.call(a, f[g])), (a[e] = !(c[e] = f[g]));
                        })
                      : function (a) {
                          return d(a, 0, c);
                        })
                  : d;
              },
            },
            pseudos: {
              not: z(function (a) {
                var b = [],
                  c = [],
                  d = i(a.replace(L, "$1"));
                return d[o]
                  ? z(function (a, b, c, e) {
                      var f,
                        g = d(a, null, e, []),
                        h = a.length;
                      while (h--) if ((f = g[h])) a[h] = !(b[h] = f);
                    })
                  : function (a, e, f) {
                      return (b[0] = a), d(b, null, f, c), !c.pop();
                    };
              }),
              has: z(function (a) {
                return function (b) {
                  return bc(a, b).length > 0;
                };
              }),
              contains: z(function (a) {
                return function (b) {
                  return (b.textContent || b.innerText || f(b)).indexOf(a) > -1;
                };
              }),
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  (b === "input" && !!a.checked) ||
                  (b === "option" && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              parent: function (a) {
                return !e.pseudos.empty(a);
              },
              empty: function (a) {
                var b;
                a = a.firstChild;
                while (a) {
                  if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4)
                    return !1;
                  a = a.nextSibling;
                }
                return !0;
              },
              header: function (a) {
                return T.test(a.nodeName);
              },
              text: function (a) {
                var b, c;
                return (
                  a.nodeName.toLowerCase() === "input" &&
                  (b = a.type) === "text" &&
                  ((c = a.getAttribute("type")) == null ||
                    c.toLowerCase() === b)
                );
              },
              radio: bd("radio"),
              checkbox: bd("checkbox"),
              file: bd("file"),
              password: bd("password"),
              image: bd("image"),
              submit: be("submit"),
              reset: be("reset"),
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" && a.type === "button") || b === "button";
              },
              input: function (a) {
                return U.test(a.nodeName);
              },
              focus: function (a) {
                var b = a.ownerDocument;
                return (
                  a === b.activeElement &&
                  (!b.hasFocus || b.hasFocus()) &&
                  (!!a.type || !!a.href)
                );
              },
              active: function (a) {
                return a === a.ownerDocument.activeElement;
              },
              first: bf(function (a, b, c) {
                return [0];
              }),
              last: bf(function (a, b, c) {
                return [b - 1];
              }),
              eq: bf(function (a, b, c) {
                return [c < 0 ? c + b : c];
              }),
              even: bf(function (a, b, c) {
                for (var d = 0; d < b; d += 2) a.push(d);
                return a;
              }),
              odd: bf(function (a, b, c) {
                for (var d = 1; d < b; d += 2) a.push(d);
                return a;
              }),
              lt: bf(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: bf(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (j = s.compareDocumentPosition
          ? function (a, b) {
              return a === b
                ? ((k = !0), 0)
                : (
                    !a.compareDocumentPosition || !b.compareDocumentPosition
                      ? a.compareDocumentPosition
                      : a.compareDocumentPosition(b) & 4
                  )
                ? -1
                : 1;
            }
          : function (a, b) {
              if (a === b) return (k = !0), 0;
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
              if (g === h) return bg(a, b);
              if (!g) return -1;
              if (!h) return 1;
              while (i) e.unshift(i), (i = i.parentNode);
              i = h;
              while (i) f.unshift(i), (i = i.parentNode);
              (c = e.length), (d = f.length);
              for (var j = 0; j < c && j < d; j++)
                if (e[j] !== f[j]) return bg(e[j], f[j]);
              return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1);
            }),
        [0, 0].sort(j),
        (m = !k),
        (bc.uniqueSort = function (a) {
          var b,
            c = 1;
          (k = m), a.sort(j);
          if (k) for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1);
          return a;
        }),
        (bc.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (i = bc.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = D[o][a];
            if (!f) {
              b || (b = bh(a)), (c = b.length);
              while (c--) (f = bm(b[c])), f[o] ? d.push(f) : e.push(f);
              f = D(a, bn(e, d));
            }
            return f;
          }),
        r.querySelectorAll &&
          (function () {
            var a,
              b = bp,
              c = /'|\\/g,
              d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              e = [":focus"],
              f = [":active", ":focus"],
              h =
                s.matchesSelector ||
                s.mozMatchesSelector ||
                s.webkitMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector;
            X(function (a) {
              (a.innerHTML = "<select><option selected=''></option></select>"),
                a.querySelectorAll("[selected]").length ||
                  e.push(
                    "\\[" +
                      E +
                      "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                  ),
                a.querySelectorAll(":checked").length || e.push(":checked");
            }),
              X(function (a) {
                (a.innerHTML = "<p test=''></p>"),
                  a.querySelectorAll("[test^='']").length &&
                    e.push("[*^$]=" + E + "*(?:\"\"|'')"),
                  (a.innerHTML = "<input type='hidden'/>"),
                  a.querySelectorAll(":enabled").length ||
                    e.push(":enabled", ":disabled");
              }),
              (e = new RegExp(e.join("|"))),
              (bp = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                  var i,
                    j,
                    k = !0,
                    l = o,
                    m = d,
                    n = d.nodeType === 9 && a;
                  if (
                    d.nodeType === 1 &&
                    d.nodeName.toLowerCase() !== "object"
                  ) {
                    (i = bh(a)),
                      (k = d.getAttribute("id"))
                        ? (l = k.replace(c, "\\$&"))
                        : d.setAttribute("id", l),
                      (l = "[id='" + l + "'] "),
                      (j = i.length);
                    while (j--) i[j] = l + i[j].join("");
                    (m = (R.test(a) && d.parentNode) || d), (n = i.join(","));
                  }
                  if (n)
                    try {
                      return w.apply(f, x.call(m.querySelectorAll(n), 0)), f;
                    } catch (p) {
                    } finally {
                      k || d.removeAttribute("id");
                    }
                }
                return b(a, d, f, g, h);
              }),
              h &&
                (X(function (b) {
                  a = h.call(b, "div");
                  try {
                    h.call(b, "[test!='']:sizzle"), f.push("!=", J);
                  } catch (c) {}
                }),
                (f = new RegExp(f.join("|"))),
                (bc.matchesSelector = function (b, c) {
                  c = c.replace(d, "='$1']");
                  if (!g(b) && !f.test(c) && (!e || !e.test(c)))
                    try {
                      var i = h.call(b, c);
                      if (i || a || (b.document && b.document.nodeType !== 11))
                        return i;
                    } catch (j) {}
                  return bc(c, null, null, [b]).length > 0;
                }));
          })(),
        (e.pseudos.nth = e.pseudos.eq),
        (e.filters = bq.prototype = e.pseudos),
        (e.setFilters = new bq()),
        (bc.attr = p.attr),
        (p.find = bc),
        (p.expr = bc.selectors),
        (p.expr[":"] = p.expr.pseudos),
        (p.unique = bc.uniqueSort),
        (p.text = bc.getText),
        (p.isXMLDoc = bc.isXML),
        (p.contains = bc.contains);
    })(a);
  var bc = /Until$/,
    bd = /^(?:parents|prev(?:Until|All))/,
    be = /^.[^:#\[\.,]*$/,
    bf = p.expr.match.needsContext,
    bg = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  p.fn.extend({
    find: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (typeof a != "string")
        return p(a).filter(function () {
          for (b = 0, c = h.length; b < c; b++)
            if (p.contains(h[b], this)) return !0;
        });
      g = this.pushStack("", "find", a);
      for (b = 0, c = this.length; b < c; b++) {
        (d = g.length), p.find(a, this[b], g);
        if (b > 0)
          for (e = d; e < g.length; e++)
            for (f = 0; f < d; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break;
              }
      }
      return g;
    },
    has: function (a) {
      var b,
        c = p(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) if (p.contains(this, c[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(bj(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(bj(this, a, !0), "filter", a);
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == "string"
          ? bf.test(a)
            ? p(a, this.context).index(this[0]) >= 0
            : p.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
      for (; d < e; d++) {
        c = this[d];
        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }
          c = c.parentNode;
        }
      }
      return (
        (f = f.length > 1 ? p.unique(f) : f), this.pushStack(f, "closest", a)
      );
    },
    index: function (a) {
      return a
        ? typeof a == "string"
          ? p.inArray(this[0], p(a))
          : p.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (a, b) {
      var c =
          typeof a == "string"
            ? p(a, b)
            : p.makeArray(a && a.nodeType ? [a] : a),
        d = p.merge(this.get(), c);
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d));
    },
    addBack: function (a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    (p.fn.andSelf = p.fn.addBack),
    p.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
          return p.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return p.dir(a, "parentNode", c);
        },
        next: function (a) {
          return bi(a, "nextSibling");
        },
        prev: function (a) {
          return bi(a, "previousSibling");
        },
        nextAll: function (a) {
          return p.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return p.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return p.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return p.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return p.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return p.sibling(a.firstChild);
        },
        contents: function (a) {
          return p.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : p.merge([], a.childNodes);
        },
      },
      function (a, b) {
        p.fn[a] = function (c, d) {
          var e = p.map(this, b, c);
          return (
            bc.test(a) || (d = c),
            d && typeof d == "string" && (e = p.filter(d, e)),
            (e = this.length > 1 && !bg[a] ? p.unique(e) : e),
            this.length > 1 && bd.test(a) && (e = e.reverse()),
            this.pushStack(e, a, k.call(arguments).join(","))
          );
        };
      }
    ),
    p.extend({
      filter: function (a, b, c) {
        return (
          c && (a = ":not(" + a + ")"),
          b.length === 1
            ? p.find.matchesSelector(b[0], a)
              ? [b[0]]
              : []
            : p.find.matches(a, b)
        );
      },
      dir: function (a, c, d) {
        var e = [],
          f = a[c];
        while (
          f &&
          f.nodeType !== 9 &&
          (d === b || f.nodeType !== 1 || !p(f).is(d))
        )
          f.nodeType === 1 && e.push(f), (f = f[c]);
        return e;
      },
      sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var bl =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    bm = / jQuery\d+="(?:null|\d+)"/g,
    bn = /^\s+/,
    bo =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bp = /<([\w:]+)/,
    bq = /<tbody/i,
    br = /<|&#?\w+;/,
    bs = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
    bv = /^(?:checkbox|radio)$/,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bx = /\/(java|ecma)script/i,
    by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    bz = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    bA = bk(e),
    bB = bA.appendChild(e.createElement("div"));
  (bz.optgroup = bz.option),
    (bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead),
    (bz.th = bz.td),
    p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
    p.fn.extend({
      text: function (a) {
        return p.access(
          this,
          function (a) {
            return a === b
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || e).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if (p.isFunction(a))
          return this.each(function (b) {
            p(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return p.isFunction(a)
          ? this.each(function (b) {
              p(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = p(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = p.isFunction(a);
        return this.each(function (c) {
          p(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) &&
            this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(a, this), "before", this.selector);
        }
      },
      after: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(this, a), "after", this.selector);
        }
      },
      remove: function (a, b) {
        var c,
          d = 0;
        for (; (c = this[d]) != null; d++)
          if (!a || p.filter(a, [c]).length)
            !b &&
              c.nodeType === 1 &&
              (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])),
              c.parentNode && c.parentNode.removeChild(c);
        return this;
      },
      empty: function () {
        var a,
          b = 0;
        for (; (a = this[b]) != null; b++) {
          a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
          while (a.firstChild) a.removeChild(a.firstChild);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = a == null ? !1 : a),
          (b = b == null ? a : b),
          this.map(function () {
            return p.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return p.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
            if (
              typeof a == "string" &&
              !bs.test(a) &&
              (p.support.htmlSerialize || !bu.test(a)) &&
              (p.support.leadingWhitespace || !bn.test(a)) &&
              !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(bo, "<$1></$2>");
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (p.cleanData(c.getElementsByTagName("*")),
                      (c.innerHTML = a));
                c = 0;
              } catch (f) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        return bh(this[0])
          ? this.length
            ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a)
            : this
          : p.isFunction(a)
          ? this.each(function (b) {
              var c = p(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            })
          : (typeof a != "string" && (a = p(a).detach()),
            this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              p(this).remove(), b ? p(b).before(a) : p(c).append(a);
            }));
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          l = this.length;
        if (
          !p.support.checkClone &&
          l > 1 &&
          typeof j == "string" &&
          bw.test(j)
        )
          return this.each(function () {
            p(this).domManip(a, c, d);
          });
        if (p.isFunction(j))
          return this.each(function (e) {
            var f = p(this);
            (a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
          });
        if (this[0]) {
          (e = p.buildFragment(a, this, k)),
            (g = e.fragment),
            (f = g.firstChild),
            g.childNodes.length === 1 && (g = f);
          if (f) {
            c = c && p.nodeName(f, "tr");
            for (h = e.cacheable || l - 1; i < l; i++)
              d.call(
                c && p.nodeName(this[i], "table")
                  ? bC(this[i], "tbody")
                  : this[i],
                i === h ? g : p.clone(g, !0, !0)
              );
          }
          (g = f = null),
            k.length &&
              p.each(k, function (a, b) {
                b.src
                  ? p.ajax
                    ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : p.error("no ajax")
                  : p.globalEval(
                      (b.text || b.textContent || b.innerHTML || "").replace(
                        by,
                        ""
                      )
                    ),
                  b.parentNode && b.parentNode.removeChild(b);
              });
        }
        return this;
      },
    }),
    (p.buildFragment = function (a, c, d) {
      var f,
        g,
        h,
        i = a[0];
      return (
        (c = c || e),
        (c = (!c.nodeType && c[0]) || c),
        (c = c.ownerDocument || c),
        a.length === 1 &&
          typeof i == "string" &&
          i.length < 512 &&
          c === e &&
          i.charAt(0) === "<" &&
          !bt.test(i) &&
          (p.support.checkClone || !bw.test(i)) &&
          (p.support.html5Clone || !bu.test(i)) &&
          ((g = !0), (f = p.fragments[i]), (h = f !== b)),
        f ||
          ((f = c.createDocumentFragment()),
          p.clean(a, c, f, d),
          g && (p.fragments[i] = h && f)),
        {
          fragment: f,
          cacheable: g,
        }
      );
    }),
    (p.fragments = {}),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        p.fn[a] = function (c) {
          var d,
            e = 0,
            f = [],
            g = p(c),
            h = g.length,
            i = this.length === 1 && this[0].parentNode;
          if (
            (i == null ||
              (i && i.nodeType === 11 && i.childNodes.length === 1)) &&
            h === 1
          )
            return g[b](this[0]), this;
          for (; e < h; e++)
            (d = (e > 0 ? this.clone(!0) : this).get()),
              p(g[e])[b](d),
              (f = f.concat(d));
          return this.pushStack(f, a, g.selector);
        };
      }
    ),
    p.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        p.support.html5Clone ||
        p.isXMLDoc(a) ||
        !bu.test("<" + a.nodeName + ">")
          ? (g = a.cloneNode(!0))
          : ((bB.innerHTML = a.outerHTML), bB.removeChild((g = bB.firstChild)));
        if (
          (!p.support.noCloneEvent || !p.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !p.isXMLDoc(a)
        ) {
          bE(a, g), (d = bF(a)), (e = bF(g));
          for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f]);
        }
        if (b) {
          bD(a, g);
          if (c) {
            (d = bF(a)), (e = bF(g));
            for (f = 0; d[f]; ++f) bD(d[f], e[f]);
          }
        }
        return (d = e = null), g;
      },
      clean: function (a, b, c, d) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = b === e && bA,
          t = [];
        if (!b || typeof b.createDocumentFragment == "undefined") b = e;
        for (f = 0; (h = a[f]) != null; f++) {
          typeof h == "number" && (h += "");
          if (!h) continue;
          if (typeof h == "string")
            if (!br.test(h)) h = b.createTextNode(h);
            else {
              (s = s || bk(b)),
                (l = b.createElement("div")),
                s.appendChild(l),
                (h = h.replace(bo, "<$1></$2>")),
                (i = (bp.exec(h) || ["", ""])[1].toLowerCase()),
                (j = bz[i] || bz._default),
                (k = j[0]),
                (l.innerHTML = j[1] + h + j[2]);
              while (k--) l = l.lastChild;
              if (!p.support.tbody) {
                (m = bq.test(h)),
                  (n =
                    i === "table" && !m
                      ? l.firstChild && l.firstChild.childNodes
                      : j[1] === "<table>" && !m
                      ? l.childNodes
                      : []);
                for (g = n.length - 1; g >= 0; --g)
                  p.nodeName(n[g], "tbody") &&
                    !n[g].childNodes.length &&
                    n[g].parentNode.removeChild(n[g]);
              }
              !p.support.leadingWhitespace &&
                bn.test(h) &&
                l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                (h = l.childNodes),
                l.parentNode.removeChild(l);
            }
          h.nodeType ? t.push(h) : p.merge(t, h);
        }
        l && (h = l = s = null);
        if (!p.support.appendChecked)
          for (f = 0; (h = t[f]) != null; f++)
            p.nodeName(h, "input")
              ? bG(h)
              : typeof h.getElementsByTagName != "undefined" &&
                p.grep(h.getElementsByTagName("input"), bG);
        if (c) {
          q = function (a) {
            if (!a.type || bx.test(a.type))
              return d
                ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                : c.appendChild(a);
          };
          for (f = 0; (h = t[f]) != null; f++)
            if (!p.nodeName(h, "script") || !q(h))
              c.appendChild(h),
                typeof h.getElementsByTagName != "undefined" &&
                  ((r = p.grep(
                    p.merge([], h.getElementsByTagName("script")),
                    q
                  )),
                  t.splice.apply(t, [f + 1, 0].concat(r)),
                  (f += r.length));
        }
        return t;
      },
      cleanData: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special;
        for (; (e = a[g]) != null; g++)
          if (b || p.acceptData(e)) {
            (d = e[h]), (c = d && i[d]);
            if (c) {
              if (c.events)
                for (f in c.events)
                  k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
              i[d] &&
                (delete i[d],
                j
                  ? delete e[h]
                  : e.removeAttribute
                  ? e.removeAttribute(h)
                  : (e[h] = null),
                p.deletedIds.push(d));
            }
          }
      },
    }),
    (function () {
      var a, b;
      (p.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return {
          browser: b[1] || "",
          version: b[2] || "0",
        };
      }),
        (a = p.uaMatch(g.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.chrome ? (b.webkit = !0) : b.webkit && (b.safari = !0),
        (p.browser = b),
        (p.sub = function () {
          function a(b, c) {
            return new a.fn.init(b, c);
          }
          p.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function c(c, d) {
              return (
                d && d instanceof p && !(d instanceof a) && (d = a(d)),
                p.fn.init.call(this, c, d, b)
              );
            }),
            (a.fn.init.prototype = a.fn);
          var b = a(e);
          return a;
        });
    })();
  var bH,
    bI,
    bJ,
    bK = /alpha\([^)]*\)/i,
    bL = /opacity=([^)]*)/,
    bM = /^(top|right|bottom|left)$/,
    bN = /^(none|table(?!-c[ea]).+)/,
    bO = /^margin/,
    bP = new RegExp("^(" + q + ")(.*)$", "i"),
    bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
    bR = new RegExp("^([-+])=(" + q + ")", "i"),
    bS = {},
    bT = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    bU = {
      letterSpacing: 0,
      fontWeight: 400,
    },
    bV = ["Top", "Right", "Bottom", "Left"],
    bW = ["Webkit", "O", "Moz", "ms"],
    bX = p.fn.toggle;
  p.fn.extend({
    css: function (a, c) {
      return p.access(
        this,
        function (a, c, d) {
          return d !== b ? p.style(a, c, d) : p.css(a, c);
        },
        a,
        c,
        arguments.length > 1
      );
    },
    show: function () {
      return b$(this, !0);
    },
    hide: function () {
      return b$(this);
    },
    toggle: function (a, b) {
      var c = typeof a == "boolean";
      return p.isFunction(a) && p.isFunction(b)
        ? bX.apply(this, arguments)
        : this.each(function () {
            (c ? a : bZ(this)) ? p(this).show() : p(this).hide();
          });
    },
  }),
    p.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = bH(a, "opacity");
              return c === "" ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: p.support.cssFloat ? "cssFloat" : "styleFloat",
      },
      style: function (a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
        var f,
          g,
          h,
          i = p.camelCase(c),
          j = a.style;
        (c = p.cssProps[i] || (p.cssProps[i] = bY(j, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]);
        if (d === b)
          return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
        (g = typeof d),
          g === "string" &&
            (f = bR.exec(d)) &&
            ((d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c))), (g = "number"));
        if (d == null || (g === "number" && isNaN(d))) return;
        g === "number" && !p.cssNumber[i] && (d += "px");
        if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b)
          try {
            j[c] = d;
          } catch (k) {}
      },
      css: function (a, c, d, e) {
        var f,
          g,
          h,
          i = p.camelCase(c);
        return (
          (c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]),
          h && "get" in h && (f = h.get(a, !0, e)),
          f === b && (f = bH(a, c)),
          f === "normal" && c in bU && (f = bU[c]),
          d || e !== b
            ? ((g = parseFloat(f)), d || p.isNumeric(g) ? g || 0 : f)
            : f
        );
      },
      swap: function (a, b, c) {
        var d,
          e,
          f = {};
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d;
      },
    }),
    a.getComputedStyle
      ? (bH = function (b, c) {
          var d,
            e,
            f,
            g,
            h = a.getComputedStyle(b, null),
            i = b.style;
          return (
            h &&
              ((d = h[c]),
              d === "" &&
                !p.contains(b.ownerDocument, b) &&
                (d = p.style(b, c)),
              bQ.test(d) &&
                bO.test(c) &&
                ((e = i.width),
                (f = i.minWidth),
                (g = i.maxWidth),
                (i.minWidth = i.maxWidth = i.width = d),
                (d = h.width),
                (i.width = e),
                (i.minWidth = f),
                (i.maxWidth = g))),
            d
          );
        })
      : e.documentElement.currentStyle &&
        (bH = function (a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style;
          return (
            e == null && f && f[b] && (e = f[b]),
            bQ.test(e) &&
              !bM.test(b) &&
              ((c = f.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (f.left = b === "fontSize" ? "1em" : e),
              (e = f.pixelLeft + "px"),
              (f.left = c),
              d && (a.runtimeStyle.left = d)),
            e === "" ? "auto" : e
          );
        }),
    p.each(["height", "width"], function (a, b) {
      p.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return a.offsetWidth === 0 && bN.test(bH(a, "display"))
              ? p.swap(a, bT, function () {
                  return cb(a, b, d);
                })
              : cb(a, b, d);
        },
        set: function (a, c, d) {
          return b_(
            a,
            c,
            d
              ? ca(
                  a,
                  b,
                  d,
                  p.support.boxSizing && p.css(a, "boxSizing") === "border-box"
                )
              : 0
          );
        },
      };
    }),
    p.support.opacity ||
      (p.cssHooks.opacity = {
        get: function (a, b) {
          return bL.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
            f = (d && d.filter) || c.filter || "";
          c.zoom = 1;
          if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
            c.removeAttribute("filter");
            if (d && !d.filter) return;
          }
          c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e;
        },
      }),
    p(function () {
      p.support.reliableMarginRight ||
        (p.cssHooks.marginRight = {
          get: function (a, b) {
            return p.swap(
              a,
              {
                display: "inline-block",
              },
              function () {
                if (b) return bH(a, "marginRight");
              }
            );
          },
        }),
        !p.support.pixelPosition &&
          p.fn.position &&
          p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {
              get: function (a, c) {
                if (c) {
                  var d = bH(a, b);
                  return bQ.test(d) ? p(a).position()[b] + "px" : d;
                }
              },
            };
          });
    }),
    p.expr &&
      p.expr.filters &&
      ((p.expr.filters.hidden = function (a) {
        return (
          (a.offsetWidth === 0 && a.offsetHeight === 0) ||
          (!p.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || bH(a, "display")) === "none")
        );
      }),
      (p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a);
      })),
    p.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (a, b) {
        (p.cssHooks[a + b] = {
          expand: function (c) {
            var d,
              e = typeof c == "string" ? c.split(" ") : [c],
              f = {};
            for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
            return f;
          },
        }),
          bO.test(a) || (p.cssHooks[a + b].set = b_);
      }
    );
  var cd = /%20/g,
    ce = /\[\]$/,
    cf = /\r?\n/g,
    cg =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ch = /^(?:select|textarea)/i;
  p.fn.extend({
    serialize: function () {
      return p.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? p.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || ch.test(this.nodeName) || cg.test(this.type))
          );
        })
        .map(function (a, b) {
          var c = p(this).val();
          return c == null
            ? null
            : p.isArray(c)
            ? p.map(c, function (a, c) {
                return {
                  name: b.name,
                  value: a.replace(cf, "\r\n"),
                };
              })
            : {
                name: b.name,
                value: c.replace(cf, "\r\n"),
              };
        })
        .get();
    },
  }),
    (p.param = function (a, c) {
      var d,
        e = [],
        f = function (a, b) {
          (b = p.isFunction(b) ? b() : b == null ? "" : b),
            (e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
      if (p.isArray(a) || (a.jquery && !p.isPlainObject(a)))
        p.each(a, function () {
          f(this.name, this.value);
        });
      else for (d in a) ci(d, a[d], c, f);
      return e.join("&").replace(cd, "+");
    });
  var cj,
    ck,
    cl = /#.*$/,
    cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    co = /^(?:GET|HEAD)$/,
    cp = /^\/\//,
    cq = /\?/,
    cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    cs = /([?&])_=[^&]*/,
    ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cu = p.fn.load,
    cv = {},
    cw = {},
    cx = ["*/"] + ["*"];
  try {
    ck = f.href;
  } catch (cy) {
    (ck = e.createElement("a")), (ck.href = ""), (ck = ck.href);
  }
  (cj = ct.exec(ck.toLowerCase()) || []),
    (p.fn.load = function (a, c, d) {
      if (typeof a != "string" && cu) return cu.apply(this, arguments);
      if (!this.length) return this;
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        p.isFunction(c)
          ? ((d = c), (c = b))
          : c && typeof c == "object" && (f = "POST"),
        p
          .ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
              d && h.each(d, g || [a.responseText, b, a]);
            },
          })
          .done(function (a) {
            (g = arguments),
              h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a);
          }),
        this
      );
    }),
    p.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, b) {
        p.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    p.each(["get", "post"], function (a, c) {
      p[c] = function (a, d, e, f) {
        return (
          p.isFunction(d) && ((f = f || e), (e = d), (d = b)),
          p.ajax({
            type: c,
            url: a,
            data: d,
            success: e,
            dataType: f,
          })
        );
      };
    }),
    p.extend({
      getScript: function (a, c) {
        return p.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return p.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        return (
          b ? cB(a, p.ajaxSettings) : ((b = a), (a = p.ajaxSettings)),
          cB(a, b),
          a
        );
      },
      ajaxSettings: {
        url: ck,
        isLocal: cn.test(cj[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": cx,
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
        },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": p.parseJSON,
          "text xml": p.parseXML,
        },
        flatOptions: {
          context: !0,
          url: !0,
        },
      },
      ajaxPrefilter: cz(cv),
      ajaxTransport: cz(cw),
      ajax: function (a, c) {
        function y(a, c, f, i) {
          var k,
            s,
            t,
            u,
            w,
            y = c;
          if (v === 2) return;
          (v = 2),
            h && clearTimeout(h),
            (g = b),
            (e = i || ""),
            (x.readyState = a > 0 ? 4 : 0),
            f && (u = cC(l, x, f));
          if ((a >= 200 && a < 300) || a === 304)
            l.ifModified &&
              ((w = x.getResponseHeader("Last-Modified")),
              w && (p.lastModified[d] = w),
              (w = x.getResponseHeader("Etag")),
              w && (p.etag[d] = w)),
              a === 304
                ? ((y = "notmodified"), (k = !0))
                : ((k = cD(l, u)),
                  (y = k.state),
                  (s = k.data),
                  (t = k.error),
                  (k = !t));
          else {
            t = y;
            if (!y || a) (y = "error"), a < 0 && (a = 0);
          }
          (x.status = a),
            (x.statusText = (c || y) + ""),
            k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
            x.statusCode(r),
            (r = b),
            j &&
              n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]),
            q.fireWith(m, [x, y]),
            j &&
              (n.trigger("ajaxComplete", [x, l]),
              --p.active || p.event.trigger("ajaxStop"));
        }
        typeof a == "object" && ((c = a), (a = b)), (c = c || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = p.ajaxSetup({}, c),
          m = l.context || l,
          n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
          o = p.Deferred(),
          q = p.Callbacks("once memory"),
          r = l.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!v) {
                var c = a.toLowerCase();
                (a = u[c] = u[c] || a), (t[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return v === 2 ? e : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (v === 2) {
                if (!f) {
                  f = {};
                  while ((c = cm.exec(e))) f[c[1].toLowerCase()] = c[2];
                }
                c = f[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              return v || (l.mimeType = a), this;
            },
            abort: function (a) {
              return (a = a || w), g && g.abort(a), y(0, a), this;
            },
          };
        o.promise(x),
          (x.success = x.done),
          (x.error = x.fail),
          (x.complete = q.add),
          (x.statusCode = function (a) {
            if (a) {
              var b;
              if (v < 2) for (b in a) r[b] = [r[b], a[b]];
              else (b = a[x.status]), x.always(b);
            }
            return this;
          }),
          (l.url = ((a || l.url) + "")
            .replace(cl, "")
            .replace(cp, cj[1] + "//")),
          (l.dataTypes = p
            .trim(l.dataType || "*")
            .toLowerCase()
            .split(s)),
          l.crossDomain == null &&
            ((i = ct.exec(l.url.toLowerCase()) || !1),
            (l.crossDomain =
              i &&
              i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !==
                cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443))),
          l.data &&
            l.processData &&
            typeof l.data != "string" &&
            (l.data = p.param(l.data, l.traditional)),
          cA(cv, l, c, x);
        if (v === 2) return x;
        (j = l.global),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !co.test(l.type)),
          j && p.active++ === 0 && p.event.trigger("ajaxStart");
        if (!l.hasContent) {
          l.data &&
            ((l.url += (cq.test(l.url) ? "&" : "?") + l.data), delete l.data),
            (d = l.url);
          if (l.cache === !1) {
            var z = p.now(),
              A = l.url.replace(cs, "$1_=" + z);
            l.url =
              A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "");
          }
        }
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", l.contentType),
          l.ifModified &&
            ((d = d || l.url),
            p.lastModified[d] &&
              x.setRequestHeader("If-Modified-Since", p.lastModified[d]),
            p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
          x.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
        if (!l.beforeSend || (l.beforeSend.call(m, x, l) !== !1 && v !== 2)) {
          w = "abort";
          for (k in {
            success: 1,
            error: 1,
            complete: 1,
          })
            x[k](l[k]);
          g = cA(cw, l, c, x);
          if (!g) y(-1, "No Transport");
          else {
            (x.readyState = 1),
              j && n.trigger("ajaxSend", [x, l]),
              l.async &&
                l.timeout > 0 &&
                (h = setTimeout(function () {
                  x.abort("timeout");
                }, l.timeout));
            try {
              (v = 1), g.send(t, y);
            } catch (B) {
              if (v < 2) y(-1, B);
              else throw B;
            }
          }
          return x;
        }
        return x.abort();
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var cE = [],
    cF = /\?/,
    cG = /(=)\?(?=&|$)|\?\?/,
    cH = p.now();
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = cE.pop() || p.expando + "_" + cH++;
      return (this[a] = !0), a;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && cG.test(j),
        m =
          k &&
          !l &&
          typeof i == "string" &&
          !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
          cG.test(i);
      if (c.dataTypes[0] === "jsonp" || l || m)
        return (
          (f = c.jsonpCallback =
            p.isFunction(c.jsonpCallback)
              ? c.jsonpCallback()
              : c.jsonpCallback),
          (g = a[f]),
          l
            ? (c.url = j.replace(cG, "$1" + f))
            : m
            ? (c.data = i.replace(cG, "$1" + f))
            : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f),
          (c.converters["script json"] = function () {
            return h || p.error(f + " was not called"), h[0];
          }),
          (c.dataTypes[0] = "json"),
          (a[f] = function () {
            h = arguments;
          }),
          e.always(function () {
            (a[f] = g),
              c[f] && ((c.jsonpCallback = d.jsonpCallback), cE.push(f)),
              h && p.isFunction(g) && g(h[0]),
              (h = g = b);
          }),
          "script"
        );
    }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /javascript|ecmascript/,
      },
      converters: {
        "text script": function (a) {
          return p.globalEval(a), a;
        },
      },
    }),
    p.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    p.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c,
          d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
        return {
          send: function (f, g) {
            (c = e.createElement("script")),
              (c.async = "async"),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange =
                function (a, e) {
                  if (
                    e ||
                    !c.readyState ||
                    /loaded|complete/.test(c.readyState)
                  )
                    (c.onload = c.onreadystatechange = null),
                      d && c.parentNode && d.removeChild(c),
                      (c = b),
                      e || g(200, "success");
                }),
              d.insertBefore(c, d.firstChild);
          },
          abort: function () {
            c && c.onload(0, 1);
          },
        };
      }
    });
  var cI,
    cJ = a.ActiveXObject
      ? function () {
          for (var a in cI) cI[a](0, 1);
        }
      : !1,
    cK = 0;
  (p.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && cL()) || cM();
      }
    : cL),
    (function (a) {
      p.extend(p.support, {
        ajax: !!a,
        cors: !!a && "withCredentials" in a,
      });
    })(p.ajaxSettings.xhr()),
    p.support.ajax &&
      p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
          var d;
          return {
            send: function (e, f) {
              var g,
                h,
                i = c.xhr();
              c.username
                ? i.open(c.type, c.url, c.async, c.username, c.password)
                : i.open(c.type, c.url, c.async);
              if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
              c.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e["X-Requested-With"] &&
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (h in e) i.setRequestHeader(h, e[h]);
              } catch (j) {}
              i.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var h, j, k, l, m;
                  try {
                    if (d && (e || i.readyState === 4)) {
                      (d = b),
                        g &&
                          ((i.onreadystatechange = p.noop), cJ && delete cI[g]);
                      if (e) i.readyState !== 4 && i.abort();
                      else {
                        (h = i.status),
                          (k = i.getAllResponseHeaders()),
                          (l = {}),
                          (m = i.responseXML),
                          m && m.documentElement && (l.xml = m);
                        try {
                          l.text = i.responseText;
                        } catch (a) {}
                        try {
                          j = i.statusText;
                        } catch (n) {
                          j = "";
                        }
                        !h && c.isLocal && !c.crossDomain
                          ? (h = l.text ? 200 : 404)
                          : h === 1223 && (h = 204);
                      }
                    }
                  } catch (o) {
                    e || f(-1, o);
                  }
                  l && f(h, j, l, k);
                }),
                c.async
                  ? i.readyState === 4
                    ? setTimeout(d, 0)
                    : ((g = ++cK),
                      cJ && (cI || ((cI = {}), p(a).unload(cJ)), (cI[g] = d)),
                      (i.onreadystatechange = d))
                  : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var cN,
    cO,
    cP = /^(?:toggle|show|hide)$/,
    cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
    cR = /queueHooks$/,
    cS = [cY],
    cT = {
      "*": [
        function (a, b) {
          var c,
            d,
            e = this.createTween(a, b),
            f = cQ.exec(b),
            g = e.cur(),
            h = +g || 0,
            i = 1,
            j = 20;
          if (f) {
            (c = +f[2]), (d = f[3] || (p.cssNumber[a] ? "" : "px"));
            if (d !== "px" && h) {
              h = p.css(e.elem, a, !0) || c || 1;
              do (i = i || ".5"), (h = h / i), p.style(e.elem, a, h + d);
              while (i !== (i = e.cur() / g) && i !== 1 && --j);
            }
            (e.unit = d),
              (e.start = h),
              (e.end = f[1] ? h + (f[1] + 1) * c : c);
          }
          return e;
        },
      ],
    };
  (p.Animation = p.extend(cW, {
    tweener: function (a, b) {
      p.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      var c,
        d = 0,
        e = a.length;
      for (; d < e; d++) (c = a[d]), (cT[c] = cT[c] || []), cT[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? cS.unshift(a) : cS.push(a);
    },
  })),
    (p.Tween = cZ),
    (cZ.prototype = {
      constructor: cZ,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (p.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = cZ.propHooks[this.prop];
        return a && a.get ? a.get(this) : cZ.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = cZ.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                p.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
          this
        );
      },
    }),
    (cZ.prototype.init.prototype = cZ.prototype),
    (cZ.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return a.elem[a.prop] == null ||
            (!!a.elem.style && a.elem.style[a.prop] != null)
            ? ((b = p.css(a.elem, a.prop, !1, "")), !b || b === "auto" ? 0 : b)
            : a.elem[a.prop];
        },
        set: function (a) {
          p.fx.step[a.prop]
            ? p.fx.step[a.prop](a)
            : a.elem.style &&
              (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop])
            ? p.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    p.each(["toggle", "show", "hide"], function (a, b) {
      var c = p.fn[b];
      p.fn[b] = function (d, e, f) {
        return d == null ||
          typeof d == "boolean" ||
          (!a && p.isFunction(d) && p.isFunction(e))
          ? c.apply(this, arguments)
          : this.animate(c$(b, !0), d, e, f);
      };
    }),
    p.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(bZ).css("opacity", 0).show().end().animate(
          {
            opacity: b,
          },
          a,
          c,
          d
        );
      },
      animate: function (a, b, c, d) {
        var e = p.isEmptyObject(a),
          f = p.speed(b, c, d),
          g = function () {
            var b = cW(this, p.extend({}, a), f);
            e && b.stop(!0);
          };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          typeof a != "string" && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              c = a != null && a + "queueHooks",
              f = p.timers,
              g = p._data(this);
            if (c) g[c] && g[c].stop && e(g[c]);
            else for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
            for (c = f.length; c--; )
              f[c].elem === this &&
                (a == null || f[c].queue === a) &&
                (f[c].anim.stop(d), (b = !1), f.splice(c, 1));
            (b || !d) && p.dequeue(this, a);
          })
        );
      },
    }),
    p.each(
      {
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (a, b) {
        p.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (p.speed = function (a, b, c) {
      var d =
        a && typeof a == "object"
          ? p.extend({}, a)
          : {
              complete: c || (!c && b) || (p.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !p.isFunction(b) && b),
            };
      d.duration = p.fx.off
        ? 0
        : typeof d.duration == "number"
        ? d.duration
        : d.duration in p.fx.speeds
        ? p.fx.speeds[d.duration]
        : p.fx.speeds._default;
      if (d.queue == null || d.queue === !0) d.queue = "fx";
      return (
        (d.old = d.complete),
        (d.complete = function () {
          p.isFunction(d.old) && d.old.call(this),
            d.queue && p.dequeue(this, d.queue);
        }),
        d
      );
    }),
    (p.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (p.timers = []),
    (p.fx = cZ.prototype.init),
    (p.fx.tick = function () {
      var a,
        b = p.timers,
        c = 0;
      for (; c < b.length; c++)
        (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
      b.length || p.fx.stop();
    }),
    (p.fx.timer = function (a) {
      a() &&
        p.timers.push(a) &&
        !cO &&
        (cO = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.interval = 13),
    (p.fx.stop = function () {
      clearInterval(cO), (cO = null);
    }),
    (p.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (p.fx.step = {}),
    p.expr &&
      p.expr.filters &&
      (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var c_ = /^(?:body|html)$/i;
  (p.fn.offset = function (a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function (b) {
            p.offset.setOffset(this, a, b);
          });
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = {
        top: 0,
        left: 0,
      },
      k = this[0],
      l = k && k.ownerDocument;
    if (!l) return;
    return (d = l.body) === k
      ? p.offset.bodyOffset(k)
      : ((c = l.documentElement),
        p.contains(c, k)
          ? (typeof k.getBoundingClientRect != "undefined" &&
              (j = k.getBoundingClientRect()),
            (e = da(l)),
            (f = c.clientTop || d.clientTop || 0),
            (g = c.clientLeft || d.clientLeft || 0),
            (h = e.pageYOffset || c.scrollTop),
            (i = e.pageXOffset || c.scrollLeft),
            {
              top: j.top + h - f,
              left: j.left + i - g,
            })
          : j);
  }),
    (p.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        return (
          p.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat(p.css(a, "marginTop")) || 0),
            (c += parseFloat(p.css(a, "marginLeft")) || 0)),
          {
            top: b,
            left: c,
          }
        );
      },
      setOffset: function (a, b, c) {
        var d = p.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = p(a),
          f = e.offset(),
          g = p.css(a, "top"),
          h = p.css(a, "left"),
          i =
            (d === "absolute" || d === "fixed") &&
            p.inArray("auto", [g, h]) > -1,
          j = {},
          k = {},
          l,
          m;
        i
          ? ((k = e.position()), (l = k.top), (m = k.left))
          : ((l = parseFloat(g) || 0), (m = parseFloat(h) || 0)),
          p.isFunction(b) && (b = b.call(a, c, f)),
          b.top != null && (j.top = b.top - f.top + l),
          b.left != null && (j.left = b.left - f.left + m),
          "using" in b ? b.using.call(a, j) : e.css(j);
      },
    }),
    p.fn.extend({
      position: function () {
        if (!this[0]) return;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = c_.test(b[0].nodeName)
            ? {
                top: 0,
                left: 0,
              }
            : b.offset();
        return (
          (c.top -= parseFloat(p.css(a, "marginTop")) || 0),
          (c.left -= parseFloat(p.css(a, "marginLeft")) || 0),
          (d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0),
          (d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0),
          {
            top: c.top - d.top,
            left: c.left - d.left,
          }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || e.body;
          while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static")
            a = a.offsetParent;
          return a || e.body;
        });
      },
    }),
    p.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function (e) {
          return p.access(
            this,
            function (a, e, f) {
              var g = da(a);
              if (f === b)
                return g
                  ? c in g
                    ? g[c]
                    : g.document.documentElement[e]
                  : a[e];
              g
                ? g.scrollTo(
                    d ? p(g).scrollLeft() : f,
                    d ? f : p(g).scrollTop()
                  )
                : (a[e] = f);
            },
            a,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    p.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, c) {
        p.each(
          {
            padding: "inner" + a,
            content: c,
            "": "outer" + a,
          },
          function (d, e) {
            p.fn[e] = function (e, f) {
              var g = arguments.length && (d || typeof e != "boolean"),
                h = d || (e === !0 || f === !0 ? "margin" : "border");
              return p.access(
                this,
                function (c, d, e) {
                  var f;
                  return p.isWindow(c)
                    ? c.document.documentElement["client" + a]
                    : c.nodeType === 9
                    ? ((f = c.documentElement),
                      Math.max(
                        c.body["scroll" + a],
                        f["scroll" + a],
                        c.body["offset" + a],
                        f["offset" + a],
                        f["client" + a]
                      ))
                    : e === b
                    ? p.css(c, d, e, h)
                    : p.style(c, d, e, h);
                },
                c,
                g ? e : b,
                g,
                null
              );
            };
          }
        );
      }
    ),
    (a.jQuery = a.$ = p),
    typeof define == "function" &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return p;
      });
})(window);

/*! fancyBox v2.1.3 fancyapps.com | fancyapps.com/fancybox/#license */
(function (B, x, f, q) {
  var r = f(B),
    m = f(x),
    b = (f.fancybox = function () {
      b.open.apply(this, arguments);
    }),
    u = null,
    n = x.createTouch !== q,
    s = function (a) {
      return a && a.hasOwnProperty && a instanceof f;
    },
    p = function (a) {
      return a && "string" === f.type(a);
    },
    E = function (a) {
      return p(a) && 0 < a.indexOf("%");
    },
    k = function (a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e);
    },
    v = function (a, b) {
      return k(a, b) + "px";
    };
  f.extend(b, {
    version: "2.1.3",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !n,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3e3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0,
        },
      },
      iframe: {
        scrolling: "auto",
        preload: !0,
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always",
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up",
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down",
        },
        close: [27],
        play: [32],
        toggle: [70],
      },
      direction: {
        next: "left",
        prev: "right",
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (f.browser.msie ? ' allowtransparency="true"' : "") +
          "></iframe>",
        error:
          '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn:
          '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0,
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop,
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1,
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))
        return (
          f.isArray(a) || (a = s(a) ? f(a).get() : [a]),
          f.each(a, function (e, c) {
            var j = {},
              g,
              h,
              i,
              l,
              k;
            "object" === f.type(c) &&
              (c.nodeType && (c = f(c)),
              s(c)
                ? ((j = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c,
                  }),
                  f.metadata && f.extend(!0, j, c.metadata()))
                : (j = c));
            g = d.href || j.href || (p(c) ? c : null);
            h = d.title !== q ? d.title : j.title || "";
            l = (i = d.content || j.content) ? "html" : d.type || j.type;
            !l &&
              j.isDom &&
              ((l = c.data("fancybox-type")),
              l ||
                (l = (l = c.prop("class").match(/fancybox\.(\w+)/))
                  ? l[1]
                  : null));
            p(g) &&
              (l ||
                (b.isImage(g)
                  ? (l = "image")
                  : b.isSWF(g)
                  ? (l = "swf")
                  : "#" === g.charAt(0)
                  ? (l = "inline")
                  : p(c) && ((l = "html"), (i = c))),
              "ajax" === l &&
                ((k = g.split(/\s+/, 2)), (g = k.shift()), (k = k.shift())));
            i ||
              ("inline" === l
                ? g
                  ? (i = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g))
                  : j.isDom && (i = c)
                : "html" === l
                ? (i = g)
                : !l && !g && j.isDom && ((l = "inline"), (i = c)));
            f.extend(j, {
              href: g,
              type: l,
              content: i,
              title: h,
              selector: k,
            });
            a[e] = j;
          }),
          (b.opts = f.extend(!0, {}, b.defaults, d)),
          d.keys !== q &&
            (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1),
          (b.group = a),
          b._start(b.opts.index)
        );
    },
    cancel: function () {
      var a = b.coming;
      a &&
        !1 !== b.trigger("onCancel") &&
        (b.hideLoading(),
        b.ajaxLoad && b.ajaxLoad.abort(),
        (b.ajaxLoad = null),
        b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
        a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
        (b.coming = null),
        b.current || b._afterZoomOut(a));
    },
    close: function (a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") &&
        (b.unbindEvents(),
        b.isActive &&
          (!b.isOpen || !0 === a
            ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
              b._afterZoomOut())
            : ((b.isOpen = b.isOpened = !1),
              (b.isClosing = !0),
              f(".fancybox-item, .fancybox-nav").remove(),
              b.wrap.stop(!0, !0).removeClass("fancybox-opened"),
              b.transitions[b.current.closeMethod]())));
    },
    play: function (a) {
      var d = function () {
          clearTimeout(b.player.timer);
        },
        e = function () {
          d();
          b.current &&
            b.player.isActive &&
            (b.player.timer = setTimeout(b.next, b.current.playSpeed));
        },
        c = function () {
          d();
          f("body").unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd");
        };
      if (!0 === a || (!b.player.isActive && !1 !== a)) {
        if (
          b.current &&
          (b.current.loop || b.current.index < b.group.length - 1)
        )
          (b.player.isActive = !0),
            f("body").bind({
              "afterShow.player onUpdate.player": e,
              "onCancel.player beforeClose.player": c,
              "beforeLoad.player": d,
            }),
            e(),
            b.trigger("onPlayStart");
      } else c();
    },
    next: function (a) {
      var d = b.current;
      d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function (a) {
      var d = b.current;
      d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function (a, d, e) {
      var c = b.current;
      c &&
        ((a = k(a)),
        (b.direction = d || c.direction[a >= c.index ? "next" : "prev"]),
        (b.router = e || "jumpto"),
        c.loop &&
          (0 > a && (a = c.group.length + (a % c.group.length)),
          (a %= c.group.length)),
        c.group[a] !== q && (b.cancel(), b._start(a)));
    },
    reposition: function (a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        j;
      c &&
        ((j = b._getPosition(d)),
        a && "scroll" === a.type
          ? (delete j.position, c.stop(!0, !0).animate(j, 200))
          : (c.css(j), (e.pos = f.extend({}, e.dim, j))));
    },
    update: function (a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(u), (u = null));
      b.isOpen &&
        !u &&
        (u = setTimeout(
          function () {
            var c = b.current;
            c &&
              !b.isClosing &&
              (b.wrap.removeClass("fancybox-tmp"),
              (e || "load" === d || ("resize" === d && c.autoResize)) &&
                b._setDimension(),
              ("scroll" === d && c.canShrink) || b.reposition(a),
              b.trigger("onUpdate"),
              (u = null));
          },
          e && !n ? 0 : 300
        ));
    },
    toggle: function (a) {
      b.isOpen &&
        ((b.current.fitToView =
          "boolean" === f.type(a) ? a : !b.current.fitToView),
        n &&
          (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
          b.trigger("onUpdate")),
        b.update());
    },
    hideLoading: function () {
      m.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function () {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>')
        .click(b.cancel)
        .appendTo("body");
      m.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });
      b.defaults.fixed ||
        ((d = b.getViewport()),
        a.css({
          position: "absolute",
          top: 0.5 * d.h + d.y,
          left: 0.5 * d.w + d.x,
        }));
    },
    getViewport: function () {
      var a = (b.current && b.current.locked) || !1,
        d = {
          x: r.scrollLeft(),
          y: r.scrollTop(),
        };
      a
        ? ((d.w = a[0].clientWidth), (d.h = a[0].clientHeight))
        : ((d.w = n && B.innerWidth ? B.innerWidth : r.width()),
          (d.h = n && B.innerHeight ? B.innerHeight : r.height()));
      return d;
    },
    unbindEvents: function () {
      b.wrap && s(b.wrap) && b.wrap.unbind(".fb");
      m.unbind(".fb");
      r.unbind(".fb");
    },
    bindEvents: function () {
      var a = b.current,
        d;
      a &&
        (r.bind(
          "orientationchange.fb" +
            (n ? "" : " resize.fb") +
            (a.autoCenter && !a.locked ? " scroll.fb" : ""),
          b.update
        ),
        (d = a.keys) &&
          m.bind("keydown.fb", function (e) {
            var c = e.which || e.keyCode,
              j = e.target || e.srcElement;
            if (27 === c && b.coming) return !1;
            !e.ctrlKey &&
              !e.altKey &&
              !e.shiftKey &&
              !e.metaKey &&
              (!j || (!j.type && !f(j).is("[contenteditable]"))) &&
              f.each(d, function (d, j) {
                if (1 < a.group.length && j[c] !== q)
                  return b[d](j[c]), e.preventDefault(), !1;
                if (-1 < f.inArray(c, j)) return b[d](), e.preventDefault(), !1;
              });
          }),
        f.fn.mousewheel &&
          a.mouseWheel &&
          b.wrap.bind("mousewheel.fb", function (d, c, j, g) {
            for (
              var h = f(d.target || null), i = !1;
              h.length &&
              !i &&
              !h.is(".fancybox-skin") &&
              !h.is(".fancybox-wrap");

            )
              (i =
                h[0] &&
                !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                ((h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth) ||
                  (h[0].clientHeight &&
                    h[0].scrollHeight > h[0].clientHeight))),
                (h = f(h).parent());
            if (0 !== c && !i && 1 < b.group.length && !a.canShrink) {
              if (0 < g || 0 < j) b.prev(0 < g ? "down" : "left");
              else if (0 > g || 0 > j) b.next(0 > g ? "up" : "right");
              d.preventDefault();
            }
          }));
    },
    trigger: function (a, d) {
      var e,
        c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) &&
          (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers &&
          f.each(c.helpers, function (d, e) {
            e &&
              b.helpers[d] &&
              f.isFunction(b.helpers[d][a]) &&
              ((e = f.extend(!0, {}, b.helpers[d].defaults, e)),
              b.helpers[d][a](e, c));
          });
        f.event.trigger(a + ".fb");
      }
    },
    isImage: function (a) {
      return (
        p(a) &&
        a.match(
          /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i
        )
      );
    },
    isSWF: function (a) {
      return p(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (a) {
      var d = {},
        e,
        c,
        a = k(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal &&
        f.extend(!0, d, {
          closeBtn: !1,
          closeClick: !1,
          nextClick: !1,
          arrows: !1,
          mouseWheel: !1,
          keys: null,
          helpers: {
            overlay: {
              closeClick: !1,
            },
          },
        });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c)
          return (
            (b.coming = null),
            b.current && b.router && "jumpto" !== b.router
              ? ((b.current.index = a), b[b.router](b.direction))
              : !1
          );
        b.isActive = !0;
        if ("image" === c || "swf" === c)
          (d.autoHeight = d.autoWidth = !1), (d.scrolling = "visible");
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && n && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap)
          .addClass(
            "fancybox-" +
              (n ? "mobile" : "desktop") +
              " fancybox-type-" +
              c +
              " fancybox-tmp " +
              d.wrapCSS
          )
          .appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap),
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, v(d.padding[a]));
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");
        "image" === c
          ? b._loadImage()
          : "ajax" === c
          ? b._loadAjax()
          : "iframe" === c
          ? b._loadIframe()
          : b._afterLoad();
      }
    },
    _error: function (a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error,
      });
      b._afterLoad();
    },
    _loadImage: function () {
      var a = (b.imgPreload = new Image());
      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width;
        b.coming.height = this.height;
        b._afterLoad();
      };
      a.onerror = function () {
        this.onload = this.onerror = null;
        b._error("image");
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function () {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(
        f.extend({}, a.ajax, {
          url: a.href,
          error: function (a, e) {
            b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
          },
          success: function (d, e) {
            "success" === e && ((a.content = d), b._afterLoad());
          },
        })
      );
    },
    _loadIframe: function () {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr("scrolling", n ? "auto" : a.iframe.scrolling)
          .attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this)
            .find("iframe")
            .hide()
            .attr("src", "//about:blank")
            .end()
            .empty();
        } catch (a) {}
      });
      a.iframe.preload &&
        (b.showLoading(),
        d.one("load", function () {
          f(this).data("ready", 1);
          n || f(this).bind("load.fb", b.update);
          f(this)
            .parents(".fancybox-wrap")
            .width("100%")
            .removeClass("fancybox-tmp")
            .show();
          b._afterLoad();
        }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function () {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f,
        g;
      for (g = 1; g <= c; g += 1)
        (f = a[(d.index + g) % e]),
          "image" === f.type && f.href && (new Image().src = f.href);
    },
    _afterLoad: function () {
      var a = b.coming,
        d = b.current,
        e,
        c,
        j,
        g,
        h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d))
          a.wrap.stop(!0).trigger("onReset").remove(), (b.coming = null);
        else {
          d &&
            (b.trigger("beforeChange", d),
            d.wrap
              .stop(!0)
              .removeClass("fancybox-opened")
              .find(".fancybox-item, .fancybox-nav")
              .remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          j = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d,
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector
                ? (e = f("<div>").html(e).find(a.selector))
                : s(e) &&
                  (e.data("fancybox-placeholder") ||
                    e.data(
                      "fancybox-placeholder",
                      f('<div class="fancybox-placeholder"></div>')
                        .insertAfter(e)
                        .hide()
                    ),
                  (e = e.show().detach()),
                  a.wrap.bind("onReset", function () {
                    f(this).find(e).length &&
                      e
                        .hide()
                        .replaceAll(e.data("fancybox-placeholder"))
                        .data("fancybox-placeholder", !1);
                  }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              (e =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                g +
                '"></param>'),
                (h = ""),
                f.each(a.swf, function (a, b) {
                  e += '<param name="' + a + '" value="' + b + '"></param>';
                  h += " " + a + '="' + b + '"';
                }),
                (e +=
                  '<embed src="' +
                  g +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  h +
                  "></embed></object>");
          }
          (!s(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css(
            "overflow",
            "yes" === j ? "scroll" : "no" === j ? "hidden" : j
          );
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]();
          } else
            f(".fancybox-wrap")
              .not(a.wrap)
              .stop(!0)
              .trigger("onReset")
              .remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages();
        }
    },
    _setDimension: function () {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        j = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        i = h.height,
        l = h.minWidth,
        t = h.minHeight,
        m = h.maxWidth,
        n = h.maxHeight,
        r = h.scrolling,
        p = h.scrollOutside ? h.scrollbarWidth : 0,
        w = h.margin,
        y = k(w[1] + w[3]),
        q = k(w[0] + w[2]),
        x,
        z,
        s,
        C,
        A,
        F,
        B,
        D,
        u;
      e.add(j).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      w = k(j.outerWidth(!0) - j.width());
      x = k(j.outerHeight(!0) - j.height());
      z = y + w;
      s = q + x;
      C = E(c) ? ((a.w - z) * k(c)) / 100 : c;
      A = E(i) ? ((a.h - s) * k(i)) / 100 : i;
      if ("iframe" === h.type) {
        if (((u = h.content), h.autoHeight && 1 === u.data("ready")))
          try {
            u[0].contentWindow.document.location &&
              (g.width(C).height(9999),
              (F = u.contents().find("body")),
              p && F.css("overflow-x", "hidden"),
              (A = F.height()));
          } catch (G) {}
      } else if (h.autoWidth || h.autoHeight)
        g.addClass("fancybox-tmp"),
          h.autoWidth || g.width(C),
          h.autoHeight || g.height(A),
          h.autoWidth && (C = g.width()),
          h.autoHeight && (A = g.height()),
          g.removeClass("fancybox-tmp");
      c = k(C);
      i = k(A);
      D = C / A;
      l = k(E(l) ? k(l, "w") - z : l);
      m = k(E(m) ? k(m, "w") - z : m);
      t = k(E(t) ? k(t, "h") - s : t);
      n = k(E(n) ? k(n, "h") - s : n);
      F = m;
      B = n;
      h.fitToView && ((m = Math.min(a.w - z, m)), (n = Math.min(a.h - s, n)));
      z = a.w - y;
      q = a.h - q;
      h.aspectRatio
        ? (c > m && ((c = m), (i = k(c / D))),
          i > n && ((i = n), (c = k(i * D))),
          c < l && ((c = l), (i = k(c / D))),
          i < t && ((i = t), (c = k(i * D))))
        : ((c = Math.max(l, Math.min(c, m))),
          h.autoHeight && "iframe" !== h.type && (g.width(c), (i = g.height())),
          (i = Math.max(t, Math.min(i, n))));
      if (h.fitToView)
        if (
          (g.width(c).height(i),
          e.width(c + w),
          (a = e.width()),
          (y = e.height()),
          h.aspectRatio)
        )
          for (; (a > z || y > q) && c > l && i > t && !(19 < d++); )
            (i = Math.max(t, Math.min(n, i - 10))),
              (c = k(i * D)),
              c < l && ((c = l), (i = k(c / D))),
              c > m && ((c = m), (i = k(c / D))),
              g.width(c).height(i),
              e.width(c + w),
              (a = e.width()),
              (y = e.height());
        else
          (c = Math.max(l, Math.min(c, c - (a - z)))),
            (i = Math.max(t, Math.min(i, i - (y - q))));
      p && "auto" === r && i < A && c + w + p < z && (c += p);
      g.width(c).height(i);
      e.width(c + w);
      a = e.width();
      y = e.height();
      e = (a > z || y > q) && c > l && i > t;
      c = h.aspectRatio
        ? c < F && i < B && c < C && i < A
        : (c < F || i < B) && (c < C || i < A);
      f.extend(h, {
        dim: {
          width: v(a),
          height: v(y),
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: w,
        hPadding: x,
        wrapSpace: y - j.outerHeight(!0),
        skinSpace: j.height() - i,
      });
      !u && h.autoHeight && i > t && i < n && !c && g.height("auto");
    },
    _getPosition: function (a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3],
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w
        ? (c.position = "fixed")
        : d.locked || ((c.top += e.y), (c.left += e.x));
      c.top = v(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = v(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c;
    },
    _afterZoomIn: function () {
      var a = b.current;
      a &&
        ((b.isOpen = b.isOpened = !0),
        b.wrap.css("overflow", "visible").addClass("fancybox-opened"),
        b.update(),
        (a.closeClick || (a.nextClick && 1 < b.group.length)) &&
          b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
            !f(d.target).is("a") &&
              !f(d.target).parent().is("a") &&
              (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
          }),
        a.closeBtn &&
          f(a.tpl.closeBtn)
            .appendTo(b.skin)
            .bind(n ? "touchstart.fb" : "click.fb", function (a) {
              a.preventDefault();
              b.close();
            }),
        a.arrows &&
          1 < b.group.length &&
          ((a.loop || 0 < a.index) &&
            f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev),
          (a.loop || a.index < b.group.length - 1) &&
            f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)),
        b.trigger("afterShow"),
        !a.loop && a.index === a.group.length - 1
          ? b.play(!1)
          : b.opts.autoPlay &&
            !b.player.isActive &&
            ((b.opts.autoPlay = !1), b.play()));
    },
    _afterZoomOut: function (a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
      });
      b.trigger("afterClose", a);
    },
  });
  b.transitions = {
    getOrigPosition: function () {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        i = a.wPadding,
        l = b.getViewport();
      !e &&
        a.isDom &&
        d.is(":visible") &&
        ((e = d.find("img:first")), e.length || (e = d));
      s(e)
        ? ((c = e.offset()),
          e.is("img") && ((f = e.outerWidth()), (g = e.outerHeight())))
        : ((c.top = l.y + (l.h - g) * a.topRatio),
          (c.left = l.x + (l.w - f) * a.leftRatio));
      if ("fixed" === b.wrap.css("position") || a.locked)
        (c.top -= l.y), (c.left -= l.x);
      return (c = {
        top: v(c.top - h * a.topRatio),
        left: v(c.left - i * a.leftRatio),
        width: v(f + i),
        height: v(g + h),
      });
    },
    step: function (a, d) {
      var e,
        c,
        f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f)
        (e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start)),
          b.isClosing && (e = 1 - e),
          (c = "width" === f ? c.wPadding : c.hPadding),
          (c = a - c),
          b.skin[f](k("width" === f ? c : c - g * e)),
          b.inner[f](k("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function () {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        j = f.extend(
          {
            opacity: 1,
          },
          d
        );
      delete j.position;
      c
        ? ((d = this.getOrigPosition()), a.openOpacity && (d.opacity = 0.1))
        : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(j, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn,
      });
    },
    zoomOut: function () {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1,
        };
      e && ((c = this.getOrigPosition()), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut,
      });
    },
    changeIn: function () {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1,
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d &&
        ((g = "down" === f || "up" === f ? "top" : "left"),
        "down" === f || "right" === f
          ? ((e[g] = v(k(e[g]) - 200)), (c[g] = "+=200px"))
          : ((e[g] = v(k(e[g]) + 200)), (c[g] = "-=200px")));
      "none" === d
        ? b._afterZoomIn()
        : b.wrap.css(e).animate(c, {
            duration: a.nextSpeed,
            easing: a.nextEasing,
            complete: function () {
              setTimeout(b._afterZoomIn, 20);
            },
          });
    },
    changeOut: function () {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1,
        },
        c = b.direction;
      "elastic" === d &&
        (e["down" === c || "up" === c ? "top" : "left"] =
          ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function () {
          f(this).trigger("onReset").remove();
        },
      });
    },
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !n,
      fixed: !0,
    },
    overlay: null,
    fixed: !1,
    create: function (a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
      this.fixed = !1;
      a.fixed &&
        b.defaults.fixed &&
        (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
    },
    open: function (a) {
      var d = this,
        a = f.extend({}, this.defaults, a);
      this.overlay
        ? this.overlay.unbind(".overlay").width("auto").height("auto")
        : this.create(a);
      this.fixed ||
        (r.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick &&
        this.overlay.bind("click.overlay", function (a) {
          f(a.target).hasClass("fancybox-overlay") &&
            (b.isActive ? b.close() : d.close());
        });
      this.overlay.css(a.css).show();
    },
    close: function () {
      f(".fancybox-overlay").remove();
      r.unbind("resize.overlay");
      this.overlay = null;
      !1 !== this.margin &&
        (f("body").css("margin-right", this.margin), (this.margin = !1));
      this.el && this.el.removeClass("fancybox-lock");
    },
    update: function () {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      f.browser.msie
        ? ((b = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth)),
          m.width() > b && (a = m.width()))
        : m.width() > r.width() && (a = m.width());
      this.overlay.width(a).height(m.height());
    },
    onReady: function (a, b) {
      f(".fancybox-overlay").stop(!0, !0);
      this.overlay ||
        ((this.margin =
          m.height() > r.height() || "scroll" === f("body").css("overflow-y")
            ? f("body").css("margin-right")
            : !1),
        (this.el = x.all && !x.querySelector ? f("html") : f("body")),
        this.create(a));
      a.locked &&
        this.fixed &&
        ((b.locked = this.overlay.append(b.wrap)), (b.fixed = !1));
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function (a, b) {
      b.locked &&
        (this.el.addClass("fancybox-lock"),
        !1 !== this.margin &&
          f("body").css("margin-right", k(this.margin) + b.scrollbarWidth));
      this.open(a);
    },
    onUpdate: function () {
      this.fixed || this.update();
    },
    afterClose: function (a) {
      this.overlay &&
        !b.isActive &&
        this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    },
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom",
    },
    beforeShow: function (a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (p(e) && "" !== f.trim(e)) {
        d = f(
          '<div class="fancybox-title fancybox-title-' +
            c +
            '-wrap">' +
            e +
            "</div>"
        );
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            (c = b.skin),
              d.appendTo("body"),
              f.browser.msie && d.width(d.width()),
              d.wrapInner('<span class="child"></span>'),
              (b.current.margin[2] += Math.abs(k(d.css("margin-bottom"))));
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    },
  };
  f.fn.fancybox = function (a) {
    var d,
      e = f(this),
      c = this.selector || "",
      j = function (g) {
        var h = f(this).blur(),
          i = d,
          j,
          k;
        !g.ctrlKey &&
          !g.altKey &&
          !g.shiftKey &&
          !g.metaKey &&
          !h.is(".fancybox-wrap") &&
          ((j = a.groupAttr || "data-fancybox-group"),
          (k = h.attr(j)),
          k || ((j = "rel"), (k = h.get(0)[j])),
          k &&
            "" !== k &&
            "nofollow" !== k &&
            ((h = c.length ? f(c) : e),
            (h = h.filter("[" + j + '="' + k + '"]')),
            (i = h.index(this))),
          (a.index = i),
          !1 !== b.open(h, a) && g.preventDefault());
      },
      a = a || {};
    d = a.index || 0;
    !c || !1 === a.live
      ? e.unbind("click.fb-start").bind("click.fb-start", j)
      : m
          .undelegate(c, "click.fb-start")
          .delegate(
            c + ":not('.fancybox-item, .fancybox-nav')",
            "click.fb-start",
            j
          );
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  };
  m.ready(function () {
    f.scrollbarWidth === q &&
      (f.scrollbarWidth = function () {
        var a = f(
            '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
          ).appendTo("body"),
          b = a.children(),
          b = b.innerWidth() - b.height(99).innerWidth();
        a.remove();
        return b;
      });
    if (f.support.fixedPosition === q) {
      var a = f.support,
        d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
        e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e;
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body"),
    });
  });
})(window, document, jQuery);
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {
  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, " "));
  }

  var config = ($.cookie = function (key, value, options) {
    // write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);

      if (value === null) {
        options.expires = -1;
      }

      if (typeof options.expires === "number") {
        var days = options.expires,
          t = (options.expires = new Date());
        t.setDate(t.getDate() + days);
      }

      value = config.json ? JSON.stringify(value) : String(value);

      return (document.cookie = [
        encodeURIComponent(key),
        "=",
        config.raw ? value : encodeURIComponent(value),
        options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
        options.path ? "; path=" + options.path : "",
        options.domain ? "; domain=" + options.domain : "",
        options.secure ? "; secure" : "",
      ].join(""));
    }

    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split("; ");
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split("=");
      if (decode(parts.shift()) === key) {
        var cookie = decode(parts.join("="));
        return config.json ? JSON.parse(cookie) : cookie;
      }
    }

    return null;
  });
  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== null) {
      $.cookie(key, null, options);
      return true;
    }
    return false;
  };
})(jQuery, document);

/**
 * setPopup
 *
 * @param nameCookie
 * @param idDialog
 * @param typeAnimate 1: top -> bottom , 0 : -> Fade In
 * @param expires : Day
 */
function setPopup(nameCookie, idDialog, typeAnimate, expires) {
  var remember_popup = $.cookie(nameCookie);
  //Get the A tag
  if (!remember_popup) {
    var id = idDialog;
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = document.body.offsetWidth;
    //Set heigth and width to mask to fill up the whole screen
    $("#mask").css({
      width: maskWidth,
      height: maskHeight,
    });
    if (msieversion() >= 6 && msieversion() < 10)
      $("#mask").css({
        width: maskWidth,
      });
    //transition effect
    $("#mask").fadeIn(500);
    $("#mask").fadeTo("fast", 0.7);
    //Get the window height and width
    var winH = parseInt($(window).height()) - parseInt($(id).height());
    winH = winH / 2;
    var winW = document.body.offsetWidth;
    $(id).css("margin-left", (winW - parseInt($(id).width())) / 2 + "px");
    //transition effect
    $(id).fadeIn(200);
    $("#boxes .window,#boxes " + id).css(
      "width",
      $(id).find("img").attr("width")
    );
    typeAnimate == 1
      ? $(id).animate(
          {
            top: winH + "px",
          },
          500
        )
      : $(id).css({
          top: winH + "px",
        });
    //check cookie
    $.cookie(nameCookie, 1, {
      expires: expires,
      path: "/",
    });
  }
}
function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");

  if (msie > 0) return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
  else return 0;
}

/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if ("area" === e) {
      var f = b.parentNode,
        g = f.name,
        h;
      return !b.href || !g || f.nodeName.toLowerCase() !== "map"
        ? !1
        : ((h = a("img[usemap=#" + g + "]")[0]), !!h && d(h));
    }
    return (
      (/input|select|textarea|button|object/.test(e)
        ? !b.disabled
        : "a" == e
        ? b.href || c
        : c) && d(b)
    );
  }
  function d(b) {
    return !a(b)
      .parents()
      .andSelf()
      .filter(function () {
        return (
          a.curCSS(this, "visibility") === "hidden" ||
          a.expr.filters.hidden(this)
        );
      }).length;
  }
  a.ui = a.ui || {};
  if (a.ui.version) return;
  a.extend(a.ui, {
    version: "1.8.23",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
    },
  }),
    a.fn.extend({
      propAttr: a.fn.prop || a.fn.attr,
      _focus: a.fn.focus,
      focus: function (b, c) {
        return typeof b == "number"
          ? this.each(function () {
              var d = this;
              setTimeout(function () {
                a(d).focus(), c && c.call(d);
              }, b);
            })
          : this._focus.apply(this, arguments);
      },
      scrollParent: function () {
        var b;
        return (
          (a.browser.msie && /(static|relative)/.test(this.css("position"))) ||
          /absolute/.test(this.css("position"))
            ? (b = this.parents()
                .filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(
                      a.curCSS(this, "position", 1)
                    ) &&
                    /(auto|scroll)/.test(
                      a.curCSS(this, "overflow", 1) +
                        a.curCSS(this, "overflow-y", 1) +
                        a.curCSS(this, "overflow-x", 1)
                    )
                  );
                })
                .eq(0))
            : (b = this.parents()
                .filter(function () {
                  return /(auto|scroll)/.test(
                    a.curCSS(this, "overflow", 1) +
                      a.curCSS(this, "overflow-y", 1) +
                      a.curCSS(this, "overflow-x", 1)
                  );
                })
                .eq(0)),
          /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        );
      },
      zIndex: function (c) {
        if (c !== b) return this.css("zIndex", c);
        if (this.length) {
          var d = a(this[0]),
            e,
            f;
          while (d.length && d[0] !== document) {
            e = d.css("position");
            if (e === "absolute" || e === "relative" || e === "fixed") {
              f = parseInt(d.css("zIndex"), 10);
              if (!isNaN(f) && f !== 0) return f;
            }
            d = d.parent();
          }
        }
        return 0;
      },
      disableSelection: function () {
        return this.bind(
          (a.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function (a) {
            a.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
    }),
    a("<a>").outerWidth(1).jquery ||
      a.each(["Width", "Height"], function (c, d) {
        function h(b, c, d, f) {
          return (
            a.each(e, function () {
              (c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0),
                d &&
                  (c -=
                    parseFloat(a.curCSS(b, "border" + this + "Width", !0)) ||
                    0),
                f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0);
            }),
            c
          );
        }
        var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
          f = d.toLowerCase(),
          g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight,
          };
        (a.fn["inner" + d] = function (c) {
          return c === b
            ? g["inner" + d].call(this)
            : this.each(function () {
                a(this).css(f, h(this, c) + "px");
              });
        }),
          (a.fn["outer" + d] = function (b, c) {
            return typeof b != "number"
              ? g["outer" + d].call(this, b)
              : this.each(function () {
                  a(this).css(f, h(this, b, !0, c) + "px");
                });
          });
      }),
    a.extend(a.expr[":"], {
      data: a.expr.createPseudo
        ? a.expr.createPseudo(function (b) {
            return function (c) {
              return !!a.data(c, b);
            };
          })
        : function (b, c, d) {
            return !!a.data(b, d[3]);
          },
      focusable: function (b) {
        return c(b, !isNaN(a.attr(b, "tabindex")));
      },
      tabbable: function (b) {
        var d = a.attr(b, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && c(b, !e);
      },
    }),
    a(function () {
      var b = document.body,
        c = b.appendChild((c = document.createElement("div")));
      c.offsetHeight,
        a.extend(c.style, {
          minHeight: "100px",
          height: "auto",
          padding: 0,
          borderWidth: 0,
        }),
        (a.support.minHeight = c.offsetHeight === 100),
        (a.support.selectstart = "onselectstart" in c),
        (b.removeChild(c).style.display = "none");
    }),
    a.curCSS || (a.curCSS = a.css),
    a.extend(a.ui, {
      plugin: {
        add: function (b, c, d) {
          var e = a.ui[b].prototype;
          for (var f in d)
            (e.plugins[f] = e.plugins[f] || []), e.plugins[f].push([c, d[f]]);
        },
        call: function (a, b, c) {
          var d = a.plugins[b];
          if (!d || !a.element[0].parentNode) return;
          for (var e = 0; e < d.length; e++)
            a.options[d[e][0]] && d[e][1].apply(a.element, c);
        },
      },
      contains: function (a, b) {
        return document.compareDocumentPosition
          ? a.compareDocumentPosition(b) & 16
          : a !== b && a.contains(b);
      },
      hasScroll: function (b, c) {
        if (a(b).css("overflow") === "hidden") return !1;
        var d = c && c === "left" ? "scrollLeft" : "scrollTop",
          e = !1;
        return b[d] > 0 ? !0 : ((b[d] = 1), (e = b[d] > 0), (b[d] = 0), e);
      },
      isOverAxis: function (a, b, c) {
        return a > b && a < b + c;
      },
      isOver: function (b, c, d, e, f, g) {
        return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g);
      },
    });
})(jQuery),
  (function (a, b) {
    if (a.cleanData) {
      var c = a.cleanData;
      a.cleanData = function (b) {
        for (var d = 0, e; (e = b[d]) != null; d++)
          try {
            a(e).triggerHandler("remove");
          } catch (f) {}
        c(b);
      };
    } else {
      var d = a.fn.remove;
      a.fn.remove = function (b, c) {
        return this.each(function () {
          return (
            c ||
              ((!b || a.filter(b, [this]).length) &&
                a("*", this)
                  .add([this])
                  .each(function () {
                    try {
                      a(this).triggerHandler("remove");
                    } catch (b) {}
                  })),
            d.call(a(this), b, c)
          );
        });
      };
    }
    (a.widget = function (b, c, d) {
      var e = b.split(".")[0],
        f;
      (b = b.split(".")[1]),
        (f = e + "-" + b),
        d || ((d = c), (c = a.Widget)),
        (a.expr[":"][f] = function (c) {
          return !!a.data(c, b);
        }),
        (a[e] = a[e] || {}),
        (a[e][b] = function (a, b) {
          arguments.length && this._createWidget(a, b);
        });
      var g = new c();
      (g.options = a.extend(!0, {}, g.options)),
        (a[e][b].prototype = a.extend(
          !0,
          g,
          {
            namespace: e,
            widgetName: b,
            widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
            widgetBaseClass: f,
          },
          d
        )),
        a.widget.bridge(b, a[e][b]);
    }),
      (a.widget.bridge = function (c, d) {
        a.fn[c] = function (e) {
          var f = typeof e == "string",
            g = Array.prototype.slice.call(arguments, 1),
            h = this;
          return (
            (e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e),
            f && e.charAt(0) === "_"
              ? h
              : (f
                  ? this.each(function () {
                      var d = a.data(this, c),
                        f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                      if (f !== d && f !== b) return (h = f), !1;
                    })
                  : this.each(function () {
                      var b = a.data(this, c);
                      b
                        ? b.option(e || {})._init()
                        : a.data(this, c, new d(e, this));
                    }),
                h)
          );
        };
      }),
      (a.Widget = function (a, b) {
        arguments.length && this._createWidget(a, b);
      }),
      (a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
          disabled: !1,
        },
        _createWidget: function (b, c) {
          a.data(c, this.widgetName, this),
            (this.element = a(c)),
            (this.options = a.extend(
              !0,
              {},
              this.options,
              this._getCreateOptions(),
              b
            ));
          var d = this;
          this.element.bind("remove." + this.widgetName, function () {
            d.destroy();
          }),
            this._create(),
            this._trigger("create"),
            this._init();
        },
        _getCreateOptions: function () {
          return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
          this.element
            .unbind("." + this.widgetName)
            .removeData(this.widgetName),
            this.widget()
              .unbind("." + this.widgetName)
              .removeAttr("aria-disabled")
              .removeClass(
                this.widgetBaseClass + "-disabled " + "ui-state-disabled"
              );
        },
        widget: function () {
          return this.element;
        },
        option: function (c, d) {
          var e = c;
          if (arguments.length === 0) return a.extend({}, this.options);
          if (typeof c == "string") {
            if (d === b) return this.options[c];
            (e = {}), (e[c] = d);
          }
          return this._setOptions(e), this;
        },
        _setOptions: function (b) {
          var c = this;
          return (
            a.each(b, function (a, b) {
              c._setOption(a, b);
            }),
            this
          );
        },
        _setOption: function (a, b) {
          return (
            (this.options[a] = b),
            a === "disabled" &&
              this.widget()
                [b ? "addClass" : "removeClass"](
                  this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled"
                )
                .attr("aria-disabled", b),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _trigger: function (b, c, d) {
          var e,
            f,
            g = this.options[b];
          (d = d || {}),
            (c = a.Event(c)),
            (c.type = (
              b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b
            ).toLowerCase()),
            (c.target = this.element[0]),
            (f = c.originalEvent);
          if (f) for (e in f) e in c || (c[e] = f[e]);
          return (
            this.element.trigger(c, d),
            !(
              (a.isFunction(g) && g.call(this.element[0], c, d) === !1) ||
              c.isDefaultPrevented()
            )
          );
        },
      });
  })(jQuery),
  (function (a, b) {
    var c = !1;
    a(document).mouseup(function (a) {
      c = !1;
    }),
      a.widget("ui.mouse", {
        options: {
          cancel: ":input,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var b = this;
          this.element
            .bind("mousedown." + this.widgetName, function (a) {
              return b._mouseDown(a);
            })
            .bind("click." + this.widgetName, function (c) {
              if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent"))
                return (
                  a.removeData(c.target, b.widgetName + ".preventClickEvent"),
                  c.stopImmediatePropagation(),
                  !1
                );
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              a(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (b) {
          if (c) return;
          this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
          var d = this,
            e = b.which == 1,
            f =
              typeof this.options.cancel == "string" && b.target.nodeName
                ? a(b.target).closest(this.options.cancel).length
                : !1;
          if (!e || f || !this._mouseCapture(b)) return !0;
          (this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                d.mouseDelayMet = !0;
              }, this.options.delay));
          if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
            this._mouseStarted = this._mouseStart(b) !== !1;
            if (!this._mouseStarted) return b.preventDefault(), !0;
          }
          return (
            !0 === a.data(b.target, this.widgetName + ".preventClickEvent") &&
              a.removeData(b.target, this.widgetName + ".preventClickEvent"),
            (this._mouseMoveDelegate = function (a) {
              return d._mouseMove(a);
            }),
            (this._mouseUpDelegate = function (a) {
              return d._mouseUp(a);
            }),
            a(document)
              .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
            b.preventDefault(),
            (c = !0),
            !0
          );
        },
        _mouseMove: function (b) {
          return !a.browser.msie || document.documentMode >= 9 || !!b.button
            ? this._mouseStarted
              ? (this._mouseDrag(b), b.preventDefault())
              : (this._mouseDistanceMet(b) &&
                  this._mouseDelayMet(b) &&
                  ((this._mouseStarted =
                    this._mouseStart(this._mouseDownEvent, b) !== !1),
                  this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)),
                !this._mouseStarted)
            : this._mouseUp(b);
        },
        _mouseUp: function (b) {
          return (
            a(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              b.target == this._mouseDownEvent.target &&
                a.data(b.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(b)),
            !1
          );
        },
        _mouseDistanceMet: function (a) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - a.pageX),
              Math.abs(this._mouseDownEvent.pageY - a.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function (a) {
          return this.mouseDelayMet;
        },
        _mouseStart: function (a) {},
        _mouseDrag: function (a) {},
        _mouseStop: function (a) {},
        _mouseCapture: function (a) {
          return !0;
        },
      });
  })(jQuery),
  (function (a, b) {
    a.widget("ui.draggable", a.ui.mouse, {
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
      },
      _create: function () {
        this.options.helper == "original" &&
          !/^(?:r|a|f)/.test(this.element.css("position")) &&
          (this.element[0].style.position = "relative"),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._mouseInit();
      },
      destroy: function () {
        if (!this.element.data("draggable")) return;
        return (
          this.element
            .removeData("draggable")
            .unbind(".draggable")
            .removeClass(
              "ui-draggable ui-draggable-dragging ui-draggable-disabled"
            ),
          this._mouseDestroy(),
          this
        );
      },
      _mouseCapture: function (b) {
        var c = this.options;
        return this.helper ||
          c.disabled ||
          a(b.target).is(".ui-resizable-handle")
          ? !1
          : ((this.handle = this._getHandle(b)),
            this.handle
              ? (c.iframeFix &&
                  a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(
                    function () {
                      a(
                        '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>'
                      )
                        .css({
                          width: this.offsetWidth + "px",
                          height: this.offsetHeight + "px",
                          position: "absolute",
                          opacity: "0.001",
                          zIndex: 1e3,
                        })
                        .css(a(this).offset())
                        .appendTo("body");
                    }
                  ),
                !0)
              : !1);
      },
      _mouseStart: function (b) {
        var c = this.options;
        return (
          (this.helper = this._createHelper(b)),
          this.helper.addClass("ui-draggable-dragging"),
          this._cacheHelperProportions(),
          a.ui.ddmanager && (a.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          a.extend(this.offset, {
            click: {
              left: b.pageX - this.offset.left,
              top: b.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(b)),
          (this.originalPageX = b.pageX),
          (this.originalPageY = b.pageY),
          c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
          c.containment && this._setContainment(),
          this._trigger("start", b) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              a.ui.ddmanager &&
                !c.dropBehaviour &&
                a.ui.ddmanager.prepareOffsets(this, b),
              this._mouseDrag(b, !0),
              a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b),
              !0)
        );
      },
      _mouseDrag: function (b, c) {
        (this.position = this._generatePosition(b)),
          (this.positionAbs = this._convertPositionTo("absolute"));
        if (!c) {
          var d = this._uiHash();
          if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
          this.position = d.position;
        }
        if (!this.options.axis || this.options.axis != "y")
          this.helper[0].style.left = this.position.left + "px";
        if (!this.options.axis || this.options.axis != "x")
          this.helper[0].style.top = this.position.top + "px";
        return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
      },
      _mouseStop: function (b) {
        var c = !1;
        a.ui.ddmanager &&
          !this.options.dropBehaviour &&
          (c = a.ui.ddmanager.drop(this, b)),
          this.dropped && ((c = this.dropped), (this.dropped = !1));
        var d = this.element[0],
          e = !1;
        while (d && (d = d.parentNode)) d == document && (e = !0);
        if (!e && this.options.helper === "original") return !1;
        if (
          (this.options.revert == "invalid" && !c) ||
          (this.options.revert == "valid" && c) ||
          this.options.revert === !0 ||
          (a.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, c))
        ) {
          var f = this;
          a(this.helper).animate(
            this.originalPosition,
            parseInt(this.options.revertDuration, 10),
            function () {
              f._trigger("stop", b) !== !1 && f._clear();
            }
          );
        } else this._trigger("stop", b) !== !1 && this._clear();
        return !1;
      },
      _mouseUp: function (b) {
        return (
          this.options.iframeFix === !0 &&
            a("div.ui-draggable-iframeFix").each(function () {
              this.parentNode.removeChild(this);
            }),
          a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
          a.ui.mouse.prototype._mouseUp.call(this, b)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (b) {
        var c =
          !this.options.handle || !a(this.options.handle, this.element).length
            ? !0
            : !1;
        return (
          a(this.options.handle, this.element)
            .find("*")
            .andSelf()
            .each(function () {
              this == b.target && (c = !0);
            }),
          c
        );
      },
      _createHelper: function (b) {
        var c = this.options,
          d = a.isFunction(c.helper)
            ? a(c.helper.apply(this.element[0], [b]))
            : c.helper == "clone"
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          d.parents("body").length ||
            d.appendTo(
              c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo
            ),
          d[0] != this.element[0] &&
            !/(fixed|absolute)/.test(d.css("position")) &&
            d.css("position", "absolute"),
          d
        );
      },
      _adjustOffsetFromHelper: function (b) {
        typeof b == "string" && (b = b.split(" ")),
          a.isArray(b) &&
            (b = {
              left: +b[0],
              top: +b[1] || 0,
            }),
          "left" in b && (this.offset.click.left = b.left + this.margins.left),
          "right" in b &&
            (this.offset.click.left =
              this.helperProportions.width - b.right + this.margins.left),
          "top" in b && (this.offset.click.top = b.top + this.margins.top),
          "bottom" in b &&
            (this.offset.click.top =
              this.helperProportions.height - b.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var b = this.offsetParent.offset();
        this.cssPosition == "absolute" &&
          this.scrollParent[0] != document &&
          a.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((b.left += this.scrollParent.scrollLeft()),
          (b.top += this.scrollParent.scrollTop()));
        if (
          this.offsetParent[0] == document.body ||
          (this.offsetParent[0].tagName &&
            this.offsetParent[0].tagName.toLowerCase() == "html" &&
            a.browser.msie)
        )
          b = {
            top: 0,
            left: 0,
          };
        return {
          top:
            b.top +
            (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left:
            b.left +
            (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
        };
      },
      _getRelativeOffset: function () {
        if (this.cssPosition == "relative") {
          var a = this.element.position();
          return {
            top:
              a.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              a.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return {
          top: 0,
          left: 0,
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var b = this.options;
        b.containment == "parent" &&
          (b.containment = this.helper[0].parentNode);
        if (b.containment == "document" || b.containment == "window")
          this.containment = [
            b.containment == "document"
              ? 0
              : a(window).scrollLeft() -
                this.offset.relative.left -
                this.offset.parent.left,
            b.containment == "document"
              ? 0
              : a(window).scrollTop() -
                this.offset.relative.top -
                this.offset.parent.top,
            (b.containment == "document" ? 0 : a(window).scrollLeft()) +
              a(b.containment == "document" ? document : window).width() -
              this.helperProportions.width -
              this.margins.left,
            (b.containment == "document" ? 0 : a(window).scrollTop()) +
              (a(b.containment == "document" ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
              this.helperProportions.height -
              this.margins.top,
          ];
        if (
          !/^(document|window|parent)$/.test(b.containment) &&
          b.containment.constructor != Array
        ) {
          var c = a(b.containment),
            d = c[0];
          if (!d) return;
          var e = c.offset(),
            f = a(d).css("overflow") != "hidden";
          (this.containment = [
            (parseInt(a(d).css("borderLeftWidth"), 10) || 0) +
              (parseInt(a(d).css("paddingLeft"), 10) || 0),
            (parseInt(a(d).css("borderTopWidth"), 10) || 0) +
              (parseInt(a(d).css("paddingTop"), 10) || 0),
            (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
              (parseInt(a(d).css("borderLeftWidth"), 10) || 0) -
              (parseInt(a(d).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left -
              this.margins.right,
            (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
              (parseInt(a(d).css("borderTopWidth"), 10) || 0) -
              (parseInt(a(d).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top -
              this.margins.bottom,
          ]),
            (this.relative_container = c);
        } else
          b.containment.constructor == Array &&
            (this.containment = b.containment);
      },
      _convertPositionTo: function (b, c) {
        c || (c = this.position);
        var d = b == "absolute" ? 1 : -1,
          e = this.options,
          f =
            this.cssPosition == "absolute" &&
            (this.scrollParent[0] == document ||
              !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.offsetParent
              : this.scrollParent,
          g = /(html|body)/i.test(f[0].tagName);
        return {
          top:
            c.top +
            this.offset.relative.top * d +
            this.offset.parent.top * d -
            (a.browser.safari &&
            a.browser.version < 526 &&
            this.cssPosition == "fixed"
              ? 0
              : (this.cssPosition == "fixed"
                  ? -this.scrollParent.scrollTop()
                  : g
                  ? 0
                  : f.scrollTop()) * d),
          left:
            c.left +
            this.offset.relative.left * d +
            this.offset.parent.left * d -
            (a.browser.safari &&
            a.browser.version < 526 &&
            this.cssPosition == "fixed"
              ? 0
              : (this.cssPosition == "fixed"
                  ? -this.scrollParent.scrollLeft()
                  : g
                  ? 0
                  : f.scrollLeft()) * d),
        };
      },
      _generatePosition: function (b) {
        var c = this.options,
          d =
            this.cssPosition == "absolute" &&
            (this.scrollParent[0] == document ||
              !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.offsetParent
              : this.scrollParent,
          e = /(html|body)/i.test(d[0].tagName),
          f = b.pageX,
          g = b.pageY;
        if (this.originalPosition) {
          var h;
          if (this.containment) {
            if (this.relative_container) {
              var i = this.relative_container.offset();
              h = [
                this.containment[0] + i.left,
                this.containment[1] + i.top,
                this.containment[2] + i.left,
                this.containment[3] + i.top,
              ];
            } else h = this.containment;
            b.pageX - this.offset.click.left < h[0] &&
              (f = h[0] + this.offset.click.left),
              b.pageY - this.offset.click.top < h[1] &&
                (g = h[1] + this.offset.click.top),
              b.pageX - this.offset.click.left > h[2] &&
                (f = h[2] + this.offset.click.left),
              b.pageY - this.offset.click.top > h[3] &&
                (g = h[3] + this.offset.click.top);
          }
          if (c.grid) {
            var j = c.grid[1]
              ? this.originalPageY +
                Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1]
              : this.originalPageY;
            g = h
              ? j - this.offset.click.top < h[1] ||
                j - this.offset.click.top > h[3]
                ? j - this.offset.click.top < h[1]
                  ? j + c.grid[1]
                  : j - c.grid[1]
                : j
              : j;
            var k = c.grid[0]
              ? this.originalPageX +
                Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0]
              : this.originalPageX;
            f = h
              ? k - this.offset.click.left < h[0] ||
                k - this.offset.click.left > h[2]
                ? k - this.offset.click.left < h[0]
                  ? k + c.grid[0]
                  : k - c.grid[0]
                : k
              : k;
          }
        }
        return {
          top:
            g -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (a.browser.safari &&
            a.browser.version < 526 &&
            this.cssPosition == "fixed"
              ? 0
              : this.cssPosition == "fixed"
              ? -this.scrollParent.scrollTop()
              : e
              ? 0
              : d.scrollTop()),
          left:
            f -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (a.browser.safari &&
            a.browser.version < 526 &&
            this.cssPosition == "fixed"
              ? 0
              : this.cssPosition == "fixed"
              ? -this.scrollParent.scrollLeft()
              : e
              ? 0
              : d.scrollLeft()),
        };
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] != this.element[0] &&
            !this.cancelHelperRemoval &&
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1);
      },
      _trigger: function (b, c, d) {
        return (
          (d = d || this._uiHash()),
          a.ui.plugin.call(this, b, [c, d]),
          b == "drag" &&
            (this.positionAbs = this._convertPositionTo("absolute")),
          a.Widget.prototype._trigger.call(this, b, c, d)
        );
      },
      plugins: {},
      _uiHash: function (a) {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      a.extend(a.ui.draggable, {
        version: "1.8.23",
      }),
      a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c) {
          var d = a(this).data("draggable"),
            e = d.options,
            f = a.extend({}, c, {
              item: d.element,
            });
          (d.sortables = []),
            a(e.connectToSortable).each(function () {
              var c = a.data(this, "sortable");
              c &&
                !c.options.disabled &&
                (d.sortables.push({
                  instance: c,
                  shouldRevert: c.options.revert,
                }),
                c.refreshPositions(),
                c._trigger("activate", b, f));
            });
        },
        stop: function (b, c) {
          var d = a(this).data("draggable"),
            e = a.extend({}, c, {
              item: d.element,
            });
          a.each(d.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (d.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(b),
                (this.instance.options.helper = this.instance.options._helper),
                d.options.helper == "original" &&
                  this.instance.currentItem.css({
                    top: "auto",
                    left: "auto",
                  }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger("deactivate", b, e));
          });
        },
        drag: function (b, c) {
          var d = a(this).data("draggable"),
            e = this,
            f = function (b) {
              var c = this.offset.click.top,
                d = this.offset.click.left,
                e = this.positionAbs.top,
                f = this.positionAbs.left,
                g = b.height,
                h = b.width,
                i = b.top,
                j = b.left;
              return a.ui.isOver(e + c, f + d, i, j, g, h);
            };
          a.each(d.sortables, function (f) {
            (this.instance.positionAbs = d.positionAbs),
              (this.instance.helperProportions = d.helperProportions),
              (this.instance.offset.click = d.offset.click),
              this.instance._intersectsWith(this.instance.containerCache)
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = a(e)
                      .clone()
                      .removeAttr("id")
                      .appendTo(this.instance.element)
                      .data("sortable-item", !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return c.helper[0];
                    }),
                    (b.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(b, !0),
                    this.instance._mouseStart(b, !0, !0),
                    (this.instance.offset.click.top = d.offset.click.top),
                    (this.instance.offset.click.left = d.offset.click.left),
                    (this.instance.offset.parent.left -=
                      d.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      d.offset.parent.top - this.instance.offset.parent.top),
                    d._trigger("toSortable", b),
                    (d.dropped = this.instance.element),
                    (d.currentItem = d.element),
                    (this.instance.fromOutside = d)),
                  this.instance.currentItem && this.instance._mouseDrag(b))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    "out",
                    b,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(b, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  d._trigger("fromSortable", b),
                  (d.dropped = !1));
          });
        },
      }),
      a.ui.plugin.add("draggable", "cursor", {
        start: function (b, c) {
          var d = a("body"),
            e = a(this).data("draggable").options;
          d.css("cursor") && (e._cursor = d.css("cursor")),
            d.css("cursor", e.cursor);
        },
        stop: function (b, c) {
          var d = a(this).data("draggable").options;
          d._cursor && a("body").css("cursor", d._cursor);
        },
      }),
      a.ui.plugin.add("draggable", "opacity", {
        start: function (b, c) {
          var d = a(c.helper),
            e = a(this).data("draggable").options;
          d.css("opacity") && (e._opacity = d.css("opacity")),
            d.css("opacity", e.opacity);
        },
        stop: function (b, c) {
          var d = a(this).data("draggable").options;
          d._opacity && a(c.helper).css("opacity", d._opacity);
        },
      }),
      a.ui.plugin.add("draggable", "scroll", {
        start: function (b, c) {
          var d = a(this).data("draggable");
          d.scrollParent[0] != document &&
            d.scrollParent[0].tagName != "HTML" &&
            (d.overflowOffset = d.scrollParent.offset());
        },
        drag: function (b, c) {
          var d = a(this).data("draggable"),
            e = d.options,
            f = !1;
          if (
            d.scrollParent[0] != document &&
            d.scrollParent[0].tagName != "HTML"
          ) {
            if (!e.axis || e.axis != "x")
              d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY <
              e.scrollSensitivity
                ? (d.scrollParent[0].scrollTop = f =
                    d.scrollParent[0].scrollTop + e.scrollSpeed)
                : b.pageY - d.overflowOffset.top < e.scrollSensitivity &&
                  (d.scrollParent[0].scrollTop = f =
                    d.scrollParent[0].scrollTop - e.scrollSpeed);
            if (!e.axis || e.axis != "y")
              d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX <
              e.scrollSensitivity
                ? (d.scrollParent[0].scrollLeft = f =
                    d.scrollParent[0].scrollLeft + e.scrollSpeed)
                : b.pageX - d.overflowOffset.left < e.scrollSensitivity &&
                  (d.scrollParent[0].scrollLeft = f =
                    d.scrollParent[0].scrollLeft - e.scrollSpeed);
          } else {
            if (!e.axis || e.axis != "x")
              b.pageY - a(document).scrollTop() < e.scrollSensitivity
                ? (f = a(document).scrollTop(
                    a(document).scrollTop() - e.scrollSpeed
                  ))
                : a(window).height() - (b.pageY - a(document).scrollTop()) <
                    e.scrollSensitivity &&
                  (f = a(document).scrollTop(
                    a(document).scrollTop() + e.scrollSpeed
                  ));
            if (!e.axis || e.axis != "y")
              b.pageX - a(document).scrollLeft() < e.scrollSensitivity
                ? (f = a(document).scrollLeft(
                    a(document).scrollLeft() - e.scrollSpeed
                  ))
                : a(window).width() - (b.pageX - a(document).scrollLeft()) <
                    e.scrollSensitivity &&
                  (f = a(document).scrollLeft(
                    a(document).scrollLeft() + e.scrollSpeed
                  ));
          }
          f !== !1 &&
            a.ui.ddmanager &&
            !e.dropBehaviour &&
            a.ui.ddmanager.prepareOffsets(d, b);
        },
      }),
      a.ui.plugin.add("draggable", "snap", {
        start: function (b, c) {
          var d = a(this).data("draggable"),
            e = d.options;
          (d.snapElements = []),
            a(
              e.snap.constructor != String
                ? e.snap.items || ":data(draggable)"
                : e.snap
            ).each(function () {
              var b = a(this),
                c = b.offset();
              this != d.element[0] &&
                d.snapElements.push({
                  item: this,
                  width: b.outerWidth(),
                  height: b.outerHeight(),
                  top: c.top,
                  left: c.left,
                });
            });
        },
        drag: function (b, c) {
          var d = a(this).data("draggable"),
            e = d.options,
            f = e.snapTolerance,
            g = c.offset.left,
            h = g + d.helperProportions.width,
            i = c.offset.top,
            j = i + d.helperProportions.height;
          for (var k = d.snapElements.length - 1; k >= 0; k--) {
            var l = d.snapElements[k].left,
              m = l + d.snapElements[k].width,
              n = d.snapElements[k].top,
              o = n + d.snapElements[k].height;
            if (
              !(
                (l - f < g && g < m + f && n - f < i && i < o + f) ||
                (l - f < g && g < m + f && n - f < j && j < o + f) ||
                (l - f < h && h < m + f && n - f < i && i < o + f) ||
                (l - f < h && h < m + f && n - f < j && j < o + f)
              )
            ) {
              d.snapElements[k].snapping &&
                d.options.snap.release &&
                d.options.snap.release.call(
                  d.element,
                  b,
                  a.extend(d._uiHash(), {
                    snapItem: d.snapElements[k].item,
                  })
                ),
                (d.snapElements[k].snapping = !1);
              continue;
            }
            if (e.snapMode != "inner") {
              var p = Math.abs(n - j) <= f,
                q = Math.abs(o - i) <= f,
                r = Math.abs(l - h) <= f,
                s = Math.abs(m - g) <= f;
              p &&
                (c.position.top =
                  d._convertPositionTo("relative", {
                    top: n - d.helperProportions.height,
                    left: 0,
                  }).top - d.margins.top),
                q &&
                  (c.position.top =
                    d._convertPositionTo("relative", {
                      top: o,
                      left: 0,
                    }).top - d.margins.top),
                r &&
                  (c.position.left =
                    d._convertPositionTo("relative", {
                      top: 0,
                      left: l - d.helperProportions.width,
                    }).left - d.margins.left),
                s &&
                  (c.position.left =
                    d._convertPositionTo("relative", {
                      top: 0,
                      left: m,
                    }).left - d.margins.left);
            }
            var t = p || q || r || s;
            if (e.snapMode != "outer") {
              var p = Math.abs(n - i) <= f,
                q = Math.abs(o - j) <= f,
                r = Math.abs(l - g) <= f,
                s = Math.abs(m - h) <= f;
              p &&
                (c.position.top =
                  d._convertPositionTo("relative", {
                    top: n,
                    left: 0,
                  }).top - d.margins.top),
                q &&
                  (c.position.top =
                    d._convertPositionTo("relative", {
                      top: o - d.helperProportions.height,
                      left: 0,
                    }).top - d.margins.top),
                r &&
                  (c.position.left =
                    d._convertPositionTo("relative", {
                      top: 0,
                      left: l,
                    }).left - d.margins.left),
                s &&
                  (c.position.left =
                    d._convertPositionTo("relative", {
                      top: 0,
                      left: m - d.helperProportions.width,
                    }).left - d.margins.left);
            }
            !d.snapElements[k].snapping &&
              (p || q || r || s || t) &&
              d.options.snap.snap &&
              d.options.snap.snap.call(
                d.element,
                b,
                a.extend(d._uiHash(), {
                  snapItem: d.snapElements[k].item,
                })
              ),
              (d.snapElements[k].snapping = p || q || r || s || t);
          }
        },
      }),
      a.ui.plugin.add("draggable", "stack", {
        start: function (b, c) {
          var d = a(this).data("draggable").options,
            e = a.makeArray(a(d.stack)).sort(function (b, c) {
              return (
                (parseInt(a(b).css("zIndex"), 10) || 0) -
                (parseInt(a(c).css("zIndex"), 10) || 0)
              );
            });
          if (!e.length) return;
          var f = parseInt(e[0].style.zIndex) || 0;
          a(e).each(function (a) {
            this.style.zIndex = f + a;
          }),
            (this[0].style.zIndex = f + e.length);
        },
      }),
      a.ui.plugin.add("draggable", "zIndex", {
        start: function (b, c) {
          var d = a(c.helper),
            e = a(this).data("draggable").options;
          d.css("zIndex") && (e._zIndex = d.css("zIndex")),
            d.css("zIndex", e.zIndex);
        },
        stop: function (b, c) {
          var d = a(this).data("draggable").options;
          d._zIndex && a(c.helper).css("zIndex", d._zIndex);
        },
      });
  })(jQuery),
  (function (a, b) {
    a.widget("ui.droppable", {
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: "default",
        tolerance: "intersect",
      },
      _create: function () {
        var b = this.options,
          c = b.accept;
        (this.isover = 0),
          (this.isout = 1),
          (this.accept = a.isFunction(c)
            ? c
            : function (a) {
                return a.is(c);
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight,
          }),
          (a.ui.ddmanager.droppables[b.scope] =
            a.ui.ddmanager.droppables[b.scope] || []),
          a.ui.ddmanager.droppables[b.scope].push(this),
          b.addClasses && this.element.addClass("ui-droppable");
      },
      destroy: function () {
        var b = a.ui.ddmanager.droppables[this.options.scope];
        for (var c = 0; c < b.length; c++) b[c] == this && b.splice(c, 1);
        return (
          this.element
            .removeClass("ui-droppable ui-droppable-disabled")
            .removeData("droppable")
            .unbind(".droppable"),
          this
        );
      },
      _setOption: function (b, c) {
        b == "accept" &&
          (this.accept = a.isFunction(c)
            ? c
            : function (a) {
                return a.is(c);
              }),
          a.Widget.prototype._setOption.apply(this, arguments);
      },
      _activate: function (b) {
        var c = a.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          c && this._trigger("activate", b, this.ui(c));
      },
      _deactivate: function (b) {
        var c = a.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          c && this._trigger("deactivate", b, this.ui(c));
      },
      _over: function (b) {
        var c = a.ui.ddmanager.current;
        if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
        this.accept.call(this.element[0], c.currentItem || c.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger("over", b, this.ui(c)));
      },
      _out: function (b) {
        var c = a.ui.ddmanager.current;
        if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
        this.accept.call(this.element[0], c.currentItem || c.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger("out", b, this.ui(c)));
      },
      _drop: function (b, c) {
        var d = c || a.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1;
        var e = !1;
        return (
          this.element
            .find(":data(droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var b = a.data(this, "droppable");
              if (
                b.options.greedy &&
                !b.options.disabled &&
                b.options.scope == d.options.scope &&
                b.accept.call(b.element[0], d.currentItem || d.element) &&
                a.ui.intersect(
                  d,
                  a.extend(b, {
                    offset: b.element.offset(),
                  }),
                  b.options.tolerance
                )
              )
                return (e = !0), !1;
            }),
          e
            ? !1
            : this.accept.call(this.element[0], d.currentItem || d.element)
            ? (this.options.activeClass &&
                this.element.removeClass(this.options.activeClass),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass),
              this._trigger("drop", b, this.ui(d)),
              this.element)
            : !1
        );
      },
      ui: function (a) {
        return {
          draggable: a.currentItem || a.element,
          helper: a.helper,
          position: a.position,
          offset: a.positionAbs,
        };
      },
    }),
      a.extend(a.ui.droppable, {
        version: "1.8.23",
      }),
      (a.ui.intersect = function (b, c, d) {
        if (!c.offset) return !1;
        var e = (b.positionAbs || b.position.absolute).left,
          f = e + b.helperProportions.width,
          g = (b.positionAbs || b.position.absolute).top,
          h = g + b.helperProportions.height,
          i = c.offset.left,
          j = i + c.proportions.width,
          k = c.offset.top,
          l = k + c.proportions.height;
        switch (d) {
          case "fit":
            return i <= e && f <= j && k <= g && h <= l;
          case "intersect":
            return (
              i < e + b.helperProportions.width / 2 &&
              f - b.helperProportions.width / 2 < j &&
              k < g + b.helperProportions.height / 2 &&
              h - b.helperProportions.height / 2 < l
            );
          case "pointer":
            var m =
                (b.positionAbs || b.position.absolute).left +
                (b.clickOffset || b.offset.click).left,
              n =
                (b.positionAbs || b.position.absolute).top +
                (b.clickOffset || b.offset.click).top,
              o = a.ui.isOver(
                n,
                m,
                k,
                i,
                c.proportions.height,
                c.proportions.width
              );
            return o;
          case "touch":
            return (
              ((g >= k && g <= l) || (h >= k && h <= l) || (g < k && h > l)) &&
              ((e >= i && e <= j) || (f >= i && f <= j) || (e < i && f > j))
            );
          default:
            return !1;
        }
      }),
      (a.ui.ddmanager = {
        current: null,
        droppables: {
          default: [],
        },
        prepareOffsets: function (b, c) {
          var d = a.ui.ddmanager.droppables[b.options.scope] || [],
            e = c ? c.type : null,
            f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
          g: for (var h = 0; h < d.length; h++) {
            if (
              d[h].options.disabled ||
              (b &&
                !d[h].accept.call(d[h].element[0], b.currentItem || b.element))
            )
              continue;
            for (var i = 0; i < f.length; i++)
              if (f[i] == d[h].element[0]) {
                d[h].proportions.height = 0;
                continue g;
              }
            d[h].visible = d[h].element.css("display") != "none";
            if (!d[h].visible) continue;
            e == "mousedown" && d[h]._activate.call(d[h], c),
              (d[h].offset = d[h].element.offset()),
              (d[h].proportions = {
                width: d[h].element[0].offsetWidth,
                height: d[h].element[0].offsetHeight,
              });
          }
        },
        drop: function (b, c) {
          var d = !1;
          return (
            a.each(
              a.ui.ddmanager.droppables[b.options.scope] || [],
              function () {
                if (!this.options) return;
                !this.options.disabled &&
                  this.visible &&
                  a.ui.intersect(b, this, this.options.tolerance) &&
                  (d = this._drop.call(this, c) || d),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      b.currentItem || b.element
                    ) &&
                    ((this.isout = 1),
                    (this.isover = 0),
                    this._deactivate.call(this, c));
              }
            ),
            d
          );
        },
        dragStart: function (b, c) {
          b.element
            .parents(":not(body,html)")
            .bind("scroll.droppable", function () {
              b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
            });
        },
        drag: function (b, c) {
          b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c),
            a.each(
              a.ui.ddmanager.droppables[b.options.scope] || [],
              function () {
                if (this.options.disabled || this.greedyChild || !this.visible)
                  return;
                var d = a.ui.intersect(b, this, this.options.tolerance),
                  e =
                    !d && this.isover == 1
                      ? "isout"
                      : d && this.isover == 0
                      ? "isover"
                      : null;
                if (!e) return;
                var f;
                if (this.options.greedy) {
                  var g = this.element.parents(":data(droppable):eq(0)");
                  g.length &&
                    ((f = a.data(g[0], "droppable")),
                    (f.greedyChild = e == "isover" ? 1 : 0));
                }
                f &&
                  e == "isover" &&
                  ((f.isover = 0), (f.isout = 1), f._out.call(f, c)),
                  (this[e] = 1),
                  (this[e == "isout" ? "isover" : "isout"] = 0),
                  this[e == "isover" ? "_over" : "_out"].call(this, c),
                  f &&
                    e == "isout" &&
                    ((f.isout = 0), (f.isover = 1), f._over.call(f, c));
              }
            );
        },
        dragStop: function (b, c) {
          b.element.parents(":not(body,html)").unbind("scroll.droppable"),
            b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
        },
      });
  })(jQuery),
  (function (a, b) {
    a.widget("ui.resizable", a.ui.mouse, {
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 1e3,
      },
      _create: function () {
        var b = this,
          c = this.options;
        this.element.addClass("ui-resizable"),
          a.extend(this, {
            _aspectRatio: !!c.aspectRatio,
            aspectRatio: c.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              c.helper || c.ghost || c.animate
                ? c.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i
          ) &&
            (this.element.wrap(
              a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css(
                {
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data("resizable", this.element.data("resizable"))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css("marginLeft"),
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
            }),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              })
            ),
            this.originalElement.css({
              margin: this.originalElement.css("margin"),
            }),
            this._proportionallyResize()),
          (this.handles =
            c.handles ||
            (a(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se"));
        if (this.handles.constructor == String) {
          this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
          var d = this.handles.split(",");
          this.handles = {};
          for (var e = 0; e < d.length; e++) {
            var f = a.trim(d[e]),
              g = "ui-resizable-" + f,
              h = a('<div class="ui-resizable-handle ' + g + '"></div>');
            h.css({
              zIndex: c.zIndex,
            }),
              "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
              (this.handles[f] = ".ui-resizable-" + f),
              this.element.append(h);
          }
        }
        (this._renderAxis = function (b) {
          b = b || this.element;
          for (var c in this.handles) {
            this.handles[c].constructor == String &&
              (this.handles[c] = a(this.handles[c], this.element).show());
            if (
              this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(
                /textarea|input|select|button/i
              )
            ) {
              var d = a(this.handles[c], this.element),
                e = 0;
              e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
              var f = [
                "padding",
                /ne|nw|n/.test(c)
                  ? "Top"
                  : /se|sw|s/.test(c)
                  ? "Bottom"
                  : /^e$/.test(c)
                  ? "Right"
                  : "Left",
              ].join("");
              b.css(f, e), this._proportionallyResize();
            }
            if (!a(this.handles[c]).length) continue;
          }
        }),
          this._renderAxis(this.element),
          (this._handles = a(
            ".ui-resizable-handle",
            this.element
          ).disableSelection()),
          this._handles.mouseover(function () {
            if (!b.resizing) {
              if (this.className)
                var a = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                );
              b.axis = a && a[1] ? a[1] : "se";
            }
          }),
          c.autoHide &&
            (this._handles.hide(),
            a(this.element)
              .addClass("ui-resizable-autohide")
              .hover(
                function () {
                  if (c.disabled) return;
                  a(this).removeClass("ui-resizable-autohide"),
                    b._handles.show();
                },
                function () {
                  if (c.disabled) return;
                  b.resizing ||
                    (a(this).addClass("ui-resizable-autohide"),
                    b._handles.hide());
                }
              )),
          this._mouseInit();
      },
      destroy: function () {
        this._mouseDestroy();
        var b = function (b) {
          a(b)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing"
            )
            .removeData("resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
        if (this.elementIsWrapper) {
          b(this.element);
          var c = this.element;
          c.after(
            this.originalElement.css({
              position: c.css("position"),
              width: c.outerWidth(),
              height: c.outerHeight(),
              top: c.css("top"),
              left: c.css("left"),
            })
          ).remove();
        }
        return (
          this.originalElement.css("resize", this.originalResizeStyle),
          b(this.originalElement),
          this
        );
      },
      _mouseCapture: function (b) {
        var c = !1;
        for (var d in this.handles)
          a(this.handles[d])[0] == b.target && (c = !0);
        return !this.options.disabled && c;
      },
      _mouseStart: function (b) {
        var d = this.options,
          e = this.element.position(),
          f = this.element;
        (this.resizing = !0),
          (this.documentScroll = {
            top: a(document).scrollTop(),
            left: a(document).scrollLeft(),
          }),
          (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) &&
            f.css({
              position: "absolute",
              top: e.top,
              left: e.left,
            }),
          this._renderProxy();
        var g = c(this.helper.css("left")),
          h = c(this.helper.css("top"));
        d.containment &&
          ((g += a(d.containment).scrollLeft() || 0),
          (h += a(d.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = {
            left: g,
            top: h,
          }),
          (this.size = this._helper
            ? {
                width: f.outerWidth(),
                height: f.outerHeight(),
              }
            : {
                width: f.width(),
                height: f.height(),
              }),
          (this.originalSize = this._helper
            ? {
                width: f.outerWidth(),
                height: f.outerHeight(),
              }
            : {
                width: f.width(),
                height: f.height(),
              }),
          (this.originalPosition = {
            left: g,
            top: h,
          }),
          (this.sizeDiff = {
            width: f.outerWidth() - f.width(),
            height: f.outerHeight() - f.height(),
          }),
          (this.originalMousePosition = {
            left: b.pageX,
            top: b.pageY,
          }),
          (this.aspectRatio =
            typeof d.aspectRatio == "number"
              ? d.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1);
        var i = a(".ui-resizable-" + this.axis).css("cursor");
        return (
          a("body").css("cursor", i == "auto" ? this.axis + "-resize" : i),
          f.addClass("ui-resizable-resizing"),
          this._propagate("start", b),
          !0
        );
      },
      _mouseDrag: function (b) {
        var c = this.helper,
          d = this.options,
          e = {},
          f = this,
          g = this.originalMousePosition,
          h = this.axis,
          i = b.pageX - g.left || 0,
          j = b.pageY - g.top || 0,
          k = this._change[h];
        if (!k) return !1;
        var l = k.apply(this, [b, i, j]),
          m = a.browser.msie && a.browser.version < 7,
          n = this.sizeDiff;
        this._updateVirtualBoundaries(b.shiftKey);
        if (this._aspectRatio || b.shiftKey) l = this._updateRatio(l, b);
        return (
          (l = this._respectSize(l, b)),
          this._propagate("resize", b),
          c.css({
            top: this.position.top + "px",
            left: this.position.left + "px",
            width: this.size.width + "px",
            height: this.size.height + "px",
          }),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          this._updateCache(l),
          this._trigger("resize", b, this.ui()),
          !1
        );
      },
      _mouseStop: function (b) {
        this.resizing = !1;
        var c = this.options,
          d = this;
        if (this._helper) {
          var e = this._proportionallyResizeElements,
            f = e.length && /textarea/i.test(e[0].nodeName),
            g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height,
            h = f ? 0 : d.sizeDiff.width,
            i = {
              width: d.helper.width() - h,
              height: d.helper.height() - g,
            },
            j =
              parseInt(d.element.css("left"), 10) +
                (d.position.left - d.originalPosition.left) || null,
            k =
              parseInt(d.element.css("top"), 10) +
                (d.position.top - d.originalPosition.top) || null;
          c.animate ||
            this.element.css(
              a.extend(i, {
                top: k,
                left: j,
              })
            ),
            d.helper.height(d.size.height),
            d.helper.width(d.size.width),
            this._helper && !c.animate && this._proportionallyResize();
        }
        return (
          a("body").css("cursor", "auto"),
          this.element.removeClass("ui-resizable-resizing"),
          this._propagate("stop", b),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updateVirtualBoundaries: function (a) {
        var b = this.options,
          c,
          e,
          f,
          g,
          h;
        h = {
          minWidth: d(b.minWidth) ? b.minWidth : 0,
          maxWidth: d(b.maxWidth) ? b.maxWidth : Infinity,
          minHeight: d(b.minHeight) ? b.minHeight : 0,
          maxHeight: d(b.maxHeight) ? b.maxHeight : Infinity,
        };
        if (this._aspectRatio || a)
          (c = h.minHeight * this.aspectRatio),
            (f = h.minWidth / this.aspectRatio),
            (e = h.maxHeight * this.aspectRatio),
            (g = h.maxWidth / this.aspectRatio),
            c > h.minWidth && (h.minWidth = c),
            f > h.minHeight && (h.minHeight = f),
            e < h.maxWidth && (h.maxWidth = e),
            g < h.maxHeight && (h.maxHeight = g);
        this._vBoundaries = h;
      },
      _updateCache: function (a) {
        var b = this.options;
        (this.offset = this.helper.offset()),
          d(a.left) && (this.position.left = a.left),
          d(a.top) && (this.position.top = a.top),
          d(a.height) && (this.size.height = a.height),
          d(a.width) && (this.size.width = a.width);
      },
      _updateRatio: function (a, b) {
        var c = this.options,
          e = this.position,
          f = this.size,
          g = this.axis;
        return (
          d(a.height)
            ? (a.width = a.height * this.aspectRatio)
            : d(a.width) && (a.height = a.width / this.aspectRatio),
          g == "sw" &&
            ((a.left = e.left + (f.width - a.width)), (a.top = null)),
          g == "nw" &&
            ((a.top = e.top + (f.height - a.height)),
            (a.left = e.left + (f.width - a.width))),
          a
        );
      },
      _respectSize: function (a, b) {
        var c = this.helper,
          e = this._vBoundaries,
          f = this._aspectRatio || b.shiftKey,
          g = this.axis,
          h = d(a.width) && e.maxWidth && e.maxWidth < a.width,
          i = d(a.height) && e.maxHeight && e.maxHeight < a.height,
          j = d(a.width) && e.minWidth && e.minWidth > a.width,
          k = d(a.height) && e.minHeight && e.minHeight > a.height;
        j && (a.width = e.minWidth),
          k && (a.height = e.minHeight),
          h && (a.width = e.maxWidth),
          i && (a.height = e.maxHeight);
        var l = this.originalPosition.left + this.originalSize.width,
          m = this.position.top + this.size.height,
          n = /sw|nw|w/.test(g),
          o = /nw|ne|n/.test(g);
        j && n && (a.left = l - e.minWidth),
          h && n && (a.left = l - e.maxWidth),
          k && o && (a.top = m - e.minHeight),
          i && o && (a.top = m - e.maxHeight);
        var p = !a.width && !a.height;
        return (
          p && !a.left && a.top
            ? (a.top = null)
            : p && !a.top && a.left && (a.left = null),
          a
        );
      },
      _proportionallyResize: function () {
        var b = this.options;
        if (!this._proportionallyResizeElements.length) return;
        var c = this.helper || this.element;
        for (var d = 0; d < this._proportionallyResizeElements.length; d++) {
          var e = this._proportionallyResizeElements[d];
          if (!this.borderDif) {
            var f = [
                e.css("borderTopWidth"),
                e.css("borderRightWidth"),
                e.css("borderBottomWidth"),
                e.css("borderLeftWidth"),
              ],
              g = [
                e.css("paddingTop"),
                e.css("paddingRight"),
                e.css("paddingBottom"),
                e.css("paddingLeft"),
              ];
            this.borderDif = a.map(f, function (a, b) {
              var c = parseInt(a, 10) || 0,
                d = parseInt(g[b], 10) || 0;
              return c + d;
            });
          }
          if (
            !a.browser.msie ||
            (!a(c).is(":hidden") && !a(c).parents(":hidden").length)
          )
            e.css({
              height: c.height() - this.borderDif[0] - this.borderDif[2] || 0,
              width: c.width() - this.borderDif[1] - this.borderDif[3] || 0,
            });
          else continue;
        }
      },
      _renderProxy: function () {
        var b = this.element,
          c = this.options;
        this.elementOffset = b.offset();
        if (this._helper) {
          this.helper =
            this.helper || a('<div style="overflow:hidden;"></div>');
          var d = a.browser.msie && a.browser.version < 7,
            e = d ? 1 : 0,
            f = d ? 2 : -1;
          this.helper.addClass(this._helper).css({
            width: this.element.outerWidth() + f,
            height: this.element.outerHeight() + f,
            position: "absolute",
            left: this.elementOffset.left - e + "px",
            top: this.elementOffset.top - e + "px",
            zIndex: ++c.zIndex,
          }),
            this.helper.appendTo("body").disableSelection();
        } else this.helper = this.element;
      },
      _change: {
        e: function (a, b, c) {
          return {
            width: this.originalSize.width + b,
          };
        },
        w: function (a, b, c) {
          var d = this.options,
            e = this.originalSize,
            f = this.originalPosition;
          return {
            left: f.left + b,
            width: e.width - b,
          };
        },
        n: function (a, b, c) {
          var d = this.options,
            e = this.originalSize,
            f = this.originalPosition;
          return {
            top: f.top + c,
            height: e.height - c,
          };
        },
        s: function (a, b, c) {
          return {
            height: this.originalSize.height + c,
          };
        },
        se: function (b, c, d) {
          return a.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [b, c, d])
          );
        },
        sw: function (b, c, d) {
          return a.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [b, c, d])
          );
        },
        ne: function (b, c, d) {
          return a.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [b, c, d])
          );
        },
        nw: function (b, c, d) {
          return a.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [b, c, d])
          );
        },
      },
      _propagate: function (b, c) {
        a.ui.plugin.call(this, b, [c, this.ui()]),
          b != "resize" && this._trigger(b, c, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      a.extend(a.ui.resizable, {
        version: "1.8.23",
      }),
      a.ui.plugin.add("resizable", "alsoResize", {
        start: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = function (b) {
              a(b).each(function () {
                var b = a(this);
                b.data("resizable-alsoresize", {
                  width: parseInt(b.width(), 10),
                  height: parseInt(b.height(), 10),
                  left: parseInt(b.css("left"), 10),
                  top: parseInt(b.css("top"), 10),
                });
              });
            };
          typeof e.alsoResize == "object" && !e.alsoResize.parentNode
            ? e.alsoResize.length
              ? ((e.alsoResize = e.alsoResize[0]), f(e.alsoResize))
              : a.each(e.alsoResize, function (a) {
                  f(a);
                })
            : f(e.alsoResize);
        },
        resize: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d.originalSize,
            g = d.originalPosition,
            h = {
              height: d.size.height - f.height || 0,
              width: d.size.width - f.width || 0,
              top: d.position.top - g.top || 0,
              left: d.position.left - g.left || 0,
            },
            i = function (b, d) {
              a(b).each(function () {
                var b = a(this),
                  e = a(this).data("resizable-alsoresize"),
                  f = {},
                  g =
                    d && d.length
                      ? d
                      : b.parents(c.originalElement[0]).length
                      ? ["width", "height"]
                      : ["width", "height", "top", "left"];
                a.each(g, function (a, b) {
                  var c = (e[b] || 0) + (h[b] || 0);
                  c && c >= 0 && (f[b] = c || null);
                }),
                  b.css(f);
              });
            };
          typeof e.alsoResize == "object" && !e.alsoResize.nodeType
            ? a.each(e.alsoResize, function (a, b) {
                i(a, b);
              })
            : i(e.alsoResize);
        },
        stop: function (b, c) {
          a(this).removeData("resizable-alsoresize");
        },
      }),
      a.ui.plugin.add("resizable", "animate", {
        stop: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d._proportionallyResizeElements,
            g = f.length && /textarea/i.test(f[0].nodeName),
            h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
            i = g ? 0 : d.sizeDiff.width,
            j = {
              width: d.size.width - i,
              height: d.size.height - h,
            },
            k =
              parseInt(d.element.css("left"), 10) +
                (d.position.left - d.originalPosition.left) || null,
            l =
              parseInt(d.element.css("top"), 10) +
                (d.position.top - d.originalPosition.top) || null;
          d.element.animate(
            a.extend(
              j,
              l && k
                ? {
                    top: l,
                    left: k,
                  }
                : {}
            ),
            {
              duration: e.animateDuration,
              easing: e.animateEasing,
              step: function () {
                var c = {
                  width: parseInt(d.element.css("width"), 10),
                  height: parseInt(d.element.css("height"), 10),
                  top: parseInt(d.element.css("top"), 10),
                  left: parseInt(d.element.css("left"), 10),
                };
                f &&
                  f.length &&
                  a(f[0]).css({
                    width: c.width,
                    height: c.height,
                  }),
                  d._updateCache(c),
                  d._propagate("resize", b);
              },
            }
          );
        },
      }),
      a.ui.plugin.add("resizable", "containment", {
        start: function (b, d) {
          var e = a(this).data("resizable"),
            f = e.options,
            g = e.element,
            h = f.containment,
            i =
              h instanceof a
                ? h.get(0)
                : /parent/.test(h)
                ? g.parent().get(0)
                : h;
          if (!i) return;
          e.containerElement = a(i);
          if (/document/.test(h) || h == document)
            (e.containerOffset = {
              left: 0,
              top: 0,
            }),
              (e.containerPosition = {
                left: 0,
                top: 0,
              }),
              (e.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height:
                  a(document).height() || document.body.parentNode.scrollHeight,
              });
          else {
            var j = a(i),
              k = [];
            a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) {
              k[a] = c(j.css("padding" + b));
            }),
              (e.containerOffset = j.offset()),
              (e.containerPosition = j.position()),
              (e.containerSize = {
                height: j.innerHeight() - k[3],
                width: j.innerWidth() - k[1],
              });
            var l = e.containerOffset,
              m = e.containerSize.height,
              n = e.containerSize.width,
              o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n,
              p = a.ui.hasScroll(i) ? i.scrollHeight : m;
            e.parentData = {
              element: i,
              left: l.left,
              top: l.top,
              width: o,
              height: p,
            };
          }
        },
        resize: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d.containerSize,
            g = d.containerOffset,
            h = d.size,
            i = d.position,
            j = d._aspectRatio || b.shiftKey,
            k = {
              top: 0,
              left: 0,
            },
            l = d.containerElement;
          l[0] != document && /static/.test(l.css("position")) && (k = g),
            i.left < (d._helper ? g.left : 0) &&
              ((d.size.width =
                d.size.width +
                (d._helper
                  ? d.position.left - g.left
                  : d.position.left - k.left)),
              j && (d.size.height = d.size.width / d.aspectRatio),
              (d.position.left = e.helper ? g.left : 0)),
            i.top < (d._helper ? g.top : 0) &&
              ((d.size.height =
                d.size.height +
                (d._helper ? d.position.top - g.top : d.position.top)),
              j && (d.size.width = d.size.height * d.aspectRatio),
              (d.position.top = d._helper ? g.top : 0)),
            (d.offset.left = d.parentData.left + d.position.left),
            (d.offset.top = d.parentData.top + d.position.top);
          var m = Math.abs(
              (d._helper ? d.offset.left - k.left : d.offset.left - k.left) +
                d.sizeDiff.width
            ),
            n = Math.abs(
              (d._helper ? d.offset.top - k.top : d.offset.top - g.top) +
                d.sizeDiff.height
            ),
            o = d.containerElement.get(0) == d.element.parent().get(0),
            p = /relative|absolute/.test(d.containerElement.css("position"));
          o && p && (m -= d.parentData.left),
            m + d.size.width >= d.parentData.width &&
              ((d.size.width = d.parentData.width - m),
              j && (d.size.height = d.size.width / d.aspectRatio)),
            n + d.size.height >= d.parentData.height &&
              ((d.size.height = d.parentData.height - n),
              j && (d.size.width = d.size.height * d.aspectRatio));
        },
        stop: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d.position,
            g = d.containerOffset,
            h = d.containerPosition,
            i = d.containerElement,
            j = a(d.helper),
            k = j.offset(),
            l = j.outerWidth() - d.sizeDiff.width,
            m = j.outerHeight() - d.sizeDiff.height;
          d._helper &&
            !e.animate &&
            /relative/.test(i.css("position")) &&
            a(this).css({
              left: k.left - h.left - g.left,
              width: l,
              height: m,
            }),
            d._helper &&
              !e.animate &&
              /static/.test(i.css("position")) &&
              a(this).css({
                left: k.left - h.left - g.left,
                width: l,
                height: m,
              });
        },
      }),
      a.ui.plugin.add("resizable", "ghost", {
        start: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d.size;
          (d.ghost = d.originalElement.clone()),
            d.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass(typeof e.ghost == "string" ? e.ghost : ""),
            d.ghost.appendTo(d.helper);
        },
        resize: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options;
          d.ghost &&
            d.ghost.css({
              position: "relative",
              height: d.size.height,
              width: d.size.width,
            });
        },
        stop: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options;
          d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0));
        },
      }),
      a.ui.plugin.add("resizable", "grid", {
        resize: function (b, c) {
          var d = a(this).data("resizable"),
            e = d.options,
            f = d.size,
            g = d.originalSize,
            h = d.originalPosition,
            i = d.axis,
            j = e._aspectRatio || b.shiftKey;
          e.grid = typeof e.grid == "number" ? [e.grid, e.grid] : e.grid;
          var k =
              Math.round((f.width - g.width) / (e.grid[0] || 1)) *
              (e.grid[0] || 1),
            l =
              Math.round((f.height - g.height) / (e.grid[1] || 1)) *
              (e.grid[1] || 1);
          /^(se|s|e)$/.test(i)
            ? ((d.size.width = g.width + k), (d.size.height = g.height + l))
            : /^(ne)$/.test(i)
            ? ((d.size.width = g.width + k),
              (d.size.height = g.height + l),
              (d.position.top = h.top - l))
            : /^(sw)$/.test(i)
            ? ((d.size.width = g.width + k),
              (d.size.height = g.height + l),
              (d.position.left = h.left - k))
            : ((d.size.width = g.width + k),
              (d.size.height = g.height + l),
              (d.position.top = h.top - l),
              (d.position.left = h.left - k));
        },
      });
    var c = function (a) {
        return parseInt(a, 10) || 0;
      },
      d = function (a) {
        return !isNaN(parseInt(a, 10));
      };
  })(jQuery),
  (function (a, b) {
    a.widget("ui.selectable", a.ui.mouse, {
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
      },
      _create: function () {
        var b = this;
        this.element.addClass("ui-selectable"), (this.dragged = !1);
        var c;
        (this.refresh = function () {
          (c = a(b.options.filter, b.element[0])),
            c.addClass("ui-selectee"),
            c.each(function () {
              var b = a(this),
                c = b.offset();
              a.data(this, "selectable-item", {
                element: this,
                $element: b,
                left: c.left,
                top: c.top,
                right: c.left + b.outerWidth(),
                bottom: c.top + b.outerHeight(),
                startselected: !1,
                selected: b.hasClass("ui-selected"),
                selecting: b.hasClass("ui-selecting"),
                unselecting: b.hasClass("ui-unselecting"),
              });
            });
        }),
          this.refresh(),
          (this.selectees = c.addClass("ui-selectee")),
          this._mouseInit(),
          (this.helper = a("<div class='ui-selectable-helper'></div>"));
      },
      destroy: function () {
        return (
          this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item"),
          this.element
            .removeClass("ui-selectable ui-selectable-disabled")
            .removeData("selectable")
            .unbind(".selectable"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseStart: function (b) {
        var c = this;
        this.opos = [b.pageX, b.pageY];
        if (this.options.disabled) return;
        var d = this.options;
        (this.selectees = a(d.filter, this.element[0])),
          this._trigger("start", b),
          a(d.appendTo).append(this.helper),
          this.helper.css({
            left: b.clientX,
            top: b.clientY,
            width: 0,
            height: 0,
          }),
          d.autoRefresh && this.refresh(),
          this.selectees.filter(".ui-selected").each(function () {
            var d = a.data(this, "selectable-item");
            (d.startselected = !0),
              !b.metaKey &&
                !b.ctrlKey &&
                (d.$element.removeClass("ui-selected"),
                (d.selected = !1),
                d.$element.addClass("ui-unselecting"),
                (d.unselecting = !0),
                c._trigger("unselecting", b, {
                  unselecting: d.element,
                }));
          }),
          a(b.target)
            .parents()
            .andSelf()
            .each(function () {
              var d = a.data(this, "selectable-item");
              if (d) {
                var e =
                  (!b.metaKey && !b.ctrlKey) ||
                  !d.$element.hasClass("ui-selected");
                return (
                  d.$element
                    .removeClass(e ? "ui-unselecting" : "ui-selected")
                    .addClass(e ? "ui-selecting" : "ui-unselecting"),
                  (d.unselecting = !e),
                  (d.selecting = e),
                  (d.selected = e),
                  e
                    ? c._trigger("selecting", b, {
                        selecting: d.element,
                      })
                    : c._trigger("unselecting", b, {
                        unselecting: d.element,
                      }),
                  !1
                );
              }
            });
      },
      _mouseDrag: function (b) {
        var c = this;
        this.dragged = !0;
        if (this.options.disabled) return;
        var d = this.options,
          e = this.opos[0],
          f = this.opos[1],
          g = b.pageX,
          h = b.pageY;
        if (e > g) {
          var i = g;
          (g = e), (e = i);
        }
        if (f > h) {
          var i = h;
          (h = f), (f = i);
        }
        return (
          this.helper.css({
            left: e,
            top: f,
            width: g - e,
            height: h - f,
          }),
          this.selectees.each(function () {
            var i = a.data(this, "selectable-item");
            if (!i || i.element == c.element[0]) return;
            var j = !1;
            d.tolerance == "touch"
              ? (j = !(i.left > g || i.right < e || i.top > h || i.bottom < f))
              : d.tolerance == "fit" &&
                (j = i.left > e && i.right < g && i.top > f && i.bottom < h),
              j
                ? (i.selected &&
                    (i.$element.removeClass("ui-selected"), (i.selected = !1)),
                  i.unselecting &&
                    (i.$element.removeClass("ui-unselecting"),
                    (i.unselecting = !1)),
                  i.selecting ||
                    (i.$element.addClass("ui-selecting"),
                    (i.selecting = !0),
                    c._trigger("selecting", b, {
                      selecting: i.element,
                    })))
                : (i.selecting &&
                    ((b.metaKey || b.ctrlKey) && i.startselected
                      ? (i.$element.removeClass("ui-selecting"),
                        (i.selecting = !1),
                        i.$element.addClass("ui-selected"),
                        (i.selected = !0))
                      : (i.$element.removeClass("ui-selecting"),
                        (i.selecting = !1),
                        i.startselected &&
                          (i.$element.addClass("ui-unselecting"),
                          (i.unselecting = !0)),
                        c._trigger("unselecting", b, {
                          unselecting: i.element,
                        }))),
                  i.selected &&
                    !b.metaKey &&
                    !b.ctrlKey &&
                    !i.startselected &&
                    (i.$element.removeClass("ui-selected"),
                    (i.selected = !1),
                    i.$element.addClass("ui-unselecting"),
                    (i.unselecting = !0),
                    c._trigger("unselecting", b, {
                      unselecting: i.element,
                    })));
          }),
          !1
        );
      },
      _mouseStop: function (b) {
        var c = this;
        this.dragged = !1;
        var d = this.options;
        return (
          a(".ui-unselecting", this.element[0]).each(function () {
            var d = a.data(this, "selectable-item");
            d.$element.removeClass("ui-unselecting"),
              (d.unselecting = !1),
              (d.startselected = !1),
              c._trigger("unselected", b, {
                unselected: d.element,
              });
          }),
          a(".ui-selecting", this.element[0]).each(function () {
            var d = a.data(this, "selectable-item");
            d.$element.removeClass("ui-selecting").addClass("ui-selected"),
              (d.selecting = !1),
              (d.selected = !0),
              (d.startselected = !0),
              c._trigger("selected", b, {
                selected: d.element,
              });
          }),
          this._trigger("stop", b),
          this.helper.remove(),
          !1
        );
      },
    }),
      a.extend(a.ui.selectable, {
        version: "1.8.23",
      });
  })(jQuery),
  (function (a, b) {
    a.widget("ui.sortable", a.ui.mouse, {
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
      },
      _create: function () {
        var a = this.options;
        (this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.floating = this.items.length
            ? a.axis === "x" ||
              /left|right/.test(this.items[0].item.css("float")) ||
              /inline|table-cell/.test(this.items[0].item.css("display"))
            : !1),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          (this.ready = !0);
      },
      destroy: function () {
        a.Widget.prototype.destroy.call(this),
          this.element.removeClass("ui-sortable ui-sortable-disabled"),
          this._mouseDestroy();
        for (var b = this.items.length - 1; b >= 0; b--)
          this.items[b].item.removeData(this.widgetName + "-item");
        return this;
      },
      _setOption: function (b, c) {
        b === "disabled"
          ? ((this.options[b] = c),
            this.widget()[c ? "addClass" : "removeClass"](
              "ui-sortable-disabled"
            ))
          : a.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (b, c) {
        var d = this;
        if (this.reverting) return !1;
        if (this.options.disabled || this.options.type == "static") return !1;
        this._refreshItems(b);
        var e = null,
          f = this,
          g = a(b.target)
            .parents()
            .each(function () {
              if (a.data(this, d.widgetName + "-item") == f)
                return (e = a(this)), !1;
            });
        a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
        if (!e) return !1;
        if (this.options.handle && !c) {
          var h = !1;
          a(this.options.handle, e)
            .find("*")
            .andSelf()
            .each(function () {
              this == b.target && (h = !0);
            });
          if (!h) return !1;
        }
        return (this.currentItem = e), this._removeCurrentsFromItems(), !0;
      },
      _mouseStart: function (b, c, d) {
        var e = this.options,
          f = this;
        (this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(b)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          a.extend(this.offset, {
            click: {
              left: b.pageX - this.offset.left,
              top: b.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(b)),
          (this.originalPageX = b.pageX),
          (this.originalPageY = b.pageY),
          e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          e.containment && this._setContainment(),
          e.cursor &&
            (a("body").css("cursor") &&
              (this._storedCursor = a("body").css("cursor")),
            a("body").css("cursor", e.cursor)),
          e.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", e.opacity)),
          e.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", e.zIndex)),
          this.scrollParent[0] != document &&
            this.scrollParent[0].tagName != "HTML" &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", b, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions();
        if (!d)
          for (var g = this.containers.length - 1; g >= 0; g--)
            this.containers[g]._trigger("activate", b, f._uiHash(this));
        return (
          a.ui.ddmanager && (a.ui.ddmanager.current = this),
          a.ui.ddmanager &&
            !e.dropBehaviour &&
            a.ui.ddmanager.prepareOffsets(this, b),
          (this.dragging = !0),
          this.helper.addClass("ui-sortable-helper"),
          this._mouseDrag(b),
          !0
        );
      },
      _mouseDrag: function (b) {
        (this.position = this._generatePosition(b)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
        if (this.options.scroll) {
          var c = this.options,
            d = !1;
          this.scrollParent[0] != document &&
          this.scrollParent[0].tagName != "HTML"
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                b.pageY <
              c.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = d =
                    this.scrollParent[0].scrollTop + c.scrollSpeed)
                : b.pageY - this.overflowOffset.top < c.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = d =
                    this.scrollParent[0].scrollTop - c.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                b.pageX <
              c.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = d =
                    this.scrollParent[0].scrollLeft + c.scrollSpeed)
                : b.pageX - this.overflowOffset.left < c.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = d =
                    this.scrollParent[0].scrollLeft - c.scrollSpeed))
            : (b.pageY - a(document).scrollTop() < c.scrollSensitivity
                ? (d = a(document).scrollTop(
                    a(document).scrollTop() - c.scrollSpeed
                  ))
                : a(window).height() - (b.pageY - a(document).scrollTop()) <
                    c.scrollSensitivity &&
                  (d = a(document).scrollTop(
                    a(document).scrollTop() + c.scrollSpeed
                  )),
              b.pageX - a(document).scrollLeft() < c.scrollSensitivity
                ? (d = a(document).scrollLeft(
                    a(document).scrollLeft() - c.scrollSpeed
                  ))
                : a(window).width() - (b.pageX - a(document).scrollLeft()) <
                    c.scrollSensitivity &&
                  (d = a(document).scrollLeft(
                    a(document).scrollLeft() + c.scrollSpeed
                  ))),
            d !== !1 &&
              a.ui.ddmanager &&
              !c.dropBehaviour &&
              a.ui.ddmanager.prepareOffsets(this, b);
        }
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.options.axis || this.options.axis != "y")
          this.helper[0].style.left = this.position.left + "px";
        if (!this.options.axis || this.options.axis != "x")
          this.helper[0].style.top = this.position.top + "px";
        for (var e = this.items.length - 1; e >= 0; e--) {
          var f = this.items[e],
            g = f.item[0],
            h = this._intersectsWithPointer(f);
          if (!h) continue;
          if (
            g != this.currentItem[0] &&
            this.placeholder[h == 1 ? "next" : "prev"]()[0] != g &&
            !a.ui.contains(this.placeholder[0], g) &&
            (this.options.type == "semi-dynamic"
              ? !a.ui.contains(this.element[0], g)
              : !0)
          ) {
            this.direction = h == 1 ? "down" : "up";
            if (
              this.options.tolerance == "pointer" ||
              this._intersectsWithSides(f)
            )
              this._rearrange(b, f);
            else break;
            this._trigger("change", b, this._uiHash());
            break;
          }
        }
        return (
          this._contactContainers(b),
          a.ui.ddmanager && a.ui.ddmanager.drag(this, b),
          this._trigger("sort", b, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (b, c) {
        if (!b) return;
        a.ui.ddmanager &&
          !this.options.dropBehaviour &&
          a.ui.ddmanager.drop(this, b);
        if (this.options.revert) {
          var d = this,
            e = d.placeholder.offset();
          (d.reverting = !0),
            a(this.helper).animate(
              {
                left:
                  e.left -
                  this.offset.parent.left -
                  d.margins.left +
                  (this.offsetParent[0] == document.body
                    ? 0
                    : this.offsetParent[0].scrollLeft),
                top:
                  e.top -
                  this.offset.parent.top -
                  d.margins.top +
                  (this.offsetParent[0] == document.body
                    ? 0
                    : this.offsetParent[0].scrollTop),
              },
              parseInt(this.options.revert, 10) || 500,
              function () {
                d._clear(b);
              }
            );
        } else this._clear(b, c);
        return !1;
      },
      cancel: function () {
        var b = this;
        if (this.dragging) {
          this._mouseUp({
            target: null,
          }),
            this.options.helper == "original"
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass("ui-sortable-helper")
              : this.currentItem.show();
          for (var c = this.containers.length - 1; c >= 0; c--)
            this.containers[c]._trigger("deactivate", null, b._uiHash(this)),
              this.containers[c].containerCache.over &&
                (this.containers[c]._trigger("out", null, b._uiHash(this)),
                (this.containers[c].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper != "original" &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            a.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? a(this.domPosition.prev).after(this.currentItem)
              : a(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (b) {
        var c = this._getItemsAsjQuery(b && b.connected),
          d = [];
        return (
          (b = b || {}),
          a(c).each(function () {
            var c = (a(b.item || this).attr(b.attribute || "id") || "").match(
              b.expression || /(.+)[-=_](.+)/
            );
            c &&
              d.push(
                (b.key || c[1] + "[]") +
                  "=" +
                  (b.key && b.expression ? c[1] : c[2])
              );
          }),
          !d.length && b.key && d.push(b.key + "="),
          d.join("&")
        );
      },
      toArray: function (b) {
        var c = this._getItemsAsjQuery(b && b.connected),
          d = [];
        return (
          (b = b || {}),
          c.each(function () {
            d.push(a(b.item || this).attr(b.attribute || "id") || "");
          }),
          d
        );
      },
      _intersectsWith: function (a) {
        var b = this.positionAbs.left,
          c = b + this.helperProportions.width,
          d = this.positionAbs.top,
          e = d + this.helperProportions.height,
          f = a.left,
          g = f + a.width,
          h = a.top,
          i = h + a.height,
          j = this.offset.click.top,
          k = this.offset.click.left,
          l = d + j > h && d + j < i && b + k > f && b + k < g;
        return this.options.tolerance == "pointer" ||
          this.options.forcePointerForContainers ||
          (this.options.tolerance != "pointer" &&
            this.helperProportions[this.floating ? "width" : "height"] >
              a[this.floating ? "width" : "height"])
          ? l
          : f < b + this.helperProportions.width / 2 &&
              c - this.helperProportions.width / 2 < g &&
              h < d + this.helperProportions.height / 2 &&
              e - this.helperProportions.height / 2 < i;
      },
      _intersectsWithPointer: function (b) {
        var c =
            this.options.axis === "x" ||
            a.ui.isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              b.top,
              b.height
            ),
          d =
            this.options.axis === "y" ||
            a.ui.isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              b.left,
              b.width
            ),
          e = c && d,
          f = this._getDragVerticalDirection(),
          g = this._getDragHorizontalDirection();
        return e
          ? this.floating
            ? (g && g == "right") || f == "down"
              ? 2
              : 1
            : f && (f == "down" ? 2 : 1)
          : !1;
      },
      _intersectsWithSides: function (b) {
        var c = a.ui.isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            b.top + b.height / 2,
            b.height
          ),
          d = a.ui.isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            b.left + b.width / 2,
            b.width
          ),
          e = this._getDragVerticalDirection(),
          f = this._getDragHorizontalDirection();
        return this.floating && f
          ? (f == "right" && d) || (f == "left" && !d)
          : e && ((e == "down" && c) || (e == "up" && !c));
      },
      _getDragVerticalDirection: function () {
        var a = this.positionAbs.top - this.lastPositionAbs.top;
        return a != 0 && (a > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var a = this.positionAbs.left - this.lastPositionAbs.left;
        return a != 0 && (a > 0 ? "right" : "left");
      },
      refresh: function (a) {
        return this._refreshItems(a), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var a = this.options;
        return a.connectWith.constructor == String
          ? [a.connectWith]
          : a.connectWith;
      },
      _getItemsAsjQuery: function (b) {
        var c = this,
          d = [],
          e = [],
          f = this._connectWith();
        if (f && b)
          for (var g = f.length - 1; g >= 0; g--) {
            var h = a(f[g]);
            for (var i = h.length - 1; i >= 0; i--) {
              var j = a.data(h[i], this.widgetName);
              j &&
                j != this &&
                !j.options.disabled &&
                e.push([
                  a.isFunction(j.options.items)
                    ? j.options.items.call(j.element)
                    : a(j.options.items, j.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  j,
                ]);
            }
          }
        e.push([
          a.isFunction(this.options.items)
            ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem,
              })
            : a(this.options.items, this.element)
                .not(".ui-sortable-helper")
                .not(".ui-sortable-placeholder"),
          this,
        ]);
        for (var g = e.length - 1; g >= 0; g--)
          e[g][0].each(function () {
            d.push(this);
          });
        return a(d);
      },
      _removeCurrentsFromItems: function () {
        var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
        for (var b = 0; b < this.items.length; b++)
          for (var c = 0; c < a.length; c++)
            a[c] == this.items[b].item[0] && this.items.splice(b, 1);
      },
      _refreshItems: function (b) {
        (this.items = []), (this.containers = [this]);
        var c = this.items,
          d = this,
          e = [
            [
              a.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], b, {
                    item: this.currentItem,
                  })
                : a(this.options.items, this.element),
              this,
            ],
          ],
          f = this._connectWith();
        if (f && this.ready)
          for (var g = f.length - 1; g >= 0; g--) {
            var h = a(f[g]);
            for (var i = h.length - 1; i >= 0; i--) {
              var j = a.data(h[i], this.widgetName);
              j &&
                j != this &&
                !j.options.disabled &&
                (e.push([
                  a.isFunction(j.options.items)
                    ? j.options.items.call(j.element[0], b, {
                        item: this.currentItem,
                      })
                    : a(j.options.items, j.element),
                  j,
                ]),
                this.containers.push(j));
            }
          }
        for (var g = e.length - 1; g >= 0; g--) {
          var k = e[g][1],
            l = e[g][0];
          for (var i = 0, m = l.length; i < m; i++) {
            var n = a(l[i]);
            n.data(this.widgetName + "-item", k),
              c.push({
                item: n,
                instance: k,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
          }
        }
      },
      refreshPositions: function (b) {
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset());
        for (var c = this.items.length - 1; c >= 0; c--) {
          var d = this.items[c];
          if (
            d.instance != this.currentContainer &&
            this.currentContainer &&
            d.item[0] != this.currentItem[0]
          )
            continue;
          var e = this.options.toleranceElement
            ? a(this.options.toleranceElement, d.item)
            : d.item;
          b || ((d.width = e.outerWidth()), (d.height = e.outerHeight()));
          var f = e.offset();
          (d.left = f.left), (d.top = f.top);
        }
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (var c = this.containers.length - 1; c >= 0; c--) {
            var f = this.containers[c].element.offset();
            (this.containers[c].containerCache.left = f.left),
              (this.containers[c].containerCache.top = f.top),
              (this.containers[c].containerCache.width =
                this.containers[c].element.outerWidth()),
              (this.containers[c].containerCache.height =
                this.containers[c].element.outerHeight());
          }
        return this;
      },
      _createPlaceholder: function (b) {
        var c = b || this,
          d = c.options;
        if (!d.placeholder || d.placeholder.constructor == String) {
          var e = d.placeholder;
          d.placeholder = {
            element: function () {
              var b = a(document.createElement(c.currentItem[0].nodeName))
                .addClass(
                  e || c.currentItem[0].className + " ui-sortable-placeholder"
                )
                .removeClass("ui-sortable-helper")[0];
              return e || (b.style.visibility = "hidden"), b;
            },
            update: function (a, b) {
              if (e && !d.forcePlaceholderSize) return;
              b.height() ||
                b.height(
                  c.currentItem.innerHeight() -
                    parseInt(c.currentItem.css("paddingTop") || 0, 10) -
                    parseInt(c.currentItem.css("paddingBottom") || 0, 10)
                ),
                b.width() ||
                  b.width(
                    c.currentItem.innerWidth() -
                      parseInt(c.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(c.currentItem.css("paddingRight") || 0, 10)
                  );
            },
          };
        }
        (c.placeholder = a(
          d.placeholder.element.call(c.element, c.currentItem)
        )),
          c.currentItem.after(c.placeholder),
          d.placeholder.update(c, c.placeholder);
      },
      _contactContainers: function (b) {
        var c = null,
          d = null;
        for (var e = this.containers.length - 1; e >= 0; e--) {
          if (a.ui.contains(this.currentItem[0], this.containers[e].element[0]))
            continue;
          if (this._intersectsWith(this.containers[e].containerCache)) {
            if (c && a.ui.contains(this.containers[e].element[0], c.element[0]))
              continue;
            (c = this.containers[e]), (d = e);
          } else
            this.containers[e].containerCache.over &&
              (this.containers[e]._trigger("out", b, this._uiHash(this)),
              (this.containers[e].containerCache.over = 0));
        }
        if (!c) return;
        if (this.containers.length === 1)
          this.containers[d]._trigger("over", b, this._uiHash(this)),
            (this.containers[d].containerCache.over = 1);
        else if (this.currentContainer != this.containers[d]) {
          var f = 1e4,
            g = null,
            h = this.positionAbs[this.containers[d].floating ? "left" : "top"];
          for (var i = this.items.length - 1; i >= 0; i--) {
            if (
              !a.ui.contains(
                this.containers[d].element[0],
                this.items[i].item[0]
              )
            )
              continue;
            var j = this.containers[d].floating
              ? this.items[i].item.offset().left
              : this.items[i].item.offset().top;
            Math.abs(j - h) < f &&
              ((f = Math.abs(j - h)),
              (g = this.items[i]),
              (this.direction = j - h > 0 ? "down" : "up"));
          }
          if (!g && !this.options.dropOnEmpty) return;
          (this.currentContainer = this.containers[d]),
            g
              ? this._rearrange(b, g, null, !0)
              : this._rearrange(b, null, this.containers[d].element, !0),
            this._trigger("change", b, this._uiHash()),
            this.containers[d]._trigger("change", b, this._uiHash(this)),
            this.options.placeholder.update(
              this.currentContainer,
              this.placeholder
            ),
            this.containers[d]._trigger("over", b, this._uiHash(this)),
            (this.containers[d].containerCache.over = 1);
        }
      },
      _createHelper: function (b) {
        var c = this.options,
          d = a.isFunction(c.helper)
            ? a(c.helper.apply(this.element[0], [b, this.currentItem]))
            : c.helper == "clone"
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          d.parents("body").length ||
            a(
              c.appendTo != "parent"
                ? c.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(d[0]),
          d[0] == this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (d[0].style.width == "" || c.forceHelperSize) &&
            d.width(this.currentItem.width()),
          (d[0].style.height == "" || c.forceHelperSize) &&
            d.height(this.currentItem.height()),
          d
        );
      },
      _adjustOffsetFromHelper: function (b) {
        typeof b == "string" && (b = b.split(" ")),
          a.isArray(b) &&
            (b = {
              left: +b[0],
              top: +b[1] || 0,
            }),
          "left" in b && (this.offset.click.left = b.left + this.margins.left),
          "right" in b &&
            (this.offset.click.left =
              this.helperProportions.width - b.right + this.margins.left),
          "top" in b && (this.offset.click.top = b.top + this.margins.top),
          "bottom" in b &&
            (this.offset.click.top =
              this.helperProportions.height - b.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var b = this.offsetParent.offset();
        this.cssPosition == "absolute" &&
          this.scrollParent[0] != document &&
          a.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((b.left += this.scrollParent.scrollLeft()),
          (b.top += this.scrollParent.scrollTop()));
        if (
          this.offsetParent[0] == document.body ||
          (this.offsetParent[0].tagName &&
            this.offsetParent[0].tagName.toLowerCase() == "html" &&
            a.browser.msie)
        )
          b = {
            top: 0,
            left: 0,
          };
        return {
          top:
            b.top +
            (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left:
            b.left +
            (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
        };
      },
      _getRelativeOffset: function () {
        if (this.cssPosition == "relative") {
          var a = this.currentItem.position();
          return {
            top:
              a.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              a.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return {
          top: 0,
          left: 0,
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var b = this.options;
        b.containment == "parent" &&
          (b.containment = this.helper[0].parentNode);
        if (b.containment == "document" || b.containment == "window")
          this.containment = [
            0 - this.offset.relative.left - this.offset.parent.left,
            0 - this.offset.relative.top - this.offset.parent.top,
            a(b.containment == "document" ? document : window).width() -
              this.helperProportions.width -
              this.margins.left,
            (a(b.containment == "document" ? document : window).height() ||
              document.body.parentNode.scrollHeight) -
              this.helperProportions.height -
              this.margins.top,
          ];
        if (!/^(document|window|parent)$/.test(b.containment)) {
          var c = a(b.containment)[0],
            d = a(b.containment).offset(),
            e = a(c).css("overflow") != "hidden";
          this.containment = [
            d.left +
              (parseInt(a(c).css("borderLeftWidth"), 10) || 0) +
              (parseInt(a(c).css("paddingLeft"), 10) || 0) -
              this.margins.left,
            d.top +
              (parseInt(a(c).css("borderTopWidth"), 10) || 0) +
              (parseInt(a(c).css("paddingTop"), 10) || 0) -
              this.margins.top,
            d.left +
              (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) -
              (parseInt(a(c).css("borderLeftWidth"), 10) || 0) -
              (parseInt(a(c).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            d.top +
              (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) -
              (parseInt(a(c).css("borderTopWidth"), 10) || 0) -
              (parseInt(a(c).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top,
          ];
        }
      },
      _convertPositionTo: function (b, c) {
        c || (c = this.position);
        var d = b == "absolute" ? 1 : -1,
          e = this.options,
          f =
            this.cssPosition == "absolute" &&
            (this.scrollParent[0] == document ||
              !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.offsetParent
              : this.scrollParent,
          g = /(html|body)/i.test(f[0].tagName);
        return {
          top:
            c.top +
            this.offset.relative.top * d +
            this.offset.parent.top * d -
            (a.browser.safari && this.cssPosition == "fixed"
              ? 0
              : (this.cssPosition == "fixed"
                  ? -this.scrollParent.scrollTop()
                  : g
                  ? 0
                  : f.scrollTop()) * d),
          left:
            c.left +
            this.offset.relative.left * d +
            this.offset.parent.left * d -
            (a.browser.safari && this.cssPosition == "fixed"
              ? 0
              : (this.cssPosition == "fixed"
                  ? -this.scrollParent.scrollLeft()
                  : g
                  ? 0
                  : f.scrollLeft()) * d),
        };
      },
      _generatePosition: function (b) {
        var c = this.options,
          d =
            this.cssPosition == "absolute" &&
            (this.scrollParent[0] == document ||
              !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.offsetParent
              : this.scrollParent,
          e = /(html|body)/i.test(d[0].tagName);
        this.cssPosition == "relative" &&
          (this.scrollParent[0] == document ||
            this.scrollParent[0] == this.offsetParent[0]) &&
          (this.offset.relative = this._getRelativeOffset());
        var f = b.pageX,
          g = b.pageY;
        if (this.originalPosition) {
          this.containment &&
            (b.pageX - this.offset.click.left < this.containment[0] &&
              (f = this.containment[0] + this.offset.click.left),
            b.pageY - this.offset.click.top < this.containment[1] &&
              (g = this.containment[1] + this.offset.click.top),
            b.pageX - this.offset.click.left > this.containment[2] &&
              (f = this.containment[2] + this.offset.click.left),
            b.pageY - this.offset.click.top > this.containment[3] &&
              (g = this.containment[3] + this.offset.click.top));
          if (c.grid) {
            var h =
              this.originalPageY +
              Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
            g = this.containment
              ? h - this.offset.click.top < this.containment[1] ||
                h - this.offset.click.top > this.containment[3]
                ? h - this.offset.click.top < this.containment[1]
                  ? h + c.grid[1]
                  : h - c.grid[1]
                : h
              : h;
            var i =
              this.originalPageX +
              Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
            f = this.containment
              ? i - this.offset.click.left < this.containment[0] ||
                i - this.offset.click.left > this.containment[2]
                ? i - this.offset.click.left < this.containment[0]
                  ? i + c.grid[0]
                  : i - c.grid[0]
                : i
              : i;
          }
        }
        return {
          top:
            g -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (a.browser.safari && this.cssPosition == "fixed"
              ? 0
              : this.cssPosition == "fixed"
              ? -this.scrollParent.scrollTop()
              : e
              ? 0
              : d.scrollTop()),
          left:
            f -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (a.browser.safari && this.cssPosition == "fixed"
              ? 0
              : this.cssPosition == "fixed"
              ? -this.scrollParent.scrollLeft()
              : e
              ? 0
              : d.scrollLeft()),
        };
      },
      _rearrange: function (a, b, c, d) {
        c
          ? c[0].appendChild(this.placeholder[0])
          : b.item[0].parentNode.insertBefore(
              this.placeholder[0],
              this.direction == "down" ? b.item[0] : b.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var e = this,
          f = this.counter;
        window.setTimeout(function () {
          f == e.counter && e.refreshPositions(!d);
        }, 0);
      },
      _clear: function (b, c) {
        this.reverting = !1;
        var d = [],
          e = this;
        !this._noFinalSort &&
          this.currentItem.parent().length &&
          this.placeholder.before(this.currentItem),
          (this._noFinalSort = null);
        if (this.helper[0] == this.currentItem[0]) {
          for (var f in this._storedCSS)
            if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static")
              this._storedCSS[f] = "";
          this.currentItem
            .css(this._storedCSS)
            .removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        this.fromOutside &&
          !c &&
          d.push(function (a) {
            this._trigger("receive", a, this._uiHash(this.fromOutside));
          }),
          (this.fromOutside ||
            this.domPosition.prev !=
              this.currentItem.prev().not(".ui-sortable-helper")[0] ||
            this.domPosition.parent != this.currentItem.parent()[0]) &&
            !c &&
            d.push(function (a) {
              this._trigger("update", a, this._uiHash());
            });
        if (!a.ui.contains(this.element[0], this.currentItem[0])) {
          c ||
            d.push(function (a) {
              this._trigger("remove", a, this._uiHash());
            });
          for (var f = this.containers.length - 1; f >= 0; f--)
            a.ui.contains(this.containers[f].element[0], this.currentItem[0]) &&
              !c &&
              (d.push(
                function (a) {
                  return function (b) {
                    a._trigger("receive", b, this._uiHash(this));
                  };
                }.call(this, this.containers[f])
              ),
              d.push(
                function (a) {
                  return function (b) {
                    a._trigger("update", b, this._uiHash(this));
                  };
                }.call(this, this.containers[f])
              ));
        }
        for (var f = this.containers.length - 1; f >= 0; f--)
          c ||
            d.push(
              function (a) {
                return function (b) {
                  a._trigger("deactivate", b, this._uiHash(this));
                };
              }.call(this, this.containers[f])
            ),
            this.containers[f].containerCache.over &&
              (d.push(
                function (a) {
                  return function (b) {
                    a._trigger("out", b, this._uiHash(this));
                  };
                }.call(this, this.containers[f])
              ),
              (this.containers[f].containerCache.over = 0));
        this._storedCursor && a("body").css("cursor", this._storedCursor),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              this._storedZIndex == "auto" ? "" : this._storedZIndex
            ),
          (this.dragging = !1);
        if (this.cancelHelperRemoval) {
          if (!c) {
            this._trigger("beforeStop", b, this._uiHash());
            for (var f = 0; f < d.length; f++) d[f].call(this, b);
            this._trigger("stop", b, this._uiHash());
          }
          return (this.fromOutside = !1), !1;
        }
        c || this._trigger("beforeStop", b, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] != this.currentItem[0] && this.helper.remove(),
          (this.helper = null);
        if (!c) {
          for (var f = 0; f < d.length; f++) d[f].call(this, b);
          this._trigger("stop", b, this._uiHash());
        }
        return (this.fromOutside = !1), !0;
      },
      _trigger: function () {
        a.Widget.prototype._trigger.apply(this, arguments) === !1 &&
          this.cancel();
      },
      _uiHash: function (b) {
        var c = b || this;
        return {
          helper: c.helper,
          placeholder: c.placeholder || a([]),
          position: c.position,
          originalPosition: c.originalPosition,
          offset: c.positionAbs,
          item: c.currentItem,
          sender: b ? b.element : null,
        };
      },
    }),
      a.extend(a.ui.sortable, {
        version: "1.8.23",
      });
  })(jQuery),
  jQuery.effects ||
    (function (a, b) {
      function c(b) {
        var c;
        return b && b.constructor == Array && b.length == 3
          ? b
          : (c =
              /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
                b
              ))
          ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)]
          : (c =
              /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
                b
              ))
          ? [
              parseFloat(c[1]) * 2.55,
              parseFloat(c[2]) * 2.55,
              parseFloat(c[3]) * 2.55,
            ]
          : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))
          ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
          : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))
          ? [
              parseInt(c[1] + c[1], 16),
              parseInt(c[2] + c[2], 16),
              parseInt(c[3] + c[3], 16),
            ]
          : (c = /rgba\(0, 0, 0, 0\)/.exec(b))
          ? e.transparent
          : e[a.trim(b).toLowerCase()];
      }
      function d(b, d) {
        var e;
        do {
          e = (a.curCSS || a.css)(b, d);
          if ((e != "" && e != "transparent") || a.nodeName(b, "body")) break;
          d = "backgroundColor";
        } while ((b = b.parentNode));
        return c(e);
      }
      function h() {
        var a = document.defaultView
            ? document.defaultView.getComputedStyle(this, null)
            : this.currentStyle,
          b = {},
          c,
          d;
        if (a && a.length && a[0] && a[a[0]]) {
          var e = a.length;
          while (e--)
            (c = a[e]),
              typeof a[c] == "string" &&
                ((d = c.replace(/\-(\w)/g, function (a, b) {
                  return b.toUpperCase();
                })),
                (b[d] = a[c]));
        } else for (c in a) typeof a[c] == "string" && (b[c] = a[c]);
        return b;
      }
      function i(b) {
        var c, d;
        for (c in b)
          (d = b[c]),
            (d == null ||
              a.isFunction(d) ||
              c in g ||
              /scrollbar/.test(c) ||
              (!/color/i.test(c) && isNaN(parseFloat(d)))) &&
              delete b[c];
        return b;
      }
      function j(a, b) {
        var c = {
            _: 0,
          },
          d;
        for (d in b) a[d] != b[d] && (c[d] = b[d]);
        return c;
      }
      function k(b, c, d, e) {
        typeof b == "object" && ((e = c), (d = null), (c = b), (b = c.effect)),
          a.isFunction(c) && ((e = c), (d = null), (c = {}));
        if (typeof c == "number" || a.fx.speeds[c]) (e = d), (d = c), (c = {});
        return (
          a.isFunction(d) && ((e = d), (d = null)),
          (c = c || {}),
          (d = d || c.duration),
          (d = a.fx.off
            ? 0
            : typeof d == "number"
            ? d
            : d in a.fx.speeds
            ? a.fx.speeds[d]
            : a.fx.speeds._default),
          (e = e || c.complete),
          [b, c, d, e]
        );
      }
      function l(b) {
        return !b || typeof b == "number" || a.fx.speeds[b]
          ? !0
          : typeof b == "string" && !a.effects[b]
          ? !0
          : !1;
      }
      (a.effects = {}),
        a.each(
          [
            "backgroundColor",
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor",
            "borderColor",
            "color",
            "outlineColor",
          ],
          function (b, e) {
            a.fx.step[e] = function (a) {
              a.colorInit ||
                ((a.start = d(a.elem, e)),
                (a.end = c(a.end)),
                (a.colorInit = !0)),
                (a.elem.style[e] =
                  "rgb(" +
                  Math.max(
                    Math.min(
                      parseInt(
                        a.pos * (a.end[0] - a.start[0]) + a.start[0],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        a.pos * (a.end[1] - a.start[1]) + a.start[1],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        a.pos * (a.end[2] - a.start[2]) + a.start[2],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  ")");
            };
          }
        );
      var e = {
          aqua: [0, 255, 255],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          black: [0, 0, 0],
          blue: [0, 0, 255],
          brown: [165, 42, 42],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgrey: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkviolet: [148, 0, 211],
          fuchsia: [255, 0, 255],
          gold: [255, 215, 0],
          green: [0, 128, 0],
          indigo: [75, 0, 130],
          khaki: [240, 230, 140],
          lightblue: [173, 216, 230],
          lightcyan: [224, 255, 255],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          navy: [0, 0, 128],
          olive: [128, 128, 0],
          orange: [255, 165, 0],
          pink: [255, 192, 203],
          purple: [128, 0, 128],
          violet: [128, 0, 128],
          red: [255, 0, 0],
          silver: [192, 192, 192],
          white: [255, 255, 255],
          yellow: [255, 255, 0],
          transparent: [255, 255, 255],
        },
        f = ["add", "remove", "toggle"],
        g = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1,
        };
      (a.effects.animateClass = function (b, c, d, e) {
        return (
          a.isFunction(d) && ((e = d), (d = null)),
          this.queue(function () {
            var g = a(this),
              k = g.attr("style") || " ",
              l = i(h.call(this)),
              m,
              n = g.attr("class") || "";
            a.each(f, function (a, c) {
              b[c] && g[c + "Class"](b[c]);
            }),
              (m = i(h.call(this))),
              g.attr("class", n),
              g.animate(j(l, m), {
                queue: !1,
                duration: c,
                easing: d,
                complete: function () {
                  a.each(f, function (a, c) {
                    b[c] && g[c + "Class"](b[c]);
                  }),
                    typeof g.attr("style") == "object"
                      ? ((g.attr("style").cssText = ""),
                        (g.attr("style").cssText = k))
                      : g.attr("style", k),
                    e && e.apply(this, arguments),
                    a.dequeue(this);
                },
              });
          })
        );
      }),
        a.fn.extend({
          _addClass: a.fn.addClass,
          addClass: function (b, c, d, e) {
            return c
              ? a.effects.animateClass.apply(this, [
                  {
                    add: b,
                  },
                  c,
                  d,
                  e,
                ])
              : this._addClass(b);
          },
          _removeClass: a.fn.removeClass,
          removeClass: function (b, c, d, e) {
            return c
              ? a.effects.animateClass.apply(this, [
                  {
                    remove: b,
                  },
                  c,
                  d,
                  e,
                ])
              : this._removeClass(b);
          },
          _toggleClass: a.fn.toggleClass,
          toggleClass: function (c, d, e, f, g) {
            return typeof d == "boolean" || d === b
              ? e
                ? a.effects.animateClass.apply(this, [
                    d
                      ? {
                          add: c,
                        }
                      : {
                          remove: c,
                        },
                    e,
                    f,
                    g,
                  ])
                : this._toggleClass(c, d)
              : a.effects.animateClass.apply(this, [
                  {
                    toggle: c,
                  },
                  d,
                  e,
                  f,
                ]);
          },
          switchClass: function (b, c, d, e, f) {
            return a.effects.animateClass.apply(this, [
              {
                add: c,
                remove: b,
              },
              d,
              e,
              f,
            ]);
          },
        }),
        a.extend(a.effects, {
          version: "1.8.23",
          save: function (a, b) {
            for (var c = 0; c < b.length; c++)
              b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]);
          },
          restore: function (a, b) {
            for (var c = 0; c < b.length; c++)
              b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]));
          },
          setMode: function (a, b) {
            return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b;
          },
          getBaseline: function (a, b) {
            var c, d;
            switch (a[0]) {
              case "top":
                c = 0;
                break;
              case "middle":
                c = 0.5;
                break;
              case "bottom":
                c = 1;
                break;
              default:
                c = a[0] / b.height;
            }
            switch (a[1]) {
              case "left":
                d = 0;
                break;
              case "center":
                d = 0.5;
                break;
              case "right":
                d = 1;
                break;
              default:
                d = a[1] / b.width;
            }
            return {
              x: d,
              y: c,
            };
          },
          createWrapper: function (b) {
            if (b.parent().is(".ui-effects-wrapper")) return b.parent();
            var c = {
                width: b.outerWidth(!0),
                height: b.outerHeight(!0),
                float: b.css("float"),
              },
              d = a("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
              e = document.activeElement;
            try {
              e.id;
            } catch (f) {
              e = document.body;
            }
            return (
              b.wrap(d),
              (b[0] === e || a.contains(b[0], e)) && a(e).focus(),
              (d = b.parent()),
              b.css("position") == "static"
                ? (d.css({
                    position: "relative",
                  }),
                  b.css({
                    position: "relative",
                  }))
                : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index"),
                  }),
                  a.each(["top", "left", "bottom", "right"], function (a, d) {
                    (c[d] = b.css(d)),
                      isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                  }),
                  b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              d.css(c).show()
            );
          },
          removeWrapper: function (b) {
            var c,
              d = document.activeElement;
            return b.parent().is(".ui-effects-wrapper")
              ? ((c = b.parent().replaceWith(b)),
                (b[0] === d || a.contains(b[0], d)) && a(d).focus(),
                c)
              : b;
          },
          setTransition: function (b, c, d, e) {
            return (
              (e = e || {}),
              a.each(c, function (a, c) {
                var f = b.cssUnit(c);
                f[0] > 0 && (e[c] = f[0] * d + f[1]);
              }),
              e
            );
          },
        }),
        a.fn.extend({
          effect: function (b, c, d, e) {
            var f = k.apply(this, arguments),
              g = {
                options: f[1],
                duration: f[2],
                callback: f[3],
              },
              h = g.options.mode,
              i = a.effects[b];
            return a.fx.off || !i
              ? h
                ? this[h](g.duration, g.callback)
                : this.each(function () {
                    g.callback && g.callback.call(this);
                  })
              : i.call(this, g);
          },
          _show: a.fn.show,
          show: function (a) {
            if (l(a)) return this._show.apply(this, arguments);
            var b = k.apply(this, arguments);
            return (b[1].mode = "show"), this.effect.apply(this, b);
          },
          _hide: a.fn.hide,
          hide: function (a) {
            if (l(a)) return this._hide.apply(this, arguments);
            var b = k.apply(this, arguments);
            return (b[1].mode = "hide"), this.effect.apply(this, b);
          },
          __toggle: a.fn.toggle,
          toggle: function (b) {
            if (l(b) || typeof b == "boolean" || a.isFunction(b))
              return this.__toggle.apply(this, arguments);
            var c = k.apply(this, arguments);
            return (c[1].mode = "toggle"), this.effect.apply(this, c);
          },
          cssUnit: function (b) {
            var c = this.css(b),
              d = [];
            return (
              a.each(["em", "px", "%", "pt"], function (a, b) {
                c.indexOf(b) > 0 && (d = [parseFloat(c), b]);
              }),
              d
            );
          },
        });
      var m = {};
      a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, b) {
        m[b] = function (b) {
          return Math.pow(b, a + 2);
        };
      }),
        a.extend(m, {
          Sine: function (a) {
            return 1 - Math.cos((a * Math.PI) / 2);
          },
          Circ: function (a) {
            return 1 - Math.sqrt(1 - a * a);
          },
          Elastic: function (a) {
            return a === 0 || a === 1
              ? a
              : -Math.pow(2, 8 * (a - 1)) *
                  Math.sin((((a - 1) * 80 - 7.5) * Math.PI) / 15);
          },
          Back: function (a) {
            return a * a * (3 * a - 2);
          },
          Bounce: function (a) {
            var b,
              c = 4;
            while (a < ((b = Math.pow(2, --c)) - 1) / 11);
            return (
              1 / Math.pow(4, 3 - c) -
              7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2)
            );
          },
        }),
        a.each(m, function (b, c) {
          (a.easing["easeIn" + b] = c),
            (a.easing["easeOut" + b] = function (a) {
              return 1 - c(1 - a);
            }),
            (a.easing["easeInOut" + b] = function (a) {
              return a < 0.5 ? c(a * 2) / 2 : c(a * -2 + 2) / -2 + 1;
            });
        });
    })(jQuery),
  (function (a, b) {
    a.effects.blind = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
        a.effects.save(c, d), c.show();
        var g = a.effects.createWrapper(c).css({
            overflow: "hidden",
          }),
          h = f == "vertical" ? "height" : "width",
          i = f == "vertical" ? g.height() : g.width();
        e == "show" && g.css(h, 0);
        var j = {};
        (j[h] = e == "show" ? i : 0),
          g.animate(j, b.duration, b.options.easing, function () {
            e == "hide" && c.hide(),
              a.effects.restore(c, d),
              a.effects.removeWrapper(c),
              b.callback && b.callback.apply(c[0], arguments),
              c.dequeue();
          });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.bounce = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "up",
          g = b.options.distance || 20,
          h = b.options.times || 5,
          i = b.duration || 250;
        /show|hide/.test(e) && d.push("opacity"),
          a.effects.save(c, d),
          c.show(),
          a.effects.createWrapper(c);
        var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          g =
            b.options.distance ||
            (j == "top" ? c.outerHeight(!0) / 3 : c.outerWidth(!0) / 3);
        e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g),
          e == "hide" && (g = g / (h * 2)),
          e != "hide" && h--;
        if (e == "show") {
          var l = {
            opacity: 1,
          };
          (l[j] = (k == "pos" ? "+=" : "-=") + g),
            c.animate(l, i / 2, b.options.easing),
            (g = g / 2),
            h--;
        }
        for (var m = 0; m < h; m++) {
          var n = {},
            p = {};
          (n[j] = (k == "pos" ? "-=" : "+=") + g),
            (p[j] = (k == "pos" ? "+=" : "-=") + g),
            c
              .animate(n, i / 2, b.options.easing)
              .animate(p, i / 2, b.options.easing),
            (g = e == "hide" ? g * 2 : g / 2);
        }
        if (e == "hide") {
          var l = {
            opacity: 0,
          };
          (l[j] = (k == "pos" ? "-=" : "+=") + g),
            c.animate(l, i / 2, b.options.easing, function () {
              c.hide(),
                a.effects.restore(c, d),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(this, arguments);
            });
        } else {
          var n = {},
            p = {};
          (n[j] = (k == "pos" ? "-=" : "+=") + g),
            (p[j] = (k == "pos" ? "+=" : "-=") + g),
            c
              .animate(n, i / 2, b.options.easing)
              .animate(p, i / 2, b.options.easing, function () {
                a.effects.restore(c, d),
                  a.effects.removeWrapper(c),
                  b.callback && b.callback.apply(this, arguments);
              });
        }
        c.queue("fx", function () {
          c.dequeue();
        }),
          c.dequeue();
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.clip = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "height", "width"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
        a.effects.save(c, d), c.show();
        var g = a.effects.createWrapper(c).css({
            overflow: "hidden",
          }),
          h = c[0].tagName == "IMG" ? g : c,
          i = {
            size: f == "vertical" ? "height" : "width",
            position: f == "vertical" ? "top" : "left",
          },
          j = f == "vertical" ? h.height() : h.width();
        e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
        var k = {};
        (k[i.size] = e == "show" ? j : 0),
          (k[i.position] = e == "show" ? 0 : j / 2),
          h.animate(k, {
            queue: !1,
            duration: b.duration,
            easing: b.options.easing,
            complete: function () {
              e == "hide" && c.hide(),
                a.effects.restore(c, d),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(c[0], arguments),
                c.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.drop = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "left";
        a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
        var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i =
            b.options.distance ||
            (g == "top" ? c.outerHeight(!0) / 2 : c.outerWidth(!0) / 2);
        e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
        var j = {
          opacity: e == "show" ? 1 : 0,
        };
        (j[g] =
          (e == "show"
            ? h == "pos"
              ? "+="
              : "-="
            : h == "pos"
            ? "-="
            : "+=") + i),
          c.animate(j, {
            queue: !1,
            duration: b.duration,
            easing: b.options.easing,
            complete: function () {
              e == "hide" && c.hide(),
                a.effects.restore(c, d),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(this, arguments),
                c.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.explode = function (b) {
      return this.queue(function () {
        var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
          d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
        b.options.mode =
          b.options.mode == "toggle"
            ? a(this).is(":visible")
              ? "hide"
              : "show"
            : b.options.mode;
        var e = a(this).show().css("visibility", "hidden"),
          f = e.offset();
        (f.top -= parseInt(e.css("marginTop"), 10) || 0),
          (f.left -= parseInt(e.css("marginLeft"), 10) || 0);
        var g = e.outerWidth(!0),
          h = e.outerHeight(!0);
        for (var i = 0; i < c; i++)
          for (var j = 0; j < d; j++)
            e.clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: -j * (g / d),
                top: -i * (h / c),
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: g / d,
                height: h / c,
                left:
                  f.left +
                  j * (g / d) +
                  (b.options.mode == "show"
                    ? (j - Math.floor(d / 2)) * (g / d)
                    : 0),
                top:
                  f.top +
                  i * (h / c) +
                  (b.options.mode == "show"
                    ? (i - Math.floor(c / 2)) * (h / c)
                    : 0),
                opacity: b.options.mode == "show" ? 0 : 1,
              })
              .animate(
                {
                  left:
                    f.left +
                    j * (g / d) +
                    (b.options.mode == "show"
                      ? 0
                      : (j - Math.floor(d / 2)) * (g / d)),
                  top:
                    f.top +
                    i * (h / c) +
                    (b.options.mode == "show"
                      ? 0
                      : (i - Math.floor(c / 2)) * (h / c)),
                  opacity: b.options.mode == "show" ? 1 : 0,
                },
                b.duration || 500
              );
        setTimeout(function () {
          b.options.mode == "show"
            ? e.css({
                visibility: "visible",
              })
            : e
                .css({
                  visibility: "visible",
                })
                .hide(),
            b.callback && b.callback.apply(e[0]),
            e.dequeue(),
            a("div.ui-effects-explode").remove();
        }, b.duration || 500);
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.fade = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide");
        c.animate(
          {
            opacity: d,
          },
          {
            queue: !1,
            duration: b.duration,
            easing: b.options.easing,
            complete: function () {
              b.callback && b.callback.apply(this, arguments), c.dequeue();
            },
          }
        );
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.fold = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.size || 15,
          g = !!b.options.horizFirst,
          h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
        a.effects.save(c, d), c.show();
        var i = a.effects.createWrapper(c).css({
            overflow: "hidden",
          }),
          j = (e == "show") != g,
          k = j ? ["width", "height"] : ["height", "width"],
          l = j ? [i.width(), i.height()] : [i.height(), i.width()],
          m = /([0-9]+)%/.exec(f);
        m && (f = (parseInt(m[1], 10) / 100) * l[e == "hide" ? 0 : 1]),
          e == "show" &&
            i.css(
              g
                ? {
                    height: 0,
                    width: f,
                  }
                : {
                    height: f,
                    width: 0,
                  }
            );
        var n = {},
          p = {};
        (n[k[0]] = e == "show" ? l[0] : f),
          (p[k[1]] = e == "show" ? l[1] : 0),
          i
            .animate(n, h, b.options.easing)
            .animate(p, h, b.options.easing, function () {
              e == "hide" && c.hide(),
                a.effects.restore(c, d),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(c[0], arguments),
                c.dequeue();
            });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.highlight = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["backgroundImage", "backgroundColor", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = {
            backgroundColor: c.css("backgroundColor"),
          };
        e == "hide" && (f.opacity = 0),
          a.effects.save(c, d),
          c
            .show()
            .css({
              backgroundImage: "none",
              backgroundColor: b.options.color || "#ffff99",
            })
            .animate(f, {
              queue: !1,
              duration: b.duration,
              easing: b.options.easing,
              complete: function () {
                e == "hide" && c.hide(),
                  a.effects.restore(c, d),
                  e == "show" &&
                    !a.support.opacity &&
                    this.style.removeAttribute("filter"),
                  b.callback && b.callback.apply(this, arguments),
                  c.dequeue();
              },
            });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.pulsate = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "show"),
          e = (b.options.times || 5) * 2 - 1,
          f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2,
          g = c.is(":visible"),
          h = 0;
        g || (c.css("opacity", 0).show(), (h = 1)),
          ((d == "hide" && g) || (d == "show" && !g)) && e--;
        for (var i = 0; i < e; i++)
          c.animate(
            {
              opacity: h,
            },
            f,
            b.options.easing
          ),
            (h = (h + 1) % 2);
        c.animate(
          {
            opacity: h,
          },
          f,
          b.options.easing,
          function () {
            h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments);
          }
        ),
          c
            .queue("fx", function () {
              c.dequeue();
            })
            .dequeue();
      });
    };
  })(jQuery),
  (function (a, b) {
    (a.effects.puff = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide"),
          e = parseInt(b.options.percent, 10) || 150,
          f = e / 100,
          g = {
            height: c.height(),
            width: c.width(),
          };
        a.extend(b.options, {
          fade: !0,
          mode: d,
          percent: d == "hide" ? e : 100,
          from:
            d == "hide"
              ? g
              : {
                  height: g.height * f,
                  width: g.width * f,
                },
        }),
          c.effect("scale", b.options, b.duration, b.callback),
          c.dequeue();
      });
    }),
      (a.effects.scale = function (b) {
        return this.queue(function () {
          var c = a(this),
            d = a.extend(!0, {}, b.options),
            e = a.effects.setMode(c, b.options.mode || "effect"),
            f =
              parseInt(b.options.percent, 10) ||
              (parseInt(b.options.percent, 10) == 0
                ? 0
                : e == "hide"
                ? 0
                : 100),
            g = b.options.direction || "both",
            h = b.options.origin;
          e != "effect" &&
            ((d.origin = h || ["middle", "center"]), (d.restore = !0));
          var i = {
            height: c.height(),
            width: c.width(),
          };
          c.from =
            b.options.from ||
            (e == "show"
              ? {
                  height: 0,
                  width: 0,
                }
              : i);
          var j = {
            y: g != "horizontal" ? f / 100 : 1,
            x: g != "vertical" ? f / 100 : 1,
          };
          (c.to = {
            height: i.height * j.y,
            width: i.width * j.x,
          }),
            b.options.fade &&
              (e == "show" && ((c.from.opacity = 0), (c.to.opacity = 1)),
              e == "hide" && ((c.from.opacity = 1), (c.to.opacity = 0))),
            (d.from = c.from),
            (d.to = c.to),
            (d.mode = e),
            c.effect("size", d, b.duration, b.callback),
            c.dequeue();
        });
      }),
      (a.effects.size = function (b) {
        return this.queue(function () {
          var c = a(this),
            d = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "width",
              "height",
              "overflow",
              "opacity",
            ],
            e = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "overflow",
              "opacity",
            ],
            f = ["width", "height", "overflow"],
            g = ["fontSize"],
            h = [
              "borderTopWidth",
              "borderBottomWidth",
              "paddingTop",
              "paddingBottom",
            ],
            i = [
              "borderLeftWidth",
              "borderRightWidth",
              "paddingLeft",
              "paddingRight",
            ],
            j = a.effects.setMode(c, b.options.mode || "effect"),
            k = b.options.restore || !1,
            l = b.options.scale || "both",
            m = b.options.origin,
            n = {
              height: c.height(),
              width: c.width(),
            };
          (c.from = b.options.from || n), (c.to = b.options.to || n);
          if (m) {
            var p = a.effects.getBaseline(m, n);
            (c.from.top = (n.height - c.from.height) * p.y),
              (c.from.left = (n.width - c.from.width) * p.x),
              (c.to.top = (n.height - c.to.height) * p.y),
              (c.to.left = (n.width - c.to.width) * p.x);
          }
          var q = {
            from: {
              y: c.from.height / n.height,
              x: c.from.width / n.width,
            },
            to: {
              y: c.to.height / n.height,
              x: c.to.width / n.width,
            },
          };
          if (l == "box" || l == "both")
            q.from.y != q.to.y &&
              ((d = d.concat(h)),
              (c.from = a.effects.setTransition(c, h, q.from.y, c.from)),
              (c.to = a.effects.setTransition(c, h, q.to.y, c.to))),
              q.from.x != q.to.x &&
                ((d = d.concat(i)),
                (c.from = a.effects.setTransition(c, i, q.from.x, c.from)),
                (c.to = a.effects.setTransition(c, i, q.to.x, c.to)));
          (l == "content" || l == "both") &&
            q.from.y != q.to.y &&
            ((d = d.concat(g)),
            (c.from = a.effects.setTransition(c, g, q.from.y, c.from)),
            (c.to = a.effects.setTransition(c, g, q.to.y, c.to))),
            a.effects.save(c, k ? d : e),
            c.show(),
            a.effects.createWrapper(c),
            c.css("overflow", "hidden").css(c.from);
          if (l == "content" || l == "both")
            (h = h.concat(["marginTop", "marginBottom"]).concat(g)),
              (i = i.concat(["marginLeft", "marginRight"])),
              (f = d.concat(h).concat(i)),
              c.find("*[width]").each(function () {
                var c = a(this);
                k && a.effects.save(c, f);
                var d = {
                  height: c.height(),
                  width: c.width(),
                };
                (c.from = {
                  height: d.height * q.from.y,
                  width: d.width * q.from.x,
                }),
                  (c.to = {
                    height: d.height * q.to.y,
                    width: d.width * q.to.x,
                  }),
                  q.from.y != q.to.y &&
                    ((c.from = a.effects.setTransition(c, h, q.from.y, c.from)),
                    (c.to = a.effects.setTransition(c, h, q.to.y, c.to))),
                  q.from.x != q.to.x &&
                    ((c.from = a.effects.setTransition(c, i, q.from.x, c.from)),
                    (c.to = a.effects.setTransition(c, i, q.to.x, c.to))),
                  c.css(c.from),
                  c.animate(c.to, b.duration, b.options.easing, function () {
                    k && a.effects.restore(c, f);
                  });
              });
          c.animate(c.to, {
            queue: !1,
            duration: b.duration,
            easing: b.options.easing,
            complete: function () {
              c.to.opacity === 0 && c.css("opacity", c.from.opacity),
                j == "hide" && c.hide(),
                a.effects.restore(c, k ? d : e),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(this, arguments),
                c.dequeue();
            },
          });
        });
      });
  })(jQuery),
  (function (a, b) {
    a.effects.shake = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "left",
          g = b.options.distance || 20,
          h = b.options.times || 3,
          i = b.duration || b.options.duration || 140;
        a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
        var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          l = {},
          m = {},
          n = {};
        (l[j] = (k == "pos" ? "-=" : "+=") + g),
          (m[j] = (k == "pos" ? "+=" : "-=") + g * 2),
          (n[j] = (k == "pos" ? "-=" : "+=") + g * 2),
          c.animate(l, i, b.options.easing);
        for (var p = 1; p < h; p++)
          c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
        c
          .animate(m, i, b.options.easing)
          .animate(l, i / 2, b.options.easing, function () {
            a.effects.restore(c, d),
              a.effects.removeWrapper(c),
              b.callback && b.callback.apply(this, arguments);
          }),
          c.queue("fx", function () {
            c.dequeue();
          }),
          c.dequeue();
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.slide = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = b.options.direction || "left";
        a.effects.save(c, d),
          c.show(),
          a.effects.createWrapper(c).css({
            overflow: "hidden",
          });
        var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i =
            b.options.distance ||
            (g == "top" ? c.outerHeight(!0) : c.outerWidth(!0));
        e == "show" && c.css(g, h == "pos" ? (isNaN(i) ? "-" + i : -i) : i);
        var j = {};
        (j[g] =
          (e == "show"
            ? h == "pos"
              ? "+="
              : "-="
            : h == "pos"
            ? "-="
            : "+=") + i),
          c.animate(j, {
            queue: !1,
            duration: b.duration,
            easing: b.options.easing,
            complete: function () {
              e == "hide" && c.hide(),
                a.effects.restore(c, d),
                a.effects.removeWrapper(c),
                b.callback && b.callback.apply(this, arguments),
                c.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.effects.transfer = function (b) {
      return this.queue(function () {
        var c = a(this),
          d = a(b.options.to),
          e = d.offset(),
          f = {
            top: e.top,
            left: e.left,
            height: d.innerHeight(),
            width: d.innerWidth(),
          },
          g = c.offset(),
          h = a('<div class="ui-effects-transfer"></div>')
            .appendTo(document.body)
            .addClass(b.options.className)
            .css({
              top: g.top,
              left: g.left,
              height: c.innerHeight(),
              width: c.innerWidth(),
              position: "absolute",
            })
            .animate(f, b.duration, b.options.easing, function () {
              h.remove(),
                b.callback && b.callback.apply(c[0], arguments),
                c.dequeue();
            });
      });
    };
  })(jQuery),
  (function (a, b) {
    a.widget("ui.accordion", {
      options: {
        active: 0,
        animated: "slide",
        autoHeight: !0,
        clearStyle: !1,
        collapsible: !1,
        event: "click",
        fillSpace: !1,
        header: "> li > :first-child,> :not(li):even",
        icons: {
          header: "ui-icon-triangle-1-e",
          headerSelected: "ui-icon-triangle-1-s",
        },
        navigation: !1,
        navigationFilter: function () {
          return this.href.toLowerCase() === location.href.toLowerCase();
        },
      },
      _create: function () {
        var b = this,
          c = b.options;
        (b.running = 0),
          b.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .children("li")
            .addClass("ui-accordion-li-fix"),
          (b.headers = b.element
            .find(c.header)
            .addClass(
              "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
            )
            .bind("mouseenter.accordion", function () {
              if (c.disabled) return;
              a(this).addClass("ui-state-hover");
            })
            .bind("mouseleave.accordion", function () {
              if (c.disabled) return;
              a(this).removeClass("ui-state-hover");
            })
            .bind("focus.accordion", function () {
              if (c.disabled) return;
              a(this).addClass("ui-state-focus");
            })
            .bind("blur.accordion", function () {
              if (c.disabled) return;
              a(this).removeClass("ui-state-focus");
            })),
          b.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            );
        if (c.navigation) {
          var d = b.element.find("a").filter(c.navigationFilter).eq(0);
          if (d.length) {
            var e = d.closest(".ui-accordion-header");
            e.length
              ? (b.active = e)
              : (b.active = d.closest(".ui-accordion-content").prev());
          }
        }
        (b.active = b
          ._findActive(b.active || c.active)
          .addClass("ui-state-default ui-state-active")
          .toggleClass("ui-corner-all")
          .toggleClass("ui-corner-top")),
          b.active.next().addClass("ui-accordion-content-active"),
          b._createIcons(),
          b.resize(),
          b.element.attr("role", "tablist"),
          b.headers
            .attr("role", "tab")
            .bind("keydown.accordion", function (a) {
              return b._keydown(a);
            })
            .next()
            .attr("role", "tabpanel"),
          b.headers
            .not(b.active || "")
            .attr({
              "aria-expanded": "false",
              "aria-selected": "false",
              tabIndex: -1,
            })
            .next()
            .hide(),
          b.active.length
            ? b.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0,
              })
            : b.headers.eq(0).attr("tabIndex", 0),
          a.browser.safari || b.headers.find("a").attr("tabIndex", -1),
          c.event &&
            b.headers.bind(
              c.event.split(" ").join(".accordion ") + ".accordion",
              function (a) {
                b._clickHandler.call(b, a, this), a.preventDefault();
              }
            );
      },
      _createIcons: function () {
        var b = this.options;
        b.icons &&
          (a("<span></span>")
            .addClass("ui-icon " + b.icons.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-icon")
            .toggleClass(b.icons.header)
            .toggleClass(b.icons.headerSelected),
          this.element.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this.headers.children(".ui-icon").remove(),
          this.element.removeClass("ui-accordion-icons");
      },
      destroy: function () {
        var b = this.options;
        this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .unbind(".accordion")
            .removeClass(
              "ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
            )
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("aria-selected")
            .removeAttr("tabIndex"),
          this.headers.find("a").removeAttr("tabIndex"),
          this._destroyIcons();
        var c = this.headers
          .next()
          .css("display", "")
          .removeAttr("role")
          .removeClass(
            "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"
          );
        return (
          (b.autoHeight || b.fillHeight) && c.css("height", ""),
          a.Widget.prototype.destroy.call(this)
        );
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments),
          b == "active" && this.activate(c),
          b == "icons" && (this._destroyIcons(), c && this._createIcons()),
          b == "disabled" &&
            this.headers
              .add(this.headers.next())
              [c ? "addClass" : "removeClass"](
                "ui-accordion-disabled ui-state-disabled"
              );
      },
      _keydown: function (b) {
        if (this.options.disabled || b.altKey || b.ctrlKey) return;
        var c = a.ui.keyCode,
          d = this.headers.length,
          e = this.headers.index(b.target),
          f = !1;
        switch (b.keyCode) {
          case c.RIGHT:
          case c.DOWN:
            f = this.headers[(e + 1) % d];
            break;
          case c.LEFT:
          case c.UP:
            f = this.headers[(e - 1 + d) % d];
            break;
          case c.SPACE:
          case c.ENTER:
            this._clickHandler(
              {
                target: b.target,
              },
              b.target
            ),
              b.preventDefault();
        }
        return f
          ? (a(b.target).attr("tabIndex", -1),
            a(f).attr("tabIndex", 0),
            f.focus(),
            !1)
          : !0;
      },
      resize: function () {
        var b = this.options,
          c;
        if (b.fillSpace) {
          if (a.browser.msie) {
            var d = this.element.parent().css("overflow");
            this.element.parent().css("overflow", "hidden");
          }
          (c = this.element.parent().height()),
            a.browser.msie && this.element.parent().css("overflow", d),
            this.headers.each(function () {
              c -= a(this).outerHeight(!0);
            }),
            this.headers
              .next()
              .each(function () {
                a(this).height(
                  Math.max(0, c - a(this).innerHeight() + a(this).height())
                );
              })
              .css("overflow", "auto");
        } else
          b.autoHeight &&
            ((c = 0),
            this.headers
              .next()
              .each(function () {
                c = Math.max(c, a(this).height("").height());
              })
              .height(c));
        return this;
      },
      activate: function (a) {
        this.options.active = a;
        var b = this._findActive(a)[0];
        return (
          this._clickHandler(
            {
              target: b,
            },
            b
          ),
          this
        );
      },
      _findActive: function (b) {
        return b
          ? typeof b == "number"
            ? this.headers.filter(":eq(" + b + ")")
            : this.headers.not(this.headers.not(b))
          : b === !1
          ? a([])
          : this.headers.filter(":eq(0)");
      },
      _clickHandler: function (b, c) {
        var d = this.options;
        if (d.disabled) return;
        if (!b.target) {
          if (!d.collapsible) return;
          this.active
            .removeClass("ui-state-active ui-corner-top")
            .addClass("ui-state-default ui-corner-all")
            .children(".ui-icon")
            .removeClass(d.icons.headerSelected)
            .addClass(d.icons.header),
            this.active.next().addClass("ui-accordion-content-active");
          var e = this.active.next(),
            f = {
              options: d,
              newHeader: a([]),
              oldHeader: d.active,
              newContent: a([]),
              oldContent: e,
            },
            g = (this.active = a([]));
          this._toggle(g, e, f);
          return;
        }
        var h = a(b.currentTarget || c),
          i = h[0] === this.active[0];
        d.active = d.collapsible && i ? !1 : this.headers.index(h);
        if (this.running || (!d.collapsible && i)) return;
        var j = this.active,
          g = h.next(),
          e = this.active.next(),
          f = {
            options: d,
            newHeader: i && d.collapsible ? a([]) : h,
            oldHeader: this.active,
            newContent: i && d.collapsible ? a([]) : g,
            oldContent: e,
          },
          k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
        (this.active = i ? a([]) : h),
          this._toggle(g, e, f, i, k),
          j
            .removeClass("ui-state-active ui-corner-top")
            .addClass("ui-state-default ui-corner-all")
            .children(".ui-icon")
            .removeClass(d.icons.headerSelected)
            .addClass(d.icons.header),
          i ||
            (h
              .removeClass("ui-state-default ui-corner-all")
              .addClass("ui-state-active ui-corner-top")
              .children(".ui-icon")
              .removeClass(d.icons.header)
              .addClass(d.icons.headerSelected),
            h.next().addClass("ui-accordion-content-active"));
        return;
      },
      _toggle: function (b, c, d, e, f) {
        var g = this,
          h = g.options;
        (g.toShow = b), (g.toHide = c), (g.data = d);
        var i = function () {
          if (!g) return;
          return g._completed.apply(g, arguments);
        };
        g._trigger("changestart", null, g.data),
          (g.running = c.size() === 0 ? b.size() : c.size());
        if (h.animated) {
          var j = {};
          h.collapsible && e
            ? (j = {
                toShow: a([]),
                toHide: c,
                complete: i,
                down: f,
                autoHeight: h.autoHeight || h.fillSpace,
              })
            : (j = {
                toShow: b,
                toHide: c,
                complete: i,
                down: f,
                autoHeight: h.autoHeight || h.fillSpace,
              }),
            h.proxied || (h.proxied = h.animated),
            h.proxiedDuration || (h.proxiedDuration = h.duration),
            (h.animated = a.isFunction(h.proxied) ? h.proxied(j) : h.proxied),
            (h.duration = a.isFunction(h.proxiedDuration)
              ? h.proxiedDuration(j)
              : h.proxiedDuration);
          var k = a.ui.accordion.animations,
            l = h.duration,
            m = h.animated;
          m && !k[m] && !a.easing[m] && (m = "slide"),
            k[m] ||
              (k[m] = function (a) {
                this.slide(a, {
                  easing: m,
                  duration: l || 700,
                });
              }),
            k[m](j);
        } else h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);
        c
          .prev()
          .attr({
            "aria-expanded": "false",
            "aria-selected": "false",
            tabIndex: -1,
          })
          .blur(),
          b
            .prev()
            .attr({
              "aria-expanded": "true",
              "aria-selected": "true",
              tabIndex: 0,
            })
            .focus();
      },
      _completed: function (a) {
        this.running = a ? 0 : --this.running;
        if (this.running) return;
        this.options.clearStyle &&
          this.toShow.add(this.toHide).css({
            height: "",
            overflow: "",
          }),
          this.toHide.removeClass("ui-accordion-content-active"),
          this.toHide.length &&
            (this.toHide.parent()[0].className =
              this.toHide.parent()[0].className),
          this._trigger("change", null, this.data);
      },
    }),
      a.extend(a.ui.accordion, {
        version: "1.8.23",
        animations: {
          slide: function (b, c) {
            b = a.extend(
              {
                easing: "swing",
                duration: 300,
              },
              b,
              c
            );
            if (!b.toHide.size()) {
              b.toShow.animate(
                {
                  height: "show",
                  paddingTop: "show",
                  paddingBottom: "show",
                },
                b
              );
              return;
            }
            if (!b.toShow.size()) {
              b.toHide.animate(
                {
                  height: "hide",
                  paddingTop: "hide",
                  paddingBottom: "hide",
                },
                b
              );
              return;
            }
            var d = b.toShow.css("overflow"),
              e = 0,
              f = {},
              g = {},
              h = ["height", "paddingTop", "paddingBottom"],
              i,
              j = b.toShow;
            (i = j[0].style.width),
              j.width(
                j.parent().width() -
                  parseFloat(j.css("paddingLeft")) -
                  parseFloat(j.css("paddingRight")) -
                  (parseFloat(j.css("borderLeftWidth")) || 0) -
                  (parseFloat(j.css("borderRightWidth")) || 0)
              ),
              a.each(h, function (c, d) {
                g[d] = "hide";
                var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/);
                f[d] = {
                  value: e[1],
                  unit: e[2] || "px",
                };
              }),
              b.toShow
                .css({
                  height: 0,
                  overflow: "hidden",
                })
                .show(),
              b.toHide
                .filter(":hidden")
                .each(b.complete)
                .end()
                .filter(":visible")
                .animate(g, {
                  step: function (a, c) {
                    c.prop == "height" &&
                      (e =
                        c.end - c.start === 0
                          ? 0
                          : (c.now - c.start) / (c.end - c.start)),
                      (b.toShow[0].style[c.prop] =
                        e * f[c.prop].value + f[c.prop].unit);
                  },
                  duration: b.duration,
                  easing: b.easing,
                  complete: function () {
                    b.autoHeight || b.toShow.css("height", ""),
                      b.toShow.css({
                        width: i,
                        overflow: d,
                      }),
                      b.complete();
                  },
                });
          },
          bounceslide: function (a) {
            this.slide(a, {
              easing: a.down ? "easeOutBounce" : "swing",
              duration: a.down ? 1e3 : 200,
            });
          },
        },
      });
  })(jQuery),
  (function (a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {
      options: {
        appendTo: "body",
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: {
          my: "left top",
          at: "left bottom",
          collision: "none",
        },
        source: null,
      },
      pending: 0,
      _create: function () {
        var b = this,
          c = this.element[0].ownerDocument,
          d;
        (this.isMultiLine = this.element.is("textarea")),
          this.element
            .addClass("ui-autocomplete-input")
            .attr("autocomplete", "off")
            .attr({
              role: "textbox",
              "aria-autocomplete": "list",
              "aria-haspopup": "true",
            })
            .bind("keydown.autocomplete", function (c) {
              if (b.options.disabled || b.element.propAttr("readOnly")) return;
              d = !1;
              var e = a.ui.keyCode;
              switch (c.keyCode) {
                case e.PAGE_UP:
                  b._move("previousPage", c);
                  break;
                case e.PAGE_DOWN:
                  b._move("nextPage", c);
                  break;
                case e.UP:
                  b._keyEvent("previous", c);
                  break;
                case e.DOWN:
                  b._keyEvent("next", c);
                  break;
                case e.ENTER:
                case e.NUMPAD_ENTER:
                  b.menu.active && ((d = !0), c.preventDefault());
                case e.TAB:
                  if (!b.menu.active) return;
                  b.menu.select(c);
                  break;
                case e.ESCAPE:
                  b.element.val(b.term), b.close(c);
                  break;
                default:
                  clearTimeout(b.searching),
                    (b.searching = setTimeout(function () {
                      b.term != b.element.val() &&
                        ((b.selectedItem = null), b.search(null, c));
                    }, b.options.delay));
              }
            })
            .bind("keypress.autocomplete", function (a) {
              d && ((d = !1), a.preventDefault());
            })
            .bind("focus.autocomplete", function () {
              if (b.options.disabled) return;
              (b.selectedItem = null), (b.previous = b.element.val());
            })
            .bind("blur.autocomplete", function (a) {
              if (b.options.disabled) return;
              clearTimeout(b.searching),
                (b.closing = setTimeout(function () {
                  b.close(a), b._change(a);
                }, 150));
            }),
          this._initSource(),
          (this.menu = a("<ul></ul>")
            .addClass("ui-autocomplete")
            .appendTo(a(this.options.appendTo || "body", c)[0])
            .mousedown(function (c) {
              var d = b.menu.element[0];
              a(c.target).closest(".ui-menu-item").length ||
                setTimeout(function () {
                  a(document).one("mousedown", function (c) {
                    c.target !== b.element[0] &&
                      c.target !== d &&
                      !a.ui.contains(d, c.target) &&
                      b.close();
                  });
                }, 1),
                setTimeout(function () {
                  clearTimeout(b.closing);
                }, 13);
            })
            .menu({
              focus: function (a, c) {
                var d = c.item.data("item.autocomplete");
                !1 !==
                  b._trigger("focus", a, {
                    item: d,
                  }) &&
                  /^key/.test(a.originalEvent.type) &&
                  b.element.val(d.value);
              },
              selected: function (a, d) {
                var e = d.item.data("item.autocomplete"),
                  f = b.previous;
                b.element[0] !== c.activeElement &&
                  (b.element.focus(),
                  (b.previous = f),
                  setTimeout(function () {
                    (b.previous = f), (b.selectedItem = e);
                  }, 1)),
                  !1 !==
                    b._trigger("select", a, {
                      item: e,
                    }) && b.element.val(e.value),
                  (b.term = b.element.val()),
                  b.close(a),
                  (b.selectedItem = e);
              },
              blur: function (a, c) {
                b.menu.element.is(":visible") &&
                  b.element.val() !== b.term &&
                  b.element.val(b.term);
              },
            })
            .zIndex(this.element.zIndex() + 1)
            .css({
              top: 0,
              left: 0,
            })
            .hide()
            .data("menu")),
          a.fn.bgiframe && this.menu.element.bgiframe(),
          (b.beforeunloadHandler = function () {
            b.element.removeAttr("autocomplete");
          }),
          a(window).bind("beforeunload", b.beforeunloadHandler);
      },
      destroy: function () {
        this.element
          .removeClass("ui-autocomplete-input")
          .removeAttr("autocomplete")
          .removeAttr("role")
          .removeAttr("aria-autocomplete")
          .removeAttr("aria-haspopup"),
          this.menu.element.remove(),
          a(window).unbind("beforeunload", this.beforeunloadHandler),
          a.Widget.prototype.destroy.call(this);
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments),
          b === "source" && this._initSource(),
          b === "appendTo" &&
            this.menu.element.appendTo(
              a(c || "body", this.element[0].ownerDocument)[0]
            ),
          b === "disabled" && c && this.xhr && this.xhr.abort();
      },
      _initSource: function () {
        var b = this,
          c,
          d;
        a.isArray(this.options.source)
          ? ((c = this.options.source),
            (this.source = function (b, d) {
              d(a.ui.autocomplete.filter(c, b.term));
            }))
          : typeof this.options.source == "string"
          ? ((d = this.options.source),
            (this.source = function (c, e) {
              b.xhr && b.xhr.abort(),
                (b.xhr = a.ajax({
                  url: d,
                  data: c,
                  dataType: "json",
                  success: function (a, b) {
                    e(a);
                  },
                  error: function () {
                    e([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      search: function (a, b) {
        (a = a != null ? a : this.element.val()),
          (this.term = this.element.val());
        if (a.length < this.options.minLength) return this.close(b);
        clearTimeout(this.closing);
        if (this._trigger("search", b) === !1) return;
        return this._search(a);
      },
      _search: function (a) {
        this.pending++,
          this.element.addClass("ui-autocomplete-loading"),
          this.source(
            {
              term: a,
            },
            this._response()
          );
      },
      _response: function () {
        var a = this,
          b = ++c;
        return function (d) {
          b === c && a.__response(d),
            a.pending--,
            a.pending || a.element.removeClass("ui-autocomplete-loading");
        };
      },
      __response: function (a) {
        !this.options.disabled && a && a.length
          ? ((a = this._normalize(a)), this._suggest(a), this._trigger("open"))
          : this.close();
      },
      close: function (a) {
        clearTimeout(this.closing),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.deactivate(),
            this._trigger("close", a));
      },
      _change: function (a) {
        this.previous !== this.element.val() &&
          this._trigger("change", a, {
            item: this.selectedItem,
          });
      },
      _normalize: function (b) {
        return b.length && b[0].label && b[0].value
          ? b
          : a.map(b, function (b) {
              return typeof b == "string"
                ? {
                    label: b,
                    value: b,
                  }
                : a.extend(
                    {
                      label: b.label || b.value,
                      value: b.value || b.label,
                    },
                    b
                  );
            });
      },
      _suggest: function (b) {
        var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(c, b),
          this.menu.deactivate(),
          this.menu.refresh(),
          c.show(),
          this._resizeMenu(),
          c.position(
            a.extend(
              {
                of: this.element,
              },
              this.options.position
            )
          ),
          this.options.autoFocus && this.menu.next(new a.Event("mouseover"));
      },
      _resizeMenu: function () {
        var a = this.menu.element;
        a.outerWidth(
          Math.max(a.width("").outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (b, c) {
        var d = this;
        a.each(c, function (a, c) {
          d._renderItem(b, c);
        });
      },
      _renderItem: function (b, c) {
        return a("<li></li>")
          .data("item.autocomplete", c)
          .append(a("<a></a>").text(c.label))
          .appendTo(b);
      },
      _move: function (a, b) {
        if (!this.menu.element.is(":visible")) {
          this.search(null, b);
          return;
        }
        if (
          (this.menu.first() && /^previous/.test(a)) ||
          (this.menu.last() && /^next/.test(a))
        ) {
          this.element.val(this.term), this.menu.deactivate();
          return;
        }
        this.menu[a](b);
      },
      widget: function () {
        return this.menu.element;
      },
      _keyEvent: function (a, b) {
        if (!this.isMultiLine || this.menu.element.is(":visible"))
          this._move(a, b), b.preventDefault();
      },
    }),
      a.extend(a.ui.autocomplete, {
        escapeRegex: function (a) {
          return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },
        filter: function (b, c) {
          var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
          return a.grep(b, function (a) {
            return d.test(a.label || a.value || a);
          });
        },
      });
  })(jQuery),
  (function (a) {
    a.widget("ui.menu", {
      _create: function () {
        var b = this;
        this.element
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "listbox",
            "aria-activedescendant": "ui-active-menuitem",
          })
          .click(function (c) {
            if (!a(c.target).closest(".ui-menu-item a").length) return;
            c.preventDefault(), b.select(c);
          }),
          this.refresh();
      },
      refresh: function () {
        var b = this,
          c = this.element
            .children("li:not(.ui-menu-item):has(a)")
            .addClass("ui-menu-item")
            .attr("role", "menuitem");
        c.children("a")
          .addClass("ui-corner-all")
          .attr("tabindex", -1)
          .mouseenter(function (c) {
            b.activate(c, a(this).parent());
          })
          .mouseleave(function () {
            b.deactivate();
          });
      },
      activate: function (a, b) {
        this.deactivate();
        if (this.hasScroll()) {
          var c = b.offset().top - this.element.offset().top,
            d = this.element.scrollTop(),
            e = this.element.height();
          c < 0
            ? this.element.scrollTop(d + c)
            : c >= e && this.element.scrollTop(d + c - e + b.height());
        }
        (this.active = b
          .eq(0)
          .children("a")
          .addClass("ui-state-hover")
          .attr("id", "ui-active-menuitem")
          .end()),
          this._trigger("focus", a, {
            item: b,
          });
      },
      deactivate: function () {
        if (!this.active) return;
        this.active
          .children("a")
          .removeClass("ui-state-hover")
          .removeAttr("id"),
          this._trigger("blur"),
          (this.active = null);
      },
      next: function (a) {
        this.move("next", ".ui-menu-item:first", a);
      },
      previous: function (a) {
        this.move("prev", ".ui-menu-item:last", a);
      },
      first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      move: function (a, b, c) {
        if (!this.active) {
          this.activate(c, this.element.children(b));
          return;
        }
        var d = this.active[a + "All"](".ui-menu-item").eq(0);
        d.length
          ? this.activate(c, d)
          : this.activate(c, this.element.children(b));
      },
      nextPage: function (b) {
        if (this.hasScroll()) {
          if (!this.active || this.last()) {
            this.activate(b, this.element.children(".ui-menu-item:first"));
            return;
          }
          var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
              var b = a(this).offset().top - c - d + a(this).height();
              return b < 10 && b > -10;
            });
          e.length || (e = this.element.children(".ui-menu-item:last")),
            this.activate(b, e);
        } else
          this.activate(
            b,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.last() ? ":first" : ":last")
          );
      },
      previousPage: function (b) {
        if (this.hasScroll()) {
          if (!this.active || this.first()) {
            this.activate(b, this.element.children(".ui-menu-item:last"));
            return;
          }
          var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
              var b = a(this).offset().top - c + d - a(this).height();
              return b < 10 && b > -10;
            });
          e.length || (e = this.element.children(".ui-menu-item:first")),
            this.activate(b, e);
        } else
          this.activate(
            b,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.first() ? ":last" : ":first")
          );
      },
      hasScroll: function () {
        return (
          this.element.height() <
          this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight")
        );
      },
      select: function (a) {
        this._trigger("selected", a, {
          item: this.active,
        });
      },
    });
  })(jQuery),
  (function (a, b) {
    var c,
      d,
      e,
      f,
      g = "ui-button ui-widget ui-state-default ui-corner-all",
      h = "ui-state-hover ui-state-active ",
      i =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      j = function () {
        var b = a(this).find(":ui-button");
        setTimeout(function () {
          b.button("refresh");
        }, 1);
      },
      k = function (b) {
        var c = b.name,
          d = b.form,
          e = a([]);
        return (
          c &&
            (d
              ? (e = a(d).find("[name='" + c + "']"))
              : (e = a("[name='" + c + "']", b.ownerDocument).filter(
                  function () {
                    return !this.form;
                  }
                ))),
          e
        );
      };
    a.widget("ui.button", {
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: {
          primary: null,
          secondary: null,
        },
      },
      _create: function () {
        this.element
          .closest("form")
          .unbind("reset.button")
          .bind("reset.button", j),
          typeof this.options.disabled != "boolean"
            ? (this.options.disabled = !!this.element.propAttr("disabled"))
            : this.element.propAttr("disabled", this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title"));
        var b = this,
          h = this.options,
          i = this.type === "checkbox" || this.type === "radio",
          l = "ui-state-hover" + (i ? "" : " ui-state-active"),
          m = "ui-state-focus";
        h.label === null && (h.label = this.buttonElement.html()),
          this.buttonElement
            .addClass(g)
            .attr("role", "button")
            .bind("mouseenter.button", function () {
              if (h.disabled) return;
              a(this).addClass("ui-state-hover"),
                this === c && a(this).addClass("ui-state-active");
            })
            .bind("mouseleave.button", function () {
              if (h.disabled) return;
              a(this).removeClass(l);
            })
            .bind("click.button", function (a) {
              h.disabled && (a.preventDefault(), a.stopImmediatePropagation());
            }),
          this.element
            .bind("focus.button", function () {
              b.buttonElement.addClass(m);
            })
            .bind("blur.button", function () {
              b.buttonElement.removeClass(m);
            }),
          i &&
            (this.element.bind("change.button", function () {
              if (f) return;
              b.refresh();
            }),
            this.buttonElement
              .bind("mousedown.button", function (a) {
                if (h.disabled) return;
                (f = !1), (d = a.pageX), (e = a.pageY);
              })
              .bind("mouseup.button", function (a) {
                if (h.disabled) return;
                if (d !== a.pageX || e !== a.pageY) f = !0;
              })),
          this.type === "checkbox"
            ? this.buttonElement.bind("click.button", function () {
                if (h.disabled || f) return !1;
                a(this).toggleClass("ui-state-active"),
                  b.buttonElement.attr("aria-pressed", b.element[0].checked);
              })
            : this.type === "radio"
            ? this.buttonElement.bind("click.button", function () {
                if (h.disabled || f) return !1;
                a(this).addClass("ui-state-active"),
                  b.buttonElement.attr("aria-pressed", "true");
                var c = b.element[0];
                k(c)
                  .not(c)
                  .map(function () {
                    return a(this).button("widget")[0];
                  })
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", "false");
              })
            : (this.buttonElement
                .bind("mousedown.button", function () {
                  if (h.disabled) return !1;
                  a(this).addClass("ui-state-active"),
                    (c = this),
                    a(document).one("mouseup", function () {
                      c = null;
                    });
                })
                .bind("mouseup.button", function () {
                  if (h.disabled) return !1;
                  a(this).removeClass("ui-state-active");
                })
                .bind("keydown.button", function (b) {
                  if (h.disabled) return !1;
                  (b.keyCode == a.ui.keyCode.SPACE ||
                    b.keyCode == a.ui.keyCode.ENTER) &&
                    a(this).addClass("ui-state-active");
                })
                .bind("keyup.button", function () {
                  a(this).removeClass("ui-state-active");
                }),
              this.buttonElement.is("a") &&
                this.buttonElement.keyup(function (b) {
                  b.keyCode === a.ui.keyCode.SPACE && a(this).click();
                })),
          this._setOption("disabled", h.disabled),
          this._resetButton();
      },
      _determineButtonType: function () {
        this.element.is(":checkbox")
          ? (this.type = "checkbox")
          : this.element.is(":radio")
          ? (this.type = "radio")
          : this.element.is("input")
          ? (this.type = "input")
          : (this.type = "button");
        if (this.type === "checkbox" || this.type === "radio") {
          var a = this.element.parents().filter(":last"),
            b = "label[for='" + this.element.attr("id") + "']";
          (this.buttonElement = a.find(b)),
            this.buttonElement.length ||
              ((a = a.length ? a.siblings() : this.element.siblings()),
              (this.buttonElement = a.filter(b)),
              this.buttonElement.length || (this.buttonElement = a.find(b))),
            this.element.addClass("ui-helper-hidden-accessible");
          var c = this.element.is(":checked");
          c && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.attr("aria-pressed", c);
        } else this.buttonElement = this.element;
      },
      widget: function () {
        return this.buttonElement;
      },
      destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(g + " " + h + " " + i)
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title"),
          a.Widget.prototype.destroy.call(this);
      },
      _setOption: function (b, c) {
        a.Widget.prototype._setOption.apply(this, arguments);
        if (b === "disabled") {
          c
            ? this.element.propAttr("disabled", !0)
            : this.element.propAttr("disabled", !1);
          return;
        }
        this._resetButton();
      },
      refresh: function () {
        var b = this.element.is(":disabled");
        b !== this.options.disabled && this._setOption("disabled", b),
          this.type === "radio"
            ? k(this.element[0]).each(function () {
                a(this).is(":checked")
                  ? a(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : a(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
              })
            : this.type === "checkbox" &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false"));
      },
      _resetButton: function () {
        if (this.type === "input") {
          this.options.label && this.element.val(this.options.label);
          return;
        }
        var b = this.buttonElement.removeClass(i),
          c = a("<span></span>", this.element[0].ownerDocument)
            .addClass("ui-button-text")
            .html(this.options.label)
            .appendTo(b.empty())
            .text(),
          d = this.options.icons,
          e = d.primary && d.secondary,
          f = [];
        d.primary || d.secondary
          ? (this.options.text &&
              f.push(
                "ui-button-text-icon" +
                  (e ? "s" : d.primary ? "-primary" : "-secondary")
              ),
            d.primary &&
              b.prepend(
                "<span class='ui-button-icon-primary ui-icon " +
                  d.primary +
                  "'></span>"
              ),
            d.secondary &&
              b.append(
                "<span class='ui-button-icon-secondary ui-icon " +
                  d.secondary +
                  "'></span>"
              ),
            this.options.text ||
              (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"),
              this.hasTitle || b.attr("title", c)))
          : f.push("ui-button-text-only"),
          b.addClass(f.join(" "));
      },
    }),
      a.widget("ui.buttonset", {
        options: {
          items:
            ":button, :submit, :reset, :checkbox, :radio, a, :data(button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (b, c) {
          b === "disabled" && this.buttons.button("option", b, c),
            a.Widget.prototype._setOption.apply(this, arguments);
        },
        refresh: function () {
          var b = this.element.css("direction") === "rtl";
          this.buttons = this.element
            .find(this.options.items)
            .filter(":ui-button")
            .button("refresh")
            .end()
            .not(":ui-button")
            .button()
            .end()
            .map(function () {
              return a(this).button("widget")[0];
            })
            .removeClass("ui-corner-all ui-corner-left ui-corner-right")
            .filter(":first")
            .addClass(b ? "ui-corner-right" : "ui-corner-left")
            .end()
            .filter(":last")
            .addClass(b ? "ui-corner-left" : "ui-corner-right")
            .end()
            .end();
        },
        destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return a(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy"),
            a.Widget.prototype.destroy.call(this);
        },
      });
  })(jQuery),
  (function ($, undefined) {
    function Datepicker() {
      (this.debug = !1),
        (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        $.extend(this._defaults, this.regional[""]),
        (this.dpDiv = bindHover(
          $(
            '<div id="' +
              this._mainDivId +
              '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
          )
        ));
    }
    function bindHover(a) {
      var b =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return a
        .bind("mouseout", function (a) {
          var c = $(a.target).closest(b);
          if (!c.length) return;
          c.removeClass(
            "ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover"
          );
        })
        .bind("mouseover", function (c) {
          var d = $(c.target).closest(b);
          if (
            $.datepicker._isDisabledDatepicker(
              instActive.inline ? a.parent()[0] : instActive.input[0]
            ) ||
            !d.length
          )
            return;
          d
            .parents(".ui-datepicker-calendar")
            .find("a")
            .removeClass("ui-state-hover"),
            d.addClass("ui-state-hover"),
            d.hasClass("ui-datepicker-prev") &&
              d.addClass("ui-datepicker-prev-hover"),
            d.hasClass("ui-datepicker-next") &&
              d.addClass("ui-datepicker-next-hover");
        });
    }
    function extendRemove(a, b) {
      $.extend(a, b);
      for (var c in b) if (b[c] == null || b[c] == undefined) a[c] = b[c];
      return a;
    }
    function isArray(a) {
      return (
        a &&
        (($.browser.safari && typeof a == "object" && a.length) ||
          (a.constructor && a.constructor.toString().match(/\Array\(\)/)))
      );
    }
    $.extend($.ui, {
      datepicker: {
        version: "1.8.23",
      },
    });
    var PROP_NAME = "datepicker",
      dpuuid = new Date().getTime(),
      instActive;
    $.extend(Datepicker.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      log: function () {
        this.debug && console.log.apply("", arguments);
      },
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (a) {
        return extendRemove(this._defaults, a || {}), this;
      },
      _attachDatepicker: function (target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
          var attrValue = target.getAttribute("date:" + attrName);
          if (attrValue) {
            inlineSettings = inlineSettings || {};
            try {
              inlineSettings[attrName] = eval(attrValue);
            } catch (err) {
              inlineSettings[attrName] = attrValue;
            }
          }
        }
        var nodeName = target.nodeName.toLowerCase(),
          inline = nodeName == "div" || nodeName == "span";
        target.id || ((this.uuid += 1), (target.id = "dp" + this.uuid));
        var inst = this._newInst($(target), inline);
        (inst.settings = $.extend({}, settings || {}, inlineSettings || {})),
          nodeName == "input"
            ? this._connectDatepicker(target, inst)
            : inline && this._inlineDatepicker(target, inst);
      },
      _newInst: function (a, b) {
        var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
        return {
          id: c,
          input: a,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: b,
          dpDiv: b
            ? bindHover(
                $(
                  '<div class="' +
                    this._inlineClass +
                    ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (a, b) {
        var c = $(a);
        (b.append = $([])), (b.trigger = $([]));
        if (c.hasClass(this.markerClassName)) return;
        this._attachments(c, b),
          c
            .addClass(this.markerClassName)
            .keydown(this._doKeyDown)
            .keypress(this._doKeyPress)
            .keyup(this._doKeyUp)
            .bind("setData.datepicker", function (a, c, d) {
              b.settings[c] = d;
            })
            .bind("getData.datepicker", function (a, c) {
              return this._get(b, c);
            }),
          this._autoSize(b),
          $.data(a, PROP_NAME, b),
          b.settings.disabled && this._disableDatepicker(a);
      },
      _attachments: function (a, b) {
        var c = this._get(b, "appendText"),
          d = this._get(b, "isRTL");
        b.append && b.append.remove(),
          c &&
            ((b.append = $(
              '<span class="' + this._appendClass + '">' + c + "</span>"
            )),
            a[d ? "before" : "after"](b.append)),
          a.unbind("focus", this._showDatepicker),
          b.trigger && b.trigger.remove();
        var e = this._get(b, "showOn");
        (e == "focus" || e == "both") && a.focus(this._showDatepicker);
        if (e == "button" || e == "both") {
          var f = this._get(b, "buttonText"),
            g = this._get(b, "buttonImage");
          (b.trigger = $(
            this._get(b, "buttonImageOnly")
              ? $("<img/>").addClass(this._triggerClass).attr({
                  src: g,
                  alt: f,
                  title: f,
                })
              : $('<button type="button"></button>')
                  .addClass(this._triggerClass)
                  .html(
                    g == ""
                      ? f
                      : $("<img/>").attr({
                          src: g,
                          alt: f,
                          title: f,
                        })
                  )
          )),
            a[d ? "before" : "after"](b.trigger),
            b.trigger.click(function () {
              return (
                $.datepicker._datepickerShowing &&
                $.datepicker._lastInput == a[0]
                  ? $.datepicker._hideDatepicker()
                  : $.datepicker._datepickerShowing &&
                    $.datepicker._lastInput != a[0]
                  ? ($.datepicker._hideDatepicker(),
                    $.datepicker._showDatepicker(a[0]))
                  : $.datepicker._showDatepicker(a[0]),
                !1
              );
            });
        }
      },
      _autoSize: function (a) {
        if (this._get(a, "autoSize") && !a.inline) {
          var b = new Date(2009, 11, 20),
            c = this._get(a, "dateFormat");
          if (c.match(/[DM]/)) {
            var d = function (a) {
              var b = 0,
                c = 0;
              for (var d = 0; d < a.length; d++)
                a[d].length > b && ((b = a[d].length), (c = d));
              return c;
            };
            b.setMonth(
              d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
              b.setDate(
                d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  b.getDay()
              );
          }
          a.input.attr("size", this._formatDate(a, b).length);
        }
      },
      _inlineDatepicker: function (a, b) {
        var c = $(a);
        if (c.hasClass(this.markerClassName)) return;
        c
          .addClass(this.markerClassName)
          .append(b.dpDiv)
          .bind("setData.datepicker", function (a, c, d) {
            b.settings[c] = d;
          })
          .bind("getData.datepicker", function (a, c) {
            return this._get(b, c);
          }),
          $.data(a, PROP_NAME, b),
          this._setDate(b, this._getDefaultDate(b), !0),
          this._updateDatepicker(b),
          this._updateAlternate(b),
          b.settings.disabled && this._disableDatepicker(a),
          b.dpDiv.css("display", "block");
      },
      _dialogDatepicker: function (a, b, c, d, e) {
        var f = this._dialogInst;
        if (!f) {
          this.uuid += 1;
          var g = "dp" + this.uuid;
          (this._dialogInput = $(
            '<input type="text" id="' +
              g +
              '" style="position: absolute; top: -100px; width: 0px;"/>'
          )),
            this._dialogInput.keydown(this._doKeyDown),
            $("body").append(this._dialogInput),
            (f = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (f.settings = {}),
            $.data(this._dialogInput[0], PROP_NAME, f);
        }
        extendRemove(f.settings, d || {}),
          (b = b && b.constructor == Date ? this._formatDate(f, b) : b),
          this._dialogInput.val(b),
          (this._pos = e ? (e.length ? e : [e.pageX, e.pageY]) : null);
        if (!this._pos) {
          var h = document.documentElement.clientWidth,
            i = document.documentElement.clientHeight,
            j = document.documentElement.scrollLeft || document.body.scrollLeft,
            k = document.documentElement.scrollTop || document.body.scrollTop;
          this._pos = [h / 2 - 100 + j, i / 2 - 150 + k];
        }
        return (
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (f.settings.onSelect = c),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          $.blockUI && $.blockUI(this.dpDiv),
          $.data(this._dialogInput[0], PROP_NAME, f),
          this
        );
      },
      _destroyDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        $.removeData(a, PROP_NAME),
          d == "input"
            ? (c.append.remove(),
              c.trigger.remove(),
              b
                .removeClass(this.markerClassName)
                .unbind("focus", this._showDatepicker)
                .unbind("keydown", this._doKeyDown)
                .unbind("keypress", this._doKeyPress)
                .unbind("keyup", this._doKeyUp))
            : (d == "div" || d == "span") &&
              b.removeClass(this.markerClassName).empty();
      },
      _enableDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        if (d == "input")
          (a.disabled = !1),
            c.trigger
              .filter("button")
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter("img")
              .css({
                opacity: "1.0",
                cursor: "",
              });
        else if (d == "div" || d == "span") {
          var e = b.children("." + this._inlineClass);
          e.children().removeClass("ui-state-disabled"),
            e
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .removeAttr("disabled");
        }
        this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b;
        });
      },
      _disableDatepicker: function (a) {
        var b = $(a),
          c = $.data(a, PROP_NAME);
        if (!b.hasClass(this.markerClassName)) return;
        var d = a.nodeName.toLowerCase();
        if (d == "input")
          (a.disabled = !0),
            c.trigger
              .filter("button")
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter("img")
              .css({
                opacity: "0.5",
                cursor: "default",
              });
        else if (d == "div" || d == "span") {
          var e = b.children("." + this._inlineClass);
          e.children().addClass("ui-state-disabled"),
            e
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .attr("disabled", "disabled");
        }
        (this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b;
        })),
          (this._disabledInputs[this._disabledInputs.length] = a);
      },
      _isDisabledDatepicker: function (a) {
        if (!a) return !1;
        for (var b = 0; b < this._disabledInputs.length; b++)
          if (this._disabledInputs[b] == a) return !0;
        return !1;
      },
      _getInst: function (a) {
        try {
          return $.data(a, PROP_NAME);
        } catch (b) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (a, b, c) {
        var d = this._getInst(a);
        if (arguments.length == 2 && typeof b == "string")
          return b == "defaults"
            ? $.extend({}, $.datepicker._defaults)
            : d
            ? b == "all"
              ? $.extend({}, d.settings)
              : this._get(d, b)
            : null;
        var e = b || {};
        typeof b == "string" && ((e = {}), (e[b] = c));
        if (d) {
          this._curInst == d && this._hideDatepicker();
          var f = this._getDateDatepicker(a, !0),
            g = this._getMinMaxDate(d, "min"),
            h = this._getMinMaxDate(d, "max");
          extendRemove(d.settings, e),
            g !== null &&
              e.dateFormat !== undefined &&
              e.minDate === undefined &&
              (d.settings.minDate = this._formatDate(d, g)),
            h !== null &&
              e.dateFormat !== undefined &&
              e.maxDate === undefined &&
              (d.settings.maxDate = this._formatDate(d, h)),
            this._attachments($(a), d),
            this._autoSize(d),
            this._setDate(d, f),
            this._updateAlternate(d),
            this._updateDatepicker(d);
        }
      },
      _changeDatepicker: function (a, b, c) {
        this._optionDatepicker(a, b, c);
      },
      _refreshDatepicker: function (a) {
        var b = this._getInst(a);
        b && this._updateDatepicker(b);
      },
      _setDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        c &&
          (this._setDate(c, b),
          this._updateDatepicker(c),
          this._updateAlternate(c));
      },
      _getDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        return (
          c && !c.inline && this._setDateFromField(c, b),
          c ? this._getDate(c) : null
        );
      },
      _doKeyDown: function (a) {
        var b = $.datepicker._getInst(a.target),
          c = !0,
          d = b.dpDiv.is(".ui-datepicker-rtl");
        b._keyEvent = !0;
        if ($.datepicker._datepickerShowing)
          switch (a.keyCode) {
            case 9:
              $.datepicker._hideDatepicker(), (c = !1);
              break;
            case 13:
              var e = $(
                "td." +
                  $.datepicker._dayOverClass +
                  ":not(." +
                  $.datepicker._currentClass +
                  ")",
                b.dpDiv
              );
              e[0] &&
                $.datepicker._selectDay(
                  a.target,
                  b.selectedMonth,
                  b.selectedYear,
                  e[0]
                );
              var f = $.datepicker._get(b, "onSelect");
              if (f) {
                var g = $.datepicker._formatDate(b);
                f.apply(b.input ? b.input[0] : null, [g, b]);
              } else $.datepicker._hideDatepicker();
              return !1;
            case 27:
              $.datepicker._hideDatepicker();
              break;
            case 33:
              $.datepicker._adjustDate(
                a.target,
                a.ctrlKey
                  ? -$.datepicker._get(b, "stepBigMonths")
                  : -$.datepicker._get(b, "stepMonths"),
                "M"
              );
              break;
            case 34:
              $.datepicker._adjustDate(
                a.target,
                a.ctrlKey
                  ? +$.datepicker._get(b, "stepBigMonths")
                  : +$.datepicker._get(b, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target),
                (c = a.ctrlKey || a.metaKey);
              break;
            case 36:
              (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target),
                (c = a.ctrlKey || a.metaKey);
              break;
            case 37:
              (a.ctrlKey || a.metaKey) &&
                $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"),
                (c = a.ctrlKey || a.metaKey),
                a.originalEvent.altKey &&
                  $.datepicker._adjustDate(
                    a.target,
                    a.ctrlKey
                      ? -$.datepicker._get(b, "stepBigMonths")
                      : -$.datepicker._get(b, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (a.ctrlKey || a.metaKey) &&
                $.datepicker._adjustDate(a.target, -7, "D"),
                (c = a.ctrlKey || a.metaKey);
              break;
            case 39:
              (a.ctrlKey || a.metaKey) &&
                $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"),
                (c = a.ctrlKey || a.metaKey),
                a.originalEvent.altKey &&
                  $.datepicker._adjustDate(
                    a.target,
                    a.ctrlKey
                      ? +$.datepicker._get(b, "stepBigMonths")
                      : +$.datepicker._get(b, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (a.ctrlKey || a.metaKey) &&
                $.datepicker._adjustDate(a.target, 7, "D"),
                (c = a.ctrlKey || a.metaKey);
              break;
            default:
              c = !1;
          }
        else
          a.keyCode == 36 && a.ctrlKey
            ? $.datepicker._showDatepicker(this)
            : (c = !1);
        c && (a.preventDefault(), a.stopPropagation());
      },
      _doKeyPress: function (a) {
        var b = $.datepicker._getInst(a.target);
        if ($.datepicker._get(b, "constrainInput")) {
          var c = $.datepicker._possibleChars(
              $.datepicker._get(b, "dateFormat")
            ),
            d = String.fromCharCode(
              a.charCode == undefined ? a.keyCode : a.charCode
            );
          return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1;
        }
      },
      _doKeyUp: function (a) {
        var b = $.datepicker._getInst(a.target);
        if (b.input.val() != b.lastVal)
          try {
            var c = $.datepicker.parseDate(
              $.datepicker._get(b, "dateFormat"),
              b.input ? b.input.val() : null,
              $.datepicker._getFormatConfig(b)
            );
            c &&
              ($.datepicker._setDateFromField(b),
              $.datepicker._updateAlternate(b),
              $.datepicker._updateDatepicker(b));
          } catch (d) {
            $.datepicker.log(d);
          }
        return !0;
      },
      _showDatepicker: function (a) {
        (a = a.target || a),
          a.nodeName.toLowerCase() != "input" &&
            (a = $("input", a.parentNode)[0]);
        if (
          $.datepicker._isDisabledDatepicker(a) ||
          $.datepicker._lastInput == a
        )
          return;
        var b = $.datepicker._getInst(a);
        $.datepicker._curInst &&
          $.datepicker._curInst != b &&
          ($.datepicker._curInst.dpDiv.stop(!0, !0),
          b &&
            $.datepicker._datepickerShowing &&
            $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
        var c = $.datepicker._get(b, "beforeShow"),
          d = c ? c.apply(a, [a, b]) : {};
        if (d === !1) return;
        extendRemove(b.settings, d),
          (b.lastVal = null),
          ($.datepicker._lastInput = a),
          $.datepicker._setDateFromField(b),
          $.datepicker._inDialog && (a.value = ""),
          $.datepicker._pos ||
            (($.datepicker._pos = $.datepicker._findPos(a)),
            ($.datepicker._pos[1] += a.offsetHeight));
        var e = !1;
        $(a)
          .parents()
          .each(function () {
            return (e |= $(this).css("position") == "fixed"), !e;
          }),
          e &&
            $.browser.opera &&
            (($.datepicker._pos[0] -= document.documentElement.scrollLeft),
            ($.datepicker._pos[1] -= document.documentElement.scrollTop));
        var f = {
          left: $.datepicker._pos[0],
          top: $.datepicker._pos[1],
        };
        ($.datepicker._pos = null),
          b.dpDiv.empty(),
          b.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px",
          }),
          $.datepicker._updateDatepicker(b),
          (f = $.datepicker._checkOffset(b, f, e)),
          b.dpDiv.css({
            position:
              $.datepicker._inDialog && $.blockUI
                ? "static"
                : e
                ? "fixed"
                : "absolute",
            display: "none",
            left: f.left + "px",
            top: f.top + "px",
          });
        if (!b.inline) {
          var g = $.datepicker._get(b, "showAnim"),
            h = $.datepicker._get(b, "duration"),
            i = function () {
              var a = b.dpDiv.find("iframe.ui-datepicker-cover");
              if (!!a.length) {
                var c = $.datepicker._getBorders(b.dpDiv);
                a.css({
                  left: -c[0],
                  top: -c[1],
                  width: b.dpDiv.outerWidth(),
                  height: b.dpDiv.outerHeight(),
                });
              }
            };
          b.dpDiv.zIndex($(a).zIndex() + 1),
            ($.datepicker._datepickerShowing = !0),
            $.effects && $.effects[g]
              ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i)
              : b.dpDiv[g || "show"](g ? h : null, i),
            (!g || !h) && i(),
            b.input.is(":visible") &&
              !b.input.is(":disabled") &&
              b.input.focus(),
            ($.datepicker._curInst = b);
        }
      },
      _updateDatepicker: function (a) {
        var b = this;
        b.maxRows = 4;
        var c = $.datepicker._getBorders(a.dpDiv);
        (instActive = a),
          a.dpDiv.empty().append(this._generateHTML(a)),
          this._attachHandlers(a);
        var d = a.dpDiv.find("iframe.ui-datepicker-cover");
        !d.length ||
          d.css({
            left: -c[0],
            top: -c[1],
            width: a.dpDiv.outerWidth(),
            height: a.dpDiv.outerHeight(),
          }),
          a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var e = this._getNumberOfMonths(a),
          f = e[1],
          g = 17;
        a.dpDiv
          .removeClass(
            "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
          )
          .width(""),
          f > 1 &&
            a.dpDiv
              .addClass("ui-datepicker-multi-" + f)
              .css("width", g * f + "em"),
          a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          a == $.datepicker._curInst &&
            $.datepicker._datepickerShowing &&
            a.input &&
            a.input.is(":visible") &&
            !a.input.is(":disabled") &&
            a.input[0] != document.activeElement &&
            a.input.focus();
        if (a.yearshtml) {
          var h = a.yearshtml;
          setTimeout(function () {
            h === a.yearshtml &&
              a.yearshtml &&
              a.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(a.yearshtml),
              (h = a.yearshtml = null);
          }, 0);
        }
      },
      _getBorders: function (a) {
        var b = function (a) {
          return (
            {
              thin: 1,
              medium: 2,
              thick: 3,
            }[a] || a
          );
        };
        return [
          parseFloat(b(a.css("border-left-width"))),
          parseFloat(b(a.css("border-top-width"))),
        ];
      },
      _checkOffset: function (a, b, c) {
        var d = a.dpDiv.outerWidth(),
          e = a.dpDiv.outerHeight(),
          f = a.input ? a.input.outerWidth() : 0,
          g = a.input ? a.input.outerHeight() : 0,
          h =
            document.documentElement.clientWidth +
            (c ? 0 : $(document).scrollLeft()),
          i =
            document.documentElement.clientHeight +
            (c ? 0 : $(document).scrollTop());
        return (
          (b.left -= this._get(a, "isRTL") ? d - f : 0),
          (b.left -=
            c && b.left == a.input.offset().left
              ? $(document).scrollLeft()
              : 0),
          (b.top -=
            c && b.top == a.input.offset().top + g
              ? $(document).scrollTop()
              : 0),
          (b.left -= Math.min(
            b.left,
            b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0
          )),
          (b.top -= Math.min(
            b.top,
            b.top + e > i && i > e ? Math.abs(e + g) : 0
          )),
          b
        );
      },
      _findPos: function (a) {
        var b = this._getInst(a),
          c = this._get(b, "isRTL");
        while (
          a &&
          (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a))
        )
          a = a[c ? "previousSibling" : "nextSibling"];
        var d = $(a).offset();
        return [d.left, d.top];
      },
      _hideDatepicker: function (a) {
        var b = this._curInst;
        if (!b || (a && b != $.data(a, PROP_NAME))) return;
        if (this._datepickerShowing) {
          var c = this._get(b, "showAnim"),
            d = this._get(b, "duration"),
            e = function () {
              $.datepicker._tidyDialog(b);
            };
          $.effects && $.effects[c]
            ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e)
            : b.dpDiv[
                c == "slideDown"
                  ? "slideUp"
                  : c == "fadeIn"
                  ? "fadeOut"
                  : "hide"
              ](c ? d : null, e),
            c || e(),
            (this._datepickerShowing = !1);
          var f = this._get(b, "onClose");
          f &&
            f.apply(b.input ? b.input[0] : null, [
              b.input ? b.input.val() : "",
              b,
            ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))),
            (this._inDialog = !1);
        }
      },
      _tidyDialog: function (a) {
        a.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (a) {
        if (!$.datepicker._curInst) return;
        var b = $(a.target),
          c = $.datepicker._getInst(b[0]);
        ((b[0].id != $.datepicker._mainDivId &&
          b.parents("#" + $.datepicker._mainDivId).length == 0 &&
          !b.hasClass($.datepicker.markerClassName) &&
          !b.closest("." + $.datepicker._triggerClass).length &&
          $.datepicker._datepickerShowing &&
          (!$.datepicker._inDialog || !$.blockUI)) ||
          (b.hasClass($.datepicker.markerClassName) &&
            $.datepicker._curInst != c)) &&
          $.datepicker._hideDatepicker();
      },
      _adjustDate: function (a, b, c) {
        var d = $(a),
          e = this._getInst(d[0]);
        if (this._isDisabledDatepicker(d[0])) return;
        this._adjustInstDate(
          e,
          b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0),
          c
        ),
          this._updateDatepicker(e);
      },
      _gotoToday: function (a) {
        var b = $(a),
          c = this._getInst(b[0]);
        if (this._get(c, "gotoCurrent") && c.currentDay)
          (c.selectedDay = c.currentDay),
            (c.drawMonth = c.selectedMonth = c.currentMonth),
            (c.drawYear = c.selectedYear = c.currentYear);
        else {
          var d = new Date();
          (c.selectedDay = d.getDate()),
            (c.drawMonth = c.selectedMonth = d.getMonth()),
            (c.drawYear = c.selectedYear = d.getFullYear());
        }
        this._notifyChange(c), this._adjustDate(b);
      },
      _selectMonthYear: function (a, b, c) {
        var d = $(a),
          e = this._getInst(d[0]);
        (e["selected" + (c == "M" ? "Month" : "Year")] = e[
          "draw" + (c == "M" ? "Month" : "Year")
        ] =
          parseInt(b.options[b.selectedIndex].value, 10)),
          this._notifyChange(e),
          this._adjustDate(d);
      },
      _selectDay: function (a, b, c, d) {
        var e = $(a);
        if (
          $(d).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(e[0])
        )
          return;
        var f = this._getInst(e[0]);
        (f.selectedDay = f.currentDay = $("a", d).html()),
          (f.selectedMonth = f.currentMonth = b),
          (f.selectedYear = f.currentYear = c),
          this._selectDate(
            a,
            this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)
          );
      },
      _clearDate: function (a) {
        var b = $(a),
          c = this._getInst(b[0]);
        this._selectDate(b, "");
      },
      _selectDate: function (a, b) {
        var c = $(a),
          d = this._getInst(c[0]);
        (b = b != null ? b : this._formatDate(d)),
          d.input && d.input.val(b),
          this._updateAlternate(d);
        var e = this._get(d, "onSelect");
        e
          ? e.apply(d.input ? d.input[0] : null, [b, d])
          : d.input && d.input.trigger("change"),
          d.inline
            ? this._updateDatepicker(d)
            : (this._hideDatepicker(),
              (this._lastInput = d.input[0]),
              typeof d.input[0] != "object" && d.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (a) {
        var b = this._get(a, "altField");
        if (b) {
          var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
            d = this._getDate(a),
            e = this.formatDate(c, d, this._getFormatConfig(a));
          $(b).each(function () {
            $(this).val(e);
          });
        }
      },
      noWeekends: function (a) {
        var b = a.getDay();
        return [b > 0 && b < 6, ""];
      },
      iso8601Week: function (a) {
        var b = new Date(a.getTime());
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return (
          b.setMonth(0),
          b.setDate(1),
          Math.floor(Math.round((c - b) / 864e5) / 7) + 1
        );
      },
      parseDate: function (a, b, c) {
        if (a == null || b == null) throw "Invalid arguments";
        b = typeof b == "object" ? b.toString() : b + "";
        if (b == "") return null;
        var d =
          (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        d =
          typeof d != "string"
            ? d
            : (new Date().getFullYear() % 100) + parseInt(d, 10);
        var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          f = (c ? c.dayNames : null) || this._defaults.dayNames,
          g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (c ? c.monthNames : null) || this._defaults.monthNames,
          i = -1,
          j = -1,
          k = -1,
          l = -1,
          m = !1,
          n = function (b) {
            var c = s + 1 < a.length && a.charAt(s + 1) == b;
            return c && s++, c;
          },
          o = function (a) {
            var c = n(a),
              d =
                a == "@"
                  ? 14
                  : a == "!"
                  ? 20
                  : a == "y" && c
                  ? 4
                  : a == "o"
                  ? 3
                  : 2,
              e = new RegExp("^\\d{1," + d + "}"),
              f = b.substring(r).match(e);
            if (!f) throw "Missing number at position " + r;
            return (r += f[0].length), parseInt(f[0], 10);
          },
          p = function (a, c, d) {
            var e = $.map(n(a) ? d : c, function (a, b) {
                return [[b, a]];
              }).sort(function (a, b) {
                return -(a[1].length - b[1].length);
              }),
              f = -1;
            $.each(e, function (a, c) {
              var d = c[1];
              if (b.substr(r, d.length).toLowerCase() == d.toLowerCase())
                return (f = c[0]), (r += d.length), !1;
            });
            if (f != -1) return f + 1;
            throw "Unknown name at position " + r;
          },
          q = function () {
            if (b.charAt(r) != a.charAt(s))
              throw "Unexpected literal at position " + r;
            r++;
          },
          r = 0;
        for (var s = 0; s < a.length; s++)
          if (m) a.charAt(s) == "'" && !n("'") ? (m = !1) : q();
          else
            switch (a.charAt(s)) {
              case "d":
                k = o("d");
                break;
              case "D":
                p("D", e, f);
                break;
              case "o":
                l = o("o");
                break;
              case "m":
                j = o("m");
                break;
              case "M":
                j = p("M", g, h);
                break;
              case "y":
                i = o("y");
                break;
              case "@":
                var t = new Date(o("@"));
                (i = t.getFullYear()),
                  (j = t.getMonth() + 1),
                  (k = t.getDate());
                break;
              case "!":
                var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                (i = t.getFullYear()),
                  (j = t.getMonth() + 1),
                  (k = t.getDate());
                break;
              case "'":
                n("'") ? q() : (m = !0);
                break;
              default:
                q();
            }
        if (r < b.length)
          throw "Extra/unparsed characters found in date: " + b.substring(r);
        i == -1
          ? (i = new Date().getFullYear())
          : i < 100 &&
            (i +=
              new Date().getFullYear() -
              (new Date().getFullYear() % 100) +
              (i <= d ? 0 : -100));
        if (l > -1) {
          (j = 1), (k = l);
          do {
            var u = this._getDaysInMonth(i, j - 1);
            if (k <= u) break;
            j++, (k -= u);
          } while (!0);
        }
        var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
        if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k)
          throw "Invalid date";
        return t;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        24 *
        60 *
        60 *
        1e7,
      formatDate: function (a, b, c) {
        if (!b) return "";
        var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          e = (c ? c.dayNames : null) || this._defaults.dayNames,
          f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          g = (c ? c.monthNames : null) || this._defaults.monthNames,
          h = function (b) {
            var c = m + 1 < a.length && a.charAt(m + 1) == b;
            return c && m++, c;
          },
          i = function (a, b, c) {
            var d = "" + b;
            if (h(a)) while (d.length < c) d = "0" + d;
            return d;
          },
          j = function (a, b, c, d) {
            return h(a) ? d[b] : c[b];
          },
          k = "",
          l = !1;
        if (b)
          for (var m = 0; m < a.length; m++)
            if (l)
              a.charAt(m) == "'" && !h("'") ? (l = !1) : (k += a.charAt(m));
            else
              switch (a.charAt(m)) {
                case "d":
                  k += i("d", b.getDate(), 2);
                  break;
                case "D":
                  k += j("D", b.getDay(), d, e);
                  break;
                case "o":
                  k += i(
                    "o",
                    Math.round(
                      (new Date(
                        b.getFullYear(),
                        b.getMonth(),
                        b.getDate()
                      ).getTime() -
                        new Date(b.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  k += i("m", b.getMonth() + 1, 2);
                  break;
                case "M":
                  k += j("M", b.getMonth(), f, g);
                  break;
                case "y":
                  k += h("y")
                    ? b.getFullYear()
                    : (b.getYear() % 100 < 10 ? "0" : "") + (b.getYear() % 100);
                  break;
                case "@":
                  k += b.getTime();
                  break;
                case "!":
                  k += b.getTime() * 1e4 + this._ticksTo1970;
                  break;
                case "'":
                  h("'") ? (k += "'") : (l = !0);
                  break;
                default:
                  k += a.charAt(m);
              }
        return k;
      },
      _possibleChars: function (a) {
        var b = "",
          c = !1,
          d = function (b) {
            var c = e + 1 < a.length && a.charAt(e + 1) == b;
            return c && e++, c;
          };
        for (var e = 0; e < a.length; e++)
          if (c) a.charAt(e) == "'" && !d("'") ? (c = !1) : (b += a.charAt(e));
          else
            switch (a.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                b += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                d("'") ? (b += "'") : (c = !0);
                break;
              default:
                b += a.charAt(e);
            }
        return b;
      },
      _get: function (a, b) {
        return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
      },
      _setDateFromField: function (a, b) {
        if (a.input.val() == a.lastVal) return;
        var c = this._get(a, "dateFormat"),
          d = (a.lastVal = a.input ? a.input.val() : null),
          e,
          f;
        e = f = this._getDefaultDate(a);
        var g = this._getFormatConfig(a);
        try {
          e = this.parseDate(c, d, g) || f;
        } catch (h) {
          this.log(h), (d = b ? "" : d);
        }
        (a.selectedDay = e.getDate()),
          (a.drawMonth = a.selectedMonth = e.getMonth()),
          (a.drawYear = a.selectedYear = e.getFullYear()),
          (a.currentDay = d ? e.getDate() : 0),
          (a.currentMonth = d ? e.getMonth() : 0),
          (a.currentYear = d ? e.getFullYear() : 0),
          this._adjustInstDate(a);
      },
      _getDefaultDate: function (a) {
        return this._restrictMinMax(
          a,
          this._determineDate(a, this._get(a, "defaultDate"), new Date())
        );
      },
      _determineDate: function (a, b, c) {
        var d = function (a) {
            var b = new Date();
            return b.setDate(b.getDate() + a), b;
          },
          e = function (b) {
            try {
              return $.datepicker.parseDate(
                $.datepicker._get(a, "dateFormat"),
                b,
                $.datepicker._getFormatConfig(a)
              );
            } catch (c) {}
            var d =
                (b.toLowerCase().match(/^c/)
                  ? $.datepicker._getDate(a)
                  : null) || new Date(),
              e = d.getFullYear(),
              f = d.getMonth(),
              g = d.getDate(),
              h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              i = h.exec(b);
            while (i) {
              switch (i[2] || "d") {
                case "d":
                case "D":
                  g += parseInt(i[1], 10);
                  break;
                case "w":
                case "W":
                  g += parseInt(i[1], 10) * 7;
                  break;
                case "m":
                case "M":
                  (f += parseInt(i[1], 10)),
                    (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
                  break;
                case "y":
                case "Y":
                  (e += parseInt(i[1], 10)),
                    (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
              }
              i = h.exec(b);
            }
            return new Date(e, f, g);
          },
          f =
            b == null || b === ""
              ? c
              : typeof b == "string"
              ? e(b)
              : typeof b == "number"
              ? isNaN(b)
                ? c
                : d(b)
              : new Date(b.getTime());
        return (
          (f = f && f.toString() == "Invalid Date" ? c : f),
          f &&
            (f.setHours(0),
            f.setMinutes(0),
            f.setSeconds(0),
            f.setMilliseconds(0)),
          this._daylightSavingAdjust(f)
        );
      },
      _daylightSavingAdjust: function (a) {
        return a
          ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a)
          : null;
      },
      _setDate: function (a, b, c) {
        var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
        (a.selectedDay = a.currentDay = g.getDate()),
          (a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth()),
          (a.drawYear = a.selectedYear = a.currentYear = g.getFullYear()),
          (e != a.selectedMonth || f != a.selectedYear) &&
            !c &&
            this._notifyChange(a),
          this._adjustInstDate(a),
          a.input && a.input.val(d ? "" : this._formatDate(a));
      },
      _getDate: function (a) {
        var b =
          !a.currentYear || (a.input && a.input.val() == "")
            ? null
            : this._daylightSavingAdjust(
                new Date(a.currentYear, a.currentMonth, a.currentDay)
              );
        return b;
      },
      _attachHandlers: function (a) {
        var b = this._get(a, "stepMonths"),
          c = "#" + a.id.replace(/\\\\/g, "\\");
        a.dpDiv.find("[data-handler]").map(function () {
          var a = {
            prev: function () {
              window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M");
            },
            next: function () {
              window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M");
            },
            hide: function () {
              window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
            },
            today: function () {
              window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c);
            },
            selectDay: function () {
              return (
                window["DP_jQuery_" + dpuuid].datepicker._selectDay(
                  c,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return (
                window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(
                  c,
                  this,
                  "M"
                ),
                !1
              );
            },
            selectYear: function () {
              return (
                window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(
                  c,
                  this,
                  "Y"
                ),
                !1
              );
            },
          };
          $(this).bind(
            this.getAttribute("data-event"),
            a[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (a) {
        var b = new Date();
        b = this._daylightSavingAdjust(
          new Date(b.getFullYear(), b.getMonth(), b.getDate())
        );
        var c = this._get(a, "isRTL"),
          d = this._get(a, "showButtonPanel"),
          e = this._get(a, "hideIfNoPrevNext"),
          f = this._get(a, "navigationAsDateFormat"),
          g = this._getNumberOfMonths(a),
          h = this._get(a, "showCurrentAtPos"),
          i = this._get(a, "stepMonths"),
          j = g[0] != 1 || g[1] != 1,
          k = this._daylightSavingAdjust(
            a.currentDay
              ? new Date(a.currentYear, a.currentMonth, a.currentDay)
              : new Date(9999, 9, 9)
          ),
          l = this._getMinMaxDate(a, "min"),
          m = this._getMinMaxDate(a, "max"),
          n = a.drawMonth - h,
          o = a.drawYear;
        n < 0 && ((n += 12), o--);
        if (m) {
          var p = this._daylightSavingAdjust(
            new Date(
              m.getFullYear(),
              m.getMonth() - g[0] * g[1] + 1,
              m.getDate()
            )
          );
          p = l && p < l ? l : p;
          while (this._daylightSavingAdjust(new Date(o, n, 1)) > p)
            n--, n < 0 && ((n = 11), o--);
        }
        (a.drawMonth = n), (a.drawYear = o);
        var q = this._get(a, "prevText");
        q = f
          ? this.formatDate(
              q,
              this._daylightSavingAdjust(new Date(o, n - i, 1)),
              this._getFormatConfig(a)
            )
          : q;
        var r = this._canAdjustMonth(a, -1, o, n)
            ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' +
              q +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (c ? "e" : "w") +
              '">' +
              q +
              "</span></a>"
            : e
            ? ""
            : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' +
              q +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (c ? "e" : "w") +
              '">' +
              q +
              "</span></a>",
          s = this._get(a, "nextText");
        s = f
          ? this.formatDate(
              s,
              this._daylightSavingAdjust(new Date(o, n + i, 1)),
              this._getFormatConfig(a)
            )
          : s;
        var t = this._canAdjustMonth(a, 1, o, n)
            ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' +
              s +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (c ? "w" : "e") +
              '">' +
              s +
              "</span></a>"
            : e
            ? ""
            : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' +
              s +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (c ? "w" : "e") +
              '">' +
              s +
              "</span></a>",
          u = this._get(a, "currentText"),
          v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
        u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
        var w = a.inline
            ? ""
            : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
              this._get(a, "closeText") +
              "</button>",
          x = d
            ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
              (c ? w : "") +
              (this._isInRange(a, v)
                ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' +
                  u +
                  "</button>"
                : "") +
              (c ? "" : w) +
              "</div>"
            : "",
          y = parseInt(this._get(a, "firstDay"), 10);
        y = isNaN(y) ? 0 : y;
        var z = this._get(a, "showWeek"),
          A = this._get(a, "dayNames"),
          B = this._get(a, "dayNamesShort"),
          C = this._get(a, "dayNamesMin"),
          D = this._get(a, "monthNames"),
          E = this._get(a, "monthNamesShort"),
          F = this._get(a, "beforeShowDay"),
          G = this._get(a, "showOtherMonths"),
          H = this._get(a, "selectOtherMonths"),
          I = this._get(a, "calculateWeek") || this.iso8601Week,
          J = this._getDefaultDate(a),
          K = "";
        for (var L = 0; L < g[0]; L++) {
          var M = "";
          this.maxRows = 4;
          for (var N = 0; N < g[1]; N++) {
            var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
              P = " ui-corner-all",
              Q = "";
            if (j) {
              Q += '<div class="ui-datepicker-group';
              if (g[1] > 1)
                switch (N) {
                  case 0:
                    (Q += " ui-datepicker-group-first"),
                      (P = " ui-corner-" + (c ? "right" : "left"));
                    break;
                  case g[1] - 1:
                    (Q += " ui-datepicker-group-last"),
                      (P = " ui-corner-" + (c ? "left" : "right"));
                    break;
                  default:
                    (Q += " ui-datepicker-group-middle"), (P = "");
                }
              Q += '">';
            }
            Q +=
              '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
              P +
              '">' +
              (/all|left/.test(P) && L == 0 ? (c ? t : r) : "") +
              (/all|right/.test(P) && L == 0 ? (c ? r : t) : "") +
              this._generateMonthYearHeader(
                a,
                n,
                o,
                l,
                m,
                L > 0 || N > 0,
                D,
                E
              ) +
              '</div><table class="ui-datepicker-calendar"><thead>' +
              "<tr>";
            var R = z
              ? '<th class="ui-datepicker-week-col">' +
                this._get(a, "weekHeader") +
                "</th>"
              : "";
            for (var S = 0; S < 7; S++) {
              var T = (S + y) % 7;
              R +=
                "<th" +
                ((S + y + 6) % 7 >= 5
                  ? ' class="ui-datepicker-week-end"'
                  : "") +
                ">" +
                '<span title="' +
                A[T] +
                '">' +
                C[T] +
                "</span></th>";
            }
            Q += R + "</tr></thead><tbody>";
            var U = this._getDaysInMonth(o, n);
            o == a.selectedYear &&
              n == a.selectedMonth &&
              (a.selectedDay = Math.min(a.selectedDay, U));
            var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
              W = Math.ceil((V + U) / 7),
              X = j ? (this.maxRows > W ? this.maxRows : W) : W;
            this.maxRows = X;
            var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));
            for (var Z = 0; Z < X; Z++) {
              Q += "<tr>";
              var _ = z
                ? '<td class="ui-datepicker-week-col">' +
                  this._get(a, "calculateWeek")(Y) +
                  "</td>"
                : "";
              for (var S = 0; S < 7; S++) {
                var ba = F
                    ? F.apply(a.input ? a.input[0] : null, [Y])
                    : [!0, ""],
                  bb = Y.getMonth() != n,
                  bc = (bb && !H) || !ba[0] || (l && Y < l) || (m && Y > m);
                (_ +=
                  '<td class="' +
                  ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (bb ? " ui-datepicker-other-month" : "") +
                  ((Y.getTime() == O.getTime() &&
                    n == a.selectedMonth &&
                    a._keyEvent) ||
                  (J.getTime() == Y.getTime() && J.getTime() == O.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (bc
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (bb && !G
                    ? ""
                    : " " +
                      ba[1] +
                      (Y.getTime() == k.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (Y.getTime() == b.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  '"' +
                  ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") +
                  (bc
                    ? ""
                    : ' data-handler="selectDay" data-event="click" data-month="' +
                      Y.getMonth() +
                      '" data-year="' +
                      Y.getFullYear() +
                      '"') +
                  ">" +
                  (bb && !G
                    ? "&#xa0;"
                    : bc
                    ? '<span class="ui-state-default">' +
                      Y.getDate() +
                      "</span>"
                    : '<a class="ui-state-default' +
                      (Y.getTime() == b.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (Y.getTime() == k.getTime() ? " ui-state-active" : "") +
                      (bb ? " ui-priority-secondary" : "") +
                      '" href="#">' +
                      Y.getDate() +
                      "</a>") +
                  "</td>"),
                  Y.setDate(Y.getDate() + 1),
                  (Y = this._daylightSavingAdjust(Y));
              }
              Q += _ + "</tr>";
            }
            n++,
              n > 11 && ((n = 0), o++),
              (Q +=
                "</tbody></table>" +
                (j
                  ? "</div>" +
                    (g[0] > 0 && N == g[1] - 1
                      ? '<div class="ui-datepicker-row-break"></div>'
                      : "")
                  : "")),
              (M += Q);
          }
          K += M;
        }
        return (
          (K +=
            x +
            ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline
              ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>'
              : "")),
          (a._keyEvent = !1),
          K
        );
      },
      _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
        var i = this._get(a, "changeMonth"),
          j = this._get(a, "changeYear"),
          k = this._get(a, "showMonthAfterYear"),
          l = '<div class="ui-datepicker-title">',
          m = "";
        if (f || !i)
          m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
        else {
          var n = d && d.getFullYear() == c,
            o = e && e.getFullYear() == c;
          m +=
            '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
          for (var p = 0; p < 12; p++)
            (!n || p >= d.getMonth()) &&
              (!o || p <= e.getMonth()) &&
              (m +=
                '<option value="' +
                p +
                '"' +
                (p == b ? ' selected="selected"' : "") +
                ">" +
                h[p] +
                "</option>");
          m += "</select>";
        }
        k || (l += m + (f || !i || !j ? "&#xa0;" : ""));
        if (!a.yearshtml) {
          a.yearshtml = "";
          if (f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";
          else {
            var q = this._get(a, "yearRange").split(":"),
              r = new Date().getFullYear(),
              s = function (a) {
                var b = a.match(/c[+-].*/)
                  ? c + parseInt(a.substring(1), 10)
                  : a.match(/[+-].*/)
                  ? r + parseInt(a, 10)
                  : parseInt(a, 10);
                return isNaN(b) ? r : b;
              },
              t = s(q[0]),
              u = Math.max(t, s(q[1] || ""));
            (t = d ? Math.max(t, d.getFullYear()) : t),
              (u = e ? Math.min(u, e.getFullYear()) : u),
              (a.yearshtml +=
                '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">');
            for (; t <= u; t++)
              a.yearshtml +=
                '<option value="' +
                t +
                '"' +
                (t == c ? ' selected="selected"' : "") +
                ">" +
                t +
                "</option>";
            (a.yearshtml += "</select>"),
              (l += a.yearshtml),
              (a.yearshtml = null);
          }
        }
        return (
          (l += this._get(a, "yearSuffix")),
          k && (l += (f || !i || !j ? "&#xa0;" : "") + m),
          (l += "</div>"),
          l
        );
      },
      _adjustInstDate: function (a, b, c) {
        var d = a.drawYear + (c == "Y" ? b : 0),
          e = a.drawMonth + (c == "M" ? b : 0),
          f =
            Math.min(a.selectedDay, this._getDaysInMonth(d, e)) +
            (c == "D" ? b : 0),
          g = this._restrictMinMax(
            a,
            this._daylightSavingAdjust(new Date(d, e, f))
          );
        (a.selectedDay = g.getDate()),
          (a.drawMonth = a.selectedMonth = g.getMonth()),
          (a.drawYear = a.selectedYear = g.getFullYear()),
          (c == "M" || c == "Y") && this._notifyChange(a);
      },
      _restrictMinMax: function (a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && b < c ? c : b;
        return (e = d && e > d ? d : e), e;
      },
      _notifyChange: function (a) {
        var b = this._get(a, "onChangeMonthYear");
        b &&
          b.apply(a.input ? a.input[0] : null, [
            a.selectedYear,
            a.selectedMonth + 1,
            a,
          ]);
      },
      _getNumberOfMonths: function (a) {
        var b = this._get(a, "numberOfMonths");
        return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b;
      },
      _getMinMaxDate: function (a, b) {
        return this._determineDate(a, this._get(a, b + "Date"), null);
      },
      _getDaysInMonth: function (a, b) {
        return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
      },
      _getFirstDayOfMonth: function (a, b) {
        return new Date(a, b, 1).getDay();
      },
      _canAdjustMonth: function (a, b, c, d) {
        var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(
            new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1)
          );
        return (
          b < 0 &&
            f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())),
          this._isInRange(a, f)
        );
      },
      _isInRange: function (a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max");
        return (
          (!c || b.getTime() >= c.getTime()) &&
          (!d || b.getTime() <= d.getTime())
        );
      },
      _getFormatConfig: function (a) {
        var b = this._get(a, "shortYearCutoff");
        return (
          (b =
            typeof b != "string"
              ? b
              : (new Date().getFullYear() % 100) + parseInt(b, 10)),
          {
            shortYearCutoff: b,
            dayNamesShort: this._get(a, "dayNamesShort"),
            dayNames: this._get(a, "dayNames"),
            monthNamesShort: this._get(a, "monthNamesShort"),
            monthNames: this._get(a, "monthNames"),
          }
        );
      },
      _formatDate: function (a, b, c, d) {
        b ||
          ((a.currentDay = a.selectedDay),
          (a.currentMonth = a.selectedMonth),
          (a.currentYear = a.selectedYear));
        var e = b
          ? typeof b == "object"
            ? b
            : this._daylightSavingAdjust(new Date(d, c, b))
          : this._daylightSavingAdjust(
              new Date(a.currentYear, a.currentMonth, a.currentDay)
            );
        return this.formatDate(
          this._get(a, "dateFormat"),
          e,
          this._getFormatConfig(a)
        );
      },
    }),
      ($.fn.datepicker = function (a) {
        if (!this.length) return this;
        $.datepicker.initialized ||
          ($(document)
            .mousedown($.datepicker._checkExternalClick)
            .find("body")
            .append($.datepicker.dpDiv),
          ($.datepicker.initialized = !0));
        var b = Array.prototype.slice.call(arguments, 1);
        return typeof a != "string" ||
          (a != "isDisabled" && a != "getDate" && a != "widget")
          ? a == "option" &&
            arguments.length == 2 &&
            typeof arguments[1] == "string"
            ? $.datepicker["_" + a + "Datepicker"].apply(
                $.datepicker,
                [this[0]].concat(b)
              )
            : this.each(function () {
                typeof a == "string"
                  ? $.datepicker["_" + a + "Datepicker"].apply(
                      $.datepicker,
                      [this].concat(b)
                    )
                  : $.datepicker._attachDatepicker(this, a);
              })
          : $.datepicker["_" + a + "Datepicker"].apply(
              $.datepicker,
              [this[0]].concat(b)
            );
      }),
      ($.datepicker = new Datepicker()),
      ($.datepicker.initialized = !1),
      ($.datepicker.uuid = new Date().getTime()),
      ($.datepicker.version = "1.8.23"),
      (window["DP_jQuery_" + dpuuid] = $);
  })(jQuery),
  (function (a, b) {
    var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
      d = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      e = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
      };
    a.widget("ui.dialog", {
      options: {
        autoOpen: !0,
        buttons: {},
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: !1,
        maxWidth: !1,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          collision: "fit",
          using: function (b) {
            var c = a(this).css(b).offset().top;
            c < 0 && a(this).css("top", b.top - c);
          },
        },
        resizable: !0,
        show: null,
        stack: !0,
        title: "",
        width: 300,
        zIndex: 1e3,
      },
      _create: function () {
        (this.originalTitle = this.element.attr("title")),
          typeof this.originalTitle != "string" && (this.originalTitle = ""),
          (this.options.title = this.options.title || this.originalTitle);
        var b = this,
          d = b.options,
          e = d.title || "&#160;",
          f = a.ui.dialog.getTitleId(b.element),
          g = (b.uiDialog = a("<div></div>"))
            .appendTo(document.body)
            .hide()
            .addClass(c + d.dialogClass)
            .css({
              zIndex: d.zIndex,
            })
            .attr("tabIndex", -1)
            .css("outline", 0)
            .keydown(function (c) {
              d.closeOnEscape &&
                !c.isDefaultPrevented() &&
                c.keyCode &&
                c.keyCode === a.ui.keyCode.ESCAPE &&
                (b.close(c), c.preventDefault());
            })
            .attr({
              role: "dialog",
              "aria-labelledby": f,
            })
            .mousedown(function (a) {
              b.moveToTop(!1, a);
            }),
          h = b.element
            .show()
            .removeAttr("title")
            .addClass("ui-dialog-content ui-widget-content")
            .appendTo(g),
          i = (b.uiDialogTitlebar = a("<div></div>"))
            .addClass(
              "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
            )
            .prependTo(g),
          j = a('<a href="#"></a>')
            .addClass("ui-dialog-titlebar-close ui-corner-all")
            .attr("role", "button")
            .hover(
              function () {
                j.addClass("ui-state-hover");
              },
              function () {
                j.removeClass("ui-state-hover");
              }
            )
            .focus(function () {
              j.addClass("ui-state-focus");
            })
            .blur(function () {
              j.removeClass("ui-state-focus");
            })
            .click(function (a) {
              return b.close(a), !1;
            })
            .appendTo(i),
          k = (b.uiDialogTitlebarCloseText = a("<span></span>"))
            .addClass("ui-icon ui-icon-closethick")
            .text(d.closeText)
            .appendTo(j),
          l = a("<span></span>")
            .addClass("ui-dialog-title")
            .attr("id", f)
            .html(e)
            .prependTo(i);
        a.isFunction(d.beforeclose) &&
          !a.isFunction(d.beforeClose) &&
          (d.beforeClose = d.beforeclose),
          i.find("*").add(i).disableSelection(),
          d.draggable && a.fn.draggable && b._makeDraggable(),
          d.resizable && a.fn.resizable && b._makeResizable(),
          b._createButtons(d.buttons),
          (b._isOpen = !1),
          a.fn.bgiframe && g.bgiframe();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      destroy: function () {
        var a = this;
        return (
          a.overlay && a.overlay.destroy(),
          a.uiDialog.hide(),
          a.element
            .unbind(".dialog")
            .removeData("dialog")
            .removeClass("ui-dialog-content ui-widget-content")
            .hide()
            .appendTo("body"),
          a.uiDialog.remove(),
          a.originalTitle && a.element.attr("title", a.originalTitle),
          a
        );
      },
      widget: function () {
        return this.uiDialog;
      },
      close: function (b) {
        var c = this,
          d,
          e;
        if (!1 === c._trigger("beforeClose", b)) return;
        return (
          c.overlay && c.overlay.destroy(),
          c.uiDialog.unbind("keypress.ui-dialog"),
          (c._isOpen = !1),
          c.options.hide
            ? c.uiDialog.hide(c.options.hide, function () {
                c._trigger("close", b);
              })
            : (c.uiDialog.hide(), c._trigger("close", b)),
          a.ui.dialog.overlay.resize(),
          c.options.modal &&
            ((d = 0),
            a(".ui-dialog").each(function () {
              this !== c.uiDialog[0] &&
                ((e = a(this).css("z-index")),
                isNaN(e) || (d = Math.max(d, e)));
            }),
            (a.ui.dialog.maxZ = d)),
          c
        );
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function (b, c) {
        var d = this,
          e = d.options,
          f;
        return (e.modal && !b) || (!e.stack && !e.modal)
          ? d._trigger("focus", c)
          : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex),
            d.overlay &&
              ((a.ui.dialog.maxZ += 1),
              d.overlay.$el.css(
                "z-index",
                (a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)
              )),
            (f = {
              scrollTop: d.element.scrollTop(),
              scrollLeft: d.element.scrollLeft(),
            }),
            (a.ui.dialog.maxZ += 1),
            d.uiDialog.css("z-index", a.ui.dialog.maxZ),
            d.element.attr(f),
            d._trigger("focus", c),
            d);
      },
      open: function () {
        if (this._isOpen) return;
        var b = this,
          c = b.options,
          d = b.uiDialog;
        return (
          (b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null),
          b._size(),
          b._position(c.position),
          d.show(c.show),
          b.moveToTop(!0),
          c.modal &&
            d.bind("keydown.ui-dialog", function (b) {
              if (b.keyCode !== a.ui.keyCode.TAB) return;
              var c = a(":tabbable", this),
                d = c.filter(":first"),
                e = c.filter(":last");
              if (b.target === e[0] && !b.shiftKey) return d.focus(1), !1;
              if (b.target === d[0] && b.shiftKey) return e.focus(1), !1;
            }),
          a(
            b.element
              .find(":tabbable")
              .get()
              .concat(
                d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get())
              )
          )
            .eq(0)
            .focus(),
          (b._isOpen = !0),
          b._trigger("open"),
          b
        );
      },
      _createButtons: function (b) {
        var c = this,
          d = !1,
          e = a("<div></div>").addClass(
            "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
          ),
          f = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
        c.uiDialog.find(".ui-dialog-buttonpane").remove(),
          typeof b == "object" &&
            b !== null &&
            a.each(b, function () {
              return !(d = !0);
            }),
          d &&
            (a.each(b, function (b, d) {
              d = a.isFunction(d)
                ? {
                    click: d,
                    text: b,
                  }
                : d;
              var e = a('<button type="button"></button>')
                .click(function () {
                  d.click.apply(c.element[0], arguments);
                })
                .appendTo(f);
              a.each(d, function (a, b) {
                if (a === "click") return;
                a in e ? e[a](b) : e.attr(a, b);
              }),
                a.fn.button && e.button();
            }),
            e.appendTo(c.uiDialog));
      },
      _makeDraggable: function () {
        function f(a) {
          return {
            position: a.position,
            offset: a.offset,
          };
        }
        var b = this,
          c = b.options,
          d = a(document),
          e;
        b.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (d, g) {
            (e = c.height === "auto" ? "auto" : a(this).height()),
              a(this).height(a(this).height()).addClass("ui-dialog-dragging"),
              b._trigger("dragStart", d, f(g));
          },
          drag: function (a, c) {
            b._trigger("drag", a, f(c));
          },
          stop: function (g, h) {
            (c.position = [
              h.position.left - d.scrollLeft(),
              h.position.top - d.scrollTop(),
            ]),
              a(this).removeClass("ui-dialog-dragging").height(e),
              b._trigger("dragStop", g, f(h)),
              a.ui.dialog.overlay.resize();
          },
        });
      },
      _makeResizable: function (c) {
        function h(a) {
          return {
            originalPosition: a.originalPosition,
            originalSize: a.originalSize,
            position: a.position,
            size: a.size,
          };
        }
        c = c === b ? this.options.resizable : c;
        var d = this,
          e = d.options,
          f = d.uiDialog.css("position"),
          g = typeof c == "string" ? c : "n,e,s,w,se,sw,ne,nw";
        d.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: d.element,
            maxWidth: e.maxWidth,
            maxHeight: e.maxHeight,
            minWidth: e.minWidth,
            minHeight: d._minHeight(),
            handles: g,
            start: function (b, c) {
              a(this).addClass("ui-dialog-resizing"),
                d._trigger("resizeStart", b, h(c));
            },
            resize: function (a, b) {
              d._trigger("resize", a, h(b));
            },
            stop: function (b, c) {
              a(this).removeClass("ui-dialog-resizing"),
                (e.height = a(this).height()),
                (e.width = a(this).width()),
                d._trigger("resizeStop", b, h(c)),
                a.ui.dialog.overlay.resize();
            },
          })
          .css("position", f)
          .find(".ui-resizable-se")
          .addClass("ui-icon ui-icon-grip-diagonal-se");
      },
      _minHeight: function () {
        var a = this.options;
        return a.height === "auto"
          ? a.minHeight
          : Math.min(a.minHeight, a.height);
      },
      _position: function (b) {
        var c = [],
          d = [0, 0],
          e;
        if (b) {
          if (typeof b == "string" || (typeof b == "object" && "0" in b))
            (c = b.split ? b.split(" ") : [b[0], b[1]]),
              c.length === 1 && (c[1] = c[0]),
              a.each(["left", "top"], function (a, b) {
                +c[a] === c[a] && ((d[a] = c[a]), (c[a] = b));
              }),
              (b = {
                my: c.join(" "),
                at: c.join(" "),
                offset: d.join(" "),
              });
          b = a.extend({}, a.ui.dialog.prototype.options.position, b);
        } else b = a.ui.dialog.prototype.options.position;
        (e = this.uiDialog.is(":visible")),
          e || this.uiDialog.show(),
          this.uiDialog
            .css({
              top: 0,
              left: 0,
            })
            .position(
              a.extend(
                {
                  of: window,
                },
                b
              )
            ),
          e || this.uiDialog.hide();
      },
      _setOptions: function (b) {
        var c = this,
          f = {},
          g = !1;
        a.each(b, function (a, b) {
          c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b);
        }),
          g && this._size(),
          this.uiDialog.is(":data(resizable)") &&
            this.uiDialog.resizable("option", f);
      },
      _setOption: function (b, d) {
        var e = this,
          f = e.uiDialog;
        switch (b) {
          case "beforeclose":
            b = "beforeClose";
            break;
          case "buttons":
            e._createButtons(d);
            break;
          case "closeText":
            e.uiDialogTitlebarCloseText.text("" + d);
            break;
          case "dialogClass":
            f.removeClass(e.options.dialogClass).addClass(c + d);
            break;
          case "disabled":
            d
              ? f.addClass("ui-dialog-disabled")
              : f.removeClass("ui-dialog-disabled");
            break;
          case "draggable":
            var g = f.is(":data(draggable)");
            g && !d && f.draggable("destroy"), !g && d && e._makeDraggable();
            break;
          case "position":
            e._position(d);
            break;
          case "resizable":
            var h = f.is(":data(resizable)");
            h && !d && f.resizable("destroy"),
              h && typeof d == "string" && f.resizable("option", "handles", d),
              !h && d !== !1 && e._makeResizable(d);
            break;
          case "title":
            a(".ui-dialog-title", e.uiDialogTitlebar).html(
              "" + (d || "&#160;")
            );
        }
        a.Widget.prototype._setOption.apply(e, arguments);
      },
      _size: function () {
        var b = this.options,
          c,
          d,
          e = this.uiDialog.is(":visible");
        this.element.show().css({
          width: "auto",
          minHeight: 0,
          height: 0,
        }),
          b.minWidth > b.width && (b.width = b.minWidth),
          (c = this.uiDialog
            .css({
              height: "auto",
              width: b.width,
            })
            .height()),
          (d = Math.max(0, b.minHeight - c));
        if (b.height === "auto")
          if (a.support.minHeight)
            this.element.css({
              minHeight: d,
              height: "auto",
            });
          else {
            this.uiDialog.show();
            var f = this.element.css("height", "auto").height();
            e || this.uiDialog.hide(), this.element.height(Math.max(f, d));
          }
        else this.element.height(Math.max(b.height - c, 0));
        this.uiDialog.is(":data(resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
    }),
      a.extend(a.ui.dialog, {
        version: "1.8.23",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (a) {
          var b = a.attr("id");
          return (
            b || ((this.uuid += 1), (b = this.uuid)), "ui-dialog-title-" + b
          );
        },
        overlay: function (b) {
          this.$el = a.ui.dialog.overlay.create(b);
        },
      }),
      a.extend(a.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: a
          .map(
            "focus,mousedown,mouseup,keydown,keypress,click".split(","),
            function (a) {
              return a + ".dialog-overlay";
            }
          )
          .join(" "),
        create: function (b) {
          this.instances.length === 0 &&
            (setTimeout(function () {
              a.ui.dialog.overlay.instances.length &&
                a(document).bind(a.ui.dialog.overlay.events, function (b) {
                  if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ)
                    return !1;
                });
            }, 1),
            a(document).bind("keydown.dialog-overlay", function (c) {
              b.options.closeOnEscape &&
                !c.isDefaultPrevented() &&
                c.keyCode &&
                c.keyCode === a.ui.keyCode.ESCAPE &&
                (b.close(c), c.preventDefault());
            }),
            a(window).bind(
              "resize.dialog-overlay",
              a.ui.dialog.overlay.resize
            ));
          var c = (
            this.oldInstances.pop() ||
            a("<div></div>").addClass("ui-widget-overlay")
          )
            .appendTo(document.body)
            .css({
              width: this.width(),
              height: this.height(),
            });
          return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c;
        },
        destroy: function (b) {
          var c = a.inArray(b, this.instances);
          c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]),
            this.instances.length === 0 &&
              a([document, window]).unbind(".dialog-overlay"),
            b.remove();
          var d = 0;
          a.each(this.instances, function () {
            d = Math.max(d, this.css("z-index"));
          }),
            (this.maxZ = d);
        },
        height: function () {
          var b, c;
          return a.browser.msie && a.browser.version < 7
            ? ((b = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
              )),
              (c = Math.max(
                document.documentElement.offsetHeight,
                document.body.offsetHeight
              )),
              b < c ? a(window).height() + "px" : b + "px")
            : a(document).height() + "px";
        },
        width: function () {
          var b, c;
          return a.browser.msie
            ? ((b = Math.max(
                document.documentElement.scrollWidth,
                document.body.scrollWidth
              )),
              (c = Math.max(
                document.documentElement.offsetWidth,
                document.body.offsetWidth
              )),
              b < c ? a(window).width() + "px" : b + "px")
            : a(document).width() + "px";
        },
        resize: function () {
          var b = a([]);
          a.each(a.ui.dialog.overlay.instances, function () {
            b = b.add(this);
          }),
            b
              .css({
                width: 0,
                height: 0,
              })
              .css({
                width: a.ui.dialog.overlay.width(),
                height: a.ui.dialog.overlay.height(),
              });
        },
      }),
      a.extend(a.ui.dialog.overlay.prototype, {
        destroy: function () {
          a.ui.dialog.overlay.destroy(this.$el);
        },
      });
  })(jQuery),
  (function (a, b) {
    a.ui = a.ui || {};
    var c = /left|center|right/,
      d = /top|center|bottom/,
      e = "center",
      f = {},
      g = a.fn.position,
      h = a.fn.offset;
    (a.fn.position = function (b) {
      if (!b || !b.of) return g.apply(this, arguments);
      b = a.extend({}, b);
      var h = a(b.of),
        i = h[0],
        j = (b.collision || "flip").split(" "),
        k = b.offset ? b.offset.split(" ") : [0, 0],
        l,
        m,
        n;
      return (
        i.nodeType === 9
          ? ((l = h.width()),
            (m = h.height()),
            (n = {
              top: 0,
              left: 0,
            }))
          : i.setTimeout
          ? ((l = h.width()),
            (m = h.height()),
            (n = {
              top: h.scrollTop(),
              left: h.scrollLeft(),
            }))
          : i.preventDefault
          ? ((b.at = "left top"),
            (l = m = 0),
            (n = {
              top: b.of.pageY,
              left: b.of.pageX,
            }))
          : ((l = h.outerWidth()), (m = h.outerHeight()), (n = h.offset())),
        a.each(["my", "at"], function () {
          var a = (b[this] || "").split(" ");
          a.length === 1 &&
            (a = c.test(a[0])
              ? a.concat([e])
              : d.test(a[0])
              ? [e].concat(a)
              : [e, e]),
            (a[0] = c.test(a[0]) ? a[0] : e),
            (a[1] = d.test(a[1]) ? a[1] : e),
            (b[this] = a);
        }),
        j.length === 1 && (j[1] = j[0]),
        (k[0] = parseInt(k[0], 10) || 0),
        k.length === 1 && (k[1] = k[0]),
        (k[1] = parseInt(k[1], 10) || 0),
        b.at[0] === "right"
          ? (n.left += l)
          : b.at[0] === e && (n.left += l / 2),
        b.at[1] === "bottom" ? (n.top += m) : b.at[1] === e && (n.top += m / 2),
        (n.left += k[0]),
        (n.top += k[1]),
        this.each(function () {
          var c = a(this),
            d = c.outerWidth(),
            g = c.outerHeight(),
            h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
            i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
            o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
            p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
            q = a.extend({}, n),
            r;
          b.my[0] === "right"
            ? (q.left -= d)
            : b.my[0] === e && (q.left -= d / 2),
            b.my[1] === "bottom"
              ? (q.top -= g)
              : b.my[1] === e && (q.top -= g / 2),
            f.fractions ||
              ((q.left = Math.round(q.left)), (q.top = Math.round(q.top))),
            (r = {
              left: q.left - h,
              top: q.top - i,
            }),
            a.each(["left", "top"], function (c, e) {
              a.ui.position[j[c]] &&
                a.ui.position[j[c]][e](q, {
                  targetWidth: l,
                  targetHeight: m,
                  elemWidth: d,
                  elemHeight: g,
                  collisionPosition: r,
                  collisionWidth: o,
                  collisionHeight: p,
                  offset: k,
                  my: b.my,
                  at: b.at,
                });
            }),
            a.fn.bgiframe && c.bgiframe(),
            c.offset(
              a.extend(q, {
                using: b.using,
              })
            );
        })
      );
    }),
      (a.ui.position = {
        fit: {
          left: function (b, c) {
            var d = a(window),
              e =
                c.collisionPosition.left +
                c.collisionWidth -
                d.width() -
                d.scrollLeft();
            b.left =
              e > 0
                ? b.left - e
                : Math.max(b.left - c.collisionPosition.left, b.left);
          },
          top: function (b, c) {
            var d = a(window),
              e =
                c.collisionPosition.top +
                c.collisionHeight -
                d.height() -
                d.scrollTop();
            b.top =
              e > 0
                ? b.top - e
                : Math.max(b.top - c.collisionPosition.top, b.top);
          },
        },
        flip: {
          left: function (b, c) {
            if (c.at[0] === e) return;
            var d = a(window),
              f =
                c.collisionPosition.left +
                c.collisionWidth -
                d.width() -
                d.scrollLeft(),
              g =
                c.my[0] === "left"
                  ? -c.elemWidth
                  : c.my[0] === "right"
                  ? c.elemWidth
                  : 0,
              h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
              i = -2 * c.offset[0];
            b.left +=
              c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0;
          },
          top: function (b, c) {
            if (c.at[1] === e) return;
            var d = a(window),
              f =
                c.collisionPosition.top +
                c.collisionHeight -
                d.height() -
                d.scrollTop(),
              g =
                c.my[1] === "top"
                  ? -c.elemHeight
                  : c.my[1] === "bottom"
                  ? c.elemHeight
                  : 0,
              h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
              i = -2 * c.offset[1];
            b.top +=
              c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0;
          },
        },
      }),
      a.offset.setOffset ||
        ((a.offset.setOffset = function (b, c) {
          /static/.test(a.curCSS(b, "position")) &&
            (b.style.position = "relative");
          var d = a(b),
            e = d.offset(),
            f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
            g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
            h = {
              top: c.top - e.top + f,
              left: c.left - e.left + g,
            };
          "using" in c ? c.using.call(b, h) : d.css(h);
        }),
        (a.fn.offset = function (b) {
          var c = this[0];
          return !c || !c.ownerDocument
            ? null
            : b
            ? a.isFunction(b)
              ? this.each(function (c) {
                  a(this).offset(b.call(this, c, a(this).offset()));
                })
              : this.each(function () {
                  a.offset.setOffset(this, b);
                })
            : h.call(this);
        })),
      a.curCSS || (a.curCSS = a.css),
      (function () {
        var b = document.getElementsByTagName("body")[0],
          c = document.createElement("div"),
          d,
          e,
          g,
          h,
          i;
        (d = document.createElement(b ? "div" : "body")),
          (g = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none",
          }),
          b &&
            a.extend(g, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px",
            });
        for (var j in g) d.style[j] = g[j];
        d.appendChild(c),
          (e = b || document.documentElement),
          e.insertBefore(d, e.firstChild),
          (c.style.cssText =
            "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;"),
          (h = a(c)
            .offset(function (a, b) {
              return b;
            })
            .offset()),
          (d.innerHTML = ""),
          e.removeChild(d),
          (i = h.top + h.left + (b ? 2e3 : 0)),
          (f.fractions = i > 21 && i < 22);
      })();
  })(jQuery),
  (function (a, b) {
    a.widget("ui.progressbar", {
      options: {
        value: 0,
        max: 100,
      },
      min: 0,
      _create: function () {
        this.element
          .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "progressbar",
            "aria-valuemin": this.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._value(),
          }),
          (this.valueDiv = a(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          (this.oldValue = this._value()),
          this._refreshValue();
      },
      destroy: function () {
        this.element
          .removeClass(
            "ui-progressbar ui-widget ui-widget-content ui-corner-all"
          )
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.valueDiv.remove(),
          a.Widget.prototype.destroy.apply(this, arguments);
      },
      value: function (a) {
        return a === b ? this._value() : (this._setOption("value", a), this);
      },
      _setOption: function (b, c) {
        b === "value" &&
          ((this.options.value = c),
          this._refreshValue(),
          this._value() === this.options.max && this._trigger("complete")),
          a.Widget.prototype._setOption.apply(this, arguments);
      },
      _value: function () {
        var a = this.options.value;
        return (
          typeof a != "number" && (a = 0),
          Math.min(this.options.max, Math.max(this.min, a))
        );
      },
      _percentage: function () {
        return (100 * this._value()) / this.options.max;
      },
      _refreshValue: function () {
        var a = this.value(),
          b = this._percentage();
        this.oldValue !== a && ((this.oldValue = a), this._trigger("change")),
          this.valueDiv
            .toggle(a > this.min)
            .toggleClass("ui-corner-right", a === this.options.max)
            .width(b.toFixed(0) + "%"),
          this.element.attr("aria-valuenow", a);
      },
    }),
      a.extend(a.ui.progressbar, {
        version: "1.8.23",
      });
  })(jQuery),
  (function (a, b) {
    var c = 5;
    a.widget("ui.slider", a.ui.mouse, {
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
      },
      _create: function () {
        var b = this,
          d = this.options,
          e = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          f =
            "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          g = (d.values && d.values.length) || 1,
          h = [];
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget" +
              " ui-widget-content" +
              " ui-corner-all" +
              (d.disabled ? " ui-slider-disabled ui-disabled" : "")
          ),
          (this.range = a([])),
          d.range &&
            (d.range === !0 &&
              (d.values || (d.values = [this._valueMin(), this._valueMin()]),
              d.values.length &&
                d.values.length !== 2 &&
                (d.values = [d.values[0], d.values[0]])),
            (this.range = a("<div></div>")
              .appendTo(this.element)
              .addClass(
                "ui-slider-range ui-widget-header" +
                  (d.range === "min" || d.range === "max"
                    ? " ui-slider-range-" + d.range
                    : "")
              )));
        for (var i = e.length; i < g; i += 1) h.push(f);
        (this.handles = e.add(a(h.join("")).appendTo(b.element))),
          (this.handle = this.handles.eq(0)),
          this.handles
            .add(this.range)
            .filter("a")
            .click(function (a) {
              a.preventDefault();
            })
            .hover(
              function () {
                d.disabled || a(this).addClass("ui-state-hover");
              },
              function () {
                a(this).removeClass("ui-state-hover");
              }
            )
            .focus(function () {
              d.disabled
                ? a(this).blur()
                : (a(".ui-slider .ui-state-focus").removeClass(
                    "ui-state-focus"
                  ),
                  a(this).addClass("ui-state-focus"));
            })
            .blur(function () {
              a(this).removeClass("ui-state-focus");
            }),
          this.handles.each(function (b) {
            a(this).data("index.ui-slider-handle", b);
          }),
          this.handles
            .keydown(function (d) {
              var e = a(this).data("index.ui-slider-handle"),
                f,
                g,
                h,
                i;
              if (b.options.disabled) return;
              switch (d.keyCode) {
                case a.ui.keyCode.HOME:
                case a.ui.keyCode.END:
                case a.ui.keyCode.PAGE_UP:
                case a.ui.keyCode.PAGE_DOWN:
                case a.ui.keyCode.UP:
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                case a.ui.keyCode.LEFT:
                  d.preventDefault();
                  if (!b._keySliding) {
                    (b._keySliding = !0),
                      a(this).addClass("ui-state-active"),
                      (f = b._start(d, e));
                    if (f === !1) return;
                  }
              }
              (i = b.options.step),
                b.options.values && b.options.values.length
                  ? (g = h = b.values(e))
                  : (g = h = b.value());
              switch (d.keyCode) {
                case a.ui.keyCode.HOME:
                  h = b._valueMin();
                  break;
                case a.ui.keyCode.END:
                  h = b._valueMax();
                  break;
                case a.ui.keyCode.PAGE_UP:
                  h = b._trimAlignValue(
                    g + (b._valueMax() - b._valueMin()) / c
                  );
                  break;
                case a.ui.keyCode.PAGE_DOWN:
                  h = b._trimAlignValue(
                    g - (b._valueMax() - b._valueMin()) / c
                  );
                  break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.RIGHT:
                  if (g === b._valueMax()) return;
                  h = b._trimAlignValue(g + i);
                  break;
                case a.ui.keyCode.DOWN:
                case a.ui.keyCode.LEFT:
                  if (g === b._valueMin()) return;
                  h = b._trimAlignValue(g - i);
              }
              b._slide(d, e, h);
            })
            .keyup(function (c) {
              var d = a(this).data("index.ui-slider-handle");
              b._keySliding &&
                ((b._keySliding = !1),
                b._stop(c, d),
                b._change(c, d),
                a(this).removeClass("ui-state-active"));
            }),
          this._refreshValue(),
          (this._animateOff = !1);
      },
      destroy: function () {
        return (
          this.handles.remove(),
          this.range.remove(),
          this.element
            .removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"
            )
            .removeData("slider")
            .unbind(".slider"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseCapture: function (b) {
        var c = this.options,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l;
        return c.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (d = {
              x: b.pageX,
              y: b.pageY,
            }),
            (e = this._normValueFromMouse(d)),
            (f = this._valueMax() - this._valueMin() + 1),
            (h = this),
            this.handles.each(function (b) {
              var c = Math.abs(e - h.values(b));
              f > c && ((f = c), (g = a(this)), (i = b));
            }),
            c.range === !0 &&
              this.values(1) === c.min &&
              ((i += 1), (g = a(this.handles[i]))),
            (j = this._start(b, i)),
            j === !1
              ? !1
              : ((this._mouseSliding = !0),
                (h._handleIndex = i),
                g.addClass("ui-state-active").focus(),
                (k = g.offset()),
                (l = !a(b.target).parents().andSelf().is(".ui-slider-handle")),
                (this._clickOffset = l
                  ? {
                      left: 0,
                      top: 0,
                    }
                  : {
                      left: b.pageX - k.left - g.width() / 2,
                      top:
                        b.pageY -
                        k.top -
                        g.height() / 2 -
                        (parseInt(g.css("borderTopWidth"), 10) || 0) -
                        (parseInt(g.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(g.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(b, i, e),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function (a) {
        return !0;
      },
      _mouseDrag: function (a) {
        var b = {
            x: a.pageX,
            y: a.pageY,
          },
          c = this._normValueFromMouse(b);
        return this._slide(a, this._handleIndex, c), !1;
      },
      _mouseStop: function (a) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(a, this._handleIndex),
          this._change(a, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          this.options.orientation === "vertical" ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (a) {
        var b, c, d, e, f;
        return (
          this.orientation === "horizontal"
            ? ((b = this.elementSize.width),
              (c =
                a.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((b = this.elementSize.height),
              (c =
                a.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (d = c / b),
          d > 1 && (d = 1),
          d < 0 && (d = 0),
          this.orientation === "vertical" && (d = 1 - d),
          (e = this._valueMax() - this._valueMin()),
          (f = this._valueMin() + d * e),
          this._trimAlignValue(f)
        );
      },
      _start: function (a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value(),
        };
        return (
          this.options.values &&
            this.options.values.length &&
            ((c.value = this.values(b)), (c.values = this.values())),
          this._trigger("start", a, c)
        );
      },
      _slide: function (a, b, c) {
        var d, e, f;
        this.options.values && this.options.values.length
          ? ((d = this.values(b ? 0 : 1)),
            this.options.values.length === 2 &&
              this.options.range === !0 &&
              ((b === 0 && c > d) || (b === 1 && c < d)) &&
              (c = d),
            c !== this.values(b) &&
              ((e = this.values()),
              (e[b] = c),
              (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e,
              })),
              (d = this.values(b ? 0 : 1)),
              f !== !1 && this.values(b, c, !0)))
          : c !== this.value() &&
            ((f = this._trigger("slide", a, {
              handle: this.handles[b],
              value: c,
            })),
            f !== !1 && this.value(c));
      },
      _stop: function (a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value(),
        };
        this.options.values &&
          this.options.values.length &&
          ((c.value = this.values(b)), (c.values = this.values())),
          this._trigger("stop", a, c);
      },
      _change: function (a, b) {
        if (!this._keySliding && !this._mouseSliding) {
          var c = {
            handle: this.handles[b],
            value: this.value(),
          };
          this.options.values &&
            this.options.values.length &&
            ((c.value = this.values(b)), (c.values = this.values())),
            this._trigger("change", a, c);
        }
      },
      value: function (a) {
        if (arguments.length) {
          (this.options.value = this._trimAlignValue(a)),
            this._refreshValue(),
            this._change(null, 0);
          return;
        }
        return this._value();
      },
      values: function (b, c) {
        var d, e, f;
        if (arguments.length > 1) {
          (this.options.values[b] = this._trimAlignValue(c)),
            this._refreshValue(),
            this._change(null, b);
          return;
        }
        if (!arguments.length) return this._values();
        if (!a.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(b)
            : this.value();
        (d = this.options.values), (e = arguments[0]);
        for (f = 0; f < d.length; f += 1)
          (d[f] = this._trimAlignValue(e[f])), this._change(null, f);
        this._refreshValue();
      },
      _setOption: function (b, c) {
        var d,
          e = 0;
        a.isArray(this.options.values) && (e = this.options.values.length),
          a.Widget.prototype._setOption.apply(this, arguments);
        switch (b) {
          case "disabled":
            c
              ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.propAttr("disabled", !0),
                this.element.addClass("ui-disabled"))
              : (this.handles.propAttr("disabled", !1),
                this.element.removeClass("ui-disabled"));
            break;
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue();
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            (this._animateOff = !0), this._refreshValue();
            for (d = 0; d < e; d += 1) this._change(null, d);
            this._animateOff = !1;
        }
      },
      _value: function () {
        var a = this.options.value;
        return (a = this._trimAlignValue(a)), a;
      },
      _values: function (a) {
        var b, c, d;
        if (arguments.length)
          return (b = this.options.values[a]), (b = this._trimAlignValue(b)), b;
        c = this.options.values.slice();
        for (d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
        return c;
      },
      _trimAlignValue: function (a) {
        if (a <= this._valueMin()) return this._valueMin();
        if (a >= this._valueMax()) return this._valueMax();
        var b = this.options.step > 0 ? this.options.step : 1,
          c = (a - this._valueMin()) % b,
          d = a - c;
        return (
          Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b),
          parseFloat(d.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var b = this.options.range,
          c = this.options,
          d = this,
          e = this._animateOff ? !1 : c.animate,
          f,
          g = {},
          h,
          i,
          j,
          k;
        this.options.values && this.options.values.length
          ? this.handles.each(function (b, i) {
              (f =
                ((d.values(b) - d._valueMin()) /
                  (d._valueMax() - d._valueMin())) *
                100),
                (g[d.orientation === "horizontal" ? "left" : "bottom"] =
                  f + "%"),
                a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate),
                d.options.range === !0 &&
                  (d.orientation === "horizontal"
                    ? (b === 0 &&
                        d.range.stop(1, 1)[e ? "animate" : "css"](
                          {
                            left: f + "%",
                          },
                          c.animate
                        ),
                      b === 1 &&
                        d.range[e ? "animate" : "css"](
                          {
                            width: f - h + "%",
                          },
                          {
                            queue: !1,
                            duration: c.animate,
                          }
                        ))
                    : (b === 0 &&
                        d.range.stop(1, 1)[e ? "animate" : "css"](
                          {
                            bottom: f + "%",
                          },
                          c.animate
                        ),
                      b === 1 &&
                        d.range[e ? "animate" : "css"](
                          {
                            height: f - h + "%",
                          },
                          {
                            queue: !1,
                            duration: c.animate,
                          }
                        ))),
                (h = f);
            })
          : ((i = this.value()),
            (j = this._valueMin()),
            (k = this._valueMax()),
            (f = k !== j ? ((i - j) / (k - j)) * 100 : 0),
            (g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%"),
            this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate),
            b === "min" &&
              this.orientation === "horizontal" &&
              this.range.stop(1, 1)[e ? "animate" : "css"](
                {
                  width: f + "%",
                },
                c.animate
              ),
            b === "max" &&
              this.orientation === "horizontal" &&
              this.range[e ? "animate" : "css"](
                {
                  width: 100 - f + "%",
                },
                {
                  queue: !1,
                  duration: c.animate,
                }
              ),
            b === "min" &&
              this.orientation === "vertical" &&
              this.range.stop(1, 1)[e ? "animate" : "css"](
                {
                  height: f + "%",
                },
                c.animate
              ),
            b === "max" &&
              this.orientation === "vertical" &&
              this.range[e ? "animate" : "css"](
                {
                  height: 100 - f + "%",
                },
                {
                  queue: !1,
                  duration: c.animate,
                }
              ));
      },
    }),
      a.extend(a.ui.slider, {
        version: "1.8.23",
      });
  })(jQuery),
  (function (a, b) {
    function e() {
      return ++c;
    }
    function f() {
      return ++d;
    }
    var c = 0,
      d = 0;
    a.widget("ui.tabs", {
      options: {
        add: null,
        ajaxOptions: null,
        cache: !1,
        cookie: null,
        collapsible: !1,
        disable: null,
        disabled: [],
        enable: null,
        event: "click",
        fx: null,
        idPrefix: "ui-tabs-",
        load: null,
        panelTemplate: "<div></div>",
        remove: null,
        select: null,
        show: null,
        spinner: "<em>Loading&#8230;</em>",
        tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>",
      },
      _create: function () {
        this._tabify(!0);
      },
      _setOption: function (a, b) {
        if (a == "selected") {
          if (this.options.collapsible && b == this.options.selected) return;
          this.select(b);
        } else (this.options[a] = b), this._tabify();
      },
      _tabId: function (a) {
        return (
          (a.title &&
            a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "")) ||
          this.options.idPrefix + e()
        );
      },
      _sanitizeSelector: function (a) {
        return a.replace(/:/g, "\\:");
      },
      _cookie: function () {
        var b =
          this.cookie ||
          (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
        return a.cookie.apply(null, [b].concat(a.makeArray(arguments)));
      },
      _ui: function (a, b) {
        return {
          tab: a,
          panel: b,
          index: this.anchors.index(a),
        };
      },
      _cleanup: function () {
        this.lis
          .filter(".ui-state-processing")
          .removeClass("ui-state-processing")
          .find("span:data(label.tabs)")
          .each(function () {
            var b = a(this);
            b.html(b.data("label.tabs")).removeData("label.tabs");
          });
      },
      _tabify: function (c) {
        function m(b, c) {
          b.css("display", ""),
            !a.support.opacity &&
              c.opacity &&
              b[0].style.removeAttribute("filter");
        }
        var d = this,
          e = this.options,
          f = /^#.+/;
        (this.list = this.element.find("ol,ul").eq(0)),
          (this.lis = a(" > li:has(a[href])", this.list)),
          (this.anchors = this.lis.map(function () {
            return a("a", this)[0];
          })),
          (this.panels = a([])),
          this.anchors.each(function (b, c) {
            var g = a(c).attr("href"),
              h = g.split("#")[0],
              i;
            h &&
              (h === location.toString().split("#")[0] ||
                ((i = a("base")[0]) && h === i.href)) &&
              ((g = c.hash), (c.href = g));
            if (f.test(g))
              d.panels = d.panels.add(d.element.find(d._sanitizeSelector(g)));
            else if (g && g !== "#") {
              a.data(c, "href.tabs", g),
                a.data(c, "load.tabs", g.replace(/#.*$/, ""));
              var j = d._tabId(c);
              c.href = "#" + j;
              var k = d.element.find("#" + j);
              k.length ||
                ((k = a(e.panelTemplate)
                  .attr("id", j)
                  .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
                  .insertAfter(d.panels[b - 1] || d.list)),
                k.data("destroy.tabs", !0)),
                (d.panels = d.panels.add(k));
            } else e.disabled.push(b);
          }),
          c
            ? (this.element.addClass(
                "ui-tabs ui-widget ui-widget-content ui-corner-all"
              ),
              this.list.addClass(
                "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
              ),
              this.lis.addClass("ui-state-default ui-corner-top"),
              this.panels.addClass(
                "ui-tabs-panel ui-widget-content ui-corner-bottom"
              ),
              e.selected === b
                ? (location.hash &&
                    this.anchors.each(function (a, b) {
                      if (b.hash == location.hash) return (e.selected = a), !1;
                    }),
                  typeof e.selected != "number" &&
                    e.cookie &&
                    (e.selected = parseInt(d._cookie(), 10)),
                  typeof e.selected != "number" &&
                    this.lis.filter(".ui-tabs-selected").length &&
                    (e.selected = this.lis.index(
                      this.lis.filter(".ui-tabs-selected")
                    )),
                  (e.selected = e.selected || (this.lis.length ? 0 : -1)))
                : e.selected === null && (e.selected = -1),
              (e.selected =
                (e.selected >= 0 && this.anchors[e.selected]) || e.selected < 0
                  ? e.selected
                  : 0),
              (e.disabled = a
                .unique(
                  e.disabled.concat(
                    a.map(
                      this.lis.filter(".ui-state-disabled"),
                      function (a, b) {
                        return d.lis.index(a);
                      }
                    )
                  )
                )
                .sort()),
              a.inArray(e.selected, e.disabled) != -1 &&
                e.disabled.splice(a.inArray(e.selected, e.disabled), 1),
              this.panels.addClass("ui-tabs-hide"),
              this.lis.removeClass("ui-tabs-selected ui-state-active"),
              e.selected >= 0 &&
                this.anchors.length &&
                (d.element
                  .find(d._sanitizeSelector(d.anchors[e.selected].hash))
                  .removeClass("ui-tabs-hide"),
                this.lis
                  .eq(e.selected)
                  .addClass("ui-tabs-selected ui-state-active"),
                d.element.queue("tabs", function () {
                  d._trigger(
                    "show",
                    null,
                    d._ui(
                      d.anchors[e.selected],
                      d.element.find(
                        d._sanitizeSelector(d.anchors[e.selected].hash)
                      )[0]
                    )
                  );
                }),
                this.load(e.selected)),
              a(window).bind("unload", function () {
                d.lis.add(d.anchors).unbind(".tabs"),
                  (d.lis = d.anchors = d.panels = null);
              }))
            : (e.selected = this.lis.index(
                this.lis.filter(".ui-tabs-selected")
              )),
          this.element[e.collapsible ? "addClass" : "removeClass"](
            "ui-tabs-collapsible"
          ),
          e.cookie && this._cookie(e.selected, e.cookie);
        for (var g = 0, h; (h = this.lis[g]); g++)
          a(h)[
            a.inArray(g, e.disabled) != -1 && !a(h).hasClass("ui-tabs-selected")
              ? "addClass"
              : "removeClass"
          ]("ui-state-disabled");
        e.cache === !1 && this.anchors.removeData("cache.tabs"),
          this.lis.add(this.anchors).unbind(".tabs");
        if (e.event !== "mouseover") {
          var i = function (a, b) {
              b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a);
            },
            j = function (a, b) {
              b.removeClass("ui-state-" + a);
            };
          this.lis.bind("mouseover.tabs", function () {
            i("hover", a(this));
          }),
            this.lis.bind("mouseout.tabs", function () {
              j("hover", a(this));
            }),
            this.anchors.bind("focus.tabs", function () {
              i("focus", a(this).closest("li"));
            }),
            this.anchors.bind("blur.tabs", function () {
              j("focus", a(this).closest("li"));
            });
        }
        var k, l;
        e.fx &&
          (a.isArray(e.fx) ? ((k = e.fx[0]), (l = e.fx[1])) : (k = l = e.fx));
        var n = l
            ? function (b, c) {
                a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),
                  c
                    .hide()
                    .removeClass("ui-tabs-hide")
                    .animate(l, l.duration || "normal", function () {
                      m(c, l), d._trigger("show", null, d._ui(b, c[0]));
                    });
              }
            : function (b, c) {
                a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),
                  c.removeClass("ui-tabs-hide"),
                  d._trigger("show", null, d._ui(b, c[0]));
              },
          o = k
            ? function (a, b) {
                b.animate(k, k.duration || "normal", function () {
                  d.lis.removeClass("ui-tabs-selected ui-state-active"),
                    b.addClass("ui-tabs-hide"),
                    m(b, k),
                    d.element.dequeue("tabs");
                });
              }
            : function (a, b, c) {
                d.lis.removeClass("ui-tabs-selected ui-state-active"),
                  b.addClass("ui-tabs-hide"),
                  d.element.dequeue("tabs");
              };
        this.anchors.bind(e.event + ".tabs", function () {
          var b = this,
            c = a(b).closest("li"),
            f = d.panels.filter(":not(.ui-tabs-hide)"),
            g = d.element.find(d._sanitizeSelector(b.hash));
          if (
            (c.hasClass("ui-tabs-selected") && !e.collapsible) ||
            c.hasClass("ui-state-disabled") ||
            c.hasClass("ui-state-processing") ||
            d.panels.filter(":animated").length ||
            d._trigger("select", null, d._ui(this, g[0])) === !1
          )
            return this.blur(), !1;
          (e.selected = d.anchors.index(this)), d.abort();
          if (e.collapsible) {
            if (c.hasClass("ui-tabs-selected"))
              return (
                (e.selected = -1),
                e.cookie && d._cookie(e.selected, e.cookie),
                d.element
                  .queue("tabs", function () {
                    o(b, f);
                  })
                  .dequeue("tabs"),
                this.blur(),
                !1
              );
            if (!f.length)
              return (
                e.cookie && d._cookie(e.selected, e.cookie),
                d.element.queue("tabs", function () {
                  n(b, g);
                }),
                d.load(d.anchors.index(this)),
                this.blur(),
                !1
              );
          }
          e.cookie && d._cookie(e.selected, e.cookie);
          if (g.length)
            f.length &&
              d.element.queue("tabs", function () {
                o(b, f);
              }),
              d.element.queue("tabs", function () {
                n(b, g);
              }),
              d.load(d.anchors.index(this));
          else throw "jQuery UI Tabs: Mismatching fragment identifier.";
          a.browser.msie && this.blur();
        }),
          this.anchors.bind("click.tabs", function () {
            return !1;
          });
      },
      _getIndex: function (a) {
        return (
          typeof a == "string" &&
            (a = this.anchors.index(
              this.anchors.filter("[href$='" + a + "']")
            )),
          a
        );
      },
      destroy: function () {
        var b = this.options;
        return (
          this.abort(),
          this.element
            .unbind(".tabs")
            .removeClass(
              "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
            )
            .removeData("tabs"),
          this.list.removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          ),
          this.anchors.each(function () {
            var b = a.data(this, "href.tabs");
            b && (this.href = b);
            var c = a(this).unbind(".tabs");
            a.each(["href", "load", "cache"], function (a, b) {
              c.removeData(b + ".tabs");
            });
          }),
          this.lis
            .unbind(".tabs")
            .add(this.panels)
            .each(function () {
              a.data(this, "destroy.tabs")
                ? a(this).remove()
                : a(this).removeClass(
                    [
                      "ui-state-default",
                      "ui-corner-top",
                      "ui-tabs-selected",
                      "ui-state-active",
                      "ui-state-hover",
                      "ui-state-focus",
                      "ui-state-disabled",
                      "ui-tabs-panel",
                      "ui-widget-content",
                      "ui-corner-bottom",
                      "ui-tabs-hide",
                    ].join(" ")
                  );
            }),
          b.cookie && this._cookie(null, b.cookie),
          this
        );
      },
      add: function (c, d, e) {
        e === b && (e = this.anchors.length);
        var f = this,
          g = this.options,
          h = a(
            g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)
          ),
          i = c.indexOf("#") ? this._tabId(a("a", h)[0]) : c.replace("#", "");
        h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
        var j = f.element.find("#" + i);
        return (
          j.length ||
            (j = a(g.panelTemplate).attr("id", i).data("destroy.tabs", !0)),
          j.addClass(
            "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"
          ),
          e >= this.lis.length
            ? (h.appendTo(this.list), j.appendTo(this.list[0].parentNode))
            : (h.insertBefore(this.lis[e]), j.insertBefore(this.panels[e])),
          (g.disabled = a.map(g.disabled, function (a, b) {
            return a >= e ? ++a : a;
          })),
          this._tabify(),
          this.anchors.length == 1 &&
            ((g.selected = 0),
            h.addClass("ui-tabs-selected ui-state-active"),
            j.removeClass("ui-tabs-hide"),
            this.element.queue("tabs", function () {
              f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]));
            }),
            this.load(0)),
          this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])),
          this
        );
      },
      remove: function (b) {
        b = this._getIndex(b);
        var c = this.options,
          d = this.lis.eq(b).remove(),
          e = this.panels.eq(b).remove();
        return (
          d.hasClass("ui-tabs-selected") &&
            this.anchors.length > 1 &&
            this.select(b + (b + 1 < this.anchors.length ? 1 : -1)),
          (c.disabled = a.map(
            a.grep(c.disabled, function (a, c) {
              return a != b;
            }),
            function (a, c) {
              return a >= b ? --a : a;
            }
          )),
          this._tabify(),
          this._trigger("remove", null, this._ui(d.find("a")[0], e[0])),
          this
        );
      },
      enable: function (b) {
        b = this._getIndex(b);
        var c = this.options;
        if (a.inArray(b, c.disabled) == -1) return;
        return (
          this.lis.eq(b).removeClass("ui-state-disabled"),
          (c.disabled = a.grep(c.disabled, function (a, c) {
            return a != b;
          })),
          this._trigger(
            "enable",
            null,
            this._ui(this.anchors[b], this.panels[b])
          ),
          this
        );
      },
      disable: function (a) {
        a = this._getIndex(a);
        var b = this,
          c = this.options;
        return (
          a != c.selected &&
            (this.lis.eq(a).addClass("ui-state-disabled"),
            c.disabled.push(a),
            c.disabled.sort(),
            this._trigger(
              "disable",
              null,
              this._ui(this.anchors[a], this.panels[a])
            )),
          this
        );
      },
      select: function (a) {
        a = this._getIndex(a);
        if (a == -1)
          if (this.options.collapsible && this.options.selected != -1)
            a = this.options.selected;
          else return this;
        return this.anchors.eq(a).trigger(this.options.event + ".tabs"), this;
      },
      load: function (b) {
        b = this._getIndex(b);
        var c = this,
          d = this.options,
          e = this.anchors.eq(b)[0],
          f = a.data(e, "load.tabs");
        this.abort();
        if (
          !f ||
          (this.element.queue("tabs").length !== 0 && a.data(e, "cache.tabs"))
        ) {
          this.element.dequeue("tabs");
          return;
        }
        this.lis.eq(b).addClass("ui-state-processing");
        if (d.spinner) {
          var g = a("span", e);
          g.data("label.tabs", g.html()).html(d.spinner);
        }
        return (
          (this.xhr = a.ajax(
            a.extend({}, d.ajaxOptions, {
              url: f,
              success: function (f, g) {
                c.element.find(c._sanitizeSelector(e.hash)).html(f),
                  c._cleanup(),
                  d.cache && a.data(e, "cache.tabs", !0),
                  c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                try {
                  d.ajaxOptions.success(f, g);
                } catch (h) {}
              },
              error: function (a, f, g) {
                c._cleanup(),
                  c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                try {
                  d.ajaxOptions.error(a, f, b, e);
                } catch (g) {}
              },
            })
          )),
          c.element.dequeue("tabs"),
          this
        );
      },
      abort: function () {
        return (
          this.element.queue([]),
          this.panels.stop(!1, !0),
          this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
          this.xhr && (this.xhr.abort(), delete this.xhr),
          this._cleanup(),
          this
        );
      },
      url: function (a, b) {
        return (
          this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b), this
        );
      },
      length: function () {
        return this.anchors.length;
      },
    }),
      a.extend(a.ui.tabs, {
        version: "1.8.23",
      }),
      a.extend(a.ui.tabs.prototype, {
        rotation: null,
        rotate: function (a, b) {
          var c = this,
            d = this.options,
            e =
              c._rotate ||
              (c._rotate = function (b) {
                clearTimeout(c.rotation),
                  (c.rotation = setTimeout(function () {
                    var a = d.selected;
                    c.select(++a < c.anchors.length ? a : 0);
                  }, a)),
                  b && b.stopPropagation();
              }),
            f =
              c._unrotate ||
              (c._unrotate = b
                ? function (a) {
                    e();
                  }
                : function (a) {
                    a.clientX && c.rotate(null);
                  });
          return (
            a
              ? (this.element.bind("tabsshow", e),
                this.anchors.bind(d.event + ".tabs", f),
                e())
              : (clearTimeout(c.rotation),
                this.element.unbind("tabsshow", e),
                this.anchors.unbind(d.event + ".tabs", f),
                delete this._rotate,
                delete this._unrotate),
            this
          );
        },
      });
  })(jQuery);

/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {
  // Detect touch support
  $.support.touch = "ontouchend" in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
    _mouseInit = mouseProto._mouseInit,
    touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent(event, simulatedType) {
    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
      simulatedEvent = document.createEvent("MouseEvents");

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType, // type
      true, // bubbles
      true, // cancelable
      window, // view
      1, // detail
      touch.screenX, // screenX
      touch.screenY, // screenY
      touch.clientX, // clientX
      touch.clientY, // clientY
      false, // ctrlKey
      false, // altKey
      false, // shiftKey
      false, // metaKey
      0, // button
      null // relatedTarget
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {
    var self = this;

    // Ignore the event if another widget is already being handled
    if (
      touchHandled ||
      !self._mouseCapture(event.originalEvent.changedTouches[0])
    ) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, "mouseover");

    // Simulate the mousemove event
    simulateMouseEvent(event, "mousemove");

    // Simulate the mousedown event
    simulateMouseEvent(event, "mousedown");
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, "mousemove");
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, "mouseup");

    // Simulate the mouseout event
    simulateMouseEvent(event, "mouseout");

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, "click");
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element
      .bind("touchstart", $.proxy(self, "_touchStart"))
      .bind("touchmove", $.proxy(self, "_touchMove"))
      .bind("touchend", $.proxy(self, "_touchEnd"));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };
})(jQuery);
if (!hs) {
  var hs = {
    lang: {
      cssDirection: "ltr",
      loadingText: "Loading...",
      loadingTitle: "Click to cancel",
      focusTitle: "Click to bring to front",
      fullExpandTitle: "Expand to actual size (f)",
      creditsText: "www.tienganh123.com",
      creditsTitle: "TiengAnh123",
      previousText: "Previous",
      nextText: "Next",
      moveText: "Move",
      closeText: "Close",
      closeTitle: "Close (esc)",
      resizeTitle: "Resize",
      playText: "Play",
      playTitle: "Play slideshow (spacebar)",
      pauseText: "Pause",
      pauseTitle: "Pause slideshow (spacebar)",
      previousTitle: "Previous (arrow left)",
      nextTitle: "Next (arrow right)",
      moveTitle: "Move",
      fullExpandText: "1:1",
      restoreTitle:
        "Click to close image, click and drag to move. Use arrow keys for next and previous.",
    },
    graphicsDir: "https://data.tienganh123.com/static/js/highslide/graphics/",
    expandCursor: "zoomin.cur",
    restoreCursor: "zoomout.cur",
    expandDuration: 250,
    restoreDuration: 250,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    zIndexCounter: 1001,
    loadingOpacity: 0.75,
    allowMultipleInstances: true,
    numberOfImagesToPreload: 5,
    outlineWhileAnimating: 2,
    outlineStartOffset: 3,
    padToMinWidth: false,
    fullExpandPosition: "bottom right",
    fullExpandOpacity: 1,
    showCredits: true,
    creditsHref: "//www.tienganh123.com/",
    creditsTarget: "_self",
    enableKeyListener: true,
    openerTagNames: ["a"],
    allowWidthReduction: false,
    allowHeightReduction: true,
    preserveContent: true,
    objectLoadTime: "before",
    cacheAjax: true,
    dragByHeading: true,
    minWidth: 200,
    minHeight: 200,
    allowSizeReduction: true,
    outlineType: "drop-shadow",
    skin: {
      contentWrapper:
        '<div class="highslide-header"><ul>' +
        '<li class="highslide-previous">' +
        '<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">' +
        "<span>{hs.lang.previousText}</span></a>" +
        "</li>" +
        '<li class="highslide-next">' +
        '<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">' +
        "<span>{hs.lang.nextText}</span></a>" +
        "</li>" +
        '<li class="highslide-move">' +
        '<a href="#" title="{hs.lang.moveTitle}" onclick="return false">' +
        "<span>{hs.lang.moveText}</span></a>" +
        "</li>" +
        '<li class="highslide-close">' +
        '<a href="#" title="{hs.lang.closeTitle}" onclick="return close_popup(this)">' +
        "<span>{hs.lang.closeText}</span></a>" +
        "</li>" +
        "</ul></div>" +
        '<div class="highslide-body"></div>' +
        '<div class="highslide-footer"><div>' +
        '<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>' +
        "</div></div>",
    },
    preloadTheseImages: [],
    continuePreloading: true,
    expanders: [],
    overrides: [
      "allowSizeReduction",
      "useBox",
      "outlineType",
      "outlineWhileAnimating",
      "captionId",
      "captionText",
      "captionEval",
      "captionOverlay",
      "headingId",
      "headingText",
      "headingEval",
      "headingOverlay",
      "creditsPosition",
      "dragByHeading",
      "width",
      "height",
      "contentId",
      "allowWidthReduction",
      "allowHeightReduction",
      "preserveContent",
      "maincontentId",
      "maincontentText",
      "maincontentEval",
      "objectType",
      "cacheAjax",
      "objectWidth",
      "objectHeight",
      "objectLoadTime",
      "swfOptions",
      "wrapperClassName",
      "minWidth",
      "minHeight",
      "maxWidth",
      "maxHeight",
      "pageOrigin",
      "slideshowGroup",
      "easing",
      "easingClose",
      "fadeInOut",
      "src",
    ],
    overlays: [],
    idCounter: 0,
    oPos: {
      x: ["leftpanel", "left", "center", "right", "rightpanel"],
      y: ["above", "top", "middle", "bottom", "below"],
    },
    mouse: {},
    headingOverlay: {},
    captionOverlay: {},
    swfOptions: {
      flashvars: {},
      params: {},
      attributes: {},
    },
    timers: [],
    pendingOutlines: {},
    sleeping: [],
    preloadTheseAjax: [],
    cacheBindings: [],
    cachedGets: {},
    clones: {},
    onReady: [],
    uaVersion: /Trident\/4\.0/.test(navigator.userAgent)
      ? 8
      : parseFloat(
          (navigator.userAgent
            .toLowerCase()
            .match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]
        ),
    ie: document.all && !window.opera,
    safari: /Safari/.test(navigator.userAgent),
    geckoMac: /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
    $: function (id) {
      if (id) return document.getElementById(id);
    },
    push: function (arr, val) {
      arr[arr.length] = val;
    },
    createElement: function (tag, attribs, styles, parent, nopad) {
      var el = document.createElement(tag);
      if (attribs) hs.extend(el, attribs);
      if (nopad)
        hs.setStyles(el, {
          padding: 0,
          border: "none",
          margin: 0,
        });
      if (styles) hs.setStyles(el, styles);
      if (parent) parent.appendChild(el);
      return el;
    },
    extend: function (el, attribs) {
      for (var x in attribs) el[x] = attribs[x];
      return el;
    },
    setStyles: function (el, styles) {
      for (var x in styles) {
        if (hs.ieLt9 && x == "opacity") {
          if (styles[x] > 0.99) el.style.removeAttribute("filter");
          else el.style.filter = "alpha(opacity=" + styles[x] * 100 + ")";
        } else el.style[x] = styles[x];
      }
    },
    animate: function (el, prop, opt) {
      var start, end, unit;
      if (typeof opt != "object" || opt === null) {
        var args = arguments;
        opt = {
          duration: args[2],
          easing: args[3],
          complete: args[4],
        };
      }
      if (typeof opt.duration != "number") opt.duration = 250;
      opt.easing = Math[opt.easing] || Math.easeInQuad;
      opt.curAnim = hs.extend({}, prop);
      for (var name in prop) {
        var e = new hs.fx(el, opt, name);
        start = parseFloat(hs.css(el, name)) || 0;
        end = parseFloat(prop[name]);
        unit = name != "opacity" ? "px" : "";
        e.custom(start, end, unit);
      }
    },
    css: function (el, prop) {
      if (el.style[prop]) {
        return el.style[prop];
      } else if (document.defaultView) {
        return document.defaultView
          .getComputedStyle(el, null)
          .getPropertyValue(prop);
      } else {
        if (prop == "opacity") prop = "filter";
        var val =
          el.currentStyle[
            prop.replace(/\-(\w)/g, function (a, b) {
              return b.toUpperCase();
            })
          ];
        if (prop == "filter")
          val = val.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) {
            return b / 100;
          });
        return val === "" ? 1 : val;
      }
    },
    getPageSize: function () {
      var d = document,
        w = window,
        iebody =
          d.compatMode && d.compatMode != "BackCompat"
            ? d.documentElement
            : d.body;
      var width = hs.ieLt9
          ? iebody.clientWidth
          : d.documentElement.clientWidth || self.innerWidth,
        height = hs.ieLt9 ? iebody.clientHeight : self.innerHeight;
      hs.page = {
        width: width,
        height: height,
        scrollLeft: hs.ieLt9 ? iebody.scrollLeft : pageXOffset,
        scrollTop: hs.ieLt9 ? iebody.scrollTop : pageYOffset,
      };
      return hs.page;
    },
    getPosition: function (el) {
      var p = {
        x: el.offsetLeft,
        y: el.offsetTop,
      };
      while (el.offsetParent) {
        el = el.offsetParent;
        p.x += el.offsetLeft;
        p.y += el.offsetTop;
        if (el != document.body && el != document.documentElement) {
          p.x -= el.scrollLeft;
          p.y -= el.scrollTop;
        }
      }
      return p;
    },
    expand: function (a, params, custom, type) {
      if (!a)
        a = hs.createElement(
          "a",
          null,
          {
            display: "none",
          },
          hs.container
        );
      if (typeof a.getParams == "function") return params;
      if (type == "html") {
        for (var i = 0; i < hs.sleeping.length; i++) {
          if (hs.sleeping[i] && hs.sleeping[i].a == a) {
            hs.sleeping[i].awake();
            hs.sleeping[i] = null;
            return false;
          }
        }
        hs.hasHtmlExpanders = true;
      }
      try {
        new hs.Expander(a, params, custom, type);
        return false;
      } catch (e) {
        return true;
      }
    },
    htmlExpand: function (a, params, custom) {
      return hs.expand(a, params, custom, "html");
    },
    getSelfRendered: function () {
      return hs.createElement("div", {
        className: "highslide-html-content",
        innerHTML: hs.replaceLang(hs.skin.contentWrapper),
      });
    },
    getElementByClass: function (el, tagName, className) {
      var els = el.getElementsByTagName(tagName);
      for (var i = 0; i < els.length; i++) {
        if (new RegExp(className).test(els[i].className)) {
          return els[i];
        }
      }
      return null;
    },
    replaceLang: function (s) {
      s = s.replace(/\s/g, " ");
      var re = /{hs\.lang\.([^}]+)\}/g,
        matches = s.match(re),
        lang;
      if (matches)
        for (var i = 0; i < matches.length; i++) {
          lang = matches[i].replace(re, "$1");
          if (typeof hs.lang[lang] != "undefined")
            s = s.replace(matches[i], hs.lang[lang]);
        }
      return s;
    },
    getCacheBinding: function (a) {
      for (var i = 0; i < hs.cacheBindings.length; i++) {
        if (hs.cacheBindings[i][0] == a) {
          var c = hs.cacheBindings[i][1];
          hs.cacheBindings[i][1] = c.cloneNode(1);
          return c;
        }
      }
      return null;
    },
    preloadAjax: function (e) {
      var arr = hs.getAnchors();
      for (var i = 0; i < arr.htmls.length; i++) {
        var a = arr.htmls[i];
        if (
          hs.getParam(a, "objectType") == "ajax" &&
          hs.getParam(a, "cacheAjax")
        )
          hs.push(hs.preloadTheseAjax, a);
      }
      hs.preloadAjaxElement(0);
    },
    preloadAjaxElement: function (i) {
      if (!hs.preloadTheseAjax[i]) return;
      var a = hs.preloadTheseAjax[i];
      var cache = hs.getNode(hs.getParam(a, "contentId"));
      if (!cache) cache = hs.getSelfRendered();
      var ajax = new hs.Ajax(a, cache, 1);
      ajax.onError = function () {};
      ajax.onLoad = function () {
        hs.push(hs.cacheBindings, [a, cache]);
        hs.preloadAjaxElement(i + 1);
      };
      ajax.run();
    },
    focusTopmost: function () {
      var topZ = 0,
        topmostKey = -1,
        expanders = hs.expanders,
        exp,
        zIndex;
      for (var i = 0; i < expanders.length; i++) {
        exp = expanders[i];
        if (exp) {
          zIndex = exp.wrapper.style.zIndex;
          if (zIndex && zIndex > topZ) {
            topZ = zIndex;
            topmostKey = i;
          }
        }
      }
      if (topmostKey == -1) hs.focusKey = -1;
      else expanders[topmostKey].focus();
    },
    getParam: function (a, param) {
      a.getParams = a.onclick;
      var p = a.getParams ? a.getParams() : null;
      a.getParams = null;
      return p && typeof p[param] != "undefined"
        ? p[param]
        : typeof hs[param] != "undefined"
        ? hs[param]
        : null;
    },
    getSrc: function (a) {
      var src = hs.getParam(a, "src");
      if (src) return src;
      return a.href;
    },
    getNode: function (id) {
      var node = hs.$(id),
        clone = hs.clones[id],
        a = {};
      if (!node && !clone) return null;
      if (!clone) {
        clone = node.cloneNode(true);
        clone.id = "";
        hs.clones[id] = clone;
        return node;
      } else {
        return clone.cloneNode(true);
      }
    },
    discardElement: function (d) {
      if (d) hs.garbageBin.appendChild(d);
      hs.garbageBin.innerHTML = "";
    },
    transit: function (adj, exp) {
      var last = exp || hs.getExpander();
      exp = last;
      if (hs.upcoming) return false;
      else hs.last = last;
      hs.removeEventListener(
        document,
        window.opera ? "keypress" : "keydown",
        hs.keyHandler
      );
      try {
        hs.upcoming = adj;
        adj.onclick();
      } catch (e) {
        hs.last = hs.upcoming = null;
      }
      try {
        exp.close();
      } catch (e) {}
      return false;
    },
    previousOrNext: function (el, op) {
      var exp = hs.getExpander(el);
      if (exp) return hs.transit(exp.getAdjacentAnchor(op), exp);
      else return false;
    },
    previous: function (el) {
      return hs.previousOrNext(el, -1);
    },
    next: function (el) {
      return hs.previousOrNext(el, 1);
    },
    keyHandler: function (e) {
      if (!e) e = window.event;
      if (!e.target) e.target = e.srcElement;
      if (typeof e.target.form != "undefined") return true;
      var exp = hs.getExpander();
      var op = null;
      switch (e.keyCode) {
        case 70:
          if (exp) exp.doFullExpand();
          return true;
        case 32:
        case 34:
        case 39:
        case 40:
          op = 1;
          break;
        case 8:
        case 33:
        case 37:
        case 38:
          op = -1;
          break;
        case 27:
        case 13:
          op = 0;
      }
      if (op !== null) {
        hs.removeEventListener(
          document,
          window.opera ? "keypress" : "keydown",
          hs.keyHandler
        );
        if (!hs.enableKeyListener) return true;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        if (exp) {
          if (op == 0) {
            exp.close();
          } else {
            hs.previousOrNext(exp.key, op);
          }
          return false;
        }
      }
      return true;
    },
    registerOverlay: function (overlay) {
      hs.push(
        hs.overlays,
        hs.extend(overlay, {
          hsId: "hsId" + hs.idCounter++,
        })
      );
    },
    getWrapperKey: function (element, expOnly) {
      var el,
        re = /^highslide-wrapper-([0-9]+)$/;
      el = element;
      while (el.parentNode) {
        if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
        el = el.parentNode;
      }
      if (!expOnly) {
        el = element;
        while (el.parentNode) {
          if (el.tagName && hs.isHsAnchor(el)) {
            for (var key = 0; key < hs.expanders.length; key++) {
              var exp = hs.expanders[key];
              if (exp && exp.a == el) return key;
            }
          }
          el = el.parentNode;
        }
      }
      return null;
    },
    getExpander: function (el, expOnly) {
      if (typeof el == "undefined") return hs.expanders[hs.focusKey] || null;
      if (typeof el == "number") return hs.expanders[el] || null;
      if (typeof el == "string") el = hs.$(el);
      return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;
    },
    isHsAnchor: function (a) {
      return (
        a.onclick &&
        a.onclick
          .toString()
          .replace(/\s/g, " ")
          .match(/hs.(htmlE|e)xpand/)
      );
    },
    reOrder: function () {
      for (var i = 0; i < hs.expanders.length; i++)
        if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();
    },
    mouseClickHandler: function (e) {
      if (!e) e = window.event;
      if (e.button > 1) return true;
      if (!e.target) e.target = e.srcElement;
      var el = e.target;
      while (
        el.parentNode &&
        !/highslide-(image|move|html|resize)/.test(el.className)
      ) {
        el = el.parentNode;
      }
      var exp = hs.getExpander(el);
      if (exp && (exp.isClosing || !exp.isExpanded)) return true;
      if (exp && e.type == "mousedown") {
        if (e.target.form) return true;
        var match = el.className.match(/highslide-(image|move|resize)/);
        if (match) {
          hs.dragArgs = {
            exp: exp,
            type: match[1],
            left: exp.x.pos,
            width: exp.x.size,
            top: exp.y.pos,
            height: exp.y.size,
            clickX: e.clientX,
            clickY: e.clientY,
          };
          hs.addEventListener(document, "mousemove", hs.dragHandler);
          if (e.preventDefault) e.preventDefault();
          if (/highslide-(image|html)-blur/.test(exp.content.className)) {
            exp.focus();
            hs.hasFocused = true;
          }
          return false;
        } else if (
          /highslide-html/.test(el.className) &&
          hs.focusKey != exp.key
        ) {
          exp.focus();
          exp.doShowHide("hidden");
        }
      } else if (e.type == "mouseup") {
        hs.removeEventListener(document, "mousemove", hs.dragHandler);
        if (hs.dragArgs) {
          if (hs.styleRestoreCursor && hs.dragArgs.type == "image")
            hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
          var hasDragged = hs.dragArgs.hasDragged;
          if (
            !hasDragged &&
            !hs.hasFocused &&
            !/(move|resize)/.test(hs.dragArgs.type)
          ) {
            exp.close();
          } else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) {
            hs.dragArgs.exp.doShowHide("hidden");
          }
          if (hs.dragArgs.exp.releaseMask)
            hs.dragArgs.exp.releaseMask.style.display = "none";
          hs.hasFocused = false;
          hs.dragArgs = null;
        } else if (/highslide-image-blur/.test(el.className)) {
          el.style.cursor = hs.styleRestoreCursor;
        }
      }
      return false;
    },
    dragHandler: function (e) {
      if (!hs.dragArgs) return true;
      if (!e) e = window.event;
      var a = hs.dragArgs,
        exp = a.exp;
      if (exp.iframe) {
        if (!exp.releaseMask)
          exp.releaseMask = hs.createElement(
            "div",
            null,
            {
              position: "absolute",
              width: exp.x.size + "px",
              height: exp.y.size + "px",
              left: exp.x.cb + "px",
              top: exp.y.cb + "px",
              zIndex: 4,
              background: hs.ieLt9 ? "white" : "none",
              opacity: 0.01,
            },
            exp.wrapper,
            true
          );
        if (exp.releaseMask.style.display == "none")
          exp.releaseMask.style.display = "";
      }
      a.dX = e.clientX - a.clickX;
      a.dY = e.clientY - a.clickY;
      var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
      if (!a.hasDragged)
        a.hasDragged =
          (a.type != "image" && distance > 0) ||
          distance > (hs.dragSensitivity || 5);
      if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
        if (a.type == "resize") exp.resize(a);
        else {
          exp.moveTo(a.left + a.dX, a.top + a.dY);
          if (a.type == "image") exp.content.style.cursor = "move";
        }
      }
      return false;
    },
    wrapperMouseHandler: function (e) {
      try {
        if (!e) e = window.event;
        var over = /mouseover/i.test(e.type);
        if (!e.target) e.target = e.srcElement;
        if (!e.relatedTarget)
          e.relatedTarget = over ? e.fromElement : e.toElement;
        var exp = hs.getExpander(e.target);
        if (!exp.isExpanded) return;
        if (
          !exp ||
          !e.relatedTarget ||
          hs.getExpander(e.relatedTarget, true) == exp ||
          hs.dragArgs
        )
          return;
        for (var i = 0; i < exp.overlays.length; i++)
          (function () {
            var o = hs.$("hsId" + exp.overlays[i]);
            if (o && o.hideOnMouseOut) {
              if (over)
                hs.setStyles(o, {
                  visibility: "visible",
                  display: "",
                });
              hs.animate(
                o,
                {
                  opacity: over ? o.opacity : 0,
                },
                o.dur
              );
            }
          })();
      } catch (e) {}
    },
    addEventListener: function (el, event, func) {
      if (el == document && event == "ready") {
        hs.push(hs.onReady, func);
      }
      try {
        el.addEventListener(event, func, false);
      } catch (e) {
        try {
          el.detachEvent("on" + event, func);
          el.attachEvent("on" + event, func);
        } catch (e) {
          el["on" + event] = func;
        }
      }
    },
    removeEventListener: function (el, event, func) {
      try {
        el.removeEventListener(event, func, false);
      } catch (e) {
        try {
          el.detachEvent("on" + event, func);
        } catch (e) {
          el["on" + event] = null;
        }
      }
    },
    preloadFullImage: function (i) {
      if (
        hs.continuePreloading &&
        hs.preloadTheseImages[i] &&
        hs.preloadTheseImages[i] != "undefined"
      ) {
        var img = document.createElement("img");
        img.onload = function () {
          img = null;
          hs.preloadFullImage(i + 1);
        };
        img.src = hs.preloadTheseImages[i];
      }
    },
    preloadImages: function (number) {
      if (number && typeof number != "object")
        hs.numberOfImagesToPreload = number;
      var arr = hs.getAnchors();
      for (
        var i = 0;
        i < arr.images.length && i < hs.numberOfImagesToPreload;
        i++
      ) {
        hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));
      }
      if (hs.outlineType)
        new hs.Outline(hs.outlineType, function () {
          hs.preloadFullImage(0);
        });
      else hs.preloadFullImage(0);
      if (hs.restoreCursor)
        var cur = hs.createElement("img", {
          src: hs.graphicsDir + hs.restoreCursor,
        });
    },
    init: function () {
      if (!hs.container) {
        hs.ieLt7 = hs.ie && hs.uaVersion < 7;
        hs.ieLt9 = hs.ie && hs.uaVersion < 9;
        hs.getPageSize();
        hs.ie6SSL = hs.ieLt7 && location.protocol == "https:";
        for (var x in hs.langDefaults) {
          if (typeof hs[x] != "undefined") hs.lang[x] = hs[x];
          else if (
            typeof hs.lang[x] == "undefined" &&
            typeof hs.langDefaults[x] != "undefined"
          )
            hs.lang[x] = hs.langDefaults[x];
        }
        hs.container = hs.createElement(
          "div",
          {
            className: "highslide-container",
          },
          {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: hs.zIndexCounter,
            direction: "ltr",
          },
          document.body,
          true
        );
        hs.loading = hs.createElement(
          "a",
          {
            className: "highslide-loading",
            title: hs.lang.loadingTitle,
            innerHTML: hs.lang.loadingText,
            href: "javascript:;",
          },
          {
            position: "absolute",
            top: "-9999px",
            opacity: hs.loadingOpacity,
            zIndex: 1,
          },
          hs.container
        );
        hs.garbageBin = hs.createElement(
          "div",
          null,
          {
            display: "none",
          },
          hs.container
        );
        hs.clearing = hs.createElement(
          "div",
          null,
          {
            clear: "both",
            paddingTop: "1px",
          },
          null,
          true
        );
        Math.linearTween = function (t, b, c, d) {
          return (c * t) / d + b;
        };
        Math.easeInQuad = function (t, b, c, d) {
          return c * (t /= d) * t + b;
        };
        hs.hideSelects = hs.ieLt7;
        hs.hideIframes =
          (window.opera && hs.uaVersion < 9) ||
          navigator.vendor == "KDE" ||
          (hs.ieLt7 && hs.uaVersion < 5.5);
      }
    },
    ready: function () {
      if (hs.isReady) return;
      hs.isReady = true;
      for (var i = 0; i < hs.onReady.length; i++) hs.onReady[i]();
    },
    updateAnchors: function () {
      var el,
        els,
        all = [],
        images = [],
        htmls = [],
        groups = {},
        re;
      for (var i = 0; i < hs.openerTagNames.length; i++) {
        els = document.getElementsByTagName(hs.openerTagNames[i]);
        for (var j = 0; j < els.length; j++) {
          el = els[j];
          re = hs.isHsAnchor(el);
          if (re) {
            hs.push(all, el);
            if (re[0] == "hs.expand") hs.push(images, el);
            else if (re[0] == "hs.htmlExpand") hs.push(htmls, el);
            var g = hs.getParam(el, "slideshowGroup") || "none";
            if (!groups[g]) groups[g] = [];
            hs.push(groups[g], el);
          }
        }
      }
      hs.anchors = {
        all: all,
        groups: groups,
        images: images,
        htmls: htmls,
      };
      return hs.anchors;
    },
    getAnchors: function () {
      return hs.anchors || hs.updateAnchors();
    },
    close: function (el) {
      var exp = hs.getExpander(el);
      if (exp) exp.close();
      return false;
    },
  };
  hs.fx = function (elem, options, prop) {
    this.options = options;
    this.elem = elem;
    this.prop = prop;
    if (!options.orig) options.orig = {};
  };
  hs.fx.prototype = {
    update: function () {
      (hs.fx.step[this.prop] || hs.fx.step._default)(this);
      if (this.options.step) this.options.step.call(this.elem, this.now, this);
    },
    custom: function (from, to, unit) {
      this.startTime = new Date().getTime();
      this.start = from;
      this.end = to;
      this.unit = unit;
      this.now = this.start;
      this.pos = this.state = 0;
      var self = this;
      function t(gotoEnd) {
        return self.step(gotoEnd);
      }
      t.elem = this.elem;
      if (t() && hs.timers.push(t) == 1) {
        hs.timerId = setInterval(function () {
          var timers = hs.timers;
          for (var i = 0; i < timers.length; i++)
            if (!timers[i]()) timers.splice(i--, 1);
          if (!timers.length) {
            clearInterval(hs.timerId);
          }
        }, 13);
      }
    },
    step: function (gotoEnd) {
      var t = new Date().getTime();
      if (gotoEnd || t >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = true;
        var done = true;
        for (var i in this.options.curAnim)
          if (this.options.curAnim[i] !== true) done = false;
        if (done) {
          if (this.options.complete) this.options.complete.call(this.elem);
        }
        return false;
      } else {
        var n = t - this.startTime;
        this.state = n / this.options.duration;
        this.pos = this.options.easing(n, 0, 1, this.options.duration);
        this.now = this.start + (this.end - this.start) * this.pos;
        this.update();
      }
      return true;
    },
  };
  hs.extend(hs.fx, {
    step: {
      opacity: function (fx) {
        hs.setStyles(fx.elem, {
          opacity: fx.now,
        });
      },
      _default: function (fx) {
        try {
          if (fx.elem.style && fx.elem.style[fx.prop] != null)
            fx.elem.style[fx.prop] = fx.now + fx.unit;
          else fx.elem[fx.prop] = fx.now;
        } catch (e) {}
      },
    },
  });
  hs.Outline = function (outlineType, onLoad) {
    this.onLoad = onLoad;
    this.outlineType = outlineType;
    var v = hs.uaVersion,
      tr;
    this.hasAlphaImageLoader = hs.ie && hs.uaVersion < 7;
    if (!outlineType) {
      if (onLoad) onLoad();
      return;
    }
    hs.init();
    this.table = hs.createElement(
      "table",
      {
        cellSpacing: 0,
      },
      {
        visibility: "hidden",
        position: "absolute",
        borderCollapse: "collapse",
        width: 0,
      },
      hs.container,
      true
    );
    var tbody = hs.createElement("tbody", null, null, this.table, 1);
    this.td = [];
    for (var i = 0; i <= 8; i++) {
      if (i % 3 == 0)
        tr = hs.createElement(
          "tr",
          null,
          {
            height: "auto",
          },
          tbody,
          true
        );
      this.td[i] = hs.createElement("td", null, null, tr, true);
      var style =
        i != 4
          ? {
              lineHeight: 0,
              fontSize: 0,
            }
          : {
              position: "relative",
            };
      hs.setStyles(this.td[i], style);
    }
    this.td[4].className = outlineType + " highslide-outline";
    this.preloadGraphic();
  };
  hs.Outline.prototype = {
    preloadGraphic: function () {
      var src =
        hs.graphicsDir +
        (hs.outlinesDir || "outlines/") +
        this.outlineType +
        ".png";
      var appendTo = hs.safari && hs.uaVersion < 525 ? hs.container : null;
      this.graphic = hs.createElement(
        "img",
        null,
        {
          position: "absolute",
          top: "-9999px",
        },
        appendTo,
        true
      );
      var pThis = this;
      this.graphic.onload = function () {
        pThis.onGraphicLoad();
      };
      this.graphic.src = src;
    },
    onGraphicLoad: function () {
      var o = (this.offset = this.graphic.width / 4),
        pos = [
          [0, 0],
          [0, -4],
          [-2, 0],
          [0, -8],
          0,
          [-2, -8],
          [0, -2],
          [0, -6],
          [-2, -2],
        ],
        dim = {
          height: 2 * o + "px",
          width: 2 * o + "px",
        };
      for (var i = 0; i <= 8; i++) {
        if (pos[i]) {
          if (this.hasAlphaImageLoader) {
            var w = i == 1 || i == 7 ? "100%" : this.graphic.width + "px";
            var div = hs.createElement(
              "div",
              null,
              {
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              },
              this.td[i],
              true
            );
            hs.createElement(
              "div",
              null,
              {
                filter:
                  "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" +
                  this.graphic.src +
                  "')",
                position: "absolute",
                width: w,
                height: this.graphic.height + "px",
                left: pos[i][0] * o + "px",
                top: pos[i][1] * o + "px",
              },
              div,
              true
            );
          } else {
            hs.setStyles(this.td[i], {
              background:
                "url(" +
                this.graphic.src +
                ") " +
                pos[i][0] * o +
                "px " +
                pos[i][1] * o +
                "px",
            });
          }
          if (window.opera && (i == 3 || i == 5))
            hs.createElement("div", null, dim, this.td[i], true);
          hs.setStyles(this.td[i], dim);
        }
      }
      this.graphic = null;
      if (hs.pendingOutlines[this.outlineType])
        hs.pendingOutlines[this.outlineType].destroy();
      hs.pendingOutlines[this.outlineType] = this;
      if (this.onLoad) this.onLoad();
    },
    setPosition: function (pos, offset, vis, dur, easing) {
      var exp = this.exp,
        stl = exp.wrapper.style,
        offset = offset || 0,
        pos = pos || {
          x: exp.x.pos + offset,
          y: exp.y.pos + offset,
          w: exp.x.get("wsize") - 2 * offset,
          h: exp.y.get("wsize") - 2 * offset,
        };
      if (vis)
        this.table.style.visibility =
          pos.h >= 4 * this.offset ? "visible" : "hidden";
      hs.setStyles(this.table, {
        left: pos.x - this.offset + "px",
        top: pos.y - this.offset + "px",
        width: pos.w + 2 * this.offset + "px",
      });
      pos.w -= 2 * this.offset;
      pos.h -= 2 * this.offset;
      hs.setStyles(this.td[4], {
        width: pos.w >= 0 ? pos.w + "px" : 0,
        height: pos.h >= 0 ? pos.h + "px" : 0,
      });
      if (this.hasAlphaImageLoader)
        this.td[3].style.height = this.td[5].style.height =
          this.td[4].style.height;
    },
    destroy: function (hide) {
      if (hide) this.table.style.visibility = "hidden";
      else hs.discardElement(this.table);
    },
  };
  hs.Dimension = function (exp, dim) {
    this.exp = exp;
    this.dim = dim;
    this.ucwh = dim == "x" ? "Width" : "Height";
    this.wh = this.ucwh.toLowerCase();
    this.uclt = dim == "x" ? "Left" : "Top";
    this.lt = this.uclt.toLowerCase();
    this.ucrb = dim == "x" ? "Right" : "Bottom";
    this.rb = this.ucrb.toLowerCase();
    this.p1 = this.p2 = 0;
  };
  hs.Dimension.prototype = {
    get: function (key) {
      switch (key) {
        case "loadingPos":
          return (
            this.tpos +
            this.tb +
            (this.t - hs.loading["offset" + this.ucwh]) / 2
          );
        case "wsize":
          return this.size + 2 * this.cb + this.p1 + this.p2;
        case "fitsize":
          return this.clientSize - this.marginMin - this.marginMax;
        case "maxsize":
          return this.get("fitsize") - 2 * this.cb - this.p1 - this.p2;
        case "opos":
          return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);
        case "osize":
          return (
            this.get("wsize") +
            (this.exp.outline ? 2 * this.exp.outline.offset : 0)
          );
        case "imgPad":
          return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;
      }
    },
    calcBorders: function () {
      this.cb = (this.exp.content["offset" + this.ucwh] - this.t) / 2;
      this.marginMax = hs["margin" + this.ucrb];
    },
    calcThumb: function () {
      this.t = this.exp.el[this.wh]
        ? parseInt(this.exp.el[this.wh])
        : this.exp.el["offset" + this.ucwh];
      this.tpos = this.exp.tpos[this.dim];
      this.tb = (this.exp.el["offset" + this.ucwh] - this.t) / 2;
      if (this.tpos == 0 || this.tpos == -1) {
        this.tpos = hs.page[this.wh] / 2 + hs.page["scroll" + this.uclt];
      }
    },
    calcExpanded: function () {
      var exp = this.exp;
      this.justify = "auto";
      this.pos = this.tpos - this.cb + this.tb;
      if (this.maxHeight && this.dim == "x")
        exp.maxWidth = Math.min(
          exp.maxWidth || this.full,
          (exp.maxHeight * this.full) / exp.y.full
        );
      this.size = Math.min(this.full, exp["max" + this.ucwh] || this.full);
      this.minSize = exp.allowSizeReduction
        ? Math.min(exp["min" + this.ucwh], this.full)
        : this.full;
      if (exp.isImage && exp.useBox) {
        this.size = exp[this.wh];
        this.imgSize = this.full;
      }
      if (this.dim == "x" && hs.padToMinWidth) this.minSize = exp.minWidth;
      this.marginMin = hs["margin" + this.uclt];
      this.scroll = hs.page["scroll" + this.uclt];
      this.clientSize = hs.page[this.wh];
    },
    setSize: function (i) {
      var exp = this.exp;
      if (exp.isImage && (exp.useBox || hs.padToMinWidth)) {
        this.imgSize = i;
        this.size = Math.max(this.size, this.imgSize);
        exp.content.style[this.lt] = this.get("imgPad") + "px";
      } else this.size = i;
      exp.content.style[this.wh] = i + "px";
      exp.wrapper.style[this.wh] = this.get("wsize") + "px";
      if (exp.outline) exp.outline.setPosition();
      if (exp.releaseMask) exp.releaseMask.style[this.wh] = i + "px";
      if (this.dim == "y" && exp.iDoc && exp.body.style.height != "auto")
        try {
          exp.iDoc.body.style.overflow = "auto";
        } catch (e) {}
      if (exp.isHtml) {
        var d = exp.scrollerDiv;
        if (this.sizeDiff === undefined)
          this.sizeDiff =
            exp.innerContent["offset" + this.ucwh] - d["offset" + this.ucwh];
        d.style[this.wh] = this.size - this.sizeDiff + "px";
        if (this.dim == "x") exp.mediumContent.style.width = "auto";
        if (exp.body) exp.body.style[this.wh] = "auto";
      }
      if (this.dim == "x" && exp.overlayBox) exp.sizeOverlayBox(true);
    },
    setPos: function (i) {
      this.pos = i;
      this.exp.wrapper.style[this.lt] = i + "px";
      if (this.exp.outline) this.exp.outline.setPosition();
    },
  };
  hs.Expander = function (a, params, custom, contentType) {
    if (document.readyState && hs.ie && !hs.isReady) {
      hs.addEventListener(document, "ready", function () {
        new hs.Expander(a, params, custom, contentType);
      });
      return;
    }
    this.a = a;
    this.custom = custom;
    this.contentType = contentType || "image";
    this.isHtml = contentType == "html";
    this.isImage = !this.isHtml;
    hs.continuePreloading = false;
    this.overlays = [];
    hs.init();
    var key = (this.key = hs.expanders.length);
    for (var i = 0; i < hs.overrides.length; i++) {
      var name = hs.overrides[i];
      this[name] =
        params && typeof params[name] != "undefined" ? params[name] : hs[name];
    }
    if (!this.src) this.src = a.href;
    var el = params && params.thumbnailId ? hs.$(params.thumbnailId) : a;
    el = this.thumb = el.getElementsByTagName("img")[0] || el;
    this.thumbsUserSetId = el.id || a.id;
    for (var i = 0; i < hs.expanders.length; i++) {
      if (hs.expanders[i] && hs.expanders[i].a == a) {
        hs.expanders[i].focus();
        return false;
      }
    }
    if (!hs.allowSimultaneousLoading)
      for (var i = 0; i < hs.expanders.length; i++) {
        if (
          hs.expanders[i] &&
          hs.expanders[i].thumb != el &&
          !hs.expanders[i].onLoadStarted
        ) {
          hs.expanders[i].cancelLoading();
        }
      }
    hs.expanders[key] = this;
    if (!hs.allowMultipleInstances && !hs.upcoming) {
      if (hs.expanders[key - 1]) hs.expanders[key - 1].close();
      if (typeof hs.focusKey != "undefined" && hs.expanders[hs.focusKey])
        hs.expanders[hs.focusKey].close();
    }
    this.el = el;
    this.tpos = this.pageOrigin || hs.getPosition(el);
    hs.getPageSize();
    var x = (this.x = new hs.Dimension(this, "x"));
    x.calcThumb();
    var y = (this.y = new hs.Dimension(this, "y"));
    y.calcThumb();
    this.wrapper = hs.createElement(
      "div",
      {
        id: "highslide-wrapper-" + this.key,
        className: "highslide-wrapper " + this.wrapperClassName,
      },
      {
        visibility: "hidden",
        position: "absolute",
        zIndex: (hs.zIndexCounter += 2),
      },
      null,
      true
    );
    this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
    if (this.contentType == "image" && this.outlineWhileAnimating == 2)
      this.outlineWhileAnimating = 0;
    if (!this.outlineType) {
      this[this.contentType + "Create"]();
    } else if (hs.pendingOutlines[this.outlineType]) {
      this.connectOutline();
      this[this.contentType + "Create"]();
    } else {
      this.showLoading();
      var exp = this;
      new hs.Outline(this.outlineType, function () {
        exp.connectOutline();
        exp[exp.contentType + "Create"]();
      });
    }
    return true;
  };
  hs.Expander.prototype = {
    error: function (e) {
      if (hs.debug) alert("Line " + e.lineNumber + ": " + e.message);
      else window.location.href = this.src;
    },
    connectOutline: function () {
      var outline = (this.outline = hs.pendingOutlines[this.outlineType]);
      outline.exp = this;
      outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
      hs.pendingOutlines[this.outlineType] = null;
    },
    showLoading: function () {
      if (this.onLoadStarted || this.loading) return;
      this.loading = hs.loading;
      var exp = this;
      this.loading.onclick = function () {
        exp.cancelLoading();
      };
      var exp = this,
        l = this.x.get("loadingPos") + "px",
        t = this.y.get("loadingPos") + "px";
      setTimeout(function () {
        if (exp.loading)
          hs.setStyles(exp.loading, {
            left: l,
            top: t,
            zIndex: hs.zIndexCounter++,
          });
      }, 100);
    },
    imageCreate: function () {
      var exp = this;
      var img = document.createElement("img");
      this.content = img;
      img.onload = function () {
        if (hs.expanders[exp.key]) exp.contentLoaded();
      };
      if (hs.blockRightClick)
        img.oncontextmenu = function () {
          return false;
        };
      img.className = "highslide-image";
      hs.setStyles(img, {
        visibility: "hidden",
        display: "block",
        position: "absolute",
        maxWidth: "9999px",
        zIndex: 3,
      });
      img.title = hs.lang.restoreTitle;
      if (hs.safari && hs.uaVersion < 525) hs.container.appendChild(img);
      if (hs.ie && hs.flushImgSize) img.src = null;
      img.src = this.src;
      this.showLoading();
    },
    htmlCreate: function () {
      this.content = hs.getCacheBinding(this.a);
      if (!this.content) this.content = hs.getNode(this.contentId);
      if (!this.content) this.content = hs.getSelfRendered();
      this.getInline(["maincontent"]);
      if (this.maincontent) {
        var body = hs.getElementByClass(this.content, "div", "highslide-body");
        if (body) body.appendChild(this.maincontent);
        this.maincontent.style.display = "block";
      }
      var innerContent = (this.innerContent = this.content);
      if (/(swf|iframe)/.test(this.objectType))
        this.setObjContainerSize(innerContent);
      hs.container.appendChild(this.wrapper);
      hs.setStyles(this.wrapper, {
        position: "static",
        padding: "0 " + hs.marginRight + "px 0 " + hs.marginLeft + "px",
      });
      this.content = hs.createElement(
        "div",
        {
          className: "highslide-html",
        },
        {
          position: "relative",
          zIndex: 3,
          height: 0,
          overflow: "hidden",
        },
        this.wrapper
      );
      this.mediumContent = hs.createElement("div", null, null, this.content, 1);
      this.mediumContent.appendChild(innerContent);
      hs.setStyles(innerContent, {
        position: "relative",
        display: "block",
        direction: hs.lang.cssDirection || "",
      });
      if (this.width) innerContent.style.width = this.width + "px";
      if (this.height)
        hs.setStyles(innerContent, {
          height: this.height + "px",
          overflow: "hidden",
        });
      if (innerContent.offsetWidth < this.minWidth)
        innerContent.style.width = this.minWidth + "px";
      if (this.objectType == "ajax" && !hs.getCacheBinding(this.a)) {
        this.showLoading();
        var exp = this;
        var ajax = new hs.Ajax(this.a, innerContent);
        ajax.src = this.src;
        ajax.onLoad = function () {
          if (hs.expanders[exp.key]) exp.contentLoaded();
        };
        ajax.onError = function () {
          location.href = exp.src;
        };
        ajax.run();
      } else if (
        this.objectType == "iframe" &&
        this.objectLoadTime == "before"
      ) {
        this.writeExtendedContent();
      } else this.contentLoaded();
    },
    contentLoaded: function () {
      try {
        if (!this.content) return;
        this.content.onload = null;
        if (this.onLoadStarted) return;
        else this.onLoadStarted = true;
        var x = this.x,
          y = this.y;
        if (this.loading) {
          hs.setStyles(this.loading, {
            top: "-9999px",
          });
          this.loading = null;
        }
        if (this.isImage) {
          x.full = this.content.width;
          y.full = this.content.height;
          hs.setStyles(this.content, {
            width: x.t + "px",
            height: y.t + "px",
          });
          this.wrapper.appendChild(this.content);
          hs.container.appendChild(this.wrapper);
        } else if (this.htmlGetSize) this.htmlGetSize();
        x.calcBorders();
        y.calcBorders();
        hs.setStyles(this.wrapper, {
          left: x.tpos + x.tb - x.cb + "px",
          top: y.tpos + x.tb - y.cb + "px",
        });
        this.getOverlays();
        var ratio = x.full / y.full;
        x.calcExpanded();
        this.justify(x);
        y.calcExpanded();
        this.justify(y);
        if (this.isHtml) this.htmlSizeOperations();
        if (this.overlayBox) this.sizeOverlayBox(0, 1);
        if (this.allowSizeReduction) {
          if (this.isImage) this.correctRatio(ratio);
          else this.fitOverlayBox();
          if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
            this.createFullExpand();
            if (this.overlays.length == 1) this.sizeOverlayBox();
          }
        }
        this.show();
      } catch (e) {
        this.error(e);
      }
    },
    setObjContainerSize: function (parent, auto) {
      var c = hs.getElementByClass(parent, "DIV", "highslide-body");
      if (/(iframe|swf)/.test(this.objectType)) {
        if (this.objectWidth) c.style.width = this.objectWidth + "px";
        if (this.objectHeight) c.style.height = this.objectHeight + "px";
      }
    },
    writeExtendedContent: function () {
      if (this.hasExtendedContent) return;
      var exp = this;
      this.body = hs.getElementByClass(
        this.innerContent,
        "DIV",
        "highslide-body"
      );
      if (this.objectType == "iframe") {
        this.showLoading();
        var ruler = hs.clearing.cloneNode(1);
        this.body.appendChild(ruler);
        this.newWidth = this.innerContent.offsetWidth;
        if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
        var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
          h =
            this.objectHeight ||
            hs.page.height - hDiff - hs.marginTop - hs.marginBottom,
          onload =
            this.objectLoadTime == "before"
              ? ' onload="if (hs.expanders[' +
                this.key +
                "]) hs.expanders[" +
                this.key +
                '].contentLoaded()" '
              : "";
        this.body.innerHTML +=
          '<iframe name="hs' +
          new Date().getTime() +
          '" frameborder="0" key="' +
          this.key +
          '" ' +
          ' style="width:' +
          this.objectWidth +
          "px; height:" +
          h +
          'px" ' +
          onload +
          ' src="' +
          this.src +
          '" ></iframe>';
        this.ruler = this.body.getElementsByTagName("div")[0];
        this.iframe = this.body.getElementsByTagName("iframe")[0];
        if (this.objectLoadTime == "after") this.correctIframeSize();
      }
      this.hasExtendedContent = true;
    },
    htmlGetSize: function () {
      if (this.iframe && !this.objectHeight) {
        this.iframe.style.height = this.body.style.height =
          this.getIframePageHeight() + "px";
      }
      this.innerContent.appendChild(hs.clearing);
      if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
      this.y.full = this.innerContent.offsetHeight;
      this.innerContent.removeChild(hs.clearing);
      if (
        hs.ie &&
        this.newHeight > parseInt(this.innerContent.currentStyle.height)
      ) {
        this.newHeight = parseInt(this.innerContent.currentStyle.height);
      }
      hs.setStyles(this.wrapper, {
        position: "absolute",
        padding: "0",
      });
      hs.setStyles(this.content, {
        width: this.x.t + "px",
        height: this.y.t + "px",
      });
    },
    getIframePageHeight: function () {
      var h;
      try {
        var doc = (this.iDoc =
          this.iframe.contentDocument || this.iframe.contentWindow.document);
        var clearing = doc.createElement("div");
        clearing.style.clear = "both";
        doc.body.appendChild(clearing);
        h = clearing.offsetTop;
        if (hs.ie)
          h +=
            parseInt(doc.body.currentStyle.marginTop) +
            parseInt(doc.body.currentStyle.marginBottom) -
            1;
      } catch (e) {
        h = 300;
      }
      return h;
    },
    correctIframeSize: function () {
      var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
      hs.discardElement(this.ruler);
      if (wDiff < 0) wDiff = 0;
      var hDiff = this.innerContent.offsetHeight - this.iframe.offsetHeight;
      if (
        this.iDoc &&
        !this.objectHeight &&
        !this.height &&
        this.y.size == this.y.full
      )
        try {
          this.iDoc.body.style.overflow = "hidden";
        } catch (e) {}
      hs.setStyles(this.iframe, {
        width: Math.abs(this.x.size - wDiff) + "px",
        height: Math.abs(this.y.size - hDiff) + "px",
      });
      hs.setStyles(this.body, {
        width: this.iframe.style.width,
        height: this.iframe.style.height,
      });
      this.scrollingContent = this.iframe;
      this.scrollerDiv = this.scrollingContent;
    },
    htmlSizeOperations: function () {
      this.setObjContainerSize(this.innerContent);
      if (this.objectType == "swf" && this.objectLoadTime == "before")
        this.writeExtendedContent();
      if (this.x.size < this.x.full && !this.allowWidthReduction)
        this.x.size = this.x.full;
      if (this.y.size < this.y.full && !this.allowHeightReduction)
        this.y.size = this.y.full;
      this.scrollerDiv = this.innerContent;
      hs.setStyles(this.mediumContent, {
        position: "relative",
        width: this.x.size + "px",
      });
      hs.setStyles(this.innerContent, {
        border: "none",
        width: "auto",
        height: "auto",
      });
      var node = hs.getElementByClass(
        this.innerContent,
        "DIV",
        "highslide-body"
      );
      if (node && !/(iframe|swf)/.test(this.objectType)) {
        var cNode = node;
        node = hs.createElement(
          cNode.nodeName,
          null,
          {
            overflow: "hidden",
          },
          null,
          true
        );
        cNode.parentNode.insertBefore(node, cNode);
        node.appendChild(hs.clearing);
        node.appendChild(cNode);
        var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
        var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
        node.removeChild(hs.clearing);
        var kdeBugCorr = hs.safari || navigator.vendor == "KDE" ? 1 : 0;
        hs.setStyles(node, {
          width: this.x.size - wDiff - kdeBugCorr + "px",
          height: this.y.size - hDiff + "px",
          overflow: "auto",
          position: "relative",
        });
        if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight) {
          node.style.width = parseInt(node.style.width) + kdeBugCorr + "px";
        }
        this.scrollingContent = node;
        this.scrollerDiv = this.scrollingContent;
      }
      if (this.iframe && this.objectLoadTime == "before")
        this.correctIframeSize();
      if (
        !this.scrollingContent &&
        this.y.size < this.mediumContent.offsetHeight
      )
        this.scrollerDiv = this.content;
      if (
        this.scrollerDiv == this.content &&
        !this.allowWidthReduction &&
        !/(iframe|swf)/.test(this.objectType)
      ) {
        this.x.size += 17;
      }
      if (
        this.scrollerDiv &&
        this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight
      ) {
        setTimeout(
          "try { hs.expanders[" +
            this.key +
            "].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",
          hs.expandDuration
        );
      }
    },
    justify: function (p, moveOnly) {
      var tgtArr,
        tgt = p.target,
        dim = p == this.x ? "x" : "y";
      var hasMovedMin = false;
      var allowReduce = p.exp.allowSizeReduction;
      p.pos = Math.round(p.pos - (p.get("wsize") - p.t) / 2);
      if (p.pos < p.scroll + p.marginMin) {
        p.pos = p.scroll + p.marginMin;
        hasMovedMin = true;
      }
      if (!moveOnly && p.size < p.minSize) {
        p.size = p.minSize;
        allowReduce = false;
      }
      if (p.pos + p.get("wsize") > p.scroll + p.clientSize - p.marginMax) {
        if (!moveOnly && hasMovedMin && allowReduce) {
          p.size = Math.min(p.size, p.get(dim == "y" ? "fitsize" : "maxsize"));
        } else if (p.get("wsize") < p.get("fitsize")) {
          p.pos = p.scroll + p.clientSize - p.marginMax - p.get("wsize");
        } else {
          p.pos = p.scroll + p.marginMin;
          if (!moveOnly && allowReduce)
            p.size = p.get(dim == "y" ? "fitsize" : "maxsize");
        }
      }
      if (!moveOnly && p.size < p.minSize) {
        p.size = p.minSize;
        allowReduce = false;
      }
      if (p.pos < p.marginMin) {
        var tmpMin = p.pos;
        p.pos = p.marginMin;
        if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);
      }
    },
    correctRatio: function (ratio) {
      var x = this.x,
        y = this.y,
        changed = false,
        xSize = Math.min(x.full, x.size),
        ySize = Math.min(y.full, y.size),
        useBox = this.useBox || hs.padToMinWidth;
      if (xSize / ySize > ratio) {
        xSize = ySize * ratio;
        if (xSize < x.minSize) {
          xSize = x.minSize;
          ySize = xSize / ratio;
        }
        changed = true;
      } else if (xSize / ySize < ratio) {
        ySize = xSize / ratio;
        changed = true;
      }
      if (hs.padToMinWidth && x.full < x.minSize) {
        x.imgSize = x.full;
        y.size = y.imgSize = y.full;
      } else if (this.useBox) {
        x.imgSize = xSize;
        y.imgSize = ySize;
      } else {
        x.size = xSize;
        y.size = ySize;
      }
      changed = this.fitOverlayBox(this.useBox ? null : ratio, changed);
      if (useBox && y.size < y.imgSize) {
        y.imgSize = y.size;
        x.imgSize = y.size * ratio;
      }
      if (changed || useBox) {
        x.pos = x.tpos - x.cb + x.tb;
        x.minSize = x.size;
        this.justify(x, true);
        y.pos = y.tpos - y.cb + y.tb;
        y.minSize = y.size;
        this.justify(y, true);
        if (this.overlayBox) this.sizeOverlayBox();
      }
    },
    fitOverlayBox: function (ratio, changed) {
      var x = this.x,
        y = this.y;
      if (this.overlayBox && (this.isImage || this.allowHeightReduction)) {
        while (
          y.size > this.minHeight &&
          x.size > this.minWidth &&
          y.get("wsize") > y.get("fitsize")
        ) {
          y.size -= 10;
          if (ratio) x.size = y.size * ratio;
          this.sizeOverlayBox(0, 1);
          changed = true;
        }
      }
      return changed;
    },
    show: function () {
      var x = this.x,
        y = this.y;
      this.doShowHide("hidden");
      this.changeSize(
        1,
        {
          wrapper: {
            width: x.get("wsize"),
            height: y.get("wsize"),
            left: x.pos,
            top: y.pos,
          },
          content: {
            left: x.p1 + x.get("imgPad"),
            top: y.p1 + y.get("imgPad"),
            width: x.imgSize || x.size,
            height: y.imgSize || y.size,
          },
        },
        hs.expandDuration
      );
    },
    changeSize: function (up, to, dur) {
      if (this.outline && !this.outlineWhileAnimating) {
        if (up) this.outline.setPosition();
        else this.outline.destroy(this.isHtml && this.preserveContent);
      }
      if (!up) this.destroyOverlays();
      var exp = this,
        x = exp.x,
        y = exp.y,
        easing = this.easing;
      if (!up) easing = this.easingClose || easing;
      var after = up
        ? function () {
            if (exp.outline) exp.outline.table.style.visibility = "visible";
            setTimeout(function () {
              exp.afterExpand();
            }, 50);
          }
        : function () {
            exp.afterClose();
          };
      if (up)
        hs.setStyles(this.wrapper, {
          width: x.t + "px",
          height: y.t + "px",
        });
      if (up && this.isHtml) {
        hs.setStyles(this.wrapper, {
          left: x.tpos - x.cb + x.tb + "px",
          top: y.tpos - y.cb + y.tb + "px",
        });
      }
      if (this.fadeInOut) {
        hs.setStyles(this.wrapper, {
          opacity: up ? 0 : 1,
        });
        hs.extend(to.wrapper, {
          opacity: up,
        });
      }
      hs.animate(this.wrapper, to.wrapper, {
        duration: dur,
        easing: easing,
        step: function (val, args) {
          if (exp.outline && exp.outlineWhileAnimating && args.prop == "top") {
            var fac = up ? args.pos : 1 - args.pos;
            var pos = {
              w: x.t + (x.get("wsize") - x.t) * fac,
              h: y.t + (y.get("wsize") - y.t) * fac,
              x: x.tpos + (x.pos - x.tpos) * fac,
              y: y.tpos + (y.pos - y.tpos) * fac,
            };
            exp.outline.setPosition(pos, 0, 1);
          }
          if (exp.isHtml) {
            if (args.prop == "left")
              exp.mediumContent.style.left = x.pos - val + "px";
            if (args.prop == "top")
              exp.mediumContent.style.top = y.pos - val + "px";
          }
        },
      });
      hs.animate(this.content, to.content, dur, easing, after);
      if (up) {
        this.wrapper.style.visibility = "visible";
        this.content.style.visibility = "visible";
        if (this.isHtml) this.innerContent.style.visibility = "visible";
        this.a.className += " highslide-active-anchor";
      }
    },
    afterExpand: function () {
      this.isExpanded = true;
      this.focus();
      if (this.isHtml && this.objectLoadTime == "after")
        this.writeExtendedContent();
      if (this.iframe) {
        try {
          var exp = this,
            doc =
              this.iframe.contentDocument || this.iframe.contentWindow.document;
          hs.addEventListener(doc, "mousedown", function () {
            if (hs.focusKey != exp.key) exp.focus();
          });
        } catch (e) {}
        if (hs.ie && typeof this.isClosing != "boolean")
          this.iframe.style.width = this.objectWidth - 1 + "px";
      }
      if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
      this.prepareNextOutline();
      var p = hs.page,
        mX = hs.mouse.x + p.scrollLeft,
        mY = hs.mouse.y + p.scrollTop;
      this.mouseIsOver =
        this.x.pos < mX &&
        mX < this.x.pos + this.x.get("wsize") &&
        this.y.pos < mY &&
        mY < this.y.pos + this.y.get("wsize");
      if (this.overlayBox) this.showOverlays();
    },
    prepareNextOutline: function () {
      var key = this.key;
      var outlineType = this.outlineType;
      new hs.Outline(outlineType, function () {
        try {
          hs.expanders[key].preloadNext();
        } catch (e) {}
      });
    },
    preloadNext: function () {
      var next = this.getAdjacentAnchor(1);
      if (next && next.onclick.toString().match(/hs\.expand/))
        var img = hs.createElement("img", {
          src: hs.getSrc(next),
        });
    },
    getAdjacentAnchor: function (op) {
      var current = this.getAnchorIndex(),
        as = hs.anchors.groups[this.slideshowGroup || "none"];
      return (as && as[current + op]) || null;
    },
    getAnchorIndex: function () {
      var arr = hs.getAnchors().groups[this.slideshowGroup || "none"];
      if (arr)
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == this.a) return i;
        }
      return null;
    },
    cancelLoading: function () {
      hs.discardElement(this.wrapper);
      hs.expanders[this.key] = null;
      if (this.loading) hs.loading.style.left = "-9999px";
    },
    writeCredits: function () {
      this.credits = hs.createElement("a", {
        href: hs.creditsHref,
        target: hs.creditsTarget,
        className: "highslide-credits",
        innerHTML: hs.lang.creditsText,
        title: hs.lang.creditsTitle,
      });
      this.createOverlay({
        overlayId: this.credits,
        position: this.creditsPosition || "top left",
      });
    },
    getInline: function (types, addOverlay) {
      for (var i = 0; i < types.length; i++) {
        var type = types[i],
          s = null;
        if (!this[type + "Id"] && this.thumbsUserSetId)
          this[type + "Id"] = type + "-for-" + this.thumbsUserSetId;
        if (this[type + "Id"]) this[type] = hs.getNode(this[type + "Id"]);
        if (!this[type] && !this[type + "Text"] && this[type + "Eval"])
          try {
            s = eval(this[type + "Eval"]);
          } catch (e) {}
        if (!this[type] && this[type + "Text"]) {
          s = this[type + "Text"];
        }
        if (!this[type] && !s) {
          this[type] = hs.getNode(this.a["_" + type + "Id"]);
          if (!this[type]) {
            var next = this.a.nextSibling;
            while (next && !hs.isHsAnchor(next)) {
              if (
                new RegExp("highslide-" + type).test(next.className || null)
              ) {
                if (!next.id)
                  this.a["_" + type + "Id"] = next.id = "hsId" + hs.idCounter++;
                this[type] = hs.getNode(next.id);
                break;
              }
              next = next.nextSibling;
            }
          }
        }
        if (!this[type] && s)
          this[type] = hs.createElement("div", {
            className: "highslide-" + type,
            innerHTML: s,
          });
        if (addOverlay && this[type]) {
          var o = {
            position: type == "heading" ? "above" : "below",
          };
          for (var x in this[type + "Overlay"])
            o[x] = this[type + "Overlay"][x];
          o.overlayId = this[type];
          this.createOverlay(o);
        }
      }
    },
    doShowHide: function (visibility) {
      if (hs.hideSelects) this.showHideElements("SELECT", visibility);
      if (hs.hideIframes) this.showHideElements("IFRAME", visibility);
      if (hs.geckoMac) this.showHideElements("*", visibility);
    },
    showHideElements: function (tagName, visibility) {
      var els = document.getElementsByTagName(tagName);
      var prop = tagName == "*" ? "overflow" : "visibility";
      for (var i = 0; i < els.length; i++) {
        if (
          prop == "visibility" ||
          document.defaultView
            .getComputedStyle(els[i], "")
            .getPropertyValue("overflow") == "auto" ||
          els[i].getAttribute("hidden-by") != null
        ) {
          var hiddenBy = els[i].getAttribute("hidden-by");
          if (visibility == "visible" && hiddenBy) {
            hiddenBy = hiddenBy.replace("[" + this.key + "]", "");
            els[i].setAttribute("hidden-by", hiddenBy);
            if (!hiddenBy) els[i].style[prop] = els[i].origProp;
          } else if (visibility == "hidden") {
            var elPos = hs.getPosition(els[i]);
            elPos.w = els[i].offsetWidth;
            elPos.h = els[i].offsetHeight;
            var clearsX =
              elPos.x + elPos.w < this.x.get("opos") ||
              elPos.x > this.x.get("opos") + this.x.get("osize");
            var clearsY =
              elPos.y + elPos.h < this.y.get("opos") ||
              elPos.y > this.y.get("opos") + this.y.get("osize");
            var wrapperKey = hs.getWrapperKey(els[i]);
            if (!clearsX && !clearsY && wrapperKey != this.key) {
              if (!hiddenBy) {
                els[i].setAttribute("hidden-by", "[" + this.key + "]");
                els[i].origProp = els[i].style[prop];
                els[i].style[prop] = "hidden";
              } else if (hiddenBy.indexOf("[" + this.key + "]") == -1) {
                els[i].setAttribute(
                  "hidden-by",
                  hiddenBy + "[" + this.key + "]"
                );
              }
            } else if (
              (hiddenBy == "[" + this.key + "]" || hs.focusKey == wrapperKey) &&
              wrapperKey != this.key
            ) {
              els[i].setAttribute("hidden-by", "");
              els[i].style[prop] = els[i].origProp || "";
            } else if (
              hiddenBy &&
              hiddenBy.indexOf("[" + this.key + "]") > -1
            ) {
              els[i].setAttribute(
                "hidden-by",
                hiddenBy.replace("[" + this.key + "]", "")
              );
            }
          }
        }
      }
    },
    focus: function () {
      this.wrapper.style.zIndex = hs.zIndexCounter += 2;
      for (var i = 0; i < hs.expanders.length; i++) {
        if (hs.expanders[i] && i == hs.focusKey) {
          var blurExp = hs.expanders[i];
          blurExp.content.className +=
            " highslide-" + blurExp.contentType + "-blur";
          if (blurExp.isImage) {
            blurExp.content.style.cursor = hs.ieLt7 ? "hand" : "pointer";
            blurExp.content.title = hs.lang.focusTitle;
          }
        }
      }
      if (this.outline)
        this.outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
      this.content.className = "highslide-" + this.contentType;
      if (this.isImage) {
        this.content.title = hs.lang.restoreTitle;
        if (hs.restoreCursor) {
          hs.styleRestoreCursor = window.opera
            ? "pointer"
            : "url(" + hs.graphicsDir + hs.restoreCursor + "), pointer";
          if (hs.ieLt7 && hs.uaVersion < 6) hs.styleRestoreCursor = "hand";
          this.content.style.cursor = hs.styleRestoreCursor;
        }
      }
      hs.focusKey = this.key;
      hs.addEventListener(
        document,
        window.opera ? "keypress" : "keydown",
        hs.keyHandler
      );
    },
    moveTo: function (x, y) {
      this.x.setPos(x);
      this.y.setPos(y);
    },
    resize: function (e) {
      var w,
        h,
        r = e.width / e.height;
      w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
      if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;
      h = this.isHtml ? e.height + e.dY : w / r;
      if (h < Math.min(this.minHeight, this.y.full)) {
        h = Math.min(this.minHeight, this.y.full);
        if (this.isImage) w = h * r;
      }
      this.resizeTo(w, h);
    },
    resizeTo: function (w, h) {
      this.y.setSize(h);
      this.x.setSize(w);
      this.wrapper.style.height = this.y.get("wsize") + "px";
    },
    close: function () {
      if (this.isClosing || !this.isExpanded) return;
      this.isClosing = true;
      hs.removeEventListener(
        document,
        window.opera ? "keypress" : "keydown",
        hs.keyHandler
      );
      try {
        if (this.isHtml) this.htmlPrepareClose();
        this.content.style.cursor = "default";
        this.changeSize(
          0,
          {
            wrapper: {
              width: this.x.t,
              height: this.y.t,
              left: this.x.tpos - this.x.cb + this.x.tb,
              top: this.y.tpos - this.y.cb + this.y.tb,
            },
            content: {
              left: 0,
              top: 0,
              width: this.x.t,
              height: this.y.t,
            },
          },
          hs.restoreDuration
        );
      } catch (e) {
        this.afterClose();
      }
    },
    htmlPrepareClose: function () {
      if (hs.geckoMac) {
        if (!hs.mask)
          hs.mask = hs.createElement(
            "div",
            null,
            {
              position: "absolute",
            },
            hs.container
          );
        hs.setStyles(hs.mask, {
          width: this.x.size + "px",
          height: this.y.size + "px",
          left: this.x.pos + "px",
          top: this.y.pos + "px",
          display: "block",
        });
      }
      if (this.objectType == "swf")
        try {
          hs.$(this.body.id).StopPlay();
        } catch (e) {}
      if (this.objectLoadTime == "after" && !this.preserveContent)
        this.destroyObject();
      if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent)
        this.scrollerDiv.style.overflow = "hidden";
    },
    destroyObject: function () {
      if (hs.ie && this.iframe)
        try {
          this.iframe.contentWindow.document.body.innerHTML = "";
        } catch (e) {}
      if (this.objectType == "swf") swfobject.removeSWF(this.body.id);
      this.body.innerHTML = "";
    },
    sleep: function () {
      if (this.outline) this.outline.table.style.display = "none";
      this.releaseMask = null;
      this.wrapper.style.display = "none";
      this.isExpanded = false;
      hs.push(hs.sleeping, this);
    },
    awake: function () {
      try {
        hs.expanders[this.key] = this;
        if (!hs.allowMultipleInstances && hs.focusKey != this.key) {
          try {
            hs.expanders[hs.focusKey].close();
          } catch (e) {}
        }
        var z = hs.zIndexCounter++,
          stl = {
            display: "",
            zIndex: z,
          };
        hs.setStyles(this.wrapper, stl);
        this.isClosing = false;
        var o = this.outline || 0;
        if (o) {
          if (!this.outlineWhileAnimating) stl.visibility = "hidden";
          hs.setStyles(o.table, stl);
        }
        this.show();
      } catch (e) {}
    },
    createOverlay: function (o) {
      var el = o.overlayId;
      if (typeof el == "string") el = hs.getNode(el);
      if (o.html)
        el = hs.createElement("div", {
          innerHTML: o.html,
        });
      if (!el || typeof el == "string") return;
      el.style.display = "block";
      this.genOverlayBox();
      var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : "auto";
      if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width))
        width = "200px";
      var overlay = hs.createElement(
        "div",
        {
          id: "hsId" + hs.idCounter++,
          hsId: o.hsId,
        },
        {
          position: "absolute",
          visibility: "hidden",
          width: width,
          direction: hs.lang.cssDirection || "",
          opacity: 0,
        },
        this.overlayBox,
        true
      );
      overlay.appendChild(el);
      hs.extend(overlay, {
        opacity: 1,
        offsetX: 0,
        offsetY: 0,
        dur:
          o.fade === 0 || o.fade === false || (o.fade == 2 && hs.ie) ? 0 : 250,
      });
      hs.extend(overlay, o);
      if (this.gotOverlays) {
        this.positionOverlay(overlay);
        if (!overlay.hideOnMouseOut || this.mouseIsOver)
          hs.animate(
            overlay,
            {
              opacity: overlay.opacity,
            },
            overlay.dur
          );
      }
      hs.push(this.overlays, hs.idCounter - 1);
    },
    positionOverlay: function (overlay) {
      var p = overlay.position || "middle center",
        offX = overlay.offsetX,
        offY = overlay.offsetY;
      if (overlay.parentNode != this.overlayBox)
        this.overlayBox.appendChild(overlay);
      if (/left$/.test(p)) overlay.style.left = offX + "px";
      if (/center$/.test(p))
        hs.setStyles(overlay, {
          left: "50%",
          marginLeft: offX - Math.round(overlay.offsetWidth / 2) + "px",
        });
      if (/right$/.test(p)) overlay.style.right = -offX + "px";
      if (/^leftpanel$/.test(p)) {
        hs.setStyles(overlay, {
          right: "100%",
          marginRight: this.x.cb + "px",
          top: -this.y.cb + "px",
          bottom: -this.y.cb + "px",
          overflow: "auto",
        });
        this.x.p1 = overlay.offsetWidth;
      } else if (/^rightpanel$/.test(p)) {
        hs.setStyles(overlay, {
          left: "100%",
          marginLeft: this.x.cb + "px",
          top: -this.y.cb + "px",
          bottom: -this.y.cb + "px",
          overflow: "auto",
        });
        this.x.p2 = overlay.offsetWidth;
      }
      if (/^top/.test(p)) overlay.style.top = offY + "px";
      if (/^middle/.test(p))
        hs.setStyles(overlay, {
          top: "50%",
          marginTop: offY - Math.round(overlay.offsetHeight / 2) + "px",
        });
      if (/^bottom/.test(p)) overlay.style.bottom = -offY + "px";
      if (/^above$/.test(p)) {
        hs.setStyles(overlay, {
          left: -this.x.p1 - this.x.cb + "px",
          right: -this.x.p2 - this.x.cb + "px",
          bottom: "100%",
          marginBottom: this.y.cb + "px",
          width: "auto",
        });
        this.y.p1 = overlay.offsetHeight;
      } else if (/^below$/.test(p)) {
        hs.setStyles(overlay, {
          position: "relative",
          left: -this.x.p1 - this.x.cb + "px",
          right: -this.x.p2 - this.x.cb + "px",
          top: "100%",
          marginTop: this.y.cb + "px",
          width: "auto",
        });
        this.y.p2 = overlay.offsetHeight;
        overlay.style.position = "absolute";
      }
    },
    getOverlays: function () {
      this.getInline(["heading", "caption"], true);
      if (this.heading && this.dragByHeading)
        this.heading.className += " highslide-move";
      if (hs.showCredits) this.writeCredits();
      for (var i = 0; i < hs.overlays.length; i++) {
        var o = hs.overlays[i],
          tId = o.thumbnailId,
          sg = o.slideshowGroup;
        if (
          (!tId && !sg) ||
          (tId && tId == this.thumbsUserSetId) ||
          (sg && sg === this.slideshowGroup)
        ) {
          if (this.isImage || (this.isHtml && o.useOnHtml))
            this.createOverlay(o);
        }
      }
      var os = [];
      for (var i = 0; i < this.overlays.length; i++) {
        var o = hs.$("hsId" + this.overlays[i]);
        if (/panel$/.test(o.position)) this.positionOverlay(o);
        else hs.push(os, o);
      }
      for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
      this.gotOverlays = true;
    },
    genOverlayBox: function () {
      if (!this.overlayBox)
        this.overlayBox = hs.createElement(
          "div",
          {
            className: this.wrapperClassName,
          },
          {
            position: "absolute",
            width:
              (this.x.size ||
                (this.useBox ? this.width : null) ||
                this.x.full) + "px",
            height: (this.y.size || this.y.full) + "px",
            visibility: "hidden",
            overflow: "hidden",
            zIndex: hs.ie ? 4 : "auto",
          },
          hs.container,
          true
        );
    },
    sizeOverlayBox: function (doWrapper, doPanels) {
      var overlayBox = this.overlayBox,
        x = this.x,
        y = this.y;
      hs.setStyles(overlayBox, {
        width: x.size + "px",
        height: y.size + "px",
      });
      if (doWrapper || doPanels) {
        for (var i = 0; i < this.overlays.length; i++) {
          var o = hs.$("hsId" + this.overlays[i]);
          var ie6 = hs.ieLt7 || document.compatMode == "BackCompat";
          if (o && /^(above|below)$/.test(o.position)) {
            if (ie6) {
              o.style.width =
                overlayBox.offsetWidth + 2 * x.cb + x.p1 + x.p2 + "px";
            }
            y[o.position == "above" ? "p1" : "p2"] = o.offsetHeight;
          }
          if (o && ie6 && /^(left|right)panel$/.test(o.position)) {
            o.style.height = overlayBox.offsetHeight + 2 * y.cb + "px";
          }
        }
      }
      if (doWrapper) {
        hs.setStyles(this.content, {
          top: y.p1 + "px",
        });
        hs.setStyles(overlayBox, {
          top: y.p1 + y.cb + "px",
        });
      }
    },
    showOverlays: function () {
      var b = this.overlayBox;
      b.className = "";
      hs.setStyles(b, {
        top: this.y.p1 + this.y.cb + "px",
        left: this.x.p1 + this.x.cb + "px",
        overflow: "visible",
      });
      if (hs.safari) b.style.visibility = "visible";
      this.wrapper.appendChild(b);
      for (var i = 0; i < this.overlays.length; i++) {
        var o = hs.$("hsId" + this.overlays[i]);
        o.style.zIndex = o.zIndex || 4;
        if (!o.hideOnMouseOut || this.mouseIsOver) {
          o.style.visibility = "visible";
          hs.setStyles(o, {
            visibility: "visible",
            display: "",
          });
          hs.animate(
            o,
            {
              opacity: o.opacity,
            },
            o.dur
          );
        }
      }
    },
    destroyOverlays: function () {
      if (!this.overlays.length) return;
      if (this.isHtml && this.preserveContent) {
        this.overlayBox.style.top = "-9999px";
        hs.container.appendChild(this.overlayBox);
      } else hs.discardElement(this.overlayBox);
    },
    createFullExpand: function () {
      this.fullExpandLabel = hs.createElement("a", {
        href: "javascript:hs.expanders[" + this.key + "].doFullExpand();",
        title: hs.lang.fullExpandTitle,
        className: "highslide-full-expand",
      });
      this.createOverlay({
        overlayId: this.fullExpandLabel,
        position: hs.fullExpandPosition,
        hideOnMouseOut: true,
        opacity: hs.fullExpandOpacity,
      });
    },
    doFullExpand: function () {
      try {
        if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);
        this.focus();
        var xSize = this.x.size;
        this.resizeTo(this.x.full, this.y.full);
        var xpos = this.x.pos - (this.x.size - xSize) / 2;
        if (xpos < hs.marginLeft) xpos = hs.marginLeft;
        this.moveTo(xpos, this.y.pos);
        this.doShowHide("hidden");
      } catch (e) {
        this.error(e);
      }
    },
    afterClose: function () {
      this.a.className = this.a.className.replace(
        "highslide-active-anchor",
        ""
      );
      this.doShowHide("visible");
      if (this.isHtml && this.preserveContent) {
        this.sleep();
      } else {
        if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
        hs.discardElement(this.wrapper);
      }
      if (hs.mask) hs.mask.style.display = "none";
      hs.expanders[this.key] = null;
      hs.reOrder();
    },
  };
  hs.Ajax = function (a, content, pre) {
    this.a = a;
    this.content = content;
    this.pre = pre;
  };
  hs.Ajax.prototype = {
    run: function () {
      var xhr;
      if (!this.src) this.src = hs.getSrc(this.a);
      if (this.src.match("#")) {
        var arr = this.src.split("#");
        this.src = arr[0];
        this.id = arr[1];
      }
      if (hs.cachedGets[this.src]) {
        this.cachedGet = hs.cachedGets[this.src];
        if (this.id) this.getElementContent();
        else this.loadHTML();
        return;
      }
      try {
        xhr = new XMLHttpRequest();
      } catch (e) {
        try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
            this.onError();
          }
        }
      }
      var pThis = this;
      xhr.onreadystatechange = function () {
        if (pThis.xhr.readyState == 4) {
          if (pThis.id) pThis.getElementContent();
          else pThis.loadHTML();
        }
      };
      var src = this.src;
      this.xhr = xhr;
      if (hs.forceAjaxReload)
        src = src.replace(
          /$/,
          (/\?/.test(src) ? "&" : "?") + "dummy=" + new Date().getTime()
        );
      xhr.open("GET", src, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(null);
    },
    getElementContent: function () {
      hs.init();
      var attribs =
        window.opera || hs.ie6SSL
          ? {
              src: "about:blank",
            }
          : null;
      this.iframe = hs.createElement(
        "iframe",
        attribs,
        {
          position: "absolute",
          top: "-9999px",
        },
        hs.container
      );
      this.loadHTML();
    },
    loadHTML: function () {
      var s = this.cachedGet || this.xhr.responseText,
        regBody;
      if (this.pre) hs.cachedGets[this.src] = s;
      if (!hs.ie || hs.uaVersion >= 5.5) {
        s = s
          .replace(new RegExp("<link[^>]*>", "gi"), "")
          .replace(new RegExp("<script[^>]*>.*?</script>", "gi"), "");
        if (this.iframe) {
          var doc = this.iframe.contentDocument;
          if (!doc && this.iframe.contentWindow)
            doc = this.iframe.contentWindow.document;
          if (!doc) {
            var pThis = this;
            setTimeout(function () {
              pThis.loadHTML();
            }, 25);
            return;
          }
          doc.open();
          doc.write(s);
          doc.close();
          try {
            s = doc.getElementById(this.id).innerHTML;
          } catch (e) {
            try {
              s = this.iframe.document.getElementById(this.id).innerHTML;
            } catch (e) {}
          }
          hs.discardElement(this.iframe);
        } else {
          regBody = /(<body[^>]*>|<\/body>)/gi;
          if (regBody.test(s)) s = s.split(regBody)[hs.ieLt9 ? 1 : 2];
        }
      }
      hs.getElementByClass(this.content, "DIV", "highslide-body").innerHTML = s;
      this.onLoad();
      for (var x in this) this[x] = null;
    },
  };
  hs.langDefaults = hs.lang;
  var HsExpander = hs.Expander;
  if (hs.ie && window == window.top) {
    (function () {
      try {
        document.documentElement.doScroll("left");
      } catch (e) {
        setTimeout(arguments.callee, 50);
        return;
      }
      hs.ready();
    })();
  }
  hs.addEventListener(document, "DOMContentLoaded", hs.ready);
  hs.addEventListener(window, "load", hs.ready);
  hs.addEventListener(document, "ready", function () {
    if (hs.expandCursor) {
      var style = hs.createElement(
        "style",
        {
          type: "text/css",
        },
        null,
        document.getElementsByTagName("HEAD")[0]
      );
      function addRule(sel, dec) {
        if (hs.ie && hs.uaVersion < 9) {
          var last = document.styleSheets[document.styleSheets.length - 1];
          if (typeof last.addRule == "object") last.addRule(sel, dec);
        } else {
          style.appendChild(document.createTextNode(sel + " {" + dec + "}"));
        }
      }
      function fix(prop) {
        return (
          "expression( ( ( ignoreMe = document.documentElement." +
          prop +
          " ? document.documentElement." +
          prop +
          " : document.body." +
          prop +
          " ) ) + 'px' );"
        );
      }
      if (hs.expandCursor)
        addRule(
          ".highslide img",
          "cursor: url(" +
            hs.graphicsDir +
            hs.expandCursor +
            "), pointer !important;"
        );
    }
  });
  hs.addEventListener(window, "resize", function () {
    hs.getPageSize();
  });
  hs.addEventListener(document, "mousemove", function (e) {
    hs.mouse = {
      x: e.clientX,
      y: e.clientY,
    };
  });
  hs.addEventListener(document, "mousedown", hs.mouseClickHandler);
  hs.addEventListener(document, "mouseup", hs.mouseClickHandler);
  hs.addEventListener(document, "ready", hs.getAnchors);
  hs.addEventListener(window, "load", hs.preloadImages);
  hs.addEventListener(window, "load", hs.preloadAjax);
}

//<script type="text/javascript" src="{site_url}/static/js/jquery.nanoscroller.min.js"></script>
/*! nanoScrollerJS v0.7.1 (c) 2013 James Florentino; Licensed MIT */

(function (e, t, n) {
  "use strict";
  var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x;
  (S = {
    paneClass: "pane",
    sliderClass: "slider",
    contentClass: "content",
    iOSNativeScrolling: !1,
    preventPageScrolling: !1,
    disableResize: !1,
    alwaysVisible: !1,
    flashDelay: 1500,
    sliderMinHeight: 20,
    sliderMaxHeight: null,
  }),
    (y = "scrollbar"),
    (g = "scroll"),
    (l = "mousedown"),
    (c = "mousemove"),
    (p = "mousewheel"),
    (h = "mouseup"),
    (m = "resize"),
    (u = "drag"),
    (w = "up"),
    (v = "panedown"),
    (s = "DOMMouseScroll"),
    (o = "down"),
    (E = "wheel"),
    (a = "keydown"),
    (f = "keyup"),
    (b = "touchmove"),
    (r =
      t.navigator.appName === "Microsoft Internet Explorer" &&
      /msie 7./i.test(t.navigator.appVersion) &&
      t.ActiveXObject),
    (i = null),
    (x = function () {
      var e, t, r;
      return (
        (e = n.createElement("div")),
        (t = e.style),
        (t.position = "absolute"),
        (t.width = "100px"),
        (t.height = "100px"),
        (t.overflow = g),
        (t.top = "-9999px"),
        n.body.appendChild(e),
        (r = e.offsetWidth - e.clientWidth),
        n.body.removeChild(e),
        r
      );
    }),
    (d = (function () {
      function a(r, s) {
        (this.el = r),
          (this.options = s),
          i || (i = x()),
          (this.$el = e(this.el)),
          (this.doc = e(n)),
          (this.win = e(t)),
          (this.$content = this.$el.children("." + s.contentClass)),
          this.$content.attr("tabindex", 0),
          (this.content = this.$content[0]),
          this.options.iOSNativeScrolling &&
          this.el.style.WebkitOverflowScrolling != null
            ? this.nativeScrolling()
            : this.generate(),
          this.createEvents(),
          this.addEvents(),
          this.reset();
      }
      return (
        (a.prototype.preventScrolling = function (e, t) {
          if (!this.isActive) return;
          if (e.type === s)
            ((t === o && e.originalEvent.detail > 0) ||
              (t === w && e.originalEvent.detail < 0)) &&
              e.preventDefault();
          else if (e.type === p) {
            if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
            ((t === o && e.originalEvent.wheelDelta < 0) ||
              (t === w && e.originalEvent.wheelDelta > 0)) &&
              e.preventDefault();
          }
        }),
        (a.prototype.nativeScrolling = function () {
          this.$content.css({
            WebkitOverflowScrolling: "touch",
          }),
            (this.iOSNativeScrolling = !0),
            (this.isActive = !0);
        }),
        (a.prototype.updateScrollValues = function () {
          var e;
          (e = this.content),
            (this.maxScrollTop = e.scrollHeight - e.clientHeight),
            (this.contentScrollTop = e.scrollTop),
            this.iOSNativeScrolling ||
              ((this.maxSliderTop = this.paneHeight - this.sliderHeight),
              (this.sliderTop =
                (this.contentScrollTop * this.maxSliderTop) /
                this.maxScrollTop));
        }),
        (a.prototype.createEvents = function () {
          var e = this;
          this.events = {
            down: function (t) {
              return (
                (e.isBeingDragged = !0),
                (e.offsetY = t.pageY - e.slider.offset().top),
                e.pane.addClass("active"),
                e.doc.bind(c, e.events[u]).bind(h, e.events[w]),
                !1
              );
            },
            drag: function (t) {
              return (
                (e.sliderY = t.pageY - e.$el.offset().top - e.offsetY),
                e.scroll(),
                e.updateScrollValues(),
                e.contentScrollTop >= e.maxScrollTop
                  ? e.$el.trigger("scrollend")
                  : e.contentScrollTop === 0 && e.$el.trigger("scrolltop"),
                !1
              );
            },
            up: function (t) {
              return (
                (e.isBeingDragged = !1),
                e.pane.removeClass("active"),
                e.doc.unbind(c, e.events[u]).unbind(h, e.events[w]),
                !1
              );
            },
            resize: function (t) {
              e.reset();
            },
            panedown: function (t) {
              return (
                (e.sliderY =
                  (t.offsetY || t.originalEvent.layerY) - e.sliderHeight * 0.5),
                e.scroll(),
                e.events.down(t),
                !1
              );
            },
            scroll: function (t) {
              if (e.isBeingDragged) return;
              e.updateScrollValues(),
                e.iOSNativeScrolling ||
                  ((e.sliderY = e.sliderTop),
                  e.slider.css({
                    top: e.sliderTop,
                  }));
              if (t == null) return;
              e.contentScrollTop >= e.maxScrollTop
                ? (e.options.preventPageScrolling && e.preventScrolling(t, o),
                  e.$el.trigger("scrollend"))
                : e.contentScrollTop === 0 &&
                  (e.options.preventPageScrolling && e.preventScrolling(t, w),
                  e.$el.trigger("scrolltop"));
            },
            wheel: function (t) {
              if (t == null) return;
              return (e.sliderY += -t.wheelDeltaY || -t.delta), e.scroll(), !1;
            },
          };
        }),
        (a.prototype.addEvents = function () {
          var e;
          this.removeEvents(),
            (e = this.events),
            this.options.disableResize || this.win.bind(m, e[m]),
            this.iOSNativeScrolling ||
              (this.slider.bind(l, e[o]),
              this.pane.bind(l, e[v]).bind("" + p + " " + s, e[E])),
            this.$content.bind("" + g + " " + p + " " + s + " " + b, e[g]);
        }),
        (a.prototype.removeEvents = function () {
          var e;
          (e = this.events),
            this.win.unbind(m, e[m]),
            this.iOSNativeScrolling ||
              (this.slider.unbind(), this.pane.unbind()),
            this.$content.unbind("" + g + " " + p + " " + s + " " + b, e[g]);
        }),
        (a.prototype.generate = function () {
          var e, t, n, r, s;
          return (
            (n = this.options),
            (r = n.paneClass),
            (s = n.sliderClass),
            (e = n.contentClass),
            !this.$el.find("" + r).length &&
              !this.$el.find("" + s).length &&
              this.$el.append(
                '<div class="' + r + '"><div class="' + s + '" /></div>'
              ),
            (this.slider = this.$el.find("." + s)),
            (this.pane = this.$el.find("." + r)),
            i &&
              ((t =
                this.$el.css("direction") === "rtl"
                  ? {
                      left: -i,
                    }
                  : {
                      right: -i,
                    }),
              this.$el.addClass("has-scrollbar")),
            t != null && this.$content.css(t),
            this
          );
        }),
        (a.prototype.restore = function () {
          (this.stopped = !1), this.pane.show(), this.addEvents();
        }),
        (a.prototype.reset = function () {
          var e, t, n, s, o, u, a, f, l;
          if (this.iOSNativeScrolling) {
            this.contentHeight = this.content.scrollHeight;
            return;
          }
          return (
            this.$el.find("." + this.options.paneClass).length ||
              this.generate().stop(),
            this.stopped && this.restore(),
            (e = this.content),
            (n = e.style),
            (s = n.overflowY),
            r &&
              this.$content.css({
                height: this.$content.height(),
              }),
            (t = e.scrollHeight + i),
            (u = this.pane.outerHeight()),
            (f = parseInt(this.pane.css("top"), 10)),
            (o = parseInt(this.pane.css("bottom"), 10)),
            (a = u + f + o),
            (l = Math.round((a / t) * a)),
            l < this.options.sliderMinHeight
              ? (l = this.options.sliderMinHeight)
              : this.options.sliderMaxHeight != null &&
                l > this.options.sliderMaxHeight &&
                (l = this.options.sliderMaxHeight),
            s === g && n.overflowX !== g && (l += i),
            (this.maxSliderTop = a - l),
            (this.contentHeight = t),
            (this.paneHeight = u),
            (this.paneOuterHeight = a),
            (this.sliderHeight = l),
            this.slider.height(l),
            this.events.scroll(),
            this.pane.show(),
            (this.isActive = !0),
            e.scrollHeight === e.clientHeight ||
            (this.pane.outerHeight(!0) >= e.scrollHeight && s !== g)
              ? (this.pane.hide(), (this.isActive = !1))
              : this.el.clientHeight === e.scrollHeight && s === g
              ? this.slider.hide()
              : this.slider.show(),
            this.pane.css({
              opacity: this.options.alwaysVisible ? 1 : "",
              visibility: this.options.alwaysVisible ? "visible" : "",
            }),
            this
          );
        }),
        (a.prototype.scroll = function () {
          if (!this.isActive) return;
          return (
            (this.sliderY = Math.max(0, this.sliderY)),
            (this.sliderY = Math.min(this.maxSliderTop, this.sliderY)),
            this.$content.scrollTop(
              (((this.paneHeight - this.contentHeight + i) * this.sliderY) /
                this.maxSliderTop) *
                -1
            ),
            this.iOSNativeScrolling ||
              this.slider.css({
                top: this.sliderY,
              }),
            this
          );
        }),
        (a.prototype.scrollBottom = function (e) {
          if (!this.isActive) return;
          return (
            this.reset(),
            this.$content
              .scrollTop(this.contentHeight - this.$content.height() - e)
              .trigger(p),
            this
          );
        }),
        (a.prototype.scrollTop = function (e) {
          if (!this.isActive) return;
          return this.reset(), this.$content.scrollTop(+e).trigger(p), this;
        }),
        (a.prototype.scrollTo = function (t) {
          if (!this.isActive) return;
          return this.reset(), this.scrollTop(e(t).get(0).offsetTop), this;
        }),
        (a.prototype.stop = function () {
          return (
            (this.stopped = !0), this.removeEvents(), this.pane.hide(), this
          );
        }),
        (a.prototype.flash = function () {
          var e = this;
          if (!this.isActive) return;
          return (
            this.reset(),
            this.pane.addClass("flashed"),
            setTimeout(function () {
              e.pane.removeClass("flashed");
            }, this.options.flashDelay),
            this
          );
        }),
        a
      );
    })()),
    (e.fn.nanoScroller = function (t) {
      return this.each(function () {
        var n, r;
        (r = this.nanoscroller) ||
          ((n = e.extend({}, S, t)), (this.nanoscroller = r = new d(this, n)));
        if (t && typeof t == "object") {
          e.extend(r.options, t);
          if (t.scrollBottom) return r.scrollBottom(t.scrollBottom);
          if (t.scrollTop) return r.scrollTop(t.scrollTop);
          if (t.scrollTo) return r.scrollTo(t.scrollTo);
          if (t.scroll === "bottom") return r.scrollBottom(0);
          if (t.scroll === "top") return r.scrollTop(0);
          if (t.scroll && t.scroll instanceof e) return r.scrollTo(t.scroll);
          if (t.stop) return r.stop();
          if (t.flash) return r.flash();
        }
        return r.reset();
      });
    });
})(jQuery, window, document);

//dic123.js
//----vietnamese--type-----------------------------------------------getWordFromEvent

function btnVietkey_onclick() {
  var srcStr = document.getElementById("btnVietkey").src;
  obj = getCookieUniKey("HIM_on_off");
  if (obj == 1) {
    setMethod(-1);
    setCookie("HIM_on_off", 0, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/E.png";
  } else {
    setMethod(1);
    setCookie("HIM_on_off", 1, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/V.png";
  }
  return true;
}

va = "email".split(",");
method = 0;
on_off = 0;
dockspell = 1;
dauCu = 1;
useCookie = 1;
radioID =
  "him_auto,him_telex,him_vni,him_viqr,him_viqr2,him_off,him_ckspell,him_daucu".split(
    ","
  );
var agt = navigator.userAgent.toLowerCase(),
  alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM ",
  them,
  spellerr,
  setCookie,
  getCookie;
var is_ie = agt.indexOf("msie") != -1 && agt.indexOf("opera") == -1,
  S,
  F,
  J,
  R,
  X,
  D,
  oc,
  sk,
  saveStr,
  wi,
  frame,
  is_opera = false,
  D2,
  isKHTML = false;
var ver = 0,
  support = true,
  changed = false,
  specialChange = false,
  uni,
  uni2,
  g,
  h,
  SFJRX,
  DAWEO,
  Z,
  AEO,
  moc,
  trang,
  kl = 0,
  tw5,
  range = null,
  doc,
  fID = document.getElementsByTagName("iframe");
skey = new Array(
  97,
  226,
  259,
  101,
  234,
  105,
  111,
  244,
  417,
  117,
  432,
  121,
  65,
  194,
  258,
  69,
  202,
  73,
  79,
  212,
  416,
  85,
  431,
  89
);
var skey2 = "a,a,a,e,e,i,o,o,o,u,u,y,A,A,A,E,E,I,O,O,O,U,U,Y".split(","),
  A,
  E,
  O,
  whit = false,
  english = "ĐÂĂƠƯÊÔ",
  lowen = "đâăơưêô",
  ds1 = "d,D".split(","),
  db1 = new Array(273, 272);
(os1 = "o,O,ơ,Ơ,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(",")),
  (ob1 = "ô,Ô,ô,Ô,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(","));
mocs1 =
  "o,O,ô,Ô,u,U,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ú,Ú,ù,Ù,ụ,Ụ,ủ,Ủ,ũ,Ũ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(
    ","
  );
mocb1 =
  "ơ,Ơ,ơ,Ơ,ư,Ư,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ,ứ,Ứ,ừ,Ừ,ự,Ự,ử,Ử,ữ,Ữ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(
    ","
  );
trangs1 = "a,A,â,Â,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ".split(",");
trangb1 = "ă,Ă,ă,Ă,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ".split(",");
as1 =
  "a,A,ă,Ă,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(
    ","
  );
ab1 =
  "â,Â,â,Â,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(
    ","
  );
es1 = "e,E,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(",");
eb1 = "ê,Ê,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(",");
arA = "á,à,ả,ã,ạ,a,Á,À,Ả,Ã,Ạ,A".split(",");
mocrA = "ó,ò,ỏ,õ,ọ,o,ú,ù,ủ,ũ,ụ,u,Ó,Ò,Ỏ,Õ,Ọ,O,Ú,Ù,Ủ,Ũ,Ụ,U".split(",");
erA = "é,è,ẻ,ẽ,ẹ,e,É,È,Ẻ,Ẽ,Ẹ,E".split(",");
orA = "ó,ò,ỏ,õ,ọ,o,Ó,Ò,Ỏ,Õ,Ọ,O".split(",");
aA = "ấ,ầ,ẩ,ẫ,ậ,â,Ấ,Ầ,Ẩ,Ẫ,Ậ,Â".split(",");
mocA = "ớ,ờ,ở,ỡ,ợ,ơ,ứ,ừ,ử,ữ,ự,ư,Ớ,Ờ,Ở,Ỡ,Ợ,Ơ,Ứ,Ừ,Ử,Ữ,Ự,Ư".split(",");
trangA = "ắ,ằ,ẳ,ẵ,ặ,ă,Ắ,Ằ,Ẳ,Ẵ,Ặ,Ă".split(",");
eA = "ế,ề,ể,ễ,ệ,ê,Ế,Ề,Ể,Ễ,Ệ,Ê".split(",");
oA = "ố,ồ,ổ,ỗ,ộ,ô,Ố,Ồ,Ổ,Ỗ,Ộ,Ô".split(",");
function notWord(w) {
  var str = " \r\n#,\\;.:-_()<>+-*/=?!\"$%{}[]'~|^@&\t" + fcc(160);
  return str.indexOf(w) >= 0;
}
function nan(w) {
  if (isNaN(w) || w == "e") return true;
  else return false;
}
function mozGetText(obj) {
  var v,
    pos,
    w = "";
  g = 1;
  v = obj.data ? obj.data : obj.value;
  if (v.length <= 0) return false;
  if (!obj.data) {
    if (!obj.setSelectionRange) return false;
    pos = obj.selectionStart;
  } else pos = obj.pos;
  if (obj.selectionStart != obj.selectionEnd) return new Array("", pos);
  while (1) {
    if (pos - g < 0) break;
    else if (notWord(v.substr(pos - g, 1))) {
      if (v.substr(pos - g, 1) == "\\") w = v.substr(pos - g, 1) + w;
      break;
    } else w = v.substr(pos - g, 1) + w;
    g++;
  }
  return new Array(w, pos);
}
function start(obj, key) {
  var w = "",
    nnc;
  oc = obj;
  uni2 = false;
  if (method == 0) {
    uni = "D,A,E,O,W,W".split(",");
    uni2 = "9,6,6,6,7,8".split(",");
    D2 = "DAWEO6789";
  } else if (method == 1) {
    uni = "D,A,E,O,W,W".split(",");
    D2 = "DAWEO";
  } else if (method == 2) {
    uni = "9,6,6,6,7,8".split(",");
    D2 = "6789";
  } else if (method == 3) {
    uni = "D,^,^,^,+,(".split(",");
    D2 = "D^+(";
  } else if (method == 4) {
    uni = "D,^,^,^,*,(".split(",");
    D2 = "D^*(";
  }
  if (!is_ie) {
    key = fcc(key.which);
    w = mozGetText(obj);
    if (D2.indexOf(up(key)) >= 0) nnc = true;
    else nnc = false;
    if (!w || obj.sel) return;
    main(w[0], key, w[1], uni, nnc);
    if (!dockspell) w = mozGetText(obj);
    if (w && uni2 && !changed) main(w[0], key, w[1], uni2, nnc);
  } else {
    obj = ieGetText(obj);
    if (obj) {
      var sT = obj.cW.text;
      w = main(obj.cW.text, key, 0, uni, false);
      if (uni2 && (w == sT || typeof w == "undefined"))
        w = main(obj.cW.text, key, 0, uni2, false);
      if (w) obj.cW.text = w;
    }
  }
  if (D2.indexOf(up(key)) >= 0) {
    if (!is_ie) {
      w = mozGetText(obj);
      if (!w) return;
      normC(w[0], key, w[1]);
    } else if (typeof obj == "object") {
      obj = ieGetText(obj);
      if (obj) {
        w = obj.cW.text;
        if (!changed) {
          w += key;
          changed = true;
        }
        obj.cW.text = w;
        w = normC(w, key, 0);
        if (w) {
          obj = ieGetText(obj);
          obj.cW.text = w;
        }
      }
    }
  }
}
function ieGetText(obj) {
  var caret = obj.document.selection.createRange(),
    w = "";
  if (caret.text) caret.text = "";
  else {
    while (1) {
      caret.moveStart("character", -1);
      if (w.length == caret.text.length) break;
      w = caret.text;
      if (notWord(w.charAt(0))) {
        if (w.charCodeAt(0) == 13) w = w.substr(2);
        else if (w.charAt(0) != "\\") w = w.substr(1);
        break;
      }
    }
  }
  if (w.length) {
    caret.collapse(false);
    caret.moveStart("character", -w.length);
    obj.cW = caret.duplicate();
    return obj;
  } else return false;
}
function ie_replaceChar(w, pos, c) {
  var r = "",
    uc = 0;
  if (isNaN(c)) uc = up(c);
  if (
    whit &&
    up(w.substr(w.length - pos - 1, 1)) == "U" &&
    pos != 1 &&
    up(w.substr(w.length - pos - 2, 1)) != "Q"
  ) {
    whit = false;
    if (up(unV(fcc(c))) == "Ơ" || uc == "O") {
      if (w.substr(w.length - pos - 1, 1) == "u") r = fcc(432);
      else r = fcc(431);
    }
    if (uc == "O") {
      if (c == "o") c = 417;
      else c = 416;
    }
  }
  if (!isNaN(c)) {
    changed = true;
    r += fcc(c);
    return (
      w.substr(0, w.length - pos - r.length + 1) +
      r +
      w.substr(w.length - pos + 1)
    );
  } else return w.substr(0, w.length - pos) + c + w.substr(w.length - pos + 1);
}
function tr(k, w, by, sf, i) {
  var r,
    pos = findC(w, k, sf);
  if (pos) {
    if (pos[1]) {
      if (is_ie) return ie_replaceChar(w, pos[0], pos[1]);
      else return replaceChar(oc, i - pos[0], pos[1]);
    } else {
      var c,
        pC = w.substr(w.length - pos, 1),
        cmp;
      r = sf;
      for (g = 0; g < r.length; g++) {
        if (nan(r[g]) || r[g] == "e") cmp = pC;
        else cmp = pC.charCodeAt(0);
        if (cmp == r[g]) {
          if (!nan(by[g])) c = by[g];
          else c = by[g].charCodeAt(0);
          if (is_ie) return ie_replaceChar(w, pos, c);
          else return replaceChar(oc, i - pos, c);
        }
      }
    }
  }
  return false;
}
function main(w, k, i, a, nnc) {
  var uk = up(k),
    bya = new Array(db1, ab1, eb1, ob1, mocb1, trangb1),
    got = false,
    t = "d,D,a,A,a,A,o,O,u,U,e,E,o,O".split(",");
  var sfa = new Array(ds1, as1, es1, os1, mocs1, trangs1),
    by = new Array(),
    sf = new Array();
  if (method == 2 || (method == 0 && a[0] == "9")) {
    DAWEO = "6789";
    SFJRX = "12534";
    S = "1";
    F = "2";
    J = "5";
    R = "3";
    X = "4";
    Z = "0";
    D = "9";
    FRX = "234";
    AEO = "6";
    moc = "7";
    trang = "8";
    them = "678";
    A = "^";
    E = "^";
    O = "^";
  } else if (method == 3) {
    DAWEO = "^+(D";
    SFJRX = "'`.?~";
    S = "'";
    F = "`";
    J = ".";
    R = "?";
    X = "~";
    Z = "-";
    D = "D";
    FRX = "`?~";
    AEO = "^";
    moc = "+";
    trang = "(";
    them = "^+(";
    A = "^";
    E = "^";
    O = "^";
  } else if (method == 4) {
    DAWEO = "^*(D";
    SFJRX = "'`.?~";
    S = "'";
    F = "`";
    J = ".";
    R = "?";
    X = "~";
    Z = "-";
    D = "D";
    FRX = "`?~";
    AEO = "^";
    moc = "*";
    trang = "(";
    them = "^*(";
    A = "^";
    E = "^";
    O = "^";
  } else if (method == 1 || (method == 0 && a[0] == "D")) {
    SFJRX = "SFJRX";
    DAWEO = "DAWEO";
    D = "D";
    S = "S";
    F = "F";
    J = "J";
    R = "R";
    X = "X";
    Z = "Z";
    FRX = "FRX";
    them = "AOEW";
    trang = "W";
    moc = "W";
    A = "A";
    E = "E";
    O = "O";
  }
  if (SFJRX.indexOf(uk) >= 0) {
    var ret = sr(w, k, i);
    got = true;
    if (ret) return ret;
  } else if (uk == Z) {
    sf = repSign(null);
    for (h = 0; h < english.length; h++) {
      sf[sf.length] = lowen.charCodeAt(h);
      sf[sf.length] = english.charCodeAt(h);
    }
    for (h = 0; h < 5; h++)
      for (g = 0; g < skey.length; g++) by[by.length] = skey[g];
    for (h = 0; h < t.length; h++) by[by.length] = t[h];
    got = true;
  } else
    for (h = 0; h < a.length; h++)
      if (a[h] == uk) {
        got = true;
        by = by.concat(bya[h]);
        sf = sf.concat(sfa[h]);
      }
  if (uk == moc) whit = true;
  if (!got) {
    if (nnc) return;
    return normC(w, k, i);
  }
  return DAWEOZ(k, w, by, sf, i, uk);
}
function DAWEOZ(k, w, by, sf, i, uk) {
  if (DAWEO.indexOf(uk) >= 0 || Z.indexOf(uk) >= 0) return tr(k, w, by, sf, i);
}
function normC(w, k, i) {
  var uk = up(k),
    u = repSign(null),
    fS,
    c,
    j,
    space = k.charCodeAt(0) == 32 ? true : false;
  if (!is_ie && space) return;
  for (j = 1; j <= w.length; j++) {
    for (h = 0; h < u.length; h++) {
      if (u[h] == w.charCodeAt(w.length - j)) {
        if (h <= 23) fS = S;
        else if (h <= 47) fS = F;
        else if (h <= 71) fS = J;
        else if (h <= 95) fS = R;
        else fS = X;
        c = skey[h % 24];
        if (alphabet.indexOf(uk) < 0 && D2.indexOf(uk) < 0) return w;
        w = unV(w);
        if (!space && !changed) w += k;
        if (!is_ie) {
          var sp = oc.selectionStart,
            pos = sp;
          if (!changed) {
            var sst = oc.scrollTop;
            pos += k.length;
            if (!oc.data) {
              oc.value =
                oc.value.substr(0, sp) + k + oc.value.substr(oc.selectionEnd);
              changed = true;
              oc.scrollTop = sst;
            } else {
              oc.insertData(oc.pos, k);
              oc.pos++;
              range.setEnd(oc, oc.pos);
              specialChange = true;
            }
          }
          if (!oc.data) oc.setSelectionRange(pos, pos);
          if (!ckspell(w, fS)) {
            replaceChar(oc, i - j, c);
            if (!oc.data) {
              var a = new Array(D);
              main(w, fS, pos, a, false);
            } else {
              var ww = mozGetText(oc);
              var a = new Array(D);
              main(ww[0], fS, ww[1], a, false);
            }
          }
        } else {
          var ret = sr(w, fS, 0);
          if (space && ret) ret += fcc(32);
          if (ret) return ret;
        }
      }
    }
  }
}
function nospell(w, k) {
  return false;
}
function ckspell(w, k) {
  w = unV(w);
  var exc = "UOU,IEU".split(","),
    z,
    next = true,
    noE = "UU,UOU,UOI,IEU,AO,IA,AI,AY,AU,AO".split(","),
    noBE = "YEU",
    test,
    a,
    b;
  var check = true,
    noM = "UE,UYE,IU,EU,UY".split(","),
    noMT = "AY,AU".split(","),
    noT = "UA",
    t = -1,
    notV2 = "IAO";
  var uw = up(w),
    tw = uw,
    update = false,
    gi = "IO",
    noAOEW = "OE,OO,AO,EO,IA,AI".split(","),
    noAOE = "OA";
  var notViet = "AA,AE,EE,OU,YY,YI,IY,EY,EA,EI,II,IO,YO,YA,OOO".split(","),
    uk = up(k),
    twE,
    uw2 = unV2(uw);
  var vSConsonant = "B,C,D,G,H,K,L,M,N,P,Q,R,S,T,V,X".split(","),
    vDConsonant = "CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(",");
  var vDConsonantE = "CH,NG,NH".split(","),
    sConsonant = "C,P,T,CH".split(","),
    vSConsonantE = "C,M,N,P,T".split(",");
  var noNHE = "O,U,IE,Ô,Ơ,Ư,IÊ,Ă,Â,UYE,UYÊ,UO,ƯƠ,ƯO,UƠ,UA,ƯA,OĂ,OE,OÊ".split(
      ","
    ),
    oMoc = "UU,UOU".split(",");
  if (FRX.indexOf(uk) >= 0)
    for (a = 0; a < sConsonant.length; a++)
      if (
        uw.substr(uw.length - sConsonant[a].length, sConsonant[a].length) ==
        sConsonant[a]
      )
        return true;
  for (a = 0; a < uw.length; a++) {
    if ("FJZW1234567890".indexOf(uw.substr(a, 1)) >= 0) return true;
    for (b = 0; b < notViet.length; b++) {
      if (uw2.substr(a, notViet[b].length) == notViet[b]) {
        for (z = 0; z < exc.length; z++)
          if (uw2.indexOf(exc[z]) >= 0) next = false;
        if (
          next &&
          (gi.indexOf(notViet[b]) < 0 || a <= 0 || uw2.substr(a - 1, 1) != "G")
        )
          return true;
      }
    }
  }
  for (b = 0; b < vDConsonant.length; b++)
    if (tw.indexOf(vDConsonant[b]) == 0) {
      tw = tw.substr(vDConsonant[b].length);
      update = true;
      t = b;
      break;
    }
  if (!update)
    for (b = 0; b < vSConsonant.length; b++)
      if (tw.indexOf(vSConsonant[b]) == 0) {
        tw = tw.substr(1);
        break;
      }
  update = false;
  twE = tw;
  for (b = 0; b < vDConsonantE.length; b++) {
    if (tw.substr(tw.length - vDConsonantE[b].length) == vDConsonantE[b]) {
      tw = tw.substr(0, tw.length - vDConsonantE[b].length);
      if (b == 2) {
        for (z = 0; z < noNHE.length; z++) if (tw == noNHE[z]) return true;
        if (uk == trang && (tw == "OA" || tw == "A")) return true;
      }
      update = true;
      break;
    }
  }
  if (!update)
    for (b = 0; b < vSConsonantE.length; b++)
      if (tw.substr(tw.length - 1) == vSConsonantE[b]) {
        tw = tw.substr(0, tw.length - 1);
        break;
      }
  if (tw) {
    for (a = 0; a < vDConsonant.length; a++) {
      for (b = 0; b < tw.length; b++) {
        if (tw.substr(b, vDConsonant[a].length) == vDConsonant[a]) return true;
      }
    }
    for (a = 0; a < vSConsonant.length; a++) {
      if (tw.indexOf(vSConsonant[a]) >= 0) return true;
    }
  }
  test = tw.substr(0, 1);
  if (t == 3 && (test == "A" || test == "O" || test == "U" || test == "Y"))
    return true;
  if (t == 5 && (test == "E" || test == "I" || test == "Y")) return true;
  uw2 = unV2(tw);
  if (uw2 == notV2) return true;
  if (tw != twE)
    for (z = 0; z < noE.length; z++) if (uw2 == noE[z]) return true;
  if (tw != uw && uw2 == noBE) return true;
  if (uk != moc)
    for (z = 0; z < oMoc.length; z++) if (tw == oMoc[z]) return true;
  if (uw2.indexOf("UYE") > 0 && uk == "E") check = false;
  if (them.indexOf(uk) >= 0 && check) {
    for (a = 0; a < noAOEW.length; a++)
      if (uw2.indexOf(noAOEW[a]) >= 0) return true;
    if (uk != trang) if (uw2 == noAOE) return true;
    if (uk == trang && trang != "W") if (uw2 == noT) return true;
    if (uk == moc)
      for (a = 0; a < noM.length; a++) if (uw2 == noM[a]) return true;
    if (uk == moc || uk == trang)
      for (a = 0; a < noMT.length; a++) if (uw2 == noMT[a]) return true;
  }
  tw5 = tw;
  if (uw2.charCodeAt(0) == 272 || uw2.charCodeAt(0) == 273) {
    if (uw2.length > 4) return true;
  } else if (uw2.length > 3) return true;
  return false;
}
function DAWEOF(cc, k) {
  var ret = new Array(),
    kA = new Array(A, moc, trang, E, O),
    z,
    a;
  ret[0] = g;
  var ccA = new Array(aA, mocA, trangA, eA, oA),
    ccrA = new Array(arA, mocrA, arA, erA, orA);
  for (a = 0; a < kA.length; a++)
    if (k == kA[a])
      for (z = 0; z < ccA[a].length; z++)
        if (cc == ccA[a][z]) ret[1] = ccrA[a][z];
  if (ret[1]) return ret;
  else return false;
}
function findC(w, k, sf) {
  if ((method == 3 || method == 4) && w.substr(w.length - 1, 1) == "\\")
    return new Array(1, k.charCodeAt(0));
  var str = "",
    res,
    cc = "",
    pc = "",
    tE = "",
    vowA = new Array(),
    s = "ÂĂÊÔƠƯêâăơôư",
    c = 0,
    dn = false,
    uw = up(w),
    tv;
  var DAWEOFA =
    aA.join() + eA.join() + mocA.join() + trangA.join() + oA.join() + english;
  DAWEOFA = up(DAWEOFA);
  for (g = 0; g < sf.length; g++) {
    if (nan(sf[g])) str += sf[g];
    else str += fcc(sf[g]);
  }
  var uk = up(k),
    i = w.length,
    uni_array = repSign(k),
    w2 = up(unV2(unV(w))),
    dont = "ƯA,ƯU".split(",");
  if (DAWEO.indexOf(uk) >= 0) {
    if (uk == moc) {
      if (w2.indexOf("UU") >= 0 && tw5 != dont[1]) {
        if (w2.indexOf("UU") == w.length - 2) res = 2;
        else return false;
      } else if (w2.indexOf("UOU") >= 0) {
        if (w2.indexOf("UOU") == w.length - 3) res = 2;
        else return false;
      }
    }
    if (!res) {
      for (g = 1; g <= w.length; g++) {
        cc = w.substr(w.length - g, 1);
        pc = up(w.substr(w.length - g - 1, 1));
        uc = up(cc);
        for (h = 0; h < dont.length; h++)
          if (tw5 == dont[h] && tw5 == unV(pc + uc)) dn = true;
        if (dn) {
          dn = false;
          continue;
        }
        if (str.indexOf(uc) >= 0) {
          if (
            (uk == moc &&
              unV(uc) == "U" &&
              up(unV(w.substr(w.length - g + 1, 1))) == "A") ||
            (uk == trang && unV(uc) == "A" && unV(pc) == "U")
          ) {
            if (unV(uc) == "U") tv = 1;
            else tv = 2;
            ccc = up(w.substr(w.length - g - tv, 1));
            if (ccc != "Q") res = g + tv - 1;
            else if (uk == trang) res = g;
            else if (moc != trang) return false;
          } else res = g;
          if (!whit || uw.indexOf("Ư") < 0 || uw.indexOf("W") < 0) break;
        } else if (DAWEOFA.indexOf(uc) >= 0) {
          if (uk == D) {
            if (cc == "đ") res = new Array(g, "d");
            else if (cc == "Đ") res = new Array(g, "D");
          } else res = DAWEOF(cc, uk);
          if (res) break;
        }
      }
    }
  }
  if (uk != Z && DAWEO.indexOf(uk) < 0) {
    var tEC = retKC(uk);
    for (g = 0; g < tEC.length; g++) tE += fcc(tEC[g]);
  }
  for (g = 1; g <= w.length; g++) {
    if (DAWEO.indexOf(uk) < 0) {
      cc = up(w.substr(w.length - g, 1));
      pc = up(w.substr(w.length - g - 1, 1));
      if (str.indexOf(cc) >= 0) {
        if (cc == "U") {
          if (pc != "Q") {
            c++;
            vowA[vowA.length] = g;
          }
        } else if (cc == "I") {
          if (pc != "G" || c <= 0) {
            c++;
            vowA[vowA.length] = g;
          }
        } else {
          c++;
          vowA[vowA.length] = g;
        }
      } else if (uk != Z) {
        for (h = 0; h < uni_array.length; h++)
          if (uni_array[h] == w.charCodeAt(w.length - g)) {
            if (spellerr(w, k)) return false;
            return new Array(g, tEC[h % 24]);
          }
        for (h = 0; h < tEC.length; h++)
          if (tEC[h] == w.charCodeAt(w.length - g))
            return new Array(g, fcc(skey[h]));
      }
    }
  }
  if (uk != Z && typeof res != "object") if (spellerr(w, k)) return false;
  if (DAWEO.indexOf(uk) < 0) {
    for (g = 1; g <= w.length; g++) {
      if (uk != Z && s.indexOf(w.substr(w.length - g, 1)) >= 0) return g;
      else if (tE.indexOf(w.substr(w.length - g, 1)) >= 0) {
        for (h = 0; h < tEC.length; h++) {
          if (w.substr(w.length - g, 1).charCodeAt(0) == tEC[h])
            return new Array(g, fcc(skey[h]));
        }
      }
    }
  }
  if (res) return res;
  if (c == 1 || uk == Z) return vowA[0];
  else if (c == 2) {
    var v = 2;
    if (w.substr(w.length - 1) == " ") v = 3;
    var ttt = up(w.substr(w.length - v, 2));
    if (dauCu == 0 && (ttt == "UY" || ttt == "OA" || ttt == "OE"))
      return vowA[0];
    var c2 = 0,
      fdconsonant,
      sc = "BCD" + fcc(272) + "GHKLMNPQRSTVX",
      dc = "CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(",");
    for (h = 1; h <= w.length; h++) {
      fdconsonant = false;
      for (g = 0; g < dc.length; g++) {
        if (
          up(w.substr(w.length - h - dc[g].length + 1, dc[g].length)).indexOf(
            dc[g]
          ) >= 0
        ) {
          c2++;
          fdconsonant = true;
          if (dc[g] != "NGH") h++;
          else h += 2;
        }
      }
      if (!fdconsonant) {
        if (sc.indexOf(up(w.substr(w.length - h, 1))) >= 0) c2++;
        else break;
      }
    }
    if (c2 == 1 || c2 == 2) return vowA[0];
    else return vowA[1];
  } else if (c == 3) return vowA[1];
  else return false;
}
function unV(w) {
  var u = repSign(null),
    b,
    a;
  for (a = 1; a <= w.length; a++) {
    for (b = 0; b < u.length; b++) {
      if (u[b] == w.charCodeAt(w.length - a)) {
        w =
          w.substr(0, w.length - a) +
          fcc(skey[b % 24]) +
          w.substr(w.length - a + 1);
      }
    }
  }
  return w;
}
function unV2(w) {
  var a, b;
  for (a = 1; a <= w.length; a++) {
    for (b = 0; b < skey.length; b++) {
      if (skey[b] == w.charCodeAt(w.length - a))
        w = w.substr(0, w.length - a) + skey2[b] + w.substr(w.length - a + 1);
    }
  }
  return w;
}
function repSign(k) {
  var t = new Array(),
    u = new Array(),
    a,
    b;
  for (a = 0; a < 5; a++) {
    if (k == null || SFJRX.substr(a, 1) != up(k)) {
      t = retKC(SFJRX.substr(a, 1));
      for (b = 0; b < t.length; b++) u[u.length] = t[b];
    }
  }
  return u;
}
function sr(w, k, i) {
  var sf = getSF();
  pos = findC(w, k, sf);
  if (pos) {
    if (pos[1]) {
      if (!is_ie) replaceChar(oc, i - pos[0], pos[1]);
      else return ie_replaceChar(w, pos[0], pos[1]);
    } else {
      var c = retUni(w, k, pos);
      if (!is_ie) replaceChar(oc, i - pos, c);
      else return ie_replaceChar(w, pos, c);
    }
  }
  return false;
}
function retUni(w, k, pos) {
  var u = retKC(up(k)),
    uC,
    lC,
    c = w.charCodeAt(w.length - pos),
    a;
  for (a = 0; a < skey.length; a++)
    if (skey[a] == c) {
      if (a < 12) {
        lC = a;
        uC = a + 12;
      } else {
        lC = a - 12;
        uC = a;
      }
      t = fcc(c);
      if (t != up(t)) return u[lC];
      return u[uC];
    }
}
function replaceChar(o, pos, c) {
  var bb = false;
  if (!nan(c)) {
    var replaceBy = fcc(c),
      wfix = up(unV(fcc(c)));
    changed = true;
  } else {
    var replaceBy = c;
    if (up(c) == "O" && whit) bb = true;
  }
  if (!o.data) {
    var savePos = o.selectionStart,
      sst = o.scrollTop;
    if (
      up(o.value.substr(pos - 1, 1)) == "U" &&
      pos < savePos - 1 &&
      up(o.value.substr(pos - 2, 1)) != "Q"
    ) {
      if (wfix == "Ơ" || bb) {
        if (o.value.substr(pos - 1, 1) == "u") var r = fcc(432);
        else var r = fcc(431);
      }
      if (bb) {
        changed = true;
        if (c == "o") replaceBy = "ơ";
        else replaceBy = "Ơ";
      }
    }
    o.value = o.value.substr(0, pos) + replaceBy + o.value.substr(pos + 1);
    if (r) o.value = o.value.substr(0, pos - 1) + r + o.value.substr(pos);
    o.setSelectionRange(savePos, savePos);
    o.scrollTop = sst;
  } else {
    if (up(o.data.substr(pos - 1, 1)) == "U" && pos < o.pos - 1) {
      if (wfix == "Ơ" || bb) {
        if (o.data.substr(pos - 1, 1) == "u") var r = fcc(432);
        else var r = fcc(431);
      }
      if (bb) {
        changed = true;
        if (c == "o") replaceBy = "ơ";
        else replaceBy = "Ơ";
      }
    }
    o.deleteData(pos, 1);
    o.insertData(pos, replaceBy);
    if (r) {
      o.deleteData(pos - 1, 1);
      o.insertData(pos - 1, r);
    }
  }
  if (whit) whit = false;
}
function retKC(k) {
  if (k == S)
    return new Array(
      225,
      7845,
      7855,
      233,
      7871,
      237,
      243,
      7889,
      7899,
      250,
      7913,
      253,
      193,
      7844,
      7854,
      201,
      7870,
      205,
      211,
      7888,
      7898,
      218,
      7912,
      221
    );
  if (k == F)
    return new Array(
      224,
      7847,
      7857,
      232,
      7873,
      236,
      242,
      7891,
      7901,
      249,
      7915,
      7923,
      192,
      7846,
      7856,
      200,
      7872,
      204,
      210,
      7890,
      7900,
      217,
      7914,
      7922
    );
  if (k == J)
    return new Array(
      7841,
      7853,
      7863,
      7865,
      7879,
      7883,
      7885,
      7897,
      7907,
      7909,
      7921,
      7925,
      7840,
      7852,
      7862,
      7864,
      7878,
      7882,
      7884,
      7896,
      7906,
      7908,
      7920,
      7924
    );
  if (k == R)
    return new Array(
      7843,
      7849,
      7859,
      7867,
      7875,
      7881,
      7887,
      7893,
      7903,
      7911,
      7917,
      7927,
      7842,
      7848,
      7858,
      7866,
      7874,
      7880,
      7886,
      7892,
      7902,
      7910,
      7916,
      7926
    );
  if (k == X)
    return new Array(
      227,
      7851,
      7861,
      7869,
      7877,
      297,
      245,
      7895,
      7905,
      361,
      7919,
      7929,
      195,
      7850,
      7860,
      7868,
      7876,
      296,
      213,
      7894,
      7904,
      360,
      7918,
      7928
    );
}
function getEL(id) {
  return document.getElementById(id);
}
function getSF() {
  var sf = new Array(),
    x;
  for (x = 0; x < skey.length; x++) sf[sf.length] = fcc(skey[x]);
  return sf;
}
function statusMessage() {
  var str = "Kiểu gõ: ";
  if (on_off == 0) str += "Tắt";
  else if (method == 1) str += "TELEX";
  else if (method == 2) str += "VNI";
  else if (method == 3) str += "VIQR";
  else if (method == 4) str += "VIQR*";
  else if (method == 0) str += "Tự động";
  if (isKHTML) str += " [Alt-F9]";
  else str += " [F9]";
  str += " | Chính tả: ";
  str += dockspell == 0 ? "Tắt" : "Bật";
  if (isKHTML) str += " [Alt-F8]";
  else str += " [F8]";
  str += " | Bỏ dấu: ";
  str += dauCu == 1 ? "Cũ" : "Mới";
  if (isKHTML) str += " [Alt-F7]";
  else str += " [F7]";
  str += " | Bật/Tắt [F12] - AVIM 20070522";
  window.status = str;
}
function updateInfo() {
  setCookie();
  if (support) statusMessage();
}
function setMethod(m) {
  if (m == -1) {
    on_off = 0;
    if (getEL(radioID[5])) getEL(radioID[5]).checked = true;
  } else {
    on_off = 1;
    method = m;
    if (getEL(radioID[m])) getEL(radioID[m]).checked = true;
  }
  setSpell(dockspell);
  setDauCu(dauCu);
  updateInfo();
}
function setDauCu(box) {
  if (typeof box == "number") {
    dauCu = box;
    if (getEL(radioID[7])) getEL(radioID[7]).checked = box;
  } else dauCu = box.checked ? 1 : 0;
  updateInfo();
}
function setSpell(box) {
  if (typeof box == "number") {
    spellerr = box == 1 ? ckspell : nospell;
    if (getEL(radioID[6])) getEL(radioID[6]).checked = box;
  } else {
    if (box.checked) {
      spellerr = ckspell;
      dockspell = 1;
    } else {
      spellerr = nospell;
      dockspell = 0;
    }
  }
  updateInfo();
}
function onKeyDown(e) {
  if (e == "iframe") {
    frame = findF();
    var key = frame.event.keyCode;
  } else var key = !is_ie ? e.which : window.event.keyCode;
  if (key == 120 || key == 123 || key == 119 || key == 118) {
    if (key == 120) {
      on_off = 1;
      setMethod(method == 4 ? 0 : ++method);
    } else if (key == 118) {
      setDauCu(dauCu == 1 ? 0 : 1);
    } else if (key == 119) {
      dockspell = dockspell == 0 ? 1 : 0;
      setSpell(dockspell);
    } else if (key == 123) {
      on_off = on_off == 0 ? 1 : 0;
      if (on_off == 0) setMethod(-1);
      else setMethod(method);
    }
    updateInfo();
  }
}
function ifInit(w) {
  var sel = w.getSelection();
  range = sel ? sel.getRangeAt(0) : document.createRange();
}
function ifMoz(e) {
  var code = e.which,
    cwi = e.target.parentNode.wi;
  if (typeof cwi == "undefined") cwi = e.target.parentNode.parentNode.wi;
  if (e.ctrlKey || (e.altKey && code != 92 && code != 126)) return;
  ifInit(cwi);
  var node = range.endContainer,
    newPos;
  sk = fcc(code);
  saveStr = "";
  if (checkCode(code) || !range.startOffset || typeof node.data == "undefined")
    return;
  node.sel = false;
  if (node.data) {
    saveStr = node.data.substr(range.endOffset);
    if (range.startOffset != range.endOffset) node.sel = true;
    node.deleteData(range.startOffset, node.data.length);
  }
  range.setEnd(node, range.endOffset);
  range.setStart(node, 0);
  if (!node.data) return;
  node.value = node.data;
  node.pos = node.data.length;
  node.which = code;
  start(node, e);
  node.insertData(node.data.length, saveStr);
  newPos = node.data.length - saveStr.length + kl;
  range.setEnd(node, newPos);
  range.setStart(node, newPos);
  kl = 0;
  if (specialChange) {
    specialChange = false;
    changed = false;
    node.deleteData(node.pos - 1, 1);
  }
  if (changed) {
    changed = false;
    e.preventDefault();
  }
}
function FKeyPress() {
  var obj = findF();
  sk = fcc(obj.event.keyCode);
  if (
    checkCode(obj.event.keyCode) ||
    (obj.event.ctrlKey && obj.event.keyCode != 92 && obj.event.keyCode != 126)
  )
    return;
  start(obj, fcc(obj.event.keyCode));
}
function checkCode(code) {
  if (
    (on_off == 0 || (code < 45 && code != 42) || code == 145 || code == 255) &&
    code != 32 &&
    code != 39 &&
    code != 40 &&
    code != 43
  )
    return true;
  return false;
}
function fcc(x) {
  return String.fromCharCode(x);
}
if (useCookie == 1) {
  setCookie = doSetCookie;
  getCookie = doGetCookie;
} else {
  setCookie = noCookie;
  getCookie = noCookie;
}
function noCookie() {}
function doSetCookie() {
  var exp = new Date(11245711156480).toGMTString();
  document.cookie = "HIM_on_off=" + on_off + ";expires=" + exp + "; path=/";
  document.cookie = "HIM_method=" + method + ";expires=" + exp + "; path=/";
  document.cookie = "HIM_ckspell=" + dockspell + ";expires=" + exp + "; path=/";
  document.cookie = "HIM_daucu=" + dauCu + ";expires=" + exp + "; path=/";
}
function doGetCookie() {
  var ck = document.cookie,
    res = /HIM_method/.test(ck);
  if (!res || ck.indexOf("HIM_ckspell") < 0) {
    setCookie();
    return;
  }
  var p,
    ckA = ck.split(";");
  for (var i = 0; i < ckA.length; i++) {
    p = ckA[i].split("=");
    p[0] = p[0].replace(/^\s+/g, "");
    p[1] = parseInt(p[1]);
    if (p[0] == "HIM_on_off") on_off = p[1];
    else if (p[0] == "HIM_method") method = p[1];
    else if (p[0] == "HIM_ckspell") {
      if (p[1] == 0) {
        dockspell = 0;
        spellerr = nospell;
      } else {
        dockspell = 1;
        spellerr = ckspell;
      }
    } else if (p[0] == "HIM_daucu") dauCu = parseInt(p[1]);
  }
}
if (!is_ie) {
  if (agt.indexOf("opera") >= 0) {
    operaV = agt.split(" ");
    operaVersion = parseInt(operaV[operaV.length - 1]);
    if (operaVersion >= 8) is_opera = true;
    else {
      operaV = operaV[0].split("/");
      operaVersion = parseInt(operaV[1]);
      if (operaVersion >= 8) is_opera = true;
    }
  } else if (agt.indexOf("khtml") >= 0) isKHTML = true;
  else {
    ver = agt.substr(agt.indexOf("rv:") + 3);
    ver = parseFloat(ver.substr(0, ver.indexOf(" ")));
    if (agt.indexOf("mozilla") < 0) ver = 0;
  }
}
function up(w) {
  w = w.toUpperCase();
  if (isKHTML) {
    (str = "êôơâăưếốớấắứềồờầằừễỗỡẫẵữệộợậặự"),
      (rep = "ÊÔƠÂĂƯẾỐỚẤẮỨỀỒỜẦẰỪỄỖỠẪẴỮỆỘỢẶỰ");
    for (z = 0; z < w.length; z++) {
      io = str.indexOf(w.substr(z, 1));
      if (io >= 0) w = w.substr(0, z) + rep.substr(io, 1) + w.substr(z + 1);
    }
  }
  return w;
}
function findIgnore(el) {
  for (i = 0; i < va.length; i++)
    if (el.id == va[i] && va[i].length > 0) return true;
}
if (is_ie || ver >= 1.3 || is_opera || isKHTML) {
  getCookie();
  if (on_off == 0) setMethod(-1);
  else setMethod(method);
  setSpell(dockspell);
  setDauCu(dauCu);
  statusMessage();
} else support = false;
document.onkeydown = function (e) {
  onKeyDown(e);
};
document.onkeypress = function (e) {
  if (!support) return;
  if (!is_ie) {
    var el = e.target,
      code = e.which;
    if (e.ctrlKey) return;
    if (e.altKey && code != 92 && code != 126) return;
  } else {
    var el = window.event.srcElement,
      code = window.event.keyCode;
    if (event.ctrlKey && code != 92 && code != 126) return;
  }
  if ((el.type != "textarea" && el.type != "text") || checkCode(code)) return;
  sk = fcc(code);
  if (findIgnore(el)) return;
  if (!is_ie) start(el, e);
  else start(el, sk);
  if (changed) {
    changed = false;
    return false;
  }
};

function change_btnVietkey(m) {
  var srcStr = document.getElementById("btnVietkey").src;
  if (m == 1) {
    setMethod(-1);
    setCookie("HIM_on_off", 0, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/E.png";
  } else {
    setMethod(1);
    setCookie("HIM_on_off", 1, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/V.png";
  }
  return true;
}
function getCookieUniKey(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
function checkBtnUnikey() {
  obj = getCookieUniKey("HIM_on_off");
  if (obj == 1) {
    document.getElementById("btnVietkey").src = wgStylePath + "images/V.png";
  } else {
    document.getElementById("btnVietkey").src = wgStylePath + "images/E.png";
  }
}
function pgOnload() {
  var dict = readCookie("dictCookie");
  if (dict != null && dict.indexOf("vn_") != -1) {
    setMethod(1);
    setCookie("HIM_on_off", 1, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/V.png";
  } else {
    setMethod(-1);
    setCookie("HIM_on_off", 0, 365);
    document.getElementById("btnVietkey").src = wgStylePath + "images/E.png";
  }
  if (document.searchform.search) document.searchform.search.focus();
  showBottomBox();
}

function bb_bookmarksite(title, url) {
  if (document.all) window.external.AddFavorite(url, title);
  else if (window.sidebar) window.sidebar.addPanel(title, url, "");
}
function bb_bookmarksite(title, url) {
  if (document.all) window.external.AddFavorite(url, title);
  else if (window.sidebar) window.sidebar.addPanel(title, url, "");
}

/////------ONCLICK--SHOW--WORD---------------------------------
function vd_noErrorMessages() {
  return true;
}
window.onerror = vd_noErrorMessages;
if (typeof dictionaries == "undefined") {
  var dictionaries = "ev_ve";
}
var placeholderwritten = 0;
var vdict_offsetfromcursorX = 12;
var vdict_offsetfromcursorY = 10;
var vdict_ie = document.all;
var vdict_ns6 = document.getElementById && !document.all;
var vdict_enabletip = false;
var vdict_tipobj;
document.write(
  "<div id='addVdictOnYourWeb'  style='position: absolute;top: 0px;left: -300px;width: 300px;border: 1px solid black;padding: 2px;background-color: lightyellow;visibility: hidden;z-index: 999999;'>VDict quick lookup</div>"
);



function vdict_ietruebody() {
  return document.compatMode && document.compatMode != "BackCompat"
    ? document.documentElement
    : document.body;
}
function vdict_positiontip(e) {
  if (vdict_ie || vdict_ns6)
    vdict_tipobj = document.all
      ? document.all["addVdictOnYourWeb"]
      : document.getElementById
      ? document.getElementById("addVdictOnYourWeb")
      : "";

  if (vdict_enabletip) {
    var nondefaultpos = false;
    var curX = vdict_ns6
      ? e.pageX
      : event.clientX + vdict_ietruebody().scrollLeft;
    var curY = vdict_ns6
      ? e.pageY
      : event.clientY + vdict_ietruebody().scrollTop;
    var winwidth =
      vdict_ie && !window.opera
        ? vdict_ietruebody().clientWidth
        : window.innerWidth - 20;
    var winheight =
      vdict_ie && !window.opera
        ? vdict_ietruebody().clientHeight
        : window.innerHeight - 20;
    var rightedge =
      vdict_ie && !window.opera
        ? winwidth - event.clientX - vdict_offsetfromcursorX
        : winwidth - e.clientX - vdict_offsetfromcursorX;
    var bottomedge =
      vdict_ie && !window.opera
        ? winheight - event.clientY - vdict_offsetfromcursorY
        : winheight - e.clientY - vdict_offsetfromcursorY;
    var leftedge =
      vdict_offsetfromcursorX < 0 ? vdict_offsetfromcursorX * -1 : -1000;
    if (rightedge < vdict_tipobj.offsetWidth) {
      vdict_tipobj.style.left = curX - vdict_tipobj.offsetWidth + "px";
      nondefaultpos = true;
    } else if (curX < leftedge) {
      vdict_tipobj.style.left = "5px";
    } else {
      vdict_tipobj.style.left = curX + vdict_offsetfromcursorX + "px";
    }
    if (bottomedge < vdict_tipobj.offsetHeight) {
      vdict_tipobj.style.top =
        curY - vdict_tipobj.offsetHeight - vdict_offsetfromcursorY + "px";
      nondefaultpos = true;
    } else {
      vdict_tipobj.style.top = curY + vdict_offsetfromcursorY + "px";
    }
    vdict_tipobj.style.visibility = "visible";
  }
}

///RANDOM-HOST
function random_host() {}
var random_host = new random_host();
var number = 0;
random_host[number++] = "//dic.tienganh123.com/";
random_host[number++] = "//dic.tienganh123.com/";
random_host[number++] = "//dic.tienganh123.com/";

var random_number = Math.floor(Math.random() * number);
//window.open(random_host[random_number]);

var base_url = random_host[random_number];

var text = "";
function calldict(word, dict) {
  ///urlencode
  var ret = word;
  ret = ret.toString();
  ret = encodeURIComponent(ret);
  ret = ret.replace(/%20/g, "+");

  //add keyword
  var l = window.location;
  var base_urlroot = l.protocol + "//" + l.host + "/";
  /*=== add tu khi thanh vien click vao dich tu
	var url = base_urlroot+"ajax/keyword_warehouse/add_key?key="+ret;
	$.get(url, function(data){});
	*/

  vdict_url =
    base_url + "fast_dict.php?word=" + ret + "&dict=" + dict + "&m=yes";
  str =
    "<div style='float: left; border-bottom: 1px solid #000000; background: #ffffff;'>";
  str +=
    "<table border=0 width=300 cellspacing=0 cellpadding=0 bgcolor=#FFFFFF><tr><td width=60><a href='//www.tienganh123.com' target='_blank'><img src='" +
    base_url +
    "images/small_logo.gif' border=0 /></a>";
  str +=
    "</td><td>&nbsp;</td><td width=20><a href='#' onclick=\"doCloseVdict();return false;\"><img src='" +
    base_url +
    "image/close.gif' border=0 align=right/></a></td></tr></table>";
  str += "</div>";
  str += "<div>";
  str +=
    "<iframe id='myIframe' src='" +
    vdict_url +
    "' style='width: 100%; height: 200px; border: 0px;'></iframe>";
  str += "</div>";
  document.getElementById("addVdictOnYourWeb").innerHTML = str;
}
function doCloseVdict() {
  document.getElementById("addVdictOnYourWeb").innerHTML = "";
  document.getElementById("addVdictOnYourWeb").style.visibility = "hidden";
}

function ctrlrightclick(evt) {
  evt = evt ? evt : window.event ? window.event : "";
  if (!evt.ctrlKey) {
    return true;
  }
  return false;
}

function detectKey(evt) {
  evt = evt ? evt : window.event ? window.event : "";
  if (
    evt.type == "keydown" &&
    (evt.keyCode == "A".charCodeAt(0) || evt.keyCode == "a".charCodeAt(0))
  ) {
    if (evt.ctrlKey && evt.shiftKey) {
      text = document.all
        ? document.selection.createRange().text
        : document.getSelection();
      if (text.length > 1) {
        vdict_enabletip = true;
        vdict_positiontip(evt);
        calldict(text, dictionaries);
      }
    }
  }
  return true;
}
function doDblClick(evt) {
  evt = evt ? evt : window.event ? window.event : "";
  text = document.all
    ? document.selection.createRange().text
    : document.getSelection();

  text = text + "";

  if (text.length > 1) {
    text = text.toLowerCase();
    vdict_enabletip = true;
    vdict_positiontip(evt);
    calldict(text, dictionaries);
  }
  return true;
}
function getWordFromEvent(evt) {
  if (document.body && document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToPoint(evt.clientX, evt.clientY);
    range.expand("word");
    return range.text;
  } else if (evt.rangeParent && document.createRange) {
    var range = document.createRange();
    range.setStart(evt.rangeParent, evt.rangeOffset);
    range.setEnd(evt.rangeParent, evt.rangeOffset);
    expandRangeToWord(range);
    var word = range.toString();
    range.detach();
    return word;
  } else {
    return null;
  }
}
function expandRangeToWord(range) {
  var startOfWord = /^\s\S+$/;
  var endOfWord = /^\S+\s$/;
  var whitespace = /^\s+$/;
  range.setStart(range.startContainer, range.startOffset - 1);
  while (whitespace.test(range.toString())) {
    range.setEnd(range.endContainer, range.endOffset + 1);
    range.setStart(range.startContainer, range.startOffset + 1);
  }
  while (!startOfWord.test(range.toString())) {
    range.setStart(range.startContainer, range.startOffset - 1);
  }
  range.setStart(range.startContainer, range.startOffset + 1);
  while (!endOfWord.test(range.toString())) {
    range.setEnd(range.endContainer, range.endOffset + 1);
  }
  range.setEnd(range.endContainer, range.endOffset - 1);
  return range.toString();
}
function testSelectText(evt) {
  evt = evt ? evt : window.event ? window.event : "";
  text = getWordFromEvent(evt);
  alert(text);
  vdict_enabletip = true;
  vdict_positiontip(evt);
  calldict(text, dictionaries);
}
document.ondblclick = doDblClick;
document.onkeydown = detectKey;

//----AUTO--LOOKUP-----------------------------------------
if (typeof bsn == "undefined") _b = bsn = {};
if (typeof _b.Autosuggest == "undefined") _b.Autosuggest = {};
else alert("Autosuggest is already set!");
_b.AutoSuggest = function (id, param) {
  if (!document.getElementById) return 0;
  this.fld = _b.DOM.gE(id);
  if (!this.fld) return 0;
  this.sInp = "";
  this.nInpC = 0;
  this.aSug = [];
  this.iHigh = 0;
  this.oP = param ? param : {};
  var k,
    def = {
      minchars: 1,
      meth: "get",
      varname: "input",
      className: "autosuggest",
      timeout: 2500,
      delay: 500,
      offsety: -5,
      shownoresults: true,
      noresults: "No results!",
      maxheight: 250,
      cache: true,
      maxentries: 25,
    };
  for (k in def) {
    if (typeof this.oP[k] != typeof def[k]) this.oP[k] = def[k];
  }
  var p = this;
  this.fld.onkeypress = function (ev) {
    return p.onKeyPress(ev);
  };
  this.fld.onkeyup = function (ev) {
    return p.onkeyup(ev);
  };
  this.fld.setAttribute("autocomplete", "off");
};
_b.AutoSuggest.prototype.onKeyPress = function (ev) {
  var key = window.event ? window.event.keyCode : ev.keyCode;
  var RETURN = 13;
  var TAB = 9;
  var ESC = 27;
  var bubble = 1;
  switch (key) {
    case RETURN:
      this.setHighlightedValue();
      bubble = 0;
      break;
    case ESC:
      this.clearSuggestions();
      break;
  }
  return bubble;
};
_b.AutoSuggest.prototype.onkeyup = function (ev) {
  var key = window.event ? window.event.keyCode : ev.keyCode;
  var ARRUP = 38;
  var ARRDN = 40;
  var bubble = 1;
  switch (key) {
    case ARRUP:
      this.changeHighlight(key);
      bubble = 0;
      break;
    case ARRDN:
      this.changeHighlight(key);
      bubble = 0;
      break;
    default:
      this.getSuggestions(this.fld.value);
  }
  return bubble;
};
_b.AutoSuggest.prototype.getSuggestions = function (val) {
  if (val == this.sInp) return 0;
  _b.DOM.remE(this.idAs);
  this.sInp = val;
  if (val.length < this.oP.minchars) {
    this.aSug = [];
    this.nInpC = val.length;
    return 0;
  }
  var ol = this.nInpC;
  this.nInpC = val.length ? val.length : 0;
  var l = this.aSug.length;
  if (this.nInpC > ol && l && l < this.oP.maxentries && this.oP.cache) {
    var arr = [];
    for (var i = 0; i < l; i++) {
      if (
        this.aSug[i].value.substr(0, val.length).toLowerCase() ==
        val.toLowerCase()
      )
        arr.push(this.aSug[i]);
    }
    this.aSug = arr;
    this.createList(this.aSug);
    return false;
  } else {
    var pointer = this;
    var input = this.sInp;
    clearTimeout(this.ajID);
    this.ajID = setTimeout(function () {
      pointer.doAjaxRequest(input);
    }, this.oP.delay);
  }
  return false;
};
_b.AutoSuggest.prototype.doAjaxRequest = function (input) {
  if (input != this.fld.value) return false;
  var pointer = this;
  if (typeof this.oP.script == "function")
    var url = this.oP.script(encodeURIComponent(this.sInp));
  else
    var url =
      this.oP.script + this.oP.varname + "=" + encodeURIComponent(this.sInp);
  if (!url) return false;
  var meth = this.oP.meth;
  var input = this.sInp;
  var onSuccessFunc = function (req) {
    pointer.setSuggestions(req, input);
  };
  var onErrorFunc = function (status) {
    return true;
  };
  var myAjax = new _b.Ajax();
  myAjax.makeRequest(url, meth, onSuccessFunc, onErrorFunc);
};
_b.AutoSuggest.prototype.setSuggestions = function (req, input) {
  if (input != this.fld.value) return false;
  this.aSug = [];
  if (this.oP.json) {
    var jsondata = eval("(" + req.responseText + ")");
    for (var i = 0; i < jsondata.results.length; i++) {
      this.aSug.push({
        id: jsondata.results[i].id,
        value: jsondata.results[i].value,
      });
    }
  } else {
    var xml = req.responseXML;
    var results = xml.getElementsByTagName("results")[0].childNodes;
    for (var i = 0; i < results.length; i++) {
      if (results[i].hasChildNodes())
        this.aSug.push({
          id: results[i].getAttribute("id"),
          value: results[i].childNodes[0].nodeValue,
        });
    }
  }
  this.idAs = "as_" + this.fld.id;
  this.createList(this.aSug);
};
_b.AutoSuggest.prototype.createList = function (arr) {
  var pointer = this;
  _b.DOM.remE(this.idAs);
  this.killTimeout();
  if (arr.length == 0 && !this.oP.shownoresults) return false;
  var div = _b.DOM.cE("div", {
    id: this.idAs,
    className: this.oP.className,
  });
  var hcorner = _b.DOM.cE("div", {
    className: "as_corner",
  });
  var hbar = _b.DOM.cE("div", {
    className: "as_bar",
  });
  var header = _b.DOM.cE("div", {
    className: "as_header",
  });
  header.appendChild(hcorner);
  header.appendChild(hbar);
  div.appendChild(header);
  var ul = _b.DOM.cE("ul", {
    id: "as_ul",
  });
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i].value;
    var st = val.toLowerCase().indexOf(this.sInp.toLowerCase());
    var output =
      val.substring(0, st) +
      "<em>" +
      val.substring(st, st + this.sInp.length) +
      "</em>" +
      val.substring(st + this.sInp.length);
    var span = _b.DOM.cE("span", {}, output, true);
    if (arr[i].info != "") {
      var br = _b.DOM.cE("br", {});
      span.appendChild(br);
      var small = _b.DOM.cE("small", {}, arr[i].info);
      span.appendChild(small);
    }
    var a = _b.DOM.cE("a", {
      href: "#",
    });
    var tl = _b.DOM.cE(
      "span",
      {
        className: "tl",
      },
      " "
    );
    var tr = _b.DOM.cE(
      "span",
      {
        className: "tr",
      },
      " "
    );
    a.appendChild(tl);
    a.appendChild(tr);
    a.appendChild(span);
    a.name = i + 1;
    a.onclick = function () {
      pointer.setHighlightedValue();
      return false;
    };
    a.onmouseover = function () {
      pointer.setHighlight(this.name);
    };
    var li = _b.DOM.cE("li", {}, a);
    ul.appendChild(li);
  }
  if (arr.length == 0 && this.oP.shownoresults) {
    var li = _b.DOM.cE(
      "li",
      {
        className: "as_warning",
      },
      this.oP.noresults
    );
    ul.appendChild(li);
  }
  div.appendChild(ul);
  var fcorner = _b.DOM.cE("div", {
    className: "as_corner",
  });
  var fbar = _b.DOM.cE("div", {
    className: "as_bar",
  });
  var footer = _b.DOM.cE("div", {
    className: "as_footer",
  });
  footer.appendChild(fcorner);
  footer.appendChild(fbar);
  div.appendChild(footer);
  var pos = _b.DOM.getPos(this.fld);
  div.style.left = pos.x + "px";
  div.style.top = pos.y + this.fld.offsetHeight + this.oP.offsety + "px";
  div.style.width = this.fld.offsetWidth + "px";
  div.onmouseover = function () {
    pointer.killTimeout();
  };
  div.onmouseout = function () {
    pointer.resetTimeout();
  };
  document.getElementsByTagName("body")[0].appendChild(div);
  this.iHigh = 0;
  var pointer = this;
  this.toID = setTimeout(function () {
    pointer.clearSuggestions();
  }, this.oP.timeout);
};
_b.AutoSuggest.prototype.changeHighlight = function (key) {
  var list = _b.DOM.gE("as_ul");
  if (!list) return false;
  var n;
  if (key == 40) n = this.iHigh + 1;
  else if (key == 38) n = this.iHigh - 1;
  if (n > list.childNodes.length) n = list.childNodes.length;
  if (n < 1) n = 1;
  this.setHighlight(n);
};
_b.AutoSuggest.prototype.setHighlight = function (n) {
  var list = _b.DOM.gE("as_ul");
  if (!list) return false;
  if (this.iHigh > 0) this.clearHighlight();
  this.iHigh = Number(n);
  list.childNodes[this.iHigh - 1].className = "as_highlight";
  this.killTimeout();
};
_b.AutoSuggest.prototype.clearHighlight = function () {
  var list = _b.DOM.gE("as_ul");
  if (!list) return false;
  if (this.iHigh > 0) {
    list.childNodes[this.iHigh - 1].className = "";
    this.iHigh = 0;
  }
};
_b.AutoSuggest.prototype.setHighlightedValue = function () {
  if (this.iHigh) {
    this.sInp = this.fld.value = this.aSug[this.iHigh - 1].value;
    this.fld.focus();
    if (this.fld.selectionStart)
      this.fld.setSelectionRange(this.sInp.length, this.sInp.length);
    this.clearSuggestions();
    if (typeof this.oP.callback == "function")
      this.oP.callback(this.aSug[this.iHigh - 1]);
  }
};
_b.AutoSuggest.prototype.killTimeout = function () {
  clearTimeout(this.toID);
};
_b.AutoSuggest.prototype.resetTimeout = function () {
  clearTimeout(this.toID);
  var pointer = this;
  this.toID = setTimeout(function () {
    pointer.clearSuggestions();
  }, 1000);
};
_b.AutoSuggest.prototype.clearSuggestions = function () {
  this.killTimeout();
  var ele = _b.DOM.gE(this.idAs);
  var pointer = this;
  if (ele) {
    var fade = new _b.Fader(ele, 1, 0, 250, function () {
      _b.DOM.remE(pointer.idAs);
    });
  }
};
if (typeof _b.Ajax == "undefined") _b.Ajax = {};
_b.Ajax = function () {
  this.req = {};
  this.isIE = false;
};
_b.Ajax.prototype.makeRequest = function (url, meth, onComp, onErr) {
  if (meth != "POST") meth = "GET";
  this.onComplete = onComp;
  this.onError = onErr;
  var pointer = this;
  if (window.XMLHttpRequest) {
    this.req = new XMLHttpRequest();
    this.req.onreadystatechange = function () {
      pointer.processReqChange();
    };
    this.req.open("GET", url, true);
    this.req.send(null);
  } else if (window.ActiveXObject) {
    this.req = new ActiveXObject("Microsoft.XMLHTTP");
    if (this.req) {
      this.req.onreadystatechange = function () {
        pointer.processReqChange();
      };
      this.req.open(meth, url, true);
      this.req.send();
    }
  }
};
_b.Ajax.prototype.processReqChange = function () {
  if (this.req.readyState == 4) {
    if (this.req.status == 200) {
      this.onComplete(this.req);
    } else {
      this.onError(this.req.status);
    }
  }
};
if (typeof _b.DOM == "undefined") _b.DOM = {};
_b.DOM.cE = function (type, attr, cont, html) {
  var ne = document.createElement(type);
  if (!ne) return 0;
  for (var a in attr) ne[a] = attr[a];
  var t = typeof cont;
  if (t == "string" && !html) ne.appendChild(document.createTextNode(cont));
  else if (t == "string" && html) ne.innerHTML = cont;
  else if (t == "object") ne.appendChild(cont);
  return ne;
};
_b.DOM.gE = function (e) {
  var t = typeof e;
  if (t == "undefined") return 0;
  else if (t == "string") {
    var re = document.getElementById(e);
    if (!re) return 0;
    else if (typeof re.appendChild != "undefined") return re;
    else return 0;
  } else if (typeof e.appendChild != "undefined") return e;
  else return 0;
};
_b.DOM.remE = function (ele) {
  var e = this.gE(ele);
  if (!e) return 0;
  else if (e.parentNode.removeChild(e)) return true;
  else return 0;
};
_b.DOM.getPos = function (e) {
  var e = this.gE(e);
  var obj = e;
  var curleft = 0;
  if (obj.offsetParent) {
    while (obj.offsetParent) {
      curleft += obj.offsetLeft;
      obj = obj.offsetParent;
    }
  } else if (obj.x) curleft += obj.x;
  var obj = e;
  var curtop = 0;
  if (obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
  } else if (obj.y) curtop += obj.y;
  return {
    x: curleft,
    y: curtop,
  };
};
if (typeof _b.Fader == "undefined") _b.Fader = {};
_b.Fader = function (ele, from, to, fadetime, callback) {
  if (!ele) return 0;
  this.e = ele;
  this.from = from;
  this.to = to;
  this.cb = callback;
  this.nDur = fadetime;
  this.nInt = 50;
  this.nTime = 0;
  var p = this;
  this.nID = setInterval(function () {
    p._fade();
  }, this.nInt);
};
_b.Fader.prototype._fade = function () {
  this.nTime += this.nInt;
  var ieop = Math.round(
    this._tween(this.nTime, this.from, this.to, this.nDur) * 100
  );
  var op = ieop / 100;
  if (this.e.filters) {
    try {
      this.e.filters.item("DXImageTransform.Microsoft.Alpha").opacity = ieop;
    } catch (e) {
      this.e.style.filter =
        "progid:DXImageTransform.Microsoft.Alpha(opacity=" + ieop + ")";
    }
  } else {
    this.e.style.opacity = op;
  }
  if (this.nTime == this.nDur) {
    clearInterval(this.nID);
    if (this.cb != undefined) this.cb();
  }
};
_b.Fader.prototype._tween = function (t, b, c, d) {
  return b + (c - b) * (t / d);
};

/*
 * jquery.qtip. The jQuery tooltip plugin
 *
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : February 2009
 * Version : 1.0.0-rc3
 * Released: Tuesday 12th May, 2009 - 00:00
 * Debug: jquery.qtip.debug.js
 */
(function (f) {
  f.fn.qtip = function (B, u) {
    var y, t, A, s, x, w, v, z;
    if (typeof B == "string") {
      if (typeof f(this).data("qtip") !== "object") {
        f.fn.qtip.log.error.call(
          self,
          1,
          f.fn.qtip.constants.NO_TOOLTIP_PRESENT,
          false
        );
      }
      if (B == "api") {
        return f(this).data("qtip").interfaces[f(this).data("qtip").current];
      } else {
        if (B == "interfaces") {
          return f(this).data("qtip").interfaces;
        }
      }
    } else {
      if (!B) {
        B = {};
      }
      if (
        typeof B.content !== "object" ||
        (B.content.jquery && B.content.length > 0)
      ) {
        B.content = {
          text: B.content,
        };
      }
      if (typeof B.content.title !== "object") {
        B.content.title = {
          text: B.content.title,
        };
      }
      if (typeof B.position !== "object") {
        B.position = {
          corner: B.position,
        };
      }
      if (typeof B.position.corner !== "object") {
        B.position.corner = {
          target: B.position.corner,
          tooltip: B.position.corner,
        };
      }
      if (typeof B.show !== "object") {
        B.show = {
          when: B.show,
        };
      }
      if (typeof B.show.when !== "object") {
        B.show.when = {
          event: B.show.when,
        };
      }
      if (typeof B.show.effect !== "object") {
        B.show.effect = {
          type: B.show.effect,
        };
      }
      if (typeof B.hide !== "object") {
        B.hide = {
          when: B.hide,
        };
      }
      if (typeof B.hide.when !== "object") {
        B.hide.when = {
          event: B.hide.when,
        };
      }
      if (typeof B.hide.effect !== "object") {
        B.hide.effect = {
          type: B.hide.effect,
        };
      }
      if (typeof B.style !== "object") {
        B.style = {
          name: B.style,
        };
      }
      B.style = c(B.style);
      s = f.extend(true, {}, f.fn.qtip.defaults, B);
      s.style = a.call(
        {
          options: s,
        },
        s.style
      );
      s.user = f.extend(true, {}, B);
    }
    return f(this).each(function () {
      if (typeof B == "string") {
        w = B.toLowerCase();
        A = f(this).qtip("interfaces");
        if (typeof A == "object") {
          if (u === true && w == "destroy") {
            while (A.length > 0) {
              A[A.length - 1].destroy();
            }
          } else {
            if (u !== true) {
              A = [f(this).qtip("api")];
            }
            for (y = 0; y < A.length; y++) {
              if (w == "destroy") {
                A[y].destroy();
              } else {
                if (A[y].status.rendered === true) {
                  if (w == "show") {
                    A[y].show();
                  } else {
                    if (w == "hide") {
                      A[y].hide();
                    } else {
                      if (w == "focus") {
                        A[y].focus();
                      } else {
                        if (w == "disable") {
                          A[y].disable(true);
                        } else {
                          if (w == "enable") {
                            A[y].disable(false);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        v = f.extend(true, {}, s);
        v.hide.effect.length = s.hide.effect.length;
        v.show.effect.length = s.show.effect.length;
        if (v.position.container === false) {
          v.position.container = f(document.body);
        }
        if (v.position.target === false) {
          v.position.target = f(this);
        }
        if (v.show.when.target === false) {
          v.show.when.target = f(this);
        }
        if (v.hide.when.target === false) {
          v.hide.when.target = f(this);
        }
        t = f.fn.qtip.interfaces.length;
        for (y = 0; y < t; y++) {
          if (typeof f.fn.qtip.interfaces[y] == "undefined") {
            t = y;
            break;
          }
        }
        x = new d(f(this), v, t);
        f.fn.qtip.interfaces[t] = x;
        if (typeof f(this).data("qtip") == "object") {
          if (typeof f(this).attr("qtip") === "undefined") {
            f(this).data("qtip").current =
              f(this).data("qtip").interfaces.length;
          }
          f(this).data("qtip").interfaces.push(x);
        } else {
          f(this).data("qtip", {
            current: 0,
            interfaces: [x],
          });
        }
        if (
          v.content.prerender === false &&
          v.show.when.event !== false &&
          v.show.ready !== true
        ) {
          v.show.when.target.bind(
            v.show.when.event + ".qtip-" + t + "-create",
            {
              qtip: t,
            },
            function (C) {
              z = f.fn.qtip.interfaces[C.data.qtip];
              z.options.show.when.target.unbind(
                z.options.show.when.event + ".qtip-" + C.data.qtip + "-create"
              );
              z.cache.mouse = {
                x: C.pageX,
                y: C.pageY,
              };
              p.call(z);
              z.options.show.when.target.trigger(z.options.show.when.event);
            }
          );
        } else {
          x.cache.mouse = {
            x: v.show.when.target.offset().left,
            y: v.show.when.target.offset().top,
          };
          p.call(x);
        }
      }
    });
  };
  function d(u, t, v) {
    var s = this;
    s.id = v;
    s.options = t;
    s.status = {
      animated: false,
      rendered: false,
      disabled: false,
      focused: false,
    };
    s.elements = {
      target: u.addClass(s.options.style.classes.target),
      tooltip: null,
      wrapper: null,
      content: null,
      contentWrapper: null,
      title: null,
      button: null,
      tip: null,
      bgiframe: null,
    };
    s.cache = {
      mouse: {},
      position: {},
      toggle: 0,
    };
    s.timers = {};
    f.extend(s, s.options.api, {
      show: function (y) {
        var x, z;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "show"
          );
        }
        if (s.elements.tooltip.css("display") !== "none") {
          return s;
        }
        s.elements.tooltip.stop(true, false);
        x = s.beforeShow.call(s, y);
        if (x === false) {
          return s;
        }
        function w() {
          if (s.options.position.type !== "static") {
            s.focus();
          }
          s.onShow.call(s, y);
          if (f.browser.msie) {
            s.elements.tooltip.get(0).style.removeAttribute("filter");
          }
        }
        s.cache.toggle = 1;
        if (s.options.position.type !== "static") {
          s.updatePosition(y, s.options.show.effect.length > 0);
        }
        if (typeof s.options.show.solo == "object") {
          z = f(s.options.show.solo);
        } else {
          if (s.options.show.solo === true) {
            z = f("div.qtip").not(s.elements.tooltip);
          }
        }
        if (z) {
          z.each(function () {
            if (f(this).qtip("api").status.rendered === true) {
              f(this).qtip("api").hide();
            }
          });
        }
        if (typeof s.options.show.effect.type == "function") {
          s.options.show.effect.type.call(
            s.elements.tooltip,
            s.options.show.effect.length
          );
          s.elements.tooltip.queue(function () {
            w();
            f(this).dequeue();
          });
        } else {
          switch (s.options.show.effect.type.toLowerCase()) {
            case "fade":
              s.elements.tooltip.fadeIn(s.options.show.effect.length, w);
              break;
            case "slide":
              s.elements.tooltip.slideDown(
                s.options.show.effect.length,
                function () {
                  w();
                  if (s.options.position.type !== "static") {
                    s.updatePosition(y, true);
                  }
                }
              );
              break;
            case "grow":
              s.elements.tooltip.show(s.options.show.effect.length, w);
              break;
            default:
              s.elements.tooltip.show(null, w);
              break;
          }
          s.elements.tooltip.addClass(s.options.style.classes.active);
        }
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_SHOWN,
          "show"
        );
      },
      hide: function (y) {
        var x;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "hide"
          );
        } else {
          if (s.elements.tooltip.css("display") === "none") {
            return s;
          }
        }
        clearTimeout(s.timers.show);
        s.elements.tooltip.stop(true, false);
        x = s.beforeHide.call(s, y);
        if (x === false) {
          return s;
        }
        function w() {
          s.onHide.call(s, y);
        }
        s.cache.toggle = 0;
        if (typeof s.options.hide.effect.type == "function") {
          s.options.hide.effect.type.call(
            s.elements.tooltip,
            s.options.hide.effect.length
          );
          s.elements.tooltip.queue(function () {
            w();
            f(this).dequeue();
          });
        } else {
          switch (s.options.hide.effect.type.toLowerCase()) {
            case "fade":
              s.elements.tooltip.fadeOut(s.options.hide.effect.length, w);
              break;
            case "slide":
              s.elements.tooltip.slideUp(s.options.hide.effect.length, w);
              break;
            case "grow":
              s.elements.tooltip.hide(s.options.hide.effect.length, w);
              break;
            default:
              s.elements.tooltip.hide(null, w);
              break;
          }
          s.elements.tooltip.removeClass(s.options.style.classes.active);
        }
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_HIDDEN,
          "hide"
        );
      },
      updatePosition: function (w, x) {
        var C, G, L, J, H, E, y, I, B, D, K, A, F, z;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "updatePosition"
          );
        } else {
          if (s.options.position.type == "static") {
            return f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.CANNOT_POSITION_STATIC,
              "updatePosition"
            );
          }
        }
        G = {
          position: {
            left: 0,
            top: 0,
          },
          dimensions: {
            height: 0,
            width: 0,
          },
          corner: s.options.position.corner.target,
        };
        L = {
          position: s.getPosition(),
          dimensions: s.getDimensions(),
          corner: s.options.position.corner.tooltip,
        };
        if (s.options.position.target !== "mouse") {
          if (
            s.options.position.target.get(0).nodeName.toLowerCase() == "area"
          ) {
            J = s.options.position.target.attr("coords").split(",");
            for (C = 0; C < J.length; C++) {
              J[C] = parseInt(J[C]);
            }
            H = s.options.position.target.parent("map").attr("name");
            E = f('img[usemap="#' + H + '"]:first').offset();
            G.position = {
              left: Math.floor(E.left + J[0]),
              top: Math.floor(E.top + J[1]),
            };
            switch (s.options.position.target.attr("shape").toLowerCase()) {
              case "rect":
                G.dimensions = {
                  width: Math.ceil(Math.abs(J[2] - J[0])),
                  height: Math.ceil(Math.abs(J[3] - J[1])),
                };
                break;
              case "circle":
                G.dimensions = {
                  width: J[2] + 1,
                  height: J[2] + 1,
                };
                break;
              case "poly":
                G.dimensions = {
                  width: J[0],
                  height: J[1],
                };
                for (C = 0; C < J.length; C++) {
                  if (C % 2 == 0) {
                    if (J[C] > G.dimensions.width) {
                      G.dimensions.width = J[C];
                    }
                    if (J[C] < J[0]) {
                      G.position.left = Math.floor(E.left + J[C]);
                    }
                  } else {
                    if (J[C] > G.dimensions.height) {
                      G.dimensions.height = J[C];
                    }
                    if (J[C] < J[1]) {
                      G.position.top = Math.floor(E.top + J[C]);
                    }
                  }
                }
                G.dimensions.width =
                  G.dimensions.width - (G.position.left - E.left);
                G.dimensions.height =
                  G.dimensions.height - (G.position.top - E.top);
                break;
              default:
                return f.fn.qtip.log.error.call(
                  s,
                  4,
                  f.fn.qtip.constants.INVALID_AREA_SHAPE,
                  "updatePosition"
                );
                break;
            }
            G.dimensions.width -= 2;
            G.dimensions.height -= 2;
          } else {
            if (s.options.position.target.add(document.body).length === 1) {
              G.position = {
                left: f(document).scrollLeft(),
                top: f(document).scrollTop(),
              };
              G.dimensions = {
                height: f(window).height(),
                width: f(window).width(),
              };
            } else {
              if (
                typeof s.options.position.target.attr("qtip") !== "undefined"
              ) {
                G.position =
                  s.options.position.target.qtip("api").cache.position;
              } else {
                G.position = s.options.position.target.offset();
              }
              G.dimensions = {
                height: s.options.position.target.outerHeight(),
                width: s.options.position.target.outerWidth(),
              };
            }
          }
          y = f.extend({}, G.position);
          if (G.corner.search(/right/i) !== -1) {
            y.left += G.dimensions.width;
          }
          if (G.corner.search(/bottom/i) !== -1) {
            y.top += G.dimensions.height;
          }
          if (G.corner.search(/((top|bottom)Middle)|center/) !== -1) {
            y.left += G.dimensions.width / 2;
          }
          if (G.corner.search(/((left|right)Middle)|center/) !== -1) {
            y.top += G.dimensions.height / 2;
          }
        } else {
          G.position = y = {
            left: s.cache.mouse.x,
            top: s.cache.mouse.y,
          };
          G.dimensions = {
            height: 1,
            width: 1,
          };
        }
        if (L.corner.search(/right/i) !== -1) {
          y.left -= L.dimensions.width;
        }
        if (L.corner.search(/bottom/i) !== -1) {
          y.top -= L.dimensions.height;
        }
        if (L.corner.search(/((top|bottom)Middle)|center/) !== -1) {
          y.left -= L.dimensions.width / 2;
        }
        if (L.corner.search(/((left|right)Middle)|center/) !== -1) {
          y.top -= L.dimensions.height / 2;
        }
        I = f.browser.msie ? 1 : 0;
        B =
          f.browser.msie && parseInt(f.browser.version.charAt(0)) === 6 ? 1 : 0;
        if (s.options.style.border.radius > 0) {
          if (L.corner.search(/Left/) !== -1) {
            y.left -= s.options.style.border.radius;
          } else {
            if (L.corner.search(/Right/) !== -1) {
              y.left += s.options.style.border.radius;
            }
          }
          if (L.corner.search(/Top/) !== -1) {
            y.top -= s.options.style.border.radius;
          } else {
            if (L.corner.search(/Bottom/) !== -1) {
              y.top += s.options.style.border.radius;
            }
          }
        }
        if (I) {
          if (L.corner.search(/top/) !== -1) {
            y.top -= I;
          } else {
            if (L.corner.search(/bottom/) !== -1) {
              y.top += I;
            }
          }
          if (L.corner.search(/left/) !== -1) {
            y.left -= I;
          } else {
            if (L.corner.search(/right/) !== -1) {
              y.left += I;
            }
          }
          if (L.corner.search(/leftMiddle|rightMiddle/) !== -1) {
            y.top -= 1;
          }
        }
        if (s.options.position.adjust.screen === true) {
          y = o.call(s, y, G, L);
        }
        if (
          s.options.position.target === "mouse" &&
          s.options.position.adjust.mouse === true
        ) {
          if (s.options.position.adjust.screen === true && s.elements.tip) {
            K = s.elements.tip.attr("rel");
          } else {
            K = s.options.position.corner.tooltip;
          }
          y.left += K.search(/right/i) !== -1 ? -6 : 6;
          y.top += K.search(/bottom/i) !== -1 ? -6 : 6;
        }
        if (
          !s.elements.bgiframe &&
          f.browser.msie &&
          parseInt(f.browser.version.charAt(0)) == 6
        ) {
          f("select, object").each(function () {
            A = f(this).offset();
            A.bottom = A.top + f(this).height();
            A.right = A.left + f(this).width();
            if (
              y.top + L.dimensions.height >= A.top &&
              y.left + L.dimensions.width >= A.left
            ) {
              k.call(s);
            }
          });
        }
        y.left += s.options.position.adjust.x;
        y.top += s.options.position.adjust.y;
        F = s.getPosition();
        if (y.left != F.left || y.top != F.top) {
          z = s.beforePositionUpdate.call(s, w);
          if (z === false) {
            return s;
          }
          s.cache.position = y;
          if (x === true) {
            s.status.animated = true;
            s.elements.tooltip.animate(y, 200, "swing", function () {
              s.status.animated = false;
            });
          } else {
            s.elements.tooltip.css(y);
          }
          s.onPositionUpdate.call(s, w);
          if (typeof w !== "undefined" && w.type && w.type !== "mousemove") {
            f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.EVENT_POSITION_UPDATED,
              "updatePosition"
            );
          }
        }
        return s;
      },
      updateWidth: function (w) {
        var x;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "updateWidth"
          );
        } else {
          if (w && typeof w !== "number") {
            return f.fn.qtip.log.error.call(
              s,
              2,
              "newWidth must be of type number",
              "updateWidth"
            );
          }
        }
        x = s.elements.contentWrapper
          .siblings()
          .add(s.elements.tip)
          .add(s.elements.button);
        if (!w) {
          if (typeof s.options.style.width.value == "number") {
            w = s.options.style.width.value;
          } else {
            s.elements.tooltip.css({
              width: "auto",
            });
            x.hide();
            if (f.browser.msie) {
              s.elements.wrapper.add(s.elements.contentWrapper.children()).css({
                zoom: "normal",
              });
            }
            w = s.getDimensions().width + 1;
            if (!s.options.style.width.value) {
              if (w > s.options.style.width.max) {
                w = s.options.style.width.max;
              }
              if (w < s.options.style.width.min) {
                w = s.options.style.width.min;
              }
            }
          }
        }
        if (w % 2 !== 0) {
          w -= 1;
        }
        s.elements.tooltip.width(w);
        x.show();
        if (s.options.style.border.radius) {
          s.elements.tooltip.find(".qtip-betweenCorners").each(function (y) {
            f(this).width(w - s.options.style.border.radius * 2);
          });
        }
        if (f.browser.msie) {
          s.elements.wrapper.add(s.elements.contentWrapper.children()).css({
            zoom: "1",
          });
          s.elements.wrapper.width(w);
          if (s.elements.bgiframe) {
            s.elements.bgiframe.width(w).height(s.getDimensions.height);
          }
        }
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_WIDTH_UPDATED,
          "updateWidth"
        );
      },
      updateStyle: function (w) {
        var z, A, x, y, B;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "updateStyle"
          );
        } else {
          if (typeof w !== "string" || !f.fn.qtip.styles[w]) {
            return f.fn.qtip.log.error.call(
              s,
              2,
              f.fn.qtip.constants.STYLE_NOT_DEFINED,
              "updateStyle"
            );
          }
        }
        s.options.style = a.call(s, f.fn.qtip.styles[w], s.options.user.style);
        s.elements.content.css(q(s.options.style));
        if (s.options.content.title.text !== false) {
          s.elements.title.css(q(s.options.style.title, true));
        }
        s.elements.contentWrapper.css({
          borderColor: s.options.style.border.color,
        });
        if (s.options.style.tip.corner !== false) {
          if (f("<canvas>").get(0).getContext) {
            z = s.elements.tooltip.find(".qtip-tip canvas:first");
            x = z.get(0).getContext("2d");
            x.clearRect(0, 0, 300, 300);
            y = z.parent("div[rel]:first").attr("rel");
            B = b(
              y,
              s.options.style.tip.size.width,
              s.options.style.tip.size.height
            );
            h.call(
              s,
              z,
              B,
              s.options.style.tip.color || s.options.style.border.color
            );
          } else {
            if (f.browser.msie) {
              z = s.elements.tooltip.find('.qtip-tip [nodeName="shape"]');
              z.attr(
                "fillcolor",
                s.options.style.tip.color || s.options.style.border.color
              );
            }
          }
        }
        if (s.options.style.border.radius > 0) {
          s.elements.tooltip.find(".qtip-betweenCorners").css({
            backgroundColor: s.options.style.border.color,
          });
          if (f("<canvas>").get(0).getContext) {
            A = g(s.options.style.border.radius);
            s.elements.tooltip.find(".qtip-wrapper canvas").each(function () {
              x = f(this).get(0).getContext("2d");
              x.clearRect(0, 0, 300, 300);
              y = f(this).parent("div[rel]:first").attr("rel");
              r.call(
                s,
                f(this),
                A[y],
                s.options.style.border.radius,
                s.options.style.border.color
              );
            });
          } else {
            if (f.browser.msie) {
              s.elements.tooltip
                .find('.qtip-wrapper [nodeName="arc"]')
                .each(function () {
                  f(this).attr("fillcolor", s.options.style.border.color);
                });
            }
          }
        }
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_STYLE_UPDATED,
          "updateStyle"
        );
      },
      updateContent: function (A, y) {
        var z, x, w;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "updateContent"
          );
        } else {
          if (!A) {
            return f.fn.qtip.log.error.call(
              s,
              2,
              f.fn.qtip.constants.NO_CONTENT_PROVIDED,
              "updateContent"
            );
          }
        }
        z = s.beforeContentUpdate.call(s, A);
        if (typeof z == "string") {
          A = z;
        } else {
          if (z === false) {
            return;
          }
        }
        if (f.browser.msie) {
          s.elements.contentWrapper.children().css({
            zoom: "normal",
          });
        }
        if (A.jquery && A.length > 0) {
          A.clone(true).appendTo(s.elements.content).show();
        } else {
          s.elements.content.html(A);
        }
        x = s.elements.content.find("img[complete=false]");
        if (x.length > 0) {
          w = 0;
          x.each(function (C) {
            f('<img src="' + f(this).attr("src") + '" />').load(function () {
              if (++w == x.length) {
                B();
              }
            });
          });
        } else {
          B();
        }
        function B() {
          s.updateWidth();
          if (y !== false) {
            if (s.options.position.type !== "static") {
              s.updatePosition(s.elements.tooltip.is(":visible"), true);
            }
            if (s.options.style.tip.corner !== false) {
              n.call(s);
            }
          }
        }
        s.onContentUpdate.call(s);
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_CONTENT_UPDATED,
          "loadContent"
        );
      },
      loadContent: function (w, z, A) {
        var y;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "loadContent"
          );
        }
        y = s.beforeContentLoad.call(s);
        if (y === false) {
          return s;
        }
        if (A == "post") {
          f.post(w, z, x);
        } else {
          f.get(w, z, x);
        }
        function x(B) {
          s.onContentLoad.call(s);
          f.fn.qtip.log.error.call(
            s,
            1,
            f.fn.qtip.constants.EVENT_CONTENT_LOADED,
            "loadContent"
          );
          s.updateContent(B);
        }
        return s;
      },
      updateTitle: function (w) {
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "updateTitle"
          );
        } else {
          if (!w) {
            return f.fn.qtip.log.error.call(
              s,
              2,
              f.fn.qtip.constants.NO_CONTENT_PROVIDED,
              "updateTitle"
            );
          }
        }
        returned = s.beforeTitleUpdate.call(s);
        if (returned === false) {
          return s;
        }
        if (s.elements.button) {
          s.elements.button = s.elements.button.clone(true);
        }
        s.elements.title.html(w);
        if (s.elements.button) {
          s.elements.title.prepend(s.elements.button);
        }
        s.onTitleUpdate.call(s);
        return f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_TITLE_UPDATED,
          "updateTitle"
        );
      },
      focus: function (A) {
        var y, x, w, z;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "focus"
          );
        } else {
          if (s.options.position.type == "static") {
            return f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.CANNOT_FOCUS_STATIC,
              "focus"
            );
          }
        }
        y = parseInt(s.elements.tooltip.css("z-index"));
        x = 6000 + f("div.qtip[qtip]").length - 1;
        if (!s.status.focused && y !== x) {
          z = s.beforeFocus.call(s, A);
          if (z === false) {
            return s;
          }
          f("div.qtip[qtip]")
            .not(s.elements.tooltip)
            .each(function () {
              if (f(this).qtip("api").status.rendered === true) {
                w = parseInt(f(this).css("z-index"));
                if (typeof w == "number" && w > -1) {
                  f(this).css({
                    zIndex: parseInt(f(this).css("z-index")) - 1,
                  });
                }
                f(this).qtip("api").status.focused = false;
              }
            });
          s.elements.tooltip.css({
            zIndex: x,
          });
          s.status.focused = true;
          s.onFocus.call(s, A);
          f.fn.qtip.log.error.call(
            s,
            1,
            f.fn.qtip.constants.EVENT_FOCUSED,
            "focus"
          );
        }
        return s;
      },
      disable: function (w) {
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "disable"
          );
        }
        if (w) {
          if (!s.status.disabled) {
            s.status.disabled = true;
            f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.EVENT_DISABLED,
              "disable"
            );
          } else {
            f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,
              "disable"
            );
          }
        } else {
          if (s.status.disabled) {
            s.status.disabled = false;
            f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.EVENT_ENABLED,
              "disable"
            );
          } else {
            f.fn.qtip.log.error.call(
              s,
              1,
              f.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,
              "disable"
            );
          }
        }
        return s;
      },
      destroy: function () {
        var w, x, y;
        x = s.beforeDestroy.call(s);
        if (x === false) {
          return s;
        }
        if (s.status.rendered) {
          s.options.show.when.target.unbind("mousemove.qtip", s.updatePosition);
          s.options.show.when.target.unbind("mouseout.qtip", s.hide);
          s.options.show.when.target.unbind(
            s.options.show.when.event + ".qtip"
          );
          s.options.hide.when.target.unbind(
            s.options.hide.when.event + ".qtip"
          );
          s.elements.tooltip.unbind(s.options.hide.when.event + ".qtip");
          s.elements.tooltip.unbind("mouseover.qtip", s.focus);
          s.elements.tooltip.remove();
        } else {
          s.options.show.when.target.unbind(
            s.options.show.when.event + ".qtip-create"
          );
        }
        if (typeof s.elements.target.data("qtip") == "object") {
          y = s.elements.target.data("qtip").interfaces;
          if (typeof y == "object" && y.length > 0) {
            for (w = 0; w < y.length - 1; w++) {
              if (y[w].id == s.id) {
                y.splice(w, 1);
              }
            }
          }
        }
        delete f.fn.qtip.interfaces[s.id];
        if (typeof y == "object" && y.length > 0) {
          s.elements.target.data("qtip").current = y.length - 1;
        } else {
          s.elements.target.removeData("qtip");
        }
        s.onDestroy.call(s);
        f.fn.qtip.log.error.call(
          s,
          1,
          f.fn.qtip.constants.EVENT_DESTROYED,
          "destroy"
        );
        return s.elements.target;
      },
      getPosition: function () {
        var w, x;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "getPosition"
          );
        }
        w = s.elements.tooltip.css("display") !== "none" ? false : true;
        if (w) {
          s.elements.tooltip
            .css({
              visiblity: "hidden",
            })
            .show();
        }
        x = s.elements.tooltip.offset();
        if (w) {
          s.elements.tooltip
            .css({
              visiblity: "visible",
            })
            .hide();
        }
        return x;
      },
      getDimensions: function () {
        var w, x;
        if (!s.status.rendered) {
          return f.fn.qtip.log.error.call(
            s,
            2,
            f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,
            "getDimensions"
          );
        }
        w = !s.elements.tooltip.is(":visible") ? true : false;
        if (w) {
          s.elements.tooltip
            .css({
              visiblity: "hidden",
            })
            .show();
        }
        x = {
          height: s.elements.tooltip.outerHeight(),
          width: s.elements.tooltip.outerWidth(),
        };
        if (w) {
          s.elements.tooltip
            .css({
              visiblity: "visible",
            })
            .hide();
        }
        return x;
      },
    });
  }
  function p() {
    var s, w, u, t, v, y, x;
    s = this;
    s.beforeRender.call(s);
    s.status.rendered = true;
    s.elements.tooltip =
      '<div qtip="' +
      s.id +
      '" class="qtip ' +
      (s.options.style.classes.tooltip || s.options.style) +
      '"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:' +
      s.options.position.type +
      ';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content ' +
      s.options.style.classes.content +
      '"></div></div></div></div>';
    s.elements.tooltip = f(s.elements.tooltip);
    s.elements.tooltip.appendTo(s.options.position.container);
    s.elements.tooltip.data("qtip", {
      current: 0,
      interfaces: [s],
    });
    s.elements.wrapper = s.elements.tooltip.children("div:first");
    s.elements.contentWrapper = s.elements.wrapper.children("div:first").css({
      background: s.options.style.background,
    });
    s.elements.content = s.elements.contentWrapper
      .children("div:first")
      .css(q(s.options.style));
    if (f.browser.msie) {
      s.elements.wrapper.add(s.elements.content).css({
        zoom: 1,
      });
    }
    if (s.options.hide.when.event == "unfocus") {
      s.elements.tooltip.attr("unfocus", true);
    }
    if (typeof s.options.style.width.value == "number") {
      s.updateWidth();
    }
    if (f("<canvas>").get(0).getContext || f.browser.msie) {
      if (s.options.style.border.radius > 0) {
        m.call(s);
      } else {
        s.elements.contentWrapper.css({
          border:
            s.options.style.border.width +
            "px solid " +
            s.options.style.border.color,
        });
      }
      if (s.options.style.tip.corner !== false) {
        e.call(s);
      }
    } else {
      s.elements.contentWrapper.css({
        border:
          s.options.style.border.width +
          "px solid " +
          s.options.style.border.color,
      });
      s.options.style.border.radius = 0;
      s.options.style.tip.corner = false;
      f.fn.qtip.log.error.call(
        s,
        2,
        f.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,
        "render"
      );
    }
    if (
      (typeof s.options.content.text == "string" &&
        s.options.content.text.length > 0) ||
      (s.options.content.text.jquery && s.options.content.text.length > 0)
    ) {
      u = s.options.content.text;
    } else {
      if (
        typeof s.elements.target.attr("title") == "string" &&
        s.elements.target.attr("title").length > 0
      ) {
        u = s.elements.target.attr("title").replace("\\n", "<br />");
        s.elements.target.attr("title", "");
      } else {
        if (
          typeof s.elements.target.attr("alt") == "string" &&
          s.elements.target.attr("alt").length > 0
        ) {
          u = s.elements.target.attr("alt").replace("\\n", "<br />");
          s.elements.target.attr("alt", "");
        } else {
          u = " ";
          f.fn.qtip.log.error.call(
            s,
            1,
            f.fn.qtip.constants.NO_VALID_CONTENT,
            "render"
          );
        }
      }
    }
    if (s.options.content.title.text !== false) {
      j.call(s);
    }
    s.updateContent(u);
    l.call(s);
    if (s.options.show.ready === true) {
      s.show();
    }
    if (s.options.content.url !== false) {
      t = s.options.content.url;
      v = s.options.content.data;
      y = s.options.content.method || "get";
      s.loadContent(t, v, y);
    }
    s.onRender.call(s);
    f.fn.qtip.log.error.call(
      s,
      1,
      f.fn.qtip.constants.EVENT_RENDERED,
      "render"
    );
  }
  function m() {
    var F, z, t, B, x, E, u, G, D, y, w, C, A, s, v;
    F = this;
    F.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();
    t = F.options.style.border.width;
    B = F.options.style.border.radius;
    x = F.options.style.border.color || F.options.style.tip.color;
    E = g(B);
    u = {};
    for (z in E) {
      u[z] =
        '<div rel="' +
        z +
        '" style="' +
        (z.search(/Left/) !== -1 ? "left" : "right") +
        ":0; position:absolute; height:" +
        B +
        "px; width:" +
        B +
        'px; overflow:hidden; line-height:0.1px; font-size:1px">';
      if (f("<canvas>").get(0).getContext) {
        u[z] +=
          '<canvas height="' +
          B +
          '" width="' +
          B +
          '" style="vertical-align: top"></canvas>';
      } else {
        if (f.browser.msie) {
          G = B * 2 + 3;
          u[z] +=
            '<v:arc stroked="false" fillcolor="' +
            x +
            '" startangle="' +
            E[z][0] +
            '" endangle="' +
            E[z][1] +
            '" style="width:' +
            G +
            "px; height:" +
            G +
            "px; margin-top:" +
            (z.search(/bottom/) !== -1 ? -2 : -1) +
            "px; margin-left:" +
            (z.search(/Right/) !== -1 ? E[z][2] - 3.5 : -1) +
            'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>';
        }
      }
      u[z] += "</div>";
    }
    D = F.getDimensions().width - Math.max(t, B) * 2;
    y =
      '<div class="qtip-betweenCorners" style="height:' +
      B +
      "px; width:" +
      D +
      "px; overflow:hidden; background-color:" +
      x +
      '; line-height:0.1px; font-size:1px;">';
    w =
      '<div class="qtip-borderTop" dir="ltr" style="height:' +
      B +
      "px; margin-left:" +
      B +
      'px; line-height:0.1px; font-size:1px; padding:0;">' +
      u.topLeft +
      u.topRight +
      y;
    F.elements.wrapper.prepend(w);
    C =
      '<div class="qtip-borderBottom" dir="ltr" style="height:' +
      B +
      "px; margin-left:" +
      B +
      'px; line-height:0.1px; font-size:1px; padding:0;">' +
      u.bottomLeft +
      u.bottomRight +
      y;
    F.elements.wrapper.append(C);
    if (f("<canvas>").get(0).getContext) {
      F.elements.wrapper.find("canvas").each(function () {
        A = E[f(this).parent("[rel]:first").attr("rel")];
        r.call(F, f(this), A, B, x);
      });
    } else {
      if (f.browser.msie) {
        F.elements.tooltip.append(
          '<v:image style="behavior:url(#default#VML);"></v:image>'
        );
      }
    }
    s = Math.max(B, B + (t - B));
    v = Math.max(t - B, 0);
    F.elements.contentWrapper.css({
      border: "0px solid " + x,
      borderWidth: v + "px " + s + "px",
    });
  }
  function r(u, w, s, t) {
    var v = u.get(0).getContext("2d");
    v.fillStyle = t;
    v.beginPath();
    v.arc(w[0], w[1], s, 0, Math.PI * 2, false);
    v.fill();
  }
  function e(v) {
    var t, s, x, u, w;
    t = this;
    if (t.elements.tip !== null) {
      t.elements.tip.remove();
    }
    s = t.options.style.tip.color || t.options.style.border.color;
    if (t.options.style.tip.corner === false) {
      return;
    } else {
      if (!v) {
        v = t.options.style.tip.corner;
      }
    }
    x = b(v, t.options.style.tip.size.width, t.options.style.tip.size.height);
    t.elements.tip =
      '<div class="' +
      t.options.style.classes.tip +
      '" dir="ltr" rel="' +
      v +
      '" style="position:absolute; height:' +
      t.options.style.tip.size.height +
      "px; width:" +
      t.options.style.tip.size.width +
      'px; margin:0 auto; line-height:0.1px; font-size:1px;">';
    if (f("<canvas>").get(0).getContext) {
      t.elements.tip +=
        '<canvas height="' +
        t.options.style.tip.size.height +
        '" width="' +
        t.options.style.tip.size.width +
        '"></canvas>';
    } else {
      if (f.browser.msie) {
        u =
          t.options.style.tip.size.width +
          "," +
          t.options.style.tip.size.height;
        w = "m" + x[0][0] + "," + x[0][1];
        w += " l" + x[1][0] + "," + x[1][1];
        w += " " + x[2][0] + "," + x[2][1];
        w += " xe";
        t.elements.tip +=
          '<v:shape fillcolor="' +
          s +
          '" stroked="false" filled="true" path="' +
          w +
          '" coordsize="' +
          u +
          '" style="width:' +
          t.options.style.tip.size.width +
          "px; height:" +
          t.options.style.tip.size.height +
          "px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:" +
          (v.search(/top/) !== -1 ? "bottom" : "top") +
          '"></v:shape>';
        t.elements.tip +=
          '<v:image style="behavior:url(#default#VML);"></v:image>';
        t.elements.contentWrapper.css("position", "relative");
      }
    }
    t.elements.tooltip.prepend(t.elements.tip + "</div>");
    t.elements.tip = t.elements.tooltip
      .find("." + t.options.style.classes.tip)
      .eq(0);
    if (f("<canvas>").get(0).getContext) {
      h.call(t, t.elements.tip.find("canvas:first"), x, s);
    }
    if (
      v.search(/top/) !== -1 &&
      f.browser.msie &&
      parseInt(f.browser.version.charAt(0)) === 6
    ) {
      t.elements.tip.css({
        marginTop: -4,
      });
    }
    n.call(t, v);
  }
  function h(t, v, s) {
    var u = t.get(0).getContext("2d");
    u.fillStyle = s;
    u.beginPath();
    u.moveTo(v[0][0], v[0][1]);
    u.lineTo(v[1][0], v[1][1]);
    u.lineTo(v[2][0], v[2][1]);
    u.fill();
  }
  function n(u) {
    var t, w, s, x, v;
    t = this;
    if (t.options.style.tip.corner === false || !t.elements.tip) {
      return;
    }
    if (!u) {
      u = t.elements.tip.attr("rel");
    }
    w = positionAdjust = f.browser.msie ? 1 : 0;
    t.elements.tip.css(u.match(/left|right|top|bottom/)[0], 0);
    if (u.search(/top|bottom/) !== -1) {
      if (f.browser.msie) {
        if (parseInt(f.browser.version.charAt(0)) === 6) {
          positionAdjust = u.search(/top/) !== -1 ? -3 : 1;
        } else {
          positionAdjust = u.search(/top/) !== -1 ? 1 : 2;
        }
      }
      if (u.search(/Middle/) !== -1) {
        t.elements.tip.css({
          left: "50%",
          marginLeft: -(t.options.style.tip.size.width / 2),
        });
      } else {
        if (u.search(/Left/) !== -1) {
          t.elements.tip.css({
            left: t.options.style.border.radius - w,
          });
        } else {
          if (u.search(/Right/) !== -1) {
            t.elements.tip.css({
              right: t.options.style.border.radius + w,
            });
          }
        }
      }
      if (u.search(/top/) !== -1) {
        t.elements.tip.css({
          top: -positionAdjust,
        });
      } else {
        t.elements.tip.css({
          bottom: positionAdjust,
        });
      }
    } else {
      if (u.search(/left|right/) !== -1) {
        if (f.browser.msie) {
          positionAdjust =
            parseInt(f.browser.version.charAt(0)) === 6
              ? 1
              : u.search(/left/) !== -1
              ? 1
              : 2;
        }
        if (u.search(/Middle/) !== -1) {
          t.elements.tip.css({
            top: "50%",
            marginTop: -(t.options.style.tip.size.height / 2),
          });
        } else {
          if (u.search(/Top/) !== -1) {
            t.elements.tip.css({
              top: t.options.style.border.radius - w,
            });
          } else {
            if (u.search(/Bottom/) !== -1) {
              t.elements.tip.css({
                bottom: t.options.style.border.radius + w,
              });
            }
          }
        }
        if (u.search(/left/) !== -1) {
          t.elements.tip.css({
            left: -positionAdjust,
          });
        } else {
          t.elements.tip.css({
            right: positionAdjust,
          });
        }
      }
    }
    s = "padding-" + u.match(/left|right|top|bottom/)[0];
    x =
      t.options.style.tip.size[
        s.search(/left|right/) !== -1 ? "width" : "height"
      ];
    t.elements.tooltip.css("padding", 0);
    t.elements.tooltip.css(s, x);
    if (f.browser.msie && parseInt(f.browser.version.charAt(0)) == 6) {
      v = parseInt(t.elements.tip.css("margin-top")) || 0;
      v += parseInt(t.elements.content.css("margin-top")) || 0;
      t.elements.tip.css({
        marginTop: v,
      });
    }
  }
  function j() {
    var s = this;
    if (s.elements.title !== null) {
      s.elements.title.remove();
    }
    s.elements.title = f('<div class="' + s.options.style.classes.title + '">')
      .css(q(s.options.style.title, true))
      .css({
        zoom: f.browser.msie ? 1 : 0,
      })
      .prependTo(s.elements.contentWrapper);
    if (s.options.content.title.text) {
      s.updateTitle.call(s, s.options.content.title.text);
    }
    if (
      s.options.content.title.button !== false &&
      typeof s.options.content.title.button == "string"
    ) {
      s.elements.button = f(
        '<a class="' +
          s.options.style.classes.button +
          '" style="float:right; position: relative"></a>'
      )
        .css(q(s.options.style.button, true))
        .html(s.options.content.title.button)
        .prependTo(s.elements.title)
        .click(function (t) {
          if (!s.status.disabled) {
            s.hide(t);
          }
        });
    }
  }
  function l() {
    var t, v, u, s;
    t = this;
    v = t.options.show.when.target;
    u = t.options.hide.when.target;
    if (t.options.hide.fixed) {
      u = u.add(t.elements.tooltip);
    }
    if (t.options.hide.when.event == "inactive") {
      s = [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseout",
        "mouseenter",
        "mouseleave",
        "mouseover",
      ];
      function y(z) {
        if (t.status.disabled === true) {
          return;
        }
        clearTimeout(t.timers.inactive);
        t.timers.inactive = setTimeout(function () {
          f(s).each(function () {
            u.unbind(this + ".qtip-inactive");
            t.elements.content.unbind(this + ".qtip-inactive");
          });
          t.hide(z);
        }, t.options.hide.delay);
      }
    } else {
      if (t.options.hide.fixed === true) {
        t.elements.tooltip.bind("mouseover.qtip", function () {
          if (t.status.disabled === true) {
            return;
          }
          clearTimeout(t.timers.hide);
        });
      }
    }
    function x(z) {
      if (t.status.disabled === true) {
        return;
      }
      if (t.options.hide.when.event == "inactive") {
        f(s).each(function () {
          u.bind(this + ".qtip-inactive", y);
          t.elements.content.bind(this + ".qtip-inactive", y);
        });
        y();
      }
      clearTimeout(t.timers.show);
      clearTimeout(t.timers.hide);
      t.timers.show = setTimeout(function () {
        t.show(z);
      }, t.options.show.delay);
    }
    function w(z) {
      if (t.status.disabled === true) {
        return;
      }
      if (
        t.options.hide.fixed === true &&
        t.options.hide.when.event.search(/mouse(out|leave)/i) !== -1 &&
        f(z.relatedTarget).parents("div.qtip[qtip]").length > 0
      ) {
        z.stopPropagation();
        z.preventDefault();
        clearTimeout(t.timers.hide);
        return false;
      }
      clearTimeout(t.timers.show);
      clearTimeout(t.timers.hide);
      t.elements.tooltip.stop(true, true);
      t.timers.hide = setTimeout(function () {
        t.hide(z);
      }, t.options.hide.delay);
    }
    if (
      (t.options.show.when.target.add(t.options.hide.when.target).length ===
        1 &&
        t.options.show.when.event == t.options.hide.when.event &&
        t.options.hide.when.event !== "inactive") ||
      t.options.hide.when.event == "unfocus"
    ) {
      t.cache.toggle = 0;
      v.bind(t.options.show.when.event + ".qtip", function (z) {
        if (t.cache.toggle == 0) {
          x(z);
        } else {
          w(z);
        }
      });
    } else {
      v.bind(t.options.show.when.event + ".qtip", x);
      if (t.options.hide.when.event !== "inactive") {
        u.bind(t.options.hide.when.event + ".qtip", w);
      }
    }
    if (t.options.position.type.search(/(fixed|absolute)/) !== -1) {
      t.elements.tooltip.bind("mouseover.qtip", t.focus);
    }
    if (
      t.options.position.target === "mouse" &&
      t.options.position.type !== "static"
    ) {
      v.bind("mousemove.qtip", function (z) {
        t.cache.mouse = {
          x: z.pageX,
          y: z.pageY,
        };
        if (
          t.status.disabled === false &&
          t.options.position.adjust.mouse === true &&
          t.options.position.type !== "static" &&
          t.elements.tooltip.css("display") !== "none"
        ) {
          t.updatePosition(z);
        }
      });
    }
  }
  function o(u, v, A) {
    var z, s, x, y, t, w;
    z = this;
    if (A.corner == "center") {
      return v.position;
    }
    s = f.extend({}, u);
    y = {
      x: false,
      y: false,
    };
    t = {
      left: s.left < f.fn.qtip.cache.screen.scroll.left,
      right:
        s.left + A.dimensions.width + 2 >=
        f.fn.qtip.cache.screen.width + f.fn.qtip.cache.screen.scroll.left,
      top: s.top < f.fn.qtip.cache.screen.scroll.top,
      bottom:
        s.top + A.dimensions.height + 2 >=
        f.fn.qtip.cache.screen.height + f.fn.qtip.cache.screen.scroll.top,
    };
    x = {
      left:
        t.left &&
        (A.corner.search(/right/i) != -1 ||
          (A.corner.search(/right/i) == -1 && !t.right)),
      right:
        t.right &&
        (A.corner.search(/left/i) != -1 ||
          (A.corner.search(/left/i) == -1 && !t.left)),
      top: t.top && A.corner.search(/top/i) == -1,
      bottom: t.bottom && A.corner.search(/bottom/i) == -1,
    };
    if (x.left) {
      if (z.options.position.target !== "mouse") {
        s.left = v.position.left + v.dimensions.width;
      } else {
        s.left = z.cache.mouse.x;
      }
      y.x = "Left";
    } else {
      if (x.right) {
        if (z.options.position.target !== "mouse") {
          s.left = v.position.left - A.dimensions.width;
        } else {
          s.left = z.cache.mouse.x - A.dimensions.width;
        }
        y.x = "Right";
      }
    }
    if (x.top) {
      if (z.options.position.target !== "mouse") {
        s.top = v.position.top + v.dimensions.height;
      } else {
        s.top = z.cache.mouse.y;
      }
      y.y = "top";
    } else {
      if (x.bottom) {
        if (z.options.position.target !== "mouse") {
          s.top = v.position.top - A.dimensions.height;
        } else {
          s.top = z.cache.mouse.y - A.dimensions.height;
        }
        y.y = "bottom";
      }
    }
    if (s.left < 0) {
      s.left = u.left;
      y.x = false;
    }
    if (s.top < 0) {
      s.top = u.top;
      y.y = false;
    }
    if (z.options.style.tip.corner !== false) {
      s.corner = new String(A.corner);
      if (y.x !== false) {
        s.corner = s.corner.replace(/Left|Right|Middle/, y.x);
      }
      if (y.y !== false) {
        s.corner = s.corner.replace(/top|bottom/, y.y);
      }
      if (s.corner !== z.elements.tip.attr("rel")) {
        e.call(z, s.corner);
      }
    }
    return s;
  }
  function q(u, t) {
    var v, s;
    v = f.extend(true, {}, u);
    for (s in v) {
      if (t === true && s.search(/(tip|classes)/i) !== -1) {
        delete v[s];
      } else {
        if (!t && s.search(/(width|border|tip|title|classes|user)/i) !== -1) {
          delete v[s];
        }
      }
    }
    return v;
  }
  function c(s) {
    if (typeof s.tip !== "object") {
      s.tip = {
        corner: s.tip,
      };
    }
    if (typeof s.tip.size !== "object") {
      s.tip.size = {
        width: s.tip.size,
        height: s.tip.size,
      };
    }
    if (typeof s.border !== "object") {
      s.border = {
        width: s.border,
      };
    }
    if (typeof s.width !== "object") {
      s.width = {
        value: s.width,
      };
    }
    if (typeof s.width.max == "string") {
      s.width.max = parseInt(s.width.max.replace(/([0-9]+)/i, "$1"));
    }
    if (typeof s.width.min == "string") {
      s.width.min = parseInt(s.width.min.replace(/([0-9]+)/i, "$1"));
    }
    if (typeof s.tip.size.x == "number") {
      s.tip.size.width = s.tip.size.x;
      delete s.tip.size.x;
    }
    if (typeof s.tip.size.y == "number") {
      s.tip.size.height = s.tip.size.y;
      delete s.tip.size.y;
    }
    return s;
  }
  function a() {
    var s, t, u, x, v, w;
    s = this;
    u = [true, {}];
    for (t = 0; t < arguments.length; t++) {
      u.push(arguments[t]);
    }
    x = [f.extend.apply(f, u)];
    while (typeof x[0].name == "string") {
      x.unshift(c(f.fn.qtip.styles[x[0].name]));
    }
    x.unshift(
      true,
      {
        classes: {
          tooltip: "qtip-" + (arguments[0].name || "defaults"),
        },
      },
      f.fn.qtip.styles.defaults
    );
    v = f.extend.apply(f, x);
    w = f.browser.msie ? 1 : 0;
    v.tip.size.width += w;
    v.tip.size.height += w;
    if (v.tip.size.width % 2 > 0) {
      v.tip.size.width += 1;
    }
    if (v.tip.size.height % 2 > 0) {
      v.tip.size.height += 1;
    }
    if (v.tip.corner === true) {
      v.tip.corner =
        s.options.position.corner.tooltip === "center"
          ? false
          : s.options.position.corner.tooltip;
    }
    return v;
  }
  function b(v, u, t) {
    var s = {
      bottomRight: [
        [0, 0],
        [u, t],
        [u, 0],
      ],
      bottomLeft: [
        [0, 0],
        [u, 0],
        [0, t],
      ],
      topRight: [
        [0, t],
        [u, 0],
        [u, t],
      ],
      topLeft: [
        [0, 0],
        [0, t],
        [u, t],
      ],
      topMiddle: [
        [0, t],
        [u / 2, 0],
        [u, t],
      ],
      bottomMiddle: [
        [0, 0],
        [u, 0],
        [u / 2, t],
      ],
      rightMiddle: [
        [0, 0],
        [u, t / 2],
        [0, t],
      ],
      leftMiddle: [
        [u, 0],
        [u, t],
        [0, t / 2],
      ],
    };
    s.leftTop = s.bottomRight;
    s.rightTop = s.bottomLeft;
    s.leftBottom = s.topRight;
    s.rightBottom = s.topLeft;
    return s[v];
  }
  function g(s) {
    var t;
    if (f("<canvas>").get(0).getContext) {
      t = {
        topLeft: [s, s],
        topRight: [0, s],
        bottomLeft: [s, 0],
        bottomRight: [0, 0],
      };
    } else {
      if (f.browser.msie) {
        t = {
          topLeft: [-90, 90, 0],
          topRight: [-90, 90, -s],
          bottomLeft: [90, 270, 0],
          bottomRight: [90, 270, -s],
        };
      }
    }
    return t;
  }
  function k() {
    var s, t, u;
    s = this;
    u = s.getDimensions();
    t =
      '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:' +
      u.height +
      "px; width:" +
      u.width +
      'px" />';
    s.elements.bgiframe = s.elements.wrapper
      .prepend(t)
      .children(".qtip-bgiframe:first");
  }
  f(document).ready(function () {
    f.fn.qtip.cache = {
      screen: {
        scroll: {
          left: f(window).scrollLeft(),
          top: f(window).scrollTop(),
        },
        width: f(window).width(),
        height: f(window).height(),
      },
    };
    var s;
    f(window).bind("resize scroll", function (t) {
      clearTimeout(s);
      s = setTimeout(function () {
        if (t.type === "scroll") {
          f.fn.qtip.cache.screen.scroll = {
            left: f(window).scrollLeft(),
            top: f(window).scrollTop(),
          };
        } else {
          f.fn.qtip.cache.screen.width = f(window).width();
          f.fn.qtip.cache.screen.height = f(window).height();
        }
        for (i = 0; i < f.fn.qtip.interfaces.length; i++) {
          var u = f.fn.qtip.interfaces[i];
          if (
            u.status.rendered === true &&
            (u.options.position.type !== "static" ||
              (u.options.position.adjust.scroll && t.type === "scroll") ||
              (u.options.position.adjust.resize && t.type === "resize"))
          ) {
            u.updatePosition(t, true);
          }
        }
      }, 100);
    });
    f(document).bind("mousedown.qtip", function (t) {
      if (f(t.target).parents("div.qtip").length === 0) {
        f(".qtip[unfocus]").each(function () {
          var u = f(this).qtip("api");
          if (
            f(this).is(":visible") &&
            !u.status.disabled &&
            f(t.target).add(u.elements.target).length > 1
          ) {
            u.hide(t);
          }
        });
      }
    });
  });
  f.fn.qtip.interfaces = [];
  f.fn.qtip.log = {
    error: function () {
      return this;
    },
  };
  f.fn.qtip.constants = {};
  f.fn.qtip.defaults = {
    content: {
      prerender: false,
      text: false,
      url: false,
      data: null,
      title: {
        text: false,
        button: false,
      },
    },
    position: {
      target: false,
      corner: {
        target: "bottomRight",
        tooltip: "topLeft",
      },
      adjust: {
        x: 0,
        y: 0,
        mouse: true,
        screen: false,
        scroll: true,
        resize: true,
      },
      type: "absolute",
      container: false,
    },
    show: {
      when: {
        target: false,
        event: "mouseover",
      },
      effect: {
        type: "fade",
        length: 100,
      },
      delay: 140,
      solo: false,
      ready: false,
    },
    hide: {
      when: {
        target: false,
        event: "mouseout",
      },
      effect: {
        type: "fade",
        length: 100,
      },
      delay: 0,
      fixed: false,
    },
    api: {
      beforeRender: function () {},
      onRender: function () {},
      beforePositionUpdate: function () {},
      onPositionUpdate: function () {},
      beforeShow: function () {},
      onShow: function () {},
      beforeHide: function () {},
      onHide: function () {},
      beforeContentUpdate: function () {},
      onContentUpdate: function () {},
      beforeContentLoad: function () {},
      onContentLoad: function () {},
      beforeTitleUpdate: function () {},
      onTitleUpdate: function () {},
      beforeDestroy: function () {},
      onDestroy: function () {},
      beforeFocus: function () {},
      onFocus: function () {},
    },
  };
  f.fn.qtip.styles = {
    defaults: {
      background: "white",
      color: "#111",
      overflow: "hidden",
      textAlign: "left",
      width: {
        min: 0,
        max: 250,
      },
      padding: "5px 9px",
      border: {
        width: 1,
        radius: 0,
        color: "#d3d3d3",
      },
      tip: {
        corner: false,
        color: false,
        size: {
          width: 13,
          height: 13,
        },
        opacity: 1,
      },
      title: {
        background: "#e1e1e1",
        fontWeight: "bold",
        padding: "7px 12px",
      },
      button: {
        cursor: "pointer",
      },
      classes: {
        target: "",
        tip: "qtip-tip",
        title: "qtip-title",
        button: "qtip-button",
        content: "qtip-content",
        active: "qtip-active",
      },
    },
    cream: {
      border: {
        width: 3,
        radius: 0,
        color: "#F9E98E",
      },
      title: {
        background: "#F0DE7D",
        color: "#A27D35",
      },
      background: "#FBF7AA",
      color: "#A27D35",
      classes: {
        tooltip: "qtip-cream",
      },
    },
    light: {
      border: {
        width: 3,
        radius: 0,
        color: "#E2E2E2",
      },
      title: {
        background: "#f1f1f1",
        color: "#454545",
      },
      background: "white",
      color: "#454545",
      classes: {
        tooltip: "qtip-light",
      },
    },
    dark: {
      border: {
        width: 3,
        radius: 0,
        color: "#303030",
      },
      title: {
        background: "#404040",
        color: "#f3f3f3",
      },
      background: "#505050",
      color: "#f3f3f3",
      classes: {
        tooltip: "qtip-dark",
      },
    },
    red: {
      border: {
        width: 3,
        radius: 0,
        color: "#CE6F6F",
      },
      title: {
        background: "#f28279",
        color: "#9C2F2F",
      },
      background: "#F79992",
      color: "#9C2F2F",
      classes: {
        tooltip: "qtip-red",
      },
    },
    green: {
      border: {
        width: 3,
        radius: 0,
        color: "#A9DB66",
      },
      title: {
        background: "#b9db8c",
        color: "#58792E",
      },
      background: "#CDE6AC",
      color: "#58792E",
      classes: {
        tooltip: "qtip-green",
      },
    },
    blue: {
      border: {
        width: 3,
        radius: 0,
        color: "#ADD9ED",
      },
      title: {
        background: "#D0E9F5",
        color: "#5E99BD",
      },
      background: "#E5F6FE",
      color: "#4D9FBF",
      classes: {
        tooltip: "qtip-blue",
      },
    },
  };
})(jQuery);
