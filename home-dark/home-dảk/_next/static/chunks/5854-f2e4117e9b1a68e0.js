(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5854], {
        57420: function(e, s) {
            "use strict";
            s.Z = function(e) {
                var s = [];
                if (!e.parentNode) return s;
                for (var l = e.parentNode.firstChild; l;) 1 === l.nodeType && l !== e && s.push(l), l = l.nextSibling;
                return s
            }
        },
        52767: function(e, s, l) {
            "use strict";
            l.d(s, {
                Z: function() {
                    return t
                }
            });
            var n = l(67294),
                i = l(41664),
                a = l(82806),
                c = l(57420),
                d = function(e, s) {
                    e.style.left = s
                },
                r = function(e, s) {
                    setTimeout((function() {}), e)
                },
                o = function() {
                    function e() {
                        window.scrollTo(0, 0)
                    }
                    var s = !1,
                        l = document.querySelector(".topnav.dark"),
                        n = document.querySelector(".topnav.dark .logo img"),
                        i = document.querySelector(".topnav .menu-icon");
                    i && (i.addEventListener("click", (function() {
                        s = !s, document.querySelector(".hamenu").classList.toggle("open"), s ? (d(document.querySelector(".hamenu"), "0px"), document.querySelector(".topnav .menu-icon .text ").classList.add("open"), l && l.classList.add("navlit"), n && n.setAttribute("src", a.E8), window.addEventListener("scroll", e)) : (r(300, d(document.querySelector(".hamenu"), "-100%")), document.querySelector(".topnav .menu-icon .text").classList.remove("open"), l && l.classList.remove("navlit"), n && n.setAttribute("src", a.Q1), window.removeEventListener("scroll", e))
                    })), document.querySelectorAll(".main-menu a").forEach((function(s) {
                        s.addEventListener("click", (function() {
                            r(300, d(document.querySelector(".hamenu"), "-100%")), document.querySelector(".topnav .menu-icon .text").classList.remove("open"), l && l.classList.remove("navlit"), n && n.setAttribute("src", a.Q1), window.removeEventListener("scroll", e)
                        }))
                    }))), document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(e) {
                        e.addEventListener("mouseenter", (function() {
                            this.style.opacity = "1", (0, c.Z)(this).forEach((function(e) {
                                e.style.opacity = ".5"
                            }))
                        })), e.addEventListener("mouseleave", (function() {
                            document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(e) {
                                e.style.opacity = "1"
                            }))
                        }))
                    })), document.querySelectorAll(".main-menu > li .dmenu").length && document.querySelectorAll(".main-menu > li .dmenu").forEach((function(e) {
                        e.addEventListener("click", (function() {
                            document.querySelector(".main-menu").classList.add("gosub"), (0, c.Z)(this.parentNode.parentNode).forEach((function(e) {
                                e.childNodes[1] && e.childNodes[1].classList.remove("sub-open")
                            })), this.parentNode.parentNode.childNodes[1].classList.add("sub-open")
                        }))
                    })), document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length && document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(e) {
                        e.addEventListener("click", (function() {
                            document.querySelector(".main-menu").classList.remove("gosub"), document.querySelector(".main-menu").classList.remove("sub-open")
                        }))
                    }))
                },
                h = l(85893),
                t = function(e) {
                    var s = e.theme;
                    return n.useEffect((function() {
                        o()
                    }), []), (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)("div", {
                            id: "navi",
                            className: "topnav ".concat(s && "light" === s ? "light" : ""),
                            children: (0, h.jsxs)("div", {
                                className: "container-fluid",
                                children: [(0, h.jsx)("div", {
                                    className: "logo",
                                    children: (0, h.jsx)("a", {
                                        href: "#0",
                                        children: s && "light" === s ? (0, h.jsx)("img", {
                                            src: a.Q1,
                                            alt: "logo"
                                        }) : (0, h.jsx)("img", {
                                            src: a.E8,
                                            alt: "logo"
                                        })
                                    })
                                }), (0, h.jsxs)("div", {
                                    className: "menu-icon",
                                    children: [(0, h.jsxs)("span", {
                                        className: "icon",
                                        children: [(0, h.jsx)("i", {}), (0, h.jsx)("i", {})]
                                    }), (0, h.jsx)("span", {
                                        className: "text",
                                        "data-splitting": !0,
                                        children: (0, h.jsx)("span", {
                                            className: "menu-text word",
                                            children: "Menu"
                                        })
                                    })]
                                })]
                            })
                        }), (0, h.jsx)("div", {
                            className: "hamenu",
                            children: (0, h.jsx)("div", {
                                className: "container",
                                children: (0, h.jsxs)("div", {
                                    className: "row",
                                    children: [(0, h.jsx)("div", {
                                        className: "col-lg-9 col-md-8",
                                        children: (0, h.jsx)("div", {
                                            className: "menu-links",
                                            children: (0, h.jsxs)("ul", {
                                                className: "main-menu",
                                                children: [(0, h.jsxs)("li", {
                                                    children: [(0, h.jsx)("div", {
                                                        className: "o-hidden",
                                                        children: (0, h.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [(0, h.jsx)("span", {
                                                                className: "nm",
                                                                children: "01."
                                                            }), "Home", (0, h.jsx)("i", {
                                                                className: "fas fa-angle-right"
                                                            })]
                                                        })
                                                    }), (0, h.jsx)("div", {
                                                        className: "sub-menu",
                                                        children: (0, h.jsxs)("ul", {
                                                            children: [(0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsxs)("span", {
                                                                        className: "sub-link back",
                                                                        children: [(0, h.jsx)("i", {
                                                                            className: "pe-7s-angle-left"
                                                                        }), " Go Back"]
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home1-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "01."
                                                                            }), "Main Home"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home2-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "02."
                                                                            }), "Creative Agency"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home5-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "03."
                                                                            }), "Digital Agency"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home4-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "04."
                                                                            }), "Business One Page"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home3-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "05."
                                                                            }), "Corporate Business"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home6-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "06."
                                                                            }), "Modern Agency"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home7-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "07."
                                                                            }), "Freelancer"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/homepage/home8-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "08."
                                                                            }), "Architecture"]
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }), (0, h.jsx)("li", {
                                                    children: (0, h.jsx)("div", {
                                                        className: "o-hidden",
                                                        children: (0, h.jsx)(i.default, {
                                                            href: "/about/about-dark",
                                                            children: (0, h.jsxs)("a", {
                                                                className: "link",
                                                                children: [(0, h.jsx)("span", {
                                                                    className: "nm",
                                                                    children: "02."
                                                                }), "About Us"]
                                                            })
                                                        })
                                                    })
                                                }), (0, h.jsxs)("li", {
                                                    children: [(0, h.jsx)("div", {
                                                        className: "o-hidden",
                                                        children: (0, h.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [(0, h.jsx)("span", {
                                                                className: "nm",
                                                                children: "03."
                                                            }), "Works", (0, h.jsx)("i", {
                                                                className: "fas fa-angle-right"
                                                            })]
                                                        })
                                                    }), (0, h.jsx)("div", {
                                                        className: "sub-menu",
                                                        children: (0, h.jsxs)("ul", {
                                                            children: [(0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsxs)("span", {
                                                                        className: "sub-link back",
                                                                        children: [(0, h.jsx)("i", {
                                                                            className: "pe-7s-angle-left"
                                                                        }), " Go Back"]
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/showcase/showcase-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "01."
                                                                            }), "ShowCase Parallax"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/showcase4/showcase4-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "02."
                                                                            }), "ShowCase Carousel"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/showcase3/showcase3-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "03."
                                                                            }), "ShowCase Circle"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/works/works-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "04."
                                                                            }), "Portfolio Masonry"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/works2/works2-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "05."
                                                                            }), "Portfolio Filtering"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/works3/works3-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "06."
                                                                            }), "Portfolio Gallery"]
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }), (0, h.jsxs)("li", {
                                                    children: [(0, h.jsx)("div", {
                                                        className: "o-hidden",
                                                        children: (0, h.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [(0, h.jsx)("span", {
                                                                className: "nm",
                                                                children: "04."
                                                            }), "Blogs", (0, h.jsx)("i", {
                                                                className: "fas fa-angle-right"
                                                            })]
                                                        })
                                                    }), (0, h.jsx)("div", {
                                                        className: "sub-menu",
                                                        children: (0, h.jsxs)("ul", {
                                                            children: [(0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsxs)("span", {
                                                                        className: "sub-link back",
                                                                        children: [(0, h.jsx)("i", {
                                                                            className: "pe-7s-angle-left"
                                                                        }), " Go Back"]
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/blog/blog-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "01."
                                                                            }), "Blog Standerd"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/blog-list/blog-list-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "02."
                                                                            }), "Blog List"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/blog-grid/blog-grid-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "03."
                                                                            }), "Blog Grid"]
                                                                        })
                                                                    })
                                                                })
                                                            }), (0, h.jsx)("li", {
                                                                children: (0, h.jsx)("div", {
                                                                    className: "o-hidden",
                                                                    children: (0, h.jsx)(i.default, {
                                                                        href: "/blog-details/blog-details-dark",
                                                                        children: (0, h.jsxs)("a", {
                                                                            className: "sub-link",
                                                                            children: [(0, h.jsx)("span", {
                                                                                className: "nm",
                                                                                children: "04."
                                                                            }), "Blog Details"]
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }), (0, h.jsx)("li", {
                                                    children: (0, h.jsx)("div", {
                                                        className: "o-hidden",
                                                        children: (0, h.jsx)(i.default, {
                                                            href: "/contact/contact-dark",
                                                            children: (0, h.jsxs)("a", {
                                                                className: "link",
                                                                children: [(0, h.jsx)("span", {
                                                                    className: "nm",
                                                                    children: "05."
                                                                }), "Contact"]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, h.jsx)("div", {
                                        className: "col-lg-3 col-md-4",
                                        children: (0, h.jsxs)("div", {
                                            className: "cont-info",
                                            children: [(0, h.jsxs)("div", {
                                                className: "item",
                                                children: [(0, h.jsx)("h6", {
                                                    children: "Phone :"
                                                }), (0, h.jsx)("p", {
                                                    children: "+03 762-2367-723"
                                                })]
                                            }), (0, h.jsxs)("div", {
                                                className: "item",
                                                children: [(0, h.jsx)("h6", {
                                                    children: "Address :"
                                                }), (0, h.jsx)("p", {
                                                    children: "541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io"
                                                })]
                                            }), (0, h.jsxs)("div", {
                                                className: "item",
                                                children: [(0, h.jsx)("h6", {
                                                    children: "Email :"
                                                }), (0, h.jsx)("p", {
                                                    children: (0, h.jsx)("a", {
                                                        href: "#0",
                                                        children: "Vie_website@gmail.com"
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        43434: function() {},
        30687: function() {},
        265: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')
        }
    }
]);