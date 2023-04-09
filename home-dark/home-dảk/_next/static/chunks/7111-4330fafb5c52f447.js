"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7111], {
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
                    var l = function(e) {
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
                    for (var r = document.querySelectorAll(".filtering"), c = 0, n = r.length; c < n; c++) {
                        l(r[c])
                    }
                }
            }
        },
        97266: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return c
                }
            });
            var i = a(67294),
                l = function(e, s, a) {
                    e && window.addEventListener("scroll", (function() {
                        s.forEach((function(e) {
                            var s = e.getAttribute("data-value");
                            window.pageYOffset > a.offsetTop - 200 && (e.style.width = s)
                        }))
                    }))
                },
                r = a(85893),
                c = function() {
                    return i.useEffect((function() {
                        l(document.querySelector(".about-cr .skills-box"), document.querySelectorAll(".skill-progress .progres"), document.querySelector(".about-cr"))
                    }), []), (0, r.jsx)("section", {
                        className: "about-cr",
                        children: (0, r.jsx)("div", {
                            className: "container-fluid",
                            children: (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-6 img md-mb50",
                                    children: (0, r.jsx)("img", {
                                        src: "/img/intro/4.jpg",
                                        alt: ""
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-5 valign",
                                    children: (0, r.jsxs)("div", {
                                        className: "cont full-width",
                                        children: [(0, r.jsx)("h3", {
                                            className: "color-font",
                                            children: "UI / UX Designer"
                                        }), (0, r.jsx)("h5", {
                                            className: "co-tit mb-15",
                                            children: "We help to create visual strategies."
                                        }), (0, r.jsx)("p", {
                                            children: "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                        }), (0, r.jsxs)("div", {
                                            className: "skills-box mt-40",
                                            children: [(0, r.jsxs)("div", {
                                                className: "skill-item",
                                                children: [(0, r.jsx)("h5", {
                                                    className: "fz-14 mb-15",
                                                    children: "UI / UX Design"
                                                }), (0, r.jsx)("div", {
                                                    className: "skill-progress",
                                                    children: (0, r.jsx)("div", {
                                                        className: "progres",
                                                        "data-value": "90%"
                                                    })
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "skill-item",
                                                children: [(0, r.jsx)("h5", {
                                                    className: "fz-14 mb-15",
                                                    children: "Apps Development"
                                                }), (0, r.jsx)("div", {
                                                    className: "skill-progress",
                                                    children: (0, r.jsx)("div", {
                                                        className: "progres",
                                                        "data-value": "80%"
                                                    })
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
        87564: function(e, s, a) {
            a(67294);
            var i = a(5459),
                l = a.n(i),
                r = a(85893);
            s.Z = function() {
                return (0, r.jsxs)("header", {
                    className: "freelancre valign",
                    children: [(0, r.jsxs)("div", {
                        className: "container",
                        children: [(0, r.jsxs)("div", {
                            className: "row",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, r.jsx)("div", {
                                    className: "img",
                                    children: (0, r.jsx)("img", {
                                        src: "/img/hero.jpg",
                                        alt: ""
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-8 valign",
                                children: (0, r.jsx)("div", {
                                    className: "cont",
                                    children: (0, r.jsxs)("h1", {
                                        className: "cd-headline clip",
                                        children: ["Hello, My name is hisham i love design and i hope to make awesome designs and also i create a", (0, r.jsx)("span", {
                                            style: {
                                                fontSize: "35px",
                                                lineHeight: "49px"
                                            },
                                            className: "cd-words-wrapper",
                                            children: (0, r.jsx)(l(), {
                                                options: {
                                                    wrapperClassName: "color-font fw-600",
                                                    strings: ["Mobile Apps", "Landing Pages", "Awesome Design"],
                                                    autoStart: !0,
                                                    loop: !0
                                                },
                                                loop: !0,
                                                onInit: function(e) {}
                                            })
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "states",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsxs)("ul", {
                                    className: "flex",
                                    children: [(0, r.jsxs)("li", {
                                        className: "flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "numb valign",
                                            children: (0, r.jsx)("h3", {
                                                children: "12"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "text valign",
                                            children: (0, r.jsxs)("p", {
                                                children: ["Years ", (0, r.jsx)("br", {}), " Of Experience"]
                                            })
                                        })]
                                    }), (0, r.jsxs)("li", {
                                        className: "flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "numb valign",
                                            children: (0, r.jsx)("h3", {
                                                children: "165"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "text valign",
                                            children: (0, r.jsxs)("p", {
                                                children: ["Projects Completed ", (0, r.jsx)("br", {}), " In 19 Countries"]
                                            })
                                        })]
                                    }), (0, r.jsx)("li", {
                                        className: "mail-us",
                                        children: (0, r.jsx)("a", {
                                            href: "mailto:your@email.com?subject=Subject",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex",
                                                children: [(0, r.jsx)("div", {
                                                    className: "text valign",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "full-width",
                                                        children: [(0, r.jsx)("p", {
                                                            children: "Get In Touch"
                                                        }), (0, r.jsx)("h6", {
                                                            children: "Vie_Support@Gmail.Com"
                                                        })]
                                                    })
                                                }), (0, r.jsx)("div", {
                                                    className: "mail-icon",
                                                    children: (0, r.jsx)("div", {
                                                        className: "icon-box",
                                                        children: (0, r.jsx)("span", {
                                                            className: "icon color-font pe-7s-mail"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: "line bottom left"
                    })]
                })
            }
        },
        84738: function(e, s, a) {
            a(67294);
            var i = a(13473),
                l = a(85893);
            s.Z = function() {
                return (0, l.jsxs)("section", {
                    className: "services box lficon section-padding position-re",
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
                        }), (0, l.jsx)("div", {
                            className: "row",
                            children: i.map((function(e, s) {
                                return (0, l.jsx)("div", {
                                    className: "col-lg-6 wow fadeInLeft",
                                    "data-wow-delay": 0 == s ? ".5s" : 1 == s ? ".7s" : 2 === s ? ".9s" : ".5s",
                                    children: (0, l.jsxs)("div", {
                                        className: "item-box no-curve",
                                        children: [(0, l.jsx)("div", {
                                            children: (0, l.jsx)("span", {
                                                className: "icon color-font ".concat(e.icon)
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, l.jsx)("h6", {
                                                children: e.title
                                            }), (0, l.jsx)("p", {
                                                children: e.content
                                            })]
                                        })]
                                    })
                                }, e.id)
                            }))
                        })]
                    }), (0, l.jsx)("div", {
                        className: "line bottom right"
                    })]
                })
            }
        },
        42368: function(e, s, a) {
            var i = a(67294),
                l = a(41664),
                r = a(5032),
                c = a(85893);
            s.Z = function() {
                return i.useEffect((function() {
                    setTimeout((function() {
                        (0, r.Z)()
                    }), 1e3)
                }), []), (0, c.jsxs)("section", {
                    className: "portfolio-frl section-padding pb-70",
                    children: [(0, c.jsx)("div", {
                        className: "container",
                        children: (0, c.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, c.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, c.jsxs)("div", {
                                    className: "sec-head  text-center",
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
                            children: [(0, c.jsx)("div", {
                                className: "filtering col-12",
                                children: (0, c.jsxs)("div", {
                                    className: "filter wow fadeIn",
                                    "data-wow-delay": ".5s",
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
                                children: [(0, c.jsx)("div", {
                                    className: "col-md-6 items graphic lg-mr wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/1.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-md-6 items web wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/2.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-md-6 items web wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/3.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-md-6 items web graphic wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/4.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-md-6 items brand wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/5.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, c.jsx)("div", {
                                    className: "col-md-6 items brand wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: (0, c.jsxs)("div", {
                                        className: "item-img",
                                        children: [(0, c.jsxs)("div", {
                                            className: "cont",
                                            children: [(0, c.jsx)("h6", {
                                                children: "Creative Mobile App"
                                            }), (0, c.jsx)("p", {
                                                children: "Ui / Ux creative mobile app design"
                                            })]
                                        }), (0, c.jsx)(l.default, {
                                            href: "/project-details2/project-details2-dark",
                                            children: (0, c.jsxs)("a", {
                                                className: "rota",
                                                children: [(0, c.jsx)("img", {
                                                    src: "/img/portfolio/freelancer/6.jpg",
                                                    alt: "image"
                                                }), (0, c.jsx)("div", {
                                                    className: "item-img-overlay"
                                                })]
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "tags",
                                            children: [(0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "App"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Fitnes"
                                                })
                                            }), (0, c.jsx)("span", {
                                                children: (0, c.jsx)(l.default, {
                                                    href: "/works2/works2-dark",
                                                    children: "Creative"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        98858: function(e, s, a) {
            a(67294);
            var i = a(41664),
                l = a(85893);
            s.Z = function() {
                return (0, l.jsx)("section", {
                    className: "blog-list section-padding sub-bg",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "row",
                            children: [(0, l.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, l.jsxs)("div", {
                                    className: "head md-mb50",
                                    children: [(0, l.jsx)("h6", {
                                        className: "back-color",
                                        children: "Get The Latest News"
                                    }), (0, l.jsx)("h3", {
                                        children: "What Our Trending News."
                                    }), (0, l.jsx)("p", {
                                        children: "We provide company and finance service for startups and company business."
                                    }), (0, l.jsx)(i.default, {
                                        href: "/blog/blog-dark",
                                        children: (0, l.jsx)("a", {
                                            children: (0, l.jsx)("span", {
                                                children: "More Blog Posts"
                                            })
                                        })
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "col-lg-7 offset-lg-1",
                                children: [(0, l.jsxs)("div", {
                                    className: "item wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [(0, l.jsx)("div", {
                                        className: "img valign",
                                        children: (0, l.jsx)("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "cont valign",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsxs)("div", {
                                                className: "info",
                                                children: [(0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "date",
                                                        children: (0, l.jsxs)("span", {
                                                            children: [(0, l.jsx)("i", {
                                                                children: "06"
                                                            }), " August"]
                                                        })
                                                    })
                                                }), (0, l.jsx)("span", {
                                                    children: "/"
                                                }), (0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "tag",
                                                        children: (0, l.jsx)("span", {
                                                            children: "WordPress"
                                                        })
                                                    })
                                                })]
                                            }), (0, l.jsx)("h5", {
                                                children: (0, l.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "item wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: [(0, l.jsx)("div", {
                                        className: "img valign",
                                        children: (0, l.jsx)("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "cont valign",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsxs)("div", {
                                                className: "info",
                                                children: [(0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "date",
                                                        children: (0, l.jsxs)("span", {
                                                            children: [(0, l.jsx)("i", {
                                                                children: "06"
                                                            }), " August"]
                                                        })
                                                    })
                                                }), (0, l.jsx)("span", {
                                                    children: "/"
                                                }), (0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "tag",
                                                        children: (0, l.jsx)("span", {
                                                            children: "WordPress"
                                                        })
                                                    })
                                                })]
                                            }), (0, l.jsx)("h5", {
                                                children: (0, l.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "item wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [(0, l.jsx)("div", {
                                        className: "img valign",
                                        children: (0, l.jsx)("img", {
                                            src: "/img/blog/3.jpg",
                                            alt: ""
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "cont valign",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsxs)("div", {
                                                className: "info",
                                                children: [(0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "date",
                                                        children: (0, l.jsxs)("span", {
                                                            children: [(0, l.jsx)("i", {
                                                                children: "06"
                                                            }), " August"]
                                                        })
                                                    })
                                                }), (0, l.jsx)("span", {
                                                    children: "/"
                                                }), (0, l.jsx)(i.default, {
                                                    href: "/blog/blog-dark",
                                                    children: (0, l.jsx)("a", {
                                                        className: "tag",
                                                        children: (0, l.jsx)("span", {
                                                            children: "WordPress"
                                                        })
                                                    })
                                                })]
                                            }), (0, l.jsx)("h5", {
                                                children: (0, l.jsx)(i.default, {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: (0, l.jsx)("a", {
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        88682: function(e, s, a) {
            var i = a(15861),
                l = a(87757),
                r = a.n(l),
                c = a(67294),
                n = a(82175),
                d = a(85893);
            s.Z = function(e) {
                var s = e.noLine,
                    a = c.useRef(null);

                function l(e) {
                    var s;
                    return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) || (s = "Invalid email address") : s = "Required", s
                }
                var t = function(e) {
                    return new Promise((function(s) {
                        return setTimeout(s, e)
                    }))
                };
                return (0, d.jsxs)("section", {
                    className: "contact-sec section-padding position-re",
                    children: [(0, d.jsxs)("div", {
                        className: "container",
                        children: [(0, d.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, d.jsx)("div", {
                                className: "col-lg-8 col-md-10",
                                children: (0, d.jsxs)("div", {
                                    className: "sec-head  text-center",
                                    children: [(0, d.jsx)("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Contact Us"
                                    }), (0, d.jsx)("h3", {
                                        className: "wow color-font",
                                        children: "Let\u2019s Get in Touch And Make Magic Together."
                                    })]
                                })
                            })
                        }), (0, d.jsx)("div", {
                            className: "row justify-content-center",
                            children: (0, d.jsx)("div", {
                                className: "col-lg-10",
                                children: (0, d.jsx)("div", {
                                    className: "form wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: (0, d.jsx)(n.J9, {
                                        initialValues: {
                                            name: "",
                                            email: "",
                                            message: ""
                                        },
                                        onSubmit: function() {
                                            var e = (0, i.Z)(r().mark((function e(s) {
                                                return r().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, t(500);
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
                                            return (0, d.jsxs)(n.l0, {
                                                id: "contact-form",
                                                children: [(0, d.jsx)("div", {
                                                    className: "messages",
                                                    ref: a
                                                }), (0, d.jsx)("div", {
                                                    className: "controls",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "row",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, d.jsx)("div", {
                                                                className: "form-group",
                                                                children: (0, d.jsx)(n.gN, {
                                                                    id: "form_name",
                                                                    type: "text",
                                                                    name: "name",
                                                                    placeholder: "Name",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }), (0, d.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, d.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [(0, d.jsx)(n.gN, {
                                                                    validate: l,
                                                                    id: "form_email",
                                                                    type: "email",
                                                                    name: "email",
                                                                    placeholder: "Email",
                                                                    required: "required"
                                                                }), s.email && i.email && (0, d.jsx)("div", {
                                                                    children: s.email
                                                                })]
                                                            })
                                                        }), (0, d.jsx)("div", {
                                                            className: "col-12",
                                                            children: (0, d.jsx)("div", {
                                                                className: "form-group",
                                                                children: (0, d.jsx)(n.gN, {
                                                                    as: "textarea",
                                                                    id: "form_message",
                                                                    name: "message",
                                                                    placeholder: "Message",
                                                                    rows: "4",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }), (0, d.jsx)("div", {
                                                            className: "col-12",
                                                            children: (0, d.jsx)("div", {
                                                                className: "text-center",
                                                                children: (0, d.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "nb butn bord curve mt-30",
                                                                    children: (0, d.jsx)("span", {
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
                    }), s ? "" : (0, d.jsx)("div", {
                        className: "line bottom left"
                    })]
                })
            }
        },
        13473: function(e) {
            e.exports = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')
        }
    }
]);