(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4161], {
        38037: function(e, a) {
            "use strict";
            a.Z = function() {
                document.querySelectorAll(".swiper-pagination") && document.querySelectorAll(".swiper-pagination").forEach((function(e) {
                    e.innerHTML = e.innerHTML.replace(" / ", "")
                }))
            }
        },
        66025: function(e, a, i) {
            "use strict";
            i.d(a, {
                $: function() {
                    return s
                },
                D: function() {
                    return t
                }
            });
            var s = function() {
                    var e = document.getElementsByClassName("thumparallax");
                    e && new simpleParallax(e, {
                        delay: 1,
                        scale: 1.1
                    })
                },
                t = function() {
                    var e = document.getElementsByClassName("thumparallax-down");
                    e && new simpleParallax(e, {
                        orientation: "down",
                        delay: 1,
                        scale: 1.1
                    })
                }
        },
        90850: function(e, a, i) {
            "use strict";
            i.d(a, {
                Z: function() {
                    return l
                }
            });
            var s = 0,
                t = function(e, a) {
                    setInterval(function(e) {
                        (s = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (s += 1, e.style.opacity = s) : clearInterval(0)
                    }(e), a)
                };
            var n = function(e, a) {
                setInterval(function(e) {
                    (s = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (s = 0, e.style.opacity = s) : clearInterval(0)
                }(e), a)
            };
            var l = function() {
                var e = document.createElement("div");
                e.classList.add("div-tooltip-tit"), document.body.appendChild(e);
                var a = document.createElement("div");
                a.classList.add("div-tooltip-sub"), document.body.appendChild(a), document.querySelectorAll("[data-tooltip-tit]").forEach((function(a) {
                    e = document.querySelector(".div-tooltip-tit"), a.addEventListener("mouseover", (function() {
                        e.innerText = a.getAttribute("data-tooltip-tit")
                    })), a.addEventListener("mousemove", (function(a) {
                        t(e, 800), e.style.top = a.pageY + 10 + "px", e.style.left = a.pageX + 20 + "px", e.style.padding = "0px 10px"
                    })), a.addEventListener("mouseleave", (function() {
                        n(e, 800), e.style.padding = 0
                    }))
                })), document.querySelectorAll("[data-tooltip-sub]").forEach((function(e) {
                    a = document.querySelector(".div-tooltip-sub"), e.addEventListener("mouseover", (function() {
                        a.innerText = e.getAttribute("data-tooltip-sub")
                    })), e.addEventListener("mousemove", (function(e) {
                        t(a, 800), a.style.top = e.pageY - 15 + "px", a.style.left = e.pageX + 30 + "px", a.style.padding = "5px 10px"
                    })), e.addEventListener("mouseleave", (function() {
                        n(a, 800), a.style.padding = 0
                    }))
                }))
            }
        },
        67397: function(e, a, i) {
            "use strict";
            i.d(a, {
                Z: function() {
                    return c
                }
            });
            var s = i(67294),
                t = function() {
                    var e = document.querySelector(".team-crv");
                    e && window.addEventListener("scroll", (function() {
                        document.querySelectorAll(".skill-progress .progres").forEach((function(a) {
                            var i = a.getAttribute("data-value");
                            window.pageYOffset > e.offsetTop - 200 && (a.style.width = i)
                        }))
                    }))
                },
                n = i(90850),
                l = JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}'),
                r = i(85893),
                c = function() {
                    return s.useEffect((function() {
                        t(), setTimeout((function() {
                            (0, n.Z)()
                        }), 1e3)
                    }), []), (0, r.jsx)("div", {
                        className: "team-crv section-padding",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-5 valign",
                                    children: (0, r.jsxs)("div", {
                                        className: "content wow fadeInUp md-mb30",
                                        "data-wow-delay": ".5s",
                                        children: [(0, r.jsxs)("div", {
                                            className: "sub-title",
                                            children: [(0, r.jsx)("h6", {
                                                children: "Our Staff"
                                            }), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                                        }), (0, r.jsx)("h3", {
                                            className: "co-tit mb-15",
                                            children: "We help to create visual strategies."
                                        }), (0, r.jsx)("p", {
                                            children: "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                        }), (0, r.jsx)("div", {
                                            className: "skills-box mt-40",
                                            children: l.n.map((function(e) {
                                                return (0, r.jsxs)("div", {
                                                    className: "skill-item",
                                                    children: [(0, r.jsx)("h6", {
                                                        className: "custom-font",
                                                        children: e.text
                                                    }), (0, r.jsx)("div", {
                                                        className: "skill-progress",
                                                        children: (0, r.jsx)("div", {
                                                            className: "progres",
                                                            "data-value": e.value
                                                        })
                                                    })]
                                                }, e.id)
                                            }))
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-6 offset-lg-1",
                                    children: (0, r.jsx)("div", {
                                        className: "img-box",
                                        children: (0, r.jsxs)("div", {
                                            className: "row",
                                            children: [(0, r.jsx)("div", {
                                                className: "col-sm-6 toright",
                                                children: (0, r.jsx)("div", {
                                                    className: "full-width",
                                                    children: l.f.slice(0, 2).map((function(e, a) {
                                                        return (0, r.jsx)("div", {
                                                            children: (0, r.jsx)("div", {
                                                                className: "img sizxl ".concat(a + 1 != l.f.slice(0, 2).length ? "mb-30" : null),
                                                                "data-tooltip-tit": e.title,
                                                                "data-tooltip-sub": e.sub,
                                                                children: (0, r.jsx)("img", {
                                                                    src: e.image,
                                                                    alt: "",
                                                                    className: "imago wow"
                                                                })
                                                            })
                                                        }, e.id)
                                                    }))
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-sm-6 toleft valign",
                                                children: (0, r.jsx)("div", {
                                                    className: "full-width text-left",
                                                    children: l.f.slice(2, 4).map((function(e, a) {
                                                        return (0, r.jsx)("div", {
                                                            children: (0, r.jsx)("div", {
                                                                className: "img sizxl ".concat(a + 1 != l.f.slice(2, 4).length ? "mb-30" : null),
                                                                "data-tooltip-tit": e.title,
                                                                "data-tooltip-sub": e.sub,
                                                                children: (0, r.jsx)("img", {
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
        10106: function(e, a, i) {
            "use strict";
            var s = i(77625),
                t = i(67294),
                n = i(72873),
                l = i(41664),
                r = i(88116),
                c = (i(53481), i(9320), i(30687), i(92311), i(66025)),
                d = i(38037),
                o = i(85893);
            r.ZP.use([r.W_, r.tl, r.VS, r.xW]);
            a.Z = function() {
                var e = t.useState(!0),
                    a = (0, s.Z)(e, 2),
                    i = a[0],
                    r = a[1];
                t.useEffect((function() {
                    setTimeout((function() {
                        r(!1), (0, d.Z)(), (0, c.$)()
                    }), 1e3)
                }), []);
                var u = t.useRef(null),
                    m = t.useRef(null),
                    p = t.useRef(null);
                return (0, o.jsxs)("section", {
                    className: "blog-crv sub-bg",
                    children: [(0, o.jsx)("h2", {
                        style: {
                            display: "none"
                        },
                        children: "\xa0"
                    }), (0, o.jsx)("div", {
                        className: "stories",
                        children: (0, o.jsxs)("div", {
                            className: "container-fluid",
                            children: [(0, o.jsxs)("div", {
                                className: "row",
                                children: [(0, o.jsx)("div", {
                                    className: "col-lg-6 no-padding",
                                    children: i ? null : (0, o.jsxs)(n.t, {
                                        speed: 800,
                                        effect: "fade",
                                        spaceBetween: 0,
                                        loop: !0,
                                        parallax: !0,
                                        navigation: {
                                            prevEl: u.current,
                                            nextEl: m.current
                                        },
                                        pagination: {
                                            type: "fraction",
                                            clickable: !0,
                                            el: p.current
                                        },
                                        onBeforeInit: function(e) {
                                            e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = m.current, e.params.pagination.el = p.current
                                        },
                                        onSwiper: function(e) {
                                            setTimeout((function() {
                                                for (var a = 0; a < e.slides.length; a++) e.slides[a].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                                                e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = m.current, e.params.pagination.el = p.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                                            }))
                                        },
                                        className: "swiper-wrapper swiper-container swiper-img",
                                        slidesPerView: 1,
                                        children: [(0, o.jsx)(n.o, {
                                            className: "swiper-slide",
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: (0, o.jsx)("div", {
                                                    className: "img",
                                                    children: (0, o.jsx)("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/1.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }), (0, o.jsx)(n.o, {
                                            className: "swiper-slide",
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: (0, o.jsx)("div", {
                                                    className: "img",
                                                    children: (0, o.jsx)("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/2.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }), (0, o.jsx)(n.o, {
                                            className: "swiper-slide",
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: (0, o.jsx)("div", {
                                                    className: "img",
                                                    children: (0, o.jsx)("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/3.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "col-lg-6 no-padding valign",
                                    children: i ? null : (0, o.jsxs)(n.t, {
                                        speed: 800,
                                        spaceBetween: 0,
                                        loop: !0,
                                        navigation: {
                                            prevEl: u.current,
                                            nextEl: m.current
                                        },
                                        pagination: {
                                            type: "fraction",
                                            clickable: !0,
                                            el: p.current
                                        },
                                        onBeforeInit: function(e) {
                                            e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = m.current, e.params.pagination.el = p.current
                                        },
                                        onSwiper: function(e) {
                                            setTimeout((function() {
                                                for (var a = 0; a < e.slides.length; a++) e.slides[a].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                                                e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = m.current, e.params.pagination.el = p.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                                            }))
                                        },
                                        className: "swiper-wrapper swiper-container swiper-content",
                                        slidesPerView: 1,
                                        children: [(0, o.jsx)(n.o, {
                                            className: "swiper-slide",
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: (0, o.jsxs)("div", {
                                                    className: "content",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "tags",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: "Trending"
                                                        })
                                                    }), (0, o.jsxs)("div", {
                                                        className: "info",
                                                        children: [(0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: (0, o.jsxs)("a", {
                                                                children: [(0, o.jsx)("i", {
                                                                    className: "far fa-clock"
                                                                }), "06 Aug 2022"]
                                                            })
                                                        }), (0, o.jsx)("a", {
                                                            href: "#0",
                                                            children: "by Alex Morgan"
                                                        })]
                                                    }), (0, o.jsx)("div", {
                                                        className: "title",
                                                        children: (0, o.jsx)("h4", {
                                                            children: (0, o.jsx)(l.default, {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Create The Lifestyle You Really Desire This World"
                                                            })
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "text",
                                                        children: (0, o.jsx)("p", {
                                                            children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "more",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog-details/blog-details-dark",
                                                            children: "Read More"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0, o.jsx)(n.o, {
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: (0, o.jsxs)("div", {
                                                    className: "content",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "tags",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: "Trending"
                                                        })
                                                    }), (0, o.jsxs)("div", {
                                                        className: "info",
                                                        children: [(0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: (0, o.jsxs)("a", {
                                                                children: [(0, o.jsx)("i", {
                                                                    className: "far fa-clock"
                                                                }), "06 Aug 2022"]
                                                            })
                                                        }), (0, o.jsx)("a", {
                                                            href: "#0",
                                                            children: "by Alex Morgan"
                                                        })]
                                                    }), (0, o.jsx)("div", {
                                                        className: "title",
                                                        children: (0, o.jsx)("h4", {
                                                            children: (0, o.jsx)(l.default, {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: (0, o.jsx)("a", {
                                                                    children: "List of The Best Investment Projects"
                                                                })
                                                            })
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "text",
                                                        children: (0, o.jsx)("p", {
                                                            children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "more",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog-details/blog-details-dark",
                                                            children: "Read More"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0, o.jsx)(n.o, {
                                            children: (0, o.jsx)("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: (0, o.jsxs)("div", {
                                                    className: "content",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "tags",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: "Trending"
                                                        })
                                                    }), (0, o.jsxs)("div", {
                                                        className: "info",
                                                        children: [(0, o.jsx)(l.default, {
                                                            href: "/blog/blog-dark",
                                                            children: (0, o.jsxs)("a", {
                                                                children: [(0, o.jsx)("i", {
                                                                    className: "far fa-clock"
                                                                }), "06 Aug 2022"]
                                                            })
                                                        }), (0, o.jsx)("a", {
                                                            href: "#0",
                                                            children: "by Alex Morgan"
                                                        })]
                                                    }), (0, o.jsx)("div", {
                                                        className: "title",
                                                        children: (0, o.jsx)("h4", {
                                                            children: (0, o.jsx)(l.default, {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: (0, o.jsx)("a", {
                                                                    children: "World Best Business Website Company"
                                                                })
                                                            })
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "text",
                                                        children: (0, o.jsx)("p", {
                                                            children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "more",
                                                        children: (0, o.jsx)(l.default, {
                                                            href: "/blog-details/blog-details-dark",
                                                            children: "Read More"
                                                        })
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "controls",
                                children: [(0, o.jsx)("div", {
                                    ref: m,
                                    className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                                    children: (0, o.jsx)("i", {
                                        className: "fas fa-caret-up"
                                    })
                                }), (0, o.jsx)("div", {
                                    ref: u,
                                    className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                                    children: (0, o.jsx)("i", {
                                        className: "fas fa-caret-down"
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "swiper-pagination",
                                    ref: p
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        92311: function() {},
        30687: function() {},
        9320: function() {}
    }
]);