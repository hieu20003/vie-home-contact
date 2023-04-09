(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5459], {
        54668: function(e, s, i) {
            "use strict";
            i(67294);
            var a = i(41664),
                l = i(85893);
            s.Z = function(e) {
                var s = e.blogs;
                return (0, l.jsx)("section", {
                    className: "blog-pg blog-list section-padding pt-0",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, l.jsx)("div", {
                                className: "col-lg-11",
                                children: (0, l.jsxs)("div", {
                                    className: "posts mt-80",
                                    children: [s.map((function(e, s) {
                                        return (0, l.jsx)("div", {
                                            className: "item mb-80 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: (0, l.jsxs)("div", {
                                                className: "row",
                                                children: [(0, l.jsx)("div", {
                                                    className: "col-lg-6 valign",
                                                    children: (0, l.jsx)("div", {
                                                        className: "img md-mb50",
                                                        children: (0, l.jsx)("img", {
                                                            src: e.image,
                                                            alt: ""
                                                        })
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: "col-lg-6 valign",
                                                    children: (0, l.jsx)("div", {
                                                        className: "cont",
                                                        children: (0, l.jsxs)("div", {
                                                            children: [(0, l.jsxs)("div", {
                                                                className: "info",
                                                                children: [(0, l.jsx)(a.default, {
                                                                    href: "/blog/blog-dark",
                                                                    children: (0, l.jsx)("a", {
                                                                        className: "date",
                                                                        children: (0, l.jsxs)("span", {
                                                                            children: [(0, l.jsx)("i", {
                                                                                children: e.date.day
                                                                            }), e.date.month]
                                                                        })
                                                                    })
                                                                }), (0, l.jsx)("span", {
                                                                    children: "/"
                                                                }), e.tags.map((function(e, s) {
                                                                    return (0, l.jsx)(a.default, {
                                                                        href: "/blog/blog-dark",
                                                                        children: (0, l.jsx)("a", {
                                                                            className: "tag",
                                                                            children: (0, l.jsx)("span", {
                                                                                children: e
                                                                            })
                                                                        })
                                                                    }, s)
                                                                }))]
                                                            }), (0, l.jsx)("h5", {
                                                                children: (0, l.jsx)(a.default, {
                                                                    href: "/blog-details/blog-details-dark",
                                                                    children: (0, l.jsx)("a", {
                                                                        children: e.title
                                                                    })
                                                                })
                                                            }), (0, l.jsx)("p", {
                                                                className: "mt-10",
                                                                children: e.content.substr(0, 146) + "..."
                                                            }), (0, l.jsx)("div", {
                                                                className: "btn-more mt-30",
                                                                children: (0, l.jsx)(a.default, {
                                                                    href: "/blog-details/blog-details-dark",
                                                                    children: (0, l.jsx)("a", {
                                                                        className: "simple-btn",
                                                                        children: "Read More"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        }, e.id)
                                    })), (0, l.jsxs)("div", {
                                        className: "pagination",
                                        children: [(0, l.jsx)("span", {
                                            className: "active",
                                            children: (0, l.jsx)(a.default, {
                                                href: "/blog/blog-dark",
                                                children: "1"
                                            })
                                        }), (0, l.jsx)("span", {
                                            children: (0, l.jsx)(a.default, {
                                                href: "/blog/blog-dark",
                                                children: "2"
                                            })
                                        }), (0, l.jsx)("span", {
                                            children: (0, l.jsx)(a.default, {
                                                href: "/blog/blog-dark",
                                                children: (0, l.jsx)("a", {
                                                    children: (0, l.jsx)("i", {
                                                        className: "fas fa-angle-right"
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        49516: function(e, s, i) {
            "use strict";
            var a = i(67294),
                l = i(9008),
                t = i(85893);
            s.Z = function(e) {
                var s = e.children,
                    i = e.useSkin,
                    n = e.mobileappstyle;
                return a.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(l.default, {
                        children: [(0, t.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), i ? (0, t.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", n ? (0, t.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        57724: function(e, s, i) {
            "use strict";
            i.r(s);
            var a = i(67294),
                l = i(64039),
                t = i(49516),
                n = i(30015),
                r = i(54668),
                o = i(21527),
                c = i(25914),
                d = i(85893);
            s.default = function() {
                var e = a.useRef(null),
                    s = a.useRef(null);
                return a.useEffect((function() {
                    var i = e.current;
                    s.current;
                    window.pageYOffset > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll")
                    }))
                }), [e]), (0, d.jsxs)(t.Z, {
                    children: [(0, d.jsx)("div", {
                        className: "circle-bg",
                        children: (0, d.jsxs)("div", {
                            className: "circle-color fixed",
                            children: [(0, d.jsx)("div", {
                                className: "gradient-circle"
                            }), (0, d.jsx)("div", {
                                className: "gradient-circle two"
                            })]
                        })
                    }), (0, d.jsx)(n.Z, {
                        nr: e,
                        lr: s
                    }), (0, d.jsx)(o.Z, {
                        className: "sub-bg",
                        title: "Our News.",
                        paragraph: "All the most current news and events of our creative team."
                    }), (0, d.jsx)(r.Z, {
                        blogs: l
                    }), (0, d.jsx)(c.Z, {})]
                })
            }
        },
        24948: function(e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog-list/blog-list-dark", function() {
                return i(57724)
            }])
        },
        64039: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')
        }
    },
    function(e) {
        e.O(0, [2102, 9774, 2888, 179], (function() {
            return s = 24948, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);