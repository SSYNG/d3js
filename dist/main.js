!
function(t) {
    var n = {};
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    e.m = t,
    e.c = n,
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    },
    e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var i in t) e.d(r, i,
        function(n) {
            return t[n]
        }.bind(null, i));
        return r
    },
    e.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return e.d(n, "a", n),
        n
    },
    e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    e.p = "",
    e(e.s = 0)
} ([function(t, n, e) {
    "use strict";
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    },
    i = function(t) {
        return 1 === t.length && (t = function(t) {
            return function(n, e) {
                return r(t(n), e)
            }
        } (t)),
        {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) < 0 ? r = a + 1 : i = a
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var a = r + i >>> 1;
                    t(n[a], e) > 0 ? i = a: r = a + 1
                }
                return r
            }
        }
    };
    var a = i(r),
    f = a.right,
    o = (a.left, f);
    var c = Array.prototype,
    u = (c.slice, c.map,
    function(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1,
        i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
        return a
    }),
    s = Math.sqrt(50),
    h = Math.sqrt(10),
    l = Math.sqrt(2),
    d = function(t, n, e) {
        var r, i, a, f, o = -1;
        if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
        if ((r = n < t) && (i = t, t = n, n = i), 0 === (f = b(t, n, e)) || !isFinite(f)) return [];
        if (f > 0) for (t = Math.ceil(t / f), n = Math.floor(n / f), a = new Array(i = Math.ceil(n - t + 1)); ++o < i;) a[o] = (t + o) * f;
        else for (t = Math.floor(t * f), n = Math.ceil(n * f), a = new Array(i = Math.ceil(t - n + 1)); ++o < i;) a[o] = (t - o) / f;
        return r && a.reverse(),
        a
    };
    function b(t, n, e) {
        var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
        return i >= 0 ? (a >= s ? 10 : a >= h ? 5 : a >= l ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= s ? 10 : a >= h ? 5 : a >= l ? 2 : 1)
    }
    function p(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
        return a >= s ? i *= 10 : a >= h ? i *= 5 : a >= l && (i *= 2),
        n < t ? -i: i
    }
    var _ = function(t, n) {
        var e, r, i = t.length,
        a = -1;
        if (null == n) {
            for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && e > r && (r = e)
        } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && e > r && (r = e);
        return r
    },
    y = function(t) {
        for (var n, e, r, i = t.length,
        a = -1,
        f = 0; ++a < i;) f += t[a].length;
        for (e = new Array(f); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--f] = r[n];
        return e
    },
    v = function(t, n) {
        var e, r, i = t.length,
        a = -1;
        if (null == n) {
            for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && r > e && (r = e)
        } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && r > e && (r = e);
        return r
    };
    var g = Array.prototype.slice,
    m = function(t) {
        return t
    },
    x = 1,
    w = 2,
    M = 3,
    N = 4,
    T = 1e-6;
    function C(t) {
        return "translate(" + (t + .5) + ",0)"
    }
    function k(t) {
        return "translate(0," + (t + .5) + ")"
    }
    function A() {
        return ! this.__axis
    }
    function S(t, n) {
        var e = [],
        r = null,
        i = null,
        a = 6,
        f = 6,
        o = 3,
        c = t === x || t === N ? -1 : 1,
        u = t === N || t === w ? "x": "y",
        s = t === x || t === M ? C: k;
        function h(h) {
            var l = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
            d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : m: i,
            b = Math.max(a, 0) + o,
            p = n.range(),
            _ = +p[0] + .5,
            y = +p[p.length - 1] + .5,
            v = (n.bandwidth ?
            function(t) {
                var n = Math.max(0, t.bandwidth() - 1) / 2;
                return t.round() && (n = Math.round(n)),
                function(e) {
                    return + t(e) + n
                }
            }: function(t) {
                return function(n) {
                    return + t(n)
                }
            })(n.copy()),
            g = h.selection ? h.selection() : h,
            C = g.selectAll(".domain").data([null]),
            k = g.selectAll(".tick").data(l, n).order(),
            S = k.exit(),
            E = k.enter().append("g").attr("class", "tick"),
            U = k.select("line"),
            L = k.select("text");
            C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")),
            k = k.merge(E),
            U = U.merge(E.append("line").attr("stroke", "#000").attr(u + "2", c * a)),
            L = L.merge(E.append("text").attr("fill", "#000").attr(u, c * b).attr("dy", t === x ? "0em": t === M ? "0.71em": "0.32em")),
            h !== g && (C = C.transition(h), k = k.transition(h), U = U.transition(h), L = L.transition(h), S = S.transition(h).attr("opacity", T).attr("transform",
            function(t) {
                return isFinite(t = v(t)) ? s(t) : this.getAttribute("transform")
            }), E.attr("opacity", T).attr("transform",
            function(t) {
                var n = this.parentNode.__axis;
                return s(n && isFinite(n = n(t)) ? n: v(t))
            })),
            S.remove(),
            C.attr("d", t === N || t == w ? "M" + c * f + "," + _ + "H0.5V" + y + "H" + c * f: "M" + _ + "," + c * f + "V0.5H" + y + "V" + c * f),
            k.attr("opacity", 1).attr("transform",
            function(t) {
                return s(v(t))
            }),
            U.attr(u + "2", c * a),
            L.attr(u, c * b).text(d),
            g.filter(A).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === w ? "start": t === N ? "end": "middle"),
            g.each(function() {
                this.__axis = v
            })
        }
        return h.scale = function(t) {
            return arguments.length ? (n = t, h) : n
        },
        h.ticks = function() {
            return e = g.call(arguments),
            h
        },
        h.tickArguments = function(t) {
            return arguments.length ? (e = null == t ? [] : g.call(t), h) : e.slice()
        },
        h.tickValues = function(t) {
            return arguments.length ? (r = null == t ? null: g.call(t), h) : r && r.slice()
        },
        h.tickFormat = function(t) {
            return arguments.length ? (i = t, h) : i
        },
        h.tickSize = function(t) {
            return arguments.length ? (a = f = +t, h) : a
        },
        h.tickSizeInner = function(t) {
            return arguments.length ? (a = +t, h) : a
        },
        h.tickSizeOuter = function(t) {
            return arguments.length ? (f = +t, h) : f
        },
        h.tickPadding = function(t) {
            return arguments.length ? (o = +t, h) : o
        },
        h
    }
    var E = {
        value: function() {}
    };
    function U() {
        for (var t, n = 0,
        e = arguments.length,
        r = {}; n < e; ++n) {
            if (! (t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new L(r)
    }
    function L(t) {
        this._ = t
    }
    function P(t, n) {
        for (var e, r = 0,
        i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
    }
    function D(t, n, e) {
        for (var r = 0,
        i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = E,
            t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    L.prototype = U.prototype = {
        constructor: L,
        on: function(t, n) {
            var e, r = this._,
            i = function(t, n) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var e = "",
                    r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {
                        type: t,
                        name: e
                    }
                })
            } (t + "", r),
            a = -1,
            f = i.length;
            if (! (arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++a < f;) if (e = (t = i[a]).type) r[e] = D(r[e], t.name, n);
                else if (null == n) for (e in r) r[e] = D(r[e], t.name, null);
                return this
            }
            for (; ++a < f;) if ((e = (t = i[a]).type) && (e = P(r[e], t.name))) return e
        },
        copy: function() {
            var t = {},
            n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new L(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
        }
    };
    var R = U,
    F = "http://www.w3.org/1999/xhtml",
    j = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: F,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    I = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        j.hasOwnProperty(n) ? {
            space: j[n],
            local: t
        }: t
    };
    var O = function(t) {
        var n = I(t);
        return (n.local ?
        function(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }: function(t) {
            return function() {
                var n = this.ownerDocument,
                e = this.namespaceURI;
                return e === F && n.documentElement.namespaceURI === F ? n.createElement(t) : n.createElementNS(e, t)
            }
        })(n)
    };
    function z() {}
    var Y = function(t) {
        return null == t ? z: function() {
            return this.querySelector(t)
        }
    };
    function q() {
        return []
    }
    var H = function(t) {
        return null == t ? q: function() {
            return this.querySelectorAll(t)
        }
    },
    B = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var X = document.documentElement;
        if (!X.matches) {
            var V = X.webkitMatchesSelector || X.msMatchesSelector || X.mozMatchesSelector || X.oMatchesSelector;
            B = function(t) {
                return function() {
                    return V.call(this, t)
                }
            }
        }
    }
    var Z = B,
    G = function(t) {
        return new Array(t.length)
    };
    function J(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    J.prototype = {
        constructor: J,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var W = "$";
    function Q(t, n, e, r, i, a) {
        for (var f, o = 0,
        c = n.length,
        u = a.length; o < u; ++o)(f = n[o]) ? (f.__data__ = a[o], r[o] = f) : e[o] = new J(t, a[o]);
        for (; o < c; ++o)(f = n[o]) && (i[o] = f)
    }
    function K(t, n, e, r, i, a, f) {
        var o, c, u, s = {},
        h = n.length,
        l = a.length,
        d = new Array(h);
        for (o = 0; o < h; ++o)(c = n[o]) && (d[o] = u = W + f.call(c, c.__data__, o, n), u in s ? i[o] = c: s[u] = c);
        for (o = 0; o < l; ++o)(c = s[u = W + f.call(t, a[o], o, a)]) ? (r[o] = c, c.__data__ = a[o], s[u] = null) : e[o] = new J(t, a[o]);
        for (o = 0; o < h; ++o)(c = n[o]) && s[d[o]] === c && (i[o] = c)
    }
    function tt(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    var nt = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    function et(t, n) {
        return t.style.getPropertyValue(n) || nt(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function rt(t) {
        return t.trim().split(/^|\s+/)
    }
    function it(t) {
        return t.classList || new at(t)
    }
    function at(t) {
        this._node = t,
        this._names = rt(t.getAttribute("class") || "")
    }
    function ft(t, n) {
        for (var e = it(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function ot(t, n) {
        for (var e = it(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    at.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    function ct() {
        this.textContent = ""
    }
    function ut() {
        this.innerHTML = ""
    }
    function st() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function ht() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function lt() {
        return null
    }
    function dt() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function bt() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }
    function pt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var _t = {},
    yt = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (_t = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    function vt(t, n, e) {
        return t = gt(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function gt(t, n, e) {
        return function(r) {
            var i = yt;
            yt = r;
            try {
                t.call(this, this.__data__, n, e)
            } finally {
                yt = i
            }
        }
    }
    function mt(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                a = n.length; r < a; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function xt(t, n, e) {
        var r = _t.hasOwnProperty(t.type) ? vt: gt;
        return function(i, a, f) {
            var o, c = this.__on,
            u = r(n, a, f);
            if (c) for (var s = 0,
            h = c.length; s < h; ++s) if ((o = c[s]).type === t.type && o.name === t.name) return this.removeEventListener(o.type, o.listener, o.capture),
            this.addEventListener(o.type, o.listener = u, o.capture = e),
            void(o.value = n);
            this.addEventListener(t.type, u, e),
            o = {
                type: t.type,
                name: t.name,
                value: n,
                listener: u,
                capture: e
            },
            c ? c.push(o) : this.__on = [o]
        }
    }
    function wt(t, n, e) {
        var r = nt(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    var Mt = [null];
    function Nt(t, n) {
        this._groups = t,
        this._parents = n
    }
    function Tt() {
        return new Nt([[document.documentElement]], Mt)
    }
    Nt.prototype = Tt.prototype = {
        constructor: Nt,
        select: function(t) {
            "function" != typeof t && (t = Y(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, f, o = n[i], c = o.length, u = r[i] = new Array(c), s = 0; s < c; ++s)(a = o[s]) && (f = t.call(a, a.__data__, s, o)) && ("__data__" in a && (f.__data__ = a.__data__), u[s] = f);
            return new Nt(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = H(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], a = 0; a < e; ++a) for (var f, o = n[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && (r.push(t.call(f, f.__data__, u, o)), i.push(f));
            return new Nt(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = Z(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, f = n[i], o = f.length, c = r[i] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
            return new Nt(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            u = -1,
            this.each(function(t) {
                d[++u] = t
            }),
            d;
            var e = n ? K: Q,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = function(t) {
                return function() {
                    return t
                }
            } (t));
            for (var a = i.length,
            f = new Array(a), o = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
                var s = r[u],
                h = i[u],
                l = h.length,
                d = t.call(s, s && s.__data__, u, r),
                b = d.length,
                p = o[u] = new Array(b),
                _ = f[u] = new Array(b);
                e(s, h, p, _, c[u] = new Array(l), d, n);
                for (var y, v, g = 0,
                m = 0; g < b; ++g) if (y = p[g]) {
                    for (g >= m && (m = g + 1); ! (v = _[m]) && ++m < b;);
                    y._next = v || null
                }
            }
            return (f = new Nt(f, r))._enter = o,
            f._exit = c,
            f
        },
        enter: function() {
            return new Nt(this._enter || this._groups.map(G), this._parents)
        },
        exit: function() {
            return new Nt(this._exit || this._groups.map(G), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), f = new Array(r), o = 0; o < a; ++o) for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
            for (; o < r; ++o) f[o] = n[o];
            return new Nt(f, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, f = i[a]; --a >= 0;)(r = i[a]) && (f && f !== r.nextSibling && f.parentNode.insertBefore(r, f), f = r);
            return this
        },
        sort: function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = tt);
            for (var e = this._groups,
            r = e.length,
            i = new Array(r), a = 0; a < r; ++a) {
                for (var f, o = e[a], c = o.length, u = i[a] = new Array(c), s = 0; s < c; ++s)(f = o[s]) && (u[s] = f);
                u.sort(n)
            }
            return new Nt(i, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var f = r[i];
                if (f) return f
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, a = n[e], f = 0, o = a.length; f < o; ++f)(i = a[f]) && t.call(i, i.__data__, f, a);
            return this
        },
        attr: function(t, n) {
            var e = I(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ?
            function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }: "function" == typeof n ? e.local ?
            function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            }: function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            }: e.local ?
            function(t, n) {
                return function() {
                    this.setAttributeNS(t.space, t.local, n)
                }
            }: function(t, n) {
                return function() {
                    this.setAttribute(t, n)
                }
            })(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ?
            function(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }: "function" == typeof n ?
            function(t, n, e) {
                return function() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            }: function(t, n, e) {
                return function() {
                    this.style.setProperty(t, n, e)
                }
            })(t, n, null == e ? "": e)) : et(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ?
            function(t) {
                return function() {
                    delete this[t]
                }
            }: "function" == typeof n ?
            function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            }: function(t, n) {
                return function() {
                    this[t] = n
                }
            })(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = rt(t + "");
            if (arguments.length < 2) {
                for (var r = it(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ?
            function(t, n) {
                return function() { (n.apply(this, arguments) ? ft: ot)(this, t)
                }
            }: n ?
            function(t) {
                return function() {
                    ft(this, t)
                }
            }: function(t) {
                return function() {
                    ot(this, t)
                }
            })(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? ct: ("function" == typeof t ?
            function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "": n
                }
            }: function(t) {
                return function() {
                    this.textContent = t
                }
            })(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? ut: ("function" == typeof t ?
            function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "": n
                }
            }: function(t) {
                return function() {
                    this.innerHTML = t
                }
            })(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(st)
        },
        lower: function() {
            return this.each(ht)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: O(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: O(t),
            r = null == n ? lt: "function" == typeof n ? n: Y(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(dt)
        },
        clone: function(t) {
            return this.select(t ? pt: bt)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, a = function(t) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var n = "",
                    e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
                    {
                        type: t,
                        name: n
                    }
                })
            } (t + ""),
            f = a.length;
            if (! (arguments.length < 2)) {
                for (o = n ? xt: mt, null == e && (e = !1), r = 0; r < f; ++r) this.each(o(a[r], n, e));
                return this
            }
            var o = this.node().__on;
            if (o) for (var c, u = 0,
            s = o.length; u < s; ++u) for (r = 0, c = o[u]; r < f; ++r) if ((i = a[r]).type === c.type && i.name === c.name) return c.value
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ?
            function(t, n) {
                return function() {
                    return wt(this, t, n.apply(this, arguments))
                }
            }: function(t, n) {
                return function() {
                    return wt(this, t, n)
                }
            })(t, n))
        }
    };
    var Ct = Tt,
    kt = function(t) {
        return "string" == typeof t ? new Nt([[document.querySelector(t)]], [document.documentElement]) : new Nt([[t]], Mt)
    },
    At = 0;
    function St() {
        this._ = "@" + (++At).toString(36)
    }
    St.prototype = function() {
        return new St
    }.prototype = {
        constructor: St,
        get: function(t) {
            for (var n = this._; ! (n in t);) if (! (t = t.parentNode)) return;
            return t[n]
        },
        set: function(t, n) {
            return t[this._] = n
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    function Et(t, n, e, r, i, a, f, o, c, u) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = a,
        this.y = f,
        this.dx = o,
        this.dy = c,
        this._ = u
    }
    Et.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var Ut = function(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    };
    function Lt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }
    function Pt() {}
    var Dt = "\\s*([+-]?\\d+)\\s*",
    Rt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Ft = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    jt = /^#([0-9a-f]{3})$/,
    It = /^#([0-9a-f]{6})$/,
    Ot = new RegExp("^rgb\\(" + [Dt, Dt, Dt] + "\\)$"),
    zt = new RegExp("^rgb\\(" + [Ft, Ft, Ft] + "\\)$"),
    Yt = new RegExp("^rgba\\(" + [Dt, Dt, Dt, Rt] + "\\)$"),
    qt = new RegExp("^rgba\\(" + [Ft, Ft, Ft, Rt] + "\\)$"),
    Ht = new RegExp("^hsl\\(" + [Rt, Ft, Ft] + "\\)$"),
    $t = new RegExp("^hsla\\(" + [Rt, Ft, Ft, Rt] + "\\)$"),
    Bt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Xt(t) {
        var n;
        return t = (t + "").trim().toLowerCase(),
        (n = jt.exec(t)) ? new Wt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = It.exec(t)) ? Vt(parseInt(n[1], 16)) : (n = Ot.exec(t)) ? new Wt(n[1], n[2], n[3], 1) : (n = zt.exec(t)) ? new Wt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Yt.exec(t)) ? Zt(n[1], n[2], n[3], n[4]) : (n = qt.exec(t)) ? Zt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ht.exec(t)) ? Kt(n[1], n[2] / 100, n[3] / 100, 1) : (n = $t.exec(t)) ? Kt(n[1], n[2] / 100, n[3] / 100, n[4]) : Bt.hasOwnProperty(t) ? Vt(Bt[t]) : "transparent" === t ? new Wt(NaN, NaN, NaN, 0) : null
    }
    function Vt(t) {
        return new Wt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function Zt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Wt(t, n, e, r)
    }
    function Gt(t) {
        return t instanceof Pt || (t = Xt(t)),
        t ? new Wt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Wt
    }
    function Jt(t, n, e, r) {
        return 1 === arguments.length ? Gt(t) : new Wt(t, n, e, null == r ? 1 : r)
    }
    function Wt(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function Qt(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0": "") + t.toString(16)
    }
    function Kt(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN: e <= 0 || e >= 1 ? t = n = NaN: n <= 0 && (t = NaN),
        new nn(t, n, e, r)
    }
    function tn(t, n, e, r) {
        return 1 === arguments.length ?
        function(t) {
            if (t instanceof nn) return new nn(t.h, t.s, t.l, t.opacity);
            if (t instanceof Pt || (t = Xt(t)), !t) return new nn;
            if (t instanceof nn) return t;
            var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            a = Math.max(n, e, r),
            f = NaN,
            o = a - i,
            c = (a + i) / 2;
            return o ? (f = n === a ? (e - r) / o + 6 * (e < r) : e === a ? (r - n) / o + 2 : (n - e) / o + 4, o /= c < .5 ? a + i: 2 - a - i, f *= 60) : o = c > 0 && c < 1 ? 0 : f,
            new nn(f, o, c, t.opacity)
        } (t) : new nn(t, n, e, null == r ? 1 : r)
    }
    function nn(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function en(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e: t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    Ut(Pt, Xt, {
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: function() {
            return this.rgb().hex()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    Ut(Wt, Jt, Lt(Pt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Wt(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Wt(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: function() {
            return "#" + Qt(this.r) + Qt(this.g) + Qt(this.b)
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
        }
    })),
    Ut(nn, tn, Lt(Pt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new nn(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new nn(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e: 1 - e) * n,
            i = 2 * e - r;
            return new Wt(en(t >= 240 ? t - 240 : t + 120, i, r), en(t, i, r), en(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var rn = Math.PI / 180,
    an = 180 / Math.PI,
    fn = .96422,
    on = 1,
    cn = .82521,
    un = 4 / 29,
    sn = 6 / 29,
    hn = 3 * sn * sn,
    ln = sn * sn * sn;
    function dn(t) {
        if (t instanceof pn) return new pn(t.l, t.a, t.b, t.opacity);
        if (t instanceof wn) {
            if (isNaN(t.h)) return new pn(t.l, 0, 0, t.opacity);
            var n = t.h * rn;
            return new pn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Wt || (t = Gt(t));
        var e, r, i = gn(t.r),
        a = gn(t.g),
        f = gn(t.b),
        o = _n((.2225045 * i + .7168786 * a + .0606169 * f) / on);
        return i === a && a === f ? e = r = o: (e = _n((.4360747 * i + .3850649 * a + .1430804 * f) / fn), r = _n((.0139322 * i + .0971045 * a + .7141733 * f) / cn)),
        new pn(116 * o - 16, 500 * (e - o), 200 * (o - r), t.opacity)
    }
    function bn(t, n, e, r) {
        return 1 === arguments.length ? dn(t) : new pn(t, n, e, null == r ? 1 : r)
    }
    function pn(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function _n(t) {
        return t > ln ? Math.pow(t, 1 / 3) : t / hn + un
    }
    function yn(t) {
        return t > sn ? t * t * t: hn * (t - un)
    }
    function vn(t) {
        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function gn(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function mn(t) {
        if (t instanceof wn) return new wn(t.h, t.c, t.l, t.opacity);
        if (t instanceof pn || (t = dn(t)), 0 === t.a && 0 === t.b) return new wn(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * an;
        return new wn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }
    function xn(t, n, e, r) {
        return 1 === arguments.length ? mn(t) : new wn(t, n, e, null == r ? 1 : r)
    }
    function wn(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    Ut(pn, bn, Lt(Pt, {
        brighter: function(t) {
            return new pn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new pn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t: t + this.a / 500,
            e = isNaN(this.b) ? t: t - this.b / 200;
            return new Wt(vn(3.1338561 * (n = fn * yn(n)) - 1.6168667 * (t = on * yn(t)) - .4906146 * (e = cn * yn(e))), vn( - .9787684 * n + 1.9161415 * t + .033454 * e), vn(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
        }
    })),
    Ut(wn, xn, Lt(Pt, {
        brighter: function(t) {
            return new wn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new wn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return dn(this).rgb()
        }
    }));
    var Mn = -.29227,
    Nn = -.90649,
    Tn = 1.97294,
    Cn = Tn * Nn,
    kn = 1.78277 * Tn,
    An = 1.78277 * Mn - -.14861 * Nn;
    function Sn(t, n, e, r) {
        return 1 === arguments.length ?
        function(t) {
            if (t instanceof En) return new En(t.h, t.s, t.l, t.opacity);
            t instanceof Wt || (t = Gt(t));
            var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (An * r + Cn * n - kn * e) / (An + Cn - kn),
            a = r - i,
            f = (Tn * (e - i) - Mn * a) / Nn,
            o = Math.sqrt(f * f + a * a) / (Tn * i * (1 - i)),
            c = o ? Math.atan2(f, a) * an - 120 : NaN;
            return new En(c < 0 ? c + 360 : c, o, i, t.opacity)
        } (t) : new En(t, n, e, null == r ? 1 : r)
    }
    function En(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Un(t, n, e, r, i) {
        var a = t * t,
        f = a * t;
        return ((1 - 3 * t + 3 * a - f) * n + (4 - 6 * a + 3 * f) * e + (1 + 3 * t + 3 * a - 3 * f) * r + f * i) / 6
    }
    Ut(En, Sn, Lt(Pt, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new En(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new En(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * rn,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
            return new Wt(255 * (n + e * ( - .14861 * r + 1.78277 * i)), 255 * (n + e * (Mn * r + Nn * i)), 255 * (n + e * (Tn * r)), this.opacity)
        }
    }));
    var Ln = function(t) {
        return function() {
            return t
        }
    };
    function Pn(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function Dn(t, n) {
        var e = n - t;
        return e ? Pn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Ln(isNaN(t) ? n: t)
    }
    function Rn(t) {
        return 1 == (t = +t) ? Fn: function(n, e) {
            return e - n ?
            function(t, n, e) {
                return t = Math.pow(t, e),
                n = Math.pow(n, e) - t,
                e = 1 / e,
                function(r) {
                    return Math.pow(t + r * n, e)
                }
            } (n, e, t) : Ln(isNaN(n) ? e: n)
        }
    }
    function Fn(t, n) {
        var e = n - t;
        return e ? Pn(t, e) : Ln(isNaN(t) ? n: t)
    }
    var jn = function t(n) {
        var e = Rn(n);
        function r(t, n) {
            var r = e((t = Jt(t)).r, (n = Jt(n)).r),
            i = e(t.g, n.g),
            a = e(t.b, n.b),
            f = Fn(t.opacity, n.opacity);
            return function(n) {
                return t.r = r(n),
                t.g = i(n),
                t.b = a(n),
                t.opacity = f(n),
                t + ""
            }
        }
        return r.gamma = t,
        r
    } (1);
    function In(t) {
        return function(n) {
            var e, r, i = n.length,
            a = new Array(i),
            f = new Array(i),
            o = new Array(i);
            for (e = 0; e < i; ++e) r = Jt(n[e]),
            a[e] = r.r || 0,
            f[e] = r.g || 0,
            o[e] = r.b || 0;
            return a = t(a),
            f = t(f),
            o = t(o),
            r.opacity = 1,
            function(t) {
                return r.r = a(t),
                r.g = f(t),
                r.b = o(t),
                r + ""
            }
        }
    }
    var On = In(function(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
            i = t[r],
            a = t[r + 1],
            f = r > 0 ? t[r - 1] : 2 * i - a,
            o = r < n - 1 ? t[r + 2] : 2 * a - i;
            return Un((e - r / n) * n, f, i, a, o)
        }
    }),
    zn = (In(function(t) {
        var n = t.length;
        return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e: e) * n),
            i = t[(r + n - 1) % n],
            a = t[r % n],
            f = t[(r + 1) % n],
            o = t[(r + 2) % n];
            return Un((e - r / n) * n, i, a, f, o)
        }
    }),
    function(t, n) {
        return n -= t = +t,
        function(e) {
            return t + n * e
        }
    }),
    Yn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    qn = new RegExp(Yn.source, "g");
    var Hn, $n, Bn, Xn, Vn = function(t, n) {
        var e, r, i, a = Yn.lastIndex = qn.lastIndex = 0,
        f = -1,
        o = [],
        c = [];
        for (t += "", n += ""; (e = Yn.exec(t)) && (r = qn.exec(n));)(i = r.index) > a && (i = n.slice(a, i), o[f] ? o[f] += i: o[++f] = i),
        (e = e[0]) === (r = r[0]) ? o[f] ? o[f] += r: o[++f] = r: (o[++f] = null, c.push({
            i: f,
            x: zn(e, r)
        })),
        a = qn.lastIndex;
        return a < n.length && (i = n.slice(a), o[f] ? o[f] += i: o[++f] = i),
        o.length < 2 ? c[0] ?
        function(t) {
            return function(n) {
                return t(n) + ""
            }
        } (c[0].x) : function(t) {
            return function() {
                return t
            }
        } (n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r) o[(e = c[r]).i] = e.x(t);
            return o.join("")
        })
    },
    Zn = function(t, n) {
        var e, r = typeof n;
        return null == n || "boolean" === r ? Ln(n) : ("number" === r ? zn: "string" === r ? (e = Xt(n)) ? (n = e, jn) : Vn: n instanceof Xt ? jn: n instanceof Date ?
        function(t, n) {
            var e = new Date;
            return n -= t = +t,
            function(r) {
                return e.setTime(t + n * r),
                e
            }
        }: Array.isArray(n) ?
        function(t, n) {
            var e, r = n ? n.length: 0,
            i = t ? Math.min(r, t.length) : 0,
            a = new Array(i),
            f = new Array(r);
            for (e = 0; e < i; ++e) a[e] = Zn(t[e], n[e]);
            for (; e < r; ++e) f[e] = n[e];
            return function(t) {
                for (e = 0; e < i; ++e) f[e] = a[e](t);
                return f
            }
        }: "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ?
        function(t, n) {
            var e, r = {},
            i = {};
            for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = Zn(t[e], n[e]) : i[e] = n[e];
            return function(t) {
                for (e in r) i[e] = r[e](t);
                return i
            }
        }: zn)(t, n)
    },
    Gn = function(t, n) {
        return n -= t = +t,
        function(e) {
            return Math.round(t + n * e)
        }
    },
    Jn = 180 / Math.PI,
    Wn = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    },
    Qn = function(t, n, e, r, i, a) {
        var f, o, c;
        return (f = Math.sqrt(t * t + n * n)) && (t /= f, n /= f),
        (c = t * e + n * r) && (e -= t * c, r -= n * c),
        (o = Math.sqrt(e * e + r * r)) && (e /= o, r /= o, c /= o),
        t * r < n * e && (t = -t, n = -n, c = -c, f = -f),
        {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(n, t) * Jn,
            skewX: Math.atan(c) * Jn,
            scaleX: f,
            scaleY: o
        }
    };
    function Kn(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " ": ""
        }
        return function(a, f) {
            var o = [],
            c = [];
            return a = t(a),
            f = t(f),
            function(t, r, i, a, f, o) {
                if (t !== i || r !== a) {
                    var c = f.push("translate(", null, n, null, e);
                    o.push({
                        i: c - 4,
                        x: zn(t, i)
                    },
                    {
                        i: c - 2,
                        x: zn(r, a)
                    })
                } else(i || a) && f.push("translate(" + i + n + a + e)
            } (a.translateX, a.translateY, f.translateX, f.translateY, o, c),
            function(t, n, e, a) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: zn(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            } (a.rotate, f.rotate, o, c),
            function(t, n, e, a) {
                t !== n ? a.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: zn(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            } (a.skewX, f.skewX, o, c),
            function(t, n, e, r, a, f) {
                if (t !== e || n !== r) {
                    var o = a.push(i(a) + "scale(", null, ",", null, ")");
                    f.push({
                        i: o - 4,
                        x: zn(t, e)
                    },
                    {
                        i: o - 2,
                        x: zn(n, r)
                    })
                } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
            } (a.scaleX, a.scaleY, f.scaleX, f.scaleY, o, c),
            a = f = null,
            function(t) {
                for (var n, e = -1,
                r = c.length; ++e < r;) o[(n = c[e]).i] = n.x(t);
                return o.join("")
            }
        }
    }
    var te = Kn(function(t) {
        return "none" === t ? Wn: (Hn || (Hn = document.createElement("DIV"), $n = document.documentElement, Bn = document.defaultView), Hn.style.transform = t, t = Bn.getComputedStyle($n.appendChild(Hn), null).getPropertyValue("transform"), $n.removeChild(Hn), t = t.slice(7, -1).split(","), Qn( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    },
    "px, ", "px)", "deg)"),
    ne = Kn(function(t) {
        return null == t ? Wn: (Xn || (Xn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xn.setAttribute("transform", t), (t = Xn.transform.baseVal.consolidate()) ? (t = t.matrix, Qn(t.a, t.b, t.c, t.d, t.e, t.f)) : Wn)
    },
    ", ", ")", ")");
    Math.SQRT2;
    function ee(t) {
        return function(n, e) {
            var r = t((n = tn(n)).h, (e = tn(e)).h),
            i = Fn(n.s, e.s),
            a = Fn(n.l, e.l),
            f = Fn(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.s = i(t),
                n.l = a(t),
                n.opacity = f(t),
                n + ""
            }
        }
    }
    ee(Dn),
    ee(Fn);
    function re(t) {
        return function(n, e) {
            var r = t((n = xn(n)).h, (e = xn(e)).h),
            i = Fn(n.c, e.c),
            a = Fn(n.l, e.l),
            f = Fn(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.c = i(t),
                n.l = a(t),
                n.opacity = f(t),
                n + ""
            }
        }
    }
    re(Dn),
    re(Fn);
    function ie(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Sn(n)).h, (r = Sn(r)).h),
                a = Fn(n.s, r.s),
                f = Fn(n.l, r.l),
                o = Fn(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = a(t),
                    n.l = f(Math.pow(t, e)),
                    n.opacity = o(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        } (1)
    }
    ie(Dn);
    var ae = ie(Fn);
    var fe, oe, ce = 0,
    ue = 0,
    se = 0,
    he = 1e3,
    le = 0,
    de = 0,
    be = 0,
    pe = "object" == typeof performance && performance.now ? performance: Date,
    _e = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    function ye() {
        return de || (_e(ve), de = pe.now() + be)
    }
    function ve() {
        de = 0
    }
    function ge() {
        this._call = this._time = this._next = null
    }
    function me(t, n, e) {
        var r = new ge;
        return r.restart(t, n, e),
        r
    }
    function xe() {
        de = (le = pe.now()) + be,
        ce = ue = 0;
        try { !
            function() {
                ye(),
                ++ce;
                for (var t, n = fe; n;)(t = de - n._time) >= 0 && n._call.call(null, t),
                n = n._next; --ce
            } ()
        } finally {
            ce = 0,
            function() {
                var t, n, e = fe,
                r = 1 / 0;
                for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n: fe = n);
                oe = t,
                Me(r)
            } (),
            de = 0
        }
    }
    function we() {
        var t = pe.now(),
        n = t - le;
        n > he && (be -= n, le = t)
    }
    function Me(t) {
        ce || (ue && (ue = clearTimeout(ue)), t - de > 24 ? (t < 1 / 0 && (ue = setTimeout(xe, t - pe.now() - be)), se && (se = clearInterval(se))) : (se || (le = pe.now(), se = setInterval(we, he)), ce = 1, _e(xe)))
    }
    ge.prototype = me.prototype = {
        constructor: ge,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? ye() : +e) + (null == n ? 0 : +n),
            this._next || oe === this || (oe ? oe._next = this: fe = this, oe = this),
            this._call = t,
            this._time = e,
            Me()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, Me())
        }
    };
    var Ne = function(t, n, e) {
        var r = new ge;
        return n = null == n ? 0 : +n,
        r.restart(function(e) {
            r.stop(),
            t(e + n)
        },
        n, e),
        r
    },
    Te = R("start", "end", "interrupt"),
    Ce = [],
    ke = 0,
    Ae = 1,
    Se = 2,
    Ee = 3,
    Ue = 4,
    Le = 5,
    Pe = 6,
    De = function(t, n, e, r, i, a) {
        var f = t.__transition;
        if (f) {
            if (e in f) return
        } else t.__transition = {}; !
        function(t, n, e) {
            var r, i = t.__transition;
            function a(c) {
                var u, s, h, l;
                if (e.state !== Ae) return o();
                for (u in i) if ((l = i[u]).name === e.name) {
                    if (l.state === Ee) return Ne(a);
                    l.state === Ue ? (l.state = Pe, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete i[u]) : +u < n && (l.state = Pe, l.timer.stop(), delete i[u])
                }
                if (Ne(function() {
                    e.state === Ee && (e.state = Ue, e.timer.restart(f, e.delay, e.time), f(c))
                }), e.state = Se, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Se) {
                    for (e.state = Ee, r = new Array(h = e.tween.length), u = 0, s = -1; u < h; ++u)(l = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = l);
                    r.length = s + 1
                }
            }
            function f(n) {
                for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = Le, 1), a = -1, f = r.length; ++a < f;) r[a].call(null, i);
                e.state === Le && (e.on.call("end", t, t.__data__, e.index, e.group), o())
            }
            function o() {
                for (var r in e.state = Pe,
                e.timer.stop(), delete i[n], i) return;
                delete t.__transition
            }
            i[n] = e,
            e.timer = me(function(t) {
                e.state = Ae,
                e.timer.restart(a, e.delay, e.time),
                e.delay <= t && a(t - e.delay)
            },
            0, e.time)
        } (t, e, {
            name: n,
            index: r,
            group: i,
            on: Te,
            tween: Ce,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: ke
        })
    };
    function Re(t, n) {
        var e = je(t, n);
        if (e.state > ke) throw new Error("too late; already scheduled");
        return e
    }
    function Fe(t, n) {
        var e = je(t, n);
        if (e.state > Se) throw new Error("too late; already started");
        return e
    }
    function je(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }
    var Ie = function(t, n) {
        var e, r, i, a = t.__transition,
        f = !0;
        if (a) {
            for (i in n = null == n ? null: n + "", a)(e = a[i]).name === n ? (r = e.state > Se && e.state < Le, e.state = Pe, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[i]) : f = !1;
            f && delete t.__transition
        }
    };
    function Oe(t, n, e) {
        var r = t._id;
        return t.each(function() {
            var t = Fe(this, r); (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }),
        function(t) {
            return je(t, r).value[n]
        }
    }
    var ze = function(t, n) {
        var e;
        return ("number" == typeof n ? zn: n instanceof Xt ? jn: (e = Xt(n)) ? (n = e, jn) : Vn)(t, n)
    };
    var Ye = Ct.prototype.constructor;
    var qe = 0;
    function He(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function $e(t) {
        return Ct().transition(t)
    }
    function Be() {
        return++qe
    }
    var Xe = Ct.prototype;
    function Ve(t) {
        return + t
    }
    He.prototype = $e.prototype = {
        constructor: He,
        select: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = Y(t));
            for (var r = this._groups,
            i = r.length,
            a = new Array(i), f = 0; f < i; ++f) for (var o, c, u = r[f], s = u.length, h = a[f] = new Array(s), l = 0; l < s; ++l)(o = u[l]) && (c = t.call(o, o.__data__, l, u)) && ("__data__" in o && (c.__data__ = o.__data__), h[l] = c, De(h[l], n, e, l, h, je(o, e)));
            return new He(a, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = H(t));
            for (var r = this._groups,
            i = r.length,
            a = [], f = [], o = 0; o < i; ++o) for (var c, u = r[o], s = u.length, h = 0; h < s; ++h) if (c = u[h]) {
                for (var l, d = t.call(c, c.__data__, h, u), b = je(c, e), p = 0, _ = d.length; p < _; ++p)(l = d[p]) && De(l, n, e, p, d, b);
                a.push(d),
                f.push(c)
            }
            return new He(a, f, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = Z(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var a, f = n[i], o = f.length, c = r[i] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
            return new He(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i), f = new Array(r), o = 0; o < a; ++o) for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
            for (; o < r; ++o) f[o] = n[o];
            return new He(f, this._parents, this._name, this._id)
        },
        selection: function() {
            return new Ye(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name,
            n = this._id,
            e = Be(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var f, o = r[a], c = o.length, u = 0; u < c; ++u) if (f = o[u]) {
                var s = je(f, n);
                De(f, t, e, u, o, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease
                })
            }
            return new He(r, this._parents, t, e)
        },
        call: Xe.call,
        nodes: Xe.nodes,
        node: Xe.node,
        size: Xe.size,
        empty: Xe.empty,
        each: Xe.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? je(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                var r, i, a = function(t) {
                    return (t + "").trim().split(/^|\s+/).every(function(t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)),
                        !t || "start" === t
                    })
                } (n) ? Re: Fe;
                return function() {
                    var f = a(this, t),
                    o = f.on;
                    o !== r && (i = (r = o).copy()).on(n, e),
                    f.on = i
                }
            } (e, t, n))
        },
        attr: function(t, n) {
            var e = I(t),
            r = "transform" === e ? ne: ze;
            return this.attrTween(t, "function" == typeof n ? (e.local ?
            function(t, n, e) {
                var r, i, a;
                return function() {
                    var f, o = e(this);
                    if (null != o) return (f = this.getAttributeNS(t.space, t.local)) === o ? null: f === r && o === i ? a: a = n(r = f, i = o);
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t, n, e) {
                var r, i, a;
                return function() {
                    var f, o = e(this);
                    if (null != o) return (f = this.getAttribute(t)) === o ? null: f === r && o === i ? a: a = n(r = f, i = o);
                    this.removeAttribute(t)
                }
            })(e, r, Oe(this, "attr." + t, n)) : null == n ? (e.local ?
            function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            })(e) : (e.local ?
            function(t, n, e) {
                var r, i;
                return function() {
                    var a = this.getAttributeNS(t.space, t.local);
                    return a === e ? null: a === r ? i: i = n(r = a, e)
                }
            }: function(t, n, e) {
                var r, i;
                return function() {
                    var a = this.getAttribute(t);
                    return a === e ? null: a === r ? i: i = n(r = a, e)
                }
            })(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = I(t);
            return this.tween(e, (r.local ?
            function(t, n) {
                function e() {
                    var e = this,
                    r = n.apply(e, arguments);
                    return r &&
                    function(n) {
                        e.setAttributeNS(t.space, t.local, r(n))
                    }
                }
                return e._value = n,
                e
            }: function(t, n) {
                function e() {
                    var e = this,
                    r = n.apply(e, arguments);
                    return r &&
                    function(n) {
                        e.setAttribute(t, r(n))
                    }
                }
                return e._value = n,
                e
            })(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? te: ze;
            return null == n ? this.styleTween(t,
            function(t, n) {
                var e, r, i;
                return function() {
                    var a = et(this, t),
                    f = (this.style.removeProperty(t), et(this, t));
                    return a === f ? null: a === e && f === r ? i: i = n(e = a, r = f)
                }
            } (t, r)).on("end.style." + t,
            function(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            } (t)) : this.styleTween(t, "function" == typeof n ?
            function(t, n, e) {
                var r, i, a;
                return function() {
                    var f = et(this, t),
                    o = e(this);
                    return null == o && (this.style.removeProperty(t), o = et(this, t)),
                    f === o ? null: f === r && o === i ? a: a = n(r = f, i = o)
                }
            } (t, r, Oe(this, "style." + t, n)) : function(t, n, e) {
                var r, i;
                return function() {
                    var a = et(this, t);
                    return a === e ? null: a === r ? i: i = n(r = a, e)
                }
            } (t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r,
            function(t, n, e) {
                function r() {
                    var r = this,
                    i = n.apply(r, arguments);
                    return i &&
                    function(n) {
                        r.style.setProperty(t, i(n), e)
                    }
                }
                return r._value = n,
                r
            } (t, n, null == e ? "": e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ?
            function(t) {
                return function() {
                    var n = t(this);
                    this.textContent = null == n ? "": n
                }
            } (Oe(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            } (null == t ? "": t + ""))
        },
        remove: function() {
            return this.on("end.remove",
            function(t) {
                return function() {
                    var n = this.parentNode;
                    for (var e in this.__transition) if ( + e !== t) return;
                    n && n.removeChild(this)
                }
            } (this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = je(this.node(), e).tween, a = 0, f = i.length; a < f; ++a) if ((r = i[a]).name === t) return r.value;
                return null
            }
            return this.each((null == n ?
            function(t, n) {
                var e, r;
                return function() {
                    var i = Fe(this, t),
                    a = i.tween;
                    if (a !== e) for (var f = 0,
                    o = (r = e = a).length; f < o; ++f) if (r[f].name === n) { (r = r.slice()).splice(f, 1);
                        break
                    }
                    i.tween = r
                }
            }: function(t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function() {
                    var a = Fe(this, t),
                    f = a.tween;
                    if (f !== r) {
                        i = (r = f).slice();
                        for (var o = {
                            name: n,
                            value: e
                        },
                        c = 0, u = i.length; c < u; ++c) if (i[c].name === n) {
                            i[c] = o;
                            break
                        }
                        c === u && i.push(o)
                    }
                    a.tween = i
                }
            })(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ?
            function(t, n) {
                return function() {
                    Re(this, t).delay = +n.apply(this, arguments)
                }
            }: function(t, n) {
                return n = +n,
                function() {
                    Re(this, t).delay = n
                }
            })(n, t)) : je(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ?
            function(t, n) {
                return function() {
                    Fe(this, t).duration = +n.apply(this, arguments)
                }
            }: function(t, n) {
                return n = +n,
                function() {
                    Fe(this, t).duration = n
                }
            })(n, t)) : je(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(function(t, n) {
                if ("function" != typeof n) throw new Error;
                return function() {
                    Fe(this, t).ease = n
                }
            } (n, t)) : je(this.node(), n).ease
        }
    }; (function t(n) {
        function e(t) {
            return Math.pow(t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    })(3),
    function t(n) {
        function e(t) {
            return 1 - Math.pow(1 - t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    function t(n) {
        function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    Math.PI; (function t(n) {
        function e(t) {
            return t * t * ((n + 1) * t - n)
        }
        return n = +n,
        e.overshoot = t,
        e
    })(1.70158),
    function t(n) {
        function e(t) {
            return--t * t * ((n + 1) * t + n) + 1
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    function t(n) {
        function e(t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158);
    var Ze = 2 * Math.PI,
    Ge = (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
        function i(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Ze)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3),
    function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
        function i(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Ze)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3),
    function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);
        function i(t) {
            return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
        }
        return i.amplitude = function(n) {
            return t(n, e * Ze)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3), {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
        }
    });
    function Je(t, n) {
        for (var e; ! (e = t.__transition) || !(e = e[n]);) if (! (t = t.parentNode)) return Ge.time = ye(),
        Ge;
        return e
    }
    Ct.prototype.interrupt = function(t) {
        return this.each(function() {
            Ie(this, t)
        })
    },
    Ct.prototype.transition = function(t) {
        var n, e;
        t instanceof He ? (n = t._id, t = t._name) : (n = Be(), (e = Ge).time = ye(), t = null == t ? null: t + "");
        for (var r = this._groups,
        i = r.length,
        a = 0; a < i; ++a) for (var f, o = r[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && De(f, t, n, u, o, e || Je(f, n));
        return new He(r, this._parents, t, n)
    }; ["e", "w"].map(We),
    ["n", "s"].map(We),
    ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(We);
    function We(t) {
        return {
            type: t
        }
    }
    Math.cos,
    Math.sin,
    Math.PI,
    Math.max;
    Array.prototype.slice;
    var Qe = Math.PI,
    Ke = 2 * Qe,
    tr = Ke - 1e-6;
    function nr() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function er() {
        return new nr
    }
    nr.prototype = er.prototype = {
        constructor: nr,
        moveTo: function(t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        },
        quadraticCurveTo: function(t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
        },
        arcTo: function(t, n, e, r, i) {
            t = +t,
            n = +n,
            e = +e,
            r = +r,
            i = +i;
            var a = this._x1,
            f = this._y1,
            o = e - t,
            c = r - n,
            u = a - t,
            s = f - n,
            h = u * u + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (h > 1e-6) if (Math.abs(s * o - c * u) > 1e-6 && i) {
                var l = e - a,
                d = r - f,
                b = o * o + c * c,
                p = l * l + d * d,
                _ = Math.sqrt(b),
                y = Math.sqrt(h),
                v = i * Math.tan((Qe - Math.acos((b + h - p) / (2 * _ * y))) / 2),
                g = v / y,
                m = v / _;
                Math.abs(g - 1) > 1e-6 && (this._ += "L" + (t + g * u) + "," + (n + g * s)),
                this._ += "A" + i + "," + i + ",0,0," + +(s * l > u * d) + "," + (this._x1 = t + m * o) + "," + (this._y1 = n + m * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function(t, n, e, r, i, a) {
            t = +t,
            n = +n;
            var f = (e = +e) * Math.cos(r),
            o = e * Math.sin(r),
            c = t + f,
            u = n + o,
            s = 1 ^ a,
            h = a ? r - i: i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + u: (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + c + "," + u),
            e && (h < 0 && (h = h % Ke + Ke), h > tr ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - f) + "," + (n - o) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= Qe) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        },
        rect: function(t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        },
        toString: function() {
            return this._
        }
    };
    function rr() {}
    function ir(t, n) {
        var e = new rr;
        if (t instanceof rr) t.each(function(t, n) {
            e.set(n, t)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
            a = t.length;
            if (null == n) for (; ++i < a;) e.set(i, t[i]);
            else for (; ++i < a;) e.set(n(r = t[i], i, t), r)
        } else if (t) for (var f in t) e.set(f, t[f]);
        return e
    }
    rr.prototype = ir.prototype = {
        constructor: rr,
        has: function(t) {
            return "$" + t in this
        },
        get: function(t) {
            return this["$" + t]
        },
        set: function(t, n) {
            return this["$" + t] = n,
            this
        },
        remove: function(t) {
            var n = "$" + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this)"$" === t[0] && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this)"$" === n[0] && ++t;
            return t
        },
        empty: function() {
            for (var t in this) if ("$" === t[0]) return ! 1;
            return ! 0
        },
        each: function(t) {
            for (var n in this)"$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var ar = ir;
    function fr() {}
    var or = ar.prototype;
    function cr(t, n) {
        var e = new fr;
        if (t instanceof fr) t.each(function(t) {
            e.add(t)
        });
        else if (t) {
            var r = -1,
            i = t.length;
            if (null == n) for (; ++r < i;) e.add(t[r]);
            else for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }
    fr.prototype = cr.prototype = {
        constructor: fr,
        has: or.has,
        add: function(t) {
            return this["$" + (t += "")] = t,
            this
        },
        remove: or.remove,
        clear: or.clear,
        values: or.keys,
        size: or.size,
        empty: or.empty,
        each: or.each
    };
    Array.prototype.slice;
    var ur = {},
    sr = {},
    hr = 34,
    lr = 10,
    dr = 13;
    function br(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }
    var pr = function(t) {
        var n = new RegExp('["' + t + "\n\r]"),
        e = t.charCodeAt(0);
        function r(t, n) {
            var r, i = [],
            a = t.length,
            f = 0,
            o = 0,
            c = a <= 0,
            u = !1;
            function s() {
                if (c) return sr;
                if (u) return u = !1,
                ur;
                var n, r, i = f;
                if (t.charCodeAt(i) === hr) {
                    for (; f++<a && t.charCodeAt(f) !== hr || t.charCodeAt(++f) === hr;);
                    return (n = f) >= a ? c = !0 : (r = t.charCodeAt(f++)) === lr ? u = !0 : r === dr && (u = !0, t.charCodeAt(f) === lr && ++f),
                    t.slice(i + 1, n - 1).replace(/""/g, '"')
                }
                for (; f < a;) {
                    if ((r = t.charCodeAt(n = f++)) === lr) u = !0;
                    else if (r === dr) u = !0,
                    t.charCodeAt(f) === lr && ++f;
                    else if (r !== e) continue;
                    return t.slice(i, n)
                }
                return c = !0,
                t.slice(i, a)
            }
            for (t.charCodeAt(a - 1) === lr && --a, t.charCodeAt(a - 1) === dr && --a; (r = s()) !== sr;) {
                for (var h = []; r !== ur && r !== sr;) h.push(r),
                r = s();
                n && null == (h = n(h, o++)) || i.push(h)
            }
            return i
        }
        function i(n) {
            return n.map(a).join(t)
        }
        function a(t) {
            return null == t ? "": n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"': t
        }
        return {
            parse: function(t, n) {
                var e, i, a = r(t,
                function(t, r) {
                    if (e) return e(t, r - 1);
                    i = t,
                    e = n ?
                    function(t, n) {
                        var e = br(t);
                        return function(r, i) {
                            return n(e(r), i, t)
                        }
                    } (t, n) : br(t)
                });
                return a.columns = i || [],
                a
            },
            parseRows: r,
            format: function(n, e) {
                return null == e && (e = function(t) {
                    var n = Object.create(null),
                    e = [];
                    return t.forEach(function(t) {
                        for (var r in t) r in n || e.push(n[r] = r)
                    }),
                    e
                } (n)),
                [e.map(a).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return a(n[t])
                    }).join(t)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(i).join("\n")
            }
        }
    },
    _r = pr(","),
    yr = _r.parse,
    vr = (_r.parseRows, _r.format, _r.formatRows, pr("\t")),
    gr = vr.parse;
    vr.parseRows,
    vr.format,
    vr.formatRows;
    function mr(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text()
    }
    var xr = function(t, n) {
        return fetch(t, n).then(mr)
    };
    function wr(t) {
        return function(n, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0),
            xr(n, e).then(function(n) {
                return t(n, r)
            })
        }
    }
    wr(yr),
    wr(gr);
    function Mr(t) {
        return function(n, e) {
            return xr(n, e).then(function(n) {
                return (new DOMParser).parseFromString(n, t)
            })
        }
    }
    Mr("application/xml"),
    Mr("text/html"),
    Mr("image/svg+xml");
    function Nr(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, a, f, o, c, u, s, h, l, d = t._root,
        b = {
            data: r
        },
        p = t._x0,
        _ = t._y0,
        y = t._x1,
        v = t._y1;
        if (!d) return t._root = b,
        t;
        for (; d.length;) if ((u = n >= (a = (p + y) / 2)) ? p = a: y = a, (s = e >= (f = (_ + v) / 2)) ? _ = f: v = f, i = d, !(d = d[h = s << 1 | u])) return i[h] = b,
        t;
        if (o = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === o && e === c) return b.next = d,
        i ? i[h] = b: t._root = b,
        t;
        do {
            i = i ? i[h] = new Array(4) : t._root = new Array(4), (u = n >= (a = (p + y) / 2)) ? p = a: y = a, (s = e >= (f = (_ + v) / 2)) ? _ = f: v = f
        } while (( h = s << 1 | u ) == (l = (c >= f) << 1 | o >= a));
        return i[l] = d,
        i[h] = b,
        t
    }
    var Tr = function(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    };
    function Cr(t) {
        return t[0]
    }
    function kr(t) {
        return t[1]
    }
    function Ar(t, n, e) {
        var r = new Sr(null == n ? Cr: n, null == e ? kr: e, NaN, NaN, NaN, NaN);
        return null == t ? r: r.addAll(t)
    }
    function Sr(t, n, e, r, i, a) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this._root = void 0
    }
    function Er(t) {
        for (var n = {
            data: t.data
        },
        e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }
    var Ur = Ar.prototype = Sr.prototype;
    Ur.copy = function() {
        var t, n, e = new Sr(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = Er(r),
        e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = Er(n));
        return e
    },
    Ur.add = function(t) {
        var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
        return Nr(this.cover(n, e), n, e, t)
    },
    Ur.addAll = function(t) {
        var n, e, r, i, a = t.length,
        f = new Array(a),
        o = new Array(a),
        c = 1 / 0,
        u = 1 / 0,
        s = -1 / 0,
        h = -1 / 0;
        for (e = 0; e < a; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (f[e] = r, o[e] = i, r < c && (c = r), r > s && (s = r), i < u && (u = i), i > h && (h = i));
        for (s < c && (c = this._x0, s = this._x1), h < u && (u = this._y0, h = this._y1), this.cover(c, u).cover(s, h), e = 0; e < a; ++e) Nr(this, f[e], o[e], t[e]);
        return this
    },
    Ur.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
        r = this._y0,
        i = this._x1,
        a = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1,
        a = (r = Math.floor(n)) + 1;
        else {
            if (! (e > t || t > i || r > n || n > a)) return this;
            var f, o, c = i - e,
            u = this._root;
            switch (o = (n < (r + a) / 2) << 1 | t < (e + i) / 2) {
            case 0:
                do { (f = new Array(4))[o] = u, u = f
                } while ( a = r + ( c *= 2 ), t > (i = e + c) || n > a);
                break;
            case 1:
                do { (f = new Array(4))[o] = u, u = f
                } while ( a = r + ( c *= 2 ), (e = i - c) > t || n > a);
                break;
            case 2:
                do { (f = new Array(4))[o] = u, u = f
                } while ( r = a - ( c *= 2 ), t > (i = e + c) || r > n);
                break;
            case 3:
                do { (f = new Array(4))[o] = u, u = f
                } while ( r = a - ( c *= 2 ), (e = i - c) > t || r > n)
            }
            this._root && this._root.length && (this._root = u)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = a,
        this
    },
    Ur.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length) do {
                t.push(n.data)
            } while ( n = n . next )
        }),
        t
    },
    Ur.extent = function(t) {
        return arguments.length ? this.cover( + t[0][0], +t[0][1]).cover( + t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    },
    Ur.find = function(t, n, e) {
        var r, i, a, f, o, c, u, s = this._x0,
        h = this._y0,
        l = this._x1,
        d = this._y1,
        b = [],
        p = this._root;
        for (p && b.push(new Tr(p, s, h, l, d)), null == e ? e = 1 / 0 : (s = t - e, h = n - e, l = t + e, d = n + e, e *= e); c = b.pop();) if (! (! (p = c.node) || (i = c.x0) > l || (a = c.y0) > d || (f = c.x1) < s || (o = c.y1) < h)) if (p.length) {
            var _ = (i + f) / 2,
            y = (a + o) / 2;
            b.push(new Tr(p[3], _, y, f, o), new Tr(p[2], i, y, _, o), new Tr(p[1], _, a, f, y), new Tr(p[0], i, a, _, y)),
            (u = (n >= y) << 1 | t >= _) && (c = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - u], b[b.length - 1 - u] = c)
        } else {
            var v = t - +this._x.call(null, p.data),
            g = n - +this._y.call(null, p.data),
            m = v * v + g * g;
            if (m < e) {
                var x = Math.sqrt(e = m);
                s = t - x,
                h = n - x,
                l = t + x,
                d = n + x,
                r = p.data
            }
        }
        return r
    },
    Ur.remove = function(t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(f = +this._y.call(null, t))) return this;
        var n, e, r, i, a, f, o, c, u, s, h, l, d = this._root,
        b = this._x0,
        p = this._y0,
        _ = this._x1,
        y = this._y1;
        if (!d) return this;
        if (d.length) for (;;) {
            if ((u = a >= (o = (b + _) / 2)) ? b = o: _ = o, (s = f >= (c = (p + y) / 2)) ? p = c: y = c, n = d, !(d = d[h = s << 1 | u])) return this;
            if (!d.length) break; (n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (e = n, l = h)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i: delete r.next, this) : n ? (i ? n[h] = i: delete n[h], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[l] = d: this._root = d), this) : (this._root = i, this)
    },
    Ur.removeAll = function(t) {
        for (var n = 0,
        e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    },
    Ur.root = function() {
        return this._root
    },
    Ur.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length) do {++t
            } while ( n = n . next )
        }),
        t
    },
    Ur.visit = function(t) {
        var n, e, r, i, a, f, o = [],
        c = this._root;
        for (c && o.push(new Tr(c, this._x0, this._y0, this._x1, this._y1)); n = o.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, a = n.x1, f = n.y1) && c.length) {
            var u = (r + a) / 2,
            s = (i + f) / 2; (e = c[3]) && o.push(new Tr(e, u, s, a, f)),
            (e = c[2]) && o.push(new Tr(e, r, s, u, f)),
            (e = c[1]) && o.push(new Tr(e, u, i, a, s)),
            (e = c[0]) && o.push(new Tr(e, r, i, u, s))
        }
        return this
    },
    Ur.visitAfter = function(t) {
        var n, e = [],
        r = [];
        for (this._root && e.push(new Tr(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var a, f = n.x0,
                o = n.y0,
                c = n.x1,
                u = n.y1,
                s = (f + c) / 2,
                h = (o + u) / 2; (a = i[0]) && e.push(new Tr(a, f, o, s, h)),
                (a = i[1]) && e.push(new Tr(a, s, o, c, h)),
                (a = i[2]) && e.push(new Tr(a, f, h, s, u)),
                (a = i[3]) && e.push(new Tr(a, s, h, c, u))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    },
    Ur.x = function(t) {
        return arguments.length ? (this._x = t, this) : this._x
    },
    Ur.y = function(t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    Math.PI,
    Math.sqrt(5);
    var Lr = function(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    },
    Pr = function(t) {
        return (t = Lr(Math.abs(t))) ? t[1] : NaN
    },
    Dr = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function Rr(t) {
        return new Fr(t)
    }
    function Fr(t) {
        if (! (n = Dr.exec(t))) throw new Error("invalid format: " + t);
        var n;
        this.fill = n[1] || " ",
        this.align = n[2] || ">",
        this.sign = n[3] || "-",
        this.symbol = n[4] || "",
        this.zero = !!n[5],
        this.width = n[6] && +n[6],
        this.comma = !!n[7],
        this.precision = n[8] && +n[8].slice(1),
        this.trim = !!n[9],
        this.type = n[10] || ""
    }
    Rr.prototype = Fr.prototype,
    Fr.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0": "") + (null == this.width ? "": Math.max(1, 0 | this.width)) + (this.comma ? ",": "") + (null == this.precision ? "": "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~": "") + this.type
    };
    var jr, Ir, Or, zr, Yr = function(t) {
        t: for (var n, e = t.length,
        r = 1,
        i = -1; r < e; ++r) switch (t[r]) {
        case ".":
            i = n = r;
            break;
        case "0":
            0 === i && (i = r),
            n = r;
            break;
        default:
            if (i > 0) {
                if (!+t[r]) break t;
                i = 0
            }
        }
        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
    },
    qr = function(t, n) {
        var e = Lr(t, n);
        if (!e) return t + "";
        var r = e[0],
        i = e[1];
        return i < 0 ? "0." + new Array( - i).join("0") + r: r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    },
    Hr = {
        "%": function(t, n) {
            return (100 * t).toFixed(n)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, n) {
            return t.toExponential(n)
        },
        f: function(t, n) {
            return t.toFixed(n)
        },
        g: function(t, n) {
            return t.toPrecision(n)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, n) {
            return qr(100 * t, n)
        },
        r: qr,
        s: function(t, n) {
            var e = Lr(t, n);
            if (!e) return t + "";
            var r = e[0],
            i = e[1],
            a = i - (jr = 3 * Math.max( - 8, Math.min(8, Math.floor(i / 3)))) + 1,
            f = r.length;
            return a === f ? r: a > f ? r + new Array(a - f + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Lr(t, Math.max(0, n + a - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    },
    $r = function(t) {
        return t
    },
    Br = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
    Xr = function(t) {
        var n = t.grouping && t.thousands ?
        function(t, n) {
            return function(e, r) {
                for (var i = e.length,
                a = [], f = 0, o = t[0], c = 0; i > 0 && o > 0 && (c + o + 1 > r && (o = Math.max(1, r - c)), a.push(e.substring(i -= o, i + o)), !((c += o + 1) > r));) o = t[f = (f + 1) % t.length];
                return a.reverse().join(n)
            }
        } (t.grouping, t.thousands) : $r,
        e = t.currency,
        r = t.decimal,
        i = t.numerals ?
        function(t) {
            return function(n) {
                return n.replace(/[0-9]/g,
                function(n) {
                    return t[ + n]
                })
            }
        } (t.numerals) : $r,
        a = t.percent || "%";
        function f(t) {
            var f = (t = Rr(t)).fill,
            o = t.align,
            c = t.sign,
            u = t.symbol,
            s = t.zero,
            h = t.width,
            l = t.comma,
            d = t.precision,
            b = t.trim,
            p = t.type;
            "n" === p ? (l = !0, p = "g") : Hr[p] || (null == d && (d = 12), b = !0, p = "g"),
            (s || "0" === f && "=" === o) && (s = !0, f = "0", o = "=");
            var _ = "$" === u ? e[0] : "#" === u && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
            y = "$" === u ? e[1] : /[%p]/.test(p) ? a: "",
            v = Hr[p],
            g = /[defgprs%]/.test(p);
            function m(t) {
                var e, a, u, m = _,
                x = y;
                if ("c" === p) x = v(t) + x,
                t = "";
                else {
                    var w = (t = +t) < 0;
                    if (t = v(Math.abs(t), d), b && (t = Yr(t)), w && 0 == +t && (w = !1), m = (w ? "(" === c ? c: "-": "-" === c || "(" === c ? "": c) + m, x = ("s" === p ? Br[8 + jr / 3] : "") + x + (w && "(" === c ? ")": ""), g) for (e = -1, a = t.length; ++e < a;) if (48 > (u = t.charCodeAt(e)) || u > 57) {
                        x = (46 === u ? r + t.slice(e + 1) : t.slice(e)) + x,
                        t = t.slice(0, e);
                        break
                    }
                }
                l && !s && (t = n(t, 1 / 0));
                var M = m.length + t.length + x.length,
                N = M < h ? new Array(h - M + 1).join(f) : "";
                switch (l && s && (t = n(N + t, N.length ? h - x.length: 1 / 0), N = ""), o) {
                case "<":
                    t = m + t + x + N;
                    break;
                case "=":
                    t = m + N + t + x;
                    break;
                case "^":
                    t = N.slice(0, M = N.length >> 1) + m + t + x + N.slice(M);
                    break;
                default:
                    t = N + m + t + x
                }
                return i(t)
            }
            return d = null == d ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)),
            m.toString = function() {
                return t + ""
            },
            m
        }
        return {
            format: f,
            formatPrefix: function(t, n) {
                var e = f(((t = Rr(t)).type = "f", t)),
                r = 3 * Math.max( - 8, Math.min(8, Math.floor(Pr(n) / 3))),
                i = Math.pow(10, -r),
                a = Br[8 + r / 3];
                return function(t) {
                    return e(i * t) + a
                }
            }
        }
    }; !
    function(t) {
        Ir = Xr(t),
        Or = Ir.format,
        zr = Ir.formatPrefix
    } ({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var Vr = function() {
        return new Zr
    };
    function Zr() {
        this.reset()
    }
    Zr.prototype = {
        constructor: Zr,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            Jr(Gr, t, this.t),
            Jr(this, Gr.s, this.s),
            this.s ? this.t += Gr.t: this.s = Gr.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var Gr = new Zr;
    function Jr(t, n, e) {
        var r = t.s = n + e,
        i = r - n,
        a = r - i;
        t.t = n - a + (e - i)
    }
    var Wr = 1e-6,
    Qr = Math.PI,
    Kr = Qr / 2,
    ti = Qr / 4,
    ni = 2 * Qr,
    ei = Qr / 180,
    ri = Math.abs,
    ii = Math.atan,
    ai = Math.atan2,
    fi = Math.cos,
    oi = (Math.ceil, Math.exp),
    ci = (Math.floor, Math.log),
    ui = (Math.pow, Math.sin),
    si = (Math.sign, Math.sqrt),
    hi = Math.tan;
    function li(t) {
        return t > 1 ? 0 : t < -1 ? Qr: Math.acos(t)
    }
    function di(t) {
        return t > 1 ? Kr: t < -1 ? -Kr: Math.asin(t)
    }
    function bi() {}
    Vr(),
    Vr();
    function pi(t) {
        var n = t[0],
        e = t[1],
        r = fi(e);
        return [r * fi(n), r * ui(n), ui(e)]
    }
    function _i(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }
    function yi(t) {
        var n = si(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n,
        t[1] /= n,
        t[2] /= n
    }
    Vr();
    function vi(t, n) {
        return [t > Qr ? t - ni: t < -Qr ? t + ni: t, n]
    }
    vi.invert = vi;
    var gi = function() {
        var t, n = [];
        return {
            point: function(n, e) {
                t.push([n, e])
            },
            lineStart: function() {
                n.push(t = [])
            },
            lineEnd: bi,
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function() {
                var e = n;
                return n = [],
                t = null,
                e
            }
        }
    },
    mi = function(t, n) {
        return ri(t[0] - n[0]) < Wr && ri(t[1] - n[1]) < Wr
    };
    function xi(t, n, e, r) {
        this.x = t,
        this.z = n,
        this.o = e,
        this.e = r,
        this.v = !1,
        this.n = this.p = null
    }
    var wi = function(t, n, e, r, i) {
        var a, f, o = [],
        c = [];
        if (t.forEach(function(t) {
            if (! ((n = t.length - 1) <= 0)) {
                var n, e, r = t[0],
                f = t[n];
                if (mi(r, f)) {
                    for (i.lineStart(), a = 0; a < n; ++a) i.point((r = t[a])[0], r[1]);
                    i.lineEnd()
                } else o.push(e = new xi(r, t, null, !0)),
                c.push(e.o = new xi(r, null, e, !1)),
                o.push(e = new xi(f, t, null, !1)),
                c.push(e.o = new xi(f, null, e, !0))
            }
        }), o.length) {
            for (c.sort(n), Mi(o), Mi(c), a = 0, f = c.length; a < f; ++a) c[a].e = e = !e;
            for (var u, s, h = o[0];;) {
                for (var l = h,
                d = !0; l.v;) if ((l = l.n) === h) return;
                u = l.z,
                i.lineStart();
                do {
                    if (l.v = l.o.v = !0, l.e) {
                        if (d) for (a = 0, f = u.length; a < f; ++a) i.point((s = u[a])[0], s[1]);
                        else r(l.x, l.n.x, 1, i);
                        l = l.n
                    } else {
                        if (d) for (u = l.p.z, a = u.length - 1; a >= 0; --a) i.point((s = u[a])[0], s[1]);
                        else r(l.x, l.p.x, -1, i);
                        l = l.p
                    }
                    u = (l = l.o).z, d = !d
                } while (! l . v );
                i.lineEnd()
            }
        }
    };
    function Mi(t) {
        if (n = t.length) {
            for (var n, e, r = 0,
            i = t[0]; ++r < n;) i.n = e = t[r],
            e.p = i,
            i = e;
            i.n = e = t[0],
            e.p = i
        }
    }
    var Ni = Vr(),
    Ti = function(t, n) {
        var e = n[0],
        r = n[1],
        i = ui(r),
        a = [ui(e), -fi(e), 0],
        f = 0,
        o = 0;
        Ni.reset(),
        1 === i ? r = Kr + Wr: -1 === i && (r = -Kr - Wr);
        for (var c = 0,
        u = t.length; c < u; ++c) if (h = (s = t[c]).length) for (var s, h, l = s[h - 1], d = l[0], b = l[1] / 2 + ti, p = ui(b), _ = fi(b), y = 0; y < h; ++y, d = g, p = x, _ = w, l = v) {
            var v = s[y],
            g = v[0],
            m = v[1] / 2 + ti,
            x = ui(m),
            w = fi(m),
            M = g - d,
            N = M >= 0 ? 1 : -1,
            T = N * M,
            C = T > Qr,
            k = p * x;
            if (Ni.add(ai(k * N * ui(T), _ * w + k * fi(T))), f += C ? M + N * ni: M, C ^ d >= e ^ g >= e) {
                var A = _i(pi(l), pi(v));
                yi(A);
                var S = _i(a, A);
                yi(S);
                var E = (C ^ M >= 0 ? -1 : 1) * di(S[2]); (r > E || r === E && (A[0] || A[1])) && (o += C ^ M >= 0 ? 1 : -1)
            }
        }
        return (f < -Wr || f < Wr && Ni < -Wr) ^ 1 & o
    },
    Ci = function(t, n, e, r) {
        return function(i) {
            var a, f, o, c = n(i),
            u = gi(),
            s = n(u),
            h = !1,
            l = {
                point: d,
                lineStart: p,
                lineEnd: _,
                polygonStart: function() {
                    l.point = v,
                    l.lineStart = g,
                    l.lineEnd = m,
                    f = [],
                    a = []
                },
                polygonEnd: function() {
                    l.point = d,
                    l.lineStart = p,
                    l.lineEnd = _,
                    f = y(f);
                    var t = Ti(a, r);
                    f.length ? (h || (i.polygonStart(), h = !0), wi(f, Ai, t, e, i)) : t && (h || (i.polygonStart(), h = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()),
                    h && (i.polygonEnd(), h = !1),
                    f = a = null
                },
                sphere: function() {
                    i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                }
            };
            function d(n, e) {
                t(n, e) && i.point(n, e)
            }
            function b(t, n) {
                c.point(t, n)
            }
            function p() {
                l.point = b,
                c.lineStart()
            }
            function _() {
                l.point = d,
                c.lineEnd()
            }
            function v(t, n) {
                o.push([t, n]),
                s.point(t, n)
            }
            function g() {
                s.lineStart(),
                o = []
            }
            function m() {
                v(o[0][0], o[0][1]),
                s.lineEnd();
                var t, n, e, r, c = s.clean(),
                l = u.result(),
                d = l.length;
                if (o.pop(), a.push(o), o = null, d) if (1 & c) {
                    if ((n = (e = l[0]).length - 1) > 0) {
                        for (h || (i.polygonStart(), h = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                        i.lineEnd()
                    }
                } else d > 1 && 2 & c && l.push(l.pop().concat(l.shift())),
                f.push(l.filter(ki))
            }
            return l
        }
    };
    function ki(t) {
        return t.length > 1
    }
    function Ai(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - Kr - Wr: Kr - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Kr - Wr: Kr - n[1])
    }
    Ci(function() {
        return ! 0
    },
    function(t) {
        var n, e = NaN,
        r = NaN,
        i = NaN;
        return {
            lineStart: function() {
                t.lineStart(),
                n = 1
            },
            point: function(a, f) {
                var o = a > 0 ? Qr: -Qr,
                c = ri(a - e);
                ri(c - Qr) < Wr ? (t.point(e, r = (r + f) / 2 > 0 ? Kr: -Kr), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), t.point(a, r), n = 0) : i !== o && c >= Qr && (ri(e - i) < Wr && (e -= i * Wr), ri(a - o) < Wr && (a -= o * Wr), r = function(t, n, e, r) {
                    var i, a, f = ui(t - e);
                    return ri(f) > Wr ? ii((ui(n) * (a = fi(r)) * ui(e) - ui(r) * (i = fi(n)) * ui(t)) / (i * a * f)) : (n + r) / 2
                } (e, r, a, f), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), n = 0),
                t.point(e = a, r = f),
                i = o
            },
            lineEnd: function() {
                t.lineEnd(),
                e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    },
    function(t, n, e, r) {
        var i;
        if (null == t) i = e * Kr,
        r.point( - Qr, i),
        r.point(0, i),
        r.point(Qr, i),
        r.point(Qr, 0),
        r.point(Qr, -i),
        r.point(0, -i),
        r.point( - Qr, -i),
        r.point( - Qr, 0),
        r.point( - Qr, i);
        else if (ri(t[0] - n[0]) > Wr) {
            var a = t[0] < n[0] ? Qr: -Qr;
            i = e * a / 2,
            r.point( - a, i),
            r.point(0, i),
            r.point(a, i)
        } else r.point(n[0], n[1])
    },
    [ - Qr, -Kr]);
    Vr();
    Vr(),
    Vr();
    function Si(t) {
        this._context = t
    }
    Si.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t,
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._context.moveTo(t, n),
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(t, n);
                break;
            default:
                this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, ni)
            }
        },
        result: bi
    };
    Vr();
    function Ei() {
        this._string = []
    }
    function Ui(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    Ei.prototype = {
        _radius: 4.5,
        _circle: Ui(4.5),
        pointRadius: function(t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null),
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._string.push("M", t, ",", n),
                this._point = 1;
                break;
            case 1:
                this._string.push("L", t, ",", n);
                break;
            default:
                null == this._circle && (this._circle = Ui(this._radius)),
                this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [],
                t
            }
            return null
        }
    };
    function Li(t) {
        return function(n) {
            var e = new Pi;
            for (var r in t) e[r] = t[r];
            return e.stream = n,
            e
        }
    }
    function Pi() {}
    Pi.prototype = {
        constructor: Pi,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    fi(30 * ei);
    Li({
        point: function(t, n) {
            this.stream.point(t * ei, n * ei)
        }
    });
    function Di(t) {
        return function(n, e) {
            var r = fi(n),
            i = fi(e),
            a = t(r * i);
            return [a * i * ui(n), a * ui(e)]
        }
    }
    function Ri(t) {
        return function(n, e) {
            var r = si(n * n + e * e),
            i = t(r),
            a = ui(i),
            f = fi(i);
            return [ai(n * a, r * f), di(r && e * a / r)]
        }
    }
    var Fi = Di(function(t) {
        return si(2 / (1 + t))
    });
    Fi.invert = Ri(function(t) {
        return 2 * di(t / 2)
    });
    var ji = Di(function(t) {
        return (t = li(t)) && t / ui(t)
    });
    ji.invert = Ri(function(t) {
        return t
    });
    function Ii(t, n) {
        return [t, ci(hi((Kr + n) / 2))]
    }
    Ii.invert = function(t, n) {
        return [t, 2 * ii(oi(n)) - Kr]
    };
    function Oi(t, n) {
        return [t, n]
    }
    Oi.invert = Oi;
    function zi(t, n) {
        var e = fi(n),
        r = fi(t) * e;
        return [e * ui(t) / r, ui(n) / r]
    }
    zi.invert = Ri(ii);
    function Yi(t, n) {
        var e = n * n,
        r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }
    Yi.invert = function(t, n) {
        var e, r = n,
        i = 25;
        do {
            var a = r * r,
            f = a * a;
            r -= e = (r * (1.007226 + a * (.015085 + f * (.028874 * a - .044475 - .005916 * f))) - n) / (1.007226 + a * (.045255 + f * (.259866 * a - .311325 - .005916 * 11 * f)))
        } while ( ri ( e ) > Wr && --i > 0);
        return [t / (.8707 + (a = r * r) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), r]
    };
    function qi(t, n) {
        return [fi(n) * ui(t), ui(n)]
    }
    qi.invert = Ri(di);
    function Hi(t, n) {
        var e = fi(n),
        r = 1 + fi(t) * e;
        return [e * ui(t) / r, ui(n) / r]
    }
    Hi.invert = Ri(function(t) {
        return 2 * ii(t)
    });
    function $i(t, n) {
        return [ci(hi((Kr + n) / 2)), -t]
    }
    $i.invert = function(t, n) {
        return [ - n, 2 * ii(oi(t)) - Kr]
    };
    function Bi(t) {
        var n = 0,
        e = t.children,
        r = e && e.length;
        if (r) for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n
    }
    function Xi(t, n) {
        var e, r, i, a, f, o = new Ji(t),
        c = +t.value && (o.value = t.value),
        u = [o];
        for (null == n && (n = Vi); e = u.pop();) if (c && (e.value = +e.data.value), (i = n(e.data)) && (f = i.length)) for (e.children = new Array(f), a = f - 1; a >= 0; --a) u.push(r = e.children[a] = new Ji(i[a])),
        r.parent = e,
        r.depth = e.depth + 1;
        return o.eachBefore(Gi)
    }
    function Vi(t) {
        return t.children
    }
    function Zi(t) {
        t.data = t.data.data
    }
    function Gi(t) {
        var n = 0;
        do {
            t.height = n
        } while (( t = t . parent ) && t.height < ++n)
    }
    function Ji(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    Ji.prototype = Xi.prototype = {
        constructor: Ji,
        count: function() {
            return this.eachAfter(Bi)
        },
        each: function(t) {
            var n, e, r, i, a = this,
            f = [a];
            do {
                for (n = f.reverse(), f = []; a = n.pop();) if (t(a), e = a.children) for (r = 0, i = e.length; r < i; ++r) f.push(e[r])
            } while ( f . length );
            return this
        },
        eachAfter: function(t) {
            for (var n, e, r, i = this,
            a = [i], f = []; i = a.pop();) if (f.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) a.push(n[e]);
            for (; i = f.pop();) t(i);
            return this
        },
        eachBefore: function(t) {
            for (var n, e, r = this,
            i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        },
        sum: function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        },
        sort: function(t) {
            return this.eachBefore(function(n) {
                n.children && n.children.sort(t)
            })
        },
        path: function(t) {
            for (var n = this,
            e = function(t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
                for (t = e.pop(), n = r.pop(); t === n;) i = t,
                t = e.pop(),
                n = r.pop();
                return i
            } (n, t), r = [n]; n !== e;) n = n.parent,
            r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t),
            t = t.parent;
            return r
        },
        ancestors: function() {
            for (var t = this,
            n = [t]; t = t.parent;) n.push(t);
            return n
        },
        descendants: function() {
            var t = [];
            return this.each(function(n) {
                t.push(n)
            }),
            t
        },
        leaves: function() {
            var t = [];
            return this.eachBefore(function(n) {
                n.children || t.push(n)
            }),
            t
        },
        links: function() {
            var t = this,
            n = [];
            return t.each(function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }),
            n
        },
        copy: function() {
            return Xi(this).eachBefore(Zi)
        }
    };
    Array.prototype.slice;
    var Wi = function(t, n, e, r, i) {
        for (var a, f = t.children,
        o = -1,
        c = f.length,
        u = t.value && (r - n) / t.value; ++o < c;)(a = f[o]).y0 = e,
        a.y1 = i,
        a.x0 = n,
        a.x1 = n += a.value * u
    };
    function Qi(t, n) {
        this._ = t,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = n
    }
    Qi.prototype = Object.create(Ji.prototype);
    var Ki = function(t, n, e, r, i) {
        for (var a, f = t.children,
        o = -1,
        c = f.length,
        u = t.value && (i - e) / t.value; ++o < c;)(a = f[o]).x0 = n,
        a.x1 = r,
        a.y0 = e,
        a.y1 = e += a.value * u
    },
    ta = (1 + Math.sqrt(5)) / 2;
    function na(t, n, e, r, i, a) {
        for (var f, o, c, u, s, h, l, d, b, p, _, y = [], v = n.children, g = 0, m = 0, x = v.length, w = n.value; g < x;) {
            c = i - e,
            u = a - r;
            do {
                s = v[m++].value
            } while (! s && m < x );
            for (h = l = s, _ = s * s * (p = Math.max(u / c, c / u) / (w * t)), b = Math.max(l / _, _ / h); m < x; ++m) {
                if (s += o = v[m].value, o < h && (h = o), o > l && (l = o), _ = s * s * p, (d = Math.max(l / _, _ / h)) > b) {
                    s -= o;
                    break
                }
                b = d
            }
            y.push(f = {
                value: s,
                dice: c < u,
                children: v.slice(g, m)
            }),
            f.dice ? Wi(f, e, r, i, w ? r += u * s / w: a) : Ki(f, e, r, w ? e += c * s / w: i, a),
            w -= s,
            g = m
        }
        return y
    } (function t(n) {
        function e(t, e, r, i, a) {
            na(n, t, e, r, i, a)
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    })(ta),
    function t(n) {
        function e(t, e, r, i, a) {
            if ((f = t._squarify) && f.ratio === n) for (var f, o, c, u, s, h = -1,
            l = f.length,
            d = t.value; ++h < l;) {
                for (c = (o = f[h]).children, u = o.value = 0, s = c.length; u < s; ++u) o.value += c[u].value;
                o.dice ? Wi(o, e, r, i, r += (a - r) * o.value / d) : Ki(o, e, r, e += (i - e) * o.value / d, a),
                d -= o.value
            } else t._squarify = f = na(n, t, e, r, i, a),
            f.ratio = n
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    } (ta);
    var ea = function() {
        return Math.random()
    },
    ra = (function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            1 === arguments.length ? (e = t, t = 0) : e -= t,
            function() {
                return n() * e + t
            }
        }
        return e.source = t,
        e
    } (ea),
    function t(n) {
        function e(t, e) {
            var r, i;
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                var a;
                if (null != r) a = r,
                r = null;
                else do {
                    r = 2 * n() - 1, a = 2 * n() - 1, i = r * r + a * a
                } while (! i || i > 1 );
                return t + e * a * Math.sqrt( - 2 * Math.log(i) / i)
            }
        }
        return e.source = t,
        e
    } (ea)),
    ia = (function t(n) {
        function e() {
            var t = ra.source(n).apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
        return e.source = t,
        e
    } (ea),
    function t(n) {
        function e(t) {
            return function() {
                for (var e = 0,
                r = 0; r < t; ++r) e += n();
                return e
            }
        }
        return e.source = t,
        e
    } (ea)),
    aa = (function t(n) {
        function e(t) {
            var e = ia.source(n)(t);
            return function() {
                return e() / t
            }
        }
        return e.source = t,
        e
    } (ea),
    function t(n) {
        function e(t) {
            return function() {
                return - Math.log(1 - n()) / t
            }
        }
        return e.source = t,
        e
    } (ea), Array.prototype),
    fa = aa.map,
    oa = aa.slice,
    ca = {
        name: "implicit"
    };
    function ua() {
        var t, n, e = function t(n) {
            var e = ar(),
            r = [],
            i = ca;
            function a(t) {
                var a = t + "",
                f = e.get(a);
                if (!f) {
                    if (i !== ca) return i;
                    e.set(a, f = r.push(t))
                }
                return n[(f - 1) % n.length]
            }
            return n = null == n ? [] : oa.call(n),
            a.domain = function(t) {
                if (!arguments.length) return r.slice();
                r = [],
                e = ar();
                for (var n, i, f = -1,
                o = t.length; ++f < o;) e.has(i = (n = t[f]) + "") || e.set(i, r.push(n));
                return a
            },
            a.range = function(t) {
                return arguments.length ? (n = oa.call(t), a) : n.slice()
            },
            a.unknown = function(t) {
                return arguments.length ? (i = t, a) : i
            },
            a.copy = function() {
                return t().domain(r).range(n).unknown(i)
            },
            a
        } ().unknown(void 0),
        r = e.domain,
        i = e.range,
        a = [0, 1],
        f = !1,
        o = 0,
        c = 0,
        s = .5;
        function h() {
            var e = r().length,
            h = a[1] < a[0],
            l = a[h - 0],
            d = a[1 - h];
            t = (d - l) / Math.max(1, e - o + 2 * c),
            f && (t = Math.floor(t)),
            l += (d - l - t * (e - o)) * s,
            n = t * (1 - o),
            f && (l = Math.round(l), n = Math.round(n));
            var b = u(e).map(function(n) {
                return l + t * n
            });
            return i(h ? b.reverse() : b)
        }
        return delete e.unknown,
        e.domain = function(t) {
            return arguments.length ? (r(t), h()) : r()
        },
        e.range = function(t) {
            return arguments.length ? (a = [ + t[0], +t[1]], h()) : a.slice()
        },
        e.rangeRound = function(t) {
            return a = [ + t[0], +t[1]],
            f = !0,
            h()
        },
        e.bandwidth = function() {
            return n
        },
        e.step = function() {
            return t
        },
        e.round = function(t) {
            return arguments.length ? (f = !!t, h()) : f
        },
        e.padding = function(t) {
            return arguments.length ? (o = c = Math.max(0, Math.min(1, t)), h()) : o
        },
        e.paddingInner = function(t) {
            return arguments.length ? (o = Math.max(0, Math.min(1, t)), h()) : o
        },
        e.paddingOuter = function(t) {
            return arguments.length ? (c = Math.max(0, Math.min(1, t)), h()) : c
        },
        e.align = function(t) {
            return arguments.length ? (s = Math.max(0, Math.min(1, t)), h()) : s
        },
        e.copy = function() {
            return ua().domain(r()).range(a).round(f).paddingInner(o).paddingOuter(c).align(s)
        },
        h()
    }
    var sa = function(t) {
        return function() {
            return t
        }
    },
    ha = function(t) {
        return + t
    },
    la = [0, 1];
    function da(t, n) {
        return (n -= t = +t) ?
        function(e) {
            return (e - t) / n
        }: sa(n)
    }
    function ba(t, n, e, r) {
        var i = t[0],
        a = t[1],
        f = n[0],
        o = n[1];
        return a < i ? (i = e(a, i), f = r(o, f)) : (i = e(i, a), f = r(f, o)),
        function(t) {
            return f(i(t))
        }
    }
    function pa(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
        a = new Array(i),
        f = new Array(i),
        c = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++c < i;) a[c] = e(t[c], t[c + 1]),
        f[c] = r(n[c], n[c + 1]);
        return function(n) {
            var e = o(t, n, 1, i) - 1;
            return f[e](a[e](n))
        }
    }
    function _a(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }
    function ya(t, n) {
        var e, r, i, a = la,
        f = la,
        o = Zn,
        c = !1;
        function u() {
            return e = Math.min(a.length, f.length) > 2 ? pa: ba,
            r = i = null,
            s
        }
        function s(n) {
            return (r || (r = e(a, f, c ?
            function(t) {
                return function(n, e) {
                    var r = t(n = +n, e = +e);
                    return function(t) {
                        return t <= n ? 0 : t >= e ? 1 : r(t)
                    }
                }
            } (t) : t, o)))( + n)
        }
        return s.invert = function(t) {
            return (i || (i = e(f, a, da, c ?
            function(t) {
                return function(n, e) {
                    var r = t(n = +n, e = +e);
                    return function(t) {
                        return t <= 0 ? n: t >= 1 ? e: r(t)
                    }
                }
            } (n) : n)))( + t)
        },
        s.domain = function(t) {
            return arguments.length ? (a = fa.call(t, ha), u()) : a.slice()
        },
        s.range = function(t) {
            return arguments.length ? (f = oa.call(t), u()) : f.slice()
        },
        s.rangeRound = function(t) {
            return f = oa.call(t),
            o = Gn,
            u()
        },
        s.clamp = function(t) {
            return arguments.length ? (c = !!t, u()) : c
        },
        s.interpolate = function(t) {
            return arguments.length ? (o = t, u()) : o
        },
        u()
    }
    var va = function(t, n, e) {
        var r, i = t[0],
        a = t[t.length - 1],
        f = p(i, a, null == n ? 10 : n);
        switch ((e = Rr(null == e ? ",f": e)).type) {
        case "s":
            var o = Math.max(Math.abs(i), Math.abs(a));
            return null != e.precision || isNaN(r = function(t, n) {
                return Math.max(0, 3 * Math.max( - 8, Math.min(8, Math.floor(Pr(n) / 3))) - Pr(Math.abs(t)))
            } (f, o)) || (e.precision = r),
            zr(e, o);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != e.precision || isNaN(r = function(t, n) {
                return t = Math.abs(t),
                n = Math.abs(n) - t,
                Math.max(0, Pr(n) - Pr(t)) + 1
            } (f, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
            break;
        case "f":
        case "%":
            null != e.precision || isNaN(r = function(t) {
                return Math.max(0, -Pr(Math.abs(t)))
            } (f)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return Or(e)
    };
    function ga(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return d(e[0], e[e.length - 1], null == t ? 10 : t)
        },
        t.tickFormat = function(t, e) {
            return va(n(), t, e)
        },
        t.nice = function(e) {
            null == e && (e = 10);
            var r, i = n(),
            a = 0,
            f = i.length - 1,
            o = i[a],
            c = i[f];
            return c < o && (r = o, o = c, c = r, r = a, a = f, f = r),
            (r = b(o, c, e)) > 0 ? r = b(o = Math.floor(o / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = b(o = Math.ceil(o * r) / r, c = Math.floor(c * r) / r, e)),
            r > 0 ? (i[a] = Math.floor(o / r) * r, i[f] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[a] = Math.ceil(o * r) / r, i[f] = Math.floor(c * r) / r, n(i)),
            t
        },
        t
    }
    function ma() {
        var t = ya(da, zn);
        return t.copy = function() {
            return _a(t, ma())
        },
        ga(t)
    }
    function xa(t, n) {
        return t < 0 ? -Math.pow( - t, n) : Math.pow(t, n)
    }
    function wa() {
        var t = 1,
        n = ya(function(n, e) {
            return (e = xa(e, t) - (n = xa(n, t))) ?
            function(r) {
                return (xa(r, t) - n) / e
            }: sa(e)
        },
        function(n, e) {
            return e = xa(e, t) - (n = xa(n, t)),
            function(r) {
                return xa(n + e * r, 1 / t)
            }
        }),
        e = n.domain;
        return n.exponent = function(n) {
            return arguments.length ? (t = +n, e(e())) : t
        },
        n.copy = function() {
            return _a(n, wa().exponent(t))
        },
        ga(n)
    }
    var Ma = new Date,
    Na = new Date;
    function Ta(t, n, e, r) {
        function i(n) {
            return t(n = new Date( + n)),
            n
        }
        return i.floor = i,
        i.ceil = function(e) {
            return t(e = new Date(e - 1)),
            n(e, 1),
            t(e),
            e
        },
        i.round = function(t) {
            var n = i(t),
            e = i.ceil(t);
            return t - n < e - t ? n: e
        },
        i.offset = function(t, e) {
            return n(t = new Date( + t), null == e ? 1 : Math.floor(e)),
            t
        },
        i.range = function(e, r, a) {
            var f, o = [];
            if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return o;
            do {
                o.push(f = new Date( + e)), n(e, a), t(e)
            } while ( f < e && e < r );
            return o
        },
        i.filter = function(e) {
            return Ta(function(n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            },
            function(t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););
                else for (; --r >= 0;) for (; n(t, 1), !e(t););
            })
        },
        e && (i.count = function(n, r) {
            return Ma.setTime( + n),
            Na.setTime( + r),
            t(Ma),
            t(Na),
            Math.floor(e(Ma, Na))
        },
        i.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? i.filter(r ?
            function(n) {
                return r(n) % t == 0
            }: function(n) {
                return i.count(0, n) % t == 0
            }) : i: null
        }),
        i
    }
    var Ca = Ta(function() {},
    function(t, n) {
        t.setTime( + t + n)
    },
    function(t, n) {
        return n - t
    });
    Ca.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? Ta(function(n) {
            n.setTime(Math.floor(n / t) * t)
        },
        function(n, e) {
            n.setTime( + n + e * t)
        },
        function(n, e) {
            return (e - n) / t
        }) : Ca: null
    };
    Ca.range;
    var ka = 6e4,
    Aa = 6048e5,
    Sa = Ta(function(t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    },
    function(t, n) {
        t.setTime( + t + 1e3 * n)
    },
    function(t, n) {
        return (n - t) / 1e3
    },
    function(t) {
        return t.getUTCSeconds()
    }),
    Ea = (Sa.range, Ta(function(t) {
        t.setTime(Math.floor(t / ka) * ka)
    },
    function(t, n) {
        t.setTime( + t + n * ka)
    },
    function(t, n) {
        return (n - t) / ka
    },
    function(t) {
        return t.getMinutes()
    })),
    Ua = (Ea.range, Ta(function(t) {
        var n = t.getTimezoneOffset() * ka % 36e5;
        n < 0 && (n += 36e5),
        t.setTime(36e5 * Math.floor(( + t - n) / 36e5) + n)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getHours()
    })),
    La = (Ua.range, Ta(function(t) {
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setDate(t.getDate() + n)
    },
    function(t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ka) / 864e5
    },
    function(t) {
        return t.getDate() - 1
    })),
    Pa = La;
    La.range;
    function Da(t) {
        return Ta(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        },
        function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ka) / Aa
        })
    }
    var Ra = Da(0),
    Fa = Da(1),
    ja = Da(2),
    Ia = Da(3),
    Oa = Da(4),
    za = Da(5),
    Ya = Da(6),
    qa = (Ra.range, Fa.range, ja.range, Ia.range, Oa.range, za.range, Ya.range, Ta(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setMonth(t.getMonth() + n)
    },
    function(t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    },
    function(t) {
        return t.getMonth()
    })),
    Ha = (qa.range, Ta(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    },
    function(t, n) {
        return n.getFullYear() - t.getFullYear()
    },
    function(t) {
        return t.getFullYear()
    }));
    Ha.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ta(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var $a = Ha,
    Ba = (Ha.range, Ta(function(t) {
        t.setUTCSeconds(0, 0)
    },
    function(t, n) {
        t.setTime( + t + n * ka)
    },
    function(t, n) {
        return (n - t) / ka
    },
    function(t) {
        return t.getUTCMinutes()
    })),
    Xa = (Ba.range, Ta(function(t) {
        t.setUTCMinutes(0, 0, 0)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getUTCHours()
    })),
    Va = (Xa.range, Ta(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    },
    function(t, n) {
        return (n - t) / 864e5
    },
    function(t) {
        return t.getUTCDate() - 1
    })),
    Za = Va;
    Va.range;
    function Ga(t) {
        return Ta(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        },
        function(t, n) {
            return (n - t) / Aa
        })
    }
    var Ja = Ga(0),
    Wa = Ga(1),
    Qa = Ga(2),
    Ka = Ga(3),
    tf = Ga(4),
    nf = Ga(5),
    ef = Ga(6),
    rf = (Ja.range, Wa.range, Qa.range, Ka.range, tf.range, nf.range, ef.range, Ta(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    },
    function(t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    },
    function(t) {
        return t.getUTCMonth()
    })),
    af = (rf.range, Ta(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    },
    function(t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    },
    function(t) {
        return t.getUTCFullYear()
    }));
    af.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ta(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var ff = af;
    af.range;
    function of(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function cf(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function uf(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    var sf, hf, lf, df = {
        "-": "",
        _: " ",
        0 : "0"
    },
    bf = /^\s*\d+/,
    pf = /^%/,
    _f = /[\\^$*+?|[\]().{}]/g;
    function yf(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i: i)
    }
    function vf(t) {
        return t.replace(_f, "\\$&")
    }
    function gf(t) {
        return new RegExp("^(?:" + t.map(vf).join("|") + ")", "i")
    }
    function mf(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function xf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function wf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0], e + r[0].length) : -1
    }
    function Mf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Nf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0], e + r[0].length) : -1
    }
    function Tf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function Cf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function kf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function Af(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function Sf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function Ef(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function Uf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function Lf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function Pf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function Df(t, n, e) {
        var r = bf.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function Rf(t, n, e) {
        var r = bf.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function Ff(t, n, e) {
        var r = bf.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }
    function jf(t, n, e) {
        var r = pf.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function If(t, n, e) {
        var r = bf.exec(n.slice(e));
        return r ? (t.Q = +r[0], e + r[0].length) : -1
    }
    function Of(t, n, e) {
        var r = bf.exec(n.slice(e));
        return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }
    function zf(t, n) {
        return yf(t.getDate(), n, 2)
    }
    function Yf(t, n) {
        return yf(t.getHours(), n, 2)
    }
    function qf(t, n) {
        return yf(t.getHours() % 12 || 12, n, 2)
    }
    function Hf(t, n) {
        return yf(1 + Pa.count($a(t), t), n, 3)
    }
    function $f(t, n) {
        return yf(t.getMilliseconds(), n, 3)
    }
    function Bf(t, n) {
        return $f(t, n) + "000"
    }
    function Xf(t, n) {
        return yf(t.getMonth() + 1, n, 2)
    }
    function Vf(t, n) {
        return yf(t.getMinutes(), n, 2)
    }
    function Zf(t, n) {
        return yf(t.getSeconds(), n, 2)
    }
    function Gf(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }
    function Jf(t, n) {
        return yf(Ra.count($a(t), t), n, 2)
    }
    function Wf(t, n) {
        var e = t.getDay();
        return t = e >= 4 || 0 === e ? Oa(t) : Oa.ceil(t),
        yf(Oa.count($a(t), t) + (4 === $a(t).getDay()), n, 2)
    }
    function Qf(t) {
        return t.getDay()
    }
    function Kf(t, n) {
        return yf(Fa.count($a(t), t), n, 2)
    }
    function to(t, n) {
        return yf(t.getFullYear() % 100, n, 2)
    }
    function no(t, n) {
        return yf(t.getFullYear() % 1e4, n, 4)
    }
    function eo(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + yf(n / 60 | 0, "0", 2) + yf(n % 60, "0", 2)
    }
    function ro(t, n) {
        return yf(t.getUTCDate(), n, 2)
    }
    function io(t, n) {
        return yf(t.getUTCHours(), n, 2)
    }
    function ao(t, n) {
        return yf(t.getUTCHours() % 12 || 12, n, 2)
    }
    function fo(t, n) {
        return yf(1 + Za.count(ff(t), t), n, 3)
    }
    function oo(t, n) {
        return yf(t.getUTCMilliseconds(), n, 3)
    }
    function co(t, n) {
        return oo(t, n) + "000"
    }
    function uo(t, n) {
        return yf(t.getUTCMonth() + 1, n, 2)
    }
    function so(t, n) {
        return yf(t.getUTCMinutes(), n, 2)
    }
    function ho(t, n) {
        return yf(t.getUTCSeconds(), n, 2)
    }
    function lo(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }
    function bo(t, n) {
        return yf(Ja.count(ff(t), t), n, 2)
    }
    function po(t, n) {
        var e = t.getUTCDay();
        return t = e >= 4 || 0 === e ? tf(t) : tf.ceil(t),
        yf(tf.count(ff(t), t) + (4 === ff(t).getUTCDay()), n, 2)
    }
    function _o(t) {
        return t.getUTCDay()
    }
    function yo(t, n) {
        return yf(Wa.count(ff(t), t), n, 2)
    }
    function vo(t, n) {
        return yf(t.getUTCFullYear() % 100, n, 2)
    }
    function go(t, n) {
        return yf(t.getUTCFullYear() % 1e4, n, 4)
    }
    function mo() {
        return "+0000"
    }
    function xo() {
        return "%"
    }
    function wo(t) {
        return + t
    }
    function Mo(t) {
        return Math.floor( + t / 1e3)
    } !
    function(t) {
        sf = function(t) {
            var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            a = t.days,
            f = t.shortDays,
            o = t.months,
            c = t.shortMonths,
            u = gf(i),
            s = mf(i),
            h = gf(a),
            l = mf(a),
            d = gf(f),
            b = mf(f),
            p = gf(o),
            _ = mf(o),
            y = gf(c),
            v = mf(c),
            g = {
                a: function(t) {
                    return f[t.getDay()]
                },
                A: function(t) {
                    return a[t.getDay()]
                },
                b: function(t) {
                    return c[t.getMonth()]
                },
                B: function(t) {
                    return o[t.getMonth()]
                },
                c: null,
                d: zf,
                e: zf,
                f: Bf,
                H: Yf,
                I: qf,
                j: Hf,
                L: $f,
                m: Xf,
                M: Vf,
                p: function(t) {
                    return i[ + (t.getHours() >= 12)]
                },
                Q: wo,
                s: Mo,
                S: Zf,
                u: Gf,
                U: Jf,
                V: Wf,
                w: Qf,
                W: Kf,
                x: null,
                X: null,
                y: to,
                Y: no,
                Z: eo,
                "%": xo
            },
            m = {
                a: function(t) {
                    return f[t.getUTCDay()]
                },
                A: function(t) {
                    return a[t.getUTCDay()]
                },
                b: function(t) {
                    return c[t.getUTCMonth()]
                },
                B: function(t) {
                    return o[t.getUTCMonth()]
                },
                c: null,
                d: ro,
                e: ro,
                f: co,
                H: io,
                I: ao,
                j: fo,
                L: oo,
                m: uo,
                M: so,
                p: function(t) {
                    return i[ + (t.getUTCHours() >= 12)]
                },
                Q: wo,
                s: Mo,
                S: ho,
                u: lo,
                U: bo,
                V: po,
                w: _o,
                W: yo,
                x: null,
                X: null,
                y: vo,
                Y: go,
                Z: mo,
                "%": xo
            },
            x = {
                a: function(t, n, e) {
                    var r = d.exec(n.slice(e));
                    return r ? (t.w = b[r[0].toLowerCase()], e + r[0].length) : -1
                },
                A: function(t, n, e) {
                    var r = h.exec(n.slice(e));
                    return r ? (t.w = l[r[0].toLowerCase()], e + r[0].length) : -1
                },
                b: function(t, n, e) {
                    var r = y.exec(n.slice(e));
                    return r ? (t.m = v[r[0].toLowerCase()], e + r[0].length) : -1
                },
                B: function(t, n, e) {
                    var r = p.exec(n.slice(e));
                    return r ? (t.m = _[r[0].toLowerCase()], e + r[0].length) : -1
                },
                c: function(t, e, r) {
                    return N(t, n, e, r)
                },
                d: Ef,
                e: Ef,
                f: Ff,
                H: Lf,
                I: Lf,
                j: Uf,
                L: Rf,
                m: Sf,
                M: Pf,
                p: function(t, n, e) {
                    var r = u.exec(n.slice(e));
                    return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
                },
                Q: If,
                s: Of,
                S: Df,
                u: wf,
                U: Mf,
                V: Nf,
                w: xf,
                W: Tf,
                x: function(t, n, r) {
                    return N(t, e, n, r)
                },
                X: function(t, n, e) {
                    return N(t, r, n, e)
                },
                y: kf,
                Y: Cf,
                Z: Af,
                "%": jf
            };
            function w(t, n) {
                return function(e) {
                    var r, i, a, f = [],
                    o = -1,
                    c = 0,
                    u = t.length;
                    for (e instanceof Date || (e = new Date( + e)); ++o < u;) 37 === t.charCodeAt(o) && (f.push(t.slice(c, o)), null != (i = df[r = t.charAt(++o)]) ? r = t.charAt(++o) : i = "e" === r ? " ": "0", (a = n[r]) && (r = a(e, i)), f.push(r), c = o + 1);
                    return f.push(t.slice(c, o)),
                    f.join("")
                }
            }
            function M(t, n) {
                return function(e) {
                    var r, i, a = uf(1900);
                    if (N(a, t, e += "", 0) != e.length) return null;
                    if ("Q" in a) return new Date(a.Q);
                    if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                        if (a.V < 1 || a.V > 53) return null;
                        "w" in a || (a.w = 1),
                        "Z" in a ? (r = (i = (r = cf(uf(a.y))).getUTCDay()) > 4 || 0 === i ? Wa.ceil(r) : Wa(r), r = Za.offset(r, 7 * (a.V - 1)), a.y = r.getUTCFullYear(), a.m = r.getUTCMonth(), a.d = r.getUTCDate() + (a.w + 6) % 7) : (r = (i = (r = n(uf(a.y))).getDay()) > 4 || 0 === i ? Fa.ceil(r) : Fa(r), r = Pa.offset(r, 7 * (a.V - 1)), a.y = r.getFullYear(), a.m = r.getMonth(), a.d = r.getDate() + (a.w + 6) % 7)
                    } else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), i = "Z" in a ? cf(uf(a.y)).getUTCDay() : n(uf(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (i + 5) % 7 : a.w + 7 * a.U - (i + 6) % 7);
                    return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, cf(a)) : n(a)
                }
            }
            function N(t, n, e, r) {
                for (var i, a, f = 0,
                o = n.length,
                c = e.length; f < o;) {
                    if (r >= c) return - 1;
                    if (37 === (i = n.charCodeAt(f++))) {
                        if (i = n.charAt(f++), !(a = x[i in df ? n.charAt(f++) : i]) || (r = a(t, e, r)) < 0) return - 1
                    } else if (i != e.charCodeAt(r++)) return - 1
                }
                return r
            }
            return g.x = w(e, g),
            g.X = w(r, g),
            g.c = w(n, g),
            m.x = w(e, m),
            m.X = w(r, m),
            m.c = w(n, m),
            {
                format: function(t) {
                    var n = w(t += "", g);
                    return n.toString = function() {
                        return t
                    },
                    n
                },
                parse: function(t) {
                    var n = M(t += "", of);
                    return n.toString = function() {
                        return t
                    },
                    n
                },
                utcFormat: function(t) {
                    var n = w(t += "", m);
                    return n.toString = function() {
                        return t
                    },
                    n
                },
                utcParse: function(t) {
                    var n = M(t, cf);
                    return n.toString = function() {
                        return t
                    },
                    n
                }
            }
        } (t),
        sf.format,
        sf.parse,
        hf = sf.utcFormat,
        lf = sf.utcParse
    } ({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || hf("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || lf("%Y-%m-%dT%H:%M:%S.%LZ");
    var No = function(t) {
        for (var n = t.length / 6 | 0,
        e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    },
    To = (No("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), No("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), No("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), No("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), No("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), No("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), No("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), No("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), No("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
    function(t) {
        return On(t[t.length - 1])
    });
    To(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(No)),
    To(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(No)),
    To(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(No)),
    To(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(No)),
    To(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(No)),
    To(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(No)),
    To(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(No)),
    To(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(No)),
    To(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(No)),
    To(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(No)),
    To(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(No)),
    To(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(No)),
    To(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(No)),
    To(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(No)),
    To(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(No)),
    To(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(No)),
    To(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(No)),
    To(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(No)),
    To(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(No)),
    To(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(No)),
    To(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(No)),
    To(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(No)),
    To(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(No)),
    To(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(No)),
    To(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(No)),
    To(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(No)),
    To(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(No)),
    ae(Sn(300, .5, 0), Sn( - 240, .5, 1)),
    ae(Sn( - 100, .75, .35), Sn(80, 1.5, .8)),
    ae(Sn(260, .75, .35), Sn(80, 1.5, .8)),
    Sn(),
    Jt(),
    Math.PI,
    Math.PI;
    function Co(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    Co(No("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
    Co(No("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    Co(No("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    Co(No("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
    Math.abs,
    Math.atan2,
    Math.cos,
    Math.max,
    Math.min,
    Math.sin,
    Math.sqrt;
    var ko = 1e-12,
    Ao = Math.PI,
    So = 2 * Ao;
    function Eo(t) {
        this._context = t
    }
    Eo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, n)
            }
        }
    };
    var Uo = function(t) {
        return new Eo(t)
    };
    Po(Uo);
    function Lo(t) {
        this._curve = t
    }
    function Po(t) {
        function n(n) {
            return new Lo(t(n))
        }
        return n._curve = t,
        n
    }
    Lo.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    Array.prototype.slice;
    Math.sqrt(1 / 3);
    var Do = Math.sin(Ao / 10) / Math.sin(7 * Ao / 10),
    Ro = (Math.sin(So / 10), Math.cos(So / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12),
    function() {});
    function Fo(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }
    function jo(t) {
        this._context = t
    }
    jo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                Fo(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                Fo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    function Io(t) {
        this._context = t
    }
    Io.prototype = {
        areaStart: Ro,
        areaEnd: Ro,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = n;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = n;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = n,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                break;
            default:
                Fo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    function Oo(t) {
        this._context = t
    }
    Oo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                break;
            case 3:
                this._point = 4;
            default:
                Fo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    function zo(t, n) {
        this._basis = new jo(t),
        this._beta = n
    }
    zo.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length - 1;
            if (e > 0) for (var r, i = t[0], a = n[0], f = t[e] - i, o = n[e] - a, c = -1; ++c <= e;) r = c / e,
            this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * f), this._beta * n[c] + (1 - this._beta) * (a + r * o));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    }; (function t(n) {
        function e(t) {
            return 1 === n ? new jo(t) : new zo(t, n)
        }
        return e.beta = function(n) {
            return t( + n)
        },
        e
    })(.85);
    function Yo(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }
    function qo(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    qo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                Yo(this, this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = n;
                break;
            case 2:
                this._point = 3;
            default:
                Yo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return new qo(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    })(0);
    function Ho(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Ho.prototype = {
        areaStart: Ro,
        areaEnd: Ro,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Yo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return new Ho(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    })(0);
    function $o(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    $o.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Yo(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return new $o(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    })(0);
    function Bo(t, n, e) {
        var r = t._x1,
        i = t._y1,
        a = t._x2,
        f = t._y2;
        if (t._l01_a > ko) {
            var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            i = (i * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > ko) {
            var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s,
            f = (f * u + t._y1 * t._l23_2a - e * t._l12_2a) / s
        }
        t._context.bezierCurveTo(r, i, a, f, t._x2, t._y2)
    }
    function Xo(t, n) {
        this._context = t,
        this._alpha = n
    }
    Xo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Bo(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return n ? new Xo(t, n) : new qo(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    })(.5);
    function Vo(t, n) {
        this._context = t,
        this._alpha = n
    }
    Vo.prototype = {
        areaStart: Ro,
        areaEnd: Ro,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Bo(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return n ? new Vo(t, n) : new Ho(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    })(.5);
    function Zo(t, n) {
        this._context = t,
        this._alpha = n
    }
    Zo.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Bo(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    }; (function t(n) {
        function e(t) {
            return n ? new Zo(t, n) : new $o(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    })(.5);
    function Go(t) {
        this._context = t
    }
    Go.prototype = {
        areaStart: Ro,
        areaEnd: Ro,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, n) {
            t = +t,
            n = +n,
            this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    };
    function Jo(t) {
        return t < 0 ? -1 : 1
    }
    function Wo(t, n, e) {
        var r = t._x1 - t._x0,
        i = n - t._x1,
        a = (t._y1 - t._y0) / (r || i < 0 && -0),
        f = (e - t._y1) / (i || r < 0 && -0),
        o = (a * i + f * r) / (r + i);
        return (Jo(a) + Jo(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(o)) || 0
    }
    function Qo(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function Ko(t, n, e) {
        var r = t._x0,
        i = t._y0,
        a = t._x1,
        f = t._y1,
        o = (a - r) / 3;
        t._context.bezierCurveTo(r + o, i + o * n, a - o, f - o * e, a, f)
    }
    function tc(t) {
        this._context = t
    }
    function nc(t) {
        this._context = new ec(t)
    }
    function ec(t) {
        this._context = t
    }
    function rc(t) {
        this._context = t
    }
    function ic(t) {
        var n, e, r = t.length - 1,
        i = new Array(r),
        a = new Array(r),
        f = new Array(r);
        for (i[0] = 0, a[0] = 2, f[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1,
        a[n] = 4,
        f[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, a[r - 1] = 7, f[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / a[n - 1],
        a[n] -= e,
        f[n] -= e * f[n - 1];
        for (i[r - 1] = f[r - 1] / a[r - 1], n = r - 2; n >= 0; --n) i[n] = (f[n] - i[n + 1]) / a[n];
        for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) a[n] = 2 * t[n + 1] - i[n + 1];
        return [i, a]
    }
    tc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Ko(this, this._t0, Qo(this, this._t0))
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    Ko(this, Qo(this, e = Wo(this, t, n)), e);
                    break;
                default:
                    Ko(this, this._t0, e = Wo(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (nc.prototype = Object.create(tc.prototype)).point = function(t, n) {
        tc.prototype.point.call(this, n, t)
    },
    ec.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
        }
    },
    rc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length;
            if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
            else for (var r = ic(t), i = ic(n), a = 0, f = 1; f < e; ++a, ++f) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[f], n[f]); (this._line || 0 !== this._line && 1 === e) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    };
    function ac(t, n) {
        this._context = t,
        this._t = n
    }
    ac.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0) this._context.lineTo(this._x, n),
                this._context.lineTo(t, n);
                else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                    this._context.lineTo(e, n)
                }
            }
            this._x = t,
            this._y = n
        }
    };
    function fc() {
        this._ = null
    }
    function oc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }
    function cc(t, n) {
        var e = n,
        r = n.R,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.R = r.L,
        e.R && (e.R.U = e),
        r.L = e
    }
    function uc(t, n) {
        var e = n,
        r = n.L,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.L = r.R,
        e.L && (e.L.U = e),
        r.R = e
    }
    function sc(t) {
        for (; t.L;) t = t.L;
        return t
    }
    fc.prototype = {
        constructor: fc,
        insert: function(t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = sc(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (cc(this, e), e = (t = e).U), e.C = !1, r.C = !0, uc(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (uc(this, e), e = (t = e).U), e.C = !1, r.C = !0, cc(this, r)),
            e = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P),
            t.P && (t.P.N = t.N),
            t.N = t.P = null;
            var n, e, r, i = t.U,
            a = t.L,
            f = t.R;
            if (e = a ? f ? sc(f) : a: f, i ? i.L === t ? i.L = e: i.R = e: this._ = e, a && f ? (r = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = f, f.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1;
            else {
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if ((n = i.R).C && (n.C = !1, i.C = !0, cc(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, uc(this, n), n = i.R),
                            n.C = i.C,
                            i.C = n.R.C = !1,
                            cc(this, i),
                            t = this._;
                            break
                        }
                    } else if ((n = i.L).C && (n.C = !1, i.C = !0, uc(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, cc(this, n), n = i.L),
                        n.C = i.C,
                        i.C = n.L.C = !1,
                        uc(this, i),
                        t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (! t . C );
                t && (t.C = !1)
            }
        }
    };
    var hc = fc;
    function lc(t, n, e, r) {
        var i = [null, null],
        a = Dc.push(i) - 1;
        return i.left = t,
        i.right = n,
        e && bc(i, t, n, e),
        r && bc(i, n, t, r),
        Lc[t.index].halfedges.push(a),
        Lc[n.index].halfedges.push(a),
        i
    }
    function dc(t, n, e) {
        var r = [n, e];
        return r.left = t,
        r
    }
    function bc(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r: t[0] = r: (t[0] = r, t.left = n, t.right = e)
    }
    function pc(t, n, e, r, i) {
        var a, f = t[0],
        o = t[1],
        c = f[0],
        u = f[1],
        s = 0,
        h = 1,
        l = o[0] - c,
        d = o[1] - u;
        if (a = n - c, l || !(a > 0)) {
            if (a /= l, l < 0) {
                if (a < s) return;
                a < h && (h = a)
            } else if (l > 0) {
                if (a > h) return;
                a > s && (s = a)
            }
            if (a = r - c, l || !(a < 0)) {
                if (a /= l, l < 0) {
                    if (a > h) return;
                    a > s && (s = a)
                } else if (l > 0) {
                    if (a < s) return;
                    a < h && (h = a)
                }
                if (a = e - u, d || !(a > 0)) {
                    if (a /= d, d < 0) {
                        if (a < s) return;
                        a < h && (h = a)
                    } else if (d > 0) {
                        if (a > h) return;
                        a > s && (s = a)
                    }
                    if (a = i - u, d || !(a < 0)) {
                        if (a /= d, d < 0) {
                            if (a > h) return;
                            a > s && (s = a)
                        } else if (d > 0) {
                            if (a < s) return;
                            a < h && (h = a)
                        }
                        return ! (s > 0 || h < 1) || (s > 0 && (t[0] = [c + s * l, u + s * d]), h < 1 && (t[1] = [c + h * l, u + h * d]), !0)
                    }
                }
            }
        }
    }
    function _c(t, n, e, r, i) {
        var a = t[1];
        if (a) return ! 0;
        var f, o, c = t[0],
        u = t.left,
        s = t.right,
        h = u[0],
        l = u[1],
        d = s[0],
        b = s[1],
        p = (h + d) / 2,
        _ = (l + b) / 2;
        if (b === l) {
            if (p < n || p >= r) return;
            if (h > d) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [p, e];
                a = [p, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [p, i];
                a = [p, e]
            }
        } else if (o = _ - (f = (h - d) / (b - l)) * p, f < -1 || f > 1) if (h > d) {
            if (c) {
                if (c[1] >= i) return
            } else c = [(e - o) / f, e];
            a = [(i - o) / f, i]
        } else {
            if (c) {
                if (c[1] < e) return
            } else c = [(i - o) / f, i];
            a = [(e - o) / f, e]
        } else if (l < b) {
            if (c) {
                if (c[0] >= r) return
            } else c = [n, f * n + o];
            a = [r, f * r + o]
        } else {
            if (c) {
                if (c[0] < n) return
            } else c = [r, f * r + o];
            a = [n, f * n + o]
        }
        return t[0] = c,
        t[1] = a,
        !0
    }
    function yc(t, n) {
        var e = t.site,
        r = n.left,
        i = n.right;
        return e === i && (i = r, r = e),
        i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }
    function vc(t, n) {
        return n[ + (n.left !== t.site)]
    }
    function gc(t, n) {
        return n[ + (n.left === t.site)]
    }
    var mc, xc = [];
    function wc(t) {
        var n = t.P,
        e = t.N;
        if (n && e) {
            var r = n.site,
            i = t.site,
            a = e.site;
            if (r !== a) {
                var f = i[0],
                o = i[1],
                c = r[0] - f,
                u = r[1] - o,
                s = a[0] - f,
                h = a[1] - o,
                l = 2 * (c * h - u * s);
                if (! (l >= -Fc)) {
                    var d = c * c + u * u,
                    b = s * s + h * h,
                    p = (h * d - u * b) / l,
                    _ = (c * b - s * d) / l,
                    y = xc.pop() || new
                    function() {
                        oc(this),
                        this.x = this.y = this.arc = this.site = this.cy = null
                    };
                    y.arc = t,
                    y.site = i,
                    y.x = p + f,
                    y.y = (y.cy = _ + o) + Math.sqrt(p * p + _ * _),
                    t.circle = y;
                    for (var v = null,
                    g = Pc._; g;) if (y.y < g.y || y.y === g.y && y.x <= g.x) {
                        if (!g.L) {
                            v = g.P;
                            break
                        }
                        g = g.L
                    } else {
                        if (!g.R) {
                            v = g;
                            break
                        }
                        g = g.R
                    }
                    Pc.insert(v, y),
                    v || (mc = y)
                }
            }
        }
    }
    function Mc(t) {
        var n = t.circle;
        n && (n.P || (mc = n.N), Pc.remove(n), xc.push(n), oc(n), t.circle = null)
    }
    var Nc = [];
    function Tc(t) {
        var n = Nc.pop() || new
        function() {
            oc(this),
            this.edge = this.site = this.circle = null
        };
        return n.site = t,
        n
    }
    function Cc(t) {
        Mc(t),
        Uc.remove(t),
        Nc.push(t),
        oc(t)
    }
    function kc(t) {
        var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        a = t.P,
        f = t.N,
        o = [t];
        Cc(t);
        for (var c = a; c.circle && Math.abs(e - c.circle.x) < Rc && Math.abs(r - c.circle.cy) < Rc;) a = c.P,
        o.unshift(c),
        Cc(c),
        c = a;
        o.unshift(c),
        Mc(c);
        for (var u = f; u.circle && Math.abs(e - u.circle.x) < Rc && Math.abs(r - u.circle.cy) < Rc;) f = u.N,
        o.push(u),
        Cc(u),
        u = f;
        o.push(u),
        Mc(u);
        var s, h = o.length;
        for (s = 1; s < h; ++s) u = o[s],
        c = o[s - 1],
        bc(u.edge, c.site, u.site, i);
        c = o[0],
        (u = o[h - 1]).edge = lc(c.site, u.site, null, i),
        wc(c),
        wc(u)
    }
    function Ac(t) {
        for (var n, e, r, i, a = t[0], f = t[1], o = Uc._; o;) if ((r = Sc(o, f) - a) > Rc) o = o.L;
        else {
            if (! ((i = a - Ec(o, f)) > Rc)) {
                r > -Rc ? (n = o.P, e = o) : i > -Rc ? (n = o, e = o.N) : n = e = o;
                break
            }
            if (!o.R) {
                n = o;
                break
            }
            o = o.R
        } !
        function(t) {
            Lc[t.index] = {
                site: t,
                halfedges: []
            }
        } (t);
        var c = Tc(t);
        if (Uc.insert(n, c), n || e) {
            if (n === e) return Mc(n),
            e = Tc(n.site),
            Uc.insert(c, e),
            c.edge = e.edge = lc(n.site, c.site),
            wc(n),
            void wc(e);
            if (e) {
                Mc(n),
                Mc(e);
                var u = n.site,
                s = u[0],
                h = u[1],
                l = t[0] - s,
                d = t[1] - h,
                b = e.site,
                p = b[0] - s,
                _ = b[1] - h,
                y = 2 * (l * _ - d * p),
                v = l * l + d * d,
                g = p * p + _ * _,
                m = [(_ * v - d * g) / y + s, (l * g - p * v) / y + h];
                bc(e.edge, u, b, m),
                c.edge = lc(u, t, null, m),
                e.edge = lc(t, b, null, m),
                wc(n),
                wc(e)
            } else c.edge = lc(n.site, c.site)
        }
    }
    function Sc(t, n) {
        var e = t.site,
        r = e[0],
        i = e[1],
        a = i - n;
        if (!a) return r;
        var f = t.P;
        if (!f) return - 1 / 0;
        var o = (e = f.site)[0],
        c = e[1],
        u = c - n;
        if (!u) return o;
        var s = o - r,
        h = 1 / a - 1 / u,
        l = s / u;
        return h ? ( - l + Math.sqrt(l * l - 2 * h * (s * s / ( - 2 * u) - c + u / 2 + i - a / 2))) / h + r: (r + o) / 2
    }
    function Ec(t, n) {
        var e = t.N;
        if (e) return Sc(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }
    var Uc, Lc, Pc, Dc, Rc = 1e-6,
    Fc = 1e-12;
    function jc(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }
    function Ic(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }
    function Oc(t, n) {
        var e, r, i, a = t.sort(Ic).pop();
        for (Dc = [], Lc = new Array(t.length), Uc = new hc, Pc = new hc;;) if (i = mc, a && (!i || a[1] < i.y || a[1] === i.y && a[0] < i.x)) a[0] === e && a[1] === r || (Ac(a), e = a[0], r = a[1]),
        a = t.pop();
        else {
            if (!i) break;
            kc(i.arc)
        }
        if (function() {
            for (var t, n, e, r, i = 0,
            a = Lc.length; i < a; ++i) if ((t = Lc[i]) && (r = (n = t.halfedges).length)) {
                var f = new Array(r),
                o = new Array(r);
                for (e = 0; e < r; ++e) f[e] = e,
                o[e] = yc(t, Dc[n[e]]);
                for (f.sort(function(t, n) {
                    return o[n] - o[t]
                }), e = 0; e < r; ++e) o[e] = n[f[e]];
                for (e = 0; e < r; ++e) n[e] = o[e]
            }
        } (), n) {
            var f = +n[0][0],
            o = +n[0][1],
            c = +n[1][0],
            u = +n[1][1]; !
            function(t, n, e, r) {
                for (var i, a = Dc.length; a--;) _c(i = Dc[a], t, n, e, r) && pc(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Rc || Math.abs(i[0][1] - i[1][1]) > Rc) || delete Dc[a]
            } (f, o, c, u),
            function(t, n, e, r) {
                var i, a, f, o, c, u, s, h, l, d, b, p, _ = Lc.length,
                y = !0;
                for (i = 0; i < _; ++i) if (a = Lc[i]) {
                    for (f = a.site, o = (c = a.halfedges).length; o--;) Dc[c[o]] || c.splice(o, 1);
                    for (o = 0, u = c.length; o < u;) b = (d = gc(a, Dc[c[o]]))[0],
                    p = d[1],
                    h = (s = vc(a, Dc[c[++o % u]]))[0],
                    l = s[1],
                    (Math.abs(b - h) > Rc || Math.abs(p - l) > Rc) && (c.splice(o, 0, Dc.push(dc(f, d, Math.abs(b - t) < Rc && r - p > Rc ? [t, Math.abs(h - t) < Rc ? l: r] : Math.abs(p - r) < Rc && e - b > Rc ? [Math.abs(l - r) < Rc ? h: e, r] : Math.abs(b - e) < Rc && p - n > Rc ? [e, Math.abs(h - e) < Rc ? l: n] : Math.abs(p - n) < Rc && b - t > Rc ? [Math.abs(l - n) < Rc ? h: t, n] : null)) - 1), ++u);
                    u && (y = !1)
                }
                if (y) {
                    var v, g, m, x = 1 / 0;
                    for (i = 0, y = null; i < _; ++i)(a = Lc[i]) && (m = (v = (f = a.site)[0] - t) * v + (g = f[1] - n) * g) < x && (x = m, y = a);
                    if (y) {
                        var w = [t, n],
                        M = [t, r],
                        N = [e, r],
                        T = [e, n];
                        y.halfedges.push(Dc.push(dc(f = y.site, w, M)) - 1, Dc.push(dc(f, M, N)) - 1, Dc.push(dc(f, N, T)) - 1, Dc.push(dc(f, T, w)) - 1)
                    }
                }
                for (i = 0; i < _; ++i)(a = Lc[i]) && (a.halfedges.length || delete Lc[i])
            } (f, o, c, u)
        }
        this.edges = Dc,
        this.cells = Lc,
        Uc = Pc = Dc = Lc = null
    }
    Oc.prototype = {
        constructor: Oc,
        polygons: function() {
            var t = this.edges;
            return this.cells.map(function(n) {
                var e = n.halfedges.map(function(e) {
                    return vc(n, t[e])
                });
                return e.data = n.site.data,
                e
            })
        },
        triangles: function() {
            var t = [],
            n = this.edges;
            return this.cells.forEach(function(e, r) {
                if (a = (i = e.halfedges).length) for (var i, a, f, o = e.site,
                c = -1,
                u = n[i[a - 1]], s = u.left === o ? u.right: u.left; ++c < a;) f = s,
                s = (u = n[i[c]]).left === o ? u.right: u.left,
                f && s && r < f.index && r < s.index && jc(o, f, s) < 0 && t.push([o.data, f.data, s.data])
            }),
            t
        },
        links: function() {
            return this.edges.filter(function(t) {
                return t.right
            }).map(function(t) {
                return {
                    source: t.left.data,
                    target: t.right.data
                }
            })
        },
        find: function(t, n, e) {
            for (var r, i, a = this,
            f = a._found || 0,
            o = a.cells.length; ! (i = a.cells[f]);) if (++f >= o) return null;
            var c = t - i.site[0],
            u = n - i.site[1],
            s = c * c + u * u;
            do {
                i = a.cells[r = f], f = null, i.halfedges.forEach(function(e) {
                    var r = a.edges[e],
                    o = r.left;
                    if (o !== i.site && o || (o = r.right)) {
                        var c = t - o[0],
                        u = n - o[1],
                        h = c * c + u * u;
                        h < s && (s = h, f = o.index)
                    }
                })
            } while ( null !== f );
            return a._found = r,
            null == e || s <= e * e ? i.site: null
        }
    };
    function zc(t, n, e) {
        this.k = t,
        this.x = n,
        this.y = e
    }
    zc.prototype = {
        constructor: zc,
        scale: function(t) {
            return 1 === t ? this: new zc(this.k * t, this.x, this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this: new zc(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    new zc(1, 0, 0);
    zc.prototype;
    e(5),
    $("#inputfile").change(function() {
        $("#inputfile").attr("hidden", !0);
        var t = new FileReader;
        t.readAsText(this.files[0], config.encoding),
        t.onload = function() { !
            function(t) {
                var n = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                e = [];
                if (t.forEach(t = >{ - 1 == e.indexOf(t.date) && e.push(t.date)
                }), config.auto_sort) var r = e.sort((t, n) = >new Date(t) - new Date(n));
                else var r = e;
                var i = config.use_semilogarithmic_coordinate,
                a = config.big_value,
                f = config.use_custom_color,
                o = config.divide_by_type;
                function c(t) {
                    if (f) return 0 == y || 0 == o ? t.name: t.type;
                    var e = 0;
                    if (y && o) {
                        for (let n = 0; n < t.type.length; n++) e += t.type.charCodeAt(n);
                        return e %= 25,
                        e = Math.round(e),
                        n[e]
                    }
                    for (let n = 0; n < t.name.length; n++) e += t.name.charCodeAt(n);
                    return e %= 25,
                    e = Math.round(e),
                    n[e]
                }
                var u = config.showMessage,
                s = config.allow_up,
                h = config.interval_time,
                l = config.text_y,
                d = config.itemLabel,
                b = config.typeLabel,
                p = config.display_barInfo,
                y = config.use_type_info,
                g = config.use_counter,
                m = config.step,
                x = config.format,
                w = config.left_margin,
                T = config.right_margin,
                C = config.top_margin,
                k = config.bottom_margin,
                A = config.dateLabel_x,
                E = config.dateLabel_y,
                U = config.item_x,
                L = config.max_number,
                P = config.reverse;
                const D = {
                    left: w,
                    right: T,
                    top: C,
                    bottom: k
                };
                var R = config.enter_from_0;
                h /= 3;
                var F = r[0].toString(),
                j = [];
                const I = kt("svg"),
                O = I.attr("width"),
                z = I.attr("height"),
                Y = O - D.left - D.right,
                q = z - D.top - D.bottom - 50,
                H = t = >Number(t.value),
                B = t = >t.name,
                X = I.append("g").attr("transform", `translate($ {
                    D.left
                },
                $ {
                    D.top
                })`),
                V = X.append("g").attr("transform", `translate(0, $ {
                    q
                })`),
                Z = X.append("g");
                V.append("text").attr("class", "axis-label").attr("x", Y / 2).attr("y", 100);
                var G = ma();
                G = i ? wa().exponent(.5) : ma();
                const J = ua().paddingInner(.3).paddingOuter(0),
                W = function(t) {
                    return S(M, t)
                } ().scale(G).ticks(10).tickPadding(20).tickFormat(t = >t).tickSize( - q),
                Q = function(t) {
                    return S(N, t)
                } ().scale(J).tickPadding(5).tickSize( - Y);
                var K, tt = X.insert("text").data(F).attr("class", "dateLabel").attr("x", A).attr("y", E).text(F),
                nt = X.insert("text").attr("class", "topLabel").attr("x", U).attr("y", l);
                function et(n) {
                    j = [],
                    t.forEach(t = >{
                        t.date == n && j.push(t)
                    });
                    var e = [];
                    if (P) var r = j.sort(function(t, n) {
                        return Number(t.value) - Number(n.value)
                    });
                    else var r = j.sort(function(t, n) {
                        return Number(n.value) - Number(t.value)
                    });
                    j = j.slice(0, L);
                    var i = $e("2").each(ot);
                    r != e && i.each(ct),
                    e = r
                }
                if (u) if (X.insert("text").attr("class", "growth").attr("x", 0).attr("y", l).text(d), X.insert("text").attr("class", "growth").attr("x", 1e3).attr("y", l).text(b), 1 == g) var rt = X.insert("text").attr("class", "days").attr("x", 1300).attr("y", l);
                else if (1 == y) var it = X.insert("text").attr("class", "days").attr("x", 1300).attr("y", l);
                var at = {
                    value: 1
                },
                ft = 0;
                function ot() {
                    J.domain(j.map(B).reverse()).range([q, 0]),
                    a ? G.domain([2 * v(j, H) - _(j, H), _(j, H) + 10]).range([0, Y]) : G.domain([0, _(j, H) + 1]).range([0, Y]),
                    tt.text(F),
                    V.transition(X).duration(3e3 * h).ease(Ve).call(W),
                    Z.transition(X).duration(3e3 * h).ease(Ve).call(Q),
                    Z.selectAll(".tick").remove();
                    var t = X.selectAll(".bar").data(j,
                    function(t) {
                        return t.name
                    });
                    u && (nt.data(j).text(function(t) {
                        return K == t.name ? at.value = at.value + m: at.value = 1,
                        K = t.name,
                        t.name
                    }), 1 == g && rt.data(j).transition().duration(3e3 * h).ease(Ve).tween("text",
                    function(t) {
                        var n = this,
                        e = Zn(n.textContent, at.value),
                        r = (at.value + "").split("."),
                        i = r.length > 1 ? Math.pow(10, r[1].length) : 1;
                        return function(t) {
                            n.textContent = Or(x)(Math.round(e(t) * i) / i)
                        }
                    }), 1 == y && it.data(j).text(function(t) {
                        return t.type
                    }));
                    var n = t.enter().insert("g", ".axis").attr("class", "bar").attr("transform",
                    function(t) {
                        return "translate(0," + J(B(t)) + ")"
                    });
                    n.append("c").attr("class",
                    function(t) {
                        return c(t)
                    }),
                    n.append("rect").attr("width",
                    function(t) {
                        return R ? 0 : G(H(t))
                    }).attr("fill-opacity", 0).attr("height", 26).attr("y", 50).transition("a").attr("class", t = >c(t)).delay(500 * h).duration(2490 * h).attr("y", 0).attr("width", t = >G(H(t))).attr("fill-opacity", 1),
                    n.append("text").attr("y", 50).attr("fill-opacity", 0).transition("2").delay(500 * h).duration(2490 * h).attr("fill-opacity", 1).attr("y", 0).attr("class",
                    function(t) {
                        return "label " + c(t)
                    }).attr("x", -5).attr("y", 20).attr("text-anchor", "end").text(function(t) {
                        return t.name
                    }),
                    n.append("text").attr("x",
                    function(t) {
                        return R ? 0 : G(H(t))
                    }).attr("y", 50).attr("fill-opacity", 0).transition().delay(500 * h).duration(2490 * h).tween("text",
                    function(t) {
                        var n = this,
                        e = Zn(n.textContent, Number(t.value)),
                        r = (Number(t.value) + "").split("."),
                        i = r.length > 1 ? Math.pow(10, r[1].length) : 1;
                        return function(t) {
                            n.textContent = Or(x)(Math.round(e(t) * i) / i)
                        }
                    }).attr("fill-opacity", 1).attr("y", 0).attr("class",
                    function(t) {
                        return "value " + c(t)
                    }).attr("x", t = >G(H(t)) + 10).attr("y", 22),
                    n.append("text").attr("x",
                    function(t) {
                        return R ? 0 : G(H(t))
                    }).attr("stroke",
                    function(t) {
                        return $("." + c(t)).css("fill")
                    }).attr("class",
                    function(t) {
                        return "barInfo"
                    }).attr("y", 50).attr("stroke-width", "0px").attr("fill-opacity", 0).transition().delay(500 * h).duration(2490 * h).text(function(t) {
                        return y ? t.type + "-" + t.name: t.name
                    }).attr("x", t = >G(H(t)) - 10).attr("fill-opacity",
                    function(t) {
                        return G(H(t)) - 10 < p ? 0 : 1
                    }).attr("y", 2).attr("dy", ".5em").attr("text-anchor", "end").attr("stroke-width",
                    function(t) {
                        return G(H(t)) - 10 < p ? "0px": "1px"
                    });
                    var e = t.transition("2").duration(2990 * h).ease(Ve);
                    e.select("rect").attr("class",
                    function(t) {
                        return c(t)
                    }).attr("width", t = >G(H(t))),
                    e.select("c").attr("class",
                    function(t) {
                        return c(t)
                    }),
                    e.select(".label").attr("class",
                    function(t) {
                        return "label " + c(t)
                    }).attr("width", t = >G(H(t))),
                    e.select(".value").attr("class",
                    function(t) {
                        return "value " + c(t)
                    }).attr("width", t = >G(H(t))),
                    e.select(".barInfo").attr("stroke",
                    function(t) {
                        return void 0 == $("." + c(t)).css("fill") && I.append("c").attr("class", c(t)),
                        $("." + c(t)).css("fill")
                    }),
                    e.select(".barInfo").text(function(t) {
                        return y ? t.type + "-" + t.name: t.name
                    }).attr("x", t = >G(H(t)) - 10).attr("fill-opacity",
                    function(t) {
                        return G(H(t)) - 10 < p ? 0 : 1
                    }).attr("stroke-width",
                    function(t) {
                        return G(H(t)) - 10 < p ? "0px": "1px"
                    }),
                    e.select(".value").tween("text",
                    function(t) {
                        var n = this,
                        e = Zn(n.textContent, Number(t.value)),
                        r = (Number(t.value) + "").split("."),
                        i = r.length > 1 ? Math.pow(10, r[1].length) : 1;
                        return function(t) {
                            n.textContent = Or(x)(Math.round(e(t) * i) / i)
                        }
                    }).duration(2990 * h).attr("x", t = >G(H(t)) + 10),
                    console.log(j),
                    ft = (Number(j[0].value) + Number(j[j.length - 1].value)) / 2;
                    var r = t.exit().attr("fill-opacity", 1).transition().duration(2500 * h);
                    r.attr("transform",
                    function(t) {
                        return Number(t.value) > ft && s ? "translate(0,-100)": (console.log(Number(t.value) + "<" + ft), "translate(0,900)")
                    }).remove().attr("fill-opacity", 0),
                    r.select("rect").attr("fill-opacity", 0),
                    r.select(".value").attr("fill-opacity", 0),
                    r.select(".barInfo").attr("fill-opacity", 0).attr("stroke-width",
                    function(t) {
                        return "0px"
                    }),
                    r.select(".barInfo2").attr("fill-opacity", 0).attr("stroke-width",
                    function(t) {
                        return "0px"
                    }),
                    r.select(".label").attr("fill-opacity", 0)
                }
                function ct() {
                    var t = X.selectAll(".bar").data(j,
                    function(t) {
                        return t.name
                    }),
                    n = t.transition("1").delay(500 * h).duration(2490 * h);
                    n.attr("transform") != "translate(0," +
                    function(t) {
                        return "translate(0," + J(B(t)) + ")"
                    } && n.attr("transform",
                    function(t) {
                        return "translate(0," + J(B(t)) + ")"
                    })
                }
                et(r[0]);
                var ut = 1,
                st = setInterval(function() {
                    F = r[ut],
                    et(r[ut]),
                    ++ut >= r.length && window.clearInterval(st)
                },
                3e3 * h)
            } (yr(this.result))
        }
    })
},
function(t, n) {
    t.exports = function(t) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var e = n.protocol + "//" + n.host,
        r = e + n.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(t, n) {
            var i, a = n.trim().replace(/^"(.*)"$/,
            function(t, n) {
                return n
            }).replace(/^'(.*)'$/,
            function(t, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t: (i = 0 === a.indexOf("//") ? a: 0 === a.indexOf("/") ? e + a: r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
},
function(t, n, e) {
    var r = {},
    i = function(t) {
        var n;
        return function() {
            return void 0 === n && (n = t.apply(this, arguments)),
            n
        }
    } (function() {
        return window && document && document.all && !window.atob
    }),
    a = function(t) {
        var n = {};
        return function(t) {
            if ("function" == typeof t) return t();
            if (void 0 === n[t]) {
                var e = function(t) {
                    return document.querySelector(t)
                }.call(this, t);
                if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                    e = e.contentDocument.head
                } catch(t) {
                    e = null
                }
                n[t] = e
            }
            return n[t]
        }
    } (),
    f = null,
    o = 0,
    c = [],
    u = e(1);
    function s(t, n) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e],
            a = r[i.id];
            if (a) {
                a.refs++;
                for (var f = 0; f < a.parts.length; f++) a.parts[f](i.parts[f]);
                for (; f < i.parts.length; f++) a.parts.push(_(i.parts[f], n))
            } else {
                var o = [];
                for (f = 0; f < i.parts.length; f++) o.push(_(i.parts[f], n));
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }
    function h(t, n) {
        for (var e = [], r = {},
        i = 0; i < t.length; i++) {
            var a = t[i],
            f = n.base ? a[0] + n.base: a[0],
            o = {
                css: a[1],
                media: a[2],
                sourceMap: a[3]
            };
            r[f] ? r[f].parts.push(o) : e.push(r[f] = {
                id: f,
                parts: [o]
            })
        }
        return e
    }
    function l(t, n) {
        var e = a(t.insertInto);
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild),
        c.push(n);
        else if ("bottom" === t.insertAt) e.appendChild(n);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = a(t.insertInto + " " + t.insertAt.before);
            e.insertBefore(n, i)
        }
    }
    function d(t) {
        if (null === t.parentNode) return ! 1;
        t.parentNode.removeChild(t);
        var n = c.indexOf(t);
        n >= 0 && c.splice(n, 1)
    }
    function b(t) {
        var n = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        p(n, t.attrs),
        l(t, n),
        n
    }
    function p(t, n) {
        Object.keys(n).forEach(function(e) {
            t.setAttribute(e, n[e])
        })
    }
    function _(t, n) {
        var e, r, i, a;
        if (n.transform && t.css) {
            if (! (a = n.transform(t.css))) return function() {};
            t.css = a
        }
        if (n.singleton) {
            var c = o++;
            e = f || (f = b(n)),
            r = v.bind(null, e, c, !1),
            i = v.bind(null, e, c, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function(t) {
            var n = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
            t.attrs.rel = "stylesheet",
            p(n, t.attrs),
            l(t, n),
            n
        } (n), r = function(t, n, e) {
            var r = e.css,
            i = e.sourceMap,
            a = void 0 === n.convertToAbsoluteUrls && i; (n.convertToAbsoluteUrls || a) && (r = u(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var f = new Blob([r], {
                type: "text/css"
            }),
            o = t.href;
            t.href = URL.createObjectURL(f),
            o && URL.revokeObjectURL(o)
        }.bind(null, e, n), i = function() {
            d(e),
            e.href && URL.revokeObjectURL(e.href)
        }) : (e = b(n), r = function(t, n) {
            var e = n.css,
            r = n.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e))
            }
        }.bind(null, e), i = function() {
            d(e)
        });
        return r(t),
        function(n) {
            if (n) {
                if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                r(t = n)
            } else i()
        }
    }
    t.exports = function(t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs: {},
        n.singleton || "boolean" == typeof n.singleton || (n.singleton = i()),
        n.insertInto || (n.insertInto = "head"),
        n.insertAt || (n.insertAt = "bottom");
        var e = h(t, n);
        return s(e, n),
        function(t) {
            for (var i = [], a = 0; a < e.length; a++) {
                var f = e[a]; (o = r[f.id]).refs--,
                i.push(o)
            }
            t && s(h(t, n), n);
            for (a = 0; a < i.length; a++) {
                var o;
                if (0 === (o = i[a]).refs) {
                    for (var c = 0; c < o.parts.length; c++) o.parts[c]();
                    delete r[o.id]
                }
            }
        }
    };
    var y = function() {
        var t = [];
        return function(n, e) {
            return t[n] = e,
            t.filter(Boolean).join("\n")
        }
    } ();
    function v(t, n, e, r) {
        var i = e ? "": r.css;
        if (t.styleSheet) t.styleSheet.cssText = y(n, i);
        else {
            var a = document.createTextNode(i),
            f = t.childNodes;
            f[n] && t.removeChild(f[n]),
            f.length ? t.insertBefore(a, f[n]) : t.appendChild(a)
        }
    }
},
function(t, n) {
    t.exports = function(t) {
        var n = [];
        return n.toString = function() {
            return this.map(function(n) {
                var e = function(t, n) {
                    var e = t[1] || "",
                    r = t[3];
                    if (!r) return e;
                    if (n && "function" == typeof btoa) {
                        var i = function(t) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                        } (r),
                        a = r.sources.map(function(t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                        return [e].concat(a).concat([i]).join("\n")
                    }
                    return [e].join("\n")
                } (n, t);
                return n[2] ? "@media " + n[2] + "{" + e + "}": e
            }).join("")
        },
        n.i = function(t, e) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {},
            i = 0; i < this.length; i++) {
                var a = this[i][0];
                "number" == typeof a && (r[a] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var f = t[i];
                "number" == typeof f[0] && r[f[0]] || (e && !f[2] ? f[2] = e: e && (f[2] = "(" + f[2] + ") and (" + e + ")"), n.push(f))
            }
        },
        n
    }
},
function(t, n, e) { (t.exports = e(3)(!1)).push([t.i, "/**\r\n * @author Jannchie\r\n * @email jannchie@gmail.com\r\n * @create date 2018-05-03 08:44:46\r\n * @modify date 2018-07-19 01:24:39\r\n * @desc [description]\r\n*/\r\nbody {\r\n    margin: 0px;\r\n}\r\n\r\n.domain {\r\n    display: none;\r\n}\r\n\r\n.tick line {\r\n    stroke: #C0C0BB;\r\n}\r\n\r\n.tick text {\r\n    fill: #8E8883;\r\n    font-size: 12pt;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.label {\r\n    fill: rgb(92, 92, 92);\r\n    font-size: 15pt;\r\n    font-family: \"Microsoft YaHei\", \"\\5B8B\\4F53\";\r\n    font-weight: bold\r\n}\r\n\r\n.dateLabel {\r\n    \r\n    fill: rgb(92, 92, 92);\r\n    display:table-cell;\r\n    font-size: 90pt;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', 'console', Calibri, sans-serif;\r\n}\r\n.dateLabelRed {\r\n    \r\n    fill: rgb(167, 46, 46);\r\n    display:table-cell;\r\n    font-size: 90pt;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', 'console', Calibri, sans-serif;\r\n}\r\n\r\n\r\n.days {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 55pt;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.topLabel {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 40pt;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', \"Calibri\", 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.top {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 62pt;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.value {\r\n    fill: rgb(138, 46, 46);\r\n    font-size: 20pt;\r\n    font-weight: 400;\r\n    font-family: \"Trebuchet MS\";\r\n}\r\n\r\n.barInfo {\r\n    fill: rgb(255, 255, 255);\r\n    font-size: 22pt;\r\n    font-weight: 800;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.axis-label {\r\n    fill: #635F5D;\r\n    font-size: 32pt;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.days {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 40pt;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.dayslabel {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 25pt;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.growth {\r\n    fill: rgb(92, 92, 92);\r\n    font-weight: bold;\r\n    font-size: 40pt;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.L {\r\n    fill: #004e97c9\r\n}\r\n\r\n.M {\r\n    fill: #236aacc9\r\n}\r\n\r\n.L {\r\n    fill: #004e97c9\r\n}\r\n\r\n.N {\r\n    fill: #009783c9\r\n}\r\n\r\n.O {\r\n    fill: #009714c9\r\n}\r\n\r\n.P {\r\n    fill: #b11111c9\r\n}\r\n\r\n.Q {\r\n    fill: #972b00c9\r\n}\r\n\r\n.R {\r\n    fill: #970065c9\r\n}\r\n\r\n.S {\r\n    fill: #008597c9\r\n}\r\n\r\n.T {\r\n    fill: #8b1f5ec9\r\n}\r\n\r\n.U {\r\n    fill: #8b1f5ec9\r\n}\r\n\r\n.W {\r\n    fill: #8b1f5ec9\r\n}\r\n\r\n.V {\r\n    fill: #559204c9\r\n}\r\n\r\n.X {\r\n    fill: #5a1f8bc9\r\n}\r\n\r\n.Y {\r\n    fill: #c0ad00c9\r\n}\r\n\r\n.Z {\r\n    fill: #88480cc9\r\n}\r\n\r\n.H {\r\n    fill: #787878\r\n}\r\n\r\n.G {\r\n    fill: #CB1B45\r\n}\r\n\r\n.K {\r\n    fill: #9c361f\r\n}\r\n\r\n.J {\r\n    fill: rgb(180, 157, 51)\r\n}\r\n\r\n.I {\r\n    fill: #1B813E\r\n}\r\n\r\n.F {\r\n    fill: #227D51\r\n}\r\n\r\n.E {\r\n    fill: #00896C\r\n}\r\n\r\n.D {\r\n    fill: #0F2540\r\n}\r\n\r\n.C {\r\n    fill: #2EA9DF\r\n}\r\n\r\n.B {\r\n    fill: #3C2F41\r\n}\r\n\r\n.A {\r\n    fill: #876633\r\n}\r\n\r\n", ""])
},
function(t, n, e) {
    var r = e(4);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    e(2)(r, i);
    r.locals && (t.exports = r.locals)
}]);
