(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [348], {
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
        97728: function(s, e, n) {
            "use strict";
            n.r(e);
            var r = n(67294),
                t = n(30015),
                l = n(19818),
                c = n(16257),
                i = n(98858),
                a = n(72786),
                u = n(25914),
                f = n(49516),
                o = n(44780),
                d = n(40288),
                h = n(44700),
                v = n(17492),
                x = n(85893);
            e.default = function() {
                var s = r.useRef(null),
                    e = r.useRef(null),
                    n = r.useRef(null),
                    j = r.useRef(null);
                return r.useEffect((function() {
                    setInterval((function() {
                        if (s.current) var n = s.current.offsetHeight;
                        e.current && (e.current.style.marginTop = n + "px")
                    }), 1e3);
                    var r = n.current;
                    window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll")
                    }))
                }), [s, e, n]), (0, x.jsxs)(f.Z, {
                    children: [(0, x.jsx)(t.Z, {
                        nr: n,
                        lr: j
                    }), (0, x.jsx)(l.Z, {
                        sliderRef: s
                    }), (0, x.jsxs)("div", {
                        ref: e,
                        className: "main-content",
                        children: [(0, x.jsx)(o.Z, {
                            serviceMB50: !0
                        }), (0, x.jsx)(d.Z, {}), (0, x.jsx)(c.Z, {}), (0, x.jsx)(h.Z, {}), (0, x.jsx)(v.Z, {}), (0, x.jsx)(i.Z, {}), (0, x.jsx)(a.Z, {
                            img: "/img/patrn1.png"
                        }), (0, x.jsx)(u.Z, {})]
                    })]
                })
            }
        },
        38297: function(s, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/homepage/home6-dark", function() {
                return n(97728)
            }])
        }
    },
    function(s) {
        s.O(0, [1178, 8363, 7349, 6147, 7604, 4529, 9774, 2888, 179], (function() {
            return e = 38297, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);