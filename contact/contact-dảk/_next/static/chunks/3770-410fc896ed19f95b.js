"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3770], {
        32979: function(e, s) {
            s.Z = function(e) {
                window.addEventListener("scroll", (function() {
                    var s = window.pageYOffset;
                    e && e.forEach((function(e) {
                        e.style.transform = "translate3d(0, " + -.2 * s + "px, 0)", e.style.opacity = 1 - s / 600
                    }))
                }))
            }
        },
        5032: function(e, s) {
            s.Z = function() {
                var e, s = document.querySelectorAll(".gallery");
                s.length >= 1 && s.forEach((function(s) {
                    e = new Isotope(s, {
                        itemSelector: ".items"
                    })
                }));
                var a = document.querySelectorAll(".gallery-mons");
                a.length >= 1 && a.forEach((function(s) {
                    e = new Isotope(s, {
                        itemSelector: ".items",
                        masonry: {
                            columnWidth: ".width2"
                        }
                    })
                }));
                var i = document.querySelector(".filtering");
                if (i) {
                    var r = function(e) {
                        e.addEventListener("click", (function(s) {
                            matchesSelector(s.target, "span") && (e.querySelector(".active").classList.remove("active"), s.target.classList.add("active"))
                        }))
                    };
                    i.addEventListener("click", (function(s) {
                        if (matchesSelector(s.target, "span")) {
                            var a = s.target.getAttribute("data-filter");
                            a = a, e.arrange({
                                filter: a
                            })
                        }
                    }));
                    for (var l = document.querySelectorAll(".filtering"), n = 0, c = l.length; n < c; n++) {
                        r(l[n])
                    }
                }
            }
        },
        54992: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return n
                }
            });
            a(67294);
            var i = a(51514),
                r = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"About Us","TN":{"P":"We are more than just","E":"a digital agency."},"kQ":"We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi masvitp","R2":[{"id":1,"icon":"gleam","name":{"first":"Pixel","second":"Perfect"},"wowDelay":".3s"},{"id":2,"icon":"paint-bucket","name":{"first":"Creative","second":"Design"},"wowDelay":".5s"},{"id":3,"icon":"medal","name":{"first":"Heigh","second":"Perfomance"},"wowDelay":".8s"}]}'),
                l = a(85893),
                n = function() {
                    return (0, l.jsx)("div", {
                        className: "about section-padding",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-5",
                                    children: (0, l.jsx)("div", {
                                        className: "img-mons sm-mb30",
                                        children: (0, l.jsxs)("div", {
                                            className: "row",
                                            children: [(0, l.jsx)("div", {
                                                className: "col-md-5 cmd-padding valign",
                                                children: (0, l.jsx)("div", {
                                                    className: "img1 wow imago",
                                                    "data-wow-delay": ".5s",
                                                    children: (0, l.jsx)("img", {
                                                        src: r.wp,
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "col-md-7 cmd-padding",
                                                children: [(0, l.jsx)("div", {
                                                    className: "img2 wow imago",
                                                    "data-wow-delay": ".3s",
                                                    children: (0, l.jsx)("img", {
                                                        src: r.Lx,
                                                        alt: ""
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: "img3 wow imago",
                                                    "data-wow-delay": ".8s",
                                                    children: (0, l.jsx)("img", {
                                                        src: r._g,
                                                        alt: ""
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: "container",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "row",
                                                        children: [(0, l.jsx)("div", {
                                                            className: "col-md-6"
                                                        }), (0, l.jsx)("div", {
                                                            className: "col-md-6"
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-6 offset-lg-1 valign",
                                    children: (0, l.jsxs)("div", {
                                        className: "content",
                                        children: [(0, l.jsx)("div", {
                                            className: "sub-title",
                                            children: (0, l.jsx)("h6", {
                                                children: r.bH
                                            })
                                        }), (0, l.jsx)(i.Z, {
                                            children: (0, l.jsxs)("h3", {
                                                className: "words chars splitting main-title wow",
                                                "data-splitting": !0,
                                                children: [r.TN.P, " ", (0, l.jsx)("br", {}), " ", r.TN.E]
                                            })
                                        }), (0, l.jsx)(i.Z, {
                                            children: (0, l.jsx)("p", {
                                                className: "words chars splitting wow txt",
                                                "data-splitting": !0,
                                                children: r.kQ
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "ftbox mt-30",
                                            children: (0, l.jsx)("ul", {
                                                children: r.R2.map((function(e) {
                                                    return (0, l.jsxs)("li", {
                                                        className: "wow fadeIn ".concat(2 == e.id ? "space" : ""),
                                                        "data-wow-delay": e.wowDelay,
                                                        children: [(0, l.jsx)("span", {
                                                            className: "icon color-font pe-7s-".concat(e.icon)
                                                        }), (0, l.jsxs)("h6", {
                                                            children: [e.name.first, " ", (0, l.jsx)("br", {}), " ", e.name.second]
                                                        }), (0, l.jsxs)("div", {
                                                            className: "dots",
                                                            children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
                                                        })]
                                                    }, e.id)
                                                }))
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        62804: function(e, s, a) {
            a(67294);
            var i = a(58004),
                r = a(51514),
                l = a(85893);
            s.Z = function(e) {
                var s = e.theme;
                return (0, l.jsxs)("section", {
                    className: "clients sub-bg pt-50 pb-50",
                    children: [(0, l.jsx)("h2", {
                        style: {
                            display: "none"
                        },
                        children: "\xa0"
                    }), (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("div", {
                            className: "row",
                            children: (0, l.jsx)("div", {
                                className: "col-lg-7",
                                children: (0, l.jsx)("div", {
                                    className: "row",
                                    children: i.slice(0, 4).map((function(e) {
                                        return (0, l.jsx)("div", {
                                            className: "col-lg-3 brands",
                                            children: (0, l.jsx)("div", {
                                                className: "item no-bord wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: (0, l.jsxs)("div", {
                                                    className: "img",
                                                    children: ["light" === s ? (0, l.jsx)("img", {
                                                        src: e.lightImage,
                                                        alt: ""
                                                    }) : (0, l.jsx)("img", {
                                                        src: e.darkImage,
                                                        alt: ""
                                                    }), (0, l.jsx)(r.Z, {
                                                        children: (0, l.jsx)("a", {
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
                                })
                            })
                        })
                    })]
                })
            }
        },
        19818: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return h
                }
            });
            var i = a(77625),
                r = a(67294),
                l = a(41664),
                n = JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]'),
                c = a(72873),
                t = a(88116),
                d = (a(53481), a(9320), a(30687), a(38037)),
                o = a(32979),
                m = a(85893);
            t.ZP.use([t.W_, t.tl, t.VS]);
            var h = function(e) {
                var s = e.sliderRef,
                    a = r.useState(!0),
                    t = (0, i.Z)(a, 2),
                    h = t[0],
                    j = t[1];
                r.useEffect((function() {
                    (0, o.Z)(document.querySelectorAll(".fixed-slider .caption")), setTimeout((function() {
                        (0, d.Z)(), j(!1)
                    }), 1e3)
                }), []);
                var x = r.useRef(null),
                    g = r.useRef(null),
                    f = r.useRef(null);
                return (0, m.jsx)("header", {
                    ref: s,
                    className: "slider slider-prlx fixed-slider text-center",
                    children: (0, m.jsxs)("div", {
                        className: "swiper-container parallax-slider",
                        children: [h ? null : (0, m.jsx)(c.t, {
                            speed: 1e3,
                            parallax: !0,
                            navigation: {
                                prevEl: x.current,
                                nextEl: g.current
                            },
                            pagination: {
                                type: "fraction",
                                clickable: !0,
                                el: f.current
                            },
                            onBeforeInit: function(e) {
                                e.params.navigation.prevEl = x.current, e.params.navigation.nextEl = g.current, e.params.pagination.el = f.current
                            },
                            onSwiper: function(e) {
                                setTimeout((function() {
                                    for (var s = 0; s < e.slides.length; s++) e.slides[s].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                                    e.params.navigation.prevEl = x.current, e.params.navigation.nextEl = g.current, e.params.pagination.el = f.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                                }))
                            },
                            className: "swiper-wrapper",
                            slidesPerView: 1,
                            children: n.map((function(e) {
                                return (0, m.jsx)(c.o, {
                                    className: "swiper-slide",
                                    children: (0, m.jsx)("div", {
                                        className: "bg-img valign",
                                        style: {
                                            backgroundImage: "url(".concat(e.image, ")")
                                        },
                                        "data-overlay-dark": "6",
                                        children: (0, m.jsx)("div", {
                                            className: "container",
                                            children: (0, m.jsx)("div", {
                                                className: "row justify-content-center",
                                                children: (0, m.jsx)("div", {
                                                    className: "col-lg-8 col-md-10",
                                                    children: (0, m.jsxs)("div", {
                                                        className: "caption center mt-30",
                                                        children: [(0, m.jsx)("h1", {
                                                            className: "color-font",
                                                            children: e.title
                                                        }), (null === e || void 0 === e ? void 0 : e.content) && (0, m.jsx)("p", {
                                                            children: e.content
                                                        }), (0, m.jsx)(l.default, {
                                                            href: "/about/about-dark",
                                                            children: (0, m.jsx)("a", {
                                                                className: "butn bord curve mt-30",
                                                                children: (0, m.jsx)("span", {
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
                        }), (0, m.jsxs)("div", {
                            className: "setone setwo",
                            children: [(0, m.jsx)("div", {
                                ref: g,
                                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                children: (0, m.jsx)("i", {
                                    className: "fas fa-chevron-right"
                                })
                            }), (0, m.jsx)("div", {
                                ref: x,
                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                children: (0, m.jsx)("i", {
                                    className: "fas fa-chevron-left"
                                })
                            })]
                        }), (0, m.jsx)("div", {
                            ref: f,
                            className: "swiper-pagination top botm"
                        }), (0, m.jsxs)("div", {
                            className: "social-icon",
                            children: [(0, m.jsx)("a", {
                                href: "#0",
                                children: (0, m.jsx)("i", {
                                    className: "fab fa-facebook-f"
                                })
                            }), (0, m.jsx)("a", {
                                href: "#0",
                                children: (0, m.jsx)("i", {
                                    className: "fab fa-twitter"
                                })
                            }), (0, m.jsx)("a", {
                                href: "#0",
                                children: (0, m.jsx)("i", {
                                    className: "fab fa-behance"
                                })
                            }), (0, m.jsx)("a", {
                                href: "#0",
                                children: (0, m.jsx)("i", {
                                    className: "fab fa-pinterest-p"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        21480: function(e, s, a) {
            var i = a(67294),
                r = a(41664),
                l = a(5032),
                n = a(85893);
            s.Z = function(e) {
                var s = e.grid,
                    a = e.filterPosition;
                return i.useEffect((function() {
                    setTimeout((function() {
                        (0, l.Z)()
                    }), 1e3)
                }), []), (0, n.jsxs)("section", {
                    className: "portfolio section-padding pb-70",
                    children: [(0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, n.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, n.jsxs)("div", {
                                    className: "sec-head text-center",
                                    children: [(0, n.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Portfolio"
                                    }), (0, n.jsxs)("h3", {
                                        className: "wow color-font",
                                        children: ["Our Recent Web Design & ", (0, n.jsx)("br", {}), " Some Past Projects."]
                                    })]
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "".concat(3 === s ? "container-fluid" : "container"),
                        children: (0, n.jsxs)("div", {
                            className: "row",
                            children: [(0, n.jsx)("div", {
                                className: "filtering ".concat("center" === a ? "text-center" : "left" === a ? "text-left" : "text-right", " col-12"),
                                children: (0, n.jsxs)("div", {
                                    className: "filter",
                                    children: [(0, n.jsx)("span", {
                                        "data-filter": "*",
                                        className: "active",
                                        children: "All"
                                    }), (0, n.jsx)("span", {
                                        "data-filter": ".brand",
                                        children: "Branding"
                                    }), (0, n.jsx)("span", {
                                        "data-filter": ".web",
                                        children: "Mobile App"
                                    }), (0, n.jsx)("span", {
                                        "data-filter": ".graphic",
                                        children: "Creative"
                                    })]
                                })
                            }), (0, n.jsxs)("div", {
                                className: "gallery full-width",
                                children: [(0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6 lg-mr" : "col-12", " items graphic wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/1.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "Creativity Demand"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)(r.default, {
                                                href: "/works/works-dark",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)(r.default, {
                                                href: "/works/works-dark",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items web wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/2.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "Through The Breaking"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("a", {
                                                href: "#0",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)("a", {
                                                href: "#0",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items brand wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/3.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "Create With Creatives"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("a", {
                                                href: "#0",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)("a", {
                                                href: "#0",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items graphic wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/4.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "Energies of Love"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("a", {
                                                href: "#0",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)("a", {
                                                href: "#0",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items web wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/5.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "See It Yourself"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("a", {
                                                href: "#0",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)("a", {
                                                href: "#0",
                                                children: "WordPress"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(3 === s ? "col-lg-4 col-md-6" : 2 === s ? "col-md-6" : "col-12", " items brand wow fadeInUp"),
                                    "data-wow-delay": ".4s",
                                    children: [(0, n.jsx)("div", {
                                        className: "item-img",
                                        children: (0, n.jsx)(r.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, n.jsxs)("a", {
                                                className: "imago wow",
                                                children: [(0, n.jsx)("img", {
                                                    src: "/img/portfolio/portfolio/1/6.jpg",
                                                    alt: "image"
                                                }), (0, n.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "cont",
                                        children: [(0, n.jsx)("h6", {
                                            children: "Blast From The Past"
                                        }), (0, n.jsxs)("span", {
                                            children: [(0, n.jsx)("a", {
                                                href: "#0",
                                                children: "Design"
                                            }), ", ", (0, n.jsx)("a", {
                                                href: "#0",
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
        88682: function(e, s, a) {
            var i = a(15861),
                r = a(87757),
                l = a.n(r),
                n = a(67294),
                c = a(82175),
                t = a(85893);
            s.Z = function(e) {
                var s = e.noLine,
                    a = n.useRef(null);

                function r(e) {
                    var s;
                    return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) || (s = "Invalid email address") : s = "Required", s
                }
                var d = function(e) {
                    return new Promise((function(s) {
                        return setTimeout(s, e)
                    }))
                };
                return (0, t.jsxs)("section", {
                    className: "contact-sec section-padding position-re",
                    children: [(0, t.jsxs)("div", {
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
                                        children: "Contact Us"
                                    }), (0, t.jsx)("h3", {
                                        className: "wow color-font",
                                        children: "Let\u2019s Get in Touch And Make Magic Together."
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, t.jsx)("div", {
                                className: "col-lg-10",
                                children: (0, t.jsx)("div", {
                                    className: "form wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: (0, t.jsx)(c.J9, {
                                        initialValues: {
                                            name: "",
                                            email: "",
                                            message: ""
                                        },
                                        onSubmit: function() {
                                            var e = (0, i.Z)(l().mark((function e(s) {
                                                return l().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, d(500);
                                                        case 2:
                                                            alert(JSON.stringify(s, null, 2)), a.current.innerText = "Your Message has been successfully sent. I will contact you soon.", s.name = "", s.email = "", s.message = "", setTimeout((function() {
                                                                a.current.innerText = ""
                                                            }), 2e3);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(s) {
                                                return e.apply(this, arguments)
                                            }
                                        }(),
                                        children: function(e) {
                                            var s = e.errors,
                                                i = e.touched;
                                            return (0, t.jsxs)(c.l0, {
                                                id: "contact-form",
                                                children: [(0, t.jsx)("div", {
                                                    className: "messages",
                                                    ref: a
                                                }), (0, t.jsx)("div", {
                                                    className: "controls",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "row",
                                                        children: [(0, t.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, t.jsx)("div", {
                                                                className: "form-group",
                                                                children: (0, t.jsx)(c.gN, {
                                                                    id: "form_name",
                                                                    type: "text",
                                                                    name: "name",
                                                                    placeholder: "Name",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }), (0, t.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, t.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [(0, t.jsx)(c.gN, {
                                                                    validate: r,
                                                                    id: "form_email",
                                                                    type: "email",
                                                                    name: "email",
                                                                    placeholder: "Email",
                                                                    required: "required"
                                                                }), s.email && i.email && (0, t.jsx)("div", {
                                                                    children: s.email
                                                                })]
                                                            })
                                                        }), (0, t.jsx)("div", {
                                                            className: "col-12",
                                                            children: (0, t.jsx)("div", {
                                                                className: "form-group",
                                                                children: (0, t.jsx)(c.gN, {
                                                                    as: "textarea",
                                                                    id: "form_message",
                                                                    name: "message",
                                                                    placeholder: "Message",
                                                                    rows: "4",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }), (0, t.jsx)("div", {
                                                            className: "col-12",
                                                            children: (0, t.jsx)("div", {
                                                                className: "text-center",
                                                                children: (0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "nb butn bord curve mt-30",
                                                                    children: (0, t.jsx)("span", {
                                                                        children: "Send Massege"
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }
                                    })
                                })
                            })
                        })]
                    }), s ? "" : (0, t.jsx)("div", {
                        className: "line bottom left"
                    })]
                })
            }
        }
    }
]);