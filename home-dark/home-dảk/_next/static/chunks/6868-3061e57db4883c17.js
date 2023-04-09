(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6868], {
        38252: function(t) {
            "use strict";
            t.exports = function t(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var o, n, s;
                    if (Array.isArray(e)) {
                        if ((o = e.length) != i.length) return !1;
                        for (n = o; 0 !== n--;)
                            if (!t(e[n], i[n])) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((o = (s = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (n = o; 0 !== n--;)
                        if (!Object.prototype.hasOwnProperty.call(i, s[n])) return !1;
                    for (n = o; 0 !== n--;) {
                        var a = s[n];
                        if (("_owner" !== a || !e.$$typeof) && !t(e[a], i[a])) return !1
                    }
                    return !0
                }
                return e !== e && i !== i
            }
        },
        56438: function(t, e, i) {
            (() => {
                "use strict";
                var t = {
                        904: (t, e, o) => {
                            o.d(e, {
                                Z: () => v
                            });
                            const n = i(67294);
                            var s = o.n(n);
                            const a = i(96824),
                                r = i(38252);
                            var c = o.n(r);

                            function l(t) {
                                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function d(t, e, i) {
                                return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                                    var o = function(t, e) {
                                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                                        return t
                                    }(t, e);
                                    if (o) {
                                        var n = Object.getOwnPropertyDescriptor(o, e);
                                        return n.get ? n.get.call(i) : n.value
                                    }
                                })(t, e, i || t)
                            }

                            function u(t, e) {
                                return (u = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function h(t, e) {
                                if (e && ("object" === l(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }

                            function p(t) {
                                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var v = function(t) {
                                ! function(t, e) {
                                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                    t.prototype = Object.create(e && e.prototype, {
                                        constructor: {
                                            value: t,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), e && u(t, e)
                                }(r, t);
                                var e, i, o, n = (i = r, o = function() {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(), function() {
                                    var t, e = p(i);
                                    if (o) {
                                        var n = p(this).constructor;
                                        t = Reflect.construct(e, arguments, n)
                                    } else t = e.apply(this, arguments);
                                    return h(this, t)
                                });

                                function r(t) {
                                    var e;
                                    return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, r), (e = n.call(this, t)).state = {
                                        library: void 0
                                    }, e
                                }
                                return (e = [{
                                    key: "destroy",
                                    value: function() {
                                        this.state.library && (this.state.library.destroy(), this.setState({
                                            library: void 0
                                        }))
                                    }
                                }, {
                                    key: "shouldComponentUpdate",
                                    value: function(t) {
                                        return !c()(t, this.props)
                                    }
                                }, {
                                    key: "componentDidUpdate",
                                    value: function() {
                                        this.refresh()
                                    }
                                }, {
                                    key: "forceUpdate",
                                    value: function() {
                                        this.refresh(), d(p(r.prototype), "forceUpdate", this).call(this)
                                    }
                                }, {
                                    key: "componentDidMount",
                                    value: function() {
                                        this.props.init && this.props.init(a.tsParticles), this.loadParticles()
                                    }
                                }, {
                                    key: "componentWillUnmount",
                                    value: function() {
                                        this.destroy()
                                    }
                                }, {
                                    key: "render",
                                    value: function() {
                                        var t = this.props,
                                            e = t.width,
                                            i = t.height,
                                            o = t.className,
                                            n = t.canvasClassName,
                                            a = t.id;
                                        return s().createElement("div", {
                                            className: o,
                                            id: a
                                        }, s().createElement("canvas", {
                                            className: n,
                                            style: Object.assign(Object.assign({}, this.props.style), {
                                                width: e,
                                                height: i
                                            })
                                        }))
                                    }
                                }, {
                                    key: "refresh",
                                    value: function() {
                                        this.destroy(), this.loadParticles()
                                    }
                                }, {
                                    key: "loadParticles",
                                    value: function() {
                                        var t, e = this,
                                            i = function(t) {
                                                e.props.container && (e.props.container.current = t), e.setState({
                                                    library: t
                                                }), e.props.loaded && e.props.loaded(t)
                                            };
                                        this.props.url ? a.tsParticles.loadJSON(this.props.id, this.props.url).then(i) : a.tsParticles.load(this.props.id, null !== (t = this.props.params) && void 0 !== t ? t : this.props.options).then(i)
                                    }
                                }]) && function(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var o = e[i];
                                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                    }
                                }(r.prototype, e), r
                            }(n.Component);
                            v.defaultProps = {
                                width: "100%",
                                height: "100%",
                                options: {},
                                style: {},
                                url: void 0,
                                id: "tsparticles"
                            }
                        },
                        868: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.AnimationStatus = void 0, (i = e.AnimationStatus || (e.AnimationStatus = {}))[i.increasing = 0] = "increasing", i[i.decreasing = 1] = "decreasing"
                        },
                        300: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.MoveDirection = void 0, (i = e.MoveDirection || (e.MoveDirection = {})).bottom = "bottom", i.bottomLeft = "bottom-left", i.bottomRight = "bottom-right", i.left = "left", i.none = "none", i.right = "right", i.top = "top", i.topLeft = "top-left", i.topRight = "top-right"
                        },
                        264: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.OutModeDirection = void 0, (i = e.OutModeDirection || (e.OutModeDirection = {})).bottom = "bottom", i.left = "left", i.right = "right", i.top = "top"
                        },
                        329: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.RotateDirection = void 0, (i = e.RotateDirection || (e.RotateDirection = {})).clockwise = "clockwise", i.counterClockwise = "counter-clockwise", i.random = "random"
                        },
                        469: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.TiltDirection = void 0, (i = e.TiltDirection || (e.TiltDirection = {})).clockwise = "clockwise", i.counterClockwise = "counter-clockwise", i.random = "random"
                        },
                        961: function(t, e, i) {
                            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                                        enumerable: !0,
                                        get: function() {
                                            return e[i]
                                        }
                                    })
                                } : function(t, e, i, o) {
                                    void 0 === o && (o = i), t[o] = e[i]
                                }),
                                n = this && this.__exportStar || function(t, e) {
                                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                                };
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), n(i(300), e), n(i(329), e), n(i(264), e), n(i(469), e)
                        },
                        974: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.InteractivityDetect = void 0, (i = e.InteractivityDetect || (e.InteractivityDetect = {})).canvas = "canvas", i.parent = "parent", i.window = "window"
                        },
                        252: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.ClickMode = void 0, (i = e.ClickMode || (e.ClickMode = {})).attract = "attract", i.bubble = "bubble", i.push = "push", i.remove = "remove", i.repulse = "repulse", i.pause = "pause", i.trail = "trail"
                        },
                        130: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.CollisionMode = void 0, (i = e.CollisionMode || (e.CollisionMode = {})).absorb = "absorb", i.bounce = "bounce", i.destroy = "destroy"
                        },
                        330: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.DestroyMode = void 0, (i = e.DestroyMode || (e.DestroyMode = {})).none = "none", i.split = "split"
                        },
                        208: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.DivMode = void 0, (i = e.DivMode || (e.DivMode = {})).bounce = "bounce", i.bubble = "bubble", i.repulse = "repulse"
                        },
                        349: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.HoverMode = void 0, (i = e.HoverMode || (e.HoverMode = {})).attract = "attract", i.bounce = "bounce", i.bubble = "bubble", i.connect = "connect", i.grab = "grab", i.light = "light", i.repulse = "repulse", i.slow = "slow", i.trail = "trail"
                        },
                        581: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.OutMode = void 0, (i = e.OutMode || (e.OutMode = {})).bounce = "bounce", i.bounceHorizontal = "bounce-horizontal", i.bounceVertical = "bounce-vertical", i.none = "none", i.out = "out", i.destroy = "destroy", i.split = "split"
                        },
                        164: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.ResponsiveMode = void 0, (i = e.ResponsiveMode || (e.ResponsiveMode = {})).screen = "screen", i.canvas = "canvas"
                        },
                        667: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.RollMode = void 0, (i = e.RollMode || (e.RollMode = {})).both = "both", i.horizontal = "horizontal", i.vertical = "vertical"
                        },
                        855: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.SizeMode = void 0, (i = e.SizeMode || (e.SizeMode = {})).precise = "precise", i.percent = "percent"
                        },
                        702: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.ThemeMode = void 0, (i = e.ThemeMode || (e.ThemeMode = {})).any = "any", i.dark = "dark", i.light = "light"
                        },
                        515: function(t, e, i) {
                            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                                        enumerable: !0,
                                        get: function() {
                                            return e[i]
                                        }
                                    })
                                } : function(t, e, i, o) {
                                    void 0 === o && (o = i), t[o] = e[i]
                                }),
                                n = this && this.__exportStar || function(t, e) {
                                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                                };
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), n(i(252), e), n(i(330), e), n(i(208), e), n(i(349), e), n(i(130), e), n(i(581), e), n(i(667), e), n(i(855), e), n(i(702), e), n(i(164), e)
                        },
                        47: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.AlterType = void 0, (i = e.AlterType || (e.AlterType = {})).darken = "darken", i.enlighten = "enlighten"
                        },
                        64: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.DestroyType = void 0, (i = e.DestroyType || (e.DestroyType = {})).none = "none", i.max = "max", i.min = "min"
                        },
                        712: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.DivType = void 0, (i = e.DivType || (e.DivType = {})).circle = "circle", i.rectangle = "rectangle"
                        },
                        77: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.EasingType = void 0, (i = e.EasingType || (e.EasingType = {})).easeOutBack = "ease-out-back", i.easeOutCirc = "ease-out-circ", i.easeOutCubic = "ease-out-cubic", i.easeOutQuad = "ease-out-quad", i.easeOutQuart = "ease-out-quart", i.easeOutQuint = "ease-out-quint", i.easeOutExpo = "ease-out-expo", i.easeOutSine = "ease-out-sine"
                        },
                        589: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.GradientType = void 0, (i = e.GradientType || (e.GradientType = {})).linear = "linear", i.radial = "radial", i.random = "random"
                        },
                        457: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.InteractorType = void 0, (i = e.InteractorType || (e.InteractorType = {}))[i.External = 0] = "External", i[i.Particles = 1] = "Particles"
                        },
                        796: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.OrbitType = void 0, (i = e.OrbitType || (e.OrbitType = {})).front = "front", i.back = "back"
                        },
                        247: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.ShapeType = void 0, (i = e.ShapeType || (e.ShapeType = {})).char = "char", i.character = "character", i.circle = "circle", i.edge = "edge", i.image = "image", i.images = "images", i.line = "line", i.polygon = "polygon", i.square = "square", i.star = "star", i.triangle = "triangle"
                        },
                        676: (t, e) => {
                            var i;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.StartValueType = void 0, (i = e.StartValueType || (e.StartValueType = {})).max = "max", i.min = "min", i.random = "random"
                        },
                        799: function(t, e, i) {
                            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                                        enumerable: !0,
                                        get: function() {
                                            return e[i]
                                        }
                                    })
                                } : function(t, e, i, o) {
                                    void 0 === o && (o = i), t[o] = e[i]
                                }),
                                n = this && this.__exportStar || function(t, e) {
                                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                                };
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), n(i(47), e), n(i(64), e), n(i(589), e), n(i(457), e), n(i(247), e), n(i(676), e), n(i(712), e), n(i(77), e), n(i(796), e)
                        },
                        717: function(t, e, i) {
                            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                                        enumerable: !0,
                                        get: function() {
                                            return e[i]
                                        }
                                    })
                                } : function(t, e, i, o) {
                                    void 0 === o && (o = i), t[o] = e[i]
                                }),
                                n = this && this.__exportStar || function(t, e) {
                                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                                };
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), n(i(961), e), n(i(515), e), n(i(868), e), n(i(799), e), n(i(974), e)
                        }
                    },
                    o = {};

                function n(e) {
                    var i = o[e];
                    if (void 0 !== i) return i.exports;
                    var s = o[e] = {
                        exports: {}
                    };
                    return t[e].call(s.exports, s, s.exports, n), s.exports
                }
                n.n = t => {
                    var e = t && t.__esModule ? () => t.default : () => t;
                    return n.d(e, {
                        a: e
                    }), e
                }, n.d = (t, e) => {
                    for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                };
                var s = {};
                (() => {
                    n.r(s), n.d(s, {
                        default: () => o,
                        Particles: () => t.Z
                    });
                    var t = n(904),
                        e = n(717),
                        i = {};
                    for (const n in e)["default", "Particles"].indexOf(n) < 0 && (i[n] = () => e[n]);
                    n.d(s, i);
                    const o = t.Z
                })();
                var a = e;
                for (var r in s) a[r] = s[r];
                s.__esModule && Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            })()
        },
        26868: function(t, e, i) {
            const o = i(56438);
            for (let n in o) o.default[n] = o[n];
            t.exports = o.default
        },
        48922: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Canvas = void 0;
            const o = i(97373),
                n = i(97373);
            e.Canvas = class {
                constructor(t) {
                    this.container = t, this.size = {
                        height: 0,
                        width: 0
                    }, this.context = null, this.generatedCanvas = !1
                }
                init() {
                    this.resize(), this.initStyle(), this.initCover(), this.initTrail(), this.initBackground(), this.paint()
                }
                loadCanvas(t, e) {
                    var i;
                    t.className || (t.className = o.Constants.canvasClass), this.generatedCanvas && (null === (i = this.element) || void 0 === i || i.remove()), this.generatedCanvas = null !== e && void 0 !== e ? e : this.generatedCanvas, this.element = t, this.originalStyle = (0, o.deepExtend)({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this.context = this.element.getContext("2d"), this.container.retina.init(), this.initBackground()
                }
                destroy() {
                    var t;
                    this.generatedCanvas && (null === (t = this.element) || void 0 === t || t.remove()), this.draw((t => {
                        (0, n.clear)(t, this.size)
                    }))
                }
                paint() {
                    const t = this.container.actualOptions;
                    this.draw((e => {
                        t.backgroundMask.enable && t.backgroundMask.cover && this.coverColor ? ((0, n.clear)(e, this.size), this.paintBase((0, o.getStyleFromRgb)(this.coverColor, this.coverColor.a))) : this.paintBase()
                    }))
                }
                clear() {
                    const t = this.container.actualOptions,
                        e = t.particles.move.trail;
                    t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && this.trailFillColor ? this.paintBase((0, o.getStyleFromRgb)(this.trailFillColor, 1 / e.length)) : this.draw((t => {
                        (0, n.clear)(t, this.size)
                    }))
                }
                windowResize() {
                    if (!this.element) return;
                    const t = this.container;
                    this.resize();
                    const e = t.updateActualOptions();
                    t.particles.setDensity();
                    for (const [, i] of t.plugins) void 0 !== i.resize && i.resize();
                    e && t.refresh()
                }
                resize() {
                    if (!this.element) return;
                    const t = this.container,
                        e = t.retina.pixelRatio,
                        i = t.canvas.size,
                        o = i.width,
                        n = i.height;
                    i.width = this.element.offsetWidth * e, i.height = this.element.offsetHeight * e, this.element.width = i.width, this.element.height = i.height, this.container.started && (this.resizeFactor = {
                        width: i.width / o,
                        height: i.height / n
                    })
                }
                drawConnectLine(t, e) {
                    this.draw((i => {
                        var n;
                        const s = this.lineStyle(t, e);
                        if (!s) return;
                        const a = t.getPosition(),
                            r = e.getPosition();
                        (0, o.drawConnectLine)(i, null !== (n = t.retina.linksWidth) && void 0 !== n ? n : this.container.retina.linksWidth, s, a, r)
                    }))
                }
                drawGrabLine(t, e, i, n) {
                    const s = this.container;
                    this.draw((a => {
                        var r;
                        const c = t.getPosition();
                        (0, o.drawGrabLine)(a, null !== (r = t.retina.linksWidth) && void 0 !== r ? r : s.retina.linksWidth, c, n, e, i)
                    }))
                }
                drawParticle(t, e) {
                    var i, n, s, a, r, c;
                    if (t.spawning || t.destroyed) return;
                    const l = t.getFillColor(),
                        d = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : l;
                    if (!l && !d) return;
                    let [u, h] = this.getPluginParticleColors(t);
                    const p = t.options.twinkle.particles,
                        v = p.enable && Math.random() < p.frequency;
                    if (!u || !h) {
                        const t = (0, o.colorToHsl)(p.color);
                        u || (u = v && void 0 !== t ? t : l || void 0), h || (h = v && void 0 !== t ? t : d || void 0)
                    }
                    const y = this.container.actualOptions,
                        f = t.options.zIndex,
                        g = (1 - t.zIndexFactor) ** f.opacityRate,
                        b = t.getRadius(),
                        m = v ? p.opacity : null !== (a = null !== (n = t.bubble.opacity) && void 0 !== n ? n : null === (s = t.opacity) || void 0 === s ? void 0 : s.value) && void 0 !== a ? a : 1,
                        w = null !== (c = null === (r = t.stroke) || void 0 === r ? void 0 : r.opacity) && void 0 !== c ? c : m,
                        S = m * g,
                        _ = u ? (0, o.getStyleFromHsl)(u, S) : void 0;
                    (_ || h) && this.draw((i => {
                        const n = (1 - t.zIndexFactor) ** f.sizeRate,
                            s = w * g,
                            a = h ? (0, o.getStyleFromHsl)(h, s) : _;
                        if (b <= 0) return;
                        const r = this.container;
                        for (const e of r.particles.updaters) e.beforeDraw && e.beforeDraw(t);
                        (0, o.drawParticle)(this.container, i, t, e, _, a, y.backgroundMask.enable, y.backgroundMask.composite, b * n, S, t.options.shadow, t.gradient);
                        for (const e of r.particles.updaters) e.afterDraw && e.afterDraw(t)
                    }))
                }
                drawPlugin(t, e) {
                    this.draw((i => {
                        (0, o.drawPlugin)(i, t, e)
                    }))
                }
                drawParticlePlugin(t, e, i) {
                    this.draw((n => {
                        (0, o.drawParticlePlugin)(n, t, e, i)
                    }))
                }
                initBackground() {
                    const t = this.container.actualOptions.background,
                        e = this.element,
                        i = null === e || void 0 === e ? void 0 : e.style;
                    if (i) {
                        if (t.color) {
                            const e = (0, o.colorToRgb)(t.color);
                            i.backgroundColor = e ? (0, o.getStyleFromRgb)(e, t.opacity) : ""
                        } else i.backgroundColor = "";
                        i.backgroundImage = t.image || "", i.backgroundPosition = t.position || "", i.backgroundRepeat = t.repeat || "", i.backgroundSize = t.size || ""
                    }
                }
                draw(t) {
                    if (this.context) return t(this.context)
                }
                initCover() {
                    const t = this.container.actualOptions.backgroundMask.cover,
                        e = t.color,
                        i = (0, o.colorToRgb)(e);
                    i && (this.coverColor = {
                        r: i.r,
                        g: i.g,
                        b: i.b,
                        a: t.opacity
                    })
                }
                initTrail() {
                    const t = this.container.actualOptions,
                        e = t.particles.move.trail,
                        i = (0, o.colorToRgb)(e.fillColor);
                    if (i) {
                        const e = t.particles.move.trail;
                        this.trailFillColor = {
                            r: i.r,
                            g: i.g,
                            b: i.b,
                            a: 1 / e.length
                        }
                    }
                }
                getPluginParticleColors(t) {
                    let e, i;
                    for (const [, n] of this.container.plugins)
                        if (!e && n.particleFillColor && (e = (0, o.colorToHsl)(n.particleFillColor(t))), !i && n.particleStrokeColor && (i = (0, o.colorToHsl)(n.particleStrokeColor(t))), e && i) break;
                    return [e, i]
                }
                initStyle() {
                    const t = this.element,
                        e = this.container.actualOptions;
                    if (!t) return;
                    const i = this.originalStyle;
                    e.fullScreen.enable ? (this.originalStyle = (0, o.deepExtend)({}, t.style), t.style.position = "fixed", t.style.zIndex = e.fullScreen.zIndex.toString(10), t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%") : i && (t.style.position = i.position, t.style.zIndex = i.zIndex, t.style.top = i.top, t.style.left = i.left, t.style.width = i.width, t.style.height = i.height)
                }
                paintBase(t) {
                    this.draw((e => {
                        (0, o.paintBase)(e, this.size, t)
                    }))
                }
                lineStyle(t, e) {
                    return this.draw((i => {
                        const n = this.container.actualOptions.interactivity.modes.connect;
                        return (0, o.gradient)(i, t, e, n.links.opacity)
                    }))
                }
            }
        },
        45624: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Container = void 0;
            const o = i(48922),
                n = i(4480),
                s = i(21993),
                a = i(410),
                r = i(76989),
                c = i(97373),
                l = i(95638);
            e.Container = class {
                constructor(t, e, ...i) {
                    this.id = t, this.fpsLimit = 60, this.duration = 0, this.lifeTime = 0, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = e, this._initialSourceOptions = e, this.retina = new s.Retina(this), this.canvas = new o.Canvas(this), this.particles = new n.Particles(this), this.drawer = new a.FrameManager(this), this.presets = i, this.pathGenerator = {
                        generate: () => {
                            const t = l.Vector.create(0, 0);
                            return t.length = Math.random(), t.angle = Math.random() * Math.PI * 2, t
                        },
                        init: () => {},
                        update: () => {}
                    }, this.interactivity = {
                        mouse: {
                            clicking: !1,
                            inside: !1
                        }
                    }, this.bubble = {}, this.repulse = {
                        particles: []
                    }, this.attract = {
                        particles: []
                    }, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = new r.Options, this.actualOptions = new r.Options, this.eventListeners = new c.EventListeners(this), "undefined" !== typeof IntersectionObserver && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((t => this.intersectionManager(t))))
                }
                get options() {
                    return this._options
                }
                get sourceOptions() {
                    return this._sourceOptions
                }
                play(t) {
                    const e = this.paused || t;
                    if (!this.firstStart || this.actualOptions.autoPlay) {
                        if (this.paused && (this.paused = !1), e)
                            for (const [, t] of this.plugins) t.play && t.play();
                        this.draw(e || !1)
                    } else this.firstStart = !1
                }
                pause() {
                    if (void 0 !== this.drawAnimationFrame && ((0, c.cancelAnimation)()(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused) {
                        for (const [, t] of this.plugins) t.pause && t.pause();
                        this.pageHidden || (this.paused = !0)
                    }
                }
                draw(t) {
                    let e = t;
                    this.drawAnimationFrame = (0, c.animate)()((t => {
                        e && (this.lastFrameTime = void 0, e = !1), this.drawer.nextFrame(t)
                    }))
                }
                getAnimationStatus() {
                    return !this.paused && !this.pageHidden
                }
                setNoise(t, e, i) {
                    this.setPath(t, e, i)
                }
                setPath(t, e, i) {
                    t && ("function" === typeof t ? (this.pathGenerator.generate = t, e && (this.pathGenerator.init = e), i && (this.pathGenerator.update = i)) : (t.generate && (this.pathGenerator.generate = t.generate), t.init && (this.pathGenerator.init = t.init), t.update && (this.pathGenerator.update = t.update)))
                }
                destroy() {
                    this.stop(), this.canvas.destroy();
                    for (const [, t] of this.drawers) t.destroy && t.destroy(this);
                    for (const t of this.drawers.keys()) this.drawers.delete(t);
                    this.destroyed = !0
                }
                exportImg(t) {
                    this.exportImage(t)
                }
                exportImage(t, e, i) {
                    var o;
                    return null === (o = this.canvas.element) || void 0 === o ? void 0 : o.toBlob(t, null !== e && void 0 !== e ? e : "image/png", i)
                }
                exportConfiguration() {
                    return JSON.stringify(this.actualOptions, void 0, 2)
                }
                refresh() {
                    return this.stop(), this.start()
                }
                reset() {
                    return this._options = new r.Options, this.refresh()
                }
                stop() {
                    if (this.started) {
                        this.firstStart = !0, this.started = !1, this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins) t.stop && t.stop();
                        for (const t of this.plugins.keys()) this.plugins.delete(t);
                        this.particles.linksColors = new Map, delete this.particles.grabLineColor, delete this.particles.linksColor, this._sourceOptions = this._options
                    }
                }
                async loadTheme(t) {
                    this.currentTheme = t, await this.refresh()
                }
                async start() {
                    if (!this.started) {
                        await this.init(), this.started = !0, this.eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins) void 0 !== t.startAsync ? await t.startAsync() : void 0 !== t.start && t.start();
                        this.play()
                    }
                }
                addClickHandler(t) {
                    const e = this.interactivity.element;
                    if (!e) return;
                    const i = (e, i, o) => {
                        if (this.destroyed) return;
                        const n = this.retina.pixelRatio,
                            s = {
                                x: i.x * n,
                                y: i.y * n
                            },
                            a = this.particles.quadTree.queryCircle(s, o * n);
                        t(e, a)
                    };
                    let o = !1,
                        n = !1;
                    e.addEventListener("click", (t => {
                        if (this.destroyed) return;
                        const e = t,
                            o = {
                                x: e.offsetX || e.clientX,
                                y: e.offsetY || e.clientY
                            };
                        i(t, o, 1)
                    })), e.addEventListener("touchstart", (() => {
                        this.destroyed || (o = !0, n = !1)
                    })), e.addEventListener("touchmove", (() => {
                        this.destroyed || (n = !0)
                    })), e.addEventListener("touchend", (t => {
                        var e, s, a;
                        if (!this.destroyed) {
                            if (o && !n) {
                                const o = t;
                                let n = o.touches[o.touches.length - 1];
                                if (!n && (n = o.changedTouches[o.changedTouches.length - 1], !n)) return;
                                const r = null === (e = this.canvas.element) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                    c = {
                                        x: n.clientX - (null !== (s = null === r || void 0 === r ? void 0 : r.left) && void 0 !== s ? s : 0),
                                        y: n.clientY - (null !== (a = null === r || void 0 === r ? void 0 : r.top) && void 0 !== a ? a : 0)
                                    };
                                i(t, c, Math.max(n.radiusX, n.radiusY))
                            }
                            o = !1, n = !1
                        }
                    })), e.addEventListener("touchcancel", (() => {
                        this.destroyed || (o = !1, n = !1)
                    }))
                }
                updateActualOptions() {
                    this.actualOptions.responsive = [];
                    const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                    return this.actualOptions.setTheme(this.currentTheme), this.responsiveMaxWidth != t && (this.responsiveMaxWidth = t, !0)
                }
                async init() {
                    this._options = new r.Options;
                    for (const o of this.presets) this._options.load(c.Plugins.getPreset(o));
                    const t = c.Plugins.getSupportedShapes();
                    for (const o of t) {
                        const t = c.Plugins.getShapeDrawer(o);
                        t && this.drawers.set(o, t)
                    }
                    this._options.load(this._initialSourceOptions), this._options.load(this._sourceOptions), this.actualOptions = new r.Options, this.actualOptions.load(this._options), this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = (0, c.getRangeValue)(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
                    const e = c.Plugins.getAvailablePlugins(this);
                    for (const [o, n] of e) this.plugins.set(o, n);
                    for (const [, o] of this.drawers) o.init && await o.init(this);
                    for (const [, o] of this.plugins) o.init ? o.init(this.actualOptions) : void 0 !== o.initAsync && await o.initAsync(this.actualOptions);
                    const i = this.actualOptions.particles.move.path;
                    if (i.generator) {
                        const t = c.Plugins.getPathGenerator(i.generator);
                        t && (t.init && (this.pathGenerator.init = t.init), t.generate && (this.pathGenerator.generate = t.generate), t.update && (this.pathGenerator.update = t.update))
                    }
                    this.particles.init(), this.particles.setDensity();
                    for (const [, o] of this.plugins) void 0 !== o.particlesSetup && o.particlesSetup()
                }
                intersectionManager(t) {
                    if (this.actualOptions.pauseOnOutsideViewport)
                        for (const e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause())
                }
            }
        },
        24260: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ExternalInteractorBase = void 0;
            const o = i(26331);
            e.ExternalInteractorBase = class {
                constructor(t) {
                    this.container = t, this.type = o.InteractorType.External
                }
            }
        },
        410: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.FrameManager = void 0;
            e.FrameManager = class {
                constructor(t) {
                    this.container = t
                }
                nextFrame(t) {
                    var e;
                    try {
                        const i = this.container;
                        if (void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) return void i.draw(!1);
                        null !== (e = i.lastFrameTime) && void 0 !== e || (i.lastFrameTime = t);
                        const o = t - i.lastFrameTime,
                            n = {
                                value: o,
                                factor: 60 * o / 1e3
                            };
                        if (i.lifeTime += n.value, i.lastFrameTime = t, o > 1e3) return void i.draw(!1);
                        if (i.particles.draw(n), i.duration > 0 && i.lifeTime > i.duration) return void i.destroy();
                        i.getAnimationStatus() && i.draw(!1)
                    } catch (i) {
                        console.error("tsParticles error in animation loop", i)
                    }
                }
            }
        },
        50085: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.InteractionManager = void 0;
            const o = i(97373),
                n = i(26331);
            e.InteractionManager = class {
                constructor(t) {
                    this.container = t, this.externalInteractors = [], this.particleInteractors = [], this.init()
                }
                init() {
                    const t = o.Plugins.getInteractors(this.container, !0);
                    for (const e of t) switch (e.type) {
                        case n.InteractorType.External:
                            this.externalInteractors.push(e);
                            break;
                        case n.InteractorType.Particles:
                            this.particleInteractors.push(e)
                    }
                }
                externalInteract(t) {
                    for (const e of this.externalInteractors) e.isEnabled() && e.interact(t)
                }
                particlesInteract(t, e) {
                    for (const i of this.externalInteractors) i.reset(t);
                    for (const i of this.particleInteractors) i.isEnabled(t) && i.interact(t, e)
                }
            }
        },
        23905: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        5894: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        31646: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        69834: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11572: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        31668: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        85929: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        26012: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        73262: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        29432: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        60221: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        80142: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        86579: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        2846: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        96252: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        95111: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        12929: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        988: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        90608: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        6410: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        49646: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        36830: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        86524: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        16776: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        44910: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        84562: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        64609: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        23338: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        79840: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        98117: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        75720: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        99913: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        82012: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        68354: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        43936: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(23905), e), n(i(5894), e), n(i(31646), e), n(i(69834), e), n(i(11572), e), n(i(31668), e), n(i(85929), e), n(i(26012), e), n(i(73262), e), n(i(29432), e), n(i(60221), e), n(i(80142), e), n(i(86579), e), n(i(2846), e), n(i(96252), e), n(i(95111), e), n(i(12929), e), n(i(988), e), n(i(90608), e), n(i(6410), e), n(i(49646), e), n(i(36830), e), n(i(86524), e), n(i(16776), e), n(i(44910), e), n(i(84562), e), n(i(64609), e), n(i(23338), e), n(i(79840), e), n(i(98117), e), n(i(75720), e), n(i(99913), e), n(i(82012), e), n(i(68354), e)
        },
        26301: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Loader = void 0;
            const o = i(45624),
                n = i(97373),
                s = [];
            class a {
                static dom() {
                    return s
                }
                static domItem(t) {
                    const e = a.dom(),
                        i = e[t];
                    if (i && !i.destroyed) return i;
                    e.splice(t, 1)
                }
                static async loadOptions(t) {
                    var e, i, s;
                    const r = null !== (e = t.tagId) && void 0 !== e ? e : `tsparticles${Math.floor(1e4*Math.random())}`,
                        {
                            options: c,
                            index: l
                        } = t;
                    let d = null !== (i = t.element) && void 0 !== i ? i : document.getElementById(r);
                    d || (d = document.createElement("div"), d.id = r, null === (s = document.querySelector("body")) || void 0 === s || s.append(d));
                    const u = c instanceof Array ? (0, n.itemFromArray)(c, l) : c,
                        h = a.dom(),
                        p = h.findIndex((t => t.id === r));
                    if (p >= 0) {
                        const t = a.domItem(p);
                        t && !t.destroyed && (t.destroy(), h.splice(p, 1))
                    }
                    let v, y;
                    if ("canvas" === d.tagName.toLowerCase()) v = d, y = !1;
                    else {
                        const t = d.getElementsByTagName("canvas");
                        t.length ? (v = t[0], v.className || (v.className = n.Constants.canvasClass), y = !1) : (y = !0, v = document.createElement("canvas"), v.className = n.Constants.canvasClass, v.style.width = "100%", v.style.height = "100%", d.appendChild(v))
                    }
                    const f = new o.Container(r, u);
                    return p >= 0 ? h.splice(p, 0, f) : h.push(f), f.canvas.loadCanvas(v, y), await f.start(), f
                }
                static async loadRemoteOptions(t) {
                    const {
                        url: e,
                        index: i
                    } = t, o = e instanceof Array ? (0, n.itemFromArray)(e, i) : e;
                    if (!o) return;
                    const s = await fetch(o);
                    if (!s.ok) return r = s.status, console.error(`Error tsParticles - fetch status: ${r}`), void console.error("Error tsParticles - File config not found");
                    var r;
                    const c = await s.json();
                    return await a.loadOptions({
                        tagId: t.tagId,
                        element: t.element,
                        index: i,
                        options: c
                    })
                }
                static load(t, e, i) {
                    const o = {
                        index: i
                    };
                    return "string" === typeof t ? o.tagId = t : o.options = t, "number" === typeof e ? o.index = null !== e && void 0 !== e ? e : o.index : o.options = null !== e && void 0 !== e ? e : o.options, this.loadOptions(o)
                }
                static async set(t, e, i, o) {
                    const n = {
                        index: o
                    };
                    return "string" === typeof t ? n.tagId = t : n.element = t, e instanceof HTMLElement ? n.element = e : n.options = e, "number" === typeof i ? n.index = i : n.options = null !== i && void 0 !== i ? i : n.options, this.loadOptions(n)
                }
                static async loadJSON(t, e, i) {
                    let o, n;
                    return "number" === typeof e || void 0 === e ? o = t : (n = t, o = e), await a.loadRemoteOptions({
                        tagId: n,
                        url: o,
                        index: i
                    })
                }
                static async setJSON(t, e, i, o) {
                    let n, s, r, c;
                    return t instanceof HTMLElement ? (c = t, n = e, r = i) : (s = t, c = e, n = i, r = o), await a.loadRemoteOptions({
                        tagId: s,
                        url: n,
                        index: r,
                        element: c
                    })
                }
                static setOnClickHandler(t) {
                    const e = a.dom();
                    if (0 === e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                    for (const i of e) i.addClickHandler(t)
                }
            }
            e.Loader = a
        },
        87051: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Particle = void 0;
            const o = i(8029),
                n = i(39014),
                s = i(26331),
                a = i(97373),
                r = i(95638),
                c = i(95532),
                l = t => {
                    ((0, a.isInArray)(t.outMode, t.checkModes) || (0, a.isInArray)(t.outMode, t.checkModes)) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius))
                };
            e.Particle = class {
                constructor(t, e, i, c, l) {
                    var d, u, h, p, v, y, f, g, b;
                    this.id = t, this.container = e, this.group = l, this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.retina = {
                        maxDistance: {}
                    };
                    const m = e.retina.pixelRatio,
                        w = e.actualOptions,
                        S = new o.ParticlesOptions;
                    S.load(w.particles);
                    const _ = S.shape.type,
                        P = S.reduceDuplicates;
                    if (this.shape = _ instanceof Array ? (0, a.itemFromArray)(_, this.id, P) : _, null === c || void 0 === c ? void 0 : c.shape) {
                        if (c.shape.type) {
                            const t = c.shape.type;
                            this.shape = t instanceof Array ? (0, a.itemFromArray)(t, this.id, P) : t
                        }
                        const t = new n.Shape;
                        t.load(c.shape), this.shape && (this.shapeData = this.loadShapeData(t, P))
                    } else this.shapeData = this.loadShapeData(S.shape, P);
                    void 0 !== c && S.load(c), void 0 !== (null === (d = this.shapeData) || void 0 === d ? void 0 : d.particles) && S.load(null === (u = this.shapeData) || void 0 === u ? void 0 : u.particles), this.fill = null !== (p = null === (h = this.shapeData) || void 0 === h ? void 0 : h.fill) && void 0 !== p ? p : this.fill, this.close = null !== (y = null === (v = this.shapeData) || void 0 === v ? void 0 : v.close) && void 0 !== y ? y : this.close, this.options = S, this.pathDelay = 1e3 * (0, a.getValue)(this.options.move.path.delay);
                    const O = (0, a.getRangeValue)(this.options.zIndex.value);
                    e.retina.initParticle(this);
                    const M = this.options.size,
                        x = M.value;
                    this.size = {
                        enable: M.animation.enable,
                        value: (0, a.getValue)(M) * e.retina.pixelRatio,
                        max: (0, a.getRangeMax)(x) * m,
                        min: (0, a.getRangeMin)(x) * m,
                        loops: 0,
                        maxLoops: M.animation.count
                    };
                    const C = M.animation;
                    if (C.enable) {
                        switch (this.size.status = s.AnimationStatus.increasing, C.startValue) {
                            case s.StartValueType.min:
                                this.size.value = this.size.min, this.size.status = s.AnimationStatus.increasing;
                                break;
                            case s.StartValueType.random:
                                this.size.value = (0, a.randomInRange)(this.size) * m, this.size.status = Math.random() >= .5 ? s.AnimationStatus.increasing : s.AnimationStatus.decreasing;
                                break;
                            case s.StartValueType.max:
                            default:
                                this.size.value = this.size.max, this.size.status = s.AnimationStatus.decreasing
                        }
                        this.size.velocity = (null !== (f = this.retina.sizeAnimationSpeed) && void 0 !== f ? f : e.retina.sizeAnimationSpeed) / 100 * e.retina.reduceFactor, C.sync || (this.size.velocity *= Math.random())
                    }
                    this.direction = (0, a.getParticleDirectionAngle)(this.options.move.direction), this.bubble = {
                        inRange: !1
                    }, this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - (0, a.getRangeValue)(this.options.move.decay), this.position = this.calcPosition(e, i, (0, a.clamp)(O, 0, e.zLayers)), this.initialPosition = this.position.copy(), this.offset = r.Vector.origin;
                    const A = e.particles;
                    A.needsSort = A.needsSort || A.lastZIndex < this.position.z, A.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / e.zLayers, this.sides = 24;
                    let T = e.drawers.get(this.shape);
                    T || (T = a.Plugins.getShapeDrawer(this.shape), T && e.drawers.set(this.shape, T)), (null === T || void 0 === T ? void 0 : T.loadShape) && (null === T || void 0 === T || T.loadShape(this));
                    const R = null === T || void 0 === T ? void 0 : T.getSidesCount;
                    if (R && (this.sides = R(this)), this.life = this.loadLife(), this.spawning = this.life.delay > 0, this.options.move.spin.enable) {
                        const t = null !== (g = this.options.move.spin.position) && void 0 !== g ? g : {
                                x: 50,
                                y: 50
                            },
                            i = {
                                x: t.x / 100 * e.canvas.size.width,
                                y: t.y / 100 * e.canvas.size.height
                            },
                            o = this.getPosition(),
                            n = (0, a.getDistance)(o, i);
                        this.spin = {
                            center: i,
                            direction: this.velocity.x >= 0 ? s.RotateDirection.clockwise : s.RotateDirection.counterClockwise,
                            angle: this.velocity.angle,
                            radius: n,
                            acceleration: null !== (b = this.retina.spinAcceleration) && void 0 !== b ? b : (0, a.getRangeValue)(this.options.move.spin.acceleration)
                        }
                    }
                    this.shadowColor = (0, a.colorToRgb)(this.options.shadow.color);
                    for (const o of e.particles.updaters) o.init && o.init(this);
                    T && T.particleInit && T.particleInit(e, this);
                    for (const [, o] of e.plugins) o.particleCreated && o.particleCreated(this)
                }
                isVisible() {
                    return !this.destroyed && !this.spawning && this.isInsideCanvas()
                }
                isInsideCanvas() {
                    const t = this.getRadius(),
                        e = this.container.canvas.size;
                    return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
                }
                draw(t) {
                    const e = this.container;
                    for (const [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
                    e.canvas.drawParticle(this, t)
                }
                getPosition() {
                    return {
                        x: this.position.x + this.offset.x,
                        y: this.position.y + this.offset.y,
                        z: this.position.z
                    }
                }
                getRadius() {
                    var t;
                    return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value
                }
                getMass() {
                    return this.getRadius() ** 2 * Math.PI / 2
                }
                getFillColor() {
                    var t, e, i;
                    const o = null !== (t = this.bubble.color) && void 0 !== t ? t : (0, a.getHslFromAnimation)(this.color);
                    if (o && this.roll && (this.backColor || this.roll.alter)) {
                        if (Math.floor((null !== (i = null === (e = this.roll) || void 0 === e ? void 0 : e.angle) && void 0 !== i ? i : 0) / (Math.PI / 2)) % 2) {
                            if (this.backColor) return this.backColor;
                            if (this.roll.alter) return (0, a.alterHsl)(o, this.roll.alter.type, this.roll.alter.value)
                        }
                    }
                    return o
                }
                getStrokeColor() {
                    var t, e;
                    return null !== (e = null !== (t = this.bubble.color) && void 0 !== t ? t : (0, a.getHslFromAnimation)(this.strokeColor)) && void 0 !== e ? e : this.getFillColor()
                }
                destroy(t) {
                    if (this.destroyed = !0, this.bubble.inRange = !1, this.unbreakable) return;
                    this.destroyed = !0, this.bubble.inRange = !1;
                    for (const [, e] of this.container.plugins) e.particleDestroyed && e.particleDestroyed(this, t);
                    if (t) return;
                    this.options.destroy.mode === s.DestroyMode.split && this.split()
                }
                reset() {
                    this.opacity && (this.opacity.loops = 0), this.size.loops = 0
                }
                split() {
                    const t = this.options.destroy.split;
                    if (t.count >= 0 && this.splitCount++ > t.count) return;
                    const e = (0, a.getRangeValue)(t.rate.value);
                    for (let i = 0; i < e; i++) this.container.particles.addSplitParticle(this)
                }
                calcPosition(t, e, i, o = 0) {
                    var n, a, r, d, u, h;
                    for (const [, s] of t.plugins) {
                        const t = void 0 !== s.particlePosition ? s.particlePosition(e, this) : void 0;
                        if (void 0 !== t) return c.Vector3d.create(t.x, t.y, i)
                    }
                    const p = t.canvas.size,
                        v = c.Vector3d.create(null !== (n = null === e || void 0 === e ? void 0 : e.x) && void 0 !== n ? n : Math.random() * p.width, null !== (a = null === e || void 0 === e ? void 0 : e.y) && void 0 !== a ? a : Math.random() * p.height, i),
                        y = this.getRadius(),
                        f = this.options.move.outModes,
                        g = e => {
                            l({
                                outMode: e,
                                checkModes: [s.OutMode.bounce, s.OutMode.bounceHorizontal],
                                coord: v.x,
                                maxCoord: t.canvas.size.width,
                                setCb: t => v.x += t,
                                radius: y
                            })
                        },
                        b = e => {
                            l({
                                outMode: e,
                                checkModes: [s.OutMode.bounce, s.OutMode.bounceVertical],
                                coord: v.y,
                                maxCoord: t.canvas.size.height,
                                setCb: t => v.y += t,
                                radius: y
                            })
                        };
                    return g(null !== (r = f.left) && void 0 !== r ? r : f.default), g(null !== (d = f.right) && void 0 !== d ? d : f.default), b(null !== (u = f.top) && void 0 !== u ? u : f.default), b(null !== (h = f.bottom) && void 0 !== h ? h : f.default), this.checkOverlap(v, o) ? this.calcPosition(t, void 0, i, o + 1) : v
                }
                checkOverlap(t, e = 0) {
                    const i = this.options.collisions,
                        o = this.getRadius();
                    if (!i.enable) return !1;
                    const n = i.overlap;
                    if (n.enable) return !1;
                    const s = n.retries;
                    if (s >= 0 && e > s) throw new Error("Particle is overlapping and can't be placed");
                    let r = !1;
                    for (const c of this.container.particles.array)
                        if ((0, a.getDistance)(t, c.position) < o + c.getRadius()) {
                            r = !0;
                            break
                        }
                    return r
                }
                calculateVelocity() {
                    const t = (0, a.getParticleBaseVelocity)(this.direction).copy(),
                        e = this.options.move,
                        i = Math.PI / 180 * e.angle.value,
                        o = Math.PI / 180 * e.angle.offset,
                        n = {
                            left: o - i / 2,
                            right: o + i / 2
                        };
                    return e.straight || (t.angle += (0, a.randomInRange)((0, a.setRangeValue)(n.left, n.right))), e.random && "number" === typeof e.speed && (t.length *= Math.random()), t
                }
                loadShapeData(t, e) {
                    const i = t.options[this.shape];
                    if (i) return (0, a.deepExtend)({}, i instanceof Array ? (0, a.itemFromArray)(i, this.id, e) : i)
                }
                loadLife() {
                    const t = this.container,
                        e = this.options,
                        i = e.life,
                        o = {
                            delay: t.retina.reduceFactor ? (0, a.getRangeValue)(i.delay.value) * (i.delay.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                            delayTime: 0,
                            duration: t.retina.reduceFactor ? (0, a.getRangeValue)(i.duration.value) * (i.duration.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                            time: 0,
                            count: e.life.count
                        };
                    return o.duration <= 0 && (o.duration = -1), o.count <= 0 && (o.count = -1), o
                }
            }
        },
        14285: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Mover = void 0;
            const o = i(97373),
                n = i(26331);
            e.Mover = class {
                constructor(t) {
                    this.container = t
                }
                move(t, e) {
                    t.destroyed || (this.moveParticle(t, e), this.moveParallax(t))
                }
                moveParticle(t, e) {
                    var i, n, s, a, r;
                    const c = t.options,
                        l = c.move;
                    if (!l.enable) return;
                    const d = this.container,
                        u = this.getProximitySpeedFactor(t),
                        h = (null !== (i = (a = t.retina).moveSpeed) && void 0 !== i ? i : a.moveSpeed = (0, o.getRangeValue)(l.speed) * d.retina.pixelRatio) * d.retina.reduceFactor,
                        p = null !== (n = (r = t.retina).moveDrift) && void 0 !== n ? n : r.moveDrift = (0, o.getRangeValue)(t.options.move.drift) * d.retina.pixelRatio,
                        v = (0, o.getRangeMax)(c.size.value) * d.retina.pixelRatio,
                        y = h * ((l.size ? t.getRadius() / v : 1) * u * (e.factor || 1) / 2);
                    this.applyPath(t, e);
                    const f = l.gravity,
                        g = f.enable && f.inverse ? -1 : 1;
                    f.enable && y && (t.velocity.y += g * (f.acceleration * e.factor) / (60 * y)), p && y && (t.velocity.x += p * e.factor / (60 * y));
                    const b = t.moveDecay;
                    1 != b && t.velocity.multTo(b);
                    const m = t.velocity.mult(y),
                        w = null !== (s = t.retina.maxSpeed) && void 0 !== s ? s : d.retina.maxSpeed;
                    f.enable && f.maxSpeed > 0 && (!f.inverse && m.y >= 0 && m.y >= w || f.inverse && m.y <= 0 && m.y <= -w) && (m.y = g * w, y && (t.velocity.y = m.y / y));
                    const S = t.options.zIndex,
                        _ = (1 - t.zIndexFactor) ** S.velocityRate;
                    l.spin.enable ? this.spin(t, y) : (1 != _ && m.multTo(_), t.position.addTo(m), l.vibrate && (t.position.x += Math.sin(t.position.x * Math.cos(t.position.y)), t.position.y += Math.cos(t.position.y * Math.sin(t.position.x)))),
                        function(t) {
                            const e = t.initialPosition,
                                {
                                    dx: i,
                                    dy: n
                                } = (0, o.getDistances)(e, t.position),
                                s = Math.abs(i),
                                a = Math.abs(n),
                                r = t.retina.maxDistance.horizontal,
                                c = t.retina.maxDistance.vertical;
                            if (r || c)
                                if ((r && s >= r || c && a >= c) && !t.misplaced) t.misplaced = !!r && s > r || !!c && a > c, r && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), c && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                                else if ((!r || s < r) && (!c || a < c) && t.misplaced) t.misplaced = !1;
                            else if (t.misplaced) {
                                const i = t.position,
                                    o = t.velocity;
                                r && (i.x < e.x && o.x < 0 || i.x > e.x && o.x > 0) && (o.x *= -Math.random()), c && (i.y < e.y && o.y < 0 || i.y > e.y && o.y > 0) && (o.y *= -Math.random())
                            }
                        }(t)
                }
                spin(t, e) {
                    const i = this.container;
                    if (!t.spin) return;
                    const o = {
                        x: t.spin.direction === n.RotateDirection.clockwise ? Math.cos : Math.sin,
                        y: t.spin.direction === n.RotateDirection.clockwise ? Math.sin : Math.cos
                    };
                    t.position.x = t.spin.center.x + t.spin.radius * o.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * o.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
                    const s = Math.max(i.canvas.size.width, i.canvas.size.height);
                    t.spin.radius > s / 2 ? (t.spin.radius = s / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / s)
                }
                applyPath(t, e) {
                    const i = t.options.move.path;
                    if (!i.enable) return;
                    const n = this.container;
                    if (t.lastPathTime <= t.pathDelay) return void(t.lastPathTime += e.value);
                    const s = n.pathGenerator.generate(t);
                    t.velocity.addTo(s), i.clamp && (t.velocity.x = (0, o.clamp)(t.velocity.x, -1, 1), t.velocity.y = (0, o.clamp)(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
                }
                moveParallax(t) {
                    const e = this.container,
                        i = e.actualOptions;
                    if ((0, o.isSsr)() || !i.interactivity.events.onHover.parallax.enable) return;
                    const n = i.interactivity.events.onHover.parallax.force,
                        s = e.interactivity.mouse.position;
                    if (!s) return;
                    const a = e.canvas.size.width / 2,
                        r = e.canvas.size.height / 2,
                        c = i.interactivity.events.onHover.parallax.smooth,
                        l = t.getRadius() / n,
                        d = (s.x - a) * l,
                        u = (s.y - r) * l;
                    t.offset.x += (d - t.offset.x) / c, t.offset.y += (u - t.offset.y) / c
                }
                getProximitySpeedFactor(t) {
                    const e = this.container,
                        i = e.actualOptions;
                    if (!(0, o.isInArray)(n.HoverMode.slow, i.interactivity.events.onHover.mode)) return 1;
                    const s = this.container.interactivity.mouse.position;
                    if (!s) return 1;
                    const a = t.getPosition(),
                        r = (0, o.getDistance)(s, a),
                        c = e.retina.slowModeRadius;
                    if (r > c) return 1;
                    return (r / c || 0) / i.interactivity.modes.slow.factor
                }
            }
        },
        95638: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Vector = void 0;
            class i {
                constructor(t, e) {
                    let i, o;
                    if (void 0 === e) {
                        if ("number" === typeof t) throw new Error("tsParticles - Vector not initialized correctly");
                        const e = t;
                        [i, o] = [e.x, e.y]
                    } else [i, o] = [t, e];
                    this.x = i, this.y = o
                }
                static clone(t) {
                    return i.create(t.x, t.y)
                }
                static create(t, e) {
                    return new i(t, e)
                }
                static get origin() {
                    return i.create(0, 0)
                }
                get angle() {
                    return Math.atan2(this.y, this.x)
                }
                set angle(t) {
                    this.updateFromAngle(t, this.length)
                }
                get length() {
                    return Math.sqrt(this.x ** 2 + this.y ** 2)
                }
                set length(t) {
                    this.updateFromAngle(this.angle, t)
                }
                add(t) {
                    return i.create(this.x + t.x, this.y + t.y)
                }
                addTo(t) {
                    this.x += t.x, this.y += t.y
                }
                sub(t) {
                    return i.create(this.x - t.x, this.y - t.y)
                }
                subFrom(t) {
                    this.x -= t.x, this.y -= t.y
                }
                mult(t) {
                    return i.create(this.x * t, this.y * t)
                }
                multTo(t) {
                    this.x *= t, this.y *= t
                }
                div(t) {
                    return i.create(this.x / t, this.y / t)
                }
                divTo(t) {
                    this.x /= t, this.y /= t
                }
                distanceTo(t) {
                    return this.sub(t).length
                }
                getLengthSq() {
                    return this.x ** 2 + this.y ** 2
                }
                distanceToSq(t) {
                    return this.sub(t).getLengthSq()
                }
                manhattanDistanceTo(t) {
                    return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
                }
                copy() {
                    return i.clone(this)
                }
                setTo(t) {
                    this.x = t.x, this.y = t.y
                }
                rotate(t) {
                    return i.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t))
                }
                updateFromAngle(t, e) {
                    this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
                }
            }
            e.Vector = i
        },
        95532: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Vector3d = void 0;
            const o = i(95638);
            class n extends o.Vector {
                constructor(t, e, i) {
                    super(t, e), this.z = void 0 === i ? t.z : i
                }
                static clone(t) {
                    return n.create(t.x, t.y, t.z)
                }
                static create(t, e, i) {
                    return new n(t, e, i)
                }
                add(t) {
                    return t instanceof n ? n.create(this.x + t.x, this.y + t.y, this.z + t.z) : super.add(t)
                }
                addTo(t) {
                    super.addTo(t), t instanceof n && (this.z += t.z)
                }
                sub(t) {
                    return t instanceof n ? n.create(this.x - t.x, this.y - t.y, this.z - t.z) : super.sub(t)
                }
                subFrom(t) {
                    super.subFrom(t), t instanceof n && (this.z -= t.z)
                }
                mult(t) {
                    return n.create(this.x * t, this.y * t, this.z * t)
                }
                multTo(t) {
                    super.multTo(t), this.z *= t
                }
                div(t) {
                    return n.create(this.x / t, this.y / t, this.z / t)
                }
                divTo(t) {
                    super.divTo(t), this.z /= t
                }
                copy() {
                    return n.clone(this)
                }
                setTo(t) {
                    super.setTo(t), t instanceof n && (this.z = t.z)
                }
            }
            e.Vector3d = n
        },
        4480: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Particles = void 0;
            const o = i(87051),
                n = i(97373),
                s = i(50085),
                a = i(8029),
                r = i(14285);
            e.Particles = class {
                constructor(t) {
                    this.container = t, this.nextId = 0, this.array = [], this.zArray = [], this.mover = new r.Mover(t), this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = {
                        links: new Map,
                        triangles: new Map
                    }, this.interactionManager = new s.InteractionManager(t);
                    const e = this.container.canvas.size;
                    this.linksColors = new Map, this.quadTree = new n.QuadTree(new n.Rectangle(-e.width / 4, -e.height / 4, 3 * e.width / 2, 3 * e.height / 2), 4), this.updaters = n.Plugins.getUpdaters(t, !0)
                }
                get count() {
                    return this.array.length
                }
                init() {
                    var t;
                    const e = this.container,
                        i = e.actualOptions;
                    this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
                    let o = !1;
                    this.updaters = n.Plugins.getUpdaters(e, !0), this.interactionManager.init();
                    for (const [, n] of e.plugins)
                        if (void 0 !== n.particlesInitialization && (o = n.particlesInitialization()), o) break;
                    if (this.addManualParticles(), !o) {
                        for (const e in i.particles.groups) {
                            const o = i.particles.groups[e];
                            for (let n = this.count, s = 0; s < (null === (t = o.number) || void 0 === t ? void 0 : t.value) && n < i.particles.number.value; n++, s++) this.addParticle(void 0, o, e)
                        }
                        for (let t = this.count; t < i.particles.number.value; t++) this.addParticle()
                    }
                    e.pathGenerator.init(e)
                }
                redraw() {
                    this.clear(), this.init(), this.draw({
                        value: 0,
                        factor: 0
                    })
                }
                removeAt(t, e = 1, i, o) {
                    if (!(t >= 0 && t <= this.count)) return;
                    let n = 0;
                    for (let s = t; n < e && s < this.count; s++) {
                        const t = this.array[s];
                        if (!t || t.group !== i) continue;
                        t.destroy(o), this.array.splice(s--, 1);
                        const e = this.zArray.indexOf(t);
                        this.zArray.splice(e, 1), n++
                    }
                }
                remove(t, e, i) {
                    this.removeAt(this.array.indexOf(t), void 0, e, i)
                }
                update(t) {
                    const e = this.container,
                        i = [];
                    e.pathGenerator.update();
                    for (const [, o] of e.plugins) void 0 !== o.update && o.update(t);
                    for (const o of this.array) {
                        const s = e.canvas.resizeFactor;
                        s && (o.position.x *= s.width, o.position.y *= s.height), o.bubble.inRange = !1;
                        for (const [, e] of this.container.plugins) {
                            if (o.destroyed) break;
                            e.particleUpdate && e.particleUpdate(o, t)
                        }
                        this.mover.move(o, t), o.destroyed ? i.push(o) : this.quadTree.insert(new n.Point(o.getPosition(), o))
                    }
                    for (const o of i) this.remove(o);
                    this.interactionManager.externalInteract(t);
                    for (const o of e.particles.array) {
                        for (const e of this.updaters) e.update(o, t);
                        o.destroyed || o.spawning || this.interactionManager.particlesInteract(o, t)
                    }
                    delete e.canvas.resizeFactor
                }
                draw(t) {
                    const e = this.container;
                    e.canvas.clear();
                    const i = this.container.canvas.size;
                    this.quadTree = new n.QuadTree(new n.Rectangle(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), this.update(t), this.needsSort && (this.zArray.sort(((t, e) => e.position.z - t.position.z || t.id - e.id)), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
                    for (const [, o] of e.plugins) e.canvas.drawPlugin(o, t);
                    for (const o of this.zArray) o.draw(t)
                }
                clear() {
                    this.array = [], this.zArray = []
                }
                push(t, e, i, o) {
                    this.pushing = !0;
                    for (let n = 0; n < t; n++) this.addParticle(null === e || void 0 === e ? void 0 : e.position, i, o);
                    this.pushing = !1
                }
                addParticle(t, e, i) {
                    const o = this.container,
                        n = o.actualOptions.particles.number.limit * o.density;
                    if (n > 0) {
                        const t = this.count + 1 - n;
                        t > 0 && this.removeQuantity(t)
                    }
                    return this.pushParticle(t, e, i)
                }
                addSplitParticle(t) {
                    const e = t.options.destroy.split,
                        i = new a.ParticlesOptions;
                    i.load(t.options);
                    const o = (0, n.getRangeValue)(e.factor.value);
                    i.color.load({
                        value: {
                            hsl: t.getFillColor()
                        }
                    }), "number" === typeof i.size.value ? i.size.value /= o : (i.size.value.min /= o, i.size.value.max /= o), i.load(e.particles);
                    const s = e.sizeOffset ? (0, n.setRangeValue)(-t.size.value, t.size.value) : 0,
                        r = {
                            x: t.position.x + (0, n.randomInRange)(s),
                            y: t.position.y + (0, n.randomInRange)(s)
                        };
                    return this.pushParticle(r, i, t.group, (e => !(e.size.value < .5) && (e.velocity.length = (0, n.randomInRange)((0, n.setRangeValue)(t.velocity.length, e.velocity.length)), e.splitCount = t.splitCount + 1, e.unbreakable = !0, setTimeout((() => {
                        e.unbreakable = !1
                    }), 500), !0)))
                }
                removeQuantity(t, e) {
                    this.removeAt(0, t, e)
                }
                getLinkFrequency(t, e) {
                    const i = `${Math.min(t.id,e.id)}_${Math.max(t.id,e.id)}`;
                    let o = this.freqs.links.get(i);
                    return void 0 === o && (o = Math.random(), this.freqs.links.set(i, o)), o
                }
                getTriangleFrequency(t, e, i) {
                    let [o, n, s] = [t.id, e.id, i.id];
                    o > n && ([n, o] = [o, n]), n > s && ([s, n] = [n, s]), o > s && ([s, o] = [o, s]);
                    const a = `${o}_${n}_${s}`;
                    let r = this.freqs.triangles.get(a);
                    return void 0 === r && (r = Math.random(), this.freqs.triangles.set(a, r)), r
                }
                addManualParticles() {
                    const t = this.container,
                        e = t.actualOptions;
                    for (const i of e.manualParticles) {
                        const e = i.position ? {
                            x: i.position.x * t.canvas.size.width / 100,
                            y: i.position.y * t.canvas.size.height / 100
                        } : void 0;
                        this.addParticle(e, i.options)
                    }
                }
                setDensity() {
                    const t = this.container.actualOptions;
                    for (const e in t.particles.groups) this.applyDensity(t.particles.groups[e], 0, e);
                    this.applyDensity(t.particles, t.manualParticles.length)
                }
                applyDensity(t, e, i) {
                    var o;
                    if (!(null === (o = t.number.density) || void 0 === o ? void 0 : o.enable)) return;
                    const n = t.number,
                        s = this.initDensityFactor(n.density),
                        a = n.value,
                        r = n.limit > 0 ? n.limit : a,
                        c = Math.min(a, r) * s + e,
                        l = Math.min(this.count, this.array.filter((t => t.group === i)).length);
                    this.limit = n.limit * s, l < c ? this.push(Math.abs(c - l), void 0, t, i) : l > c && this.removeQuantity(l - c, i)
                }
                initDensityFactor(t) {
                    const e = this.container;
                    if (!e.canvas.element || !t.enable) return 1;
                    const i = e.canvas.element,
                        o = e.retina.pixelRatio;
                    return i.width * i.height / (t.factor * o ** 2 * t.area)
                }
                pushParticle(t, e, i, n) {
                    try {
                        const s = new o.Particle(this.nextId, this.container, t, e, i);
                        let a = !0;
                        if (n && (a = n(s)), !a) return;
                        return this.array.push(s), this.zArray.push(s), this.nextId++, s
                    } catch (s) {
                        return void console.warn(`error adding particle: ${s}`)
                    }
                }
            }
        },
        37472: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ParticlesInteractorBase = void 0;
            const o = i(26331);
            e.ParticlesInteractorBase = class {
                constructor(t) {
                    this.container = t, this.type = o.InteractorType.Particles
                }
            }
        },
        21993: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Retina = void 0;
            const o = i(97373);
            e.Retina = class {
                constructor(t) {
                    this.container = t
                }
                init() {
                    const t = this.container,
                        e = t.actualOptions;
                    this.pixelRatio = !e.detectRetina || (0, o.isSsr)() ? 1 : window.devicePixelRatio;
                    const i = this.container.actualOptions.motion;
                    if (i && (i.disable || i.reduce.value))
                        if ((0, o.isSsr)() || "undefined" === typeof matchMedia || !matchMedia) this.reduceFactor = 1;
                        else {
                            const e = matchMedia("(prefers-reduced-motion: reduce)");
                            if (e) {
                                this.handleMotionChange(e);
                                const i = () => {
                                    this.handleMotionChange(e), t.refresh().catch((() => {}))
                                };
                                void 0 !== e.addEventListener ? e.addEventListener("change", i) : void 0 !== e.addListener && e.addListener(i)
                            }
                        }
                    else this.reduceFactor = 1;
                    const n = this.pixelRatio;
                    if (t.canvas.element) {
                        const e = t.canvas.element;
                        t.canvas.size.width = e.offsetWidth * n, t.canvas.size.height = e.offsetHeight * n
                    }
                    const s = e.particles;
                    this.attractDistance = s.move.attract.distance * n, this.linksDistance = s.links.distance * n, this.linksWidth = s.links.width * n, this.sizeAnimationSpeed = s.size.animation.speed * n, this.maxSpeed = s.move.gravity.maxSpeed * n, void 0 !== s.orbit.radius && (this.orbitRadius = s.orbit.radius * this.container.retina.pixelRatio);
                    const a = e.interactivity.modes;
                    this.connectModeDistance = a.connect.distance * n, this.connectModeRadius = a.connect.radius * n, this.grabModeDistance = a.grab.distance * n, this.repulseModeDistance = a.repulse.distance * n, this.bounceModeDistance = a.bounce.distance * n, this.attractModeDistance = a.attract.distance * n, this.slowModeRadius = a.slow.radius * n, this.bubbleModeDistance = a.bubble.distance * n, a.bubble.size && (this.bubbleModeSize = a.bubble.size * n)
                }
                initParticle(t) {
                    const e = t.options,
                        i = this.pixelRatio,
                        n = e.move.distance,
                        s = t.retina;
                    s.attractDistance = e.move.attract.distance * i, s.linksDistance = e.links.distance * i, s.linksWidth = e.links.width * i, s.moveDrift = (0, o.getRangeValue)(e.move.drift) * i, s.moveSpeed = (0, o.getRangeValue)(e.move.speed) * i, s.sizeAnimationSpeed = e.size.animation.speed * i, t.spin && (s.spinAcceleration = (0, o.getRangeValue)(e.move.spin.acceleration) * i);
                    const a = s.maxDistance;
                    a.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0, a.vertical = void 0 !== n.vertical ? n.vertical * i : void 0, s.maxSpeed = e.move.gravity.maxSpeed * i
                }
                handleMotionChange(t) {
                    const e = this.container.actualOptions;
                    if (t.matches) {
                        const t = e.motion;
                        this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1
                    } else this.reduceFactor = 1
                }
            }
        },
        62838: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.AnimationStatus = void 0,
                function(t) {
                    t[t.increasing = 0] = "increasing", t[t.decreasing = 1] = "decreasing"
                }(e.AnimationStatus || (e.AnimationStatus = {}))
        },
        21583: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.MoveDirection = void 0,
                function(t) {
                    t.bottom = "bottom", t.bottomLeft = "bottom-left", t.bottomRight = "bottom-right", t.left = "left", t.none = "none", t.right = "right", t.top = "top", t.topLeft = "top-left", t.topRight = "top-right"
                }(e.MoveDirection || (e.MoveDirection = {}))
        },
        69040: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.OutModeDirection = void 0,
                function(t) {
                    t.bottom = "bottom", t.left = "left", t.right = "right", t.top = "top"
                }(e.OutModeDirection || (e.OutModeDirection = {}))
        },
        71235: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.RotateDirection = void 0,
                function(t) {
                    t.clockwise = "clockwise", t.counterClockwise = "counter-clockwise", t.random = "random"
                }(e.RotateDirection || (e.RotateDirection = {}))
        },
        59368: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TiltDirection = void 0,
                function(t) {
                    t.clockwise = "clockwise", t.counterClockwise = "counter-clockwise", t.random = "random"
                }(e.TiltDirection || (e.TiltDirection = {}))
        },
        45554: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(21583), e), n(i(71235), e), n(i(69040), e), n(i(59368), e)
        },
        13645: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.InteractivityDetect = void 0,
                function(t) {
                    t.canvas = "canvas", t.parent = "parent", t.window = "window"
                }(e.InteractivityDetect || (e.InteractivityDetect = {}))
        },
        72672: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ClickMode = void 0,
                function(t) {
                    t.attract = "attract", t.bubble = "bubble", t.push = "push", t.remove = "remove", t.repulse = "repulse", t.pause = "pause", t.trail = "trail"
                }(e.ClickMode || (e.ClickMode = {}))
        },
        68945: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CollisionMode = void 0,
                function(t) {
                    t.absorb = "absorb", t.bounce = "bounce", t.destroy = "destroy"
                }(e.CollisionMode || (e.CollisionMode = {}))
        },
        74970: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.DestroyMode = void 0,
                function(t) {
                    t.none = "none", t.split = "split"
                }(e.DestroyMode || (e.DestroyMode = {}))
        },
        81346: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.DivMode = void 0,
                function(t) {
                    t.bounce = "bounce", t.bubble = "bubble", t.repulse = "repulse"
                }(e.DivMode || (e.DivMode = {}))
        },
        92977: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.HoverMode = void 0,
                function(t) {
                    t.attract = "attract", t.bounce = "bounce", t.bubble = "bubble", t.connect = "connect", t.grab = "grab", t.light = "light", t.repulse = "repulse", t.slow = "slow", t.trail = "trail"
                }(e.HoverMode || (e.HoverMode = {}))
        },
        16833: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.OutMode = void 0,
                function(t) {
                    t.bounce = "bounce", t.bounceHorizontal = "bounce-horizontal", t.bounceVertical = "bounce-vertical", t.none = "none", t.out = "out", t.destroy = "destroy", t.split = "split"
                }(e.OutMode || (e.OutMode = {}))
        },
        15347: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ResponsiveMode = void 0,
                function(t) {
                    t.screen = "screen", t.canvas = "canvas"
                }(e.ResponsiveMode || (e.ResponsiveMode = {}))
        },
        28404: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.RollMode = void 0,
                function(t) {
                    t.both = "both", t.horizontal = "horizontal", t.vertical = "vertical"
                }(e.RollMode || (e.RollMode = {}))
        },
        62639: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SizeMode = void 0,
                function(t) {
                    t.precise = "precise", t.percent = "percent"
                }(e.SizeMode || (e.SizeMode = {}))
        },
        18882: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ThemeMode = void 0,
                function(t) {
                    t.any = "any", t.dark = "dark", t.light = "light"
                }(e.ThemeMode || (e.ThemeMode = {}))
        },
        90551: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(72672), e), n(i(74970), e), n(i(81346), e), n(i(92977), e), n(i(68945), e), n(i(16833), e), n(i(28404), e), n(i(62639), e), n(i(18882), e), n(i(15347), e)
        },
        8782: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.AlterType = void 0,
                function(t) {
                    t.darken = "darken", t.enlighten = "enlighten"
                }(e.AlterType || (e.AlterType = {}))
        },
        1095: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.DestroyType = void 0,
                function(t) {
                    t.none = "none", t.max = "max", t.min = "min"
                }(e.DestroyType || (e.DestroyType = {}))
        },
        97068: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.DivType = void 0,
                function(t) {
                    t.circle = "circle", t.rectangle = "rectangle"
                }(e.DivType || (e.DivType = {}))
        },
        3947: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.EasingType = void 0,
                function(t) {
                    t.easeOutBack = "ease-out-back", t.easeOutCirc = "ease-out-circ", t.easeOutCubic = "ease-out-cubic", t.easeOutQuad = "ease-out-quad", t.easeOutQuart = "ease-out-quart", t.easeOutQuint = "ease-out-quint", t.easeOutExpo = "ease-out-expo", t.easeOutSine = "ease-out-sine"
                }(e.EasingType || (e.EasingType = {}))
        },
        10864: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.GradientType = void 0,
                function(t) {
                    t.linear = "linear", t.radial = "radial", t.random = "random"
                }(e.GradientType || (e.GradientType = {}))
        },
        14339: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.InteractorType = void 0,
                function(t) {
                    t[t.External = 0] = "External", t[t.Particles = 1] = "Particles"
                }(e.InteractorType || (e.InteractorType = {}))
        },
        32600: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.OrbitType = void 0,
                function(t) {
                    t.front = "front", t.back = "back"
                }(e.OrbitType || (e.OrbitType = {}))
        },
        6252: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ShapeType = void 0,
                function(t) {
                    t.char = "char", t.character = "character", t.circle = "circle", t.edge = "edge", t.image = "image", t.images = "images", t.line = "line", t.polygon = "polygon", t.square = "square", t.star = "star", t.triangle = "triangle"
                }(e.ShapeType || (e.ShapeType = {}))
        },
        15091: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.StartValueType = void 0,
                function(t) {
                    t.max = "max", t.min = "min", t.random = "random"
                }(e.StartValueType || (e.StartValueType = {}))
        },
        88810: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(8782), e), n(i(1095), e), n(i(10864), e), n(i(14339), e), n(i(6252), e), n(i(15091), e), n(i(97068), e), n(i(3947), e), n(i(32600), e)
        },
        26331: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(45554), e), n(i(90551), e), n(i(62838), e), n(i(88810), e), n(i(13645), e)
        },
        45016: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Attractor = void 0;
            const o = i(26331),
                n = i(97373),
                s = i(24260),
                a = i(95638);
            class r extends s.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.mouse,
                        s = e.interactivity.events;
                    if ((!i.position || !s.onHover.enable) && (!i.clickPosition || !s.onClick.enable)) return !1;
                    const a = s.onHover.mode,
                        r = s.onClick.mode;
                    return (0, n.isInArray)(o.HoverMode.attract, a) || (0, n.isInArray)(o.ClickMode.attract, r)
                }
                reset() {}
                interact() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === n.Constants.mouseMoveEvent,
                        s = e.interactivity.events,
                        a = s.onHover.enable,
                        r = s.onHover.mode,
                        c = s.onClick.enable,
                        l = s.onClick.mode;
                    i && a && (0, n.isInArray)(o.HoverMode.attract, r) ? this.hoverAttract() : c && (0, n.isInArray)(o.ClickMode.attract, l) && this.clickAttract()
                }
                hoverAttract() {
                    const t = this.container,
                        e = t.interactivity.mouse.position;
                    if (!e) return;
                    const i = t.retina.attractModeDistance;
                    this.processAttract(e, i, new n.Circle(e.x, e.y, i))
                }
                processAttract(t, e, i) {
                    const o = this.container,
                        s = o.actualOptions.interactivity.modes.attract,
                        r = o.particles.quadTree.query(i);
                    for (const c of r) {
                        const {
                            dx: i,
                            dy: o,
                            distance: r
                        } = (0, n.getDistances)(c.position, t), l = s.speed * s.factor, d = (0, n.clamp)((0, n.calcEasing)(1 - r / e, s.easing) * l, 0, s.maxSpeed), u = a.Vector.create(0 === r ? l : i / r * d, 0 === r ? l : o / r * d);
                        c.position.subFrom(u)
                    }
                }
                clickAttract() {
                    const t = this.container;
                    if (t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count === t.particles.count && (t.attract.finish = !0)), t.attract.clicking) {
                        const e = t.interactivity.mouse.clickPosition;
                        if (!e) return;
                        const i = t.retina.attractModeDistance;
                        this.processAttract(e, i, new n.Circle(e.x, e.y, i))
                    } else !1 === t.attract.clicking && (t.attract.particles = [])
                }
            }
            e.Attractor = r
        },
        52770: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalAttractInteraction = void 0;
            const o = i(45016);
            e.loadExternalAttractInteraction = async function(t) {
                await t.addInteractor("externalAttract", (t => new o.Attractor(t)))
            }
        },
        83326: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Bouncer = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(95638),
                a = i(24260);
            class r extends a.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.mouse,
                        s = e.interactivity.events,
                        a = s.onDiv;
                    return i.position && s.onHover.enable && (0, o.isInArray)(n.HoverMode.bounce, s.onHover.mode) || (0, o.isDivModeEnabled)(n.DivMode.bounce, a)
                }
                interact() {
                    const t = this.container,
                        e = t.actualOptions.interactivity.events,
                        i = t.interactivity.status === o.Constants.mouseMoveEvent,
                        s = e.onHover.enable,
                        a = e.onHover.mode,
                        r = e.onDiv;
                    i && s && (0, o.isInArray)(n.HoverMode.bounce, a) ? this.processMouseBounce() : (0, o.divModeExecute)(n.DivMode.bounce, r, ((t, e) => this.singleSelectorBounce(t, e)))
                }
                reset() {}
                processMouseBounce() {
                    const t = this.container,
                        e = 10 * t.retina.pixelRatio,
                        i = t.interactivity.mouse.position,
                        n = t.retina.bounceModeDistance;
                    i && this.processBounce(i, n, new o.Circle(i.x, i.y, n + e))
                }
                singleSelectorBounce(t, e) {
                    const i = this.container,
                        s = document.querySelectorAll(t);
                    s.length && s.forEach((t => {
                        const s = t,
                            a = i.retina.pixelRatio,
                            r = {
                                x: (s.offsetLeft + s.offsetWidth / 2) * a,
                                y: (s.offsetTop + s.offsetHeight / 2) * a
                            },
                            c = s.offsetWidth / 2 * a,
                            l = 10 * a,
                            d = e.type === n.DivType.circle ? new o.Circle(r.x, r.y, c + l) : new o.Rectangle(s.offsetLeft * a - l, s.offsetTop * a - l, s.offsetWidth * a + 2 * l, s.offsetHeight * a + 2 * l);
                        this.processBounce(r, c, d)
                    }))
                }
                processBounce(t, e, i) {
                    const n = this.container.particles.quadTree.query(i);
                    for (const a of n) i instanceof o.Circle ? (0, o.circleBounce)((0, o.circleBounceDataFromParticle)(a), {
                        position: t,
                        radius: e,
                        mass: e ** 2 * Math.PI / 2,
                        velocity: s.Vector.origin,
                        factor: s.Vector.origin
                    }) : i instanceof o.Rectangle && (0, o.rectBounce)(a, (0, o.calculateBounds)(t, e))
                }
            }
            e.Bouncer = r
        },
        41966: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalBounceInteraction = void 0;
            const o = i(83326);
            e.loadExternalBounceInteraction = async function(t) {
                await t.addInteractor("externalBounce", (t => new o.Bouncer(t)))
            }
        },
        49007: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Bubbler = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(24260),
                a = i(43169);

            function r(t, e, i, n) {
                if (e >= i) {
                    const s = t + (e - i) * n;
                    return (0, o.clamp)(s, t, e)
                }
                if (e < i) {
                    const s = t - (i - e) * n;
                    return (0, o.clamp)(s, e, t)
                }
            }
            class c extends s.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.mouse,
                        s = e.interactivity.events,
                        a = s.onDiv,
                        r = (0, o.isDivModeEnabled)(n.DivMode.bubble, a);
                    if (!(r || s.onHover.enable && i.position || s.onClick.enable && i.clickPosition)) return !1;
                    const c = s.onHover.mode,
                        l = s.onClick.mode;
                    return (0, o.isInArray)(n.HoverMode.bubble, c) || (0, o.isInArray)(n.ClickMode.bubble, l) || r
                }
                reset(t, e) {
                    t.bubble.inRange && !e || (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
                }
                interact() {
                    const t = this.container.actualOptions.interactivity.events,
                        e = t.onHover,
                        i = t.onClick,
                        s = e.enable,
                        a = e.mode,
                        r = i.enable,
                        c = i.mode,
                        l = t.onDiv;
                    s && (0, o.isInArray)(n.HoverMode.bubble, a) ? this.hoverBubble() : r && (0, o.isInArray)(n.ClickMode.bubble, c) ? this.clickBubble() : (0, o.divModeExecute)(n.DivMode.bubble, l, ((t, e) => this.singleSelectorHover(t, e)))
                }
                singleSelectorHover(t, e) {
                    const i = this.container,
                        s = document.querySelectorAll(t);
                    s.length && s.forEach((t => {
                        const s = t,
                            a = i.retina.pixelRatio,
                            r = {
                                x: (s.offsetLeft + s.offsetWidth / 2) * a,
                                y: (s.offsetTop + s.offsetHeight / 2) * a
                            },
                            c = s.offsetWidth / 2 * a,
                            l = e.type === n.DivType.circle ? new o.Circle(r.x, r.y, c) : new o.Rectangle(s.offsetLeft * a, s.offsetTop * a, s.offsetWidth * a, s.offsetHeight * a),
                            d = i.particles.quadTree.query(l);
                        for (const e of d) {
                            if (!l.contains(e.getPosition())) continue;
                            e.bubble.inRange = !0;
                            const t = i.actualOptions.interactivity.modes.bubble.divs,
                                n = (0, o.divMode)(t, s);
                            e.bubble.div && e.bubble.div === s || (this.reset(e, !0), e.bubble.div = s), this.hoverBubbleSize(e, 1, n), this.hoverBubbleOpacity(e, 1, n), this.hoverBubbleColor(e, 1, n)
                        }
                    }))
                }
                process(t, e, i, o) {
                    const n = this.container,
                        s = o.bubbleObj.optValue;
                    if (void 0 === s) return;
                    const r = n.actualOptions.interactivity.modes.bubble.duration,
                        c = n.retina.bubbleModeDistance,
                        l = o.particlesObj.optValue,
                        d = o.bubbleObj.value,
                        u = o.particlesObj.value || 0,
                        h = o.type;
                    if (s !== l)
                        if (n.bubble.durationEnd) d && (h === a.ProcessBubbleType.size && delete t.bubble.radius, h === a.ProcessBubbleType.opacity && delete t.bubble.opacity);
                        else if (e <= c) {
                        if ((null !== d && void 0 !== d ? d : u) !== s) {
                            const e = u - i * (u - s) / r;
                            h === a.ProcessBubbleType.size && (t.bubble.radius = e), h === a.ProcessBubbleType.opacity && (t.bubble.opacity = e)
                        }
                    } else h === a.ProcessBubbleType.size && delete t.bubble.radius, h === a.ProcessBubbleType.opacity && delete t.bubble.opacity
                }
                clickBubble() {
                    var t, e;
                    const i = this.container,
                        n = i.actualOptions,
                        s = i.interactivity.mouse.clickPosition;
                    if (!s) return;
                    const r = i.retina.bubbleModeDistance,
                        c = i.particles.quadTree.queryCircle(s, r);
                    for (const l of c) {
                        if (!i.bubble.clicking) continue;
                        l.bubble.inRange = !i.bubble.durationEnd;
                        const r = l.getPosition(),
                            c = (0, o.getDistance)(r, s),
                            d = ((new Date).getTime() - (i.interactivity.mouse.clickTime || 0)) / 1e3;
                        d > n.interactivity.modes.bubble.duration && (i.bubble.durationEnd = !0), d > 2 * n.interactivity.modes.bubble.duration && (i.bubble.clicking = !1, i.bubble.durationEnd = !1);
                        const u = {
                            bubbleObj: {
                                optValue: i.retina.bubbleModeSize,
                                value: l.bubble.radius
                            },
                            particlesObj: {
                                optValue: (0, o.getRangeMax)(l.options.size.value) * i.retina.pixelRatio,
                                value: l.size.value
                            },
                            type: a.ProcessBubbleType.size
                        };
                        this.process(l, c, d, u);
                        const h = {
                            bubbleObj: {
                                optValue: n.interactivity.modes.bubble.opacity,
                                value: l.bubble.opacity
                            },
                            particlesObj: {
                                optValue: (0, o.getRangeMax)(l.options.opacity.value),
                                value: null !== (e = null === (t = l.opacity) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : 1
                            },
                            type: a.ProcessBubbleType.opacity
                        };
                        this.process(l, c, d, h), i.bubble.durationEnd ? delete l.bubble.color : c <= i.retina.bubbleModeDistance ? this.hoverBubbleColor(l, c) : delete l.bubble.color
                    }
                }
                hoverBubble() {
                    const t = this.container,
                        e = t.interactivity.mouse.position;
                    if (void 0 === e) return;
                    const i = t.retina.bubbleModeDistance,
                        n = t.particles.quadTree.queryCircle(e, i);
                    for (const s of n) {
                        s.bubble.inRange = !0;
                        const n = s.getPosition(),
                            a = (0, o.getDistance)(n, e),
                            r = 1 - a / i;
                        a <= i ? r >= 0 && t.interactivity.status === o.Constants.mouseMoveEvent && (this.hoverBubbleSize(s, r), this.hoverBubbleOpacity(s, r), this.hoverBubbleColor(s, r)) : this.reset(s), t.interactivity.status === o.Constants.mouseLeaveEvent && this.reset(s)
                    }
                }
                hoverBubbleSize(t, e, i) {
                    const n = this.container,
                        s = (null === i || void 0 === i ? void 0 : i.size) ? i.size * n.retina.pixelRatio : n.retina.bubbleModeSize;
                    if (void 0 === s) return;
                    const a = (0, o.getRangeMax)(t.options.size.value) * n.retina.pixelRatio,
                        c = r(t.size.value, s, a, e);
                    void 0 !== c && (t.bubble.radius = c)
                }
                hoverBubbleOpacity(t, e, i) {
                    var n, s, a;
                    const c = this.container.actualOptions,
                        l = null !== (n = null === i || void 0 === i ? void 0 : i.opacity) && void 0 !== n ? n : c.interactivity.modes.bubble.opacity;
                    if (!l) return;
                    const d = t.options.opacity.value,
                        u = r(null !== (a = null === (s = t.opacity) || void 0 === s ? void 0 : s.value) && void 0 !== a ? a : 1, l, (0, o.getRangeMax)(d), e);
                    void 0 !== u && (t.bubble.opacity = u)
                }
                hoverBubbleColor(t, e, i) {
                    const n = this.container.actualOptions,
                        s = null !== i && void 0 !== i ? i : n.interactivity.modes.bubble;
                    if (!t.bubble.finalColor) {
                        const e = s.color;
                        if (!e) return;
                        const i = e instanceof Array ? (0, o.itemFromArray)(e) : e;
                        t.bubble.finalColor = (0, o.colorToHsl)(i)
                    }
                    if (t.bubble.finalColor)
                        if (s.mix) {
                            t.bubble.color = void 0;
                            const i = t.getFillColor();
                            t.bubble.color = i ? (0, o.rgbToHsl)((0, o.colorMix)(i, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor
                        } else t.bubble.color = t.bubble.finalColor
                }
            }
            e.Bubbler = c
        },
        43169: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ProcessBubbleType = void 0,
                function(t) {
                    t.color = "color", t.opacity = "opacity", t.size = "size"
                }(e.ProcessBubbleType || (e.ProcessBubbleType = {}))
        },
        95313: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalBubbleInteraction = void 0;
            const o = i(49007);
            e.loadExternalBubbleInteraction = async function(t) {
                await t.addInteractor("externalBubble", (t => new o.Bubbler(t)))
            }
        },
        92730: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Connector = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(24260);
            class a extends s.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.interactivity.mouse,
                        i = t.actualOptions.interactivity.events;
                    return !(!i.onHover.enable || !e.position) && (0, o.isInArray)(n.HoverMode.connect, i.onHover.mode)
                }
                reset() {}
                interact() {
                    const t = this.container;
                    if (t.actualOptions.interactivity.events.onHover.enable && "mousemove" === t.interactivity.status) {
                        const e = t.interactivity.mouse.position;
                        if (!e) return;
                        const i = Math.abs(t.retina.connectModeRadius),
                            o = t.particles.quadTree.queryCircle(e, i);
                        let n = 0;
                        for (const s of o) {
                            const e = s.getPosition();
                            for (const i of o.slice(n + 1)) {
                                const o = i.getPosition(),
                                    n = Math.abs(t.retina.connectModeDistance),
                                    a = Math.abs(e.x - o.x),
                                    r = Math.abs(e.y - o.y);
                                a < n && r < n && t.canvas.drawConnectLine(s, i)
                            }++n
                        }
                    }
                }
            }
            e.Connector = a
        },
        29733: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalConnectInteraction = void 0;
            const o = i(92730);
            e.loadExternalConnectInteraction = async function(t) {
                await t.addInteractor("externalConnect", (t => new o.Connector(t)))
            }
        },
        80639: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Grabber = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(24260);
            class a extends s.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.interactivity.mouse,
                        i = t.actualOptions.interactivity.events;
                    return i.onHover.enable && !!e.position && (0, o.isInArray)(n.HoverMode.grab, i.onHover.mode)
                }
                reset() {}
                interact() {
                    var t;
                    const e = this.container,
                        i = e.actualOptions,
                        n = i.interactivity;
                    if (n.events.onHover.enable && e.interactivity.status === o.Constants.mouseMoveEvent) {
                        const s = e.interactivity.mouse.position;
                        if (!s) return;
                        const a = e.retina.grabModeDistance,
                            r = e.particles.quadTree.queryCircle(s, a);
                        for (const c of r) {
                            const r = c.getPosition(),
                                l = (0, o.getDistance)(r, s);
                            if (l <= a) {
                                const r = n.modes.grab.links,
                                    d = r.opacity,
                                    u = d - l * d / a;
                                if (u <= 0) continue;
                                const h = null !== (t = r.color) && void 0 !== t ? t : c.options.links.color;
                                if (!e.particles.grabLineColor) {
                                    const t = i.interactivity.modes.grab.links;
                                    e.particles.grabLineColor = (0, o.getLinkRandomColor)(h, t.blink, t.consent)
                                }
                                const p = (0, o.getLinkColor)(c, void 0, e.particles.grabLineColor);
                                if (!p) return;
                                e.canvas.drawGrabLine(c, p, u, s)
                            }
                        }
                    }
                }
            }
            e.Grabber = a
        },
        33066: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalGrabInteraction = void 0;
            const o = i(80639);
            e.loadExternalGrabInteraction = async function(t) {
                await t.addInteractor("externalGrab", (t => new o.Grabber(t)))
            }
        },
        87818: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Repulser = void 0;
            const o = i(26331),
                n = i(97373),
                s = i(95638),
                a = i(24260);
            class r extends a.ExternalInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.mouse,
                        s = e.interactivity.events,
                        a = s.onDiv,
                        r = (0, n.isDivModeEnabled)(o.DivMode.repulse, a);
                    if (!(r || s.onHover.enable && i.position || s.onClick.enable && i.clickPosition)) return !1;
                    const c = s.onHover.mode,
                        l = s.onClick.mode;
                    return (0, n.isInArray)(o.HoverMode.repulse, c) || (0, n.isInArray)(o.ClickMode.repulse, l) || r
                }
                reset() {}
                interact() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === n.Constants.mouseMoveEvent,
                        s = e.interactivity.events,
                        a = s.onHover.enable,
                        r = s.onHover.mode,
                        c = s.onClick.enable,
                        l = s.onClick.mode,
                        d = s.onDiv;
                    i && a && (0, n.isInArray)(o.HoverMode.repulse, r) ? this.hoverRepulse() : c && (0, n.isInArray)(o.ClickMode.repulse, l) ? this.clickRepulse() : (0, n.divModeExecute)(o.DivMode.repulse, d, ((t, e) => this.singleSelectorRepulse(t, e)))
                }
                singleSelectorRepulse(t, e) {
                    const i = this.container,
                        s = document.querySelectorAll(t);
                    s.length && s.forEach((t => {
                        const s = t,
                            a = i.retina.pixelRatio,
                            r = {
                                x: (s.offsetLeft + s.offsetWidth / 2) * a,
                                y: (s.offsetTop + s.offsetHeight / 2) * a
                            },
                            c = s.offsetWidth / 2 * a,
                            l = e.type === o.DivType.circle ? new n.Circle(r.x, r.y, c) : new n.Rectangle(s.offsetLeft * a, s.offsetTop * a, s.offsetWidth * a, s.offsetHeight * a),
                            d = i.actualOptions.interactivity.modes.repulse.divs,
                            u = (0, n.divMode)(d, s);
                        this.processRepulse(r, c, l, u)
                    }))
                }
                hoverRepulse() {
                    const t = this.container,
                        e = t.interactivity.mouse.position;
                    if (!e) return;
                    const i = t.retina.repulseModeDistance;
                    this.processRepulse(e, i, new n.Circle(e.x, e.y, i))
                }
                processRepulse(t, e, i, o) {
                    var a;
                    const r = this.container,
                        c = r.particles.quadTree.query(i),
                        l = r.actualOptions.interactivity.modes.repulse;
                    for (const d of c) {
                        const {
                            dx: i,
                            dy: r,
                            distance: c
                        } = (0, n.getDistances)(d.position, t), u = (null !== (a = null === o || void 0 === o ? void 0 : o.speed) && void 0 !== a ? a : l.speed) * l.factor, h = (0, n.clamp)((0, n.calcEasing)(1 - c / e, l.easing) * u, 0, l.maxSpeed), p = s.Vector.create(0 === c ? u : i / c * h, 0 === c ? u : r / c * h);
                        d.position.addTo(p)
                    }
                }
                clickRepulse() {
                    const t = this.container;
                    if (t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count === t.particles.count && (t.repulse.finish = !0)), t.repulse.clicking) {
                        const e = t.retina.repulseModeDistance,
                            i = Math.pow(e / 6, 3),
                            o = t.interactivity.mouse.clickPosition;
                        if (void 0 === o) return;
                        const a = new n.Circle(o.x, o.y, i),
                            r = t.particles.quadTree.query(a);
                        for (const c of r) {
                            const {
                                dx: e,
                                dy: a,
                                distance: r
                            } = (0, n.getDistances)(o, c.position), l = r ** 2, d = t.actualOptions.interactivity.modes.repulse.speed, u = -i * d / l;
                            if (l <= i) {
                                t.repulse.particles.push(c);
                                const i = s.Vector.create(e, a);
                                i.length = u, c.velocity.setTo(i)
                            }
                        }
                    } else if (!1 === t.repulse.clicking) {
                        for (const e of t.repulse.particles) e.velocity.setTo(e.initialVelocity);
                        t.repulse.particles = []
                    }
                }
            }
            e.Repulser = r
        },
        4842: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalRepulseInteraction = void 0;
            const o = i(87818);
            e.loadExternalRepulseInteraction = async function(t) {
                await t.addInteractor("externalRepulse", (t => new o.Repulser(t)))
            }
        },
        60557: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TrailMaker = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(24260);
            class a extends s.ExternalInteractorBase {
                constructor(t) {
                    super(t), this.delay = 0
                }
                interact(t) {
                    var e, i, o, n;
                    if (!this.container.retina.reduceFactor) return;
                    const s = this.container,
                        a = s.actualOptions.interactivity.modes.trail,
                        r = 1e3 * a.delay / this.container.retina.reduceFactor;
                    if (this.delay < r && (this.delay += t.value), this.delay < r) return;
                    let c = !0;
                    a.pauseOnStop && (s.interactivity.mouse.position === this.lastPosition || (null === (e = s.interactivity.mouse.position) || void 0 === e ? void 0 : e.x) === (null === (i = this.lastPosition) || void 0 === i ? void 0 : i.x) && (null === (o = s.interactivity.mouse.position) || void 0 === o ? void 0 : o.y) === (null === (n = this.lastPosition) || void 0 === n ? void 0 : n.y)) && (c = !1), s.interactivity.mouse.position ? this.lastPosition = {
                        x: s.interactivity.mouse.position.x,
                        y: s.interactivity.mouse.position.y
                    } : delete this.lastPosition, c && s.particles.push(a.quantity, s.interactivity.mouse, a.particles), this.delay -= r
                }
                isEnabled() {
                    const t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.mouse,
                        s = e.interactivity.events;
                    return i.clicking && i.inside && !!i.position && (0, o.isInArray)(n.ClickMode.trail, s.onClick.mode) || i.inside && !!i.position && (0, o.isInArray)(n.HoverMode.trail, s.onHover.mode)
                }
                reset() {}
            }
            e.TrailMaker = a
        },
        86910: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadExternalTrailInteraction = void 0;
            const o = i(60557);
            e.loadExternalTrailInteraction = async function(t) {
                await t.addInteractor("externalTrail", (t => new o.TrailMaker(t)))
            }
        },
        58322: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Attractor = void 0;
            const o = i(97373),
                n = i(37472);
            class s extends n.ParticlesInteractorBase {
                constructor(t) {
                    super(t)
                }
                interact(t) {
                    var e;
                    const i = this.container,
                        n = null !== (e = t.retina.attractDistance) && void 0 !== e ? e : i.retina.attractDistance,
                        s = t.getPosition(),
                        a = i.particles.quadTree.queryCircle(s, n);
                    for (const r of a) {
                        if (t === r || !r.options.move.attract.enable || r.destroyed || r.spawning) continue;
                        const e = r.getPosition(),
                            {
                                dx: i,
                                dy: n
                            } = (0, o.getDistances)(s, e),
                            a = t.options.move.attract.rotate,
                            c = i / (1e3 * a.x),
                            l = n / (1e3 * a.y),
                            d = r.size.value / t.size.value,
                            u = 1 / d;
                        t.velocity.x -= c * d, t.velocity.y -= l * d, r.velocity.x += c * u, r.velocity.y += l * u
                    }
                }
                isEnabled(t) {
                    return t.options.move.attract.enable
                }
                reset() {}
            }
            e.Attractor = s
        },
        40643: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadParticlesAttractInteraction = void 0;
            const o = i(58322);
            e.loadParticlesAttractInteraction = async function(t) {
                await t.addInteractor("particlesAttract", (t => new o.Attractor(t)))
            }
        },
        44041: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Collider = void 0;
            const o = i(26331),
                n = i(97373),
                s = i(37472);

            function a(t, e) {
                (0, n.circleBounce)((0, n.circleBounceDataFromParticle)(t), (0, n.circleBounceDataFromParticle)(e))
            }
            class r extends s.ParticlesInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled(t) {
                    return t.options.collisions.enable
                }
                reset() {}
                interact(t) {
                    const e = this.container,
                        i = t.getPosition(),
                        o = t.getRadius(),
                        s = e.particles.quadTree.queryCircle(i, 2 * o);
                    for (const a of s) {
                        if (t === a || !a.options.collisions.enable || t.options.collisions.mode !== a.options.collisions.mode || a.destroyed || a.spawning) continue;
                        const e = a.getPosition();
                        if (Math.round(i.z) !== Math.round(e.z)) continue;
                        (0, n.getDistance)(i, e) <= o + a.getRadius() && this.resolveCollision(t, a)
                    }
                }
                resolveCollision(t, e) {
                    switch (t.options.collisions.mode) {
                        case o.CollisionMode.absorb:
                            this.absorb(t, e);
                            break;
                        case o.CollisionMode.bounce:
                            a(t, e);
                            break;
                        case o.CollisionMode.destroy:
                            ! function(t, e) {
                                t.unbreakable || e.unbreakable || a(t, e), void 0 === t.getRadius() && void 0 !== e.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === e.getRadius() ? e.destroy() : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? e.destroy() : t.destroy())
                            }(t, e)
                    }
                }
                absorb(t, e) {
                    const i = this.container,
                        o = i.fpsLimit / 1e3;
                    if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
                    else if (void 0 !== t.getRadius() && void 0 === e.getRadius()) e.destroy();
                    else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
                        if (t.getRadius() >= e.getRadius()) {
                            const s = (0, n.clamp)(t.getRadius() / e.getRadius(), 0, e.getRadius()) * o;
                            t.size.value += s, e.size.value -= s, e.getRadius() <= i.retina.pixelRatio && (e.size.value = 0, e.destroy())
                        } else {
                            const s = (0, n.clamp)(e.getRadius() / t.getRadius(), 0, t.getRadius()) * o;
                            t.size.value -= s, e.size.value += s, t.getRadius() <= i.retina.pixelRatio && (t.size.value = 0, t.destroy())
                        }
                }
            }
            e.Collider = r
        },
        18989: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadParticlesCollisionsInteraction = void 0;
            const o = i(44041);
            e.loadParticlesCollisionsInteraction = async function(t) {
                await t.addInteractor("particlesCollisions", (t => new o.Collider(t)))
            }
        },
        76385: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LinkInstance = void 0;
            const o = i(97373);
            e.LinkInstance = class {
                constructor(t) {
                    this.container = t
                }
                particleCreated(t) {
                    t.links = []
                }
                particleDestroyed(t) {
                    t.links = []
                }
                drawParticle(t, e) {
                    const i = e,
                        o = this.container,
                        n = o.particles,
                        s = e.options;
                    if (i.links.length > 0) {
                        t.save();
                        const e = i.links.filter((t => o.particles.getLinkFrequency(i, t.destination) <= s.links.frequency));
                        for (const t of e) {
                            const a = t.destination;
                            if (s.links.triangles.enable) {
                                const r = e.map((t => t.destination)),
                                    c = a.links.filter((t => o.particles.getLinkFrequency(a, t.destination) <= a.options.links.frequency && r.indexOf(t.destination) >= 0));
                                if (c.length)
                                    for (const e of c) {
                                        const o = e.destination;
                                        n.getTriangleFrequency(i, a, o) > s.links.triangles.frequency || this.drawLinkTriangle(i, t, e)
                                    }
                            }
                            t.opacity > 0 && o.retina.linksWidth > 0 && this.drawLinkLine(i, t)
                        }
                        t.restore()
                    }
                }
                drawLinkTriangle(t, e, i) {
                    var n;
                    const s = this.container,
                        a = s.actualOptions,
                        r = e.destination,
                        c = i.destination,
                        l = t.options.links.triangles,
                        d = null !== (n = l.opacity) && void 0 !== n ? n : (e.opacity + i.opacity) / 2;
                    if (d <= 0) return;
                    const u = t.getPosition(),
                        h = r.getPosition(),
                        p = c.getPosition();
                    s.canvas.draw((e => {
                        if ((0, o.getDistance)(u, h) > s.retina.linksDistance || (0, o.getDistance)(p, h) > s.retina.linksDistance || (0, o.getDistance)(p, u) > s.retina.linksDistance) return;
                        let i = (0, o.colorToRgb)(l.color);
                        if (!i) {
                            const e = t.options.links,
                                n = void 0 !== e.id ? s.particles.linksColors.get(e.id) : s.particles.linksColor;
                            i = (0, o.getLinkColor)(t, r, n)
                        }
                        i && (0, o.drawLinkTriangle)(e, u, h, p, a.backgroundMask.enable, a.backgroundMask.composite, i, d)
                    }))
                }
                drawLinkLine(t, e) {
                    const i = this.container,
                        n = i.actualOptions,
                        s = e.destination;
                    let a = e.opacity;
                    const r = t.getPosition(),
                        c = s.getPosition();
                    i.canvas.draw((e => {
                        var l, d;
                        let u;
                        const h = t.options.twinkle.lines;
                        if (h.enable) {
                            const t = h.frequency,
                                e = (0, o.colorToRgb)(h.color);
                            Math.random() < t && void 0 !== e && (u = e, a = h.opacity)
                        }
                        if (!u) {
                            const e = t.options.links,
                                n = void 0 !== e.id ? i.particles.linksColors.get(e.id) : i.particles.linksColor;
                            u = (0, o.getLinkColor)(t, s, n)
                        }
                        if (!u) return;
                        const p = null !== (l = t.retina.linksWidth) && void 0 !== l ? l : i.retina.linksWidth,
                            v = null !== (d = t.retina.linksDistance) && void 0 !== d ? d : i.retina.linksDistance;
                        (0, o.drawLinkLine)(e, p, r, c, v, i.canvas.size, t.options.links.warp, n.backgroundMask.enable, n.backgroundMask.composite, u, a, t.options.links.shadow)
                    }))
                }
            }
        },
        49597: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Linker = void 0;
            const o = i(97373),
                n = i(37472);

            function s(t, e, i, n, s) {
                let a = (0, o.getDistance)(t, e);
                if (!s || a <= i) return a;
                const r = {
                    x: e.x - n.width,
                    y: e.y
                };
                if (a = (0, o.getDistance)(t, r), a <= i) return a;
                const c = {
                    x: e.x - n.width,
                    y: e.y - n.height
                };
                if (a = (0, o.getDistance)(t, c), a <= i) return a;
                const l = {
                    x: e.x,
                    y: e.y - n.height
                };
                return a = (0, o.getDistance)(t, l), a
            }
            class a extends n.ParticlesInteractorBase {
                constructor(t) {
                    super(t)
                }
                isEnabled(t) {
                    return t.options.links.enable
                }
                reset() {}
                interact(t) {
                    var e;
                    t.links = [];
                    const i = t.getPosition(),
                        n = this.container,
                        a = n.canvas.size;
                    if (i.x < 0 || i.y < 0 || i.x > a.width || i.y > a.height) return;
                    const r = t.options.links,
                        c = r.opacity,
                        l = null !== (e = t.retina.linksDistance) && void 0 !== e ? e : n.retina.linksDistance,
                        d = r.warp,
                        u = d ? new o.CircleWarp(i.x, i.y, l, a) : new o.Circle(i.x, i.y, l),
                        h = n.particles.quadTree.query(u);
                    for (const o of h) {
                        const e = o.options.links;
                        if (t === o || !e.enable || r.id !== e.id || o.spawning || o.destroyed || -1 !== t.links.map((t => t.destination)).indexOf(o) || -1 !== o.links.map((t => t.destination)).indexOf(t)) continue;
                        const n = o.getPosition();
                        if (n.x < 0 || n.y < 0 || n.x > a.width || n.y > a.height) continue;
                        const u = s(i, n, l, a, d && e.warp);
                        if (u > l) return;
                        const h = (1 - u / l) * c;
                        this.setColor(t), t.links.push({
                            destination: o,
                            opacity: h
                        })
                    }
                }
                setColor(t) {
                    const e = this.container,
                        i = t.options.links;
                    let n = void 0 === i.id ? e.particles.linksColor : e.particles.linksColors.get(i.id);
                    if (!n) {
                        const t = i.color;
                        n = (0, o.getLinkRandomColor)(t, i.blink, i.consent), void 0 === i.id ? e.particles.linksColor = n : e.particles.linksColors.set(i.id, n)
                    }
                }
            }
            e.Linker = a
        },
        40884: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadParticlesLinksInteraction = e.loadInteraction = void 0;
            const o = i(49597),
                n = i(4152);
            async function s(t) {
                await t.addInteractor("particlesLinks", (t => new o.Linker(t)))
            }
            e.loadInteraction = s, e.loadParticlesLinksInteraction = async function(t) {
                await s(t), await (0, n.loadPlugin)(t)
            }
        },
        4152: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadPlugin = void 0;
            const o = i(76385);
            class n {
                constructor() {
                    this.id = "links"
                }
                getPlugin(t) {
                    return new o.LinkInstance(t)
                }
                needsPlugin() {
                    return !0
                }
                loadOptions() {}
            }
            e.loadPlugin = async function(t) {
                const e = new n;
                await t.addPlugin(e)
            }
        },
        20192: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AnimatableColor = void 0;
            const o = i(3151),
                n = i(9410);
            class s extends o.OptionsColor {
                constructor() {
                    super(), this.animation = new n.HslAnimation
                }
                static create(t, e) {
                    const i = new s;
                    return i.load(t), void 0 !== e && ("string" === typeof e || e instanceof Array ? i.load({
                        value: e
                    }) : i.load(e)), i
                }
                load(t) {
                    if (super.load(t), !t) return;
                    const e = t.animation;
                    void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation))
                }
            }
            e.AnimatableColor = s
        },
        32372: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GradientColorOpacityAnimation = e.GradientAngleAnimation = e.AnimatableGradientColor = e.GradientColorOpacity = e.GradientAngle = e.AnimatableGradient = void 0;
            const o = i(26331),
                n = i(20192),
                s = i(97373);
            e.AnimatableGradient = class {
                constructor() {
                    this.angle = new a, this.colors = [], this.type = o.GradientType.random
                }
                load(t) {
                    t && (this.angle.load(t.angle), void 0 !== t.colors && (this.colors = t.colors.map((t => {
                        const e = new c;
                        return e.load(t), e
                    }))), void 0 !== t.type && (this.type = t.type))
                }
            };
            class a {
                constructor() {
                    this.value = 0, this.animation = new l, this.direction = o.RotateDirection.clockwise
                }
                load(t) {
                    t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = t.value), void 0 !== t.direction && (this.direction = t.direction))
                }
            }
            e.GradientAngle = a;
            class r {
                constructor() {
                    this.value = 0, this.animation = new d
                }
                load(t) {
                    t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = (0, s.setRangeValue)(t.value)))
                }
            }
            e.GradientColorOpacity = r;
            class c {
                constructor() {
                    this.stop = 0, this.value = new n.AnimatableColor
                }
                load(t) {
                    t && (void 0 !== t.stop && (this.stop = t.stop), this.value = n.AnimatableColor.create(this.value, t.value), void 0 !== t.opacity && (this.opacity = new r, "number" === typeof t.opacity ? this.opacity.value = t.opacity : this.opacity.load(t.opacity)))
                }
            }
            e.AnimatableGradientColor = c;
            class l {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            e.GradientAngleAnimation = l;
            class d {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 0, this.sync = !1, this.startValue = o.StartValueType.random
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync), void 0 !== t.startValue && (this.startValue = t.startValue))
                }
            }
            e.GradientColorOpacityAnimation = d
        },
        99089: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AnimationOptions = void 0;
            e.AnimationOptions = class {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 1, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
        },
        87133: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Background = void 0;
            const o = i(3151);
            e.Background = class {
                constructor() {
                    this.color = new o.OptionsColor, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = o.OptionsColor.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        55649: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BackgroundMask = void 0;
            const o = i(64065);
            e.BackgroundMask = class {
                constructor() {
                    this.composite = "destination-out", this.cover = new o.BackgroundMaskCover, this.enable = !1
                }
                load(t) {
                    if (void 0 !== t) {
                        if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                            const e = t.cover,
                                i = "string" === typeof t.cover ? {
                                    color: t.cover
                                } : t.cover;
                            this.cover.load(void 0 !== e.color ? e : {
                                color: i
                            })
                        }
                        void 0 !== t.enable && (this.enable = t.enable)
                    }
                }
            }
        },
        64065: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BackgroundMaskCover = void 0;
            const o = i(3151);
            e.BackgroundMaskCover = class {
                constructor() {
                    this.color = new o.OptionsColor, this.opacity = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = o.OptionsColor.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        25251: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ColorAnimation = void 0;
            const o = i(97373);
            e.ColorAnimation = class {
                constructor() {
                    this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.sync = !0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = (0, o.setRangeValue)(t.offset)), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
        },
        68119: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.FullScreen = void 0;
            e.FullScreen = class {
                constructor() {
                    this.enable = !0, this.zIndex = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
                }
            }
        },
        9410: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HslAnimation = void 0;
            const o = i(25251);
            e.HslAnimation = class {
                constructor() {
                    this.h = new o.ColorAnimation, this.s = new o.ColorAnimation, this.l = new o.ColorAnimation
                }
                load(t) {
                    t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
                }
            }
        },
        88247: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ClickEvent = void 0;
            e.ClickEvent = class {
                constructor() {
                    this.enable = !1, this.mode = []
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
                }
            }
        },
        68029: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DivEvent = void 0;
            const o = i(26331);
            e.DivEvent = class {
                constructor() {
                    this.selectors = [], this.enable = !1, this.mode = [], this.type = o.DivType.circle
                }
                get elementId() {
                    return this.ids
                }
                set elementId(t) {
                    this.ids = t
                }
                get el() {
                    return this.elementId
                }
                set el(t) {
                    this.elementId = t
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
                }
                load(t) {
                    var e, i;
                    if (void 0 === t) return;
                    const o = null !== (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== i ? i : t.el;
                    void 0 !== o && (this.ids = o), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
                }
            }
        },
        20280: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Events = void 0;
            const o = i(88247),
                n = i(68029),
                s = i(80406);
            e.Events = class {
                constructor() {
                    this.onClick = new o.ClickEvent, this.onDiv = new n.DivEvent, this.onHover = new s.HoverEvent, this.resize = !0
                }
                get onclick() {
                    return this.onClick
                }
                set onclick(t) {
                    this.onClick = t
                }
                get ondiv() {
                    return this.onDiv
                }
                set ondiv(t) {
                    this.onDiv = t
                }
                get onhover() {
                    return this.onHover
                }
                set onhover(t) {
                    this.onHover = t
                }
                load(t) {
                    var e, i, o;
                    if (void 0 === t) return;
                    this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
                    const s = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
                    void 0 !== s && (s instanceof Array ? this.onDiv = s.map((t => {
                        const e = new n.DivEvent;
                        return e.load(t), e
                    })) : (this.onDiv = new n.DivEvent, this.onDiv.load(s))), this.onHover.load(null !== (o = t.onHover) && void 0 !== o ? o : t.onhover), void 0 !== t.resize && (this.resize = t.resize)
                }
            }
        },
        80406: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HoverEvent = void 0;
            const o = i(92409);
            e.HoverEvent = class {
                constructor() {
                    this.enable = !1, this.mode = [], this.parallax = new o.Parallax
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
                }
            }
        },
        92409: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Parallax = void 0;
            e.Parallax = class {
                constructor() {
                    this.enable = !1, this.force = 2, this.smooth = 10
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
                }
            }
        },
        31482: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Interactivity = void 0;
            const o = i(26331),
                n = i(20280),
                s = i(8174);
            e.Interactivity = class {
                constructor() {
                    this.detectsOn = o.InteractivityDetect.window, this.events = new n.Events, this.modes = new s.Modes
                }
                get detect_on() {
                    return this.detectsOn
                }
                set detect_on(t) {
                    this.detectsOn = t
                }
                load(t) {
                    var e, i, n;
                    if (void 0 === t) return;
                    const s = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
                    void 0 !== s && (this.detectsOn = s), this.events.load(t.events), this.modes.load(t.modes), !0 === (null === (n = null === (i = t.modes) || void 0 === i ? void 0 : i.slow) || void 0 === n ? void 0 : n.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf(o.HoverMode.slow) < 0 && this.events.onHover.mode.push(o.HoverMode.slow) : this.events.onHover.mode !== o.HoverMode.slow && (this.events.onHover.mode = [this.events.onHover.mode, o.HoverMode.slow]))
                }
            }
        },
        29256: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Attract = void 0;
            const o = i(26331);
            e.Attract = class {
                constructor() {
                    this.distance = 200, this.duration = .4, this.easing = o.EasingType.easeOutQuad, this.factor = 1, this.maxSpeed = 50, this.speed = 1
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed))
                }
            }
        },
        19953: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Bounce = void 0;
            e.Bounce = class {
                constructor() {
                    this.distance = 200
                }
                load(t) {
                    t && void 0 !== t.distance && (this.distance = t.distance)
                }
            }
        },
        93397: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Bubble = void 0;
            const o = i(81334),
                n = i(55779);
            class s extends n.BubbleBase {
                load(t) {
                    super.load(t), void 0 !== t && void 0 !== t.divs && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                        const e = new o.BubbleDiv;
                        return e.load(t), e
                    })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new o.BubbleDiv), this.divs.load(t.divs)))
                }
            }
            e.Bubble = s
        },
        55779: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BubbleBase = void 0;
            const o = i(3151);
            e.BubbleBase = class {
                constructor() {
                    this.distance = 200, this.duration = .4, this.mix = !1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.mix && (this.mix = t.mix), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color && (t.color instanceof Array ? this.color = t.color.map((t => o.OptionsColor.create(void 0, t))) : (this.color instanceof Array && (this.color = new o.OptionsColor), this.color = o.OptionsColor.create(this.color, t.color))), void 0 !== t.size && (this.size = t.size))
                }
            }
        },
        81334: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BubbleDiv = void 0;
            const o = i(55779);
            class n extends o.BubbleBase {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
                }
                load(t) {
                    super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            e.BubbleDiv = n
        },
        12426: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Connect = void 0;
            const o = i(99531);
            e.Connect = class {
                constructor() {
                    this.distance = 80, this.links = new o.ConnectLinks, this.radius = 60
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                load(t) {
                    var e, i;
                    void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
        },
        99531: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ConnectLinks = void 0;
            e.ConnectLinks = class {
                constructor() {
                    this.opacity = .5
                }
                load(t) {
                    void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity)
                }
            }
        },
        72095: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Grab = void 0;
            const o = i(28985);
            e.Grab = class {
                constructor() {
                    this.distance = 100, this.links = new o.GrabLinks
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                load(t) {
                    var e, i;
                    void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked))
                }
            }
        },
        28985: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GrabLinks = void 0;
            const o = i(3151);
            e.GrabLinks = class {
                constructor() {
                    this.blink = !1, this.consent = !1, this.opacity = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = o.OptionsColor.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        69867: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Light = void 0;
            const o = i(95302),
                n = i(33632);
            e.Light = class {
                constructor() {
                    this.area = new o.LightArea, this.shadow = new n.LightShadow
                }
                load(t) {
                    void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow))
                }
            }
        },
        95302: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LightArea = void 0;
            const o = i(83272);
            e.LightArea = class {
                constructor() {
                    this.gradient = new o.LightGradient, this.radius = 1e3
                }
                load(t) {
                    void 0 !== t && (this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
        },
        83272: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LightGradient = void 0;
            const o = i(3151);
            e.LightGradient = class {
                constructor() {
                    this.start = new o.OptionsColor, this.stop = new o.OptionsColor, this.start.value = "#ffffff", this.stop.value = "#000000"
                }
                load(t) {
                    void 0 !== t && (this.start = o.OptionsColor.create(this.start, t.start), this.stop = o.OptionsColor.create(this.stop, t.stop))
                }
            }
        },
        33632: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LightShadow = void 0;
            const o = i(3151);
            e.LightShadow = class {
                constructor() {
                    this.color = new o.OptionsColor, this.color.value = "#000000", this.length = 2e3
                }
                load(t) {
                    void 0 !== t && (this.color = o.OptionsColor.create(this.color, t.color), void 0 !== t.length && (this.length = t.length))
                }
            }
        },
        8174: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Modes = void 0;
            const o = i(93397),
                n = i(12426),
                s = i(72095),
                a = i(8197),
                r = i(85691),
                c = i(23355),
                l = i(12939),
                d = i(71802),
                u = i(29256),
                h = i(69867),
                p = i(19953);
            e.Modes = class {
                constructor() {
                    this.attract = new u.Attract, this.bounce = new p.Bounce, this.bubble = new o.Bubble, this.connect = new n.Connect, this.grab = new s.Grab, this.light = new h.Light, this.push = new r.Push, this.remove = new a.Remove, this.repulse = new c.Repulse, this.slow = new l.Slow, this.trail = new d.Trail
                }
                load(t) {
                    void 0 !== t && (this.attract.load(t.attract), this.bubble.load(t.bubble), this.connect.load(t.connect), this.grab.load(t.grab), this.light.load(t.light), this.push.load(t.push), this.remove.load(t.remove), this.repulse.load(t.repulse), this.slow.load(t.slow), this.trail.load(t.trail))
                }
            }
        },
        85691: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Push = void 0;
            e.Push = class {
                constructor() {
                    this.default = !0, this.groups = [], this.quantity = 4
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (void 0 === t) return;
                    void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map((t => t))), this.groups.length || (this.default = !0);
                    const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== i && (this.quantity = i)
                }
            }
        },
        8197: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Remove = void 0;
            e.Remove = class {
                constructor() {
                    this.quantity = 2
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (void 0 === t) return;
                    const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== i && (this.quantity = i)
                }
            }
        },
        23355: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Repulse = void 0;
            const o = i(15879),
                n = i(35267);
            class s extends n.RepulseBase {
                load(t) {
                    super.load(t), void 0 !== (null === t || void 0 === t ? void 0 : t.divs) && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                        const e = new o.RepulseDiv;
                        return e.load(t), e
                    })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new o.RepulseDiv), this.divs.load(t.divs)))
                }
            }
            e.Repulse = s
        },
        35267: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RepulseBase = void 0;
            const o = i(26331);
            e.RepulseBase = class {
                constructor() {
                    this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = o.EasingType.easeOutQuad
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
                }
            }
        },
        15879: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RepulseDiv = void 0;
            const o = i(35267);
            class n extends o.RepulseBase {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((() => `#${t}`)) : `#${t}`
                }
                load(t) {
                    super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            e.RepulseDiv = n
        },
        12939: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Slow = void 0;
            e.Slow = class {
                constructor() {
                    this.factor = 3, this.radius = 200
                }
                get active() {
                    return !1
                }
                set active(t) {}
                load(t) {
                    void 0 !== t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
        },
        71802: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Trail = void 0;
            const o = i(97373);
            e.Trail = class {
                constructor() {
                    this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = (0, o.deepExtend)({}, t.particles)), void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop))
                }
            }
        },
        38758: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ManualParticle = void 0;
            const o = i(97373);
            e.ManualParticle = class {
                load(t) {
                    var e, i;
                    t && (void 0 !== t.position && (this.position = {
                        x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                        y: null !== (i = t.position.y) && void 0 !== i ? i : 50
                    }), void 0 !== t.options && (this.options = (0, o.deepExtend)({}, t.options)))
                }
            }
        },
        66218: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Motion = void 0;
            const o = i(50420);
            e.Motion = class {
                constructor() {
                    this.disable = !1, this.reduce = new o.MotionReduce
                }
                load(t) {
                    t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce))
                }
            }
        },
        50420: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MotionReduce = void 0;
            e.MotionReduce = class {
                constructor() {
                    this.factor = 4, this.value = !0
                }
                load(t) {
                    t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value))
                }
            }
        },
        76989: function(t, e, i) {
            "use strict";
            var o, n, s = this && this.__classPrivateFieldGet || function(t, e, i, o) {
                if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Options = void 0;
            const a = i(31482),
                r = i(8029),
                c = i(55649),
                l = i(87133),
                d = i(97373),
                u = i(67851),
                h = i(26331),
                p = i(68119),
                v = i(66218),
                y = i(38758),
                f = i(97848);
            e.Options = class {
                constructor() {
                    o.add(this), this.autoPlay = !0, this.background = new l.Background, this.backgroundMask = new c.BackgroundMask, this.fullScreen = new p.FullScreen, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 60, this.interactivity = new a.Interactivity, this.manualParticles = [], this.motion = new v.Motion, this.particles = new r.ParticlesOptions, this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.themes = [], this.zLayers = 100
                }
                get fps_limit() {
                    return this.fpsLimit
                }
                set fps_limit(t) {
                    this.fpsLimit = t
                }
                get retina_detect() {
                    return this.detectRetina
                }
                set retina_detect(t) {
                    this.detectRetina = t
                }
                get backgroundMode() {
                    return this.fullScreen
                }
                set backgroundMode(t) {
                    this.fullScreen.load(t)
                }
                load(t) {
                    var e, i, a, r, c;
                    if (void 0 === t) return;
                    if (void 0 !== t.preset)
                        if (t.preset instanceof Array)
                            for (const o of t.preset) this.importPreset(o);
                        else this.importPreset(t.preset);
                    void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
                    const l = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
                    void 0 !== l && (this.detectRetina = l), void 0 !== t.duration && (this.duration = t.duration);
                    const p = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
                    void 0 !== p && (this.fpsLimit = p), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
                    const v = null !== (a = t.fullScreen) && void 0 !== a ? a : t.backgroundMode;
                    if ("boolean" === typeof v ? this.fullScreen.enable = v : this.fullScreen.load(v), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map((t => {
                            const e = new y.ManualParticle;
                            return e.load(t), e
                        }))), this.motion.load(t.motion), this.particles.load(t.particles), d.Plugins.loadOptions(this, t), void 0 !== t.responsive)
                        for (const o of t.responsive) {
                            const t = new f.Responsive;
                            t.load(o), this.responsive.push(t)
                        }
                    if (this.responsive.sort(((t, e) => t.maxWidth - e.maxWidth)), void 0 !== t.themes)
                        for (const o of t.themes) {
                            const t = new u.Theme;
                            t.load(o), this.themes.push(t)
                        }
                    this.defaultDarkTheme = null === (r = s(this, o, "m", n).call(this, h.ThemeMode.dark)) || void 0 === r ? void 0 : r.name, this.defaultLightTheme = null === (c = s(this, o, "m", n).call(this, h.ThemeMode.light)) || void 0 === c ? void 0 : c.name
                }
                setTheme(t) {
                    if (t) {
                        const e = this.themes.find((e => e.name === t));
                        e && this.load(e.options)
                    } else {
                        const t = "undefined" !== typeof matchMedia && matchMedia("(prefers-color-scheme: dark)"),
                            e = t && t.matches,
                            i = s(this, o, "m", n).call(this, e ? h.ThemeMode.dark : h.ThemeMode.light);
                        i && this.load(i.options)
                    }
                }
                setResponsive(t, e, i) {
                    this.load(i);
                    const o = this.responsive.find((i => i.mode === h.ResponsiveMode.screen && screen ? i.maxWidth * e > screen.availWidth : i.maxWidth * e > t));
                    return this.load(null === o || void 0 === o ? void 0 : o.options), null === o || void 0 === o ? void 0 : o.maxWidth
                }
                importPreset(t) {
                    this.load(d.Plugins.getPreset(t))
                }
            }, o = new WeakSet, n = function(t) {
                var e;
                return null !== (e = this.themes.find((e => e.default.value && e.default.mode === t))) && void 0 !== e ? e : this.themes.find((t => t.default.value && t.default.mode === h.ThemeMode.any))
            }
        },
        3151: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OptionsColor = void 0;
            class i {
                constructor() {
                    this.value = "#fff"
                }
                static create(t, e) {
                    const o = new i;
                    return o.load(t), void 0 !== e && ("string" === typeof e || e instanceof Array ? o.load({
                        value: e
                    }) : o.load(e)), o
                }
                load(t) {
                    void 0 !== (null === t || void 0 === t ? void 0 : t.value) && (this.value = t.value)
                }
            }
            e.OptionsColor = i
        },
        42203: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Bounce = void 0;
            const o = i(53294);
            e.Bounce = class {
                constructor() {
                    this.horizontal = new o.BounceFactor, this.vertical = new o.BounceFactor
                }
                load(t) {
                    t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
                }
            }
        },
        53294: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BounceFactor = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.random.minimumValue = .1, this.value = 1
                }
            }
            e.BounceFactor = n
        },
        61958: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Collisions = void 0;
            const o = i(26331),
                n = i(42203),
                s = i(90114);
            e.Collisions = class {
                constructor() {
                    this.bounce = new n.Bounce, this.enable = !1, this.mode = o.CollisionMode.bounce, this.overlap = new s.CollisionsOverlap
                }
                load(t) {
                    void 0 !== t && (this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
                }
            }
        },
        90114: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CollisionsOverlap = void 0;
            e.CollisionsOverlap = class {
                constructor() {
                    this.enable = !0, this.retries = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
                }
            }
        },
        78455: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Destroy = void 0;
            const o = i(26331),
                n = i(4499);
            e.Destroy = class {
                constructor() {
                    this.mode = o.DestroyMode.none, this.split = new n.Split
                }
                load(t) {
                    t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split))
                }
            }
        },
        4499: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Split = void 0;
            const o = i(98762),
                n = i(14250),
                s = i(97373);
            e.Split = class {
                constructor() {
                    this.count = 1, this.factor = new o.SplitFactor, this.rate = new n.SplitRate, this.sizeOffset = !0
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), void 0 !== t.particles && (this.particles = (0, s.deepExtend)({}, t.particles)), void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset))
                }
            }
        },
        98762: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SplitFactor = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.value = 3
                }
            }
            e.SplitFactor = n
        },
        14250: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SplitRate = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.value = {
                        min: 4,
                        max: 9
                    }
                }
            }
            e.SplitRate = n
        },
        32165: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Life = void 0;
            const o = i(12121),
                n = i(3878);
            e.Life = class {
                constructor() {
                    this.count = 0, this.delay = new o.LifeDelay, this.duration = new n.LifeDuration
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
                }
            }
        },
        12121: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LifeDelay = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.sync = !1
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            e.LifeDelay = n
        },
        3878: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LifeDuration = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.random.minimumValue = 1e-4, this.sync = !1
                }
                load(t) {
                    void 0 !== t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            e.LifeDuration = n
        },
        38854: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Links = void 0;
            const o = i(59058),
                n = i(6836),
                s = i(3151);
            e.Links = class {
                constructor() {
                    this.blink = !1, this.color = new s.OptionsColor, this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new o.LinksShadow, this.triangles = new n.LinksTriangle, this.width = 1, this.warp = !1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = s.OptionsColor.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
                }
            }
        },
        59058: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LinksShadow = void 0;
            const o = i(3151);
            e.LinksShadow = class {
                constructor() {
                    this.blur = 5, this.color = new o.OptionsColor, this.enable = !1, this.color.value = "#00ff00"
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = o.OptionsColor.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
        },
        6836: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LinksTriangle = void 0;
            const o = i(3151);
            e.LinksTriangle = class {
                constructor() {
                    this.enable = !1, this.frequency = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = o.OptionsColor.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        98027: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Attract = void 0;
            e.Attract = class {
                constructor() {
                    this.distance = 200, this.enable = !1, this.rotate = {
                        x: 3e3,
                        y: 3e3
                    }
                }
                get rotateX() {
                    return this.rotate.x
                }
                set rotateX(t) {
                    this.rotate.x = t
                }
                get rotateY() {
                    return this.rotate.y
                }
                set rotateY(t) {
                    this.rotate.y = t
                }
                load(t) {
                    var e, i, o, n;
                    if (!t) return;
                    void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable);
                    const s = null !== (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : t.rotateX;
                    void 0 !== s && (this.rotate.x = s);
                    const a = null !== (n = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : t.rotateY;
                    void 0 !== a && (this.rotate.y = a)
                }
            }
        },
        10095: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Move = void 0;
            const o = i(98027),
                n = i(26331),
                s = i(59045),
                a = i(20762),
                r = i(62159),
                c = i(95640),
                l = i(91728),
                d = i(97373),
                u = i(82027);
            e.Move = class {
                constructor() {
                    this.angle = new r.MoveAngle, this.attract = new o.Attract, this.decay = 0, this.distance = {}, this.direction = n.MoveDirection.none, this.drift = 0, this.enable = !1, this.gravity = new c.MoveGravity, this.path = new a.Path, this.outModes = new l.OutModes, this.random = !1, this.size = !1, this.speed = 2, this.spin = new u.Spin, this.straight = !1, this.trail = new s.Trail, this.vibrate = !1, this.warp = !1
                }
                get collisions() {
                    return !1
                }
                set collisions(t) {}
                get bounce() {
                    return this.collisions
                }
                set bounce(t) {
                    this.collisions = t
                }
                get out_mode() {
                    return this.outMode
                }
                set out_mode(t) {
                    this.outMode = t
                }
                get outMode() {
                    return this.outModes.default
                }
                set outMode(t) {
                    this.outModes.default = t
                }
                get noise() {
                    return this.path
                }
                set noise(t) {
                    this.path = t
                }
                load(t) {
                    var e, i, o;
                    if (void 0 === t) return;
                    void 0 !== t.angle && ("number" === typeof t.angle ? this.angle.value = t.angle : this.angle.load(t.angle)), this.attract.load(t.attract), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = "number" === typeof t.distance ? {
                        horizontal: t.distance,
                        vertical: t.distance
                    } : (0, d.deepExtend)({}, t.distance)), void 0 !== t.drift && (this.drift = (0, d.setRangeValue)(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                    const n = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
                    void 0 === t.outModes && void 0 === n || ("string" === typeof t.outModes || void 0 === t.outModes && void 0 !== n ? this.outModes.load({
                        default: null !== (i = t.outModes) && void 0 !== i ? i : n
                    }) : this.outModes.load(t.outModes)), this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = (0, d.setRangeValue)(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
                }
            }
        },
        62159: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MoveAngle = void 0;
            e.MoveAngle = class {
                constructor() {
                    this.offset = 0, this.value = 90
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.offset && (this.offset = t.offset), void 0 !== t.value && (this.value = t.value))
                }
            }
        },
        95640: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MoveGravity = void 0;
            e.MoveGravity = class {
                constructor() {
                    this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = t.acceleration), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
                }
            }
        },
        91728: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OutModes = void 0;
            const o = i(90551);
            e.OutModes = class {
                constructor() {
                    this.default = o.OutMode.out
                }
                load(t) {
                    var e, i, o, n;
                    t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default, this.left = null !== (i = t.left) && void 0 !== i ? i : t.default, this.right = null !== (o = t.right) && void 0 !== o ? o : t.default, this.top = null !== (n = t.top) && void 0 !== n ? n : t.default)
                }
            }
        },
        20762: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Path = void 0;
            const o = i(94918),
                n = i(97373);
            e.Path = class {
                constructor() {
                    this.clamp = !0, this.delay = new o.PathDelay, this.enable = !1, this.options = {}
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = (0, n.deepExtend)(this.options, t.options)))
                }
            }
        },
        94918: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PathDelay = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super()
                }
            }
            e.PathDelay = n
        },
        82027: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Spin = void 0;
            const o = i(97373);
            e.Spin = class {
                constructor() {
                    this.acceleration = 0, this.enable = !1
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = (0, o.setRangeValue)(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), this.position = t.position ? (0, o.deepExtend)({}, t.position) : void 0)
                }
            }
        },
        59045: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Trail = void 0;
            const o = i(3151);
            e.Trail = class {
                constructor() {
                    this.enable = !1, this.length = 10, this.fillColor = new o.OptionsColor, this.fillColor.value = "#000000"
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), this.fillColor = o.OptionsColor.create(this.fillColor, t.fillColor), void 0 !== t.length && (this.length = t.length))
                }
            }
        },
        48711: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Density = void 0;
            e.Density = class {
                constructor() {
                    this.enable = !1, this.area = 800, this.factor = 1e3
                }
                get value_area() {
                    return this.area
                }
                set value_area(t) {
                    this.area = t
                }
                load(t) {
                    var e;
                    if (void 0 === t) return;
                    void 0 !== t.enable && (this.enable = t.enable);
                    const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
                    void 0 !== i && (this.area = i), void 0 !== t.factor && (this.factor = t.factor)
                }
            }
        },
        42338: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ParticlesNumber = void 0;
            const o = i(48711);
            e.ParticlesNumber = class {
                constructor() {
                    this.density = new o.Density, this.limit = 0, this.value = 100
                }
                get max() {
                    return this.limit
                }
                set max(t) {
                    this.limit = t
                }
                load(t) {
                    var e;
                    if (void 0 === t) return;
                    this.density.load(t.density);
                    const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
                    void 0 !== i && (this.limit = i), void 0 !== t.value && (this.value = t.value)
                }
            }
        },
        43748: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Opacity = void 0;
            const o = i(99257),
                n = i(15707),
                s = i(97373);
            class a extends n.ValueWithRandom {
                constructor() {
                    super(), this.animation = new o.OpacityAnimation, this.random.minimumValue = .1, this.value = 1
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    super.load(t);
                    const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== i && (this.animation.load(i), this.value = (0, s.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            e.Opacity = a
        },
        99257: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OpacityAnimation = void 0;
            const o = i(26331),
                n = i(99089);
            class s extends n.AnimationOptions {
                constructor() {
                    super(), this.destroy = o.DestroyType.none, this.enable = !1, this.speed = 2, this.startValue = o.StartValueType.random, this.sync = !1
                }
                get opacity_min() {
                    return this.minimumValue
                }
                set opacity_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    void 0 !== t && (super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            e.OpacityAnimation = s
        },
        94145: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Orbit = void 0;
            const o = i(62301),
                n = i(3151),
                s = i(99089);
            e.Orbit = class {
                constructor() {
                    this.animation = new s.AnimationOptions, this.enable = !1, this.opacity = 1, this.rotation = new o.OrbitRotation, this.width = 1
                }
                load(t) {
                    void 0 !== t && (this.animation.load(t.animation), this.rotation.load(t.rotation), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width), void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.color && (this.color = n.OptionsColor.create(this.color, t.color)))
                }
            }
        },
        62301: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OrbitRotation = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.value = 45, this.random.enable = !1, this.random.minimumValue = 0
                }
                load(t) {
                    void 0 !== t && super.load(t)
                }
            }
            e.OrbitRotation = n
        },
        8029: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ParticlesOptions = void 0;
            const o = i(38854),
                n = i(10095),
                s = i(42338),
                a = i(43748),
                r = i(39014),
                c = i(88863),
                l = i(53954),
                d = i(10991),
                u = i(23111),
                h = i(61958),
                p = i(72745),
                v = i(20192),
                y = i(32165),
                f = i(42203),
                g = i(78455),
                b = i(81610),
                m = i(31749),
                w = i(21750),
                S = i(60753),
                _ = i(97373),
                P = i(94145),
                O = i(96575),
                M = i(32372);
            e.ParticlesOptions = class {
                constructor() {
                    this.bounce = new f.Bounce, this.collisions = new h.Collisions, this.color = new v.AnimatableColor, this.destroy = new g.Destroy, this.gradient = [], this.groups = {}, this.life = new y.Life, this.links = new o.Links, this.move = new n.Move, this.number = new s.ParticlesNumber, this.opacity = new a.Opacity, this.orbit = new P.Orbit, this.reduceDuplicates = !1, this.repulse = new O.Repulse, this.roll = new w.Roll, this.rotate = new l.Rotate, this.shadow = new d.Shadow, this.shape = new r.Shape, this.size = new c.Size, this.stroke = new u.Stroke, this.tilt = new m.Tilt, this.twinkle = new p.Twinkle, this.wobble = new b.Wobble, this.zIndex = new S.ZIndex
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                load(t) {
                    var e, i, o, n, s, a, r, c;
                    if (void 0 === t) return;
                    this.bounce.load(t.bounce), this.color.load(v.AnimatableColor.create(this.color, t.color)), this.destroy.load(t.destroy), this.life.load(t.life);
                    const l = null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked;
                    if (void 0 !== l && this.links.load(l), void 0 !== t.groups)
                        for (const u in t.groups) {
                            const e = t.groups[u];
                            void 0 !== e && (this.groups[u] = (0, _.deepExtend)(null !== (o = this.groups[u]) && void 0 !== o ? o : {}, e))
                        }
                    this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), this.orbit.load(t.orbit), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.repulse.load(t.repulse), this.roll.load(t.roll), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.tilt.load(t.tilt), this.twinkle.load(t.twinkle), this.wobble.load(t.wobble), this.zIndex.load(t.zIndex);
                    const d = null !== (s = null === (n = t.move) || void 0 === n ? void 0 : n.collisions) && void 0 !== s ? s : null === (a = t.move) || void 0 === a ? void 0 : a.bounce;
                    void 0 !== d && (this.collisions.enable = d), this.collisions.load(t.collisions);
                    const h = null !== (r = t.stroke) && void 0 !== r ? r : null === (c = t.shape) || void 0 === c ? void 0 : c.stroke;
                    h && (h instanceof Array ? this.stroke = h.map((t => {
                        const e = new u.Stroke;
                        return e.load(t), e
                    })) : (this.stroke instanceof Array && (this.stroke = new u.Stroke), this.stroke.load(h)));
                    const p = t.gradient;
                    p && (p instanceof Array ? this.gradient = p.map((t => {
                        const e = new M.AnimatableGradient;
                        return e.load(t), e
                    })) : (this.gradient instanceof Array && (this.gradient = new M.AnimatableGradient), this.gradient.load(p)))
                }
            }
        },
        96575: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Repulse = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.enabled = !1, this.distance = 1, this.duration = 1, this.factor = 1, this.speed = 1
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.enabled && (this.enabled = t.enabled), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed))
                }
            }
            e.Repulse = n
        },
        21750: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Roll = void 0;
            const o = i(3151),
                n = i(21372),
                s = i(97373),
                a = i(26331);
            e.Roll = class {
                constructor() {
                    this.darken = new n.RollLight, this.enable = !1, this.enlighten = new n.RollLight, this.mode = a.RollMode.vertical, this.speed = 25
                }
                load(t) {
                    t && (void 0 !== t.backColor && (this.backColor = o.OptionsColor.create(this.backColor, t.backColor)), this.darken.load(t.darken), void 0 !== t.enable && (this.enable = t.enable), this.enlighten.load(t.enlighten), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.speed && (this.speed = (0, s.setRangeValue)(t.speed)))
                }
            }
        },
        21372: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RollLight = void 0;
            e.RollLight = class {
                constructor() {
                    this.enable = !1, this.value = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = t.value))
                }
            }
        },
        53954: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Rotate = void 0;
            const o = i(18946),
                n = i(26331),
                s = i(15707);
            class a extends s.ValueWithRandom {
                constructor() {
                    super(), this.animation = new o.RotateAnimation, this.direction = n.RotateDirection.clockwise, this.path = !1, this.value = 0
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
                }
            }
            e.Rotate = a
        },
        18946: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RotateAnimation = void 0;
            e.RotateAnimation = class {
                constructor() {
                    this.enable = !1, this.speed = 0, this.sync = !1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
        },
        10991: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Shadow = void 0;
            const o = i(3151);
            e.Shadow = class {
                constructor() {
                    this.blur = 0, this.color = new o.OptionsColor, this.enable = !1, this.offset = {
                        x: 0,
                        y: 0
                    }, this.color.value = "#000000"
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = o.OptionsColor.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
                }
            }
        },
        39014: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Shape = void 0;
            const o = i(26331),
                n = i(97373);
            e.Shape = class {
                constructor() {
                    this.options = {}, this.type = o.ShapeType.circle
                }
                get image() {
                    var t;
                    return null !== (t = this.options[o.ShapeType.image]) && void 0 !== t ? t : this.options[o.ShapeType.images]
                }
                set image(t) {
                    this.options[o.ShapeType.image] = t, this.options[o.ShapeType.images] = t
                }
                get custom() {
                    return this.options
                }
                set custom(t) {
                    this.options = t
                }
                get images() {
                    return this.image
                }
                set images(t) {
                    this.image = t
                }
                get stroke() {
                    return []
                }
                set stroke(t) {}
                get character() {
                    var t;
                    return null !== (t = this.options[o.ShapeType.character]) && void 0 !== t ? t : this.options[o.ShapeType.char]
                }
                set character(t) {
                    this.options[o.ShapeType.character] = t, this.options[o.ShapeType.char] = t
                }
                get polygon() {
                    var t;
                    return null !== (t = this.options[o.ShapeType.polygon]) && void 0 !== t ? t : this.options[o.ShapeType.star]
                }
                set polygon(t) {
                    this.options[o.ShapeType.polygon] = t, this.options[o.ShapeType.star] = t
                }
                load(t) {
                    var e, i, s;
                    if (void 0 === t) return;
                    const a = null !== (e = t.options) && void 0 !== e ? e : t.custom;
                    if (void 0 !== a)
                        for (const o in a) {
                            const t = a[o];
                            void 0 !== t && (this.options[o] = (0, n.deepExtend)(null !== (i = this.options[o]) && void 0 !== i ? i : {}, t))
                        }
                    this.loadShape(t.character, o.ShapeType.character, o.ShapeType.char, !0), this.loadShape(t.polygon, o.ShapeType.polygon, o.ShapeType.star, !1), this.loadShape(null !== (s = t.image) && void 0 !== s ? s : t.images, o.ShapeType.image, o.ShapeType.images, !0), void 0 !== t.type && (this.type = t.type)
                }
                loadShape(t, e, i, o) {
                    var s, a, r, c;
                    void 0 !== t && (t instanceof Array ? (this.options[e] instanceof Array || (this.options[e] = [], this.options[i] && !o || (this.options[i] = [])), this.options[e] = (0, n.deepExtend)(null !== (s = this.options[e]) && void 0 !== s ? s : [], t), this.options[i] && !o || (this.options[i] = (0, n.deepExtend)(null !== (a = this.options[i]) && void 0 !== a ? a : [], t))) : (this.options[e] instanceof Array && (this.options[e] = {}, this.options[i] && !o || (this.options[i] = {})), this.options[e] = (0, n.deepExtend)(null !== (r = this.options[e]) && void 0 !== r ? r : {}, t), this.options[i] && !o || (this.options[i] = (0, n.deepExtend)(null !== (c = this.options[i]) && void 0 !== c ? c : {}, t))))
                }
            }
        },
        88863: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Size = void 0;
            const o = i(15816),
                n = i(15707),
                s = i(97373);
            class a extends n.ValueWithRandom {
                constructor() {
                    super(), this.animation = new o.SizeAnimation, this.random.minimumValue = 1, this.value = 3
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    super.load(t);
                    const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== i && (this.animation.load(i), this.value = (0, s.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            e.Size = a
        },
        15816: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SizeAnimation = void 0;
            const o = i(26331),
                n = i(99089);
            class s extends n.AnimationOptions {
                constructor() {
                    super(), this.destroy = o.DestroyType.none, this.enable = !1, this.speed = 5, this.startValue = o.StartValueType.random, this.sync = !1
                }
                get size_min() {
                    return this.minimumValue
                }
                set size_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    void 0 !== t && (super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            e.SizeAnimation = s
        },
        23111: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Stroke = void 0;
            const o = i(20192);
            e.Stroke = class {
                constructor() {
                    this.width = 0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = o.AnimatableColor.create(this.color, t.color)), void 0 !== t.width && (this.width = t.width), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        31749: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Tilt = void 0;
            const o = i(20994),
                n = i(26331),
                s = i(15707);
            class a extends s.ValueWithRandom {
                constructor() {
                    super(), this.animation = new o.TiltAnimation, this.direction = n.TiltDirection.clockwise, this.enable = !1, this.value = 0
                }
                load(t) {
                    t && (super.load(t), this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
            e.Tilt = a
        },
        20994: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TiltAnimation = void 0;
            e.TiltAnimation = class {
                constructor() {
                    this.enable = !1, this.speed = 0, this.sync = !1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
        },
        72745: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Twinkle = void 0;
            const o = i(74767);
            e.Twinkle = class {
                constructor() {
                    this.lines = new o.TwinkleValues, this.particles = new o.TwinkleValues
                }
                load(t) {
                    void 0 !== t && (this.lines.load(t.lines), this.particles.load(t.particles))
                }
            }
        },
        74767: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TwinkleValues = void 0;
            const o = i(3151);
            e.TwinkleValues = class {
                constructor() {
                    this.enable = !1, this.frequency = .05, this.opacity = 1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = o.OptionsColor.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
        },
        81610: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Wobble = void 0;
            const o = i(97373);
            e.Wobble = class {
                constructor() {
                    this.distance = 5, this.enable = !1, this.speed = 50
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = (0, o.setRangeValue)(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)))
                }
            }
        },
        60753: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ZIndex = void 0;
            const o = i(15707);
            class n extends o.ValueWithRandom {
                constructor() {
                    super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
                }
            }
            e.ZIndex = n
        },
        34624: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Random = void 0;
            e.Random = class {
                constructor() {
                    this.enable = !1, this.minimumValue = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
                }
            }
        },
        97848: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Responsive = void 0;
            const o = i(97373),
                n = i(26331);
            e.Responsive = class {
                constructor() {
                    this.maxWidth = 1 / 0, this.options = {}, this.mode = n.ResponsiveMode.canvas
                }
                load(t) {
                    t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && (t.mode === n.ResponsiveMode.screen ? this.mode = n.ResponsiveMode.screen : this.mode = n.ResponsiveMode.canvas), void 0 !== t.options && (this.options = (0, o.deepExtend)({}, t.options)))
                }
            }
        },
        67851: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Theme = void 0;
            const o = i(97373),
                n = i(50827);
            e.Theme = class {
                constructor() {
                    this.name = "", this.default = new n.ThemeDefault
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = (0, o.deepExtend)({}, t.options)))
                }
            }
        },
        50827: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ThemeDefault = void 0;
            const o = i(26331);
            e.ThemeDefault = class {
                constructor() {
                    this.auto = !1, this.mode = o.ThemeMode.any, this.value = !1
                }
                load(t) {
                    t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
                }
            }
        },
        15707: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ValueWithRandom = void 0;
            const o = i(34624),
                n = i(97373);
            e.ValueWithRandom = class {
                constructor() {
                    this.random = new o.Random, this.value = 0
                }
                load(t) {
                    t && ("boolean" === typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = (0, n.setRangeValue)(t.value, this.random.enable ? this.random.minimumValue : void 0)))
                }
            }
        },
        12993: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AbsorberInstance = void 0;
            const o = i(97373),
                n = i(95638),
                s = i(26331);
            e.AbsorberInstance = class {
                constructor(t, e, i, s) {
                    var a, r, c, l, d;
                    this.absorbers = t, this.container = e, this.initialPosition = s ? n.Vector.create(s.x, s.y) : void 0, this.options = i, this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = (0, o.getRangeValue)(i.size.value) * e.retina.pixelRatio, this.mass = this.size * i.size.density * e.retina.reduceFactor;
                    const u = i.size.limit;
                    this.limit = "number" === typeof u ? {
                        radius: u * e.retina.pixelRatio * e.retina.reduceFactor,
                        mass: 0
                    } : {
                        radius: (null !== (a = null === u || void 0 === u ? void 0 : u.radius) && void 0 !== a ? a : 0) * e.retina.pixelRatio * e.retina.reduceFactor,
                        mass: null !== (r = null === u || void 0 === u ? void 0 : u.mass) && void 0 !== r ? r : 0
                    };
                    const h = "string" === typeof i.color ? {
                        value: i.color
                    } : i.color;
                    this.color = null !== (c = (0, o.colorToRgb)(h)) && void 0 !== c ? c : {
                        b: 0,
                        g: 0,
                        r: 0
                    }, this.position = null !== (d = null === (l = this.initialPosition) || void 0 === l ? void 0 : l.copy()) && void 0 !== d ? d : this.calcPosition()
                }
                attract(t) {
                    const e = this.container,
                        i = this.options;
                    if (i.draggable) {
                        const t = e.interactivity.mouse;
                        if (t.clicking && t.downPosition) {
                            (0, o.getDistance)(this.position, t.downPosition) <= this.size && (this.dragging = !0)
                        } else this.dragging = !1;
                        this.dragging && t.position && (this.position.x = t.position.x, this.position.y = t.position.y)
                    }
                    const s = t.getPosition(),
                        {
                            dx: a,
                            dy: r,
                            distance: c
                        } = (0, o.getDistances)(this.position, s),
                        l = n.Vector.create(a, r);
                    if (l.length = this.mass / Math.pow(c, 2) * e.retina.reduceFactor, c < this.size + t.getRadius()) {
                        const o = .033 * t.getRadius() * e.retina.pixelRatio;
                        this.size > t.getRadius() && c < this.size - t.getRadius() || void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0 ? i.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, l)) : (i.destroy && (t.size.value -= o), this.updateParticlePosition(t, l)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += o), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += o * this.options.size.density * e.retina.reduceFactor)
                    } else this.updateParticlePosition(t, l)
                }
                resize() {
                    const t = this.initialPosition;
                    this.position = t && (0, o.isPointInside)(t, this.container.canvas.size) ? t : this.calcPosition()
                }
                draw(t) {
                    t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = (0, o.getStyleFromRgb)(this.color, this.opacity), t.fill()
                }
                calcPosition() {
                    var t, e;
                    const i = this.container,
                        o = this.options.position;
                    return n.Vector.create((null !== (t = null === o || void 0 === o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * i.canvas.size.width, (null !== (e = null === o || void 0 === o ? void 0 : o.y) && void 0 !== e ? e : 100 * Math.random()) / 100 * i.canvas.size.height)
                }
                updateParticlePosition(t, e) {
                    var i;
                    if (t.destroyed) return;
                    const a = this.container,
                        r = a.canvas.size;
                    if (t.needsNewPosition && (t.position.x = Math.floor(Math.random() * r.width), t.position.y = Math.floor(Math.random() * r.height), t.velocity.setTo(t.initialVelocity), t.absorberOrbit = void 0, t.needsNewPosition = !1), this.options.orbits) {
                        if (void 0 === t.absorberOrbit && (t.absorberOrbit = n.Vector.create(0, 0), t.absorberOrbit.length = (0, o.getDistance)(t.getPosition(), this.position), t.absorberOrbit.angle = Math.random() * Math.PI * 2), t.absorberOrbit.length <= this.size && !this.options.destroy) {
                            const e = Math.min(r.width, r.height);
                            t.absorberOrbit.length = e * (.2 * Math.random() - .1 + 1)
                        }
                        void 0 === t.absorberOrbitDirection && (t.absorberOrbitDirection = t.velocity.x >= 0 ? s.RotateDirection.clockwise : s.RotateDirection.counterClockwise);
                        const c = t.absorberOrbit.length,
                            l = t.absorberOrbit.angle,
                            d = t.absorberOrbitDirection;
                        t.velocity.x = 0, t.velocity.y = 0;
                        const u = {
                            x: d === s.RotateDirection.clockwise ? Math.cos : Math.sin,
                            y: d === s.RotateDirection.clockwise ? Math.sin : Math.cos
                        };
                        t.position.x = this.position.x + c * u.x(l), t.position.y = this.position.y + c * u.y(l), t.absorberOrbit.length -= e.length, t.absorberOrbit.angle += (null !== (i = t.retina.moveSpeed) && void 0 !== i ? i : 0) * a.retina.pixelRatio / 100 * a.retina.reduceFactor
                    } else {
                        const i = n.Vector.origin;
                        i.length = e.length, i.angle = e.angle, t.velocity.addTo(i)
                    }
                }
            }
        },
        61861: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Absorbers = void 0;
            const o = i(12993),
                n = i(19372),
                s = i(35456),
                a = i(97373);
            e.Absorbers = class {
                constructor(t) {
                    this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [];
                    const e = t;
                    e.getAbsorber = t => void 0 === t || "number" === typeof t ? this.array[t || 0] : this.array.find((e => e.name === t)), e.addAbsorber = (t, e) => this.addAbsorber(t, e)
                }
                init(t) {
                    var e, i;
                    if (!t) return;
                    t.absorbers && (t.absorbers instanceof Array ? this.absorbers = t.absorbers.map((t => {
                        const e = new n.Absorber;
                        return e.load(t), e
                    })) : (this.absorbers instanceof Array && (this.absorbers = new n.Absorber), this.absorbers.load(t.absorbers)));
                    const o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === i ? void 0 : i.absorbers;
                    if (o && (o instanceof Array ? this.interactivityAbsorbers = o.map((t => {
                            const e = new n.Absorber;
                            return e.load(t), e
                        })) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new n.Absorber), this.interactivityAbsorbers.load(o))), this.absorbers instanceof Array)
                        for (const n of this.absorbers) this.addAbsorber(n);
                    else this.addAbsorber(this.absorbers)
                }
                particleUpdate(t) {
                    for (const e of this.array)
                        if (e.attract(t), t.destroyed) break
                }
                draw(t) {
                    for (const e of this.array) t.save(), e.draw(t), t.restore()
                }
                stop() {
                    this.array = []
                }
                resize() {
                    for (const t of this.array) t.resize()
                }
                handleClickMode(t) {
                    const e = this.container,
                        i = this.absorbers,
                        o = this.interactivityAbsorbers;
                    if (t === s.AbsorberClickMode.absorber) {
                        let t;
                        o instanceof Array ? o.length > 0 && (t = (0, a.itemFromArray)(o)) : t = o;
                        const n = null !== t && void 0 !== t ? t : i instanceof Array ? (0, a.itemFromArray)(i) : i,
                            s = e.interactivity.mouse.clickPosition;
                        this.addAbsorber(n, s)
                    }
                }
                addAbsorber(t, e) {
                    const i = new o.AbsorberInstance(this, this.container, t, e);
                    return this.array.push(i), i
                }
                removeAbsorber(t) {
                    const e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1)
                }
            }
        },
        65693: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.AbsorberClickMode = void 0,
                function(t) {
                    t.absorber = "absorber"
                }(e.AbsorberClickMode || (e.AbsorberClickMode = {}))
        },
        35456: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(65693), e)
        },
        19372: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Absorber = void 0;
            const o = i(89499),
                n = i(3151);
            e.Absorber = class {
                constructor() {
                    this.color = new n.OptionsColor, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new o.AbsorberSize
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = n.OptionsColor.create(this.color, t.color)), void 0 !== t.draggable && (this.draggable = t.draggable), this.name = t.name, void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.position && (this.position = {
                        x: t.position.x,
                        y: t.position.y
                    }), void 0 !== t.size && this.size.load(t.size), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.orbits && (this.orbits = t.orbits))
                }
            }
        },
        89499: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AbsorberSize = void 0;
            const o = i(15707),
                n = i(76269);
            class s extends o.ValueWithRandom {
                constructor() {
                    super(), this.density = 5, this.random.minimumValue = 1, this.value = 50, this.limit = new n.AbsorberSizeLimit
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.density && (this.density = t.density), "number" === typeof t.limit ? this.limit.radius = t.limit : this.limit.load(t.limit))
                }
            }
            e.AbsorberSize = s
        },
        76269: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AbsorberSizeLimit = void 0;
            e.AbsorberSizeLimit = class {
                constructor() {
                    this.radius = 0, this.mass = 0
                }
                load(t) {
                    t && (void 0 !== t.mass && (this.mass = t.mass), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
        },
        53785: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadAbsorbersPlugin = void 0;
            const o = i(61861),
                n = i(35456),
                s = i(19372),
                a = i(97373);
            class r {
                constructor() {
                    this.id = "absorbers"
                }
                getPlugin(t) {
                    return new o.Absorbers(t)
                }
                needsPlugin(t) {
                    var e, i, o;
                    if (void 0 === t) return !1;
                    const s = t.absorbers;
                    let r = !1;
                    return s instanceof Array ? s.length && (r = !0) : (void 0 !== s || (null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) && (0, a.isInArray)(n.AbsorberClickMode.absorber, t.interactivity.events.onClick.mode)) && (r = !0), r
                }
                loadOptions(t, e) {
                    var i, o;
                    if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                    const n = t;
                    if (null === e || void 0 === e ? void 0 : e.absorbers)
                        if ((null === e || void 0 === e ? void 0 : e.absorbers) instanceof Array) n.absorbers = null === e || void 0 === e ? void 0 : e.absorbers.map((t => {
                            const e = new s.Absorber;
                            return e.load(t), e
                        }));
                        else {
                            let t = n.absorbers;
                            void 0 === (null === t || void 0 === t ? void 0 : t.load) && (n.absorbers = t = new s.Absorber), t.load(null === e || void 0 === e ? void 0 : e.absorbers)
                        }
                    const a = null === (o = null === (i = null === e || void 0 === e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.absorbers;
                    if (a)
                        if (a instanceof Array) n.interactivity.modes.absorbers = a.map((t => {
                            const e = new s.Absorber;
                            return e.load(t), e
                        }));
                        else {
                            let t = n.interactivity.modes.absorbers;
                            void 0 === (null === t || void 0 === t ? void 0 : t.load) && (n.interactivity.modes.absorbers = t = new s.Absorber), t.load(a)
                        }
                }
            }
            e.loadAbsorbersPlugin = async function(t) {
                const e = new r;
                await t.addPlugin(e)
            }
        },
        5357: function(t, e, i) {
            "use strict";
            var o, n, s = this && this.__classPrivateFieldSet || function(t, e, i, o, n) {
                    if ("m" === o) throw new TypeError("Private method is not writable");
                    if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i
                },
                a = this && this.__classPrivateFieldGet || function(t, e, i, o) {
                    if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmitterInstance = void 0;
            const r = i(97373),
                c = i(26331),
                l = i(56208),
                d = i(57579);
            e.EmitterInstance = class {
                constructor(t, e, i, a) {
                    var u, h, p, v, y, f, g;
                    this.emitters = t, this.container = e, o.set(this, void 0), n.set(this, void 0), this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = a, this.emitterOptions = (0, r.deepExtend)({}, i), this.spawnDelay = 1e3 * (null !== (u = this.emitterOptions.life.delay) && void 0 !== u ? u : 0) / this.container.retina.reduceFactor, this.position = null !== (h = this.initialPosition) && void 0 !== h ? h : this.calcPosition(), this.name = i.name, this.shape = d.ShapeManager.getShape(i.shape), this.fill = i.fill, s(this, o, !this.emitterOptions.life.wait, "f"), s(this, n, !1, "f");
                    let b = (0, r.deepExtend)({}, this.emitterOptions.particles);
                    null !== b && void 0 !== b || (b = {}), null !== (p = b.move) && void 0 !== p || (b.move = {}), null !== (v = (g = b.move).direction) && void 0 !== v || (g.direction = this.emitterOptions.direction), void 0 !== this.emitterOptions.spawnColor && (this.spawnColor = (0, r.colorToHsl)(this.emitterOptions.spawnColor)), this.paused = !this.emitterOptions.autoPlay, this.particlesOptions = b, this.size = null !== (y = this.emitterOptions.size) && void 0 !== y ? y : (() => {
                        const t = new l.EmitterSize;
                        return t.load({
                            height: 0,
                            mode: c.SizeMode.percent,
                            width: 0
                        }), t
                    })(), this.lifeCount = null !== (f = this.emitterOptions.life.count) && void 0 !== f ? f : -1, this.immortal = this.lifeCount <= 0, this.play()
                }
                externalPlay() {
                    this.paused = !1, this.play()
                }
                externalPause() {
                    this.paused = !0, this.pause()
                }
                play() {
                    var t;
                    if (!this.paused && this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) && (a(this, o, "f") || this.currentSpawnDelay >= (null !== (t = this.spawnDelay) && void 0 !== t ? t : 0))) {
                        if (void 0 === this.emitDelay) {
                            const t = (0, r.getRangeValue)(this.emitterOptions.rate.delay);
                            this.emitDelay = 1e3 * t / this.container.retina.reduceFactor
                        }(this.lifeCount > 0 || this.immortal) && this.prepareToDie()
                    }
                }
                pause() {
                    this.paused || delete this.emitDelay
                }
                resize() {
                    const t = this.initialPosition;
                    this.position = t && (0, r.isPointInside)(t, this.container.canvas.size) ? t : this.calcPosition()
                }
                update(t) {
                    var e, i, r;
                    this.paused || (a(this, o, "f") && (s(this, o, !1, "f"), this.currentSpawnDelay = null !== (e = this.spawnDelay) && void 0 !== e ? e : 0, this.currentEmitDelay = null !== (i = this.emitDelay) && void 0 !== i ? i : 0), a(this, n, "f") || (s(this, n, !0, "f"), this.emitParticles(this.emitterOptions.startCount)), void 0 !== this.duration && (this.currentDuration += t.value, this.currentDuration >= this.duration && (this.pause(), void 0 !== this.spawnDelay && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = 1e3 * (null !== (r = this.emitterOptions.life.delay) && void 0 !== r ? r : 0) / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), void 0 !== this.spawnDelay && (this.currentSpawnDelay += t.value, this.currentSpawnDelay >= this.spawnDelay && (this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), void 0 !== this.emitDelay && (this.currentEmitDelay += t.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)))
                }
                prepareToDie() {
                    var t;
                    if (this.paused) return;
                    const e = null === (t = this.emitterOptions.life) || void 0 === t ? void 0 : t.duration;
                    this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && void 0 !== e && e > 0 && (this.duration = 1e3 * e)
                }
                destroy() {
                    this.emitters.removeEmitter(this)
                }
                calcPosition() {
                    var t, e;
                    const i = this.container,
                        o = this.emitterOptions.position;
                    return {
                        x: (null !== (t = null === o || void 0 === o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * i.canvas.size.width,
                        y: (null !== (e = null === o || void 0 === o ? void 0 : o.y) && void 0 !== e ? e : 100 * Math.random()) / 100 * i.canvas.size.height
                    }
                }
                emit() {
                    if (this.paused) return;
                    const t = (0, r.getRangeValue)(this.emitterOptions.rate.quantity);
                    this.emitParticles(t)
                }
                emitParticles(t) {
                    var e, i, o;
                    const n = this.container,
                        s = this.position,
                        a = {
                            x: this.size.mode === c.SizeMode.percent ? n.canvas.size.width * this.size.width / 100 : this.size.width,
                            y: this.size.mode === c.SizeMode.percent ? n.canvas.size.height * this.size.height / 100 : this.size.height
                        };
                    for (let c = 0; c < t; c++) {
                        const t = (0, r.deepExtend)({}, this.particlesOptions);
                        if (this.spawnColor) {
                            const i = null === (e = this.emitterOptions.spawnColor) || void 0 === e ? void 0 : e.animation;
                            if (i) {
                                const t = i;
                                if (t.enable) this.spawnColor.h = this.setColorAnimation(t, this.spawnColor.h, 360);
                                else {
                                    const t = i;
                                    this.spawnColor.h = this.setColorAnimation(t.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(t.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(t.l, this.spawnColor.l, 100)
                                }
                            }
                            t.color ? t.color.value = this.spawnColor : t.color = {
                                value: this.spawnColor
                            }
                        }
                        const c = null !== (o = null === (i = this.shape) || void 0 === i ? void 0 : i.randomPosition(s, a, this.fill)) && void 0 !== o ? o : s;
                        n.particles.addParticle(c, t)
                    }
                }
                setColorAnimation(t, e, i) {
                    var o;
                    const n = this.container;
                    if (!t.enable) return e;
                    const s = (0, r.randomInRange)(t.offset),
                        a = 1e3 * (0, r.getRangeValue)(this.emitterOptions.rate.delay) / n.retina.reduceFactor;
                    return (e + (null !== (o = t.speed) && void 0 !== o ? o : 0) * n.fpsLimit / a + 3.6 * s) % i
                }
            }, o = new WeakMap, n = new WeakMap
        },
        40676: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Emitters = void 0;
            const o = i(5357),
                n = i(48327),
                s = i(4737),
                a = i(97373);
            e.Emitters = class {
                constructor(t) {
                    this.container = t, this.array = [], this.emitters = [], this.interactivityEmitters = [];
                    const e = t;
                    e.getEmitter = t => void 0 === t || "number" === typeof t ? this.array[t || 0] : this.array.find((e => e.name === t)), e.addEmitter = (t, e) => this.addEmitter(t, e), e.playEmitter = t => {
                        const i = e.getEmitter(t);
                        i && i.externalPlay()
                    }, e.pauseEmitter = t => {
                        const i = e.getEmitter(t);
                        i && i.externalPause()
                    }
                }
                init(t) {
                    var e, i;
                    if (!t) return;
                    t.emitters && (t.emitters instanceof Array ? this.emitters = t.emitters.map((t => {
                        const e = new n.Emitter;
                        return e.load(t), e
                    })) : (this.emitters instanceof Array && (this.emitters = new n.Emitter), this.emitters.load(t.emitters)));
                    const o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === i ? void 0 : i.emitters;
                    if (o && (o instanceof Array ? this.interactivityEmitters = o.map((t => {
                            const e = new n.Emitter;
                            return e.load(t), e
                        })) : (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new n.Emitter), this.interactivityEmitters.load(o))), this.emitters instanceof Array)
                        for (const n of this.emitters) this.addEmitter(n);
                    else this.addEmitter(this.emitters)
                }
                play() {
                    for (const t of this.array) t.play()
                }
                pause() {
                    for (const t of this.array) t.pause()
                }
                stop() {
                    this.array = []
                }
                update(t) {
                    for (const e of this.array) e.update(t)
                }
                handleClickMode(t) {
                    const e = this.container,
                        i = this.emitters,
                        o = this.interactivityEmitters;
                    if (t === s.EmitterClickMode.emitter) {
                        let t;
                        o instanceof Array ? o.length > 0 && (t = (0, a.itemFromArray)(o)) : t = o;
                        const n = null !== t && void 0 !== t ? t : i instanceof Array ? (0, a.itemFromArray)(i) : i,
                            s = e.interactivity.mouse.clickPosition;
                        this.addEmitter((0, a.deepExtend)({}, n), s)
                    }
                }
                resize() {
                    for (const t of this.array) t.resize()
                }
                addEmitter(t, e) {
                    const i = new o.EmitterInstance(this, this.container, t, e);
                    return this.array.push(i), i
                }
                removeEmitter(t) {
                    const e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1)
                }
            }
        },
        14685: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        98597: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.EmitterClickMode = void 0,
                function(t) {
                    t.emitter = "emitter"
                }(e.EmitterClickMode || (e.EmitterClickMode = {}))
        },
        98601: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.EmitterShapeType = void 0,
                function(t) {
                    t.circle = "circle", t.square = "square"
                }(e.EmitterShapeType || (e.EmitterShapeType = {}))
        },
        4737: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(98597), e), n(i(98601), e)
        },
        48327: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Emitter = void 0;
            const o = i(74887),
                n = i(69571),
                s = i(97373),
                a = i(56208),
                r = i(20192),
                c = i(4737);
            e.Emitter = class {
                constructor() {
                    this.autoPlay = !0, this.fill = !0, this.life = new n.EmitterLife, this.rate = new o.EmitterRate, this.shape = c.EmitterShapeType.square, this.startCount = 0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (void 0 === this.size && (this.size = new a.EmitterSize), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.fill && (this.fill = t.fill), this.life.load(t.life), this.name = t.name, void 0 !== t.particles && (this.particles = (0, s.deepExtend)({}, t.particles)), this.rate.load(t.rate), void 0 !== t.shape && (this.shape = t.shape), void 0 !== t.position && (this.position = {
                        x: t.position.x,
                        y: t.position.y
                    }), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new r.AnimatableColor), this.spawnColor.load(t.spawnColor)), void 0 !== t.startCount && (this.startCount = t.startCount))
                }
            }
        },
        69571: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmitterLife = void 0;
            e.EmitterLife = class {
                constructor() {
                    this.wait = !1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.wait && (this.wait = t.wait))
                }
            }
        },
        74887: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmitterRate = void 0;
            const o = i(97373);
            e.EmitterRate = class {
                constructor() {
                    this.quantity = 1, this.delay = .1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.quantity && (this.quantity = (0, o.setRangeValue)(t.quantity)), void 0 !== t.delay && (this.delay = (0, o.setRangeValue)(t.delay)))
                }
            }
        },
        56208: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmitterSize = void 0;
            const o = i(26331);
            e.EmitterSize = class {
                constructor() {
                    this.mode = o.SizeMode.percent, this.height = 0, this.width = 0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width))
                }
            }
        },
        57579: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ShapeManager = void 0;
            const i = new Map;
            class o {
                static addShape(t, e) {
                    o.getShape(t) || i.set(t, e)
                }
                static getShape(t) {
                    return i.get(t)
                }
                static getSupportedShapes() {
                    return i.keys()
                }
            }
            e.ShapeManager = o
        },
        63969: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CircleShape = void 0;
            e.CircleShape = class {
                randomPosition(t, e, i) {
                    const [o, n] = [e.x / 2, e.y / 2], s = ((t, e) => {
                        const i = Math.random() / 4,
                            o = Math.atan(e / t * Math.tan(2 * Math.PI * i)),
                            n = Math.random();
                        return n < .25 ? o : n < .5 ? Math.PI - o : n < .75 ? Math.PI + o : -o
                    })(o, n), a = (d = s, (c = o) * (l = n) / Math.sqrt((l * Math.cos(d)) ** 2 + (c * Math.sin(d)) ** 2)), r = i ? a * Math.sqrt(Math.random()) : a;
                    var c, l, d;
                    return {
                        x: t.x + r * Math.cos(s),
                        y: t.y + r * Math.sin(s)
                    }
                }
            }
        },
        30460: function(t, e) {
            "use strict";

            function i(t, e) {
                return t + e * (Math.random() - .5)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SquareShape = void 0;
            e.SquareShape = class {
                randomPosition(t, e, o) {
                    if (o) return {
                        x: i(t.x, e.x),
                        y: i(t.y, e.y)
                    }; {
                        const i = e.x / 2,
                            o = e.y / 2,
                            n = Math.floor(4 * Math.random()),
                            s = 2 * (Math.random() - .5);
                        switch (n) {
                            case 0:
                                return {
                                    x: t.x + s * i,
                                    y: t.y - o
                                };
                            case 1:
                                return {
                                    x: t.x - i,
                                    y: t.y + s * o
                                };
                            case 2:
                                return {
                                    x: t.x + s * i,
                                    y: t.y + o
                                };
                            case 3:
                            default:
                                return {
                                    x: t.x + i,
                                    y: t.y + s * o
                                }
                        }
                    }
                }
            }
        },
        84339: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadEmittersPlugin = void 0;
            const s = i(97373),
                a = i(40676),
                r = i(4737),
                c = i(48327),
                l = i(57579),
                d = i(63969),
                u = i(30460);
            class h {
                constructor() {
                    this.id = "emitters"
                }
                getPlugin(t) {
                    return new a.Emitters(t)
                }
                needsPlugin(t) {
                    var e, i, o;
                    if (void 0 === t) return !1;
                    const n = t.emitters;
                    return n instanceof Array && !!n.length || void 0 !== n || !!(null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) && (0, s.isInArray)(r.EmitterClickMode.emitter, t.interactivity.events.onClick.mode)
                }
                loadOptions(t, e) {
                    var i, o;
                    if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                    const n = t;
                    if (null === e || void 0 === e ? void 0 : e.emitters)
                        if ((null === e || void 0 === e ? void 0 : e.emitters) instanceof Array) n.emitters = null === e || void 0 === e ? void 0 : e.emitters.map((t => {
                            const e = new c.Emitter;
                            return e.load(t), e
                        }));
                        else {
                            let t = n.emitters;
                            void 0 === (null === t || void 0 === t ? void 0 : t.load) && (n.emitters = t = new c.Emitter), t.load(null === e || void 0 === e ? void 0 : e.emitters)
                        }
                    const s = null === (o = null === (i = null === e || void 0 === e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.emitters;
                    if (s)
                        if (s instanceof Array) n.interactivity.modes.emitters = s.map((t => {
                            const e = new c.Emitter;
                            return e.load(t), e
                        }));
                        else {
                            let t = n.interactivity.modes.emitters;
                            void 0 === (null === t || void 0 === t ? void 0 : t.load) && (n.interactivity.modes.emitters = t = new c.Emitter), t.load(s)
                        }
                }
            }
            e.loadEmittersPlugin = async function(t) {
                const e = new h;
                await t.addPlugin(e), t.addEmitterShape || (t.addEmitterShape = (t, e) => {
                    l.ShapeManager.addShape(t, e)
                }), t.addEmitterShape(r.EmitterShapeType.circle, new d.CircleShape), t.addEmitterShape(r.EmitterShapeType.square, new u.SquareShape)
            }, n(i(14685), e)
        },
        19799: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.InlineArrangement = void 0,
                function(t) {
                    t.equidistant = "equidistant", t.onePerPoint = "one-per-point", t.perPoint = "per-point", t.randomLength = "random-length", t.randomPoint = "random-point"
                }(e.InlineArrangement || (e.InlineArrangement = {}))
        },
        53673: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.MoveType = void 0,
                function(t) {
                    t.path = "path", t.radius = "radius"
                }(e.MoveType || (e.MoveType = {}))
        },
        61740: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Type = void 0,
                function(t) {
                    t.inline = "inline", t.inside = "inside", t.outside = "outside", t.none = "none"
                }(e.Type || (e.Type = {}))
        },
        39361: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(19799), e), n(i(53673), e), n(i(61740), e)
        },
        70601: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Draw = void 0;
            const o = i(3623),
                n = i(3151);
            e.Draw = class {
                constructor() {
                    this.enable = !1, this.stroke = new o.DrawStroke
                }
                get lineWidth() {
                    return this.stroke.width
                }
                set lineWidth(t) {
                    this.stroke.width = t
                }
                get lineColor() {
                    return this.stroke.color
                }
                set lineColor(t) {
                    this.stroke.color = n.OptionsColor.create(this.stroke.color, t)
                }
                load(t) {
                    var e;
                    if (void 0 !== t) {
                        void 0 !== t.enable && (this.enable = t.enable);
                        const i = null !== (e = t.stroke) && void 0 !== e ? e : {
                            color: t.lineColor,
                            width: t.lineWidth
                        };
                        this.stroke.load(i)
                    }
                }
            }
        },
        3623: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DrawStroke = void 0;
            const o = i(3151),
                n = i(97373);
            e.DrawStroke = class {
                constructor() {
                    this.color = new o.OptionsColor, this.width = .5, this.opacity = 1
                }
                load(t) {
                    var e;
                    void 0 !== t && (this.color = o.OptionsColor.create(this.color, t.color), "string" === typeof this.color.value && (this.opacity = null !== (e = (0, n.stringToAlpha)(this.color.value)) && void 0 !== e ? e : this.opacity), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width))
                }
            }
        },
        73642: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Inline = void 0;
            const o = i(39361);
            e.Inline = class {
                constructor() {
                    this.arrangement = o.InlineArrangement.onePerPoint
                }
                load(t) {
                    void 0 !== t && void 0 !== t.arrangement && (this.arrangement = t.arrangement)
                }
            }
        },
        79617: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LocalSvg = void 0;
            e.LocalSvg = class {
                constructor() {
                    this.path = [], this.size = {
                        height: 0,
                        width: 0
                    }
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.path && (this.path = t.path), void 0 !== t.size && (void 0 !== t.size.width && (this.size.width = t.size.width), void 0 !== t.size.height && (this.size.height = t.size.height)))
                }
            }
        },
        18555: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Move = void 0;
            const o = i(39361);
            e.Move = class {
                constructor() {
                    this.radius = 10, this.type = o.MoveType.path
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.type && (this.type = t.type))
                }
            }
        },
        68212: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PolygonMask = void 0;
            const o = i(39361),
                n = i(70601),
                s = i(18555),
                a = i(73642),
                r = i(79617),
                c = i(97373);
            e.PolygonMask = class {
                constructor() {
                    this.draw = new n.Draw, this.enable = !1, this.inline = new a.Inline, this.move = new s.Move, this.scale = 1, this.type = o.Type.none
                }
                get inlineArrangement() {
                    return this.inline.arrangement
                }
                set inlineArrangement(t) {
                    this.inline.arrangement = t
                }
                load(t) {
                    var e;
                    if (void 0 !== t) {
                        this.draw.load(t.draw);
                        const i = null !== (e = t.inline) && void 0 !== e ? e : {
                            arrangement: t.inlineArrangement
                        };
                        void 0 !== i && this.inline.load(i), this.move.load(t.move), void 0 !== t.scale && (this.scale = t.scale), void 0 !== t.type && (this.type = t.type), void 0 !== t.enable ? this.enable = t.enable : this.enable = this.type !== o.Type.none, void 0 !== t.url && (this.url = t.url), void 0 !== t.data && ("string" === typeof t.data ? this.data = t.data : (this.data = new r.LocalSvg, this.data.load(t.data))), void 0 !== t.position && (this.position = (0, c.deepExtend)({}, t.position))
                    }
                }
            }
        },
        75765: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PolygonMaskInstance = void 0;
            const o = i(39361),
                n = i(97373),
                s = i(68212),
                a = i(26331),
                r = i(94015);
            e.PolygonMaskInstance = class {
                constructor(t) {
                    this.container = t, this.dimension = {
                        height: 0,
                        width: 0
                    }, this.path2DSupported = !!window.Path2D, this.options = new s.PolygonMask, this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio
                }
                async initAsync(t) {
                    this.options.load(null === t || void 0 === t ? void 0 : t.polygon);
                    const e = this.options;
                    this.polygonMaskMoveRadius = e.move.radius * this.container.retina.pixelRatio, e.enable && await this.initRawData()
                }
                resize() {
                    const t = this.container,
                        e = this.options;
                    e.enable && e.type !== o.Type.none && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout((async () => {
                        await this.initRawData(!0), t.particles.redraw()
                    }), 250))
                }
                stop() {
                    delete this.raw, delete this.paths
                }
                particlesInitialization() {
                    const t = this.options;
                    return !(!t.enable || t.type !== o.Type.inline || t.inline.arrangement !== o.InlineArrangement.onePerPoint && t.inline.arrangement !== o.InlineArrangement.perPoint) && (this.drawPoints(), !0)
                }
                particlePosition(t) {
                    var e, i;
                    if (this.options.enable && (null !== (i = null === (e = this.raw) || void 0 === e ? void 0 : e.length) && void 0 !== i ? i : 0) > 0) return (0, n.deepExtend)({}, t || this.randomPoint())
                }
                particleBounce(t, e, i) {
                    return this.polygonBounce(t, e, i)
                }
                clickPositionValid(t) {
                    const e = this.options;
                    return e.enable && e.type !== o.Type.none && e.type !== o.Type.inline && this.checkInsidePolygon(t)
                }
                draw(t) {
                    var e;
                    if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length)) return;
                    const i = this.options,
                        o = i.draw;
                    if (!i.enable || !o.enable) return;
                    const n = this.raw;
                    for (const s of this.paths) {
                        const e = s.path2d,
                            i = this.path2DSupported;
                        t && (i && e && this.offset ? (0, r.drawPolygonMaskPath)(t, e, o.stroke, this.offset) : n && (0, r.drawPolygonMask)(t, n, o.stroke))
                    }
                }
                polygonBounce(t, e, i) {
                    const s = this.options;
                    if (!this.raw || !s.enable || i !== a.OutModeDirection.top) return !1;
                    if (s.type === o.Type.inside || s.type === o.Type.outside) {
                        let e, i, o;
                        const s = t.getPosition(),
                            a = t.getRadius();
                        for (let c = 0, l = this.raw.length - 1; c < this.raw.length; l = c++) {
                            const d = this.raw[c],
                                u = this.raw[l];
                            e = (0, r.calcClosestPtOnSegment)(d, u, s);
                            const h = (0, n.getDistances)(s, e);
                            if ([i, o] = [h.dx, h.dy], h.distance < a) return (0, r.segmentBounce)(d, u, t.velocity), !0
                        }
                        if (e && void 0 !== i && void 0 !== o && !this.checkInsidePolygon(s)) {
                            const i = {
                                x: 1,
                                y: 1
                            };
                            return t.position.x >= e.x && (i.x = -1), t.position.y >= e.y && (i.y = -1), t.position.x = e.x + 2 * a * i.x, t.position.y = e.y + 2 * a * i.y, t.velocity.mult(-1), !0
                        }
                    } else if (s.type === o.Type.inline && t.initialPosition) {
                        if ((0, n.getDistance)(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius) return t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y, !0
                    }
                    return !1
                }
                checkInsidePolygon(t) {
                    var e, i;
                    const s = this.container,
                        a = this.options;
                    if (!a.enable || a.type === o.Type.none || a.type === o.Type.inline) return !0;
                    if (!this.raw) throw new Error(n.Constants.noPolygonFound);
                    const r = s.canvas.size,
                        c = null !== (e = null === t || void 0 === t ? void 0 : t.x) && void 0 !== e ? e : Math.random() * r.width,
                        l = null !== (i = null === t || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : Math.random() * r.height;
                    let d = !1;
                    for (let o = 0, n = this.raw.length - 1; o < this.raw.length; n = o++) {
                        const t = this.raw[o],
                            e = this.raw[n];
                        t.y > l !== e.y > l && c < (e.x - t.x) * (l - t.y) / (e.y - t.y) + t.x && (d = !d)
                    }
                    return a.type === o.Type.inside ? d : a.type === o.Type.outside && !d
                }
                parseSvgPath(t, e) {
                    var i, o, n;
                    const s = null !== e && void 0 !== e && e;
                    if (void 0 !== this.paths && !s) return this.raw;
                    const a = this.container,
                        c = this.options,
                        l = (new DOMParser).parseFromString(t, "image/svg+xml"),
                        d = l.getElementsByTagName("svg")[0];
                    let u = d.getElementsByTagName("path");
                    u.length || (u = l.getElementsByTagName("path")), this.paths = [];
                    for (let r = 0; r < u.length; r++) {
                        const t = u.item(r);
                        t && this.paths.push({
                            element: t,
                            length: t.getTotalLength()
                        })
                    }
                    const h = a.retina.pixelRatio,
                        p = c.scale / h;
                    this.dimension.width = parseFloat(null !== (i = d.getAttribute("width")) && void 0 !== i ? i : "0") * p, this.dimension.height = parseFloat(null !== (o = d.getAttribute("height")) && void 0 !== o ? o : "0") * p;
                    const v = null !== (n = c.position) && void 0 !== n ? n : {
                        x: 50,
                        y: 50
                    };
                    return this.offset = {
                        x: a.canvas.size.width * v.x / (100 * h) - this.dimension.width / 2,
                        y: a.canvas.size.height * v.y / (100 * h) - this.dimension.height / 2
                    }, (0, r.parsePaths)(this.paths, p, this.offset)
                }
                async downloadSvgPath(t, e) {
                    const i = this.options,
                        o = t || i.url,
                        n = null !== e && void 0 !== e && e;
                    if (!o || void 0 !== this.paths && !n) return this.raw;
                    const s = await fetch(o);
                    if (!s.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    return this.parseSvgPath(await s.text(), e)
                }
                drawPoints() {
                    if (this.raw)
                        for (const t of this.raw) this.container.particles.addParticle({
                            x: t.x,
                            y: t.y
                        })
                }
                randomPoint() {
                    const t = this.container,
                        e = this.options;
                    let i;
                    if (e.type === o.Type.inline) switch (e.inline.arrangement) {
                        case o.InlineArrangement.randomPoint:
                            i = this.getRandomPoint();
                            break;
                        case o.InlineArrangement.randomLength:
                            i = this.getRandomPointByLength();
                            break;
                        case o.InlineArrangement.equidistant:
                            i = this.getEquidistantPointByIndex(t.particles.count);
                            break;
                        case o.InlineArrangement.onePerPoint:
                        case o.InlineArrangement.perPoint:
                        default:
                            i = this.getPointByIndex(t.particles.count)
                    } else i = {
                        x: Math.random() * t.canvas.size.width,
                        y: Math.random() * t.canvas.size.height
                    };
                    return this.checkInsidePolygon(i) ? i : this.randomPoint()
                }
                getRandomPoint() {
                    if (!this.raw || !this.raw.length) throw new Error(n.Constants.noPolygonDataLoaded);
                    const t = (0, n.itemFromArray)(this.raw);
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
                getRandomPointByLength() {
                    var t, e, i;
                    const o = this.options;
                    if (!this.raw || !this.raw.length || !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)) throw new Error(n.Constants.noPolygonDataLoaded);
                    const s = (0, n.itemFromArray)(this.paths),
                        a = Math.floor(Math.random() * s.length) + 1,
                        r = s.element.getPointAtLength(a);
                    return {
                        x: r.x * o.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) || 0),
                        y: r.y * o.scale + ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) || 0)
                    }
                }
                getEquidistantPointByIndex(t) {
                    var e, i, o, s, a, r, c;
                    const l = this.container.actualOptions,
                        d = this.options;
                    if (!this.raw || !this.raw.length || !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)) throw new Error(n.Constants.noPolygonDataLoaded);
                    let u, h = 0;
                    const p = this.paths.reduce(((t, e) => t + e.length), 0) / l.particles.number.value;
                    for (const n of this.paths) {
                        const e = p * t - h;
                        if (e <= n.length) {
                            u = n.element.getPointAtLength(e);
                            break
                        }
                        h += n.length
                    }
                    return {
                        x: (null !== (i = null === u || void 0 === u ? void 0 : u.x) && void 0 !== i ? i : 0) * d.scale + (null !== (s = null === (o = this.offset) || void 0 === o ? void 0 : o.x) && void 0 !== s ? s : 0),
                        y: (null !== (a = null === u || void 0 === u ? void 0 : u.y) && void 0 !== a ? a : 0) * d.scale + (null !== (c = null === (r = this.offset) || void 0 === r ? void 0 : r.y) && void 0 !== c ? c : 0)
                    }
                }
                getPointByIndex(t) {
                    if (!this.raw || !this.raw.length) throw new Error(n.Constants.noPolygonDataLoaded);
                    const e = this.raw[t % this.raw.length];
                    return {
                        x: e.x,
                        y: e.y
                    }
                }
                createPath2D() {
                    var t, e;
                    const i = this.options;
                    if (this.path2DSupported && (null === (t = this.paths) || void 0 === t ? void 0 : t.length))
                        for (const o of this.paths) {
                            const t = null === (e = o.element) || void 0 === e ? void 0 : e.getAttribute("d");
                            if (t) {
                                const e = new Path2D(t),
                                    n = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
                                    s = new Path2D,
                                    a = n.scale(i.scale);
                                s.addPath ? (s.addPath(e, a), o.path2d = s) : delete o.path2d
                            } else delete o.path2d;
                            !o.path2d && this.raw && (o.path2d = new Path2D, o.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach(((t, e) => {
                                var i;
                                e > 0 && (null === (i = o.path2d) || void 0 === i || i.lineTo(t.x, t.y))
                            })), o.path2d.closePath())
                        }
                }
                async initRawData(t) {
                    const e = this.options;
                    if (e.url) this.raw = await this.downloadSvgPath(e.url, t);
                    else if (e.data) {
                        const i = e.data;
                        let o;
                        if ("string" !== typeof i) {
                            const t = i.path instanceof Array ? i.path.map((t => `<path d="${t}" />`)).join("") : `<path d="${i.path}" />`;
                            o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${i.size.width}" height="${i.size.height}">${t}</svg>`
                        } else o = i;
                        this.raw = this.parseSvgPath(o, t)
                    }
                    this.createPath2D()
                }
            }
        },
        36031: function() {
            "use strict";
            ! function() {
                try {
                    if ("undefined" === typeof window) return;
                    "SVGPathSeg" in window || (window.SVGPathSeg = function(t, e, i) {
                        this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = i
                    }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function() {
                        this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
                    }, window.SVGPathSegClosePath = function(t) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t)
                    }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function() {
                        return "[object SVGPathSegClosePath]"
                    }, window.SVGPathSegClosePath.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter
                    }, window.SVGPathSegClosePath.prototype.clone = function() {
                        return new window.SVGPathSegClosePath(void 0)
                    }, window.SVGPathSegMovetoAbs = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = i
                    }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function() {
                        return "[object SVGPathSegMovetoAbs]"
                    }, window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegMovetoAbs.prototype.clone = function() {
                        return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegMovetoRel = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = i
                    }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function() {
                        return "[object SVGPathSegMovetoRel]"
                    }, window.SVGPathSegMovetoRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegMovetoRel.prototype.clone = function() {
                        return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoAbs = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = i
                    }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function() {
                        return "[object SVGPathSegLinetoAbs]"
                    }, window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegLinetoAbs.prototype.clone = function() {
                        return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoRel = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = i
                    }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function() {
                        return "[object SVGPathSegLinetoRel]"
                    }, window.SVGPathSegLinetoRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegLinetoRel.prototype.clone = function() {
                        return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoCubicAbs = function(t, e, i, o, n, s, a) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n, this._x2 = s, this._y2 = a
                    }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoCubicAbs]"
                    }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
                    }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                        get: function() {
                            return this._x1
                        },
                        set: function(t) {
                            this._x1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                        get: function() {
                            return this._y1
                        },
                        set: function(t) {
                            this._y1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                        get: function() {
                            return this._x2
                        },
                        set: function(t) {
                            this._x2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                        get: function() {
                            return this._y2
                        },
                        set: function(t) {
                            this._y2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoCubicRel = function(t, e, i, o, n, s, a) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n, this._x2 = s, this._y2 = a
                    }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoCubicRel]"
                    }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
                    }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                        get: function() {
                            return this._x1
                        },
                        set: function(t) {
                            this._x1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                        get: function() {
                            return this._y1
                        },
                        set: function(t) {
                            this._y1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                        get: function() {
                            return this._x2
                        },
                        set: function(t) {
                            this._x2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                        get: function() {
                            return this._y2
                        },
                        set: function(t) {
                            this._y2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoQuadraticAbs = function(t, e, i, o, n) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n
                    }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoQuadraticAbs]"
                    }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
                    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                        get: function() {
                            return this._x1
                        },
                        set: function(t) {
                            this._x1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                        get: function() {
                            return this._y1
                        },
                        set: function(t) {
                            this._y1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoQuadraticRel = function(t, e, i, o, n) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n
                    }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoQuadraticRel]"
                    }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
                    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                        get: function() {
                            return this._x1
                        },
                        set: function(t) {
                            this._x1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                        get: function() {
                            return this._y1
                        },
                        set: function(t) {
                            this._y1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegArcAbs = function(t, e, i, o, n, s, a, r) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = i, this._r1 = o, this._r2 = n, this._angle = s, this._largeArcFlag = a, this._sweepFlag = r
                    }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function() {
                        return "[object SVGPathSegArcAbs]"
                    }, window.SVGPathSegArcAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
                    }, window.SVGPathSegArcAbs.prototype.clone = function() {
                        return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
                    }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                        get: function() {
                            return this._r1
                        },
                        set: function(t) {
                            this._r1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                        get: function() {
                            return this._r2
                        },
                        set: function(t) {
                            this._r2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                        get: function() {
                            return this._angle
                        },
                        set: function(t) {
                            this._angle = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                        get: function() {
                            return this._largeArcFlag
                        },
                        set: function(t) {
                            this._largeArcFlag = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                        get: function() {
                            return this._sweepFlag
                        },
                        set: function(t) {
                            this._sweepFlag = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegArcRel = function(t, e, i, o, n, s, a, r) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = i, this._r1 = o, this._r2 = n, this._angle = s, this._largeArcFlag = a, this._sweepFlag = r
                    }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function() {
                        return "[object SVGPathSegArcRel]"
                    }, window.SVGPathSegArcRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
                    }, window.SVGPathSegArcRel.prototype.clone = function() {
                        return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
                    }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                        get: function() {
                            return this._r1
                        },
                        set: function(t) {
                            this._r1 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                        get: function() {
                            return this._r2
                        },
                        set: function(t) {
                            this._r2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                        get: function() {
                            return this._angle
                        },
                        set: function(t) {
                            this._angle = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                        get: function() {
                            return this._largeArcFlag
                        },
                        set: function(t) {
                            this._largeArcFlag = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                        get: function() {
                            return this._sweepFlag
                        },
                        set: function(t) {
                            this._sweepFlag = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoHorizontalAbs = function(t, e) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e
                    }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                        return "[object SVGPathSegLinetoHorizontalAbs]"
                    }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x
                    }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                        return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
                    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoHorizontalRel = function(t, e) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e
                    }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                        return "[object SVGPathSegLinetoHorizontalRel]"
                    }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x
                    }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                        return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
                    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoVerticalAbs = function(t, e) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e
                    }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                        return "[object SVGPathSegLinetoVerticalAbs]"
                    }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._y
                    }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                        return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
                    }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegLinetoVerticalRel = function(t, e) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e
                    }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                        return "[object SVGPathSegLinetoVerticalRel]"
                    }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._y
                    }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                        return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
                    }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoCubicSmoothAbs = function(t, e, i, o, n) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = i, this._x2 = o, this._y2 = n
                    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoCubicSmoothAbs]"
                    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
                    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                        get: function() {
                            return this._x2
                        },
                        set: function(t) {
                            this._x2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                        get: function() {
                            return this._y2
                        },
                        set: function(t) {
                            this._y2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoCubicSmoothRel = function(t, e, i, o, n) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = i, this._x2 = o, this._y2 = n
                    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoCubicSmoothRel]"
                    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
                    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                        get: function() {
                            return this._x2
                        },
                        set: function(t) {
                            this._x2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                        get: function() {
                            return this._y2
                        },
                        set: function(t) {
                            this._y2 = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = i
                    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
                    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathSegCurvetoQuadraticSmoothRel = function(t, e, i) {
                        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = i
                    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                        return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
                    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
                    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y = t, this._segmentChanged()
                        },
                        enumerable: !0
                    }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                        return new window.SVGPathSegClosePath(void 0)
                    }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(t, e) {
                        return new window.SVGPathSegMovetoAbs(void 0, t, e)
                    }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(t, e) {
                        return new window.SVGPathSegMovetoRel(void 0, t, e)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(t, e) {
                        return new window.SVGPathSegLinetoAbs(void 0, t, e)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(t, e) {
                        return new window.SVGPathSegLinetoRel(void 0, t, e)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(t, e, i, o, n, s) {
                        return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, i, o, n, s)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(t, e, i, o, n, s) {
                        return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, i, o, n, s)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(t, e, i, o) {
                        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, i, o)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(t, e, i, o) {
                        return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, i, o)
                    }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(t, e, i, o, n, s, a) {
                        return new window.SVGPathSegArcAbs(void 0, t, e, i, o, n, s, a)
                    }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function(t, e, i, o, n, s, a) {
                        return new window.SVGPathSegArcRel(void 0, t, e, i, o, n, s, a)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(t) {
                        return new window.SVGPathSegLinetoHorizontalAbs(void 0, t)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(t) {
                        return new window.SVGPathSegLinetoHorizontalRel(void 0, t)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(t) {
                        return new window.SVGPathSegLinetoVerticalAbs(void 0, t)
                    }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(t) {
                        return new window.SVGPathSegLinetoVerticalRel(void 0, t)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(t, e, i, o) {
                        return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, i, o)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(t, e, i, o) {
                        return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, i, o)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(t, e) {
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e)
                    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(t, e) {
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e)
                    }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function(t) {
                        if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
                        var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        e.setAttribute("d", this.getAttribute("d"));
                        var i = e.pathSegList.numberOfItems - 1;
                        if (i <= 0) return 0;
                        do {
                            if (e.pathSegList.removeItem(i), t > e.getTotalLength()) break;
                            i--
                        } while (i > 0);
                        return i
                    })), "SVGPathSegList" in window && "appendItem" in window.SVGPathSegList.prototype || (window.SVGPathSegList = function(t) {
                        this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                            attributes: !0,
                            attributeFilter: ["d"]
                        }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
                    }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                        get: function() {
                            return this._checkPathSynchronizedToList(), this._list.length
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathSegList.prototype, "length", {
                        get: function() {
                            return this._checkPathSynchronizedToList(), this._list.length
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                        get: function() {
                            return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                        get: function() {
                            return this.pathSegList
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                        get: function() {
                            return this.pathSegList
                        },
                        enumerable: !0
                    }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                        get: function() {
                            return this.pathSegList
                        },
                        enumerable: !0
                    }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                        this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
                    }, window.SVGPathSegList.prototype._updateListFromPathMutations = function(t) {
                        if (this._pathElement) {
                            var e = !1;
                            t.forEach((function(t) {
                                "d" == t.attributeName && (e = !0)
                            })), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
                        }
                    }, window.SVGPathSegList.prototype._writeListToPath = function() {
                        this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
                    }, window.SVGPathSegList.prototype.segmentChanged = function(t) {
                        this._writeListToPath()
                    }, window.SVGPathSegList.prototype.clear = function() {
                        this._checkPathSynchronizedToList(), this._list.forEach((function(t) {
                            t._owningPathSegList = null
                        })), this._list = [], this._writeListToPath()
                    }, window.SVGPathSegList.prototype.initialize = function(t) {
                        return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t
                    }, window.SVGPathSegList.prototype._checkValidIndex = function(t) {
                        if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR"
                    }, window.SVGPathSegList.prototype.getItem = function(t) {
                        return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t]
                    }, window.SVGPathSegList.prototype.insertItemBefore = function(t, e) {
                        return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t
                    }, window.SVGPathSegList.prototype.replaceItem = function(t, e) {
                        return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t
                    }, window.SVGPathSegList.prototype.removeItem = function(t) {
                        this._checkPathSynchronizedToList(), this._checkValidIndex(t);
                        var e = this._list[t];
                        return this._list.splice(t, 1), this._writeListToPath(), e
                    }, window.SVGPathSegList.prototype.appendItem = function(t) {
                        return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t
                    }, window.SVGPathSegList._pathSegArrayAsString = function(t) {
                        var e = "",
                            i = !0;
                        return t.forEach((function(t) {
                            i ? (i = !1, e += t._asPathString()) : e += " " + t._asPathString()
                        })), e
                    }, window.SVGPathSegList.prototype._parsePath = function(t) {
                        if (!t || 0 == t.length) return [];
                        var e = this,
                            i = function() {
                                this.pathSegList = []
                            };
                        i.prototype.appendSegment = function(t) {
                            this.pathSegList.push(t)
                        };
                        var o = function(t) {
                            this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
                        };
                        o.prototype._isCurrentSpace = function() {
                            var t = this._string[this._currentIndex];
                            return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t)
                        }, o.prototype._skipOptionalSpaces = function() {
                            for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                            return this._currentIndex < this._endIndex
                        }, o.prototype._skipOptionalSpacesOrDelimiter = function() {
                            return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
                        }, o.prototype.hasMoreData = function() {
                            return this._currentIndex < this._endIndex
                        }, o.prototype.peekSegmentType = function() {
                            var t = this._string[this._currentIndex];
                            return this._pathSegTypeFromChar(t)
                        }, o.prototype._pathSegTypeFromChar = function(t) {
                            switch (t) {
                                case "Z":
                                case "z":
                                    return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                                case "M":
                                    return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                                case "m":
                                    return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                                case "L":
                                    return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                                case "l":
                                    return window.SVGPathSeg.PATHSEG_LINETO_REL;
                                case "C":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                                case "c":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                                case "Q":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                                case "q":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                                case "A":
                                    return window.SVGPathSeg.PATHSEG_ARC_ABS;
                                case "a":
                                    return window.SVGPathSeg.PATHSEG_ARC_REL;
                                case "H":
                                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                                case "h":
                                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                                case "V":
                                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                                case "v":
                                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                                case "S":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                                case "s":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                                case "T":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                                case "t":
                                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                                default:
                                    return window.SVGPathSeg.PATHSEG_UNKNOWN
                            }
                        }, o.prototype._nextCommandHelper = function(t, e) {
                            return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN
                        }, o.prototype.initialCommandIsMoveTo = function() {
                            if (!this.hasMoreData()) return !0;
                            var t = this.peekSegmentType();
                            return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                        }, o.prototype._parseNumber = function() {
                            var t = 0,
                                e = 0,
                                i = 1,
                                o = 0,
                                n = 1,
                                s = 1,
                                a = this._currentIndex;
                            if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, n = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                                for (var r = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                                if (this._currentIndex != r)
                                    for (var c = this._currentIndex - 1, l = 1; c >= r;) e += l * (this._string.charAt(c--) - "0"), l *= 10;
                                if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                                    if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                                    for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) i *= 10, o += (this._string.charAt(this._currentIndex) - "0") / i, this._currentIndex += 1
                                }
                                if (this._currentIndex != a && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                                    if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, s = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                                    for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                                }
                                var d = e + o;
                                if (d *= n, t && (d *= Math.pow(10, s * t)), a != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), d
                            }
                        }, o.prototype._parseArcFlag = function() {
                            if (!(this._currentIndex >= this._endIndex)) {
                                var t = !1,
                                    e = this._string.charAt(this._currentIndex++);
                                if ("0" == e) t = !1;
                                else {
                                    if ("1" != e) return;
                                    t = !0
                                }
                                return this._skipOptionalSpacesOrDelimiter(), t
                            }
                        }, o.prototype.parseSegment = function() {
                            var t = this._string[this._currentIndex],
                                i = this._pathSegTypeFromChar(t);
                            if (i == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                                if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                                if ((i = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
                            } else this._currentIndex++;
                            switch (this._previousCommand = i, i) {
                                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                    return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                    return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                    return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                    return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                    return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                    return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                    return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                    return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                    return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                    var o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        x2: this._parseNumber(),
                                        y2: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoCubicRel(e, o.x, o.y, o.x1, o.y1, o.x2, o.y2);
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                    o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        x2: this._parseNumber(),
                                        y2: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoCubicAbs(e, o.x, o.y, o.x1, o.y1, o.x2, o.y2);
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    o = {
                                        x2: this._parseNumber(),
                                        y2: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoCubicSmoothRel(e, o.x, o.y, o.x2, o.y2);
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    o = {
                                        x2: this._parseNumber(),
                                        y2: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoCubicSmoothAbs(e, o.x, o.y, o.x2, o.y2);
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                    o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoQuadraticRel(e, o.x, o.y, o.x1, o.y1);
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegCurvetoQuadraticAbs(e, o.x, o.y, o.x1, o.y1);
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());
                                case window.SVGPathSeg.PATHSEG_ARC_REL:
                                    o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        arcAngle: this._parseNumber(),
                                        arcLarge: this._parseArcFlag(),
                                        arcSweep: this._parseArcFlag(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegArcRel(e, o.x, o.y, o.x1, o.y1, o.arcAngle, o.arcLarge, o.arcSweep);
                                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                    o = {
                                        x1: this._parseNumber(),
                                        y1: this._parseNumber(),
                                        arcAngle: this._parseNumber(),
                                        arcLarge: this._parseArcFlag(),
                                        arcSweep: this._parseArcFlag(),
                                        x: this._parseNumber(),
                                        y: this._parseNumber()
                                    };
                                    return new window.SVGPathSegArcAbs(e, o.x, o.y, o.x1, o.y1, o.arcAngle, o.arcLarge, o.arcSweep);
                                default:
                                    throw "Unknown path seg type."
                            }
                        };
                        var n = new i,
                            s = new o(t);
                        if (!s.initialCommandIsMoveTo()) return [];
                        for (; s.hasMoreData();) {
                            var a = s.parseSegment();
                            if (!a) return [];
                            n.appendSegment(a)
                        }
                        return n.pathSegList
                    })
                } catch (t) {
                    console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", t)
                }
            }()
        },
        73737: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
                    return n(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadPolygonMaskPlugin = void 0;
            const a = i(75765),
                r = i(68212),
                c = i(39361),
                l = i(97373);
            class d {
                constructor() {
                    this.id = "polygonMask"
                }
                getPlugin(t) {
                    return new a.PolygonMaskInstance(t)
                }
                needsPlugin(t) {
                    var e, i, o;
                    return null !== (i = null === (e = null === t || void 0 === t ? void 0 : t.polygon) || void 0 === e ? void 0 : e.enable) && void 0 !== i ? i : void 0 !== (null === (o = null === t || void 0 === t ? void 0 : t.polygon) || void 0 === o ? void 0 : o.type) && t.polygon.type !== c.Type.none
                }
                loadOptions(t, e) {
                    if (!this.needsPlugin(e)) return;
                    const i = t;
                    let o = i.polygon;
                    void 0 === (null === o || void 0 === o ? void 0 : o.load) && (i.polygon = o = new r.PolygonMask), o.load(null === e || void 0 === e ? void 0 : e.polygon)
                }
            }
            e.loadPolygonMaskPlugin = async function(t) {
                (0, l.isSsr)() || window.SVGPathSeg || await Promise.resolve().then((() => s(i(36031))));
                const e = new d;
                await t.addPlugin(e)
            }
        },
        94015: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.segmentBounce = e.calcClosestPtOnSegment = e.parsePaths = e.drawPolygonMaskPath = e.drawPolygonMask = void 0;
            const o = i(97373);
            e.drawPolygonMask = function(t, e, i) {
                const n = (0, o.colorToRgb)(i.color);
                if (n) {
                    t.beginPath(), t.moveTo(e[0].x, e[0].y);
                    for (const i of e) t.lineTo(i.x, i.y);
                    t.closePath(), t.strokeStyle = (0, o.getStyleFromRgb)(n), t.lineWidth = i.width, t.stroke()
                }
            }, e.drawPolygonMaskPath = function(t, e, i, n) {
                t.translate(n.x, n.y);
                const s = (0, o.colorToRgb)(i.color);
                s && (t.strokeStyle = (0, o.getStyleFromRgb)(s, i.opacity), t.lineWidth = i.width, t.stroke(e))
            }, e.parsePaths = function(t, e, i) {
                var o;
                const n = [];
                for (const s of t) {
                    const t = s.element.pathSegList,
                        a = null !== (o = null === t || void 0 === t ? void 0 : t.numberOfItems) && void 0 !== o ? o : 0,
                        r = {
                            x: 0,
                            y: 0
                        };
                    for (let o = 0; o < a; o++) {
                        const s = null === t || void 0 === t ? void 0 : t.getItem(o),
                            a = window.SVGPathSeg;
                        switch (null === s || void 0 === s ? void 0 : s.pathSegType) {
                            case a.PATHSEG_MOVETO_ABS:
                            case a.PATHSEG_LINETO_ABS:
                            case a.PATHSEG_CURVETO_CUBIC_ABS:
                            case a.PATHSEG_CURVETO_QUADRATIC_ABS:
                            case a.PATHSEG_ARC_ABS:
                            case a.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                            case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                {
                                    const t = s;r.x = t.x,
                                    r.y = t.y;
                                    break
                                }
                            case a.PATHSEG_LINETO_HORIZONTAL_ABS:
                                r.x = s.x;
                                break;
                            case a.PATHSEG_LINETO_VERTICAL_ABS:
                                r.y = s.y;
                                break;
                            case a.PATHSEG_LINETO_REL:
                            case a.PATHSEG_MOVETO_REL:
                            case a.PATHSEG_CURVETO_CUBIC_REL:
                            case a.PATHSEG_CURVETO_QUADRATIC_REL:
                            case a.PATHSEG_ARC_REL:
                            case a.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                            case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                {
                                    const t = s;r.x += t.x,
                                    r.y += t.y;
                                    break
                                }
                            case a.PATHSEG_LINETO_HORIZONTAL_REL:
                                r.x += s.x;
                                break;
                            case a.PATHSEG_LINETO_VERTICAL_REL:
                                r.y += s.y;
                                break;
                            case a.PATHSEG_UNKNOWN:
                            case a.PATHSEG_CLOSEPATH:
                                continue
                        }
                        n.push({
                            x: r.x * e + i.x,
                            y: r.y * e + i.y
                        })
                    }
                }
                return n
            }, e.calcClosestPtOnSegment = function(t, e, i) {
                const {
                    dx: n,
                    dy: s
                } = (0, o.getDistances)(i, t), {
                    dx: a,
                    dy: r
                } = (0, o.getDistances)(e, t), c = (n * a + s * r) / (a ** 2 + r ** 2);
                let l = t.x + a * c,
                    d = t.y + r * c;
                return c < 0 ? (l = t.x, d = t.y) : c > 1 && (l = e.x, d = e.y), {
                    x: l,
                    y: d,
                    isOnSegment: c >= 0 && c <= 1
                }
            }, e.segmentBounce = function(t, e, i) {
                const {
                    dx: n,
                    dy: s
                } = (0, o.getDistances)(t, e), a = Math.atan2(s, n), r = Math.sin(a), c = -Math.cos(a), l = 2 * (i.x * r + i.y * c);
                i.x -= l * r, i.y -= l * c
            }
        },
        97645: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CircleDrawer = void 0;
            e.CircleDrawer = class {
                getSidesCount() {
                    return 12
                }
                draw(t, e, i) {
                    t.arc(0, 0, i, 0, 2 * Math.PI, !1)
                }
            }
        },
        94472: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadCircleShape = void 0;
            const o = i(97645);
            e.loadCircleShape = async function(t) {
                await t.addShape("circle", new o.CircleDrawer)
            }
        },
        55020: function(t, e, i) {
            "use strict";
            var o, n = this && this.__classPrivateFieldSet || function(t, e, i, o, n) {
                    if ("m" === o) throw new TypeError("Private method is not writable");
                    if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i
                },
                s = this && this.__classPrivateFieldGet || function(t, e, i, o) {
                    if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ImageDrawer = void 0;
            const a = i(97373),
                r = i(26331),
                c = i(87656);
            e.ImageDrawer = class {
                constructor() {
                    o.set(this, void 0), n(this, o, [], "f")
                }
                getSidesCount() {
                    return 12
                }
                getImages(t) {
                    const e = s(this, o, "f").find((e => e.id === t.id));
                    return e || (s(this, o, "f").push({
                        id: t.id,
                        images: []
                    }), this.getImages(t))
                }
                addImage(t, e) {
                    const i = this.getImages(t);
                    null === i || void 0 === i || i.images.push(e)
                }
                async init(t) {
                    await this.loadImagesFromParticlesOptions(t, t.actualOptions.particles), await this.loadImagesFromParticlesOptions(t, t.actualOptions.interactivity.modes.trail.particles);
                    for (const o of t.actualOptions.manualParticles) await this.loadImagesFromParticlesOptions(t, o.options);
                    const e = t.actualOptions;
                    if (e.emitters)
                        if (e.emitters instanceof Array)
                            for (const o of e.emitters) await this.loadImagesFromParticlesOptions(t, o.particles);
                        else await this.loadImagesFromParticlesOptions(t, e.emitters.particles);
                    const i = e.interactivity.modes.emitters;
                    if (i)
                        if (i instanceof Array)
                            for (const o of i) await this.loadImagesFromParticlesOptions(t, o.particles);
                        else await this.loadImagesFromParticlesOptions(t, i.particles)
                }
                destroy() {
                    n(this, o, [], "f")
                }
                async loadImagesFromParticlesOptions(t, e) {
                    var i, n, c;
                    const l = null === e || void 0 === e ? void 0 : e.shape;
                    if (!(null === l || void 0 === l ? void 0 : l.type) || !l.options || !(0, a.isInArray)(r.ShapeType.image, l.type) && !(0, a.isInArray)(r.ShapeType.images, l.type)) return;
                    const d = s(this, o, "f").findIndex((e => e.id === t.id));
                    d >= 0 && s(this, o, "f").splice(d, 1);
                    const u = null !== (i = l.options[r.ShapeType.images]) && void 0 !== i ? i : l.options[r.ShapeType.image];
                    if (u instanceof Array)
                        for (const o of u) await this.loadImageShape(t, o);
                    else await this.loadImageShape(t, u);
                    if (null === e || void 0 === e ? void 0 : e.groups)
                        for (const o in e.groups) {
                            const i = e.groups[o];
                            await this.loadImagesFromParticlesOptions(t, i)
                        }(null === (c = null === (n = null === e || void 0 === e ? void 0 : e.destroy) || void 0 === n ? void 0 : n.split) || void 0 === c ? void 0 : c.particles) && await this.loadImagesFromParticlesOptions(t, null === e || void 0 === e ? void 0 : e.destroy.split.particles)
                }
                async loadImageShape(t, e) {
                    try {
                        const i = e.replaceColor ? c.downloadSvgImage : c.loadImage,
                            o = await i(e.src);
                        o && this.addImage(t, o)
                    } catch (i) {
                        console.warn(`tsParticles error - ${e.src} not found`)
                    }
                }
                draw(t, e, i, o) {
                    var n, s;
                    if (!t) return;
                    const a = e.image,
                        r = null === (n = null === a || void 0 === a ? void 0 : a.data) || void 0 === n ? void 0 : n.element;
                    if (!r) return;
                    const c = null !== (s = null === a || void 0 === a ? void 0 : a.ratio) && void 0 !== s ? s : 1,
                        l = {
                            x: -i,
                            y: -i
                        };
                    (null === a || void 0 === a ? void 0 : a.data.svgData) && (null === a || void 0 === a ? void 0 : a.replaceColor) || (t.globalAlpha = o), t.drawImage(r, l.x, l.y, 2 * i, 2 * i / c), (null === a || void 0 === a ? void 0 : a.data.svgData) && (null === a || void 0 === a ? void 0 : a.replaceColor) || (t.globalAlpha = 1)
                }
                loadShape(t) {
                    var e, i, o, n, s, a, r;
                    if ("image" !== t.shape && "images" !== t.shape) return;
                    const l = this.getImages(t.container).images,
                        d = t.shapeData,
                        u = null !== (e = l.find((t => t.source === d.src))) && void 0 !== e ? e : l[0],
                        h = t.getFillColor();
                    let p;
                    if (!u) return;
                    if (void 0 !== u.svgData && d.replaceColor && h) {
                        const e = (0, c.replaceColorSvg)(u, h, null !== (o = null === (i = t.opacity) || void 0 === i ? void 0 : i.value) && void 0 !== o ? o : 1),
                            s = new Blob([e], {
                                type: "image/svg+xml"
                            }),
                            a = URL || window.URL || window.webkitURL || window,
                            r = a.createObjectURL(s),
                            l = new Image;
                        p = {
                            data: Object.assign(Object.assign({}, u), {
                                svgData: e
                            }),
                            ratio: d.width / d.height,
                            replaceColor: null !== (n = d.replaceColor) && void 0 !== n ? n : d.replace_color,
                            source: d.src
                        }, l.addEventListener("load", (() => {
                            const e = t.image;
                            e && (e.loaded = !0, u.element = l), a.revokeObjectURL(r)
                        })), l.addEventListener("error", (() => {
                            a.revokeObjectURL(r), (0, c.loadImage)(d.src).then((e => {
                                const i = t.image;
                                i && (u.element = null === e || void 0 === e ? void 0 : e.element, i.loaded = !0)
                            }))
                        })), l.src = r
                    } else p = {
                        data: u,
                        loaded: !0,
                        ratio: d.width / d.height,
                        replaceColor: null !== (s = d.replaceColor) && void 0 !== s ? s : d.replace_color,
                        source: d.src
                    };
                    p.ratio || (p.ratio = 1);
                    const v = {
                        image: p,
                        fill: null !== (a = d.fill) && void 0 !== a ? a : t.fill,
                        close: null !== (r = d.close) && void 0 !== r ? r : t.close
                    };
                    t.image = v.image, t.fill = v.fill, t.close = v.close
                }
            }, o = new WeakMap
        },
        87656: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.replaceColorSvg = e.downloadSvgImage = e.loadImage = void 0;
            const o = i(97373);

            function n(t) {
                return new Promise(((e, i) => {
                    if (!t) return void i("Error tsParticles - No image.src");
                    const o = {
                            source: t,
                            type: t.substr(t.length - 3)
                        },
                        n = new Image;
                    n.addEventListener("load", (() => {
                        o.element = n, e(o)
                    })), n.addEventListener("error", (() => {
                        i(`Error tsParticles - loading image: ${t}`)
                    })), n.src = t
                }))
            }
            e.loadImage = n, e.downloadSvgImage = async function(t) {
                if (!t) throw new Error("Error tsParticles - No image.src");
                const e = {
                    source: t,
                    type: t.substr(t.length - 3)
                };
                if ("svg" !== e.type) return n(t);
                const i = await fetch(e.source);
                if (!i.ok) throw new Error("Error tsParticles - Image not found");
                return e.svgData = await i.text(), e
            }, e.replaceColorSvg = function(t, e, i) {
                const {
                    svgData: n
                } = t;
                if (!n) return "";
                if (n.includes("fill")) {
                    const t = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
                    return n.replace(t, (() => (0, o.getStyleFromHsl)(e, i)))
                }
                const s = n.indexOf(">");
                return `${n.substring(0,s)} fill="${(0,o.getStyleFromHsl)(e,i)}"${n.substring(s)}`
            }
        },
        36504: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadImageShape = void 0;
            const o = i(55020);
            e.loadImageShape = async function(t) {
                const e = new o.ImageDrawer;
                await t.addShape("image", e), await t.addShape("images", e)
            }
        },
        54036: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LineDrawer = void 0;
            e.LineDrawer = class {
                getSidesCount() {
                    return 1
                }
                draw(t, e, i) {
                    t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0)
                }
            }
        },
        99193: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadLineShape = void 0;
            const o = i(54036);
            e.loadLineShape = async function(t) {
                await t.addShape("line", new o.LineDrawer)
            }
        },
        93677: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PolygonDrawer = void 0;
            const o = i(93388);
            class n extends o.PolygonDrawerBase {
                getSidesData(t, e) {
                    var i, o;
                    const n = t.shapeData,
                        s = null !== (o = null !== (i = null === n || void 0 === n ? void 0 : n.sides) && void 0 !== i ? i : null === n || void 0 === n ? void 0 : n.nb_sides) && void 0 !== o ? o : 5;
                    return {
                        count: {
                            denominator: 1,
                            numerator: s
                        },
                        length: 2.66 * e / (s / 3)
                    }
                }
                getCenter(t, e) {
                    return {
                        x: -e / (this.getSidesCount(t) / 3.5),
                        y: -e / .76
                    }
                }
            }
            e.PolygonDrawer = n
        },
        93388: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PolygonDrawerBase = void 0;
            e.PolygonDrawerBase = class {
                getSidesCount(t) {
                    var e, i;
                    const o = t.shapeData;
                    return null !== (i = null !== (e = null === o || void 0 === o ? void 0 : o.sides) && void 0 !== e ? e : null === o || void 0 === o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5
                }
                draw(t, e, i) {
                    const o = this.getCenter(e, i),
                        n = this.getSidesData(e, i),
                        s = n.count.numerator * n.count.denominator,
                        a = n.count.numerator / n.count.denominator,
                        r = 180 * (a - 2) / a,
                        c = Math.PI - Math.PI * r / 180;
                    if (t) {
                        t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
                        for (let e = 0; e < s; e++) t.lineTo(n.length, 0), t.translate(n.length, 0), t.rotate(c)
                    }
                }
            }
        },
        48729: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TriangleDrawer = void 0;
            const o = i(93388);
            class n extends o.PolygonDrawerBase {
                getSidesCount() {
                    return 3
                }
                getSidesData(t, e) {
                    return {
                        count: {
                            denominator: 2,
                            numerator: 3
                        },
                        length: 2 * e
                    }
                }
                getCenter(t, e) {
                    return {
                        x: -e,
                        y: e / 1.66
                    }
                }
            }
            e.TriangleDrawer = n
        },
        302: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadPolygonShape = e.loadTriangleShape = e.loadGenericPolygonShape = void 0;
            const o = i(93677),
                n = i(48729);
            async function s(t) {
                await t.addShape("polygon", new o.PolygonDrawer)
            }
            async function a(t) {
                await t.addShape("triangle", new n.TriangleDrawer)
            }
            e.loadGenericPolygonShape = s, e.loadTriangleShape = a, e.loadPolygonShape = async function(t) {
                await s(t), await a(t)
            }
        },
        68765: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SquareDrawer = void 0;
            const i = Math.sqrt(2);
            e.SquareDrawer = class {
                getSidesCount() {
                    return 4
                }
                draw(t, e, o) {
                    t.rect(-o / i, -o / i, 2 * o / i, 2 * o / i)
                }
            }
        },
        12179: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadSquareShape = void 0;
            const o = i(68765);
            e.loadSquareShape = async function(t) {
                const e = new o.SquareDrawer;
                await t.addShape("edge", e), await t.addShape("square", e)
            }
        },
        11796: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StarDrawer = void 0;
            e.StarDrawer = class {
                getSidesCount(t) {
                    var e, i;
                    const o = t.shapeData;
                    return null !== (i = null !== (e = null === o || void 0 === o ? void 0 : o.sides) && void 0 !== e ? e : null === o || void 0 === o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5
                }
                draw(t, e, i) {
                    var o;
                    const n = e.shapeData,
                        s = this.getSidesCount(e),
                        a = null !== (o = null === n || void 0 === n ? void 0 : n.inset) && void 0 !== o ? o : 2;
                    t.moveTo(0, 0 - i);
                    for (let r = 0; r < s; r++) t.rotate(Math.PI / s), t.lineTo(0, 0 - i * a), t.rotate(Math.PI / s), t.lineTo(0, 0 - i)
                }
            }
        },
        93806: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadStarShape = void 0;
            const o = i(11796);
            e.loadStarShape = async function(t) {
                await t.addShape("star", new o.StarDrawer)
            }
        },
        81608: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TextDrawer = e.validTypes = void 0;
            const o = i(97373);
            e.validTypes = ["text", "character", "char"];
            e.TextDrawer = class {
                getSidesCount() {
                    return 12
                }
                async init(t) {
                    const i = t.actualOptions;
                    if (e.validTypes.find((t => (0, o.isInArray)(t, i.particles.shape.type)))) {
                        const t = e.validTypes.map((t => i.particles.shape.options[t])).find((t => !!t));
                        if (t instanceof Array) {
                            const e = [];
                            for (const i of t) e.push((0, o.loadFont)(i));
                            await Promise.allSettled(e)
                        } else void 0 !== t && await (0, o.loadFont)(t)
                    }
                }
                draw(t, e, i, n) {
                    var s, a, r;
                    const c = e.shapeData;
                    if (void 0 === c) return;
                    const l = c.value;
                    if (void 0 === l) return;
                    const d = e;
                    void 0 === d.text && (d.text = l instanceof Array ? (0, o.itemFromArray)(l, e.randomIndexData) : l);
                    const u = d.text,
                        h = null !== (s = c.style) && void 0 !== s ? s : "",
                        p = null !== (a = c.weight) && void 0 !== a ? a : "400",
                        v = 2 * Math.round(i),
                        y = null !== (r = c.font) && void 0 !== r ? r : "Verdana",
                        f = e.fill,
                        g = u.length * i / 2;
                    t.font = `${h} ${p} ${v}px "${y}"`;
                    const b = {
                        x: -g,
                        y: i / 2
                    };
                    t.globalAlpha = n, f ? t.fillText(u, b.x, b.y) : t.strokeText(u, b.x, b.y), t.globalAlpha = 1
                }
            }
        },
        44482: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadTextShape = void 0;
            const o = i(81608);
            e.loadTextShape = async function(t) {
                const e = new o.TextDrawer;
                for (const i of o.validTypes) await t.addShape(i, e)
            }
        },
        57537: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        21613: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        68921: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        78791: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        71691: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        86862: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        45008: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(21613), e), n(i(68921), e), n(i(78791), e), n(i(71691), e), n(i(86862), e), n(i(57537), e)
        },
        9011: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AngleUpdater = void 0;
            const o = i(26331),
                n = i(97373);
            e.AngleUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    const e = t.options.rotate;
                    t.rotate = {
                        enable: e.animation.enable,
                        value: (0, n.getRangeValue)(e.value) * Math.PI / 180
                    };
                    let i = e.direction;
                    if (i === o.RotateDirection.random) {
                        i = Math.floor(2 * Math.random()) > 0 ? o.RotateDirection.counterClockwise : o.RotateDirection.clockwise
                    }
                    switch (i) {
                        case o.RotateDirection.counterClockwise:
                        case "counterClockwise":
                            t.rotate.status = o.AnimationStatus.decreasing;
                            break;
                        case o.RotateDirection.clockwise:
                            t.rotate.status = o.AnimationStatus.increasing
                    }
                    const s = t.options.rotate.animation;
                    s.enable && (t.rotate.velocity = s.speed / 360 * this.container.retina.reduceFactor, s.sync || (t.rotate.velocity *= Math.random()))
                }
                isEnabled(t) {
                    const e = t.options.rotate,
                        i = e.animation;
                    return !t.destroyed && !t.spawning && !e.path && i.enable
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i;
                        const n = t.rotate;
                        if (!n) return;
                        const s = t.options.rotate.animation,
                            a = (null !== (i = n.velocity) && void 0 !== i ? i : 0) * e.factor,
                            r = 2 * Math.PI;
                        if (s.enable) switch (n.status) {
                            case o.AnimationStatus.increasing:
                                n.value += a, n.value > r && (n.value -= r);
                                break;
                            case o.AnimationStatus.decreasing:
                            default:
                                n.value -= a, n.value < 0 && (n.value += r)
                        }
                    }(t, e)
                }
            }
        },
        34441: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadAngleUpdater = void 0;
            const o = i(9011);
            e.loadAngleUpdater = async function(t) {
                await t.addParticleUpdater("angle", (t => new o.AngleUpdater(t)))
            }
        },
        76293: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ColorUpdater = void 0;
            const o = i(26331),
                n = i(97373);

            function s(t, e, i, s, a) {
                var r;
                const c = e;
                if (!c || !i.enable) return;
                const l = (0, n.randomInRange)(i.offset),
                    d = (null !== (r = e.velocity) && void 0 !== r ? r : 0) * t.factor + 3.6 * l;
                a && c.status !== o.AnimationStatus.increasing ? (c.value -= d, c.value < 0 && (c.status = o.AnimationStatus.increasing, c.value += c.value)) : (c.value += d, a && c.value > s && (c.status = o.AnimationStatus.decreasing, c.value -= c.value % s)), c.value > s && (c.value %= s)
            }
            e.ColorUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    const e = (0, n.colorToHsl)(t.options.color, t.id, t.options.reduceDuplicates);
                    e && (t.color = (0, n.getHslAnimationFromHsl)(e, t.options.color.animation, this.container.retina.reduceFactor))
                }
                isEnabled(t) {
                    var e, i, o;
                    const n = t.options.color.animation;
                    return !t.destroyed && !t.spawning && (void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) && n.h.enable || void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) && n.s.enable || void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.l.value) && n.l.enable)
                }
                update(t, e) {
                    ! function(t, e) {
                        var i, o, n;
                        const a = t.options.color.animation;
                        void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.h) && s(e, t.color.h, a.h, 360, !1), void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.s) && s(e, t.color.s, a.s, 100, !0), void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.l) && s(e, t.color.l, a.l, 100, !0)
                    }(t, e)
                }
            }
        },
        74784: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadColorUpdater = void 0;
            const o = i(76293);
            e.loadColorUpdater = async function(t) {
                await t.addParticleUpdater("color", (t => new o.ColorUpdater(t)))
            }
        },
        48152: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LifeUpdater = void 0;
            const o = i(97373);
            e.LifeUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init() {}
                isEnabled(t) {
                    return !t.destroyed
                }
                update(t, e) {
                    if (!this.isEnabled(t)) return;
                    const i = t.life;
                    let n = !1;
                    if (t.spawning) {
                        if (i.delayTime += e.value, !(i.delayTime >= t.life.delay)) return;
                        n = !0, t.spawning = !1, i.delayTime = 0, i.time = 0
                    }
                    if (-1 === i.duration) return;
                    if (t.spawning) return;
                    if (n ? i.time = 0 : i.time += e.value, i.time < i.duration) return;
                    if (i.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) return void t.destroy();
                    const s = this.container.canvas.size,
                        a = (0, o.setRangeValue)(0, s.width),
                        r = (0, o.setRangeValue)(0, s.width);
                    t.position.x = (0, o.randomInRange)(a), t.position.y = (0, o.randomInRange)(r), t.spawning = !0, i.delayTime = 0, i.time = 0, t.reset();
                    const c = t.options.life;
                    i.delay = 1e3 * (0, o.getRangeValue)(c.delay.value), i.duration = 1e3 * (0, o.getRangeValue)(c.duration.value)
                }
            }
        },
        56717: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadLifeUpdater = void 0;
            const o = i(48152);
            e.loadLifeUpdater = async function(t) {
                await t.addParticleUpdater("life", (t => new o.LifeUpdater(t)))
            }
        },
        81923: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OpacityUpdater = void 0;
            const o = i(26331),
                n = i(97373);

            function s(t, e) {
                var i, s, a, r, c;
                if (!t.opacity) return;
                const l = t.opacity.min,
                    d = t.opacity.max;
                if (!t.destroyed && t.opacity.enable && ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) <= 0 || (null !== (s = t.opacity.loops) && void 0 !== s ? s : 0) < (null !== (a = t.opacity.maxLoops) && void 0 !== a ? a : 0))) {
                    switch (t.opacity.status) {
                        case o.AnimationStatus.increasing:
                            t.opacity.value >= d ? (t.opacity.status = o.AnimationStatus.decreasing, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += (null !== (r = t.opacity.velocity) && void 0 !== r ? r : 0) * e.factor;
                            break;
                        case o.AnimationStatus.decreasing:
                            t.opacity.value <= l ? (t.opacity.status = o.AnimationStatus.increasing, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= (null !== (c = t.opacity.velocity) && void 0 !== c ? c : 0) * e.factor
                    }! function(t, e, i, n) {
                        switch (t.options.opacity.animation.destroy) {
                            case o.DestroyType.max:
                                e >= n && t.destroy();
                                break;
                            case o.DestroyType.min:
                                e <= i && t.destroy()
                        }
                    }(t, t.opacity.value, l, d), t.destroyed || (t.opacity.value = (0, n.clamp)(t.opacity.value, l, d))
                }
            }
            e.OpacityUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    const e = t.options.opacity;
                    t.opacity = {
                        enable: e.animation.enable,
                        max: (0, n.getRangeMax)(e.value),
                        min: (0, n.getRangeMin)(e.value),
                        value: (0, n.getRangeValue)(e.value),
                        loops: 0,
                        maxLoops: e.animation.count
                    };
                    const i = e.animation;
                    if (i.enable) {
                        t.opacity.status = o.AnimationStatus.increasing;
                        const s = e.value;
                        switch (t.opacity.min = (0, n.getRangeMin)(s), t.opacity.max = (0, n.getRangeMax)(s), i.startValue) {
                            case o.StartValueType.min:
                                t.opacity.value = t.opacity.min, t.opacity.status = o.AnimationStatus.increasing;
                                break;
                            case o.StartValueType.random:
                                t.opacity.value = (0, n.randomInRange)(t.opacity), t.opacity.status = Math.random() >= .5 ? o.AnimationStatus.increasing : o.AnimationStatus.decreasing;
                                break;
                            case o.StartValueType.max:
                            default:
                                t.opacity.value = t.opacity.max, t.opacity.status = o.AnimationStatus.decreasing
                        }
                        t.opacity.velocity = i.speed / 100 * this.container.retina.reduceFactor, i.sync || (t.opacity.velocity *= Math.random())
                    }
                }
                isEnabled(t) {
                    var e, i, o;
                    return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.opacity.loops) && void 0 !== i ? i : 0) < (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0))
                }
                update(t, e) {
                    this.isEnabled(t) && s(t, e)
                }
            }
        },
        93202: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadOpacityUpdater = void 0;
            const o = i(81923);
            e.loadOpacityUpdater = async function(t) {
                await t.addParticleUpdater("opacity", (t => new o.OpacityUpdater(t)))
            }
        },
        69138: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OutOfCanvasUpdater = void 0;
            const o = i(97373),
                n = i(26331),
                s = i(68055);
            e.OutOfCanvasUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init() {}
                isEnabled(t) {
                    return !t.destroyed && !t.spawning
                }
                update(t, e) {
                    var i, o, s, a;
                    const r = t.options.move.outModes;
                    this.updateOutMode(t, e, null !== (i = r.bottom) && void 0 !== i ? i : r.default, n.OutModeDirection.bottom), this.updateOutMode(t, e, null !== (o = r.left) && void 0 !== o ? o : r.default, n.OutModeDirection.left), this.updateOutMode(t, e, null !== (s = r.right) && void 0 !== s ? s : r.default, n.OutModeDirection.right), this.updateOutMode(t, e, null !== (a = r.top) && void 0 !== a ? a : r.default, n.OutModeDirection.top)
                }
                updateOutMode(t, e, i, o) {
                    switch (i) {
                        case n.OutMode.bounce:
                        case n.OutMode.bounceVertical:
                        case n.OutMode.bounceHorizontal:
                        case "bounceVertical":
                        case "bounceHorizontal":
                        case n.OutMode.split:
                            this.bounce(t, e, o, i);
                            break;
                        case n.OutMode.destroy:
                            this.destroy(t, o);
                            break;
                        case n.OutMode.out:
                            this.out(t, o);
                            break;
                        case n.OutMode.none:
                        default:
                            this.none(t, o)
                    }
                }
                destroy(t, e) {
                    const i = this.container;
                    (0, o.isPointInside)(t.position, i.canvas.size, t.getRadius(), e) || i.particles.remove(t, void 0, !0)
                }
                out(t, e) {
                    const i = this.container;
                    if ((0, o.isPointInside)(t.position, i.canvas.size, t.getRadius(), e)) return;
                    const s = t.options.move.warp,
                        a = i.canvas.size,
                        r = {
                            bottom: a.height + t.getRadius() + t.offset.y,
                            left: -t.getRadius() - t.offset.x,
                            right: a.width + t.getRadius() + t.offset.x,
                            top: -t.getRadius() - t.offset.y
                        },
                        c = t.getRadius(),
                        l = (0, o.calculateBounds)(t.position, c);
                    e === n.OutModeDirection.right && l.left > a.width + t.offset.x ? (t.position.x = r.left, t.initialPosition.x = t.position.x, s || (t.position.y = Math.random() * a.height, t.initialPosition.y = t.position.y)) : e === n.OutModeDirection.left && l.right < -t.offset.x && (t.position.x = r.right, t.initialPosition.x = t.position.x, s || (t.position.y = Math.random() * a.height, t.initialPosition.y = t.position.y)), e === n.OutModeDirection.bottom && l.top > a.height + t.offset.y ? (s || (t.position.x = Math.random() * a.width, t.initialPosition.x = t.position.x), t.position.y = r.top, t.initialPosition.y = t.position.y) : e === n.OutModeDirection.top && l.bottom < -t.offset.y && (s || (t.position.x = Math.random() * a.width, t.initialPosition.x = t.position.x), t.position.y = r.bottom, t.initialPosition.y = t.position.y)
                }
                bounce(t, e, i, n) {
                    const a = this.container;
                    let r = !1;
                    for (const [, o] of a.plugins)
                        if (void 0 !== o.particleBounce && (r = o.particleBounce(t, e, i)), r) break;
                    if (r) return;
                    const c = t.getPosition(),
                        l = t.offset,
                        d = t.getRadius(),
                        u = (0, o.calculateBounds)(c, d),
                        h = a.canvas.size;
                    (0, s.bounceHorizontal)({
                        particle: t,
                        outMode: n,
                        direction: i,
                        bounds: u,
                        canvasSize: h,
                        offset: l,
                        size: d
                    }), (0, s.bounceVertical)({
                        particle: t,
                        outMode: n,
                        direction: i,
                        bounds: u,
                        canvasSize: h,
                        offset: l,
                        size: d
                    })
                }
                none(t, e) {
                    if (t.options.move.distance.horizontal && (e === n.OutModeDirection.left || e === n.OutModeDirection.right) || t.options.move.distance.vertical && (e === n.OutModeDirection.top || e === n.OutModeDirection.bottom)) return;
                    const i = t.options.move.gravity,
                        s = this.container,
                        a = s.canvas.size,
                        r = t.getRadius();
                    if (i.enable) {
                        const o = t.position;
                        (!i.inverse && o.y > a.height + r && e === n.OutModeDirection.bottom || i.inverse && o.y < -r && e === n.OutModeDirection.top) && s.particles.remove(t)
                    } else {
                        if (t.velocity.y > 0 && t.position.y <= a.height + r || t.velocity.y < 0 && t.position.y >= -r || t.velocity.x > 0 && t.position.x <= a.width + r || t.velocity.x < 0 && t.position.x >= -r) return;
                        (0, o.isPointInside)(t.position, s.canvas.size, r, e) || s.particles.remove(t)
                    }
                }
            }
        },
        68055: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bounceVertical = e.bounceHorizontal = void 0;
            const o = i(26331),
                n = i(97373);
            e.bounceHorizontal = function(t) {
                if (t.outMode !== o.OutMode.bounce && t.outMode !== o.OutMode.bounceHorizontal && "bounceHorizontal" !== t.outMode && t.outMode !== o.OutMode.split) return;
                const e = t.particle.velocity.x;
                let i = !1;
                if (t.direction === o.OutModeDirection.right && t.bounds.right >= t.canvasSize.width && e > 0 || t.direction === o.OutModeDirection.left && t.bounds.left <= 0 && e < 0) {
                    const e = (0, n.getRangeValue)(t.particle.options.bounce.horizontal.value);
                    t.particle.velocity.x *= -e, i = !0
                }
                if (!i) return;
                const s = t.offset.x + t.size;
                t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - s : t.bounds.left <= 0 && (t.particle.position.x = s), t.outMode === o.OutMode.split && t.particle.destroy()
            }, e.bounceVertical = function(t) {
                if (t.outMode === o.OutMode.bounce || t.outMode === o.OutMode.bounceVertical || "bounceVertical" === t.outMode || t.outMode === o.OutMode.split) {
                    const e = t.particle.velocity.y;
                    let i = !1;
                    if (t.direction === o.OutModeDirection.bottom && t.bounds.bottom >= t.canvasSize.height && e > 0 || t.direction === o.OutModeDirection.top && t.bounds.top <= 0 && e < 0) {
                        const e = (0, n.getRangeValue)(t.particle.options.bounce.vertical.value);
                        t.particle.velocity.y *= -e, i = !0
                    }
                    if (!i) return;
                    const s = t.offset.y + t.size;
                    t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - s : t.bounds.top <= 0 && (t.particle.position.y = s), t.outMode === o.OutMode.split && t.particle.destroy()
                }
            }
        },
        46086: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadOutModesUpdater = void 0;
            const o = i(69138);
            e.loadOutModesUpdater = async function(t) {
                await t.addParticleUpdater("outModes", (t => new o.OutOfCanvasUpdater(t)))
            }
        },
        28486: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RollUpdater = void 0;
            const o = i(97373),
                n = i(26331);
            e.RollUpdater = class {
                init(t) {
                    const e = t.options.roll;
                    if (e.enable)
                        if (t.roll = {
                                angle: Math.random() * Math.PI * 2,
                                speed: (0, o.getRangeValue)(e.speed) / 360
                            }, e.backColor) t.backColor = (0, o.colorToHsl)(e.backColor);
                        else if (e.darken.enable && e.enlighten.enable) {
                        const i = Math.random() >= .5 ? n.AlterType.darken : n.AlterType.enlighten;
                        t.roll.alter = {
                            type: i,
                            value: i === n.AlterType.darken ? e.darken.value : e.enlighten.value
                        }
                    } else e.darken.enable ? t.roll.alter = {
                        type: n.AlterType.darken,
                        value: e.darken.value
                    } : e.enlighten.enable && (t.roll.alter = {
                        type: n.AlterType.enlighten,
                        value: e.enlighten.value
                    });
                    else t.roll = {
                        angle: 0,
                        speed: 0
                    }
                }
                isEnabled(t) {
                    const e = t.options.roll;
                    return !t.destroyed && !t.spawning && e.enable
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        const i = t.options.roll;
                        if (!t.roll || !i.enable) return;
                        const o = t.roll.speed * e.factor,
                            n = 2 * Math.PI;
                        t.roll.angle += o, t.roll.angle > n && (t.roll.angle -= n)
                    }(t, e)
                }
            }
        },
        52124: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadRollUpdater = void 0;
            const o = i(28486);
            e.loadRollUpdater = async function(t) {
                await t.addParticleUpdater("roll", (() => new o.RollUpdater))
            }
        },
        80457: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SizeUpdater = void 0;
            const o = i(26331),
                n = i(97373);

            function s(t, e) {
                var i, s, a, r;
                const c = (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) * e.factor,
                    l = t.size.min,
                    d = t.size.max;
                if (!t.destroyed && t.size.enable && ((null !== (s = t.size.loops) && void 0 !== s ? s : 0) <= 0 || (null !== (a = t.size.loops) && void 0 !== a ? a : 0) < (null !== (r = t.size.maxLoops) && void 0 !== r ? r : 0))) {
                    switch (t.size.status) {
                        case o.AnimationStatus.increasing:
                            t.size.value >= d ? (t.size.status = o.AnimationStatus.decreasing, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += c;
                            break;
                        case o.AnimationStatus.decreasing:
                            t.size.value <= l ? (t.size.status = o.AnimationStatus.increasing, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= c
                    }! function(t, e, i, n) {
                        switch (t.options.size.animation.destroy) {
                            case o.DestroyType.max:
                                e >= n && t.destroy();
                                break;
                            case o.DestroyType.min:
                                e <= i && t.destroy()
                        }
                    }(t, t.size.value, l, d), t.destroyed || (t.size.value = (0, n.clamp)(t.size.value, l, d))
                }
            }
            e.SizeUpdater = class {
                init() {}
                isEnabled(t) {
                    var e, i, o;
                    return !t.destroyed && !t.spawning && t.size.enable && ((null !== (e = t.size.loops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.size.loops) && void 0 !== i ? i : 0) < (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0))
                }
                update(t, e) {
                    this.isEnabled(t) && s(t, e)
                }
            }
        },
        21004: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadSizeUpdater = void 0;
            const o = i(80457);
            e.loadSizeUpdater = async function(t) {
                await t.addParticleUpdater("size", (() => new o.SizeUpdater))
            }
        },
        2965: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StrokeColorUpdater = void 0;
            const o = i(97373),
                n = i(26331);

            function s(t, e, i, s, a) {
                var r;
                const c = e;
                if (!c || !c.enable) return;
                const l = (0, o.randomInRange)(i.offset),
                    d = (null !== (r = e.velocity) && void 0 !== r ? r : 0) * t.factor + 3.6 * l;
                a && c.status !== n.AnimationStatus.increasing ? (c.value -= d, c.value < 0 && (c.status = n.AnimationStatus.increasing, c.value += c.value)) : (c.value += d, a && c.value > s && (c.status = n.AnimationStatus.decreasing, c.value -= c.value % s)), c.value > s && (c.value %= s)
            }
            e.StrokeColorUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    var e, i;
                    const n = this.container;
                    t.stroke = t.options.stroke instanceof Array ? (0, o.itemFromArray)(t.options.stroke, t.id, t.options.reduceDuplicates) : t.options.stroke, t.strokeWidth = t.stroke.width * n.retina.pixelRatio;
                    const s = null !== (e = (0, o.colorToHsl)(t.stroke.color)) && void 0 !== e ? e : t.getFillColor();
                    s && (t.strokeColor = (0, o.getHslAnimationFromHsl)(s, null === (i = t.stroke.color) || void 0 === i ? void 0 : i.animation, n.retina.reduceFactor))
                }
                isEnabled(t) {
                    var e, i, o, n;
                    const s = null === (e = t.stroke) || void 0 === e ? void 0 : e.color;
                    return !t.destroyed && !t.spawning && !!s && (void 0 !== (null === (i = t.strokeColor) || void 0 === i ? void 0 : i.h.value) && s.animation.h.enable || void 0 !== (null === (o = t.strokeColor) || void 0 === o ? void 0 : o.s.value) && s.animation.s.enable || void 0 !== (null === (n = t.strokeColor) || void 0 === n ? void 0 : n.l.value) && s.animation.l.enable)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i, o, n, a, r, c, l, d, u, h;
                        if (!(null === (i = t.stroke) || void 0 === i ? void 0 : i.color)) return;
                        const p = t.stroke.color.animation,
                            v = null !== (n = null === (o = t.strokeColor) || void 0 === o ? void 0 : o.h) && void 0 !== n ? n : null === (a = t.color) || void 0 === a ? void 0 : a.h;
                        v && s(e, v, p.h, 360, !1);
                        const y = null !== (c = null === (r = t.strokeColor) || void 0 === r ? void 0 : r.s) && void 0 !== c ? c : null === (l = t.color) || void 0 === l ? void 0 : l.s;
                        y && s(e, y, p.s, 100, !0);
                        const f = null !== (u = null === (d = t.strokeColor) || void 0 === d ? void 0 : d.l) && void 0 !== u ? u : null === (h = t.color) || void 0 === h ? void 0 : h.l;
                        f && s(e, f, p.l, 100, !0)
                    }(t, e)
                }
            }
        },
        25816: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadStrokeColorUpdater = void 0;
            const o = i(2965);
            e.loadStrokeColorUpdater = async function(t) {
                await t.addParticleUpdater("strokeColor", (t => new o.StrokeColorUpdater(t)))
            }
        },
        46505: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TiltUpdater = void 0;
            const o = i(26331),
                n = i(97373);
            e.TiltUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    const e = t.options.tilt;
                    t.tilt = {
                        enable: e.enable,
                        value: (0, n.getRangeValue)(e.value) * Math.PI / 180,
                        sinDirection: Math.random() >= .5 ? 1 : -1,
                        cosDirection: Math.random() >= .5 ? 1 : -1
                    };
                    let i = e.direction;
                    if (i === o.TiltDirection.random) {
                        i = Math.floor(2 * Math.random()) > 0 ? o.TiltDirection.counterClockwise : o.TiltDirection.clockwise
                    }
                    switch (i) {
                        case o.TiltDirection.counterClockwise:
                        case "counterClockwise":
                            t.tilt.status = o.AnimationStatus.decreasing;
                            break;
                        case o.TiltDirection.clockwise:
                            t.tilt.status = o.AnimationStatus.increasing
                    }
                    const s = t.options.tilt.animation;
                    s.enable && (t.tilt.velocity = s.speed / 360 * this.container.retina.reduceFactor, s.sync || (t.tilt.velocity *= Math.random()))
                }
                isEnabled(t) {
                    const e = t.options.tilt.animation;
                    return !t.destroyed && !t.spawning && e.enable
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i;
                        if (!t.tilt) return;
                        const n = t.options.tilt.animation,
                            s = (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) * e.factor,
                            a = 2 * Math.PI;
                        if (n.enable) switch (t.tilt.status) {
                            case o.AnimationStatus.increasing:
                                t.tilt.value += s, t.tilt.value > a && (t.tilt.value -= a);
                                break;
                            case o.AnimationStatus.decreasing:
                            default:
                                t.tilt.value -= s, t.tilt.value < 0 && (t.tilt.value += a)
                        }
                    }(t, e)
                }
            }
        },
        2453: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadTiltUpdater = void 0;
            const o = i(46505);
            e.loadTiltUpdater = async function(t) {
                await t.addParticleUpdater("tilt", (t => new o.TiltUpdater(t)))
            }
        },
        98467: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.WobbleUpdater = void 0;
            const o = i(97373);
            e.WobbleUpdater = class {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    const e = t.options.wobble;
                    e.enable ? t.wobble = {
                        angle: Math.random() * Math.PI * 2,
                        speed: (0, o.getRangeValue)(e.speed) / 360
                    } : t.wobble = {
                        angle: 0,
                        speed: 0
                    }, t.retina.wobbleDistance = (0, o.getRangeValue)(e.distance) * this.container.retina.pixelRatio
                }
                isEnabled(t) {
                    return !t.destroyed && !t.spawning && t.options.wobble.enable
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i;
                        if (!t.options.wobble.enable || !t.wobble) return;
                        const o = t.wobble.speed * e.factor,
                            n = (null !== (i = t.retina.wobbleDistance) && void 0 !== i ? i : 0) * e.factor / (1e3 / 60),
                            s = 2 * Math.PI;
                        t.wobble.angle += o, t.wobble.angle > s && (t.wobble.angle -= s), t.position.x += n * Math.cos(t.wobble.angle), t.position.y += n * Math.abs(Math.sin(t.wobble.angle))
                    }(t, e)
                }
            }
        },
        57175: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadWobbleUpdater = void 0;
            const o = i(98467);
            e.loadWobbleUpdater = async function(t) {
                await t.addParticleUpdater("wobble", (t => new o.WobbleUpdater(t)))
            }
        },
        51680: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.alterHsl = e.drawEllipse = e.drawParticlePlugin = e.drawPlugin = e.drawShapeAfterEffect = e.drawShape = e.drawParticle = e.drawGrabLine = e.gradient = e.drawConnectLine = e.drawLinkTriangle = e.drawLinkLine = e.clear = e.paintBase = void 0;
            const o = i(23939),
                n = i(72323),
                s = i(26331);

            function a(t, e, i) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath()
            }

            function r(t, e, i, o, n, s) {
                if (!i.shape) return;
                const a = t.drawers.get(i.shape);
                a && a.draw(e, i, o, n, s, t.retina.pixelRatio)
            }

            function c(t, e, i, o, n, s) {
                if (!i.shape) return;
                const a = t.drawers.get(i.shape);
                (null === a || void 0 === a ? void 0 : a.afterEffect) && a.afterEffect(e, i, o, n, s, t.retina.pixelRatio)
            }
            e.paintBase = function(t, e, i) {
                t.save(), t.fillStyle = null !== i && void 0 !== i ? i : "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height), t.restore()
            }, e.clear = function(t, e) {
                t.clearRect(0, 0, e.width, e.height)
            }, e.drawLinkLine = function(t, e, i, s, r, c, l, d, u, h, p, v) {
                let y = !1;
                if ((0, o.getDistance)(i, s) <= r) a(t, i, s), y = !0;
                else if (l) {
                    let e, n;
                    const l = {
                            x: s.x - c.width,
                            y: s.y
                        },
                        d = (0, o.getDistances)(i, l);
                    if (d.distance <= r) {
                        const t = i.y - d.dy / d.dx * i.x;
                        e = {
                            x: 0,
                            y: t
                        }, n = {
                            x: c.width,
                            y: t
                        }
                    } else {
                        const t = {
                                x: s.x,
                                y: s.y - c.height
                            },
                            a = (0, o.getDistances)(i, t);
                        if (a.distance <= r) {
                            const t = -(i.y - a.dy / a.dx * i.x) / (a.dy / a.dx);
                            e = {
                                x: t,
                                y: 0
                            }, n = {
                                x: t,
                                y: c.height
                            }
                        } else {
                            const t = {
                                    x: s.x - c.width,
                                    y: s.y - c.height
                                },
                                a = (0, o.getDistances)(i, t);
                            if (a.distance <= r) {
                                const t = i.y - a.dy / a.dx * i.x;
                                e = {
                                    x: -t / (a.dy / a.dx),
                                    y: t
                                }, n = {
                                    x: e.x + c.width,
                                    y: e.y + c.height
                                }
                            }
                        }
                    }
                    e && n && (a(t, i, e), a(t, s, n), y = !0)
                }
                if (y) {
                    if (t.lineWidth = e, d && (t.globalCompositeOperation = u), t.strokeStyle = (0, n.getStyleFromRgb)(h, p), v.enable) {
                        const e = (0, n.colorToRgb)(v.color);
                        e && (t.shadowBlur = v.blur, t.shadowColor = (0, n.getStyleFromRgb)(e))
                    }
                    t.stroke()
                }
            }, e.drawLinkTriangle = function(t, e, i, o, s, a, r, c) {
                ! function(t, e, i, o) {
                    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(o.x, o.y), t.closePath()
                }(t, e, i, o), s && (t.globalCompositeOperation = a), t.fillStyle = (0, n.getStyleFromRgb)(r, c), t.fill()
            }, e.drawConnectLine = function(t, e, i, o, n) {
                t.save(), a(t, o, n), t.lineWidth = e, t.strokeStyle = i, t.stroke(), t.restore()
            }, e.gradient = function(t, e, i, o) {
                const s = Math.floor(i.getRadius() / e.getRadius()),
                    a = e.getFillColor(),
                    r = i.getFillColor();
                if (!a || !r) return;
                const c = e.getPosition(),
                    l = i.getPosition(),
                    d = (0, n.colorMix)(a, r, e.getRadius(), i.getRadius()),
                    u = t.createLinearGradient(c.x, c.y, l.x, l.y);
                return u.addColorStop(0, (0, n.getStyleFromHsl)(a, o)), u.addColorStop(s > 1 ? 1 : s, (0, n.getStyleFromRgb)(d, o)), u.addColorStop(1, (0, n.getStyleFromHsl)(r, o)), u
            }, e.drawGrabLine = function(t, e, i, o, s, r) {
                t.save(), a(t, i, o), t.strokeStyle = (0, n.getStyleFromRgb)(s, r), t.lineWidth = e, t.stroke(), t.restore()
            }, e.drawParticle = function(t, e, i, o, a, l, d, u, h, p, v, y) {
                var f, g, b, m, w, S;
                const _ = i.getPosition(),
                    P = i.options.tilt,
                    O = i.options.roll;
                if (e.save(), P.enable || O.enable) {
                    const t = O.enable && i.roll,
                        o = P.enable && i.tilt,
                        n = t && (O.mode === s.RollMode.horizontal || O.mode === s.RollMode.both),
                        a = t && (O.mode === s.RollMode.vertical || O.mode === s.RollMode.both);
                    e.setTransform(n ? Math.cos(i.roll.angle) : 1, o ? Math.cos(i.tilt.value) * i.tilt.cosDirection : 0, o ? Math.sin(i.tilt.value) * i.tilt.sinDirection : 0, a ? Math.sin(i.roll.angle) : 1, _.x, _.y)
                } else e.translate(_.x, _.y);
                e.beginPath();
                const M = (null !== (g = null === (f = i.rotate) || void 0 === f ? void 0 : f.value) && void 0 !== g ? g : 0) + (i.options.rotate.path ? i.velocity.angle : 0);
                0 !== M && e.rotate(M), d && (e.globalCompositeOperation = u);
                const x = i.shadowColor;
                if (v.enable && x && (e.shadowBlur = v.blur, e.shadowColor = (0, n.getStyleFromRgb)(x), e.shadowOffsetX = v.offset.x, e.shadowOffsetY = v.offset.y), y) {
                    const t = y.angle.value,
                        i = y.type === s.GradientType.radial ? e.createRadialGradient(0, 0, 0, 0, 0, h) : e.createLinearGradient(Math.cos(t) * -h, Math.sin(t) * -h, Math.cos(t) * h, Math.sin(t) * h);
                    for (const e of y.colors) i.addColorStop(e.stop, (0, n.getStyleFromHsl)({
                        h: e.value.h.value,
                        s: e.value.s.value,
                        l: e.value.l.value
                    }, null !== (m = null === (b = e.opacity) || void 0 === b ? void 0 : b.value) && void 0 !== m ? m : p));
                    e.fillStyle = i
                } else a && (e.fillStyle = a);
                const C = i.stroke;
                e.lineWidth = null !== (w = i.strokeWidth) && void 0 !== w ? w : 0, l && (e.strokeStyle = l), r(t, e, i, h, p, o), (null !== (S = null === C || void 0 === C ? void 0 : C.width) && void 0 !== S ? S : 0) > 0 && e.stroke(), i.close && e.closePath(), i.fill && e.fill(), e.restore(), e.save(), P.enable && i.tilt ? e.setTransform(1, Math.cos(i.tilt.value) * i.tilt.cosDirection, Math.sin(i.tilt.value) * i.tilt.sinDirection, 1, _.x, _.y) : e.translate(_.x, _.y), 0 !== M && e.rotate(M), d && (e.globalCompositeOperation = u), c(t, e, i, h, p, o), e.restore()
            }, e.drawShape = r, e.drawShapeAfterEffect = c, e.drawPlugin = function(t, e, i) {
                e.draw && (t.save(), e.draw(t, i), t.restore())
            }, e.drawParticlePlugin = function(t, e, i, o) {
                void 0 !== e.drawParticle && (t.save(), e.drawParticle(t, i, o), t.restore())
            }, e.drawEllipse = function(t, e, i, o, s, a, r, c, l) {
                const d = e.getPosition();
                if (i && (t.strokeStyle = (0, n.getStyleFromHsl)(i, s)), 0 === a) return;
                t.lineWidth = a;
                const u = r * Math.PI / 180;
                t.beginPath(), t.ellipse(d.x, d.y, o / 2, 2 * o, u, c, l), t.stroke()
            }, e.alterHsl = function(t, e, i) {
                return {
                    h: t.h,
                    s: t.s,
                    l: t.l + (e === s.AlterType.darken ? -1 : 1) * i
                }
            }
        },
        3232: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Circle = void 0;
            const o = i(62679),
                n = i(23939);
            class s extends o.Range {
                constructor(t, e, i) {
                    super(t, e), this.radius = i
                }
                contains(t) {
                    return (0, n.getDistance)(t, this.position) <= this.radius
                }
                intersects(t) {
                    const e = t,
                        i = t,
                        o = this.position,
                        n = t.position,
                        s = Math.abs(n.x - o.x),
                        a = Math.abs(n.y - o.y),
                        r = this.radius;
                    if (void 0 !== i.radius) {
                        return r + i.radius > Math.sqrt(s * s + a + a)
                    }
                    if (void 0 !== e.size) {
                        const t = e.size.width,
                            i = e.size.height,
                            o = Math.pow(s - t, 2) + Math.pow(a - i, 2);
                        return !(s > r + t || a > r + i) && (s <= t || a <= i || o <= r * r)
                    }
                    return !1
                }
            }
            e.Circle = s
        },
        95407: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CircleWarp = void 0;
            const o = i(48191),
                n = i(3232);
            class s extends n.Circle {
                constructor(t, e, i, o) {
                    super(t, e, i), this.canvasSize = o, this.canvasSize = {
                        height: o.height,
                        width: o.width
                    }
                }
                contains(t) {
                    if (super.contains(t)) return !0;
                    const e = {
                        x: t.x - this.canvasSize.width,
                        y: t.y
                    };
                    if (super.contains(e)) return !0;
                    const i = {
                        x: t.x - this.canvasSize.width,
                        y: t.y - this.canvasSize.height
                    };
                    if (super.contains(i)) return !0;
                    const o = {
                        x: t.x,
                        y: t.y - this.canvasSize.height
                    };
                    return super.contains(o)
                }
                intersects(t) {
                    if (super.intersects(t)) return !0;
                    const e = t,
                        i = t,
                        s = {
                            x: t.position.x - this.canvasSize.width,
                            y: t.position.y - this.canvasSize.height
                        };
                    if (void 0 !== i.radius) {
                        const t = new n.Circle(s.x, s.y, 2 * i.radius);
                        return super.intersects(t)
                    }
                    if (void 0 !== e.size) {
                        const t = new o.Rectangle(s.x, s.y, 2 * e.size.width, 2 * e.size.height);
                        return super.intersects(t)
                    }
                    return !1
                }
            }
            e.CircleWarp = s
        },
        72323: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getHslAnimationFromHsl = e.getHslFromAnimation = e.getLinkRandomColor = e.getLinkColor = e.colorMix = e.getStyleFromHsv = e.getStyleFromHsl = e.getStyleFromRgb = e.getRandomRgbColor = e.rgbaToHsva = e.rgbToHsv = e.hsvaToRgba = e.hsvToRgb = e.hsvaToHsla = e.hsvToHsl = e.hslaToHsva = e.hslToHsv = e.hslaToRgba = e.hslToRgb = e.stringToRgb = e.stringToAlpha = e.rgbToHsl = e.colorToHsl = e.colorToRgb = void 0;
            const o = i(31611),
                n = i(1565),
                s = i(23939),
                a = i(26331);

            function r(t, e, i) {
                let o = i;
                return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + 6 * (e - t) * o : o < .5 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t
            }

            function c(t) {
                if (t.startsWith("rgb")) {
                    const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? {
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        b: parseInt(e[3], 10),
                        g: parseInt(e[2], 10),
                        r: parseInt(e[1], 10)
                    } : void 0
                }
                if (t.startsWith("hsl")) {
                    const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? p({
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        h: parseInt(e[1], 10),
                        l: parseInt(e[3], 10),
                        s: parseInt(e[2], 10)
                    }) : void 0
                }
                if (t.startsWith("hsv")) {
                    const e = /hsva?\(\s*(\d+)\xb0\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? g({
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        h: parseInt(e[1], 10),
                        s: parseInt(e[2], 10),
                        v: parseInt(e[3], 10)
                    }) : void 0
                } {
                    const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                        i = t.replace(e, ((t, e, i, o, n) => e + e + i + i + o + o + (void 0 !== n ? n + n : ""))),
                        o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
                    return o ? {
                        a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
                        b: parseInt(o[3], 16),
                        g: parseInt(o[2], 16),
                        r: parseInt(o[1], 16)
                    } : void 0
                }
            }

            function l(t, e, i = !0) {
                var s, a, r;
                if (void 0 === t) return;
                const c = "string" === typeof t ? {
                    value: t
                } : t;
                let d;
                if ("string" === typeof c.value) d = c.value === n.Constants.randomColorValue ? m() : u(c.value);
                else if (c.value instanceof Array) {
                    d = l({
                        value: (0, o.itemFromArray)(c.value, e, i)
                    })
                } else {
                    const t = c.value,
                        e = null !== (s = t.rgb) && void 0 !== s ? s : c.value;
                    if (void 0 !== e.r) d = e;
                    else {
                        const e = null !== (a = t.hsl) && void 0 !== a ? a : c.value;
                        if (void 0 !== e.h && void 0 !== e.l) d = h(e);
                        else {
                            const e = null !== (r = t.hsv) && void 0 !== r ? r : c.value;
                            void 0 !== e.h && void 0 !== e.v && (d = f(e))
                        }
                    }
                }
                return d
            }

            function d(t) {
                const e = t.r / 255,
                    i = t.g / 255,
                    o = t.b / 255,
                    n = Math.max(e, i, o),
                    s = Math.min(e, i, o),
                    a = {
                        h: 0,
                        l: (n + s) / 2,
                        s: 0
                    };
                return n != s && (a.s = a.l < .5 ? (n - s) / (n + s) : (n - s) / (2 - n - s), a.h = e === n ? (i - o) / (n - s) : a.h = i === n ? 2 + (o - e) / (n - s) : 4 + (e - i) / (n - s)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a
            }

            function u(t) {
                return c(t)
            }

            function h(t) {
                const e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    i = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (0 === i.s) e.b = i.l, e.g = i.l, e.r = i.l;
                else {
                    const t = i.l < .5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
                        o = 2 * i.l - t;
                    e.r = r(o, t, i.h + 1 / 3), e.g = r(o, t, i.h), e.b = r(o, t, i.h - 1 / 3)
                }
                return e.r = Math.floor(255 * e.r), e.g = Math.floor(255 * e.g), e.b = Math.floor(255 * e.b), e
            }

            function p(t) {
                const e = h(t);
                return {
                    a: t.a,
                    b: e.b,
                    g: e.g,
                    r: e.r
                }
            }

            function v(t) {
                const e = t.l / 100,
                    i = e + t.s / 100 * Math.min(e, 1 - e),
                    o = i ? 2 * (1 - e / i) : 0;
                return {
                    h: t.h,
                    s: 100 * o,
                    v: 100 * i
                }
            }

            function y(t) {
                const e = t.v / 100,
                    i = e * (1 - t.s / 100 / 2),
                    o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i);
                return {
                    h: t.h,
                    l: 100 * i,
                    s: 100 * o
                }
            }

            function f(t) {
                const e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    i = t.h / 60,
                    o = t.s / 100,
                    n = t.v / 100,
                    s = n * o,
                    a = s * (1 - Math.abs(i % 2 - 1));
                let r;
                if (i >= 0 && i <= 1 ? r = {
                        r: s,
                        g: a,
                        b: 0
                    } : i > 1 && i <= 2 ? r = {
                        r: a,
                        g: s,
                        b: 0
                    } : i > 2 && i <= 3 ? r = {
                        r: 0,
                        g: s,
                        b: a
                    } : i > 3 && i <= 4 ? r = {
                        r: 0,
                        g: a,
                        b: s
                    } : i > 4 && i <= 5 ? r = {
                        r: a,
                        g: 0,
                        b: s
                    } : i > 5 && i <= 6 && (r = {
                        r: s,
                        g: 0,
                        b: a
                    }), r) {
                    const t = n - s;
                    e.r = Math.floor(255 * (r.r + t)), e.g = Math.floor(255 * (r.g + t)), e.b = Math.floor(255 * (r.b + t))
                }
                return e
            }

            function g(t) {
                const e = f(t);
                return {
                    a: t.a,
                    b: e.b,
                    g: e.g,
                    r: e.r
                }
            }

            function b(t) {
                const e = {
                        r: t.r / 255,
                        g: t.g / 255,
                        b: t.b / 255
                    },
                    i = Math.max(e.r, e.g, e.b),
                    o = i - Math.min(e.r, e.g, e.b);
                let n = 0;
                i === e.r ? n = (e.g - e.b) / o * 60 : i === e.g ? n = 60 * (2 + (e.b - e.r) / o) : i === e.b && (n = 60 * (4 + (e.r - e.g) / o));
                return {
                    h: n,
                    s: 100 * (i ? o / i : 0),
                    v: 100 * i
                }
            }

            function m(t) {
                const e = null !== t && void 0 !== t ? t : 0;
                return {
                    b: Math.floor((0, s.randomInRange)((0, s.setRangeValue)(e, 256))),
                    g: Math.floor((0, s.randomInRange)((0, s.setRangeValue)(e, 256))),
                    r: Math.floor((0, s.randomInRange)((0, s.setRangeValue)(e, 256)))
                }
            }

            function w(t, e) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!==e&&void 0!==e?e:1})`
            }

            function S(t, e, i, o) {
                let n = t,
                    a = e;
                return void 0 === n.r && (n = h(t)), void 0 === a.r && (a = h(e)), {
                    b: (0, s.mix)(n.b, a.b, i, o),
                    g: (0, s.mix)(n.g, a.g, i, o),
                    r: (0, s.mix)(n.r, a.r, i, o)
                }
            }

            function _(t, e, i) {
                if (t.enable = e.enable, t.enable) {
                    if (t.velocity = e.speed / 100 * i, e.sync) return;
                    t.status = a.AnimationStatus.increasing, t.velocity *= Math.random(), t.value && (t.value *= Math.random())
                } else t.velocity = 0
            }
            e.colorToRgb = l, e.colorToHsl = function(t, e, i = !0) {
                const o = l(t, e, i);
                return void 0 !== o ? d(o) : void 0
            }, e.rgbToHsl = d, e.stringToAlpha = function(t) {
                var e;
                return null === (e = c(t)) || void 0 === e ? void 0 : e.a
            }, e.stringToRgb = u, e.hslToRgb = h, e.hslaToRgba = p, e.hslToHsv = v, e.hslaToHsva = function(t) {
                const e = v(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }, e.hsvToHsl = y, e.hsvaToHsla = function(t) {
                const e = y(t);
                return {
                    a: t.a,
                    h: e.h,
                    l: e.l,
                    s: e.s
                }
            }, e.hsvToRgb = f, e.hsvaToRgba = g, e.rgbToHsv = b, e.rgbaToHsva = function(t) {
                const e = b(t);
                return {
                    a: t.a,
                    h: e.h,
                    s: e.s,
                    v: e.v
                }
            }, e.getRandomRgbColor = m, e.getStyleFromRgb = function(t, e) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!==e&&void 0!==e?e:1})`
            }, e.getStyleFromHsl = w, e.getStyleFromHsv = function(t, e) {
                return w(y(t), e)
            }, e.colorMix = S, e.getLinkColor = function(t, e, i) {
                var o, s;
                if (i === n.Constants.randomColorValue) return m();
                if ("mid" !== i) return i; {
                    const i = null !== (o = t.getFillColor()) && void 0 !== o ? o : t.getStrokeColor(),
                        n = null !== (s = null === e || void 0 === e ? void 0 : e.getFillColor()) && void 0 !== s ? s : null === e || void 0 === e ? void 0 : e.getStrokeColor();
                    if (i && n && e) return S(i, n, t.getRadius(), e.getRadius()); {
                        const t = null !== i && void 0 !== i ? i : n;
                        if (t) return h(t)
                    }
                }
            }, e.getLinkRandomColor = function(t, e, i) {
                const o = "string" === typeof t ? t : t.value;
                return o === n.Constants.randomColorValue ? i ? l({
                    value: o
                }) : e ? n.Constants.randomColorValue : n.Constants.midColorValue : l({
                    value: o
                })
            }, e.getHslFromAnimation = function(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }, e.getHslAnimationFromHsl = function(t, e, i) {
                const o = {
                    h: {
                        enable: !1,
                        value: t.h
                    },
                    s: {
                        enable: !1,
                        value: t.s
                    },
                    l: {
                        enable: !1,
                        value: t.l
                    }
                };
                return e && (_(o.h, e.h, i), _(o.s, e.s, i), _(o.l, e.l, i)), o
            }
        },
        1565: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Constants = void 0;
            class i {}
            e.Constants = i, i.canvasClass = "tsparticles-canvas-el", i.randomColorValue = "random", i.midColorValue = "mid", i.touchEndEvent = "touchend", i.mouseDownEvent = "mousedown", i.mouseUpEvent = "mouseup", i.mouseMoveEvent = "mousemove", i.touchStartEvent = "touchstart", i.touchMoveEvent = "touchmove", i.mouseLeaveEvent = "mouseleave", i.mouseOutEvent = "mouseout", i.touchCancelEvent = "touchcancel", i.resizeEvent = "resize", i.visibilityChangeEvent = "visibilitychange", i.noPolygonDataLoaded = "No polygon data loaded.", i.noPolygonFound = "No polygon found, you need to specify SVG url in config."
        },
        46270: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EventListeners = void 0;
            const o = i(26331),
                n = i(1565),
                s = i(31611);

            function a(t, e, i, o, n) {
                if (o) {
                    let o = {
                        passive: !0
                    };
                    "boolean" === typeof n ? o.capture = n : void 0 !== n && (o = n), t.addEventListener(e, i, o)
                } else {
                    const o = n;
                    t.removeEventListener(e, i, o)
                }
            }
            e.EventListeners = class {
                constructor(t) {
                    this.container = t, this.canPush = !0, this.mouseMoveHandler = t => this.mouseTouchMove(t), this.touchStartHandler = t => this.mouseTouchMove(t), this.touchMoveHandler = t => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = t => this.mouseTouchClick(t), this.mouseUpHandler = t => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = t => this.handleThemeChange(t), this.oldThemeChangeHandler = t => this.handleThemeChange(t), this.resizeHandler = () => this.handleWindowResize()
                }
                addListeners() {
                    this.manageListeners(!0)
                }
                removeListeners() {
                    this.manageListeners(!1)
                }
                manageListeners(t) {
                    var e;
                    const i = this.container,
                        r = i.actualOptions,
                        c = r.interactivity.detectsOn;
                    let l = n.Constants.mouseLeaveEvent;
                    if (c === o.InteractivityDetect.window) i.interactivity.element = window, l = n.Constants.mouseOutEvent;
                    else if (c === o.InteractivityDetect.parent && i.canvas.element) {
                        const t = i.canvas.element;
                        i.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode
                    } else i.interactivity.element = i.canvas.element;
                    const d = !(0, s.isSsr)() && "undefined" !== typeof matchMedia && matchMedia("(prefers-color-scheme: dark)");
                    d && (void 0 !== d.addEventListener ? a(d, "change", this.themeChangeHandler, t) : void 0 !== d.addListener && (t ? d.addListener(this.oldThemeChangeHandler) : d.removeListener(this.oldThemeChangeHandler)));
                    const u = i.interactivity.element;
                    if (!u) return;
                    const h = u;
                    (r.interactivity.events.onHover.enable || r.interactivity.events.onClick.enable) && (a(u, n.Constants.mouseMoveEvent, this.mouseMoveHandler, t), a(u, n.Constants.touchStartEvent, this.touchStartHandler, t), a(u, n.Constants.touchMoveEvent, this.touchMoveHandler, t), r.interactivity.events.onClick.enable ? (a(u, n.Constants.touchEndEvent, this.touchEndClickHandler, t), a(u, n.Constants.mouseUpEvent, this.mouseUpHandler, t), a(u, n.Constants.mouseDownEvent, this.mouseDownHandler, t)) : a(u, n.Constants.touchEndEvent, this.touchEndHandler, t), a(u, l, this.mouseLeaveHandler, t), a(u, n.Constants.touchCancelEvent, this.touchCancelHandler, t)), i.canvas.element && (i.canvas.element.style.pointerEvents = h === i.canvas.element ? "initial" : "none"), r.interactivity.events.resize && ("undefined" !== typeof ResizeObserver ? this.resizeObserver && !t ? (i.canvas.element && this.resizeObserver.unobserve(i.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && i.canvas.element && (this.resizeObserver = new ResizeObserver((t => {
                        t.find((t => t.target === i.canvas.element)) && this.handleWindowResize()
                    })), this.resizeObserver.observe(i.canvas.element)) : a(window, n.Constants.resizeEvent, this.resizeHandler, t)), document && a(document, n.Constants.visibilityChangeEvent, this.visibilityChangeHandler, t, !1)
                }
                handleWindowResize() {
                    this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout((() => {
                        var t;
                        return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize()
                    }), 500)
                }
                handleVisibilityChange() {
                    const t = this.container,
                        e = t.actualOptions;
                    this.mouseTouchFinish(), e.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
                }
                mouseDown() {
                    const t = this.container.interactivity;
                    if (t) {
                        const e = t.mouse;
                        e.clicking = !0, e.downPosition = e.position
                    }
                }
                mouseTouchMove(t) {
                    var e, i, s, a, r, c, l;
                    const d = this.container,
                        u = d.actualOptions;
                    if (void 0 === (null === (e = d.interactivity) || void 0 === e ? void 0 : e.element)) return;
                    let h;
                    d.interactivity.mouse.inside = !0;
                    const p = d.canvas.element;
                    if (t.type.startsWith("mouse")) {
                        this.canPush = !0;
                        const e = t;
                        if (d.interactivity.element === window) {
                            if (p) {
                                const t = p.getBoundingClientRect();
                                h = {
                                    x: e.clientX - t.left,
                                    y: e.clientY - t.top
                                }
                            }
                        } else if (u.interactivity.detectsOn === o.InteractivityDetect.parent) {
                            const t = e.target,
                                o = e.currentTarget,
                                n = d.canvas.element;
                            if (t && o && n) {
                                const i = t.getBoundingClientRect(),
                                    s = o.getBoundingClientRect(),
                                    a = n.getBoundingClientRect();
                                h = {
                                    x: e.offsetX + 2 * i.left - (s.left + a.left),
                                    y: e.offsetY + 2 * i.top - (s.top + a.top)
                                }
                            } else h = {
                                x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX,
                                y: null !== (s = e.offsetY) && void 0 !== s ? s : e.clientY
                            }
                        } else e.target === d.canvas.element && (h = {
                            x: null !== (a = e.offsetX) && void 0 !== a ? a : e.clientX,
                            y: null !== (r = e.offsetY) && void 0 !== r ? r : e.clientY
                        })
                    } else {
                        this.canPush = "touchmove" !== t.type;
                        const e = t,
                            i = e.touches[e.touches.length - 1],
                            o = null === p || void 0 === p ? void 0 : p.getBoundingClientRect();
                        h = {
                            x: i.clientX - (null !== (c = null === o || void 0 === o ? void 0 : o.left) && void 0 !== c ? c : 0),
                            y: i.clientY - (null !== (l = null === o || void 0 === o ? void 0 : o.top) && void 0 !== l ? l : 0)
                        }
                    }
                    const v = d.retina.pixelRatio;
                    h && (h.x *= v, h.y *= v), d.interactivity.mouse.position = h, d.interactivity.status = n.Constants.mouseMoveEvent
                }
                mouseTouchFinish() {
                    const t = this.container.interactivity;
                    if (void 0 === t) return;
                    const e = t.mouse;
                    delete e.position, delete e.clickPosition, delete e.downPosition, t.status = n.Constants.mouseLeaveEvent, e.inside = !1, e.clicking = !1
                }
                mouseTouchClick(t) {
                    const e = this.container,
                        i = e.actualOptions,
                        o = e.interactivity.mouse;
                    o.inside = !0;
                    let n = !1;
                    const s = o.position;
                    if (void 0 !== s && i.interactivity.events.onClick.enable) {
                        for (const [, t] of e.plugins)
                            if (void 0 !== t.clickPositionValid && (n = t.clickPositionValid(s), n)) break;
                        n || this.doMouseTouchClick(t), o.clicking = !1
                    }
                }
                doMouseTouchClick(t) {
                    const e = this.container,
                        i = e.actualOptions;
                    if (this.canPush) {
                        const t = e.interactivity.mouse.position;
                        if (!t) return;
                        e.interactivity.mouse.clickPosition = {
                            x: t.x,
                            y: t.y
                        }, e.interactivity.mouse.clickTime = (new Date).getTime();
                        const o = i.interactivity.events.onClick;
                        if (o.mode instanceof Array)
                            for (const e of o.mode) this.handleClickMode(e);
                        else this.handleClickMode(o.mode)
                    }
                    "touchend" === t.type && setTimeout((() => this.mouseTouchFinish()), 500)
                }
                handleThemeChange(t) {
                    const e = t.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
                        i = this.container.options.themes.find((t => t.name === e));
                    i && i.default.auto && this.container.loadTheme(e)
                }
                handleClickMode(t) {
                    const e = this.container,
                        i = e.actualOptions,
                        n = i.interactivity.modes.push.quantity,
                        a = i.interactivity.modes.remove.quantity;
                    switch (t) {
                        case o.ClickMode.push:
                            if (n > 0) {
                                const t = i.interactivity.modes.push,
                                    o = (0, s.itemFromArray)([void 0, ...t.groups]),
                                    a = void 0 !== o ? e.actualOptions.particles.groups[o] : void 0;
                                e.particles.push(n, e.interactivity.mouse, a, o)
                            }
                            break;
                        case o.ClickMode.remove:
                            e.particles.removeQuantity(a);
                            break;
                        case o.ClickMode.bubble:
                            e.bubble.clicking = !0;
                            break;
                        case o.ClickMode.repulse:
                            e.repulse.clicking = !0, e.repulse.count = 0;
                            for (const t of e.repulse.particles) t.velocity.setTo(t.initialVelocity);
                            e.repulse.particles = [], e.repulse.finish = !1, setTimeout((() => {
                                e.destroyed || (e.repulse.clicking = !1)
                            }), 1e3 * i.interactivity.modes.repulse.duration);
                            break;
                        case o.ClickMode.attract:
                            e.attract.clicking = !0, e.attract.count = 0;
                            for (const t of e.attract.particles) t.velocity.setTo(t.initialVelocity);
                            e.attract.particles = [], e.attract.finish = !1, setTimeout((() => {
                                e.destroyed || (e.attract.clicking = !1)
                            }), 1e3 * i.interactivity.modes.attract.duration);
                            break;
                        case o.ClickMode.pause:
                            e.getAnimationStatus() ? e.pause() : e.play()
                    }
                    for (const [, o] of e.plugins) o.handleClickMode && o.handleClickMode(t)
                }
            }
        },
        23939: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.calcEasing = e.collisionVelocity = e.getParticleBaseVelocity = e.getParticleDirectionAngle = e.getDistance = e.getDistances = e.getValue = e.setRangeValue = e.getRangeMax = e.getRangeMin = e.getRangeValue = e.randomInRange = e.mix = e.clamp = void 0;
            const o = i(26331),
                n = i(95638);

            function s(t) {
                const e = c(t);
                let i = r(t);
                return e === i && (i = 0), Math.random() * (e - i) + i
            }

            function a(t) {
                return "number" === typeof t ? t : s(t)
            }

            function r(t) {
                return "number" === typeof t ? t : t.min
            }

            function c(t) {
                return "number" === typeof t ? t : t.max
            }

            function l(t, e) {
                if (t === e || void 0 === e && "number" === typeof t) return t;
                const i = r(t),
                    o = c(t);
                return void 0 !== e ? {
                    min: Math.min(i, e),
                    max: Math.max(o, e)
                } : l(i, o)
            }

            function d(t, e) {
                const i = t.x - e.x,
                    o = t.y - e.y;
                return {
                    dx: i,
                    dy: o,
                    distance: Math.sqrt(i * i + o * o)
                }
            }
            e.clamp = function(t, e, i) {
                return Math.min(Math.max(t, e), i)
            }, e.mix = function(t, e, i, o) {
                return Math.floor((t * i + e * o) / (i + o))
            }, e.randomInRange = s, e.getRangeValue = a, e.getRangeMin = r, e.getRangeMax = c, e.setRangeValue = l, e.getValue = function(t) {
                const e = t.random,
                    {
                        enable: i,
                        minimumValue: o
                    } = "boolean" === typeof e ? {
                        enable: e,
                        minimumValue: 0
                    } : e;
                return a(i ? l(t.value, o) : t.value)
            }, e.getDistances = d, e.getDistance = function(t, e) {
                return d(t, e).distance
            }, e.getParticleDirectionAngle = function(t) {
                if ("number" === typeof t) return t * Math.PI / 180;
                switch (t) {
                    case o.MoveDirection.top:
                        return -Math.PI / 2;
                    case o.MoveDirection.topRight:
                        return -Math.PI / 4;
                    case o.MoveDirection.right:
                        return 0;
                    case o.MoveDirection.bottomRight:
                        return Math.PI / 4;
                    case o.MoveDirection.bottom:
                        return Math.PI / 2;
                    case o.MoveDirection.bottomLeft:
                        return 3 * Math.PI / 4;
                    case o.MoveDirection.left:
                        return Math.PI;
                    case o.MoveDirection.topLeft:
                        return -3 * Math.PI / 4;
                    case o.MoveDirection.none:
                    default:
                        return Math.random() * Math.PI * 2
                }
            }, e.getParticleBaseVelocity = function(t) {
                const e = n.Vector.origin;
                return e.length = 1, e.angle = t, e
            }, e.collisionVelocity = function(t, e, i, o) {
                return n.Vector.create(t.x * (i - o) / (i + o) + 2 * e.x * o / (i + o), t.y)
            }, e.calcEasing = function(t, e) {
                switch (e) {
                    case o.EasingType.easeOutQuad:
                        return 1 - (1 - t) ** 2;
                    case o.EasingType.easeOutCubic:
                        return 1 - (1 - t) ** 3;
                    case o.EasingType.easeOutQuart:
                        return 1 - (1 - t) ** 4;
                    case o.EasingType.easeOutQuint:
                        return 1 - (1 - t) ** 5;
                    case o.EasingType.easeOutExpo:
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                    case o.EasingType.easeOutSine:
                        return Math.sin(t * Math.PI / 2);
                    case o.EasingType.easeOutBack:
                        {
                            const e = 1.70158;
                            return 1 + (e + 1) * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2)
                        }
                    case o.EasingType.easeOutCirc:
                        return Math.sqrt(1 - Math.pow(t - 1, 2));
                    default:
                        return t
                }
            }
        },
        24587: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Plugins = void 0;
            const i = [],
                o = new Map,
                n = new Map,
                s = new Map,
                a = new Map,
                r = new Map,
                c = new Map,
                l = new Map;
            class d {
                static getPlugin(t) {
                    return i.find((e => e.id === t))
                }
                static addPlugin(t) {
                    d.getPlugin(t.id) || i.push(t)
                }
                static getAvailablePlugins(t) {
                    const e = new Map;
                    for (const o of i) o.needsPlugin(t.actualOptions) && e.set(o.id, o.getPlugin(t));
                    return e
                }
                static loadOptions(t, e) {
                    for (const o of i) o.loadOptions(t, e)
                }
                static getPreset(t) {
                    return r.get(t)
                }
                static addPreset(t, e, i = !1) {
                    !i && d.getPreset(t) || r.set(t, e)
                }
                static addShapeDrawer(t, e) {
                    d.getShapeDrawer(t) || c.set(t, e)
                }
                static getShapeDrawer(t) {
                    return c.get(t)
                }
                static getSupportedShapes() {
                    return c.keys()
                }
                static getPathGenerator(t) {
                    return l.get(t)
                }
                static addPathGenerator(t, e) {
                    d.getPathGenerator(t) || l.set(t, e)
                }
                static getInteractors(t, e = !1) {
                    let i = s.get(t);
                    return i && !e || (i = [...o.values()].map((e => e(t))), s.set(t, i)), i
                }
                static addInteractor(t, e) {
                    o.set(t, e)
                }
                static getUpdaters(t, e = !1) {
                    let i = a.get(t);
                    return i && !e || (i = [...n.values()].map((e => e(t))), a.set(t, i)), i
                }
                static addParticleUpdater(t, e) {
                    n.set(t, e)
                }
            }
            e.Plugins = d
        },
        7525: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Point = void 0;
            e.Point = class {
                constructor(t, e) {
                    this.position = t, this.particle = e
                }
            }
        },
        42234: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.QuadTree = void 0;
            const o = i(48191),
                n = i(3232),
                s = i(95407),
                a = i(23939);
            class r {
                constructor(t, e) {
                    this.rectangle = t, this.capacity = e, this.points = [], this.divided = !1
                }
                subdivide() {
                    const t = this.rectangle.position.x,
                        e = this.rectangle.position.y,
                        i = this.rectangle.size.width,
                        n = this.rectangle.size.height,
                        s = this.capacity;
                    this.northEast = new r(new o.Rectangle(t, e, i / 2, n / 2), s), this.northWest = new r(new o.Rectangle(t + i / 2, e, i / 2, n / 2), s), this.southEast = new r(new o.Rectangle(t, e + n / 2, i / 2, n / 2), s), this.southWest = new r(new o.Rectangle(t + i / 2, e + n / 2, i / 2, n / 2), s), this.divided = !0
                }
                insert(t) {
                    var e, i, o, n, s;
                    return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (s = (null === (e = this.northEast) || void 0 === e ? void 0 : e.insert(t)) || (null === (i = this.northWest) || void 0 === i ? void 0 : i.insert(t)) || (null === (o = this.southEast) || void 0 === o ? void 0 : o.insert(t)) || (null === (n = this.southWest) || void 0 === n ? void 0 : n.insert(t))) && void 0 !== s && s))
                }
                queryCircle(t, e) {
                    return this.query(new n.Circle(t.x, t.y, e))
                }
                queryCircleWarp(t, e, i) {
                    const o = i,
                        n = i;
                    return this.query(new s.CircleWarp(t.x, t.y, e, void 0 !== o.canvas ? o.canvas.size : n))
                }
                queryRectangle(t, e) {
                    return this.query(new o.Rectangle(t.x, t.y, e.width, e.height))
                }
                query(t, e) {
                    var i, o, n, s;
                    const r = null !== e && void 0 !== e ? e : [];
                    if (!t.intersects(this.rectangle)) return [];
                    for (const c of this.points) !t.contains(c.position) && (0, a.getDistance)(t.position, c.position) > c.particle.getRadius() || r.push(c.particle);
                    return this.divided && (null === (i = this.northEast) || void 0 === i || i.query(t, r), null === (o = this.northWest) || void 0 === o || o.query(t, r), null === (n = this.southEast) || void 0 === n || n.query(t, r), null === (s = this.southWest) || void 0 === s || s.query(t, r)), r
                }
            }
            e.QuadTree = r
        },
        62679: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Range = void 0;
            e.Range = class {
                constructor(t, e) {
                    this.position = {
                        x: t,
                        y: e
                    }
                }
            }
        },
        48191: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Rectangle = void 0;
            const o = i(62679);
            class n extends o.Range {
                constructor(t, e, i, o) {
                    super(t, e), this.size = {
                        height: o,
                        width: i
                    }
                }
                contains(t) {
                    const e = this.size.width,
                        i = this.size.height,
                        o = this.position;
                    return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i
                }
                intersects(t) {
                    const e = t,
                        i = t,
                        o = this.size.width,
                        n = this.size.height,
                        s = this.position,
                        a = t.position;
                    if (void 0 !== i.radius) return i.intersects(this);
                    if (void 0 !== e.size) {
                        const t = e.size,
                            i = t.width,
                            r = t.height;
                        return a.x < s.x + o && a.x + i > s.x && a.y < s.y + n && a.y + r > s.y
                    }
                    return !1
                }
            }
            e.Rectangle = n
        },
        31611: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rectBounce = e.circleBounce = e.circleBounceDataFromParticle = e.divMode = e.singleDivModeExecute = e.divModeExecute = e.isDivModeEnabled = e.deepExtend = e.calculateBounds = e.areBoundsInside = e.isPointInside = e.itemFromArray = e.arrayRandomIndex = e.loadFont = e.isInArray = e.cancelAnimation = e.animate = e.isSsr = void 0;
            const o = i(26331),
                n = i(23939),
                s = i(95638);

            function a(t, e, i, o, n, s) {
                const a = {
                    bounced: !1
                };
                return e.min >= o.min && e.min <= o.max && e.max >= o.min && e.max <= o.max && (t.max >= i.min && t.max <= (i.max + i.min) / 2 && n > 0 || t.min <= i.max && t.min > (i.max + i.min) / 2 && n < 0) && (a.velocity = n * -s, a.bounced = !0), a
            }

            function r(t, e) {
                if (e instanceof Array) {
                    for (const i of e)
                        if (t.matches(i)) return !0;
                    return !1
                }
                return t.matches(e)
            }

            function c() {
                return "undefined" === typeof window || !window || "undefined" === typeof window.document || !window.document
            }

            function l(t, e) {
                return t === e || e instanceof Array && e.indexOf(t) > -1
            }

            function d(t) {
                return Math.floor(Math.random() * t.length)
            }

            function u(t, e, i) {
                let n = !0;
                return i && i !== o.OutModeDirection.bottom || (n = t.top < e.height), !n || i && i !== o.OutModeDirection.left || (n = t.right > 0), !n || i && i !== o.OutModeDirection.right || (n = t.left < e.width), !n || i && i !== o.OutModeDirection.top || (n = t.bottom > 0), n
            }

            function h(t, e) {
                return {
                    bottom: t.y + e,
                    left: t.x - e,
                    right: t.x + e,
                    top: t.y - e
                }
            }

            function p(t, e) {
                const i = t.selectors;
                if (i instanceof Array)
                    for (const o of i) e(o, t);
                else e(i, t)
            }
            e.isSsr = c, e.animate = function() {
                return c() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
            }, e.cancelAnimation = function() {
                return c() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
            }, e.isInArray = l, e.loadFont = async function(t) {
                var e, i;
                try {
                    await document.fonts.load(`${null!==(e=t.weight)&&void 0!==e?e:"400"} 36px '${null!==(i=t.font)&&void 0!==i?i:"Verdana"}'`)
                } catch (o) {}
            }, e.arrayRandomIndex = d, e.itemFromArray = function(t, e, i = !0) {
                return t[void 0 !== e && i ? e % t.length : d(t)]
            }, e.isPointInside = function(t, e, i, o) {
                return u(h(t, null !== i && void 0 !== i ? i : 0), e, o)
            }, e.areBoundsInside = u, e.calculateBounds = h, e.deepExtend = function t(e, ...i) {
                for (const o of i) {
                    if (void 0 === o || null === o) continue;
                    if ("object" !== typeof o) {
                        e = o;
                        continue
                    }
                    const i = Array.isArray(o);
                    !i || "object" === typeof e && e && Array.isArray(e) ? i || "object" === typeof e && e && !Array.isArray(e) || (e = {}) : e = [];
                    for (const n in o) {
                        if ("__proto__" === n) continue;
                        const i = o[n],
                            s = "object" === typeof i,
                            a = e;
                        a[n] = s && Array.isArray(i) ? i.map((e => t(a[n], e))) : t(a[n], i)
                    }
                }
                return e
            }, e.isDivModeEnabled = function(t, e) {
                return e instanceof Array ? !!e.find((e => e.enable && l(t, e.mode))) : l(t, e.mode)
            }, e.divModeExecute = function(t, e, i) {
                if (e instanceof Array)
                    for (const o of e) {
                        const e = o.mode;
                        o.enable && l(t, e) && p(o, i)
                    } else {
                        const o = e.mode;
                        e.enable && l(t, o) && p(e, i)
                    }
            }, e.singleDivModeExecute = p, e.divMode = function(t, e) {
                if (e && t) return t instanceof Array ? t.find((t => r(e, t.selectors))) : r(e, t.selectors) ? t : void 0
            }, e.circleBounceDataFromParticle = function(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: s.Vector.create((0, n.getValue)(t.options.bounce.horizontal), (0, n.getValue)(t.options.bounce.vertical))
                }
            }, e.circleBounce = function(t, e) {
                const i = t.velocity.x,
                    o = t.velocity.y,
                    s = t.position,
                    a = e.position;
                if (i * (a.x - s.x) + o * (a.y - s.y) >= 0) {
                    const i = -Math.atan2(a.y - s.y, a.x - s.x),
                        o = t.mass,
                        r = e.mass,
                        c = t.velocity.rotate(i),
                        l = e.velocity.rotate(i),
                        d = (0, n.collisionVelocity)(c, l, o, r),
                        u = (0, n.collisionVelocity)(l, c, o, r),
                        h = d.rotate(-i),
                        p = u.rotate(-i);
                    t.velocity.x = h.x * t.factor.x, t.velocity.y = h.y * t.factor.y, e.velocity.x = p.x * e.factor.x, e.velocity.y = p.y * e.factor.y
                }
            }, e.rectBounce = function(t, e) {
                const i = h(t.getPosition(), t.getRadius()),
                    o = a({
                        min: i.left,
                        max: i.right
                    }, {
                        min: i.top,
                        max: i.bottom
                    }, {
                        min: e.left,
                        max: e.right
                    }, {
                        min: e.top,
                        max: e.bottom
                    }, t.velocity.x, (0, n.getValue)(t.options.bounce.horizontal));
                o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
                const s = a({
                    min: i.top,
                    max: i.bottom
                }, {
                    min: i.left,
                    max: i.right
                }, {
                    min: e.top,
                    max: e.bottom
                }, {
                    min: e.left,
                    max: e.right
                }, t.velocity.y, (0, n.getValue)(t.options.bounce.vertical));
                s.bounced && (void 0 !== s.velocity && (t.velocity.y = s.velocity), void 0 !== s.position && (t.position.y = s.position))
            }
        },
        97373: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(i(51680), e), n(i(3232), e), n(i(95407), e), n(i(72323), e), n(i(1565), e), n(i(46270), e), n(i(23939), e), n(i(24587), e), n(i(7525), e), n(i(42234), e), n(i(62679), e), n(i(48191), e), n(i(31611), e)
        },
        35961: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadFull = void 0;
            const o = i(28788),
                n = i(86910),
                s = i(2453),
                a = i(57175),
                r = i(53785),
                c = i(84339),
                l = i(73737),
                d = i(52124);
            e.loadFull = async function(t) {
                await (0, o.loadSlim)(t), await (0, n.loadExternalTrailInteraction)(t), await (0, d.loadRollUpdater)(t), await (0, s.loadTiltUpdater)(t), await (0, a.loadWobbleUpdater)(t), await (0, r.loadAbsorbersPlugin)(t), await (0, c.loadEmittersPlugin)(t), await (0, l.loadPolygonMaskPlugin)(t)
            }
        },
        96824: function(t, e, i) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, i, o) {
                    void 0 === o && (o = i), Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, o) {
                    void 0 === o && (o = i), t[o] = e[i]
                }),
                n = this && this.__exportStar || function(t, e) {
                    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || o(e, t, i)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tsParticles = e.pJSDom = e.particlesJS = e.Main = e.Rectangle = e.Point = e.Constants = e.CircleWarp = e.Circle = void 0;
            const s = i(20021),
                a = i(39359);
            Object.defineProperty(e, "Main", {
                enumerable: !0,
                get: function() {
                    return a.Main
                }
            });
            const r = i(97373);
            Object.defineProperty(e, "Circle", {
                enumerable: !0,
                get: function() {
                    return r.Circle
                }
            }), Object.defineProperty(e, "CircleWarp", {
                enumerable: !0,
                get: function() {
                    return r.CircleWarp
                }
            }), Object.defineProperty(e, "Constants", {
                enumerable: !0,
                get: function() {
                    return r.Constants
                }
            }), Object.defineProperty(e, "Point", {
                enumerable: !0,
                get: function() {
                    return r.Point
                }
            }), Object.defineProperty(e, "Rectangle", {
                enumerable: !0,
                get: function() {
                    return r.Rectangle
                }
            });
            const c = i(35961),
                l = new a.Main;
            e.tsParticles = l, l.init();
            const {
                particlesJS: d,
                pJSDom: u
            } = (0, s.initPjs)(l);
            e.particlesJS = d, e.pJSDom = u, (0, c.loadFull)(l), n(i(95638), e), n(i(45624), e), n(i(26331), e), n(i(35456), e), n(i(4737), e), n(i(39361), e), n(i(51680), e), n(i(72323), e), n(i(23939), e), n(i(31611), e), n(i(45008), e), n(i(43936), e), n(i(87051), e), n(i(24260), e), n(i(37472), e)
        },
        39359: function(t, e, i) {
            "use strict";
            var o, n = this && this.__classPrivateFieldSet || function(t, e, i, o, n) {
                    if ("m" === o) throw new TypeError("Private method is not writable");
                    if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i
                },
                s = this && this.__classPrivateFieldGet || function(t, e, i, o) {
                    if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Main = void 0;
            const a = i(97373),
                r = i(26301);
            e.Main = class {
                constructor() {
                    o.set(this, void 0), n(this, o, !1, "f")
                }
                init() {
                    s(this, o, "f") || n(this, o, !0, "f")
                }
                async loadFromArray(t, e, i) {
                    return r.Loader.load(t, e, i)
                }
                async load(t, e) {
                    return r.Loader.load(t, e)
                }
                async set(t, e, i) {
                    return r.Loader.set(t, e, i)
                }
                async loadJSON(t, e, i) {
                    return r.Loader.loadJSON(t, e, i)
                }
                async setJSON(t, e, i, o) {
                    return r.Loader.setJSON(t, e, i, o)
                }
                setOnClickHandler(t) {
                    r.Loader.setOnClickHandler(t)
                }
                dom() {
                    return r.Loader.dom()
                }
                domItem(t) {
                    return r.Loader.domItem(t)
                }
                async refresh() {
                    for (const t of this.dom()) await t.refresh()
                }
                async addShape(t, e, i, o, n) {
                    let s;
                    s = "function" === typeof e ? {
                        afterEffect: o,
                        destroy: n,
                        draw: e,
                        init: i
                    } : e, a.Plugins.addShapeDrawer(t, s), await this.refresh()
                }
                async addPreset(t, e, i = !1) {
                    a.Plugins.addPreset(t, e, i), await this.refresh()
                }
                async addPlugin(t) {
                    a.Plugins.addPlugin(t), await this.refresh()
                }
                async addPathGenerator(t, e) {
                    a.Plugins.addPathGenerator(t, e), await this.refresh()
                }
                async addInteractor(t, e) {
                    a.Plugins.addInteractor(t, e), await this.refresh()
                }
                async addParticleUpdater(t, e) {
                    a.Plugins.addParticleUpdater(t, e), await this.refresh()
                }
            }, o = new WeakMap
        },
        20021: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.initPjs = void 0;
            e.initPjs = t => {
                const e = (e, i) => t.load(e, i);
                e.load = (e, i, o) => {
                    t.loadJSON(e, i).then((t => {
                        t && o(t)
                    })).catch((() => {
                        o(void 0)
                    }))
                }, e.setOnClickHandler = e => {
                    t.setOnClickHandler(e)
                };
                return {
                    particlesJS: e,
                    pJSDom: t.dom()
                }
            }
        },
        28788: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadSlim = void 0;
            const o = i(94472),
                n = i(56717),
                s = i(29733),
                a = i(93202),
                r = i(36504),
                c = i(302),
                l = i(95313),
                d = i(52770),
                u = i(33066),
                h = i(93806),
                p = i(40643),
                v = i(12179),
                y = i(25816),
                f = i(74784),
                g = i(18989),
                b = i(34441),
                m = i(46086),
                w = i(4842),
                S = i(99193),
                _ = i(41966),
                P = i(44482),
                O = i(40884),
                M = i(21004);
            e.loadSlim = async function(t) {
                await (0, d.loadExternalAttractInteraction)(t), await (0, _.loadExternalBounceInteraction)(t), await (0, l.loadExternalBubbleInteraction)(t), await (0, s.loadExternalConnectInteraction)(t), await (0, u.loadExternalGrabInteraction)(t), await (0, w.loadExternalRepulseInteraction)(t), await (0, p.loadParticlesAttractInteraction)(t), await (0, g.loadParticlesCollisionsInteraction)(t), await (0, O.loadParticlesLinksInteraction)(t), await (0, o.loadCircleShape)(t), await (0, r.loadImageShape)(t), await (0, S.loadLineShape)(t), await (0, c.loadPolygonShape)(t), await (0, v.loadSquareShape)(t), await (0, h.loadStarShape)(t), await (0, P.loadTextShape)(t), await (0, n.loadLifeUpdater)(t), await (0, a.loadOpacityUpdater)(t), await (0, M.loadSizeUpdater)(t), await (0, b.loadAngleUpdater)(t), await (0, f.loadColorUpdater)(t), await (0, y.loadStrokeColorUpdater)(t), await (0, m.loadOutModesUpdater)(t)
            }
        }
    }
]);