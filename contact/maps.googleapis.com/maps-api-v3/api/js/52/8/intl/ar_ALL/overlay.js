google.maps.__gjsload__('overlay', function(_) {
    var ix = function(a) {
            this.h = a
        },
        Xna = function() {},
        jx = function(a) {
            a.Gp = a.Gp || new Xna;
            return a.Gp
        },
        Yna = function(a) {
            this.Da = new _.Ii(function() {
                var b = a.Gp;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.mo && a.onAdd) a.onAdd();
                        b.mo = !0;
                        a.draw()
                    }
                } else {
                    if (b.mo)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.mo = !1
                }
            }, 0)
        },
        Zna = function(a, b) {
            function c() {
                return _.Ji(e.Da)
            }
            var d = jx(a),
                e = d.Rm;
            e || (e = d.Rm = new Yna(a));
            _.lb(d.Oa || [], _.bf);
            var f = d.Za = d.Za || new _.jv,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.gu = d.gu || new ix(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.zf && (_.Q(b, "Ox"), _.P(b, 148440))
        },
        coa = function(a) {
            if (a) {
                var b = a.getMap();
                if ($na(a) !== b && b && b instanceof _.zf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new aoa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ta;
                        var e = new kx(b, d);
                        d.Ab(e);
                        c.overlayLayer = e;
                        boa(a);
                        coa(a)
                    })
                }
            }
        },
        boa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.m.zd(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        $na = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        aoa = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.m = c;
            this.j = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.kd(this)
        },
        doa = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        kx = function(a, b) {
            this.C = a;
            this.m = b;
            this.h = null;
            this.j = []
        };
    _.Ta(ix, _.O);
    ix.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Ud(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var lx = {};
    _.Ta(Yna, _.O);
    lx.kd = function(a) {
        if (a) {
            var b = a.getMap();
            (jx(a).Mt || null) !== b && (b && Zna(a, b), jx(a).Mt = b)
        }
    };
    lx.zd = function(a) {
        var b = jx(a),
            c = b.Za;
        c && c.unbindAll();
        (c = b.gu) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.lb(b.Oa, _.bf);
        b.Oa = null;
        b.Rm && (b.Rm.Da.Fc(), b.Rm = null);
        delete jx(a).Mt
    };
    var mx = {};
    aoa.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    kx.prototype.dispose = function() {};
    kx.prototype.Fb = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Bq(this.C, this.m, function() {});
        k.Fb(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, doa(b, k), b.draw()
    };
    kx.prototype.kd = function(a) {
        this.j.push(a);
        this.h && doa(a, this.h);
        this.m.refresh()
    };
    kx.prototype.zd = function(a) {
        _.ob(this.j, a)
    };
    mx.kd = coa;
    mx.zd = boa;
    _.Re("overlay", {
        mr: function(a) {
            if (a) {
                (0, lx.zd)(a);
                (0, mx.zd)(a);
                var b = a.getMap();
                b && (b instanceof _.zf ? (0, mx.kd)(a) : (0, lx.kd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.cr(a, {
                Qd: function(b) {
                    _.bn(b.event.Ha)
                },
                tc: function(b) {
                    return _.Iq(b)
                },
                mh: function(b) {
                    return _.Jq(b)
                },
                ad: function(b) {
                    return _.Jq(b)
                },
                wc: function(b) {
                    return _.Kq(b)
                }
            }).yi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Ve);
            a.addEventListener("contextmenu", _.Ve);
            a.addEventListener("dblclick", _.Ve);
            a.addEventListener("mousedown",
                _.Ve);
            a.addEventListener("mousemove", _.Ve);
            a.addEventListener("MSPointerDown", _.Ve);
            a.addEventListener("pointerdown", _.Ve);
            a.addEventListener("touchstart", _.Ve);
            a.addEventListener("wheel", _.Ve)
        }
    });
});