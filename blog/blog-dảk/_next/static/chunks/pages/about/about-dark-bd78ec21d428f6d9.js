(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6002], {
        49516: function(s, e, n) {
            "use strict";
            var r = n(67294),
                t = n(9008),
                a = n(85893);
            e.Z = function(s) {
                var e = s.children,
                    n = s.useSkin,
                    l = s.mobileappstyle;
                return r.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(t.default, {
                        children: [(0, a.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), n ? (0, a.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", l ? (0, a.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), e]
                })
            }
        },
        8052: function(s, e, n) {
            "use strict";
            n.r(e);
            var r = n(67294),
                t = n(30015),
                a = n(37509),
                l = n(20434),
                c = n(10513),
                i = n(57831),
                u = n(72786),
                o = n(25914),
                f = n(85581),
                d = n(18728),
                h = n(49516),
                j = n(67397),
                x = n(77532),
                k = n(85893);
            e.default = function() {
                var s = r.useRef(null),
                    e = r.useRef(null);
                return r.useEffect((function() {
                    var n = s.current;
                    e.current;
                    window.pageYOffset > 300 ? n.classList.add("nav-scroll") : n.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? n.classList.add("nav-scroll") : n.classList.remove("nav-scroll")
                    }))
                }), [s]), (0, k.jsxs)(h.Z, {
                    children: [(0, k.jsx)(t.Z, {
                        nr: s,
                        lr: e,
                        from: "about-dark"
                    }), (0, k.jsx)(f.Z, {}), (0, k.jsx)(d.Z, {}), (0, k.jsx)(a.Z, {
                        style: "4item"
                    }), (0, k.jsx)(l.Z, {}), (0, k.jsx)(c.Z, {
                        from: "aboutPage"
                    }), (0, k.jsx)(j.Z, {}), (0, k.jsx)(x.Z, {}), (0, k.jsx)(i.Z, {
                        theme: "dark"
                    }), (0, k.jsx)(u.Z, {}), (0, k.jsx)(o.Z, {})]
                })
            }
        },
        11412: function(s, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about/about-dark", function() {
                return n(8052)
            }])
        }
    },
    function(s) {
        s.O(0, [8363, 7349, 6352, 5656, 1040, 9774, 2888, 179], (function() {
            return e = 11412, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);