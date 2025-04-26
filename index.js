import * as L from "react";
import wn, { forwardRef as Tn, useContext as Cn } from "react";
function xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var or = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function An() {
  if (st) return We;
  st = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, o, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: c,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return We.Fragment = r, We.jsx = t, We.jsxs = t, We;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function _n() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === a ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case s:
          return "Fragment";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case y:
          return "Suspense";
        case P:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case v:
            return "Portal";
          case A:
            return (u.displayName || "Context") + ".Provider";
          case I:
            return (u._context.displayName || "Context") + ".Consumer";
          case T:
            var b = u.render;
            return u = u.displayName, u || (u = b.displayName || b.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case R:
            return b = u.displayName || null, b !== null ? b : e(u.type) || "Memo";
          case Q:
            b = u._payload, u = u._init;
            try {
              return e(u(b));
            } catch {
            }
        }
      return null;
    }
    function r(u) {
      return "" + u;
    }
    function t(u) {
      try {
        r(u);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var _ = b.error, O = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return _.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(u);
      }
    }
    function n(u) {
      if (u === s) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === Q)
        return "<...>";
      try {
        var b = e(u);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = C.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function c(u) {
      if (N.call(u, "key")) {
        var b = Object.getOwnPropertyDescriptor(u, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, b) {
      function _() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: _,
        configurable: !0
      });
    }
    function f() {
      var u = e(this.type);
      return ie[u] || (ie[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function d(u, b, _, O, k, M, j, B) {
      return _ = M.ref, u = {
        $$typeof: E,
        type: u,
        key: b,
        props: M,
        _owner: k
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function m(u, b, _, O, k, M, j, B) {
      var $ = b.children;
      if ($ !== void 0)
        if (O)
          if (F($)) {
            for (O = 0; O < $.length; O++)
              p($[O]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p($);
      if (N.call(b, "key")) {
        $ = e(u);
        var D = Object.keys(b).filter(function(ce) {
          return ce !== "key";
        });
        O = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[$ + O] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          $,
          D,
          $
        ), Pe[$ + O] = !0);
      }
      if ($ = null, _ !== void 0 && (t(_), $ = "" + _), c(b) && (t(b.key), $ = "" + b.key), "key" in b) {
        _ = {};
        for (var V in b)
          V !== "key" && (_[V] = b[V]);
      } else _ = b;
      return $ && l(
        _,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), d(
        u,
        $,
        M,
        k,
        o(),
        _,
        j,
        B
      );
    }
    function p(u) {
      typeof u == "object" && u !== null && u.$$typeof === E && u._store && (u._store.validated = 1);
    }
    var g = wn, E = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), A = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), a = Symbol.for("react.client.reference"), C = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, F = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var ae, ie = {}, fe = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), ye = J(n(i)), Pe = {};
    Ye.Fragment = s, Ye.jsx = function(u, b, _, O, k) {
      var M = 1e4 > C.recentlyCreatedOwnerStacks++;
      return m(
        u,
        b,
        _,
        !1,
        O,
        k,
        M ? Error("react-stack-top-frame") : fe,
        M ? J(n(u)) : ye
      );
    }, Ye.jsxs = function(u, b, _, O, k) {
      var M = 1e4 > C.recentlyCreatedOwnerStacks++;
      return m(
        u,
        b,
        _,
        !0,
        O,
        k,
        M ? Error("react-stack-top-frame") : fe,
        M ? J(n(u)) : ye
      );
    };
  }()), Ye;
}
var lt;
function On() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? or.exports = An() : or.exports = _n()), or.exports;
}
var Ae = On(), ir = { exports: {} }, ar = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Rn() {
  if (ut) return U;
  ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, s = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function A(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case r:
          switch (y = y.type, y) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case m:
                case v:
                case E:
                case c:
                  return y;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  function T(y) {
    return A(y) === d;
  }
  return U.AsyncMode = f, U.ConcurrentMode = d, U.ContextConsumer = l, U.ContextProvider = c, U.Element = r, U.ForwardRef = m, U.Fragment = n, U.Lazy = v, U.Memo = E, U.Portal = t, U.Profiler = i, U.StrictMode = o, U.Suspense = p, U.isAsyncMode = function(y) {
    return T(y) || A(y) === f;
  }, U.isConcurrentMode = T, U.isContextConsumer = function(y) {
    return A(y) === l;
  }, U.isContextProvider = function(y) {
    return A(y) === c;
  }, U.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }, U.isForwardRef = function(y) {
    return A(y) === m;
  }, U.isFragment = function(y) {
    return A(y) === n;
  }, U.isLazy = function(y) {
    return A(y) === v;
  }, U.isMemo = function(y) {
    return A(y) === E;
  }, U.isPortal = function(y) {
    return A(y) === t;
  }, U.isProfiler = function(y) {
    return A(y) === i;
  }, U.isStrictMode = function(y) {
    return A(y) === o;
  }, U.isSuspense = function(y) {
    return A(y) === p;
  }, U.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === d || y === i || y === o || y === p || y === g || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === E || y.$$typeof === c || y.$$typeof === l || y.$$typeof === m || y.$$typeof === S || y.$$typeof === w || y.$$typeof === I || y.$$typeof === s);
  }, U.typeOf = A, U;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function kn() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, s = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function A(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === d || x === i || x === o || x === p || x === g || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === E || x.$$typeof === c || x.$$typeof === l || x.$$typeof === m || x.$$typeof === S || x.$$typeof === w || x.$$typeof === I || x.$$typeof === s);
    }
    function T(x) {
      if (typeof x == "object" && x !== null) {
        var be = x.$$typeof;
        switch (be) {
          case r:
            var nr = x.type;
            switch (nr) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case p:
                return nr;
              default:
                var at = nr && nr.$$typeof;
                switch (at) {
                  case l:
                  case m:
                  case v:
                  case E:
                  case c:
                    return at;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var y = f, P = d, R = l, Q = c, ne = r, a = m, C = n, N = v, F = E, J = t, ae = i, ie = o, fe = p, ye = !1;
    function Pe(x) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(x) || T(x) === f;
    }
    function u(x) {
      return T(x) === d;
    }
    function b(x) {
      return T(x) === l;
    }
    function _(x) {
      return T(x) === c;
    }
    function O(x) {
      return typeof x == "object" && x !== null && x.$$typeof === r;
    }
    function k(x) {
      return T(x) === m;
    }
    function M(x) {
      return T(x) === n;
    }
    function j(x) {
      return T(x) === v;
    }
    function B(x) {
      return T(x) === E;
    }
    function $(x) {
      return T(x) === t;
    }
    function D(x) {
      return T(x) === i;
    }
    function V(x) {
      return T(x) === o;
    }
    function ce(x) {
      return T(x) === p;
    }
    H.AsyncMode = y, H.ConcurrentMode = P, H.ContextConsumer = R, H.ContextProvider = Q, H.Element = ne, H.ForwardRef = a, H.Fragment = C, H.Lazy = N, H.Memo = F, H.Portal = J, H.Profiler = ae, H.StrictMode = ie, H.Suspense = fe, H.isAsyncMode = Pe, H.isConcurrentMode = u, H.isContextConsumer = b, H.isContextProvider = _, H.isElement = O, H.isForwardRef = k, H.isFragment = M, H.isLazy = j, H.isMemo = B, H.isPortal = $, H.isProfiler = D, H.isStrictMode = V, H.isSuspense = ce, H.isValidElementType = A, H.typeOf = T;
  }()), H;
}
var dt;
function Ht() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? ar.exports = Rn() : ar.exports = kn()), ar.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, pt;
function $n() {
  if (pt) return Pr;
  pt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(c).map(function(m) {
        return c[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pr = o() ? Object.assign : function(i, c) {
    for (var l, f = n(i), d, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var p in l)
        r.call(l, p) && (f[p] = l[p]);
      if (e) {
        d = e(l);
        for (var g = 0; g < d.length; g++)
          t.call(l, d[g]) && (f[d[g]] = l[d[g]]);
      }
    }
    return f;
  }, Pr;
}
var Ir, mt;
function Kr() {
  if (mt) return Ir;
  mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ir = e, Ir;
}
var Nr, ht;
function qt() {
  return ht || (ht = 1, Nr = Function.call.bind(Object.prototype.hasOwnProperty)), Nr;
}
var Mr, gt;
function Pn() {
  if (gt) return Mr;
  gt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ Kr(), t = {}, n = /* @__PURE__ */ qt();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(i, c, l, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var g = Error(
                (f || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[m](c, m, f, l, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var E = d ? d() : "";
            e(
              "Failed " + l + " type: " + p.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Mr = o, Mr;
}
var jr, yt;
function In() {
  if (yt) return jr;
  yt = 1;
  var e = Ht(), r = $n(), t = /* @__PURE__ */ Kr(), n = /* @__PURE__ */ qt(), o = /* @__PURE__ */ Pn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return jr = function(l, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(u) {
      var b = u && (d && u[d] || u[m]);
      if (typeof b == "function")
        return b;
    }
    var g = "<<anonymous>>", E = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: I(),
      arrayOf: A,
      element: T(),
      elementType: y(),
      instanceOf: P,
      node: a(),
      objectOf: Q,
      oneOf: R,
      oneOfType: ne,
      shape: N,
      exact: F
    };
    function v(u, b) {
      return u === b ? u !== 0 || 1 / u === 1 / b : u !== u && b !== b;
    }
    function s(u, b) {
      this.message = u, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    s.prototype = Error.prototype;
    function S(u) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, _ = 0;
      function O(M, j, B, $, D, V, ce) {
        if ($ = $ || g, V = V || B, ce !== t) {
          if (f) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = $ + ":" + B;
            !b[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[be] = !0, _++);
          }
        }
        return j[B] == null ? M ? j[B] === null ? new s("The " + D + " `" + V + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new s("The " + D + " `" + V + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : u(j, B, $, D, V);
      }
      var k = O.bind(null, !1);
      return k.isRequired = O.bind(null, !0), k;
    }
    function w(u) {
      function b(_, O, k, M, j, B) {
        var $ = _[O], D = ie($);
        if (D !== u) {
          var V = fe($);
          return new s(
            "Invalid " + M + " `" + j + "` of type " + ("`" + V + "` supplied to `" + k + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return S(b);
    }
    function I() {
      return S(c);
    }
    function A(u) {
      function b(_, O, k, M, j) {
        if (typeof u != "function")
          return new s("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var B = _[O];
        if (!Array.isArray(B)) {
          var $ = ie(B);
          return new s("Invalid " + M + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + k + "`, expected an array."));
        }
        for (var D = 0; D < B.length; D++) {
          var V = u(B, D, k, M, j + "[" + D + "]", t);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return S(b);
    }
    function T() {
      function u(b, _, O, k, M) {
        var j = b[_];
        if (!l(j)) {
          var B = ie(j);
          return new s("Invalid " + k + " `" + M + "` of type " + ("`" + B + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(u);
    }
    function y() {
      function u(b, _, O, k, M) {
        var j = b[_];
        if (!e.isValidElementType(j)) {
          var B = ie(j);
          return new s("Invalid " + k + " `" + M + "` of type " + ("`" + B + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(u);
    }
    function P(u) {
      function b(_, O, k, M, j) {
        if (!(_[O] instanceof u)) {
          var B = u.name || g, $ = Pe(_[O]);
          return new s("Invalid " + M + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + k + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return S(b);
    }
    function R(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function b(_, O, k, M, j) {
        for (var B = _[O], $ = 0; $ < u.length; $++)
          if (v(B, u[$]))
            return null;
        var D = JSON.stringify(u, function(ce, x) {
          var be = fe(x);
          return be === "symbol" ? String(x) : x;
        });
        return new s("Invalid " + M + " `" + j + "` of value `" + String(B) + "` " + ("supplied to `" + k + "`, expected one of " + D + "."));
      }
      return S(b);
    }
    function Q(u) {
      function b(_, O, k, M, j) {
        if (typeof u != "function")
          return new s("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var B = _[O], $ = ie(B);
        if ($ !== "object")
          return new s("Invalid " + M + " `" + j + "` of type " + ("`" + $ + "` supplied to `" + k + "`, expected an object."));
        for (var D in B)
          if (n(B, D)) {
            var V = u(B, D, k, M, j + "." + D, t);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return S(b);
    }
    function ne(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var b = 0; b < u.length; b++) {
        var _ = u[b];
        if (typeof _ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(_) + " at index " + b + "."
          ), c;
      }
      function O(k, M, j, B, $) {
        for (var D = [], V = 0; V < u.length; V++) {
          var ce = u[V], x = ce(k, M, j, B, $, t);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && D.push(x.data.expectedType);
        }
        var be = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new s("Invalid " + B + " `" + $ + "` supplied to " + ("`" + j + "`" + be + "."));
      }
      return S(O);
    }
    function a() {
      function u(b, _, O, k, M) {
        return J(b[_]) ? null : new s("Invalid " + k + " `" + M + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return S(u);
    }
    function C(u, b, _, O, k) {
      return new s(
        (u || "React class") + ": " + b + " type `" + _ + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function N(u) {
      function b(_, O, k, M, j) {
        var B = _[O], $ = ie(B);
        if ($ !== "object")
          return new s("Invalid " + M + " `" + j + "` of type `" + $ + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var D in u) {
          var V = u[D];
          if (typeof V != "function")
            return C(k, M, j, D, fe(V));
          var ce = V(B, D, k, M, j + "." + D, t);
          if (ce)
            return ce;
        }
        return null;
      }
      return S(b);
    }
    function F(u) {
      function b(_, O, k, M, j) {
        var B = _[O], $ = ie(B);
        if ($ !== "object")
          return new s("Invalid " + M + " `" + j + "` of type `" + $ + "` " + ("supplied to `" + k + "`, expected `object`."));
        var D = r({}, _[O], u);
        for (var V in D) {
          var ce = u[V];
          if (n(u, V) && typeof ce != "function")
            return C(k, M, j, V, fe(ce));
          if (!ce)
            return new s(
              "Invalid " + M + " `" + j + "` key `" + V + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(_[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var x = ce(B, V, k, M, j + "." + V, t);
          if (x)
            return x;
        }
        return null;
      }
      return S(b);
    }
    function J(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(J);
          if (u === null || l(u))
            return !0;
          var b = p(u);
          if (b) {
            var _ = b.call(u), O;
            if (b !== u.entries) {
              for (; !(O = _.next()).done; )
                if (!J(O.value))
                  return !1;
            } else
              for (; !(O = _.next()).done; ) {
                var k = O.value;
                if (k && !J(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(u, b) {
      return u === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function ie(u) {
      var b = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : ae(b, u) ? "symbol" : b;
    }
    function fe(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var b = ie(u);
      if (b === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function ye(u) {
      var b = fe(u);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function Pe(u) {
      return !u.constructor || !u.constructor.name ? g : u.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, jr;
}
var Br, bt;
function Nn() {
  if (bt) return Br;
  bt = 1;
  var e = /* @__PURE__ */ Kr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Br = function() {
    function n(c, l, f, d, m, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Br;
}
var vt;
function Mn() {
  if (vt) return ir.exports;
  if (vt = 1, process.env.NODE_ENV !== "production") {
    var e = Ht(), r = !0;
    ir.exports = /* @__PURE__ */ In()(e.isElement, r);
  } else
    ir.exports = /* @__PURE__ */ Nn()();
  return ir.exports;
}
var jn = /* @__PURE__ */ Mn();
const z = /* @__PURE__ */ xn(jn);
function Gt(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Gt(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Bn() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Gt(e)) && (n && (n += " "), n += r);
  return n;
}
function Dn(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let c = "", l = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (c += (l === !0 ? "" : " ") + r(d), l = !1, t && t[d] && (c += " " + t[d]));
    }
    n[o] = c;
  }
  return n;
}
function _e(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function $e(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : _e(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var sr = { exports: {} }, q = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function Vn() {
  if (St) return q;
  St = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), E = Symbol.for("react.client.reference");
  function v(s) {
    if (typeof s == "object" && s !== null) {
      var S = s.$$typeof;
      switch (S) {
        case e:
          switch (s = s.type, s) {
            case t:
            case o:
            case n:
            case f:
            case d:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case l:
                case p:
                case m:
                  return s;
                case i:
                  return s;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return q.ContextConsumer = i, q.ContextProvider = c, q.Element = e, q.ForwardRef = l, q.Fragment = t, q.Lazy = p, q.Memo = m, q.Portal = r, q.Profiler = o, q.StrictMode = n, q.Suspense = f, q.SuspenseList = d, q.isContextConsumer = function(s) {
    return v(s) === i;
  }, q.isContextProvider = function(s) {
    return v(s) === c;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, q.isForwardRef = function(s) {
    return v(s) === l;
  }, q.isFragment = function(s) {
    return v(s) === t;
  }, q.isLazy = function(s) {
    return v(s) === p;
  }, q.isMemo = function(s) {
    return v(s) === m;
  }, q.isPortal = function(s) {
    return v(s) === r;
  }, q.isProfiler = function(s) {
    return v(s) === o;
  }, q.isStrictMode = function(s) {
    return v(s) === n;
  }, q.isSuspense = function(s) {
    return v(s) === f;
  }, q.isSuspenseList = function(s) {
    return v(s) === d;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === t || s === o || s === n || s === f || s === d || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === m || s.$$typeof === c || s.$$typeof === i || s.$$typeof === l || s.$$typeof === E || s.getModuleId !== void 0);
  }, q.typeOf = v, q;
}
var G = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Ln() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (typeof s == "object" && s !== null) {
        var S = s.$$typeof;
        switch (S) {
          case r:
            switch (s = s.type, s) {
              case n:
              case i:
              case o:
              case d:
              case m:
              case E:
                return s;
              default:
                switch (s = s && s.$$typeof, s) {
                  case l:
                  case f:
                  case g:
                  case p:
                    return s;
                  case c:
                    return s;
                  default:
                    return S;
                }
            }
          case t:
            return S;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    G.ContextConsumer = c, G.ContextProvider = l, G.Element = r, G.ForwardRef = f, G.Fragment = n, G.Lazy = g, G.Memo = p, G.Portal = t, G.Profiler = i, G.StrictMode = o, G.Suspense = d, G.SuspenseList = m, G.isContextConsumer = function(s) {
      return e(s) === c;
    }, G.isContextProvider = function(s) {
      return e(s) === l;
    }, G.isElement = function(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }, G.isForwardRef = function(s) {
      return e(s) === f;
    }, G.isFragment = function(s) {
      return e(s) === n;
    }, G.isLazy = function(s) {
      return e(s) === g;
    }, G.isMemo = function(s) {
      return e(s) === p;
    }, G.isPortal = function(s) {
      return e(s) === t;
    }, G.isProfiler = function(s) {
      return e(s) === i;
    }, G.isStrictMode = function(s) {
      return e(s) === o;
    }, G.isSuspense = function(s) {
      return e(s) === d;
    }, G.isSuspenseList = function(s) {
      return e(s) === m;
    }, G.isValidElementType = function(s) {
      return typeof s == "string" || typeof s == "function" || s === n || s === i || s === o || s === d || s === m || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === p || s.$$typeof === l || s.$$typeof === c || s.$$typeof === f || s.$$typeof === v || s.getModuleId !== void 0);
    }, G.typeOf = e;
  }()), G;
}
var wt;
function Fn() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? sr.exports = /* @__PURE__ */ Vn() : sr.exports = /* @__PURE__ */ Ln()), sr.exports;
}
var hr = /* @__PURE__ */ Fn();
function Ce(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kt(e) {
  if (/* @__PURE__ */ L.isValidElement(e) || hr.isValidElementType(e) || !Ce(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Kt(e[t]);
  }), r;
}
function pe(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return Ce(e) && Ce(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ L.isValidElement(r[o]) || hr.isValidElementType(r[o]) ? n[o] = r[o] : Ce(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ce(e[o]) ? n[o] = pe(e[o], r[o], t) : t.clone ? n[o] = Ce(r[o]) ? Kt(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Ke(e, r) {
  return r ? pe(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Re = process.env.NODE_ENV !== "production" ? z.oneOfType([z.number, z.string, z.object, z.array]) : {};
function zn(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var c, l;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((c = n.match(i)) == null ? void 0 : c[1]) || 0) - +(((l = o.match(i)) == null ? void 0 : l[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function Wn(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function Yn(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : _e(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Un(e) {
  const r = (i, c) => i.replace("@media", c ? `@container ${c}` : "@container");
  function t(i, c) {
    i.up = (...l) => r(e.breakpoints.up(...l), c), i.down = (...l) => r(e.breakpoints.down(...l), c), i.between = (...l) => r(e.breakpoints.between(...l), c), i.only = (...l) => r(e.breakpoints.only(...l), c), i.not = (...l) => {
      const f = r(e.breakpoints.not(...l), c);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const br = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Tt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${br[e]}px)`
}, Hn = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : br[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function xe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Tt;
    return r.reduce((c, l, f) => (c[i.up(i.keys[f])] = t(r[f]), c), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Tt;
    return Object.keys(r).reduce((c, l) => {
      if (Wn(i.keys, l)) {
        const f = Yn(n.containerQueries ? n : Hn, l);
        f && (c[f] = t(r[l], l));
      } else if (Object.keys(i.values || br).includes(l)) {
        const f = i.up(l);
        c[f] = t(r[l], l);
      } else {
        const f = l;
        c[f] = r[f];
      }
      return c;
    }, {});
  }
  return t(r);
}
function qn(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Gn(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function vr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function gr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = vr(e, t) || n, r && (o = r(o, n, e)), o;
}
function te(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (c) => {
    if (c[r] == null)
      return null;
    const l = c[r], f = c.theme, d = vr(f, n) || {};
    return xe(c, l, (p) => {
      let g = gr(d, o, p);
      return p === g && typeof p == "string" && (g = gr(d, o, `${r}${p === "default" ? "" : $e(p)}`, p)), t === !1 ? g : {
        [t]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Re
  } : {}, i.filterProps = [r], i;
}
function Kn(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Xn = {
  m: "margin",
  p: "padding"
}, Jn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ct = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zn = Kn((e) => {
  if (e.length > 2)
    if (Ct[e])
      e = Ct[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Xn[r], o = Jn[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Er = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qn = [...Sr, ...Er];
function er(e, r, t, n) {
  const o = vr(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const c = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(c) ? c > o.length - 1 && console.error([`MUI: The value provided (${c}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${c} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const l = o[c];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xr(e) {
  return er(e, "spacing", 8, "spacing");
}
function rr(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function eo(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = rr(r, t), n), {});
}
function ro(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Zn(t), i = eo(o, n), c = e[t];
  return xe(e, c, i);
}
function Xt(e, r) {
  const t = Xr(e.theme);
  return Object.keys(e).map((n) => ro(e, r, n, t)).reduce(Ke, {});
}
function ee(e) {
  return Xt(e, Sr);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Sr.reduce((e, r) => (e[r] = Re, e), {}) : {};
ee.filterProps = Sr;
function re(e) {
  return Xt(e, Er);
}
re.propTypes = process.env.NODE_ENV !== "production" ? Er.reduce((e, r) => (e[r] = Re, e), {}) : {};
re.filterProps = Er;
process.env.NODE_ENV !== "production" && Qn.reduce((e, r) => (e[r] = Re, e), {});
function wr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Ke(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ge(e, r) {
  return te({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const to = ge("border", he), no = ge("borderTop", he), oo = ge("borderRight", he), io = ge("borderBottom", he), ao = ge("borderLeft", he), so = ge("borderColor"), co = ge("borderTopColor"), lo = ge("borderRightColor"), uo = ge("borderBottomColor"), fo = ge("borderLeftColor"), po = ge("outline", he), mo = ge("outlineColor"), Tr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = er(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: rr(r, n)
    });
    return xe(e, e.borderRadius, t);
  }
  return null;
};
Tr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Re
} : {};
Tr.filterProps = ["borderRadius"];
wr(to, no, oo, io, ao, so, co, lo, uo, fo, Tr, po, mo);
const Cr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = er(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: rr(r, n)
    });
    return xe(e, e.gap, t);
  }
  return null;
};
Cr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Re
} : {};
Cr.filterProps = ["gap"];
const xr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = er(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: rr(r, n)
    });
    return xe(e, e.columnGap, t);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Re
} : {};
xr.filterProps = ["columnGap"];
const Ar = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = er(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: rr(r, n)
    });
    return xe(e, e.rowGap, t);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Re
} : {};
Ar.filterProps = ["rowGap"];
const ho = te({
  prop: "gridColumn"
}), go = te({
  prop: "gridRow"
}), yo = te({
  prop: "gridAutoFlow"
}), bo = te({
  prop: "gridAutoColumns"
}), vo = te({
  prop: "gridAutoRows"
}), So = te({
  prop: "gridTemplateColumns"
}), Eo = te({
  prop: "gridTemplateRows"
}), wo = te({
  prop: "gridTemplateAreas"
}), To = te({
  prop: "gridArea"
});
wr(Cr, xr, Ar, ho, go, yo, bo, vo, So, Eo, wo, To);
function De(e, r) {
  return r === "grey" ? r : e;
}
const Co = te({
  prop: "color",
  themeKey: "palette",
  transform: De
}), xo = te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: De
}), Ao = te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: De
});
wr(Co, xo, Ao);
function de(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _o = te({
  prop: "width",
  transform: de
}), Jr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, c, l, f;
      const n = ((c = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : c[t]) || br[t];
      return n ? ((f = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: de(t)
      };
    };
    return xe(e, e.maxWidth, r);
  }
  return null;
};
Jr.filterProps = ["maxWidth"];
const Oo = te({
  prop: "minWidth",
  transform: de
}), Ro = te({
  prop: "height",
  transform: de
}), ko = te({
  prop: "maxHeight",
  transform: de
}), $o = te({
  prop: "minHeight",
  transform: de
});
te({
  prop: "size",
  cssProperty: "width",
  transform: de
});
te({
  prop: "size",
  cssProperty: "height",
  transform: de
});
const Po = te({
  prop: "boxSizing"
});
wr(_o, Jr, Oo, Ro, ko, $o, Po);
const _r = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Tr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: De
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: De
  },
  backgroundColor: {
    themeKey: "palette",
    transform: De
  },
  // spacing
  p: {
    style: re
  },
  pt: {
    style: re
  },
  pr: {
    style: re
  },
  pb: {
    style: re
  },
  pl: {
    style: re
  },
  px: {
    style: re
  },
  py: {
    style: re
  },
  padding: {
    style: re
  },
  paddingTop: {
    style: re
  },
  paddingRight: {
    style: re
  },
  paddingBottom: {
    style: re
  },
  paddingLeft: {
    style: re
  },
  paddingX: {
    style: re
  },
  paddingY: {
    style: re
  },
  paddingInline: {
    style: re
  },
  paddingInlineStart: {
    style: re
  },
  paddingInlineEnd: {
    style: re
  },
  paddingBlock: {
    style: re
  },
  paddingBlockStart: {
    style: re
  },
  paddingBlockEnd: {
    style: re
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Cr
  },
  rowGap: {
    style: Ar
  },
  columnGap: {
    style: xr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: de
  },
  maxWidth: {
    style: Jr
  },
  minWidth: {
    transform: de
  },
  height: {
    transform: de
  },
  maxHeight: {
    transform: de
  },
  minHeight: {
    transform: de
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Io(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function No(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Mo() {
  function e(t, n, o, i) {
    const c = {
      [t]: n,
      theme: o
    }, l = i[t];
    if (!l)
      return {
        [t]: n
      };
    const {
      cssProperty: f = t,
      themeKey: d,
      transform: m,
      style: p
    } = l;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const g = vr(o, d) || {};
    return p ? p(c) : xe(c, n, (v) => {
      let s = gr(g, m, v);
      return v === s && typeof v == "string" && (s = gr(g, m, `${t}${v === "default" ? "" : $e(v)}`, v)), f === !1 ? s : {
        [f]: s
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {}
    } = t || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? _r;
    function c(l) {
      let f = l;
      if (typeof l == "function")
        f = l(o);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const d = qn(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((g) => {
        const E = No(f[g], o);
        if (E != null)
          if (typeof E == "object")
            if (i[g])
              p = Ke(p, e(g, E, o, i));
            else {
              const v = xe({
                theme: o
              }, E, (s) => ({
                [g]: s
              }));
              Io(v, E) ? p[g] = r({
                sx: E,
                theme: o
              }) : p = Ke(p, v);
            }
          else
            p = Ke(p, e(g, E, o, i));
      }), zn(o, Gn(m, p));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return r;
}
const Le = Mo();
Le.filterProps = ["sx"];
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, zr.apply(null, arguments);
}
function jo(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Bo(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Do = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Bo(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = jo(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), le = "-ms-", yr = "-moz-", W = "-webkit-", Jt = "comm", Zr = "rule", Qr = "decl", Vo = "@import", Zt = "@keyframes", Lo = "@layer", Fo = Math.abs, Or = String.fromCharCode, zo = Object.assign;
function Wo(e, r) {
  return se(e, 0) ^ 45 ? (((r << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function Qt(e) {
  return e.trim();
}
function Yo(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Y(e, r, t) {
  return e.replace(r, t);
}
function Wr(e, r) {
  return e.indexOf(r);
}
function se(e, r) {
  return e.charCodeAt(r) | 0;
}
function Xe(e, r, t) {
  return e.slice(r, t);
}
function Se(e) {
  return e.length;
}
function et(e) {
  return e.length;
}
function cr(e, r) {
  return r.push(e), e;
}
function Uo(e, r) {
  return e.map(r).join("");
}
var Rr = 1, Fe = 1, en = 0, ue = 0, oe = 0, ze = "";
function kr(e, r, t, n, o, i, c) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Rr, column: Fe, length: c, return: "" };
}
function Ue(e, r) {
  return zo(kr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ho() {
  return oe;
}
function qo() {
  return oe = ue > 0 ? se(ze, --ue) : 0, Fe--, oe === 10 && (Fe = 1, Rr--), oe;
}
function me() {
  return oe = ue < en ? se(ze, ue++) : 0, Fe++, oe === 10 && (Fe = 1, Rr++), oe;
}
function we() {
  return se(ze, ue);
}
function fr() {
  return ue;
}
function tr(e, r) {
  return Xe(ze, e, r);
}
function Je(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rn(e) {
  return Rr = Fe = 1, en = Se(ze = e), ue = 0, [];
}
function tn(e) {
  return ze = "", e;
}
function dr(e) {
  return Qt(tr(ue - 1, Yr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Go(e) {
  for (; (oe = we()) && oe < 33; )
    me();
  return Je(e) > 2 || Je(oe) > 3 ? "" : " ";
}
function Ko(e, r) {
  for (; --r && me() && !(oe < 48 || oe > 102 || oe > 57 && oe < 65 || oe > 70 && oe < 97); )
    ;
  return tr(e, fr() + (r < 6 && we() == 32 && me() == 32));
}
function Yr(e) {
  for (; me(); )
    switch (oe) {
      // ] ) " '
      case e:
        return ue;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yr(oe);
        break;
      // (
      case 40:
        e === 41 && Yr(e);
        break;
      // \
      case 92:
        me();
        break;
    }
  return ue;
}
function Xo(e, r) {
  for (; me() && e + oe !== 57; )
    if (e + oe === 84 && we() === 47)
      break;
  return "/*" + tr(r, ue - 1) + "*" + Or(e === 47 ? e : me());
}
function Jo(e) {
  for (; !Je(we()); )
    me();
  return tr(e, ue);
}
function Zo(e) {
  return tn(pr("", null, null, null, [""], e = rn(e), 0, [0], e));
}
function pr(e, r, t, n, o, i, c, l, f) {
  for (var d = 0, m = 0, p = c, g = 0, E = 0, v = 0, s = 1, S = 1, w = 1, I = 0, A = "", T = o, y = i, P = n, R = A; S; )
    switch (v = I, I = me()) {
      // (
      case 40:
        if (v != 108 && se(R, p - 1) == 58) {
          Wr(R += Y(dr(I), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        R += dr(I);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        R += Go(v);
        break;
      // \
      case 92:
        R += Ko(fr() - 1, 7);
        continue;
      // /
      case 47:
        switch (we()) {
          case 42:
          case 47:
            cr(Qo(Xo(me(), fr()), r, t), f);
            break;
          default:
            R += "/";
        }
        break;
      // {
      case 123 * s:
        l[d++] = Se(R) * w;
      // } ; \0
      case 125 * s:
      case 59:
      case 0:
        switch (I) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + m:
            w == -1 && (R = Y(R, /\f/g, "")), E > 0 && Se(R) - p && cr(E > 32 ? At(R + ";", n, t, p - 1) : At(Y(R, " ", "") + ";", n, t, p - 2), f);
            break;
          // @ ;
          case 59:
            R += ";";
          // { rule/at-rule
          default:
            if (cr(P = xt(R, r, t, d, m, o, l, A, T = [], y = [], p), i), I === 123)
              if (m === 0)
                pr(R, r, P, P, T, i, p, l, y);
              else
                switch (g === 99 && se(R, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pr(e, P, P, n && cr(xt(e, P, P, 0, 0, o, l, A, o, T = [], p), y), o, y, p, l, n ? T : y);
                    break;
                  default:
                    pr(R, P, P, P, [""], y, 0, l, y);
                }
        }
        d = m = E = 0, s = w = 1, A = R = "", p = c;
        break;
      // :
      case 58:
        p = 1 + Se(R), E = v;
      default:
        if (s < 1) {
          if (I == 123)
            --s;
          else if (I == 125 && s++ == 0 && qo() == 125)
            continue;
        }
        switch (R += Or(I), I * s) {
          // &
          case 38:
            w = m > 0 ? 1 : (R += "\f", -1);
            break;
          // ,
          case 44:
            l[d++] = (Se(R) - 1) * w, w = 1;
            break;
          // @
          case 64:
            we() === 45 && (R += dr(me())), g = we(), m = p = Se(A = R += Jo(fr())), I++;
            break;
          // -
          case 45:
            v === 45 && Se(R) == 2 && (s = 0);
        }
    }
  return i;
}
function xt(e, r, t, n, o, i, c, l, f, d, m) {
  for (var p = o - 1, g = o === 0 ? i : [""], E = et(g), v = 0, s = 0, S = 0; v < n; ++v)
    for (var w = 0, I = Xe(e, p + 1, p = Fo(s = c[v])), A = e; w < E; ++w)
      (A = Qt(s > 0 ? g[w] + " " + I : Y(I, /&\f/g, g[w]))) && (f[S++] = A);
  return kr(e, r, t, o === 0 ? Zr : l, f, d, m);
}
function Qo(e, r, t) {
  return kr(e, r, t, Jt, Or(Ho()), Xe(e, 2, -2), 0);
}
function At(e, r, t, n) {
  return kr(e, r, t, Qr, Xe(e, 0, n), Xe(e, n + 1, -1), n);
}
function Ve(e, r) {
  for (var t = "", n = et(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function ei(e, r, t, n) {
  switch (e.type) {
    case Lo:
      if (e.children.length) break;
    case Vo:
    case Qr:
      return e.return = e.return || e.value;
    case Jt:
      return "";
    case Zt:
      return e.return = e.value + "{" + Ve(e.children, n) + "}";
    case Zr:
      e.value = e.props.join(",");
  }
  return Se(t = Ve(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ri(e) {
  var r = et(e);
  return function(t, n, o, i) {
    for (var c = "", l = 0; l < r; l++)
      c += e[l](t, n, o, i) || "";
    return c;
  };
}
function ti(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function nn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ni = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = we(), o === 38 && i === 12 && (t[n] = 1), !Je(i); )
    me();
  return tr(r, ue);
}, oi = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Je(o)) {
      case 0:
        o === 38 && we() === 12 && (t[n] = 1), r[n] += ni(ue - 1, t, n);
        break;
      case 2:
        r[n] += dr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = we() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += Or(o);
    }
  while (o = me());
  return r;
}, ii = function(r, t) {
  return tn(oi(rn(r), t));
}, _t = /* @__PURE__ */ new WeakMap(), ai = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !_t.get(n)) && !o) {
      _t.set(r, !0);
      for (var i = [], c = ii(t, i), l = n.props, f = 0, d = 0; f < c.length; f++)
        for (var m = 0; m < l.length; m++, d++)
          r.props[d] = i[f] ? c[f].replace(/&\f/g, l[m]) : l[m] + " " + c[f];
    }
  }
}, si = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function on(e, r) {
  switch (Wo(e, r)) {
    // color-adjust
    case 5103:
      return W + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + yr + e + le + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return W + e + le + e + e;
    // order
    case 6165:
      return W + e + le + "flex-" + e + e;
    // align-items
    case 5187:
      return W + e + Y(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + le + "flex-$1$2") + e;
    // align-self
    case 5443:
      return W + e + le + "flex-item-" + Y(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return W + e + le + "flex-line-pack" + Y(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return W + e + le + Y(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return W + e + le + Y(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return W + "box-" + Y(e, "-grow", "") + W + e + le + Y(e, "grow", "positive") + e;
    // transition
    case 4554:
      return W + Y(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    // cursor
    case 6187:
      return Y(Y(Y(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, W + "$1$`$1");
    // justify-content
    case 4968:
      return Y(Y(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, W + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Se(e) - 1 - r > 6) switch (se(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (se(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Y(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + yr + (se(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Wr(e, "stretch") ? on(Y(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (se(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (se(e, Se(e) - 3 - (~Wr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Y(e, ":", ":" + W) + e;
        // (inline-)?fl(e)x
        case 101:
          return Y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + le + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (se(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return W + e + le + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return W + e + le + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return W + e + le + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + le + e + e;
  }
  return e;
}
var ci = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Qr:
      r.return = on(r.value, r.length);
      break;
    case Zt:
      return Ve([Ue(r, {
        value: Y(r.value, "@", "@" + W)
      })], o);
    case Zr:
      if (r.length) return Uo(r.props, function(i) {
        switch (Yo(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ve([Ue(r, {
              props: [Y(i, /:(read-\w+)/, ":" + yr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ve([Ue(r, {
              props: [Y(i, /:(plac\w+)/, ":" + W + "input-$1")]
            }), Ue(r, {
              props: [Y(i, /:(plac\w+)/, ":" + yr + "$1")]
            }), Ue(r, {
              props: [Y(i, /:(plac\w+)/, le + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, li = [ci], ui = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(s) {
      var S = s.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(s), s.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || li, i = {}, c, l = [];
  c = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(s) {
      for (var S = s.getAttribute("data-emotion").split(" "), w = 1; w < S.length; w++)
        i[S[w]] = !0;
      l.push(s);
    }
  );
  var f, d = [ai, si];
  {
    var m, p = [ei, ti(function(s) {
      m.insert(s);
    })], g = ri(d.concat(o, p)), E = function(S) {
      return Ve(Zo(S), g);
    };
    f = function(S, w, I, A) {
      m = I, E(S ? S + "{" + w.styles + "}" : w.styles), A && (v.inserted[w.name] = !0);
    };
  }
  var v = {
    key: t,
    sheet: new Do({
      key: t,
      container: c,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return v.sheet.hydrate(l), v;
}, fi = !0;
function di(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var an = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  fi === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, pi = function(r, t, n) {
  an(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function mi(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var hi = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, gi = /[A-Z]|^ms/g, yi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, sn = function(r) {
  return r.charCodeAt(1) === 45;
}, Ot = function(r) {
  return r != null && typeof r != "boolean";
}, Dr = /* @__PURE__ */ nn(function(e) {
  return sn(e) ? e : e.replace(gi, "-$&").toLowerCase();
}), Rt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(yi, function(n, o, i) {
          return Ee = {
            name: o,
            styles: i,
            next: Ee
          }, o;
        });
  }
  return hi[r] !== 1 && !sn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Ze(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Ee = {
          name: o.name,
          styles: o.styles,
          next: Ee
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var c = i.next;
        if (c !== void 0)
          for (; c !== void 0; )
            Ee = {
              name: c.name,
              styles: c.styles,
              next: Ee
            }, c = c.next;
        var l = i.styles + ";";
        return l;
      }
      return bi(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var f = Ee, d = t(e);
        return Ee = f, Ze(e, r, d);
      }
      break;
    }
  }
  var m = t;
  if (r == null)
    return m;
  var p = r[m];
  return p !== void 0 ? p : m;
}
function bi(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Ze(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var c = t[i];
      if (typeof c != "object") {
        var l = c;
        r != null && r[l] !== void 0 ? n += i + "{" + r[l] + "}" : Ot(l) && (n += Dr(i) + ":" + Rt(i, l) + ";");
      } else if (Array.isArray(c) && typeof c[0] == "string" && (r == null || r[c[0]] === void 0))
        for (var f = 0; f < c.length; f++)
          Ot(c[f]) && (n += Dr(i) + ":" + Rt(i, c[f]) + ";");
      else {
        var d = Ze(e, r, c);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Dr(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var kt = /label:\s*([^\s;{]+)\s*(;|$)/g, Ee;
function cn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ee = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Ze(t, r, i);
  else {
    var c = i;
    o += c[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Ze(t, r, e[l]), n) {
      var f = i;
      o += f[l];
    }
  kt.lastIndex = 0;
  for (var d = "", m; (m = kt.exec(o)) !== null; )
    d += "-" + m[1];
  var p = mi(o) + d;
  return {
    name: p,
    styles: o,
    next: Ee
  };
}
var vi = function(r) {
  return r();
}, Si = L.useInsertionEffect ? L.useInsertionEffect : !1, Ei = Si || vi, ln = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ui({
    key: "css"
  }) : null
);
ln.Provider;
var wi = function(r) {
  return /* @__PURE__ */ Tn(function(t, n) {
    var o = Cn(ln);
    return r(t, o, n);
  });
}, Ti = /* @__PURE__ */ L.createContext({}), Ci = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xi = /* @__PURE__ */ nn(
  function(e) {
    return Ci.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ai = xi, _i = function(r) {
  return r !== "theme";
}, $t = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ai : _i;
}, Pt = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(c) {
      return r.__emotion_forwardProp(c) && i(c);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Oi = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return an(t, n, o), Ei(function() {
    return pi(t, n, o);
  }), null;
}, Ri = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, c;
  t !== void 0 && (i = t.label, c = t.target);
  var l = Pt(r, t, n), f = l || $t(o), d = !f("as");
  return function() {
    var m = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      p.push.apply(p, m);
    else {
      var g = m[0];
      p.push(g[0]);
      for (var E = m.length, v = 1; v < E; v++)
        p.push(m[v], g[v]);
    }
    var s = wi(function(S, w, I) {
      var A = d && S.as || o, T = "", y = [], P = S;
      if (S.theme == null) {
        P = {};
        for (var R in S)
          P[R] = S[R];
        P.theme = L.useContext(Ti);
      }
      typeof S.className == "string" ? T = di(w.registered, y, S.className) : S.className != null && (T = S.className + " ");
      var Q = cn(p.concat(y), w.registered, P);
      T += w.key + "-" + Q.name, c !== void 0 && (T += " " + c);
      var ne = d && l === void 0 ? $t(A) : f, a = {};
      for (var C in S)
        d && C === "as" || ne(C) && (a[C] = S[C]);
      return a.className = T, I && (a.ref = I), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(Oi, {
        cache: w,
        serialized: Q,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ L.createElement(A, a));
    });
    return s.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", s.defaultProps = r.defaultProps, s.__emotion_real = s, s.__emotion_base = o, s.__emotion_styles = p, s.__emotion_forwardProp = l, Object.defineProperty(s, "toString", {
      value: function() {
        return "." + c;
      }
    }), s.withComponent = function(S, w) {
      var I = e(S, zr({}, t, w, {
        shouldForwardProp: Pt(s, w, !0)
      }));
      return I.apply(void 0, p);
    }, s;
  };
}, ki = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ur = Ri.bind(null);
ki.forEach(function(e) {
  Ur[e] = Ur(e);
});
/**
 * @mui/styled-engine v7.0.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function $i(e, r) {
  const t = Ur(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function Pi(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const It = [];
function Nt(e) {
  return It[0] = e, cn(It);
}
const Ii = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Ni(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = Ii(r), c = Object.keys(i);
  function l(g) {
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof r[g] == "number" ? r[g] : g) - n / 100}${t})`;
  }
  function d(g, E) {
    const v = c.indexOf(E);
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t}) and (max-width:${(v !== -1 && typeof r[c[v]] == "number" ? r[c[v]] : E) - n / 100}${t})`;
  }
  function m(g) {
    return c.indexOf(g) + 1 < c.length ? d(g, c[c.indexOf(g) + 1]) : l(g);
  }
  function p(g) {
    const E = c.indexOf(g);
    return E === 0 ? l(c[1]) : E === c.length - 1 ? f(c[E]) : d(g, c[c.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: i,
    up: l,
    down: f,
    between: d,
    only: m,
    not: p,
    unit: t,
    ...o
  };
}
const Mi = {
  borderRadius: 4
};
function un(e = 8, r = Xr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const c = r(i);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" "));
  return t.mui = !0, t;
}
function ji(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function fn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...c
  } = e, l = Ni(t), f = un(o);
  let d = pe({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Mi,
      ...i
    }
  }, c);
  return d = Un(d), d.applyStyles = ji, d = r.reduce((m, p) => pe(m, p), d), d.unstable_sxConfig = {
    ..._r,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return Le({
      sx: p,
      theme: this
    });
  }, d;
}
const Mt = (e) => e, Bi = () => {
  let e = Mt;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Mt;
    }
  };
}, Di = Bi(), Vi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function rt(e, r, t = "Mui") {
  const n = Vi[r];
  return n ? `${t}-${n}` : `${Di.generate(e)}-${r}`;
}
function Li(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = rt(e, o, t);
  }), n;
}
function dn(e, r = "") {
  return e.displayName || e.name || r;
}
function jt(e, r, t) {
  const n = dn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Fi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return dn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case hr.ForwardRef:
          return jt(e, e.render, "ForwardRef");
        case hr.Memo:
          return jt(e, e.type, "memo");
        default:
          return;
      }
  }
}
function pn(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Nt(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Nt(o.style));
  }), n;
}
const zi = fn();
function Vr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Wi(e) {
  return e ? (r, t) => t[e] : null;
}
function Yi(e, r, t) {
  e.theme = Gi(e.theme) ? t : e.theme[r] || e.theme;
}
function mr(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((n) => mr(e, n));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    let n;
    if (t.isProcessed)
      n = t.style;
    else {
      const {
        variants: o,
        ...i
      } = t;
      n = i;
    }
    return mn(e, t.variants, [n]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function mn(e, r, t = []) {
  var o;
  let n;
  e: for (let i = 0; i < r.length; i += 1) {
    const c = r[i];
    if (typeof c.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !c.props(n))
        continue;
    } else
      for (const l in c.props)
        if (e[l] !== c.props[l] && ((o = e.ownerState) == null ? void 0 : o[l]) !== c.props[l])
          continue e;
    typeof c.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(c.style(n))) : t.push(c.style);
  }
  return t;
}
function Ui(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = zi,
    rootShouldForwardProp: n = Vr,
    slotShouldForwardProp: o = Vr
  } = e;
  function i(l) {
    Yi(l, r, t);
  }
  return (l, f = {}) => {
    Pi(l, (y) => y.filter((P) => P !== Le));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = Wi(hn(m)),
      ...v
    } = f, s = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), S = g || !1;
    let w = Vr;
    m === "Root" || m === "root" ? w = n : m ? w = o : Ki(l) && (w = void 0);
    const I = $i(l, {
      shouldForwardProp: w,
      label: qi(d, m),
      ...v
    }), A = (y) => {
      if (typeof y == "function" && y.__emotion_real !== y)
        return function(R) {
          return mr(R, y);
        };
      if (Ce(y)) {
        const P = pn(y);
        return P.variants ? function(Q) {
          return mr(Q, P);
        } : P.style;
      }
      return y;
    }, T = (...y) => {
      const P = [], R = y.map(A), Q = [];
      if (P.push(i), d && E && Q.push(function(N) {
        var ie, fe;
        const J = (fe = (ie = N.theme.components) == null ? void 0 : ie[d]) == null ? void 0 : fe.styleOverrides;
        if (!J)
          return null;
        const ae = {};
        for (const ye in J)
          ae[ye] = mr(N, J[ye]);
        return E(N, ae);
      }), d && !s && Q.push(function(N) {
        var ae, ie;
        const F = N.theme, J = (ie = (ae = F == null ? void 0 : F.components) == null ? void 0 : ae[d]) == null ? void 0 : ie.variants;
        return J ? mn(N, J) : null;
      }), S || Q.push(Le), Array.isArray(R[0])) {
        const C = R.shift(), N = new Array(P.length).fill(""), F = new Array(Q.length).fill("");
        let J;
        J = [...N, ...C, ...F], J.raw = [...N, ...C.raw, ...F], P.unshift(J);
      }
      const ne = [...P, ...R, ...Q], a = I(...ne);
      return l.muiName && (a.muiName = l.muiName), process.env.NODE_ENV !== "production" && (a.displayName = Hi(d, m, l)), a;
    };
    return I.withConfig && (T.withConfig = I.withConfig), T;
  };
}
function Hi(e, r, t) {
  return e ? `${e}${$e(r || "")}` : `Styled(${Fi(t)})`;
}
function qi(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${hn(r || "Root")}`), t;
}
function Gi(e) {
  for (const r in e)
    return !1;
  return !0;
}
function Ki(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function hn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Hr(e, r) {
  const t = {
    ...r
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        t[o] = {
          ...e[o],
          ...t[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], c = r[o];
        if (!c)
          t[o] = i || {};
        else if (!i)
          t[o] = c;
        else {
          t[o] = {
            ...c
          };
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const f = l;
              t[o][f] = Hr(i[f], c[f]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function Xi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function tt(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Xi(e, r, t);
}
function Ji(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Oe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Oe(Ji(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : _e(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : _e(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Zi = (e) => {
  const r = Oe(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, qe = (e, r) => {
  try {
    return Zi(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function $r(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function gn(e) {
  e = Oe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), c = (d, m = (d + t / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let l = "rgb";
  const f = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (l += "a", f.push(r[3])), $r({
    type: l,
    values: f
  });
}
function qr(e) {
  e = Oe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Oe(gn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Bt(e, r) {
  const t = qr(e), n = qr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Qi(e, r) {
  return e = Oe(e), r = tt(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, $r(e);
}
function lr(e, r, t) {
  try {
    return Qi(e, r);
  } catch {
    return e;
  }
}
function nt(e, r) {
  if (e = Oe(e), r = tt(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return $r(e);
}
function K(e, r, t) {
  try {
    return nt(e, r);
  } catch {
    return e;
  }
}
function ot(e, r) {
  if (e = Oe(e), r = tt(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return $r(e);
}
function X(e, r, t) {
  try {
    return ot(e, r);
  } catch {
    return e;
  }
}
function ea(e, r = 0.15) {
  return qr(e) > 0.5 ? nt(e, r) : ot(e, r);
}
function ur(e, r, t) {
  try {
    return ea(e, r);
  } catch {
    return e;
  }
}
const ra = /* @__PURE__ */ L.createContext(void 0);
process.env.NODE_ENV !== "production" && (z.node, z.object);
function ta(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? Hr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Hr(o, n) : n;
}
function na({
  props: e,
  name: r
}) {
  const t = L.useContext(ra);
  return ta({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const Dt = {
  theme: void 0
};
function oa(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (Dt.theme = o.theme, i = pn(e(Dt)), r = i, t = o.theme), i;
  };
}
function ia(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const Vt = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, c) => {
    c === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, aa = (e, r, t) => {
  function n(o, i = [], c = []) {
    Object.entries(o).forEach(([l, f]) => {
      (!t || t && !t([...i, l])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, l], Array.isArray(f) ? [...c, l] : c) : r([...i, l], f, c));
    });
  }
  n(e);
}, sa = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Lr(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, c = {};
  return aa(
    e,
    (l, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(l, f))) {
        const m = `--${t ? `${t}-` : ""}${l.join("-")}`, p = sa(l, f);
        Object.assign(o, {
          [m]: p
        }), Vt(i, l, `var(${m})`, d), Vt(c, l, `var(${m}, ${p})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: c
  };
}
function ca(e, r = {}) {
  const {
    getSelector: t = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: c,
    defaultColorScheme: l = "light",
    ...f
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: p
  } = Lr(f, r);
  let g = p;
  const E = {}, {
    [l]: v,
    ...s
  } = i;
  if (Object.entries(s || {}).forEach(([A, T]) => {
    const {
      vars: y,
      css: P,
      varsWithDefaults: R
    } = Lr(T, r);
    g = pe(g, R), E[A] = {
      css: P,
      vars: y
    };
  }), v) {
    const {
      css: A,
      vars: T,
      varsWithDefaults: y
    } = Lr(v, r);
    g = pe(g, y), E[l] = {
      css: A,
      vars: T
    };
  }
  function S(A, T) {
    var P, R;
    let y = o;
    if (o === "class" && (y = ".%s"), o === "data" && (y = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (y = `[${o}="%s"]`), A) {
      if (y === "media")
        return e.defaultColorScheme === A ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (P = i[A]) == null ? void 0 : P.palette) == null ? void 0 : R.mode) || A})`]: {
            ":root": T
          }
        };
      if (y)
        return e.defaultColorScheme === A ? `:root, ${y.replace("%s", String(A))}` : y.replace("%s", String(A));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let A = {
        ...d
      };
      return Object.entries(E).forEach(([, {
        vars: T
      }]) => {
        A = pe(A, T);
      }), A;
    },
    generateStyleSheets: () => {
      var Q, ne;
      const A = [], T = e.defaultColorScheme || "light";
      function y(a, C) {
        Object.keys(C).length && A.push(typeof a == "string" ? {
          [a]: {
            ...C
          }
        } : a);
      }
      y(t(void 0, {
        ...m
      }), m);
      const {
        [T]: P,
        ...R
      } = E;
      if (P) {
        const {
          css: a
        } = P, C = (ne = (Q = i[T]) == null ? void 0 : Q.palette) == null ? void 0 : ne.mode, N = !n && C ? {
          colorScheme: C,
          ...a
        } : {
          ...a
        };
        y(t(T, {
          ...N
        }), N);
      }
      return Object.entries(R).forEach(([a, {
        css: C
      }]) => {
        var J, ae;
        const N = (ae = (J = i[a]) == null ? void 0 : J.palette) == null ? void 0 : ae.mode, F = !n && N ? {
          colorScheme: N,
          ...C
        } : {
          ...C
        };
        y(t(a, {
          ...F
        }), F);
      }), A;
    }
  };
}
function la(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Qe = {
  black: "#000",
  white: "#fff"
}, ua = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ie = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ne = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, He = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Me = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, je = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Be = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function yn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Qe.white,
      default: Qe.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const fa = yn();
function bn() {
  return {
    text: {
      primary: Qe.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Qe.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Lt = bn();
function Ft(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = ot(e.main, o) : r === "dark" && (e.dark = nt(e.main, i)));
}
function da(e = "light") {
  return e === "dark" ? {
    main: Me[200],
    light: Me[50],
    dark: Me[400]
  } : {
    main: Me[700],
    light: Me[400],
    dark: Me[800]
  };
}
function pa(e = "light") {
  return e === "dark" ? {
    main: Ie[200],
    light: Ie[50],
    dark: Ie[400]
  } : {
    main: Ie[500],
    light: Ie[300],
    dark: Ie[700]
  };
}
function ma(e = "light") {
  return e === "dark" ? {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: Ne[700],
    light: Ne[400],
    dark: Ne[800]
  };
}
function ha(e = "light") {
  return e === "dark" ? {
    main: je[400],
    light: je[300],
    dark: je[700]
  } : {
    main: je[700],
    light: je[500],
    dark: je[900]
  };
}
function ga(e = "light") {
  return e === "dark" ? {
    main: Be[400],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[800],
    light: Be[500],
    dark: Be[900]
  };
}
function ya(e = "light") {
  return e === "dark" ? {
    main: He[400],
    light: He[300],
    dark: He[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: He[500],
    dark: He[900]
  };
}
function it(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || da(r), c = e.secondary || pa(r), l = e.error || ma(r), f = e.info || ha(r), d = e.success || ga(r), m = e.warning || ya(r);
  function p(s) {
    const S = Bt(s, Lt.text.primary) >= t ? Lt.text.primary : fa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Bt(s, S);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${S} on ${s}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: s,
    name: S,
    mainShade: w = 500,
    lightShade: I = 300,
    darkShade: A = 700
  }) => {
    if (s = {
      ...s
    }, !s.main && s[w] && (s.main = s[w]), !s.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : _e(11, S ? ` (${S})` : "", w));
    if (typeof s.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(s.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : _e(12, S ? ` (${S})` : "", JSON.stringify(s.main)));
    return Ft(s, "light", I, n), Ft(s, "dark", A, n), s.contrastText || (s.contrastText = p(s.main)), s;
  };
  let E;
  return r === "light" ? E = yn() : r === "dark" && (E = bn()), process.env.NODE_ENV !== "production" && (E || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), pe({
    // A collection of common colors.
    common: {
      ...Qe
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: ua,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...E
  }, o);
}
function ba(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function va(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function Sa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zt = {
  textTransform: "uppercase"
}, Wt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ea(e, r) {
  const {
    fontFamily: t = Wt,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...p
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, E = m || ((S) => `${S / f * g}rem`), v = (S, w, I, A, T) => ({
    fontFamily: t,
    fontWeight: S,
    fontSize: E(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === Wt ? {
      letterSpacing: `${Sa(A / w)}em`
    } : {},
    ...T,
    ...d
  }), s = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(c, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(c, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(c, 14, 1.75, 0.4, zt),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, zt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pe({
    htmlFontSize: f,
    pxToRem: E,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: c,
    fontWeightBold: l,
    ...s
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const wa = 0.2, Ta = 0.14, Ca = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ta})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ca})`].join(",");
}
const xa = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Aa = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, _a = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Yt(e) {
  return `${Math.round(e)}ms`;
}
function Oa(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Ra(e) {
  const r = {
    ...Aa,
    ...e.easing
  }, t = {
    ..._a,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Oa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: c = t.standard,
        easing: l = r.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(c) && !m(c) && console.error(`MUI: Argument "duration" must be a number or a string but found ${c}.`), m(l) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof c == "string" ? c : Yt(c)} ${l} ${typeof f == "string" ? f : Yt(f)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const ka = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function $a(e) {
  return Ce(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function vn(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [c, l] = o[i];
      !$a(l) || c.startsWith("unstable_") ? delete n[c] : Ce(l) && (n[c] = {
        ...l
      }, t(n[c]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Gr(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: c = {},
    typography: l = {},
    shape: f,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : _e(20));
  const m = it(i), p = fn(e);
  let g = pe(p, {
    mixins: va(p.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xa.slice(),
    typography: Ea(m, l),
    transitions: Ra(c),
    zIndex: {
      ...ka
    }
  });
  if (g = pe(g, d), g = r.reduce((E, v) => pe(E, v), g), process.env.NODE_ENV !== "production") {
    const E = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (s, S) => {
      let w;
      for (w in s) {
        const I = s[w];
        if (E.includes(w) && Object.keys(I).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const A = rt("", w);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(s, null, 2), "", `Instead, you need to use the '&.${A}' syntax:`, JSON.stringify({
              root: {
                [`&.${A}`]: I
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          s[w] = {};
        }
      }
    };
    Object.keys(g.components).forEach((s) => {
      const S = g.components[s].styleOverrides;
      S && s.startsWith("Mui") && v(S, s);
    });
  }
  return g.unstable_sxConfig = {
    ..._r,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return Le({
      sx: v,
      theme: this
    });
  }, g.toRuntimeSource = vn, g;
}
function Pa(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Ia = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Pa(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function Sn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function En(e) {
  return e === "dark" ? Ia : [];
}
function Na(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = it(r);
  return {
    palette: i,
    opacity: {
      ...Sn(i.mode),
      ...t
    },
    overlays: n || En(i.mode),
    ...o
  };
}
function Ma(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ja = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ba = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const c = {};
      return ja(e.cssVarPrefix).forEach((l) => {
        c[l] = t[l], delete t[l];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: c
        }
      } : i ? {
        [i.replace("%s", r)]: c,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...c
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Da(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function h(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Ge(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : gn(e);
}
function Te(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = qe(Ge(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Va(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ve = (e) => {
  try {
    return e();
  } catch {
  }
}, La = (e = "mui") => ia(e);
function Fr(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = Na({
      ...r,
      palette: {
        mode: o,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...c
  } = Gr({
    ...t,
    palette: {
      mode: o,
      ...r == null ? void 0 : r.palette
    }
  });
  return e[n] = {
    ...r,
    palette: i,
    opacity: {
      ...Sn(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || En(o)
  }, c;
}
function Fa(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: c = Ma,
    colorSchemeSelector: l = t.light && t.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, m = Object.keys(t)[0], p = n || (t.light && m !== "light" ? "light" : m), g = La(i), {
    [p]: E,
    light: v,
    dark: s,
    ...S
  } = t, w = {
    ...S
  };
  let I = E;
  if ((p === "dark" && !("dark" in t) || p === "light" && !("light" in t)) && (I = !0), !I)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : _e(21, p));
  const A = Fr(w, I, d, p);
  v && !w.light && Fr(w, v, void 0, "light"), s && !w.dark && Fr(w, s, void 0, "dark");
  let T = {
    defaultColorScheme: p,
    ...A,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: f,
    getCssVar: g,
    colorSchemes: w,
    font: {
      ...ba(A.typography),
      ...A.font
    },
    spacing: Va(d.spacing)
  };
  Object.keys(T.colorSchemes).forEach((ne) => {
    const a = T.colorSchemes[ne].palette, C = (N) => {
      const F = N.split("-"), J = F[1], ae = F[2];
      return g(N, a[J][ae]);
    };
    if (a.mode === "light" && (h(a.common, "background", "#fff"), h(a.common, "onBackground", "#000")), a.mode === "dark" && (h(a.common, "background", "#000"), h(a.common, "onBackground", "#fff")), Da(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      h(a.Alert, "errorColor", K(a.error.light, 0.6)), h(a.Alert, "infoColor", K(a.info.light, 0.6)), h(a.Alert, "successColor", K(a.success.light, 0.6)), h(a.Alert, "warningColor", K(a.warning.light, 0.6)), h(a.Alert, "errorFilledBg", C("palette-error-main")), h(a.Alert, "infoFilledBg", C("palette-info-main")), h(a.Alert, "successFilledBg", C("palette-success-main")), h(a.Alert, "warningFilledBg", C("palette-warning-main")), h(a.Alert, "errorFilledColor", ve(() => a.getContrastText(a.error.main))), h(a.Alert, "infoFilledColor", ve(() => a.getContrastText(a.info.main))), h(a.Alert, "successFilledColor", ve(() => a.getContrastText(a.success.main))), h(a.Alert, "warningFilledColor", ve(() => a.getContrastText(a.warning.main))), h(a.Alert, "errorStandardBg", X(a.error.light, 0.9)), h(a.Alert, "infoStandardBg", X(a.info.light, 0.9)), h(a.Alert, "successStandardBg", X(a.success.light, 0.9)), h(a.Alert, "warningStandardBg", X(a.warning.light, 0.9)), h(a.Alert, "errorIconColor", C("palette-error-main")), h(a.Alert, "infoIconColor", C("palette-info-main")), h(a.Alert, "successIconColor", C("palette-success-main")), h(a.Alert, "warningIconColor", C("palette-warning-main")), h(a.AppBar, "defaultBg", C("palette-grey-100")), h(a.Avatar, "defaultBg", C("palette-grey-400")), h(a.Button, "inheritContainedBg", C("palette-grey-300")), h(a.Button, "inheritContainedHoverBg", C("palette-grey-A100")), h(a.Chip, "defaultBorder", C("palette-grey-400")), h(a.Chip, "defaultAvatarColor", C("palette-grey-700")), h(a.Chip, "defaultIconColor", C("palette-grey-700")), h(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), h(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), h(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), h(a.LinearProgress, "primaryBg", X(a.primary.main, 0.62)), h(a.LinearProgress, "secondaryBg", X(a.secondary.main, 0.62)), h(a.LinearProgress, "errorBg", X(a.error.main, 0.62)), h(a.LinearProgress, "infoBg", X(a.info.main, 0.62)), h(a.LinearProgress, "successBg", X(a.success.main, 0.62)), h(a.LinearProgress, "warningBg", X(a.warning.main, 0.62)), h(a.Skeleton, "bg", `rgba(${C("palette-text-primaryChannel")} / 0.11)`), h(a.Slider, "primaryTrack", X(a.primary.main, 0.62)), h(a.Slider, "secondaryTrack", X(a.secondary.main, 0.62)), h(a.Slider, "errorTrack", X(a.error.main, 0.62)), h(a.Slider, "infoTrack", X(a.info.main, 0.62)), h(a.Slider, "successTrack", X(a.success.main, 0.62)), h(a.Slider, "warningTrack", X(a.warning.main, 0.62));
      const N = ur(a.background.default, 0.8);
      h(a.SnackbarContent, "bg", N), h(a.SnackbarContent, "color", ve(() => a.getContrastText(N))), h(a.SpeedDialAction, "fabHoverBg", ur(a.background.paper, 0.15)), h(a.StepConnector, "border", C("palette-grey-400")), h(a.StepContent, "border", C("palette-grey-400")), h(a.Switch, "defaultColor", C("palette-common-white")), h(a.Switch, "defaultDisabledColor", C("palette-grey-100")), h(a.Switch, "primaryDisabledColor", X(a.primary.main, 0.62)), h(a.Switch, "secondaryDisabledColor", X(a.secondary.main, 0.62)), h(a.Switch, "errorDisabledColor", X(a.error.main, 0.62)), h(a.Switch, "infoDisabledColor", X(a.info.main, 0.62)), h(a.Switch, "successDisabledColor", X(a.success.main, 0.62)), h(a.Switch, "warningDisabledColor", X(a.warning.main, 0.62)), h(a.TableCell, "border", X(lr(a.divider, 1), 0.88)), h(a.Tooltip, "bg", lr(a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      h(a.Alert, "errorColor", X(a.error.light, 0.6)), h(a.Alert, "infoColor", X(a.info.light, 0.6)), h(a.Alert, "successColor", X(a.success.light, 0.6)), h(a.Alert, "warningColor", X(a.warning.light, 0.6)), h(a.Alert, "errorFilledBg", C("palette-error-dark")), h(a.Alert, "infoFilledBg", C("palette-info-dark")), h(a.Alert, "successFilledBg", C("palette-success-dark")), h(a.Alert, "warningFilledBg", C("palette-warning-dark")), h(a.Alert, "errorFilledColor", ve(() => a.getContrastText(a.error.dark))), h(a.Alert, "infoFilledColor", ve(() => a.getContrastText(a.info.dark))), h(a.Alert, "successFilledColor", ve(() => a.getContrastText(a.success.dark))), h(a.Alert, "warningFilledColor", ve(() => a.getContrastText(a.warning.dark))), h(a.Alert, "errorStandardBg", K(a.error.light, 0.9)), h(a.Alert, "infoStandardBg", K(a.info.light, 0.9)), h(a.Alert, "successStandardBg", K(a.success.light, 0.9)), h(a.Alert, "warningStandardBg", K(a.warning.light, 0.9)), h(a.Alert, "errorIconColor", C("palette-error-main")), h(a.Alert, "infoIconColor", C("palette-info-main")), h(a.Alert, "successIconColor", C("palette-success-main")), h(a.Alert, "warningIconColor", C("palette-warning-main")), h(a.AppBar, "defaultBg", C("palette-grey-900")), h(a.AppBar, "darkBg", C("palette-background-paper")), h(a.AppBar, "darkColor", C("palette-text-primary")), h(a.Avatar, "defaultBg", C("palette-grey-600")), h(a.Button, "inheritContainedBg", C("palette-grey-800")), h(a.Button, "inheritContainedHoverBg", C("palette-grey-700")), h(a.Chip, "defaultBorder", C("palette-grey-700")), h(a.Chip, "defaultAvatarColor", C("palette-grey-300")), h(a.Chip, "defaultIconColor", C("palette-grey-300")), h(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), h(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), h(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), h(a.LinearProgress, "primaryBg", K(a.primary.main, 0.5)), h(a.LinearProgress, "secondaryBg", K(a.secondary.main, 0.5)), h(a.LinearProgress, "errorBg", K(a.error.main, 0.5)), h(a.LinearProgress, "infoBg", K(a.info.main, 0.5)), h(a.LinearProgress, "successBg", K(a.success.main, 0.5)), h(a.LinearProgress, "warningBg", K(a.warning.main, 0.5)), h(a.Skeleton, "bg", `rgba(${C("palette-text-primaryChannel")} / 0.13)`), h(a.Slider, "primaryTrack", K(a.primary.main, 0.5)), h(a.Slider, "secondaryTrack", K(a.secondary.main, 0.5)), h(a.Slider, "errorTrack", K(a.error.main, 0.5)), h(a.Slider, "infoTrack", K(a.info.main, 0.5)), h(a.Slider, "successTrack", K(a.success.main, 0.5)), h(a.Slider, "warningTrack", K(a.warning.main, 0.5));
      const N = ur(a.background.default, 0.98);
      h(a.SnackbarContent, "bg", N), h(a.SnackbarContent, "color", ve(() => a.getContrastText(N))), h(a.SpeedDialAction, "fabHoverBg", ur(a.background.paper, 0.15)), h(a.StepConnector, "border", C("palette-grey-600")), h(a.StepContent, "border", C("palette-grey-600")), h(a.Switch, "defaultColor", C("palette-grey-300")), h(a.Switch, "defaultDisabledColor", C("palette-grey-600")), h(a.Switch, "primaryDisabledColor", K(a.primary.main, 0.55)), h(a.Switch, "secondaryDisabledColor", K(a.secondary.main, 0.55)), h(a.Switch, "errorDisabledColor", K(a.error.main, 0.55)), h(a.Switch, "infoDisabledColor", K(a.info.main, 0.55)), h(a.Switch, "successDisabledColor", K(a.success.main, 0.55)), h(a.Switch, "warningDisabledColor", K(a.warning.main, 0.55)), h(a.TableCell, "border", K(lr(a.divider, 1), 0.68)), h(a.Tooltip, "bg", lr(a.grey[700], 0.92));
    }
    Te(a.background, "default"), Te(a.background, "paper"), Te(a.common, "background"), Te(a.common, "onBackground"), Te(a, "divider"), Object.keys(a).forEach((N) => {
      const F = a[N];
      N !== "tonalOffset" && F && typeof F == "object" && (F.main && h(a[N], "mainChannel", qe(Ge(F.main))), F.light && h(a[N], "lightChannel", qe(Ge(F.light))), F.dark && h(a[N], "darkChannel", qe(Ge(F.dark))), F.contrastText && h(a[N], "contrastTextChannel", qe(Ge(F.contrastText))), N === "text" && (Te(a[N], "primary"), Te(a[N], "secondary")), N === "action" && (F.active && Te(a[N], "active"), F.selected && Te(a[N], "selected")));
    });
  }), T = r.reduce((ne, a) => pe(ne, a), T);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: Ba(T)
  }, {
    vars: P,
    generateThemeVars: R,
    generateStyleSheets: Q
  } = ca(T, y);
  return T.vars = P, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([ne, a]) => {
    T[ne] = a;
  }), T.generateThemeVars = R, T.generateStyleSheets = Q, T.generateSpacing = function() {
    return un(d.spacing, Xr(this));
  }, T.getColorSchemeSelector = la(l), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = c, T.unstable_sxConfig = {
    ..._r,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, T.unstable_sx = function(a) {
    return Le({
      sx: a,
      theme: this
    });
  }, T.toRuntimeSource = vn, T;
}
function Ut(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: it({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function za(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...c
  } = e, l = i || "light", f = o == null ? void 0 : o[l], d = {
    ...o,
    ...t ? {
      [l]: {
        ...typeof f != "boolean" && f,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Gr(e, ...r);
    let m = t;
    "palette" in e || d[l] && (d[l] !== !0 ? m = d[l].palette : l === "dark" && (m = {
      mode: "dark"
    }));
    const p = Gr({
      ...e,
      palette: m
    }, ...r);
    return p.defaultColorScheme = l, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Ut(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Ut(p, "light", d.light)), p;
  }
  return !t && !("light" in d) && l === "light" && (d.light = !0), Fa({
    ...c,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...r);
}
const Wa = za(), Ya = "$$material";
function Ua(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ha = (e) => Ua(e) && e !== "classes", qa = Ui({
  themeId: Ya,
  defaultTheme: Wa,
  rootShouldForwardProp: Ha
}), Ga = oa;
process.env.NODE_ENV !== "production" && (z.node, z.object.isRequired);
function Ka(e) {
  return na(e);
}
function Xa(e) {
  return rt("MuiSvgIcon", e);
}
Li("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ja = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${$e(r)}`, `fontSize${$e(t)}`]
  };
  return Dn(o, Xa, n);
}, Za = qa("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${$e(t.color)}`], r[`fontSize${$e(t.fontSize)}`]];
  }
})(Ga(({
  theme: e
}) => {
  var r, t, n, o, i, c, l, f, d, m, p, g, E, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (s) => !s.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((c = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : c.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : f.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, s]) => s && s.main).map(([s]) => {
        var S, w;
        return {
          props: {
            color: s
          },
          style: {
            color: (w = (S = (e.vars ?? e).palette) == null ? void 0 : S[s]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (E = (e.vars ?? e).palette) == null ? void 0 : E.action) == null ? void 0 : v.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), ke = /* @__PURE__ */ L.forwardRef(function(r, t) {
  const n = Ka({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: c = "inherit",
    component: l = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...E
  } = n, v = /* @__PURE__ */ L.isValidElement(o) && o.type === "svg", s = {
    ...n,
    color: c,
    component: l,
    fontSize: f,
    instanceFontSize: r.fontSize,
    inheritViewBox: m,
    viewBox: g,
    hasSvgAsChild: v
  }, S = {};
  m || (S.viewBox = g);
  const w = Ja(s);
  return /* @__PURE__ */ Ae.jsxs(Za, {
    as: l,
    className: Bn(w.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: t,
    ...S,
    ...E,
    ...v && o.props,
    ownerState: s,
    children: [v ? o.props.children : o, p ? /* @__PURE__ */ Ae.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ke.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: z.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: z.object,
  /**
   * @ignore
   */
  className: z.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: z.oneOfType([z.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), z.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: z.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: z.oneOfType([z.oneOf(["inherit", "large", "medium", "small"]), z.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: z.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: z.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: z.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: z.oneOfType([z.arrayOf(z.oneOfType([z.func, z.object, z.bool])), z.func, z.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: z.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: z.string
});
ke.muiName = "SvgIcon";
const Qa = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "account"), /* @__PURE__ */ L.createElement("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" })), as = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: Qa,
    inheritViewBox: !0,
    "data-testid": "AccountIcon",
    ...e
  }
), es = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "autorenew"), /* @__PURE__ */ L.createElement("path", { d: "M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" })), ss = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: es,
    inheritViewBox: !0,
    "data-testid": "AutorenewIcon",
    ...e
  }
), rs = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "content-copy"), /* @__PURE__ */ L.createElement("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })), cs = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: rs,
    inheritViewBox: !0,
    "data-testid": "ContentCopyIcon",
    ...e
  }
), ts = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "home"), /* @__PURE__ */ L.createElement("path", { d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" })), ls = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: ts,
    inheritViewBox: !0,
    "data-testid": "HomeIcon",
    ...e
  }
), ns = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "open-in-new"), /* @__PURE__ */ L.createElement("path", { d: "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" })), us = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: ns,
    inheritViewBox: !0,
    "data-testid": "OpenInNewIcon",
    ...e
  }
), os = (e) => /* @__PURE__ */ L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ L.createElement("title", null, "pencil"), /* @__PURE__ */ L.createElement("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" })), fs = (e) => /* @__PURE__ */ Ae.jsx(
  ke,
  {
    component: os,
    inheritViewBox: !0,
    "data-testid": "PencilIcon",
    ...e
  }
);
export {
  as as AccountIcon,
  ss as AutorenewIcon,
  cs as ContentCopyIcon,
  ls as HomeIcon,
  us as OpenInNewIcon,
  fs as PencilIcon
};
