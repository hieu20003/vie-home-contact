(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1695], {
        32979: function(e, s) {
            "use strict";
            s.Z = function(e) {
                window.addEventListener("scroll", (function() {
                    var s = window.pageYOffset;
                    e && e.forEach((function(e) {
                        e.style.transform = "translate3d(0, " + -.2 * s + "px, 0)", e.style.opacity = 1 - s / 600
                    }))
                }))
            }
        },
        38037: function(e, s) {
            "use strict";
            s.Z = function() {
                document.querySelectorAll(".swiper-pagination") && document.querySelectorAll(".swiper-pagination").forEach((function(e) {
                    e.innerHTML = e.innerHTML.replace(" / ", "")
                }))
            }
        },
        48254: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return n
                }
            });
            a(67294);
            var i = a(41664),
                t = JSON.parse('{"bH":"About Us","TN":"Our Comapny","kQ":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.","BH":"/img/feat.jpg","hm":[{"id":1,"number":"3","letter":"K","stautsName":"Happy Clients"},{"id":2,"number":"14","letter":"K","stautsName":"Success Projects"}]}'),
                r = a(85893),
                n = function() {
                    return (0, r.jsx)("section", {
                        className: "about-us section-padding",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-5 valign md-mb50",
                                    children: (0, r.jsxs)("div", {
                                        className: "mb-50",
                                        children: [(0, r.jsx)("h6", {
                                            className: "fw-100 text-u ls10 mb-10",
                                            children: t.bH
                                        }), (0, r.jsx)("h3", {
                                            className: "fw-600 text-u ls1 mb-30 color-font",
                                            children: t.TN
                                        }), (0, r.jsx)("p", {
                                            children: t.kQ
                                        }), (0, r.jsx)(i.default, {
                                            href: "/about/about-dark",
                                            children: (0, r.jsx)("a", {
                                                className: "butn bord curve mt-30",
                                                children: (0, r.jsx)("span", {
                                                    children: "Read More"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "col-lg-7 img",
                                    children: [(0, r.jsx)("img", {
                                        src: t.BH,
                                        alt: ""
                                    }), (0, r.jsx)("div", {
                                        className: "stauts",
                                        children: t.hm.map((function(e) {
                                            return (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [(0, r.jsxs)("h4", {
                                                    children: [e.number, (0, r.jsx)("span", {
                                                        children: e.letter
                                                    })]
                                                }), (0, r.jsx)("h6", {
                                                    children: e.stautsName
                                                })]
                                            }, e.id)
                                        }))
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        72786: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(51514),
                t = a(41664),
                r = a(85893);
            s.Z = function(e) {
                var s = e.img;
                return (0, r.jsx)("section", {
                    className: "call-action section-padding sub-bg bg-img",
                    style: {
                        backgroundImage: "url(".concat(s || "/img/patrn.svg", ")")
                    },
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsxs)("div", {
                            className: "row",
                            children: [(0, r.jsx)("div", {
                                className: "col-md-8 col-lg-9",
                                children: (0, r.jsx)("div", {
                                    className: "content sm-mb30",
                                    children: (0, r.jsxs)(i.Z, {
                                        children: [(0, r.jsx)("h6", {
                                            className: "wow words chars splitting",
                                            "data-splitting": !0,
                                            children: "Let\u2019s Talk"
                                        }), (0, r.jsxs)("h2", {
                                            className: "wow words chars splitting",
                                            "data-splitting": !0,
                                            children: ["about your ", (0, r.jsx)("br", {}), " ", (0, r.jsx)("b", {
                                                className: "back-color",
                                                children: "next project"
                                            }), "."]
                                        })]
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-md-4 col-lg-3 valign",
                                children: (0, r.jsx)(t.default, {
                                    href: "/contact/contact-dark",
                                    children: (0, r.jsx)("a", {
                                        className: "butn bord curve wow fadeInUp",
                                        "data-wow-delay": ".5s",
                                        children: (0, r.jsx)("span", {
                                            children: "Get In Touch"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
        },
        57831: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(58004),
                t = a(51514),
                r = a(85893);
            s.Z = function(e) {
                var s = e.theme,
                    a = i.slice(0, i.length / 2),
                    n = i.slice(4, i.length);
                return (0, r.jsx)("section", {
                    className: "clients section-padding",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsxs)("div", {
                            className: "row",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-4 valign md-mb50",
                                children: (0, r.jsxs)("div", {
                                    className: "sec-head mb-0",
                                    children: [(0, r.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Best Features"
                                    }), (0, r.jsx)("h3", {
                                        className: "wow mb-20 color-font",
                                        children: "Our Clients"
                                    }), (0, r.jsx)("p", {
                                        children: "Our area of practice is quite wide: design, graphics, branding, development."
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-8",
                                children: (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: "row bord",
                                        children: a.map((function(e) {
                                            return (0, r.jsx)("div", {
                                                className: "col-md-3 col-6 brands",
                                                children: (0, r.jsx)("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": "".concat(1 == e.id ? ".3" : 2 == e.id ? ".6" : 3 == e.id ? ".8" : 4 == e.id ? ".3" : "", "s"),
                                                    children: (0, r.jsxs)("div", {
                                                        className: "img",
                                                        children: ["light" === s ? (0, r.jsx)("img", {
                                                            src: e.lightImage,
                                                            alt: ""
                                                        }) : (0, r.jsx)("img", {
                                                            src: e.darkImage,
                                                            alt: ""
                                                        }), (0, r.jsx)(t.Z, {
                                                            children: (0, r.jsx)("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": !0,
                                                                children: e.url
                                                            })
                                                        })]
                                                    })
                                                })
                                            }, e.id)
                                        }))
                                    }), (0, r.jsx)("div", {
                                        className: "row",
                                        children: n.map((function(e) {
                                            return (0, r.jsx)("div", {
                                                className: "".concat(5 == e.id || 6 == e.id ? "col-md-3 col-6 brands sm-mb30" : 7 == e.id || 8 == e.id ? "col-md-3 col-6 brands" : ""),
                                                children: (0, r.jsx)("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": "".concat(1 == e.id ? ".4" : 2 == e.id ? ".7" : 3 == e.id ? ".5" : 4 == e.id ? ".3" : "", "s"),
                                                    children: (0, r.jsxs)("div", {
                                                        className: "img",
                                                        children: ["light" === s ? (0, r.jsx)("img", {
                                                            src: e.lightImage,
                                                            alt: ""
                                                        }) : (0, r.jsx)("img", {
                                                            src: e.darkImage,
                                                            alt: ""
                                                        }), (0, r.jsx)(t.Z, {
                                                            children: (0, r.jsx)("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": !0,
                                                                children: e.url
                                                            })
                                                        })]
                                                    })
                                                })
                                            }, e.id)
                                        }))
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        19818: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return m
                }
            });
            var i = a(77625),
                t = a(67294),
                r = a(41664),
                n = JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]'),
                l = a(72873),
                c = a(88116),
                o = (a(53481), a(9320), a(30687), a(38037)),
                d = a(32979),
                u = a(85893);
            c.ZP.use([c.W_, c.tl, c.VS]);
            var m = function(e) {
                var s = e.sliderRef,
                    a = t.useState(!0),
                    c = (0, i.Z)(a, 2),
                    m = c[0],
                    h = c[1];
                t.useEffect((function() {
                    (0, d.Z)(document.querySelectorAll(".fixed-slider .caption")), setTimeout((function() {
                        (0, o.Z)(), h(!1)
                    }), 1e3)
                }), []);
                var p = t.useRef(null),
                    x = t.useRef(null),
                    j = t.useRef(null);
                return (0, u.jsx)("header", {
                    ref: s,
                    className: "slider slider-prlx fixed-slider text-center",
                    children: (0, u.jsxs)("div", {
                        className: "swiper-container parallax-slider",
                        children: [m ? null : (0, u.jsx)(l.t, {
                            speed: 1e3,
                            parallax: !0,
                            navigation: {
                                prevEl: p.current,
                                nextEl: x.current
                            },
                            pagination: {
                                type: "fraction",
                                clickable: !0,
                                el: j.current
                            },
                            onBeforeInit: function(e) {
                                e.params.navigation.prevEl = p.current, e.params.navigation.nextEl = x.current, e.params.pagination.el = j.current
                            },
                            onSwiper: function(e) {
                                setTimeout((function() {
                                    for (var s = 0; s < e.slides.length; s++) e.slides[s].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                                    e.params.navigation.prevEl = p.current, e.params.navigation.nextEl = x.current, e.params.pagination.el = j.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                                }))
                            },
                            className: "swiper-wrapper",
                            slidesPerView: 1,
                            children: n.map((function(e) {
                                return (0, u.jsx)(l.o, {
                                    className: "swiper-slide",
                                    children: (0, u.jsx)("div", {
                                        className: "bg-img valign",
                                        style: {
                                            backgroundImage: "url(".concat(e.image, ")")
                                        },
                                        "data-overlay-dark": "6",
                                        children: (0, u.jsx)("div", {
                                            className: "container",
                                            children: (0, u.jsx)("div", {
                                                className: "row justify-content-center",
                                                children: (0, u.jsx)("div", {
                                                    className: "col-lg-8 col-md-10",
                                                    children: (0, u.jsxs)("div", {
                                                        className: "caption center mt-30",
                                                        children: [(0, u.jsx)("h1", {
                                                            className: "color-font",
                                                            children: e.title
                                                        }), (null === e || void 0 === e ? void 0 : e.content) && (0, u.jsx)("p", {
                                                            children: e.content
                                                        }), (0, u.jsx)(r.default, {
                                                            href: "/about/about-dark",
                                                            children: (0, u.jsx)("a", {
                                                                className: "butn bord curve mt-30",
                                                                children: (0, u.jsx)("span", {
                                                                    children: "Look More"
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
                        }), (0, u.jsxs)("div", {
                            className: "setone setwo",
                            children: [(0, u.jsx)("div", {
                                ref: x,
                                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                children: (0, u.jsx)("i", {
                                    className: "fas fa-chevron-right"
                                })
                            }), (0, u.jsx)("div", {
                                ref: p,
                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                children: (0, u.jsx)("i", {
                                    className: "fas fa-chevron-left"
                                })
                            })]
                        }), (0, u.jsx)("div", {
                            ref: j,
                            className: "swiper-pagination top botm"
                        }), (0, u.jsxs)("div", {
                            className: "social-icon",
                            children: [(0, u.jsx)("a", {
                                href: "#0",
                                children: (0, u.jsx)("i", {
                                    className: "fab fa-facebook-f"
                                })
                            }), (0, u.jsx)("a", {
                                href: "#0",
                                children: (0, u.jsx)("i", {
                                    className: "fab fa-twitter"
                                })
                            }), (0, u.jsx)("a", {
                                href: "#0",
                                children: (0, u.jsx)("i", {
                                    className: "fab fa-behance"
                                })
                            }), (0, u.jsx)("a", {
                                href: "#0",
                                children: (0, u.jsx)("i", {
                                    className: "fab fa-pinterest-p"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        16257: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return d
                }
            });
            var i = a(67294),
                t = JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]'),
                r = a(51514),
                n = a(17857),
                l = a(33082),
                c = a.n(l),
                o = a(85893),
                d = function() {
                    return i.useEffect((function() {
                        console.clear()
                    })), (0, o.jsx)("section", {
                        className: "number-sec section-padding",
                        children: (0, o.jsxs)("div", {
                            className: "container",
                            children: [(0, o.jsx)("div", {
                                className: "row justify-content-center",
                                children: (0, o.jsx)("div", {
                                    className: "col-lg-8 col-md-10",
                                    children: (0, o.jsxs)("div", {
                                        className: "sec-head  text-center",
                                        children: [(0, o.jsx)("h6", {
                                            className: "wow fadeIn",
                                            "data-wow-delay": ".5s",
                                            children: "FUN FACTS"
                                        }), (0, o.jsx)("h3", {
                                            className: "wow color-font",
                                            children: "Pleasure in the job puts perfection in the work."
                                        })]
                                    })
                                })
                            }), (0, o.jsx)("div", {
                                className: "row",
                                children: t.map((function(e) {
                                    return (0, o.jsx)("div", {
                                        className: "col-md-4",
                                        children: (0, o.jsxs)("div", {
                                            className: "item no-bord sm-mb50",
                                            children: [(0, o.jsx)("span", {
                                                className: "icon ".concat(e.icon)
                                            }), (0, o.jsxs)("h3", {
                                                className: "",
                                                children: ["\xa0", (0, o.jsx)(n.ZP, {
                                                    redraw: !0,
                                                    end: e.value,
                                                    duration: "3",
                                                    children: function(e) {
                                                        var s = e.countUpRef,
                                                            a = e.start;
                                                        return (0, o.jsx)(c(), {
                                                            onChange: a,
                                                            delayedCall: !0,
                                                            children: (0, o.jsx)("span", {
                                                                className: "count",
                                                                ref: s
                                                            })
                                                        })
                                                    }
                                                })]
                                            }), (0, o.jsx)(r.Z, {
                                                children: (0, o.jsx)("p", {
                                                    className: "wow txt words chars splitting",
                                                    "data-splitting": !0,
                                                    children: e.content
                                                })
                                            })]
                                        })
                                    }, e.id)
                                }))
                            })]
                        })
                    })
                }
        },
        10513: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(95774),
                t = (a(2661), a(85893));
            s.Z = function(e) {
                var s = e.from,
                    a = e.theme,
                    r = {
                        path: {
                            stroke: "rgb(18, 194, 233)"
                        },
                        trail: {
                            stroke: a ? "dark" == a ? "#0f1013" : "#e5e5e5" : ""
                        },
                        text: {
                            fill: a ? "dark" == a ? "#ffffff" : "#4e4e4e" : "",
                            fontSize: "16px"
                        }
                    };
                return (0, t.jsx)("section", {
                    className: "skills-circle pt-50 pb-50 ".concat(s && "aboutPage" === s ? "sub-bg" : ""),
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "row",
                            children: (0, t.jsx)("div", {
                                className: "col-lg-7",
                                children: (0, t.jsx)("div", {
                                    className: "",
                                    children: (0, t.jsxs)("div", {
                                        className: "row",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-md-6",
                                            children: (0, t.jsxs)("div", {
                                                className: "item wow fadeInLeft",
                                                "data-wow-delay": ".6",
                                                children: [(0, t.jsx)("div", {
                                                    className: "skill",
                                                    children: (0, t.jsx)(i.Ip, {
                                                        value: 90,
                                                        strokeWidth: 2,
                                                        text: "".concat(90, "%"),
                                                        styles: r
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: "cont",
                                                    children: [(0, t.jsx)("span", {
                                                        children: "Project"
                                                    }), (0, t.jsx)("h6", {
                                                        children: "Consulting"
                                                    })]
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "col-md-6",
                                            children: (0, t.jsxs)("div", {
                                                className: "item wow fadeInLeft",
                                                "data-wow-delay": ".3",
                                                children: [(0, t.jsx)("div", {
                                                    className: "skill",
                                                    children: (0, t.jsx)(i.Ip, {
                                                        value: 75,
                                                        strokeWidth: 2,
                                                        text: "".concat(75, "%"),
                                                        styles: r
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: "cont",
                                                    children: [(0, t.jsx)("span", {
                                                        children: "App"
                                                    }), (0, t.jsx)("h6", {
                                                        children: "Development"
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        77233: function(e, s, a) {
            "use strict";
            var i = a(77625),
                t = a(67294),
                r = a(42984),
                n = a(72873),
                l = a(88116),
                c = a(41664),
                o = (a(53481), a(9320), a(30687), a(85893));
            l.ZP.use([l.pt, l.tl, l.W_]);
            s.Z = function() {
                var e = t.useRef(null),
                    s = t.useRef(null),
                    a = t.useState(!1),
                    l = (0, i.Z)(a, 2),
                    d = l[0],
                    u = l[1];
                return t.useEffect((function() {
                    u(!0)
                }), [d]), (0, o.jsx)("section", {
                    className: "work-carousel metro position-re",
                    children: (0, o.jsx)("div", {
                        className: "container-fluid",
                        children: (0, o.jsx)("div", {
                            className: "row",
                            children: (0, o.jsx)("div", {
                                className: "col-lg-12 no-padding",
                                children: (0, o.jsxs)("div", {
                                    className: "swiper-container",
                                    children: [(0, o.jsx)(n.t, {
                                        className: "swiper-wrapper",
                                        slidesPerView: 2,
                                        centeredSlides: !0,
                                        loop: !0,
                                        navigation: {
                                            prevEl: e.current,
                                            nextEl: s.current
                                        },
                                        onBeforeInit: function(a) {
                                            a.params.navigation.prevEl = e.current, a.params.navigation.nextEl = s.current
                                        },
                                        onSwiper: function(a) {
                                            setTimeout((function() {
                                                a.params.navigation.prevEl = e.current, a.params.navigation.nextEl = s.current, a.navigation.destroy(), a.navigation.init(), a.navigation.update()
                                            }))
                                        },
                                        autoplay: {
                                            delay: 2500,
                                            disableOnInteraction: !1
                                        },
                                        speed: 1e3,
                                        breakpoints: {
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            },
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            },
                                            767: {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            },
                                            991: {
                                                slidesPerView: 2
                                            }
                                        },
                                        children: d && r.map((function(e, s) {
                                            return (0, o.jsx)(n.o, {
                                                className: "swiper-slide",
                                                children: (0, o.jsxs)("div", {
                                                    className: "content wow noraidus fadeInUp",
                                                    "data-wow-delay": ".3s",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "item-img bg-img wow imago",
                                                        style: {
                                                            backgroundImage: "url(".concat(e.image, ")")
                                                        }
                                                    }), (0, o.jsxs)("div", {
                                                        className: "cont",
                                                        children: [(0, o.jsx)("h6", {
                                                            className: "color-font",
                                                            children: (0, o.jsx)("a", {
                                                                href: "#0",
                                                                children: e.title
                                                            })
                                                        }), (0, o.jsx)("h4", {
                                                            children: (0, o.jsx)(c.default, {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: e.secTex
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }, e.id)
                                        }))
                                    }), (0, o.jsx)("div", {
                                        ref: s,
                                        className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                        children: (0, o.jsx)("span", {
                                            className: "simple-btn right",
                                            children: "Next"
                                        })
                                    }), (0, o.jsx)("div", {
                                        ref: e,
                                        className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                        children: (0, o.jsx)("span", {
                                            className: "simple-btn",
                                            children: "Prev"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        64112: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(41664),
                t = a(85893);
            s.Z = function() {
                return (0, t.jsx)("section", {
                    className: "blog section-padding sub-bg",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, t.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, t.jsxs)("div", {
                                    className: "sec-head  text-center",
                                    children: [(0, t.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "RECENT ARTICLES"
                                    }), (0, t.jsx)("h3", {
                                        className: "wow color-font",
                                        children: "From our blogs."
                                    })]
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "row",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "item md-mb50 wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [(0, t.jsx)("div", {
                                        className: "img",
                                        children: (0, t.jsx)("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "cont",
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsxs)("div", {
                                                className: "info",
                                                children: [(0, t.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "date",
                                                        children: (0, t.jsxs)("span", {
                                                            children: [(0, t.jsx)("i", {
                                                                children: "06"
                                                            }), " August"]
                                                        })
                                                    })
                                                }), (0, t.jsx)("span", {
                                                    children: "/"
                                                }), (0, t.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "tag",
                                                        children: (0, t.jsx)("span", {
                                                            children: "WordPress"
                                                        })
                                                    })
                                                })]
                                            }), (0, t.jsx)("h5", {
                                                children: (0, t.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, t.jsx)("a", {
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "btn-more",
                                                children: (0, t.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "item md-mb50 wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: [(0, t.jsx)("div", {
                                        className: "img",
                                        children: (0, t.jsx)("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "cont",
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsxs)("div", {
                                                className: "info",
                                                children: [(0, t.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "date",
                                                        children: (0, t.jsxs)("span", {
                                                            children: [(0, t.jsx)("i", {
                                                                children: "06"
                                                            }), " August"]
                                                        })
                                                    })
                                                }), (0, t.jsx)("span", {
                                                    children: "/"
                                                }), (0, t.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "tag",
                                                        children: (0, t.jsx)("span", {
                                                            children: "WordPress"
                                                        })
                                                    })
                                                })]
                                            }), (0, t.jsx)("h5", {
                                                children: (0, t.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, t.jsx)("a", {
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "btn-more",
                                                children: (0, t.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, t.jsx)("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        2661: function() {},
        9320: function() {},
        95774: function(e, s, a) {
            "use strict";
            a.d(s, {
                Ip: function() {
                    return c
                }
            });
            var i = a(67294),
                t = function(e, s) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, s) {
                            e.__proto__ = s
                        } || function(e, s) {
                            for (var a in s) s.hasOwnProperty(a) && (e[a] = s[a])
                        })(e, s)
                };

            function r(e) {
                var s = e.className,
                    a = e.counterClockwise,
                    t = e.dashRatio,
                    r = e.pathRadius,
                    c = e.strokeWidth,
                    o = e.style;
                return (0, i.createElement)("path", {
                    className: s,
                    style: Object.assign({}, o, l({
                        pathRadius: r,
                        dashRatio: t,
                        counterClockwise: a
                    })),
                    d: n({
                        pathRadius: r,
                        counterClockwise: a
                    }),
                    strokeWidth: c,
                    fillOpacity: 0
                })
            }

            function n(e) {
                var s = e.pathRadius,
                    a = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + s + "\n      a " + s + "," + s + " " + a + " 1 1 0," + 2 * s + "\n      a " + s + "," + s + " " + a + " 1 1 0,-" + 2 * s + "\n    "
            }

            function l(e) {
                var s = e.counterClockwise,
                    a = e.dashRatio,
                    i = e.pathRadius,
                    t = 2 * Math.PI * i,
                    r = (1 - a) * t;
                return {
                    strokeDasharray: t + "px " + t + "px",
                    strokeDashoffset: (s ? -r : r) + "px"
                }
            }
            var c = function(e) {
                function s() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, s) {
                    function a() {
                        this.constructor = e
                    }
                    t(e, s), e.prototype = null === s ? Object.create(s) : (a.prototype = s.prototype, new a)
                }(s, e), s.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, s.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, s.prototype.getPathRatio = function() {
                    var e = this.props,
                        s = e.value,
                        a = e.minValue,
                        i = e.maxValue;
                    return (Math.min(Math.max(s, a), i) - a) / (i - a)
                }, s.prototype.render = function() {
                    var e = this.props,
                        s = e.circleRatio,
                        a = e.className,
                        t = e.classes,
                        n = e.counterClockwise,
                        l = e.styles,
                        c = e.strokeWidth,
                        o = e.text,
                        d = this.getPathRadius(),
                        u = this.getPathRatio();
                    return (0, i.createElement)("svg", {
                        className: t.root + " " + a,
                        style: l.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? (0, i.createElement)("circle", {
                        className: t.background,
                        style: l.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, (0, i.createElement)(r, {
                        className: t.trail,
                        counterClockwise: n,
                        dashRatio: s,
                        pathRadius: d,
                        strokeWidth: c,
                        style: l.trail
                    }), (0, i.createElement)(r, {
                        className: t.path,
                        counterClockwise: n,
                        dashRatio: u * s,
                        pathRadius: d,
                        strokeWidth: c,
                        style: l.path
                    }), o ? (0, i.createElement)("text", {
                        className: t.text,
                        style: l.text,
                        x: 50,
                        y: 50
                    }, o) : null)
                }, s.defaultProps = {
                    background: !1,
                    backgroundPadding: 0,
                    circleRatio: 1,
                    classes: {
                        root: "CircularProgressbar",
                        trail: "CircularProgressbar-trail",
                        path: "CircularProgressbar-path",
                        text: "CircularProgressbar-text",
                        background: "CircularProgressbar-background"
                    },
                    counterClockwise: !1,
                    className: "",
                    maxValue: 100,
                    minValue: 0,
                    strokeWidth: 8,
                    styles: {
                        root: {},
                        trail: {},
                        path: {},
                        text: {},
                        background: {}
                    },
                    text: ""
                }, s
            }(i.Component)
        },
        42984: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"id":1,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/01.jpg","slug":"/project-details2/project-details2-dark"},{"id":2,"title":"art & illustration","secTex":"Inspiring new space","image":"/img/portfolio/metro/02.jpg","slug":"/project-details2/project-details2-dark"},{"id":3,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/03.jpg","slug":"/project-details2/project-details2-dark"},{"id":4,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/04.jpg","slug":"/project-details2/project-details2-dark"},{"id":5,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/05.jpg","slug":"/project-details2/project-details2-dark"}]')
        }
    }
]);