(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9836], {
        38037: function(e, s) {
            "use strict";
            s.Z = function() {
                document.querySelectorAll(".swiper-pagination") && document.querySelectorAll(".swiper-pagination").forEach((function(e) {
                    e.innerHTML = e.innerHTML.replace(" / ", "")
                }))
            }
        },
        97614: function(e, s, r) {
            "use strict";
            var n = r(77625),
                i = r(67294),
                a = r(41664),
                t = r(72873),
                l = r(265),
                c = r(88116),
                d = (r(53481), r(9320), r(30687), r(43434), r(38037)),
                o = r(85893);
            c.ZP.use([c.W_, c.tl, c.VS, c.Gk]);
            s.Z = function() {
                var e = i.useState(!0),
                    s = (0, n.Z)(e, 2),
                    r = s[0],
                    c = s[1];
                i.useEffect((function() {
                    (0, d.Z)(), setTimeout((function() {
                        c(!1)
                    }))
                }), []);
                var u = i.useRef(null),
                    p = i.useRef(null),
                    h = i.useRef(null);
                return (0, o.jsxs)("header", {
                    className: "slider showcase-full",
                    children: [(0, o.jsx)("div", {
                        className: "swiper-container parallax-slider",
                        children: r ? null : (0, o.jsx)(t.t, {
                            speed: 1e3,
                            mousewheel: !0,
                            parallax: !0,
                            navigation: {
                                prevEl: u.current,
                                nextEl: p.current
                            },
                            pagination: {
                                clickable: !0,
                                el: h.current
                            },
                            onBeforeInit: function(e) {
                                e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = p.current, e.params.pagination.el = h.current
                            },
                            onSwiper: function(e) {
                                setTimeout((function() {
                                    for (var s = 0; s < e.slides.length; s++) e.slides[s].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                                    e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = p.current, e.params.pagination.el = h.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                                }))
                            },
                            className: "swiper-wrapper",
                            slidesPerView: 1,
                            children: l.map((function(e) {
                                return (0, o.jsx)(t.o, {
                                    className: "swiper-slide",
                                    children: (0, o.jsx)("div", {
                                        className: "bg-img valign",
                                        style: {
                                            backgroundImage: "url(".concat(e.image, ")")
                                        },
                                        "data-overlay-dark": "4",
                                        children: (0, o.jsx)("div", {
                                            className: "container",
                                            children: (0, o.jsx)("div", {
                                                className: "row",
                                                children: (0, o.jsx)("div", {
                                                    className: "col-lg-12",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "caption",
                                                        children: [(0, o.jsxs)("h1", {
                                                            children: [(0, o.jsx)(a.default, {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: (0, o.jsxs)("a", {
                                                                    children: [(0, o.jsx)("div", {
                                                                        className: "stroke",
                                                                        "data-swiper-parallax": "-2000",
                                                                        children: e.title.first
                                                                    }), (0, o.jsx)("span", {
                                                                        "data-swiper-parallax": "-5000",
                                                                        children: e.title.second
                                                                    })]
                                                                })
                                                            }), (0, o.jsx)("div", {
                                                                className: "bord"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "discover",
                                                            children: (0, o.jsx)(a.default, {
                                                                href: "/works/works-dark",
                                                                children: (0, o.jsx)("a", {
                                                                    children: (0, o.jsxs)("span", {
                                                                        children: ["Explore ", (0, o.jsx)("br", {}), " More"]
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, e.id)
                            }))
                        })
                    }), (0, o.jsxs)("div", {
                        className: "txt-botm",
                        children: [(0, o.jsxs)("div", {
                            ref: p,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)("span", {
                                    children: "Next Slide"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })]
                        }), (0, o.jsxs)("div", {
                            ref: u,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)("span", {
                                    children: "Prev Slide"
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: "swiper-pagination dots",
                            ref: h
                        })]
                    })]
                })
            }
        },
        49516: function(e, s, r) {
            "use strict";
            var n = r(67294),
                i = r(9008),
                a = r(85893);
            s.Z = function(e) {
                var s = e.children,
                    r = e.useSkin,
                    t = e.mobileappstyle;
                return n.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.default, {
                        children: [(0, a.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), r ? (0, a.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", t ? (0, a.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        37193: function(e, s, r) {
            "use strict";
            r.r(s);
            r(67294);
            var n = r(52767),
                i = r(97614),
                a = r(49516),
                t = r(85893);
            s.default = function() {
                return (0, t.jsxs)(a.Z, {
                    children: [(0, t.jsx)(n.Z, {}), (0, t.jsx)(i.Z, {})]
                })
            }
        },
        99736: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/showcase/showcase-dark", function() {
                return r(37193)
            }])
        },
        9320: function() {}
    },
    function(e) {
        e.O(0, [1178, 5854, 9774, 2888, 179], (function() {
            return s = 99736, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);