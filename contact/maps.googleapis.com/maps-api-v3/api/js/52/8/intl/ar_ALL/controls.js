google.maps.__gjsload__('controls', function(_) {
    var cva, dva, EG, eva, FG, fva, gva, hva, IG, jva, kva, lva, mva, JG, nva, pva, KG, LG, MG, qva, NG, tva, sva, rva, OG, QG, vva, wva, xva, yva, zva, Ava, uva, RG, UG, Cva, Bva, VG, WG, Eva, Dva, Fva, Gva, Hva, YG, ZG, Kva, Iva, Jva, Lva, $G, Ova, Nva, bH, dH, cH, eH, Qva, Rva, Sva, fH, Tva, gH, Uva, hH, iH, Wva, Vva, Xva, Yva, jH, lH, kH, nH, Zva, awa, oH, bwa, pH, cwa, fwa, dwa, ewa, iwa, hwa, gwa, kwa, qH, lwa, rH, sH, tH, owa, nwa, mwa, uH, pwa, qwa, rwa, swa, vH, twa, uwa, wwa, vwa, wH, xwa, zwa, ywa, xH, zH, Awa, Bwa, AH, Cwa, CH, BH, DH, EH, FH, Dwa, GH, HH, Ewa, IH, Fwa, Gwa, Hwa, JH, Iwa, Jwa, Mwa, Nwa, Kwa, KH, Pwa, Owa,
        Qwa, MH, LH, Rwa, Swa, Twa, NH, cxa, Zwa, exa, kxa, PH, OH, lxa, bxa, dxa, Wwa, Ywa, mxa, Xwa, axa, fxa, Vwa, oxa, pxa, qxa, rxa, sxa, QH, Uwa, hxa, jxa, ixa, gxa, RH, $wa, txa, uxa, nxa, SH, TH, UH, xxa, VH, WH, XH, yxa, zxa, Axa, YH, ZH, Bxa, Cxa, $H, Dxa, Fxa, Exa, aI, ova;
    cva = function(a, b) {
        switch (_.wx(b)) {
            case 1:
                "ltr" !== a.dir && (a.dir = "ltr");
                break;
            case -1:
                "rtl" !== a.dir && (a.dir = "rtl");
                break;
            default:
                a.removeAttribute("dir")
        }
    };
    dva = function(a, b, c) {
        _.Zp(a, b, "animate", c)
    };
    EG = function(a) {
        a.style.textAlign = _.Av.Nb() ? "right" : "left"
    };
    eva = function(a, b) {
        if (!(b instanceof _.qb || b instanceof _.qb)) {
            b = "object" == typeof b && b.ug ? b.Tc() : String(b);
            b: {
                var c = b;
                if (_.Lea) {
                    try {
                        var d = new URL(c)
                    } catch (e) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (e) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" !== c || (b = "about:invalid#zClosurez");
            b = _.rb(b)
        }
        a.href = _.Qm(b)
    };
    FG = function(a) {
        return a ? "none" !== a.style.display : !1
    };
    fva = function(a, b, c) {
        if (!a || !b || "number" !== typeof c) return null;
        c = Math.pow(2, -c);
        var d = a.fromLatLngToPoint(b);
        return _.sx(a.fromPointToLatLng(new _.R(d.x + c, d.y)), b)
    };
    gva = function(a, b, c) {
        for (var d = "string" === typeof a ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a)
    };
    hva = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    _.GG = function(a, b) {
        a.classList ? a.classList.remove(b) : _.sha(a, b) && _.rha(a, Array.prototype.filter.call(a.classList ? a.classList : _.yn(a).match(/\S+/g) || [], function(c) {
            return c != b
        }).join(" "))
    };
    _.HG = function(a) {
        _.GG(a, "gmnoscreen");
        _.zn(a, "gmnoprint")
    };
    _.iva = function(a) {
        _.ej.Wc ? a.style.styleFloat = "left" : a.style.cssFloat = "left"
    };
    IG = function(a, b) {
        a.style.WebkitBorderRadius = b;
        a.style.borderRadius = b;
        a.style.MozBorderRadius = b
    };
    jva = function(a, b) {
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderTopLeftRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    kva = function(a, b) {
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderBottomRightRadius = b
    };
    lva = function(a) {
        var b = _.$m(2);
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderTopLeftRadius = b
    };
    mva = function(a) {
        var b = _.$m(2);
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderBottomRightRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    JG = function(a, b) {
        b = b || {};
        var c = a.style;
        c.color = "black";
        c.fontFamily = "Roboto,Arial,sans-serif";
        _.Un(a);
        _.Tn(a);
        b.title && a.setAttribute("title", b.title);
        c = _.Wn() ? 1.38 : 1;
        a = a.style;
        a.fontSize = _.$m(b.fontSize || 11);
        a.backgroundColor = "#fff";
        for (var d = [], e = 0, f = _.Ld(b.padding); e < f; ++e) d.push(_.$m(c * b.padding[e]));
        a.padding = d.join(" ");
        b.width && (a.width = _.$m(c * b.width))
    };
    nva = function() {
        return _.ega.some(function(a) {
            return !!document[a]
        })
    };
    pva = function(a, b) {
        var c = ova[b];
        if (!c) {
            var d = hva(b);
            c = d;
            void 0 === a.style[d] && (d = _.Cz() + _.Soa(d), void 0 !== a.style[d] && (c = d));
            ova[b] = c
        }
        return c
    };
    KG = function(a, b, c) {
        if ("string" === typeof b)(b = pva(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = pva(c, d);
                f && (c.style[f] = e)
            }
    };
    LG = function(a, b, c) {
        if (b instanceof _.an) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = _.Dz(d, !1);
        a.style.top = _.Dz(b, !1)
    };
    MG = function(a) {
        return 40 < a ? a / 2 - 2 : 28 > a ? a - 10 : 18
    };
    qva = function(a, b) {
        _.Vta(a, b);
        b = a.items[b];
        return {
            url: _.Em(a.bd.url, !a.bd.Lk, a.bd.Lk),
            size: a.Bd,
            scaledSize: a.bd.size,
            origin: b.Le,
            anchor: a.anchor
        }
    };
    NG = function(a, b, c, d, e, f, g) {
        this.label = a || "";
        this.alt = b || "";
        this.C = f || null;
        this.jf = c;
        this.h = d;
        this.m = e;
        this.j = g || null
    };
    tva = function(a, b) {
        var c = this;
        this.F = a;
        this.m = {};
        this.C = [];
        this.j = this.D = this.h = null;
        b = b || ["roadmap", "satellite", "hybrid", "terrain"];
        var d = _.mb(b, "terrain") && _.mb(b, "roadmap"),
            e = _.mb(b, "hybrid") && _.mb(b, "satellite");
        _.M(this, "maptypeid_changed", function() {
            var k = c.get("mapTypeId");
            c.j && c.j.set("display", "satellite" === k);
            c.h && c.h.set("display", "roadmap" === k)
        });
        _.M(this, "zoom_changed", function() {
            if (c.h) {
                var k = c.get("zoom");
                c.h.set("enabled", k <= c.D)
            }
        });
        b = _.A(b);
        for (var f = b.next(); !f.done; f = b.next())
            if (f =
                f.value, "hybrid" !== f || !e)
                if ("terrain" !== f || !d) {
                    var g = a.get(f);
                    if (g) {
                        var h = null;
                        "roadmap" === f ? d && (this.h = rva(this, "terrain", "roadmap", "terrain", void 0, "\u0635\u063a\u0651\u0631 \u0644\u0625\u0638\u0647\u0627\u0631 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0634\u0627\u0631\u0639 \u0628\u0627\u0644\u062a\u0636\u0627\u0631\u064a\u0633"), h = [
                            [this.h]
                        ], this.D = a.get("terrain").maxZoom) : "satellite" !== f && "hybrid" !== f || !e || (this.j = sva(this), h = [
                            [this.j]
                        ]);
                        this.C.push(new NG(g.name, g.alt, "mapTypeId", f, null,
                            null, h))
                    }
                }
    };
    sva = function(a) {
        a = rva(a, "hybrid", "satellite", "labels", "\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a");
        a.set("enabled", !0);
        return a
    };
    rva = function(a, b, c, d, e, f) {
        var g = a.F.get(b);
        e = new NG(e || g.name, g.alt, d, !0, !1, f);
        a.m[b] = {
            mapTypeId: c,
            Zk: d,
            value: !0
        };
        a.m[c] = {
            mapTypeId: c,
            Zk: d,
            value: !1
        };
        return e
    };
    OG = function(a) {
        this.j = a;
        this.h = null
    };
    QG = function(a) {
        _.DB.call(this, a, PG);
        _.VA(a, PG) || _.UA(a, PG, {
            options: 0
        }, ["div", , 1, 0, [" ", ["img", 8, 1, 1], " ", ["button", , 1, 2, [" ", ["img", 8, 1, 3], " ", ["img", 8, 1, 4], " ", ["img", 8, 1, 5], " "]], " ", ["button", , 1, 6, [" ", ["img", 8, 1, 7], " ", ["img", 8, 1, 8], " ", ["img", 8, 1, 9], " "]], " ", ["button", , 1, 10, [" ", ["img", 8, 1, 11], " ", ["img", 8, 1, 12], " ", ["img", 8, 1, 13], " "]], " <div> ", ["div", , , 14, ["\u062a\u062f\u0648\u064a\u0631 \u0627\u0644\u0639\u0631\u0636"]], " ", ["div", , , 15], " ", ["div", , , 16], " </div> "]], [], uva())
    };
    vva = function(a) {
        return _.W(a.options, "", -10)
    };
    wva = function(a) {
        return _.W(a.options, "", -7, -3)
    };
    xva = function(a) {
        return _.W(a.options, "", -8, -3)
    };
    yva = function(a) {
        return _.W(a.options, "", -9, -3)
    };
    zva = function(a) {
        return _.W(a.options, "", -12)
    };
    Ava = function(a) {
        return _.W(a.options, "", -11)
    };
    uva = function() {
        return [
            ["$t", "t-avKK8hDgg9Q", "$a", [7, , , , , "gm-compass"]],
            ["$a", [8, , , , function(a) {
                return _.W(a.options, "", -3, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "48", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [0, , , , vva, "aria-label", , , 1], "$a", [0, , , , vva, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.counterclockwise"
            }, "jsaction", , 1]],
            ["$a", [8, , , , wva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , xva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , yva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-needle", , 1], "$a", [0, , , , zva, "aria-label", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.sA("-webkit-transform", "rotate(" + String(_.W(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.W(a.options, 0, -1)) + "deg)"
            }, "-webkit-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.sA("-ms-transform", "rotate(" + String(_.W(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.W(a.options, 0, -1)) + "deg)"
            }, "-ms-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.sA("-moz-transform", "rotate(" + String(_.W(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.W(a.options, 0, -1)) + "deg)"
            }, "-moz-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.sA("transform", "rotate(" + String(_.W(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.W(a.options, 0, -1)) + "deg)"
            }, "transform", , , 1], "$a", [0, , , , zva, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.north"
            }, "jsaction", , 1]],
            ["$a", [8, , , , function(a) {
                return _.W(a.options, "", -4, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.W(a.options,
                    "", -5, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.W(a.options, "", -6, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [7, , , , , "gm-compass-turn-opposite", , 1], "$a", [0, , , , Ava, "aria-label", , , 1], "$a", [0, , , , Ava, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.clockwise"
            }, "jsaction", , 1]],
            ["$a", [8, , , , wva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , xva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , yva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [7, , , , , "gm-compass-tooltip-text", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-outer", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-inner", , 1]]
        ]
    };
    RG = function(a) {
        _.F.call(this, a)
    };
    UG = function(a) {
        a = _.Pa(a);
        delete SG[a];
        _.eb(SG) && TG && TG.stop()
    };
    Cva = function() {
        TG || (TG = new _.Ii(function() {
            Bva()
        }, 20));
        var a = TG;
        a.isActive() || a.start()
    };
    Bva = function() {
        var a = _.Ra();
        _.vl(SG, function(b) {
            Dva(b, a)
        });
        _.eb(SG) || Cva()
    };
    VG = function() {
        _.Ci.call(this);
        this.h = 0;
        this.endTime = this.startTime = null
    };
    WG = function(a, b, c, d) {
        VG.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.m = a;
        this.D = b;
        this.duration = c;
        this.C = d;
        this.coords = [];
        this.progress = 0
    };
    Eva = function(a) {
        if (0 == a.h) a.progress = 0, a.coords = a.m;
        else if (1 == a.h) return;
        UG(a);
        var b = _.Ra();
        a.startTime = b; - 1 == a.h && (a.startTime -= a.duration * a.progress);
        a.endTime = a.startTime + a.duration;
        a.progress || a.j("begin");
        a.j("play"); - 1 == a.h && a.j("resume");
        a.h = 1;
        var c = _.Pa(a);
        c in SG || (SG[c] = a);
        Cva();
        Dva(a, b)
    };
    Dva = function(a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        Fva(a, a.progress);
        1 == a.progress ? (a.h = 0, UG(a), a.j("finish"), a.j("end")) : 1 == a.h && a.j("animate")
    };
    Fva = function(a, b) {
        "function" === typeof a.C && (b = a.C(b));
        a.coords = Array(a.m.length);
        for (var c = 0; c < a.m.length; c++) a.coords[c] = (a.D[c] - a.m[c]) * b + a.m[c]
    };
    Gva = function(a, b) {
        _.bi.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.h
    };
    Hva = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    YG = function(a, b, c) {
        var d = this;
        this.j = a;
        b /= 40;
        a.ra.style.transform = "scale(" + b + ")";
        a.ra.style.transformOrigin = "left";
        a.ra.dataset.controlWidth = String(Math.round(48 * b));
        a.ra.dataset.controlHeight = String(Math.round(48 * b));
        a.addListener("compass.clockwise", "click", function(e) {
            return Iva(d, e, !0)
        });
        a.addListener("compass.counterclockwise", "click", function(e) {
            return Iva(d, e, !1)
        });
        a.addListener("compass.north", "click", function(e) {
            var f = d.get("pov");
            if (f) {
                var g = _.Um(f.heading, 360);
                Jva(d, g, 180 > g ? 0 : 360, f.pitch,
                    0);
                Kva(e)
            }
        });
        this.h = null;
        this.m = !1;
        _.Cm(XG, c)
    };
    ZG = function(a) {
        var b = a.get("mapSize"),
            c = a.get("panControl"),
            d = !!a.get("disableDefaultUI");
        a.j.ra.style.visibility = c || void 0 === c && !d && b && 200 <= b.width && 200 <= b.height ? "" : "hidden";
        _.N(a.j.ra, "resize")
    };
    Kva = function(a) {
        var b = _.nz(a) ? "Cmcmi" : "Cmcki";
        _.P(window, _.nz(a) ? 171336 : 171335);
        _.Q(window, b)
    };
    Iva = function(a, b, c) {
        var d = a.get("pov");
        if (d) {
            var e = _.Um(d.heading, 360);
            Jva(a, e, c ? 90 * Math.floor((e + 100) / 90) : 90 * Math.ceil((e - 100) / 90), d.pitch, d.pitch);
            Kva(b)
        }
    };
    Jva = function(a, b, c, d, e) {
        var f = new _.Yp;
        a.h && a.h.stop();
        b = a.h = new WG([b, d], [c, e], 1200, Hva);
        dva(f, b, function(g) {
            return Lva(a, !1, g)
        });
        _.Doa(f, b, "finish", function(g) {
            return Lva(a, !0, g)
        });
        Eva(b)
    };
    Lva = function(a, b, c) {
        a.m = !0;
        var d = a.get("pov");
        d && (a.set("pov", {
            heading: c.coords[0],
            pitch: c.coords[1],
            zoom: d.zoom
        }), a.m = !1, b && (a.h = null))
    };
    $G = function(a, b, c, d) {
        a.innerText = "";
        b = _.A(b ? 1 == c ? [_.er["fullscreen_exit_normal_dark.svg"], _.er["fullscreen_exit_hover_dark.svg"], _.er["fullscreen_exit_active_dark.svg"]] : [_.er["fullscreen_exit_normal.svg"], _.er["fullscreen_exit_hover.svg"], _.er["fullscreen_exit_active.svg"]] : 1 == c ? [_.er["fullscreen_enter_normal_dark.svg"], _.er["fullscreen_enter_hover_dark.svg"], _.er["fullscreen_enter_active_dark.svg"]] : [_.er["fullscreen_enter_normal.svg"], _.er["fullscreen_enter_hover.svg"], _.er["fullscreen_enter_active.svg"]]);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.$m(MG(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e)
        }
    };
    Ova = function(a, b, c, d) {
        var e = this;
        this.m = a;
        this.C = d;
        this.h = b;
        this.h.style.cursor = "pointer";
        this.h.setAttribute("aria-pressed", !1);
        this.ud = c;
        this.j = nva();
        this.D = [];
        this.F = function() {
            e.ud.set(_.tda(e.m))
        };
        this.refresh = function() {
            var f = e.get("display"),
                g = !!e.get("disableDefaultUI");
            _.hz(e.h, (void 0 === f && !g || !!f) && e.j);
            _.N(e.h, "resize")
        };
        this.j && (_.Cm(XG, a), this.h.setAttribute("class", "gm-control-active gm-fullscreen-control"), IG(this.h, _.$m(_.JB(d))), this.h.style.width = this.h.style.height = _.$m(d), _.mz(this.h,
            "0 1px 4px -1px rgba(0,0,0,0.3)"), a = this.get("controlStyle") || 0, $G(this.h, this.ud.get(), a, d), this.h.style.overflow = "hidden", _.gf(this.h, "click", function(f) {
            var g = _.nz(f) ? 164676 : 164675;
            _.Q(window, _.nz(f) ? "Fscmi" : "Fscki");
            _.P(window, g);
            if (e.ud.get()) {
                f = _.A(_.cga);
                for (g = f.next(); !g.done; g = f.next())
                    if (g = g.value, g in document) {
                        document[g]();
                        break
                    }
                e.h.setAttribute("aria-pressed", !1)
            } else {
                f = _.A(_.dga);
                for (g = f.next(); !g.done; g = f.next()) e.D.push(_.gf(document, g.value, e.F));
                f = e.m;
                g = _.A(_.fga);
                for (var h = g.next(); !h.done; h =
                    g.next())
                    if (h = h.value, h in f) {
                        f[h]();
                        break
                    }
                e.h.setAttribute("aria-pressed", !0)
            }
        }));
        _.M(this, "disabledefaultui_changed", this.refresh);
        _.M(this, "display_changed", this.refresh);
        _.M(this, "maptypeid_changed", function() {
            var f = "streetview" == e.get("mapTypeId") ? 1 : 0;
            e.set("controlStyle", f);
            e.h.style.margin = _.$m(e.C >> 2);
            e.refresh()
        });
        _.M(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            null != f && (e.h.style.backgroundColor = Mva[f].backgroundColor, e.j && $G(e.h, e.ud.get(), f, e.C))
        });
        this.ud.addListener(function() {
            _.N(e.m,
                "resize");
            e.ud.get() || Nva(e);
            if (e.j) {
                var f = e.get("controlStyle") || 0;
                $G(e.h, e.ud.get(), f, e.C)
            }
        });
        this.refresh()
    };
    Nva = function(a) {
        for (var b = _.A(a.D), c = b.next(); !c.done; c = b.next()) _.bf(c.value);
        a.D.length = 0
    };
    _.aH = function(a, b) {
        b = void 0 === b ? document.head : b;
        _.Un(a);
        _.Tn(a);
        _.Cm(Pva, b);
        _.zn(a, "gm-style-cc");
        a.style.position = "relative";
        b = _.Rn("div", a);
        _.Rn("div", b).style.width = _.$m(1);
        var c = a.gs = _.Rn("div", b);
        c.style.backgroundColor = "#f5f5f5";
        c.style.width = "auto";
        c.style.height = "100%";
        c.style.marginLeft = _.$m(1);
        _.kz(b, .7);
        b.style.width = "100%";
        b.style.height = "100%";
        _.Pn(b);
        b = a.Tj = _.Rn("div", a);
        b.style.position = "relative";
        b.style.paddingLeft = b.style.paddingRight = _.$m(6);
        b.style.boxSizing = "border-box";
        b.style.fontFamily =
            "Roboto,Arial,sans-serif";
        b.style.fontSize = _.$m(10);
        b.style.color = "#000000";
        b.style.whiteSpace = "nowrap";
        b.style.direction = "ltr";
        b.style.textAlign = "right";
        a.style.height = _.$m(14);
        a.style.lineHeight = _.$m(14);
        b.style.verticalAlign = "middle";
        b.style.display = "inline-block";
        return b
    };
    bH = function(a) {
        a.gs && (a.gs.style.backgroundColor = "#000", a.Tj.style.color = "#fff")
    };
    dH = function(a, b, c) {
        _.HG(a);
        _.Sn(a, 1000001);
        this.fa = a;
        this.m = c;
        this.j = _.Rn("div", a);
        this.C = _.aH(this.j, b);
        2 === c && bH(this.j);
        a = _.dr("\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d");
        this.C.appendChild(a);
        a.textContent = "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d";
        a.style.color = 1 === this.m ? "#000000" : "#fff";
        a.style.display = "inline-block";
        a.style.fontFamily =
            "inherit";
        a.style.lineHeight = "inherit";
        _.fz(a, "click", this);
        this.h = a;
        a = new Image;
        a.src = 1 === this.m ? _.er["keyboard_icon.svg"] : _.er["keyboard_icon_dark.svg"];
        a.alt = "";
        a.style.height = "10px";
        a.style.width = "16px";
        a.style.verticalAlign = "middle";
        this.D = a;
        cH(this)
    };
    cH = function(a) {
        _.Ca(function(b) {
            _.N(a.fa, "resize");
            b.h = 0
        })
    };
    eH = function(a, b) {
        var c = this;
        this.j = a;
        this.C = b;
        this.h = document.activeElement === this.element;
        this.fa = _.Rn("div");
        this.element = Qva(this);
        Rva(this);
        _.gf(this.element, "focus", function() {
            c.m()
        });
        _.gf(this.element, "blur", function() {
            c.h = !1;
            Rva(c)
        });
        _.M(this, "update", function() {
            c.h && Sva(c)
        });
        _.lf(a, "update", this)
    };
    Qva = function(a) {
        var b = _.dr("\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d");
        a.fa.appendChild(b);
        _.Sn(b, 1000002);
        b.style.position = "absolute";
        b.style.backgroundColor = "transparent";
        b.style.border = "none";
        b.style.outlineOffset = "3px";
        _.fz(b, "click", a.j.h);
        return b
    };
    Rva = function(a) {
        a.element.style.right = "0px";
        a.element.style.bottom = "0px";
        a.element.style.transform = "translateX(100%)"
    };
    Sva = function(a) {
        var b = a.j.h.getBoundingClientRect(),
            c = b.height,
            d = b.width,
            e = b.bottom;
        b = b.right;
        var f = a.C.getBoundingClientRect(),
            g = f.bottom;
        f = f.right;
        a.element.style.transform = "";
        a.element.style.height = c + "px";
        a.element.style.width = d + "px";
        a.element.style.bottom = g - e + "px";
        a.element.style.right = f - b + "px"
    };
    fH = function(a, b, c) {
        this.fa = a;
        this.padding = void 0 === c ? 0 : c;
        this.elements = [];
        this.j = (this.h = 3 === b || 12 === b || 6 === b || 9 === b) ? gva.bind(this) : _.lb.bind(this);
        a.dataset.controlWidth = "0";
        a.dataset.controlHeight = "0"
    };
    Tva = function(a, b) {
        var c = {
            element: b,
            height: 0,
            width: 0,
            Wp: _.M(b, "resize", function() {
                return void gH(a, c)
            })
        };
        return c
    };
    gH = function(a, b) {
        b.width = _.qx(b.element.dataset.controlWidth);
        b.height = _.qx(b.element.dataset.controlHeight);
        b.width || (b.width = b.element.offsetWidth);
        b.height || (b.height = b.element.offsetHeight);
        var c = 0;
        b = _.A(a.elements);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = d.value;
            d = e.element;
            e = e.width;
            FG(d) && "hidden" !== d.style.visibility && (c = Math.max(c, e))
        }
        var f = 0,
            g = !1,
            h = a.padding;
        a.j(a.elements, function(k) {
            var l = k.element,
                m = k.height;
            k = k.width;
            FG(l) && "hidden" !== l.style.visibility && (g ? f += h : g = !0, l.style.left =
                _.$m((c - k) / 2), l.style.top = _.$m(f), f += m)
        });
        b = c;
        d = f;
        a.fa.dataset.controlWidth = "" + b;
        a.fa.dataset.controlHeight = "" + d;
        _.hz(a.fa, !(!b && !d));
        _.N(a.fa, "resize")
    };
    Uva = function(a, b) {
        var c = '\u200f\u0625\u0646\u0643 \u062a\u0633\u062a\u062e\u062f\u0645 \u0645\u062a\u0635\u0641\u062d\u064b\u0627 \u0644\u0627 \u064a\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0648\u0627\u062c\u0647\u0629 \u0628\u0631\u0645\u062c\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a JavaScript \u0644"\u062e\u0631\u0627\u0626\u0637 Google". \u064a\u064f\u0631\u062c\u0649 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u062a\u0635\u0641\u0651\u062d \u0622\u062e\u0631.',
            d = document.createElement("div");
        d.className = "infomsg";
        a.appendChild(d);
        var e = d.style;
        e.background = "#F9EDBE";
        e.border = "1px solid #F0C36D";
        e.borderRadius = "2px";
        e.boxSizing = "border-box";
        e.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        e.fontFamily = "Roboto,Arial,sans-serif";
        e.fontSize = "12px";
        e.fontWeight = "400";
        e.left = "10%";
        e.h = "2px";
        e.padding = "5px 14px";
        e.position = "absolute";
        e.textAlign = "center";
        e.top = "10px";
        e.webkitBorderRadius = "2px";
        e.width = "80%";
        e.zIndex = 24601;
        d.innerText = c;
        c = document.createElement("a");
        b && (d.appendChild(document.createTextNode(" ")),
            d.appendChild(c), c.innerText = "\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u200f\u200f", c.href = b, c.target = "_blank");
        b = document.createElement("a");
        d.appendChild(document.createTextNode(" "));
        d.appendChild(b);
        b.innerText = "\u062a\u062c\u0627\u0647\u0644";
        b.target = "_blank";
        c.style.paddingLeft = b.style.paddingLeft = "0.8em";
        c.style.boxSizing = b.style.boxSizing = "border-box";
        c.style.color = b.style.color = "black";
        c.style.cursor = b.style.cursor = "pointer";
        c.style.textDecoration =
            b.style.textDecoration = "underline";
        c.style.whiteSpace = b.style.whiteSpace = "nowrap";
        b.onclick = function() {
            a.removeChild(d)
        }
    };
    hH = function(a) {
        this.h = a.replace("www.google", "maps.google")
    };
    iH = function(a, b, c) {
        var d = this;
        this.D = a;
        this.F = c;
        this.m = _.Rn("div");
        this.m.style.margin = "0 5px";
        this.m.style.zIndex = 1E6;
        this.h = _.Rn("a");
        this.h.style.display = "inline";
        this.h.target = "_blank";
        this.h.rel = "noopener";
        this.h.title = '\u200f\u0641\u062a\u062d \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0641\u064a "\u062e\u0631\u0627\u0626\u0637 Google" (\u064a\u0624\u062f\u064a \u0630\u0644\u0643 \u0625\u0644\u0649 \u0641\u062a\u062d \u0646\u0627\u0641\u0630\u0629 \u062c\u062f\u064a\u062f\u0629)';
        this.h.setAttribute("aria-label",
            '\u200f\u0641\u062a\u062d \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0641\u064a "\u062e\u0631\u0627\u0626\u0637 Google" (\u064a\u0624\u062f\u064a \u0630\u0644\u0643 \u0625\u0644\u0649 \u0641\u062a\u062d \u0646\u0627\u0641\u0630\u0629 \u062c\u062f\u064a\u062f\u0629)');
        _.Wm(this.h, _.ly(b.get("url")));
        this.h.addEventListener("click", function(e) {
            var f = _.nz(e) ? 165230 : 165229;
            _.Q(window, _.nz(e) ? "Lcmi" : "Lcki");
            _.P(window, f)
        });
        this.C = _.Rn("div");
        a = new _.Qg(66, 26);
        _.fj(this.C, a);
        _.Un(this.C);
        this.j = _.hF(null, this.C, _.nh, a);
        this.j.alt = "Google";
        _.M(b, "url_changed", function() {
            _.Wm(d.h, _.ly(b.get("url")))
        });
        _.M(this.D, "passivelogo_changed", function() {
            return Vva(d)
        });
        Vva(this)
    };
    Wva = function(a, b) {
        _.iF(a.j, b ? _.er["google_logo_white.svg"] : _.er["google_logo_color.svg"])
    };
    Vva = function(a) {
        a.F && a.D.get("passiveLogo") ? a.m.contains(a.h) ? a.m.replaceChild(a.C, a.h) : a.m.appendChild(a.C) : (a.h.appendChild(a.C), a.m.appendChild(a.h))
    };
    Xva = function(a, b, c) {
        function d() {
            var g = f.get("hasCustomStyles"),
                h = a.getMapTypeId();
            Wva(e, g || "satellite" === h || "hybrid" === h)
        }
        var e = new iH(a, b, c),
            f = a.__gm;
        _.M(f, "hascustomstyles_changed", d);
        _.M(a, "maptypeid_changed", d);
        d();
        return e
    };
    Yva = function(a, b, c, d) {
        function e() {
            0 != f.get("enabled") && (null != d && f.get("active") ? f.set("value", d) : f.set("value", c))
        }
        var f = this;
        _.M(this, "value_changed", function() {
            f.set("active", f.get("value") == c)
        });
        new _.Qi(a, b, e);
        "click" == b && "button" != a.tagName.toLowerCase() && new _.Qi(a, "keydown", function(g) {
            "Enter" != g.key && " " != g.key || e()
        });
        _.M(this, "display_changed", function() {
            _.hz(a, 0 != f.get("display"))
        })
    };
    jH = function(a, b, c, d) {
        return new Yva(a, b, c, d)
    };
    lH = function(a, b, c, d, e) {
        var f = this;
        this.h = _.dr(d.title);
        if (this.C = d.wt || !1) this.h.setAttribute("role", "menuitemradio"), this.h.setAttribute("aria-checked", !1);
        _.Ti(this.h);
        a.appendChild(this.h);
        _.by(this.h);
        this.j = this.h.style;
        this.j.overflow = "hidden";
        d.lp ? EG(this.h) : this.j.textAlign = "center";
        d.height && (this.j.height = _.$m(d.height), this.j.display = "table-cell", this.j.verticalAlign = "middle");
        this.j.position = "relative";
        JG(this.h, d);
        d.Ym && lva(this.h);
        d.Yp && mva(this.h);
        this.h.style.webkitBackgroundClip =
            "padding-box";
        this.h.style.backgroundClip = "padding-box";
        this.h.style.MozBackgroundClip = "padding";
        this.D = d.sr || !1;
        this.F = d.Ym || !1;
        _.mz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        d.Ey ? (a = document.createElement("span"), a.style.position = "relative", _.Qn(a, new _.R(3, 0), !_.Av.Nb(), !0), a.appendChild(b), this.h.appendChild(a), b = _.hF(_.Em("arrow-down"), this.h), _.Qn(b, new _.R(8, 0), !_.Av.Nb()), b.style.top = "50%", b.style.marginTop = _.$m(-2), this.set("active", !1), this.h.setAttribute("aria-haspopup", "true"), this.h.setAttribute("aria-expanded",
            "false")) : (this.h.appendChild(b), b = e(this.h, "click", c), b.bindTo("value", this), this.bindTo("active", b), b.bindTo("enabled", this));
        d.my && this.h.setAttribute("aria-haspopup", "true");
        d.sr && (this.j.fontWeight = "500");
        this.m = _.qx(this.j.paddingLeft) || 0;
        d.lp || (this.j.fontWeight = "500", d = this.h.offsetWidth - this.m - (_.qx(this.j.paddingRight) || 0), this.j.fontWeight = "", _.Ud(d) && 0 <= d && (this.j.minWidth = _.$m(d)));
        new _.Qi(this.h, "click", function(g) {
            !1 !== f.get("enabled") && _.N(f, "click", g)
        });
        new _.Qi(this.h, "keydown",
            function(g) {
                !1 !== f.get("enabled") && _.N(f, "keydown", g)
            });
        new _.Qi(this.h, "blur", function(g) {
            !1 !== f.get("enabled") && _.N(f, "blur", g)
        });
        new _.Qi(this.h, "mouseover", function() {
            return kH(f, !0)
        });
        new _.Qi(this.h, "mouseout", function() {
            return kH(f, !1)
        });
        _.M(this, "enabled_changed", function() {
            return kH(f, !1)
        });
        _.M(this, "active_changed", function() {
            return kH(f, !1)
        })
    };
    kH = function(a, b) {
        var c = !!a.get("active") || a.D;
        0 == a.get("enabled") ? (a.j.color = "gray", b = c = !1) : (a.j.color = c || b ? "#000" : "#565656", a.C && a.h.setAttribute("aria-checked", c));
        a.F || (a.j.borderLeft = "0");
        _.Ud(a.m) && (a.j.paddingLeft = _.$m(a.m));
        a.j.fontWeight = c ? "500" : "";
        a.j.backgroundColor = b ? "#ebebeb" : "#fff"
    };
    _.mH = function(a, b, c, d) {
        return new lH(a, b, c, d, jH)
    };
    nH = function(a, b, c, d, e) {
        this.h = _.Rn("li", a);
        this.h.tabIndex = -1;
        this.h.setAttribute("role", "menuitemcheckbox");
        this.h.setAttribute("aria-label", b);
        _.Ti(this.h);
        this.j = document.createElement("span");
        this.j.style["mask-image"] = 'url("' + _.er["checkbox_checked.svg"] + '")';
        this.j.style["-webkit-mask-image"] = 'url("' + _.er["checkbox_checked.svg"] + '")';
        this.m = document.createElement("span");
        this.m.style["mask-image"] = 'url("' + _.er["checkbox_empty.svg"] + '")';
        this.m.style["-webkit-mask-image"] = 'url("' + _.er["checkbox_empty.svg"] +
            '")';
        a = _.Rn("span", this.h);
        a.appendChild(this.j);
        a.appendChild(this.m);
        this.C = _.Rn("label", this.h);
        this.C.textContent = b;
        JG(this.h, e);
        b = _.Av.Nb();
        _.by(this.h);
        EG(this.h);
        this.m.style.height = this.j.style.height = "1em";
        this.m.style.width = this.j.style.width = "1em";
        this.m.style.transform = this.j.style.transform = "translateY(0.15em)";
        this.C.style.cursor = "inherit";
        this.h.style.backgroundColor = "#fff";
        this.h.style.whiteSpace = "nowrap";
        this.h.style[b ? "paddingLeft" : "paddingRight"] = _.$m(8);
        Zva(this, c, d);
        _.Cm($va,
            this.h);
        _.jm(this.h, "checkbox-menu-item")
    };
    Zva = function(a, b, c) {
        _.en(a, "active_changed", function() {
            var d = !!a.get("active");
            _.hz(a.j, d);
            _.hz(a.m, !d);
            a.h.setAttribute("aria-checked", d)
        });
        _.gf(a.h, "mouseover", function() {
            awa(a, !0)
        });
        _.gf(a.h, "mouseout", function() {
            awa(a, !1)
        });
        b = jH(a.h, "click", b, c);
        b.bindTo("value", a);
        b.bindTo("display", a);
        a.bindTo("active", b)
    };
    awa = function(a, b) {
        a.h.style.backgroundColor = b ? "#ebebeb" : "#fff"
    };
    oH = function(a, b, c, d) {
        var e = this.h = _.Rn("li", a);
        JG(e, d);
        _.Nn(b, e);
        e.style.backgroundColor = "#fff";
        e.tabIndex = -1;
        e.setAttribute("role", "menuitemradio");
        e.setAttribute("aria-checked", !1);
        _.Ti(e);
        _.jf(this, "active_changed", this, function() {
            var f = this.get("active") || !1;
            e.style.fontWeight = f ? "500" : "";
            e.setAttribute("aria-checked", f)
        });
        _.jf(this, "enabled_changed", this, function() {
            var f = 0 != this.get("enabled");
            e.style.color = f ? "black" : "gray";
            (f = f ? d.title : d.mx) && e.setAttribute("title", f)
        });
        a = jH(e, "click", c);
        a.bindTo("value",
            this);
        a.bindTo("display", this);
        a.bindTo("enabled", this);
        this.bindTo("active", a);
        _.dn(e, "mouseover", this, function() {
            0 != this.get("enabled") && (e.style.backgroundColor = "#ebebeb", e.style.color = "#000")
        });
        _.gf(e, "mouseout", function() {
            e.style.backgroundColor = "#fff";
            e.style.color = "#565656"
        })
    };
    bwa = function(a) {
        var b = _.Rn("div", a);
        b.style.margin = "1px 0";
        b.style.borderTop = "1px solid #ebebeb";
        a = this.get("display");
        b && (b.setAttribute("aria-hidden", "true"), b.style.visibility = b.style.visibility || "inherit", b.style.display = a ? "" : "none");
        _.jf(this, "display_changed", this, function() {
            _.hz(b, 0 != this.get("display"))
        })
    };
    pH = function(a, b, c, d, e, f) {
        f = f || {};
        this.G = a;
        this.D = b;
        a = this.h = _.Rn("ul", b);
        a.style.backgroundColor = "white";
        a.style.listStyle = "none";
        a.style.margin = a.style.padding = 0;
        _.Sn(a, -1);
        a.style.padding = _.$m(2);
        kva(a, _.$m(_.JB(d)));
        _.mz(a, "0 1px 4px -1px rgba(0,0,0,0.3)");
        f.position ? _.Qn(a, f.position, f.vA) : (a.style.position = "absolute", a.style.top = "100%", a.style.left = "0", a.style.right = "0");
        EG(a);
        _.iz(a);
        this.m = [];
        this.j = null;
        this.C = e;
        e = this.C.id || (this.C.id = _.rk());
        a.setAttribute("role", "menu");
        for (a.setAttribute("aria-labelledby",
                e); _.Ld(c);) {
            e = c.shift();
            f = _.A(e);
            for (b = f.next(); !b.done; b = f.next()) {
                b = b.value;
                var g = void 0,
                    h = {
                        title: b.alt,
                        mx: b.C || void 0,
                        fontSize: MG(d),
                        padding: [1 + d >> 3]
                    };
                null != b.m ? g = new nH(a, b.label, b.h, b.m, h) : g = new oH(a, b.label, b.h, h);
                g.bindTo("value", this.G, b.jf);
                g.bindTo("display", b);
                g.bindTo("enabled", b);
                this.m.push(g)
            }
            f = _.v(c, "flat").call(c);
            f.length && (b = new bwa(a), cwa(b, e, f))
        }
    };
    cwa = function(a, b, c) {
        function d() {
            function e(f) {
                f = _.A(f);
                for (var g = f.next(); !g.done; g = f.next())
                    if (0 != g.value.get("display")) return !0;
                return !1
            }
            a.set("display", e(b) && e(c))
        }
        _.lb(b.concat(c), function(e) {
            _.M(e, "display_changed", d)
        })
    };
    fwa = function(a) {
        var b = a.h;
        if (!b.h) {
            var c = a.D;
            b.h = [_.gf(c, "mouseout", function() {
                b.timeout = window.setTimeout(function() {
                    a.set("active", !1)
                }, 1E3)
            }), _.dn(c, "mouseover", a, a.F), _.gf(document.body, "click", function(e) {
                for (e = e.target; e;) {
                    if (e == c) return;
                    e = e.parentNode
                }
                a.set("active", !1)
            }), _.gf(b, "keydown", function(e) {
                return dwa(a, e)
            }), _.gf(b, "blur", function() {
                setTimeout(function() {
                    b.contains(document.activeElement) || a.set("active", !1)
                }, 0)
            }, !0)]
        }
        _.jz(b);
        if (a.D.contains(document.activeElement)) {
            var d = _.v(a.m,
                "find").call(a.m, function(e) {
                return !1 !== e.get("display")
            });
            d && ewa(a, d)
        }
    };
    dwa = function(a, b) {
        if ("Escape" === b.key || "Esc" === b.key) a.set("active", !1);
        else {
            var c = a.m.filter(function(e) {
                    return !1 !== e.get("display")
                }),
                d = a.j ? c.indexOf(a.j) : 0;
            if ("ArrowUp" === b.key) d--;
            else if ("ArrowDown" === b.key) d++;
            else if ("Home" === b.key) d = 0;
            else if ("End" === b.key) d = c.length - 1;
            else return;
            d = (d + c.length) % c.length;
            ewa(a, c[d])
        }
    };
    ewa = function(a, b) {
        a.j = b;
        b.ib().focus()
    };
    iwa = function(a, b, c, d) {
        var e = this;
        this.h = a;
        this.h.setAttribute("role", "menubar");
        this.m = d;
        this.j = [];
        _.M(this, "fontloaded_changed", function() {
            if (e.get("fontLoaded")) {
                for (var h = e.j.length, k = 0, l = 0; l < h; ++l) {
                    var m = _.gj(e.j[l].parentNode),
                        p = l == h - 1;
                    e.j[l].Gs && _.Qn(e.j[l].Gs.h, new _.R(p ? 0 : k, m.height), p);
                    k += m.width
                }
                e.j.length = 0
            }
        });
        _.M(this, "mapsize_changed", function() {
            return gwa(e)
        });
        _.M(this, "display_changed", function() {
            return gwa(e)
        });
        d = b.length;
        for (var f = 0, g = 0; g < d; ++g) f = hwa(this, c, b[g], f, 0 == g, g == d - 1);
        _.zz();
        a.style.cursor = "pointer"
    };
    hwa = function(a, b, c, d, e, f) {
        var g = document.createElement("div");
        a.h.appendChild(g);
        _.iva(g);
        _.Cm(jwa, a.h);
        _.zn(g, "gm-style-mtc");
        var h = _.Nn(c.label, a.h, !0);
        b = b(g, h, c.h, {
            title: c.alt,
            padding: [0, 17],
            height: a.m,
            fontSize: MG(a.m),
            Ym: e,
            Yp: f,
            wt: !0,
            my: !0
        });
        g.style.position = "relative";
        e = b.ib();
        new _.Qi(e, "focusin", function() {
            g.style.zIndex = 1
        });
        new _.Qi(e, "focusout", function() {
            g.style.zIndex = 0
        });
        c.jf && b.bindTo("value", a, c.jf);
        e = null;
        h = _.gj(g);
        c.j && (e = new pH(a, g, c.j, a.m, b.ib(), {
            position: new _.R(f ? 0 : d, h.height),
            vA: f
        }), kwa(g, b, e));
        a.j.push({
            parentNode: g,
            Gs: e
        });
        return d += h.width
    };
    gwa = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.hz(a.h, b);
        _.N(a.h, "resize")
    };
    kwa = function(a, b, c) {
        new _.Qi(a, "click", function() {
            return c.set("active", !0)
        });
        new _.Qi(a, "mouseover", function() {
            b.get("active") && c.set("active", !0)
        });
        _.gf(b, "active_changed", function() {
            b.get("active") || c.set("active", !1)
        });
        _.M(b, "keydown", function(d) {
            "ArrowDown" !== d.key && "ArrowUp" !== d.key || c.set("active", !0)
        });
        _.M(b, "click", function(d) {
            var e = _.nz(d) ? 164753 : 164752;
            _.Q(window, _.nz(d) ? "Mtcmi" : "Mtcki");
            _.P(window, e)
        })
    };
    qH = function(a, b, c) {
        var d = this;
        _.zz();
        a.style.cursor = "pointer";
        EG(a);
        a.style.width = _.$m(120);
        _.Cm(jwa, document.head);
        _.zn(a, "gm-style-mtc");
        var e = _.Nn("", a, !0),
            f = _.mH(a, e, null, {
                title: "\u062a\u063a\u064a\u064a\u0631 \u0646\u0645\u0637 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
                Ey: !0,
                lp: !0,
                sr: !0,
                padding: [8, 17],
                fontSize: 18,
                Ym: !0,
                Yp: !0
            }),
            g = {},
            h = [b];
        b = _.A(b);
        for (var k = b.next(); !k.done; k = b.next()) k = k.value, "mapTypeId" == k.jf && (g[k.h] = k.label), k.j && h.push.apply(h, _.pa(k.j));
        this.addListener("maptypeid_changed",
            function() {
                var m = g[d.get("mapTypeId")] || "";
                e.textContent = m
            });
        var l = f.ib();
        this.h = new pH(this, a, h, c, l);
        f.addListener("click", function(m) {
            d.h.set("active", !d.h.get("active"));
            var p = _.nz(m) ? 164753 : 164752;
            _.Q(window, _.nz(m) ? "Mtcmi" : "Mtcki");
            _.P(window, p)
        });
        f.addListener("keydown", function(m) {
            "ArrowDown" !== m.key && "ArrowUp" !== m.key || d.h.set("active", !0)
        });
        this.h.addListener("active_changed", function() {
            l.setAttribute("aria-expanded", !!d.h.get("active"))
        });
        this.j = a
    };
    lwa = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.hz(a.j, b);
        _.N(a.j, "resize")
    };
    rH = function(a) {
        this.h = !1;
        this.map = a
    };
    sH = function(a, b, c) {
        a.get(b) !== c && (a.h = !0, a.set(b, c), a.h = !1)
    };
    tH = function(a, b, c) {
        this.j = a;
        this.Tj = _.aH(a, b.getDiv());
        this.F = mwa();
        _.iz(a);
        this.h = nwa(this.Tj);
        _.gf(this.h, "click", function(d) {
            _.gn(b, "Rc");
            _.fn(161529);
            var e = _.nz(d) ? 165226 : 165225;
            _.Q(window, _.nz(d) ? "Rmimi" : "Rmiki");
            _.P(window, e)
        });
        this.m = b;
        this.C = "";
        this.D = c
    };
    owa = function(a, b) {
        b ? (a.style.fontFamily = "Arial,sans-serif", a.style.fontSize = "85%", a.style.fontWeight = "bold", a.style.bottom = "1px", a.style.padding = "1px 3px") : (a.style.fontFamily = "Roboto,Arial,sans-serif", a.style.fontSize = _.$m(10));
        a.style.color = "#000000";
        a.style.textDecoration = "none";
        a.style.position = "relative"
    };
    nwa = function(a) {
        var b = _.Rn("a");
        b.target = "_blank";
        b.rel = "noopener";
        b.title = "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0623\u062e\u0637\u0627\u0621 \u0641\u064a \u062e\u0631\u064a\u0637\u0629 \u0637\u0631\u064a\u0642 \u0623\u0648 \u0635\u0648\u0631 \u0625\u0644\u0649 Google";
        cva(b, "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0623\u062e\u0637\u0627\u0621 \u0641\u064a \u062e\u0631\u064a\u0637\u0629 \u0637\u0631\u064a\u0642 \u0623\u0648 \u0635\u0648\u0631 \u0625\u0644\u0649 Google");
        b.textContent = "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062e\u0631\u064a\u0637\u0629";
        owa(b);
        a.appendChild(b);
        return b
    };
    mwa = function() {
        var a = new Image;
        a.src = _.er["bug_report_icon.svg"];
        a.alt = "";
        a.style.width = "12px";
        return a
    };
    uH = function(a) {
        var b = a.get("available");
        _.N(a.j, "resize");
        a.set("rmiLinkData", b ? {
            label: "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
            tooltip: "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0623\u062e\u0637\u0627\u0621 \u0641\u064a \u062e\u0631\u064a\u0637\u0629 \u0637\u0631\u064a\u0642 \u0623\u0648 \u0635\u0648\u0631 \u0625\u0644\u0649 Google",
            url: a.C
        } : void 0)
    };
    pwa = function(a) {
        var b = a.get("available"),
            c = !1 !== a.get("enabled");
        if (void 0 === b) return !1;
        a = a.get("mapTypeId");
        return b && _.Gpa(a) && c && !_.Wn()
    };
    qwa = function(a, b, c) {
        a.innerText = "";
        b = _.A(b ? [_.er["tilt_45_normal.svg"], _.er["tilt_45_hover.svg"], _.er["tilt_45_active.svg"]] : [_.er["tilt_0_normal.svg"], _.er["tilt_0_hover.svg"], _.er["tilt_0_active.svg"]]);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("img");
            e.alt = "";
            e.style.width = _.$m(MG(c));
            e.src = d;
            a.appendChild(e)
        }
    };
    rwa = function(a, b, c) {
        for (var d = _.A([_.er["rotate_right_normal.svg"], _.er["rotate_right_hover.svg"], _.er["rotate_right_active.svg"]]), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = document.createElement("img"),
                g = _.$m(MG(b) + 2);
            f.alt = "";
            f.style.width = g;
            f.style.height = g;
            f.src = e;
            a.style.transform = c ? "scaleX(-1)" : "";
            a.appendChild(f)
        }
    };
    swa = function(a) {
        var b = _.Rn("div");
        b.style.position = "relative";
        b.style.overflow = "hidden";
        b.style.width = _.$m(3 * a / 4);
        b.style.height = _.$m(1);
        b.style.margin = "0 5px";
        b.style.backgroundColor = "rgb(230, 230, 230)";
        return b
    };
    vH = function(a, b, c) {
        var d = this,
            e = _.Xi[43] ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";
        _.Cm(XG, c);
        this.F = b;
        this.J = a;
        this.h = _.Rn("div", a);
        this.h.style.backgroundColor = e;
        _.mz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        IG(this.h, _.$m(_.JB(b)));
        this.m = _.dr("\u062a\u062f\u0648\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0641\u064a \u0627\u062a\u062c\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629");
        this.m.style.left = "0";
        this.m.style.top = "0";
        this.m.style.overflow = "hidden";
        this.m.setAttribute("class", "gm-control-active");
        _.fj(this.m, new _.Qg(b, b));
        _.Un(this.m);
        rwa(this.m, b, !1);
        this.h.appendChild(this.m);
        this.G = swa(b);
        this.h.appendChild(this.G);
        this.C = _.dr("\u062a\u062f\u0648\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0641\u064a \u0639\u0643\u0633 \u0627\u062a\u062c\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629");
        this.C.style.left = "0";
        this.C.style.top = "0";
        this.C.style.overflow = "hidden";
        this.C.setAttribute("class", "gm-control-active");
        _.fj(this.C, new _.Qg(b, b));
        _.Un(this.C);
        rwa(this.C, b, !0);
        this.h.appendChild(this.C);
        this.H = swa(b);
        this.h.appendChild(this.H);
        this.D = _.dr("\u0625\u0645\u0627\u0644\u0629 \u0627\u0644\u062e\u0631\u064a\u0637\u0629");
        this.D.style.left = this.D.style.top = "0";
        this.D.style.overflow = "hidden";
        this.D.setAttribute("class", "gm-tilt gm-control-active");
        qwa(this.D, !1, b);
        _.fj(this.D, new _.Qg(b, b));
        _.Un(this.D);
        this.h.appendChild(this.D);
        this.j = !0;
        this.m.addEventListener("click", function(f) {
            var g = +d.get("heading") ||
                0;
            d.set("heading", (g + 270) % 360);
            twa(f)
        });
        this.C.addEventListener("click", function(f) {
            var g = +d.get("heading") || 0;
            d.set("heading", (g + 90) % 360);
            twa(f)
        });
        this.D.addEventListener("click", function(f) {
            d.j = !d.j;
            d.set("tilt", d.j ? 45 : 0);
            var g = _.nz(f) ? 164824 : 164823;
            _.Q(window, _.nz(f) ? "Tcmi" : "Tcki");
            _.P(window, g)
        });
        _.M(this, "aerialavailableatzoom_changed", function() {
            return d.refresh()
        });
        _.M(this, "tilt_changed", function() {
            d.j = 0 != d.get("tilt");
            d.refresh()
        });
        _.M(this, "mapsize_changed", function() {
            d.refresh()
        });
        _.M(this,
            "rotatecontrol_changed",
            function() {
                d.refresh()
            })
    };
    twa = function(a) {
        var b = _.nz(a) ? 164822 : 164821;
        _.Q(window, _.nz(a) ? "Rcmi" : "Rcki");
        _.P(window, b)
    };
    uwa = function(a, b, c) {
        a = new vH(a, b, c);
        a.bindTo("mapSize", this);
        a.bindTo("rotateControl", this);
        a.bindTo("aerialAvailableAtZoom", this);
        a.bindTo("heading", this);
        a.bindTo("tilt", this)
    };
    wwa = function(a, b, c) {
        var d = this;
        this.fa = a;
        this.j = !1;
        this.C = c;
        c = new _.Ge(9 == b.nodeType ? b : b.ownerDocument || b.document);
        this.D = _.He(c, "span");
        c.appendChild(b, this.D);
        this.h = _.He(c, "div");
        c.appendChild(b, this.h);
        vwa(this, c);
        this.m = !0;
        b = _.rk();
        c = document.createElement("span");
        c.id = b;
        c.textContent = "\u0627\u0644\u0646\u0642\u0631 \u0644\u0644\u062a\u0628\u062f\u064a\u0644 \u0628\u064a\u0646 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0631\u064a\u0629 \u0648\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0642\u064a\u0627\u0633 \u0627\u0644\u0625\u0645\u0628\u0631\u0627\u0637\u0648\u0631\u064a\u0629";
        c.style.display = "none";
        a.appendChild(c);
        a.setAttribute("aria-describedby", b);
        _.ui(a, "click", function(e) {
            d.m = !d.m;
            wH(d);
            _.nz(e) ? (_.Q(window, "Scmi"), _.P(window, 165091)) : (_.Q(window, "Scki"), _.P(window, 167511))
        });
        _.km(this.C, function() {
            return wH(d)
        })
    };
    vwa = function(a, b) {
        KG(a.h, "position", "relative");
        KG(a.h, "display", "inline-block");
        a.h.style.height = _.Dz(8, !0);
        KG(a.h, "bottom", "-1px");
        var c = _.He(b, "div");
        b.appendChild(a.h, c);
        _.Ez(c, "100%", 4);
        KG(c, "position", "absolute");
        LG(c, 0, 0);
        c = _.He(b, "div");
        b.appendChild(a.h, c);
        _.Ez(c, 4, 8);
        LG(c, 0, 0);
        KG(c, "backgroundColor", "#fff");
        c = _.He(b, "div");
        b.appendChild(a.h, c);
        _.Ez(c, 4, 8);
        KG(c, "position", "absolute");
        KG(c, "backgroundColor", "#fff");
        KG(c, "right", "0px");
        KG(c, "bottom", "0px");
        c = _.He(b, "div");
        b.appendChild(a.h,
            c);
        KG(c, "position", "absolute");
        KG(c, "backgroundColor", "#666");
        c.style.height = _.Dz(2, !0);
        KG(c, "left", "1px");
        KG(c, "bottom", "1px");
        KG(c, "right", "1px");
        c = _.He(b, "div");
        b.appendChild(a.h, c);
        KG(c, "position", "absolute");
        _.Ez(c, 2, 6);
        LG(c, 1, 1);
        KG(c, "backgroundColor", "#666");
        c = _.He(b, "div");
        b.appendChild(a.h, c);
        _.Ez(c, 2, 6);
        KG(c, "position", "absolute");
        KG(c, "backgroundColor", "#666");
        KG(c, "bottom", "1px");
        KG(c, "right", "1px")
    };
    wH = function(a) {
        var b = a.C.get();
        b && (b *= 80, b = a.m ? xwa(b / 1E3, b, !0) : xwa(b / 1609.344, 3.28084 * b, !1), a.D.textContent = b.nx + "\u00a0", a.fa.setAttribute("aria-label", b.At), a.fa.title = b.At, a.h.style.width = _.Dz(b.Wz + 4, !0), _.N(a.fa, "resize"))
    };
    xwa = function(a, b, c) {
        var d = a,
            e = c ? "\u0643\u0645" : "\u0645\u064a\u0644";
        1 > a && (d = b, e = c ? "\u0645" : "\u0642\u062f\u0645");
        for (b = 1; d >= 10 * b;) b *= 10;
        d >= 5 * b && (b *= 5);
        d >= 2 * b && (b *= 2);
        d = Math.round(80 * b / d);
        var f = c ? "\u0645\u0642\u064a\u0627\u0633 \u0631\u0633\u0645 \u0627\u0644\u062e\u0631\u064a\u0637\u0629: " + b + " \u0643\u064a\u0644\u0648\u0645\u062a\u0631 \u0644\u0643\u0644 " + d + " \u0628\u0643\u0633\u0644" : "\u0645\u0642\u064a\u0627\u0633 \u0631\u0633\u0645 \u0627\u0644\u062e\u0631\u064a\u0637\u0629: " + b + " \u0645\u064a\u0644 \u0644\u0643\u0644 " +
            d + " \u0628\u0643\u0633\u0644";
        1 > a && (f = c ? "\u0645\u0642\u064a\u0627\u0633 \u0631\u0633\u0645 \u0627\u0644\u062e\u0631\u064a\u0637\u0629: " + b + " \u0645\u062a\u0631 \u0644\u0643\u0644 " + d + " \u0628\u0643\u0633\u0644" : "\u0645\u0642\u064a\u0627\u0633 \u0631\u0633\u0645 \u0627\u0644\u062e\u0631\u064a\u0637\u0629: " + b + " \u0642\u062f\u0645 \u0644\u0643\u0644 " + d + " \u0628\u0643\u0633\u0644");
        return {
            Wz: d,
            nx: b + " " + e,
            At: f
        }
    };
    zwa = function(a) {
        var b = this;
        this.h = 0;
        this.fa = document.createElement("div");
        this.fa.style.display = "inline-flex";
        this.j = new _.Ii(function() {
            b.update(b.h)
        }, 0);
        this.Sh = a.Sh;
        this.fm = ywa(this, a.fm);
        a = _.A(this.Sh);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.Rb(), c = c.Md(), this.fa.appendChild(c), _.M(c, "resize", function() {
            _.Ji(b.j)
        })
    };
    ywa = function(a, b) {
        return b ? (b.every(function(c) {
            return _.v(a.Sh, "includes").call(a.Sh, c)
        }), b) : a.Sh
    };
    xH = function(a, b, c, d) {
        a.innerText = "";
        b = _.A(0 === b ? 2 === c ? [_.er["zoom_in_normal_dark.svg"], _.er["zoom_in_hover_dark.svg"], _.er["zoom_in_active_dark.svg"], _.er["zoom_in_disable_dark.svg"]] : [_.er["zoom_in_normal.svg"], _.er["zoom_in_hover.svg"], _.er["zoom_in_active.svg"], _.er["zoom_in_disable.svg"]] : 2 === c ? [_.er["zoom_out_normal_dark.svg"], _.er["zoom_out_hover_dark.svg"], _.er["zoom_out_active_dark.svg"], _.er["zoom_out_disable_dark.svg"]] : [_.er["zoom_out_normal.svg"], _.er["zoom_out_hover.svg"], _.er["zoom_out_active.svg"],
            _.er["zoom_out_disable.svg"]
        ]);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.$m(MG(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e)
        }
    };
    zH = function(a, b, c, d) {
        var e = this;
        this.C = a;
        this.j = b;
        this.h = _.Rn("div", a);
        _.Un(this.h);
        _.Tn(this.h);
        _.mz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        IG(this.h, _.$m(_.JB(b)));
        this.h.style.cursor = "pointer";
        _.Cm(XG, d);
        _.gf(this.h, "mouseover", function() {
            e.set("mouseover", !0)
        });
        _.gf(this.h, "mouseout", function() {
            e.set("mouseover", !1)
        });
        this.D = Awa(this, this.h, 0);
        this.m = _.Rn("div", this.h);
        this.m.style.position = "relative";
        this.m.style.overflow = "hidden";
        this.m.style.width = _.$m(3 * b / 4);
        this.m.style.height = _.$m(1);
        this.m.style.margin = "0 5px";
        this.F = Awa(this, this.h, 1);
        _.M(this, "display_changed", function() {
            return Bwa(e)
        });
        _.M(this, "mapsize_changed", function() {
            return Bwa(e)
        });
        _.M(this, "maptypeid_changed", function() {
            var f = e.get("mapTypeId");
            e.set("controlStyle", ("satellite" === f || "hybrid" === f) && _.Xi[43] || "streetview" == f ? 2 : 1)
        });
        _.M(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            if (null != f) {
                var g = yH[f];
                xH(e.D, 0, f, e.j);
                xH(e.F, 1, f, e.j);
                e.h.style.backgroundColor = g.backgroundColor;
                e.m.style.backgroundColor =
                    g.Bs
            }
        })
    };
    Awa = function(a, b, c) {
        var d = _.dr(0 === c ? "\u062a\u0643\u0628\u064a\u0631" : "\u062a\u0635\u063a\u064a\u0631");
        b.appendChild(d);
        _.gf(d, "click", function(e) {
            var f = 0 === c ? 1 : -1;
            a.set("zoom", a.get("zoom") + f);
            f = _.nz(e) ? 164935 : 164934;
            _.Q(window, _.nz(e) ? "Zcmi" : "Zcki");
            _.P(window, f)
        });
        d.setAttribute("class", "gm-control-active");
        d.style.overflow = "hidden";
        b = a.get("controlStyle");
        xH(d, c, b, a.j);
        return d
    };
    Bwa = function(a) {
        var b = a.get("mapSize");
        if (b && 200 <= b.width && 200 <= b.height || a.get("display")) {
            _.jz(a.C);
            b = a.j;
            var c = 2 * a.j + 1;
            a.h.style.width = _.$m(b);
            a.h.style.height = _.$m(c);
            a.C.dataset.controlWidth = String(b);
            a.C.dataset.controlHeight = String(c);
            _.N(a.C, "resize");
            b = a.D.style;
            b.width = _.$m(a.j);
            b.height = _.$m(a.j);
            b.left = b.top = "0";
            a.m.style.top = "0";
            b = a.F.style;
            b.width = _.$m(a.j);
            b.height = _.$m(a.j);
            b.left = b.top = "0"
        } else _.iz(a.C)
    };
    AH = function(a, b, c, d) {
        a = this.h = _.Rn("div");
        _.HG(a);
        b = new zH(a, b, c, d);
        b.bindTo("mapSize", this);
        b.bindTo("display", this, "display");
        b.bindTo("mapTypeId", this);
        b.bindTo("zoom", this);
        b.bindTo("zoomRange", this);
        this.El = b
    };
    Cwa = function(a) {
        a.El && (a.El.unbindAll(), a.El = null)
    };
    CH = function(a, b, c) {
        _.HG(a);
        _.Sn(a, 1000001);
        this.h = a;
        a = _.Rn("div", a);
        b = _.aH(a, b);
        this.D = a;
        a = _.dr("\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629");
        b.appendChild(a);
        a.textContent = "\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629";
        a.style.color = "#000000";
        a.style.display = "inline-block";
        a.style.fontFamily = "inherit";
        a.style.lineHeight = "inherit";
        _.fz(a, "click", this);
        this.m = a;
        b = _.Rn("span", b);
        b.style.display = "none";
        this.j = b;
        this.C = c;
        BH(this)
    };
    BH = function(a) {
        var b = a.get("attributionText") || "\u0642\u062f \u062a\u0643\u0648\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0645\u062d\u0645\u064a\u0629 \u0628\u0645\u0648\u062c\u0628 \u062d\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631";
        a.C && (b = b.replace("Map data", "Map Data"));
        _.oz(a.j, b);
        _.N(a.h, "resize")
    };
    DH = function(a) {
        this.m = a.ownerElement;
        this.j = document.createElement("div");
        this.j.style.color = "#222";
        this.j.style.maxWidth = "280px";
        this.h = new _.jr({
            content: this.j,
            de: a.de,
            Vc: a.Vc,
            ownerElement: this.m,
            title: "\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629"
        });
        _.jm(this.h.element, "copyright-dialog-view")
    };
    EH = function(a) {
        _.GG(a, "gmnoprint");
        _.zn(a, "gmnoscreen");
        this.h = a;
        a = this.j = _.Rn("div", a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.$m(11);
        a.style.color = "#000000";
        a.style.direction = "ltr";
        a.style.textAlign = "right";
        a.style.backgroundColor = "#f5f5f5"
    };
    FH = function(a, b) {
        _.HG(a);
        _.Sn(a, 1000001);
        this.h = a;
        this.j = _.aH(a, b);
        this.m = a = _.Rn("a", this.j);
        a.style.textDecoration = "none";
        a.style.cursor = "pointer";
        a.textContent = "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645";
        eva(a, _.Yka);
        a.target = "_blank";
        a.setAttribute("rel", "noopener");
        a.style.color = "#000000";
        a.addEventListener("click", function(c) {
            var d = _.nz(c) ? 165234 : 165233;
            _.Q(window, _.nz(c) ? "Tscmi" : "Tscki");
            _.P(window, d)
        })
    };
    Dwa = function(a, b, c, d) {
        var e = c instanceof _.ih;
        e = new dH(_.Rn("div"), a, e ? 2 : 1);
        e.bindTo("keyboardShortcutsShown", this);
        e.bindTo("fontLoaded", this);
        d = new CH(document.createElement("div"), a, d);
        d.bindTo("attributionText", this);
        d.bindTo("fontLoaded", this);
        d.bindTo("isCustomPanorama", this);
        var f = c.__gm.get("innerContainer"),
            g = new DH({
                Vc: a,
                de: function() {
                    _.Xn(f).catch(function() {})
                },
                ownerElement: b
            });
        g.bindTo("attributionText", this);
        _.M(d, "click", function(h) {
            g.set("visible", !0);
            var k = _.nz(h) ? 165049 : 165048;
            _.Q(window,
                _.nz(h) ? "Ccmi" : "Ccki");
            _.P(window, k)
        });
        b = new EH(document.createElement("div"));
        b.bindTo("attributionText", this);
        a = new FH(document.createElement("div"), a);
        a.bindTo("fontLoaded", this);
        a.bindTo("mapTypeId", this);
        d.bindTo("mapTypeId", this);
        c && _.Xi[28] ? (d.bindTo("hidden", c, "hideLegalNotices"), b.bindTo("hidden", c, "hideLegalNotices"), a.bindTo("hidden", c, "hideLegalNotices")) : (d.bindTo("isCustomPanorama", this), b.bindTo("hidden", this, "isCustomPanorama"));
        this.j = d;
        this.m = b;
        this.C = a;
        this.h = e
    };
    GH = function(a) {
        this.h = a
    };
    HH = function(a, b) {
        this.j = b;
        this.h = [];
        _.Un(a);
        _.Tn(a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.$m(Math.round(11 * b / 40));
        a.style.textAlign = "center";
        _.mz(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
        a.dataset.controlWidth = String(b);
        a.style.cursor = "pointer";
        this.fa = a
    };
    Ewa = function(a, b, c) {
        _.gf(b, "mouseover", function() {
            b.style.color = "#bbb";
            b.style.fontWeight = "bold"
        });
        _.gf(b, "mouseout", function() {
            b.style.color = "#999";
            b.style.fontWeight = "400"
        });
        _.dn(b, "click", a, function(d) {
            a.set("pano", c);
            var e = _.nz(d) ? 171224 : 171223;
            _.Q(window, _.nz(d) ? "Ecmi" : "Ecki");
            _.P(window, e)
        })
    };
    IH = function(a, b) {
        var c = this;
        this.D = a;
        _.zn(a, "gm-svpc");
        a.setAttribute("dir", "ltr");
        a.setAttribute("title", '\u0627\u0633\u062d\u0628 \u0627\u0644\u062f\u0644\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0644\u0641\u062a\u062d "\u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a".');
        a.style.backgroundColor = "#fff";
        this.j = {
            cp: null,
            active: null,
            bp: null
        };
        this.h = b;
        this.m = !0;
        Fwa(this);
        this.set("position", _.xG.Ut.offset);
        _.dn(a, "mouseover",
            this, this.F);
        _.dn(a, "mouseout", this, this.G);
        a = this.C = new _.vF(a);
        a.bindTo("position", this);
        _.lf(a, "dragstart", this);
        _.lf(a, "drag", this);
        _.lf(a, "dragend", this);
        _.M(a, "dragend", function() {
            c.set("position", _.xG.Ut.offset);
            _.Q(window, "Pcmi");
            _.P(window, 165115)
        });
        _.M(this, "mode_changed", function() {
            var d = c.get("mode");
            c.C.get("enabled") || c.C.set("enabled", !0);
            Gwa(c, d)
        });
        _.M(this, "display_changed", function() {
            return Hwa(c)
        });
        _.M(this, "mapsize_changed", function() {
            return Hwa(c)
        });
        this.set("mode", 1)
    };
    Fwa = function(a) {
        for (var b in a.j) {
            var c = a.j[b];
            c && c.parentNode && _.Ee(c);
            a.j[b] = null
        }
        b = a.D;
        if (a.m) {
            _.jz(b);
            c = new _.Qg(a.h, a.h);
            _.mz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            IG(b, _.$m(40 < a.h ? Math.round(a.h / 20) : 2));
            b.style.width = _.$m(c.width);
            b.style.height = _.$m(c.height);
            var d = 32 > a.h ? a.h - 2 : 40 > a.h ? 30 : 10 + a.h / 2,
                e = _.Rn("div", b);
            e.style.position = "absolute";
            e.style.left = "50%";
            e.style.top = "50%";
            var f = _.Ce("IMG");
            a.j.cp = f;
            f.src = _.er["pegman_dock_normal.svg"];
            f.style.width = f.style.height = _.$m(d);
            f.style.position =
                "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.alt = "\u062a\u062d\u0643\u0645 \u0627\u0644\u062f\u0644\u064a\u0644 \u0641\u064a \u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.Ce("IMG");
            a.j.active = f;
            f.src = _.er["pegman_dock_active.svg"];
            f.style.display = "none";
            f.style.width = f.style.height = _.$m(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.alt = "\u0627\u0644\u062f\u0644\u064a\u0644 \u0641\u064a \u0623\u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.Ce("IMG");
            a.j.bp = f;
            f.style.display = "none";
            f.style.width = f.style.height = _.$m(4 * d / 3);
            f.style.position = "absolute";
            f.style.transform = "translate(-60%, -45%)";
            f.style.pointerEvents = "none";
            f.alt = "\u062a\u062d\u0643\u0645 \u0627\u0644\u062f\u0644\u064a\u0644 \u0641\u064a \u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a";
            e.appendChild(f);
            f.src = _.er["pegman_dock_hover.svg"];
            b.dataset.controlWidth = String(c.width);
            b.dataset.controlHeight = String(c.height);
            _.N(b, "resize");
            Gwa(a, a.get("mode"))
        } else _.iz(b), _.N(b, "resize")
    };
    Gwa = function(a, b) {
        a.m && (a = a.j, a.cp.style.display = a.bp.style.display = a.active.style.display = "none", 1 == b ? a.cp.style.display = "" : 2 == b ? a.bp.style.display = "" : a.active.style.display = "")
    };
    Hwa = function(a) {
        var b = a.get("mapSize");
        b = !!a.get("display") || !!(b && 200 <= b.width && b && 200 <= b.height);
        a.m != b && (a.m = b, Fwa(a))
    };
    JH = function(a) {
        var b = this;
        this.C = 0;
        this.H = this.F = -1;
        this.m = 0;
        this.D = this.G = null;
        a = {
            clickable: !1,
            crossOnDrag: !1,
            draggable: !0,
            map: a,
            mapOnly: !0,
            pegmanMarker: !0,
            zIndex: 1E6
        };
        this.N = _.xG.Yg;
        this.T = _.xG.wA;
        this.j = _.cg("mode");
        this.h = _.dg("mode");
        this.K = Iwa(a);
        var c = new _.jh(a);
        this.qp = c;
        var d = new _.jh(a);
        this.J = d;
        this.h(1);
        this.set("heading", 0);
        c.bindTo("icon", this, "lilypadIcon");
        _.M(this, "position_changed", function() {
            c.set("position", b.get("position"))
        });
        c.bindTo("dragging", this);
        d.set("cursor", _.tka);
        d.set("icon", qva(this.T, 0));
        _.M(this, "dragposition_changed", function() {
            d.set("position", b.get("dragPosition"))
        });
        d.bindTo("dragging", this);
        _.M(this, "dragstart", this.Je);
        _.M(this, "drag", this.Pf);
        _.M(this, "dragend", this.kf);
        Jwa(this)
    };
    Iwa = function(a) {
        return new _.x.Promise(function(b) {
            var c;
            return _.Ca(function(d) {
                if (1 == d.h) return _.va(d, _.Qe("marker"), 2);
                c = new _.jh(a);
                c.setDraggable(!0);
                b(c);
                d.h = 0
            })
        })
    };
    Jwa = function(a) {
        var b;
        _.Ca(function(c) {
            if (1 == c.h) return _.va(c, a.K, 2);
            b = c.j;
            b.bindTo("icon", a, "pegmanIcon");
            b.bindTo("position", a, "dragPosition");
            b.bindTo("dragging", a);
            _.lf(b, "dragstart", a);
            _.lf(b, "drag", a);
            _.lf(b, "dragend", a);
            c.h = 0
        })
    };
    Mwa = function(a) {
        var b, c, d;
        return _.Ca(function(e) {
            if (1 == e.h) return b = a.j(), c = _.nF(b), _.va(e, a.K, 2);
            d = e.j;
            d.setVisible(c || 7 === b);
            var f = a.set;
            if (c) {
                var g = a.j() - 3;
                g = qva(a.N, g)
            } else 7 === b ? (g = Kwa(a), a.H !== g && (a.H = g, a.G = {
                url: Lwa[g],
                scaledSize: new _.Qg(49, 52),
                anchor: new _.R(25, 35)
            }), g = a.G) : g = void 0;
            f.call(a, "pegmanIcon", g);
            e.h = 0
        })
    };
    Nwa = function(a) {
        a.qp.setVisible(!1);
        a.J.setVisible(_.nF(a.j()))
    };
    Kwa = function(a) {
        (a = _.qx(a.get("heading")) % 360) || (a = 0);
        0 > a && (a += 360);
        return Math.round(a / 360 * 16) % 16
    };
    KH = function(a, b, c, d, e, f, g, h, k, l) {
        this.map = a;
        this.config = f;
        this.C = e;
        this.ta = g;
        this.controlSize = h;
        this.og = l || null;
        this.G = d;
        this.m = this.j = !1;
        this.D = null;
        this.Mn(1);
        Owa(this, c, b);
        this.overlay = new _.xF(k);
        k || (this.overlay.bindTo("mapHeading", this), this.overlay.bindTo("tilt", this));
        this.overlay.bindTo("client", this);
        this.overlay.bindTo("client", a, "svClient");
        this.h = this.F = null;
        this.offset = _.AF(c, d)
    };
    Pwa = function(a, b) {
        return _.Pd(b - (a || 0), 0, 360)
    };
    Owa = function(a, b, c) {
        var d = a.map.__gm,
            e = new IH(b, a.controlSize);
        e.bindTo("mode", a);
        e.bindTo("mapSize", a);
        e.bindTo("display", a);
        a.marker = new JH(a.map);
        a.marker.bindTo("mode", a);
        a.marker.bindTo("dragPosition", a);
        a.marker.bindTo("position", a);
        var f = new _.mF(["mapHeading", "streetviewHeading"], "heading", Pwa);
        f.bindTo("streetviewHeading", a, "heading");
        f.bindTo("mapHeading", a.map, "heading");
        a.marker.bindTo("heading", f);
        a.bindTo("pegmanDragging", a.marker, "dragging");
        d.bindTo("pegmanDragging", a);
        _.jf(e, "dragstart",
            a,
            function() {
                a.offset = _.AF(b, a.G);
                _.Qe("streetview").then(function(k) {
                    if (!a.F) {
                        var l = (0, _.Qa)(a.C.getUrl, a.C),
                            m = d.get("panes");
                        k = a.F = new k.Sv(m.floatPane, l, a.config);
                        k.bindTo("description", a);
                        k.bindTo("mode", a);
                        k.bindTo("thumbnailPanoId", a, "panoId");
                        k.bindTo("pixelBounds", d);
                        l = new _.lF(function(p) {
                            p = new _.Bq(a.map, a.ta, p);
                            a.ta.Ab(p);
                            return p
                        });
                        l.bindTo("latLngPosition", a.marker, "dragPosition");
                        k.bindTo("pixelPosition", l)
                    }
                })
            });
        f = {};
        for (var g = _.A(["dragstart", "drag", "dragend"]), h = g.next(); !h.done; f = {
                Gl: f.Gl
            }, h = g.next()) f.Gl = h.value, _.M(e, f.Gl, function(k) {
            return function() {
                _.N(a.marker, k.Gl, {
                    latLng: a.marker.get("position"),
                    pixel: e.get("position")
                })
            }
        }(f));
        _.M(e, "position_changed", function() {
            var k = e.get("position");
            (k = c({
                clientX: k.x + a.offset.x,
                clientY: k.y + a.offset.y
            })) && a.marker.set("dragPosition", k)
        });
        _.M(a.marker, "dragend", function() {
            Qwa(a, !1)
        });
        _.M(a.marker, "hover", function() {
            Qwa(a, !0)
        })
    };
    Qwa = function(a, b) {
        var c = a.get("dragPosition"),
            d = a.map.getZoom(),
            e = Math.max(50, 35 * Math.pow(2, 16 - d));
        a.set("hover", b);
        a.m = !1;
        _.Qe("streetview").then(function(f) {
            var g = a.og || void 0;
            a.h || (a.h = new f.Rv(g), a.bindTo("sloTrackingId", a.h, "sloTrackingId", !0), a.bindTo("isHover", a.h, "isHover", !0), a.h.bindTo("result", a, null, !0));
            a.h.getPanoramaByLocation(c, e, g ? void 0 : 100 > e ? "nearest" : "best", b)
        })
    };
    MH = function(a, b) {
        this.fa = a;
        this.h = b;
        LH() ? Rwa(a) : (b = a, a = _.aH(a), bH(b));
        this.anchor = _.Rn("a", a);
        LH() ? owa(this.anchor, !0) : (this.anchor.style.textDecoration = "none", this.anchor.style.color = "#fff");
        this.anchor.setAttribute("target", "_new");
        a = (LH(), "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0643\u0644\u0629");
        _.Nn(a, this.anchor);
        this.anchor.setAttribute("title", "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0627\u0643\u0644 \u0628\u0634\u0623\u0646 \u0635\u0648\u0631 \u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a \u0625\u0644\u0649 Google");
        _.gf(this.anchor, "click", function(c) {
            var d = _.nz(c) ? 171380 : 171379;
            _.Q(window, _.nz(c) ? "Tdcmi" : "Tdcki");
            _.P(window, d)
        });
        cva(this.anchor, "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0627\u0643\u0644 \u0628\u0634\u0623\u0646 \u0635\u0648\u0631 \u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a \u0625\u0644\u0649 Google")
    };
    LH = function() {
        return "CH" === _.wd(_.Bd(_.hg))
    };
    Rwa = function(a) {
        _.HG(a);
        a.style.fontSize = "10px";
        a.style.height = "17px";
        a.style.backgroundColor = "#f5f5f5";
        a.style.border = "1px solid #dcdcdc";
        a.style.lineHeight = "19px"
    };
    Swa = function(a) {
        a = {
            content: (new _.DF({
                mg: a.mg,
                ng: a.ng,
                ownerElement: a.ownerElement,
                yl: !0,
                Ii: a.Ii
            })).element,
            de: a.de,
            Vc: a.Vc,
            ownerElement: a.ownerElement,
            title: "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d"
        };
        a = new _.jr(a);
        _.jm(a.element, "keyboard-shortcuts-dialog-view");
        return a
    };
    Twa = function() {
        return "@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}"
    };
    NH = function(a) {
        var b = this;
        this.Da = new _.Ii(function() {
            b.G[1] && Uwa(b);
            b.G[0] && Vwa(b);
            b.G[3] && Wwa(b);
            b.G = {};
            b.get("disableDefaultUI") && !b.j && (_.Q(b.h, "Cdn"), _.P(b.h, 148245))
        }, 0);
        this.H = a.Ct || null;
        this.Y = a.Ag;
        this.La = a.Vy || null;
        this.C = a.controlSize;
        this.rb = a.Ow || null;
        this.h = a.map || null;
        this.j = a.UA || null;
        this.Sa = this.h || this.j;
        this.pc = a.Gu;
        this.Oc = a.TA || null;
        this.Nc = a.ta || null;
        this.pb = !!a.Nk;
        this.Ed = !!a.ng;
        this.zc = !!a.mg;
        this.ic = this.wb = this.Yb = !1;
        this.F = this.yc = this.da = this.ia = null;
        this.K = a.Eo;
        this.sb =
            _.dr("\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0636 \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629");
        this.V = null;
        this.Ac = a.Hm;
        this.N = null;
        this.Ya = !1;
        this.Ba = [];
        this.X = null;
        this.dd = {};
        this.G = {};
        this.W = this.ba = this.aa = this.xa = null;
        this.Va = _.Rn("div");
        this.J = null;
        this.Ja = !1;
        _.Un(this.Va);
        _.$n(Twa, this.K);
        var c = this.qb = new hH(_.L(_.Bd(_.hg).o, 15));
        c.bindTo("center", this);
        c.bindTo("zoom", this);
        c.bindTo("mapTypeId", this);
        c.bindTo("pano", this);
        c.bindTo("position",
            this);
        c.bindTo("pov", this);
        c.bindTo("heading", this);
        c.bindTo("tilt", this);
        a.map && _.M(c, "url_changed", function() {
            a.map.set("mapUrl", c.get("url"))
        });
        var d = new GH(_.Bd(_.hg));
        d.bindTo("center", this);
        d.bindTo("zoom", this);
        d.bindTo("mapTypeId", this);
        d.bindTo("pano", this);
        d.bindTo("heading", this);
        this.ed = d;
        Xwa(this);
        this.D = Ywa(this);
        this.T = null;
        Zwa(this);
        this.Z = null;
        $wa(this);
        this.m = null;
        a.yu && axa(this);
        Wwa(this);
        bxa(this, a.ps);
        this.ia = new eH(this.D.h, this.Y);
        this.Y.insertBefore(this.ia.fa, this.Y.children[0]);
        this.Fd = cxa(this);
        this.keyboardShortcuts_changed();
        _.Xi[35] && dxa(this);
        exa(this)
    };
    cxa = function(a) {
        if (a.h) {
            var b = [a.D.h, a.D.j, a.D.m, a.Z, a.D.C];
            a.m && b.push(a.m)
        } else b = [a.D.h, a.D.j, a.D.m, a.D.C, a.T];
        b = new zwa({
            Sh: b
        });
        a.H.addElement(b.fa, 12, !0);
        return b
    };
    Zwa = function(a) {
        if (a.j) {
            var b = document.createElement("div");
            a.T = new MH(b, a.pc);
            a.T.bindTo("pov", a.j);
            a.T.bindTo("pano", a.j);
            a.T.bindTo("takeDownUrl", a.j);
            a.j.set("rmiWidth", b.offsetWidth);
            _.Xi[17] && (a.T.bindTo("visible", a.j, "reportErrorControl"), a.j.bindTo("rmiLinkData", a.T))
        }
    };
    exa = function(a) {
        _.Qe("util").then(function(b) {
            b.tf.h(function() {
                a.Ja = !0;
                fxa(a);
                a.J && (a.J.set("display", !1), a.J.unbindAll(), a.J = null)
            })
        })
    };
    kxa = function(a) {
        if (gxa(a) != a.yc || hxa(a) != a.Yb || ixa(a) != a.ic || OH(a) != a.Ya || jxa(a) != a.wb) a.G[1] = !0;
        a.G[0] = !0;
        _.Ji(a.Da)
    };
    PH = function(a) {
        return a.get("disableDefaultUI")
    };
    OH = function(a) {
        var b = a.get("streetViewControl"),
            c = a.get("disableDefaultUI"),
            d = !!a.get("size");
        if (void 0 !== b || c) _.Q(a.h, b ? "Cvy" : "Cvn"), _.P(a.h, b ? 148260 : 148261);
        null == b && (b = !c);
        a = d && !a.j;
        return b && a
    };
    lxa = function(a) {
        return !a.get("disableDefaultUI") && !!a.j
    };
    bxa = function(a, b) {
        var c = a.H;
        _.lb(b, function(d, e) {
            if (d) {
                var f = function(g) {
                    if (g) {
                        var h = g.index;
                        _.Ud(h) || (h = 1E3);
                        h = Math.max(h, -999);
                        _.Sn(g, Math.min(999999, _.qx(g.style.zIndex || 0)));
                        c.addElement(g, e, !1, h)
                    }
                };
                d.forEach(f);
                _.M(d, "insert_at", function(g) {
                    f(d.getAt(g))
                });
                _.M(d, "remove_at", function(g, h) {
                    c.nf(h)
                })
            }
        })
    };
    dxa = function(a) {
        if (a.h) {
            var b = new OG(document.createElement("div"));
            b.bindTo("card", a.h.__gm);
            b = b.getDiv();
            a.H.addElement(b, 1, !0, .1)
        }
    };
    Wwa = function(a) {
        a.V && (a.V.unbindAll(), Nva(a.V), a.V = null, a.H.nf(a.sb));
        var b = _.dr("\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0636 \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629"),
            c = new Ova(a.K, b, a.Ac, a.C);
        c.bindTo("display", a, "fullscreenControl");
        c.bindTo("disableDefaultUI", a);
        c.bindTo("mapTypeId", a);
        var d = a.get("fullscreenControlOptions") || {};
        a.H.addElement(b, d && d.position || 7, !0, -1007);
        a.V = c;
        a.sb = b
    };
    Ywa = function(a) {
        var b = new Dwa(a.Y, a.K, a.Sa, a.pb);
        b.bindTo("size", a);
        b.bindTo("rmiWidth", a);
        b.bindTo("attributionText", a);
        b.bindTo("fontLoaded", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("isCustomPanorama", a);
        b.bindTo("logoWidth", a);
        b.h.addListener("click", function(c) {
            a.da || (a.da = mxa(a));
            a.Sa.__gm.get("developerProvidedDiv").appendChild(a.da.element);
            a.da.show();
            var d = _.nz(c) ? 164970 : 164969;
            _.Q(window, _.nz(c) ? "Kscmi" : "Kscki");
            _.P(window, d)
        });
        return b
    };
    mxa = function(a) {
        var b = a.Sa.__gm,
            c = b.get("innerContainer"),
            d = b.get("developerProvidedDiv"),
            e = Swa({
                mg: a.zc,
                ng: a.Ed,
                de: function() {
                    _.Xn(c).catch(function() {})
                },
                Vc: a.Y,
                ownerElement: d,
                Ii: a.h ? "map" : "street_view"
            });
        e.addListener("hide", function() {
            d.removeChild(e.element)
        });
        return e
    };
    Xwa = function(a) {
        if (!_.Xi[2]) {
            var b = !!_.Xi[21];
            a.h ? b = Xva(a.h, a.qb, b) : (b = new iH(a.j, a.qb, b), Wva(b, !0));
            b = b.getDiv();
            a.H.addElement(b, 10, !0, -1E3);
            a.set("logoWidth", b.offsetWidth)
        }
    };
    axa = function(a) {
        if (a.h) {
            var b = _.Bd(_.hg);
            a.m = new tH(document.createElement("div"), a.h, _.L(b.o, 15));
            a.m.bindTo("available", a, "rmiAvailable");
            a.m.bindTo("bounds", a);
            _.Xi[17] ? (a.m.bindTo("enabled", a, "reportErrorControl"), a.h.bindTo("rmiLinkData", a.m)) : a.m.set("enabled", !0);
            a.m.bindTo("mapTypeId", a);
            a.m.bindTo("sessionState", a.ed);
            a.bindTo("rmiWidth", a.m, "width");
            _.M(a.m, "rmilinkdata_changed", function() {
                var c = a.m.get("rmiLinkData");
                a.h.set("rmiUrl", c && c.url)
            })
        }
    };
    fxa = function(a) {
        a.la && (a.la.unbindAll && a.la.unbindAll(), a.la = null);
        a.xa && (a.xa.unbindAll(), a.xa = null);
        a.aa && (a.aa.unbindAll(), a.aa = null);
        a.X && (nxa(a, a.X), _.Hj(a.X.ra), a.X = null)
    };
    Vwa = function(a) {
        fxa(a);
        if (a.La && !a.Ja) {
            var b = oxa(a);
            if (b) {
                var c = _.Rn("div");
                _.HG(c);
                c.style.margin = _.$m(a.C >> 2);
                _.gf(c, "mouseover", function() {
                    _.Sn(c, 1E6)
                });
                _.gf(c, "mouseout", function() {
                    _.Sn(c, 0)
                });
                _.Sn(c, 0);
                var d = a.get("mapTypeControlOptions") || {},
                    e = a.aa = new tva(a.La, d.mapTypeIds);
                e.bindTo("aerialAvailableAtZoom", a);
                e.bindTo("zoom", a);
                var f = e.C;
                a.H.addElement(c, d.position || 1, !1, .2);
                d = null;
                2 == b ? (d = new qH(c, f, a.C), e.bindTo("mapTypeId", d)) : d = new iwa(c, f, _.mH, a.C);
                b = a.xa = new rH(e.m);
                b.set("labels", !0);
                d.bindTo("mapTypeId", b, "internalMapTypeId");
                d.bindTo("labels", b);
                d.bindTo("terrain", b);
                d.bindTo("tilt", a, "desiredTilt");
                d.bindTo("fontLoaded", a);
                d.bindTo("mapSize", a, "size");
                d.bindTo("display", a, "mapTypeControl");
                b.bindTo("mapTypeId", a);
                _.N(c, "resize");
                a.X = {
                    ra: c,
                    Mm: null
                };
                a.la = d
            }
        }
    };
    oxa = function(a) {
        if (!a.La) return null;
        var b = (a.get("mapTypeControlOptions") || {}).style || 0,
            c = a.get("mapTypeControl"),
            d = PH(a);
        if (void 0 === c && d || void 0 !== c && !c) return _.Q(a.h, "Cmn"), _.P(a.h, 148251), null;
        1 == b ? (_.Q(a.h, "Cmh"), _.P(a.h, 148253)) : 2 == b && (_.Q(a.h, "Cmd"), _.P(a.h, 148252));
        return 2 == b || 1 == b ? b : 1
    };
    pxa = function(a, b) {
        b = a.N = new AH(b, a.C, _.Av.Nb(), a.K);
        b.bindTo("zoomRange", a);
        b.bindTo("display", a, "zoomControl");
        b.bindTo("disableDefaultUI", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("mapTypeId", a);
        b.bindTo("zoom", a);
        return b.getDiv()
    };
    qxa = function(a) {
        var b = new _.IB(QG, {
                ti: _.Av.Nb()
            }),
            c = new YG(b, a.C, a.K);
        c.bindTo("pov", a);
        c.bindTo("disableDefaultUI", a);
        c.bindTo("panControl", a);
        c.bindTo("mapSize", a, "size");
        return b.ra
    };
    rxa = function(a) {
        var b = _.Rn("div");
        _.HG(b);
        a.F = new uwa(b, a.C, a.K);
        a.F.bindTo("mapSize", a, "size");
        a.F.bindTo("rotateControl", a);
        a.F.bindTo("heading", a);
        a.F.bindTo("tilt", a);
        a.F.bindTo("aerialAvailableAtZoom", a);
        return b
    };
    sxa = function(a) {
        var b = _.Rn("div"),
            c = a.ba = new HH(b, a.C);
        c.bindTo("pano", a);
        c.bindTo("floors", a);
        c.bindTo("floorId", a);
        return b
    };
    QH = function(a) {
        a.G[1] = !0;
        _.Ji(a.Da)
    };
    Uwa = function(a) {
        function b(m, p) {
            if (!l[m]) {
                var q = a.C >> 2,
                    r = 12 + (a.C >> 1),
                    t = document.createElement("div");
                _.HG(t);
                _.zn(t, "gm-bundled-control");
                10 === m || 11 === m || 12 === m || 6 === m || 9 === m ? _.zn(t, "gm-bundled-control-on-bottom") : _.GG(t, "gm-bundled-control-on-bottom");
                t.style.margin = _.$m(q);
                _.Tn(t);
                l[m] = new fH(t, m, r);
                a.H.addElement(t, m, !1, .1)
            }
            m = l[m];
            m.add(p);
            a.Ba.push({
                ra: p,
                Mm: m
            })
        }

        function c(m) {
            return (a.get(m) || {}).position
        }
        a.N && (Cwa(a.N), a.N.unbindAll(), a.N = null);
        a.F && (a.F.unbindAll(), a.F = null);
        a.ba && (a.ba.unbindAll(),
            a.ba = null);
        for (var d = _.A(a.Ba), e = d.next(); !e.done; e = d.next()) nxa(a, e.value);
        a.Ba = [];
        d = a.Yb = hxa(a);
        var f = a.yc = gxa(a),
            g = a.Ya = OH(a),
            h = a.ic = ixa(a);
        a.wb = jxa(a);
        e = d && (c("panControlOptions") || 9);
        d = f && (c("zoomControlOptions") || 3 == f && 6 || 9);
        var k = 3 == f || _.Wn();
        g = g && (c("streetViewControlOptions") || 9);
        h = h && (c("rotateControlOptions") || k && 6 || 9);
        var l = a.dd;
        d && (f = pxa(a, f), b(d, f));
        g && (txa(a), b(g, a.Va));
        e && a.j && _.xn().transform && (f = qxa(a), b(e, f));
        h && (e = rxa(a), b(h, e));
        a.W && (a.W.remove(), a.W = null);
        if (e = lxa(a) && 9) f = sxa(a),
            b(e, f);
        a.F && a.N && a.N.El && h == d && a.F.bindTo("mouseover", a.N.El);
        d = _.A(a.Ba);
        for (e = d.next(); !e.done; e = d.next()) _.N(e.value.ra, "resize")
    };
    hxa = function(a) {
        var b = a.get("panControl"),
            c = PH(a);
        if (void 0 !== b || c) return a.j || (_.Q(a.h, b ? "Cpy" : "Cpn"), _.P(a.h, b ? 148255 : 148254)), !!b;
        b = a.get("size");
        return _.Wn() || !b ? !1 : 400 <= b.width && 370 <= b.height || !!a.j
    };
    jxa = function(a) {
        return a.j ? !1 : PH(a) ? 1 == a.get("myLocationControl") : 0 != a.get("myLocationControl")
    };
    ixa = function(a) {
        var b = a.get("rotateControl"),
            c = PH(a);
        if (void 0 !== b || c) _.Q(a.h, b ? "Cry" : "Crn"), _.P(a.h, b ? 148257 : 148256);
        return !a.get("size") || a.j ? !1 : c ? 1 == b : 0 != b
    };
    gxa = function(a) {
        var b = a.get("zoomControl"),
            c = PH(a);
        return 0 == b || c && void 0 === b ? (a.j || (_.Q(a.h, "Czn"), _.P(a.h, 148262)), null) : a.get("size") ? 1 : null
    };
    RH = function(a) {
        if (a.Z) {
            var b = a.get("scaleControl");
            void 0 !== b && (_.Q(a.h, b ? "Csy" : "Csn"), _.P(a.h, b ? 148259 : 148258));
            b ? (a = a.Z, a.j = !0, wH(a)) : (a = a.Z, a.j = !1, wH(a))
        }
    };
    $wa = function(a) {
        if (a.h) {
            var b = _.dr("Map Scale");
            _.Tn(b);
            _.Un(b);
            a.Z = new wwa(b, _.aH(b, a.K), new _.Cq([_.Fr(a, "projection"), _.Fr(a, "bottomRight"), _.Fr(a, "zoom")], fva));
            RH(a)
        }
    };
    txa = function(a) {
        if (!a.J && !a.Ja && a.rb && a.h) {
            var b = a.J = new KH(a.h, a.rb, a.Va, a.K, a.pc, _.hg, a.Nc, a.C, a.pb, a.Oc || void 0);
            b.bindTo("mapHeading", a, "heading");
            b.bindTo("tilt", a);
            b.bindTo("projection", a.h);
            b.bindTo("mapTypeId", a);
            a.bindTo("panoramaVisible", b);
            b.bindTo("mapSize", a, "size");
            b.bindTo("display", a, "streetViewControl");
            b.bindTo("disableDefaultUI", a);
            uxa(a)
        }
    };
    uxa = function(a) {
        var b = a.J;
        if (b) {
            var c = b.D,
                d = a.get("streetView");
            if (d != c) {
                if (c) {
                    var e = c.__gm;
                    e.unbind("result");
                    e.unbind("heading");
                    c.unbind("passiveLogo");
                    c.h.removeListener(a.Hu, a);
                    c.h.set(!1)
                }
                d && (c = d.__gm, null != c.get("result") && b.set("result", c.get("result")), c.bindTo("isHover", b), c.bindTo("result", b), null != c.get("heading") && b.set("heading", c.get("heading")), c.bindTo("heading", b), d.bindTo("passiveLogo", a), d.h.addListener(a.Hu, a), a.set("panoramaVisible", d.get("visible")), b.bindTo("client", d));
                b.D =
                    d
            }
        }
    };
    nxa = function(a, b) {
        b.Mm ? (b.Mm.remove(b.ra), delete b.Mm) : a.H.nf(b.ra)
    };
    _.wxa = function(a, b) {
        var c = document.createElement("div"),
            d = c.style;
        d.backgroundColor = "white";
        d.fontWeight = "500";
        d.fontFamily = "Roboto, sans-serif";
        d.padding = "15px 25px";
        d.boxSizing = "border-box";
        d.top = "5px";
        d = document.createElement("div");
        var e = document.createElement("img");
        e.alt = "";
        e.src = _.qv + "api-3/images/google_gray.svg";
        e.style.border = e.style.margin = e.style.padding = 0;
        e.style.height = "17px";
        e.style.verticalAlign = "middle";
        e.style.width = "52px";
        _.Tn(e);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("div");
        d.style.lineHeight = "20px";
        d.style.margin = "15px 0";
        e = document.createElement("span");
        e.style.color = "rgba(0,0,0,0.87)";
        e.style.fontSize = "14px";
        e.innerText = '\u200f\u064a\u062a\u0639\u0630\u0651\u0631 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629 \u062a\u062d\u0645\u064a\u0644 "\u062e\u0631\u0627\u0626\u0637 Google" \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.';
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("table");
        d.style.width = "100%";
        e = document.createElement("tr");
        var f = document.createElement("td");
        f.style.lineHeight = "16px";
        f.style.verticalAlign = "middle";
        var g = document.createElement("a");
        eva(g, b);
        g.innerText = "\u0647\u0644 \u062a\u0645\u0644\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u061f";
        g.target = "_blank";
        g.setAttribute("rel", "noopener");
        g.style.color = "rgba(0, 0, 0, 0.54)";
        g.style.fontSize = "12px";
        g.onclick = function() {
            _.Q(a, "Dl");
            _.P(a, 148243)
        };
        f.appendChild(g);
        e.appendChild(f);
        _.Bm(vxa);
        b = document.createElement("td");
        b.style.textAlign = "right";
        f = document.createElement("button");
        f.className = "dismissButton";
        f.innerText = "\u062d\u0633\u0646\u064b\u0627";
        f.onclick = function() {
            a.removeChild(c);
            _.N(a, "dmd");
            _.Q(a, "Dd");
            _.P(a, 148242)
        };
        b.appendChild(f);
        e.appendChild(b);
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        _.Q(a, "D0");
        _.P(a, 148244);
        return c
    };
    SH = function(a) {
        var b = this;
        this.j = a;
        this.Da = new _.Ii(function() {
            return b.m()
        }, 0);
        _.dn(a, "resize", this, this.m);
        this.h = new _.x.Map;
        this.C = new _.x.Map;
        a = _.A([1, 2, 3, 5, 7, 4, 13, 8, 6, 9, 10, 11, 12]);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = document.createElement("div");
            this.j.appendChild(d);
            this.C.set(c, d);
            this.h.set(c, [])
        }
    };
    TH = function(a, b) {
        if (!FG(a)) return 0;
        b = !b && _.qx(a.dataset.controlWidth);
        if (!_.Ud(b) || isNaN(b)) b = a.offsetWidth;
        a = _.yF(a);
        b += _.qx(a.marginLeft) || 0;
        return b += _.qx(a.marginRight) || 0
    };
    UH = function(a, b) {
        if (!FG(a)) return 0;
        b = !b && _.qx(a.dataset.controlHeight);
        if (!_.Ud(b) || isNaN(b)) b = a.offsetHeight;
        a = _.yF(a);
        b += _.qx(a.marginTop) || 0;
        return b += _.qx(a.marginBottom) || 0
    };
    xxa = function(a) {
        for (var b = 0, c = _.A(a), d = c.next(); !d.done; d = c.next()) b = Math.max(d.value.height, b);
        d = c = 0;
        for (var e = a.length; 0 < e; --e) {
            var f = a[e - 1];
            if (b === f.height) {
                f.width > d && f.width > f.height ? d = f.height : c = f.width;
                break
            } else d = Math.max(f.height, d)
        }
        return new _.Qg(c, d)
    };
    VH = function(a, b, c, d) {
        var e = 0,
            f = 0,
            g = [];
        a = _.A(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = TH(k);
            var m = TH(k, !0),
                p = UH(k),
                q = UH(k, !0);
            k.style[b] = _.$m("left" === b ? e : e + (l - m));
            k.style[c] = _.$m("top" === c ? 0 : p - q);
            l = e + l;
            p > f && (f = p, d.push({
                minWidth: e,
                height: f
            }));
            e = l;
            h || g.push(new _.Qg(e, p));
            k.style.visibility = ""
        }
        return xxa(g)
    };
    WH = function(a, b, c, d) {
        var e = 0,
            f = [];
        a = _.A(a);
        for (var g = a.next(); !g.done; g = a.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            for (var k = TH(h), l = UH(h), m = TH(h, !0), p = UH(h, !0), q = 0, r = _.A(d), t = r.next(); !t.done; t = r.next()) {
                t = t.value;
                if (t.minWidth > k) break;
                q = t.height
            }
            e = Math.max(q, e);
            h.style[c] = _.$m("top" === c ? e : e + l - p);
            h.style[b] = _.$m("left" === b ? 0 : k - m);
            e += l;
            g || f.push(new _.Qg(k, e));
            h.style.visibility = ""
        }
        return xxa(f)
    };
    XH = function(a, b, c, d) {
        for (var e = 0, f = 0, g = _.A(a), h = g.next(); !h.done; h = g.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = TH(k),
                m = UH(k),
                p = TH(k, !0);
            "left" === b ? k.style.left = "0" : "right" === b ? k.style.right = _.$m(l - p) : k.style.left = _.$m((c - p) / 2);
            e += m;
            h || (f = Math.max(l, f))
        }
        b = (d - e) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) c = c.value.element, c.style.top = _.$m(b), b += UH(c), c.style.visibility = "";
        return f
    };
    yxa = function(a, b, c) {
        for (var d = 0, e = 0, f = _.A(a), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            var k = TH(h),
                l = UH(h),
                m = UH(h, !0);
            h.style[b] = _.$m("top" === b ? 0 : l - m);
            d += k;
            g || (e = Math.max(l, e))
        }
        b = (c - d) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) c = c.value.element, c.style.left = _.$m(b), b += TH(c), c.style.visibility = "";
        return e
    };
    zxa = function(a, b, c, d, e, f, g, h, k, l, m, p, q, r, t, u, w) {
        var y = b.get("streetView");
        k = b.__gm;
        if (y && k) {
            p = new _.EF(_.px(), y.get("client"));
            y = _.qda[y.get("client")];
            var z = new NH({
                    Ow: function(T) {
                        return q.fromContainerPixelToLatLng(new _.R(T.clientX, T.clientY))
                    },
                    ps: b.controls,
                    Eo: l,
                    Hm: m,
                    Ct: a,
                    map: b,
                    Vy: b.mapTypes,
                    Ag: d,
                    yu: !0,
                    ta: r,
                    controlSize: b.get("controlSize") || 40,
                    TA: y,
                    Gu: p,
                    Nk: t,
                    ng: u,
                    mg: w
                }),
                G = new _.mF(["bounds"], "bottomRight", function(T) {
                    return T && _.hm(T)
                }),
                K, aa;
            _.en(b, "idle", function() {
                var T = b.get("bounds");
                T != K &&
                    (z.set("bounds", T), G.set("bounds", T), K = T);
                T = b.get("center");
                T != aa && (z.set("center", T), aa = T)
            });
            z.bindTo("bottomRight", G);
            z.bindTo("disableDefaultUI", b);
            z.bindTo("heading", b);
            z.bindTo("projection", b);
            z.bindTo("reportErrorControl", b);
            z.bindTo("passiveLogo", b);
            z.bindTo("zoom", k);
            z.bindTo("mapTypeId", c);
            z.bindTo("attributionText", e);
            z.bindTo("zoomRange", g);
            z.bindTo("aerialAvailableAtZoom", h);
            z.bindTo("tilt", h);
            z.bindTo("desiredTilt", h);
            z.bindTo("keyboardShortcuts", b, "keyboardShortcuts", !0);
            z.bindTo("mapTypeControlOptions",
                b, null, !0);
            z.bindTo("panControlOptions", b, null, !0);
            z.bindTo("rotateControlOptions", b, null, !0);
            z.bindTo("scaleControlOptions", b, null, !0);
            z.bindTo("streetViewControlOptions", b, null, !0);
            z.bindTo("zoomControlOptions", b, null, !0);
            z.bindTo("mapTypeControl", b);
            z.bindTo("myLocationControlOptions", b);
            z.bindTo("fullscreenControlOptions", b, null, !0);
            b.get("fullscreenControlOptions") && z.notify("fullscreenControlOptions");
            z.bindTo("panControl", b);
            z.bindTo("rotateControl", b);
            z.bindTo("motionTrackingControl", b);
            z.bindTo("motionTrackingControlOptions",
                b, null, !0);
            z.bindTo("scaleControl", b);
            z.bindTo("streetViewControl", b);
            z.bindTo("fullscreenControl", b);
            z.bindTo("zoomControl", b);
            z.bindTo("myLocationControl", b);
            z.bindTo("rmiAvailable", f, "available");
            z.bindTo("streetView", b);
            z.bindTo("fontLoaded", k);
            z.bindTo("size", k);
            k.bindTo("renderHeading", z);
            _.lf(z, "panbyfraction", k)
        }
    };
    Axa = function(a, b, c, d, e, f, g, h) {
        var k = new _.EF(_.px(), g.get("client")),
            l = new NH({
                ps: f,
                Eo: d,
                Hm: h,
                Ct: e,
                Ag: c,
                controlSize: g.get("controlSize") || 40,
                yu: !1,
                UA: g,
                Gu: k
            });
        l.set("streetViewControl", !1);
        l.bindTo("attributionText", b, "copyright");
        l.set("mapTypeId", "streetview");
        l.set("tilt", !0);
        l.bindTo("heading", b);
        l.bindTo("zoom", b, "zoomFinal");
        l.bindTo("zoomRange", b);
        l.bindTo("pov", b, "pov");
        l.bindTo("position", g);
        l.bindTo("pano", g);
        l.bindTo("passiveLogo", g);
        l.bindTo("floors", b);
        l.bindTo("floorId", b);
        l.bindTo("rmiWidth",
            g);
        l.bindTo("fullscreenControlOptions", g, null, !0);
        l.bindTo("panControlOptions", g, null, !0);
        l.bindTo("zoomControlOptions", g, null, !0);
        l.bindTo("fullscreenControl", g);
        l.bindTo("panControl", g);
        l.bindTo("zoomControl", g);
        l.bindTo("disableDefaultUI", g);
        l.bindTo("fontLoaded", g.__gm);
        l.bindTo("size", b);
        a.view && a.view.addListener("scene_changed", function() {
            var m = a.view.get("scene");
            l.set("isCustomPanorama", "c" === m)
        });
        l.Da.Fc();
        _.lf(l, "panbyfraction", a)
    };
    YH = function(a, b, c) {
        this.T = a;
        this.N = b;
        this.K = c;
        this.m = this.j = 0;
        this.C = null;
        this.H = this.h = 0;
        this.F = this.J = null;
        _.dn(a, "keydown", this, this.ey);
        _.dn(a, "keypress", this, this.Lw);
        _.dn(a, "keyup", this, this.lA);
        this.D = {};
        this.G = {}
    };
    ZH = function(a, b) {
        _.P(window, a);
        _.Q(window, b)
    };
    Bxa = function(a) {
        var b = a.get("zoom");
        _.Ud(b) && (a.set("zoom", b + 1), ZH(165374, "Zmki"))
    };
    Cxa = function(a) {
        var b = a.get("zoom");
        _.Ud(b) && (a.set("zoom", b - 1), ZH(165374, "Zmki"))
    };
    $H = function(a, b, c) {
        _.N(a, "panbyfraction", b, c);
        ZH(165373, "Pmki")
    };
    Dxa = function(a, b) {
        return !!(b.target !== a.T || b.ctrlKey || b.altKey || b.metaKey || 0 == a.get("enabled"))
    };
    Fxa = function(a, b, c, d, e) {
        var f = new YH(b, d, e);
        f.bindTo("zoom", a);
        f.bindTo("enabled", a, "keyboardShortcuts");
        d && f.bindTo("tilt", a.__gm);
        e && f.bindTo("heading", a);
        (d || e) && _.lf(f, "tiltrotatebynow", a.__gm);
        _.lf(f, "panbyfraction", a.__gm);
        _.lf(f, "panbynow", a.__gm);
        _.lf(f, "panby", a.__gm);
        Exa(a, b, d, e);
        var g = a.__gm.G,
            h;
        _.en(a, "streetview_changed", function() {
            var k = a.get("streetView"),
                l = h;
            l && _.bf(l);
            h = null;
            k && (h = _.en(k, "visible_changed", function() {
                k.getVisible() && k === g ? (b.blur(), c.style.visibility = "hidden") : c.style.visibility =
                    ""
            }))
        })
    };
    Exa = function(a, b, c, d) {
        c = new _.DF({
            mg: d,
            ng: c,
            ownerElement: b,
            yl: !1,
            Ii: "map"
        });
        var e = _.rk();
        c.element.id = e;
        c.element.style.display = "none";
        b.appendChild(c.element);
        _.en(a, "keyboardshortcuts_changed", function() {
            _.ym(a) ? b.setAttribute("aria-describedby", e) : b.removeAttribute("aria-describedby")
        })
    };
    aI = function() {
        this.Xq = SH;
        this.Sy = zxa;
        this.Uy = Axa;
        this.Ty = Fxa
    };
    ova = {};
    _.Ta(NG, _.O);
    _.B(tva, _.O);
    _.B(OG, _.O);
    OG.prototype.card_changed = function() {
        var a = this.get("card");
        this.h && this.j.removeChild(this.h);
        if (a) {
            var b = this.h = _.Rn("div");
            b.style.backgroundColor = "white";
            b.appendChild(a);
            b.style.margin = _.$m(10);
            b.style.padding = _.$m(1);
            _.mz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            IG(b, _.$m(2));
            this.j.appendChild(b);
            this.h = b
        } else this.h = null
    };
    OG.prototype.getDiv = function() {
        return this.j
    };
    var XG = _.zl(_.ab(".gm-control-active>img{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:focus>img:nth-child(1),.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1),.gm-control-active:disabled>img:nth-child(1){display:none}.gm-control-active:focus>img:nth-child(2),.gm-control-active:hover>img:nth-child(2){display:block}.gm-control-active:active>img:nth-child(3){display:block}.gm-control-active:disabled>img:nth-child(4){display:block}sentinel{}\n"));
    _.Ta(QG, _.GB);
    QG.prototype.fill = function(a) {
        _.EB(this, 0, _.Xz(a))
    };
    var PG = "t-avKK8hDgg9Q";
    _.B(RG, _.F);
    RG.prototype.getHeading = function() {
        return _.Ad(this.o, 1)
    };
    RG.prototype.setHeading = function(a) {
        _.D(this.o, 1, a)
    };
    var SG = {},
        TG = null;
    _.Ta(VG, _.Ci);
    VG.prototype.j = function(a) {
        this.dispatchEvent(a)
    };
    _.Ta(WG, VG);
    WG.prototype.stop = function(a) {
        UG(this);
        this.h = 0;
        a && (this.progress = 1);
        Fva(this, this.progress);
        this.j("stop");
        this.j("end")
    };
    WG.prototype.zb = function() {
        0 == this.h || this.stop(!1);
        this.j("destroy");
        WG.ve.zb.call(this)
    };
    WG.prototype.j = function(a) {
        this.dispatchEvent(new Gva(a, this))
    };
    _.Ta(Gva, _.bi);
    _.B(YG, _.O);
    YG.prototype.changed = function() {
        !this.m && this.h && (this.h.stop(), this.h = null);
        var a = this.get("pov");
        if (a) {
            var b = new RG;
            b.setHeading(_.Pd(-a.heading, 0, 360));
            _.Nl(_.J(b.o, 3, _.Jz), _.Kz(_.rb(_.er["compass_background.svg"])));
            _.Nl(_.J(b.o, 4, _.Jz), _.Kz(_.rb(_.er["compass_needle_normal.svg"])));
            _.Nl(_.J(b.o, 5, _.Jz), _.Kz(_.rb(_.er["compass_needle_hover.svg"])));
            _.Nl(_.J(b.o, 6, _.Jz), _.Kz(_.rb(_.er["compass_needle_active.svg"])));
            _.Nl(_.J(b.o, 7, _.Jz), _.Kz(_.rb(_.er["compass_rotate_normal.svg"])));
            _.Nl(_.J(b.o,
                8, _.Jz), _.Kz(_.rb(_.er["compass_rotate_hover.svg"])));
            _.Nl(_.J(b.o, 9, _.Jz), _.Kz(_.rb(_.er["compass_rotate_active.svg"])));
            _.D(b.o, 10, "\u062a\u062f\u0648\u064a\u0631 \u0639\u0643\u0633 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629");
            _.D(b.o, 11, "\u062a\u062f\u0648\u064a\u0631 \u0641\u064a \u0627\u062a\u062c\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629");
            _.D(b.o, 12, "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0639\u0631\u0636");
            this.j.update([b])
        }
    };
    YG.prototype.mapSize_changed = function() {
        ZG(this)
    };
    YG.prototype.disableDefaultUI_changed = function() {
        ZG(this)
    };
    YG.prototype.panControl_changed = function() {
        ZG(this)
    };
    _.B(Ova, _.O);
    var Mva = [{
        Gx: -52,
        close: -78,
        top: -86,
        backgroundColor: "#fff"
    }, {
        Gx: 0,
        close: -26,
        top: -86,
        backgroundColor: "#222"
    }];
    var Pva = _.zl(_.ab(".gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span,.gm-style .gm-style-mtc div{font-size:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span{outline-offset:3px}sentinel{}\n"));
    _.B(dH, _.O);
    _.n = dH.prototype;
    _.n.fontLoaded_changed = function() {
        var a = this;
        return _.Ca(function(b) {
            cH(a);
            b.h = 0
        })
    };
    _.n.keyboardShortcutsShown_changed = function() {
        cH(this)
    };
    _.n.vh = function() {
        this.get("keyboardShortcutsShown") && (this.fa.style.display = "", this.h.textContent = "", this.h.appendChild(this.D), _.zz(), _.N(this, "update"))
    };
    _.n.uh = function() {
        this.get("keyboardShortcutsShown") && (this.fa.style.display = "", this.h.textContent = "", this.h.textContent = "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d", _.zz(), _.N(this, "update"))
    };
    _.n.Rb = function() {
        this.get("keyboardShortcutsShown") || (this.fa.style.display = "none", _.N(this, "update"))
    };
    _.n.Md = function() {
        return this.fa
    };
    _.B(eH, _.O);
    eH.prototype.m = function() {
        this.h = !0;
        Sva(this)
    };
    fH.prototype.add = function(a) {
        a.style.position = "absolute";
        this.h ? this.fa.insertBefore(a, this.fa.firstChild) : this.fa.appendChild(a);
        a = Tva(this, a);
        this.elements.push(a);
        gH(this, a)
    };
    fH.prototype.remove = function(a) {
        var b = this;
        this.fa.removeChild(a);
        gva(this.elements, function(c, d) {
            c.element === a && (b.elements.splice(d, 1), b.onRemove(c))
        })
    };
    fH.prototype.onRemove = function(a) {
        a && (gH(this, a), a.Wp && (_.bf(a.Wp), delete a.Wp))
    };
    _.Em("api-3/images/my_location_spinner", !0, !0);
    _.Ta(hH, _.O);
    hH.prototype.changed = function(a) {
        if ("url" != a)
            if (this.get("pano")) {
                a = this.get("pov");
                var b = this.get("position");
                a && b && (a = _.Kta(a, b, this.get("pano"), this.h), this.set("url", a))
            } else {
                a = {};
                if (b = this.get("center")) b = new _.te(b.lat(), b.lng()), a.ll = b.toUrlValue();
                b = this.get("zoom");
                _.Ud(b) && (a.z = b);
                b = this.get("mapTypeId");
                (b = "terrain" == b ? "p" : "hybrid" == b ? "h" : _.mv[b]) && (a.t = b);
                if (b = this.get("pano")) {
                    a.z = 17;
                    a.layer = "c";
                    var c = this.get("position");
                    c && (a.cbll = c.toUrlValue());
                    a.panoid = b;
                    (b = this.get("pov")) && (a.cbp =
                        "12," + b.heading + ",," + Math.max(b.zoom - 3) + "," + -b.pitch)
                }
                a.hl = _.ud(_.Bd(_.hg));
                a.gl = _.wd(_.Bd(_.hg));
                a.mapclient = _.Xi[35] ? "embed" : "apiv3";
                var d = [];
                _.Md(a, function(e, f) {
                    d.push(e + "=" + f)
                });
                this.set("url", this.h + "?" + d.join("&"))
            }
    };
    iH.prototype.getDiv = function() {
        return this.m
    };
    _.B(Yva, _.O);
    _.B(lH, _.O);
    lH.prototype.ib = function() {
        return this.h
    };
    var $va = _.zl(_.ab(".ssQIHO-checkbox-menu-item>span>span{background-color:#000;display:inline-block}@media (forced-colors:active),(prefers-contrast:more){.ssQIHO-checkbox-menu-item>span>span{background-color:ButtonText}}\n"));
    _.B(nH, _.O);
    nH.prototype.ib = function() {
        return this.h
    };
    _.B(oH, _.O);
    oH.prototype.ib = function() {
        return this.h
    };
    _.Ta(bwa, _.O);
    _.B(pH, _.O);
    pH.prototype.F = function() {
        var a = this.h;
        a.timeout && (window.clearTimeout(a.timeout), a.timeout = null)
    };
    pH.prototype.active_changed = function() {
        this.F();
        if (this.get("active")) fwa(this);
        else {
            var a = this.h;
            a.h && (_.lb(a.h, _.bf), a.h = null);
            a.contains(document.activeElement) && this.C.focus();
            this.j = null;
            _.iz(a)
        }
    };
    var jwa = _.zl(_.ab(".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}.gm-style .gm-style-mtc ul,.gm-style .gm-style-mtc li{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}sentinel{}\n"));
    _.B(iwa, _.O);
    _.B(qH, _.O);
    qH.prototype.mapSize_changed = function() {
        lwa(this)
    };
    qH.prototype.display_changed = function() {
        lwa(this)
    };
    _.B(rH, _.O);
    rH.prototype.changed = function(a) {
        if (!this.h)
            if ("mapTypeId" === a) {
                a = this.get("mapTypeId");
                var b = this.map[a];
                b && b.mapTypeId && (a = b.mapTypeId);
                sH(this, "internalMapTypeId", a);
                b && b.Zk && sH(this, b.Zk, b.value)
            } else {
                a = this.get("internalMapTypeId");
                if (this.map) {
                    b = _.A(_.v(Object, "entries").call(Object, this.map));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.A(c.value);
                        c = d.next().value;
                        (d = d.next().value) && d.mapTypeId === a && d.Zk && this.get(d.Zk) == d.value && (a = c)
                    }
                }
                sH(this, "mapTypeId", a)
            }
    };
    _.B(tH, _.O);
    _.n = tH.prototype;
    _.n.sessionState_changed = function() {
        var a = this.get("sessionState");
        if (a) {
            var b = new _.uE;
            _.Nl(b, a);
            a = _.J(b.o, 10, _.uC);
            _.D(a.o, 1, 1);
            _.D(b.o, 12, !0);
            b = _.Jta(b, this.D);
            b += "&rapsrc=apiv3";
            _.Wm(this.h, _.ly(b));
            this.C = b;
            this.get("available") && this.set("rmiLinkData", {
                label: "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
                tooltip: "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0623\u062e\u0637\u0627\u0621 \u0641\u064a \u062e\u0631\u064a\u0637\u0629 \u0637\u0631\u064a\u0642 \u0623\u0648 \u0635\u0648\u0631 \u0625\u0644\u0649 Google",
                url: this.C
            })
        }
    };
    _.n.available_changed = function() {
        uH(this)
    };
    _.n.enabled_changed = function() {
        uH(this)
    };
    _.n.mapTypeId_changed = function() {
        uH(this)
    };
    _.n.vh = function() {
        pwa(this) && (_.zz(), _.Q(this.m, "Rs"), _.P(this.m, 148263), this.j.style.display = "", this.h.textContent = "", this.h.appendChild(this.F))
    };
    _.n.uh = function() {
        pwa(this) && (_.zz(), _.Q(this.m, "Rs"), _.P(this.m, 148263), this.j.style.display = "", this.h.textContent = "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062e\u0631\u064a\u0637\u0629")
    };
    _.n.Rb = function() {
        this.j.style.display = "none"
    };
    _.n.Md = function() {
        return this.j
    };
    _.B(vH, _.O);
    vH.prototype.refresh = function() {
        var a = this.get("mapSize"),
            b = !!this.get("aerialAvailableAtZoom");
        a = !!this.get("rotateControl") || a && 200 <= a.width && 200 <= a.height;
        b = b && a;
        a = this.J;
        qwa(this.D, this.j, this.F);
        this.m.style.display = this.j ? "block" : "none";
        this.G.style.display = this.j ? "block" : "none";
        this.C.style.display = this.j ? "block" : "none";
        this.H.style.display = this.j ? "block" : "none";
        var c = this.F,
            d = Math.floor(3 * this.F) + 2;
        d = this.j ? d : this.F;
        this.h.style.width = _.$m(c);
        this.h.style.height = _.$m(d);
        a.dataset.controlWidth = String(c);
        a.dataset.controlHeight = String(d);
        _.hz(a, b);
        _.N(a, "resize")
    };
    _.B(uwa, _.O);
    _.n = wwa.prototype;
    _.n.show = function() {
        this.j && (this.fa.style.display = "")
    };
    _.n.Rb = function() {
        this.j || (this.fa.style.display = "none")
    };
    _.n.vh = function() {
        this.show()
    };
    _.n.uh = function() {
        this.show()
    };
    _.n.Md = function() {
        return this.fa
    };
    zwa.prototype.update = function(a) {
        this.h = a;
        var b = _.A(this.Sh);
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            d.Rb();
            d.vh()
        }
        if (a < this.fa.offsetWidth)
            for (d = _.A(this.fm), c = d.next(); !c.done; c = d.next())
                if (c = c.value, b = this.fa.offsetWidth, a < b) c.Rb();
                else break;
        else
            for (d = this.fm.length - 1; 0 <= d; d--) c = this.fm[d], c.uh(), b = this.fa.offsetWidth, a < b && c.vh();
        _.N(this.fa, "resize")
    };
    var yH = {},
        Gxa = yH[1] = {};
    Gxa.backgroundColor = "#fff";
    Gxa.Bs = "#e6e6e6";
    var Hxa = yH[2] = {};
    Hxa.backgroundColor = "#222";
    Hxa.Bs = "#1a1a1a";
    _.B(zH, _.O);
    zH.prototype.changed = function(a) {
        if ("zoom" === a || "zoomRange" === a) {
            a = this.get("zoom");
            var b = this.get("zoomRange");
            "number" === typeof a && b && (this.D.disabled = a >= b.max, this.D.style.cursor = a >= b.max ? "default" : "pointer", this.F.disabled = a <= b.min, this.F.style.cursor = a <= b.min ? "default" : "pointer")
        }
    };
    _.B(AH, _.O);
    AH.prototype.getDiv = function() {
        return this.h
    };
    _.B(CH, _.O);
    _.n = CH.prototype;
    _.n.fontLoaded_changed = function() {
        BH(this)
    };
    _.n.attributionText_changed = function() {
        BH(this)
    };
    _.n.hidden_changed = function() {
        BH(this)
    };
    _.n.mapTypeId_changed = function() {
        "streetview" === this.get("mapTypeId") && (bH(this.D), this.m.style.color = "#fff")
    };
    _.n.vh = function() {
        this.get("hidden") || (this.h.style.display = "", this.m.style.display = "", this.j.style.display = "none", _.zz())
    };
    _.n.uh = function() {
        this.get("hidden") || (this.h.style.display = "", this.m.style.display = "none", this.j.style.display = "", _.zz())
    };
    _.n.Rb = function() {
        this.get("hidden") && (this.h.style.display = "none")
    };
    _.n.Md = function() {
        return this.h
    };
    _.B(DH, _.O);
    DH.prototype.ib = function() {
        return this.h.element
    };
    DH.prototype.visible_changed = function() {
        this.get("visible") ? (_.zz(), this.m.appendChild(this.h.element), this.h.show()) : this.h.Rb()
    };
    DH.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        (this.j.textContent = a) || this.h.Rb()
    };
    _.B(EH, _.O);
    _.n = EH.prototype;
    _.n.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        this.j.textContent = a
    };
    _.n.hidden_changed = function() {
        var a = !this.get("hidden");
        _.hz(this.h, a);
        a && _.zz()
    };
    _.n.vh = function() {};
    _.n.uh = function() {};
    _.n.Rb = function() {};
    _.n.Md = function() {
        return this.h
    };
    _.B(FH, _.O);
    _.n = FH.prototype;
    _.n.hidden_changed = function() {
        _.N(this.h, "resize")
    };
    _.n.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") && (bH(this.h), this.m.style.color = "#fff")
    };
    _.n.fontLoaded_changed = function() {
        _.N(this.h, "resize")
    };
    _.n.vh = function() {
        this.uh()
    };
    _.n.uh = function() {
        this.get("hidden") || (this.h.style.display = "", _.zz())
    };
    _.n.Rb = function() {
        this.get("hidden") && (this.h.style.display = "none")
    };
    _.n.Md = function() {
        return this.h
    };
    _.B(Dwa, _.O);
    _.Ta(GH, _.O);
    GH.prototype.changed = function(a) {
        if ("sessionState" != a) {
            a = new _.uE;
            var b = this.get("zoom"),
                c = this.get("center"),
                d = this.get("pano");
            if (null != b && null != c || null != d) {
                var e = this.h,
                    f = _.J(a.o, 2, _.qC),
                    g = _.ud(e);
                _.D(f.o, 1, g);
                f = _.J(a.o, 2, _.qC);
                e = _.wd(e);
                _.D(f.o, 2, e);
                e = _.vE(a);
                f = this.get("mapTypeId");
                "hybrid" == f || "satellite" == f ? _.D(e.o, 1, 3) : (_.D(e.o, 1, 0), "terrain" == f && (f = _.J(a.o, 5, _.oC), _.dd(f.o, 1, 4)));
                f = _.J(e.o, 2, _.wC);
                _.D(f.o, 1, 2);
                c && (g = c.lng(), _.D(f.o, 2, g), c = c.lat(), _.D(f.o, 3, c));
                "number" === typeof b && _.D(f.o,
                    6, b);
                f.setHeading(this.get("heading") || 0);
                d && (b = _.J(e.o, 3, _.AC), _.D(b.o, 1, d));
                this.set("sessionState", a)
            } else this.set("sessionState", null)
        }
    };
    _.B(HH, _.O);
    HH.prototype.floors_changed = function() {
        var a = this.get("floorId"),
            b = this.get("floors") || [],
            c = this.fa;
        if (1 < b.length) {
            _.jz(c);
            _.lb(this.h, function(g) {
                _.Zn(g)
            });
            this.h = [];
            for (var d = b.length, e = d - 1; 0 <= e; --e) {
                var f = _.dr(b[e].description || b[e].ir || "\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a");
                b[e].Bo == a ? (f.style.color = "#aaa", f.style.fontWeight = "bold", f.style.backgroundColor = "#333") : (Ewa(this, f, b[e].Vz), f.style.color = "#999", f.style.fontWeight = "400", f.style.backgroundColor = "#222");
                f.style.height = f.style.width = _.$m(this.j);
                e == d - 1 ? jva(f, _.$m(_.JB(this.j))) : 0 == e && kva(f, _.$m(_.JB(this.j)));
                _.Nn(b[e].ir, f);
                c.appendChild(f);
                this.h.push(f)
            }
            setTimeout(function() {
                _.N(c, "resize")
            })
        } else _.iz(c)
    };
    _.B(IH, _.O);
    IH.prototype.F = function() {
        1 == this.get("mode") && this.set("mode", 2)
    };
    IH.prototype.G = function() {
        2 == this.get("mode") && this.set("mode", 1)
    };
    var Ixa = [_.er["lilypad_0.svg"], _.er["lilypad_1.svg"], _.er["lilypad_2.svg"], _.er["lilypad_3.svg"], _.er["lilypad_4.svg"], _.er["lilypad_5.svg"], _.er["lilypad_6.svg"], _.er["lilypad_7.svg"], _.er["lilypad_8.svg"], _.er["lilypad_9.svg"], _.er["lilypad_10.svg"], _.er["lilypad_11.svg"], _.er["lilypad_12.svg"], _.er["lilypad_13.svg"], _.er["lilypad_14.svg"], _.er["lilypad_15.svg"]],
        Lwa = [_.er["lilypad_pegman_0.svg"], _.er["lilypad_pegman_1.svg"], _.er["lilypad_pegman_2.svg"], _.er["lilypad_pegman_3.svg"], _.er["lilypad_pegman_4.svg"],
            _.er["lilypad_pegman_5.svg"], _.er["lilypad_pegman_6.svg"], _.er["lilypad_pegman_7.svg"], _.er["lilypad_pegman_8.svg"], _.er["lilypad_pegman_9.svg"], _.er["lilypad_pegman_10.svg"], _.er["lilypad_pegman_11.svg"], _.er["lilypad_pegman_12.svg"], _.er["lilypad_pegman_13.svg"], _.er["lilypad_pegman_14.svg"], _.er["lilypad_pegman_15.svg"]
        ];
    _.B(JH, _.O);
    _.n = JH.prototype;
    _.n.mode_changed = function() {
        var a = this;
        return _.Ca(function(b) {
            if (1 == b.h) return _.va(b, Mwa(a), 2);
            Nwa(a);
            b.h = 0
        })
    };
    _.n.heading_changed = function() {
        7 === this.j() && Mwa(this)
    };
    _.n.position_changed = function() {
        var a = this.j();
        if (_.nF(a))
            if (this.get("position")) {
                this.qp.setVisible(!0);
                this.J.setVisible(!1);
                a = this.set;
                var b = Kwa(this);
                this.F !== b && (this.F = b, this.D = {
                    url: Ixa[b],
                    scaledSize: new _.Qg(49, 52),
                    anchor: new _.R(25, 35)
                });
                a.call(this, "lilypadIcon", this.D)
            } else a = this.j(), 5 === a ? this.h(6) : 3 === a && this.h(4);
        else(b = this.get("position")) && 1 === a && this.h(7), this.set("dragPosition", b)
    };
    _.n.Je = function(a) {
        this.set("dragging", !0);
        this.h(5);
        this.C = a.pixel.x
    };
    _.n.Pf = function(a) {
        var b = this;
        a = a.pixel.x;
        a > this.C + 5 ? (this.h(5), this.C = a) : a < this.C - 5 && (this.h(3), this.C = a);
        Nwa(this);
        window.clearTimeout(this.m);
        this.m = window.setTimeout(function() {
            _.N(b, "hover");
            b.m = 0
        }, 300)
    };
    _.n.kf = function() {
        this.set("dragging", !1);
        this.h(1);
        window.clearTimeout(this.m);
        this.m = 0
    };
    _.Ta(KH, _.O);
    _.n = KH.prototype;
    _.n.zd = function() {
        var a = this.map.overlayMapTypes,
            b = this.overlay;
        a.forEach(function(c, d) {
            c == b && a.removeAt(d)
        });
        this.j = !1
    };
    _.n.kd = function() {
        var a = this.get("projection");
        a && a.j && (this.map.overlayMapTypes.push(this.overlay), this.j = !0)
    };
    _.n.mode_changed = function() {
        var a = _.nF(this.rv());
        a != this.j && (a ? this.kd() : this.zd())
    };
    _.n.tilt_changed = function() {
        this.j && (this.zd(), this.kd())
    };
    _.n.heading_changed = function() {
        this.j && (this.zd(), this.kd())
    };
    _.n.result_changed = function() {
        var a = this.get("result"),
            b = a && a.location;
        this.set("position", b && b.latLng);
        this.set("description", b && b.shortDescription);
        this.set("panoId", b && b.pano);
        this.m ? this.Mn(1) : this.get("hover") || this.set("panoramaVisible", !!a)
    };
    _.n.panoramaVisible_changed = function() {
        this.m = 0 == this.get("panoramaVisible");
        var a = this.get("panoramaVisible"),
            b = this.get("hover");
        a || b || this.Mn(1);
        a && this.notify("position")
    };
    _.n.rv = _.cg("mode");
    _.n.Mn = _.dg("mode");
    _.B(MH, _.O);
    _.n = MH.prototype;
    _.n.visible_changed = function() {
        var a = !1 !== this.get("visible");
        _.hz(this.fa, a);
        _.N(this.fa, "resize")
    };
    _.n.takeDownUrl_changed = function() {
        var a = this.get("pov"),
            b = this.get("pano"),
            c = this.get("takeDownUrl");
        a && (c || b) && (a = "1," + Number(Number(a.heading).toFixed(3)).toString() + ",," + Number(Number(Math.max(0, a.zoom - 1 || 0)).toFixed(3)).toString() + "," + Number(Number(-a.pitch).toFixed(3)).toString(), b = c ? c + ("&cbp=" + a + "&hl=" + _.ud(_.Bd(_.hg))) : this.h.getUrl("report", ["panoid=" + b, "cbp=" + a, "hl=" + _.ud(_.Bd(_.hg))]), _.Wm(this.anchor, _.ly(b)), this.set("rmiLinkData", {
            label: (LH(), "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0643\u0644\u0629"),
            tooltip: "\u200f\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0627\u0643\u0644 \u0628\u0634\u0623\u0646 \u0635\u0648\u0631 \u0627\u0644\u062a\u062c\u0648\u0651\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a \u0625\u0644\u0649 Google",
            url: b
        }))
    };
    _.n.pov_changed = function() {
        this.takeDownUrl_changed()
    };
    _.n.pano_changed = function() {
        this.takeDownUrl_changed()
    };
    _.n.vh = function() {};
    _.n.uh = function() {};
    _.n.Rb = function() {};
    _.n.Md = function() {
        return this.fa
    };
    _.B(NH, _.O);
    _.n = NH.prototype;
    _.n.disableDefaultUI_changed = function() {
        kxa(this)
    };
    _.n.size_changed = function() {
        kxa(this);
        this.get("size") && this.Fd.update(this.get("size").width)
    };
    _.n.mapTypeId_changed = function() {
        OH(this) != this.Ya && (this.G[1] = !0, _.Ji(this.Da));
        this.W && this.W.setMapTypeId(this.get("mapTypeId"))
    };
    _.n.mapTypeControl_changed = function() {
        this.G[0] = !0;
        _.Ji(this.Da)
    };
    _.n.mapTypeControlOptions_changed = function() {
        this.G[0] = !0;
        _.Ji(this.Da)
    };
    _.n.fullscreenControlOptions_changed = function() {
        this.G[3] = !0;
        _.Ji(this.Da)
    };
    _.n.scaleControl_changed = function() {
        RH(this)
    };
    _.n.scaleControlOptions_changed = function() {
        RH(this)
    };
    _.n.keyboardShortcuts_changed = function() {
        var a = !!(this.h && _.ym(this.h) || this.j);
        a ? (this.ia.fa.style.display = "", this.D.set("keyboardShortcutsShown", !0)) : a || (this.ia.fa.style.display = "none", this.D.set("keyboardShortcutsShown", !1))
    };
    _.n.panControl_changed = function() {
        QH(this)
    };
    _.n.panControlOptions_changed = function() {
        QH(this)
    };
    _.n.rotateControl_changed = function() {
        QH(this)
    };
    _.n.rotateControlOptions_changed = function() {
        QH(this)
    };
    _.n.streetViewControl_changed = function() {
        QH(this)
    };
    _.n.streetViewControlOptions_changed = function() {
        QH(this)
    };
    _.n.zoomControl_changed = function() {
        QH(this)
    };
    _.n.zoomControlOptions_changed = function() {
        QH(this)
    };
    _.n.myLocationControl_changed = function() {
        QH(this)
    };
    _.n.myLocationControlOptions_changed = function() {
        QH(this)
    };
    _.n.streetView_changed = function() {
        uxa(this)
    };
    _.n.Hu = function(a) {
        this.get("panoramaVisible") != a && this.set("panoramaVisible", a)
    };
    _.n.panoramaVisible_changed = function() {
        var a = this.get("streetView");
        a && (this.J && a.__gm.bindTo("sloTrackingId", this.J), a.h.set(!!this.get("panoramaVisible")))
    };
    var vxa = _.zl(_.ab(".dismissButton{background-color:#fff;border:1px solid #dadce0;color:#1a73e8;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-family:Roboto,sans-serif;font-size:14px;height:36px;cursor:pointer;padding:0 24px}.dismissButton:hover{background-color:rgba(66,133,244,.04);border:1px solid #d2e3fc}.dismissButton:focus{background-color:rgba(66,133,244,.12);border:1px solid #d2e3fc;outline:0}.dismissButton:focus:not(:focus-visible){background-color:#fff;border:1px solid #dadce0;outline:none}.dismissButton:focus-visible{background-color:rgba(66,133,244,.12);border:1px solid #d2e3fc;outline:0}.dismissButton:hover:focus{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd}.dismissButton:hover:focus:not(:focus-visible){background-color:rgba(66,133,244,.04);border:1px solid #d2e3fc}.dismissButton:hover:focus-visible{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd}.dismissButton:active{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd;-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);-moz-box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)}.dismissButton:disabled{background-color:#fff;border:1px solid #f1f3f4;color:#3c4043}sentinel{}\n"));
    var Jxa = new _.x.Set([3, 12, 6, 9]);
    _.B(SH, _.O);
    SH.prototype.getSize = function() {
        return _.gj(this.j)
    };
    SH.prototype.addElement = function(a, b, c, d) {
        var e = this;
        c = void 0 === c ? !1 : c;
        var f = this.h.get(b);
        if (f) {
            d = void 0 !== d && _.Ud(d) ? d : f.length;
            var g;
            for (g = 0; g < f.length && !(f[g].index > d); ++g);
            f.splice(g, 0, {
                element: a,
                border: !!c,
                index: d,
                listener: _.M(a, "resize", function() {
                    return _.Ji(e.Da)
                })
            });
            _.Pn(a);
            a.style.visibility = "hidden";
            c = this.C.get(b);
            b = Jxa.has(b) ? f.length - g - 1 : g;
            c.insertBefore(a, c.children[b]);
            _.Ji(this.Da)
        }
    };
    SH.prototype.nf = function(a) {
        a.parentNode && a.parentNode.removeChild(a);
        for (var b = _.A(_.v(this.h, "values").call(this.h)), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0; d < c.length; ++d)
                if (c[d].element === a) {
                    var e = a;
                    e.style.top = "auto";
                    e.style.bottom = "auto";
                    e.style.left = "auto";
                    e.style.right = "auto";
                    _.bf(c[d].listener);
                    c.splice(d, 1)
                }
        }
        _.Ji(this.Da)
    };
    SH.prototype.m = function() {
        var a = this.getSize(),
            b = a.width;
        a = a.height;
        var c = this.h,
            d = [],
            e = VH(c.get(1), "left", "top", d),
            f = WH(c.get(5), "left", "top", d);
        d = [];
        var g = VH(c.get(10), "left", "bottom", d),
            h = WH(c.get(6), "left", "bottom", d);
        d = [];
        var k = VH(c.get(3), "right", "top", d),
            l = WH(c.get(7), "right", "top", d);
        d = [];
        var m = VH(c.get(12), "right", "bottom", d);
        d = WH(c.get(9), "right", "bottom", d);
        var p = yxa(c.get(11), "bottom", b),
            q = yxa(c.get(2), "top", b),
            r = XH(c.get(4), "left", b, a);
        XH(c.get(13), "center", b, a);
        c = XH(c.get(8), "right",
            b, a);
        this.set("bounds", new _.Eh([new _.R(Math.max(r, e.width, g.width, f.width, h.width) || 0, Math.max(q, e.height, f.height, k.height, l.height) || 0), new _.R(b - (Math.max(c, k.width, m.width, l.width, d.width) || 0), a - (Math.max(p, g.height, m.height, h.height, d.height) || 0))]))
    };
    var Kxa = [37, 38, 39, 40],
        Lxa = [38, 40],
        Mxa = [37, 39],
        Nxa = {
            38: [0, -1],
            40: [0, 1],
            37: [-1, 0],
            39: [1, 0]
        },
        Oxa = {
            38: [0, 1],
            40: [0, -1],
            37: [-1, 0],
            39: [1, 0]
        };
    var bI = Object.freeze([].concat(_.pa(Lxa), _.pa(Mxa)));
    _.B(YH, _.O);
    _.n = YH.prototype;
    _.n.ey = function(a) {
        if (Dxa(this, a)) return !0;
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                b = a.shiftKey && 0 <= Lxa.indexOf(a.keyCode);
                var c = a.shiftKey && 0 <= Mxa.indexOf(a.keyCode) && this.K && !this.j;
                b && this.N && !this.j || c ? (this.G[a.keyCode] = !0, this.m || (this.H = 0, this.h = 1, this.Ds()), ZH(b ? 165376 : 165375, b ? "Tmki" : "Rmki")) : this.m || (this.D[a.keyCode] = 1, this.j || (this.C = new _.oF(100), this.Cs()), ZH(165373, "Pmki"));
                b = !0;
                break;
            case 34:
                $H(this, 0, .75);
                b = !0;
                break;
            case 33:
                $H(this, 0, -.75);
                b = !0;
                break;
            case 36:
                $H(this, -.75, 0);
                b = !0;
                break;
            case 35:
                $H(this, .75, 0);
                b = !0;
                break;
            case 187:
            case 107:
                Bxa(this);
                b = !0;
                break;
            case 189:
            case 109:
                Cxa(this), b = !0
        }
        switch (a.which) {
            case 61:
            case 43:
                Bxa(this);
                b = !0;
                break;
            case 45:
            case 95:
            case 173:
                Cxa(this), b = !0
        }
        b && (_.Ue(a), _.Ve(a));
        return !b
    };
    _.n.Lw = function(a) {
        if (Dxa(this, a)) return !0;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
            case 34:
            case 33:
            case 36:
            case 35:
            case 187:
            case 107:
            case 189:
            case 109:
                return _.Ue(a), _.Ve(a), !1
        }
        switch (a.which) {
            case 61:
            case 43:
            case 45:
            case 95:
            case 173:
                return _.Ue(a), _.Ve(a), !1
        }
        return !0
    };
    _.n.lA = function(a) {
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                this.D[a.keyCode] = null, this.G[a.keyCode] = !1, b = !0
        }
        return !b
    };
    _.n.Cs = function() {
        for (var a = 0, b = 0, c = !1, d = _.A(Kxa), e = d.next(); !e.done; e = d.next()) e = e.value, this.D[e] && (e = _.A(Nxa[e]), c = e.next().value, e = e.next().value, a += c, b += e, c = !0);
        c ? (c = 1, _.pF(this.C) && (c = this.C.next()), d = Math.round(35 * c * a), c = Math.round(35 * c * b), 0 === d && (d = a), 0 === c && (c = b), _.N(this, "panbynow", d, c, 1), this.j = _.az(this, this.Cs, 10)) : this.j = 0
    };
    _.n.Ds = function() {
        for (var a = 0, b = 0, c = !1, d = 0; d < bI.length; d++) this.G[bI[d]] && (c = Oxa[bI[d]], a += c[0], b += c[1], c = !0);
        c ? (_.N(this, "tiltrotatebynow", this.h * a, this.h * b), this.m = _.az(this, this.Ds, 10), this.h = Math.min(1.8, this.h + .01), this.H++, this.J = {
            x: a,
            y: b
        }) : (this.m = 0, this.F = new _.oF(Math.min(Math.round(this.H / 2), 35), 1), _.az(this, this.Es, 10))
    };
    _.n.Es = function() {
        if (!this.m && !this.j && _.pF(this.F)) {
            var a = this.J,
                b = a.x;
            a = a.y;
            var c = this.F.next();
            _.N(this, "tiltrotatebynow", this.h * c * b, this.h * c * a);
            _.az(this, this.Es, 10)
        }
    };
    aI.prototype.xu = function(a, b) {
        a = _.wxa(a, b).style;
        a.border = "1px solid rgba(0,0,0,0.12)";
        a.borderRadius = "5px";
        a.left = "50%";
        a.maxWidth = "375px";
        a.msTransform = "translateX(-50%)";
        a.position = "absolute";
        a.transform = "translateX(-50%)";
        a.width = "calc(100% - 10px)";
        a.zIndex = "1"
    };
    aI.prototype.nq = function(a) {
        if (_.oda() && !a.__gm_bbsp) {
            a.__gm_bbsp = !0;
            var b = new _.Fn("https://developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers");
            new Uva(a, b)
        }
    };
    _.Re("controls", new aI);
});