(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const i = {};
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i);
    }
})();
function sc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ku = { exports: {} },
    el = {},
    Yu = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
    ac = Symbol.for("react.portal"),
    cc = Symbol.for("react.fragment"),
    fc = Symbol.for("react.strict_mode"),
    dc = Symbol.for("react.profiler"),
    pc = Symbol.for("react.provider"),
    mc = Symbol.for("react.context"),
    hc = Symbol.for("react.forward_ref"),
    vc = Symbol.for("react.suspense"),
    gc = Symbol.for("react.memo"),
    yc = Symbol.for("react.lazy"),
    Fo = Symbol.iterator;
function xc(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Fo && e[Fo]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Xu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Gu = Object.assign,
    Zu = {};
function rn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Zu),
        (this.updater = n || Xu);
}
rn.prototype.isReactComponent = {};
rn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
rn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = rn.prototype;
function $i(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Zu),
        (this.updater = n || Xu);
}
var Ai = ($i.prototype = new Ju());
Ai.constructor = $i;
Gu(Ai, rn.prototype);
Ai.isPureReactComponent = !0;
var Io = Array.isArray,
    qu = Object.prototype.hasOwnProperty,
    Vi = { current: null },
    bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            qu.call(t, r) && !bu.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Xn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Vi.current,
    };
}
function wc(e, t) {
    return {
        $$typeof: Xn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Bi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function kc(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Uo = /\/+/g;
function wl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? kc("" + e.key)
        : t.toString(36);
}
function yr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Xn:
                    case ac:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (l = l(o)),
            (e = r === "" ? "." + wl(o, 0) : r),
            Io(l)
                ? ((n = ""),
                  e != null && (n = e.replace(Uo, "$&/") + "/"),
                  yr(l, t, n, "", function (c) {
                      return c;
                  }))
                : l != null &&
                  (Bi(l) &&
                      (l = wc(
                          l,
                          n +
                              (!l.key || (o && o.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(Uo, "$&/") + "/") +
                              e
                      )),
                  t.push(l)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Io(e)))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + wl(i, u);
            o += yr(i, t, n, s, l);
        }
    else if (((s = xc(e)), typeof s == "function"))
        for (e = s.call(e), u = 0; !(i = e.next()).done; )
            (i = i.value), (s = r + wl(i, u++)), (o += yr(i, t, n, s, l));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function tr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        yr(e, r, "", "", function (i) {
            return t.call(n, i, l++);
        }),
        r
    );
}
function Sc(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ue = { current: null },
    xr = { transition: null },
    Ec = {
        ReactCurrentDispatcher: ue,
        ReactCurrentBatchConfig: xr,
        ReactCurrentOwner: Vi,
    };
L.Children = {
    map: tr,
    forEach: function (e, t, n) {
        tr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            tr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            tr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Bi(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
L.Component = rn;
L.Fragment = cc;
L.Profiler = dc;
L.PureComponent = $i;
L.StrictMode = fc;
L.Suspense = vc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ec;
L.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Gu({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = Vi.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in t)
            qu.call(t, s) &&
                !bu.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
    }
    return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
    return (
        (e = {
            $$typeof: mc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: pc, _context: e }),
        (e.Consumer = e)
    );
};
L.createElement = es;
L.createFactory = function (e) {
    var t = es.bind(null, e);
    return (t.type = e), t;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (e) {
    return { $$typeof: hc, render: e };
};
L.isValidElement = Bi;
L.lazy = function (e) {
    return { $$typeof: yc, _payload: { _status: -1, _result: e }, _init: Sc };
};
L.memo = function (e, t) {
    return { $$typeof: gc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
    var t = xr.transition;
    xr.transition = {};
    try {
        e();
    } finally {
        xr.transition = t;
    }
};
L.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
    return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
    return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
    return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
    return ue.current.useEffect(e, t);
};
L.useId = function () {
    return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
    return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
    return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
    return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
    return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
    return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
    return ue.current.useRef(e);
};
L.useState = function (e) {
    return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
    return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
    return ue.current.useTransition();
};
L.version = "18.2.0";
Yu.exports = L;
var tl = Yu.exports;
const Nc = sc(tl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = tl,
    _c = Symbol.for("react.element"),
    jc = Symbol.for("react.fragment"),
    Pc = Object.prototype.hasOwnProperty,
    zc =
        Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t) Pc.call(t, r) && !Lc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: _c,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: zc.current,
    };
}
el.Fragment = jc;
el.jsx = ts;
el.jsxs = ts;
Ku.exports = el;
var p = Ku.exports,
    Kl = {},
    ns = { exports: {} },
    ye = {},
    rs = { exports: {} },
    ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(N, P) {
        var z = N.length;
        N.push(P);
        e: for (; 0 < z; ) {
            var W = (z - 1) >>> 1,
                G = N[W];
            if (0 < l(G, P)) (N[W] = P), (N[z] = G), (z = W);
            else break e;
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0];
    }
    function r(N) {
        if (N.length === 0) return null;
        var P = N[0],
            z = N.pop();
        if (z !== P) {
            N[0] = z;
            e: for (var W = 0, G = N.length, bn = G >>> 1; W < bn; ) {
                var ht = 2 * (W + 1) - 1,
                    xl = N[ht],
                    vt = ht + 1,
                    er = N[vt];
                if (0 > l(xl, z))
                    vt < G && 0 > l(er, xl)
                        ? ((N[W] = er), (N[vt] = z), (W = vt))
                        : ((N[W] = xl), (N[ht] = z), (W = ht));
                else if (vt < G && 0 > l(er, z))
                    (N[W] = er), (N[vt] = z), (W = vt);
                else break e;
            }
        }
        return P;
    }
    function l(N, P) {
        var z = N.sortIndex - P.sortIndex;
        return z !== 0 ? z : N.id - P.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    var s = [],
        c = [],
        v = 1,
        h = null,
        m = 3,
        x = !1,
        w = !1,
        k = !1,
        I = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(N) {
        for (var P = n(c); P !== null; ) {
            if (P.callback === null) r(c);
            else if (P.startTime <= N)
                r(c), (P.sortIndex = P.expirationTime), t(s, P);
            else break;
            P = n(c);
        }
    }
    function g(N) {
        if (((k = !1), d(N), !w))
            if (n(s) !== null) (w = !0), gl(E);
            else {
                var P = n(c);
                P !== null && yl(g, P.startTime - N);
            }
    }
    function E(N, P) {
        (w = !1), k && ((k = !1), f(j), (j = -1)), (x = !0);
        var z = m;
        try {
            for (
                d(P), h = n(s);
                h !== null && (!(h.expirationTime > P) || (N && !_e()));

            ) {
                var W = h.callback;
                if (typeof W == "function") {
                    (h.callback = null), (m = h.priorityLevel);
                    var G = W(h.expirationTime <= P);
                    (P = e.unstable_now()),
                        typeof G == "function"
                            ? (h.callback = G)
                            : h === n(s) && r(s),
                        d(P);
                } else r(s);
                h = n(s);
            }
            if (h !== null) var bn = !0;
            else {
                var ht = n(c);
                ht !== null && yl(g, ht.startTime - P), (bn = !1);
            }
            return bn;
        } finally {
            (h = null), (m = z), (x = !1);
        }
    }
    var C = !1,
        _ = null,
        j = -1,
        H = 5,
        T = -1;
    function _e() {
        return !(e.unstable_now() - T < H);
    }
    function un() {
        if (_ !== null) {
            var N = e.unstable_now();
            T = N;
            var P = !0;
            try {
                P = _(!0, N);
            } finally {
                P ? sn() : ((C = !1), (_ = null));
            }
        } else C = !1;
    }
    var sn;
    if (typeof a == "function")
        sn = function () {
            a(un);
        };
    else if (typeof MessageChannel < "u") {
        var Do = new MessageChannel(),
            uc = Do.port2;
        (Do.port1.onmessage = un),
            (sn = function () {
                uc.postMessage(null);
            });
    } else
        sn = function () {
            I(un, 0);
        };
    function gl(N) {
        (_ = N), C || ((C = !0), sn());
    }
    function yl(N, P) {
        j = I(function () {
            N(e.unstable_now());
        }, P);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (N) {
            N.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || x || ((w = !0), gl(E));
        }),
        (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (H = 0 < N ? Math.floor(1e3 / N) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (N) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = m;
            }
            var z = m;
            m = P;
            try {
                return N();
            } finally {
                m = z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (N, P) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3;
            }
            var z = m;
            m = N;
            try {
                return P();
            } finally {
                m = z;
            }
        }),
        (e.unstable_scheduleCallback = function (N, P, z) {
            var W = e.unstable_now();
            switch (
                (typeof z == "object" && z !== null
                    ? ((z = z.delay),
                      (z = typeof z == "number" && 0 < z ? W + z : W))
                    : (z = W),
                N)
            ) {
                case 1:
                    var G = -1;
                    break;
                case 2:
                    G = 250;
                    break;
                case 5:
                    G = 1073741823;
                    break;
                case 4:
                    G = 1e4;
                    break;
                default:
                    G = 5e3;
            }
            return (
                (G = z + G),
                (N = {
                    id: v++,
                    callback: P,
                    priorityLevel: N,
                    startTime: z,
                    expirationTime: G,
                    sortIndex: -1,
                }),
                z > W
                    ? ((N.sortIndex = z),
                      t(c, N),
                      n(s) === null &&
                          N === n(c) &&
                          (k ? (f(j), (j = -1)) : (k = !0), yl(g, z - W)))
                    : ((N.sortIndex = G), t(s, N), w || x || ((w = !0), gl(E))),
                N
            );
        }),
        (e.unstable_shouldYield = _e),
        (e.unstable_wrapCallback = function (N) {
            var P = m;
            return function () {
                var z = m;
                m = P;
                try {
                    return N.apply(this, arguments);
                } finally {
                    m = z;
                }
            };
        });
})(ls);
rs.exports = ls;
var Tc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = tl,
    ge = Tc;
