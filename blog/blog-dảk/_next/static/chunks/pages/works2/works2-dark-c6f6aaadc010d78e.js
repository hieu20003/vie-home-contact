(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1010], {
        5032: function(e, s) {
            "use strict";
            s.Z = function() {
                var e, s = document.querySelectorAll(".gallery");
                s.length >= 1 && s.forEach((function(s) {
                    e = new Isotope(s, {
                        itemSelector: ".items"
                    })
                }));
                var r = document.querySelectorAll(".gallery-mons");
                r.length >= 1 && r.forEach((function(s) {
                    e = new Isotope(s, {
                        itemSelector: ".items",
                        masonry: {
                            columnWidth: ".width2"
                        }
                    })
                }));
                var l = document.querySelector(".filtering");
                if (l) {
                    var a = function(e) {
                        e.addEventListener("click", (function(s) {
                            matchesSelector(s.target, "span") && (e.querySelector(".active").classList.remove("active"), s.target.classList.add("active"))
                        }))
                    };
                    l.addEventListener("click", (function(s) {
                        if (matchesSelector(s.target, "span")) {
                            var r = s.target.getAttribute("data-filter");
                            r = r, e.arrange({
                                filter: r
                            })
                        }
                    }));
                    for (var i = document.querySelectorAll(".filtering"), c = 0, t = i.length; c < t; c++) {
                        a(i[c])
                    }
                }
            }
        },
        71698: function(e, s, r) {
            "use strict";
            var l = r(67294),
                a = r(41664),
                i = r(5032),
                c = r(85893);
            s.Z = function(e) {
                var s = e.grid,
                    r = e.hideFilter,
                    t = e.filterPosition;
                return l.useEffect((function() {
                    setTimeout((function() {
                        (0, i.Z)()
                    }), 1e3)
                }), []), (0, c.jsxs)("section", {
                    className: "".concat(s && 3 === s ? "three-column" : null, " portfolio section-padding pb-70"),
                    children: [!r && (0, c.jsx)("div", {
                        className: "container",
                        children: (0, c.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, c.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, c.jsxs)("div", {
                                    className: "sec-head text-center",
                                    children: [(0, c.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Portfolio"
                                    }), (0, c.jsxs)("h3", {
                                        className: "wow color-font",
                                        children: ["Our Recent Web Design & ", (0, c.jsx)("br", {}), " Some Past Projects."]
                                    })]
                                })
                            })
                        })
                    }), (0, c.jsx)("div", {
                        className: "container",
                        children: (0, c.jsxs)("div", {
                            className: "row",
                            children: [!r && (0, c.jsx)("div", {
                                className: "filtering ".concat("center" === t ? "text-center" : "left" === t ? "text-left" : "text-right", " col-12"),
                                children: (0, c.jsxs)("div", {
                                    className: "filter",
                                    children: [(0, c.jsx)("span", {
                                        "data-filter": "*",
                                        className: "active",
                                        children: "All"
                                    }), (0, c.jsx)("span", {
                                        "data-filter": ".brand",
                                        children: "Branding"
                                    }), (0, c.jsx)("span", {
                                        "data-filter": ".web",
                                        children: "Mobile App"
                                    }), (0, c.jsx)("span", {
                                        "data-filter": ".graphic",
                                        children: "Creative"
                                    })]
                                })
                            }), (0, c.jsxs)("div", {
                                className: "gallery full-width",
                                children: [(0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items graphic wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/1.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "Creativity Demand"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items web wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/2.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "Through The Breaking"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items brand wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/3.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "Create With Creatives"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items graphic wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/4.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "Energies of Love"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items web wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/5.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "See It Yourself"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, c.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items brand wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, c.jsx)("div", {
                                        className: "item-img",
                                        children: (0, c.jsx)(a.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/6.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, c.jsx)("h6", {
                                            children: "Blast From The Past"
                                        }), (0, c.jsxs)("span", {
                                            children: [(0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "Design"
                                            }), ",", (0, c.jsx)(a.default, {
                                                href: "/works3/works3-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        49516: function(e, s, r) {
            "use strict";
            var l = r(67294),
                a = r(9008),
                i = r(85893);
            s.Z = function(e) {
                var s = e.children,
                    r = e.useSkin,
                    c = e.mobileappstyle;
                return l.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.default, {
                        children: [(0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), r ? (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", c ? (0, i.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        6006: function(e, s, r) {
            "use strict";
            r.r(s);
            var l = r(67294),
                a = r(49516),
                i = r(30015),
                c = r(25914),
                t = r(27196),
                d = r(71698),
                n = r(85893);
            s.default = function() {
                var e = l.useRef(null),
                    s = l.useRef(null),
                    r = l.useRef(null),
                    o = l.useRef(null);
                return l.useEffect((function() {
                    setInterval((function() {
                        if (e.current) var r = e.current.offsetHeight;
                        s.current && (s.current.style.marginTop = r + "px")
                    }), 1e3);
                    var l = r.current;
                    window.pageYOffset > 300 ? l.classList.add("nav-scroll") : l.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? l.classList.add("nav-scroll") : l.classList.remove("nav-scroll")
                    }))
                }), [e, s, r]), (0, n.jsxs)(a.Z, {
                    children: [(0, n.jsx)("div", {
                        className: "circle-bg",
                        children: (0, n.jsxs)("div", {
                            className: "circle-color fixed",
                            children: [(0, n.jsx)("div", {
                                className: "gradient-circle"
                            }), (0, n.jsx)("div", {
                                className: "gradient-circle two"
                            })]
                        })
                    }), (0, n.jsx)(i.Z, {
                        nr: r,
                        lr: o
                    }), (0, n.jsx)(t.Z, {
                        sliderRef: e
                    }), (0, n.jsxs)("div", {
                        ref: s,
                        className: "main-content",
                        children: [(0, n.jsx)(d.Z, {
                            grid: 3,
                            filterPosition: "center"
                        }), (0, n.jsx)(c.Z, {})]
                    })]
                })
            }
        },
        53114: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/works2/works2-dark", function() {
                return r(6006)
            }])
        }
    },
    function(e) {
        e.O(0, [6506, 9774, 2888, 179], (function() {
            return s = 53114, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);