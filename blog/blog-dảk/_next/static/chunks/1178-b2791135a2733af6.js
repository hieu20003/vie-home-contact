(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1178], {
        7942: function(e, t, s) {
            "use strict";
            var n = s(63038);
            t.default = void 0;
            var i, r = (i = s(67294)) && i.__esModule ? i : {
                    default: i
                },
                a = s(64957),
                l = s(69898),
                o = s(90639);
            var d = {};

            function c(e, t, s, n) {
                if (e && a.isLocalURL(t)) {
                    e.prefetch(t, s, n).catch((function(e) {
                        0
                    }));
                    var i = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    d[t + "%" + s + (i ? "%" + i : "")] = !0
                }
            }
            var p = function(e) {
                var t, s = !1 !== e.prefetch,
                    i = l.useRouter(),
                    p = r.default.useMemo((function() {
                        var t = a.resolveHref(i, e.href, !0),
                            s = n(t, 2),
                            r = s[0],
                            l = s[1];
                        return {
                            href: r,
                            as: e.as ? a.resolveHref(i, e.as) : l || r
                        }
                    }), [i, e.href, e.as]),
                    u = p.href,
                    f = p.as,
                    h = e.children,
                    m = e.replace,
                    g = e.shallow,
                    v = e.scroll,
                    w = e.locale;
                "string" === typeof h && (h = r.default.createElement("a", null, h));
                var b = (t = r.default.Children.only(h)) && "object" === typeof t && t.ref,
                    y = o.useIntersection({
                        rootMargin: "200px"
                    }),
                    C = n(y, 2),
                    E = C[0],
                    x = C[1],
                    T = r.default.useCallback((function(e) {
                        E(e), b && ("function" === typeof b ? b(e) : "object" === typeof b && (b.current = e))
                    }), [b, E]);
                r.default.useEffect((function() {
                    var e = x && s && a.isLocalURL(u),
                        t = "undefined" !== typeof w ? w : i && i.locale,
                        n = d[u + "%" + f + (t ? "%" + t : "")];
                    e && !n && c(i, u, f, {
                        locale: t
                    })
                }), [f, u, x, w, s, i]);
                var S = {
                    ref: T,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, s, n, i, r, l, o) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && a.isLocalURL(s)) && (e.preventDefault(), null == l && n.indexOf("#") >= 0 && (l = !1), t[i ? "replace" : "push"](s, n, {
                                shallow: r,
                                locale: o,
                                scroll: l
                            }))
                        }(e, i, u, f, m, g, v, w)
                    },
                    onMouseEnter: function(e) {
                        a.isLocalURL(u) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), c(i, u, f, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var M = "undefined" !== typeof w ? w : i && i.locale,
                        k = i && i.isLocaleDomain && a.getDomainLocale(f, M, i && i.locales, i && i.domainLocales);
                    S.href = k || a.addBasePath(a.addLocale(f, M, i && i.defaultLocale))
                }
                return r.default.cloneElement(t, S)
            };
            t.default = p
        },
        90639: function(e, t, s) {
            "use strict";
            var n = s(63038);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    s = e.disabled || !a,
                    o = i.useRef(),
                    d = i.useState(!1),
                    c = n(d, 2),
                    p = c[0],
                    u = c[1],
                    f = i.useCallback((function(e) {
                        o.current && (o.current(), o.current = void 0), s || p || e && e.tagName && (o.current = function(e, t, s) {
                            var n = function(e) {
                                    var t = e.rootMargin || "",
                                        s = l.get(t);
                                    if (s) return s;
                                    var n = new Map,
                                        i = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = n.get(e.target),
                                                    s = e.isIntersecting || e.intersectionRatio > 0;
                                                t && s && t(s)
                                            }))
                                        }), e);
                                    return l.set(t, s = {
                                        id: t,
                                        observer: i,
                                        elements: n
                                    }), s
                                }(s),
                                i = n.id,
                                r = n.observer,
                                a = n.elements;
                            return a.set(e, t), r.observe(e),
                                function() {
                                    a.delete(e), r.unobserve(e), 0 === a.size && (r.disconnect(), l.delete(i))
                                }
                        }(e, (function(e) {
                            return e && u(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [s, t, p]);
                return i.useEffect((function() {
                    if (!a && !p) {
                        var e = r.requestIdleCallback((function() {
                            return u(!0)
                        }));
                        return function() {
                            return r.cancelIdleCallback(e)
                        }
                    }
                }), [p]), [f, p]
            };
            var i = s(67294),
                r = s(26286),
                a = "undefined" !== typeof IntersectionObserver;
            var l = new Map
        },
        53481: function() {},
        41664: function(e, t, s) {
            e.exports = s(7942)
        },
        77625: function(e, t, s) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var n, i, r = [],
                            a = !0,
                            l = !1;
                        try {
                            for (s = s.call(e); !(a = (n = s.next()).done) && (r.push(n.value), !t || r.length !== t); a = !0);
                        } catch (o) {
                            l = !0, i = o
                        } finally {
                            try {
                                a || null == s.return || s.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return n(e, t);
                        var s = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? n(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            s.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        72873: function(e, t, s) {
            "use strict";
            s.d(t, {
                t: function() {
                    return w
                },
                o: function() {
                    return y
                }
            });
            var n = s(67294),
                i = s(88116);

            function r(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function a(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : a(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function l(e = {}) {
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e = "") {
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function u(e, t) {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
                        n = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    n && n.slidesPerView && (s = n.slidesPerView)
                }
                let n = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return n += t.loopAdditionalSlides, n > e.length && (n = e.length), n
            }

            function f(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = f(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function m({
                swiper: e,
                slides: t,
                passedParams: s,
                changedParams: n,
                nextEl: i,
                prevEl: l,
                scrollbarEl: o,
                paginationEl: d
            }) {
                const c = n.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: p,
                        pagination: u,
                        navigation: f,
                        scrollbar: h,
                        virtual: m,
                        thumbs: g
                    } = e;
                let v, w, b, y, C;
                n.includes("thumbs") && s.thumbs && s.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (v = !0), n.includes("controller") && s.controller && s.controller.control && p.controller && !p.controller.control && (w = !0), n.includes("pagination") && s.pagination && (s.pagination.el || d) && (p.pagination || !1 === p.pagination) && u && !u.el && (b = !0), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (p.scrollbar || !1 === p.scrollbar) && h && !h.el && (y = !0), n.includes("navigation") && s.navigation && (s.navigation.prevEl || l) && (s.navigation.nextEl || i) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (C = !0);
                if (c.forEach((t => {
                        if (r(p[t]) && r(s[t])) a(p[t], s[t]);
                        else {
                            const i = s[t];
                            !0 !== i && !1 !== i || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? p[t] = s[t] : !1 === i && e[n = t] && (e[n].destroy(), "navigation" === n ? (p[n].prevEl = void 0, p[n].nextEl = void 0, e[n].prevEl = void 0, e[n].nextEl = void 0) : (p[n].el = void 0, e[n].el = void 0))
                        }
                        var n
                    })), n.includes("children") && m && p.virtual.enabled ? (m.slides = t, m.update(!0)) : n.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), v) {
                    g.init() && g.update(!0)
                }
                w && (e.controller.control = p.controller.control), b && (d && (p.pagination.el = d), u.init(), u.render(), u.update()), y && (o && (p.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()), C && (i && (p.navigation.nextEl = i), l && (p.navigation.prevEl = l), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, !1), e.update()
            }

            function g(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }

            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const w = (0, n.forwardRef)((({
                className: e,
                tag: t = "div",
                wrapperTag: s = "div",
                children: f,
                onSwiper: w,
                ...b
            } = {}, y) => {
                let C = !1;
                const [E, x] = (0, n.useState)("swiper"), [T, S] = (0, n.useState)(null), [M, k] = (0, n.useState)(!1), P = (0, n.useRef)(!1), $ = (0, n.useRef)(null), O = (0, n.useRef)(null), L = (0, n.useRef)(null), _ = (0, n.useRef)(null), I = (0, n.useRef)(null), A = (0, n.useRef)(null), z = (0, n.useRef)(null), D = (0, n.useRef)(null), {
                    params: N,
                    passedParams: G,
                    rest: B,
                    events: j
                } = function(e = {}) {
                    const t = {
                            on: {}
                        },
                        s = {},
                        n = {};
                    a(t, i.ZP.defaults), a(t, i.ZP.extendedDefaults), t._emitClasses = !0, t.init = !1;
                    const l = {},
                        o = p.map((e => e.replace(/_/, "")));
                    return Object.keys(e).forEach((i => {
                        o.indexOf(i) >= 0 ? r(e[i]) ? (t[i] = {}, n[i] = {}, a(t[i], e[i]), a(n[i], e[i])) : (t[i] = e[i], n[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i] ? s[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : l[i] = e[i]
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
                    })), {
                        params: t,
                        passedParams: n,
                        rest: l,
                        events: s
                    }
                }(b), {
                    slides: F,
                    slots: H
                } = h(f), R = () => {
                    k(!M)
                };
                if (Object.assign(N.on, {
                        _containerClasses(e, t) {
                            x(t)
                        }
                    }), !$.current && (Object.assign(N.on, j), C = !0, O.current = function(e) {
                        return new i.ZP(e)
                    }(N), O.current.loopCreate = () => {}, O.current.loopDestroy = () => {}, N.loop && (O.current.loopedSlides = u(F, N)), O.current.virtual && O.current.params.virtual.enabled)) {
                    O.current.virtual.slides = F;
                    const e = {
                        cache: !1,
                        slides: F,
                        renderExternal: S,
                        renderExternalUpdate: !1
                    };
                    a(O.current.params.virtual, e), a(O.current.originalParams.virtual, e)
                }
                O.current && O.current.on("_beforeBreakpoint", R);
                return (0, n.useEffect)((() => () => {
                    O.current && O.current.off("_beforeBreakpoint", R)
                })), (0, n.useEffect)((() => {
                    !P.current && O.current && (O.current.emitSlidesClasses(), P.current = !0)
                })), g((() => {
                    if (y && (y.current = $.current), $.current) return function({
                        el: e,
                        nextEl: t,
                        prevEl: s,
                        paginationEl: n,
                        scrollbarEl: i,
                        swiper: r
                    }, a) {
                        l(a) && t && s && (r.params.navigation.nextEl = t, r.originalParams.navigation.nextEl = t, r.params.navigation.prevEl = s, r.originalParams.navigation.prevEl = s), o(a) && n && (r.params.pagination.el = n, r.originalParams.pagination.el = n), d(a) && i && (r.params.scrollbar.el = i, r.originalParams.scrollbar.el = i), r.init(e)
                    }({
                        el: $.current,
                        nextEl: I.current,
                        prevEl: A.current,
                        paginationEl: z.current,
                        scrollbarEl: D.current,
                        swiper: O.current
                    }, N), w && w(O.current), () => {
                        O.current && !O.current.destroyed && O.current.destroy(!0, !1)
                    }
                }), []), g((() => {
                    !C && j && O.current && Object.keys(j).forEach((e => {
                        O.current.on(e, j[e])
                    }));
                    const e = function(e, t, s, n) {
                        const i = [];
                        if (!t) return i;
                        const a = e => {
                                i.indexOf(e) < 0 && i.push(e)
                            },
                            l = n.map((e => e.key)),
                            o = s.map((e => e.key));
                        return l.join("") !== o.join("") && a("children"), n.length !== s.length && a("children"), p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (r(e[s]) && r(t[s])) {
                                    const n = Object.keys(e[s]),
                                        i = Object.keys(t[s]);
                                    n.length !== i.length ? a(s) : (n.forEach((n => {
                                        e[s][n] !== t[s][n] && a(s)
                                    })), i.forEach((n => {
                                        e[s][n] !== t[s][n] && a(s)
                                    })))
                                } else e[s] !== t[s] && a(s)
                        })), i
                    }(G, L.current, F, _.current);
                    return L.current = G, _.current = F, e.length && O.current && !O.current.destroyed && m({
                        swiper: O.current,
                        slides: F,
                        passedParams: G,
                        changedParams: e,
                        nextEl: I.current,
                        prevEl: A.current,
                        scrollbarEl: D.current,
                        paginationEl: z.current
                    }), () => {
                        j && O.current && Object.keys(j).forEach((e => {
                            O.current.off(e, j[e])
                        }))
                    }
                })), g((() => {
                    var e;
                    !(e = O.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [T]), n.createElement(t, v({
                    ref: $,
                    className: c(`${E}${e?` ${e}`:""}`)
                }, B), H["container-start"], l(N) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: A,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: I,
                    className: "swiper-button-next"
                })), d(N) && n.createElement("div", {
                    ref: D,
                    className: "swiper-scrollbar"
                }), o(N) && n.createElement("div", {
                    ref: z,
                    className: "swiper-pagination"
                }), n.createElement(s, {
                    className: "swiper-wrapper"
                }, H["wrapper-start"], N.virtual ? function(e, t, s) {
                    if (!s) return null;
                    const i = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => n.cloneElement(t, {
                        swiper: e,
                        style: i
                    })))
                }(O.current, F, T) : !N.loop || O.current && O.current.destroyed ? F.map((e => n.cloneElement(e, {
                    swiper: O.current
                }))) : function(e, t, s) {
                    const i = t.map(((t, s) => n.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function r(e, t, i) {
                        return n.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${i}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - i.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = n.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                i.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = i.length);
                    const a = u(i, s),
                        l = [],
                        o = [];
                    return i.forEach(((e, t) => {
                        t < a && o.push(r(e, t, "prepend")), t < i.length && t >= i.length - a && l.push(r(e, t, "append"))
                    })), e && (e.loopedSlides = a), [...l, ...i, ...o]
                }(O.current, F, N), H["wrapper-end"]), H["container-end"])
            }));

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            w.displayName = "Swiper";
            const y = (0, n.forwardRef)((({
                tag: e = "div",
                children: t,
                className: s = "",
                swiper: i,
                zoom: r,
                virtualIndex: a,
                ...l
            } = {}, o) => {
                const d = (0, n.useRef)(null),
                    [p, u] = (0, n.useState)("swiper-slide");

                function f(e, t, s) {
                    t === d.current && u(s)
                }
                let h;
                g((() => {
                    if (o && (o.current = d.current), d.current && i) {
                        if (!i.destroyed) return i.on("_slideClass", f), () => {
                            i && i.off("_slideClass", f)
                        };
                        "swiper-slide" !== p && u("swiper-slide")
                    }
                })), g((() => {
                    i && d.current && u(i.getSlideClasses(d.current))
                }), [i]), "function" === typeof t && (h = {
                    isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
                    isVisible: p.indexOf("swiper-slide-visible") >= 0,
                    isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
                    isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
                    isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
                });
                const m = () => "function" === typeof t ? t(h) : t;
                return n.createElement(e, b({
                    ref: d,
                    className: c(`${p}${s?` ${s}`:""}`),
                    "data-swiper-slide-index": a
                }, l), r ? n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof r ? r : void 0
                }, m()) : m())
            }));
            y.displayName = "SwiperSlide"
        },
        88116: function(e, t, s) {
            "use strict";

            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
                }))
            }
            s.d(t, {
                pt: function() {
                    return ee
                },
                xW: function() {
                    return se
                },
                Gk: function() {
                    return Y
                },
                W_: function() {
                    return K
                },
                tl: function() {
                    return J
                },
                VS: function() {
                    return Q
                },
                ZP: function() {
                    return X
                }
            });
            const r = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return i(e, r), e
            }
            const l = {
                document: r,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return i(e, l), e
            }
            class d extends Array {
                constructor(e) {
                    super(...e || []),
                        function(e) {
                            const t = e.__proto__;
                            Object.defineProperty(e, "__proto__", {
                                get: () => t,
                                set(e) {
                                    t.__proto__ = e
                                }
                            })
                        }(this)
                }
            }

            function c(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...c(e)) : t.push(e)
                })), t
            }

            function p(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function u(e, t) {
                const s = o(),
                    n = a();
                let i = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(i);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = n.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) i.push(t.childNodes[s])
                    } else i = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            n = t.querySelectorAll(e);
                        for (let i = 0; i < n.length; i += 1) s.push(n[i]);
                        return s
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === s || e === n) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    i = e
                }
                return new d(function(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(i))
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, s, n, i] = e;

                    function r(e) {
                        const t = e.target;
                        if (!t) return;
                        const i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), u(t).is(s)) n.apply(t, i);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && n.apply(e[t], i)
                        }
                    }

                    function a(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const l = t.split(" ");
                    let o;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (o = 0; o < l.length; o += 1) {
                                const t = l[o];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: n,
                                    proxyListener: r
                                }), e.addEventListener(t, r, i)
                            } else
                                for (o = 0; o < l.length; o += 1) {
                                    const t = l[o];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: n,
                                        proxyListener: a
                                    }), e.addEventListener(t, a, i)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, s, n, i] = e;
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const r = t.split(" ");
                    for (let a = 0; a < r.length; a += 1) {
                        const e = r[a];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            let a;
                            if (!s && r.dom7Listeners ? a = r.dom7Listeners[e] : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]), a && a.length)
                                for (let t = a.length - 1; t >= 0; t -= 1) {
                                    const s = a[t];
                                    n && s.listener === n || n && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === n ? (r.removeEventListener(e, s.proxyListener, i), a.splice(t, 1)) : n || (r.removeEventListener(e, s.proxyListener, i), a.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = o(),
                        s = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < s.length; i += 1) {
                        const r = s[i];
                        for (let s = 0; s < this.length; s += 1) {
                            const i = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(r, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = o();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = o(),
                            t = a(),
                            s = this[0],
                            n = s.getBoundingClientRect(),
                            i = t.body,
                            r = s.clientTop || i.clientTop || 0,
                            l = s.clientLeft || i.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: n.top + d - r,
                            left: n.left + c - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const s = o();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (const t in e) this[n].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = o(),
                        s = a(),
                        n = this[0];
                    let i, r;
                    if (!n || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (i = u(e), r = 0; r < i.length; r += 1)
                            if (i[r] === n) return !0;
                        return !1
                    }
                    if (e === s) return n === s;
                    if (e === t) return n === t;
                    if (e.nodeType || e instanceof d) {
                        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
                            if (i[r] === n) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]])
                    }
                    return u([this[e]])
                },
                append: function(...e) {
                    let t;
                    const s = a();
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const n = s.createElement("div");
                                for (n.innerHTML = t; n.firstChild;) this[e].appendChild(n.firstChild)
                            } else if (t instanceof d)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = a();
                    let s, n;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const i = t.createElement("div");
                            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[s].insertBefore(i.childNodes[n], this[s].childNodes[0])
                        } else if (e instanceof d)
                        for (n = 0; n < e.length; n += 1) this[s].insertBefore(e[n], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const n = s.nextElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
                    }
                    return u([])
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const n = s.previousElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let n = this[s].parentNode;
                        for (; n;) e ? u(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return u(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return u(t)
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].children;
                        for (let s = 0; s < n.length; s += 1) e && !u(n[s]).is(e) || t.push(n[s])
                    }
                    return u(t)
                },
                filter: function(e) {
                    return u(p(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(u.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var g = u;

            function v(e, t = 0) {
                return setTimeout(e, t)
            }

            function w() {
                return Date.now()
            }

            function b(e, t = "x") {
                const s = o();
                let n, i, r;
                const a = function(e) {
                    const t = o();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function y(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function C(...e) {
                const t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < e.length; i += 1) {
                    const r = e[i];
                    if (void 0 !== r && null !== r && (n = r, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                        const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                        for (let s = 0, n = e.length; s < n; s += 1) {
                            const n = e[s],
                                i = Object.getOwnPropertyDescriptor(r, n);
                            void 0 !== i && i.enumerable && (y(t[n]) && y(r[n]) ? r[n].__swiper__ ? t[n] = r[n] : C(t[n], r[n]) : !y(t[n]) && y(r[n]) ? (t[n] = {}, r[n].__swiper__ ? t[n] = r[n] : C(t[n], r[n])) : t[n] = r[n])
                        }
                    }
                }
                var n;
                return t
            }

            function E(e, t, s) {
                e.style.setProperty(t, s)
            }

            function x({
                swiper: e,
                targetPosition: t,
                side: s
            }) {
                const n = o(),
                    i = -e.translate;
                let r, a = null;
                const l = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
                const d = t > i ? "next" : "prev",
                    c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    p = () => {
                        r = (new Date).getTime(), null === a && (a = r);
                        const o = Math.max(Math.min((r - a) / l, 1), 0),
                            d = .5 - Math.cos(o * Math.PI) / 2;
                        let u = i + d * (t - i);
                        if (c(u, t) && (u = t), e.wrapperEl.scrollTo({
                                [s]: u
                            }), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                [s]: u
                            })
                        })), void n.cancelAnimationFrame(e.cssModeFrameID);
                        e.cssModeFrameID = n.requestAnimationFrame(p)
                    };
                p()
            }
            let T, S, M;

            function k() {
                return T || (T = function() {
                    const e = o(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), T
            }

            function P(e = {}) {
                return S || (S = function({
                    userAgent: e
                } = {}) {
                    const t = k(),
                        s = o(),
                        n = s.navigator.platform,
                        i = e || s.navigator.userAgent,
                        r = {
                            ios: !1,
                            android: !1
                        },
                        a = s.screen.width,
                        l = s.screen.height,
                        d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = i.match(/(iPad).*OS\s([\d_]+)/);
                    const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === n;
                    let h = "MacIntel" === n;
                    return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), d && !f && (r.os = "android", r.android = !0), (c || u || p) && (r.os = "ios", r.ios = !0), r
                }(e)), S
            }

            function $() {
                return M || (M = function() {
                    const e = o();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), M
            }
            var O = {
                on(e, t, s) {
                    const n = this;
                    if ("function" !== typeof t) return n;
                    const i = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
                    })), n
                },
                once(e, t, s) {
                    const n = this;
                    if ("function" !== typeof t) return n;

                    function i(...s) {
                        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, s)
                    }
                    return i.__emitterProxy = t, n.on(e, i, s)
                },
                onAny(e, t) {
                    const s = this;
                    if ("function" !== typeof e) return s;
                    const n = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((n, i) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                        }))
                    })), s) : s
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let s, n, i;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? (s = e[0], n = e.slice(1, e.length), i = t) : (s = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i);
                    return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(i, [e, ...n])
                        })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                            e.apply(i, n)
                        }))
                    })), t
                }
            };

            function L({
                swiper: e,
                runCallbacks: t,
                direction: s,
                step: n
            }) {
                const {
                    activeIndex: i,
                    previousIndex: r
                } = e;
                let a = s;
                if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${n}`), t && i !== r) {
                    if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
                    e.emit(`slideChangeTransition${n}`), "next" === a ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
                }
            }

            function _(e) {
                const t = this,
                    s = a(),
                    n = o(),
                    i = t.touchEventsData,
                    {
                        params: r,
                        touches: l,
                        enabled: d
                    } = t;
                if (!d) return;
                if (t.animating && r.preventInteractionOnTransition) return;
                !t.animating && r.cssMode && r.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = g(c.target);
                if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
                if (i.isTouchEvent = "touchstart" === c.type, !i.isTouchEvent && "which" in c && 3 === c.which) return;
                if (!i.isTouchEvent && "button" in c && c.button > 0) return;
                if (i.isTouched && i.isMoved) return;
                !!r.noSwipingClass && "" !== r.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = g(e.path[0]));
                const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    f = !(!c.target || !c.target.shadowRoot);
                if (r.noSwiping && (f ? function(e, t = this) {
                        return function t(s) {
                            return s && s !== a() && s !== o() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null
                        }(t)
                    }(u, c.target) : p.closest(u)[0])) return void(t.allowClick = !0);
                if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
                l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                const h = l.currentX,
                    m = l.currentY,
                    v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (v && (h <= b || h >= n.innerWidth - b)) {
                    if ("prevent" !== v) return;
                    e.preventDefault()
                }
                if (Object.assign(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = h, l.startY = m, i.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== c.type) {
                    let e = !0;
                    p.is(i.focusableElements) && (e = !1), s.activeElement && g(s.activeElement).is(i.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
                    const n = e && t.allowTouchMove && r.touchStartPreventDefault;
                    !r.touchStartForcePreventDefault && !n || p[0].isContentEditable || c.preventDefault()
                }
                t.emit("touchStart", c)
            }

            function I(e) {
                const t = a(),
                    s = this,
                    n = s.touchEventsData,
                    {
                        params: i,
                        touches: r,
                        rtlTranslate: l,
                        enabled: o
                    } = s;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
                if (n.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    p = "touchmove" === d.type ? c.pageX : d.pageX,
                    u = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return r.startX = p, void(r.startY = u);
                if (!s.allowTouchMove) return s.allowClick = !1, void(n.isTouched && (Object.assign(r, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), n.touchStartTime = w()));
                if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (s.isVertical()) {
                        if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (p < r.startX && s.translate <= s.maxTranslate() || p > r.startX && s.translate >= s.minTranslate()) return;
                if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
                if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                r.currentX = p, r.currentY = u;
                const f = r.currentX - r.startX,
                    h = r.currentY - r.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                }
                if (n.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                s.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && s.loopFix(), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), n.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                r.diff = m, m *= i.touchRatio, l && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
                let v = !0,
                    b = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (b = 0), m > 0 && n.currentTranslate > s.minTranslate() ? (v = !1, i.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + m) ** b)) : m < 0 && n.currentTranslate < s.maxTranslate() && (v = !1, i.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - m) ** b)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
                    if (!(Math.abs(m) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
            }

            function A(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: n,
                        touches: i,
                        rtlTranslate: r,
                        slidesGrid: a,
                        enabled: l
                    } = t;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = w(),
                    c = d - s.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = w(), v((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = n.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
                if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let g = 0; g < a.length; g += g < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof a[g + e] ? p >= a[g] && p < a[g + e] && (u = g, f = a[g + e] - a[g]) : p >= a[g] && (u = g, f = a[a.length - 1] - a[a.length - 2])
                }
                const h = (p - a[u]) / f,
                    m = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (c > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (h >= n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)), "prev" === t.swipeDirection && (h > 1 - n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(u + m) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(u + m), "prev" === t.swipeDirection && t.slideTo(u))
                }
            }

            function z() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: i,
                    snapGrid: r
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }

            function D(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function N() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: n
                    } = e;
                if (!n) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const r = e.maxTranslate() - e.minTranslate();
                i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let G = !1;

            function B() {}
            const j = (e, t) => {
                const s = a(),
                    {
                        params: n,
                        touchEvents: i,
                        el: r,
                        wrapperEl: l,
                        device: o,
                        support: d
                    } = e,
                    c = !!n.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== i.start || !d.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[p](i.start, e.onTouchStart, t), r[p](i.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), r[p](i.end, e.onTouchEnd, t), i.cancel && r[p](i.cancel, e.onTouchEnd, t)
                } else r[p](i.start, e.onTouchStart, !1), s[p](i.move, e.onTouchMove, c), s[p](i.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && r[p]("click", e.onClick, !0), n.cssMode && l[p]("scroll", e.onScroll), n.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[u]("observerUpdate", z, !0)
            };
            const F = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var H = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function R(e, t) {
                return function(s = {}) {
                    const n = Object.keys(s)[0],
                        i = s[n];
                    "object" === typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), C(t, s)) : C(t, s)) : C(t, s)
                }
            }
            const V = {
                    eventsEmitter: O,
                    update: {
                        updateSize: function() {
                            const e = this;
                            let t, s;
                            const n = e.$el;
                            t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), s = s - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                                width: t,
                                height: s,
                                size: e.isHorizontal() ? t : s
                            }))
                        },
                        updateSlides: function() {
                            const e = this;

                            function t(t) {
                                return e.isHorizontal() ? t : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                }[t]
                            }

                            function s(e, s) {
                                return parseFloat(e.getPropertyValue(t(s)) || 0)
                            }
                            const n = e.params,
                                {
                                    $wrapperEl: i,
                                    size: r,
                                    rtlTranslate: a,
                                    wrongRTL: l
                                } = e,
                                o = e.virtual && n.virtual.enabled,
                                d = o ? e.virtual.slides.length : e.slides.length,
                                c = i.children(`.${e.params.slideClass}`),
                                p = o ? e.virtual.slides.length : c.length;
                            let u = [];
                            const f = [],
                                h = [];
                            let m = n.slidesOffsetBefore;
                            "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
                            let g = n.slidesOffsetAfter;
                            "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
                            const v = e.snapGrid.length,
                                w = e.slidesGrid.length;
                            let b = n.spaceBetween,
                                y = -m,
                                C = 0,
                                x = 0;
                            if ("undefined" === typeof r) return;
                            "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * r), e.virtualSize = -b, a ? c.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : c.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), n.centeredSlides && n.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                            const T = n.grid && n.grid.rows > 1 && e.grid;
                            let S;
                            T && e.grid.initSlides(p);
                            const M = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                            for (let E = 0; E < p; E += 1) {
                                S = 0;
                                const i = c.eq(E);
                                if (T && e.grid.updateSlide(E, i, p, t), "none" !== i.css("display")) {
                                    if ("auto" === n.slidesPerView) {
                                        M && (c[E].style[t("width")] = "");
                                        const r = getComputedStyle(i[0]),
                                            a = i[0].style.transform,
                                            l = i[0].style.webkitTransform;
                                        if (a && (i[0].style.transform = "none"), l && (i[0].style.webkitTransform = "none"), n.roundLengths) S = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                                        else {
                                            const e = s(r, "width"),
                                                t = s(r, "padding-left"),
                                                n = s(r, "padding-right"),
                                                a = s(r, "margin-left"),
                                                l = s(r, "margin-right"),
                                                o = r.getPropertyValue("box-sizing");
                                            if (o && "border-box" === o) S = e + a + l;
                                            else {
                                                const {
                                                    clientWidth: s,
                                                    offsetWidth: r
                                                } = i[0];
                                                S = e + t + n + a + l + (r - s)
                                            }
                                        }
                                        a && (i[0].style.transform = a), l && (i[0].style.webkitTransform = l), n.roundLengths && (S = Math.floor(S))
                                    } else S = (r - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (S = Math.floor(S)), c[E] && (c[E].style[t("width")] = `${S}px`);
                                    c[E] && (c[E].swiperSlideSize = S), h.push(S), n.centeredSlides ? (y = y + S / 2 + C / 2 + b, 0 === C && 0 !== E && (y = y - r / 2 - b), 0 === E && (y = y - r / 2 - b), Math.abs(y) < .001 && (y = 0), n.roundLengths && (y = Math.floor(y)), x % n.slidesPerGroup === 0 && u.push(y), f.push(y)) : (n.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), y = y + S + b), e.virtualSize += S + b, C = S, x += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && l && ("slide" === n.effect || "coverflow" === n.effect) && i.css({
                                    width: `${e.virtualSize+n.spaceBetween}px`
                                }), n.setWrapperSize && i.css({
                                    [t("width")]: `${e.virtualSize+n.spaceBetween}px`
                                }), T && e.grid.updateWrapperSize(S, u, t), !n.centeredSlides) {
                                const t = [];
                                for (let s = 0; s < u.length; s += 1) {
                                    let i = u[s];
                                    n.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                                }
                                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                            }
                            if (0 === u.length && (u = [0]), 0 !== n.spaceBetween) {
                                const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                                c.filter(((e, t) => !n.cssMode || t !== c.length - 1)).css({
                                    [s]: `${b}px`
                                })
                            }
                            if (n.centeredSlides && n.centeredSlidesBounds) {
                                let e = 0;
                                h.forEach((t => {
                                    e += t + (n.spaceBetween ? n.spaceBetween : 0)
                                })), e -= n.spaceBetween;
                                const t = e - r;
                                u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                            }
                            if (n.centerInsufficientSlides) {
                                let e = 0;
                                if (h.forEach((t => {
                                        e += t + (n.spaceBetween ? n.spaceBetween : 0)
                                    })), e -= n.spaceBetween, e < r) {
                                    const t = (r - e) / 2;
                                    u.forEach(((e, s) => {
                                        u[s] = e - t
                                    })), f.forEach(((e, s) => {
                                        f[s] = e + t
                                    }))
                                }
                            }
                            if (Object.assign(e, {
                                    slides: c,
                                    snapGrid: u,
                                    slidesGrid: f,
                                    slidesSizesGrid: h
                                }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                                E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                                const t = -e.snapGrid[0],
                                    s = -e.slidesGrid[0];
                                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                            }
                            p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset()
                        },
                        updateAutoHeight: function(e) {
                            const t = this,
                                s = [],
                                n = t.virtual && t.params.virtual.enabled;
                            let i, r = 0;
                            "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                            const a = e => n ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                                if (t.params.centeredSlides) t.visibleSlides.each((e => {
                                    s.push(e)
                                }));
                                else
                                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                        const e = t.activeIndex + i;
                                        if (e > t.slides.length && !n) break;
                                        s.push(a(e))
                                    } else s.push(a(t.activeIndex));
                            for (i = 0; i < s.length; i += 1)
                                if ("undefined" !== typeof s[i]) {
                                    const e = s[i].offsetHeight;
                                    r = e > r ? e : r
                                }
                            r && t.$wrapperEl.css("height", `${r}px`)
                        },
                        updateSlidesOffset: function() {
                            const e = this,
                                t = e.slides;
                            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            const t = this,
                                s = t.params,
                                {
                                    slides: n,
                                    rtlTranslate: i,
                                    snapGrid: r
                                } = t;
                            if (0 === n.length) return;
                            "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                            let a = -e;
                            i && (a = e), n.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let l = 0; l < n.length; l += 1) {
                                const e = n[l];
                                let o = e.swiperSlideOffset;
                                s.cssMode && s.centeredSlides && (o -= n[0].swiperSlideOffset);
                                const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                                    c = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                                    p = -(a - o),
                                    u = p + t.slidesSizesGrid[l];
                                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l), n.eq(l).addClass(s.slideVisibleClass)), e.progress = i ? -d : d, e.originalProgress = i ? -c : c
                            }
                            t.visibleSlides = g(t.visibleSlides)
                        },
                        updateProgress: function(e) {
                            const t = this;
                            if ("undefined" === typeof e) {
                                const s = t.rtlTranslate ? -1 : 1;
                                e = t && t.translate && t.translate * s || 0
                            }
                            const s = t.params,
                                n = t.maxTranslate() - t.minTranslate();
                            let {
                                progress: i,
                                isBeginning: r,
                                isEnd: a
                            } = t;
                            const l = r,
                                o = a;
                            0 === n ? (i = 0, r = !0, a = !0) : (i = (e - t.minTranslate()) / n, r = i <= 0, a = i >= 1), Object.assign(t, {
                                progress: i,
                                isBeginning: r,
                                isEnd: a
                            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), a && !o && t.emit("reachEnd toEdge"), (l && !r || o && !a) && t.emit("fromEdge"), t.emit("progress", i)
                        },
                        updateSlidesClasses: function() {
                            const e = this,
                                {
                                    slides: t,
                                    params: s,
                                    $wrapperEl: n,
                                    activeIndex: i,
                                    realIndex: r
                                } = e,
                                a = e.virtual && s.virtual.enabled;
                            let l;
                            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            const t = this,
                                s = t.rtlTranslate ? t.translate : -t.translate,
                                {
                                    slidesGrid: n,
                                    snapGrid: i,
                                    params: r,
                                    activeIndex: a,
                                    realIndex: l,
                                    snapIndex: o
                                } = t;
                            let d, c = e;
                            if ("undefined" === typeof c) {
                                for (let e = 0; e < n.length; e += 1) "undefined" !== typeof n[e + 1] ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2 ? c = e : s >= n[e] && s < n[e + 1] && (c = e + 1) : s >= n[e] && (c = e);
                                r.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                            }
                            if (i.indexOf(s) >= 0) d = i.indexOf(s);
                            else {
                                const e = Math.min(r.slidesPerGroupSkip, c);
                                d = e + Math.floor((c - e) / r.slidesPerGroup)
                            }
                            if (d >= i.length && (d = i.length - 1), c === a) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                            Object.assign(t, {
                                snapIndex: d,
                                realIndex: p,
                                previousIndex: a,
                                activeIndex: c
                            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            const t = this,
                                s = t.params,
                                n = g(e.target).closest(`.${s.slideClass}`)[0];
                            let i, r = !1;
                            if (n)
                                for (let a = 0; a < t.slides.length; a += 1)
                                    if (t.slides[a] === n) {
                                        r = !0, i = a;
                                        break
                                    }
                            if (!n || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                            t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                            const {
                                params: t,
                                rtlTranslate: s,
                                translate: n,
                                $wrapperEl: i
                            } = this;
                            if (t.virtualTranslate) return s ? -n : n;
                            if (t.cssMode) return n;
                            let r = b(i[0], e);
                            return s && (r = -r), r || 0
                        },
                        setTranslate: function(e, t) {
                            const s = this,
                                {
                                    rtlTranslate: n,
                                    params: i,
                                    $wrapperEl: r,
                                    wrapperEl: a,
                                    progress: l
                                } = s;
                            let o, d = 0,
                                c = 0;
                            s.isHorizontal() ? d = n ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                            const p = s.maxTranslate() - s.minTranslate();
                            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, s = !0, n = !0, i) {
                            const r = this,
                                {
                                    params: a,
                                    wrapperEl: l
                                } = r;
                            if (r.animating && a.preventInteractionOnTransition) return !1;
                            const o = r.minTranslate(),
                                d = r.maxTranslate();
                            let c;
                            if (c = n && e > o ? o : n && e < d ? d : e, r.updateProgress(c), a.cssMode) {
                                const e = r.isHorizontal();
                                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                                else {
                                    if (!r.support.smoothScroll) return x({
                                        swiper: r,
                                        targetPosition: -c,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    l.scrollTo({
                                        [e ? "left" : "top"]: -c,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
                            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            const s = this,
                                {
                                    params: n
                                } = s;
                            n.cssMode || (n.autoHeight && s.updateAutoHeight(), L({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            const s = this,
                                {
                                    params: n
                                } = s;
                            s.animating = !1, n.cssMode || (s.setTransition(0), L({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, s = !0, n, i) {
                            if ("number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" === typeof e) {
                                const t = parseInt(e, 10);
                                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t
                            }
                            const r = this;
                            let a = e;
                            a < 0 && (a = 0);
                            const {
                                params: l,
                                snapGrid: o,
                                slidesGrid: d,
                                previousIndex: c,
                                activeIndex: p,
                                rtlTranslate: u,
                                wrapperEl: f,
                                enabled: h
                            } = r;
                            if (r.animating && l.preventInteractionOnTransition || !h && !n && !i) return !1;
                            const m = Math.min(r.params.slidesPerGroupSkip, a);
                            let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
                            g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                            const v = -o[g];
                            if (r.updateProgress(v), l.normalizeSlideIndex)
                                for (let b = 0; b < d.length; b += 1) {
                                    const e = -Math.floor(100 * v),
                                        t = Math.floor(100 * d[b]),
                                        s = Math.floor(100 * d[b + 1]);
                                    "undefined" !== typeof d[b + 1] ? e >= t && e < s - (s - t) / 2 ? a = b : e >= t && e < s && (a = b + 1) : e >= t && (a = b)
                                }
                            if (r.initialized && a !== p) {
                                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== a) return !1
                            }
                            let w;
                            if (w = a > p ? "next" : a < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
                            if (l.cssMode) {
                                const e = r.isHorizontal(),
                                    s = u ? v : -v;
                                if (0 === t) {
                                    const t = r.virtual && r.params.virtual.enabled;
                                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                                    }))
                                } else {
                                    if (!r.support.smoothScroll) return x({
                                        swiper: r,
                                        targetPosition: s,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    f.scrollTo({
                                        [e ? "left" : "top"]: s,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(s, w), r.transitionEnd(s, w)) : (r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(s, w), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w))
                            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, s = !0, n) {
                            const i = this;
                            let r = e;
                            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n)
                        },
                        slideNext: function(e = this.params.speed, t = !0, s) {
                            const n = this,
                                {
                                    animating: i,
                                    enabled: r,
                                    params: a
                                } = n;
                            if (!r) return n;
                            let l = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                            const o = n.activeIndex < a.slidesPerGroupSkip ? 1 : l;
                            if (a.loop) {
                                if (i && a.loopPreventsSlide) return !1;
                                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                            }
                            return n.slideTo(n.activeIndex + o, e, t, s)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, s) {
                            const n = this,
                                {
                                    params: i,
                                    animating: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: o,
                                    enabled: d
                                } = n;
                            if (!d) return n;
                            if (i.loop) {
                                if (r && i.loopPreventsSlide) return !1;
                                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                            }

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            const p = c(o ? n.translate : -n.translate),
                                u = a.map((e => c(e)));
                            let f = a[u.indexOf(p) - 1];
                            if ("undefined" === typeof f && i.cssMode) {
                                let e;
                                a.forEach(((t, s) => {
                                    p >= t && (e = s)
                                })), "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e])
                            }
                            let h = 0;
                            return "undefined" !== typeof f && (h = l.indexOf(f), h < 0 && (h = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), n.slideTo(h, e, t, s)
                        },
                        slideReset: function(e = this.params.speed, t = !0, s) {
                            return this.slideTo(this.activeIndex, e, t, s)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, s, n = .5) {
                            const i = this;
                            let r = i.activeIndex;
                            const a = Math.min(i.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / i.params.slidesPerGroup),
                                o = i.rtlTranslate ? i.translate : -i.translate;
                            if (o >= i.snapGrid[l]) {
                                const e = i.snapGrid[l];
                                o - e > (i.snapGrid[l + 1] - e) * n && (r += i.params.slidesPerGroup)
                            } else {
                                const e = i.snapGrid[l - 1];
                                o - e <= (i.snapGrid[l] - e) * n && (r -= i.params.slidesPerGroup)
                            }
                            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
                        },
                        slideToClickedSlide: function() {
                            const e = this,
                                {
                                    params: t,
                                    $wrapperEl: s
                                } = e,
                                n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                            let i, r = e.clickedIndex;
                            if (t.loop) {
                                if (e.animating) return;
                                i = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                                    e.slideTo(r)
                                }))) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                                    e.slideTo(r)
                                }))) : e.slideTo(r)
                            } else e.slideTo(r)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            const e = this,
                                t = a(),
                                {
                                    params: s,
                                    $wrapperEl: n
                                } = e,
                                i = n.children().length > 0 ? g(n.children()[0].parentNode) : n;
                            i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                            let r = i.children(`.${s.slideClass}`);
                            if (s.loopFillGroupWithBlank) {
                                const e = s.slidesPerGroup - r.length % s.slidesPerGroup;
                                if (e !== s.slidesPerGroup) {
                                    for (let n = 0; n < e; n += 1) {
                                        const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                        i.append(e)
                                    }
                                    r = i.children(`.${s.slideClass}`)
                                }
                            }
                            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                            const l = [],
                                o = [];
                            r.each(((t, s) => {
                                const n = g(t);
                                s < e.loopedSlides && o.push(t), s < r.length && s >= r.length - e.loopedSlides && l.push(t), n.attr("data-swiper-slide-index", s)
                            }));
                            for (let a = 0; a < o.length; a += 1) i.append(g(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
                            for (let a = l.length - 1; a >= 0; a -= 1) i.prepend(g(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass))
                        },
                        loopFix: function() {
                            const e = this;
                            e.emit("beforeLoopFix");
                            const {
                                activeIndex: t,
                                slides: s,
                                loopedSlides: n,
                                allowSlidePrev: i,
                                allowSlideNext: r,
                                snapGrid: a,
                                rtlTranslate: l
                            } = e;
                            let o;
                            e.allowSlidePrev = !0, e.allowSlideNext = !0;
                            const d = -a[t] - e.getTranslate();
                            if (t < n) {
                                o = s.length - 3 * n + t, o += n;
                                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                            } else if (t >= s.length - n) {
                                o = -s.length + t + n, o += n;
                                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                            }
                            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                        },
                        loopDestroy: function() {
                            const {
                                $wrapperEl: e,
                                params: t,
                                slides: s
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                t = a(),
                                {
                                    params: s,
                                    support: n
                                } = e;
                            e.onTouchStart = _.bind(e), e.onTouchMove = I.bind(e), e.onTouchEnd = A.bind(e), s.cssMode && (e.onScroll = N.bind(e)), e.onClick = D.bind(e), n.touch && !G && (t.addEventListener("touchstart", B), G = !0), j(e, "on")
                        },
                        detachEvents: function() {
                            j(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: s,
                                    loopedSlides: n = 0,
                                    params: i,
                                    $el: r
                                } = e,
                                a = i.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            const o = (l in a ? a[l] : void 0) || e.originalParams,
                                d = F(e, i),
                                c = F(e, o),
                                p = i.enabled;
                            d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                            const u = o.direction && o.direction !== i.direction,
                                f = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                            u && s && e.changeDirection(), C(e.params, o);
                            const h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", s) {
                            if (!e || "container" === t && !s) return;
                            let n = !1;
                            const i = o(),
                                r = "window" === t ? i.innerHeight : s.clientHeight,
                                a = Object.keys(e).map((e => {
                                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: r * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                            for (let l = 0; l < a.length; l += 1) {
                                const {
                                    point: e,
                                    value: r
                                } = a[l];
                                "window" === t ? i.matchMedia(`(min-width: ${r}px)`).matches && (n = e) : r <= s.clientWidth && (n = e)
                            }
                            return n || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = s;
                            if (n) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: s,
                                    rtl: n,
                                    $el: i,
                                    device: r,
                                    support: a
                                } = e,
                                l = function(e, t) {
                                    const s = [];
                                    return e.forEach((e => {
                                        "object" === typeof e ? Object.keys(e).forEach((n => {
                                            e[n] && s.push(t + n)
                                        })) : "string" === typeof e && s.push(t + e)
                                    })), s
                                }(["initialized", s.direction, {
                                    "pointer-events": !a.touch
                                }, {
                                    "free-mode": e.params.freeMode && s.freeMode.enabled
                                }, {
                                    autoheight: s.autoHeight
                                }, {
                                    rtl: n
                                }, {
                                    grid: s.grid && s.grid.rows > 1
                                }, {
                                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                                }, {
                                    android: r.android
                                }, {
                                    ios: r.ios
                                }, {
                                    "css-mode": s.cssMode
                                }, {
                                    centered: s.cssMode && s.centeredSlides
                                }], s.containerModifierClass);
                            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, s, n, i, r) {
                            const a = o();
                            let l;

                            function d() {
                                r && r()
                            }
                            g(e).parent("picture")[0] || e.complete && i ? d() : t ? (l = new a.Image, l.onload = d, l.onerror = d, n && (l.sizes = n), s && (l.srcset = s), t && (l.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const n = e.imagesToLoad[s];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                W = {};
            class q {
                constructor(...e) {
                    let t, s;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = C({}, s), t && !s.el && (s.el = t), s.el && g(s.el).length > 1) {
                        const e = [];
                        return g(s.el).each((t => {
                            const n = C({}, s, {
                                el: t
                            });
                            e.push(new q(n))
                        })), e
                    }
                    const n = this;
                    n.__swiper__ = !0, n.support = k(), n.device = P({
                        userAgent: s.userAgent
                    }), n.browser = $(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
                    const i = {};
                    n.modules.forEach((e => {
                        e({
                            swiper: n,
                            extendParams: R(s, i),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        })
                    }));
                    const r = C({}, H, i);
                    return n.params = C({}, r, W, s), n.originalParams = C({}, n.params), n.passedParams = C({}, s), n.params && n.params.on && Object.keys(n.params.on).forEach((e => {
                        n.on(e, n.params.on[e])
                    })), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = g, Object.assign(n, {
                        enabled: n.params.enabled,
                        el: t,
                        classNames: [],
                        slides: g(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return n.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, n.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: w(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = s.minTranslate(),
                        i = (s.maxTranslate() - n) * e + n;
                    s.translateTo(i, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const n = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: n
                        }), e.emit("_slideClass", s, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    const {
                        params: s,
                        slides: n,
                        slidesGrid: i,
                        slidesSizesGrid: r,
                        size: a,
                        activeIndex: l
                    } = this;
                    let o = 1;
                    if (s.centeredSlides) {
                        let e, t = n[l].swiperSlideSize;
                        for (let s = l + 1; s < n.length; s += 1) n[s] && !e && (t += n[s].swiperSlideSize, o += 1, t > a && (e = !0));
                        for (let s = l - 1; s >= 0; s -= 1) n[s] && !e && (t += n[s].swiperSlideSize, o += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = l + 1; d < n.length; d += 1) {
                            (t ? i[d] + r[d] - i[l] < a : i[d] - i[l] < a) && (o += 1)
                        } else
                            for (let d = l - 1; d >= 0; d -= 1) {
                                i[l] - i[d] < a && (o += 1)
                            }
                    return o
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let i;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || n()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const s = this,
                        n = s.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${n}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let i = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(n()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children(n())
                    })();
                    if (0 === i.length && t.params.createElements) {
                        const e = a().createElement("div");
                        i = g(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            i.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        {
                            params: n,
                            $el: i,
                            $wrapperEl: r,
                            slides: a
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (s) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    C(W, e)
                }
                static get extendedDefaults() {
                    return W
                }
                static get defaults() {
                    return H
                }
                static installModule(e) {
                    q.prototype.__modules__ || (q.prototype.__modules__ = []);
                    const t = q.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => q.installModule(e))), q) : (q.installModule(e), q)
                }
            }
            Object.keys(V).forEach((e => {
                Object.keys(V[e]).forEach((t => {
                    q.prototype[t] = V[e][t]
                }))
            })), q.use([function({
                swiper: e,
                on: t,
                emit: s
            }) {
                const n = o();
                let i = null;
                const r = () => {
                        e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
                    },
                    a = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    };
                t("init", (() => {
                    e.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                        const {
                            width: s,
                            height: n
                        } = e;
                        let i = s,
                            a = n;
                        t.forEach((({
                            contentBoxSize: t,
                            contentRect: s,
                            target: n
                        }) => {
                            n && n !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, a = s ? s.height : (t[0] || t).blockSize)
                        })), i === s && a === n || r()
                    })), i.observe(e.el)) : (n.addEventListener("resize", r), n.addEventListener("orientationchange", a))
                })), t("destroy", (() => {
                    i && i.unobserve && e.el && (i.unobserve(e.el), i = null), n.removeEventListener("resize", r), n.removeEventListener("orientationchange", a)
                }))
            }, function({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = [],
                    r = o(),
                    a = (e, t = {}) => {
                        const s = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void n("observerUpdate", e[0]);
                            const t = function() {
                                n("observerUpdate", e[0])
                            };
                            r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), i.push(s)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", (() => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let e = 0; e < t.length; e += 1) a(t[e])
                        }
                        a(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), a(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), s("destroy", (() => {
                    i.forEach((e => {
                        e.disconnect()
                    })), i.splice(0, i.length)
                }))
            }]);
            var X = q;

            function Y({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = o();
                let r;
                t({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), e.mousewheel = {
                    enabled: !1
                };
                let a, l = w();
                const d = [];

                function c() {
                    e.enabled && (e.mouseEntered = !0)
                }

                function p() {
                    e.enabled && (e.mouseEntered = !1)
                }

                function u(t) {
                    return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && w() - l < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && w() - l < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), n("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), n("scroll", t.raw)), l = (new i.Date).getTime(), !1)))
                }

                function f(t) {
                    let s = t,
                        i = !0;
                    if (!e.enabled) return;
                    const l = e.params.mousewheel;
                    e.params.cssMode && s.preventDefault();
                    let o = e.$el;
                    if ("container" !== e.params.mousewheel.eventsTarget && (o = g(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(s.target) && !l.releaseOnEdges) return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let c = 0;
                    const p = e.rtlTranslate ? -1 : 1,
                        f = function(e) {
                            let t = 0,
                                s = 0,
                                n = 0,
                                i = 0;
                            return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), n = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = i, i = 0), (n || i) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, i *= 40) : (n *= 800, i *= 800)), n && !t && (t = n < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: s,
                                pixelX: n,
                                pixelY: i
                            }
                        }(s);
                    if (l.forceToAxis)
                        if (e.isHorizontal()) {
                            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                            c = -f.pixelX * p
                        } else {
                            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                            c = -f.pixelY
                        }
                    else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * p : -f.pixelY;
                    if (0 === c) return !0;
                    l.invert && (c = -c);
                    let h = e.getTranslate() + c * l.sensitivity;
                    if (h >= e.minTranslate() && (h = e.minTranslate()), h <= e.maxTranslate() && (h = e.maxTranslate()), i = !!e.params.loop || !(h === e.minTranslate() || h === e.maxTranslate()), i && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                        const t = {
                                time: w(),
                                delta: Math.abs(c),
                                direction: Math.sign(c)
                            },
                            i = a && t.time < a.time + 500 && t.delta <= a.delta && t.direction === a.direction;
                        if (!i) {
                            a = void 0, e.params.loop && e.loopFix();
                            let o = e.getTranslate() + c * l.sensitivity;
                            const p = e.isBeginning,
                                u = e.isEnd;
                            if (o >= e.minTranslate() && (o = e.minTranslate()), o <= e.maxTranslate() && (o = e.maxTranslate()), e.setTransition(0), e.setTranslate(o), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!p && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                                clearTimeout(r), r = void 0, d.length >= 15 && d.shift();
                                const s = d.length ? d[d.length - 1] : void 0,
                                    n = d[0];
                                if (d.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) d.splice(0);
                                else if (d.length >= 15 && t.time - n.time < 500 && n.delta - t.delta >= 1 && t.delta <= 6) {
                                    const s = c > 0 ? .8 : .2;
                                    a = t, d.splice(0), r = v((() => {
                                        e.slideToClosest(e.params.speed, !0, void 0, s)
                                    }), 0)
                                }
                                r || (r = v((() => {
                                    a = t, d.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (i || n("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), o === e.minTranslate() || o === e.maxTranslate()) return !0
                        }
                    } else {
                        const s = {
                            time: w(),
                            delta: Math.abs(c),
                            direction: Math.sign(c),
                            raw: t
                        };
                        d.length >= 2 && d.shift();
                        const n = d.length ? d[d.length - 1] : void 0;
                        if (d.push(s), n ? (s.direction !== n.direction || s.delta > n.delta || s.time > n.time + 150) && u(s) : u(s), function(t) {
                                const s = e.params.mousewheel;
                                if (t.direction < 0) {
                                    if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0
                                } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;
                                return !1
                            }(s)) return !0
                    }
                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
                }

                function h(t) {
                    let s = e.$el;
                    "container" !== e.params.mousewheel.eventsTarget && (s = g(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", c), s[t]("mouseleave", p), s[t]("wheel", f)
                }

                function m() {
                    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", f), !0) : !e.mousewheel.enabled && (h("on"), e.mousewheel.enabled = !0, !0)
                }

                function b() {
                    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, f), !0) : !!e.mousewheel.enabled && (h("off"), e.mousewheel.enabled = !1, !0)
                }
                s("init", (() => {
                    !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && m()
                })), s("destroy", (() => {
                    e.params.cssMode && m(), e.mousewheel.enabled && b()
                })), Object.assign(e.mousewheel, {
                    enable: m,
                    disable: b
                })
            }

            function U(e, t, s, n) {
                const i = a();
                return e.params.createElements && Object.keys(n).forEach((r => {
                    if (!s[r] && !0 === s.auto) {
                        let a = e.$el.children(`.${n[r]}`)[0];
                        a || (a = i.createElement("div"), a.className = n[r], e.$el.append(a)), s[r] = a, t[r] = a
                    }
                })), s
            }

            function K({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                function i(t) {
                    let s;
                    return t && (s = g(t), e.params.uniqueNavElements && "string" === typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
                }

                function r(t, s) {
                    const n = e.params.navigation;
                    t && t.length > 0 && (t[s ? "addClass" : "removeClass"](n.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](n.lockClass))
                }

                function a() {
                    if (e.params.loop) return;
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    r(s, e.isBeginning), r(t, e.isEnd)
                }

                function l(t) {
                    t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
                }

                function o(t) {
                    t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
                }

                function d() {
                    const t = e.params.navigation;
                    if (e.params.navigation = U(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !t.nextEl && !t.prevEl) return;
                    const s = i(t.nextEl),
                        n = i(t.prevEl);
                    s && s.length > 0 && s.on("click", o), n && n.length > 0 && n.on("click", l), Object.assign(e.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: n,
                        prevEl: n && n[0]
                    }), e.enabled || (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass))
                }

                function c() {
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass))
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                }), e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, s("init", (() => {
                    d(), a()
                })), s("toEdge fromEdge lock unlock", (() => {
                    a()
                })), s("destroy", (() => {
                    c()
                })), s("enable disable", (() => {
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                })), s("click", ((t, s) => {
                    const {
                        $nextEl: i,
                        $prevEl: r
                    } = e.navigation, a = s.target;
                    if (e.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(i)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                        let t;
                        i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), n(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
                    }
                })), Object.assign(e.navigation, {
                    update: a,
                    init: d,
                    destroy: c
                })
            }

            function Z(e = "") {
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function J({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                const i = "swiper-pagination";
                let r;
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${i}-bullet`,
                        bulletActiveClass: `${i}-bullet-active`,
                        modifierClass: `${i}-`,
                        currentClass: `${i}-current`,
                        totalClass: `${i}-total`,
                        hiddenClass: `${i}-hidden`,
                        progressbarFillClass: `${i}-progressbar-fill`,
                        progressbarOppositeClass: `${i}-progressbar-opposite`,
                        clickableClass: `${i}-clickable`,
                        lockClass: `${i}-lock`,
                        horizontalClass: `${i}-horizontal`,
                        verticalClass: `${i}-vertical`
                    }
                }), e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let a = 0;

                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function o(t, s) {
                    const {
                        bulletActiveClass: n
                    } = e.params.pagination;
                    t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`)
                }

                function d() {
                    const t = e.rtl,
                        s = e.params.pagination;
                    if (l()) return;
                    const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        d = e.pagination.$el;
                    let c;
                    const p = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== e.params.paginationType && (c = p + c)) : c = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const n = e.pagination.bullets;
                        let i, l, p;
                        if (s.dynamicBullets && (r = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (a += c - e.previousIndex, a > s.dynamicMainBullets - 1 ? a = s.dynamicMainBullets - 1 : a < 0 && (a = 0)), i = c - a, l = i + (Math.min(n.length, s.dynamicMainBullets) - 1), p = (l + i) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), d.length > 1) n.each((e => {
                            const t = g(e),
                                n = t.index();
                            n === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (n >= i && n <= l && t.addClass(`${s.bulletActiveClass}-main`), n === i && o(t, "prev"), n === l && o(t, "next"))
                        }));
                        else {
                            const t = n.eq(c),
                                r = t.index();
                            if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                const t = n.eq(i),
                                    a = n.eq(l);
                                for (let e = i; e <= l; e += 1) n.eq(e).addClass(`${s.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (r >= n.length - s.dynamicMainBullets) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        n.eq(n.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                    } else o(t, "prev"), o(a, "next");
                                else o(t, "prev"), o(a, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(n.length, s.dynamicMainBullets + 4),
                                a = (r * i - r) / 2 - p * r,
                                l = t ? "right" : "left";
                            n.css(e.isHorizontal() ? l : "top", `${a}px`)
                        }
                    }
                    if ("fraction" === s.type && (d.find(Z(s.currentClass)).text(s.formatFractionCurrent(c + 1)), d.find(Z(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
                        let t;
                        t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const n = (c + 1) / p;
                        let i = 1,
                            r = 1;
                        "horizontal" === t ? i = n : r = n, d.find(Z(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0])) : n("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }

                function c() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el;
                    let r = "";
                    if ("bullets" === t.type) {
                        let n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > s && (n = s);
                        for (let s = 0; s < n; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        i.html(r), e.pagination.bullets = i.find(Z(t.bulletClass))
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && n("paginationRender", e.pagination.$el[0])
                }

                function p() {
                    e.params.pagination = U(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const t = e.params.pagination;
                    if (!t.el) return;
                    let s = g(t.el);
                    0 !== s.length && (e.params.uniqueNavElements && "string" === typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => g(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", Z(t.bulletClass), (function(t) {
                        t.preventDefault();
                        let s = g(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (s += e.loopedSlides), e.slideTo(s)
                    })), Object.assign(e.pagination, {
                        $el: s,
                        el: s[0]
                    }), e.enabled || s.addClass(t.lockClass))
                }

                function u() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.pagination.$el;
                    s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", Z(t.bulletClass))
                }
                s("init", (() => {
                    p(), c(), d()
                })), s("activeIndexChange", (() => {
                    (e.params.loop || "undefined" === typeof e.snapIndex) && d()
                })), s("snapIndexChange", (() => {
                    e.params.loop || d()
                })), s("slidesLengthChange", (() => {
                    e.params.loop && (c(), d())
                })), s("snapGridLengthChange", (() => {
                    e.params.loop || (c(), d())
                })), s("destroy", (() => {
                    u()
                })), s("enable disable", (() => {
                    const {
                        $el: t
                    } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                })), s("lock unlock", (() => {
                    d()
                })), s("click", ((t, s) => {
                    const i = s.target,
                        {
                            $el: r
                        } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !g(i).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                        const t = r.hasClass(e.params.pagination.hiddenClass);
                        n(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
                    }
                })), Object.assign(e.pagination, {
                    render: c,
                    update: d,
                    init: p,
                    destroy: u
                })
            }

            function Q({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    parallax: {
                        enabled: !1
                    }
                });
                const n = (t, s) => {
                        const {
                            rtl: n
                        } = e, i = g(t), r = n ? -1 : 1, a = i.attr("data-swiper-parallax") || "0";
                        let l = i.attr("data-swiper-parallax-x"),
                            o = i.attr("data-swiper-parallax-y");
                        const d = i.attr("data-swiper-parallax-scale"),
                            c = i.attr("data-swiper-parallax-opacity");
                        if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = a, o = "0") : (o = a, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", "undefined" !== typeof c && null !== c) {
                            const e = c - (c - 1) * (1 - Math.abs(s));
                            i[0].style.opacity = e
                        }
                        if ("undefined" === typeof d || null === d) i.transform(`translate3d(${l}, ${o}, 0px)`);
                        else {
                            const e = d - (d - 1) * (1 - Math.abs(s));
                            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                        }
                    },
                    i = () => {
                        const {
                            $el: t,
                            slides: s,
                            progress: i,
                            snapGrid: r
                        } = e;
                        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                            n(e, i)
                        })), s.each(((t, s) => {
                            let a = t.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(s / 2) - i * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), g(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                                n(e, a)
                            }))
                        }))
                    };
                s("beforeInit", (() => {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                })), s("init", (() => {
                    e.params.parallax.enabled && i()
                })), s("setTranslate", (() => {
                    e.params.parallax.enabled && i()
                })), s("setTransition", ((t, s) => {
                    e.params.parallax.enabled && ((t = e.params.speed) => {
                        const {
                            $el: s
                        } = e;
                        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                            const s = g(e);
                            let n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (n = 0), s.transition(n)
                        }))
                    })(s)
                }))
            }

            function ee({
                swiper: e,
                extendParams: t,
                on: s,
                emit: n
            }) {
                let i;

                function r() {
                    const t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(i), i = v((() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), n("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), n("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), n("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), n("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && r()
                    }), s)
                }

                function l() {
                    return "undefined" === typeof i && (!e.autoplay.running && (e.autoplay.running = !0, n("autoplayStart"), r(), !0))
                }

                function o() {
                    return !!e.autoplay.running && ("undefined" !== typeof i && (i && (clearTimeout(i), i = void 0), e.autoplay.running = !1, n("autoplayStop"), !0))
                }

                function d(t) {
                    e.autoplay.running && (e.autoplay.paused || (i && clearTimeout(i), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].addEventListener(t, p)
                    })) : (e.autoplay.paused = !1, r())))
                }

                function c() {
                    const t = a();
                    "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (r(), e.autoplay.paused = !1)
                }

                function p(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, p)
                    })), e.autoplay.paused = !1, e.autoplay.running ? r() : o())
                }

                function u() {
                    e.params.autoplay.disableOnInteraction ? o() : d(), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, p)
                    }))
                }

                function f() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, r())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), s("init", (() => {
                    if (e.params.autoplay.enabled) {
                        l();
                        a().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", u), e.$el.on("mouseleave", f))
                    }
                })), s("beforeTransitionStart", ((t, s, n) => {
                    e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
                })), s("sliderFirstMove", (() => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
                })), s("touchEnd", (() => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
                })), s("destroy", (() => {
                    e.$el.off("mouseenter", u), e.$el.off("mouseleave", f), e.autoplay.running && o();
                    a().removeEventListener("visibilitychange", c)
                })), Object.assign(e.autoplay, {
                    pause: d,
                    run: r,
                    start: l,
                    stop: o
                })
            }

            function te(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function se({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                ! function(e) {
                    const {
                        effect: t,
                        swiper: s,
                        on: n,
                        setTranslate: i,
                        setTransition: r,
                        overwriteParams: a,
                        perspective: l
                    } = e;
                    n("beforeInit", (() => {
                        if (s.params.effect !== t) return;
                        s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        const e = a ? a() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e)
                    })), n("setTranslate", (() => {
                        s.params.effect === t && i()
                    })), n("setTransition", ((e, n) => {
                        s.params.effect === t && r(n)
                    }))
                }({
                    effect: "fade",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            slides: t
                        } = e, s = e.params.fadeEffect;
                        for (let n = 0; n < t.length; n += 1) {
                            const t = e.slides.eq(n);
                            let i = -t[0].swiperSlideOffset;
                            e.params.virtualTranslate || (i -= e.translate);
                            let r = 0;
                            e.isHorizontal() || (r = i, i = 0);
                            const a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            te(s, t).css({
                                opacity: a
                            }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                        }
                    },
                    setTransition: t => {
                        const {
                            transformEl: s
                        } = e.params.fadeEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t),
                            function({
                                swiper: e,
                                duration: t,
                                transformEl: s,
                                allSlides: n
                            }) {
                                const {
                                    slides: i,
                                    activeIndex: r,
                                    $wrapperEl: a
                                } = e;
                                if (e.params.virtualTranslate && 0 !== t) {
                                    let t, l = !1;
                                    t = n ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), t.transitionEnd((() => {
                                        if (l) return;
                                        if (!e || e.destroyed) return;
                                        l = !0, e.animating = !1;
                                        const t = ["webkitTransitionEnd", "transitionend"];
                                        for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
                                    }))
                                }
                            }({
                                swiper: e,
                                duration: t,
                                transformEl: s,
                                allSlides: !0
                            })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
        }
    }
]);