function y(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var os = new Set(),
    Ln = {};
function zt(e, t) {
    Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
    for (Ln[e] = t, e = 0; e < t.length; e++) os.add(t[e]);
}
var We = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Yl = Object.prototype.hasOwnProperty,
    Rc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $o = {},
    Ao = {};
function Oc(e) {
    return Yl.call(Ao, e)
        ? !0
        : Yl.call($o, e)
        ? !1
        : Rc.test(e)
        ? (Ao[e] = !0)
        : (($o[e] = !0), !1);
}
function Mc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Dc(e, t, n, r) {
    if (t === null || typeof t > "u" || Mc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function se(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ee[e] = new se(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hi = /[\-:]([a-z])/g;
function Wi(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Hi, Wi);
        ee[t] = new se(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Hi, Wi);
        ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Hi, Wi);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Dc(t, n, l, r) && (n = null),
        r || l === null
            ? Oc(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((l = l.type),
                    (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nr = Symbol.for("react.element"),
    Rt = Symbol.for("react.portal"),
    Ot = Symbol.for("react.fragment"),
    Ki = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    us = Symbol.for("react.provider"),
    ss = Symbol.for("react.context"),
    Yi = Symbol.for("react.forward_ref"),
    Gl = Symbol.for("react.suspense"),
    Zl = Symbol.for("react.suspense_list"),
    Xi = Symbol.for("react.memo"),
    Ze = Symbol.for("react.lazy"),
    as = Symbol.for("react.offscreen"),
    Vo = Symbol.iterator;
function an(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Vo && e[Vo]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var V = Object.assign,
    kl;
function gn(e) {
    if (kl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            kl = (t && t[1]) || "";
        }
    return (
        `
` +
        kl +
        e
    );
}
var Sl = !1;
function El(e, t) {
    if (!e || Sl) return "";
    Sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = l.length - 1,
                    u = i.length - 1;
                1 <= o && 0 <= u && l[o] !== i[u];

            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if ((o--, u--, 0 > u || l[o] !== i[u])) {
                                var s =
                                    `
` + l[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        (Sl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Fc(e) {
    switch (e.tag) {
        case 5:
            return gn(e.type);
        case 16:
            return gn("Lazy");
        case 13:
            return gn("Suspense");
        case 19:
            return gn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = El(e.type, !1)), e;
        case 11:
            return (e = El(e.type.render, !1)), e;
        case 1:
            return (e = El(e.type, !0)), e;
        default:
            return "";
    }
}
function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ot:
            return "Fragment";
        case Rt:
            return "Portal";
        case Xl:
            return "Profiler";
        case Ki:
            return "StrictMode";
        case Gl:
            return "Suspense";
        case Zl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ss:
                return (e.displayName || "Context") + ".Consumer";
            case us:
                return (e._context.displayName || "Context") + ".Provider";
            case Yi:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Xi:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Jl(e.type) || "Memo"
                );
            case Ze:
                (t = e._payload), (e = e._init);
                try {
                    return Jl(e(t));
                } catch {}
        }
    return null;
}
function Ic(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(t);
        case 8:
            return t === Ki ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function ct(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function cs(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function Uc(e) {
    var t = cs(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function rr(e) {
    e._valueTracker || (e._valueTracker = Uc(e));
}
function fs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = cs(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Lr(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function ql(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Bo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ct(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function ds(e, t) {
    (t = t.checked), t != null && Qi(e, "checked", t, !1);
}
function bl(e, t) {
    ds(e, t);
    var n = ct(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? ei(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ei(e, t.type, ct(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Ho(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function ei(e, t, n) {
    (t !== "number" || Lr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yn = Array.isArray;
function Wt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function ti(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Wo(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(y(92));
            if (yn(n)) {
                if (1 < n.length) throw Error(y(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ct(n) };
}
function ps(e, t) {
    var n = ct(t.value),
        r = ct(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Qo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function ms(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function ni(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ms(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var lr,
    hs = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                lr = lr || document.createElement("div"),
                    lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = lr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Tn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var kn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function (e) {
    $c.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
    });
});
function vs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (kn.hasOwnProperty(e) && kn[e])
        ? ("" + t).trim()
        : t + "px";
}
function gs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = vs(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var Ac = V(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function ri(e, t) {
    if (t) {
        if (Ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(y(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(y(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(y(62));
    }
}
function li(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var ii = null;
function Gi(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var oi = null,
    Qt = null,
    Kt = null;
function Ko(e) {
    if ((e = Jn(e))) {
        if (typeof oi != "function") throw Error(y(280));
        var t = e.stateNode;
        t && ((t = ol(t)), oi(e.stateNode, e.type, t));
    }
}
function ys(e) {
    Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function xs() {
    if (Qt) {
        var e = Qt,
            t = Kt;
        if (((Kt = Qt = null), Ko(e), t))
            for (e = 0; e < t.length; e++) Ko(t[e]);
    }
}
function ws(e, t) {
    return e(t);
}
function ks() {}
var Nl = !1;
function Ss(e, t, n) {
    if (Nl) return e(t, n);
    Nl = !0;
    try {
        return ws(e, t, n);
    } finally {
        (Nl = !1), (Qt !== null || Kt !== null) && (ks(), xs());
    }
}
function Rn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n;
}
var ui = !1;
if (We)
    try {
        var cn = {};
        Object.defineProperty(cn, "passive", {
            get: function () {
                ui = !0;
            },
        }),
            window.addEventListener("test", cn, cn),
            window.removeEventListener("test", cn, cn);
    } catch {
        ui = !1;
    }
function Vc(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (v) {
        this.onError(v);
    }
}
var Sn = !1,
    Tr = null,
    Rr = !1,
    si = null,
    Bc = {
        onError: function (e) {
            (Sn = !0), (Tr = e);
        },
    };
function Hc(e, t, n, r, l, i, o, u, s) {
    (Sn = !1), (Tr = null), Vc.apply(Bc, arguments);
}
function Wc(e, t, n, r, l, i, o, u, s) {
    if ((Hc.apply(this, arguments), Sn)) {
        if (Sn) {
            var c = Tr;
            (Sn = !1), (Tr = null);
        } else throw Error(y(198));
        Rr || ((Rr = !0), (si = c));
    }
}
function Lt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Es(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Yo(e) {
    if (Lt(e) !== e) throw Error(y(188));
}
function Qc(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Lt(e)), t === null)) throw Error(y(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return Yo(l), e;
                if (i === r) return Yo(l), t;
                i = i.sibling;
            }
            throw Error(y(188));
        }
        if (n.return !== r.return) (n = l), (r = i);
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                }
                if (u === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                }
                u = u.sibling;
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        (o = !0), (n = i), (r = l);
                        break;
                    }
                    if (u === r) {
                        (o = !0), (r = i), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) throw Error(y(189));
            }
        }
        if (n.alternate !== r) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t;
}
function Ns(e) {
    return (e = Qc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Cs(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var _s = ge.unstable_scheduleCallback,
    Xo = ge.unstable_cancelCallback,
    Kc = ge.unstable_shouldYield,
    Yc = ge.unstable_requestPaint,
    Q = ge.unstable_now,
    Xc = ge.unstable_getCurrentPriorityLevel,
    Zi = ge.unstable_ImmediatePriority,
    js = ge.unstable_UserBlockingPriority,
    Or = ge.unstable_NormalPriority,
    Gc = ge.unstable_LowPriority,
    Ps = ge.unstable_IdlePriority,
    nl = null,
    Ie = null;
function Zc(e) {
    if (Ie && typeof Ie.onCommitFiberRoot == "function")
        try {
            Ie.onCommitFiberRoot(
                nl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Te = Math.clz32 ? Math.clz32 : bc,
    Jc = Math.log,
    qc = Math.LN2;
function bc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / qc) | 0)) | 0;
}
var ir = 64,
    or = 4194304;
function xn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Mr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? (r = xn(u)) : ((i &= o), i !== 0 && (r = xn(i)));
    } else (o = n & ~l), o !== 0 ? (r = xn(o)) : i !== 0 && (r = xn(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (i = t & -t),
        l >= i || (l === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function ef(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function tf(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var o = 31 - Te(i),
            u = 1 << o,
            s = l[o];
        s === -1
            ? (!(u & n) || u & r) && (l[o] = ef(u, t))
            : s <= t && (e.expiredLanes |= u),
            (i &= ~u);
    }
}
function ai(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function zs() {
    var e = ir;
    return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Gn(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Te(t)),
        (e[t] = n);
}
function nf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Te(n),
            i = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
}
function Ji(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Te(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var O = 0;
function Ls(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Ts,
    qi,
    Rs,
    Os,
    Ms,
    ci = !1,
    ur = [],
    nt = null,
    rt = null,
    lt = null,
    On = new Map(),
    Mn = new Map(),
    qe = [],
    rf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Go(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            nt = null;
            break;
        case "dragenter":
        case "dragleave":
            rt = null;
            break;
        case "mouseover":
        case "mouseout":
            lt = null;
            break;
        case "pointerover":
        case "pointerout":
            On.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Mn.delete(t.pointerId);
    }
}
function fn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [l],
          }),
          t !== null && ((t = Jn(t)), t !== null && qi(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function lf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (nt = fn(nt, e, t, n, r, l)), !0;
        case "dragenter":
            return (rt = fn(rt, e, t, n, r, l)), !0;
        case "mouseover":
            return (lt = fn(lt, e, t, n, r, l)), !0;
        case "pointerover":
            var i = l.pointerId;
            return On.set(i, fn(On.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (i = l.pointerId),
                Mn.set(i, fn(Mn.get(i) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function Ds(e) {
    var t = xt(e.target);
    if (t !== null) {
        var n = Lt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Es(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ms(e.priority, function () {
                            Rs(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function wr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (ii = r), n.target.dispatchEvent(r), (ii = null);
        } else return (t = Jn(n)), t !== null && qi(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Zo(e, t, n) {
    wr(e) && n.delete(t);
}
function of() {
    (ci = !1),
        nt !== null && wr(nt) && (nt = null),
        rt !== null && wr(rt) && (rt = null),
        lt !== null && wr(lt) && (lt = null),
        On.forEach(Zo),
        Mn.forEach(Zo);
}
function dn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ci ||
            ((ci = !0),
            ge.unstable_scheduleCallback(ge.unstable_NormalPriority, of)));
}
function Dn(e) {
    function t(l) {
        return dn(l, e);
    }
    if (0 < ur.length) {
        dn(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        nt !== null && dn(nt, e),
            rt !== null && dn(rt, e),
            lt !== null && dn(lt, e),
            On.forEach(t),
            Mn.forEach(t),
            n = 0;
        n < qe.length;
        n++
    )
        (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
        Ds(n), n.blockedOn === null && qe.shift();
}
var Yt = Xe.ReactCurrentBatchConfig,
    Dr = !0;
function uf(e, t, n, r) {
    var l = O,
        i = Yt.transition;
    Yt.transition = null;
    try {
        (O = 1), bi(e, t, n, r);
    } finally {
        (O = l), (Yt.transition = i);
    }
}
function sf(e, t, n, r) {
    var l = O,
        i = Yt.transition;
    Yt.transition = null;
    try {
        (O = 4), bi(e, t, n, r);
    } finally {
        (O = l), (Yt.transition = i);
    }
}
function bi(e, t, n, r) {
    if (Dr) {
        var l = fi(e, t, n, r);
        if (l === null) Dl(e, t, r, Fr, n), Go(e, r);
        else if (lf(l, e, t, n, r)) r.stopPropagation();
        else if ((Go(e, r), t & 4 && -1 < rf.indexOf(e))) {
            for (; l !== null; ) {
                var i = Jn(l);
                if (
                    (i !== null && Ts(i),
                    (i = fi(e, t, n, r)),
                    i === null && Dl(e, t, r, Fr, n),
                    i === l)
                )
                    break;
                l = i;
            }
            l !== null && r.stopPropagation();
        } else Dl(e, t, r, null, n);
    }
}
var Fr = null;
function fi(e, t, n, r) {
    if (((Fr = null), (e = Gi(r)), (e = xt(e)), e !== null))
        if (((t = Lt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Es(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Fr = e), null;
}
function Fs(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Xc()) {
                case Zi:
                    return 1;
                case js:
                    return 4;
                case Or:
                case Gc:
                    return 16;
                case Ps:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var et = null,
    eo = null,
    kr = null;
function Is() {
    if (kr) return kr;
    var e,
        t = eo,
        n = t.length,
        r,
        l = "value" in et ? et.value : et.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sr(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function sr() {
    return !0;
}
function Jo() {
    return !1;
}
function xe(e) {
    function t(n, r, l, i, o) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? sr
                : Jo),
            (this.isPropagationStopped = Jo),
            this
        );
    }
    return (
        V(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = sr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = sr));
            },
            persist: function () {},
            isPersistent: sr,
        }),
        t
    );
}
var ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    to = xe(ln),
    Zn = V({}, ln, { view: 0, detail: 0 }),
    af = xe(Zn),
    _l,
    jl,
    pn,
    rl = V({}, Zn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: no,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== pn &&
                      (pn && e.type === "mousemove"
                          ? ((_l = e.screenX - pn.screenX),
                            (jl = e.screenY - pn.screenY))
                          : (jl = _l = 0),
                      (pn = e)),
                  _l);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : jl;
        },
    }),
    qo = xe(rl),
    cf = V({}, rl, { dataTransfer: 0 }),
    ff = xe(cf),
    df = V({}, Zn, { relatedTarget: 0 }),
    Pl = xe(df),
    pf = V({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mf = xe(pf),
    hf = V({}, ln, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    vf = xe(hf),
    gf = V({}, ln, { data: 0 }),
    bo = xe(gf),
    yf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    xf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    wf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function kf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = wf[e])
        ? !!t[e]
        : !1;
}
function no() {
    return kf;
}
var Sf = V({}, Zn, {
        key: function (e) {
            if (e.key) {
                var t = yf[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? xf[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: no,
        charCode: function (e) {
            return e.type === "keypress" ? Sr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Sr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Ef = xe(Sf),
    Nf = V({}, rl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    eu = xe(Nf),
    Cf = V({}, Zn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: no,
    }),
    _f = xe(Cf),
    jf = V({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pf = xe(jf),
    zf = V({}, rl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Lf = xe(zf),
    Tf = [9, 13, 27, 32],
    ro = We && "CompositionEvent" in window,
    En = null;
We && "documentMode" in document && (En = document.documentMode);
var Rf = We && "TextEvent" in window && !En,
    Us = We && (!ro || (En && 8 < En && 11 >= En)),
    tu = String.fromCharCode(32),
    nu = !1;
function $s(e, t) {
    switch (e) {
        case "keyup":
            return Tf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function As(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mt = !1;
function Of(e, t) {
    switch (e) {
        case "compositionend":
            return As(t);
        case "keypress":
            return t.which !== 32 ? null : ((nu = !0), tu);
        case "textInput":
            return (e = t.data), e === tu && nu ? null : e;
        default:
            return null;
    }
}
function Mf(e, t) {
    if (Mt)
        return e === "compositionend" || (!ro && $s(e, t))
            ? ((e = Is()), (kr = eo = et = null), (Mt = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Us && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Df = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function ru(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Df[e.type] : t === "textarea";
}
function Vs(e, t, n, r) {
    ys(r),
        (t = Ir(t, "onChange")),
        0 < t.length &&
            ((n = new to("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Nn = null,
    Fn = null;
function Ff(e) {
    qs(e, 0);
}
function ll(e) {
    var t = It(e);
    if (fs(t)) return e;
}
function If(e, t) {
    if (e === "change") return t;
}
var Bs = !1;
if (We) {
    var zl;
    if (We) {
        var Ll = "oninput" in document;
        if (!Ll) {
            var lu = document.createElement("div");
            lu.setAttribute("oninput", "return;"),
                (Ll = typeof lu.oninput == "function");
        }
        zl = Ll;
    } else zl = !1;
    Bs = zl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
    Nn && (Nn.detachEvent("onpropertychange", Hs), (Fn = Nn = null));
}
function Hs(e) {
    if (e.propertyName === "value" && ll(Fn)) {
        var t = [];
        Vs(t, Fn, e, Gi(e)), Ss(Ff, t);
    }
}
function Uf(e, t, n) {
    e === "focusin"
        ? (iu(), (Nn = t), (Fn = n), Nn.attachEvent("onpropertychange", Hs))
        : e === "focusout" && iu();
}
function $f(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ll(Fn);
}
function Af(e, t) {
    if (e === "click") return ll(t);
}
function Vf(e, t) {
    if (e === "input" || e === "change") return ll(t);
}
function Bf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : Bf;
function In(e, t) {
    if (Oe(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Yl.call(t, l) || !Oe(e[l], t[l])) return !1;
    }
    return !0;
}
function ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function uu(e, t) {
    var n = ou(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = ou(n);
    }
}
function Ws(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Ws(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Qs() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Lr(e.document);
    }
    return t;
}
function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function Hf(e) {
    var t = Qs(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ws(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && lo(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                (r = r.end === void 0 ? i : Math.min(r.end, l)),
                    !e.extend && i > r && ((l = r), (r = i), (i = l)),
                    (l = uu(n, i));
                var o = uu(n, r);
                l &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Wf = We && "documentMode" in document && 11 >= document.documentMode,
    Dt = null,
    di = null,
    Cn = null,
    pi = !1;
function su(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pi ||
        Dt == null ||
        Dt !== Lr(r) ||
        ((r = Dt),
        "selectionStart" in r && lo(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Cn && In(Cn, r)) ||
            ((Cn = r),
            (r = Ir(di, "onSelect")),
            0 < r.length &&
                ((t = new to("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Dt))));
}
function ar(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Ft = {
        animationend: ar("Animation", "AnimationEnd"),
        animationiteration: ar("Animation", "AnimationIteration"),
        animationstart: ar("Animation", "AnimationStart"),
        transitionend: ar("Transition", "TransitionEnd"),
    },
    Tl = {},
    Ks = {};
We &&
    ((Ks = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Ft.animationend.animation,
        delete Ft.animationiteration.animation,
        delete Ft.animationstart.animation),
    "TransitionEvent" in window || delete Ft.transitionend.transition);
function il(e) {
    if (Tl[e]) return Tl[e];
    if (!Ft[e]) return e;
    var t = Ft[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Tl[e] = t[n]);
    return e;
}
var Ys = il("animationend"),
    Xs = il("animationiteration"),
    Gs = il("animationstart"),
    Zs = il("transitionend"),
    Js = new Map(),
    au =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function dt(e, t) {
    Js.set(e, t), zt(t, [e]);
}
for (var Rl = 0; Rl < au.length; Rl++) {
    var Ol = au[Rl],
        Qf = Ol.toLowerCase(),
        Kf = Ol[0].toUpperCase() + Ol.slice(1);
    dt(Qf, "on" + Kf);
}
dt(Ys, "onAnimationEnd");
dt(Xs, "onAnimationIteration");
dt(Gs, "onAnimationStart");
dt("dblclick", "onDoubleClick");
dt("focusin", "onFocus");
dt("focusout", "onBlur");
dt(Zs, "onTransitionEnd");
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
zt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
zt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Yf = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(wn)
    );
function cu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Wc(r, t, void 0, e), (e.currentTarget = null);
}
function qs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        c = u.currentTarget;
                    if (((u = u.listener), s !== i && l.isPropagationStopped()))
                        break e;
                    cu(l, u, c), (i = s);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = r[o]),
                        (s = u.instance),
                        (c = u.currentTarget),
                        (u = u.listener),
                        s !== i && l.isPropagationStopped())
                    )
                        break e;
                    cu(l, u, c), (i = s);
                }
        }
    }
    if (Rr) throw ((e = si), (Rr = !1), (si = null), e);
}
function D(e, t) {
    var n = t[yi];
    n === void 0 && (n = t[yi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (bs(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
    var r = 0;
    t && (r |= 4), bs(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
    if (!e[cr]) {
        (e[cr] = !0),
            os.forEach(function (n) {
                n !== "selectionchange" &&
                    (Yf.has(n) || Ml(n, !1, e), Ml(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[cr] || ((t[cr] = !0), Ml("selectionchange", !1, t));
    }
}
function bs(e, t, n, r) {
    switch (Fs(t)) {
        case 1:
            var l = uf;
            break;
        case 4:
            l = sf;
            break;
        default:
            l = bi;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !ui ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
            ? e.addEventListener(t, n, { passive: l })
            : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = o.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        o = o.return;
                    }
                for (; u !== null; ) {
                    if (((o = xt(u)), o === null)) return;
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    Ss(function () {
        var c = i,
            v = Gi(n),
            h = [];
        e: {
            var m = Js.get(e);
            if (m !== void 0) {
                var x = to,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Sr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = Ef;
                        break;
                    case "focusin":
                        (w = "focus"), (x = Pl);
                        break;
                    case "focusout":
                        (w = "blur"), (x = Pl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = Pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = qo;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = ff;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = _f;
                        break;
                    case Ys:
                    case Xs:
                    case Gs:
                        x = mf;
                        break;
                    case Zs:
                        x = Pf;
                        break;
                    case "scroll":
                        x = af;
                        break;
                    case "wheel":
                        x = Lf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = vf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = eu;
                }
                var k = (t & 4) !== 0,
                    I = !k && e === "scroll",
                    f = k ? (m !== null ? m + "Capture" : null) : m;
                k = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var g = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            g !== null &&
                            ((d = g),
                            f !== null &&
                                ((g = Rn(a, f)),
                                g != null && k.push($n(a, g, d)))),
                        I)
                    )
                        break;
                    a = a.return;
                }
                0 < k.length &&
                    ((m = new x(m, w, null, n, v)),
                    h.push({ event: m, listeners: k }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (x = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== ii &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (xt(w) || w[Qe]))
                )
                    break e;
                if (
                    (x || m) &&
                    ((m =
                        v.window === v
                            ? v
                            : (m = v.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    x
                        ? ((w = n.relatedTarget || n.toElement),
                          (x = c),
                          (w = w ? xt(w) : null),
                          w !== null &&
                              ((I = Lt(w)),
                              w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((x = null), (w = c)),
                    x !== w)
                ) {
                    if (
                        ((k = qo),
                        (g = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((k = eu),
                            (g = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (a = "pointer")),
                        (I = x == null ? m : It(x)),
                        (d = w == null ? m : It(w)),
                        (m = new k(g, a + "leave", x, n, v)),
                        (m.target = I),
                        (m.relatedTarget = d),
                        (g = null),
                        xt(v) === c &&
                            ((k = new k(f, a + "enter", w, n, v)),
                            (k.target = d),
                            (k.relatedTarget = I),
                            (g = k)),
                        (I = g),
                        x && w)
                    )
                        t: {
                            for (k = x, f = w, a = 0, d = k; d; d = Tt(d)) a++;
                            for (d = 0, g = f; g; g = Tt(g)) d++;
                            for (; 0 < a - d; ) (k = Tt(k)), a--;
                            for (; 0 < d - a; ) (f = Tt(f)), d--;
                            for (; a--; ) {
                                if (
                                    k === f ||
                                    (f !== null && k === f.alternate)
                                )
                                    break t;
                                (k = Tt(k)), (f = Tt(f));
                            }
                            k = null;
                        }
                    else k = null;
                    x !== null && fu(h, m, x, k, !1),
                        w !== null && I !== null && fu(h, I, w, k, !0);
                }
            }
            e: {
                if (
                    ((m = c ? It(c) : window),
                    (x = m.nodeName && m.nodeName.toLowerCase()),
                    x === "select" || (x === "input" && m.type === "file"))
                )
                    var E = If;
                else if (ru(m))
                    if (Bs) E = Vf;
                    else {
                        E = $f;
                        var C = Uf;
                    }
                else
                    (x = m.nodeName) &&
                        x.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (E = Af);
                if (E && (E = E(e, c))) {
                    Vs(h, E, n, v);
                    break e;
                }
                C && C(e, m, c),
                    e === "focusout" &&
                        (C = m._wrapperState) &&
                        C.controlled &&
                        m.type === "number" &&
                        ei(m, "number", m.value);
            }
            switch (((C = c ? It(c) : window), e)) {
                case "focusin":
                    (ru(C) || C.contentEditable === "true") &&
                        ((Dt = C), (di = c), (Cn = null));
                    break;
                case "focusout":
                    Cn = di = Dt = null;
                    break;
                case "mousedown":
                    pi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (pi = !1), su(h, n, v);
                    break;
                case "selectionchange":
                    if (Wf) break;
                case "keydown":
                case "keyup":
                    su(h, n, v);
            }
            var _;
            if (ro)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var j = "onCompositionStart";
                            break e;
                        case "compositionend":
                            j = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            j = "onCompositionUpdate";
                            break e;
                    }
                    j = void 0;
                }
            else
                Mt
                    ? $s(e, n) && (j = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (j = "onCompositionStart");
            j &&
                (Us &&
                    n.locale !== "ko" &&
                    (Mt || j !== "onCompositionStart"
                        ? j === "onCompositionEnd" && Mt && (_ = Is())
                        : ((et = v),
                          (eo = "value" in et ? et.value : et.textContent),
                          (Mt = !0))),
                (C = Ir(c, j)),
                0 < C.length &&
                    ((j = new bo(j, e, null, n, v)),
                    h.push({ event: j, listeners: C }),
                    _
                        ? (j.data = _)
                        : ((_ = As(n)), _ !== null && (j.data = _)))),
                (_ = Rf ? Of(e, n) : Mf(e, n)) &&
                    ((c = Ir(c, "onBeforeInput")),
                    0 < c.length &&
                        ((v = new bo(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            v
                        )),
                        h.push({ event: v, listeners: c }),
                        (v.data = _)));
        }
        qs(h, t);
    });
}
function $n(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ir(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 &&
            i !== null &&
            ((l = i),
            (i = Rn(e, n)),
            i != null && r.unshift($n(e, i, l)),
            (i = Rn(e, t)),
            i != null && r.push($n(e, i, l))),
            (e = e.return);
    }
    return r;
}
function Tt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function fu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            c !== null &&
            ((u = c),
            l
                ? ((s = Rn(n, i)), s != null && o.unshift($n(n, s, u)))
                : l || ((s = Rn(n, i)), s != null && o.push($n(n, s, u)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xf = /\r\n?/g,
    Gf = /\u0000|\uFFFD/g;
function du(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Xf,
            `
`
        )
        .replace(Gf, "");
}
function fr(e, t, n) {
    if (((t = du(t)), du(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var mi = null,
    hi = null;
function vi(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0,
    Zf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pu = typeof Promise == "function" ? Promise : void 0,
    Jf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof pu < "u"
            ? function (e) {
                  return pu.resolve(null).then(e).catch(qf);
              }
            : gi;
function qf(e) {
    setTimeout(function () {
        throw e;
    });
}
function Fl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Dn(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Dn(t);
}
function it(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function mu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var on = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + on,
    An = "__reactProps$" + on,
    Qe = "__reactContainer$" + on,
    yi = "__reactEvents$" + on,
    bf = "__reactListeners$" + on,
    ed = "__reactHandles$" + on;
function xt(e) {
    var t = e[Fe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Qe] || n[Fe])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = mu(e); e !== null; ) {
                    if ((n = e[Fe])) return n;
                    e = mu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Jn(e) {
    return (
        (e = e[Fe] || e[Qe]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function It(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
}
function ol(e) {
    return e[An] || null;
}
var xi = [],
    Ut = -1;
function pt(e) {
    return { current: e };
}
function F(e) {
    0 > Ut || ((e.current = xi[Ut]), (xi[Ut] = null), Ut--);
}
function M(e, t) {
    Ut++, (xi[Ut] = e.current), (e.current = t);
}
var ft = {},
    le = pt(ft),
    fe = pt(!1),
    Nt = ft;
function Jt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function de(e) {
    return (e = e.childContextTypes), e != null;
}
function $r() {
    F(fe), F(le);
}
function hu(e, t, n) {
    if (le.current !== ft) throw Error(y(168));
    M(le, t), M(fe, n);
}
function ea(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(y(108, Ic(e) || "Unknown", l));
    return V({}, n, r);
}
function Ar(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            ft),
        (Nt = le.current),
        M(le, e),
        M(fe, fe.current),
        !0
    );
}
function vu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n
        ? ((e = ea(e, t, Nt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          F(fe),
          F(le),
          M(le, e))
        : F(fe),
        M(fe, n);
}
var Ae = null,
    ul = !1,
    Il = !1;
function ta(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
}
function td(e) {
    (ul = !0), ta(e);
}
function mt() {
    if (!Il && Ae !== null) {
        Il = !0;
        var e = 0,
            t = O;
        try {
            var n = Ae;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ae = null), (ul = !1);
        } catch (l) {
            throw (Ae !== null && (Ae = Ae.slice(e + 1)), _s(Zi, mt), l);
        } finally {
            (O = t), (Il = !1);
        }
    }
    return null;
}
var $t = [],
    At = 0,
    Vr = null,
    Br = 0,
    we = [],
    ke = 0,
    Ct = null,
    Ve = 1,
    Be = "";
function gt(e, t) {
    ($t[At++] = Br), ($t[At++] = Vr), (Vr = e), (Br = t);
}
function na(e, t, n) {
    (we[ke++] = Ve), (we[ke++] = Be), (we[ke++] = Ct), (Ct = e);
    var r = Ve;
    e = Be;
    var l = 32 - Te(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - Te(t) + l;
    if (30 < i) {
        var o = l - (l % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (Ve = (1 << (32 - Te(t) + l)) | (n << l) | r),
            (Be = i + e);
    } else (Ve = (1 << i) | (n << l) | r), (Be = e);
}
function io(e) {
    e.return !== null && (gt(e, 1), na(e, 1, 0));
}
function oo(e) {
    for (; e === Vr; )
        (Vr = $t[--At]), ($t[At] = null), (Br = $t[--At]), ($t[At] = null);
    for (; e === Ct; )
        (Ct = we[--ke]),
            (we[ke] = null),
            (Be = we[--ke]),
            (we[ke] = null),
            (Ve = we[--ke]),
            (we[ke] = null);
}
var ve = null,
    he = null,
    U = !1,
    Le = null;
function ra(e, t) {
    var n = Se(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Ct !== null ? { id: Ve, overflow: Be } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Se(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ve = e),
                      (he = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function wi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
    if (U) {
        var t = he;
        if (t) {
            var n = t;
            if (!gu(e, t)) {
                if (wi(e)) throw Error(y(418));
                t = it(n.nextSibling);
                var r = ve;
                t && gu(e, t)
                    ? ra(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
            }
        } else {
            if (wi(e)) throw Error(y(418));
            (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
        }
    }
}
function yu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ve = e;
}
function dr(e) {
    if (e !== ve) return !1;
    if (!U) return yu(e), (U = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps))),
        t && (t = he))
    ) {
        if (wi(e)) throw (la(), Error(y(418)));
        for (; t; ) ra(e, t), (t = it(t.nextSibling));
    }
    if ((yu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(y(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            he = it(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            he = null;
        }
    } else he = ve ? it(e.stateNode.nextSibling) : null;
    return !0;
}
function la() {
    for (var e = he; e; ) e = it(e.nextSibling);
}
function qt() {
    (he = ve = null), (U = !1);
}
function uo(e) {
    Le === null ? (Le = [e]) : Le.push(e);
}
var nd = Xe.ReactCurrentBatchConfig;
function Pe(e, t) {
    if (e && e.defaultProps) {
        (t = V({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Hr = pt(null),
    Wr = null,
    Vt = null,
    so = null;
function ao() {
    so = Vt = Wr = null;
}
function co(e) {
    var t = Hr.current;
    F(Hr), (e._currentValue = t);
}
function Si(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Xt(e, t) {
    (Wr = e),
        (so = Vt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ne(e) {
    var t = e._currentValue;
    if (so !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Vt === null)) {
            if (Wr === null) throw Error(y(308));
            (Vt = e), (Wr.dependencies = { lanes: 0, firstContext: e });
        } else Vt = Vt.next = e;
    return t;
}
var wt = null;
function fo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
}
function ia(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), fo(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        Ke(e, r)
    );
}
function Ke(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function po(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function oa(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function He(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function ot(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), R & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            Ke(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), fo(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        Ke(e, n)
    );
}
function Er(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
    }
}
function xu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (l = i = t) : (i = i.next = t);
        } else l = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
    var l = e.updateQueue;
    Je = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            c = s.next;
        (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
        var v = e.alternate;
        v !== null &&
            ((v = v.updateQueue),
            (u = v.lastBaseUpdate),
            u !== o &&
                (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
                (v.lastBaseUpdate = s)));
    }
    if (i !== null) {
        var h = l.baseState;
        (o = 0), (v = c = s = null), (u = i);
        do {
            var m = u.lane,
                x = u.eventTime;
            if ((r & m) === m) {
                v !== null &&
                    (v = v.next =
                        {
                            eventTime: x,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var w = e,
                        k = u;
                    switch (((m = t), (x = n), k.tag)) {
                        case 1:
                            if (((w = k.payload), typeof w == "function")) {
                                h = w.call(x, h, m);
                                break e;
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = k.payload),
                                (m =
                                    typeof w == "function"
                                        ? w.call(x, h, m)
                                        : w),
                                m == null)
                            )
                                break e;
                            h = V({}, h, m);
                            break e;
                        case 2:
                            Je = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [u]) : m.push(u));
            } else
                (x = {
                    eventTime: x,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    v === null ? ((c = v = x), (s = h)) : (v = v.next = x),
                    (o |= m);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (m = u),
                    (u = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null);
            }
        } while (1);
        if (
            (v === null && (s = h),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = v),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (o |= l.lane), (l = l.next);
            while (l !== t);
        } else i === null && (l.shared.lanes = 0);
        (jt |= o), (e.lanes = o), (e.memoizedState = h);
    }
}
function wu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(y(191, l));
                l.call(r);
            }
        }
}
var ua = new is.Component().refs;
function Ei(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : V({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Lt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = oe(),
            l = st(e),
            i = He(r, l);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = ot(e, i, l)),
            t !== null && (Re(t, e, l, r), Er(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = oe(),
            l = st(e),
            i = He(r, l);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = ot(e, i, l)),
            t !== null && (Re(t, e, l, r), Er(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = oe(),
            r = st(e),
            l = He(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = ot(e, l, r)),
            t !== null && (Re(t, e, r, n), Er(t, e, r));
    },
};
function ku(e, t, n, r, l, i, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !In(n, r) || !In(l, i)
            : !0
    );
}
function sa(e, t, n) {
    var r = !1,
        l = ft,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ne(i))
            : ((l = de(t) ? Nt : le.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Jt(e, l) : ft)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = sl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Su(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && sl.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = ua), po(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (l.context = Ne(i))
        : ((i = de(t) ? Nt : le.current), (l.context = Jt(e, i))),
        (l.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Ei(e, t, i, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && sl.enqueueReplaceState(l, l.state, null),
            Qr(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(y(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var u = l.refs;
                      u === ua && (u = l.refs = {}),
                          o === null ? delete u[i] : (u[i] = o);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(y(284));
        if (!n._owner) throw Error(y(290, e));
    }
    return e;
}
function pr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            y(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Eu(e) {
    var t = e._init;
    return t(e._payload);
}
function aa(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function n(f, a) {
        if (!e) return null;
        for (; a !== null; ) t(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                (a = a.sibling);
        return f;
    }
    function l(f, a) {
        return (f = at(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, a, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                      : ((f.flags |= 2), a))
                : ((f.flags |= 1048576), a)
        );
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, g) {
        return a === null || a.tag !== 6
            ? ((a = Wl(d, f.mode, g)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, g) {
        var E = d.type;
        return E === Ot
            ? v(f, a, d.props.children, g, d.key)
            : a !== null &&
              (a.elementType === E ||
                  (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Ze &&
                      Eu(E) === a.type))
            ? ((g = l(a, d.props)), (g.ref = mn(f, a, d)), (g.return = f), g)
            : ((g = zr(d.type, d.key, d.props, null, f.mode, g)),
              (g.ref = mn(f, a, d)),
              (g.return = f),
              g);
    }
    function c(f, a, d, g) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = Ql(d, f.mode, g)), (a.return = f), a)
            : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, g, E) {
        return a === null || a.tag !== 7
            ? ((a = Et(d, f.mode, g, E)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function h(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case nr:
                    return (
                        (d = zr(a.type, a.key, a.props, null, f.mode, d)),
                        (d.ref = mn(f, null, a)),
                        (d.return = f),
                        d
                    );
                case Rt:
                    return (a = Ql(a, f.mode, d)), (a.return = f), a;
                case Ze:
                    var g = a._init;
                    return h(f, g(a._payload), d);
            }
            if (yn(a) || an(a))
                return (a = Et(a, f.mode, d, null)), (a.return = f), a;
            pr(f, a);
        }
        return null;
    }
    function m(f, a, d, g) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return E !== null ? null : u(f, a, "" + d, g);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case nr:
                    return d.key === E ? s(f, a, d, g) : null;
                case Rt:
                    return d.key === E ? c(f, a, d, g) : null;
                case Ze:
                    return (E = d._init), m(f, a, E(d._payload), g);
            }
            if (yn(d) || an(d)) return E !== null ? null : v(f, a, d, g, null);
            pr(f, d);
        }
        return null;
    }
    function x(f, a, d, g, E) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
            return (f = f.get(d) || null), u(a, f, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case nr:
                    return (
                        (f = f.get(g.key === null ? d : g.key) || null),
                        s(a, f, g, E)
                    );
                case Rt:
                    return (
                        (f = f.get(g.key === null ? d : g.key) || null),
                        c(a, f, g, E)
                    );
                case Ze:
                    var C = g._init;
                    return x(f, a, d, C(g._payload), E);
            }
            if (yn(g) || an(g))
                return (f = f.get(d) || null), v(a, f, g, E, null);
            pr(a, g);
        }
        return null;
    }
    function w(f, a, d, g) {
        for (
            var E = null, C = null, _ = a, j = (a = 0), H = null;
            _ !== null && j < d.length;
            j++
        ) {
            _.index > j ? ((H = _), (_ = null)) : (H = _.sibling);
            var T = m(f, _, d[j], g);
            if (T === null) {
                _ === null && (_ = H);
                break;
            }
            e && _ && T.alternate === null && t(f, _),
                (a = i(T, a, j)),
                C === null ? (E = T) : (C.sibling = T),
                (C = T),
                (_ = H);
        }
        if (j === d.length) return n(f, _), U && gt(f, j), E;
        if (_ === null) {
            for (; j < d.length; j++)
                (_ = h(f, d[j], g)),
                    _ !== null &&
                        ((a = i(_, a, j)),
                        C === null ? (E = _) : (C.sibling = _),
                        (C = _));
            return U && gt(f, j), E;
        }
        for (_ = r(f, _); j < d.length; j++)
            (H = x(_, f, j, d[j], g)),
                H !== null &&
                    (e &&
                        H.alternate !== null &&
                        _.delete(H.key === null ? j : H.key),
                    (a = i(H, a, j)),
                    C === null ? (E = H) : (C.sibling = H),
                    (C = H));
        return (
            e &&
                _.forEach(function (_e) {
                    return t(f, _e);
                }),
            U && gt(f, j),
            E
        );
    }
    function k(f, a, d, g) {
        var E = an(d);
        if (typeof E != "function") throw Error(y(150));
        if (((d = E.call(d)), d == null)) throw Error(y(151));
        for (
            var C = (E = null), _ = a, j = (a = 0), H = null, T = d.next();
            _ !== null && !T.done;
            j++, T = d.next()
        ) {
            _.index > j ? ((H = _), (_ = null)) : (H = _.sibling);
            var _e = m(f, _, T.value, g);
            if (_e === null) {
                _ === null && (_ = H);
                break;
            }
            e && _ && _e.alternate === null && t(f, _),
                (a = i(_e, a, j)),
                C === null ? (E = _e) : (C.sibling = _e),
                (C = _e),
                (_ = H);
        }
        if (T.done) return n(f, _), U && gt(f, j), E;
        if (_ === null) {
            for (; !T.done; j++, T = d.next())
                (T = h(f, T.value, g)),
                    T !== null &&
                        ((a = i(T, a, j)),
                        C === null ? (E = T) : (C.sibling = T),
                        (C = T));
            return U && gt(f, j), E;
        }
        for (_ = r(f, _); !T.done; j++, T = d.next())
            (T = x(_, f, j, T.value, g)),
                T !== null &&
                    (e &&
                        T.alternate !== null &&
                        _.delete(T.key === null ? j : T.key),
                    (a = i(T, a, j)),
                    C === null ? (E = T) : (C.sibling = T),
                    (C = T));
        return (
            e &&
                _.forEach(function (un) {
                    return t(f, un);
                }),
            U && gt(f, j),
            E
        );
    }
    function I(f, a, d, g) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === Ot &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case nr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === Ot)) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling),
                                            (a = l(C, d.props.children)),
                                            (a.return = f),
                                            (f = a);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == "object" &&
                                        E !== null &&
                                        E.$$typeof === Ze &&
                                        Eu(E) === C.type)
                                ) {
                                    n(f, C.sibling),
                                        (a = l(C, d.props)),
                                        (a.ref = mn(f, C, d)),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                }
                                n(f, C);
                                break;
                            } else t(f, C);
                            C = C.sibling;
                        }
                        d.type === Ot
                            ? ((a = Et(d.props.children, f.mode, g, d.key)),
                              (a.return = f),
                              (f = a))
                            : ((g = zr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  g
                              )),
                              (g.ref = mn(f, a, d)),
                              (g.return = f),
                              (f = g));
                    }
                    return o(f);
                case Rt:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    a.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, a.sibling),
                                        (a = l(a, d.children || [])),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                } else {
                                    n(f, a);
                                    break;
                                }
                            else t(f, a);
                            a = a.sibling;
                        }
                        (a = Ql(d, f.mode, g)), (a.return = f), (f = a);
                    }
                    return o(f);
                case Ze:
                    return (C = d._init), I(f, a, C(d._payload), g);
            }
            if (yn(d)) return w(f, a, d, g);
            if (an(d)) return k(f, a, d, g);
            pr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              a !== null && a.tag === 6
                  ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
                  : (n(f, a), (a = Wl(d, f.mode, g)), (a.return = f), (f = a)),
              o(f))
            : n(f, a);
    }
    return I;
}
var bt = aa(!0),
    ca = aa(!1),
    qn = {},
    Ue = pt(qn),
    Vn = pt(qn),
    Bn = pt(qn);
function kt(e) {
    if (e === qn) throw Error(y(174));
    return e;
}
function mo(e, t) {
    switch ((M(Bn, t), M(Vn, e), M(Ue, qn), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = ni(t, e));
    }
    F(Ue), M(Ue, t);
}
function en() {
    F(Ue), F(Vn), F(Bn);
}
function fa(e) {
    kt(Bn.current);
    var t = kt(Ue.current),
        n = ni(t, e.type);
    t !== n && (M(Vn, e), M(Ue, n));
}
function ho(e) {
    Vn.current === e && (F(Ue), F(Vn));
}
var $ = pt(0);
function Kr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Ul = [];
function vo() {
    for (var e = 0; e < Ul.length; e++)
        Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0;
}
var Nr = Xe.ReactCurrentDispatcher,
    $l = Xe.ReactCurrentBatchConfig,
    _t = 0,
    A = null,
    Y = null,
    Z = null,
    Yr = !1,
    _n = !1,
    Hn = 0,
    rd = 0;
function te() {
    throw Error(y(321));
}
function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n])) return !1;
    return !0;
}
function yo(e, t, n, r, l, i) {
    if (
        ((_t = i),
        (A = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Nr.current = e === null || e.memoizedState === null ? ud : sd),
        (e = n(r, l)),
        _n)
    ) {
        i = 0;
        do {
            if (((_n = !1), (Hn = 0), 25 <= i)) throw Error(y(301));
            (i += 1),
                (Z = Y = null),
                (t.updateQueue = null),
                (Nr.current = ad),
                (e = n(r, l));
        } while (_n);
    }
    if (
        ((Nr.current = Xr),
        (t = Y !== null && Y.next !== null),
        (_t = 0),
        (Z = Y = A = null),
        (Yr = !1),
        t)
    )
        throw Error(y(300));
    return e;
}
function xo() {
    var e = Hn !== 0;
    return (Hn = 0), e;
}
function De() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
    if (Y === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Y.next;
    var t = Z === null ? A.memoizedState : Z.next;
    if (t !== null) (Z = t), (Y = e);
    else {
        if (e === null) throw Error(y(310));
        (Y = e),
            (e = {
                memoizedState: Y.memoizedState,
                baseState: Y.baseState,
                baseQueue: Y.baseQueue,
                queue: Y.queue,
                next: null,
            }),
            Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
    }
    return Z;
}
function Wn(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Al(e) {
    var t = Ce(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = Y,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            (l.next = i.next), (i.next = o);
        }
        (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
        (i = l.next), (r = r.baseState);
        var u = (o = null),
            s = null,
            c = i;
        do {
            var v = c.lane;
            if ((_t & v) === v)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var h = {
                    lane: v,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
                    (A.lanes |= v),
                    (jt |= v);
            }
            c = c.next;
        } while (c !== null && c !== i);
        s === null ? (o = r) : (s.next = u),
            Oe(r, t.memoizedState) || (ce = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (i = l.lane), (A.lanes |= i), (jt |= i), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Vl(e) {
    var t = Ce(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = (l = l.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== l);
        Oe(i, t.memoizedState) || (ce = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function da() {}
function pa(e, t) {
    var n = A,
        r = Ce(),
        l = t(),
        i = !Oe(r.memoizedState, l);
    if (
        (i && ((r.memoizedState = l), (ce = !0)),
        (r = r.queue),
        wo(va.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Qn(9, ha.bind(null, n, r, l, t), void 0, null),
            J === null)
        )
            throw Error(y(349));
        _t & 30 || ma(n, t, l);
    }
    return l;
}
function ma(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = A.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (A.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ha(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ga(t) && ya(e);
}
function va(e, t, n) {
    return n(function () {
        ga(t) && ya(e);
    });
}
function ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n);
    } catch {
        return !0;
    }
}
function ya(e) {
    var t = Ke(e, 1);
    t !== null && Re(t, e, 1, -1);
}
function Nu(e) {
    var t = De();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wn,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = od.bind(null, A, e)),
        [t.memoizedState, e]
    );
}
function Qn(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = A.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (A.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function xa() {
    return Ce().memoizedState;
}
function Cr(e, t, n, r) {
    var l = De();
    (A.flags |= e),
        (l.memoizedState = Qn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Y !== null) {
        var o = Y.memoizedState;
        if (((i = o.destroy), r !== null && go(r, o.deps))) {
            l.memoizedState = Qn(t, n, i, r);
            return;
        }
    }
    (A.flags |= e), (l.memoizedState = Qn(1 | t, n, i, r));
}
function Cu(e, t) {
    return Cr(8390656, 8, e, t);
}
function wo(e, t) {
    return al(2048, 8, e, t);
}
function wa(e, t) {
    return al(4, 2, e, t);
}
function ka(e, t) {
    return al(4, 4, e, t);
}
function Sa(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Ea(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), al(4, 4, Sa.bind(null, t, e), n)
    );
}
function ko() {}
function Na(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Ca(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _a(e, t, n) {
    return _t & 21
        ? (Oe(n, t) ||
              ((n = zs()), (A.lanes |= n), (jt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (ce = !0)),
          (e.memoizedState = n));
}
function ld(e, t) {
    var n = O;
    (O = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1), t();
    } finally {
        (O = n), ($l.transition = r);
    }
}
function ja() {
    return Ce().memoizedState;
}
function id(e, t, n) {
    var r = st(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Pa(e))
    )
        za(t, n);
    else if (((n = ia(e, t, n, r)), n !== null)) {
        var l = oe();
        Re(n, e, r, l), La(n, t, r);
    }
}
function od(e, t, n) {
    var r = st(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Pa(e)) za(t, l);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var o = t.lastRenderedState,
                    u = i(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
                    var s = t.interleaved;
                    s === null
                        ? ((l.next = l), fo(t))
                        : ((l.next = s.next), (s.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = ia(e, t, l, r)),
            n !== null && ((l = oe()), Re(n, e, r, l), La(n, t, r));
    }
}
function Pa(e) {
    var t = e.alternate;
    return e === A || (t !== null && t === A);
}
function za(e, t) {
    _n = Yr = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function La(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
    }
}
var Xr = {
        readContext: Ne,
        useCallback: te,
        useContext: te,
        useEffect: te,
        useImperativeHandle: te,
        useInsertionEffect: te,
        useLayoutEffect: te,
        useMemo: te,
        useReducer: te,
        useRef: te,
        useState: te,
        useDebugValue: te,
        useDeferredValue: te,
        useTransition: te,
        useMutableSource: te,
        useSyncExternalStore: te,
        useId: te,
        unstable_isNewReconciler: !1,
    },
    ud = {
        readContext: Ne,
        useCallback: function (e, t) {
            return (De().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ne,
        useEffect: Cu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Cr(4194308, 4, Sa.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Cr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Cr(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = De();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = De();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = id.bind(null, A, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = De();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Nu,
        useDebugValue: ko,
        useDeferredValue: function (e) {
            return (De().memoizedState = e);
        },
        useTransition: function () {
            var e = Nu(!1),
                t = e[0];
            return (e = ld.bind(null, e[1])), (De().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = A,
                l = De();
            if (U) {
                if (n === void 0) throw Error(y(407));
                n = n();
            } else {
                if (((n = t()), J === null)) throw Error(y(349));
                _t & 30 || ma(r, t, n);
            }
            l.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (l.queue = i),
                Cu(va.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Qn(9, ha.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = De(),
                t = J.identifierPrefix;
            if (U) {
                var n = Be,
                    r = Ve;
                (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Hn++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = rd++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    sd = {
        readContext: Ne,
        useCallback: Na,
        useContext: Ne,
        useEffect: wo,
        useImperativeHandle: Ea,
        useInsertionEffect: wa,
        useLayoutEffect: ka,
        useMemo: Ca,
        useReducer: Al,
        useRef: xa,
        useState: function () {
            return Al(Wn);
        },
        useDebugValue: ko,
        useDeferredValue: function (e) {
            var t = Ce();
            return _a(t, Y.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(Wn)[0],
                t = Ce().memoizedState;
            return [e, t];
        },
        useMutableSource: da,
        useSyncExternalStore: pa,
        useId: ja,
        unstable_isNewReconciler: !1,
    },
    ad = {
        readContext: Ne,
        useCallback: Na,
        useContext: Ne,
        useEffect: wo,
        useImperativeHandle: Ea,
        useInsertionEffect: wa,
        useLayoutEffect: ka,
        useMemo: Ca,
        useReducer: Vl,
        useRef: xa,
        useState: function () {
            return Vl(Wn);
        },
        useDebugValue: ko,
        useDeferredValue: function (e) {
            var t = Ce();
            return Y === null
                ? (t.memoizedState = e)
                : _a(t, Y.memoizedState, e);
        },
        useTransition: function () {
            var e = Vl(Wn)[0],
                t = Ce().memoizedState;
            return [e, t];
        },
        useMutableSource: da,
        useSyncExternalStore: pa,
        useId: ja,
        unstable_isNewReconciler: !1,
    };
function tn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Fc(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (i) {
        l =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, t, n) {
    (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Zr || ((Zr = !0), (Di = r)), Ci(e, t);
        }),
        n
    );
}
function Ra(e, t, n) {
    (n = He(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                Ci(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                Ci(e, t),
                    typeof r != "function" &&
                        (ut === null ? (ut = new Set([this])) : ut.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : "",
                });
            }),
        n
    );
}
function _u(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new cd();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Nd.bind(null, e, t, n)), t.then(e, e));
}
function ju(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Pu(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = He(-1, 1)), (t.tag = 2), ot(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var fd = Xe.ReactCurrentOwner,
    ce = !1;
function ie(e, t, n, r) {
    t.child = e === null ? ca(t, null, n, r) : bt(t, e.child, n, r);
}
function zu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
        Xt(t, l),
        (r = yo(e, t, n, r, i, l)),
        (n = xo()),
        e !== null && !ce
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ye(e, t, l))
            : (U && n && io(t), (t.flags |= 1), ie(e, t, r, l), t.child)
    );
}
function Lu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !zo(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Oa(e, t, i, r, l))
            : ((e = zr(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
        var o = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : In),
            n(o, r) && e.ref === t.ref)
        )
            return Ye(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = at(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Oa(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (In(i, r) && e.ref === t.ref)
            if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
                e.flags & 131072 && (ce = !0);
            else return (t.lanes = e.lanes), Ye(e, t, l);
    }
    return _i(e, t, n, r, l);
}
function Ma(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                M(Ht, me),
                (me |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    M(Ht, me),
                    (me |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                M(Ht, me),
                (me |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            M(Ht, me),
            (me |= r);
    return ie(e, t, l, n), t.child;
}
function Da(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function _i(e, t, n, r, l) {
    var i = de(n) ? Nt : le.current;
    return (
        (i = Jt(t, i)),
        Xt(t, l),
        (n = yo(e, t, n, r, i, l)),
        (r = xo()),
        e !== null && !ce
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ye(e, t, l))
            : (U && r && io(t), (t.flags |= 1), ie(e, t, n, l), t.child)
    );
}
function Tu(e, t, n, r, l) {
    if (de(n)) {
        var i = !0;
        Ar(t);
    } else i = !1;
    if ((Xt(t, l), t.stateNode === null))
        _r(e, t), sa(t, n, r), Ni(t, n, r, l), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var s = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null
            ? (c = Ne(c))
            : ((c = de(n) ? Nt : le.current), (c = Jt(t, c)));
        var v = n.getDerivedStateFromProps,
            h =
                typeof v == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== r || s !== c) && Su(t, o, r, c)),
            (Je = !1);
        var m = t.memoizedState;
        (o.state = m),
            Qr(t, r, o, l),
            (s = t.memoizedState),
            u !== r || m !== s || fe.current || Je
                ? (typeof v == "function" &&
                      (Ei(t, n, v, r), (s = t.memoizedState)),
                  (u = Je || ku(t, n, u, r, m, s, c))
                      ? (h ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = u))
                : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (o = t.stateNode),
            oa(e, t),
            (u = t.memoizedProps),
            (c = t.type === t.elementType ? u : Pe(t.type, u)),
            (o.props = c),
            (h = t.pendingProps),
            (m = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null
                ? (s = Ne(s))
                : ((s = de(n) ? Nt : le.current), (s = Jt(t, s)));
        var x = n.getDerivedStateFromProps;
        (v =
            typeof x == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== h || m !== s) && Su(t, o, r, s)),
            (Je = !1),
            (m = t.memoizedState),
            (o.state = m),
            Qr(t, r, o, l);
        var w = t.memoizedState;
        u !== h || m !== w || fe.current || Je
            ? (typeof x == "function" &&
                  (Ei(t, n, x, r), (w = t.memoizedState)),
              (c = Je || ku(t, n, c, r, m, w, s) || !1)
                  ? (v ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, w, s),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = s),
              (r = c))
            : (typeof o.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ji(e, t, n, r, i, l);
}
function ji(e, t, n, r, l, i) {
    Da(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && vu(t, n, !1), Ye(e, t, i);
    (r = t.stateNode), (fd.current = t);
    var u =
        o && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = bt(t, e.child, null, i)),
              (t.child = bt(t, null, u, i)))
            : ie(e, t, u, i),
        (t.memoizedState = r.state),
        l && vu(t, n, !0),
        t.child
    );
}
function Fa(e) {
    var t = e.stateNode;
    t.pendingContext
        ? hu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && hu(e, t.context, !1),
        mo(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
    return qt(), uo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u;
    if (
        ((u = o) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        M($, l & 1),
        e === null)
    )
        return (
            ki(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = o))
                            : (i = dl(o, r, 0, null)),
                        (e = Et(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = zi(n)),
                        (t.memoizedState = Pi),
                        e)
                      : So(t, o))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return dd(e, t, o, r, u, l, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = at(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (i = at(u, i))
                : ((i = Et(i, o, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? zi(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (i.memoizedState = o),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Pi),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = at(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function So(e, t) {
    return (
        (t = dl({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function mr(e, t, n, r) {
    return (
        r !== null && uo(r),
        bt(t, e.child, null, n),
        (e = So(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function dd(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Bl(Error(y(422)))), mr(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (l = t.mode),
              (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
              (i = Et(i, l, o, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && bt(t, e.child, null, o),
              (t.child.memoizedState = zi(o)),
              (t.memoizedState = Pi),
              i);
    if (!(t.mode & 1)) return mr(e, t, o, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (i = Error(y(419))), (r = Bl(i, r, void 0)), mr(e, t, o, r)
        );
    }
    if (((u = (o & e.childLanes) !== 0), ce || u)) {
        if (((r = J), r !== null)) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | o) ? 0 : l),
                l !== 0 &&
                    l !== i.retryLane &&
                    ((i.retryLane = l), Ke(e, l), Re(r, e, l, -1));
        }
        return Po(), (r = Bl(Error(y(421)))), mr(e, t, o, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Cd.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (he = it(l.nextSibling)),
          (ve = t),
          (U = !0),
          (Le = null),
          e !== null &&
              ((we[ke++] = Ve),
              (we[ke++] = Be),
              (we[ke++] = Ct),
              (Ve = e.id),
              (Be = e.overflow),
              (Ct = t)),
          (t = So(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Ou(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Hl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = l));
}
function Ua(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if ((ie(e, t, r.children, n), (r = $.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ou(e, n, t);
                else if (e.tag === 19) Ou(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((M($, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Kr(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    Hl(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Kr(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                Hl(t, !0, n, null, i);
                break;
            case "together":
                Hl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function _r(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (jt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
        for (
            e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = at(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function pd(e, t, n) {
    switch (t.tag) {
        case 3:
            Fa(t), qt();
            break;
        case 5:
            fa(t);
            break;
        case 1:
            de(t.type) && Ar(t);
            break;
        case 4:
            mo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            M(Hr, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (M($, $.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Ia(e, t, n)
                    : (M($, $.current & 1),
                      (e = Ye(e, t, n)),
                      e !== null ? e.sibling : null);
            M($, $.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ua(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                M($, $.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Ma(e, t, n);
    }
    return Ye(e, t, n);
}
var $a, Li, Aa, Va;
$a = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Li = function () {};
Aa = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), kt(Ue.current);
        var i = null;
        switch (n) {
            case "input":
                (l = ql(e, l)), (r = ql(e, r)), (i = []);
                break;
            case "select":
                (l = V({}, l, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (l = ti(e, l)), (r = ti(e, r)), (i = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Ur);
        }
        ri(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Ln.hasOwnProperty(c)
                            ? i || (i = [])
                            : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((u = l != null ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
            )
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) ||
                                (s && s.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in s)
                            s.hasOwnProperty(o) &&
                                u[o] !== s[o] &&
                                (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (i = i || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (i = i || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (Ln.hasOwnProperty(c)
                              ? (s != null &&
                                    c === "onScroll" &&
                                    D("scroll", e),
                                i || u === s || (i = []))
                              : (i = i || []).push(c, s));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Va = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function hn(e, t) {
    if (!U)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function md(e, t, n) {
    var r = t.pendingProps;
    switch ((oo(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ne(t), null;
        case 1:
            return de(t.type) && $r(), ne(t), null;
        case 3:
            return (
                (r = t.stateNode),
                en(),
                F(fe),
                F(le),
                vo(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (dr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Le !== null && (Ui(Le), (Le = null)))),
                Li(e, t),
                ne(t),
                null
            );
        case 5:
            ho(t);
            var l = kt(Bn.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Aa(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(y(166));
                    return ne(t), null;
                }
                if (((e = kt(Ue.current)), dr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[Fe] = t), (r[An] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < wn.length; l++) D(wn[l], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            Bo(r, i), D("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                D("invalid", r);
                            break;
                        case "textarea":
                            Wo(r, i), D("invalid", r);
                    }
                    ri(n, i), (l = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          fr(r.textContent, u, e),
                                      (l = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          fr(r.textContent, u, e),
                                      (l = ["children", "" + u]))
                                : Ln.hasOwnProperty(o) &&
                                  u != null &&
                                  o === "onScroll" &&
                                  D("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            rr(r), Ho(r, i, !0);
                            break;
                        case "textarea":
                            rr(r), Qo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Ur);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ms(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)),
                                  n === "select" &&
                                      ((o = e),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Fe] = t),
                        (e[An] = r),
                        $a(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = li(n, r)), n)) {
                            case "dialog":
                                D("cancel", e), D("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < wn.length; l++) D(wn[l], e);
                                l = r;
                                break;
                            case "source":
                                D("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), (l = r);
                                break;
                            case "details":
                                D("toggle", e), (l = r);
                                break;
                            case "input":
                                Bo(e, r), (l = ql(e, r)), D("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = V({}, r, { value: void 0 })),
                                    D("invalid", e);
                                break;
                            case "textarea":
                                Wo(e, r), (l = ti(e, r)), D("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        ri(n, l), (u = l);
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var s = u[i];
                                i === "style"
                                    ? gs(e, s)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && hs(e, s))
                                    : i === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") &&
                                          Tn(e, s)
                                        : typeof s == "number" && Tn(e, "" + s)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Ln.hasOwnProperty(i)
                                          ? s != null &&
                                            i === "onScroll" &&
                                            D("scroll", e)
                                          : s != null && Qi(e, i, s, o));
                            }
                        switch (n) {
                            case "input":
                                rr(e), Ho(e, r, !1);
                                break;
                            case "textarea":
                                rr(e), Qo(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + ct(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Wt(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Wt(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = Ur);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ne(t), null;
        case 6:
            if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(y(166));
                if (((n = kt(Bn.current)), kt(Ue.current), dr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Fe] = t),
                        (i = r.nodeValue !== n) && ((e = ve), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Fe] = t),
                        (t.stateNode = r);
            }
            return ne(t), null;
        case 13:
            if (
                (F($),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (U && he !== null && t.mode & 1 && !(t.flags & 128))
                    la(), qt(), (t.flags |= 98560), (i = !1);
                else if (((i = dr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(y(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(y(317));
                        i[Fe] = t;
                    } else
                        qt(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ne(t), (i = !1);
                } else Le !== null && (Ui(Le), (Le = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || $.current & 1
                              ? X === 0 && (X = 3)
                              : Po())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ne(t),
                  null);
        case 4:
            return (
                en(),
                Li(e, t),
                e === null && Un(t.stateNode.containerInfo),
                ne(t),
                null
            );
        case 10:
            return co(t.type._context), ne(t), null;
        case 17:
            return de(t.type) && $r(), ne(t), null;
        case 19:
            if ((F($), (i = t.memoizedState), i === null)) return ne(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) hn(i, !1);
                else {
                    if (X !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = Kr(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        hn(i, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  o.memoizedProps),
                                              (i.memoizedState =
                                                  o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return M($, ($.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        Q() > nn &&
                        ((t.flags |= 128),
                        (r = !0),
                        hn(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Kr(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            hn(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !o.alternate &&
                                !U)
                        )
                            return ne(t), null;
                    } else
                        2 * Q() - i.renderingStartTime > nn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            hn(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (i.last = o));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Q()),
                  (t.sibling = null),
                  (n = $.current),
                  M($, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ne(t), null);
        case 22:
        case 23:
            return (
                jo(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? me & 1073741824 &&
                      (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ne(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(y(156, t.tag));
}
function hd(e, t) {
    switch ((oo(t), t.tag)) {
        case 1:
            return (
                de(t.type) && $r(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                en(),
                F(fe),
                F(le),
                vo(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return ho(t), null;
        case 13:
            if (
                (F($),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(y(340));
                qt();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return F($), null;
        case 4:
            return en(), null;
        case 10:
            return co(t.type._context), null;
        case 22:
        case 23:
            return jo(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var hr = !1,
    re = !1,
    vd = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
function Bt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                B(e, t, r);
            }
        else n.current = null;
}
function Ti(e, t, n) {
    try {
        n();
    } catch (r) {
        B(e, t, r);
    }
}
var Mu = !1;
function gd(e, t) {
    if (((mi = Dr), (e = Qs()), lo(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        v = 0,
                        h = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var x;
                            h !== n ||
                                (l !== 0 && h.nodeType !== 3) ||
                                (u = o + l),
                                h !== i ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (s = o + r),
                                h.nodeType === 3 && (o += h.nodeValue.length),
                                (x = h.firstChild) !== null;

                        )
                            (m = h), (h = x);
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (m === n && ++c === l && (u = o),
                                m === i && ++v === r && (s = o),
                                (x = h.nextSibling) !== null)
                            )
                                break;
                            (h = m), (m = h.parentNode);
                        }
                        h = x;
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        hi = { focusedElem: e, selectionRange: n }, Dr = !1, S = t;
        S !== null;

    )
        if (
            ((t = S),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (S = e);
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var k = w.memoizedProps,
                                        I = w.memoizedState,
                                        f = t.stateNode,
                                        a = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? k
                                                : Pe(t.type, k),
                                            I
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(y(163));
                        }
                } catch (g) {
                    B(t, t.return, g);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (S = e);
                    break;
                }
                S = t.return;
            }
    return (w = Mu), (Mu = !1), w;
}
function jn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                (l.destroy = void 0), i !== void 0 && Ti(t, n, i);
            }
            l = l.next;
        } while (l !== r);
    }
}
function cl(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Ri(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Ba(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ba(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Fe],
                delete t[An],
                delete t[yi],
                delete t[bf],
                delete t[ed])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ha(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ha(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Ur));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Oi(e, t, n), e = e.sibling; e !== null; )
            Oi(e, t, n), (e = e.sibling);
}
function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Mi(e, t, n), e = e.sibling; e !== null; )
            Mi(e, t, n), (e = e.sibling);
}
var q = null,
    ze = !1;
function Ge(e, t, n) {
    for (n = n.child; n !== null; ) Wa(e, t, n), (n = n.sibling);
}
function Wa(e, t, n) {
    if (Ie && typeof Ie.onCommitFiberUnmount == "function")
        try {
            Ie.onCommitFiberUnmount(nl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            re || Bt(n, t);
        case 6:
            var r = q,
                l = ze;
            (q = null),
                Ge(e, t, n),
                (q = r),
                (ze = l),
                q !== null &&
                    (ze
                        ? ((e = q),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : q.removeChild(n.stateNode));
            break;
        case 18:
            q !== null &&
                (ze
                    ? ((e = q),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Fl(e.parentNode, n)
                          : e.nodeType === 1 && Fl(e, n),
                      Dn(e))
                    : Fl(q, n.stateNode));
            break;
        case 4:
            (r = q),
                (l = ze),
                (q = n.stateNode.containerInfo),
                (ze = !0),
                Ge(e, t, n),
                (q = r),
                (ze = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !re &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    (i = i.tag),
                        o !== void 0 && (i & 2 || i & 4) && Ti(n, t, o),
                        (l = l.next);
                } while (l !== r);
            }
            Ge(e, t, n);
            break;
        case 1:
            if (
                !re &&
                (Bt(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    B(n, t, u);
                }
            Ge(e, t, n);
            break;
        case 21:
            Ge(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((re = (r = re) || n.memoizedState !== null),
                  Ge(e, t, n),
                  (re = r))
                : Ge(e, t, n);
            break;
        default:
            Ge(e, t, n);
    }
}
function Fu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new vd()),
            t.forEach(function (r) {
                var l = _d.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function je(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (q = u.stateNode), (ze = !1);
                            break e;
                        case 3:
                            (q = u.stateNode.containerInfo), (ze = !0);
                            break e;
                        case 4:
                            (q = u.stateNode.containerInfo), (ze = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (q === null) throw Error(y(160));
                Wa(i, o, l), (q = null), (ze = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                B(l, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Qa(t, e), (t = t.sibling);
}
function Qa(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((je(t, e), Me(e), r & 4)) {
                try {
                    jn(3, e, e.return), cl(3, e);
                } catch (k) {
                    B(e, e.return, k);
                }
                try {
                    jn(5, e, e.return);
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            break;
        case 1:
            je(t, e), Me(e), r & 512 && n !== null && Bt(n, n.return);
            break;
        case 5:
            if (
                (je(t, e),
                Me(e),
                r & 512 && n !== null && Bt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Tn(l, "");
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            ds(l, i),
                            li(u, o);
                        var c = li(u, i);
                        for (o = 0; o < s.length; o += 2) {
                            var v = s[o],
                                h = s[o + 1];
                            v === "style"
                                ? gs(l, h)
                                : v === "dangerouslySetInnerHTML"
                                ? hs(l, h)
                                : v === "children"
                                ? Tn(l, h)
                                : Qi(l, v, h, c);
                        }
                        switch (u) {
                            case "input":
                                bl(l, i);
                                break;
                            case "textarea":
                                ps(l, i);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var x = i.value;
                                x != null
                                    ? Wt(l, !!i.multiple, x, !1)
                                    : m !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Wt(
                                                l,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Wt(
                                                l,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[An] = i;
                    } catch (k) {
                        B(e, e.return, k);
                    }
            }
            break;
        case 6:
            if ((je(t, e), Me(e), r & 4)) {
                if (e.stateNode === null) throw Error(y(162));
                (l = e.stateNode), (i = e.memoizedProps);
                try {
                    l.nodeValue = i;
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            break;
        case 3:
            if (
                (je(t, e),
                Me(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Dn(t.containerInfo);
                } catch (k) {
                    B(e, e.return, k);
                }
            break;
        case 4:
            je(t, e), Me(e);
            break;
        case 13:
            je(t, e),
                Me(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((i = l.memoizedState !== null),
                    (l.stateNode.isHidden = i),
                    !i ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (Co = Q())),
                r & 4 && Fu(e);
            break;
        case 22:
            if (
                ((v = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((re = (c = re) || v), je(t, e), (re = c))
                    : je(t, e),
                Me(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !v && e.mode & 1)
                )
                    for (S = e, v = e.child; v !== null; ) {
                        for (h = S = v; S !== null; ) {
                            switch (((m = S), (x = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    jn(4, m, m.return);
                                    break;
                                case 1:
                                    Bt(m, m.return);
                                    var w = m.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (w.props = t.memoizedProps),
                                                (w.state = t.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (k) {
                                            B(r, n, k);
                                        }
                                    }
                                    break;
                                case 5:
                                    Bt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Uu(h);
                                        continue;
                                    }
                            }
                            x !== null ? ((x.return = m), (S = x)) : Uu(h);
                        }
                        v = v.sibling;
                    }
                e: for (v = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (v === null) {
                            v = h;
                            try {
                                (l = h.stateNode),
                                    c
                                        ? ((i = l.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((u = h.stateNode),
                                          (s = h.memoizedProps.style),
                                          (o =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (u.style.display = vs("display", o)));
                            } catch (k) {
                                B(e, e.return, k);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (v === null)
                            try {
                                h.stateNode.nodeValue = c
                                    ? ""
                                    : h.memoizedProps;
                            } catch (k) {
                                B(e, e.return, k);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === e) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e;
                        v === h && (v = null), (h = h.return);
                    }
                    v === h && (v = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling);
                }
            }
            break;
        case 19:
            je(t, e), Me(e), r & 4 && Fu(e);
            break;
        case 21:
            break;
        default:
            je(t, e), Me(e);
    }
}
function Me(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ha(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(y(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Tn(l, ""), (r.flags &= -33));
                    var i = Du(e);
                    Mi(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Du(e);
                    Oi(e, u, o);
                    break;
                default:
                    throw Error(y(161));
            }
        } catch (s) {
            B(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function yd(e, t, n) {
    (S = e), Ka(e);
}
function Ka(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || hr;
            if (!o) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || re;
                u = hr;
                var c = re;
                if (((hr = o), (re = s) && !c))
                    for (S = l; S !== null; )
                        (o = S),
                            (s = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? $u(l)
                                : s !== null
                                ? ((s.return = o), (S = s))
                                : $u(l);
                for (; i !== null; ) (S = i), Ka(i), (i = i.sibling);
                (S = l), (hr = u), (re = c);
            }
            Iu(e);
        } else
            l.subtreeFlags & 8772 && i !== null
                ? ((i.return = l), (S = i))
                : Iu(e);
    }
}
function Iu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            re || cl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !re)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Pe(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && wu(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                wu(t, o, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var v = c.memoizedState;
                                    if (v !== null) {
                                        var h = v.dehydrated;
                                        h !== null && Dn(h);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(y(163));
                    }
                re || (t.flags & 512 && Ri(t));
            } catch (m) {
                B(t, t.return, m);
            }
        }
        if (t === e) {
            S = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function Uu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function $u(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        cl(4, t);
                    } catch (s) {
                        B(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            B(t, l, s);
                        }
                    }
                    var i = t.return;
                    try {
                        Ri(t);
                    } catch (s) {
                        B(t, i, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ri(t);
                    } catch (s) {
                        B(t, o, s);
                    }
            }
        } catch (s) {
            B(t, t.return, s);
        }
        if (t === e) {
            S = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (S = u);
            break;
        }
        S = t.return;
    }
}
var xd = Math.ceil,
    Gr = Xe.ReactCurrentDispatcher,
    Eo = Xe.ReactCurrentOwner,
    Ee = Xe.ReactCurrentBatchConfig,
    R = 0,
    J = null,
    K = null,
    b = 0,
    me = 0,
    Ht = pt(0),
    X = 0,
    Kn = null,
    jt = 0,
    fl = 0,
    No = 0,
    Pn = null,
    ae = null,
    Co = 0,
    nn = 1 / 0,
    $e = null,
    Zr = !1,
    Di = null,
    ut = null,
    vr = !1,
    tt = null,
    Jr = 0,
    zn = 0,
    Fi = null,
    jr = -1,
    Pr = 0;
function oe() {
    return R & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function st(e) {
    return e.mode & 1
        ? R & 2 && b !== 0
            ? b & -b
            : nd.transition !== null
            ? (Pr === 0 && (Pr = zs()), Pr)
            : ((e = O),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Fs(e.type))),
              e)
        : 1;
}
function Re(e, t, n, r) {
    if (50 < zn) throw ((zn = 0), (Fi = null), Error(y(185)));
    Gn(e, n, r),
        (!(R & 2) || e !== J) &&
            (e === J && (!(R & 2) && (fl |= n), X === 4 && be(e, b)),
            pe(e, r),
            n === 1 &&
                R === 0 &&
                !(t.mode & 1) &&
                ((nn = Q() + 500), ul && mt()));
}
function pe(e, t) {
    var n = e.callbackNode;
    tf(e, t);
    var r = Mr(e, e === J ? b : 0);
    if (r === 0)
        n !== null && Xo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Xo(n), t === 1))
            e.tag === 0 ? td(Au.bind(null, e)) : ta(Au.bind(null, e)),
                Jf(function () {
                    !(R & 6) && mt();
                }),
                (n = null);
        else {
            switch (Ls(r)) {
                case 1:
                    n = Zi;
                    break;
                case 4:
                    n = js;
                    break;
                case 16:
                    n = Or;
                    break;
                case 536870912:
                    n = Ps;
                    break;
                default:
                    n = Or;
            }
            n = ec(n, Ya.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Ya(e, t) {
    if (((jr = -1), (Pr = 0), R & 6)) throw Error(y(327));
    var n = e.callbackNode;
    if (Gt() && e.callbackNode !== n) return null;
    var r = Mr(e, e === J ? b : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
    else {
        t = r;
        var l = R;
        R |= 2;
        var i = Ga();
        (J !== e || b !== t) && (($e = null), (nn = Q() + 500), St(e, t));
        do
            try {
                Sd();
                break;
            } catch (u) {
                Xa(e, u);
            }
        while (1);
        ao(),
            (Gr.current = i),
            (R = l),
            K !== null ? (t = 0) : ((J = null), (b = 0), (t = X));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = ai(e)), l !== 0 && ((r = l), (t = Ii(e, l)))),
            t === 1)
        )
            throw ((n = Kn), St(e, 0), be(e, r), pe(e, Q()), n);
        if (t === 6) be(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !wd(l) &&
                    ((t = qr(e, r)),
                    t === 2 &&
                        ((i = ai(e)), i !== 0 && ((r = i), (t = Ii(e, i)))),
                    t === 1))
            )
                throw ((n = Kn), St(e, 0), be(e, r), pe(e, Q()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    yt(e, ae, $e);
                    break;
                case 3:
                    if (
                        (be(e, r),
                        (r & 130023424) === r && ((t = Co + 500 - Q()), 10 < t))
                    ) {
                        if (Mr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            oe(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = gi(yt.bind(null, e, ae, $e), t);
                        break;
                    }
                    yt(e, ae, $e);
                    break;
                case 4:
                    if ((be(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - Te(r);
                        (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
                    }
                    if (
                        ((r = l),
                        (r = Q() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * xd(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = gi(yt.bind(null, e, ae, $e), r);
                        break;
                    }
                    yt(e, ae, $e);
                    break;
                case 5:
                    yt(e, ae, $e);
                    break;
                default:
                    throw Error(y(329));
            }
        }
    }
    return pe(e, Q()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Ii(e, t) {
    var n = Pn;
    return (
        e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
        (e = qr(e, t)),
        e !== 2 && ((t = ae), (ae = n), t !== null && Ui(t)),
        e
    );
}
function Ui(e) {
    ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function wd(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(i(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function be(e, t) {
    for (
        t &= ~No,
            t &= ~fl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Te(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Au(e) {
    if (R & 6) throw Error(y(327));
    Gt();
    var t = Mr(e, 0);
    if (!(t & 1)) return pe(e, Q()), null;
    var n = qr(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ai(e);
        r !== 0 && ((t = r), (n = Ii(e, r)));
    }
    if (n === 1) throw ((n = Kn), St(e, 0), be(e, t), pe(e, Q()), n);
    if (n === 6) throw Error(y(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        yt(e, ae, $e),
        pe(e, Q()),
        null
    );
}
function _o(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t);
    } finally {
        (R = n), R === 0 && ((nn = Q() + 500), ul && mt());
    }
}
function Pt(e) {
    tt !== null && tt.tag === 0 && !(R & 6) && Gt();
    var t = R;
    R |= 1;
    var n = Ee.transition,
        r = O;
    try {
        if (((Ee.transition = null), (O = 1), e)) return e();
    } finally {
        (O = r), (Ee.transition = n), (R = t), !(R & 6) && mt();
    }
}
function jo() {
    (me = Ht.current), F(Ht);
}
function St(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zf(n)), K !== null))
        for (n = K.return; n !== null; ) {
            var r = n;
            switch ((oo(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && $r();
                    break;
                case 3:
                    en(), F(fe), F(le), vo();
                    break;
                case 5:
                    ho(r);
                    break;
                case 4:
                    en();
                    break;
                case 13:
                    F($);
                    break;
                case 19:
                    F($);
                    break;
                case 10:
                    co(r.type._context);
                    break;
                case 22:
                case 23:
                    jo();
            }
            n = n.return;
        }
    if (
        ((J = e),
        (K = e = at(e.current, null)),
        (b = me = t),
        (X = 0),
        (Kn = null),
        (No = fl = jt = 0),
        (ae = Pn = null),
        wt !== null)
    ) {
        for (t = 0; t < wt.length; t++)
            if (((n = wt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = l), (r.next = o);
                }
                n.pending = r;
            }
        wt = null;
    }
    return e;
}
function Xa(e, t) {
    do {
        var n = K;
        try {
            if ((ao(), (Nr.current = Xr), Yr)) {
                for (var r = A.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Yr = !1;
            }
            if (
                ((_t = 0),
                (Z = Y = A = null),
                (_n = !1),
                (Hn = 0),
                (Eo.current = null),
                n === null || n.return === null)
            ) {
                (X = 1), (Kn = t), (K = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    s = t;
                if (
                    ((t = b),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var c = s,
                        v = u,
                        h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m
                            ? ((v.updateQueue = m.updateQueue),
                              (v.memoizedState = m.memoizedState),
                              (v.lanes = m.lanes))
                            : ((v.updateQueue = null),
                              (v.memoizedState = null));
                    }
                    var x = ju(o);
                    if (x !== null) {
                        (x.flags &= -257),
                            Pu(x, o, u, i, t),
                            x.mode & 1 && _u(i, c, t),
                            (t = x),
                            (s = c);
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set();
                            k.add(s), (t.updateQueue = k);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            _u(i, c, t), Po();
                            break e;
                        }
                        s = Error(y(426));
                    }
                } else if (U && u.mode & 1) {
                    var I = ju(o);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256),
                            Pu(I, o, u, i, t),
                            uo(tn(s, u));
                        break e;
                    }
                }
                (i = s = tn(s, u)),
                    X !== 4 && (X = 2),
                    Pn === null ? (Pn = [i]) : Pn.push(i),
                    (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var f = Ta(i, s, t);
                            xu(i, f);
                            break e;
                        case 1:
                            u = s;
                            var a = i.type,
                                d = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof a.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (ut === null || !ut.has(d))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var g = Ra(i, u, t);
                                xu(i, g);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Ja(n);
        } catch (E) {
            (t = E), K === n && n !== null && (K = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Ga() {
    var e = Gr.current;
    return (Gr.current = Xr), e === null ? Xr : e;
}
function Po() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
        J === null || (!(jt & 268435455) && !(fl & 268435455)) || be(J, b);
}
function qr(e, t) {
    var n = R;
    R |= 2;
    var r = Ga();
    (J !== e || b !== t) && (($e = null), St(e, t));
    do
        try {
            kd();
            break;
        } catch (l) {
            Xa(e, l);
        }
    while (1);
    if ((ao(), (R = n), (Gr.current = r), K !== null)) throw Error(y(261));
    return (J = null), (b = 0), X;
}
function kd() {
    for (; K !== null; ) Za(K);
}
function Sd() {
    for (; K !== null && !Kc(); ) Za(K);
}
function Za(e) {
    var t = ba(e.alternate, e, me);
    (e.memoizedProps = e.pendingProps),
        t === null ? Ja(e) : (K = t),
        (Eo.current = null);
}
function Ja(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = hd(n, t)), n !== null)) {
                (n.flags &= 32767), (K = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (X = 6), (K = null);
                return;
            }
        } else if (((n = md(n, t, me)), n !== null)) {
            K = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            K = t;
            return;
        }
        K = t = e;
    } while (t !== null);
    X === 0 && (X = 5);
}
function yt(e, t, n) {
    var r = O,
        l = Ee.transition;
    try {
        (Ee.transition = null), (O = 1), Ed(e, t, n, r);
    } finally {
        (Ee.transition = l), (O = r);
    }
    return null;
}
function Ed(e, t, n, r) {
    do Gt();
    while (tt !== null);
    if (R & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (nf(e, i),
        e === J && ((K = J = null), (b = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            vr ||
            ((vr = !0),
            ec(Or, function () {
                return Gt(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Ee.transition), (Ee.transition = null);
        var o = O;
        O = 1;
        var u = R;
        (R |= 4),
            (Eo.current = null),
            gd(e, n),
            Qa(n, e),
            Hf(hi),
            (Dr = !!mi),
            (hi = mi = null),
            (e.current = n),
            yd(n),
            Yc(),
            (R = u),
            (O = o),
            (Ee.transition = i);
    } else e.current = n;
    if (
        (vr && ((vr = !1), (tt = e), (Jr = l)),
        (i = e.pendingLanes),
        i === 0 && (ut = null),
        Zc(n.stateNode),
        pe(e, Q()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Zr) throw ((Zr = !1), (e = Di), (Di = null), e);
    return (
        Jr & 1 && e.tag !== 0 && Gt(),
        (i = e.pendingLanes),
        i & 1 ? (e === Fi ? zn++ : ((zn = 0), (Fi = e))) : (zn = 0),
        mt(),
        null
    );
}
function Gt() {
    if (tt !== null) {
        var e = Ls(Jr),
            t = Ee.transition,
            n = O;
        try {
            if (((Ee.transition = null), (O = 16 > e ? 16 : e), tt === null))
                var r = !1;
            else {
                if (((e = tt), (tt = null), (Jr = 0), R & 6))
                    throw Error(y(331));
                var l = R;
                for (R |= 4, S = e.current; S !== null; ) {
                    var i = S,
                        o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (S = c; S !== null; ) {
                                    var v = S;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            jn(8, v, i);
                                    }
                                    var h = v.child;
                                    if (h !== null) (h.return = v), (S = h);
                                    else
                                        for (; S !== null; ) {
                                            v = S;
                                            var m = v.sibling,
                                                x = v.return;
                                            if ((Ba(v), v === c)) {
                                                S = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = x), (S = m);
                                                break;
                                            }
                                            S = x;
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var I = k.sibling;
                                        (k.sibling = null), (k = I);
                                    } while (k !== null);
                                }
                            }
                            S = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        (o.return = i), (S = o);
                    else
                        e: for (; S !== null; ) {
                            if (((i = S), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        jn(9, i, i.return);
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                (f.return = i.return), (S = f);
                                break e;
                            }
                            S = i.return;
                        }
                }
                var a = e.current;
                for (S = a; S !== null; ) {
                    o = S;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null)
                        (d.return = o), (S = d);
                    else
                        e: for (o = a; S !== null; ) {
                            if (((u = S), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cl(9, u);
                                    }
                                } catch (E) {
                                    B(u, u.return, E);
                                }
                            if (u === o) {
                                S = null;
                                break e;
                            }
                            var g = u.sibling;
                            if (g !== null) {
                                (g.return = u.return), (S = g);
                                break e;
                            }
                            S = u.return;
                        }
                }
                if (
                    ((R = l),
                    mt(),
                    Ie && typeof Ie.onPostCommitFiberRoot == "function")
                )
                    try {
                        Ie.onPostCommitFiberRoot(nl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (O = n), (Ee.transition = t);
        }
    }
    return !1;
}
function Vu(e, t, n) {
    (t = tn(n, t)),
        (t = Ta(e, t, 1)),
        (e = ot(e, t, 1)),
        (t = oe()),
        e !== null && (Gn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
    if (e.tag === 3) Vu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (ut === null || !ut.has(r)))
                ) {
                    (e = tn(n, e)),
                        (e = Ra(t, e, 1)),
                        (t = ot(t, e, 1)),
                        (e = oe()),
                        t !== null && (Gn(t, 1, e), pe(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Nd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = oe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        J === e &&
            (b & n) === n &&
            (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - Co)
                ? St(e, 0)
                : (No |= n)),
        pe(e, t);
}
function qa(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
            : (t = 1));
    var n = oe();
    (e = Ke(e, t)), e !== null && (Gn(e, t, n), pe(e, n));
}
function Cd(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), qa(e, n);
}
function _d(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314));
    }
    r !== null && r.delete(t), qa(e, n);
}
var ba;
ba = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (ce = !1), pd(e, t, n);
            ce = !!(e.flags & 131072);
        }
    else (ce = !1), U && t.flags & 1048576 && na(t, Br, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            _r(e, t), (e = t.pendingProps);
            var l = Jt(t, le.current);
            Xt(t, n), (l = yo(null, t, r, e, l, n));
            var i = xo();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      de(r) ? ((i = !0), Ar(t)) : (i = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      po(t),
                      (l.updater = sl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      Ni(t, r, e, n),
                      (t = ji(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      U && i && io(t),
                      ie(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (_r(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = Pd(r)),
                    (e = Pe(r, e)),
                    l)
                ) {
                    case 0:
                        t = _i(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Tu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = zu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Lu(null, t, r, Pe(r.type, e), n);
                        break e;
                }
                throw Error(y(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Pe(r, l)),
                _i(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Pe(r, l)),
                Tu(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((Fa(t), e === null)) throw Error(y(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (l = i.element),
                    oa(e, t),
                    Qr(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (l = tn(Error(y(423)), t)), (t = Ru(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = tn(Error(y(424)), t)), (t = Ru(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            he = it(t.stateNode.containerInfo.firstChild),
                                ve = t,
                                U = !0,
                                Le = null,
                                n = ca(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((qt(), r === l)) {
                        t = Ye(e, t, n);
                        break e;
                    }
                    ie(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                fa(t),
                e === null && ki(t),
                (r = t.type),
                (l = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = l.children),
                vi(r, l)
                    ? (o = null)
                    : i !== null && vi(r, i) && (t.flags |= 32),
                Da(e, t),
                ie(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && ki(t), null;
        case 13:
            return Ia(e, t, n);
        case 4:
            return (
                mo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = bt(t, null, r, n)) : ie(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Pe(r, l)),
                zu(e, t, r, l, n)
            );
        case 7:
            return ie(e, t, t.pendingProps, n), t.child;
        case 8:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = l.value),
                    M(Hr, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (Oe(i.value, o)) {
                        if (i.children === l.children && !fe.current) {
                            t = Ye(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            (s = He(-1, n & -n)), (s.tag = 2);
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var v = c.pending;
                                                v === null
                                                    ? (s.next = s)
                                                    : ((s.next = v.next),
                                                      (v.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (s = i.alternate),
                                            s !== null && (s.lanes |= n),
                                            Si(i.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (i.tag === 10)
                                o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null))
                                    throw Error(y(341));
                                (o.lanes |= n),
                                    (u = o.alternate),
                                    u !== null && (u.lanes |= n),
                                    Si(o, n, t),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                ie(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                Xt(t, n),
                (l = Ne(l)),
                (r = r(l)),
                (t.flags |= 1),
                ie(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = Pe(r, t.pendingProps)),
                (l = Pe(r.type, l)),
                Lu(e, t, r, l, n)
            );
        case 15:
            return Oa(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Pe(r, l)),
                _r(e, t),
                (t.tag = 1),
                de(r) ? ((e = !0), Ar(t)) : (e = !1),
                Xt(t, n),
                sa(t, r, l),
                Ni(t, r, l, n),
                ji(null, t, r, !0, e, n)
            );
        case 19:
            return Ua(e, t, n);
        case 22:
            return Ma(e, t, n);
    }
    throw Error(y(156, t.tag));
};
function ec(e, t) {
    return _s(e, t);
}
function jd(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Se(e, t, n, r) {
    return new jd(e, t, n, r);
}
function zo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pd(e) {
    if (typeof e == "function") return zo(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Yi)) return 11;
        if (e === Xi) return 14;
    }
    return 2;
}
function at(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Se(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function zr(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) zo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case Ot:
                return Et(n.children, l, i, t);
            case Ki:
                (o = 8), (l |= 8);
                break;
            case Xl:
                return (
                    (e = Se(12, n, t, l | 2)),
                    (e.elementType = Xl),
                    (e.lanes = i),
                    e
                );
            case Gl:
                return (
                    (e = Se(13, n, t, l)),
                    (e.elementType = Gl),
                    (e.lanes = i),
                    e
                );
            case Zl:
                return (
                    (e = Se(19, n, t, l)),
                    (e.elementType = Zl),
                    (e.lanes = i),
                    e
                );
            case as:
                return dl(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case us:
                            o = 10;
                            break e;
                        case ss:
                            o = 9;
                            break e;
                        case Yi:
                            o = 11;
                            break e;
                        case Xi:
                            o = 14;
                            break e;
                        case Ze:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(y(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Se(o, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Et(e, t, n, r) {
    return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
    return (
        (e = Se(22, e, r, t)),
        (e.elementType = as),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Wl(e, t, n) {
    return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
    return (
        (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function zd(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Cl(0)),
        (this.expirationTimes = Cl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Cl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function Lo(e, t, n, r, l, i, o, u, s) {
    return (
        (e = new zd(e, t, n, u, s)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Se(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        po(i),
        e
    );
}
function Ld(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function tc(e) {
    if (!e) return ft;
    e = e._reactInternals;
    e: {
        if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (de(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(y(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (de(n)) return ea(e, n, t);
    }
    return t;
}
function nc(e, t, n, r, l, i, o, u, s) {
    return (
        (e = Lo(n, r, !0, e, l, i, o, u, s)),
        (e.context = tc(null)),
        (n = e.current),
        (r = oe()),
        (l = st(n)),
        (i = He(r, l)),
        (i.callback = t ?? null),
        ot(n, i, l),
        (e.current.lanes = l),
        Gn(e, l, r),
        pe(e, r),
        e
    );
}
function pl(e, t, n, r) {
    var l = t.current,
        i = oe(),
        o = st(l);
    return (
        (n = tc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = He(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = ot(l, t, o)),
        e !== null && (Re(e, l, o, i), Er(e, l, o)),
        o
    );
}
function br(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Bu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function To(e, t) {
    Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Td() {
    return null;
}
var rc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Ro(e) {
    this._internalRoot = e;
}
ml.prototype.render = Ro.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    pl(e, t, null, null);
};
ml.prototype.unmount = Ro.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Pt(function () {
            pl(null, e, null, null);
        }),
            (t[Qe] = null);
    }
};
function ml(e) {
    this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Os();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
        qe.splice(n, 0, e), n === 0 && Ds(e);
    }
};
function Oo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Hu() {}
function Rd(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = br(o);
                i.call(c);
            };
        }
        var o = nc(t, r, e, 0, null, !1, !1, "", Hu);
        return (
            (e._reactRootContainer = o),
            (e[Qe] = o.current),
            Un(e.nodeType === 8 ? e.parentNode : e),
            Pt(),
            o
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var c = br(s);
            u.call(c);
        };
    }
    var s = Lo(e, 0, !1, null, null, !1, !1, "", Hu);
    return (
        (e._reactRootContainer = s),
        (e[Qe] = s.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        Pt(function () {
            pl(t, s, n, r);
        }),
        s
    );
}
function vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = br(o);
                u.call(s);
            };
        }
        pl(t, o, e, l);
    } else o = Rd(n, t, e, l, r);
    return br(o);
}
Ts = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = xn(t.pendingLanes);
                n !== 0 &&
                    (Ji(t, n | 1),
                    pe(t, Q()),
                    !(R & 6) && ((nn = Q() + 500), mt()));
            }
            break;
        case 13:
            Pt(function () {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = oe();
                    Re(r, e, 1, l);
                }
            }),
                To(e, 1);
    }
};
qi = function (e) {
    if (e.tag === 13) {
        var t = Ke(e, 134217728);
        if (t !== null) {
            var n = oe();
            Re(t, e, 134217728, n);
        }
        To(e, 134217728);
    }
};
Rs = function (e) {
    if (e.tag === 13) {
        var t = st(e),
            n = Ke(e, t);
        if (n !== null) {
            var r = oe();
            Re(n, e, t, r);
        }
        To(e, t);
    }
};
Os = function () {
    return O;
};
Ms = function (e, t) {
    var n = O;
    try {
        return (O = e), t();
    } finally {
        O = n;
    }
};
oi = function (e, t, n) {
    switch (t) {
        case "input":
            if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ol(r);
                        if (!l) throw Error(y(90));
                        fs(r), bl(r, l);
                    }
                }
            }
            break;
        case "textarea":
            ps(e, n);
            break;
        case "select":
            (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
    }
};
ws = _o;
ks = Pt;
var Od = { usingClientEntryPoint: !1, Events: [Jn, It, ol, ys, xs, _o] },
    vn = {
        findFiberByHostInstance: xt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Md = {
        bundleType: vn.bundleType,
        version: vn.version,
        rendererPackageName: vn.rendererPackageName,
        rendererConfig: vn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Ns(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: vn.findFiberByHostInstance || Td,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            (nl = gr.inject(Md)), (Ie = gr);
        } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od;
ye.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oo(t)) throw Error(y(200));
    return Ld(e, t, null, n);
};
ye.createRoot = function (e, t) {
    if (!Oo(e)) throw Error(y(299));
    var n = !1,
        r = "",
        l = rc;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Lo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Qe] = t.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        new Ro(t)
    );
};
ye.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(y(188))
            : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
    return Pt(e);
};
ye.hydrate = function (e, t, n) {
    if (!hl(t)) throw Error(y(200));
    return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
    if (!Oo(e)) throw Error(y(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = rc;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = nc(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Qe] = t.current),
        Un(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new ml(t);
};
ye.render = function (e, t, n) {
    if (!hl(t)) throw Error(y(200));
    return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
    if (!hl(e)) throw Error(y(40));
    return e._reactRootContainer
        ? (Pt(function () {
              vl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Qe] = null);
              });
          }),
          !0)
        : !1;
};
ye.unstable_batchedUpdates = _o;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!hl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return vl(e, t, n, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function lc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
        } catch (e) {
            console.error(e);
        }
}
lc(), (ns.exports = ye);
var Dd = ns.exports,
    Wu = Dd;
(Kl.createRoot = Wu.createRoot), (Kl.hydrateRoot = Wu.hydrateRoot);
const Mo = "./assets/arrow-right-bda17713.svg",
    Fd = "./assets/copyright-sign-980e3d21.svg",
    Id = "./assets/facebook-ff6684c8.svg",
    Ud = "./assets/hamburger-4c58344a.svg",
    $d = "./assets/instagram-11886854.svg",
    Ad = "./assets/support-f3742739.svg",
    Vd = "./assets/shield-tick-ddabc82c.svg",
    ic = "./assets/star-b33c0941.svg",
    Bd = "./assets/truck-fast-c70b3352.svg",
    Hd = "./assets/twitter-c7241c8d.svg",
    oc = "./assets/big-shoe1-0c574e3f.png",
    Wd = "./assets/big-shoe2-84852328.png",
    Qd = "./assets/big-shoe3-f8fa095d.png",
    Kd = "./assets/customer1-68e0c3c8.jpeg",
    Qu = "./assets/customer2-b505f82b.svg",
    Yd = "./assets/footer-logo-9bb41105.svg",
    Xd = "./assets/header-logo-f3f84f25.svg",
    Gd = "./assets/offer-48ade8be.svg",
    Zd = "./assets/shoe4-5cd32a27.svg",
    Jd = "./assets/shoe5-11ed4d98.svg",
    qd = "./assets/shoe6-eccd3cf3.svg",
    bd = "./assets/shoe7-534e714d.svg",
    ep = "./assets/shoe8-2e8b40c8.svg",
    tp = "./assets/thumbnail-shoe1-8e2f6c72.svg",
    np = "./assets/thumbnail-shoe2-e6a58b8d.svg",
    rp = "./assets/thumbnail-shoe3-e4641b84.svg",
    Yn = ({
        label: e,
        iconURL: t,
        backgroundColor: n,
        textColor: r,
        borderColor: l,
        fullWidth: i,
    }) =>
        p.jsxs("button", {
            className: `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
            ${
                n
                    ? `${n} ${r} ${l}`
                    : "bg-coral-red text-white border-coral-red"
            } rounded-full ${i && "w-full"} `,
            children: [
                e,
                t &&
                    p.jsx("img", {
                        src: t,
                        alt: "arrow right icon",
                        className: "ml-2 rounded-full w-5 h-5",
                    }),
            ],
        }),
    lp = ({ imgUrl: e, changeBigShoeImage: t, bigShoeImg: n }) => {
        const r = () => {
            n !== e.bigShoe && t(e.bigShoe);
        };
        return p.jsx("div", {
            className: `border-2 rounded-xl 
            ${
                n === e.bigShoe ? "border-coral-red" : "border-transparent"
            } cursor-pointer max-sm:flex-1`,
            onClick: r,
            children: p.jsx("div", {
                className:
                    "flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4",
                children: p.jsx("img", {
                    src: e.thumbnail,
                    alt: "shoe collection",
                    width: 127,
                    height: 103,
                    className: "object-contain",
                }),
            }),
        });
    },
    ip = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ],
    op = [
        { thumbnail: tp, bigShoe: oc },
        { thumbnail: np, bigShoe: Wd },
        { thumbnail: rp, bigShoe: Qd },
    ],
    up = [
        { value: "1k+", label: "Brands" },
        { value: "500+", label: "Shops" },
        { value: "250k+", label: "Customers" },
    ],
    sp = [
        {
            imgURL: Zd,
            name: "Nike Air Jordan-01",
            price: "$200.20",
            rating: "(4.5)",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            imgURL: Jd,
            name: "Nike Air Jordan-10",
            price: "$210.20",
            rating: "(5)",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            imgURL: qd,
            name: "Nike Air Jordan-100",
            price: "$220.20",
            rating: "(5)",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            imgURL: bd,
            name: "Nike Air Jordan-001",
            price: "$230.20",
            rating: "(4.8)",
            description: "Lorem ipsum dolor sit amet.",
        },
    ],
    ap = [
        {
            imgURL: Bd,
            label: "Free shipping",
            subtext:
                "Enjoy seamless shopping with our complimentary shipping service.",
        },
        {
            imgURL: Vd,
            label: "Secure Payment",
            subtext:
                "Experience worry-free transactions with our secure payment options.",
        },
        {
            imgURL: Ad,
            label: "Love to help you",
            subtext:
                "Our dedicated team is here to assist you every step of the way.",
        },
    ],
    cp = [
        {
            imgURL: Kd,
            customerName: "Morich Brown",
            rating: 4.5,
            feedback:
                "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
        },
        {
            imgURL: Qu,
            customerName: "Lota Mongeskar",
            rating: 4.5,
            feedback:
                "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
        },
        {
            imgURL: Qu,
            customerName: "Lota Mongeskar",
            rating: 4.5,
            feedback:
                "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
        },
    ],
    fp = [
        {
            title: "Products",
            links: [
                { name: "Air Force 1", link: "/" },
                { name: "Air Max 1", link: "/" },
                { name: "Air Jordan 1", link: "/" },
                { name: "Air Force 2", link: "/" },
                { name: "Nike Waffle Racer", link: "/" },
                { name: "Nike Cortez", link: "/" },
            ],
        },
        {
            title: "Help",
            links: [
                { name: "About us", link: "/" },
                { name: "FAQs", link: "/" },
                { name: "How it works", link: "/" },
                { name: "Privacy policy", link: "/" },
                { name: "Payment policy", link: "/" },
            ],
        },
        {
            title: "Get in touch",
            links: [
                { name: "customer@nike.com", link: "mailto:customer@nike.com" },
                { name: "+92554862354", link: "tel:+92554862354" },
            ],
        },
    ],
    dp = [
        { src: Id, alt: "facebook logo" },
        { src: Hd, alt: "twitter logo" },
        { src: $d, alt: "instagram logo" },
    ],
    pp = () => {
        const [e, t] = tl.useState(oc);
        return p.jsxs("section", {
            id: "home",
            className:
                "w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container",
            children: [
                p.jsxs("div", {
                    className:
                        "relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28",
                    children: [
                        p.jsx("p", {
                            className: "text-xl font-montserrat text-coral-red",
                            children: "Our Summer Collection",
                        }),
                        p.jsxs("h1", {
                            className:
                                "mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold",
                            children: [
                                p.jsx("span", {
                                    className:
                                        " xl:whitespace-nowrap tracking-normal relative z-10 pr-10 ",
                                    children: "The New Arrival",
                                }),
                                p.jsx("br", {}),
                                p.jsx("span", {
                                    className:
                                        "text-coral-red mt-3 inline-block",
                                    children: "Nike",
                                }),
                                " ",
                                "Shoes",
                            ],
                        }),
                        p.jsx("p", {
                            className:
                                "font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm",
                            children:
                                "Discover stylish Nike arrivals, quality comfort and innovation for your active life",
                        }),
                        p.jsx(Yn, { label: "Shop now", iconUrl: Mo }),
                        p.jsx("div", {
                            className:
                                "flex justify-start items-start flex-wrap w-full mt-20 gap-16",
                            children: up.map((n) =>
                                p.jsxs(
                                    "div",
                                    {
                                        children: [
                                            p.jsx("p", {
                                                className:
                                                    "text-4xl font-palanquin font-bold",
                                                children: n.value,
                                            }),
                                            p.jsx("p", {
                                                className:
                                                    "leading-7 font-montserrat text-slate-gray",
                                                children: n.label,
                                            }),
                                        ],
                                    },
                                    n.label
                                )
                            ),
                        }),
                    ],
                }),
                p.jsxs("div", {
                    className:
                        "flex justify-center items-center xl:min-h-screen relative flex-1 max-xl:py-40 bg-primary bg-hero bg-cover bg-center",
                    children: [
                        p.jsx("img", {
                            src: e,
                            alt: "Big Shoe Image",
                            width: 610,
                            height: 500,
                            className: "object-contain relative z-10",
                        }),
                        p.jsx("div", {
                            className:
                                "flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6",
                            children: op.map((n) =>
                                p.jsx(
                                    "div",
                                    {
                                        children: p.jsx(lp, {
                                            imgUrl: n,
                                            changeBigShoeImage: (r) => {
                                                t(r);
                                            },
                                            bigShoeImg: e,
                                        }),
                                    },
                                    n
                                )
                            ),
                        }),
                    ],
                }),
            ],
        });
    },
    mp = ({ imgURL: e, customerName: t, rating: n, feedback: r }) =>
        p.jsxs("div", {
            className: "flex justify-center items-center flex-col",
            children: [
                p.jsx("img", {
                    src: e,
                    alt: "customer",
                    className: "rounded-full object-cover w-[120px] h-[120px]",
                }),
                p.jsx("p", {
                    className: "max-w-sm text-center info-text mt-6",
                    children: r,
                }),
                p.jsxs("div", {
                    className: "flex items-center justify-center mt-3 gap-2.5",
                    children: [
                        p.jsx("img", {
                            src: ic,
                            alt: "star icon",
                            width: 24,
                            height: 24,
                            className: "object-contain m-0",
                        }),
                        p.jsxs("p", {
                            className: "mt-3 font-montserrat text-slate-gray",
                            children: ["(", n, ")"],
                        }),
                    ],
                }),
                p.jsx("h3", {
                    className:
                        "mt-1 font-palanquin text-2xl text-center font-bold",
                    children: t,
                }),
            ],
        }),
    hp = () =>
        p.jsxs("section", {
            className: "max-container",
            children: [
                p.jsxs("h3", {
                    className: "font-palanquin text-center font-bold text-4xl",
                    children: [
                        "What Our",
                        p.jsx("span", {
                            className: "text-coral-red",
                            children: " Customers ",
                        }),
                        "Say?",
                    ],
                }),
                p.jsx("p", {
                    className: "info-text m-auto mt-4 text-center max-w-lg",
                    children:
                        "Here are some stores from our satisfied customers",
                }),
                p.jsx("div", {
                    className:
                        "mt-24 flex flex-1 justify-evenly items-center textcenter max-lg:flex-col gap-14",
                    children: cp.map((e) =>
                        p.jsx(
                            mp,
                            {
                                imgURL: e.imgURL,
                                customerName: e.customerName,
                                rating: e.rating,
                                feedback: e.feedback,
                            },
                            e.customerName
                        )
                    ),
                }),
            ],
        }),
    vp = ({ imgURL: e, label: t, subtext: n }) =>
        p.jsxs("div", {
            className:
                "flex-1 sm:w-[350] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16",
            children: [
                p.jsx("div", {
                    className:
                        "w-11 h-11 justify-center items-center bg-coral-red rounded-full flex",
                    children: p.jsx("img", {
                        src: e,
                        alt: t,
                        width: 24,
                        height: 24,
                    }),
                }),
                p.jsx("h3", {
                    className:
                        "mt-5 font-palanquin text-3xl leading-normal font-bold",
                    children: t,
                }),
                p.jsx("p", {
                    className:
                        "break-words mt-3 font-montserrat text-lg leading-normal text-slate-gray",
                    children: n,
                }),
            ],
        }),
    gp = () =>
        p.jsx("section", {
            className: "max-container flex justify-center flex-wrap gap-9",
            children: ap.map((e) => p.jsx(vp, { ...e }, e.label)),
        }),
    yp = ({ imgUrl: e, name: t, price: n, rating: r }) =>
        p.jsxs("div", {
            className: "flex flex-1 flex-col w-full max-sm:w-full",
            children: [
                p.jsx("img", {
                    src: e,
                    alt: t,
                    className: "w-[282px] h-[282px]",
                }),
                p.jsxs("div", {
                    className: "mt-8 flex justify-start gap-2.5",
                    children: [
                        p.jsx("img", {
                            src: ic,
                            alt: "rating icon",
                            width: 24,
                            height: 24,
                        }),
                        p.jsx("p", {
                            className:
                                "font-montserrat leading-normal text-xl text-slate-gray",
                            children: r,
                        }),
                    ],
                }),
                p.jsx("h3", {
                    className:
                        "mt-2 font-semibold font-palanquin leading-normal text-2xl",
                    children: t,
                }),
                p.jsx("p", {
                    className:
                        "mt-2 font-semibold font-montserrat leading-normal text-2xl text-coral-red",
                    children: n,
                }),
            ],
        }),
    xp = () =>
        p.jsxs("section", {
            id: "products",
            className: "max-container max-sm:mt-12",
            children: [
                p.jsxs("div", {
                    className: "flex flex-col justify-start gap-5",
                    children: [
                        p.jsxs("h2", {
                            className: "text-4xl font-palanquin font-bold",
                            children: [
                                "Our ",
                                p.jsx("span", {
                                    className: "text-coral-red",
                                    children: "Popular",
                                }),
                                " Products",
                            ],
                        }),
                        p.jsx("p", {
                            className:
                                "lg:max-w-lg mt-2 font-montserrat text-slate-gray",
                            children:
                                "Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value",
                        }),
                    ],
                }),
                p.jsx("div", {
                    className:
                        "mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14",
                    children: sp.map((e) =>
                        p.jsx(yp, { imgUrl: e.imgURL, ...e }, e.name)
                    ),
                }),
            ],
        }),
    wp = () =>
        p.jsxs("section", {
            id: "about-us",
            className:
                "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ",
            children: [
                p.jsxs("div", {
                    className: "flex flex-1 flex-col",
                    children: [
                        p.jsxs("h2", {
                            className:
                                "font-palanquin text-4xl font-bold lg:max-w-lg font-bold capitalize",
                            children: [
                                "We provide you",
                                " ",
                                p.jsxs("span", {
                                    className: " text-coral-red ",
                                    children: [
                                        "Super ",
                                        p.jsx("span", {
                                            className: "text-coral-red",
                                            children: "Quality",
                                        }),
                                    ],
                                }),
                                " ",
                                "Shoes",
                            ],
                        }),
                        p.jsx("p", {
                            className: "mt-4 info-text lg:max-w-lg",
                            children:
                                "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.",
                        }),
                        p.jsxs("p", {
                            className: "mt-6 lg:max-w-lg info-text",
                            children: [
                                " ",
                                "Our dedication to detail and excellence ensures your satisfaction",
                            ],
                        }),
                        p.jsx("div", {
                            className: "mt-11",
                            children: p.jsx(Yn, {
                                label: "View details",
                                iconUrl: Mo,
                            }),
                        }),
                    ],
                }),
                p.jsx("div", {
                    className: "flex flex-1 justify-center items-center",
                    children: p.jsx("img", {
                        src: ep,
                        alt: "product detail",
                        width: 570,
                        height: 522,
                        className: "object-contain",
                    }),
                }),
            ],
        }),
    kp = () =>
        p.jsxs("section", {
            className:
                "max-container flex justify-between items-center max-lg:flex-col gap-10",
            id: "contact-us",
            children: [
                p.jsxs("h3", {
                    className:
                        "text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold",
                    children: [
                        "Sign up for ",
                        p.jsx("span", {
                            className: "text-coral-red",
                            children: "Updates ",
                        }),
                        " & Newsletter",
                    ],
                }),
                p.jsxs("div", {
                    className:
                        "lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full",
                    children: [
                        p.jsx("input", {
                            type: "text",
                            className: "input",
                            placeholder: "Subscribe@nike.com",
                        }),
                        p.jsx("div", {
                            className:
                                "max-sm:justify-end items-center flex max-sm:w-full",
                            children: p.jsx(Yn, {
                                label: "Sign Up",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    Sp = () =>
        p.jsxs("section", {
            className:
                "flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ",
            children: [
                p.jsx("div", {
                    className: "flex-1",
                    children: p.jsx("img", {
                        src: Gd,
                        alt: "offer image",
                        width: 773,
                        height: 687,
                        className: "object-contain w-full",
                    }),
                }),
                p.jsxs("div", {
                    className: "flex flex-1 flex-col",
                    children: [
                        p.jsxs("h2", {
                            className: "font-palanquin text-4xl font-bold",
                            children: [
                                p.jsx("span", {
                                    className: " text-coral-red ",
                                    children: "Special ",
                                }),
                                "Offer",
                            ],
                        }),
                        p.jsx("p", {
                            className: "mt-4 info-text",
                            children:
                                "Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.",
                        }),
                        p.jsxs("p", {
                            className: "mt-6 info-text",
                            children: [
                                " ",
                                "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
                            ],
                        }),
                        p.jsxs("div", {
                            className: "mt-11 flex flex-wrap gap-4",
                            children: [
                                p.jsx(Yn, { label: "Shop now", iconUrl: Mo }),
                                p.jsx(Yn, {
                                    label: "Learn more",
                                    backgroundColor: "bg-white",
                                    borderColor: "border-slate-gray",
                                    textColor: "text-slate-gray",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    Ep = () =>
        p.jsxs("footer", {
            className: "max-container",
            children: [
                p.jsxs("div", {
                    className:
                        "flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ",
                    children: [
                        p.jsxs("div", {
                            className: "flex flex-col items-start",
                            children: [
                                p.jsx("a", {
                                    href: "/",
                                    children: p.jsx("img", {
                                        src: Yd,
                                        alt: "",
                                        width: 150,
                                        height: 46,
                                    }),
                                }),
                                p.jsx("p", {
                                    className:
                                        "mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm",
                                    children:
                                        "Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards.",
                                }),
                                p.jsx("div", {
                                    className: "flex items-center gap-5 mt-8",
                                    children: dp.map((e) =>
                                        p.jsx(
                                            "div",
                                            {
                                                className:
                                                    "flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer",
                                                children: p.jsx("img", {
                                                    src: e.src,
                                                    alt: e.alt,
                                                    width: 24,
                                                    height: 24,
                                                }),
                                            },
                                            e.src
                                        )
                                    ),
                                }),
                            ],
                        }),
                        p.jsx("div", {
                            className:
                                "flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap",
                            children: fp.map((e) =>
                                p.jsxs(
                                    "div",
                                    {
                                        children: [
                                            p.jsx("h4", {
                                                className:
                                                    "text-white font-montserrat text-2xl leading-normal font-medium mb-6",
                                                children: e.title,
                                            }),
                                            p.jsx("ul", {
                                                children: e.links.map((t) =>
                                                    p.jsx(
                                                        "li",
                                                        {
                                                            className:
                                                                "mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer",
                                                            children: p.jsx(
                                                                "a",
                                                                {
                                                                    children:
                                                                        t.name,
                                                                }
                                                            ),
                                                        },
                                                        t.name
                                                    )
                                                ),
                                            }),
                                        ],
                                    },
                                    e
                                )
                            ),
                        }),
                    ],
                }),
                p.jsxs("div", {
                    className:
                        "flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center",
                    children: [
                        p.jsxs("div", {
                            className:
                                "flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer",
                            children: [
                                p.jsx("img", {
                                    src: Fd,
                                    alt: "copyright",
                                    width: 20,
                                    height: 20,
                                    className: "rounded-full m-0",
                                }),
                                p.jsx("p", {
                                    children:
                                        "Copyright 2023 All rights reserved.",
                                }),
                            ],
                        }),
                        p.jsx("p", {
                            className: "font-montserrat cursor-pointer",
                            children: "Terms and Conditions",
                        }),
                    ],
                }),
            ],
        }),
    Np = () =>
        p.jsx("header", {
            className: "padding-x py-8 absolute z-10 w-full",
            children: p.jsxs("nav", {
                className: "flex justify-between items-center max-container",
                children: [
                    p.jsx("a", {
                        href: "/",
                        children: p.jsx("img", {
                            src: Xd,
                            alt: "Logo",
                            width: 130,
                            height: 29,
                        }),
                    }),
                    p.jsx("ul", {
                        className:
                            "flex-1 flex justify-center items-center gap-16 max-lg:hidden",
                        children: ip.map((e) =>
                            p.jsx(
                                "li",
                                {
                                    children: p.jsx("a", {
                                        href: e.href,
                                        className:
                                            "font-montserrat leader-normal text-lg text-slate-gray",
                                        children: e.label,
                                    }),
                                },
                                e.label
                            )
                        ),
                    }),
                    p.jsx("div", {
                        className: "hidden max-lg:block",
                        children: p.jsx("img", {
                            src: Ud,
                            width: 25,
                            height: 25,
                            alt: "Hamburger",
                        }),
                    }),
                ],
            }),
        }),
    Cp = () =>
        p.jsxs("main", {
            className: "relative",
            children: [
                p.jsx(Np, {}),
                p.jsx("section", {
                    className: "xl:padding-l wide:padding-r padding-b",
                    children: p.jsx(pp, {}),
                }),
                p.jsx("section", {
                    className: "padding",
                    children: p.jsx(xp, {}),
                }),
                p.jsx("section", {
                    className: "padding",
                    children: p.jsx(wp, {}),
                }),
                p.jsx("section", {
                    className: "padding-x py-10",
                    children: p.jsx(gp, {}),
                }),
                p.jsx("section", {
                    className: "padding",
                    children: p.jsx(Sp, {}),
                }),
                p.jsx("section", {
                    className: "padding bg-pale-blue",
                    children: p.jsx(hp, {}),
                }),
                p.jsx("section", {
                    className: "padding-x sm:py-32 py-16 w-full",
                    children: p.jsx(kp, {}),
                }),
                p.jsx("section", {
                    className: "padding bg-black padding-x padding-t pb-8",
                    children: p.jsx(Ep, {}),
                }),
            ],
        });
Kl.createRoot(document.getElementById("root")).render(
    p.jsx(Nc.StrictMode, { children: p.jsx(Cp, {}) })
);
