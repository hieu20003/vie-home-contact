(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4526], {
        49516: function(s, e, n) {
            "use strict";
            var r = n(67294),
                t = n(9008),
                l = n(85893);
            e.Z = function(s) {
                var e = s.children,
                    n = s.useSkin,
                    c = s.mobileappstyle;
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
                    }), e]
                })
            }
        },
        30956: function(s, e, n) {
            "use strict";
            n.r(e);
            var r = n(67294),
                t = n(30015),
                l = n(25914),
                c = n(49516),
                i = n(87564),
                a = n(84738),
                u = n(42368),
                o = n(97266),
                f = n(17492),
                d = n(98858),
                h = n(88682),
                j = n(85893);
            e.default = function() {
                var s = r.useRef(null),
                    e = r.useRef(null);
                return r.useEffect((function() {
                    var e = s.current;
                    window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll")
                    }))
                }), [s]), (0, j.jsxs)(c.Z, {
                    children: [(0, j.jsx)(t.Z, {
                        nr: s,
                        lr: e
                    }), (0, j.jsx)(i.Z, {}), (0, j.jsx)(a.Z, {}), (0, j.jsx)(u.Z, {}), (0, j.jsx)(o.Z, {}), (0, j.jsx)(f.Z, {
                        showHead: !0
                    }), (0, j.jsx)(d.Z, {}), (0, j.jsx)(h.Z, {
                        noLine: !0
                    }), (0, j.jsx)(l.Z, {})]
                })
            }
        },
        850: function(s, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home7-dark", function() {
                return n(30956)
            }])
        }
    },
    function(s) {
        s.O(0, [8363, 2780, 5517, 7604, 7111, 9774, 2888, 179], (function() {
            return e = 850, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);