"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2120], {
        90850: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return r
                }
            });
            var i = 0,
                l = function(e, s) {
                    setInterval(function(e) {
                        (i = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (i += 1, e.style.opacity = i) : clearInterval(0)
                    }(e), s)
                };
            var n = function(e, s) {
                setInterval(function(e) {
                    (i = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (i = 0, e.style.opacity = i) : clearInterval(0)
                }(e), s)
            };
            var r = function() {
                var e = document.createElement("div");
                e.classList.add("div-tooltip-tit"), document.body.appendChild(e);
                var s = document.createElement("div");
                s.classList.add("div-tooltip-sub"), document.body.appendChild(s), document.querySelectorAll("[data-tooltip-tit]").forEach((function(s) {
                    e = document.querySelector(".div-tooltip-tit"), s.addEventListener("mouseover", (function() {
                        e.innerText = s.getAttribute("data-tooltip-tit")
                    })), s.addEventListener("mousemove", (function(s) {
                        l(e, 800), e.style.top = s.pageY + 10 + "px", e.style.left = s.pageX + 20 + "px", e.style.padding = "0px 10px"
                    })), s.addEventListener("mouseleave", (function() {
                        n(e, 800), e.style.padding = 0
                    }))
                })), document.querySelectorAll("[data-tooltip-sub]").forEach((function(e) {
                    s = document.querySelector(".div-tooltip-sub"), e.addEventListener("mouseover", (function() {
                        s.innerText = e.getAttribute("data-tooltip-sub")
                    })), e.addEventListener("mousemove", (function(e) {
                        l(s, 800), s.style.top = e.pageY - 15 + "px", s.style.left = e.pageX + 30 + "px", s.style.padding = "5px 10px"
                    })), e.addEventListener("mouseleave", (function() {
                        n(s, 800), s.style.padding = 0
                    }))
                }))
            }
        },
        15602: function(e, s, a) {
            a(67294);
            var i = a(85893);
            s.Z = function() {
                return (0, i.jsx)("header", {
                    className: "slider-stwo valign position-re",
                    children: (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "row",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-5",
                                children: (0, i.jsx)("div", {
                                    className: "img",
                                    children: (0, i.jsx)("img", {
                                        src: "/img/slid/002.jpg",
                                        alt: ""
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-lg-7 valign",
                                children: (0, i.jsxs)("div", {
                                    className: "cont",
                                    children: [(0, i.jsx)("div", {
                                        className: "sub-title mb-5",
                                        children: (0, i.jsx)("h6", {
                                            children: "Digital Consulting Agency"
                                        })
                                    }), (0, i.jsx)("h1", {
                                        className: "mb-10 fw-600",
                                        children: "Unique Business Consulting."
                                    }), (0, i.jsxs)("p", {
                                        children: ["We help our clients succeed by creating brand identities,", (0, i.jsx)("br", {}), " digital experiences, and print materials."]
                                    }), (0, i.jsxs)("ul", {
                                        children: [(0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("div", {
                                                children: (0, i.jsx)("span", {
                                                    className: "icon pe-7s-arc",
                                                    children: (0, i.jsx)("span", {
                                                        className: "bord"
                                                    })
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, i.jsx)("h6", {
                                                    children: "Branding"
                                                }), (0, i.jsx)("p", {
                                                    children: "It is a long established fact that a reader will be distracted."
                                                })]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("div", {
                                                children: (0, i.jsx)("span", {
                                                    className: "icon pe-7s-help2",
                                                    children: (0, i.jsx)("span", {
                                                        className: "bord"
                                                    })
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "cont",
                                                children: [(0, i.jsx)("h6", {
                                                    children: "Marketing"
                                                }), (0, i.jsx)("p", {
                                                    children: "It is a long established fact that a reader will be distracted."
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        66504: function(e, s, a) {
            var i = a(67294),
                l = a(51514),
                n = a(17857),
                r = a(33082),
                t = a.n(r),
                c = a(85893);
            s.Z = function() {
                return i.useEffect((function() {
                    console.clear()
                })), (0, c.jsx)("section", {
                    className: "block-sec section-padding",
                    children: (0, c.jsx)("div", {
                        className: "container",
                        children: (0, c.jsx)("div", {
                            className: "number-sec",
                            children: (0, c.jsxs)("div", {
                                className: "row",
                                children: [(0, c.jsx)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: (0, c.jsxs)("div", {
                                        className: "item md-mb50",
                                        children: [(0, c.jsx)("span", {
                                            className: "icon pe-7s-smile"
                                        }), (0, c.jsxs)("h3", {
                                            className: "custom-font",
                                            children: ["\xa0", (0, c.jsx)(n.ZP, {
                                                redraw: !0,
                                                end: 2400,
                                                duration: "3",
                                                children: function(e) {
                                                    var s = e.countUpRef,
                                                        a = e.start;
                                                    return (0, c.jsx)(t(), {
                                                        onChange: a,
                                                        delayedCall: !0,
                                                        children: (0, c.jsx)("span", {
                                                            className: "count",
                                                            ref: s
                                                        })
                                                    })
                                                }
                                            })]
                                        }), (0, c.jsx)(l.Z, {
                                            children: (0, c.jsx)("p", {
                                                className: "wow words chars splitting txt",
                                                "data-splitting": !0,
                                                children: "Happy Clients"
                                            })
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: (0, c.jsxs)("div", {
                                        className: "item md-mb50",
                                        children: [(0, c.jsx)("span", {
                                            className: "icon pe-7s-portfolio"
                                        }), (0, c.jsxs)("h3", {
                                            className: "custom-font",
                                            children: ["\xa0", (0, c.jsx)(n.ZP, {
                                                redraw: !0,
                                                end: 133,
                                                duration: "3",
                                                children: function(e) {
                                                    var s = e.countUpRef,
                                                        a = e.start;
                                                    return (0, c.jsx)(t(), {
                                                        onChange: a,
                                                        delayedCall: !0,
                                                        children: (0, c.jsx)("span", {
                                                            className: "count",
                                                            ref: s
                                                        })
                                                    })
                                                }
                                            })]
                                        }), (0, c.jsx)(l.Z, {
                                            children: (0, c.jsx)("p", {
                                                className: "wow txt words chars splitting ",
                                                "data-splitting": !0,
                                                children: "Compleate Projects"
                                            })
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: (0, c.jsxs)("div", {
                                        className: "item sm-mb50",
                                        children: [(0, c.jsx)("span", {
                                            className: "icon pe-7s-cloud-download"
                                        }), (0, c.jsxs)("h3", {
                                            className: "custom-font",
                                            children: ["\xa0", (0, c.jsx)(n.ZP, {
                                                redraw: !0,
                                                end: 254,
                                                duration: "3",
                                                children: function(e) {
                                                    var s = e.countUpRef,
                                                        a = e.start;
                                                    return (0, c.jsx)(t(), {
                                                        onChange: a,
                                                        delayedCall: !0,
                                                        children: (0, c.jsx)("span", {
                                                            className: "count",
                                                            ref: s
                                                        })
                                                    })
                                                }
                                            }), "k"]
                                        }), (0, c.jsx)(l.Z, {
                                            children: (0, c.jsx)("p", {
                                                className: "wow txt words chars splitting",
                                                "data-splitting": !0,
                                                children: "Files Downloaded"
                                            })
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: (0, c.jsxs)("div", {
                                        className: "item",
                                        children: [(0, c.jsx)("span", {
                                            className: "icon pe-7s-medal"
                                        }), (0, c.jsxs)("h3", {
                                            className: "custom-font",
                                            children: ["\xa0", (0, c.jsx)(n.ZP, {
                                                redraw: !0,
                                                end: 46,
                                                duration: "3",
                                                children: function(e) {
                                                    var s = e.countUpRef,
                                                        a = e.start;
                                                    return (0, c.jsx)(t(), {
                                                        onChange: a,
                                                        delayedCall: !0,
                                                        children: (0, c.jsx)("span", {
                                                            className: "count",
                                                            ref: s
                                                        })
                                                    })
                                                }
                                            })]
                                        }), (0, c.jsx)(l.Z, {
                                            children: (0, c.jsx)("p", {
                                                className: "wow txt words chars splitting",
                                                "data-splitting": !0,
                                                children: "Award Win"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        98633: function(e, s, a) {
            a(67294);
            var i = a(41664),
                l = a(85893);
            s.Z = function() {
                return (0, l.jsxs)("section", {
                    className: "services section-padding position-re",
                    children: [(0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, l.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, l.jsxs)("div", {
                                    className: "sec-head  text-center",
                                    children: [(0, l.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Best Features"
                                    }), (0, l.jsx)("h3", {
                                        className: "wow color-font",
                                        children: "We are a new digital product development agency"
                                    })]
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "row",
                            children: [(0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: (0, l.jsxs)("div", {
                                    className: "step-item xtop",
                                    children: [(0, l.jsx)("span", {
                                        className: "icon pe-7s-gleam"
                                    }), (0, l.jsx)("h6", {
                                        children: "Digital Marketing"
                                    }), (0, l.jsx)("p", {
                                        children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".6s",
                                children: (0, l.jsxs)("div", {
                                    className: "step-item xcolor",
                                    children: [(0, l.jsx)("span", {
                                        className: "icon pe-7s-phone"
                                    }), (0, l.jsx)("h6", {
                                        children: "Web & App Development"
                                    }), (0, l.jsx)("p", {
                                        children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".9s",
                                children: (0, l.jsxs)("div", {
                                    className: "step-item xbottom",
                                    children: [(0, l.jsx)("span", {
                                        className: "icon pe-7s-magic-wand"
                                    }), (0, l.jsx)("h6", {
                                        children: "Graphic Design"
                                    }), (0, l.jsx)("p", {
                                        children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
                                    })]
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "smore",
                            children: [(0, l.jsx)(i.default, {
                                href: "/about/about-dark",
                                children: (0, l.jsx)("a", {
                                    children: "Discover More"
                                })
                            }), (0, l.jsx)("i", {
                                className: "fas fa-long-arrow-alt-right"
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "line top left"
                    }), (0, l.jsx)("div", {
                        className: "line bottom right"
                    })]
                })
            }
        },
        51514: function(e, s, a) {
            var i = a(15671),
                l = a(43144),
                n = a(97326),
                r = a(32531),
                t = a(20245),
                c = a(61120),
                d = a(4942),
                o = a(67294),
                m = a(85893);

            function h(e) {
                var s = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, i = (0, c.Z)(e);
                    if (s) {
                        var l = (0, c.Z)(this).constructor;
                        a = Reflect.construct(i, arguments, l)
                    } else a = i.apply(this, arguments);
                    return (0, t.Z)(this, a)
                }
            }
            var x = function(e) {
                (0, r.Z)(a, e);
                var s = h(a);

                function a() {
                    var e;
                    (0, i.Z)(this, a);
                    for (var l = arguments.length, r = new Array(l), t = 0; t < l; t++) r[t] = arguments[t];
                    return e = s.call.apply(s, [this].concat(r)), (0, d.Z)((0, n.Z)(e), "target", o.createRef()), (0, d.Z)((0, n.Z)(e), "split", (function() {
                        e.target.current && Splitting({
                            target: e.target.current
                        })
                    })), (0, d.Z)((0, n.Z)(e), "componentDidMount", e.split), (0, d.Z)((0, n.Z)(e), "componentDidUpdate", e.split), e
                }
                return (0, l.Z)(a, [{
                    key: "render",
                    value: function() {
                        return (0, m.jsx)("div", {
                            ref: this.target,
                            children: this.props.children
                        })
                    }
                }]), a
            }(o.Component);
            s.Z = x
        },
        67397: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return c
                }
            });
            var i = a(67294),
                l = function() {
                    var e = document.querySelector(".team-crv");
                    e && window.addEventListener("scroll", (function() {
                        document.querySelectorAll(".skill-progress .progres").forEach((function(s) {
                            var a = s.getAttribute("data-value");
                            window.pageYOffset > e.offsetTop - 200 && (s.style.width = a)
                        }))
                    }))
                },
                n = a(90850),
                r = JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}'),
                t = a(85893),
                c = function() {
                    return i.useEffect((function() {
                        l(), setTimeout((function() {
                            (0, n.Z)()
                        }), 1e3)
                    }), []), (0, t.jsx)("div", {
                        className: "team-crv section-padding",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-5 valign",
                                    children: (0, t.jsxs)("div", {
                                        className: "content wow fadeInUp md-mb30",
                                        "data-wow-delay": ".5s",
                                        children: [(0, t.jsxs)("div", {
                                            className: "sub-title",
                                            children: [(0, t.jsx)("h6", {
                                                children: "Our Staff"
                                            }), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {})]
                                        }), (0, t.jsx)("h3", {
                                            className: "co-tit mb-15",
                                            children: "We help to create visual strategies."
                                        }), (0, t.jsx)("p", {
                                            children: "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                        }), (0, t.jsx)("div", {
                                            className: "skills-box mt-40",
                                            children: r.n.map((function(e) {
                                                return (0, t.jsxs)("div", {
                                                    className: "skill-item",
                                                    children: [(0, t.jsx)("h6", {
                                                        className: "custom-font",
                                                        children: e.text
                                                    }), (0, t.jsx)("div", {
                                                        className: "skill-progress",
                                                        children: (0, t.jsx)("div", {
                                                            className: "progres",
                                                            "data-value": e.value
                                                        })
                                                    })]
                                                }, e.id)
                                            }))
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-6 offset-lg-1",
                                    children: (0, t.jsx)("div", {
                                        className: "img-box",
                                        children: (0, t.jsxs)("div", {
                                            className: "row",
                                            children: [(0, t.jsx)("div", {
                                                className: "col-sm-6 toright",
                                                children: (0, t.jsx)("div", {
                                                    className: "full-width",
                                                    children: r.f.slice(0, 2).map((function(e, s) {
                                                        return (0, t.jsx)("div", {
                                                            children: (0, t.jsx)("div", {
                                                                className: "img sizxl ".concat(s + 1 != r.f.slice(0, 2).length ? "mb-30" : null),
                                                                "data-tooltip-tit": e.title,
                                                                "data-tooltip-sub": e.sub,
                                                                children: (0, t.jsx)("img", {
                                                                    src: e.image,
                                                                    alt: "",
                                                                    className: "imago wow"
                                                                })
                                                            })
                                                        }, e.id)
                                                    }))
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "col-sm-6 toleft valign",
                                                children: (0, t.jsx)("div", {
                                                    className: "full-width text-left",
                                                    children: r.f.slice(2, 4).map((function(e, s) {
                                                        return (0, t.jsx)("div", {
                                                            children: (0, t.jsx)("div", {
                                                                className: "img sizxl ".concat(s + 1 != r.f.slice(2, 4).length ? "mb-30" : null),
                                                                "data-tooltip-tit": e.title,
                                                                "data-tooltip-sub": e.sub,
                                                                children: (0, t.jsx)("img", {
                                                                    src: e.image,
                                                                    alt: "",
                                                                    className: "imago wow"
                                                                })
                                                            })
                                                        }, e.id)
                                                    }))
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        66549: function(e, s, a) {
            var i = a(77625),
                l = a(9008),
                n = a(41664),
                r = a(67294),
                t = a(72873),
                c = a(88116),
                d = (a(53481), a(30687), a(85893));
            c.ZP.use([c.W_]);
            s.Z = function(e) {
                e.sliderRef;
                var s = r.useState(!0),
                    a = (0, i.Z)(s, 2),
                    c = a[0],
                    o = a[1];
                r.useEffect((function() {
                    setTimeout((function() {
                        o(!1)
                    }))
                }), []);
                var m = r.useRef(null),
                    h = r.useRef(null);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(l.default, {
                        children: (0, d.jsx)("link", {
                            rel: "stylesheet",
                            href: "/css/ionicons.min.css"
                        })
                    }), (0, d.jsx)("section", {
                        className: "work-carousel section-padding caroul position-re pb-0",
                        children: (0, d.jsxs)("div", {
                            className: "container-fluid",
                            children: [(0, d.jsx)("div", {
                                className: "row justify-content-center",
                                children: (0, d.jsx)("div", {
                                    className: "col-lg-8 col-md-10",
                                    children: (0, d.jsxs)("div", {
                                        className: "sec-head  text-center",
                                        children: [(0, d.jsx)("h6", {
                                            className: "wow fadeIn",
                                            "data-wow-delay": ".5s",
                                            children: "Latest Work"
                                        }), (0, d.jsxs)("h3", {
                                            className: "wow color-font",
                                            children: ["Our Recent Web Design & ", (0, d.jsx)("br", {}), " Some Past Projects."]
                                        })]
                                    })
                                })
                            }), (0, d.jsx)("div", {
                                className: "row",
                                children: (0, d.jsx)("div", {
                                    className: "col-lg-12 no-padding",
                                    children: (0, d.jsx)("div", {
                                        className: "swiper-container",
                                        children: (0, d.jsxs)("div", {
                                            className: "swiper-container ",
                                            children: [c ? null : (0, d.jsxs)(t.t, {
                                                speed: 1e3,
                                                loop: !0,
                                                spaceBetween: 0,
                                                breakpoints: {
                                                    320: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 0
                                                    },
                                                    767: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 0
                                                    },
                                                    991: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 0
                                                    },
                                                    1024: {
                                                        slidesPerView: 4,
                                                        spaceBetween: 0
                                                    }
                                                },
                                                navigation: {
                                                    prevEl: m.current,
                                                    nextEl: h.current
                                                },
                                                onBeforeInit: function(e) {
                                                    e.params.navigation.prevEl = m.current, e.params.navigation.nextEl = h.current
                                                },
                                                onSwiper: function(e) {
                                                    setTimeout((function() {
                                                        e.params.navigation.prevEl = m.current, e.params.navigation.nextEl = h.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update()
                                                    }))
                                                },
                                                className: "swiper-wrapper",
                                                slidesPerView: 1,
                                                children: [(0, d.jsx)(t.o, {
                                                    className: "swiper-slide",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "content wow fadeInUp",
                                                        "data-wow-delay": ".3s",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: "url(/img/portfolio/curs/1.jpg)"
                                                            }
                                                        }), (0, d.jsxs)("div", {
                                                            className: "cont bgbox",
                                                            children: [(0, d.jsx)("h6", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/works2/works2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "art & illustration"
                                                                    })
                                                                })
                                                            }), (0, d.jsx)("h4", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/project-details2/project-details2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "Innovation and Crafts."
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, d.jsx)(t.o, {
                                                    className: "swiper-slide",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "content wow fadeInUp",
                                                        "data-wow-delay": ".3s",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: "url(/img/portfolio/curs/2.jpg)"
                                                            }
                                                        }), (0, d.jsxs)("div", {
                                                            className: "cont bgbox",
                                                            children: [(0, d.jsx)("h6", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/works2/works2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "art & illustration"
                                                                    })
                                                                })
                                                            }), (0, d.jsx)("h4", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/project-details2/project-details2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "Inspiring new space."
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, d.jsx)(t.o, {
                                                    className: "swiper-slide",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "content wow fadeInUp",
                                                        "data-wow-delay": ".3s",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: "url(/img/portfolio/curs/3.jpg)"
                                                            }
                                                        }), (0, d.jsxs)("div", {
                                                            className: "cont bgbox",
                                                            children: [(0, d.jsx)("h6", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/works2/works2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "art & illustration"
                                                                    })
                                                                })
                                                            }), (0, d.jsx)("h4", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/project-details2/project-details2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "Natural plus modern."
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, d.jsx)(t.o, {
                                                    className: "swiper-slide",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "content wow fadeInUp",
                                                        "data-wow-delay": ".3s",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: "url(/img/portfolio/curs/4.jpg)"
                                                            }
                                                        }), (0, d.jsxs)("div", {
                                                            className: "cont bgbox",
                                                            children: [(0, d.jsx)("h6", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/works2/works2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "art & illustration"
                                                                    })
                                                                })
                                                            }), (0, d.jsx)("h4", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/project-details2/project-details2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "Innovation and Crafts."
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, d.jsx)(t.o, {
                                                    className: "swiper-slide",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "content wow fadeInUp",
                                                        "data-wow-delay": ".3s",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "item-img bg-img wow imago",
                                                            style: {
                                                                backgroundImage: "url(/img/portfolio/curs/5.jpg)"
                                                            }
                                                        }), (0, d.jsxs)("div", {
                                                            className: "cont bgbox",
                                                            children: [(0, d.jsx)("h6", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/works2/works2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "art & illustration"
                                                                    })
                                                                })
                                                            }), (0, d.jsx)("h4", {
                                                                children: (0, d.jsx)(n.default, {
                                                                    href: "/project-details2/project-details2-dark",
                                                                    children: (0, d.jsx)("a", {
                                                                        children: "Inspiring new space."
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            }), (0, d.jsx)("div", {
                                                ref: h,
                                                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                                children: (0, d.jsx)("i", {
                                                    className: "ion-ios-arrow-right"
                                                })
                                            }), (0, d.jsx)("div", {
                                                ref: m,
                                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                                children: (0, d.jsx)("i", {
                                                    className: "ion-ios-arrow-left"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        49651: function(e, s, a) {
            a(67294);
            var i = a(41664),
                l = a(85893);
            s.Z = function() {
                return (0, l.jsxs)("section", {
                    className: "blog-grid section-padding position-re",
                    children: [(0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, l.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, l.jsxs)("div", {
                                    className: "sec-head text-center",
                                    children: [(0, l.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "RECENT ARTICLES"
                                    }), (0, l.jsx)("h3", {
                                        className: "wow color-font",
                                        children: "From our blogs."
                                    })]
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "row",
                            children: [(0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: (0, l.jsx)("div", {
                                    className: "item bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/1.jpg)"
                                    },
                                    children: (0, l.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, l.jsx)(i.default, {
                                            href: "/blog/blog-dark",
                                            children: (0, l.jsx)("a", {
                                                className: "date",
                                                children: (0, l.jsxs)("span", {
                                                    children: [(0, l.jsx)("i", {
                                                        children: "06"
                                                    }), " Aug 2022"]
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "info",
                                            children: [(0, l.jsx)("a", {
                                                href: "#0",
                                                className: "author",
                                                children: (0, l.jsx)("span", {
                                                    children: "by / Admin"
                                                })
                                            }), (0, l.jsx)(i.default, {
                                                href: "/blog/blog-dark",
                                                children: (0, l.jsx)("a", {
                                                    className: "tag",
                                                    children: (0, l.jsx)("span", {
                                                        children: "WordPress"
                                                    })
                                                })
                                            })]
                                        }), (0, l.jsx)("h6", {
                                            children: (0, l.jsx)(i.default, {
                                                href: "/blog-details/blog-details-dark",
                                                children: (0, l.jsx)("a", {
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "btn-more",
                                            children: (0, l.jsx)(i.default, {
                                                href: "/blog-details/blog-details-dark",
                                                children: (0, l.jsx)("a", {
                                                    className: "simple-btn",
                                                    children: "Read More"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".6s",
                                children: (0, l.jsx)("div", {
                                    className: "item active bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/2.jpg)"
                                    },
                                    children: (0, l.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, l.jsx)(i.default, {
                                            href: "/blog/blog-dark",
                                            children: (0, l.jsx)("a", {
                                                className: "date",
                                                children: (0, l.jsxs)("span", {
                                                    children: [(0, l.jsx)("i", {
                                                        children: "06"
                                                    }), " Aug 2022"]
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "info",
                                            children: [(0, l.jsx)("a", {
                                                href: "#0",
                                                className: "author",
                                                children: (0, l.jsx)("span", {
                                                    children: "by / Admin"
                                                })
                                            }), (0, l.jsx)(i.default, {
                                                href: "/blog/blog-dark",
                                                children: (0, l.jsx)("a", {
                                                    className: "tag",
                                                    children: (0, l.jsx)("span", {
                                                        children: "WordPress"
                                                    })
                                                })
                                            })]
                                        }), (0, l.jsx)("h6", {
                                            children: (0, l.jsx)(i.default, {
                                                href: "/blog-details/blog-details-dark",
                                                children: (0, l.jsx)("a", {
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "btn-more",
                                            children: (0, l.jsx)(i.default, {
                                                href: "/blog-details/blog-details-dark",
                                                children: (0, l.jsx)("a", {
                                                    className: "simple-btn",
                                                    children: "Read More"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".9s",
                                children: (0, l.jsx)("div", {
                                    className: "item bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/3.jpg)"
                                    },
                                    children: (0, l.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, l.jsx)(i.default, {
                                            href: "/blog/blog-dark",
                                            children: (0, l.jsx)("a", {
                                                className: "date",
                                                children: (0, l.jsxs)("span", {
                                                    children: [(0, l.jsx)("i", {
                                                        children: "06"
                                                    }), " Aug 2022"]
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "info",
                                            children: [(0, l.jsx)("a", {
                                                href: "#0",
                                                className: "author",
                                                children: (0, l.jsx)("span", {
                                                    children: "by / Admin"
                                                })
                                            }), (0, l.jsx)(i.default, {
                                                href: "/blog/blog-dark",
                                                children: (0, l.jsx)("a", {
                                                    className: "tag",
                                                    children: (0, l.jsx)("span", {
                                                        children: "WordPress"
                                                    })
                                                })
                                            })]
                                        }), (0, l.jsx)("h6", {
                                            children: (0, l.jsx)(i.default, {
                                                href: "/blog-details/blog-details-dark",
                                                children: (0, l.jsx)("a", {
                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                })
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "btn-more",
                                            children: (0, l.jsx)(i.default, {
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
                        })]
                    }), (0, l.jsx)("div", {
                        className: "line top right"
                    }), (0, l.jsx)("div", {
                        className: "line bottom left"
                    })]
                })
            }
        }
    }
]);