(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1906], {
        49516: function(e, s, n) {
            "use strict";
            var r = n(67294),
                t = n(9008),
                l = n(85893);
            s.Z = function(e) {
                var s = e.children,
                    n = e.useSkin,
                    c = e.mobileappstyle;
                return r.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(t.default, {
                        children: [(0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), n ? (0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", c ? (0, l.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        288: function(e, s, n) {
            "use strict";
            n.r(s);
            var r = n(67294),
                t = n(30015),
                l = n(19818),
                c = n(48254),
                i = n(37509),
                a = n(77233),
                u = n(16257),
                f = n(20434),
                o = n(10513),
                d = n(57831),
                h = n(64112),
                x = n(72786),
                j = n(25914),
                v = n(49516),
                k = n(85893);
            s.default = function() {
                var e = r.useRef(null),
                    s = r.useRef(null),
                    n = r.useRef(null),
                    w = r.useRef(null);
                return r.useEffect((function() {
                    setInterval((function() {
                        if (e.current) var n = e.current.offsetHeight;
                        s.current && (s.current.style.marginTop = n + "px")
                    }), 1e3);
                    var r = n.current;
                    window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll")
                    }))
                }), [e, s, n]), (0, k.jsxs)(v.Z, {
                    children: [(0, k.jsx)(t.Z, {
                        nr: n,
                        lr: w
                    }), (0, k.jsx)(l.Z, {
                        sliderRef: e
                    }), (0, k.jsxs)("div", {
                        ref: s,
                        className: "main-content",
                        children: [(0, k.jsx)(c.Z, {}), (0, k.jsx)(i.Z, {}), (0, k.jsx)(a.Z, {}), (0, k.jsx)(u.Z, {}), (0, k.jsx)(f.Z, {}), (0, k.jsx)(o.Z, {
                            theme: "dark"
                        }), (0, k.jsx)(d.Z, {
                            theme: "dark"
                        }), (0, k.jsx)(h.Z, {}), (0, k.jsx)(x.Z, {}), (0, k.jsx)(j.Z, {})]
                    })]
                })
            }
        },
        40762: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home1-dark", function() {
                return n(288)
            }])
        }
    },
    function(e) {
        e.O(0, [1178, 8363, 7349, 6147, 627, 5656, 1695, 9774, 2888, 179], (function() {
            return s = 40762, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);