(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2043], {
        62067: function(e, s, i) {
            "use strict";
            i(67294);
            var t = i(41664),
                a = i(85893);
            s.Z = function(e) {
                var s = e.blogs;
                return (0, a.jsx)("section", {
                    className: "blog-pg section-padding pt-0",
                    children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, a.jsx)("div", {
                                className: "col-lg-11",
                                children: (0, a.jsxs)("div", {
                                    className: "posts",
                                    children: [s.map((function(e, i) {
                                        return (0, a.jsxs)("div", {
                                            className: "item ".concat(i === s.length - 1 ? "" : "mb-80"),
                                            children: [(0, a.jsx)("div", {
                                                className: "img",
                                                children: (0, a.jsx)(t.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, a.jsx)("a", {
                                                        children: (0, a.jsx)("img", {
                                                            src: e.image,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "content",
                                                children: (0, a.jsx)("div", {
                                                    className: "row justify-content-center",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "col-10",
                                                        children: [(0, a.jsx)(t.default, {
                                                            href: "/blog/blog-dark",
                                                            children: (0, a.jsxs)("a", {
                                                                className: "date",
                                                                children: [(0, a.jsx)("span", {
                                                                    className: "num",
                                                                    children: e.date.day
                                                                }), (0, a.jsx)("span", {
                                                                    children: e.date.month
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            className: "tags",
                                                            children: e.tags.map((function(e, s) {
                                                                return (0, a.jsx)(t.default, {
                                                                    href: "/blog/blog-dark",
                                                                    children: e
                                                                }, s)
                                                            }))
                                                        }), (0, a.jsx)("h4", {
                                                            className: "title",
                                                            children: (0, a.jsx)(t.default, {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: e.title
                                                            })
                                                        }), (0, a.jsx)("p", {
                                                            children: e.content
                                                        }), (0, a.jsx)(t.default, {
                                                            href: "/blog-details/blog-details-dark",
                                                            children: (0, a.jsx)("a", {
                                                                className: "butn bord curve mt-30",
                                                                children: "Read More"
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        }, e.id)
                                    })), (0, a.jsxs)("div", {
                                        className: "pagination",
                                        children: [(0, a.jsx)("span", {
                                            className: "active",
                                            children: (0, a.jsx)(t.default, {
                                                href: "/blog/blog-dark",
                                                children: "1"
                                            })
                                        }), (0, a.jsx)("span", {
                                            children: (0, a.jsx)(t.default, {
                                                href: "/blog/blog-dark",
                                                children: "2"
                                            })
                                        }), (0, a.jsx)("span", {
                                            children: (0, a.jsx)(t.default, {
                                                href: "/blog/blog-dark",
                                                children: (0, a.jsx)("a", {
                                                    children: (0, a.jsx)("i", {
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
            var t = i(67294),
                a = i(9008),
                l = i(85893);
            s.Z = function(e) {
                var s = e.children,
                    i = e.useSkin,
                    n = e.mobileappstyle;
                return t.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(a.default, {
                        children: [(0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), i ? (0, l.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", n ? (0, l.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), s]
                })
            }
        },
        9259: function(e, s, i) {
            "use strict";
            i.r(s);
            var t = i(67294),
                a = i(29577),
                l = i(49516),
                n = i(30015),
                r = i(62067),
                o = i(21527),
                d = i(25914),
                c = i(85893);
            s.default = function() {
                var e = t.useRef(null),
                    s = t.useRef(null);
                return t.useEffect((function() {
                    var i = e.current;
                    s.current;
                    window.pageYOffset > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
                        window.pageYOffset > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll")
                    }))
                }), [e]), (0, c.jsxs)(l.Z, {
                    children: [(0, c.jsx)("div", {
                        className: "circle-bg",
                        children: (0, c.jsxs)("div", {
                            className: "circle-color fixed",
                            children: [(0, c.jsx)("div", {
                                className: "gradient-circle"
                            }), (0, c.jsx)("div", {
                                className: "gradient-circle two"
                            })]
                        })
                    }), (0, c.jsx)(n.Z, {
                        nr: e,
                        lr: s
                    }), (0, c.jsx)(o.Z, {
                        title: "Our News.",
                        paragraph: "All the most current news and events of our creative team."
                    }), (0, c.jsx)(r.Z, {
                        blogs: a
                    }), (0, c.jsx)(d.Z, {})]
                })
            }
        },
        64510: function(e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog/blog-dark", function() {
                return i(9259)
            }])
        },
        29577: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"id":1,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b2.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')
        }
    },
    function(e) {
        e.O(0, [2102, 9774, 2888, 179], (function() {
            return s = 64510, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);