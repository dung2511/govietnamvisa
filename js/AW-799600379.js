// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var ba,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ha =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ia;
  if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
  else {
    var ja;
    a: {
      var ka = { a: !0 },
        la = {};
      try {
        la.__proto__ = ka;
        ja = la.a;
        break a;
      } catch (a) {}
      ja = !1;
    }
    ia = ja
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = ia,
    na = function (a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (ma) ma(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.mm = b.prototype;
    },
    oa = this || self,
    pa = function (a) {
      return a;
    };
  var qa = function () {},
    ra = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    sa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ta = Array.isArray,
    ua = function (a, b) {
      if (a && ta(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    va = function (a, b) {
      if (!sa(a) || !sa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ya = function (a, b) {
      for (var c = new wa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    za = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Aa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ba = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Da = function (a) {
      var b = [];
      if (ta(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ea = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Fa = function () {
      return new Date(Date.now());
    },
    Ga = function () {
      return Fa().getTime();
    },
    wa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  wa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ha = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ia = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ja = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ka = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    La = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ma = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Na = /^\w{1,9}$/,
    Oa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Na.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Pa = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Ra() {
    for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ta() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Sa, Ua;
  function Va(a) {
    Sa = Sa || Ta();
    Ua = Ua || Ra();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Sa[m], Sa[n], Sa[p], Sa[q]);
    }
    return b.join("");
  }
  function Wa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ua[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Sa = Sa || Ta();
    Ua = Ua || Ra();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Xa = {},
    Ya = function (a, b) {
      Xa[a] = Xa[a] || [];
      Xa[a][b] = !0;
    },
    $a = function () {
      delete Xa.GA4_EVENT;
    },
    ab = function (a) {
      var b = Xa[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Va(c.join("")).replace(/\.+$/, "");
    };
  var bb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var cb,
    db = function () {
      if (void 0 === cb) {
        var a = null,
          b = oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: pa,
              createScript: pa,
              createScriptURL: pa,
            });
          } catch (c) {
            oa.console && oa.console.error(c.message);
          }
          cb = a;
        } else cb = a;
      }
      return cb;
    };
  var eb = function (a) {
    this.h = a;
  };
  eb.prototype.toString = function () {
    return this.h + "";
  };
  var fb = {};
  var gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var hb, ib;
  a: {
    for (var jb = ["CLOSURE_FLAGS"], kb = oa, lb = 0; lb < jb.length; lb++)
      if (((kb = kb[jb[lb]]), null == kb)) {
        ib = null;
        break a;
      }
    ib = kb;
  }
  var mb = ib && ib[610401301];
  hb = null != mb ? mb : !1;
  function nb() {
    var a = oa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var ob,
    pb = oa.navigator;
  ob = pb ? pb.userAgentData || null : null;
  function qb(a) {
    return hb
      ? ob
        ? ob.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function rb(a) {
    return -1 != nb().indexOf(a);
  }
  function sb() {
    return hb ? !!ob && 0 < ob.brands.length : !1;
  }
  function tb() {
    return sb() ? !1 : rb("Opera");
  }
  function ub() {
    return rb("Firefox") || rb("FxiOS");
  }
  function vb() {
    return sb()
      ? qb("Chromium")
      : ((rb("Chrome") || rb("CriOS")) && !(sb() ? 0 : rb("Edge"))) ||
          rb("Silk");
  }
  var wb = {},
    xb = function (a) {
      this.h = a;
    };
  xb.prototype.toString = function () {
    return this.h.toString();
  };
  var yb = function (a) {
    return a instanceof xb && a.constructor === xb
      ? a.h
      : "type_error:SafeHtml";
  }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  function zb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  (function () {
    return "";
  })
    .toString()
    .indexOf("`");
  function Ab(a) {
    var b = (a = Bb(a)),
      c = db(),
      d = c ? c.createHTML(b) : b;
    return new xb(d, wb);
  }
  function Bb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    C = document,
    Cb = navigator,
    Db = C.currentScript && C.currentScript.src,
    Eb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Fb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Gb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Ib = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Jb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Kb = function (a, b, c, d, e) {
      var f = C.createElement("script");
      Jb(f, d, Gb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = Bb(a),
        m = db(),
        n = m ? m.createScriptURL(l) : l;
      g = new eb(n, fb);
      f.src =
        g instanceof eb && g.constructor === eb
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Fb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = C.getElementsByTagName("script")[0] || C.body || C.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Lb = function () {
      if (Db) {
        var a = Db.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Mb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = C.createElement("iframe")), (l = !0));
      Jb(g, c, Ib);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (C.body && C.body.lastChild) || C.body || C.head;
        m.parentNode.insertBefore(g, m);
      }
      Fb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Nb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Jb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Ob = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Pb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Qb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Rb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Sb = function (a) {
      var b = C.createElement("div"),
        c = b,
        d = Ab("A<div>" + a + "</div>");
      1 === c.nodeType && zb(c);
      c.innerHTML = yb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Tb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Ub = function (a) {
      var b;
      try {
        b = Cb.sendBeacon && Cb.sendBeacon(a);
      } catch (c) {
        Ya("TAGGING", 15);
      }
      b || Nb(a);
    },
    Vb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Wb = function (a, b) {
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Xb = function () {
      var a = z.performance;
      if (a && ra(a.now)) return a.now();
    },
    Yb = function () {
      return z.performance || void 0;
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Zb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    $b = function (a) {
      if (null == a) return String(a);
      var b = Zb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    ac = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    G = function (a) {
      if (!a || "object" != $b(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !ac(a, "constructor") &&
          !ac(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || ac(a, b);
    },
    J = function (a, b) {
      var c = b || ("array" == $b(a) ? [] : {}),
        d;
      for (d in a)
        if (ac(a, d)) {
          var e = a[d];
          "array" == $b(e)
            ? ("array" != $b(c[d]) && (c[d] = []), (c[d] = J(e, c[d])))
            : G(e)
            ? (G(c[d]) || (c[d] = {}), (c[d] = J(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var bc = function (a) {
    if (void 0 === a || ta(a) || G(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function cc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function dc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function ec(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + cc(c) + cc(d);
      case 1:
        return "G2" + dc(c) + dc(d);
      default:
        return "g1--";
    }
  }
  var fc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Ki: a("consent"),
      Hg: a("convert_case_to"),
      Ig: a("convert_false_to"),
      Jg: a("convert_null_to"),
      Kg: a("convert_true_to"),
      Lg: a("convert_undefined_to"),
      Ll: a("debug_mode_metadata"),
      yb: a("function"),
      Lf: a("instance_name"),
      Lj: a("live_only"),
      Mj: a("malware_disabled"),
      Nj: a("metadata"),
      Qj: a("original_activity_id"),
      Tl: a("original_vendor_template_id"),
      Sl: a("once_on_load"),
      Pj: a("once_per_event"),
      Lh: a("once_per_load"),
      Xl: a("priority_override"),
      Yl: a("respected_consent_types"),
      Ph: a("setup_tags"),
      wd: a("tag_id"),
      Uh: a("teardown_tags"),
    };
  })();
  var Bc;
  var Dc = [],
    Ec = [],
    Fc = [],
    Gc = [],
    Hc = [],
    Ic = {},
    Jc,
    Kc,
    Mc = function () {
      var a = Lc;
      Kc = Kc || a;
    },
    Nc,
    Oc = [],
    Pc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Ic[c],
        f = b && 2 === b.type && d.wi && e && -1 !== Oc.indexOf(c),
        g = {},
        l = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && d && d.Zh && d.Zh(a[m]), e && (g[m] = a[m]), !e || f) &&
          (l[m.substr(4)] = a[m]);
      e && d && d.Yh && (g.vtp_gtmCachedValues = d.Yh);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = Dc[p];
                  break;
                case 1:
                  q = Gc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[fc.Lf];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = Bc(c, l, b);
      f && t !== u && d && d.wi(d.id, c);
      return e ? t : u;
    },
    Rc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Qc(a[e], b, c));
      return d;
    },
    Qc = function (a, b, c) {
      if (ta(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Qc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Dc[f];
            if (!g || b.ag(g)) return;
            c[f] = !0;
            var l = String(g[fc.Lf]);
            try {
              var m = Rc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Pc(m, { event: b, index: f, type: 2, name: l });
              Nc && (d = Nc.fk(d, m));
            } catch (y) {
              b.li && b.li(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Qc(a[n], b, c)] = Qc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Qc(a[q], b, c);
              Kc && (p = p || r === Kc.Be);
              d.push(r);
            }
            return Kc && p ? Kc.gk(d) : d.join("");
          case "escape":
            d = Qc(a[1], b, c);
            if (Kc && ta(a[1]) && "macro" === a[1][0] && Kc.Jk(a))
              return Kc.jl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) gc[a[t]] && (d = gc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Gc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { fi: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Sc(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Sc = function (a, b, c) {
      try {
        return Jc(Rc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Vc = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Tc(a), f = 0; f < Ec.length; f++) {
        var g = Ec[f],
          l = Uc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < Gc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Uc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    Tc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Sc(Fc[c], a));
        return b[c];
      };
    };
  var Wc = {
    fk: function (a, b) {
      b[fc.Hg] &&
        "string" === typeof a &&
        (a = 1 == b[fc.Hg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(fc.Jg) && null === a && (a = b[fc.Jg]);
      b.hasOwnProperty(fc.Lg) && void 0 === a && (a = b[fc.Lg]);
      b.hasOwnProperty(fc.Kg) && !0 === a && (a = b[fc.Kg]);
      b.hasOwnProperty(fc.Ig) && !1 === a && (a = b[fc.Ig]);
      return a;
    },
  };
  var jd = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function kd(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var ld = new wa();
  function md(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = ld.get(e);
      f || ((f = new RegExp(b, d)), ld.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  var td = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function ud(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var wd = function (a) {
      return vd ? C.querySelectorAll(a) : null;
    },
    xd = function (a, b) {
      if (!vd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    yd = !1;
  if (C.querySelectorAll)
    try {
      var zd = C.querySelectorAll(":root");
      zd && 1 == zd.length && zd[0] == C.documentElement && (yd = !0);
    } catch (a) {}
  var vd = yd;
  var K = function (a) {
    Ya("GTM", a);
  };
  var Ad = function (a) {
      return null == a ? "" : h(a) ? Ea(String(a)) : "e0";
    },
    Ed = function (a) {
      return a.replace(Bd, "");
    },
    Gd = function (a) {
      return Fd(a.replace(/\s/g, ""));
    },
    Fd = function (a) {
      return Ea(a.replace(Hd, "").toLowerCase());
    },
    Jd = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Id.test(a) ? a : "e0";
    },
    Ld = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Kd.test(c)) return c;
      }
      return "e0";
    },
    Od = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== Md.indexOf(c.name)
            ? Nd(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    Nd = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Pd.test(a)) return Promise.resolve(a);
        try {
          var b = Qd(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Qd = function (a) {
      var b;
      if (z.TextEncoder) b = new TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Hd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Kd = /^\S+@\S+\.\S+$/,
    Id = /^\+\d{10,15}$/,
    Bd = /[.~]/g,
    Rd = /^[0-9A-Za-z_-]{43}$/,
    Pd = /^[0-9A-Fa-f]{64}$/,
    Sd = {},
    Td =
      ((Sd.email = "em"),
      (Sd.phone_number = "pn"),
      (Sd.first_name = "fn"),
      (Sd.last_name = "ln"),
      (Sd.street = "sa"),
      (Sd.city = "ct"),
      (Sd.region = "rg"),
      (Sd.country = "co"),
      (Sd.postal_code = "pc"),
      (Sd.error_code = "ec"),
      Sd),
    Ud = {},
    Vd =
      ((Ud.email = "sha256_email_address"),
      (Ud.phone_number = "sha256_phone_number"),
      (Ud.first_name = "sha256_first_name"),
      (Ud.last_name = "sha256_last_name"),
      (Ud.street = "sha256_street"),
      Ud),
    Wd = function (a, b) {
      function c(t, u, v, w) {
        var x = Ad(t);
        "" !== x &&
          (Pd.test(x)
            ? m.push({ name: u, value: x, index: w })
            : m.push({ name: u, value: v(x), index: w }));
      }
      function d(t, u) {
        var v = t;
        if (h(v) || ta(v)) {
          v = ta(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Ad(v[w]),
              y = Pd.test(x);
            u && !y && K(89);
            !u && y && K(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Vd[u];
        t.hasOwnProperty(w) &&
          (t.hasOwnProperty(u) && K(90), (v = t[w]), d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = ta(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function g(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function l(t) {
        return function (u) {
          K(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Ld);
        f(a, "phone_number", Jd);
        f(a, "first_name", l(Gd));
        f(a, "last_name", l(Gd));
        var n = a.home_address || {};
        f(n, "street", l(Fd));
        f(n, "city", l(Fd));
        f(n, "postal_code", l(Ed));
        f(n, "region", l(Fd));
        f(n, "country", l(Ed));
        var p = a.address || {};
        p = ta(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", Gd, q);
          g(r, "last_name", Gd, q);
          g(r, "street", Fd, q);
          g(r, "city", Fd, q);
          g(r, "postal_code", Ed, q);
          g(r, "region", Fd, q);
          g(r, "country", Ed, q);
        }
        Od(m, b);
      } else m.push({ name: "error_code", value: "e3", index: void 0 }), b(m);
    },
    Xd = function (a, b) {
      Wd(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            l = c[f].value,
            m = c[f].index,
            n = Td[g];
          n &&
            l &&
            (-1 === Md.indexOf(g) ||
              /^e\d+$/.test(l) ||
              Rd.test(l) ||
              Pd.test(l)) &&
            (void 0 !== m && (n += m), d.push(n + "." + l), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Yd = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            Xd(a, function (c, d) {
              b({ Te: c, bl: d });
            });
          });
        } catch (b) {}
    },
    Md = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var N = {
      g: {
        Cg: "ad_personalization",
        C: "ad_storage",
        ef: "ad_user_data",
        K: "analytics_storage",
        Wb: "region",
        Xd: "consent_updated",
        Dg: "wait_for_update",
        Oi: "ads",
        Kl: "all",
        Pi: "play",
        Qi: "search",
        Ri: "youtube",
        Si: "app_remove",
        Ti: "app_store_refund",
        Ui: "app_store_subscription_cancel",
        Vi: "app_store_subscription_convert",
        Wi: "app_store_subscription_renew",
        Mg: "add_payment_info",
        Ng: "add_shipping_info",
        Xb: "add_to_cart",
        Yb: "remove_from_cart",
        Og: "view_cart",
        Cb: "begin_checkout",
        Zb: "select_item",
        Ta: "view_item_list",
        nb: "select_promotion",
        Ua: "view_promotion",
        xa: "purchase",
        ac: "refund",
        Ca: "view_item",
        Pg: "add_to_wishlist",
        Xi: "exception",
        Yi: "first_open",
        Zi: "first_visit",
        ia: "gtag.config",
        Da: "gtag.get",
        aj: "in_app_purchase",
        bc: "page_view",
        bj: "screen_view",
        cj: "session_start",
        dj: "timing_complete",
        ej: "track_social",
        Zd: "user_engagement",
        ob: "gclid",
        ja: "ads_data_redaction",
        R: "allow_ad_personalization_signals",
        ae: "allow_custom_scripts",
        lf: "allow_display_features",
        be: "allow_enhanced_conversions",
        pb: "allow_google_signals",
        ya: "allow_interest_groups",
        fj: "app_id",
        gj: "app_installer_id",
        ij: "app_name",
        jj: "app_version",
        fc: "auid",
        kj: "auto_detection_enabled",
        Db: "aw_remarketing",
        nf: "aw_remarketing_only",
        ce: "discount",
        de: "aw_feed_country",
        ee: "aw_feed_language",
        T: "items",
        fe: "aw_merchant_id",
        Qg: "aw_basket_type",
        Mc: "campaign_content",
        Nc: "campaign_id",
        Oc: "campaign_medium",
        Pc: "campaign_name",
        Qc: "campaign",
        Rc: "campaign_source",
        Sc: "campaign_term",
        Va: "client_id",
        lj: "content_group",
        mj: "content_type",
        Ea: "conversion_cookie_prefix",
        Tc: "conversion_id",
        qa: "conversion_linker",
        Eb: "conversion_api",
        Ia: "cookie_domain",
        za: "cookie_expires",
        Ja: "cookie_flags",
        hc: "cookie_name",
        Uc: "cookie_path",
        Fa: "cookie_prefix",
        Xa: "cookie_update",
        qb: "country",
        na: "currency",
        he: "customer_lifetime_value",
        ic: "custom_map",
        Rg: "gcldc",
        nj: "debug_mode",
        U: "developer_id",
        oj: "disable_merchant_reported_purchases",
        jc: "dc_custom_params",
        Sg: "dc_natural_search",
        pf: "dynamic_event_settings",
        Tg: "affiliation",
        ie: "checkout_option",
        qf: "checkout_step",
        Ug: "coupon",
        Vc: "item_list_name",
        rf: "list_name",
        pj: "promotions",
        Wc: "shipping",
        tf: "tax",
        je: "engagement_time_msec",
        Xc: "enhanced_client_id",
        Yc: "enhanced_conversions",
        Vg: "enhanced_conversions_automatic_settings",
        ke: "estimated_delivery_date",
        uf: "euid_logged_in_state",
        kc: "event_callback",
        qj: "event_category",
        rb: "event_developer_id_string",
        rj: "event_label",
        Wg: "event",
        me: "event_settings",
        ne: "event_timeout",
        sj: "description",
        tj: "fatal",
        uj: "experiments",
        vf: "firebase_id",
        oe: "first_party_collection",
        pe: "_x_20",
        Fb: "_x_19",
        Xg: "fledge",
        Yg: "flight_error_code",
        Zg: "flight_error_message",
        ah: "fl_activity_category",
        bh: "fl_activity_group",
        wf: "fl_advertiser_id",
        eh: "fl_ar_dedupe",
        fh: "fl_random_number",
        gh: "tran",
        hh: "u",
        qe: "gac_gclid",
        mc: "gac_wbraid",
        ih: "gac_wbraid_multiple_conversions",
        jh: "ga_restrict_domain",
        xf: "ga_temp_client_id",
        se: "gdpr_applies",
        kh: "geo_granularity",
        Ya: "value_callback",
        Ka: "value_key",
        Nl: "google_ono",
        Za: "google_signals",
        lh: "google_tld",
        te: "groups",
        mh: "gsa_experiment_id",
        nh: "iframe_state",
        ue: "ignore_referrer",
        yf: "internal_traffic_results",
        tb: "is_legacy_converted",
        ub: "is_legacy_loaded",
        ve: "is_passthrough",
        ra: "language",
        zf: "legacy_developer_id_string",
        sa: "linker",
        nc: "accept_incoming",
        vb: "decorate_forms",
        N: "domains",
        Gb: "url_position",
        oh: "method",
        vj: "name",
        Zc: "new_customer",
        ph: "non_interaction",
        wj: "optimize_id",
        Af: "page_hostname",
        Hb: "page_path",
        Aa: "page_referrer",
        wb: "page_title",
        qh: "passengers",
        rh: "phone_conversion_callback",
        xj: "phone_conversion_country_code",
        sh: "phone_conversion_css_class",
        yj: "phone_conversion_ids",
        th: "phone_conversion_number",
        uh: "phone_conversion_options",
        oc: "quantity",
        ad: "redact_device_info",
        Bf: "redact_enhanced_user_id",
        zj: "redact_ga_client_id",
        Aj: "redact_user_id",
        we: "referral_exclusion_definition",
        Ib: "restricted_data_processing",
        Bj: "retoken",
        Cj: "sample_rate",
        Cf: "screen_name",
        xb: "screen_resolution",
        Dj: "search_term",
        La: "send_page_view",
        Jb: "send_to",
        xe: "server_container_url",
        bd: "session_duration",
        ye: "session_engaged",
        Df: "session_engaged_time",
        ab: "session_id",
        ze: "session_number",
        dd: "delivery_postal_code",
        vh: "temporary_client_id",
        Ef: "topmost_url",
        Ej: "tracking_id",
        Ff: "traffic_type",
        ka: "transaction_id",
        qc: "transport_url",
        wh: "trip_type",
        sc: "update",
        cb: "url_passthrough",
        ed: "_user_agent_architecture",
        fd: "_user_agent_bitness",
        gd: "_user_agent_full_version_list",
        hd: "_user_agent_mobile",
        jd: "_user_agent_model",
        kd: "_user_agent_platform",
        ld: "_user_agent_platform_version",
        md: "_user_agent_wow64",
        la: "user_data",
        xh: "user_data_auto_latency",
        yh: "user_data_auto_meta",
        zh: "user_data_auto_multi",
        Ah: "user_data_auto_selectors",
        Bh: "user_data_auto_status",
        Gf: "user_data_mode",
        Hf: "user_data_settings",
        wa: "user_id",
        Ma: "user_properties",
        Ch: "us_privacy_string",
        X: "value",
        uc: "wbraid",
        Dh: "wbraid_multiple_conversions",
        Ih: "_host_name",
        Jh: "_in_page_command",
        Kh: "_is_passthrough_cid",
        De: "non_personalized_ads",
        vd: "_sst_parameters",
        Wa: "conversion_label",
        da: "page_location",
        sb: "global_developer_id_string",
        Ae: "tc_privacy_string",
      },
    },
    Zd = {},
    $d = Object.freeze(
      ((Zd[N.g.R] = 1),
      (Zd[N.g.lf] = 1),
      (Zd[N.g.be] = 1),
      (Zd[N.g.pb] = 1),
      (Zd[N.g.T] = 1),
      (Zd[N.g.Ia] = 1),
      (Zd[N.g.za] = 1),
      (Zd[N.g.Ja] = 1),
      (Zd[N.g.hc] = 1),
      (Zd[N.g.Uc] = 1),
      (Zd[N.g.Fa] = 1),
      (Zd[N.g.Xa] = 1),
      (Zd[N.g.ic] = 1),
      (Zd[N.g.U] = 1),
      (Zd[N.g.pf] = 1),
      (Zd[N.g.kc] = 1),
      (Zd[N.g.me] = 1),
      (Zd[N.g.ne] = 1),
      (Zd[N.g.oe] = 1),
      (Zd[N.g.jh] = 1),
      (Zd[N.g.Za] = 1),
      (Zd[N.g.lh] = 1),
      (Zd[N.g.te] = 1),
      (Zd[N.g.yf] = 1),
      (Zd[N.g.tb] = 1),
      (Zd[N.g.ub] = 1),
      (Zd[N.g.sa] = 1),
      (Zd[N.g.Bf] = 1),
      (Zd[N.g.we] = 1),
      (Zd[N.g.Ib] = 1),
      (Zd[N.g.La] = 1),
      (Zd[N.g.Jb] = 1),
      (Zd[N.g.xe] = 1),
      (Zd[N.g.bd] = 1),
      (Zd[N.g.Df] = 1),
      (Zd[N.g.dd] = 1),
      (Zd[N.g.qc] = 1),
      (Zd[N.g.sc] = 1),
      (Zd[N.g.Hf] = 1),
      (Zd[N.g.Ma] = 1),
      (Zd[N.g.vd] = 1),
      Zd)
    );
  Object.freeze([
    N.g.da,
    N.g.Aa,
    N.g.wb,
    N.g.ra,
    N.g.Cf,
    N.g.wa,
    N.g.vf,
    N.g.lj,
  ]);
  var ae = {},
    be = Object.freeze(
      ((ae[N.g.Si] = 1),
      (ae[N.g.Ti] = 1),
      (ae[N.g.Ui] = 1),
      (ae[N.g.Vi] = 1),
      (ae[N.g.Wi] = 1),
      (ae[N.g.Yi] = 1),
      (ae[N.g.Zi] = 1),
      (ae[N.g.aj] = 1),
      (ae[N.g.cj] = 1),
      (ae[N.g.Zd] = 1),
      ae)
    ),
    ce = {},
    de = Object.freeze(
      ((ce[N.g.Mg] = 1),
      (ce[N.g.Ng] = 1),
      (ce[N.g.Xb] = 1),
      (ce[N.g.Yb] = 1),
      (ce[N.g.Og] = 1),
      (ce[N.g.Cb] = 1),
      (ce[N.g.Zb] = 1),
      (ce[N.g.Ta] = 1),
      (ce[N.g.nb] = 1),
      (ce[N.g.Ua] = 1),
      (ce[N.g.xa] = 1),
      (ce[N.g.ac] = 1),
      (ce[N.g.Ca] = 1),
      (ce[N.g.Pg] = 1),
      ce)
    ),
    ee = Object.freeze([N.g.R, N.g.pb, N.g.Xa]),
    fe = Object.freeze([].concat(ee)),
    ge = Object.freeze([N.g.za, N.g.ne, N.g.bd, N.g.Df, N.g.je]),
    he = Object.freeze([].concat(ge)),
    ie = {},
    je = ((ie[N.g.C] = "1"), (ie[N.g.K] = "2"), ie),
    ke = {},
    me = Object.freeze(
      ((ke[N.g.R] = 1),
      (ke[N.g.be] = 1),
      (ke[N.g.ya] = 1),
      (ke[N.g.Db] = 1),
      (ke[N.g.nf] = 1),
      (ke[N.g.ce] = 1),
      (ke[N.g.de] = 1),
      (ke[N.g.ee] = 1),
      (ke[N.g.T] = 1),
      (ke[N.g.fe] = 1),
      (ke[N.g.Ea] = 1),
      (ke[N.g.qa] = 1),
      (ke[N.g.Ia] = 1),
      (ke[N.g.za] = 1),
      (ke[N.g.Ja] = 1),
      (ke[N.g.Fa] = 1),
      (ke[N.g.na] = 1),
      (ke[N.g.he] = 1),
      (ke[N.g.U] = 1),
      (ke[N.g.oj] = 1),
      (ke[N.g.Yc] = 1),
      (ke[N.g.ke] = 1),
      (ke[N.g.vf] = 1),
      (ke[N.g.oe] = 1),
      (ke[N.g.tb] = 1),
      (ke[N.g.ub] = 1),
      (ke[N.g.ra] = 1),
      (ke[N.g.Zc] = 1),
      (ke[N.g.da] = 1),
      (ke[N.g.Aa] = 1),
      (ke[N.g.rh] = 1),
      (ke[N.g.sh] = 1),
      (ke[N.g.th] = 1),
      (ke[N.g.uh] = 1),
      (ke[N.g.Ib] = 1),
      (ke[N.g.La] = 1),
      (ke[N.g.Jb] = 1),
      (ke[N.g.xe] = 1),
      (ke[N.g.dd] = 1),
      (ke[N.g.ka] = 1),
      (ke[N.g.qc] = 1),
      (ke[N.g.sc] = 1),
      (ke[N.g.cb] = 1),
      (ke[N.g.la] = 1),
      (ke[N.g.wa] = 1),
      (ke[N.g.X] = 1),
      ke)
    );
  Object.freeze(N.g);
  var ne = {},
    oe = (z.google_tag_manager = z.google_tag_manager || {}),
    pe = Math.random();
  ne.Mf = "36l0";
  ne.ud = Number("0") || 0;
  ne.ba = "dataLayer";
  ne.Mi =
    "ChEI8OLPpAYQwdS5w9G6/dvkARIlALz9DAPiARBkk2vPVt87ygEaLskV8AAunVFMOf8HYE37YDWFQBoCZ0A\x3d";
  var qe = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    re = { __paused: 1, __tg: 1 },
    se;
  for (se in qe) qe.hasOwnProperty(se) && (re[se] = 1);
  var te = Ba(""),
    ue,
    ve = !1;
  ve = !0;
  ue = ve;
  var we,
    xe = !1;
  we = xe;
  var ye,
    ze = !1;
  ye = ze;
  var Ae,
    Be = !1;
  Ae = Be;
  ne.Yd = "www.googletagmanager.com";
  var Ce = "" + ne.Yd + (ue ? "/gtag/js" : "/gtm.js"),
    De = null,
    Ee = null,
    Fe = {},
    Ge = {},
    He = {},
    Ie = function () {
      var a = oe.sequence || 1;
      oe.sequence = a + 1;
      return a;
    };
  ne.Li = "";
  var Je = "";
  ne.He = Je;
  var Ke = new wa(),
    Le = {},
    Me = {},
    Pe = {
      name: ne.ba,
      set: function (a, b) {
        J(Ma(a, b), Le);
        Ne();
      },
      get: function (a) {
        return Oe(a, 2);
      },
      reset: function () {
        Ke = new wa();
        Le = {};
        Ne();
      },
    },
    Oe = function (a, b) {
      return 2 != b ? Ke.get(a) : Qe(a);
    },
    Qe = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Le, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Re = function (a, b) {
      Me.hasOwnProperty(a) || (Ke.set(a, b), J(Ma(a, b), Le), Ne());
    },
    Ne = function (a) {
      k(Me, function (b, c) {
        Ke.set(b, c);
        J(Ma(b), Le);
        J(Ma(b, c), Le);
        a && delete Me[b];
      });
    },
    Se = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Qe(a) : Ke.get(a);
      "array" === $b(d) || "object" === $b(d) ? (c = J(d)) : (c = d);
      return c;
    };
  var Te = [],
    Ue = function (a) {
      return void 0 == Te[a] ? !1 : Te[a];
    };
  var O = [];
  O[7] = !0;
  O[9] = !0;
  O[27] = !0;
  O[28] = !0;
  O[11] = !0;
  O[13] = !0;
  O[55] = !0;
  O[15] = !0;
  O[16] = !0;
  O[25] = !0;
  O[26] = !0;
  O[34] = !0;
  O[36] = !0;
  O[43] = !0;
  O[57] = !0;
  O[59] = !0;
  O[61] = !0;
  O[66] = !0;
  O[68] = !0;
  O[72] = !0;
  (O[73] = !0), (Te[1] = !0);
  O[75] = !0;
  Te[2] = !0;
  O[76] = !0;
  O[77] = !0;
  O[79] = !0;
  O[80] = !0;
  O[83] = !0;
  O[88] = !0;
  O[89] = !0;
  O[92] = !0;
  O[93] = !0;
  O[94] = !0;
  O[96] = !0;
  O[97] = !0;
  O[107] = !0;
  O[113] = !0;
  O[115] = !0;
  O[116] = !0;
  O[118] = !0;
  O[121] = !0;
  O[122] = !0;

  O[132] = !0;
  O[135] = !0;

  var P = function (a) {
    return !!O[a];
  };
  var Ve = function (a) {
    Ya("HEALTH", a);
  };
  var We;
  try {
    We = JSON.parse(
      Wa(
        "eyIwIjoiVk4iLCIxIjoiVk4tSE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiIifQ"
      )
    );
  } catch (a) {
    K(123), Ve(2), (We = {});
  }
  var Xe = function () {
      var a = !1;
      return a;
    },
    Ye = function () {
      return !!We["6"];
    },
    Ze = function () {
      var a = "";
      return a;
    },
    $e = function () {
      var a = !1;
      a = !!We["5"];
      return a;
    },
    af = function () {
      var a = "";
      return a;
    };
  var bf,
    cf = !1,
    df = function (a) {
      if (!cf) {
        cf = !0;
        bf = bf || {};
      }
      return bf[a];
    };
  var ef = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    ff = function (a) {
      if (C.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var pf = /:[0-9]+$/,
    qf = /^\d+\.fls\.doubleclick\.net$/,
    uf = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    xf = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = vf(a.protocol) || vf(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(pf, "")
            .toLowerCase());
      return wf(a, b, c, d, e);
    },
    wf = function (a, b, c, d, e) {
      var f,
        g = vf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = yf(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(pf, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Ya("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = uf(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    vf = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    yf = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    zf = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Ya("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(pf, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Af = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = zf(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Bf = function (a) {
      var b = zf(z.location.href),
        c = xf(b, "host", !1);
      if (c && c.match(qf)) {
        var d = xf(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Df = function (a, b, c) {
      var d = a.element,
        e = { P: a.P, type: a.aa, tagName: d.tagName };
      b && (e.querySelector = Cf(d));
      c && (e.isVisible = !ff(d));
      return e;
    },
    Ef = function (a, b, c) {
      return Df({ element: a.element, P: a.P, aa: "1" }, b, c);
    },
    Ff = function (a) {
      var b = !!a.zc + "." + !!a.Ac;
      a && a.Ad && a.Ad.length && (b += "." + a.Ad.join("."));
      a &&
        a.Qa &&
        (b += "." + a.Qa.email + "." + a.Qa.phone + "." + a.Qa.address);
      return b;
    },
    If = function (a) {
      if (0 != a.length) {
        var b;
        b = Gf(a, function (c) {
          return !Hf.test(c.P);
        });
        b = Gf(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Gf(b, function (c) {
          return !ff(c.element);
        });
        return b[0];
      }
    },
    Jf = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && xd(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Gf = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Cf = function (a) {
      var b;
      if (a === C.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Cf(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Lf = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(Kf);
          if (f) {
            var g = f[0],
              l;
            if (z.location) {
              var m = wf(z.location, "host", !0);
              l = 0 <= g.toLowerCase().indexOf(m);
            } else l = !1;
            l || b.push({ element: d, P: g });
          }
        }
      }
      return b;
    },
    Pf = function () {
      var a = [],
        b = C.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= Mf.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= Nf.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (P(114) && -1 !== Of.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    Qf = !0,
    Rf = !1;
  var Kf = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Sf = /@(gmail|googlemail)\./i,
    Hf = /support|noreply/i,
    Mf = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Nf = ["BR"],
    Tf = { Ml: "1", Vl: "2", Ol: "3", Ql: "4", Jl: "5", Wl: "6", Rl: "7" },
    Uf = {},
    Of = ["INPUT", "SELECT"];
  var mg = function (a) {
      a = a || { zc: !0, Ac: !0 };
      a.Qa = a.Qa || { email: !0, phone: !1, address: !1 };
      var b = Ff(a),
        c = Uf[b];
      if (c && 200 > Ga() - c.timestamp) return c.result;
      var d = Pf(),
        e = d.status,
        f = [],
        g,
        l,
        m = [];
      if (!P(114)) {
        if (a.Qa && a.Qa.email) {
          var n = Lf(d.elements);
          f = Jf(n, a && a.Ad);
          g = If(f);
          10 < n.length && (e = "3");
        }
        !a.yi && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Ef(f[p], a.zc, a.Ac));
        m = m.slice(0, 10);
      } else if (a.Qa) {
      }
      g && (l = Ef(g, a.zc, a.Ac));
      var D = { elements: m, il: l, status: e };
      Uf[b] = { timestamp: Ga(), result: D };
      return D;
    },
    ng = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.P.length + ":" + Sf.test(a.P)
      );
    };
  var og = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), l = 0; l < g.length; l++) {
          var m = g[l].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Oe(m.substring(10));
            else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && vd) {
        var q = wd(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Rb(q[r]) || Ea(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    pg = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = og(b, "email", a.email) || c;
        c = og(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = og(f, "first_name", d[e].first_name) || c;
          c = og(f, "last_name", d[e].last_name) || c;
          c = og(f, "street", d[e].street) || c;
          c = og(f, "city", d[e].city) || c;
          c = og(f, "region", d[e].region) || c;
          c = og(f, "country", d[e].country) || c;
          c = og(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    qg = function (a) {
      return a.B[N.g.Hf];
    },
    rg = function (a) {
      var b = S(a, N.g.Yc) || {},
        c = !1;
      k(b, function (d, e) {
        var f = e.enhanced_conversions_mode;
        if ("automatic" === f || "manual" === f) c = !0;
      });
      return c;
    },
    sg = function (a) {
      if (!G(a)) return !1;
      var b = a.mode;
      return (
        "auto_detect" === b ||
        "selectors" === b ||
        "code" === b ||
        !!a.enable_code
      );
    },
    tg = function (a) {
      if (a) {
        if ("selectors" === a.mode || G(a.selectors)) return pg(a.selectors);
        if ("auto_detect" === a.mode || G(a.auto_detect)) {
          var b;
          var c = a.auto_detect;
          if (c) {
            var d = mg({
                zc: !1,
                Ac: !1,
                Ad: c.exclude_element_selectors,
                Qa: {
                  email: !!c.email,
                  phone: !!c.phone,
                  address: !!c.address,
                },
              }).elements,
              e = {};
            if (0 < d.length)
              for (var f = 0; f < d.length; f++) {
                var g = d[f];
                if ("1" === g.type) {
                  e.email = g.P;
                  break;
                }
              }
            b = e;
          } else b = void 0;
          return b;
        }
      }
    };
  var ug = function (a) {
      var b = a && a[N.g.Vg];
      return b && b[N.g.kj];
    },
    vg = function () {
      return -1 !== Cb.userAgent.toLowerCase().indexOf("firefox");
    },
    wg = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var xg = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var yg = function (a) {
    yg[" "](a);
    return a;
  };
  yg[" "] = function () {};
  var Ag = function () {
    var a = zg,
      b = "Yf";
    if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
    var c = new a();
    return (a.Yf = c);
  };
  var zg = function () {
    var a = {};
    this.h = function () {
      var b = xg.h,
        c = xg.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[xg.h] = !0;
    };
  };
  var Bg = !1,
    Cg = !1,
    Dg = [],
    Eg = {},
    Fg = {},
    Gg = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Hg() {
    var a = Eb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        cps: {},
        default: Ig,
        update: Jg,
        declare: Kg,
        implicit: Lg,
        addListener: Mg,
        notifyListeners: Ng,
        setCps: Og,
        active: !1,
        usedDeclare: !1,
        usedDefault: !1,
        usedUpdate: !1,
        usedImplicit: !1,
        usedSetCps: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Pg(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Kg(a, b, c, d, e) {
    var f = Hg();
    f.active = !0;
    f.usedDeclare = !0;
    var g = f.entries,
      l = g[a] || {},
      m = l.declare_region,
      n = c && h(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Pg(n, m, d, e)) {
      var p = {
        region: l.region,
        declare_region: n,
        declare: "granted" === b,
        implicit: l.implicit,
        default: l.default,
        update: l.update,
        quiet: l.quiet,
      };
      if ("" !== d || !1 !== l.declare) g[a] = p;
    }
  }
  function Lg(a, b) {
    var c = Hg();
    c.active = !0;
    c.usedImplicit = !0;
    var d = c.entries,
      e = (d[a] = d[a] || {});
    !1 !== e.implicit && (e.implicit = "granted" === b);
  }
  function Ig(a, b, c, d, e, f) {
    var g = Hg();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    Ya("TAGGING", 19);
    if (void 0 == b) Ya("TAGGING", 18);
    else {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (Pg(p, n, d, e)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          r = {
            region: p,
            declare_region: m.declare_region,
            implicit: m.implicit,
            default: "granted" === b,
            declare: m.declare,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.default) l[a] = r;
        q &&
          z.setTimeout(function () {
            if (l[a] === r && r.quiet) {
              r.quiet = !1;
              var t = [a];
              if (Ue(4))
                for (var u in Eg)
                  Eg.hasOwnProperty(u) && Eg[u] === a && t.push(u);
              for (var v = 0; v < t.length; v++) Qg(t[v]);
              Ng();
              Ya("TAGGING", 2);
            }
          }, f);
      }
    }
  }
  function Jg(a, b) {
    var c = Hg();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Rg(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Rg(c, a),
        l = [a];
      if (Ue(4))
        for (var m in Eg) Eg.hasOwnProperty(m) && Eg[m] === a && l.push(m);
      if (f.quiet) {
        f.quiet = !1;
        for (var n = 0; n < l.length; n++) Qg(l[n]);
      } else if (g !== d) for (var p = 0; p < l.length; p++) Qg(l[p]);
    }
  }
  function Og(a, b, c, d, e) {
    var f = Hg(),
      g;
    a: {
      var l = f.cps,
        m,
        n = l[a] || {},
        p = n.region,
        q = c && h(c) ? c.toUpperCase() : void 0;
      m = d.toUpperCase();
      if (Pg(q, p, m, e.toUpperCase())) {
        var r = { enabled: "granted" === b, region: q };
        if ("" !== m || !1 !== n.enabled) {
          l[a] = r;
          g = !0;
          break a;
        }
      }
      g = !1;
    }
    g && (f.usedSetCps = !0);
  }
  function Mg(a, b) {
    Dg.push({ consentTypes: a, nk: b });
  }
  function Qg(a) {
    for (var b = 0; b < Dg.length; ++b) {
      var c = Dg[b];
      ta(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.oi = !0);
    }
  }
  function Ng(a, b) {
    for (var c = 0; c < Dg.length; ++c) {
      var d = Dg[c];
      if (d.oi) {
        d.oi = !1;
        try {
          d.nk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Rg(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (Ue(4) && Eg.hasOwnProperty(b)) {
      var f = c[Eg[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    return void 0 !== e
      ? e
        ? 1
        : 2
      : Ue(4) && ((e = d.implicit), void 0 !== e)
      ? e
        ? 3
        : 4
      : Ue(3) && Gg.hasOwnProperty(b)
      ? Gg[b]
        ? 3
        : 4
      : 0;
  }
  var Sg = function (a) {
      var b = Hg();
      b.accessedAny = !0;
      switch (Rg(b, a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Tg = function (a) {
      var b = Hg();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Ug = function () {
      if (!Ag().h()) return !1;
      var a = Hg();
      a.accessedAny = !0;
      return a.active;
    },
    Vg = function () {
      var a = Hg();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Wg = function (a, b) {
      Hg().addListener(a, b);
    },
    Xg = function (a, b) {
      Hg().notifyListeners(a, b);
    },
    Yg = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Tg(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Wg(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Zg = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          Sg(l) && !e[l] && (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Wg(d, function (f) {
          var g = c();
          0 < g.length && ((f.consentTypes = g), a(f));
        });
    };
  function $g() {}
  function ah() {}
  var bh = [N.g.C, N.g.K],
    lh = [N.g.C, N.g.K, N.g.ef, N.g.Cg],
    mh = {},
    nh = ((mh[N.g.C] = 1), (mh[N.g.K] = 2), mh),
    oh = {},
    ph =
      ((oh[N.g.Oi] = "a"),
      (oh[N.g.Qi] = "s"),
      (oh[N.g.Ri] = "y"),
      (oh[N.g.Pi] = "p"),
      oh),
    qh = function (a) {
      for (
        var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = { Fc: 0 };
        d.Fc < c.length;
        d = { Fc: d.Fc }, ++d.Fc
      )
        k(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Wb) {
                var l = c[e.Fc],
                  m = We["0"] || "",
                  n = We["1"] || "";
                Cg = !0;
                Bg && Ya("TAGGING", 20);
                Hg().declare(f, g, l, m, n);
              }
            };
          })(d)
        );
    },
    rh = function (a) {
      var b = a[N.g.Wb];
      b && K(40);
      var c = a[N.g.Dg];
      c && K(41);
      for (
        var d = ta(b) ? b : [b], e = { Gc: 0 };
        e.Gc < d.length;
        e = { Gc: e.Gc }, ++e.Gc
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== N.g.Wb && g !== N.g.Dg) {
                var m = d[f.Gc],
                  n = Number(c),
                  p = We["0"] || "",
                  q = We["1"] || "";
                Bg = !0;
                Cg && Ya("TAGGING", 20);
                Hg().default(g, l, m, p, q, n);
              }
            };
          })(e)
        );
    },
    sh = function (a, b) {
      k(a, function (c, d) {
        Bg = !0;
        Cg && Ya("TAGGING", 20);
        Hg().update(c, d);
      });
      Xg(b.eventId, b.priorityId);
    },
    th = function (a) {
      for (
        var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = { Hc: 0 };
        d.Hc < c.length;
        d = { Hc: d.Hc }, ++d.Hc
      )
        k(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Wb) {
                var l = c[e.Hc],
                  m = We["0"] || "",
                  n = We["1"] || "";
                Hg().setCps(f, g, l, m, n);
              }
            };
          })(d)
        );
    },
    uh = function () {
      var a = {},
        b;
      for (b in nh)
        if (nh.hasOwnProperty(b)) {
          var c = nh[b],
            d,
            e = Hg();
          e.accessedAny = !0;
          d = Rg(e, b);
          a[c] = d;
        }
      var f = P(111) && bh.every(Sg),
        g = P(104);
      return f || g ? ec(a, 1) : ec(a, 0);
    },
    vh = {},
    wh =
      ((vh[N.g.C] = 0),
      (vh[N.g.K] = 1),
      (vh[N.g.ef] = 2),
      (vh[N.g.Cg] = 3),
      vh);
  function xh(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var yh = function () {
      if (P(106)) {
        for (var a = "1", b = 0; b < lh.length; b++) {
          var c = a,
            d,
            e = lh[b],
            f = Eg[e];
          d = void 0 === f ? 0 : wh.hasOwnProperty(f) ? 12 | wh[f] : 8;
          var g = Hg();
          g.accessedAny = !0;
          var l = g.entries[e] || {};
          d = (d << 2) | xh(l.implicit);
          a =
            c +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                d
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (xh(l.declare) << 4) | (xh(l.default) << 2) | xh(l.update)
              ]);
        }
        return a;
      }
      for (var m = "G1", n = 0; n < bh.length; n++) {
        var p;
        a: {
          var q = bh[n],
            r = Hg();
          r.accessedDefault = !0;
          switch ((r.entries[q] || {}).default) {
            case !0:
              p = 3;
              break a;
            case !1:
              p = 2;
              break a;
            default:
              p = 1;
          }
        }
        switch (p) {
          case 3:
            m += "1";
            break;
          case 2:
            m += "0";
            break;
          case 1:
            m += "-";
        }
      }
      return m;
    },
    zh = function () {
      var a = Hg(),
        b = a.cps,
        c = [],
        d;
      for (d in Fg)
        Fg.hasOwnProperty(d) &&
          Fg[d].enabled &&
          (a.usedSetCps
            ? b.hasOwnProperty(d) && b[d].enabled && c.push(d)
            : c.push(d));
      for (var e = "", f = 0; f < c.length; f++) {
        var g = ph[c[f]];
        g && (e += g);
      }
      return "" === e ? "-" : e;
    },
    Ah = function () {
      return Sg(N.g.ef) ? Ye() || Hg().usedSetCps : !1;
    },
    Bh = function (a, b) {
      Zg(a, b);
    },
    Ch = function (a, b) {
      Yg(a, b);
    };
  var Dh = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Eh = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Fh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Gh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Hh(a) {
    return "null" !== a.origin;
  }
  var Kh = function (a, b, c, d) {
      return Ih(d) ? Eh(a, String(b || Jh()), c) : [];
    },
    Nh = function (a, b, c, d, e) {
      if (Ih(e)) {
        var f = Lh(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Mh(
            f,
            function (g) {
              return g.Ne;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Mh(
            f,
            function (g) {
              return g.Jd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Oh(a, b, c, d) {
    var e = Jh(),
      f = window;
    Hh(f) && (f.document.cookie = a);
    var g = Jh();
    return e != g || (void 0 != c && 0 <= Kh(b, g, !1, d).indexOf(c));
  }
  var Sh = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete g[u], t;
        g[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete g[u], t;
        g[u] = !0;
        return t + "; " + u;
      }
      if (!Ih(c.ib)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Ph(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.hm);
      f = d(f, "samesite", c.km);
      c.lm && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Qh(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Rh(q, c.path) && Oh(r, a, b, c.ib)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Rh(m, c.path) ? 1 : Oh(f, a, b, c.ib) ? 0 : 1;
    },
    Th = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Sh(a, b, c);
    };
  function Mh(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Lh(a, b, c) {
    for (var d = [], e = Kh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Ne: 1 * m[0] || 1, Jd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Ph = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Uh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Vh = /(^|\.)doubleclick\.net$/i,
    Rh = function (a, b) {
      return (
        Vh.test(window.document.location.hostname) || ("/" === b && Uh.test(a))
      );
    },
    Jh = function () {
      return Hh(window) ? window.document.cookie : "";
    },
    Qh = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Vh.test(e) || Uh.test(e) || a.push("none");
      return a;
    },
    Ih = function (a) {
      return Ag().h() && a && Ug() ? (Tg(a) ? Sg(a) : !1) : !0;
    };
  var Wh = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Dh(a) & 2147483647)) : String(b);
    },
    Xh = function (a) {
      return [Wh(a), Math.round(Ga() / 1e3)].join(".");
    },
    $h = function (a, b, c, d, e) {
      var f = Yh(b);
      return Nh(a, f, Zh(c), d, e);
    },
    ai = function (a, b, c, d) {
      var e = "" + Yh(c),
        f = Zh(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Yh = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Zh = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var bi = function () {
    oe.dedupe_gclid || (oe.dedupe_gclid = "" + Xh());
    return oe.dedupe_gclid;
  };
  var ci = function () {
    var a = !1;
    return a;
  };
  var ei = function (a, b) {
      var c = di();
      c.pending || (c.pending = []);
      ua(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    fi = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    di = function () {
      var a = Eb("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new fi()), (a.tidr = b));
      return b;
    };
  var gi = {},
    hi = !1,
    ii = {
      ctid: "AW-799600379",
      Le: "",
      Ue: "AW-799600379",
      ni: "AW-799600379",
    };
  gi.Ce = Ba("");
  var ki = function () {
      var a = ii.Ue ? ii.Ue.split("|") : [ii.ctid];
      return hi ? a.map(ji) : a;
    },
    mi = function () {
      var a = li();
      return hi ? a.map(ji) : a;
    },
    oi = function () {
      return ni(ii.ctid);
    },
    pi = function (a) {
      return a ? ii.Le : ni(ii.Le || "_" + ii.ctid);
    },
    li = function () {
      return ii.ni ? ii.ni.split("|") : [];
    },
    qi = function (a) {
      var b = di();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    ni = function (a) {
      return P(138) ? (hi ? ji(a) : a) : a;
    },
    ji = function (a) {
      return P(138) ? "s_" + a : a;
    },
    ri = function () {
      if (P(138)) {
        var a = !1;
        if (a) {
          var b = di();
          if (b.siloed) {
            for (
              var c = [],
                d = ii.Ue ? ii.Ue.split("|") : [ii.ctid],
                e = li(),
                f = {},
                g = 0;
              g < b.siloed.length;
              f = { Kc: f.Kc }, g++
            )
              (f.Kc = b.siloed[g]),
                !hi &&
                ua(
                  f.Kc.isDestination ? e : d,
                  (function (l) {
                    return function (m) {
                      return m === l.Kc.ctid;
                    };
                  })(f)
                )
                  ? (hi = !0)
                  : c.push(f.Kc);
            b.siloed = c;
          }
        }
      }
    };
  function si() {
    var a = di();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = ki(), f = mi(), g = {}, l = 0;
        l < a.pending.length;
        g = { Ub: g.Ub }, l++
      )
        (g.Ub = a.pending[l]),
          ua(
            g.Ub.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ub.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Ub.onLoad), (d = !0))
            : c.push(g.Ub);
      a.pending = c;
      if (b)
        try {
          b(pi());
        } catch (m) {}
    }
  }
  var ti = function () {
      for (var a = di(), b = ki(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = ki()), (d.destinations = mi()))
          : (a.container[b[c]] = {
              state: 2,
              containers: ki(),
              destinations: mi(),
            });
      }
      for (var e = mi(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && K(93);
        g
          ? ((g.state = 2), (g.containers = ki()), (g.destinations = mi()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: ki(),
              destinations: mi(),
            });
      }
      P(132) && (a.canonical[pi()] = {});
      si();
    },
    ui = function (a) {
      return !!di().container[a];
    },
    vi = function () {
      return { ctid: oi(), isDestination: gi.Ce };
    };
  function wi(a) {
    if (P(138)) {
      var b = di();
      (b.siloed = b.siloed || []).push(a);
    }
  }
  var xi = function () {
      var a = di().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    yi = function () {
      var a = {};
      k(di().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  var zi = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Ai = function (a) {
      var b = ii.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = ii.ctid;
      c.sl = ne.ud;
      c.xl = ne.Mf;
      c.Sk = gi.Ce ? 2 : 1;
      ue ? ((c.Ye = zi[b]), c.Ye || (c.Ye = 0)) : (c.Ye = Ae ? 13 : 10);
      ye ? (c.kg = 1) : ci() ? (c.kg = 2) : (c.kg = 3);
      var d;
      var e = c.Ye,
        f = c.kg;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            ud(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var g = c.Zl,
        l =
          4 +
          d +
          (g
            ? "" +
              ud(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                g
              ]
            : ""),
        m,
        n = c.xl;
      m = n && td.test(n) ? "" + ud(3, 2) + n : "";
      var p,
        q = c.sl;
      p = q
        ? "" +
          ud(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            ud(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.Sk || 0) +
            w;
        }
      } else r = "";
      return l + m + p + r;
    };
  function Bi(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Ci = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Di() {
    return hb ? !!ob && !!ob.platform : !1;
  }
  function Ei() {
    return rb("iPhone") && !rb("iPod") && !rb("iPad");
  }
  function Fi() {
    Ei() || rb("iPad") || rb("iPod");
  }
  tb();
  sb() || rb("Trident") || rb("MSIE");
  rb("Edge");
  !rb("Gecko") ||
    (-1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge")) ||
    rb("Trident") ||
    rb("MSIE") ||
    rb("Edge");
  -1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge") && rb("Mobile");
  Di() || rb("Macintosh");
  Di() || rb("Windows");
  (Di() ? "Linux" === ob.platform : rb("Linux")) || Di() || rb("CrOS");
  var Gi = oa.navigator || null;
  Gi && (Gi.appVersion || "").indexOf("X11");
  Di() || rb("Android");
  Ei();
  rb("iPad");
  rb("iPod");
  Fi();
  nb().toLowerCase().indexOf("kaios");
  var Hi = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Ii = /#|$/,
    Ji = function (a, b) {
      var c = a.search(Ii),
        d = Hi(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Ki = /[?&]($|#)/,
    Li = function (a, b, c) {
      for (
        var d, e = a.search(Ii), f = 0, g, l = [];
        0 <= (g = Hi(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Ki, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Mi = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              yg(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ni = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Oi(a) {
    if (!a || !C.head) return null;
    var b = Pi("META");
    C.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Qi = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Mi(z.top)
        ? 1
        : 2;
    },
    Pi = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Ri(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Pi("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            l = bb(g, e);
          0 <= l && Array.prototype.splice.call(g, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Ci(e, "load", f);
      Ci(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ti = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ni(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Si(c, b);
    },
    Si = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Ri(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ui = function () {};
  var Vi = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Wi = function (a, b) {
      b = void 0 === b ? {} : b;
      this.m = a;
      this.h = null;
      this.I = {};
      this.Bb = 0;
      var c;
      this.W = null != (c = b.El) ? c : 500;
      var d;
      this.F = null != (d = b.am) ? d : !1;
      this.B = null;
    };
  na(Wi, Ui);
  Wi.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = Gh(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.W &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.W));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Vi(c)),
          (c.internalBlockOnErrors = b.F),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Xi(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Wi.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xi(this, "removeEventListener", null, a.listenerId);
  };
  var Zi = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Yi(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Yi(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Yi(a.purpose.legitimateInterests, b) &&
                Yi(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Yi = function (a, b) {
      return !(!a || !a[b]);
    },
    Xi = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if ($i(a)) {
        aj(a);
        var f = ++a.Bb;
        a.I[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    $i = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    aj = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.I[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Ci(a.m, "message", a.B));
    },
    bj = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Vi(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Ti({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var cj = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    dj = Bi("", 500);
  function ej() {
    var a = oe.tcf || {};
    return (oe.tcf = a);
  }
  var kj = function () {
    var a = ej(),
      b = new Wi(z, { El: -1 });
    fj(b) && gj() && K(124);
    if (!gj() && !a.active && fj(b)) {
      a.active = !0;
      a.Ve = {};
      hj();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) ij(a), jj(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in cj) cj.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var g = {},
                l;
              for (l in cj)
                if (cj.hasOwnProperty(l))
                  if ("1" === l) {
                    var m,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    m = bj(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : Zi(n, "1", 0)
                      : !1;
                    g["1"] = m;
                  } else g[l] = Zi(c, l, cj[l]);
              d = g;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.Ve = d), jj(a));
          }
        });
      } catch (c) {
        ij(a), jj(a);
      }
    }
  };
  function ij(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function hj() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = dj), a);
    rh(b);
  }
  function fj(a) {
    return "function" === typeof z.__tcfapi ||
      "function" === typeof a.m.__tcfapi ||
      null != $i(a)
      ? !0
      : !1;
  }
  var gj = function () {
    return !0 !== z.gtag_enable_tcf_support;
  };
  function jj(a) {
    var b = {},
      c = ((b.ad_storage = a.Ve["1"] ? "granted" : "denied"), b);
    sh(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: lj() }
    );
  }
  var lj = function () {
      var a = ej();
      return a.active ? a.tcString || "" : "";
    },
    mj = function () {
      var a = ej();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    nj = function (a) {
      if (!cj.hasOwnProperty(String(a))) return !0;
      var b = ej();
      return b.active && b.Ve ? !!b.Ve[String(a)] : !0;
    };
  var oj = function (a) {
      var b = String(a[fc.yb] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    pj =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var qj = { sampleRate: "0.005000", Hi: "", Gi: Number("5"), om: Number("") },
    rj = [];
  function sj(a) {
    rj.push(a);
  }
  var tj = !1,
    uj;
  if (!(uj = pj)) {
    var vj = Math.random(),
      wj = qj.sampleRate;
    uj = vj < Number(wj);
  }
  var xj = uj,
    yj = "https://www.googletagmanager.com/a?id=" + ii.ctid,
    zj = void 0,
    Aj = {},
    Bj = void 0,
    Cj = new (function () {
      var a = 5;
      0 < qj.Gi && (a = qj.Gi);
      this.h = 0;
      this.B = [];
      this.m = a;
    })(),
    Dj = 1e3;
  function Ej(a) {
    var b = zj;
    if (void 0 === b) return "";
    for (var c = [yj], d = 0; d < rj.length; d++) {
      var e = rj[d]({
        eventId: b,
        Ab: !!a,
        zi: function () {
          tj = !0;
        },
      });
      "&" === e[0] && c.push(e);
    }
    c.push("&z=0");
    return c.join("");
  }
  function Fj() {
    Bj && (z.clearTimeout(Bj), (Bj = void 0));
    if (void 0 !== zj && Gj) {
      var a;
      (a = Aj[zj]) || (a = Cj.h < Cj.m ? !1 : 1e3 > Ga() - Cj.B[Cj.h % Cj.m]);
      if (a || 0 >= Dj--) K(1), (Aj[zj] = !0);
      else {
        var b = Cj.h++ % Cj.m;
        Cj.B[b] = Ga();
        var c = Ej(!0);
        Nb(c);
        if (tj) {
          var d = c.replace("/a?", "/td?");
          Nb(d);
        }
        Gj = tj = !1;
      }
    }
  }
  var Gj = !1;
  function Hj(a) {
    Aj[a] ||
      (a !== zj && (Fj(), (zj = a)),
      (Gj = !0),
      Bj || (Bj = z.setTimeout(Fj, 500)),
      2022 <= Ej().length && Fj());
  }
  var Ij = va();
  function Jj() {
    Ij = va();
  }
  function Kj() {
    return ["&v=3&t=t", "&pid=" + Ij].join("");
  }
  var Lj = void 0;
  function Mj(a) {
    var b = "";
    return b;
  }
  ub();
  Ei() || rb("iPod");
  rb("iPad");
  !rb("Android") || vb() || ub() || tb() || rb("Silk");
  vb();
  !rb("Safari") ||
    vb() ||
    (sb() ? 0 : rb("Coast")) ||
    tb() ||
    (sb() ? 0 : rb("Edge")) ||
    (sb() ? qb("Microsoft Edge") : rb("Edg/")) ||
    (sb() ? qb("Opera") : rb("OPR")) ||
    ub() ||
    rb("Silk") ||
    rb("Android") ||
    Fi();
  var Nj = {},
    Oj = null,
    Pj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Oj) {
        Oj = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          Nj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Oj[q] && (Oj[q] = p);
          }
        }
      }
      for (
        var r = Nj[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (A >> 6)],
          I = r[A & 63];
        t[w++] = "" + B + D + H + I;
      }
      var F = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (L = r[(F & 15) << 2] || u);
        case 1:
          var M = b[v];
          t[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + L + u;
      }
      return t.join("");
    };
  var Qj =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Rj() {
    var a;
    return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {});
  }
  function Sj() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Tj() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function Uj() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = z.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function Vj() {
    if (!Uj()) return null;
    var a = Rj();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData
      .getHighEntropyValues(Qj)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  var Wj,
    Xj = function () {
      if (Uj() && ((Wj = Ga()), !Tj())) {
        var a = Vj();
        a &&
          (a.then(function () {
            K(95);
          }),
          a.catch(function () {
            K(96);
          }));
      }
    },
    Zj = function (a) {
      var b = Yj.Il,
        c = function (g, l) {
          try {
            a(g, l);
          } catch (m) {}
        },
        d = Sj();
      if (d) c(d);
      else {
        var e = Tj();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = z.setTimeout(function () {
            c.Gd || ((c.Gd = !0), K(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Gd || ((c.Gd = !0), K(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Gd || ((c.Gd = !0), K(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    ak = function (a, b) {
      a &&
        ((b.m[N.g.ed] = a.architecture),
        (b.m[N.g.fd] = a.bitness),
        a.fullVersionList &&
          (b.m[N.g.gd] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.m[N.g.hd] = a.mobile ? "1" : "0"),
        (b.m[N.g.jd] = a.model),
        (b.m[N.g.kd] = a.platform),
        (b.m[N.g.ld] = a.platformVersion),
        (b.m[N.g.md] = a.wow64 ? "1" : "0"));
    };
  function bk(a, b, c, d) {
    var e,
      f = Number(null != a.fb ? a.fb : void 0);
    0 !== f && (e = new Date((b || Ga()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      ib: d,
    };
  }
  var ck;
  var gk = function () {
      var a = dk,
        b = ek,
        c = fk(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Ob(C, "mousedown", d);
        Ob(C, "keyup", d);
        Ob(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    hk = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      fk().decorators.push(f);
    },
    ik = function (a, b, c) {
      for (var d = fk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== C.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ja(e, g.callback());
        }
      }
      return e;
    };
  function fk() {
    var a = Eb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var jk = /(.*?)\*(.*?)\*(.*)/,
    kk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Ck = /^(?:www\.|m\.|amp\.)+/,
    Dk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Ek(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Gk = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Va(String(d))));
      }
    var e = b.join("*");
    return ["1", Fk(e), e].join("*");
  };
  function Fk(a, b) {
    var c = [
        Cb.userAgent,
        new Date().getTimezoneOffset(),
        Cb.userLanguage || Cb.language,
        Math.floor(Ga() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = ck)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    ck = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ ck[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Hk() {
    return function (a) {
      var b = zf(z.location.href),
        c = b.search.replace("?", ""),
        d = uf(c, "_gl", !0) || "";
      a.query = Ik(d) || {};
      var e = xf(b, "fragment").match(Ek("_gl"));
      a.fragment = Ik((e && e[3]) || "") || {};
    };
  }
  function Jk(a, b) {
    var c = Ek(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Kk = function (a, b) {
      b || (b = "_gl");
      var c = Dk.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Jk(b, (c[2] || "").slice(1)),
        f = Jk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Lk = function (a) {
      var b = Hk(),
        c = fk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ja(d, e.query), a && Ja(d, e.fragment));
      return d;
    },
    Ik = function (a) {
      try {
        var b = Mk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Wa(d[e + 1]);
            c[f] = g;
          }
          Ya("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Ya("TAGGING", 8);
      }
    };
  function Mk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = jk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Fk(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Ya("TAGGING", 7);
      }
    }
  }
  function Nk(a, b, c, d) {
    function e(p) {
      p = Jk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Dk.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function Ok(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = ik(b, 1, c),
      e = ik(b, 2, c),
      f = ik(b, 3, c);
    if (Ka(d)) {
      var g = Gk(d);
      c ? Pk("_gl", g, a) : Qk("_gl", g, a, !1);
    }
    if (!c && Ka(e)) {
      var l = Gk(e);
      Qk("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Qk(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Pk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Nk(n, p, q);
        }
  }
  function Qk(a, b, c, d) {
    if (c.href) {
      var e = Nk(a, b, c.href, void 0 === d ? !1 : d);
      gb.test(e) && (c.href = e);
    }
  }
  function Pk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = C.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Nk(a, b, c.action);
        gb.test(n) && (c.action = n);
      }
    }
  }
  function dk(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Ok(e, e.hostname);
      }
    } catch (g) {}
  }
  function ek(a) {
    try {
      if (a.action) {
        var b = xf(zf(a.action), "host");
        Ok(a, b);
      }
    } catch (c) {}
  }
  var Rk = function (a, b, c, d) {
      gk();
      hk(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Sk = function (a, b) {
      gk();
      hk(a, [wf(z.location, "host", !0)], b, !0, !0);
    },
    Tk = function () {
      var a = C.location.hostname,
        b = kk.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Ck, ""),
        m = e.replace(Ck, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    Uk = function (a, b) {
      return !1 === a ? !1 : a || b || Tk();
    };
  var Vk = ["1"],
    Wk = {},
    Xk = {},
    Zk = function (a) {
      return Wk[Yk(a)];
    },
    cl = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Yk(a.prefix);
      if (!Wk[c])
        if ($k(c, a.path, a.domain)) {
          if (Ue(1)) {
            var d = Xk[Yk(a.prefix)];
            al(a, d ? d.id : void 0, d ? d.hg : void 0);
          }
        } else {
          if (Ue(2)) {
            var e = Bf("auiddc");
            if (e) {
              Ya("TAGGING", 17);
              Wk[c] = e;
              return;
            }
          }
          if (b) {
            var f = Yk(a.prefix),
              g = Xh();
            if (0 === bl(f, g, a)) {
              var l = Eb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = g);
            }
            $k(c, a.path, a.domain);
          }
        }
    };
  function al(a, b, c) {
    var d = Yk(a.prefix),
      e = Wk[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ga() / 1e3)));
          bl(d, l, a, 1e3 * g);
        }
      }
    }
  }
  function bl(a, b, c, d) {
    var e = ai(b, "1", c.domain, c.path),
      f = bk(c, d);
    f.ib = "ad_storage";
    return Th(a, e, f);
  }
  function $k(a, b, c) {
    var d = $h(a, b, c, Vk, "ad_storage");
    if (!d) return !1;
    dl(a, d);
    return !0;
  }
  function dl(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Wk[a] = c.slice(0, 2).join(".")),
        (Xk[a] = { id: c.slice(2, 4).join("."), hg: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Xk[a] = { id: c.slice(0, 2).join("."), hg: Number(c[2]) || 0 })
      : (Wk[a] = b);
  }
  function Yk(a) {
    return (a || "_gcl") + "_au";
  }
  function el(a) {
    Ug()
      ? Yg(
          function () {
            Sg("ad_storage") ? a() : Zg(a, "ad_storage");
          },
          ["ad_storage"]
        )
      : a();
  }
  function fl(a) {
    var b = Lk(!0),
      c = Yk(a.prefix);
    el(function () {
      var d = b[c];
      if (d) {
        dl(c, d);
        var e = 1e3 * Number(Wk[c].split(".")[1]);
        if (e) {
          Ya("TAGGING", 16);
          var f = bk(a, e);
          f.ib = "ad_storage";
          var g = ai(d, "1", a.domain, a.path);
          Th(c, g, f);
        }
      }
    });
  }
  function gl(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        l = $h(a, e.path, e.domain, Vk, "ad_storage");
      l && (g[a] = l);
      return g;
    };
    el(function () {
      Rk(f, b, c, d);
    });
  }
  var hl = function (a) {
    for (
      var b = [],
        c = C.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          xg: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function il(a, b) {
    var c = hl(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].xg] || (d[c[e].xg] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Z: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].xg].push(g);
      }
    }
    return d;
  }
  var jl = /^\w+$/,
    kl = /^[\w-]+$/,
    ll = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    ml = function () {
      return Ag().h() && Ug() ? Sg("ad_storage") : !0;
    },
    nl = function (a, b) {
      Tg("ad_storage")
        ? ml()
          ? a()
          : Zg(a, "ad_storage")
        : b
        ? Ya("TAGGING", 3)
        : Yg(
            function () {
              nl(a, !0);
            },
            ["ad_storage"]
          );
    },
    pl = function (a) {
      return ol(a).map(function (b) {
        return b.Z;
      });
    },
    ol = function (a) {
      var b = [];
      if (!Hh(z) || !C.cookie) return b;
      var c = Kh(a, C.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Rd: d.Rd }, e++) {
        var f = ql(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.Rd = g.Z;
          var m = g.timestamp,
            n = g.labels,
            p = ua(
              b,
              (function (q) {
                return function (r) {
                  return r.Z === q.Rd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = rl(p.labels, n || [])))
            : b.push({ version: l, Z: d.Rd, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return sl(b);
    };
  function rl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function tl(a) {
    return a && "string" == typeof a && a.match(jl) ? a : "_gcl";
  }
  var vl = function () {
      var a = zf(z.location.href),
        b = xf(a, "query", !1, void 0, "gclid"),
        c = xf(a, "query", !1, void 0, "gclsrc"),
        d = xf(a, "query", !1, void 0, "wbraid"),
        e = xf(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || uf(f, "gclid");
        c = c || uf(f, "gclsrc");
        d = d || uf(f, "wbraid");
      }
      return ul(b, c, e, d);
    },
    ul = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && kl.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(kl))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    xl = function (a) {
      var b = vl();
      nl(function () {
        wl(b, !1, a);
      });
    };
  function wl(a, b, c, d, e) {
    function f(w, x) {
      var y = yl(w, g);
      y && (Th(y, x, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = tl(c.prefix);
    d = d || Ga();
    var l = bk(c, d, !0);
    l.ib = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = yl("gb", g),
        t = !1;
      if (!b)
        for (var u = ol(r), v = 0; v < u.length; v++)
          u[v].Z === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Al = function (a, b) {
      var c = Lk(!0);
      nl(function () {
        for (var d = tl(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== ll[f]) {
            var g = yl(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(zl(l), Ga()),
                n;
              b: {
                var p = m;
                if (Hh(z))
                  for (
                    var q = Kh(g, C.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (zl(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = bk(b, m, !0);
                t.ib = "ad_storage";
                Th(g, l, t);
              }
            }
          }
        }
        wl(ul(c.gclid, c.gclsrc), !1, b);
      });
    },
    yl = function (a, b) {
      var c = ll[a];
      if (void 0 !== c) return b + c;
    },
    zl = function (a) {
      return 0 !== Bl(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function ql(a) {
    var b = Bl(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Z: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Bl(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !kl.test(a[2])
      ? []
      : a;
  }
  var Cl = function (a, b, c, d, e) {
      if (ta(b) && Hh(z)) {
        var f = tl(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = yl(a[m], f);
              if (n) {
                var p = Kh(n, C.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        nl(function () {
          Rk(g, b, c, d);
        });
      }
    },
    sl = function (a) {
      return a.filter(function (b) {
        return kl.test(b.Z);
      });
    },
    Dl = function (a, b) {
      if (Hh(z)) {
        for (var c = tl(b.prefix), d = {}, e = 0; e < a.length; e++)
          ll[a[e]] && (d[a[e]] = ll[a[e]]);
        nl(function () {
          k(d, function (f, g) {
            var l = Kh(c + g, C.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return zl(u) - zl(t);
            });
            if (l.length) {
              var m = l[0],
                n = zl(m),
                p = 0 !== Bl(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Bl(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              wl(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function El(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Fl = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Ug()) {
        var c = vl();
        if (El(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Sk(function () {
            return d;
          }, 3);
          Sk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Gl = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!ml()) return e;
      var f = ol(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.Z]
            .concat(l.labels || [], [b])
            .join("."),
          p = bk(c, m, !0);
        p.ib = "ad_storage";
        Th(a, n, p);
      }
      return e;
    };
  function Hl(a, b) {
    var c = tl(b),
      d = yl(a, c);
    if (!d) return 0;
    for (var e = ol(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Il(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Jl = function (a) {
    var b = Math.max(Hl("aw", a), Il(ml() ? il() : {}));
    return Math.max(Hl("gb", a), Il(ml() ? il("_gac_gb", !0) : {})) > b;
  };
  var Kl = function (a, b) {
      var c = a && !Sg(N.g.C);
      return b && c ? "0" : b;
    },
    Nl = function (a) {
      function b(u) {
        var v;
        oe.reported_gclid || (oe.reported_gclid = {});
        v = oe.reported_gclid;
        var w,
          x = g;
        w =
          !g || (Ug() && !Sg(N.g.C))
            ? m + (u ? "gcu" : "gcs")
            : m + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
        if (!v[w]) {
          v[w] = !0;
          var y = [],
            A = {},
            B = function (U, R) {
              R && (y.push(U + "=" + encodeURIComponent(R)), (A[U] = !0));
            },
            D = "https://www.google.com";
          if (Ug()) {
            var H = Sg(N.g.C);
            B("gcs", uh());
            u && B("gcu", "1");
            (P(106) || Vg()) && B("gcd", yh());
            B("rnd", bi());
            if ((!m || (n && "aw.ds" !== n)) && Sg(N.g.C)) {
              var I = pl("_gcl_aw");
              B("gclaw", I.join("."));
            }
            B("url", String(z.location).split(/[?#]/)[0]);
            B("dclid", Kl(d, p));
            H || (D = "https://pagead2.googlesyndication.com");
          }
          P(109) && (Ah() && B("dma_cps", zh()), Ye() && B("dma", "1"));
          B("gdpr_consent", lj());
          B("gdpr", mj());
          "1" === Lk(!1)._up && B("gtm_up", "1");
          B("gclid", Kl(d, m));
          B("gclsrc", n);
          if (
            !(A.gclid || A.dclid || A.gclaw) &&
            (B("gbraid", Kl(d, q)), !A.gbraid && Ug() && Sg(N.g.C))
          ) {
            var F = pl("_gcl_gb");
            0 < F.length && B("gclgb", F.join("."));
          }
          B("gtm", Ai(!e));
          g && Sg(N.g.C) && (cl(f || {}), x && B("auid", Zk(f.prefix) || ""));
          Ml || (a.di && B("did", a.di));
          a.Re && B("gdid", a.Re);
          a.Oe && B("edid", a.Oe);
          var L = P(64) ? Sj() : null;
          if (L) {
            var M = function (U, R) {
              y.push(U + "=" + encodeURIComponent(R));
              A[U] = !0;
            };
            M("uaa", L.architecture);
            M("uab", L.bitness);
            L.fullVersionList &&
              M(
                "uafvl",
                L.fullVersionList
                  .map(function (U) {
                    return (
                      encodeURIComponent(U.brand || "") +
                      ";" +
                      encodeURIComponent(U.version || "")
                    );
                  })
                  .join("|")
              );
            M("uam", L.model);
            M("uap", L.platform);
            M("uapv", L.platformVersion);
            M("uaw", L.wow64 ? "1" : "0");
          }
          var X = D + "/pagead/landing?" + y.join("&");
          Ub(X);
        }
      }
      var c = !!a.Me,
        d = !!a.Ld,
        e = a.wg,
        f = void 0 === a.Lb ? {} : a.Lb,
        g = void 0 === a.Fd ? !0 : a.Fd,
        l = vl(),
        m = l.gclid || "",
        n = l.gclsrc,
        p = l.dclid || "",
        q = l.gbraid || "",
        r = !c && ((!m || (n && "aw.ds" !== n) ? !1 : !0) || q),
        t = Ug();
      if (r || t)
        t
          ? Ch(
              function () {
                b();
                Sg(N.g.C) ||
                  Bh(function (u) {
                    return b(!0, u.consentEventId, u.consentPriorityId);
                  }, N.g.C);
              },
              [N.g.C]
            )
          : b();
    },
    Ll = function (a) {
      var b = String(z.location).split(/[?#]/)[0],
        c = ne.Mi || z._CONSENT_MODE_SALT;
      return a ? (c ? String(Dh(b + a + c)) : "0") : "";
    },
    Ml = !1;
  var Ol = /[A-Z]+/,
    Pl = /\s/,
    Ql = function (a, b) {
      if (h(a)) {
        a = Ea(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Ol.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b && P(120)) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var l = g(f[1]);
                2 === l.length && ((f[1] = l[0]), f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Pl.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, V: d + "-" + f[0], H: f };
          }
        }
      }
    },
    Sl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Ql(a[d], b);
        e && (c[e.id] = e);
      }
      Rl(c);
      var f = [];
      k(c, function (g, l) {
        f.push(l);
      });
      return f;
    };
  function Rl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.H[1] && b.push(d.V);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Tl = function (a, b, c, d) {
    var e = Lb(),
      f;
    if (1 === e)
      a: {
        var g = Ce;
        g = g.toLowerCase();
        for (
          var l = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = C.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var Vl = function (a, b, c) {
      if (z[a.functionName]) return b.ng && E(b.ng), z[a.functionName];
      var d = Ul();
      z[a.functionName] = d;
      if (a.Je)
        for (var e = 0; e < a.Je.length; e++) z[a.Je[e]] = z[a.Je[e]] || Ul();
      a.Se && void 0 === z[a.Se] && (z[a.Se] = c);
      Kb(Tl("https://", "http://", a.vg), b.ng, b.Xk);
      return d;
    },
    Ul = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Wl = {
      functionName: "_googWcmImpl",
      Se: "_googWcmAk",
      vg: "www.gstatic.com/wcm/loader.js",
    },
    Xl = {
      functionName: "_gaPhoneImpl",
      Se: "ga_wpid",
      vg: "www.gstatic.com/gaphone/loader.js",
    },
    Yl = { Ji: "", Sj: "5" },
    Zl = {
      functionName: "_googCallTrackingImpl",
      Je: [Xl.functionName, Wl.functionName],
      vg:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Yl.Ji || Yl.Sj) +
        ".js",
    },
    $l = {},
    am = function (a, b, c, d) {
      K(22);
      if (c) {
        d = d || {};
        var e = Vl(Wl, d, a),
          f = { ak: a, cl: b };
        void 0 === d.hb && (f.autoreplace = c);
        e(2, d.hb, f, c, 0, Fa(), d.options);
      }
    },
    bm = function (a, b, c, d) {
      K(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Fa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          $l[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.H.length
              ? ((e.adData = { ak: g.H[0], cl: g.H[1] }), ($l[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.V }), ($l[g.id] = !0)));
        }
        (e.gaData || e.adData) && Vl(Zl, d)(d.hb, e, d.options);
      }
    },
    cm = function () {
      var a = !1;
      return a;
    },
    dm = function (a, b) {
      if (a)
        if (ci()) {
        } else {
          if (h(a)) {
            var c = Ql(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = S(b, N.g.yj);
          if (f && ta(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = Ql(f[g]);
              l &&
                (d.push(l),
                (a.id === l.id || (a.id === a.V && a.V === l.V)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = S(b, N.g.th),
              n;
            if (m) {
              ta(m) ? (n = m) : (n = [m]);
              var p = S(b, N.g.rh),
                q = S(b, N.g.sh),
                r = S(b, N.g.uh),
                t = S(b, N.g.xj),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) bm(d, n[w], t, { hb: u, options: r });
                  else if ("AW" === a.prefix && a.H[1])
                    cm()
                      ? bm([a], n[w], t || "US", { hb: u, options: r })
                      : am(a.H[0], a.H[1], n[w], { hb: u, options: r });
                  else if ("UA" === a.prefix)
                    if (cm()) bm([a], n[w], t || "US", { hb: u });
                    else {
                      var x = a.V,
                        y = n[w],
                        A = { hb: u };
                      K(23);
                      if (y) {
                        A = A || {};
                        var B = Vl(Xl, A, x),
                          D = {};
                        void 0 !== A.hb ? (D.receiver = A.hb) : (D.replace = y);
                        D.ga_wpid = x;
                        D.destination = y;
                        B(2, Fa(), D);
                      }
                    }
            }
          }
        }
    };
  var em = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.h = c;
    this.m = {};
    this.metadata = J(c.eventMetadata || {});
    this.isAborted = !1;
  };
  em.prototype.copyToHitData = function (a, b) {
    var c = S(this.h, a);
    void 0 !== c ? (this.m[a] = c) : void 0 !== b && (this.m[a] = b);
  };
  var fm = function (a, b, c) {
    var d = df(a.target.V);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function gm(a) {
    return {
      getDestinationId: function () {
        return a.target.V;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        a.m[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return S(a.h, b);
      },
      gm: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.m);
      },
    };
  }
  var im = function (a) {
      var b = hm[a.target.V];
      if (!a.isAborted && b)
        for (var c = gm(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    hm = {};
  var lm = function (a) {
      a = a || {};
      var b;
      if (!Ug() || Sg(jm)) {
        (b = km(a)) || (b = Xh());
        var c = a,
          d = Yk(c.prefix);
        al(c, b);
        delete Wk[d];
        delete Xk[d];
        $k(d, c.path, c.domain);
        return km(a);
      }
    },
    km = function (a) {
      if (!Ug() || Sg(jm)) {
        a = a || {};
        cl(a, !1);
        var b = Xk[Yk(tl(a.prefix))];
        if (b && !(18e5 < Ga() - 1e3 * b.hg)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < Ga() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    jm = N.g.C;
  var mm = function (a, b) {
      var c = (oe.joined_auid = oe.joined_auid || {}),
        d = (a || "_gcl") + "." + b;
      if (c[d]) return !0;
      c[d] = !0;
      return !1;
    },
    nm = function () {
      var a = zf(z.location.href).search.replace("?", "");
      return "1" === uf(a, "gad", !0);
    },
    om = function (a) {
      var b = [];
      k(a, function (c, d) {
        d = sl(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Z);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    qm = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Bf("gcl" + a);
        if (d) return d.split(".");
      }
      var e = tl(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !Sg(pm) && c,
          g;
        g = vl()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var l = yl(a, e);
      return l ? pl(l) : [];
    },
    rm = function (a, b) {
      Tg(pm)
        ? Sg(pm)
          ? a()
          : Zg(a, pm)
        : b
        ? K(42)
        : Ch(
            function () {
              rm(a, !0);
            },
            [pm]
          );
    },
    pm = N.g.C,
    sm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    tm = /^www.googleadservices.com$/,
    um = function (a, b) {
      return qm("aw", a, b);
    },
    vm = function (a, b) {
      return qm("dc", a, b);
    },
    wm = function (a) {
      var b = Bf("gac");
      return b
        ? !Sg(pm) && a
          ? "0"
          : decodeURIComponent(b)
        : om(ml() ? il() : {});
    },
    xm = function (a) {
      var b = Bf("gacgb");
      return b
        ? !Sg(pm) && a
          ? "0"
          : decodeURIComponent(b)
        : om(ml() ? il("_gac_gb", !0) : {});
    },
    ym = function (a) {
      var b = vl(),
        c = [],
        d = b.gclid,
        e = b.dclid,
        f = b.gclsrc || "aw",
        g = P(93) && nm();
      !d ||
        ("aw.ds" !== f && "aw" !== f && "ds" !== f) ||
        c.push({ Z: d, Cd: f });
      e && c.push({ Z: e, Cd: "ds" });
      0 === c.length && b.gbraid && c.push({ Z: b.gbraid, Cd: "gb" });
      P(77) &&
        0 === c.length &&
        "aw.ds" === f &&
        c.push({ Z: "", Cd: "aw.ds" });
      rm(function () {
        cl(a);
        var l = Zk(a.prefix);
        if (l) {
          var m = ["auid=" + l];
          if (P(15)) {
            var n = C.referrer ? xf(zf(C.referrer), "host") : "";
            0 === c.length &&
              (P(88) ? sm.test(n) || tm.test(n) : sm.test(n)) &&
              c.push({ Z: "", Cd: "" });
            if (0 === c.length && !g) return;
            n && m.push("ref=" + encodeURIComponent(n));
            var p = 1 === Qi() ? z.top.location.href : z.location.href;
            p = p.replace(/[\?#].*$/, "");
            m.push("url=" + encodeURIComponent(p));
            m.push("tft=" + Ga());
            var q = Xb();
            void 0 !== q && m.push("tfd=" + Math.round(q));
            if (P(76)) {
              var r = Qi();
              m.push("frm=" + r);
            }
            g && m.push("gad=1");
          }
          if (0 < c.length)
            for (var t = 0; t < c.length; t++) {
              var u = c[t],
                v = u.Z,
                w = u.Cd;
              if (!mm(a.prefix, w + "." + v)) {
                var x =
                  "https://adservice.google.com/pagead/regclk?" + m.join("&");
                "" !== v
                  ? (x =
                      "gb" === w
                        ? x + "&wbraid=" + v
                        : x + "&gclid=" + v + "&gclsrc=" + w)
                  : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                Ub(x);
              }
            }
          else if (g && !mm(a.prefix, "gad")) {
            var y = "https://adservice.google.com/pagead/regclk?" + m.join("&");
            Ub(y);
          }
        }
      });
    },
    zm = function (a) {
      return Bf("gclaw") || Bf("gac") || 0 < (vl().aw || []).length
        ? !1
        : 0 < (vl().gb || []).length
        ? !0
        : Jl(a);
    };
  var Am = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.I = d;
      this.m = e;
      this.F = f;
      this.W = g;
      this.B = l;
      this.eventMetadata = m;
      this.J = n;
      this.O = p;
      this.isGtmEvent = q;
    },
    S = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.I[b]) return a.I[b];
      if (void 0 !== a.m[b]) return a.m[b];
      xj && Bm(a, a.F[b], a.W[b]) && (K(71), K(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Cm = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.I);
      b(a.m);
      b(a.F);
      if (xj)
        for (var d = Object.keys(a.W), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            K(71);
            K(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Dm = function (a, b, c) {
      function d(m) {
        G(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.F[b]), d(a.m[b]), d(a.I[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (xj) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.W[b]), d(a.m[b]), d(a.I[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Bm(a, e, l)) K(71), K(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    Em = function (a) {
      var b = [N.g.Qc, N.g.Mc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Rc, N.g.Sc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.I) || e(a.m)) return c;
      e(a.F);
      if (xj) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.W);
        Bm(a, c, f) && (K(71), K(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Bm = function (a, b, c) {
      if (!xj) return !1;
      try {
        if (b === c) return !1;
        var d = $b(b);
        if (d !== $b(c) || !((G(b) && G(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Bm(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Bm(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        K(72);
      }
      return !1;
    },
    Fm = function (a, b) {
      this.Jf = a;
      this.Hj = b;
      this.F = {};
      this.pd = {};
      this.h = {};
      this.I = {};
      this.m = {};
      this.od = {};
      this.B = {};
      this.Lc = function () {};
      this.Bb = function () {};
      this.W = !1;
    },
    Gm = function (a, b) {
      a.F = b;
      return a;
    },
    Hm = function (a, b) {
      a.pd = b;
      return a;
    },
    Im = function (a, b) {
      a.h = b;
      return a;
    },
    Jm = function (a, b) {
      a.I = b;
      return a;
    },
    Km = function (a, b) {
      a.m = b;
      return a;
    },
    Lm = function (a, b) {
      a.od = b;
      return a;
    },
    Mm = function (a, b) {
      a.B = b || {};
      return a;
    },
    Nm = function (a, b) {
      a.Lc = b;
      return a;
    },
    Om = function (a, b) {
      a.Bb = b;
      return a;
    },
    Pm = function (a, b) {
      a.W = b;
      return a;
    },
    Qm = function (a) {
      return new Am(
        a.Jf,
        a.Hj,
        a.F,
        a.pd,
        a.h,
        a.I,
        a.m,
        a.od,
        a.B,
        a.Lc,
        a.Bb,
        a.W
      );
    };
  var Sm = function (a, b) {
      var c = a.jg,
        d = a.zg;
      a.Sf &&
        (Uk(c[N.g.nc], !!c[N.g.N]) && (Al(Rm, b), P(73) && fl(b)),
        xl(b),
        Dl(Rm, b),
        ym(b));
      c[N.g.N] &&
        (Cl(Rm, c[N.g.N], c[N.g.Gb], !!c[N.g.vb], b.prefix),
        P(73) &&
          (gl(Yk(b.prefix), c[N.g.N], c[N.g.Gb], !!c[N.g.vb], b),
          gl("FPAU", c[N.g.N], c[N.g.Gb], !!c[N.g.vb], b)));
      d && Fl(Rm);
    },
    Tm = function (a, b, c, d) {
      var e = a.Ag,
        f = a.callback,
        g = a.lg;
      if ("function" === typeof f)
        if (e === N.g.ob && void 0 === g) {
          var l = d(b.prefix, c);
          0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l);
        } else e === N.g.fc ? (K(65), cl(b, !1), f(Zk(b.prefix))) : f(g);
    },
    Rm = ["aw", "dc", "gb"];
  function Um(a) {
    var b = S(a.h, N.g.ub),
      c = S(a.h, N.g.tb);
    P(107) && b && !c
      ? (a.eventName !== N.g.ia && a.eventName !== N.g.Zd && K(131),
        (a.isAborted = !0))
      : !b && c && (K(132), (a.isAborted = !0));
  }
  var Vm = function () {
    var a = (Cb && Cb.userAgent) || "";
    if (
      0 > a.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function Wm() {
    return "attribution-reporting";
  }
  function Xm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Ym = !1;
  function Zm() {
    if (Xm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup)) return !0;
    Ym ||
      (Oi(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Ym = !0));
    return Xm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup);
  }
  function $m(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ga() - d) {
        Ya("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          C.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Ya("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Mb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ga() },
      c
    );
  }
  function an() {
    return "https://td.doubleclick.net";
  }
  var bn = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    cn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    dn = /^\d+\.fls\.doubleclick\.net$/,
    en = /;gac=([^;?]+)/,
    fn = /;gacgb=([^;?]+)/,
    gn = /;gclaw=([^;?]+)/,
    hn = /;gclgb=([^;?]+)/;
  function jn(a, b) {
    if (dn.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(bn)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].Z);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var kn = function (a, b, c) {
    var d = ml() ? il("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Gl("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { rk: f ? e.join(";") : "", qk: jn(d, fn) };
  };
  function ln(a, b, c) {
    if (dn.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(cn)) return [{ Z: d[1] }];
    } else return ol((a || "_gcl") + b);
    return [];
  }
  var mn = function (a) {
      return ln(a, "_aw", gn)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    nn = function (a) {
      return ln(a, "_gb", hn)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    on = function (a, b) {
      var c = Gl(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var pn = function () {
    if (ra(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var qn = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    rn = function () {
      var a = C.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    sn = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    tn = function (a, b) {
      ta(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    un = function (a) {
      var b = a.target.H[0];
      if (b) {
        a.m[N.g.Tc] = b;
        var c = a.target.H[1];
        c && (a.m[N.g.Wa] = c);
      } else a.isAborted = !0;
    },
    vn = function (a) {
      if (
        tn(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m[N.g.Wa],
          c = !0 === S(a.h, N.g.nf);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && sn(a);
            vg() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || sn(a);
        }
        a.m[N.g.Ih] = a.metadata.is_gcp_conversion
          ? "www.google.com"
          : "www.googleadservices.com";
      }
    },
    wn = function (a) {
      tn(a, ["conversion", "remarketing"]);
    },
    xn = function (a) {
      if (tn(a, ["conversion", "remarketing"])) {
        var b = Qi();
        a.m[N.g.nh] = b;
        var c = S(a.h, N.g.da);
        c || (c = 1 === b ? z.top.location.href : z.location.href);
        a.m[N.g.da] = qn(c);
        a.copyToHitData(N.g.Aa, C.referrer);
        a.m[N.g.wb] = rn();
        a.copyToHitData(N.g.ra);
        var d = ef();
        a.m[N.g.xb] = d.width + "x" + d.height;
        if (P(86)) {
          for (var e, f = z, g = f; f && f != f.parent; )
            (f = f.parent), Mi(f) && (g = f);
          e = g;
          var l;
          var m = e.location.href;
          if (e === e.top) l = { url: m, Kk: !0 };
          else {
            var n = !1,
              p = e.document;
            p &&
              p.referrer &&
              ((m = p.referrer), e.parent === e.top && (n = !0));
            var q = e.location.ancestorOrigins;
            if (q) {
              var r = q[q.length - 1];
              r && -1 === m.indexOf(r) && ((n = !1), (m = r));
            }
            l = { url: m, Kk: n };
          }
          var t = l;
          t.url && c !== t.url && (a.m[N.g.Ef] = qn(t.url));
        }
      }
    },
    yn = function (a) {
      tn(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(N.g.ka),
        a.copyToHitData(N.g.X),
        a.copyToHitData(N.g.na),
        "remarketing" === a.metadata.hit_type && a.copyToHitData(N.g.wa));
    },
    zn = function (a) {
      if (P(13))
        if (!Uj()) K(87);
        else if (void 0 !== Wj) {
          K(85);
          var b = Sj();
          b ? ak(b, a) : K(86);
        }
    },
    Cn = function (a) {
      tn(a, ["conversion"]) &&
        (!0 === z._gtmpcm || Vm()
          ? (a.m[N.g.Eb] = "2")
          : P(7) &&
            (An ||
              Xm(Wm()) ||
              (Oi(
                "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
              ),
              (An = !0)),
            Bn ||
              ((Bn = !0),
              Oi(
                "A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            Xm(Wm()) && (a.m[N.g.Eb] = "1")));
    },
    Dn = function (a) {
      tn(a, ["conversion", "remarketing"]) &&
        P(9) &&
        Sg(N.g.C) &&
        !1 !== S(a.h, N.g.ya) &&
        !1 !== S(a.h, N.g.R) &&
        !1 !== S(a.h, N.g.Db) &&
        !1 !== S(a.h, N.g.La) &&
        Zm() &&
        ((a.m[N.g.Xg] = "1"), (a.metadata.send_fledge_experiment = !0));
    },
    En = function (a) {
      var b = function (d) {
        return S(a.h, d);
      };
      a.metadata.conversion_linker_enabled = !1 !== b(N.g.qa);
      var c = {
        prefix: b(N.g.Ea) || b(N.g.Fa),
        domain: b(N.g.Ia),
        fb: b(N.g.za),
        flags: b(N.g.Ja),
      };
      a.metadata.cookie_options = c;
      a.metadata.redact_ads_data = null != b(N.g.ja) && !1 !== b(N.g.ja);
      a.metadata.allow_ad_personalization = !1 !== b(N.g.R);
    },
    Fn = function (a) {
      if (fm(a, "ccd_add_1p_data", !1) && Sg(N.g.C)) {
        var b = qg(a.h);
        if (sg(b)) {
          var c = S(a.h, N.g.la);
          null === c
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && G(c) && (a.metadata.user_data_from_code = c),
              G(b.selectors) &&
                (a.metadata.user_data_from_manual = pg(b.selectors)));
        }
      }
    },
    Gn = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          tn(a, ["conversion", "user_data_web"]),
        c = !fm(a, "ccd_add_1p_data", !1) && tn(a, "user_data_lead");
      if ((b || c) && Sg(N.g.C)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.h,
          f = void 0,
          g = S(e, N.g.la);
        if (d) {
          var l = (S(e, N.g.Yc) || {})[a.m[N.g.Wa]];
          if (!0 === S(e, N.g.be) || l) {
            var m;
            var n;
            if (l)
              b: {
                switch (l.enhanced_conversions_mode) {
                  case "manual":
                    if (g && G(g)) {
                      n = g;
                      break b;
                    }
                    var p = l.enhanced_conversions_manual_var;
                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = pg(l[N.g.Vg]);
                    break b;
                }
                n = void 0;
              }
            else n = z.enhanced_conversion_data;
            var q = n,
              r = (l || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r)
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = "automatic" === r ? (ug(l) ? "a" : "m") : "c";
              m = { P: q, Fi: t };
            } else m = { P: q, Fi: void 0 };
            var u = m,
              v = u.Fi;
            f = u.P;
            a.m[N.g.Gf] = v;
          }
        } else {
          if (
            P(115) ||
            a.metadata.is_config_command ||
            (!a.h.isGtmEvent && !rg(a.h))
          )
            return;
          sg(qg(a.h)) &&
            null !== g &&
            (G(g) ? (f = g) : (f = tg(qg(a.h))), f && sn(a));
        }
        a.metadata.user_data = f;
      }
    },
    Hn = function (a) {
      tn(a, ["conversion", "remarketing"]) &&
        (a.h.isGtmEvent
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.m[N.g.Wg] = a.eventName)
          : (a.m[N.g.Wg] = a.eventName),
        k(a.h.h, function (b, c) {
          me[b.split(".")[0]] || (a.m[b] = c);
        }));
    },
    In = function (a) {
      if (
        a.eventName === N.g.ia &&
        ((a.metadata.is_config_command = !0),
        tn(a, "conversion") && (a.metadata.speculative = !0),
        !tn(a, "remarketing") ||
          (!1 !== S(a.h, N.g.Db) && !1 !== S(a.h, N.g.La)) ||
          (a.metadata.speculative = !0),
        tn(a, "landing_page"))
      ) {
        var b = S(a.h, N.g.Xa),
          c = S(a.h, N.g.sa) || {},
          d = S(a.h, N.g.cb),
          e = a.metadata.conversion_linker_enabled,
          f = a.metadata.cookie_options;
        Sm({ Sf: e, ai: b, jg: c, zg: d }, f);
        dm(a.target, a.h);
        Nl({
          Me: !1,
          Ld: a.metadata.redact_ads_data,
          wg: a.target.id,
          eventId: a.h.eventId,
          priorityId: a.h.priorityId,
          Lb: e ? f : void 0,
          Fd: e,
          di: a.m[N.g.zf],
          Re: a.m[N.g.sb],
          Oe: a.m[N.g.rb],
        });
        a.isAborted = !0;
      }
    },
    Jn = function (a) {
      if (!fm(a, "hasPreAutoPiiCcdRule", !1)) {
        var b = P(50);
        if (
          (!P(49) || b || a.h.isGtmEvent) &&
          tn(a, "conversion") &&
          Sg(N.g.C)
        ) {
          var c = (S(a.h, N.g.Yc) || {})[a.m[N.g.Wa]],
            d = a.m[N.g.Tc],
            e;
          if (!(e = ug(c)))
            if ($e() && Qf)
              if (Rf) e = !0;
              else {
                var f = df("AW-" + d);
                e = !!f && !!f.preAutoPii;
              }
            else e = !1;
          if (e) {
            var g = Ga(),
              l = mg({ zc: !0, Ac: !0, yi: !0 });
            if (0 !== l.elements.length) {
              for (var m = [], n = 0; n < l.elements.length; ++n) {
                var p = l.elements[n];
                m.push(p.querySelector + "*" + ng(p) + "*" + p.type);
              }
              a.m[N.g.zh] = m.join("~");
              var q = l.il;
              q && ((a.m[N.g.Ah] = q.querySelector), (a.m[N.g.yh] = ng(q)));
              a.m[N.g.xh] = String(Ga() - g);
              a.m[N.g.Bh] = l.status;
            }
          }
        }
      }
    },
    Kn = function (a) {
      if (a.eventName === N.g.Da && !a.h.isGtmEvent) {
        if (!a.metadata.consent_updated && tn(a, "conversion")) {
          var b = S(a.h, N.g.Ya);
          if ("function" !== typeof b) return;
          var c = String(S(a.h, N.g.Ka)),
            d = a.m[c],
            e = S(a.h, c);
          c === N.g.ob || c === N.g.fc
            ? Tm(
                { Ag: c, callback: b, lg: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                um
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    Ln = function (a) {
      if (tn(a, "conversion") && Sg(N.g.C) && (a.m[N.g.uc] || a.m[N.g.mc])) {
        var b = a.m[N.g.Wa],
          c = J(a.metadata.cookie_options),
          d = tl(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.m[N.g.uc]) {
          var e = on(b, c);
          e && (a.m[N.g.Dh] = e);
        }
        if (a.m[N.g.mc]) {
          var f = kn(b, c).rk;
          f && (a.m[N.g.ih] = f);
        }
      }
    },
    Mn = function (a) {
      var b = P(4),
        c = a.h,
        d,
        e,
        f;
      if (!b) {
        var g = Dm(c, N.g.U);
        d = Oa(G(g) ? g : {});
      }
      var l = Dm(c, N.g.U, 1),
        m = Dm(c, N.g.U, 2);
      e = Oa(G(l) ? l : {}, ".");
      f = Oa(G(m) ? m : {}, ".");
      b || (a.m[N.g.zf] = d);
      a.m[N.g.sb] = e;
      a.m[N.g.rb] = f;
    },
    Nn = function (a) {
      if (tn(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== N.g.xa) ||
          (a.copyToHitData(N.g.T),
          b &&
            (a.copyToHitData(N.g.fe),
            a.copyToHitData(N.g.de),
            a.copyToHitData(N.g.ee),
            a.copyToHitData(N.g.ce),
            (a.m[N.g.Qg] = a.eventName)));
      }
    },
    On = function (a) {
      if (tn(a, ["conversion", "remarketing"])) {
        var b = a.h,
          c = S(b, N.g.Ib);
        if (!0 === c || !1 === c) a.m[N.g.Ib] = c;
        var d = S(b, N.g.R);
        if (!0 === d || !1 === d) a.m[N.g.De] = !d;
        !1 === d && tn(a, "remarketing") && (a.isAborted = !0);
      }
    },
    Pn = function (a) {
      tn(a, "conversion") &&
        (a.copyToHitData(N.g.Zc),
        a.copyToHitData(N.g.he),
        a.copyToHitData(N.g.dd),
        a.copyToHitData(N.g.ke),
        a.copyToHitData(N.g.qb),
        a.copyToHitData(N.g.Wc));
    },
    Qn = function (a) {
      im(a);
    },
    Rn = function (a) {
      if (tn(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
        var b = z.__gsaExp.id;
        if (ra(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.m[N.g.mh] = c);
          } catch (d) {}
      }
    },
    Sn = function (a) {
      if (tn(a, ["conversion", "remarketing"])) {
        var b = pn();
        void 0 !== b && (a.m[N.g.Ch] = b || "error");
        var c = mj();
        c && (a.m[N.g.se] = c);
        var d = lj();
        d && (a.m[N.g.Ae] = d);
      }
    },
    Tn = function (a) {
      tn(a, ["conversion"]) && "1" === Lk(!1)._up && (a.m[N.g.ve] = !0);
    },
    Un = function (a) {
      tn(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !Sg(N.g.C));
    },
    Vn = function (a) {
      if (
        tn(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        Sg(N.g.C) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = tl(b.prefix);
        "_gcl" === c && (c = "");
        var d = c;
        if (
          dn.test(C.location.host)
            ? gn.test(C.location.href) || en.test(C.location.href)
            : !Jl(d)
        ) {
          var e = mn(c);
          e && (a.m[N.g.ob] = e);
          if (!c) {
            var f = jn(ml() ? il() : {}, en);
            f && (a.m[N.g.qe] = f);
          }
        } else {
          var g = nn(c);
          g && (a.m[N.g.uc] = g);
          if (!c) {
            var l = a.m[N.g.Wa];
            b = J(b);
            b.prefix = c;
            var m = kn(l, b, !0).qk;
            m && (a.m[N.g.mc] = m);
          }
        }
      }
    },
    Wn = function (a) {
      if (
        tn(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        Sg(N.g.C)
      ) {
        var b = !P(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          cl(c, "conversion" === a.metadata.hit_type && a.eventName !== N.g.Da);
          a.m[N.g.fc] = Zk(c.prefix);
        }
      }
    },
    Xn = function (a) {
      if (tn(a, ["conversion"])) {
        var b = km(a.metadata.cookie_options);
        if (b && !a.m[N.g.ka]) {
          var c = Xh(a.m[N.g.Wa]);
          a.m[N.g.ka] = c;
        }
        b && ((a.m[N.g.ab] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Yn = function (a) {
      var b = !Sg(N.g.C);
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !(!b && !a.metadata.consent_updated);
          break;
        case "remarketing":
          a.isAborted = b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.m[N.g.Xd] = !0);
      }
    },
    Zn = function (a) {
      tn(a, ["conversion"]) &&
        a.h.eventMetadata.is_external_event &&
        (a.m[N.g.Jh] = !0);
    },
    $n = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            sn(a);
            break;
          case "user_data_lead":
            b = 98;
            sn(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && K(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    An = !1,
    Bn = !1;
  var ao = {
    D: {
      Bg: "ads_conversion_hit",
      ff: "container_execute_start",
      Fg: "container_setup_end",
      hf: "container_setup_start",
      Eg: "container_execute_end",
      Gg: "container_yield_end",
      jf: "container_yield_start",
      Eh: "event_execute_end",
      Fh: "event_setup_end",
      nd: "event_setup_start",
      Gh: "ga4_conversion_hit",
      qd: "page_load",
      Ul: "pageview",
      zb: "snippet_load",
      Qh: "tag_callback_error",
      Rh: "tag_callback_failure",
      Sh: "tag_callback_success",
      Th: "tag_execute_end",
      wc: "tag_execute_start",
    },
  };
  var bo = !1,
    co = "L S Y E EC TC HTC".split(" "),
    eo = ["S", "E"],
    fo = ["TS", "TI", "TE"];
  var Ho = function (a) {},
    Io = function (a) {},
    Jo = function () {},
    Ko = function (a, b) {},
    Lo = function (a, b) {},
    go = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var l = {};
      return l;
    },
    ho = function (a) {
      var b = !1;
      return b;
    },
    io = function (a, b) {},
    Mo = function () {
      var a = {};
      return a;
    },
    Ao = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    No = function () {},
    Oo = function (a, b) {},
    Po = function (a, b, c) {};
  var Qo = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || ((d = {}), (z.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Ro = function (a, b, c) {
    var d = Ji(a, "fmt");
    if (b) {
      var e = Ji(a, "random"),
        f = Ji(a, "label") || "";
      if (!e) return !1;
      var g = Pj(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Qo(g, b)) return !1;
    }
    d && 4 != d && (a = Li(a, "rfmt", d));
    var l = Li(a, "fmt", 4);
    Kb(
      l,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      C.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var So = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          l;
        for (l in d)
          "google_business_vertical" !== l &&
            (l in g || (g[l] = []), g[l].push(d[l]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    To = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = d.id),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Uo = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: d.id,
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Wo = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(Vo(d.value)),
          e.push(Vo(d.quantity)),
          e.push(Vo(d.item_id)),
          e.push(Vo(d.start_date)),
          e.push(Vo(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    Vo = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    Yo = function (a, b) {
      var c = Xo(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Xo = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      k(a, function (c, d) {
        var e, f;
        if (ta(d)) {
          for (var g = [], l = 0; l < d.length; ++l) {
            var m = Zo(d[l]);
            void 0 != m && g.push(m);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = Zo(d);
        e = f;
        var n = Zo(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Zo = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    $o = function (a, b) {
      var c = [],
        d = function (f, g) {
          null != g &&
            "" !== g &&
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      k(b, d);
      return c.join("&");
    },
    ap = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.m[N.g.Tc],
        e = Sg(N.g.C),
        f = [],
        g,
        l = a.h.J,
        m,
        n = ci() ? 2 : 3,
        p = 0,
        q = function (w) {
          f.push(w);
          w.Ra && p++;
        };
      switch (c) {
        case "conversion":
          m = "pagead/conversion";
          var r = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com/"), (m = "pagead/1p-conversion"))
              : (g = "https://www.googleadservices.com/")
            : (g = "https://pagead2.googlesyndication.com/");
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          q({
            eb: "" + g + m + "/" + d + "/?" + $o(a, b) + r,
            format: n,
            Ra: !0,
            attributes: P(89) ? { attributionsrc: "" } : void 0,
          });
          a.metadata.send_ccm_parallel_ping &&
            q({
              eb: "" + g + "ccm/conversion/" + d + "/?" + $o(a, b) + r,
              format: 2,
              Ra: !0,
            });
          a.metadata.is_gcp_conversion &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              eb:
                "" +
                (e ? "https://googleads.g.doubleclick.net/" : g) +
                "pagead/viewthroughconversion/" +
                d +
                "/?" +
                $o(a, b) +
                r,
              format: n,
              Ra: !0,
            }));
          break;
        case "remarketing":
          var t = b.data || "",
            u = So(To(a.m[N.g.T]));
          if (u.length) {
            for (var v = 0; v < u.length; v++)
              (b.data = Yo(t, u[v])),
                q({
                  eb:
                    "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    $o(a, b),
                  format: n,
                  Ra: !0,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    eb: an() + "/td/rul/" + d + "?" + $o(a, b),
                    format: 4,
                    Ra: !1,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              eb:
                "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                d +
                "/?" +
                $o(a, b),
              format: n,
              Ra: !0,
            });
          break;
        case "user_data_lead":
          q({
            eb: "https://google.com/pagead/form-data/" + d + "?" + $o(a, b),
            format: 1,
            Ra: !0,
          });
          break;
        case "user_data_web":
          q({
            eb: "https://google.com/ccm/form-data/" + d + "?" + $o(a, b),
            format: 1,
            Ra: !0,
          });
      }
      1 < f.length && ra(a.h.J) && (l = Pa(a.h.J, p));
      ci() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        q({ eb: an() + "/td/rul/" + d + "?" + $o(a, b), format: 4, Ra: !1 });
      return { J: l, Ck: f };
    },
    bp = function (a, b, c, d, e, f) {
      Io(c);
      var g = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Ub(a);
          e && e();
          break;
        case 2:
          Nb(a, g, void 0, f);
          break;
        case 3:
          var l = !1;
          try {
            l = Ro(a, g, f);
          } catch (p) {
            l = !1;
          }
          l || bp(a, 2, c, d, g, f);
          break;
        case 4:
          var m = "AW-" + c.m[N.g.Tc],
            n = c.m[N.g.Wa];
          n && (m = m + "/" + n);
          $m(a, m);
      }
    },
    cp = {},
    dp =
      ((cp[N.g.Xd] = "gcu"),
      (cp[N.g.ob] = "gclaw"),
      (cp[N.g.fc] = "auid"),
      (cp[N.g.ce] = "dscnt"),
      (cp[N.g.de] = "fcntr"),
      (cp[N.g.ee] = "flng"),
      (cp[N.g.fe] = "mid"),
      (cp[N.g.Qg] = "bttype"),
      (cp[N.g.Wa] = "label"),
      (cp[N.g.Eb] = "capi"),
      (cp[N.g.na] = "currency_code"),
      (cp[N.g.he] = "vdltv"),
      (cp[N.g.nj] = "_dbg"),
      (cp[N.g.ke] = "oedeld"),
      (cp[N.g.rb] = "edid"),
      (cp[N.g.Xg] = "fledge"),
      (cp[N.g.qe] = "gac"),
      (cp[N.g.mc] = "gacgb"),
      (cp[N.g.ih] = "gacmcov"),
      (cp[N.g.se] = "gdpr"),
      (cp[N.g.sb] = "gdid"),
      (cp[N.g.mh] = "gsaexp"),
      (cp[N.g.nh] = "frm"),
      (cp[N.g.ve] = "gtm_up"),
      (cp[N.g.zf] = "did"),
      (cp[N.g.Zc] = void 0),
      (cp[N.g.wb] = "tiba"),
      (cp[N.g.Ib] = "rdp"),
      (cp[N.g.ab] = "ecsid"),
      (cp[N.g.dd] = "delopc"),
      (cp[N.g.Ae] = "gdpr_consent"),
      (cp[N.g.ka] = "oid"),
      (cp[N.g.xh] = "ec_lat"),
      (cp[N.g.yh] = "ec_meta"),
      (cp[N.g.zh] = "ec_m"),
      (cp[N.g.Ah] = "ec_sel"),
      (cp[N.g.Bh] = "ec_s"),
      (cp[N.g.Gf] = "ec_mode"),
      (cp[N.g.wa] = "userId"),
      (cp[N.g.Ch] = "us_privacy"),
      (cp[N.g.X] = "value"),
      (cp[N.g.uc] = "gclgb"),
      (cp[N.g.Dh] = "mcov"),
      (cp[N.g.Ih] = "hn"),
      (cp[N.g.Jh] = "gtm_ee"),
      (cp[N.g.De] = "npa"),
      (cp[N.g.Tc] = null),
      (cp[N.g.xb] = null),
      (cp[N.g.ra] = null),
      (cp[N.g.T] = null),
      (cp[N.g.da] = null),
      (cp[N.g.Aa] = null),
      (cp[N.g.Ef] = null),
      cp),
    fp = function (a) {
      ep(a, function (b) {
        for (var c = ap(a, b), d = c.J, e = c.Ck, f = 0; f < e.length; f++) {
          var g = e[f];
          bp(g.eb, g.format, a, b, g.Ra ? d : void 0, g.attributes);
        }
      });
    },
    ep = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = [],
        g = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = g),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      d.gtm = Ai();
      Ug() &&
        (P(104) || "remarketing" !== c) &&
        ((d.gcs = uh()), P(106) || ("remarketing" !== c && Vg())) &&
        (d.gcd = yh());
      P(109) && (Ah() && (d.dma_cps = zh()), Ye() && (d.dma = "1"));
      if (a.m[N.g.xb]) {
        var l = a.m[N.g.xb].split("x");
        2 === l.length && ((d.u_w = l[0]), (d.u_h = l[1]));
      }
      if (a.m[N.g.ra]) {
        var m = a.m[N.g.ra];
        2 === m.length
          ? (d.hl = m)
          : 5 === m.length &&
            ((d.hl = m.substring(0, 2)), (d.gl = m.substring(3, 5)));
      }
      var n = a.metadata.redact_click_ids,
        p = function (w, x) {
          var y = a.m[x];
          y && (d[w] = n ? Af(y) : y);
        };
      p("url", N.g.da);
      p("ref", N.g.Aa);
      p("top", N.g.Ef);
      P(13) &&
        ((dp[N.g.ed] = "uaa"),
        (dp[N.g.fd] = "uab"),
        (dp[N.g.gd] = "uafvl"),
        (dp[N.g.hd] = "uamb"),
        (dp[N.g.jd] = "uam"),
        (dp[N.g.kd] = "uap"),
        (dp[N.g.ld] = "uapv"),
        (dp[N.g.md] = "uaw"));
      k(a.m, function (w, x) {
        if (dp.hasOwnProperty(w)) {
          var y = dp[w];
          y && (d[y] = x);
        } else e[w] = x;
      });
      var q = a.m[N.g.Zc];
      void 0 != q && "" !== q && (d.vdnc = String(q));
      var r = a.m[N.g.Wc];
      void 0 !== r && (d.shf = r);
      var t = a.m[N.g.qb];
      void 0 !== t && (d.delc = t);
      d.data = Xo(e);
      var u = a.m[N.g.T];
      u && "conversion" === c && ((d.iedeld = wg(u)), (d.item = Wo(Uo(u))));
      if (
        ("conversion" === c ||
          "user_data_lead" === c ||
          "user_data_web" === c) &&
        a.metadata.user_data &&
        (!P(68) || Sg(N.g.C))
      ) {
        var v = Yd(a.metadata.user_data);
        v &&
          f.push(
            v.then(function (w) {
              d.em = w.Te;
              if ("user_data_web" === c && 0 < w.bl) {
                var x = lm(a.metadata.cookie_options);
                d.ecsid = x;
              }
            })
          );
      }
      if (f.length)
        try {
          Promise.all(f).then(function () {
            b(d);
          });
          return;
        } catch (w) {}
      b(d);
    };
  var gp = function () {
      this.h = {};
    },
    hp = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    ip = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    kp = function (a, b, c, d) {
      if (!Ug()) {
        jp(a, b, c, d);
        return;
      }
      Ch(
        function () {
          Sg(N.g.C) ? jp(a, b, c, d) : d && d();
        },
        [N.g.C]
      );
    };
  var lp = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d = {
          gclgb: function () {
            return qm("gb", b, c).join(".");
          },
          gacgb: function () {
            return xm(c);
          },
          gclaw: function () {
            return um(b, c).join(".");
          },
          gac: function () {
            return wm(c);
          },
        },
        e = zm(b),
        f = e ? "gclgb" : "gclaw",
        g = e ? "gacgb" : "gac",
        l = d[g],
        m = (0, d[f])(),
        n = "_gcl" !== b ? "" : l();
      m && hp(a, f, m);
      n && hp(a, g, n);
    },
    jp = function (a, b, c, d) {
      c = c || {};
      var e = c.Lb || {},
        f = new gp();
      Xd(b, function (g, l) {
        hp(f, "em", g);
        hp(f, "gtm", Ai());
        Ug() && (hp(f, "gcs", uh()), hp(f, "gcd", yh()));
        P(109) && (Ah() && hp(f, "dma_cps", zh()), Ye() && hp(f, "dma", "1"));
        lp(f, tl(e.prefix), c.Ld);
        hp(f, "auid", Zk(e.prefix));
        if (0 < l) {
          var m = lm(e);
          hp(f, "ecsid", m);
        }
        var n = ip(f);
        Ub("https://google.com/pagead/form-data/" + a + "?" + n);
        Ub("https://google.com/ccm/form-data/" + a + "?" + n);
        d && d();
      });
    };
  function mp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return zf("" + c + b).href;
    }
  }
  function np() {
    return !!ne.He && "SGTM_TOKEN" !== ne.He.split("@@").join("");
  }
  function op(a) {
    for (var b = pp(), c = ea(b), d = c.next(); !d.done; d = c.next()) {
      var e = S(a, d.value);
      if (e) return e;
    }
  }
  function pp() {
    var a = [];
    P(113) && a.push(N.g.xe);
    a.push(N.g.qc);
    return a;
  }
  var rp = function (a, b, c, d) {
      if (!qp() && !ui(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + ne.ba,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = np();
        l && (f += "&sign=" + ne.He);
        var m = we || ye ? mp(b, e + f) : void 0;
        if (!m) {
          var n = ne.Yd + e;
          l &&
            Db &&
            g &&
            (n = Db.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = Tl("https://", "http://", n + f);
        }
        var p = a;
        d.siloed && (wi({ ctid: p, isDestination: !1 }), (p = ji(p)));
        var q = p,
          r = vi();
        di().container[q] = { state: 1, context: d, parent: r };
        ei({ ctid: q, isDestination: !1 });
        Kb(m);
      }
    },
    sp = function (a, b, c, d) {
      var e;
      if ((e = !qp())) {
        var f = di().destination[a];
        e = !(f && f.state);
      }
      if (e)
        if (xi())
          (di().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: vi(),
          }),
            ei({ ctid: a, isDestination: !0 }, d),
            K(91);
        else {
          var g =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ne.ba +
            "&cx=c";
          np() && (g += "&sign=" + ne.He);
          var l = we || ye ? mp(b, g) : void 0;
          l || (l = Tl("https://", "http://", ne.Yd + g));
          var m = a;
          c.siloed && (wi({ ctid: m, isDestination: !0 }), (m = ji(m)));
          di().destination[m] = { state: 1, context: c, parent: vi() };
          ei({ ctid: m, isDestination: !0 }, d);
          Kb(l);
        }
    };
  function qp() {
    if (ci()) {
      return !0;
    }
    return !1;
  }
  var up = function (a, b) {
      tp(a).entity.push(b);
    },
    vp = function (a) {
      var b = pi();
      tp(b).event && tp(b).event.push(a);
    },
    wp = function () {
      var a = tp(pi());
      return a.event ? a.event : [];
    };
  function tp(a) {
    var b,
      c = oe.r;
    c || ((c = { container: {} }), (oe.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var xp = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    yp = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    zp = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ap =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Dp = function (a) {
      var b = Oe("gtm.allowlist") || Oe("gtm.whitelist");
      b && K(9);
      ue && (b = ["google", "gtagfl", "lcl", "zone"]);
      Bp() &&
        (ue ? K(116) : K(117),
        Cp &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && La(Da(b), yp),
        d = Oe("gtm.blocklist") || Oe("gtm.blacklist");
      d || ((d = Oe("tagTypeBlacklist")) && K(3));
      d ? K(8) : (d = []);
      Bp() &&
        ((d = Da(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Da(d).indexOf("google") && K(2);
      var e = d && La(Da(d), zp),
        f = {};
      return function (g) {
        var l = g && g[fc.yb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Ge[l] || [],
          n = a(l, m),
          p;
        p = tp(pi()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](l, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      K(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;
          else {
            var w = ya(e, m || []);
            w && K(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = ya(e, Ap));
        return (f[l] = x);
      };
    },
    Cp = !1;
  var Bp = function () {
    return xp.test(z.location && z.location.hostname);
  };
  var Ep = "",
    Fp = [];
  function Gp(a) {
    var b = "";
    Ep && (b = "&dl=" + encodeURIComponent(Ep));
    0 < Fp.length && (b += "&tdp=" + Fp.join("."));
    a.Ab && ((Ep = ""), (Fp.length = 0), b && a.zi());
    return b;
  }
  var Hp = [];
  function Ip(a) {
    if (!Hp.length) return "";
    var b = "&tdc=" + Hp.join("!");
    a.Ab && (a.zi(), (Hp.length = 0));
    return b;
  }
  var Jp = { initialized: 11, complete: 12, interactive: 13 },
    Kp = {},
    Lp = Object.freeze(((Kp[N.g.La] = !0), Kp)),
    Mp =
      0 <= C.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= C.location.search.indexOf("&gtm_diagnostics="),
    Op = function (a, b, c) {
      if (xj && "config" === a && !(1 < Ql(b).H.length)) {
        var d,
          e = Eb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = J(c.F);
        J(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = Np(d[l], f);
          m.length && (Mp && console.log(m), g.push(l));
        }
        g.length &&
          (g.length && xj && Hp.push(b + "*" + g.join(".")),
          Ya("TAGGING", Jp[C.readyState] || 14));
        d[b] = f;
      }
    };
  function Pp(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Np(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Lp[q] : t;
      },
      f;
    for (f in Pp(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === $b(l) || "array" === $b(l),
        p = "object" === $b(m) || "array" === $b(m);
      if (n && p) Np(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Qp = !1,
    Rp = 0,
    Sp = [];
  function Tp(a) {
    if (!Qp) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Qp = !0;
        for (var e = 0; e < Sp.length; e++) E(Sp[e]);
      }
      Sp.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Up() {
    if (!Qp && 140 > Rp) {
      Rp++;
      try {
        C.documentElement.doScroll("left"), Tp();
      } catch (a) {
        z.setTimeout(Up, 50);
      }
    }
  }
  var Vp = function (a) {
    Qp ? a() : Sp.push(a);
  };
  var Wp = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: oi(),
    };
  };
  function Xp(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Zp = function (a, b) {
      this.h = !1;
      this.F = [];
      this.I = { tags: [] };
      this.W = !1;
      this.m = this.B = 0;
      Yp(this, a, b);
    },
    $p = function (a, b, c, d) {
      if (re.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      G(d) && (e = J(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    aq = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    bq = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    Yp = function (a, b, c) {
      void 0 !== b && cq(a, b);
      c &&
        z.setTimeout(function () {
          return bq(a);
        }, Number(c));
    },
    cq = function (a, b) {
      var c = Ia(function () {
        return E(function () {
          b(oi(), a.I);
        });
      });
      a.h ? c() : a.F.push(c);
    },
    dq = function (a) {
      a.B++;
      return Ia(function () {
        a.m++;
        a.W && a.m >= a.B && bq(a);
      });
    },
    eq = function (a) {
      a.W = !0;
      a.m >= a.B && bq(a);
    };
  var fq = {},
    hq = function () {
      return z[gq()];
    },
    Bq = !1;
  function gq() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Rq = function (a) {},
    Sq = function (a, b) {
      return function () {
        var c = hq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Xq = {},
    Yq = {};
  function Zq(a, b) {
    if (xj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Xq[a] = "&e=" + c + "&eid=" + a;
      Hj(a);
    }
  }
  function $q(a) {
    var b = a.eventId,
      c = a.Ab;
    if (!Xq[b]) return "";
    var d = Yq[b] ? "" : "&es=1";
    d += Xq[b];
    c && (Yq[b] = !0);
    return d;
  }
  var ar = {};
  function br(a, b) {
    xj && ((ar[a] = ar[a] || {}), (ar[a][b] = (ar[a][b] || 0) + 1));
  }
  function cr(a) {
    for (
      var b = a.eventId,
        c = a.Ab,
        d = Object.entries(ar[b] || {}),
        e = [],
        f = 0;
      f < d.length;
      f++
    ) {
      var g = ea(d[f]),
        l = g.next().value,
        m = g.next().value;
      e.push("" + l + m);
    }
    c && delete ar[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var dr = {},
    er = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function fr(a, b, c) {
    if (xj) {
      dr[a] = dr[a] || [];
      var d = er[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === C
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || G(c)
          ? "0"
          : "e";
      dr[a].push("" + d + e);
    }
  }
  function gr(a) {
    var b = a.eventId,
      c = dr[b] || [];
    if (!c.length) return "";
    a.Ab && delete dr[b];
    return "&pcr=" + c.join(".");
  }
  var hr = {},
    ir = {};
  function jr(a, b, c) {
    if (xj && b) {
      var d = oj(b);
      hr[a] = hr[a] || [];
      hr[a].push(c + d);
      var e = b["function"];
      if (!e) throw Error("Error: No function name given for function call.");
      var f = (Ic[e] ? "1" : "2") + d;
      ir[a] = ir[a] || [];
      ir[a].push(f);
      Hj(a);
    }
  }
  function kr(a) {
    var b = a.eventId,
      c = a.Ab,
      d = "",
      e = hr[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = ir[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete hr[b], delete ir[b]);
    return d;
  }
  function lr(a, b, c, d) {
    var e = Gc[a],
      f = mr(a, b, c, d);
    if (!f) return null;
    var g = Qc(e[fc.Ph], c, []);
    if (g && g.length) {
      var l = g[0];
      f = lr(
        l.index,
        { J: f, O: 1 === l.fi ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function mr(a, b, c, d) {
    function e() {
      if (f[fc.Mj]) l();
      else {
        var w = Rc(f, c, []),
          x = w[fc.Ki];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!Sg(x[y])) {
              l();
              return;
            }
        var A = $p(c.Kb, String(f[fc.yb]), Number(f[fc.wd]), w[fc.Nj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = Ga() - H;
            jr(c.id, Gc[a], "5");
            aq(c.Kb, A, "success", I);
            P(70) && Po(c, f, ao.D.Sh);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = Ga() - H;
            jr(c.id, Gc[a], "6");
            aq(c.Kb, A, "failure", I);
            P(70) && Po(c, f, ao.D.Rh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        jr(c.id, f, "1");
        var D = function () {
          Ve(3);
          var I = Ga() - H;
          jr(c.id, f, "7");
          aq(c.Kb, A, "exception", I);
          P(70) && Po(c, f, ao.D.Qh);
          B || ((B = !0), l());
        };
        P(70) && Oo(c, f);
        var H = Ga();
        try {
          Pc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          D(I);
        }
        P(70) && Po(c, f, ao.D.Th);
      }
    }
    var f = Gc[a],
      g = b.J,
      l = b.O,
      m = b.terminate;
    if (c.ag(f)) return null;
    var n = Qc(f[fc.Uh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = lr(p.index, { J: g, O: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.fi ? m : q;
    }
    if (f[fc.Lh] || f[fc.Pj]) {
      var r = f[fc.Lh] ? Hc : c.Cl,
        t = g,
        u = l;
      if (!r[a]) {
        e = Ia(e);
        var v = nr(a, r, e);
        g = v.J;
        l = v.O;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function nr(a, b, c) {
    var d = [],
      e = [];
    b[a] = or(d, e, c);
    return {
      J: function () {
        b[a] = pr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      O: function () {
        b[a] = qr;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function or(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function pr(a) {
    a();
  }
  function qr(a, b) {
    b();
  }
  var sr = function (a, b) {
      return 1 === arguments.length ? rr("config", a) : rr("config", a, b);
    },
    tr = function (a, b, c) {
      c = c || {};
      c[N.g.Jb] = a;
      return rr("event", b, c);
    };
  function rr(a) {
    return arguments;
  }
  var ur = function () {
    this.h = [];
    this.m = [];
  };
  ur.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  ur.prototype.listen = function (a) {
    this.m.push(a);
  };
  ur.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  ur.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var wr = function (a, b, c) {
      vr().enqueue(a, b, c);
    },
    yr = function () {
      var a = xr;
      vr().listen(a);
    };
  function vr() {
    var a = oe.mb;
    a || ((a = new ur()), (oe.mb = a));
    return a;
  }
  var Gr = function (a) {
      var b = oe.zones;
      return b
        ? b.getIsAllowedFn(ki(), a)
        : function () {
            return !0;
          };
    },
    Hr = function (a) {
      var b = oe.zones;
      return b ? b.isActive(ki(), a) : !0;
    },
    Ir = function () {
      vp(function (a, b) {
        return Hr(b);
      });
    };
  var Lr = function (a, b) {
    for (var c = [], d = 0; d < Gc.length; d++)
      if (a[d]) {
        var e = Gc[d];
        var f = dq(b.Kb);
        try {
          var g = lr(d, { J: f, O: f, terminate: f }, b, d);
          if (g) {
            var l = e["function"];
            if (!l) throw "Error: No function name given for function call.";
            var m = Ic[l];
            c.push({
              Ci: d,
              ri: (m ? m.priorityOverride || 0 : 0) || Xp(e[fc.yb], 1) || 0,
              execute: g,
            });
          } else Jr(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Kr);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Kr(a, b) {
    var c,
      d = b.ri,
      e = a.ri;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Ci,
        l = b.Ci;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function Jr(a, b) {
    if (xj) {
      var c = function (d) {
        var e = b.ag(Gc[d]) ? "3" : "4",
          f = Qc(Gc[d][fc.Ph], b, []);
        f && f.length && c(f[0].index);
        jr(b.id, Gc[d], e);
        var g = Qc(Gc[d][fc.Uh], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Or = !1,
    Mr;
  var Tr = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    P(70) && Ko(b, d);
    if ("gtm.js" === d) {
      if (Or) return !1;
      Or = !0;
    }
    var e,
      f = !1,
      g = Hr(b);
    if (P(130))
      for (var l = wp(), m = 0; g && m < l.length; m++) g = (0, l[m])(d, b);
    if (g) e = Gr(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Gr(Number.MAX_SAFE_INTEGER);
    }
    Zq(b, d);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = {
        id: b,
        priorityId: c,
        name: d,
        ag: Dp(e),
        Cl: [],
        li: function () {
          K(6);
          Ve(0);
        },
        Yh: Pr(),
        Zh: Qr(b),
        Kb: new Zp(function () {
          if (P(70)) {
          }
          n && n.apply(n, [].slice.call(arguments, 0));
        }, p),
      };
    P(119) && (q.wi = br);
    var r = Vc(q);
    f && (r = Rr(r));
    P(70) && Lo(b, d);
    var t = Lr(r, q),
      u = !1;
    eq(q.Kb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Rq(oi());
    return Sr(r, t) || u;
  };
  function Qr(a) {
    return function (b) {
      bc(b) || fr(a, "input", b);
    };
  }
  function Pr() {
    var a = {};
    a.event = Se("event", 1);
    a.ecommerce = Se("ecommerce", 1);
    a.gtm = Se("gtm");
    a.eventModel = Se("eventModel");
    return a;
  }
  function Rr(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Gc[c][fc.yb]);
        if (qe[d] || void 0 !== Gc[c][fc.Qj] || He[d] || Xp(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Sr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Gc[c] && !re[String(Gc[c][fc.yb])]) return !0;
    return !1;
  }
  var Ur = {};
  function Vr(a, b, c) {
    xj && void 0 !== a && ((Ur[a] = Ur[a] || []), Ur[a].push(c + b), Hj(a));
  }
  function Wr(a) {
    var b = a.eventId,
      c = a.Ab,
      d = "",
      e = Ur[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Ur[b];
    return d;
  }
  var Yr = function (a, b, c, d) {
      var e = Ql(c, d.isGtmEvent);
      e && Xr.push("event", [b, a], e, d);
    },
    Zr = function (a, b, c, d) {
      var e = Ql(c, d.isGtmEvent);
      e && Xr.push("get", [a, b], e, d);
    },
    $r = function () {
      this.status = 1;
      this.F = {};
      this.h = {};
      this.I = {};
      this.W = null;
      this.B = {};
      this.m = !1;
    },
    as = function (a, b, c, d) {
      var e = Ga();
      this.type = a;
      this.B = e;
      this.h = b;
      this.m = c;
      this.messageContext = d;
    },
    bs = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    cs = function (a, b) {
      var c = b.V;
      return (a.m[c] = a.m[c] || new $r());
    },
    ds = function (a, b, c, d) {
      if (d.h) {
        var e = cs(a, d.h),
          f = e.W;
        if (f) {
          var g = J(c),
            l = J(e.F[d.h.id]),
            m = J(e.B),
            n = J(e.h),
            p = J(a.B),
            q = {};
          if (xj)
            try {
              q = J(Le);
            } catch (v) {
              K(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Vr(d.messageContext.eventId, r, v);
              var w = g[N.g.kc];
              w && E(w);
            },
            u = Qm(
              Pm(
                Om(
                  Nm(
                    Mm(
                      Km(
                        Jm(
                          Lm(
                            Im(
                              Hm(
                                Gm(
                                  new Fm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                l
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Vr(d.messageContext.eventId, r, "1"),
              Op(d.type, d.h.id, u),
              f(d.h.id, b, d.B, u);
          } catch (v) {
            Vr(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  bs.prototype.register = function (a, b, c) {
    var d = cs(this, a);
    3 !== d.status &&
      ((d.W = b), (d.status = 3), c && (J(d.h, c), (d.h = c)), this.flush());
  };
  bs.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === cs(this, c).status &&
        ((cs(this, c).status = 2), this.push("require", [{}], c, {})),
      cs(this, c).m && (d.deferrable = !1));
    this.h.push(new as(a, c, b, d));
    d.deferrable || this.flush();
  };
  bs.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || cs(this, g).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== cs(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.m[0], function (r, t) {
              J(Ma(r, t), b.B);
            });
            break;
          case "config":
            var l = cs(this, g);
            e.jb = {};
            k(
              f.m[0],
              (function (r) {
                return function (t, u) {
                  J(Ma(t, u), r.jb);
                };
              })(e)
            );
            var m = !!e.jb[N.g.sc];
            delete e.jb[N.g.sc];
            var n = g.V === g.id;
            m || (n ? (l.B = {}) : (l.F[g.id] = {}));
            (l.m && m) || ds(this, N.g.ia, e.jb, f);
            l.m = !0;
            n ? J(e.jb, l.B) : (J(e.jb, l.F[g.id]), K(70));
            d = !0;
            break;
          case "event":
            e.Qd = {};
            k(
              f.m[0],
              (function (r) {
                return function (t, u) {
                  J(Ma(t, u), r.Qd);
                };
              })(e)
            );
            ds(this, f.m[1], e.Qd, f);
            break;
          case "get":
            var p = {},
              q = ((p[N.g.Ka] = f.m[0]), (p[N.g.Ya] = f.m[1]), p);
            ds(this, N.g.Da, q, f);
        }
        this.h.shift();
        es(this, f);
      }
      e = { jb: e.jb, Qd: e.Qd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var es = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = cs(a, b.h).I[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.I)
                for (var g = f.I[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    fs = function (a, b) {
      var c = Xr,
        d = J(b);
      J(cs(c, a).h, d);
      cs(c, a).h = d;
    },
    Xr = new bs();
  var gs = {},
    hs = {},
    is = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Vd: e.Vd, Sd: e.Sd }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Vd = Ql(g, b)), e.Vd)) {
            var l = mi();
            ua(
              l,
              (function (r) {
                return function (t) {
                  return r.Vd.V === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = gs[g] || [];
          e.Sd = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Sd[t] = !0);
              };
            })(e)
          );
          for (var n = ki(), p = 0; p < n.length; p++)
            if (e.Sd[n[p]]) {
              c = c.concat(mi());
              break;
            }
          var q = hs[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Uk: c, Wk: d };
    },
    js = function (a) {
      k(gs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    ks = function (a) {
      k(hs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ls = "HA GF G UA AW DC MC".split(" "),
    ms = !1,
    ns = !1;
  function os(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ie() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var ps = void 0,
    qs = void 0;
  function rs(a, b, c) {
    var d = J(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && K(136);
    var e = J(b);
    J(c, e);
    wr(sr(ki()[0], e), a.eventId, d);
  }
  function ss(a) {
    for (var b = pp(), c = ea(b), d = c.next(); !d.done; d = c.next()) {
      var e = d.value,
        f = (a && a[e]) || Xr.B[e];
      if (f) return f;
    }
  }
  var ts = {
      config: function (a, b) {
        var c = P(122),
          d = os(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !G(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = Ql(a[1], b.isGtmEvent);
          if (f) {
            var g, l, m;
            a: {
              if (!gi.Ce) {
                var n = qi(vi());
                if (
                  n &&
                  n.parent &&
                  n.context &&
                  1 === n.context.source &&
                  0 !== n.parent.ctid.indexOf("GTM-")
                ) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { Yk: qi(p), Tk: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((g = r.Yk), (l = r.Tk));
            Zq(d.eventId, "gtag.config");
            var t = f.V,
              u = f.id !== t;
            if (u ? -1 === mi().indexOf(t) : -1 === ki().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || (P(61) && e[N.g.ub]))) {
                var v = ss(e);
                if (u)
                  sp(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  ps ? rs(b, w, ps) : qs || (qs = J(w));
                } else
                  rp(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (K(128), l && K(130), c && b.inheritParentConfig)) {
                var x = e;
                qs ? rs(b, qs, x) : (!x[N.g.sc] && te && ps) || (ps = J(x));
                return;
              }
              if (te && !u && !e[N.g.sc]) {
                var y = ns;
                ns = !0;
                if (y) return;
              }
              ms || K(43);
              if (!b.noTargetGroup)
                if (u) {
                  ks(f.id);
                  var A = f.id,
                    B = e[N.g.te] || "default";
                  B = String(B).split(",");
                  for (var D = 0; D < B.length; D++) {
                    var H = hs[B[D]] || [];
                    hs[B[D]] = H;
                    0 > H.indexOf(A) && H.push(A);
                  }
                } else {
                  js(f.id);
                  var I = f.id,
                    F = e[N.g.te] || "default";
                  F = F.toString().split(",");
                  for (var L = 0; L < F.length; L++) {
                    var M = gs[F[L]] || [];
                    gs[F[L]] = M;
                    0 > M.indexOf(I) && M.push(I);
                  }
                }
              delete e[N.g.te];
              var X = b.eventMetadata || {};
              X.hasOwnProperty("is_external_event") ||
                (X.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = X;
              delete e[N.g.kc];
              for (var U = u ? [f.id] : mi(), R = 0; R < U.length; R++) {
                var Q = e,
                  fa = J(b),
                  aa = Ql(U[R], fa.isGtmEvent);
                aa && Xr.push("config", [Q], aa, fa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          K(39);
          var c = os(a, b),
            d = a[1];
          "default" === d
            ? rh(a[2])
            : "update" === d
            ? sh(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && qh(a[2])
            : "core_platform_services" === d && th(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!G(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = J(e)),
            e[N.g.kc] && (g.eventCallback = e[N.g.kc]),
            e[N.g.ne] && (g.eventTimeout = e[N.g.ne]));
          var l = os(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.Jb];
          void 0 === r &&
            ((r = Oe(N.g.Jb, 2)), void 0 === r && (r = "default"));
          if (h(r) || ta(r)) {
            var t;
            b.isGtmEvent && P(120)
              ? (t = h(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = is(t, b.isGtmEvent),
              v = u.Uk,
              w = u.Wk;
            if (w.length)
              for (var x = ss(q), y = 0; y < w.length; y++) {
                var A = Ql(w[y], b.isGtmEvent);
                A &&
                  sp(A.V, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Sl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Zq(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var I = B[H],
                F = J(b);
              if (-1 !== ls.indexOf(I.prefix)) {
                var L = J(d),
                  M = F.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !F.fromContainerExecution);
                F.eventMetadata = M;
                delete L[N.g.kc];
                Yr(c, L, I.id, F);
              }
              D.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[N.g.Jb] = D.join())
              : delete g.eventModel[N.g.Jb];
            ms || K(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            P(135) && g.eventModel[N.g.tb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        K(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && ra(a[3])) {
          var c = Ql(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            ms || K(43);
            var f = ss();
            if (
              !ua(mi(), function (l) {
                return c.V === l;
              })
            )
              sp(c.V, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== ls.indexOf(c.prefix)) {
              os(a, b);
              var g = {};
              $g(J(((g[N.g.Ka] = d), (g[N.g.Ya] = e), g)));
              Zr(
                d,
                function (l) {
                  E(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          ms = !0;
          var c = os(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && G(a[1])
          ? (c = J(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            G(a[2]) || ta(a[2]) ? (c[a[1]] = J(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = os(a, b),
            e = d.eventId,
            f = d.priorityId;
          J(c);
          var g = J(c);
          Xr.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    us = { policy: !0 };
  var vs = function (a) {
      var b = z[ne.ba].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    ws = function (a) {
      var b = z[ne.ba],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var xs = !1,
    ys = [];
  function zs() {
    if (!xs) {
      xs = !0;
      for (var a = 0; a < ys.length; a++) E(ys[a]);
    }
  }
  var As = function (a) {
    xs ? E(a) : ys.push(a);
  };
  var Rs = function (a) {
    if (Qs(a)) return a;
    this.h = a;
  };
  Rs.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Qs = function (a) {
    return !a || "object" !== $b(a) || G(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Rs.prototype.getUntrustedMessageValue = Rs.prototype.getUntrustedMessageValue;
  var Ss = 0,
    Ts = {},
    Us = [],
    Vs = [],
    Ws = !1,
    Xs = !1;
  function Ys(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Zs = function (a) {
      return z[ne.ba].push(a);
    },
    $s = function (a, b) {
      var c = oe[ne.ba],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function at(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && Re(e), Re(e, f));
    });
    De || (De = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ie()), (a["gtm.uniqueEventId"] = d), Re("gtm.uniqueEventId", d));
    return Tr(a);
  }
  function bt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (za(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function ct() {
    var a;
    if (Vs.length) a = Vs.shift();
    else if (Us.length) a = Us.shift();
    else return;
    var b;
    var c = a;
    if (Ws || !bt(c.message)) b = c;
    else {
      Ws = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ie());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Us.unshift(l, c);
      if (xj) {
        var m = ii.ctid;
        if (m) {
          var n,
            p = qi(vi());
          n = p && p.context;
          var q,
            r = zf(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = ii.Le,
            w = gi.Ce;
          xj &&
            (Ep || (Ep = q),
            Fp.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function dt() {
    for (var a = !1, b; !Xs && (b = ct()); ) {
      Xs = !0;
      delete Le.eventModel;
      Ne();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Xs = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = Oe(l, 1);
            if (ta(m) || G(m)) m = J(m);
            Me[l] = m;
          }
        try {
          if (ra(d))
            try {
              d.call(Pe);
            } catch (D) {}
          else if (ta(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = Oe(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (D) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (za(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = ts[d[0]];
                  if (w && (!e.fromContainerExecution || !us[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && K(101);
            } else u = d;
            if (u) {
              var x = at(u, e);
              a = x || a;
              v && x && K(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ne(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Ts[String(y)] || [], B = 0; B < A.length; B++)
              Vs.push(et(A[B]));
            A.length && Vs.sort(Ys);
            delete Ts[String(y)];
            y > Ss && (Ss = y);
          }
          Xs = !1;
        }
      }
    }
    return !a;
  }
  function ft() {
    if (P(70)) {
      var a = gt();
    }
    var e = dt();
    try {
      vs(oi());
    } catch (f) {}
    return e;
  }
  function xr(a) {
    if (Ss < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Ts[b] = Ts[b] || [];
      Ts[b].push(a);
    } else
      Vs.push(et(a)),
        Vs.sort(Ys),
        E(function () {
          Xs || dt();
        });
  }
  function et(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var ht = function () {
      function a(f) {
        var g = {};
        if (Qs(f)) {
          var l = f;
          f = Qs(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Eb(ne.ba, []),
        c = (oe[ne.ba] = oe[ne.ba] || {});
      !0 === c.pruned && K(83);
      Ts = vr().get();
      yr();
      Vp(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      As(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < oe.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Rs(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Us.push.apply(Us, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (K(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return dt() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Us.push.apply(Us, e);
      gt() && (P(70) && Jo(), E(ft));
    },
    gt = function () {
      var a = !0;
      return a;
    };
  function it(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ga();
    return b < c + 3e5 && b > c - 9e5;
  }
  function jt(a) {
    return a && 0 === a.indexOf("pending:") ? it(a.substr(8)) : !1;
  }
  var Ft = function () {};
  var Lc = {};
  Lc.Be = new String("undefined");
  var gu = z.clearTimeout,
    hu = z.setTimeout,
    T = function (a, b, c, d) {
      if (ci()) {
        b && E(b);
      } else return Kb(a, b, c, d);
    },
    iu = function () {
      return new Date();
    },
    ju = function () {
      return z.location.href;
    },
    ku = function (a) {
      return xf(zf(a), "fragment");
    },
    lu = function (a) {
      return yf(zf(a));
    },
    mu = function (a, b) {
      return Oe(a, b || 2);
    },
    nu = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Zs(a)))
        : (d = Zs(a));
      return d;
    },
    ou = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    pu = function (a, b, c) {
      return Kh(a, b, void 0 === c ? !0 : !!c);
    },
    qu = function (a, b, c) {
      return 0 === Th(a, b, c);
    },
    ru = function (a, b) {
      if (ci()) {
        b && E(b);
      } else Mb(a, b);
    },
    su = function (a) {
      return !!Nt(a, "init", !1);
    },
    tu = function (a) {
      Lt(a, "init", !0);
    },
    uu = function (a, b, c) {
      bc(a) || fr(c, b, a);
    };
  function Su(a, b) {
    function c(g) {
      var l = zf(g),
        m = xf(l, "protocol"),
        n = xf(l, "host", !0),
        p = xf(l, "port"),
        q = xf(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Tu(a) {
    return Uu(a) ? 1 : 0;
  }
  function Uu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = J(a, {});
        J({ arg1: c[d], any_of: void 0 }, e);
        if (Tu(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < jd.length; g++) {
                var l = jd[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return kd(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return md(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Su(b, c);
    }
    return !1;
  }
  function Vu() {
    var a = [
      "&cv=1",
      "&rv=" + ne.Mf,
      "&tc=" +
        Gc.filter(function (b) {
          return b;
        }).length,
    ];
    ne.ud && a.push("&x=" + ne.ud);
    return a.join("");
  }
  function Wu() {
    function a(c, d) {
      var e = ab(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  $e();
  function rv() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var sv = function () {
      var a = rv();
      a.hid = a.hid || va();
      return a.hid;
    },
    tv = function (a, b) {
      var c = rv();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Qv = function () {
      var a = !0;
      (nj(7) && nj(9) && nj(10)) || (a = !1);
      return a;
    },
    Rv = function () {
      var a = !0;
      (nj(3) && nj(4)) || (a = !1);
      return a;
    };
  var rw = window,
    sw = document,
    tw = function (a) {
      var b = rw._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        sw.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === rw["ga-disable-" + a])
      )
        return !0;
      try {
        var c = rw.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Eh("AMP_TOKEN", String(sw.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return sw.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function zw(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Ma] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Iw = function (a, b) {};
  function Hw(a, b) {
    var c = function () {};
    return c;
  }
  function Jw(a, b, c) {}
  var Kw = function (a, b) {
      var c;
      c = b
        ? [Sn, Tn, Vn, Fn, Jn, Xn, Kn, Wn, Qn, Gn, $n, Ln, Un, Dn, Yn, zn]
        : [Um, En, un, Hn, vn, wn, xn, yn, Mn, Nn, Pn, Rn, In, On, Cn, Zn];
      for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
    },
    Lw = function (a, b, c, d) {
      var e = new em(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Ga();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    Mw = function (a) {
      var b = a.indexOf("/"),
        c = 3 <= b,
        d = a.substring(3, c ? b : a.length);
      return {
        id: a,
        prefix: "AW",
        V: "AW-" + d,
        H: [d, c ? a.substring(b + 1) : void 0],
      };
    },
    Nw = function (a, b, c, d) {
      function e() {
        for (var q = 0; q < g.length; q++) {
          var r = g[q];
          r.isAborted ||
            (Kw(g[q], !0), r.metadata.speculative || r.isAborted || fp(r));
        }
      }
      var f = Ql(a, d.isGtmEvent);
      P(120) || (!f && d.isGtmEvent && (f = Mw(a)));
      if (f) {
        var g = [];
        if (d.eventMetadata.hit_type_override) {
          var l = d.eventMetadata.hit_type_override;
          Array.isArray(l) || (l = [l]);
          for (var m = 0; m < l.length; m++) {
            var n = Lw(l[m], f, b, d);
            n.metadata.speculative = !1;
            g.push(n);
          }
        } else
          b === N.g.ia && g.push(Lw("landing_page", f, b, d)),
            g.push(Lw("conversion", f, b, d)),
            g.push(Lw("user_data_lead", f, b, d)),
            g.push(Lw("user_data_web", f, b, d)),
            g.push(Lw("remarketing", f, b, d));
        for (var p = 0; p < g.length; p++) Kw(g[p], !1);
        Ch(
          function () {
            for (var q = [], r = [], t = 0; t < g.length; t++) {
              var u = g[t];
              q.push(u.isAborted);
              r.push(u.metadata.speculative);
            }
            e();
            Sg(N.g.C) ||
              Bh(
                function (v) {
                  for (
                    var w = v.consentEventId, x = v.consentPriorityId, y = 0;
                    y < g.length;
                    y++
                  ) {
                    var A = g[y];
                    A.metadata.consent_updated = !0;
                    A.metadata.speculative = r[y];
                    A.metadata.event_start_timestamp_ms = Ga();
                    A.isAborted = q[y];
                    A.metadata.consent_event_id = w;
                    A.metadata.consent_priority_id = x;
                  }
                  e();
                },
                [N.g.C]
              );
          },
          [N.g.C]
        );
      }
    };
  var sy = Hw;
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var uy = encodeURI,
    W = encodeURIComponent,
    vy = function (a, b, c) {
      Nb(a, b, c);
    },
    wy = function (a, b) {
      if (!a) return !1;
      var c = xf(zf(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    xy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { o: {} };
  (Y.o.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.s = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.o.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.s = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = mu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        uu(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.o.rep = ["google"]),
    (function () {
      (function (a) {
        Y.__rep = a;
        Y.__rep.s = "rep";
        Y.__rep.isVendorTemplate = !0;
        Y.__rep.priorityOverride = 0;
        Y.__rep.isInfrastructure = !1;
      })(function (a) {
        var b = Ql(a.vtp_containerId, !0),
          c;
        switch (b.prefix) {
          case "AW":
            c = Nw;
            break;
          case "DC":
            c = jx;
            break;
          case "GF":
            c = px;
            break;
          case "HA":
            c = ux;
            break;
          case "UA":
            c = Rx;
            break;
          case "MC":
            c = sy(b, a.vtp_gtmEventId);
            break;
          default:
            E(a.vtp_gtmOnFailure);
            return;
        }
        if (c) {
          E(a.vtp_gtmOnSuccess);
          var d = c,
            e = Ql(a.vtp_containerId, !0);
          e && Xr.register(e, d);
          if (a.vtp_remoteConfig) {
            var f = a.vtp_remoteConfig || {},
              g = Ql(a.vtp_containerId, !0);
            g && fs(g, f);
          }
        } else E(a.vtp_gtmOnFailure);
      });
    })();
  (Y.o.cid = ["google"]),
    (function () {
      (function (a) {
        Y.__cid = a;
        Y.__cid.s = "cid";
        Y.__cid.isVendorTemplate = !0;
        Y.__cid.priorityOverride = 0;
        Y.__cid.isInfrastructure = !1;
      })(function () {
        return oi();
      });
    })();

  (Y.o.get = ["google"]),
    (function () {
      (function (a) {
        Y.__get = a;
        Y.__get.s = "get";
        Y.__get.isVendorTemplate = !0;
        Y.__get.priorityOverride = 0;
        Y.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = tr(String(b.streamId), d, c);
        wr(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var Rz = {};
  Rz.dataLayer = Pe;
  Rz.callback = function (a) {
    Fe.hasOwnProperty(a) && ra(Fe[a]) && Fe[a]();
    delete Fe[a];
  };
  Rz.bootstrap = 0;
  Rz._spx = !1;
  function Sz() {
    oe[oi()] = oe[oi()] || Rz;
    P(134) || (pi(!0) && (oe["ctid_" + pi(!0)] = Rz));
    ti();
    xi() ||
      k(yi(), function (a, b) {
        sp(a, b.transportUrl, b.context);
        K(92);
      });
    Ja(Ge, Y.o);
    Nc = Wc;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute("data-tag-assistant-present");
      it(m) && (l = g.Fj);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (C.referrer) {
        var d = zf(C.referrer);
        c = "cct.google" === wf(d, "host");
      }
      if (!c) {
        var e = Kh("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Kb("https://cct.google/taggy/agent.js"));
    }
    if (Ae) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ue ? ((v = "OGT"), (w = "GTAG")) : Ae && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Kb(
              "https://" +
                ne.Yd +
                "/debug/bootstrap?id=" +
                ii.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                Ai()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Db,
              containerProduct: v,
              debug: !1,
              id: ii.ctid,
              destinations: li(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ne.Li && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Pl: 1, Gj: 2, Rj: 3, Ni: 4, Fj: 5 },
        l = void 0,
        m = void 0,
        n = xf(z.location, "query", !1, void 0, "gtm_debug");
      it(n) && (l = g.Gj);
      if (!l && C.referrer) {
        var p = zf(C.referrer);
        "tagassistant.google.com" === wf(p, "host") && (l = g.Rj);
      }
      if (!l) {
        var q = Kh("__TAG_ASSISTANT");
        q.length && q[0].length && (l = g.Ni);
      }
      l || b();
      if (!l && jt(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Db ? f(l) : a();
          },
          t = !1;
        Ob(
          C,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else l && Db ? f(l) : a();
    }
  })(function () {
    ri();
    if (P(70)) {
    }
    Ag().m();
    kj();
    var b;
    if (P(133)) {
      var c = pi();
      b = !!di().canonical[c];
    } else b = pi(!0) ? oe["ctid_" + pi(!0)] : oe[oi()];
    if (b) {
      var d = oe.zones;
      d && d.unregisterChild(ki());
    } else {
      (P(11) || P(13) || P(55) || P(48)) && Xj();
      for (
        var e = data.resource || {}, f = e.macros || [], g = 0;
        g < f.length;
        g++
      )
        Dc.push(f[g]);
      for (var l = e.tags || [], m = 0; m < l.length; m++) Gc.push(l[m]);
      for (var n = e.predicates || [], p = 0; p < n.length; p++) Fc.push(n[p]);
      for (var q = e.rules || [], r = 0; r < q.length; r++) {
        for (var t = q[r], u = {}, v = 0; v < t.length; v++)
          u[t[v][0]] = Array.prototype.slice.call(t[v], 1);
        Ec.push(u);
      }
      Ic = Y;
      Jc = Tu;
      Sz();
      if (P(102)) {
        for (
          var w = We["7"], x = w ? w.split("|") : [], y = {}, A = 0;
          A < x.length;
          A++
        )
          y[x[A]] = !0;
        for (var B = 0; B < lh.length; B++) {
          var D = lh[B],
            H = y[D] ? "granted" : "denied";
          Hg().implicit(D, H);
        }
      }
      ht();
      Qp = !1;
      Rp = 0;
      if (
        ("interactive" == C.readyState && !C.createEventObject) ||
        "complete" == C.readyState
      )
        Tp();
      else {
        Ob(C, "DOMContentLoaded", Tp);
        Ob(C, "readystatechange", Tp);
        if (C.createEventObject && C.documentElement.doScroll) {
          var I = !0;
          try {
            I = !z.frameElement;
          } catch (R) {}
          I && Up();
        }
        Ob(z, "load", Tp);
      }
      xs = !1;
      "complete" === C.readyState ? zs() : Ob(z, "load", zs);
      xj && (sj(Kj), z.setInterval(Jj, 864e5));
      sj(Vu);
      P(119) && sj(cr);
      sj($q);
      sj(Wu);
      sj(gr);
      sj(Mj);
      sj(Ip);
      sj(Gp);
      sj(kr);
      sj(Wr);
      Ft();
      Ve(1);
      P(131) && Ir();
      Ee = Ga();
      Rz.bootstrap = Ee;
      if (P(70)) {
      }
    }
  });
})();
