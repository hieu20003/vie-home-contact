google.maps.__gjsload__('search_impl', function(_) {
    var jeb = function(a) {
            _.F.call(this, a)
        },
        leb = function(a) {
            var b = _.rj.Ma;
            a = a.toArray();
            keb || (keb = {
                M: "sssM",
                O: ["ss"]
            });
            return b.call(_.rj, a, keb)
        },
        meb = function(a, b) {
            _.D(a.o, 3, b)
        },
        neb = function(a) {
            _.F.call(this, a)
        },
        oeb = function() {
            var a = _.Bk,
                b = _.Lj;
            this.j = _.hg;
            this.h = _.ul(_.Nu, a, _.rv + "/maps/api/js/LayersService.GetFeature", b)
        },
        reb = function(a, b, c) {
            var d = _.eF(new oeb);
            c.ai = (0, _.Qa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.BFa(c, _.fM(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Qa)(peb, null, a)));
            _.lb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.Qa)(qeb, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        peb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.o, 2) ? new _.te(_.om(_.I(e.o, 2, _.Fm).o, 1), _.om(_.I(e.o, 2, _.Fm).o, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.o, 3), h = 0; h < g; ++h) {
                    var k = _.Pl(e.o, 3, _.lM, h);
                    f.fields[k.getKey()] = k.Fa()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        qeb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        seb = function() {};
    _.B(jeb, _.F);
    jeb.prototype.j = function() {
        return _.L(this.o, 2)
    };
    var keb;
    _.B(neb, _.F);
    neb.prototype.getStatus = function() {
        return _.H(this.o, 1, -1)
    };
    oeb.prototype.load = function(a, b) {
        function c(g) {
            g = new neb(g);
            b(g)
        }
        var d = new jeb;
        _.D(d.o, 1, a.layerId.split("|")[0]);
        _.D(d.o, 2, a.featureId);
        meb(d, _.ud(_.Bd(this.j)));
        for (var e in a.parameters) {
            var f = _.rd(d.o, 4, _.lM);
            _.D(f.o, 1, e);
            _.D(f.o, 2, a.parameters[e])
        }
        a = leb(d);
        this.h(a, c, c);
        return a
    };
    oeb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    seb.prototype.qw = function(a) {
        if (_.Xi[15]) {
            var b = a.C,
                c = a.C = a.getMap();
            b && a.h && (a.m ? (b = b.__gm.j, b.set(b.get().qf(a.h))) : a.h && _.XFa(a.h, b) && (_.lb(a.j || [], _.bf), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.on;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var w = _.A(d[u].split(":")),
                        y = w.next().value;
                    w = _.oa(w);
                    b.parameters[y] = w.join(":")
                }
                e && (b.spotlightDescription = new _.Zs(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.sn(g));
                m && (b.travelMapRequest = new _.uu(m));
                h && (b.mapsApiLayer = new _.Ol(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.ip(p));
                q && (b.overlayLayer = new _.Hr(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.wt(t));
                b.darkLaunch = !!k;
                a.h =
                    b;
                a.m = a.get("renderOnBaseMap");
                a.m ? (a = c.__gm.j, a.set(a.get().Id(b))) : reb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Re("search_impl", new seb);
});