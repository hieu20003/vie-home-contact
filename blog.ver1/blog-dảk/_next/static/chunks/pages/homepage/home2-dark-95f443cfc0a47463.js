(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2692], {
        49516: function(s, e, n) {
            "use strict";
            var r = n(67294),
                t = n(9008),
                i = n(85893);
            e.Z = function(s) {
                var e = s.children,
                    n = s.useSkin,
                    l = s.mobileappstyle;
                return r.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(t.default, {
                        children: [(0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), n ? (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", l ? (0, i.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), e]
                })
            }
        },
        11755: function(s, e, n) {
            "use strict";
            n.r(e);
            var r = n(67294),
                t = n(30015),
                i = n(1375),
                l = n(37509),
                c = n(74974),
                a = n(72786),
                o = n(25914),
                u = n(49516),
                f = n(21480),
                d = n(17492),
                h = n(94899),
                j = n(98858),
                x = n(85893);
            e.default = function() {
                var s = r.useRef(null),
                    e = r.useRef(null);
                return r.useEffect((function() {
                    var e = s.current;
                    window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll")
                    }))
                }), [s]), (0, x.jsxs)(u.Z, {
                    children: [(0, x.jsx)(t.Z, {
                        nr: s,
                        lr: e
                    }), (0, x.jsx)(i.Z, {}), (0, x.jsx)(l.Z, {
                        style: "4item"
                    }), (0, x.jsx)(c.Z, {}), (0, x.jsx)(f.Z, {
                        grid: 3,
                        filterPosition: "center"
                    }), (0, x.jsx)(d.Z, {
                        noPadding: !0
                    }), (0, x.jsx)(h.Z, {}), (0, x.jsx)(j.Z, {}), (0, x.jsx)(a.Z, {}), (0, x.jsx)(o.Z, {})]
                })
            }
        },
        74270: function(s, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home2-dark", function() {
                return n(11755)
            }])
        }
    },
    function(s) {
        s.O(0, [8363, 7349, 7604, 7627, 9774, 2888, 179], (function() {
            return e = 74270, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);