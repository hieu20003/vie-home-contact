(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6506], {
        7942: function(e, a, s) {
            "use strict";
            var r = s(63038);
            a.default = void 0;
            var l, n = (l = s(67294)) && l.__esModule ? l : {
                    default: l
                },
                t = s(64957),
                i = s(69898),
                c = s(90639);
            var o = {};

            function d(e, a, s, r) {
                if (e && t.isLocalURL(a)) {
                    e.prefetch(a, s, r).catch((function(e) {
                        0
                    }));
                    var l = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    o[a + "%" + s + (l ? "%" + l : "")] = !0
                }
            }
            var h = function(e) {
                var a, s = !1 !== e.prefetch,
                    l = i.useRouter(),
                    h = n.default.useMemo((function() {
                        var a = t.resolveHref(l, e.href, !0),
                            s = r(a, 2),
                            n = s[0],
                            i = s[1];
                        return {
                            href: n,
                            as: e.as ? t.resolveHref(l, e.as) : i || n
                        }
                    }), [l, e.href, e.as]),
                    f = h.href,
                    u = h.as,
                    m = e.children,
                    p = e.replace,
                    x = e.shallow,
                    j = e.scroll,
                    g = e.locale;
                "string" === typeof m && (m = n.default.createElement("a", null, m));
                var v = (a = n.default.Children.only(m)) && "object" === typeof a && a.ref,
                    N = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    b = r(N, 2),
                    w = b[0],
                    k = b[1],
                    y = n.default.useCallback((function(e) {
                        w(e), v && ("function" === typeof v ? v(e) : "object" === typeof v && (v.current = e))
                    }), [v, w]);
                n.default.useEffect((function() {
                    var e = k && s && t.isLocalURL(f),
                        a = "undefined" !== typeof g ? g : l && l.locale,
                        r = o[f + "%" + u + (a ? "%" + a : "")];
                    e && !r && d(l, f, u, {
                        locale: a
                    })
                }), [u, f, k, g, s, l]);
                var C = {
                    ref: y,
                    onClick: function(e) {
                        a.props && "function" === typeof a.props.onClick && a.props.onClick(e), e.defaultPrevented || function(e, a, s, r, l, n, i, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var a = e.currentTarget.target;
                                return a && "_self" !== a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && t.isLocalURL(s)) && (e.preventDefault(), null == i && r.indexOf("#") >= 0 && (i = !1), a[l ? "replace" : "push"](s, r, {
                                shallow: n,
                                locale: c,
                                scroll: i
                            }))
                        }(e, l, f, u, p, x, j, g)
                    },
                    onMouseEnter: function(e) {
                        t.isLocalURL(f) && (a.props && "function" === typeof a.props.onMouseEnter && a.props.onMouseEnter(e), d(l, f, u, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === a.type && !("href" in a.props)) {
                    var L = "undefined" !== typeof g ? g : l && l.locale,
                        E = l && l.isLocaleDomain && t.getDomainLocale(u, L, l && l.locales, l && l.domainLocales);
                    C.href = E || t.addBasePath(t.addLocale(u, L, l && l.defaultLocale))
                }
                return n.default.cloneElement(a, C)
            };
            a.default = h
        },
        90639: function(e, a, s) {
            "use strict";
            var r = s(63038);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.useIntersection = function(e) {
                var a = e.rootMargin,
                    s = e.disabled || !t,
                    c = l.useRef(),
                    o = l.useState(!1),
                    d = r(o, 2),
                    h = d[0],
                    f = d[1],
                    u = l.useCallback((function(e) {
                        c.current && (c.current(), c.current = void 0), s || h || e && e.tagName && (c.current = function(e, a, s) {
                            var r = function(e) {
                                    var a = e.rootMargin || "",
                                        s = i.get(a);
                                    if (s) return s;
                                    var r = new Map,
                                        l = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var a = r.get(e.target),
                                                    s = e.isIntersecting || e.intersectionRatio > 0;
                                                a && s && a(s)
                                            }))
                                        }), e);
                                    return i.set(a, s = {
                                        id: a,
                                        observer: l,
                                        elements: r
                                    }), s
                                }(s),
                                l = r.id,
                                n = r.observer,
                                t = r.elements;
                            return t.set(e, a), n.observe(e),
                                function() {
                                    t.delete(e), n.unobserve(e), 0 === t.size && (n.disconnect(), i.delete(l))
                                }
                        }(e, (function(e) {
                            return e && f(e)
                        }), {
                            rootMargin: a
                        }))
                    }), [s, a, h]);
                return l.useEffect((function() {
                    if (!t && !h) {
                        var e = n.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return n.cancelIdleCallback(e)
                        }
                    }
                }), [h]), [u, h]
            };
            var l = s(67294),
                n = s(26286),
                t = "undefined" !== typeof IntersectionObserver;
            var i = new Map
        },
        32979: function(e, a) {
            "use strict";
            a.Z = function(e) {
                window.addEventListener("scroll", (function() {
                    var a = window.pageYOffset;
                    e && e.forEach((function(e) {
                        e.style.transform = "translate3d(0, " + -.2 * a + "px, 0)", e.style.opacity = 1 - a / 600
                    }))
                }))
            }
        },
        57420: function(e, a) {
            "use strict";
            a.Z = function(e) {
                var a = [];
                if (!e.parentNode) return a;
                for (var s = e.parentNode.firstChild; s;) 1 === s.nodeType && s !== e && a.push(s), s = s.nextSibling;
                return a
            }
        },
        81108: function(e, a, s) {
            "use strict";
            s.d(a, {
                z: function() {
                    return l
                },
                _: function() {
                    return n
                }
            });
            var r = s(57420),
                l = function(e) {
                    (0, r.Z)(e.target.parentElement).filter((function(e) {
                        return e.classList.contains("show")
                    })).map((function(e) {
                        e.classList.remove("show"), e.childNodes[0] && e.childNodes[0].setAttribute("aria-expanded", !1), e.childNodes[1] && e.childNodes[1].classList.remove("show")
                    })), e.target.parentElement.classList.toggle("show"), e.target.setAttribute("aria-expanded", !0), e.target.parentElement.childNodes[1].classList.toggle("show")
                },
                n = function(e) {
                    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")
                }
        },
        25914: function(e, a, s) {
            "use strict";
            s(67294);
            var r = s(41664),
                l = s(82806),
                n = s(85893);
            a.Z = function(e) {
                var a = e.hideBGCOLOR;
                return (0, n.jsx)("footer", {
                    className: "".concat(a ? "" : "sub-bg"),
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsxs)("div", {
                            className: "row",
                            children: [(0, n.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, n.jsxs)("div", {
                                    className: "item md-mb50",
                                    children: [(0, n.jsx)("div", {
                                        className: "title",
                                        children: (0, n.jsx)("h5", {
                                            children: "Contact Us"
                                        })
                                    }), (0, n.jsxs)("ul", {
                                        children: [(0, n.jsxs)("li", {
                                            children: [(0, n.jsx)("span", {
                                                className: "icon pe-7s-map-marker"
                                            }), (0, n.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, n.jsx)("h6", {
                                                    children: "Officeal Address"
                                                }), (0, n.jsx)("p", {
                                                    children: "504 White St . Dawsonville, GA 30534 , New York"
                                                })]
                                            })]
                                        }), (0, n.jsxs)("li", {
                                            children: [(0, n.jsx)("span", {
                                                className: "icon pe-7s-mail"
                                            }), (0, n.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, n.jsx)("h6", {
                                                    children: "Email Us"
                                                }), (0, n.jsx)("p", {
                                                    children: "support@gmail.com"
                                                })]
                                            })]
                                        }), (0, n.jsxs)("li", {
                                            children: [(0, n.jsx)("span", {
                                                className: "icon pe-7s-call"
                                            }), (0, n.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, n.jsx)("h6", {
                                                    children: "Call Us"
                                                }), (0, n.jsx)("p", {
                                                    children: "+87986451666"
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, n.jsxs)("div", {
                                    className: "item md-mb50",
                                    children: [(0, n.jsx)("div", {
                                        className: "title",
                                        children: (0, n.jsx)("h5", {
                                            children: "Recent News"
                                        })
                                    }), (0, n.jsxs)("ul", {
                                        children: [(0, n.jsxs)("li", {
                                            children: [(0, n.jsx)("div", {
                                                className: "img",
                                                children: (0, n.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("img", {
                                                            src: "/img/blog/1.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }), (0, n.jsxs)("div", {
                                                className: "sm-post",
                                                children: [(0, n.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("p", {
                                                            children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                        })
                                                    })
                                                }), (0, n.jsx)(r.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("span", {
                                                            className: "date",
                                                            children: "14 sep 2022"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, n.jsxs)("li", {
                                            children: [(0, n.jsx)("div", {
                                                className: "img",
                                                children: (0, n.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("img", {
                                                            src: "/img/blog/2.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }), (0, n.jsxs)("div", {
                                                className: "sm-post",
                                                children: [(0, n.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("p", {
                                                            children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                        })
                                                    })
                                                }), (0, n.jsx)(r.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, n.jsx)("a", {
                                                        children: (0, n.jsx)("span", {
                                                            className: "date",
                                                            children: "14 sep 2022"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, n.jsx)("li", {
                                            children: (0, n.jsxs)("div", {
                                                className: "subscribe",
                                                children: [(0, n.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Type Your Email"
                                                }), (0, n.jsx)("span", {
                                                    className: "subs pe-7s-paper-plane"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, n.jsxs)("div", {
                                    className: "item",
                                    children: [(0, n.jsx)("div", {
                                        className: "logo",
                                        children: (0, n.jsx)("img", {
                                            src: l.E8,
                                            alt: ""
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "social",
                                        children: [(0, n.jsx)("a", {
                                            href: "#0",
                                            children: (0, n.jsx)("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "#0",
                                            children: (0, n.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "#0",
                                            children: (0, n.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "#0",
                                            children: (0, n.jsx)("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "copy-right",
                                        children: (0, n.jsxs)("p", {
                                            children: ["\xa9 2022, Vie Template. Made with passion by", (0, n.jsx)(r.default, {
                                                href: "https://themeforest.net/user/themescamp/portfolio",
                                                children: (0, n.jsx)("a", {
                                                    target: "_blank",
                                                    children: "ThemesCamp"
                                                })
                                            }), "."]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        30015: function(e, a, s) {
            "use strict";
            s(67294);
            var r = s(41664),
                l = s(82806),
                n = s(81108),
                t = s(85893);
            a.Z = function(e) {
                var a = e.lr,
                    s = e.nr,
                    i = e.theme;
                return (0, t.jsx)("nav", {
                    ref: s,
                    className: "navbar navbar-expand-lg change ".concat("themeL" === i ? "light" : ""),
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)(r.default, {
                            href: "/",
                            children: (0, t.jsx)("a", {
                                className: "logo",
                                children: i && "themeL" === i ? (0, t.jsx)("img", {
                                    ref: a,
                                    src: l.Q1,
                                    alt: "logo"
                                }) : (0, t.jsx)("img", {
                                    ref: a,
                                    src: l.E8,
                                    alt: "logo"
                                })
                            })
                        }), (0, t.jsx)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            onClick: n._,
                            "data-toggle": "collapse",
                            "data-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: (0, t.jsx)("span", {
                                className: "icon-bar",
                                children: (0, t.jsx)("i", {
                                    className: "fas fa-bars"
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarSupportedContent",
                            children: (0, t.jsxs)("ul", {
                                className: "navbar-nav ml-auto",
                                children: [(0, t.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: n.z,
                                    children: [(0, t.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Home"
                                    }), (0, t.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, t.jsx)(r.default, {
                                            href: "/homepage/home1-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Main Home"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home2-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Creative Agency"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home5-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Digital Agency"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home4-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Business One Page"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home3-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Corporate Business"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home6-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Modern Agency"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home7-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Freelancer"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/homepage/home8-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Architecture"
                                            })
                                        })]
                                    })]
                                }), (0, t.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, t.jsx)(r.default, {
                                        href: "/about/about-dark",
                                        children: (0, t.jsx)("a", {
                                            className: "nav-link",
                                            children: "About"
                                        })
                                    })
                                }), (0, t.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: n.z,
                                    children: [(0, t.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Works"
                                    }), (0, t.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, t.jsx)(r.default, {
                                            href: "/showcase/showcase-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Parallax"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/showcase4/showcase4-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Carousel"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/showcase3/showcase3-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Circle"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/works/works-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Masonry"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/works2/works2-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Filtering"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/works3/works3-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Gallery"
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: n.z,
                                    children: [(0, t.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Blog"
                                    }), (0, t.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, t.jsx)(r.default, {
                                            href: "/blog/blog-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Standerd"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/blog-list/blog-list-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog List"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/blog-grid/blog-grid-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Grid"
                                            })
                                        }), (0, t.jsx)(r.default, {
                                            href: "/blog-details/blog-details-dark",
                                            children: (0, t.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Details"
                                            })
                                        })]
                                    })]
                                }), (0, t.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, t.jsx)(r.default, {
                                        href: "/contact/contact-dark",
                                        children: (0, t.jsx)("a", {
                                            className: "nav-link",
                                            children: "Contact"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        27196: function(e, a, s) {
            "use strict";
            var r = s(67294),
                l = s(32979),
                n = s(85893);
            a.Z = function(e) {
                var a = e.sliderRef;
                return r.useEffect((function() {
                    (0, l.Z)(document.querySelectorAll(".fixed-slider .capt .parlx"))
                }), []), (0, n.jsx)("header", {
                    ref: a,
                    className: "works-header fixed-slider hfixd valign sub-bg",
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, n.jsx)("div", {
                                className: "col-lg-7 col-md-9 static",
                                children: (0, n.jsxs)("div", {
                                    className: "capt mt-50",
                                    children: [(0, n.jsxs)("div", {
                                        className: "parlx text-center",
                                        children: [(0, n.jsx)("h1", {
                                            className: "color-font",
                                            children: "amazing works"
                                        }), (0, n.jsx)("p", {
                                            children: "Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "bactxt custom-font valign",
                                        children: (0, n.jsx)("span", {
                                            className: "full-width",
                                            children: "Works"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        41664: function(e, a, s) {
            e.exports = s(7942)
        }
    }
]);