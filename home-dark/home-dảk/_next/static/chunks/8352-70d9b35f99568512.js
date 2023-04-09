(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8352], {
        7942: function(e, a, s) {
            "use strict";
            var r = s(63038);
            a.default = void 0;
            var n, l = (n = s(67294)) && n.__esModule ? n : {
                    default: n
                },
                i = s(64957),
                t = s(69898),
                c = s(90639);
            var o = {};

            function d(e, a, s, r) {
                if (e && i.isLocalURL(a)) {
                    e.prefetch(a, s, r).catch((function(e) {
                        0
                    }));
                    var n = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    o[a + "%" + s + (n ? "%" + n : "")] = !0
                }
            }
            var h = function(e) {
                var a, s = !1 !== e.prefetch,
                    n = t.useRouter(),
                    h = l.default.useMemo((function() {
                        var a = i.resolveHref(n, e.href, !0),
                            s = r(a, 2),
                            l = s[0],
                            t = s[1];
                        return {
                            href: l,
                            as: e.as ? i.resolveHref(n, e.as) : t || l
                        }
                    }), [n, e.href, e.as]),
                    m = h.href,
                    u = h.as,
                    f = e.children,
                    p = e.replace,
                    x = e.shallow,
                    j = e.scroll,
                    g = e.locale;
                "string" === typeof f && (f = l.default.createElement("a", null, f));
                var v = (a = l.default.Children.only(f)) && "object" === typeof a && a.ref,
                    b = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    N = r(b, 2),
                    w = N[0],
                    k = N[1],
                    y = l.default.useCallback((function(e) {
                        w(e), v && ("function" === typeof v ? v(e) : "object" === typeof v && (v.current = e))
                    }), [v, w]);
                l.default.useEffect((function() {
                    var e = k && s && i.isLocalURL(m),
                        a = "undefined" !== typeof g ? g : n && n.locale,
                        r = o[m + "%" + u + (a ? "%" + a : "")];
                    e && !r && d(n, m, u, {
                        locale: a
                    })
                }), [u, m, k, g, s, n]);
                var _ = {
                    ref: y,
                    onClick: function(e) {
                        a.props && "function" === typeof a.props.onClick && a.props.onClick(e), e.defaultPrevented || function(e, a, s, r, n, l, t, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var a = e.currentTarget.target;
                                return a && "_self" !== a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && i.isLocalURL(s)) && (e.preventDefault(), null == t && r.indexOf("#") >= 0 && (t = !1), a[n ? "replace" : "push"](s, r, {
                                shallow: l,
                                locale: c,
                                scroll: t
                            }))
                        }(e, n, m, u, p, x, j, g)
                    },
                    onMouseEnter: function(e) {
                        i.isLocalURL(m) && (a.props && "function" === typeof a.props.onMouseEnter && a.props.onMouseEnter(e), d(n, m, u, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === a.type && !("href" in a.props)) {
                    var C = "undefined" !== typeof g ? g : n && n.locale,
                        E = n && n.isLocaleDomain && i.getDomainLocale(u, C, n && n.locales, n && n.domainLocales);
                    _.href = E || i.addBasePath(i.addLocale(u, C, n && n.defaultLocale))
                }
                return l.default.cloneElement(a, _)
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
                    s = e.disabled || !i,
                    c = n.useRef(),
                    o = n.useState(!1),
                    d = r(o, 2),
                    h = d[0],
                    m = d[1],
                    u = n.useCallback((function(e) {
                        c.current && (c.current(), c.current = void 0), s || h || e && e.tagName && (c.current = function(e, a, s) {
                            var r = function(e) {
                                    var a = e.rootMargin || "",
                                        s = t.get(a);
                                    if (s) return s;
                                    var r = new Map,
                                        n = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var a = r.get(e.target),
                                                    s = e.isIntersecting || e.intersectionRatio > 0;
                                                a && s && a(s)
                                            }))
                                        }), e);
                                    return t.set(a, s = {
                                        id: a,
                                        observer: n,
                                        elements: r
                                    }), s
                                }(s),
                                n = r.id,
                                l = r.observer,
                                i = r.elements;
                            return i.set(e, a), l.observe(e),
                                function() {
                                    i.delete(e), l.unobserve(e), 0 === i.size && (l.disconnect(), t.delete(n))
                                }
                        }(e, (function(e) {
                            return e && m(e)
                        }), {
                            rootMargin: a
                        }))
                    }), [s, a, h]);
                return n.useEffect((function() {
                    if (!i && !h) {
                        var e = l.requestIdleCallback((function() {
                            return m(!0)
                        }));
                        return function() {
                            return l.cancelIdleCallback(e)
                        }
                    }
                }), [h]), [u, h]
            };
            var n = s(67294),
                l = s(26286),
                i = "undefined" !== typeof IntersectionObserver;
            var t = new Map
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
                    return n
                },
                _: function() {
                    return l
                }
            });
            var r = s(57420),
                n = function(e) {
                    (0, r.Z)(e.target.parentElement).filter((function(e) {
                        return e.classList.contains("show")
                    })).map((function(e) {
                        e.classList.remove("show"), e.childNodes[0] && e.childNodes[0].setAttribute("aria-expanded", !1), e.childNodes[1] && e.childNodes[1].classList.remove("show")
                    })), e.target.parentElement.classList.toggle("show"), e.target.setAttribute("aria-expanded", !0), e.target.parentElement.childNodes[1].classList.toggle("show")
                },
                l = function(e) {
                    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")
                }
        },
        82879: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return d
                }
            });
            var r = s(15861),
                n = s(87757),
                l = s.n(n),
                i = s(67294),
                t = JSON.parse('{"TN":"Let\'s Talk.","Do":"Email@example.com","m7":"+4.930.705.5448","xh":{"P":"295 Witting Streets Suite 666,","E":"Melbourne, Australia"}}'),
                c = s(82175),
                o = s(85893),
                d = function() {
                    var e = i.useRef(null);

                    function a(e) {
                        var a;
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) || (a = "Invalid email address") : a = "Required", a
                    }
                    var s = function(e) {
                        return new Promise((function(a) {
                            return setTimeout(a, e)
                        }))
                    };
                    return (0, o.jsx)("section", {
                        className: "contact section-padding",
                        children: (0, o.jsx)("div", {
                            className: "container",
                            children: (0, o.jsxs)("div", {
                                className: "row",
                                children: [(0, o.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, o.jsxs)("div", {
                                        className: "form md-mb50",
                                        children: [(0, o.jsx)("h4", {
                                            className: "fw-700 color-font mb-50",
                                            children: "Get In Touch."
                                        }), (0, o.jsx)(c.J9, {
                                            initialValues: {
                                                name: "",
                                                email: "",
                                                message: ""
                                            },
                                            onSubmit: function() {
                                                var a = (0, r.Z)(l().mark((function a(r) {
                                                    return l().wrap((function(a) {
                                                        for (;;) switch (a.prev = a.next) {
                                                            case 0:
                                                                return a.next = 2, s(500);
                                                            case 2:
                                                                alert(JSON.stringify(r, null, 2)), e.current.innerText = "Your Message has been successfully sent. I will contact you soon.", r.name = "", r.email = "", r.message = "", setTimeout((function() {
                                                                    e.current.innerText = ""
                                                                }), 2e3);
                                                            case 8:
                                                            case "end":
                                                                return a.stop()
                                                        }
                                                    }), a)
                                                })));
                                                return function(e) {
                                                    return a.apply(this, arguments)
                                                }
                                            }(),
                                            children: function(s) {
                                                var r = s.errors,
                                                    n = s.touched;
                                                return (0, o.jsxs)(c.l0, {
                                                    id: "contact-form",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "messages",
                                                        ref: e
                                                    }), (0, o.jsxs)("div", {
                                                        className: "controls",
                                                        children: [(0, o.jsx)("div", {
                                                            className: "form-group",
                                                            children: (0, o.jsx)(c.gN, {
                                                                id: "form_name",
                                                                type: "text",
                                                                name: "name",
                                                                placeholder: "Name",
                                                                required: "required"
                                                            })
                                                        }), (0, o.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, o.jsx)(c.gN, {
                                                                validate: a,
                                                                id: "form_email",
                                                                type: "email",
                                                                name: "email",
                                                                placeholder: "Email"
                                                            }), r.email && n.email && (0, o.jsx)("div", {
                                                                children: r.email
                                                            })]
                                                        })]
                                                    }), (0, o.jsx)("div", {
                                                        className: "form-group",
                                                        children: (0, o.jsx)(c.gN, {
                                                            as: "textarea",
                                                            id: "form_message",
                                                            name: "message",
                                                            placeholder: "Message",
                                                            rows: "4",
                                                            required: "required"
                                                        })
                                                    }), (0, o.jsx)("button", {
                                                        type: "submit",
                                                        className: "butn bord",
                                                        children: (0, o.jsx)("span", {
                                                            children: "Send Message"
                                                        })
                                                    })]
                                                })
                                            }
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "col-lg-5 offset-lg-1",
                                    children: (0, o.jsxs)("div", {
                                        className: "cont-info",
                                        children: [(0, o.jsx)("h4", {
                                            className: "fw-700 color-font mb-50",
                                            children: "Contact Info."
                                        }), (0, o.jsx)("h3", {
                                            className: "wow",
                                            "data-splitting": !0,
                                            children: t.TN
                                        }), (0, o.jsxs)("div", {
                                            className: "item mb-40",
                                            children: [(0, o.jsx)("h5", {
                                                children: (0, o.jsx)("a", {
                                                    href: "#0",
                                                    children: t.Do
                                                })
                                            }), (0, o.jsx)("h5", {
                                                children: t.m7
                                            })]
                                        }), (0, o.jsx)("h3", {
                                            className: "wow",
                                            "data-splitting": !0,
                                            children: "Visit Us."
                                        }), (0, o.jsx)("div", {
                                            className: "item",
                                            children: (0, o.jsxs)("h6", {
                                                children: [t.xh.P, (0, o.jsx)("br", {}), t.xh.E]
                                            })
                                        }), (0, o.jsxs)("div", {
                                            className: "social mt-50",
                                            children: [(0, o.jsx)("a", {
                                                href: "#0",
                                                className: "icon",
                                                children: (0, o.jsx)("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }), (0, o.jsx)("a", {
                                                href: "#0",
                                                className: "icon",
                                                children: (0, o.jsx)("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }), (0, o.jsx)("a", {
                                                href: "#0",
                                                className: "icon",
                                                children: (0, o.jsx)("i", {
                                                    className: "fab fa-pinterest"
                                                })
                                            }), (0, o.jsx)("a", {
                                                href: "#0",
                                                className: "icon",
                                                children: (0, o.jsx)("i", {
                                                    className: "fab fa-behance"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        62107: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return o
                }
            });
            s(67294);
            var r = s(14746),
                n = s(40654),
                l = s(26868),
                i = s.n(l),
                t = JSON.parse('{"T":{"P":"Let\'s talk","E":"about your project."},"k":"Feel free to ask me any question or let\u2019s do to talk about our future collaboration."}'),
                c = s(85893),
                o = function(e) {
                    var a = e.sliderRef,
                        s = e.blackStar;
                    return (0, c.jsxs)("header", {
                        ref: a,
                        className: "pages-header circle-bg valign position-re",
                        children: [(0, c.jsx)("div", {
                            className: "container",
                            children: (0, c.jsx)("div", {
                                className: "row justify-content-center",
                                children: (0, c.jsx)("div", {
                                    className: "col-lg-9 col-md-11",
                                    children: (0, c.jsx)("div", {
                                        className: "capt",
                                        children: (0, c.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, c.jsxs)("h1", {
                                                className: "color-font mb-10 fw-700",
                                                children: [t.T.P, " ", (0, c.jsx)("br", {}), t.T.E]
                                            }), (0, c.jsx)("p", {
                                                children: t.k
                                            })]
                                        })
                                    })
                                })
                            })
                        }), (0, c.jsx)(i(), {
                            id: "particles-js",
                            options: s ? n.Z : r.Z
                        }), (0, c.jsxs)("div", {
                            className: "circle-color",
                            children: [(0, c.jsx)("div", {
                                className: "gradient-circle"
                            }), (0, c.jsx)("div", {
                                className: "gradient-circle two"
                            })]
                        })]
                    })
                }
        },
        25914: function(e, a, s) {
            "use strict";
            s(67294);
            var r = s(41664),
                n = s(82806),
                l = s(85893);
            a.Z = function(e) {
                var a = e.hideBGCOLOR;
                return (0, l.jsx)("footer", {
                    className: "".concat(a ? "" : "sub-bg"),
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "row",
                            children: [(0, l.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, l.jsxs)("div", {
                                    className: "item md-mb50",
                                    children: [(0, l.jsx)("div", {
                                        className: "title",
                                        children: (0, l.jsx)("h5", {
                                            children: "Contact Us"
                                        })
                                    }), (0, l.jsxs)("ul", {
                                        children: [(0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("span", {
                                                className: "icon pe-7s-map-marker"
                                            }), (0, l.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, l.jsx)("h6", {
                                                    children: "Officeal Address"
                                                }), (0, l.jsx)("p", {
                                                    children: "504 White St . Dawsonville, GA 30534 , New York"
                                                })]
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("span", {
                                                className: "icon pe-7s-mail"
                                            }), (0, l.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, l.jsx)("h6", {
                                                    children: "Email Us"
                                                }), (0, l.jsx)("p", {
                                                    children: "support@gmail.com"
                                                })]
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("span", {
                                                className: "icon pe-7s-call"
                                            }), (0, l.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, l.jsx)("h6", {
                                                    children: "Call Us"
                                                }), (0, l.jsx)("p", {
                                                    children: "+87986451666"
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, l.jsxs)("div", {
                                    className: "item md-mb50",
                                    children: [(0, l.jsx)("div", {
                                        className: "title",
                                        children: (0, l.jsx)("h5", {
                                            children: "Recent News"
                                        })
                                    }), (0, l.jsxs)("ul", {
                                        children: [(0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("div", {
                                                className: "img",
                                                children: (0, l.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("img", {
                                                            src: "/img/blog/1.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "sm-post",
                                                children: [(0, l.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("p", {
                                                            children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                        })
                                                    })
                                                }), (0, l.jsx)(r.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("span", {
                                                            className: "date",
                                                            children: "14 sep 2022"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("div", {
                                                className: "img",
                                                children: (0, l.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("img", {
                                                            src: "/img/blog/2.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "sm-post",
                                                children: [(0, l.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("p", {
                                                            children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                        })
                                                    })
                                                }), (0, l.jsx)(r.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: (0, l.jsx)("span", {
                                                            className: "date",
                                                            children: "14 sep 2022"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsxs)("div", {
                                                className: "subscribe",
                                                children: [(0, l.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Type Your Email"
                                                }), (0, l.jsx)("span", {
                                                    className: "subs pe-7s-paper-plane"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, l.jsxs)("div", {
                                    className: "item",
                                    children: [(0, l.jsx)("div", {
                                        className: "logo",
                                        children: (0, l.jsx)("img", {
                                            src: n.E8,
                                            alt: ""
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "social",
                                        children: [(0, l.jsx)("a", {
                                            href: "#0",
                                            children: (0, l.jsx)("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }), (0, l.jsx)("a", {
                                            href: "#0",
                                            children: (0, l.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, l.jsx)("a", {
                                            href: "#0",
                                            children: (0, l.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }), (0, l.jsx)("a", {
                                            href: "#0",
                                            children: (0, l.jsx)("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "copy-right",
                                        children: (0, l.jsxs)("p", {
                                            children: ["\xa9 2022, Vie Template. Made with passion by", (0, l.jsx)(r.default, {
                                                href: "https://themeforest.net/user/themescamp/portfolio",
                                                children: (0, l.jsx)("a", {
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
                n = s(82806),
                l = s(81108),
                i = s(85893);
            a.Z = function(e) {
                var a = e.lr,
                    s = e.nr,
                    t = e.theme;
                return (0, i.jsx)("nav", {
                    ref: s,
                    className: "navbar navbar-expand-lg change ".concat("themeL" === t ? "light" : ""),
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)(r.default, {
                            href: "/",
                            children: (0, i.jsx)("a", {
                                className: "logo",
                                children: t && "themeL" === t ? (0, i.jsx)("img", {
                                    ref: a,
                                    src: n.Q1,
                                    alt: "logo"
                                }) : (0, i.jsx)("img", {
                                    ref: a,
                                    src: n.E8,
                                    alt: "logo"
                                })
                            })
                        }), (0, i.jsx)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            onClick: l._,
                            "data-toggle": "collapse",
                            "data-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: (0, i.jsx)("span", {
                                className: "icon-bar",
                                children: (0, i.jsx)("i", {
                                    className: "fas fa-bars"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarSupportedContent",
                            children: (0, i.jsxs)("ul", {
                                className: "navbar-nav ml-auto",
                                children: [(0, i.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: l.z,
                                    children: [(0, i.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Home"
                                    }), (0, i.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, i.jsx)(r.default, {
                                            href: "/homepage/home1-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Main Home"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home2-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Creative Agency"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home5-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Digital Agency"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home4-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Business One Page"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home3-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Corporate Business"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home6-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Modern Agency"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home7-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Freelancer"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/homepage/home8-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Architecture"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, i.jsx)(r.default, {
                                        href: "/about/about-dark",
                                        children: (0, i.jsx)("a", {
                                            className: "nav-link",
                                            children: "About"
                                        })
                                    })
                                }), (0, i.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: l.z,
                                    children: [(0, i.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Works"
                                    }), (0, i.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, i.jsx)(r.default, {
                                            href: "/showcase/showcase-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Parallax"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/showcase4/showcase4-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Carousel"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/showcase3/showcase3-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Showcase Circle"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/works/works-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Masonry"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/works2/works2-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Filtering"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/works3/works3-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Portfolio Gallery"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: l.z,
                                    children: [(0, i.jsx)("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Blog"
                                    }), (0, i.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [(0, i.jsx)(r.default, {
                                            href: "/blog/blog-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Standerd"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/blog-list/blog-list-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog List"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/blog-grid/blog-grid-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Grid"
                                            })
                                        }), (0, i.jsx)(r.default, {
                                            href: "/blog-details/blog-details-dark",
                                            children: (0, i.jsx)("a", {
                                                className: "dropdown-item",
                                                children: "Blog Details"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, i.jsx)(r.default, {
                                        href: "/contact/contact-dark",
                                        children: (0, i.jsx)("a", {
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
        14746: function(e, a) {
            "use strict";
            a.Z = {
                particles: {
                    number: {
                        value: 130,
                        density: {
                            enable: !0,
                            value_area: 900
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "/img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .2,
                        random: !0,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: .3,
                            sync: !1
                        }
                    },
                    size: {
                        value: 1.8,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 4,
                            size_min: .4,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 150,
                        color: "#ffffff",
                        opacity: .4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 1,
                        direction: "none",
                        random: !0,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 600
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !0,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: !0,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }
        },
        40654: function(e, a) {
            "use strict";
            a.Z = {
                particles: {
                    number: {
                        value: 130,
                        density: {
                            enable: !0,
                            value_area: 900
                        }
                    },
                    color: {
                        value: "#000000"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "/img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: .2,
                        random: !0,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: .3,
                            sync: !1
                        }
                    },
                    size: {
                        value: 1.8,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 4,
                            size_min: .4,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 150,
                        color: "#ffffff",
                        opacity: .4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 1,
                        direction: "none",
                        random: !0,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 600
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !0,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: !0,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            }
        },
        41664: function(e, a, s) {
            e.exports = s(7942)
        }
    }
]);