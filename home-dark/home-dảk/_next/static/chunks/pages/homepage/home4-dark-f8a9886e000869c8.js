(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9337], {
        49516: function(e, s, n) {
            "use strict";
            var r = n(67294),
                t = n(9008),
                l = n(85893);
            s.Z = function(e) {
                var s = e.children,
                    n = e.useSkin,
                    i = e.mobileappstyle;
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
                        }) : "", i ? (0, l.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        27906: function(e, s, n) {
            "use strict";
            n.r(s);
            var r = n(67294),
                t = n(49516),
                l = n(67397),
                i = n(30015),
                c = n(25914),
                a = n(62804),
                u = n(10106),
                f = n(37509),
                o = n(54992),
                d = n(21480),
                h = n(88682),
                x = n(19818),
                j = n(20434),
                v = n(85893);
            s.default = function() {
                var e = r.useRef(null),
                    s = r.useRef(null),
                    n = r.useRef(null),
                    k = r.useRef(null);
                return r.useEffect((function() {
                    setInterval((function() {
                        if (e.current) var n = e.current.offsetHeight;
                        s.current && (s.current.style.marginTop = n + "px")
                    }), 1e3);
                    var r = n.current;
                    k.current;
                    window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll")
                    }))
                }), [e, s, n]), (0, v.jsxs)(t.Z, {
                    children: [(0, v.jsx)(i.Z, {
                        nr: n,
                        lr: k
                    }), (0, v.jsx)(x.Z, {
                        sliderRef: e
                    }), (0, v.jsxs)("div", {
                        ref: s,
                        className: "main-content",
                        children: [(0, v.jsx)(o.Z, {}), (0, v.jsx)(f.Z, {
                            lines: !0
                        }), (0, v.jsx)(d.Z, {
                            grid: 2,
                            filterPosition: "left"
                        }), (0, v.jsx)(j.Z, {}), (0, v.jsx)(a.Z, {
                            theme: "dark",
                            length: 4
                        }), (0, v.jsx)(l.Z, {}), (0, v.jsx)(u.Z, {}), (0, v.jsx)(h.Z, {}), (0, v.jsx)(c.Z, {
                            hideBGCOLOR: !0
                        })]
                    })]
                })
            }
        },
        52583: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home4-dark", function() {
                return n(27906)
            }])
        }
    },
    function(e) {
        e.O(0, [1178, 8363, 7349, 2780, 5656, 4161, 3770, 9774, 2888, 179], (function() {
            return s = 52583, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);