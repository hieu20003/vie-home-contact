(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6820], {
        7942: function(s, e, a) {
            "use strict";
            var l = a(63038);
            e.default = void 0;
            var c, i = (c = a(67294)) && c.__esModule ? c : {
                    default: c
                },
                n = a(64957),
                t = a(69898),
                d = a(90639);
            var r = {};

            function x(s, e, a, l) {
                if (s && n.isLocalURL(e)) {
                    s.prefetch(e, a, l).catch((function(s) {
                        0
                    }));
                    var c = l && "undefined" !== typeof l.locale ? l.locale : s && s.locale;
                    r[e + "%" + a + (c ? "%" + c : "")] = !0
                }
            }
            var j = function(s) {
                var e, a = !1 !== s.prefetch,
                    c = t.useRouter(),
                    j = i.default.useMemo((function() {
                        var e = n.resolveHref(c, s.href, !0),
                            a = l(e, 2),
                            i = a[0],
                            t = a[1];
                        return {
                            href: i,
                            as: s.as ? n.resolveHref(c, s.as) : t || i
                        }
                    }), [c, s.href, s.as]),
                    o = j.href,
                    m = j.as,
                    h = s.children,
                    g = s.replace,
                    N = s.shallow,
                    p = s.scroll,
                    f = s.locale;
                "string" === typeof h && (h = i.default.createElement("a", null, h));
                var u = (e = i.default.Children.only(h)) && "object" === typeof e && e.ref,
                    v = d.useIntersection({
                        rootMargin: "200px"
                    }),
                    w = l(v, 2),
                    b = w[0],
                    y = w[1],
                    k = i.default.useCallback((function(s) {
                        b(s), u && ("function" === typeof u ? u(s) : "object" === typeof u && (u.current = s))
                    }), [u, b]);
                i.default.useEffect((function() {
                    var s = y && a && n.isLocalURL(o),
                        e = "undefined" !== typeof f ? f : c && c.locale,
                        l = r[o + "%" + m + (e ? "%" + e : "")];
                    s && !l && x(c, o, m, {
                        locale: e
                    })
                }), [m, o, y, f, a, c]);
                var _ = {
                    ref: k,
                    onClick: function(s) {
                        e.props && "function" === typeof e.props.onClick && e.props.onClick(s), s.defaultPrevented || function(s, e, a, l, c, i, t, d) {
                            ("A" !== s.currentTarget.nodeName || ! function(s) {
                                var e = s.currentTarget.target;
                                return e && "_self" !== e || s.metaKey || s.ctrlKey || s.shiftKey || s.altKey || s.nativeEvent && 2 === s.nativeEvent.which
                            }(s) && n.isLocalURL(a)) && (s.preventDefault(), null == t && l.indexOf("#") >= 0 && (t = !1), e[c ? "replace" : "push"](a, l, {
                                shallow: i,
                                locale: d,
                                scroll: t
                            }))
                        }(s, c, o, m, g, N, p, f)
                    },
                    onMouseEnter: function(s) {
                        n.isLocalURL(o) && (e.props && "function" === typeof e.props.onMouseEnter && e.props.onMouseEnter(s), x(c, o, m, {
                            priority: !0
                        }))
                    }
                };
                if (s.passHref || "a" === e.type && !("href" in e.props)) {
                    var I = "undefined" !== typeof f ? f : c && c.locale,
                        U = c && c.isLocaleDomain && n.getDomainLocale(m, I, c && c.locales, c && c.domainLocales);
                    _.href = U || n.addBasePath(n.addLocale(m, I, c && c.defaultLocale))
                }
                return i.default.cloneElement(e, _)
            };
            e.default = j
        },
        90639: function(s, e, a) {
            "use strict";
            var l = a(63038);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(s) {
                var e = s.rootMargin,
                    a = s.disabled || !n,
                    d = c.useRef(),
                    r = c.useState(!1),
                    x = l(r, 2),
                    j = x[0],
                    o = x[1],
                    m = c.useCallback((function(s) {
                        d.current && (d.current(), d.current = void 0), a || j || s && s.tagName && (d.current = function(s, e, a) {
                            var l = function(s) {
                                    var e = s.rootMargin || "",
                                        a = t.get(e);
                                    if (a) return a;
                                    var l = new Map,
                                        c = new IntersectionObserver((function(s) {
                                            s.forEach((function(s) {
                                                var e = l.get(s.target),
                                                    a = s.isIntersecting || s.intersectionRatio > 0;
                                                e && a && e(a)
                                            }))
                                        }), s);
                                    return t.set(e, a = {
                                        id: e,
                                        observer: c,
                                        elements: l
                                    }), a
                                }(a),
                                c = l.id,
                                i = l.observer,
                                n = l.elements;
                            return n.set(s, e), i.observe(s),
                                function() {
                                    n.delete(s), i.unobserve(s), 0 === n.size && (i.disconnect(), t.delete(c))
                                }
                        }(s, (function(s) {
                            return s && o(s)
                        }), {
                            rootMargin: e
                        }))
                    }), [a, e, j]);
                return c.useEffect((function() {
                    if (!n && !j) {
                        var s = i.requestIdleCallback((function() {
                            return o(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(s)
                        }
                    }
                }), [j]), [m, j]
            };
            var c = a(67294),
                i = a(26286),
                n = "undefined" !== typeof IntersectionObserver;
            var t = new Map
        },
        5032: function(s, e) {
            "use strict";
            e.Z = function() {
                var s, e = document.querySelectorAll(".gallery");
                e.length >= 1 && e.forEach((function(e) {
                    s = new Isotope(e, {
                        itemSelector: ".items"
                    })
                }));
                var a = document.querySelectorAll(".gallery-mons");
                a.length >= 1 && a.forEach((function(e) {
                    s = new Isotope(e, {
                        itemSelector: ".items",
                        masonry: {
                            columnWidth: ".width2"
                        }
                    })
                }));
                var l = document.querySelector(".filtering");
                if (l) {
                    var c = function(s) {
                        s.addEventListener("click", (function(e) {
                            matchesSelector(e.target, "span") && (s.querySelector(".active").classList.remove("active"), e.target.classList.add("active"))
                        }))
                    };
                    l.addEventListener("click", (function(e) {
                        if (matchesSelector(e.target, "span")) {
                            var a = e.target.getAttribute("data-filter");
                            a = a, s.arrange({
                                filter: a
                            })
                        }
                    }));
                    for (var i = document.querySelectorAll(".filtering"), n = 0, t = i.length; n < t; n++) {
                        c(i[n])
                    }
                }
            }
        },
        51514: function(s, e, a) {
            "use strict";
            var l = a(15671),
                c = a(43144),
                i = a(97326),
                n = a(32531),
                t = a(20245),
                d = a(61120),
                r = a(4942),
                x = a(67294),
                j = a(85893);

            function o(s) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (s) {
                        return !1
                    }
                }();
                return function() {
                    var a, l = (0, d.Z)(s);
                    if (e) {
                        var c = (0, d.Z)(this).constructor;
                        a = Reflect.construct(l, arguments, c)
                    } else a = l.apply(this, arguments);
                    return (0, t.Z)(this, a)
                }
            }
            var m = function(s) {
                (0, n.Z)(a, s);
                var e = o(a);

                function a() {
                    var s;
                    (0, l.Z)(this, a);
                    for (var c = arguments.length, n = new Array(c), t = 0; t < c; t++) n[t] = arguments[t];
                    return s = e.call.apply(e, [this].concat(n)), (0, r.Z)((0, i.Z)(s), "target", x.createRef()), (0, r.Z)((0, i.Z)(s), "split", (function() {
                        s.target.current && Splitting({
                            target: s.target.current
                        })
                    })), (0, r.Z)((0, i.Z)(s), "componentDidMount", s.split), (0, r.Z)((0, i.Z)(s), "componentDidUpdate", s.split), s
                }
                return (0, c.Z)(a, [{
                    key: "render",
                    value: function() {
                        return (0, j.jsx)("div", {
                            ref: this.target,
                            children: this.props.children
                        })
                    }
                }]), a
            }(x.Component);
            e.Z = m
        },
        14746: function(s, e) {
            "use strict";
            e.Z = {
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
        49516: function(s, e, a) {
            "use strict";
            var l = a(67294),
                c = a(9008),
                i = a(85893);
            e.Z = function(s) {
                var e = s.children,
                    a = s.useSkin,
                    n = s.mobileappstyle;
                return l.useEffect((function() {
                    window.theme = "dark"
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c.default, {
                        children: [(0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/dark.css"
                        }), a ? (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/arch-skin-dark.css"
                        }) : "", n ? (0, i.jsx)("link", {
                            href: "/css/mobile-app-dark.css",
                            rel: "stylesheet"
                        }) : ""]
                    }), e]
                })
            }
        },
        66820: function(s, e, a) {
            "use strict";
            a.r(e);
            var l = a(77625),
                c = a(65988),
                i = a(67294),
                n = a(14746),
                t = a(26868),
                d = a.n(t),
                r = a(41664),
                x = a(51514),
                j = a(49516),
                o = a(5032),
                m = a(85893);
            e.default = function() {
                var s = i.useState(!1),
                    e = (0, l.Z)(s, 2),
                    a = e[0],
                    t = e[1];
                return i.useEffect((function() {
                    t(!0), a && window.addEventListener("load", (function() {
                        setTimeout((function() {
                            a && (0, o.Z)()
                        }), 1e3)
                    })), setTimeout((function() {
                        a && (0, o.Z)()
                    }), 1e3)
                }), [a]), (0, m.jsxs)(j.Z, {
                    children: [(0, m.jsx)(c.default, {
                        id: "575932941",
                        children: [".sec-head.jsx-575932941 h3.jsx-575932941{font-size:60px;font-weight:700;position:relative;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941{position:absolute;top:-120px;left:0;width:100%;font-size:15vw;font-weight:900;line-height:1;background:linear-gradient( 180deg, #fff 0%, rgba(17,18,21,0.2) 70% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;opacity:0.1;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941 b.jsx-575932941{font-weight:500;font-size:12vw;}", ".main-content.jsx-575932941{position:relative;z-index:999999;background:transparent;}", ".masonery.jsx-575932941 .gallery.jsx-575932941 .items.jsx-575932941{margin-top:30px;}", ".masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 100px;}", "@media (max-width:768px){.masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 20px;}.sec-head.jsx-575932941 h3.jsx-575932941{font-size:34px;}.sec-head.jsx-575932941{margin:0 auto 30px;}}", ".masonery.jsx-575932941 .item-img.jsx-575932941{padding:5px 15px 20px;border-radius:10px;background:#18191d;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .dot.jsx-575932941{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.05);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941{border-radius:10px;overflow:hidden;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941 img.jsx-575932941{-webkit-transition:all 0.4s;transition:all 0.4s;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941:hover img.jsx-575932941{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941{margin-top:20px;text-align:center;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 h6.jsx-575932941{font-size:16px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.jsx-575932941{position:absolute;top:-47px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);padding:5px 10px;border-radius:30px;box-shadow:0px 5px 20px rgba(255,255,255,0.05);font-size:12px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.coming.jsx-575932941{background:#03be5f;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.new.jsx-575932941{background:#ff4b4b;}"]
                    }), (0, m.jsx)("div", {
                        className: "jsx-575932941 circle-bg",
                        children: (0, m.jsxs)("div", {
                            className: "jsx-575932941 circle-color fixed",
                            children: [(0, m.jsx)("div", {
                                className: "jsx-575932941 gradient-circle"
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 gradient-circle two"
                            })]
                        })
                    }), (0, m.jsxs)("header", {
                        "data-overlay-dark": "4",
                        style: {
                            backgroundImage: "url(/demo-img/bg.png)",
                            minHeight: "100vh",
                            zIndex: 99999
                        },
                        className: "jsx-575932941 works-header particles valign bg-img parallaxie",
                        children: [(0, m.jsx)(d(), {
                            id: "particles-js",
                            options: n.Z
                        }), (0, m.jsx)("div", {
                            className: "jsx-575932941 container",
                            children: (0, m.jsx)("div", {
                                className: "jsx-575932941 row justify-content-center",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 col-lg-9 col-md-11 static",
                                    children: (0, m.jsx)("div", {
                                        className: "jsx-575932941 capt mt-50",
                                        children: (0, m.jsx)("div", {
                                            className: "jsx-575932941 bactxt custom-font valign",
                                            children: (0, m.jsx)("span", {
                                                style: {
                                                    color: "transparent"
                                                },
                                                className: "jsx-575932941 full-width",
                                                children: "vie"
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0, m.jsxs)("div", {
                        className: "jsx-575932941 main-content section-padding pb-0",
                        children: [(0, m.jsxs)("section", {
                            className: "jsx-575932941 masonery section-padding",
                            children: [(0, m.jsx)("div", {
                                className: "jsx-575932941 container",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 row justify-content-center",
                                    children: (0, m.jsx)("div", {
                                        className: "jsx-575932941 col-lg-8 col-md-10",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 sec-head text-center",
                                            children: [(0, m.jsx)("h3", {
                                                className: "jsx-575932941 color-font",
                                                children: "49+ stunning unique ready template"
                                            }), (0, m.jsxs)("span", {
                                                className: "jsx-575932941 tbg",
                                                children: [(0, m.jsx)("b", {
                                                    className: "jsx-575932941",
                                                    children: "+"
                                                }), "49"]
                                            })]
                                        })
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 container-fluid",
                                children: (0, m.jsxs)("div", {
                                    className: "jsx-575932941 row",
                                    children: [(0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home1-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Main Demo"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home1-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/01.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Main Demo"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home2-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/2.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Creative Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home2-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/02.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Creative Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/mobile-app/mobile-app-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/mobile1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsxs)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: [(0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Mobile app"
                                                            }), (0, m.jsx)("div", {
                                                                className: "jsx-575932941 sta new",
                                                                children: (0, m.jsx)("span", {
                                                                    className: "jsx-575932941",
                                                                    children: "New Demo"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/mobile-app/mobile-app-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/mobile2.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsxs)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: [(0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Mobile app"
                                                            }), (0, m.jsx)("div", {
                                                                className: "jsx-575932941 sta new",
                                                                children: (0, m.jsx)("span", {
                                                                    className: "jsx-575932941",
                                                                    children: "New Demo"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home7-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n2.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Freelancer"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home7-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n02.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Freelancer"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home8-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n3.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Architecture"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home8-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n03.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Architecture"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home5-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/3.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Digital Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home5-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/03.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Digital Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home4-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/4.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Business One Page"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home4-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/04.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Business One Page"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home3-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/5.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Corporate Business"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home3-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/05.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Corporate Business"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home6-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Modern Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/homepage/home6-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/n01.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Modern Agency"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("div", {
                                                    className: "jsx-575932941 img",
                                                    children: (0, m.jsx)("img", {
                                                        src: "/demo-img/c3.png",
                                                        alt: "image",
                                                        className: "jsx-575932941"
                                                    })
                                                }), (0, m.jsxs)("div", {
                                                    className: "jsx-575932941 cont",
                                                    children: [(0, m.jsx)("h6", {
                                                        className: "jsx-575932941",
                                                        children: "Restaurant"
                                                    }), (0, m.jsx)("div", {
                                                        className: "jsx-575932941 sta coming",
                                                        children: (0, m.jsx)("span", {
                                                            className: "jsx-575932941",
                                                            children: "Coming Soon"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("div", {
                                                    className: "jsx-575932941 img",
                                                    children: (0, m.jsx)("img", {
                                                        src: "/demo-img/c4.png",
                                                        alt: "image",
                                                        className: "jsx-575932941"
                                                    })
                                                }), (0, m.jsxs)("div", {
                                                    className: "jsx-575932941 cont",
                                                    children: [(0, m.jsx)("h6", {
                                                        className: "jsx-575932941",
                                                        children: "Multipurpose"
                                                    }), (0, m.jsx)("div", {
                                                        className: "jsx-575932941 sta coming",
                                                        children: (0, m.jsx)("span", {
                                                            className: "jsx-575932941",
                                                            children: "Coming Soon"
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, m.jsxs)("section", {
                            className: "jsx-575932941 masonery section-padding position-re",
                            children: [(0, m.jsx)("div", {
                                className: "jsx-575932941 container",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 row justify-content-center",
                                    children: (0, m.jsx)("div", {
                                        className: "jsx-575932941 col-lg-8 col-md-10",
                                        children: (0, m.jsx)("div", {
                                            className: "jsx-575932941 sec-head text-center",
                                            children: (0, m.jsx)("h3", {
                                                className: "jsx-575932941 color-font",
                                                children: "Showcases"
                                            })
                                        })
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 container-fluid",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 row",
                                    children: (0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase/showcase-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Full Screen"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase/showcase-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s01.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Full Screen"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase4/showcase4-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s2.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Showcase Carousel"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase4/showcase4-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s02.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Showcase Carousel"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase3/showcase3-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s3.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Showcase Circle"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/showcase3/showcase3-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/s03.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Showcase Circle"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works/works-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works 3 column"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works/works-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w01.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works 3 column"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works2/works2-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w2.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works Filtering"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works2/works2-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w02.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works Filtering"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works3/works3-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w3.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works Gallery"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/works3/works3-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/w03.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Works Gallery"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 line top left"
                            })]
                        }), (0, m.jsxs)("section", {
                            className: "jsx-575932941 masonery section-padding position-re",
                            children: [(0, m.jsx)("div", {
                                className: "jsx-575932941 container",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 row justify-content-center",
                                    children: (0, m.jsx)("div", {
                                        className: "jsx-575932941 col-lg-8 col-md-10",
                                        children: (0, m.jsx)("div", {
                                            className: "jsx-575932941 sec-head text-center",
                                            children: (0, m.jsx)("h3", {
                                                className: "jsx-575932941 color-font",
                                                children: "Inner Pages"
                                            })
                                        })
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 container-fluid",
                                children: (0, m.jsx)("div", {
                                    className: "jsx-575932941 row",
                                    children: (0, m.jsxs)("div", {
                                        className: "jsx-575932941 gallery full-width",
                                        children: [(0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/standerd-blog-dark.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Standerd Blog"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog/blog-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/standerd-blog-light.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Standerd Blog"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-list/blog-list-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-list-dark.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog List"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-list/blog-list-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-list-light.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog List"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-grid/blog-grid-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-grid-dark.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog Grid"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-grid/blog-grid-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-grid-light.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog Grid"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-details-dark.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog Details"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/blog-details/blog-details-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/blog-details-light.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Blog Details"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/about/about-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/about.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "About Us"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/about/about-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/about1.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "About Us"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/contact/contact-dark",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/contact-dark.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Contact"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, m.jsx)("div", {
                                            className: "jsx-575932941 col-lg-3 col-md-6 items",
                                            children: (0, m.jsxs)("div", {
                                                "data-wow-delay": ".4s",
                                                className: "jsx-575932941 item-img wow fadeInUp",
                                                children: [(0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)("span", {
                                                    className: "jsx-575932941 dot"
                                                }), (0, m.jsx)(r.default, {
                                                    href: "/contact/contact-light",
                                                    children: (0, m.jsxs)("a", {
                                                        target: "_blank",
                                                        className: "jsx-575932941",
                                                        children: [(0, m.jsx)("div", {
                                                            className: "jsx-575932941 img",
                                                            children: (0, m.jsx)("img", {
                                                                src: "/demo-img/contact-light.png",
                                                                alt: "image",
                                                                className: "jsx-575932941"
                                                            })
                                                        }), (0, m.jsx)("div", {
                                                            className: "jsx-575932941 cont",
                                                            children: (0, m.jsx)("h6", {
                                                                className: "jsx-575932941",
                                                                children: "Contact"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 line top left"
                            })]
                        }), (0, m.jsxs)("section", {
                            className: "jsx-575932941 services bords lficon section-padding position-re",
                            children: [(0, m.jsxs)("div", {
                                className: "jsx-575932941 container",
                                children: [(0, m.jsx)("div", {
                                    className: "jsx-575932941 row justify-content-center",
                                    children: (0, m.jsx)("div", {
                                        className: "jsx-575932941 col-lg-8 col-md-10",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 sec-head  text-center",
                                            children: [(0, m.jsx)("h6", {
                                                "data-wow-delay": ".5s",
                                                className: "jsx-575932941 wow fadeIn",
                                                children: "Best Features"
                                            }), (0, m.jsx)("h3", {
                                                className: "jsx-575932941 wow color-font",
                                                children: "Creative Agency, Corporate and Portfolio Template"
                                            })]
                                        })
                                    })
                                }), (0, m.jsxs)("div", {
                                    className: "jsx-575932941 row",
                                    children: [(0, m.jsx)("div", {
                                        "data-wow-delay": ".5s",
                                        className: "jsx-575932941 col-lg-6 wow fadeInLeft",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 item-box",
                                            children: [(0, m.jsx)("div", {
                                                className: "jsx-575932941",
                                                children: (0, m.jsx)("span", {
                                                    className: "jsx-575932941 icon pe-7s-paint-bucket"
                                                })
                                            }), (0, m.jsxs)("div", {
                                                className: "jsx-575932941 cont",
                                                children: [(0, m.jsx)("h6", {
                                                    className: "jsx-575932941",
                                                    children: "UI/UX Design"
                                                }), (0, m.jsx)("p", {
                                                    className: "jsx-575932941",
                                                    children: "We provide the best design by following the latest trends."
                                                })]
                                            })]
                                        })
                                    }), (0, m.jsx)("div", {
                                        "data-wow-delay": ".7s",
                                        className: "jsx-575932941 col-lg-6 wow fadeInLeft",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 item-box",
                                            children: [(0, m.jsx)("div", {
                                                className: "jsx-575932941",
                                                children: (0, m.jsx)("span", {
                                                    className: "jsx-575932941 icon pe-7s-phone"
                                                })
                                            }), (0, m.jsxs)("div", {
                                                className: "jsx-575932941 cont",
                                                children: [(0, m.jsx)("h6", {
                                                    className: "jsx-575932941",
                                                    children: "Easily Customizable"
                                                }), (0, m.jsx)("p", {
                                                    className: "jsx-575932941",
                                                    children: "Build and customize stunning pages in minutes."
                                                })]
                                            })]
                                        })
                                    }), (0, m.jsx)("div", {
                                        "data-wow-delay": ".9s",
                                        className: "jsx-575932941 col-lg-6 wow fadeInLeft",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 item-box",
                                            children: [(0, m.jsx)("div", {
                                                className: "jsx-575932941",
                                                children: (0, m.jsx)("span", {
                                                    className: "jsx-575932941 icon pe-7s-display1"
                                                })
                                            }), (0, m.jsxs)("div", {
                                                className: "jsx-575932941 cont",
                                                children: [(0, m.jsx)("h6", {
                                                    className: "jsx-575932941",
                                                    children: "One / Multi Page"
                                                }), (0, m.jsx)("p", {
                                                    className: "jsx-575932941",
                                                    children: "Choose the layout style that fits your need."
                                                })]
                                            })]
                                        })
                                    }), (0, m.jsx)("div", {
                                        "data-wow-delay": ".5s",
                                        className: "jsx-575932941 col-lg-6 wow fadeInLeft",
                                        children: (0, m.jsxs)("div", {
                                            className: "jsx-575932941 item-box",
                                            children: [(0, m.jsx)("div", {
                                                className: "jsx-575932941",
                                                children: (0, m.jsx)("span", {
                                                    className: "jsx-575932941 icon pe-7s-diskette"
                                                })
                                            }), (0, m.jsxs)("div", {
                                                className: "jsx-575932941 cont",
                                                children: [(0, m.jsx)("h6", {
                                                    className: "jsx-575932941",
                                                    children: "24/7 Support"
                                                }), (0, m.jsx)("p", {
                                                    className: "jsx-575932941",
                                                    children: "We commit to keep your site up-to-date."
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, m.jsx)("div", {
                                className: "jsx-575932941 line top right"
                            })]
                        }), (0, m.jsx)("section", {
                            style: {
                                backgroundImage: "url(/img/patrn.svg)"
                            },
                            className: "jsx-575932941 call-action section-padding bg-img",
                            children: (0, m.jsx)("div", {
                                className: "jsx-575932941 container",
                                children: (0, m.jsxs)("div", {
                                    className: "jsx-575932941 row",
                                    children: [(0, m.jsx)("div", {
                                        className: "jsx-575932941 col-md-8 col-lg-9",
                                        children: (0, m.jsx)("div", {
                                            className: "jsx-575932941 content sm-mb30",
                                            children: (0, m.jsxs)(x.Z, {
                                                children: [(0, m.jsx)("h6", {
                                                    "data-splitting": !0,
                                                    className: "jsx-575932941 wow words chars splitting",
                                                    children: "Purchase The Vie"
                                                }), (0, m.jsxs)("h2", {
                                                    "data-splitting": !0,
                                                    className: "jsx-575932941 wow words chars splitting",
                                                    children: ["and Make ", (0, m.jsx)("br", {
                                                        className: "jsx-575932941"
                                                    }), (0, m.jsx)("b", {
                                                        className: "jsx-575932941 back-color",
                                                        children: "Your Life Easier"
                                                    }), "."]
                                                })]
                                            })
                                        })
                                    }), (0, m.jsx)("div", {
                                        className: "jsx-575932941 col-md-4 col-lg-3 valign",
                                        children: (0, m.jsx)("a", {
                                            href: "#0",
                                            "data-wow-delay": ".5s",
                                            className: "jsx-575932941 butn bord curve wow fadeInUp",
                                            children: (0, m.jsx)("span", {
                                                className: "jsx-575932941",
                                                children: "Purchase Now"
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        41664: function(s, e, a) {
            s.exports = a(7942)
        },
        27884: function(s, e, a) {
            "use strict";
            e.default = d;
            var l, c = (l = a(67294)) && l.__esModule ? l : {
                    default: l
                },
                i = a(28122),
                n = a(39035);
            var t = c.default.useInsertionEffect || c.default.useLayoutEffect;

            function d(s) {
                var e = (0, i.useStyleRegistry)();
                return e ? "undefined" === typeof window ? (e.add(s), null) : (t((function() {
                    return e.add(s),
                        function() {
                            e.remove(s)
                        }
                }), [s.id, String(s.dynamic)]), null) : null
            }
            d.dynamic = function(s) {
                return s.map((function(s) {
                    var e = s[0],
                        a = s[1];
                    return (0, n.computeId)(e, a)
                })).join(" ")
            }
        },
        65988: function(s, e, a) {
            s.exports = a(27884)
        },
        97326: function(s, e, a) {
            "use strict";

            function l(s) {
                if (void 0 === s) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return s
            }
            a.d(e, {
                Z: function() {
                    return l
                }
            })
        },
        15671: function(s, e, a) {
            "use strict";

            function l(s, e) {
                if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            a.d(e, {
                Z: function() {
                    return l
                }
            })
        },
        43144: function(s, e, a) {
            "use strict";

            function l(s, e) {
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(s, l.key, l)
                }
            }

            function c(s, e, a) {
                return e && l(s.prototype, e), a && l(s, a), s
            }
            a.d(e, {
                Z: function() {
                    return c
                }
            })
        },
        61120: function(s, e, a) {
            "use strict";

            function l(s) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
                    return s.__proto__ || Object.getPrototypeOf(s)
                })(s)
            }
            a.d(e, {
                Z: function() {
                    return l
                }
            })
        },
        32531: function(s, e, a) {
            "use strict";

            function l(s, e) {
                return (l = Object.setPrototypeOf || function(s, e) {
                    return s.__proto__ = e, s
                })(s, e)
            }

            function c(s, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                s.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: s,
                        writable: !0,
                        configurable: !0
                    }
                }), e && l(s, e)
            }
            a.d(e, {
                Z: function() {
                    return c
                }
            })
        },
        20245: function(s, e, a) {
            "use strict";

            function l(s) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(s) {
                    return typeof s
                } : function(s) {
                    return s && "function" === typeof Symbol && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
                })(s)
            }
            a.d(e, {
                Z: function() {
                    return i
                }
            });
            var c = a(97326);

            function i(s, e) {
                if (e && ("object" === l(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, c.Z)(s)
            }
        },
        77625: function(s, e, a) {
            "use strict";

            function l(s, e) {
                (null == e || e > s.length) && (e = s.length);
                for (var a = 0, l = new Array(e); a < e; a++) l[a] = s[a];
                return l
            }

            function c(s, e) {
                return function(s) {
                    if (Array.isArray(s)) return s
                }(s) || function(s, e) {
                    var a = null == s ? null : "undefined" !== typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
                    if (null != a) {
                        var l, c, i = [],
                            n = !0,
                            t = !1;
                        try {
                            for (a = a.call(s); !(n = (l = a.next()).done) && (i.push(l.value), !e || i.length !== e); n = !0);
                        } catch (d) {
                            t = !0, c = d
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (t) throw c
                            }
                        }
                        return i
                    }
                }(s, e) || function(s, e) {
                    if (s) {
                        if ("string" === typeof s) return l(s, e);
                        var a = Object.prototype.toString.call(s).slice(8, -1);
                        return "Object" === a && s.constructor && (a = s.constructor.name), "Map" === a || "Set" === a ? Array.from(s) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? l(s, e) : void 0
                    }
                }(s, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            a.d(e, {
                Z: function() {
                    return c
                }
            })
        }
    }
]);