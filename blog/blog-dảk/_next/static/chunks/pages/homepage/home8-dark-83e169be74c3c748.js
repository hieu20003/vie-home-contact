(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6818], {
        49516: function(s, e, n) {
            "use strict";
            var t = n(67294),
                r = n(9008),
                l = n(85893);
            e.Z = function(s) {
                var e = s.children,
                    n = s.useSkin,
                    a = s.mobileappstyle;
                return t.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(r.default, {
                        children: [(0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), n ? (0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", a ? (0, l.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), e]
                })
            }
        },
        8560: function(s, e, n) {
            "use strict";
            n.r(e);
            var t = n(67294),
                r = n(9008),
                l = n(49516),
                a = n(52862),
                i = n(26043),
                c = n(55914),
                o = n(35804),
                f = n(99895),
                u = n(72550),
                d = n(51597),
                h = n(7185),
                j = n(12652),
                x = n(53931),
                p = n(29468),
                w = n(85893);
            e.default = function() {
                var s = t.useRef(null);
                return t.useEffect((function() {
                    var e = s.current;
                    window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll")
                    }))
                }), [s]), (0, w.jsxs)(w.Fragment, {
                    children: [(0, w.jsxs)(r.default, {
                        children: [(0, w.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap",
                            rel: "stylesheet"
                        }), (0, w.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
                            rel: "stylesheet"
                        })]
                    }), (0, w.jsxs)(l.Z, {
                        useSkin: !0,
                        children: [(0, w.jsx)(u.Z, {
                            navbarRef: s
                        }), (0, w.jsx)(i.Z, {}), (0, w.jsx)(c.Z, {}), (0, w.jsx)(o.Z, {}), (0, w.jsx)(h.Z, {}), (0, w.jsx)(f.Z, {}), (0, w.jsx)(a.Z, {}), (0, w.jsx)(p.Z, {}), (0, w.jsx)(d.Z, {}), (0, w.jsx)(x.Z, {}), (0, w.jsx)(j.Z, {})]
                    })]
                })
            }
        },
        13766: function(s, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home8-dark", function() {
                return n(8560)
            }])
        }
    },
    function(s) {
        s.O(0, [1178, 8363, 2780, 2744, 3547, 9774, 2888, 179], (function() {
            return e = 13766, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);