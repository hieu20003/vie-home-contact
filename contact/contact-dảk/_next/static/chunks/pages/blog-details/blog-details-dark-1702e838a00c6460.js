(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9299], {
        49516: function(s, e, r) {
            "use strict";
            var n = r(67294),
                l = r(9008),
                c = r(85893);
            e.Z = function(s) {
                var e = s.children,
                    r = s.useSkin,
                    t = s.mobileappstyle;
                return n.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsxs)(l.default, {
                        children: [(0, c.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), r ? (0, c.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", t ? (0, c.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), e]
                })
            }
        },
        92917: function(s, e, r) {
            "use strict";
            r.r(e);
            var n = r(67294),
                l = (r(15607), r(49516)),
                c = r(30015),
                t = r(2572),
                i = r(21527),
                a = r(25914),
                o = r(85893);
            e.default = function() {
                var s = n.useRef(null),
                    e = n.useRef(null);
                return n.useEffect((function() {
                    var r = s.current;
                    e.current;
                    window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll")
                    }))
                }), [s]), (0, o.jsxs)(l.Z, {
                    children: [(0, o.jsx)("div", {
                        className: "circle-bg",
                        children: (0, o.jsxs)("div", {
                            className: "circle-color fixed",
                            children: [(0, o.jsx)("div", {
                                className: "gradient-circle"
                            }), (0, o.jsx)("div", {
                                className: "gradient-circle two"
                            })]
                        })
                    }), (0, o.jsx)(c.Z, {
                        nr: s,
                        lr: e
                    }), (0, o.jsx)(i.Z, {
                        title: "Blog Details.",
                        paragraph: "All the most current news and events of our creative team."
                    }), (0, o.jsx)(t.Z, {
                        blog: "blog"
                    }), (0, o.jsx)(a.Z, {})]
                })
            }
        },
        35373: function(s, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog-details/blog-details-dark", function() {
                return r(92917)
            }])
        }
    },
    function(s) {
        s.O(0, [2780, 2744, 2102, 6324, 9774, 2888, 179], (function() {
            return e = 35373, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);