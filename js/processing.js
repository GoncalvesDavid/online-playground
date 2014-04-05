(function e$$0(y, Q, k) {
    function g(a, b) {
        if (!Q[a]) {
            if (!y[a]) {
                var e = "function" == typeof require && require;
                if (!b && e)return e(a, !0);
                if (n)return n(a, !0);
                throw Error("Cannot find module '" + a + "'");
            }
            e = Q[a] = {exports: {}};
            y[a][0].call(e.exports, function (c) {
                var b = y[a][1][c];
                return g(b ? b : c)
            }, e, e.exports, e$$0, y, Q, k)
        }
        return Q[a].exports
    }

    for (var n = "function" == typeof require && require, l = 0; l < k.length; l++)g(k[l]);
    return g
})({1: [function (D, y, Q) {
        y = {isDomPresent: !0, navigator: navigator, window: window, document: document, ajax: function (k) {
            var g =
                new XMLHttpRequest;
            g.open("GET", k, !1);
            g.overrideMimeType && g.overrideMimeType("text/plain");
            g.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
            g.send(null);
            if (200 !== g.status && 0 !== g.status)throw"XMLHttpRequest failed, status code " + g.status;
            return g.responseText
        }};
        window.Processing = D("./src/")(y)
    }, {"./src/": 27}], 2: [function (D, y, Q) {
        y.exports = {name: "Processing.js", version: "1.4.7", dependencies: {argv: "~0.0.2", browserify: "~2.18.1", express: "~3.3.3", "node-minify": "~0.7.3", nunjucks: "~0.1.9",
            open: "0.0.3"}, devDependencies: {grunt: "~0.4.1", "grunt-cli": "~0.1.8", "grunt-contrib-jshint": "~0.4.3"}}
    }, {}], 3: [function (D, y, Q) {
        y.exports = function (k) {
            if (k instanceof Array) {
                var g = -1;
                this.hasNext = function () {
                    return++g < k.length
                };
                this.next = function () {
                    return k[g]
                }
            } else {
                if (k.iterator instanceof Function)return k.iterator();
                throw"Unable to iterate: " + k;
            }
        }
    }, {}], 4: [function (D, y, Q) {
        y.exports = {X: 0, Y: 1, Z: 2, R: 3, G: 4, B: 5, A: 6, U: 7, V: 8, NX: 9, NY: 10, NZ: 11, EDGE: 12, SR: 13, SG: 14, SB: 15, SA: 16, SW: 17, TX: 18, TY: 19, TZ: 20, VX: 21, VY: 22,
            VZ: 23, VW: 24, AR: 25, AG: 26, AB: 27, DR: 3, DG: 4, DB: 5, DA: 6, SPR: 28, SPG: 29, SPB: 30, SHINE: 31, ER: 32, EG: 33, EB: 34, BEEN_LIT: 35, VERTEX_FIELD_COUNT: 36, P2D: 1, JAVA2D: 1, WEBGL: 2, P3D: 2, OPENGL: 2, PDF: 0, DXF: 0, OTHER: 0, WINDOWS: 1, MAXOSX: 2, LINUX: 3, EPSILON: 1E-4, MAX_FLOAT: 3.4028235E38, MIN_FLOAT: -3.4028235E38, MAX_INT: 2147483647, MIN_INT: -2147483648, PI: Math.PI, TWO_PI: 2 * Math.PI, TAU: 2 * Math.PI, HALF_PI: Math.PI / 2, THIRD_PI: Math.PI / 3, QUARTER_PI: Math.PI / 4, DEG_TO_RAD: Math.PI / 180, RAD_TO_DEG: 180 / Math.PI, WHITESPACE: " \t\n\r\f\u00a0", RGB: 1, ARGB: 2,
            HSB: 3, ALPHA: 4, CMYK: 5, TIFF: 0, TARGA: 1, JPEG: 2, GIF: 3, BLUR: 11, GRAY: 12, INVERT: 13, OPAQUE: 14, POSTERIZE: 15, THRESHOLD: 16, ERODE: 17, DILATE: 18, REPLACE: 0, BLEND: 1, ADD: 2, SUBTRACT: 4, LIGHTEST: 8, DARKEST: 16, DIFFERENCE: 32, EXCLUSION: 64, MULTIPLY: 128, SCREEN: 256, OVERLAY: 512, HARD_LIGHT: 1024, SOFT_LIGHT: 2048, DODGE: 4096, BURN: 8192, ALPHA_MASK: 4278190080, RED_MASK: 16711680, GREEN_MASK: 65280, BLUE_MASK: 255, CUSTOM: 0, ORTHOGRAPHIC: 2, PERSPECTIVE: 3, POINT: 2, POINTS: 2, LINE: 4, LINES: 4, TRIANGLE: 8, TRIANGLES: 9, TRIANGLE_STRIP: 10, TRIANGLE_FAN: 11,
            QUAD: 16, QUADS: 16, QUAD_STRIP: 17, POLYGON: 20, PATH: 21, RECT: 30, ELLIPSE: 31, ARC: 32, SPHERE: 40, BOX: 41, GROUP: 0, PRIMITIVE: 1, GEOMETRY: 3, VERTEX: 0, BEZIER_VERTEX: 1, CURVE_VERTEX: 2, BREAK: 3, CLOSESHAPE: 4, OPEN: 1, CLOSE: 2, CORNER: 0, CORNERS: 1, RADIUS: 2, CENTER_RADIUS: 2, CENTER: 3, DIAMETER: 3, CENTER_DIAMETER: 3, BASELINE: 0, TOP: 101, BOTTOM: 102, NORMAL: 1, NORMALIZED: 1, IMAGE: 2, MODEL: 4, SHAPE: 5, SQUARE: "butt", ROUND: "round", PROJECT: "square", MITER: "miter", BEVEL: "bevel", AMBIENT: 0, DIRECTIONAL: 1, SPOT: 3, BACKSPACE: 8, TAB: 9, ENTER: 10, RETURN: 13, ESC: 27,
            DELETE: 127, CODED: 65535, SHIFT: 16, CONTROL: 17, ALT: 18, CAPSLK: 20, PGUP: 33, PGDN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NUMLK: 144, META: 157, INSERT: 155, ARROW: "default", CROSS: "crosshair", HAND: "pointer", MOVE: "move", TEXT: "text", WAIT: "wait", NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto", DISABLE_OPENGL_2X_SMOOTH: 1, ENABLE_OPENGL_2X_SMOOTH: -1, ENABLE_OPENGL_4X_SMOOTH: 2,
            ENABLE_NATIVE_FONTS: 3, DISABLE_DEPTH_TEST: 4, ENABLE_DEPTH_TEST: -4, ENABLE_DEPTH_SORT: 5, DISABLE_DEPTH_SORT: -5, DISABLE_OPENGL_ERROR_REPORT: 6, ENABLE_OPENGL_ERROR_REPORT: -6, ENABLE_ACCURATE_TEXTURES: 7, DISABLE_ACCURATE_TEXTURES: -7, HINT_COUNT: 10, SINCOS_LENGTH: 720, PRECISIONB: 15, PRECISIONF: 32768, PREC_MAXVAL: 32767, PREC_ALPHA_SHIFT: 9, PREC_RED_SHIFT: 1, NORMAL_MODE_AUTO: 0, NORMAL_MODE_SHAPE: 1, NORMAL_MODE_VERTEX: 2, MAX_LIGHTS: 8}
    }, {}], 5: [function (D, y, Q) {
        y.exports = function (k) {
            function g() {
            }

            function n(a, e, c) {
                if (a.hasOwnProperty(e) &&
                    "function" === typeof a[e]) {
                    var m = a[e];
                    if ("$overloads"in m)m.$defaultOverload = c; else if ("$overloads"in c || m.length !== c.length) {
                        var p;
                        "$overloads"in c ? (p = c.$overloads.slice(0), p[m.length] = m, m = c.$defaultOverload) : (p = [], p[c.length] = c, p[m.length] = m);
                        var r = function () {
                            return(r.$overloads[arguments.length] || ("$methodArgsIndex"in r && arguments.length > r.$methodArgsIndex ? r.$overloads[r.$methodArgsIndex] : null) || r.$defaultOverload).apply(this, arguments)
                        };
                        r.$overloads = p;
                        "$methodArgsIndex"in c && (r.$methodArgsIndex =
                            c.$methodArgsIndex);
                        r.$defaultOverload = m;
                        r.name = e;
                        a[e] = r
                    }
                } else a[e] = c
            }

            function l(b, e) {
                function c(c) {
                    a.defineProperty(b, c, {get: function () {
                        return e[c]
                    }, set: function (d) {
                        e[c] = d
                    }, enumerable: !0})
                }

                var m = [], p;
                for (p in e)"function" === typeof e[p] ? n(b, p, e[p]) : "$" === p.charAt(0) || p in b || m.push(p);
                for (; 0 < m.length;)c(m.shift());
                b.$super = e
            }

            g.prototype = k.PConstants;
            var a = new g;
            Object.keys(k).forEach(function (b) {
                a[b] = k[b]
            });
            a.defineProperty = function (a, e, c) {
                "defineProperty"in Object ? Object.defineProperty(a, e, c) : (c.hasOwnProperty("get") &&
                    a.__defineGetter__(e, c.get), c.hasOwnProperty("set") && a.__defineSetter__(e, c.set))
            };
            a.extendClassChain = function (a) {
                for (var e = [a], c = a.$upcast; c; c = c.$upcast)l(c, a), e.push(c), a = c;
                for (; 0 < e.length;)e.pop().$self = a
            };
            a.extendStaticMembers = function (a, e) {
                l(a, e)
            };
            a.extendInterfaceMembers = function (a, e) {
                l(a, e)
            };
            a.addMethod = function (a, e, c, m) {
                var p = a[e];
                if (p || m) {
                    var r = c.length;
                    if ("$overloads"in p)p.$overloads[r] = c; else {
                        var d = function () {
                            return(d.$overloads[arguments.length] || ("$methodArgsIndex"in d && arguments.length >
                                d.$methodArgsIndex ? d.$overloads[d.$methodArgsIndex] : null) || d.$defaultOverload).apply(this, arguments)
                        }, g = [];
                        p && (g[p.length] = p);
                        g[r] = c;
                        d.$overloads = g;
                        d.$defaultOverload = p || c;
                        m && (d.$methodArgsIndex = r);
                        d.name = e;
                        a[e] = d
                    }
                } else a[e] = c
            };
            a.createJavaArray = function (b, e) {
                var c = null, m = null;
                if ("string" === typeof b)if ("boolean" === b)m = !1; else {
                    var p;
                    p = "string" !== typeof b ? !1 : -1 !== "byte int char color float long double".split(" ").indexOf(b);
                    p && (m = 0)
                }
                if ("number" === typeof e[0])if (p = 0 | e[0], 1 >= e.length) {
                    c = [];
                    c.length = p;
                    for (var r = 0; r < p; ++r)c[r] = m
                } else for (c = [], m = e.slice(1), r = 0; r < p; ++r)c.push(a.createJavaArray(b, m));
                return c
            };
            a.defineProperty(a, "screenWidth", {get: function () {
                return window.innerWidth
            }});
            a.defineProperty(a, "screenHeight", {get: function () {
                return window.innerHeight
            }});
            return a
        }
    }, {}], 6: [function (D, y, Q) {
        y.exports = function (k, g) {
            var n = g.window, l = g.document, a = n.XMLHttpRequest, b = g.noop, e = g.isDOMPresent, c = g.version;
            k.version = c ? c : "@DEV-VERSION@";
            k.lib = {};
            k.registerLibrary = function (c, d) {
                k.lib[c] = d;
                d.hasOwnProperty("init") &&
                d.init(defaultScope)
            };
            k.Sketch = function (c) {
                this.attachFunction = c;
                this.options = {pauseOnBlur: !1, globalKeyEvents: !1};
                this.onExit = this.onFrameEnd = this.onFrameStart = this.onLoop = this.onPause = this.onSetup = this.onLoad = b;
                this.params = {};
                this.imageCache = {pending: 0, images: {}, operaCache: {}, add: function (d, c) {
                    if (!this.images[d] && (e || (this.images[d] = null), c || (c = new Image, c.onload = function (d) {
                        return function () {
                            d.pending--
                        }
                    }(this), this.pending++, c.src = d), this.images[d] = c, n.opera)) {
                        var a = l.createElement("div");
                        a.appendChild(c);
                        a.style.position = "absolute";
                        a.style.opacity = 0;
                        a.style.width = "1px";
                        a.style.height = "1px";
                        this.operaCache[d] || (l.body.appendChild(a), this.operaCache[d] = a)
                    }
                }};
                this.sourceCode = void 0;
                this.attach = function (d) {
                    if ("function" === typeof this.attachFunction)this.attachFunction(d); else if (this.sourceCode) {
                        var c = (new Function("return (" + this.sourceCode + ");"))();
                        c(d);
                        this.attachFunction = c
                    } else throw"Unable to attach sketch to the processingjs instance";
                };
                this.toString = function () {
                    var d, c;
                    c = "((function(Sketch) {\n" +
                        ("var sketch = new Sketch(\n" + this.sourceCode + ");\n");
                    for (d in this.options)if (this.options.hasOwnProperty(d)) {
                        var a = this.options[d];
                        c += "sketch.options." + d + " = " + ("string" === typeof a ? '"' + a + '"' : "" + a) + ";\n"
                    }
                    for (d in this.imageCache)this.options.hasOwnProperty(d) && (c += 'sketch.imageCache.add("' + d + '");\n');
                    return c + "return sketch;\n})(Processing.Sketch))"
                }
            };
            var m = k.loadSketchFromSources = function (c, d) {
                function e(d, c) {
                    var b = new a;
                    b.onreadystatechange = function () {
                        if (4 === b.readyState) {
                            var d;
                            200 !== b.status &&
                                0 !== b.status ? d = "Invalid XHR status " + b.status : "" === b.responseText && (d = "withCredentials"in new a && !1 === (new a).withCredentials && "file:" === n.location.protocol ? "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions." : "File is empty.");
                            c(b.responseText, d)
                        }
                    };
                    b.open("GET", d, !0);
                    b.overrideMimeType &&
                    b.overrideMimeType("application/json");
                    b.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
                    b.send(null)
                }

                function b(d, a) {
                    function n(e, b) {
                        m[d] = e;
                        ++v;
                        b && p.push(a + " ==> " + b);
                        if (v === g)if (0 === p.length)try {
                            return new k(c, m.join("\n"))
                        } catch (md) {
                            throw console.log("Processing.js: Unable to execute pjs sketch."), md;
                        } else throw"Processing.js: Unable to load pjs sketch files: " + p.join("\n");
                    }

                    if ("#" === a.charAt(0)) {
                        var ca = l.getElementById(a.substring(1));
                        ca ? n(ca.text || ca.textContent) : n("", "Unable to load pjs sketch: element with id '" +
                            a.substring(1) + "' was not found")
                    } else e(a, n)
                }

                for (var m = [], p = [], g = d.length, v = 0, fa = 0; fa < g; ++fa)b(fa, d[fa])
            }, p = function () {
                l.removeEventListener("DOMContentLoaded", p, !1);
                processingInstances = [];
                k.instances = processingInstances;
                for (var c = l.getElementsByTagName("canvas"), d, a = 0, e = c.length; a < e; a++) {
                    var b = c[a].getAttribute("data-processingjs-sources");
                    null === b && (b = c[a].getAttribute("data-src"), null === b && (b = c[a].getAttribute("datasrc")));
                    if (b) {
                        d = b.split(/\s+/g);
                        for (b = 0; b < d.length;)d[b] ? b++ : d.splice(b, 1);
                        m(c[a],
                            d)
                    }
                }
                c = l.getElementsByTagName("script");
                e = [];
                for (a = c.length - 1; 0 <= a; a--)e.push(c[a]);
                a = 0;
                for (b = e.length; a < b; a++)if (d = e[a], d.getAttribute && (c = d.getAttribute("type")) && ("text/processingjs" === c.toLowerCase() || "application/processingjs" === c.toLowerCase())) {
                    var g = d.getAttribute("data-processingjs-target"), c = void 0;
                    if (g)c = l.getElementById(g); else {
                        for (g = d.nextSibling; g && 1 !== g.nodeType;)g = g.nextSibling;
                        g && "canvas" === g.nodeName.toLowerCase() && (c = g)
                    }
                    c && (d.getAttribute("src") ? (d = d.getAttribute("src").split(/\s+/), m(c,
                        d)) : (d = d.textContent || d.text, new k(c, d)))
                }
            };
            l.addEventListener("DOMContentLoaded", p, !1);
            k.reload = function () {
                if (0 < processingInstances.length)for (var c = processingInstances.length - 1; 0 <= c; c--)processingInstances[c] && processingInstances[c].exit();
                p()
            };
            k.disableInit = function () {
                l.removeEventListener("DOMContentLoaded", p, !1)
            };
            return k
        }
    }, {}], 7: [function (D, y, Q) {
        y.exports = function (k, g) {
            return null === k || null === g ? null === k && null === g : "string" === typeof k || "object" !== typeof k ? k === g : k.equals instanceof Function ? k.equals(g) :
                k === g
        }
    }, {}], 8: [function (D, y, Q) {
        y.exports = function (k, g) {
            if ("string" === typeof k) {
                for (var n = 0, l = 0; l < k.length; ++l)n = 31 * n + k.charCodeAt(l) & 4294967295;
                return n
            }
            if ("object" !== typeof k)return k & 4294967295;
            if (k.hashCode instanceof Function)return k.hashCode();
            k.$id === g && (k.$id = Math.floor(65536 * Math.random()) - 32768 << 16 | Math.floor(65536 * Math.random()));
            return k.$id
        }
    }, {}], 9: [function (D, y, Q) {
        y.exports = function (k) {
            function g(a) {
                var b = -1;
                this.hasNext = function () {
                    return b + 1 < a.length
                };
                this.next = function () {
                    return a[++b]
                };
                this.remove = function () {
                    a.splice(b--, 1)
                }
            }

            function n(a) {
                var b = [];
                a && a.toArray && (b = a.toArray());
                this.get = function (a) {
                    return b[a]
                };
                this.contains = function (a) {
                    return-1 < this.indexOf(a)
                };
                this.indexOf = function (a) {
                    for (var c = 0, m = b.length; c < m; ++c)if (l(a, b[c]))return c;
                    return-1
                };
                this.lastIndexOf = function (a) {
                    for (var c = b.length - 1; 0 <= c; --c)if (l(a, b[c]))return c;
                    return-1
                };
                this.add = function () {
                    if (1 === arguments.length)b.push(arguments[0]); else if (2 === arguments.length) {
                        var a = arguments[0];
                        if ("number" === typeof a)if (0 <=
                            a && a <= b.length)b.splice(a, 0, arguments[1]); else throw a + " is not a valid index"; else throw typeof a + " is not a number";
                    } else throw"Please use the proper number of parameters.";
                };
                this.addAll = function (a, c) {
                    var m;
                    if ("number" === typeof a) {
                        if (0 > a || a > b.length)throw"Index out of bounds for addAll: " + a + " greater or equal than " + b.length;
                        for (m = new ObjectIterator(c); m.hasNext();)b.splice(a++, 0, m.next())
                    } else for (m = new ObjectIterator(a); m.hasNext();)b.push(m.next())
                };
                this.set = function () {
                    if (2 === arguments.length) {
                        var a =
                            arguments[0];
                        if ("number" === typeof a)if (0 <= a && a < b.length)b.splice(a, 1, arguments[1]); else throw a + " is not a valid index."; else throw typeof a + " is not a number";
                    } else throw"Please use the proper number of parameters.";
                };
                this.size = function () {
                    return b.length
                };
                this.clear = function () {
                    b.length = 0
                };
                this.remove = function (a) {
                    if ("number" === typeof a)return b.splice(a, 1)[0];
                    a = this.indexOf(a);
                    return-1 < a ? (b.splice(a, 1), !0) : !1
                };
                this.removeAll = function (a) {
                    var c, b, p, r = new n;
                    r.addAll(this);
                    this.clear();
                    for (b = c = 0; c < r.size(); c++)p =
                        r.get(c), a.contains(p) || this.add(b++, p);
                    return this.size() < r.size() ? !0 : !1
                };
                this.isEmpty = function () {
                    return!b.length
                };
                this.clone = function () {
                    return new n(this)
                };
                this.toArray = function () {
                    return b.slice(0)
                };
                this.iterator = function () {
                    return new g(b)
                }
            }

            var l = k.virtEquals;
            return n
        }
    }, {}], 10: [function (D, y, Q) {
        y.exports = function (k, g) {
            var n = function (l) {
                this.code = "string" === typeof l && 1 === l.length ? l.charCodeAt(0) : "number" === typeof l ? l : l instanceof n ? l : NaN;
                return k[this.code] === g ? k[this.code] = this : k[this.code]
            };
            n.prototype.toString =
                function () {
                    return String.fromCharCode(this.code)
                };
            n.prototype.valueOf = function () {
                return this.code
            };
            return n
        }({})
    }, {}], 11: [function (D, y, Q) {
        y.exports = function (k) {
            function g() {
                function a(c) {
                    c = n(c) % d.length;
                    return 0 > c ? d.length + c : c
                }

                function b() {
                    if (!(k <= r * d.length)) {
                        for (var c = [], b = 0; b < d.length; ++b)void 0 !== d[b] && (c = c.concat(d[b]));
                        b = 2 * d.length;
                        d = [];
                        d.length = b;
                        for (b = 0; b < c.length; ++b) {
                            var e = a(c[b].key), m = d[e];
                            void 0 === m && (d[e] = m = []);
                            m.push(c[b])
                        }
                    }
                }

                function e(c, a) {
                    function b() {
                        for (; !p;)if (++m, e >= d.length)p = !0; else if (void 0 === d[e] || m >= d[e].length)m = -1, ++e; else break
                    }

                    var e = 0, m = -1, p = !1, r;
                    this.hasNext = function () {
                        return!p
                    };
                    this.next = function () {
                        r = c(d[e][m]);
                        b();
                        return r
                    };
                    this.remove = function () {
                        void 0 !== r && (a(r), --m, b())
                    };
                    b()
                }

                function c(c, d, a) {
                    this.clear = function () {
                        ca.clear()
                    };
                    this.contains = function (c) {
                        return d(c)
                    };
                    this.containsAll = function (c) {
                        for (c = c.iterator(); c.hasNext();)if (!this.contains(c.next()))return!1;
                        return!0
                    };
                    this.isEmpty = function () {
                        return ca.isEmpty()
                    };
                    this.iterator = function () {
                        return new e(c,
                            a)
                    };
                    this.remove = function (c) {
                        return this.contains(c) ? (a(c), !0) : !1
                    };
                    this.removeAll = function (c) {
                        for (c = c.iterator(); c.hasNext();) {
                            var d = c.next();
                            this.contains(d) && a(d)
                        }
                        return!0
                    };
                    this.retainAll = function (c) {
                        for (var d = this.iterator(), b = []; d.hasNext();) {
                            var e = d.next();
                            c.contains(e) || b.push(e)
                        }
                        for (c = 0; c < b.length; ++c)a(b[c]);
                        return 0 < b.length
                    };
                    this.size = function () {
                        return ca.size()
                    };
                    this.toArray = function () {
                        for (var c = [], d = this.iterator(); d.hasNext();)c.push(d.next());
                        return c
                    }
                }

                function m(c) {
                    this._isIn = function (d) {
                        return d ===
                            ca && void 0 === c.removed
                    };
                    this.equals = function (d) {
                        return l(c.key, d.getKey())
                    };
                    this.getKey = function () {
                        return c.key
                    };
                    this.getValue = function () {
                        return c.value
                    };
                    this.hashCode = function (d) {
                        return n(c.key)
                    };
                    this.setValue = function (d) {
                        var a = c.value;
                        c.value = d;
                        return a
                    }
                }

                if (1 === arguments.length && arguments[0]instanceof g)return arguments[0].clone();
                var p = 0 < arguments.length ? arguments[0] : 16, r = 1 < arguments.length ? arguments[1] : 0.75, d = [];
                d.length = p;
                var k = 0, ca = this;
                this.clear = function () {
                    k = 0;
                    d = [];
                    d.length = p
                };
                this.clone =
                    function () {
                        var c = new g;
                        c.putAll(this);
                        return c
                    };
                this.containsKey = function (c) {
                    var b = a(c), b = d[b];
                    if (void 0 === b)return!1;
                    for (var e = 0; e < b.length; ++e)if (l(b[e].key, c))return!0;
                    return!1
                };
                this.containsValue = function (c) {
                    for (var a = 0; a < d.length; ++a) {
                        var b = d[a];
                        if (void 0 !== b)for (var e = 0; e < b.length; ++e)if (l(b[e].value, c))return!0
                    }
                    return!1
                };
                this.entrySet = function () {
                    return new c(function (c) {
                        return new m(c)
                    }, function (c) {
                        return c instanceof m && c._isIn(ca)
                    }, function (c) {
                        return ca.remove(c.getKey())
                    })
                };
                this.get = function (c) {
                    var b =
                        a(c), b = d[b];
                    if (void 0 === b)return null;
                    for (var e = 0; e < b.length; ++e)if (l(b[e].key, c))return b[e].value;
                    return null
                };
                this.isEmpty = function () {
                    return 0 === k
                };
                this.keySet = function () {
                    return new c(function (c) {
                        return c.key
                    }, function (c) {
                        return ca.containsKey(c)
                    }, function (c) {
                        return ca.remove(c)
                    })
                };
                this.values = function () {
                    return new c(function (c) {
                        return c.value
                    }, function (c) {
                        return ca.containsValue(c)
                    }, function (c) {
                        return ca.removeByValue(c)
                    })
                };
                this.put = function (c, e) {
                    var m = a(c), p = d[m];
                    if (void 0 === p)return++k, d[m] =
                        [
                            {key: c, value: e}
                        ], b(), null;
                    for (m = 0; m < p.length; ++m)if (l(p[m].key, c)) {
                        var r = p[m].value;
                        p[m].value = e;
                        return r
                    }
                    ++k;
                    p.push({key: c, value: e});
                    b();
                    return null
                };
                this.putAll = function (c) {
                    for (c = c.entrySet().iterator(); c.hasNext();) {
                        var d = c.next();
                        this.put(d.getKey(), d.getValue())
                    }
                };
                this.remove = function (c) {
                    var b = a(c), e = d[b];
                    if (void 0 === e)return null;
                    for (var m = 0; m < e.length; ++m)if (l(e[m].key, c))return--k, c = e[m].value, e[m].removed = !0, 1 < e.length ? e.splice(m, 1) : d[b] = void 0, c;
                    return null
                };
                this.removeByValue = function (c) {
                    var a,
                        b, e, m;
                    for (a in d)if (d.hasOwnProperty(a))for (b = 0, e = d[a].length; b < e; b++)if (m = d[a][b], m.value === c)return d[a].splice(b, 1), !0;
                    return!1
                };
                this.size = function () {
                    return k
                }
            }

            var n = k.virtHashCode, l = k.virtEquals;
            return g
        }
    }, {}], 12: [function (D, y, Q) {
        y.exports = function (k, g) {
            function n(b, e) {
                b === g && (b = "");
                this.name = b;
                e === g && (e = 0);
                this.size = e;
                this.glyph = !1;
                this.descent = this.ascent = 0;
                this.leading = 1.2 * e;
                var c = b.indexOf(" Italic Bold");
                -1 !== c && (b = b.substring(0, c));
                this.style = "normal";
                c = b.indexOf(" Italic");
                -1 !== c && (b = b.substring(0,
                    c), this.style = "italic");
                this.weight = "normal";
                c = b.indexOf(" Bold");
                -1 !== c && (b = b.substring(0, c), this.weight = "bold");
                this.family = "sans-serif";
                if (b !== g)switch (b) {
                    case "sans-serif":
                    case "serif":
                    case "monospace":
                    case "fantasy":
                    case "cursive":
                        this.family = b;
                        break;
                    default:
                        this.family = '"' + b + '", sans-serif'
                }
                var c = this.size / 250, m = l.createElement("canvas");
                m.width = 500;
                m.height = 500;
                m.style.opacity = 0;
                var p = this.getCSSDefinition("250px", "normal"), r = m.getContext("2d");
                r.font = p;
                m.width = r.measureText("dbflkhyjqpg").width;
                r.font = p;
                p = l.createElement("div");
                p.style.position = "absolute";
                p.style.opacity = 0;
                p.style.fontFamily = '"' + this.name + '"';
                p.style.fontSize = "250px";
                p.innerHTML = "dbflkhyjqpg<br/>dbflkhyjqpg";
                l.body.appendChild(p);
                var d = m.width, k = m.height, m = k / 2;
                r.fillStyle = "white";
                r.fillRect(0, 0, d, k);
                r.fillStyle = "black";
                r.fillText("dbflkhyjqpg", 0, m);
                for (var k = r.getImageData(0, 0, d, k).data, n = 0, G = 4 * d, A = k.length; ++n < A && 255 === k[n];)a();
                d = Math.round(n / G);
                for (n = A - 1; 0 < --n && 255 === k[n];)a();
                k = Math.round(n / G);
                this.ascent = c * (m - d);
                this.descent =
                    c * (k - m);
                l.defaultView.getComputedStyle && (m = l.defaultView.getComputedStyle(p, null).getPropertyValue("height"), m = c * m.replace("px", ""), m >= 2 * this.size && (this.leading = Math.round(m / 2)));
                l.body.removeChild(p);
                c = this.caching ? r : void 0;
                this.context2d = c;
                this.css = this.getCSSDefinition();
                this.context2d && (this.context2d.font = this.css)
            }

            var l = k.Browser.document, a = k.noop;
            n.prototype.caching = !0;
            n.prototype.getCSSDefinition = function (a, e) {
                a === g && (a = this.size + "px");
                e === g && (e = this.leading + "px");
                return[this.style, "normal",
                    this.weight, a + "/" + e, this.family].join(" ")
            };
            n.prototype.measureTextWidth = function (a) {
                return this.context2d.measureText(a).width
            };
            n.prototype.measureTextWidthFallback = function (a) {
                var e = l.createElement("canvas").getContext("2d");
                e.font = this.css;
                return e.measureText(a).width
            };
            n.PFontCache = {length: 0};
            n.get = function (a, e) {
                e = (10 * e + 0.5 | 0) / 10;
                var c = n.PFontCache, m = a + "/" + e;
                if (!c[m]) {
                    c[m] = new n(a, e);
                    c.length++;
                    if (50 === c.length) {
                        n.prototype.measureTextWidth = n.prototype.measureTextWidthFallback;
                        n.prototype.caching = !1;
                        for (var p in c)"length" !== p && (c[p].context2d = null);
                        return new n(a, e)
                    }
                    if (400 === c.length)return n.PFontCache = {}, n.get = n.getFallback, new n(a, e)
                }
                return c[m]
            };
            n.getFallback = function (a, e) {
                return new n(a, e)
            };
            n.list = function () {
                return["sans-serif", "serif", "monospace", "fantasy", "cursive"]
            };
            n.preloading = {template: {}, initialized: !1, initialize: function () {
                var a = l.createElement("style");
                a.setAttribute("type", "text/css");
                a.innerHTML = '@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,' +
                    function () {
                        return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g, function (a) {
                            return"AAAAAAAA".substr(~~a ? 7 - a : 6)
                        })
                    }() + "')\n       format('truetype');\n}";
                l.head.appendChild(a);
                a = l.createElement("span");
                a.style.cssText = 'position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
                a.innerHTML = "AAAAAAAA";
                l.body.appendChild(a);
                this.template = a;
                this.initialized = !0
            }, getElementWidth: function (a) {
                return l.defaultView.getComputedStyle(a, "").getPropertyValue("width")
            }, timeAttempted: 0, pending: function (a) {
                this.initialized || this.initialize();
                for (var e, c, m = this.getElementWidth(this.template), p = 0; p < this.fontList.length; p++) {
                    e = this.fontList[p];
                    c = this.getElementWidth(e);
                    if (4E3 > this.timeAttempted && c === m)return this.timeAttempted += a, !0;
                    l.body.removeChild(e);
                    this.fontList.splice(p--, 1);
                    this.timeAttempted =
                        0
                }
                return 0 === this.fontList.length ? !1 : !0
            }, fontList: [], addedList: {}, add: function (a) {
                this.initialized || this.initialize();
                var e = "object" === typeof a ? a.fontFace : a;
                a = "object" === typeof a ? a.url : a;
                if (!this.addedList[e]) {
                    var c = l.createElement("style");
                    c.setAttribute("type", "text/css");
                    c.innerHTML = "@font-face{\n  font-family: '" + e + "';\n  src:  url('" + a + "');\n}\n";
                    l.head.appendChild(c);
                    this.addedList[e] = !0;
                    a = l.createElement("span");
                    a.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;";
                    a.style.fontFamily =
                        '"' + e + '", "PjsEmptyFont", fantasy';
                    a.innerHTML = "AAAAAAAA";
                    l.body.appendChild(a);
                    this.fontList.push(a)
                }
            }};
            return n
        }
    }, {}], 13: [function (D, y, Q) {
        y.exports = function (k, g) {
            var n = k.p, l = function () {
                0 === arguments.length ? this.reset() : 1 === arguments.length && arguments[0]instanceof l ? this.set(arguments[0].array()) : 6 === arguments.length && this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            };
            l.prototype = {set: function () {
                if (6 === arguments.length) {
                    var a = arguments;
                    this.set([a[0], a[1], a[2],
                        a[3], a[4], a[5]])
                } else 1 === arguments.length && arguments[0]instanceof l ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0]instanceof Array && (this.elements = arguments[0].slice())
            }, get: function () {
                var a = new l;
                a.set(this.elements);
                return a
            }, reset: function () {
                this.set([1, 0, 0, 0, 1, 0])
            }, array: function () {
                return this.elements.slice()
            }, translate: function (a, b) {
                this.elements[2] = a * this.elements[0] + b * this.elements[1] + this.elements[2];
                this.elements[5] = a * this.elements[3] + b * this.elements[4] + this.elements[5]
            },
                invTranslate: function (a, b) {
                    this.translate(-a, -b)
                }, transpose: function () {
                }, mult: function (a, b) {
                    var e, c;
                    a instanceof PVector ? (e = a.x, c = a.y, b || (b = new PVector)) : a instanceof Array && (e = a[0], c = a[1], b || (b = []));
                    b instanceof Array ? (b[0] = this.elements[0] * e + this.elements[1] * c + this.elements[2], b[1] = this.elements[3] * e + this.elements[4] * c + this.elements[5]) : b instanceof PVector && (b.x = this.elements[0] * e + this.elements[1] * c + this.elements[2], b.y = this.elements[3] * e + this.elements[4] * c + this.elements[5], b.z = 0);
                    return b
                }, multX: function (a, b) {
                    return a * this.elements[0] + b * this.elements[1] + this.elements[2]
                }, multY: function (a, b) {
                    return a * this.elements[3] + b * this.elements[4] + this.elements[5]
                }, skewX: function (a) {
                    this.apply(1, 0, 1, a, 0, 0)
                }, skewY: function (a) {
                    this.apply(1, 0, 1, 0, a, 0)
                }, shearX: function (a) {
                    this.apply(1, 0, 1, Math.tan(a), 0, 0)
                }, shearY: function (a) {
                    this.apply(1, 0, 1, 0, Math.tan(a), 0)
                }, determinant: function () {
                    return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
                }, invert: function () {
                    var a = this.determinant();
                    if (Math.abs(a) > PConstants.MIN_INT) {
                        var b =
                            this.elements[0], e = this.elements[1], c = this.elements[2], m = this.elements[3], p = this.elements[4], r = this.elements[5];
                        this.elements[0] = p / a;
                        this.elements[3] = -m / a;
                        this.elements[1] = -e / a;
                        this.elements[4] = b / a;
                        this.elements[2] = (e * r - p * c) / a;
                        this.elements[5] = (m * c - b * r) / a;
                        return!0
                    }
                    return!1
                }, scale: function (a, b) {
                    a && !b && (b = a);
                    a && b && (this.elements[0] *= a, this.elements[1] *= b, this.elements[3] *= a, this.elements[4] *= b)
                }, invScale: function (a, b) {
                    a && !b && (b = a);
                    this.scale(1 / a, 1 / b)
                }, apply: function () {
                    var a;
                    1 === arguments.length && arguments[0]instanceof
                        l ? a = arguments[0].array() : 6 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                    for (var b = [0, 0, this.elements[2], 0, 0, this.elements[5]], e = 0, c = 0; 2 > c; c++)for (var m = 0; 3 > m; m++, e++)b[e] += this.elements[3 * c + 0] * a[m + 0] + this.elements[3 * c + 1] * a[m + 3];
                    this.elements = b.slice()
                }, preApply: function () {
                    var a;
                    1 === arguments.length && arguments[0]instanceof l ? a = arguments[0].array() : 6 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length &&
                        arguments[0]instanceof Array && (a = arguments[0]);
                    var b = [0, 0, a[2], 0, 0, a[5]];
                    b[2] = a[2] + this.elements[2] * a[0] + this.elements[5] * a[1];
                    b[5] = a[5] + this.elements[2] * a[3] + this.elements[5] * a[4];
                    b[0] = this.elements[0] * a[0] + this.elements[3] * a[1];
                    b[3] = this.elements[0] * a[3] + this.elements[3] * a[4];
                    b[1] = this.elements[1] * a[0] + this.elements[4] * a[1];
                    b[4] = this.elements[1] * a[3] + this.elements[4] * a[4];
                    this.elements = b.slice()
                }, rotate: function (a) {
                    var b = Math.cos(a);
                    a = Math.sin(a);
                    var e = this.elements[0], c = this.elements[1];
                    this.elements[0] =
                        b * e + a * c;
                    this.elements[1] = -a * e + b * c;
                    e = this.elements[3];
                    c = this.elements[4];
                    this.elements[3] = b * e + a * c;
                    this.elements[4] = -a * e + b * c
                }, rotateZ: function (a) {
                    this.rotate(a)
                }, invRotateZ: function (a) {
                    this.rotateZ(a - Math.PI)
                }, print: function () {
                    var a = printMatrixHelper(this.elements), a = "" + n.nfs(this.elements[0], a, 4) + " " + n.nfs(this.elements[1], a, 4) + " " + n.nfs(this.elements[2], a, 4) + "\n" + n.nfs(this.elements[3], a, 4) + " " + n.nfs(this.elements[4], a, 4) + " " + n.nfs(this.elements[5], a, 4) + "\n\n";
                    n.println(a)
                }};
            return l
        }
    }, {}], 14: [function (D, y, Q) {
        y.exports = function (k, g) {
            var n = k.p, l = function () {
                this.reset()
            };
            l.prototype = {set: function () {
                16 === arguments.length ? this.elements = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof l ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0]instanceof Array && (this.elements = arguments[0].slice())
            }, get: function () {
                var a = new l;
                a.set(this.elements);
                return a
            }, reset: function () {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }, array: function () {
                return this.elements.slice()
            },
                translate: function (a, b, e) {
                    e === g && (e = 0);
                    this.elements[3] += a * this.elements[0] + b * this.elements[1] + e * this.elements[2];
                    this.elements[7] += a * this.elements[4] + b * this.elements[5] + e * this.elements[6];
                    this.elements[11] += a * this.elements[8] + b * this.elements[9] + e * this.elements[10];
                    this.elements[15] += a * this.elements[12] + b * this.elements[13] + e * this.elements[14]
                }, transpose: function () {
                    var a = this.elements[4];
                    this.elements[4] = this.elements[1];
                    this.elements[1] = a;
                    a = this.elements[8];
                    this.elements[8] = this.elements[2];
                    this.elements[2] =
                        a;
                    a = this.elements[6];
                    this.elements[6] = this.elements[9];
                    this.elements[9] = a;
                    a = this.elements[3];
                    this.elements[3] = this.elements[12];
                    this.elements[12] = a;
                    a = this.elements[7];
                    this.elements[7] = this.elements[13];
                    this.elements[13] = a;
                    a = this.elements[11];
                    this.elements[11] = this.elements[14];
                    this.elements[14] = a
                }, mult: function (a, b) {
                    var e, c, m, p;
                    a instanceof PVector ? (e = a.x, c = a.y, m = a.z, p = 1, b || (b = new PVector)) : a instanceof Array && (e = a[0], c = a[1], m = a[2], p = a[3] || 1, !b || 3 !== b.length && 4 !== b.length) && (b = [0, 0, 0]);
                    b instanceof
                        Array && (3 === b.length ? (b[0] = this.elements[0] * e + this.elements[1] * c + this.elements[2] * m + this.elements[3], b[1] = this.elements[4] * e + this.elements[5] * c + this.elements[6] * m + this.elements[7], b[2] = this.elements[8] * e + this.elements[9] * c + this.elements[10] * m + this.elements[11]) : 4 === b.length && (b[0] = this.elements[0] * e + this.elements[1] * c + this.elements[2] * m + this.elements[3] * p, b[1] = this.elements[4] * e + this.elements[5] * c + this.elements[6] * m + this.elements[7] * p, b[2] = this.elements[8] * e + this.elements[9] * c + this.elements[10] * m +
                        this.elements[11] * p, b[3] = this.elements[12] * e + this.elements[13] * c + this.elements[14] * m + this.elements[15] * p));
                    b instanceof PVector && (b.x = this.elements[0] * e + this.elements[1] * c + this.elements[2] * m + this.elements[3], b.y = this.elements[4] * e + this.elements[5] * c + this.elements[6] * m + this.elements[7], b.z = this.elements[8] * e + this.elements[9] * c + this.elements[10] * m + this.elements[11]);
                    return b
                }, preApply: function () {
                    var a;
                    1 === arguments.length && arguments[0]instanceof l ? a = arguments[0].array() : 16 === arguments.length ? a = Array.prototype.slice.call(arguments) :
                        1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                    for (var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0, c = 0; 4 > c; c++)for (var m = 0; 4 > m; m++, e++)b[e] += this.elements[m + 0] * a[4 * c + 0] + this.elements[m + 4] * a[4 * c + 1] + this.elements[m + 8] * a[4 * c + 2] + this.elements[m + 12] * a[4 * c + 3];
                    this.elements = b.slice()
                }, apply: function () {
                    var a;
                    1 === arguments.length && arguments[0]instanceof l ? a = arguments[0].array() : 16 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array &&
                        (a = arguments[0]);
                    for (var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0, c = 0; 4 > c; c++)for (var m = 0; 4 > m; m++, e++)b[e] += this.elements[4 * c + 0] * a[m + 0] + this.elements[4 * c + 1] * a[m + 4] + this.elements[4 * c + 2] * a[m + 8] + this.elements[4 * c + 3] * a[m + 12];
                    this.elements = b.slice()
                }, rotate: function (a, b, e, c) {
                    if (e) {
                        var m = Math.cos(a);
                        a = Math.sin(a);
                        var p = 1 - m;
                        this.apply(p * b * b + m, p * b * e - a * c, p * b * c + a * e, 0, p * b * e + a * c, p * e * e + m, p * e * c - a * b, 0, p * b * c - a * e, p * e * c + a * b, p * c * c + m, 0, 0, 0, 0, 1)
                    } else this.rotateZ(a)
                }, invApply: function () {
                    inverseCopy === g && (inverseCopy = new l);
                    var a = arguments;
                    inverseCopy.set(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
                    if (!inverseCopy.invert())return!1;
                    this.preApply(inverseCopy);
                    return!0
                }, rotateX: function (a) {
                    var b = Math.cos(a);
                    a = Math.sin(a);
                    this.apply([1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1])
                }, rotateY: function (a) {
                    var b = Math.cos(a);
                    a = Math.sin(a);
                    this.apply([b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1])
                }, rotateZ: function (a) {
                    var b = Math.cos(a);
                    a = Math.sin(a);
                    this.apply([b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }, scale: function (a, b, e) {
                    !a || b || e ? a && (b && !e) && (e = 1) : b = e = a;
                    a && (b && e) && (this.elements[0] *= a, this.elements[1] *= b, this.elements[2] *= e, this.elements[4] *= a, this.elements[5] *= b, this.elements[6] *= e, this.elements[8] *= a, this.elements[9] *= b, this.elements[10] *= e, this.elements[12] *= a, this.elements[13] *= b, this.elements[14] *= e)
                }, skewX: function (a) {
                    a = Math.tan(a);
                    this.apply(1, a, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }, skewY: function (a) {
                    a = Math.tan(a);
                    this.apply(1, 0, 0, 0, a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }, shearX: function (a) {
                    a = Math.tan(a);
                    this.apply(1, a, 0, 0,
                        0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }, shearY: function (a) {
                    a = Math.tan(a);
                    this.apply(1, 0, 0, 0, a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }, multX: function (a, b, e, c) {
                    return e ? c ? this.elements[0] * a + this.elements[1] * b + this.elements[2] * e + this.elements[3] * c : this.elements[0] * a + this.elements[1] * b + this.elements[2] * e + this.elements[3] : this.elements[0] * a + this.elements[1] * b + this.elements[3]
                }, multY: function (a, b, e, c) {
                    return e ? c ? this.elements[4] * a + this.elements[5] * b + this.elements[6] * e + this.elements[7] * c : this.elements[4] * a + this.elements[5] * b + this.elements[6] *
                        e + this.elements[7] : this.elements[4] * a + this.elements[5] * b + this.elements[7]
                }, multZ: function (a, b, e, c) {
                    return c ? this.elements[8] * a + this.elements[9] * b + this.elements[10] * e + this.elements[11] * c : this.elements[8] * a + this.elements[9] * b + this.elements[10] * e + this.elements[11]
                }, multW: function (a, b, e, c) {
                    return c ? this.elements[12] * a + this.elements[13] * b + this.elements[14] * e + this.elements[15] * c : this.elements[12] * a + this.elements[13] * b + this.elements[14] * e + this.elements[15]
                }, invert: function () {
                    var a = this.elements[0] * this.elements[5] -
                        this.elements[1] * this.elements[4], b = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4], e = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4], c = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5], m = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5], p = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6], r = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12], d = this.elements[8] * this.elements[14] - this.elements[10] *
                        this.elements[12], g = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12], k = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13], n = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13], l = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14], y = a * l - b * n + e * k + c * g - m * d + p * r;
                    if (1E-9 >= Math.abs(y))return!1;
                    var v = [];
                    v[0] = +this.elements[5] * l - this.elements[6] * n + this.elements[7] * k;
                    v[4] = -this.elements[4] * l + this.elements[6] * g - this.elements[7] * d;
                    v[8] = +this.elements[4] * n - this.elements[5] * g + this.elements[7] * r;
                    v[12] = -this.elements[4] * k + this.elements[5] * d - this.elements[6] * r;
                    v[1] = -this.elements[1] * l + this.elements[2] * n - this.elements[3] * k;
                    v[5] = +this.elements[0] * l - this.elements[2] * g + this.elements[3] * d;
                    v[9] = -this.elements[0] * n + this.elements[1] * g - this.elements[3] * r;
                    v[13] = +this.elements[0] * k - this.elements[1] * d + this.elements[2] * r;
                    v[2] = +this.elements[13] * p - this.elements[14] * m + this.elements[15] * c;
                    v[6] = -this.elements[12] * p + this.elements[14] * e - this.elements[15] *
                        b;
                    v[10] = +this.elements[12] * m - this.elements[13] * e + this.elements[15] * a;
                    v[14] = -this.elements[12] * c + this.elements[13] * b - this.elements[14] * a;
                    v[3] = -this.elements[9] * p + this.elements[10] * m - this.elements[11] * c;
                    v[7] = +this.elements[8] * p - this.elements[10] * e + this.elements[11] * b;
                    v[11] = -this.elements[8] * m + this.elements[9] * e - this.elements[11] * a;
                    v[15] = +this.elements[8] * c - this.elements[9] * b + this.elements[10] * a;
                    a = 1 / y;
                    v[0] *= a;
                    v[1] *= a;
                    v[2] *= a;
                    v[3] *= a;
                    v[4] *= a;
                    v[5] *= a;
                    v[6] *= a;
                    v[7] *= a;
                    v[8] *= a;
                    v[9] *= a;
                    v[10] *= a;
                    v[11] *= a;
                    v[12] *=
                        a;
                    v[13] *= a;
                    v[14] *= a;
                    v[15] *= a;
                    this.elements = v.slice();
                    return!0
                }, toString: function () {
                    for (var a = "", b = 0; 15 > b; b++)a += this.elements[b] + ", ";
                    return a += this.elements[15]
                }, print: function () {
                    var a = printMatrixHelper(this.elements), a = "" + n.nfs(this.elements[0], a, 4) + " " + n.nfs(this.elements[1], a, 4) + " " + n.nfs(this.elements[2], a, 4) + " " + n.nfs(this.elements[3], a, 4) + "\n" + n.nfs(this.elements[4], a, 4) + " " + n.nfs(this.elements[5], a, 4) + " " + n.nfs(this.elements[6], a, 4) + " " + n.nfs(this.elements[7], a, 4) + "\n" + n.nfs(this.elements[8],
                        a, 4) + " " + n.nfs(this.elements[9], a, 4) + " " + n.nfs(this.elements[10], a, 4) + " " + n.nfs(this.elements[11], a, 4) + "\n" + n.nfs(this.elements[12], a, 4) + " " + n.nfs(this.elements[13], a, 4) + " " + n.nfs(this.elements[14], a, 4) + " " + n.nfs(this.elements[15], a, 4) + "\n\n";
                    n.println(a)
                }, invTranslate: function (a, b, e) {
                    this.preApply(1, 0, 0, -a, 0, 1, 0, -b, 0, 0, 1, -e, 0, 0, 0, 1)
                }, invRotateX: function (a) {
                    var b = Math.cos(-a);
                    a = Math.sin(-a);
                    this.preApply([1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1])
                }, invRotateY: function (a) {
                    var b = Math.cos(-a);
                    a = Math.sin(-a);
                    this.preApply([b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1])
                }, invRotateZ: function (a) {
                    var b = Math.cos(-a);
                    a = Math.sin(-a);
                    this.preApply([b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }, invScale: function (a, b, e) {
                    this.preApply([1 / a, 0, 0, 0, 0, 1 / b, 0, 0, 0, 0, 1 / e, 0, 0, 0, 0, 1])
                }};
            return l
        }
    }, {}], 15: [function (D, y, Q) {
        y.exports = function (k) {
            var g = k.PConstants, n = k.PMatrix2D, l = k.PMatrix3D;
            k = function (a) {
                this.family = a || g.GROUP;
                this.style = this.visible = !0;
                this.children = [];
                this.nameTable = [];
                this.params = [];
                this.name = "";
                this.parent = this.height = this.width =
                    this.close = this.kind = this.matrix = this.image = null
            };
            k.prototype = {isVisible: function () {
                return this.visible
            }, setVisible: function (a) {
                this.visible = a
            }, disableStyle: function () {
                this.style = !1;
                for (var a = 0, b = this.children.length; a < b; a++)this.children[a].disableStyle()
            }, enableStyle: function () {
                this.style = !0;
                for (var a = 0, b = this.children.length; a < b; a++)this.children[a].enableStyle()
            }, getFamily: function () {
                return this.family
            }, getWidth: function () {
                return this.width
            }, getHeight: function () {
                return this.height
            }, setName: function (a) {
                this.name =
                    a
            }, getName: function () {
                return this.name
            }, draw: function (a) {
                if (!a)throw"render context missing for draw() in PShape";
                this.visible && (this.pre(a), this.drawImpl(a), this.post(a))
            }, drawImpl: function (a) {
                this.family === g.GROUP ? this.drawGroup(a) : this.family === g.PRIMITIVE ? this.drawPrimitive(a) : this.family === g.GEOMETRY ? this.drawGeometry(a) : this.family === g.PATH && this.drawPath(a)
            }, drawPath: function (a) {
                var b, e;
                if (0 !== this.vertices.length) {
                    a.beginShape();
                    if (0 === this.vertexCodes.length)if (2 === this.vertices[0].length)for (b =
                                                                                                 0, e = this.vertices.length; b < e; b++)a.vertex(this.vertices[b][0], this.vertices[b][1]); else for (b = 0, e = this.vertices.length; b < e; b++)a.vertex(this.vertices[b][0], this.vertices[b][1], this.vertices[b][2]); else {
                        var c = 0;
                        if (2 === this.vertices[0].length)for (b = 0, e = this.vertexCodes.length; b < e; b++)this.vertexCodes[b] === g.VERTEX ? (a.vertex(this.vertices[c][0], this.vertices[c][1], this.vertices[c].moveTo), a.breakShape = !1, c++) : this.vertexCodes[b] === g.BEZIER_VERTEX ? (a.bezierVertex(this.vertices[c + 0][0], this.vertices[c +
                            0][1], this.vertices[c + 1][0], this.vertices[c + 1][1], this.vertices[c + 2][0], this.vertices[c + 2][1]), c += 3) : this.vertexCodes[b] === g.CURVE_VERTEX ? (a.curveVertex(this.vertices[c][0], this.vertices[c][1]), c++) : this.vertexCodes[b] === g.BREAK && (a.breakShape = !0); else for (b = 0, e = this.vertexCodes.length; b < e; b++)this.vertexCodes[b] === g.VERTEX ? (a.vertex(this.vertices[c][0], this.vertices[c][1], this.vertices[c][2]), !0 === this.vertices[c].moveTo ? vertArray[vertArray.length - 1].moveTo = !0 : !1 === this.vertices[c].moveTo && (vertArray[vertArray.length -
                            1].moveTo = !1), a.breakShape = !1) : this.vertexCodes[b] === g.BEZIER_VERTEX ? (a.bezierVertex(this.vertices[c + 0][0], this.vertices[c + 0][1], this.vertices[c + 0][2], this.vertices[c + 1][0], this.vertices[c + 1][1], this.vertices[c + 1][2], this.vertices[c + 2][0], this.vertices[c + 2][1], this.vertices[c + 2][2]), c += 3) : this.vertexCodes[b] === g.CURVE_VERTEX ? (a.curveVertex(this.vertices[c][0], this.vertices[c][1], this.vertices[c][2]), c++) : this.vertexCodes[b] === g.BREAK && (a.breakShape = !0)
                    }
                    a.endShape(this.close ? g.CLOSE : g.OPEN)
                }
            }, drawGeometry: function (a) {
                var b,
                    e;
                a.beginShape(this.kind);
                if (this.style)for (b = 0, e = this.vertices.length; b < e; b++)a.vertex(this.vertices[b]); else for (b = 0, e = this.vertices.length; b < e; b++) {
                    var c = this.vertices[b];
                    0 === c[2] ? a.vertex(c[0], c[1]) : a.vertex(c[0], c[1], c[2])
                }
                a.endShape()
            }, drawGroup: function (a) {
                for (var b = 0, e = this.children.length; b < e; b++)this.children[b].draw(a)
            }, drawPrimitive: function (a) {
                if (this.kind === g.POINT)a.point(this.params[0], this.params[1]); else if (this.kind === g.LINE)4 === this.params.length ? a.line(this.params[0], this.params[1],
                    this.params[2], this.params[3]) : a.line(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]); else if (this.kind === g.TRIANGLE)a.triangle(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]); else if (this.kind === g.QUAD)a.quad(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5], this.params[6], this.params[7]); else if (this.kind === g.RECT)if (null !== this.image) {
                    var b = imageModeConvert;
                    a.imageMode(g.CORNER);
                    a.image(this.image, this.params[0], this.params[1], this.params[2], this.params[3]);
                    imageModeConvert = b
                } else b = a.curRectMode, a.rectMode(g.CORNER), a.rect(this.params[0], this.params[1], this.params[2], this.params[3]), a.curRectMode = b; else this.kind === g.ELLIPSE ? (b = a.curEllipseMode, a.ellipseMode(g.CORNER), a.ellipse(this.params[0], this.params[1], this.params[2], this.params[3]), a.curEllipseMode = b) : this.kind === g.ARC ? (b = curEllipseMode, a.ellipseMode(g.CORNER), a.arc(this.params[0], this.params[1], this.params[2], this.params[3],
                    this.params[4], this.params[5]), curEllipseMode = b) : this.kind === g.BOX ? 1 === this.params.length ? a.box(this.params[0]) : a.box(this.params[0], this.params[1], this.params[2]) : this.kind === g.SPHERE && a.sphere(this.params[0])
            }, pre: function (a) {
                this.matrix && (a.pushMatrix(), a.transform(this.matrix));
                this.style && (a.pushStyle(), this.styles(a))
            }, post: function (a) {
                this.matrix && a.popMatrix();
                this.style && a.popStyle()
            }, styles: function (a) {
                this.stroke ? (a.stroke(this.strokeColor), a.strokeWeight(this.strokeWeight), a.strokeCap(this.strokeCap),
                    a.strokeJoin(this.strokeJoin)) : a.noStroke();
                this.fill ? a.fill(this.fillColor) : a.noFill()
            }, getChild: function (a) {
                var b, e;
                if ("number" === typeof a)return this.children[a];
                var c;
                if ("" === a || this.name === a)return this;
                if (0 < this.nameTable.length) {
                    b = 0;
                    for (e = this.nameTable.length; b < e || c; b++)if (this.nameTable[b].getName === a) {
                        c = this.nameTable[b];
                        break
                    }
                    if (c)return c
                }
                b = 0;
                for (e = this.children.length; b < e; b++)if (c = this.children[b].getChild(a))return c;
                return null
            }, getChildCount: function () {
                return this.children.length
            },
                addChild: function (a) {
                    this.children.push(a);
                    a.parent = this;
                    null !== a.getName() && this.addName(a.getName(), a)
                }, addName: function (a, b) {
                    null !== this.parent ? this.parent.addName(a, b) : this.nameTable.push([a, b])
                }, translate: function () {
                    2 === arguments.length ? (this.checkMatrix(2), this.matrix.translate(arguments[0], arguments[1])) : (this.checkMatrix(3), this.matrix.translate(arguments[0], arguments[1], 0))
                }, checkMatrix: function (a) {
                    null === this.matrix ? this.matrix = 2 === a ? new n : new l : 3 === a && this.matrix instanceof n && (this.matrix =
                        new l)
                }, rotateX: function (a) {
                    this.rotate(a, 1, 0, 0)
                }, rotateY: function (a) {
                    this.rotate(a, 0, 1, 0)
                }, rotateZ: function (a) {
                    this.rotate(a, 0, 0, 1)
                }, rotate: function () {
                    1 === arguments.length ? (this.checkMatrix(2), this.matrix.rotate(arguments[0])) : (this.checkMatrix(3), this.matrix.rotate(arguments[0], arguments[1], arguments[2], arguments[3]))
                }, scale: function () {
                    2 === arguments.length ? (this.checkMatrix(2), this.matrix.scale(arguments[0], arguments[1])) : 3 === arguments.length ? (this.checkMatrix(2), this.matrix.scale(arguments[0],
                        arguments[1], arguments[2])) : (this.checkMatrix(2), this.matrix.scale(arguments[0]))
                }, resetMatrix: function () {
                    this.checkMatrix(2);
                    this.matrix.reset()
                }, applyMatrix: function (a) {
                    1 === arguments.length ? this.applyMatrix(a.elements[0], a.elements[1], 0, a.elements[2], a.elements[3], a.elements[4], 0, a.elements[5], 0, 0, 1, 0, 0, 0, 0, 1) : 6 === arguments.length ? (this.checkMatrix(2), this.matrix.apply(arguments[0], arguments[1], arguments[2], 0, arguments[3], arguments[4], arguments[5], 0, 0, 0, 1, 0, 0, 0, 0, 1)) : 16 === arguments.length && (this.checkMatrix(3),
                        this.matrix.apply(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]))
                }};
            return k
        }
    }, {}], 16: [function (D, y, Q) {
        y.exports = function (k) {
            var g = k.CommonFunctions, n = k.PConstants, l = k.PShape, a = k.XMLElement, b = k.colors, e = function () {
                l.call(this);
                if (1 === arguments.length) {
                    if (this.element = arguments[0], this.vertexCodes = [], this.vertices = [], this.opacity = 1,
                        this.stroke = !1, this.strokeColor = n.ALPHA_MASK, this.strokeWeight = 1, this.strokeCap = n.SQUARE, this.strokeJoin = n.MITER, this.strokeName = this.strokeGradientPaint = this.strokeGradient = null, this.strokeOpacity = 1, this.fill = !0, this.fillColor = n.ALPHA_MASK, this.fillName = this.fillGradientPaint = this.fillGradient = null, this.fillOpacity = 1, "svg" !== this.element.getName())throw"root is not <svg>, it's <" + this.element.getName() + ">";
                } else 2 === arguments.length && ("string" === typeof arguments[1] ? -1 < arguments[1].indexOf(".svg") &&
                    (this.element = new a(!0, arguments[1]), this.vertexCodes = [], this.vertices = [], this.opacity = 1, this.stroke = !1, this.strokeColor = n.ALPHA_MASK, this.strokeWeight = 1, this.strokeCap = n.SQUARE, this.strokeJoin = n.MITER, this.strokeName = this.strokeGradientPaint = this.strokeGradient = "", this.strokeOpacity = 1, this.fill = !0, this.fillColor = n.ALPHA_MASK, this.fillGradientPaint = this.fillGradient = null, this.fillOpacity = 1) : arguments[0] && (this.element = arguments[1], this.vertexCodes = arguments[0].vertexCodes.slice(), this.vertices = arguments[0].vertices.slice(),
                    this.stroke = arguments[0].stroke, this.strokeColor = arguments[0].strokeColor, this.strokeWeight = arguments[0].strokeWeight, this.strokeCap = arguments[0].strokeCap, this.strokeJoin = arguments[0].strokeJoin, this.strokeGradient = arguments[0].strokeGradient, this.strokeGradientPaint = arguments[0].strokeGradientPaint, this.strokeName = arguments[0].strokeName, this.fill = arguments[0].fill, this.fillColor = arguments[0].fillColor, this.fillGradient = arguments[0].fillGradient, this.fillGradientPaint = arguments[0].fillGradientPaint,
                    this.fillName = arguments[0].fillName, this.strokeOpacity = arguments[0].strokeOpacity, this.fillOpacity = arguments[0].fillOpacity, this.opacity = arguments[0].opacity));
                this.name = this.element.getStringAttribute("id");
                this.visible = "none" !== this.element.getStringAttribute("display", "inline");
                var c = this.element.getAttribute("transform");
                c && (this.matrix = this.parseMatrix(c));
                c = this.element.getStringAttribute("viewBox");
                null !== c && (c = c.split(" "), this.width = c[2], this.height = c[3]);
                var c = this.element.getStringAttribute("width"),
                    b = this.element.getStringAttribute("height");
                if (null !== c)this.width = this.parseUnitSize(c), this.height = this.parseUnitSize(b); else if (0 === this.width || 0 === this.height)throw this.height = this.width = 1, "The width and/or height is not readable in the <svg> tag of this file.";
                this.parseColors(this.element);
                this.parseChildren(this.element)
            };
            e.prototype = new l;
            e.prototype.parseMatrix = function () {
                function c(c) {
                    var a = [];
                    c.replace(/\((.*?)\)/, function () {
                        return function (c, d) {
                            a = d.replace(/,+/g, " ").split(/\s+/)
                        }
                    }());
                    return a
                }

                return function (a) {
                    this.checkMatrix(2);
                    var b = [];
                    a.replace(/\s*(\w+)\((.*?)\)/g, function (c) {
                        b.push(g.trim(c))
                    });
                    if (0 === b.length)return null;
                    a = 0;
                    for (var e = b.length; a < e; a++) {
                        var d = c(b[a]);
                        if (-1 !== b[a].indexOf("matrix"))this.matrix.set(d[0], d[2], d[4], d[1], d[3], d[5]); else if (-1 !== b[a].indexOf("translate"))this.matrix.translate(d[0], 2 === d.length ? d[1] : 0); else if (-1 !== b[a].indexOf("scale"))this.matrix.scale(d[0], 2 === d.length ? d[1] : d[0]); else if (-1 !== b[a].indexOf("rotate")) {
                            var k = d[0];
                            1 === d.length ?
                                this.matrix.rotate(g.radians(k)) : 3 === d.length && (this.matrix.translate(d[1], d[2]), this.matrix.rotate(g.radians(d[0])), this.matrix.translate(-d[1], -d[2]))
                        } else-1 !== b[a].indexOf("skewX") ? this.matrix.skewX(parseFloat(d[0])) : -1 !== b[a].indexOf("skewY") ? this.matrix.skewY(d[0]) : -1 !== b[a].indexOf("shearX") ? this.matrix.shearX(d[0]) : -1 !== b[a].indexOf("shearY") && this.matrix.shearY(d[0])
                    }
                    return this.matrix
                }
            }();
            e.prototype.parseChildren = function (c) {
                c = c.getChildren();
                var a = new l, b, e;
                b = 0;
                for (e = c.length; b < e; b++) {
                    var d =
                        this.parseChild(c[b]);
                    d && a.addChild(d)
                }
                b = 0;
                for (e = a.children.length; b < e; b++)this.children.push(a.children[b])
            };
            e.prototype.getName = function () {
                return this.name
            };
            e.prototype.parseChild = function (c) {
                var a = c.getName(), b;
                "g" === a ? b = new e(this, c) : "defs" === a ? b = new e(this, c) : "line" === a ? (b = new e(this, c), b.parseLine()) : "circle" === a ? (b = new e(this, c), b.parseEllipse(!0)) : "ellipse" === a ? (b = new e(this, c), b.parseEllipse(!1)) : "rect" === a ? (b = new e(this, c), b.parseRect()) : "polygon" === a ? (b = new e(this, c), b.parsePoly(!0)) : "polyline" ===
                    a ? (b = new e(this, c), b.parsePoly(!1)) : "path" === a ? (b = new e(this, c), b.parsePath()) : "radialGradient" === a ? unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient") : "linearGradient" === a ? unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient") : "text" === a ? unimplemented("PShapeSVG.prototype.parseChild, name = text") : "filter" === a ? unimplemented("PShapeSVG.prototype.parseChild, name = filter") : "mask" === a && unimplemented("PShapeSVG.prototype.parseChild, name = mask");
                return b
            };
            e.prototype.parsePath =
                function () {
                    this.family = n.PATH;
                    this.kind = 0;
                    var c = g.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g, " "));
                    if (null !== c)for (var c = c.split(""), a = 0, b = 0, e = 0, d = 0, k = d = e = 0, l = 0, G = 0, A = 0, y = A = d = G = e = 0, v = 0, fa = "", q = [], D = !1, K, nc, u; y < c.length;)if (v = c[y].charCodeAt(0), 65 <= v && 90 >= v || 97 <= v && 122 >= v) {
                        u = y;
                        y++;
                        if (y < c.length)for (q = [], v = c[y].charCodeAt(0); !(65 <= v && 90 >= v || 97 <= v && 100 >= v || 102 <= v && 122 >= v) && !1 === D;)32 === v ? "" !== fa && (q.push(parseFloat(fa)), fa = "") : 45 === v ? 101 === c[y - 1].charCodeAt(0) ? fa += c[y].toString() : ("" !==
                            fa && q.push(parseFloat(fa)), fa = c[y].toString()) : fa += c[y].toString(), y++, y === c.length ? D = !0 : v = c[y].charCodeAt(0);
                        "" !== fa && (q.push(parseFloat(fa)), fa = "");
                        nc = c[u];
                        v = nc.charCodeAt(0);
                        if (77 === v) {
                            if (2 <= q.length && 0 === q.length % 2 && (a = q[0], b = q[1], this.parsePathMoveto(a, b), 2 < q.length))for (u = 2, v = q.length; u < v; u += 2)a = q[u], b = q[u + 1], this.parsePathLineto(a, b)
                        } else if (109 === v) {
                            if (2 <= q.length && 0 === q.length % 2 && (a += q[0], b += q[1], this.parsePathMoveto(a, b), 2 < q.length))for (u = 2, v = q.length; u < v; u += 2)a += q[u], b += q[u + 1], this.parsePathLineto(a,
                                b)
                        } else if (76 === v) {
                            if (2 <= q.length && 0 === q.length % 2)for (u = 0, v = q.length; u < v; u += 2)a = q[u], b = q[u + 1], this.parsePathLineto(a, b)
                        } else if (108 === v) {
                            if (2 <= q.length && 0 === q.length % 2)for (u = 0, v = q.length; u < v; u += 2)a += q[u], b += q[u + 1], this.parsePathLineto(a, b)
                        } else if (72 === v)for (u = 0, v = q.length; u < v; u++)a = q[u], this.parsePathLineto(a, b); else if (104 === v)for (u = 0, v = q.length; u < v; u++)a += q[u], this.parsePathLineto(a, b); else if (86 === v)for (u = 0, v = q.length; u < v; u++)b = q[u], this.parsePathLineto(a, b); else if (118 === v)for (u = 0, v = q.length; u <
                            v; u++)b += q[u], this.parsePathLineto(a, b); else if (67 === v) {
                            if (6 <= q.length && 0 === q.length % 6)for (u = 0, v = q.length; u < v; u += 6)e = q[u], k = q[u + 1], d = q[u + 2], l = q[u + 3], G = q[u + 4], A = q[u + 5], this.parsePathCurveto(e, k, d, l, G, A), a = G, b = A
                        } else if (99 === v) {
                            if (6 <= q.length && 0 === q.length % 6)for (u = 0, v = q.length; u < v; u += 6)e = a + q[u], k = b + q[u + 1], d = a + q[u + 2], l = b + q[u + 3], G = a + q[u + 4], A = b + q[u + 5], this.parsePathCurveto(e, k, d, l, G, A), a = G, b = A
                        } else if (83 === v) {
                            if (4 <= q.length && 0 === q.length % 4)for (u = 0, v = q.length; u < v; u += 4)"c" === K.toLowerCase() || "s" === K.toLowerCase() ?
                                (e = this.vertices[this.vertices.length - 2][0], G = this.vertices[this.vertices.length - 2][1], d = this.vertices[this.vertices.length - 1][0], A = this.vertices[this.vertices.length - 1][1], e = d + (d - e), k = A + (A - G)) : (e = this.vertices[this.vertices.length - 1][0], k = this.vertices[this.vertices.length - 1][1]), d = q[u], l = q[u + 1], G = q[u + 2], A = q[u + 3], this.parsePathCurveto(e, k, d, l, G, A), a = G, b = A
                        } else if (115 === v) {
                            if (4 <= q.length && 0 === q.length % 4)for (u = 0, v = q.length; u < v; u += 4)"c" === K.toLowerCase() || "s" === K.toLowerCase() ? (e = this.vertices[this.vertices.length -
                                2][0], G = this.vertices[this.vertices.length - 2][1], d = this.vertices[this.vertices.length - 1][0], A = this.vertices[this.vertices.length - 1][1], e = d + (d - e), k = A + (A - G)) : (e = this.vertices[this.vertices.length - 1][0], k = this.vertices[this.vertices.length - 1][1]), d = a + q[u], l = b + q[u + 1], G = a + q[u + 2], A = b + q[u + 3], this.parsePathCurveto(e, k, d, l, G, A), a = G, b = A
                        } else if (81 === v) {
                            if (4 <= q.length && 0 === q.length % 4)for (u = 0, v = q.length; u < v; u += 4)e = q[u], d = q[u + 1], G = q[u + 2], A = q[u + 3], this.parsePathQuadto(a, b, e, d, G, A), a = G, b = A
                        } else if (113 === v) {
                            if (4 <=
                                q.length && 0 === q.length % 4)for (u = 0, v = q.length; u < v; u += 4)e = a + q[u], d = b + q[u + 1], G = a + q[u + 2], A = b + q[u + 3], this.parsePathQuadto(a, b, e, d, G, A), a = G, b = A
                        } else if (84 === v) {
                            if (2 <= q.length && 0 === q.length % 2)for (u = 0, v = q.length; u < v; u += 2)"q" === K.toLowerCase() || "t" === K.toLowerCase() ? (e = this.vertices[this.vertices.length - 2][0], G = this.vertices[this.vertices.length - 2][1], d = this.vertices[this.vertices.length - 1][0], A = this.vertices[this.vertices.length - 1][1], e = d + (d - e), d = A + (A - G)) : (e = a, d = b), G = q[u], A = q[u + 1], this.parsePathQuadto(a, b,
                                e, d, G, A), a = G, b = A
                        } else if (116 === v) {
                            if (2 <= q.length && 0 === q.length % 2)for (u = 0, v = q.length; u < v; u += 2)"q" === K.toLowerCase() || "t" === K.toLowerCase() ? (e = this.vertices[this.vertices.length - 2][0], G = this.vertices[this.vertices.length - 2][1], d = this.vertices[this.vertices.length - 1][0], A = this.vertices[this.vertices.length - 1][1], e = d + (d - e), d = A + (A - G)) : (e = a, d = b), G = a + q[u], A = b + q[u + 1], this.parsePathQuadto(a, b, e, d, G, A), a = G, b = A
                        } else if (90 === v || 122 === v)this.close = !0;
                        K = nc.toString()
                    } else y++
                };
            e.prototype.parsePathQuadto = function (c, a, b, e, d, g) {
                if (0 < this.vertices.length)this.parsePathCode(n.BEZIER_VERTEX), this.parsePathVertex(c + 2 * (b - c) / 3, a + 2 * (e - a) / 3), this.parsePathVertex(d + 2 * (b - d) / 3, g + 2 * (e - g) / 3), this.parsePathVertex(d, g); else throw"Path must start with M/m";
            };
            e.prototype.parsePathCurveto = function (c, a, b, e, d, g) {
                if (0 < this.vertices.length)this.parsePathCode(n.BEZIER_VERTEX), this.parsePathVertex(c, a), this.parsePathVertex(b, e), this.parsePathVertex(d, g); else throw"Path must start with M/m";
            };
            e.prototype.parsePathLineto = function (a, b) {
                if (0 <
                    this.vertices.length)this.parsePathCode(n.VERTEX), this.parsePathVertex(a, b), this.vertices[this.vertices.length - 1].moveTo = !1; else throw"Path must start with M/m";
            };
            e.prototype.parsePathMoveto = function (a, b) {
                0 < this.vertices.length && this.parsePathCode(n.BREAK);
                this.parsePathCode(n.VERTEX);
                this.parsePathVertex(a, b);
                this.vertices[this.vertices.length - 1].moveTo = !0
            };
            e.prototype.parsePathVertex = function (a, b) {
                var e = [];
                e[0] = a;
                e[1] = b;
                this.vertices.push(e)
            };
            e.prototype.parsePathCode = function (a) {
                this.vertexCodes.push(a)
            };
            e.prototype.parsePoly = function (a) {
                this.family = n.PATH;
                this.close = a;
                a = g.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g, " "));
                if (null !== a)if (a = a.split(" "), 0 === a.length % 2)for (var b = 0, e = a.length; b < e; b++) {
                    var r = [];
                    r[0] = a[b];
                    r[1] = a[++b];
                    this.vertices.push(r)
                } else throw"Error parsing polygon points: odd number of coordinates provided";
            };
            e.prototype.parseRect = function () {
                this.kind = n.RECT;
                this.family = n.PRIMITIVE;
                this.params = [];
                this.params[0] = this.element.getFloatAttribute("x");
                this.params[1] =
                    this.element.getFloatAttribute("y");
                this.params[2] = this.element.getFloatAttribute("width");
                this.params[3] = this.element.getFloatAttribute("height");
                if (0 > this.params[2] || 0 > this.params[3])throw"svg error: negative width or height found while parsing <rect>";
            };
            e.prototype.parseEllipse = function (a) {
                this.kind = n.ELLIPSE;
                this.family = n.PRIMITIVE;
                this.params = [];
                this.params[0] = this.element.getFloatAttribute("cx") | 0;
                this.params[1] = this.element.getFloatAttribute("cy") | 0;
                var b;
                if (a) {
                    if (a = b = this.element.getFloatAttribute("r"),
                        0 > a)throw"svg error: negative radius found while parsing <circle>";
                } else if (a = this.element.getFloatAttribute("rx"), b = this.element.getFloatAttribute("ry"), 0 > a || 0 > b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";
                this.params[0] -= a;
                this.params[1] -= b;
                this.params[2] = 2 * a;
                this.params[3] = 2 * b
            };
            e.prototype.parseLine = function () {
                this.kind = n.LINE;
                this.family = n.PRIMITIVE;
                this.params = [];
                this.params[0] = this.element.getFloatAttribute("x1");
                this.params[1] = this.element.getFloatAttribute("y1");
                this.params[2] = this.element.getFloatAttribute("x2");
                this.params[3] = this.element.getFloatAttribute("y2")
            };
            e.prototype.parseColors = function (a) {
                a.hasAttribute("opacity") && this.setOpacity(a.getAttribute("opacity"));
                a.hasAttribute("stroke") && this.setStroke(a.getAttribute("stroke"));
                a.hasAttribute("stroke-width") && this.setStrokeWeight(a.getAttribute("stroke-width"));
                a.hasAttribute("stroke-linejoin") && this.setStrokeJoin(a.getAttribute("stroke-linejoin"));
                a.hasAttribute("stroke-linecap") && this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
                a.hasAttribute("fill") && this.setFill(a.getStringAttribute("fill"));
                if (a.hasAttribute("style")) {
                    a = a.getStringAttribute("style").toString().split(";");
                    for (var b = 0, e = a.length; b < e; b++) {
                        var r = g.trim(a[b].split(":"));
                        "fill" === r[0] ? this.setFill(r[1]) : "fill-opacity" === r[0] ? this.setFillOpacity(r[1]) : "stroke" === r[0] ? this.setStroke(r[1]) : "stroke-width" === r[0] ? this.setStrokeWeight(r[1]) : "stroke-linecap" === r[0] ? this.setStrokeCap(r[1]) : "stroke-linejoin" === r[0] ? this.setStrokeJoin(r[1]) : "stroke-opacity" === r[0] ? this.setStrokeOpacity(r[1]) :
                            "opacity" === r[0] && this.setOpacity(r[1])
                    }
                }
            };
            e.prototype.setFillOpacity = function (a) {
                this.fillOpacity = parseFloat(a);
                this.fillColor = 255 * this.fillOpacity << 24 | this.fillColor & 16777215
            };
            e.prototype.setFill = function (a) {
                var e = this.fillColor & 4278190080;
                "none" === a ? this.fill = !1 : 0 === a.indexOf("#") ? (this.fill = !0, 4 === a.length && (a = a.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")), this.fillColor = e | parseInt(a.substring(1), 16) & 16777215) : 0 === a.indexOf("rgb") ? (this.fill = !0, this.fillColor = e | this.parseRGB(a)) : 0 === a.indexOf("url(#") ?
                    this.fillName = a.substring(5, a.length - 1) : b[a] && (this.fill = !0, this.fillColor = e | parseInt(b[a].substring(1), 16) & 16777215)
            };
            e.prototype.setOpacity = function (a) {
                this.strokeColor = 255 * parseFloat(a) << 24 | this.strokeColor & 16777215;
                this.fillColor = 255 * parseFloat(a) << 24 | this.fillColor & 16777215
            };
            e.prototype.setStroke = function (a) {
                var e = this.strokeColor & 4278190080;
                "none" === a ? this.stroke = !1 : "#" === a.charAt(0) ? (this.stroke = !0, 4 === a.length && (a = a.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3")), this.strokeColor = e | parseInt(a.substring(1),
                    16) & 16777215) : 0 === a.indexOf("rgb") ? (this.stroke = !0, this.strokeColor = e | this.parseRGB(a)) : 0 === a.indexOf("url(#") ? this.strokeName = a.substring(5, a.length - 1) : b[a] && (this.stroke = !0, this.strokeColor = e | parseInt(b[a].substring(1), 16) & 16777215)
            };
            e.prototype.setStrokeWeight = function (a) {
                this.strokeWeight = this.parseUnitSize(a)
            };
            e.prototype.setStrokeJoin = function (a) {
                "miter" === a ? this.strokeJoin = n.MITER : "round" === a ? this.strokeJoin = n.ROUND : "bevel" === a && (this.strokeJoin = n.BEVEL)
            };
            e.prototype.setStrokeCap = function (a) {
                "butt" ===
                    a ? this.strokeCap = n.SQUARE : "round" === a ? this.strokeCap = n.ROUND : "square" === a && (this.strokeCap = n.PROJECT)
            };
            e.prototype.setStrokeOpacity = function (a) {
                this.strokeOpacity = parseFloat(a);
                this.strokeColor = 255 * this.strokeOpacity << 24 | this.strokeColor & 16777215
            };
            e.prototype.parseRGB = function (a) {
                a = a.substring(a.indexOf("(") + 1, a.indexOf(")")).split(", ");
                return a[0] << 16 | a[1] << 8 | a[2]
            };
            e.prototype.parseUnitSize = function (a) {
                var b = a.length - 2;
                return 0 > b ? a : a.indexOf("pt") === b ? 1.25 * parseFloat(a.substring(0, b)) : a.indexOf("pc") ===
                    b ? 15 * parseFloat(a.substring(0, b)) : a.indexOf("mm") === b ? 3.543307 * parseFloat(a.substring(0, b)) : a.indexOf("cm") === b ? 35.43307 * parseFloat(a.substring(0, b)) : a.indexOf("in") === b ? 90 * parseFloat(a.substring(0, b)) : a.indexOf("px") === b ? parseFloat(a.substring(0, b)) : parseFloat(a)
            };
            return e
        }
    }, {}], 17: [function (D, y, Q) {
        y.exports = function (k, g) {
            function n(a, c, b) {
                this.x = a || 0;
                this.y = c || 0;
                this.z = b || 0
            }

            function l(a) {
                return function (c, b) {
                    var p = c.get();
                    p[a](b);
                    return p
                }
            }

            var a = k.PConstants;
            n.fromAngle = function (a, c) {
                if (c === g ||
                    null === c)c = new n;
                c.x = Math.cos(a);
                c.y = Math.sin(a);
                return c
            };
            n.random2D = function (b) {
                return n.fromAngle(Math.random() * a.TWO_PI, b)
            };
            n.random3D = function (b) {
                var c = Math.random() * a.TWO_PI, m = 2 * Math.random() - 1, p = Math.sqrt(1 - m * m), r = p * Math.cos(c), c = p * Math.sin(c);
                b === g || null === b ? b = new n(r, c, m) : b.set(r, c, m);
                return b
            };
            n.dist = function (a, c) {
                return a.dist(c)
            };
            n.dot = function (a, c) {
                return a.dot(c)
            };
            n.cross = function (a, c) {
                return a.cross(c)
            };
            n.sub = function (a, c) {
                return new n(a.x - c.x, a.y - c.y, a.z - c.z)
            };
            n.angleBetween = function (a, c) {
                return Math.acos(a.dot(c) / (a.mag() * c.mag()))
            };
            n.lerp = function (a, c, b) {
                a = new n(a.x, a.y, a.z);
                a.lerp(c, b);
                return a
            };
            n.prototype = {set: function (a, c, b) {
                1 === arguments.length ? this.set(a.x || a[0] || 0, a.y || a[1] || 0, a.z || a[2] || 0) : (this.x = a, this.y = c, this.z = b)
            }, get: function () {
                return new n(this.x, this.y, this.z)
            }, mag: function () {
                var a = this.x, c = this.y, b = this.z;
                return Math.sqrt(a * a + c * c + b * b)
            }, magSq: function () {
                var a = this.x, c = this.y, b = this.z;
                return a * a + c * c + b * b
            }, setMag: function (a, c) {
                if (c === g)c = a, this.normalize(), this.mult(c);
                else return a.normalize(), a.mult(c), a
            }, add: function (a, c, b) {
                1 === arguments.length ? (this.x += a.x, this.y += a.y, this.z += a.z) : (this.x += a, this.y += c, this.z += b)
            }, sub: function (a, c, b) {
                1 === arguments.length ? (this.x -= a.x, this.y -= a.y, this.z -= a.z) : (this.x -= a, this.y -= c, this.z -= b)
            }, mult: function (a) {
                "number" === typeof a ? (this.x *= a, this.y *= a, this.z *= a) : (this.x *= a.x, this.y *= a.y, this.z *= a.z)
            }, div: function (a) {
                "number" === typeof a ? (this.x /= a, this.y /= a, this.z /= a) : (this.x /= a.x, this.y /= a.y, this.z /= a.z)
            }, rotate: function (a) {
                var c =
                    this.x, b = Math.cos(a);
                a = Math.sin(a);
                this.x = b * this.x - a * this.y;
                this.y = a * c + b * this.y
            }, dist: function (a) {
                var c = this.x - a.x, b = this.y - a.y;
                a = this.z - a.z;
                return Math.sqrt(c * c + b * b + a * a)
            }, dot: function (a, c, b) {
                return 1 === arguments.length ? this.x * a.x + this.y * a.y + this.z * a.z : this.x * a + this.y * c + this.z * b
            }, cross: function (a) {
                var c = this.x, b = this.y, p = this.z;
                return new n(b * a.z - a.y * p, p * a.x - a.z * c, c * a.y - a.x * b)
            }, lerp: function (a, c, b, p) {
                var r, d;
                2 === arguments.length ? (p = c, r = a.x, d = a.y, b = a.z) : (r = a, d = c);
                this.x += (r - this.x) * p;
                this.y += (d - this.y) *
                    p;
                this.z += (b - this.z) * p
            }, normalize: function () {
                var a = this.mag();
                0 < a && this.div(a)
            }, limit: function (a) {
                this.mag() > a && (this.normalize(), this.mult(a))
            }, heading: function () {
                return-Math.atan2(-this.y, this.x)
            }, heading2D: function () {
                return this.heading()
            }, toString: function () {
                return"[" + this.x + ", " + this.y + ", " + this.z + "]"
            }, array: function () {
                return[this.x, this.y, this.z]
            }};
            for (var b in n.prototype)n.prototype.hasOwnProperty(b) && !n.hasOwnProperty(b) && (n[b] = l(b));
            return n
        }
    }, {}], 18: [function (D, y, Q) {
        y.exports = function () {
            var k =
                function (g, k, l, a, b) {
                    this.fullName = g || "";
                    this.name = k || "";
                    this.namespace = l || "";
                    this.value = a;
                    this.type = b
                };
            k.prototype = {getName: function () {
                return this.name
            }, getFullName: function () {
                return this.fullName
            }, getNamespace: function () {
                return this.namespace
            }, getValue: function () {
                return this.value
            }, getType: function () {
                return this.type
            }, setValue: function (g) {
                this.value = g
            }};
            return k
        }
    }, {}], 19: [function (D, y, Q) {
        y.exports = function (k, g) {
            var n = k.Browser, l = n.ajax, a = n.window.DOMParser, b = k.XMLAttribute, e = function (a, b, e, r) {
                this.attributes =
                    [];
                this.children = [];
                this.name = this.fullName = null;
                this.namespace = "";
                this.parent = this.content = null;
                this.systemID = this.lineNr = "";
                this.type = "ELEMENT";
                a && ("string" === typeof a ? b === g && -1 < a.indexOf("<") ? this.parse(a) : (this.fullName = a, this.namespace = b, this.systemId = e, this.lineNr = r) : this.parse(b))
            };
            e.prototype = {parse: function (b) {
                var e;
                try {
                    var p = b.substring(b.length - 4);
                    if (".xml" === p || ".svg" === p)b = l(b);
                    e = (new a).parseFromString(b, "text/xml");
                    var r = e.documentElement;
                    if (r)this.parseChildrenRecursive(null, r); else throw"Error loading document";
                    return this
                } catch (d) {
                    throw d;
                }
            }, parseChildrenRecursive: function (a, m) {
                var p, r, d, g;
                a ? (p = new e(m.nodeName), p.parent = a) : (this.fullName = m.localName, this.name = m.nodeName, p = this);
                if (3 === m.nodeType && "" !== m.textContent)return this.createPCDataElement(m.textContent);
                if (4 === m.nodeType)return this.createCDataElement(m.textContent);
                if (m.attributes)for (d = 0, g = m.attributes.length; d < g; d++)r = m.attributes[d], r = new b(r.getname, r.nodeName, r.namespaceURI, r.nodeValue, r.nodeType), p.attributes.push(r);
                if (m.childNodes)for (d =
                                          0, g = m.childNodes.length; d < g; d++)r = p.parseChildrenRecursive(p, m.childNodes[d]), null !== r && p.children.push(r);
                return p
            }, createElement: function (a, b, p, r) {
                return p === g ? new e(a, b) : new e(a, b, p, r)
            }, createPCDataElement: function (a, b) {
                if ("" === a.replace(/^\s+$/g, ""))return null;
                var p = new e;
                p.type = "TEXT";
                p.content = a;
                return p
            }, createCDataElement: function (a) {
                var b = this.createPCDataElement(a);
                if (null === b)return null;
                b.type = "CDATA";
                var e = {"<": "&lt;", ">": "&gt;", "'": "&apos;", '"': "&quot;"}, r;
                for (r in e)Object.hasOwnProperty(e,
                    r) || (a = a.replace(RegExp(r, "g"), e[r]));
                b.cdata = a;
                return b
            }, hasAttribute: function () {
                if (1 === arguments.length)return null !== this.getAttribute(arguments[0]);
                if (2 === arguments.length)return null !== this.getAttribute(arguments[0], arguments[1])
            }, equals: function (a) {
                if (!(a instanceof e))return!1;
                var b, p;
                if (this.fullName !== a.fullName || this.attributes.length !== a.getAttributeCount() || this.attributes.length !== a.attributes.length)return!1;
                var r, d;
                b = 0;
                for (p = this.attributes.length; b < p; b++)if (r = this.attributes[b].getName(),
                    d = this.attributes[b].getNamespace(), r = a.findAttribute(r, d), null === r || this.attributes[b].getValue() !== r.getValue() || this.attributes[b].getType() !== r.getType())return!1;
                if (this.children.length !== a.getChildCount())return!1;
                if (0 < this.children.length) {
                    b = 0;
                    for (p = this.children.length; b < p; b++)if (r = this.getChild(b), d = a.getChild(b), !r.equals(d))return!1;
                    return!0
                }
                return this.content === a.content
            }, getContent: function () {
                if ("TEXT" === this.type || "CDATA" === this.type)return this.content;
                var a = this.children;
                return 1 !==
                    a.length || "TEXT" !== a[0].type && "CDATA" !== a[0].type ? null : a[0].content
            }, getAttribute: function () {
                var a;
                if (2 === arguments.length)return(a = this.findAttribute(arguments[0])) ? a.getValue() : arguments[1];
                if (1 === arguments.length)return(a = this.findAttribute(arguments[0])) ? a.getValue() : null;
                if (3 === arguments.length)return(a = this.findAttribute(arguments[0], arguments[1])) ? a.getValue() : arguments[2]
            }, getStringAttribute: function () {
                return 1 === arguments.length ? this.getAttribute(arguments[0]) : 2 === arguments.length ? this.getAttribute(arguments[0],
                    arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
            }, getString: function (a) {
                return this.getStringAttribute(a)
            }, getFloatAttribute: function () {
                return 1 === arguments.length ? parseFloat(this.getAttribute(arguments[0], 0)) : 2 === arguments.length ? this.getAttribute(arguments[0], arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
            }, getFloat: function (a) {
                return this.getFloatAttribute(a)
            }, getIntAttribute: function () {
                return 1 === arguments.length ? this.getAttribute(arguments[0], 0) :
                    2 === arguments.length ? this.getAttribute(arguments[0], arguments[1]) : this.getAttribute(arguments[0], arguments[1], arguments[2])
            }, getInt: function (a) {
                return this.getIntAttribute(a)
            }, hasChildren: function () {
                return 0 < this.children.length
            }, addChild: function (a) {
                null !== a && (a.parent = this, this.children.push(a))
            }, insertChild: function (a, b) {
                if (a) {
                    if (null === a.getLocalName() && !this.hasChildren()) {
                        var e = this.children[this.children.length - 1];
                        if (null === e.getLocalName()) {
                            e.setContent(e.getContent() + a.getContent());
                            return
                        }
                    }
                    a.parent =
                        this;
                    this.children.splice(b, 0, a)
                }
            }, getChild: function (a) {
                if ("number" === typeof a)return this.children[a];
                if (-1 !== a.indexOf("/"))return this.getChildRecursive(a.split("/"), 0);
                for (var b, e, r = 0, d = this.getChildCount(); r < d; r++)if (b = this.getChild(r), e = b.getName(), null !== e && e === a)return b;
                return null
            }, getChildren: function () {
                if (1 === arguments.length) {
                    if ("number" === typeof arguments[0])return this.getChild(arguments[0]);
                    if (-1 !== arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
                        0);
                    for (var a = [], b, e, r = 0, d = this.getChildCount(); r < d; r++)b = this.getChild(r), e = b.getName(), null !== e && e === arguments[0] && a.push(b);
                    return a
                }
                return this.children
            }, getChildCount: function () {
                return this.children.length
            }, getChildRecursive: function (a, b) {
                if (b === a.length)return this;
                for (var e, r, d = a[b], g = 0, k = this.getChildCount(); g < k; g++)if (e = this.getChild(g), r = e.getName(), null !== r && r === d)return e.getChildRecursive(a, b + 1);
                return null
            }, getChildrenRecursive: function (a, b) {
                if (b === a.length - 1)return this.getChildren(a[b]);
                for (var e = this.getChildren(a[b]), r = [], d = 0; d < e.length; d++)r = r.concat(e[d].getChildrenRecursive(a, b + 1));
                return r
            }, isLeaf: function () {
                return!this.hasChildren()
            }, listChildren: function () {
                for (var a = [], b = 0, e = this.children.length; b < e; b++)a.push(this.getChild(b).getName());
                return a
            }, removeAttribute: function (a, b) {
                this.namespace = b || "";
                for (var e = 0, r = this.attributes.length; e < r; e++)if (this.attributes[e].getName() === a && this.attributes[e].getNamespace() === this.namespace) {
                    this.attributes.splice(e, 1);
                    break
                }
            }, removeChild: function (a) {
                if (a)for (var b =
                    0, e = this.children.length; b < e; b++)if (this.children[b].equals(a)) {
                    this.children.splice(b, 1);
                    break
                }
            }, removeChildAtIndex: function (a) {
                this.children.length > a && this.children.splice(a, 1)
            }, findAttribute: function (a, b) {
                this.namespace = b || "";
                for (var e = 0, r = this.attributes.length; e < r; e++)if (this.attributes[e].getName() === a && this.attributes[e].getNamespace() === this.namespace)return this.attributes[e];
                return null
            }, setAttribute: function () {
                var a;
                if (3 === arguments.length) {
                    a = arguments[0].indexOf(":");
                    var e = arguments[0].substring(a +
                        1);
                    (a = this.findAttribute(e, arguments[1])) ? a.setValue(arguments[2]) : (a = new b(arguments[0], e, arguments[1], arguments[2], "CDATA"), this.attributes.push(a))
                } else(a = this.findAttribute(arguments[0])) ? a.setValue(arguments[1]) : (a = new b(arguments[0], arguments[0], null, arguments[1], "CDATA"), this.attributes.push(a))
            }, setString: function (a, b) {
                this.setAttribute(a, b)
            }, setInt: function (a, b) {
                this.setAttribute(a, b)
            }, setFloat: function (a, b) {
                this.setAttribute(a, b)
            }, setContent: function (a) {
                0 < this.children.length && Processing.debug("Tried to set content for XMLElement with children");
                this.content = a
            }, setName: function () {
                if (1 === arguments.length)this.name = arguments[0], this.fullName = arguments[0], this.namespace = null; else {
                    var a = arguments[0].indexOf(":");
                    this.name = null === arguments[1] || 0 > a ? arguments[0] : arguments[0].substring(a + 1);
                    this.fullName = arguments[0];
                    this.namespace = arguments[1]
                }
            }, getName: function () {
                return this.fullName
            }, getLocalName: function () {
                return this.name
            }, getAttributeCount: function () {
                return this.attributes.length
            }, toString: function () {
                if ("TEXT" === this.type)return this.content;
                if ("CDATA" === this.type)return this.cdata;
                var a = this.fullName, b = "<" + a, e;
                for (e = 0; e < this.attributes.length; e++)var r = this.attributes[e], b = b + (" " + r.getName() + '="' + r.getValue() + '"');
                if (0 === this.children.length)b = "" === this.content ? b + "/>" : b + (">" + this.content + "</" + a + ">"); else {
                    b += ">";
                    for (e = 0; e < this.children.length; e++)b += this.children[e].toString();
                    b += "</" + a + ">"
                }
                return b
            }};
            e.parse = function (a) {
                var b = new e;
                b.parse(a);
                return b
            };
            return e
        }
    }, {}], 20: [function (D, y, Q) {
        y.exports = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7",
            aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f",
            darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0",
            hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32",
            linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6",
            palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4",
            tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"}
    }, {}], 21: [function (D, y, Q) {
        y.exports = function (k, g, n) {
            return function (l, a) {
                l.__contains = function (b, e) {
                    return"string" !== typeof b ? b.contains.apply(b, a(arguments)) : null !== b && null !== e && "string" === typeof e && -1 < b.indexOf(e)
                };
                l.__replaceAll = function (b, e, c) {
                    return"string" !== typeof b ? b.replaceAll.apply(b, a(arguments)) :
                        b.replace(RegExp(e, "g"), c)
                };
                l.__replaceFirst = function (b, e, c) {
                    return"string" !== typeof b ? b.replaceFirst.apply(b, a(arguments)) : b.replace(RegExp(e, ""), c)
                };
                l.__replace = function (b, e, c) {
                    if ("string" !== typeof b)return b.replace.apply(b, a(arguments));
                    if (e instanceof RegExp)return b.replace(e, c);
                    "string" !== typeof e && (e = e.toString());
                    if ("" === e)return b;
                    var g = b.indexOf(e);
                    if (0 > g)return b;
                    var k = 0, r = "";
                    do r += b.substring(k, g) + c, k = g + e.length; while (0 <= (g = b.indexOf(e, k)));
                    return r + b.substring(k)
                };
                l.__equals = function (b, e) {
                    return b.equals instanceof Function ? b.equals.apply(b, a(arguments)) : g(b, e)
                };
                l.__equalsIgnoreCase = function (b, e) {
                    return"string" !== typeof b ? b.equalsIgnoreCase.apply(b, a(arguments)) : b.toLowerCase() === e.toLowerCase()
                };
                l.__toCharArray = function (b) {
                    if ("string" !== typeof b)return b.toCharArray.apply(b, a(arguments));
                    for (var e = [], c = 0, g = b.length; c < g; ++c)e[c] = new Char(b.charAt(c));
                    return e
                };
                l.__split = function (b, e, c) {
                    if ("string" !== typeof b)return b.split.apply(b, a(arguments));
                    var g = RegExp(e);
                    if (c === n || 1 > c)return b.split(g);
                    for (var k = [], r = b, d; -1 !== (d = r.search(g)) && k.length < c - 1;) {
                        var l = g.exec(r).toString();
                        k.push(r.substring(0, d));
                        r = r.substring(d + l.length)
                    }
                    -1 === d && "" === r || k.push(r);
                    return k
                };
                l.__codePointAt = function (a, e) {
                    var c = a.charCodeAt(e), g;
                    return 55296 <= c && 56319 >= c ? (g = a.charCodeAt(e + 1), 1024 * (c - 55296) + (g - 56320) + 65536) : c
                };
                l.__matches = function (a, e) {
                    return RegExp(e).test(a)
                };
                l.__startsWith = function (b, e, c) {
                    if ("string" !== typeof b)return b.startsWith.apply(b, a(arguments));
                    c = c || 0;
                    return 0 > c || c > b.length ? !1 : "" === e || e === b ?
                        !0 : b.indexOf(e) === c
                };
                l.__endsWith = function (b, e) {
                    if ("string" !== typeof b)return b.endsWith.apply(b, a(arguments));
                    var c = e ? e.length : 0;
                    return"" === e || e === b ? !0 : b.indexOf(e) === b.length - c
                };
                l.__hashCode = function (b) {
                    return b.hashCode instanceof Function ? b.hashCode.apply(b, a(arguments)) : k(b)
                };
                l.__printStackTrace = function (a) {
                    l.println("Exception: " + a.toString())
                }
            }
        }
    }, {}], 22: [function (D, y, Q) {
        y.exports = function (k, g) {
            function n(a, b) {
                var d = a || 362436069, c = b || 521288629, e = function () {
                    d = 36969 * (d & 65535) + (d >>> 16) & 4294967295;
                    c = 18E3 * (c & 65535) + (c >>> 16) & 4294967295;
                    return((d & 65535) << 16 | c & 65535) & 4294967295
                };
                this.doubleGenerator = function () {
                    var a = e() / 4294967296;
                    return 0 > a ? 1 + a : a
                };
                this.intGenerator = e
            }

            function l(a) {
                function b(a, d, c, e) {
                    a &= 15;
                    var g = 8 > a ? d : c;
                    d = 4 > a ? c : 12 === a || 14 === a ? d : e;
                    return(0 === (a & 1) ? g : -g) + (0 === (a & 2) ? d : -d)
                }

                function d(a, b, d) {
                    b = 0 === (a & 1) ? b : d;
                    return 0 === (a & 2) ? -b : b
                }

                function c(a, b, d) {
                    return b + a * (d - b)
                }

                a = a !== g ? new n(a) : n.createRandomized();
                var e, k, m = new Uint8Array(512);
                for (e = 0; 256 > e; ++e)m[e] = e;
                for (e = 0; 256 > e; ++e) {
                    var l = m[k =
                        a.intGenerator() & 255];
                    m[k] = m[e];
                    m[e] = l
                }
                for (e = 0; 256 > e; ++e)m[e + 256] = m[e];
                this.noise3d = function (a, d, e) {
                    var g = Math.floor(a) & 255, k = Math.floor(d) & 255, p = Math.floor(e) & 255;
                    a -= Math.floor(a);
                    d -= Math.floor(d);
                    e -= Math.floor(e);
                    var n = (3 - 2 * a) * a * a, l = (3 - 2 * d) * d * d, G = m[g] + k, ca = m[G] + p, G = m[G + 1] + p, k = m[g + 1] + k, g = m[k] + p, p = m[k + 1] + p;
                    return c((3 - 2 * e) * e * e, c(l, c(n, b(m[ca], a, d, e), b(m[g], a - 1, d, e)), c(n, b(m[G], a, d - 1, e), b(m[p], a - 1, d - 1, e))), c(l, c(n, b(m[ca + 1], a, d, e - 1), b(m[g + 1], a - 1, d, e - 1)), c(n, b(m[G + 1], a, d - 1, e - 1), b(m[p + 1], a - 1, d - 1, e - 1))))
                };
                this.noise2d = function (a, b) {
                    var e = Math.floor(a) & 255, g = Math.floor(b) & 255;
                    a -= Math.floor(a);
                    b -= Math.floor(b);
                    var r = (3 - 2 * a) * a * a, k = m[e] + g, e = m[e + 1] + g;
                    return c((3 - 2 * b) * b * b, c(r, d(m[k], a, b), d(m[e], a - 1, b)), c(r, d(m[k + 1], a, b - 1), d(m[e + 1], a - 1, b - 1)))
                };
                this.noise1d = function (a) {
                    var b = Math.floor(a) & 255;
                    a -= Math.floor(a);
                    return c((3 - 2 * a) * a * a, 0 === (m[b] & 1) ? -a : a, 0 === (m[b + 1] & 1) ? -(a - 1) : a - 1)
                }
            }

            var a = function () {
                return Math.random()
            };
            k.abs = Math.abs;
            k.ceil = Math.ceil;
            k.exp = Math.exp;
            k.floor = Math.floor;
            k.log = Math.log;
            k.pow = Math.pow;
            k.round = Math.round;
            k.sqrt = Math.sqrt;
            k.acos = Math.acos;
            k.asin = Math.asin;
            k.atan = Math.atan;
            k.atan2 = Math.atan2;
            k.cos = Math.cos;
            k.sin = Math.sin;
            k.tan = Math.tan;
            k.constrain = function (a, b, d) {
                return a > d ? d : a < b ? b : a
            };
            k.dist = function () {
                var a, b, d;
                if (4 === arguments.length)return a = arguments[0] - arguments[2], b = arguments[1] - arguments[3], Math.sqrt(a * a + b * b);
                if (6 === arguments.length)return a = arguments[0] - arguments[3], b = arguments[1] - arguments[4], d = arguments[2] - arguments[5], Math.sqrt(a * a + b * b + d * d)
            };
            k.lerp = function (a, b, d) {
                return(b -
                    a) * d + a
            };
            k.mag = function (a, b, d) {
                return d ? Math.sqrt(a * a + b * b + d * d) : Math.sqrt(a * a + b * b)
            };
            k.map = function (a, b, d, c, e) {
                return c + (e - c) * ((a - b) / (d - b))
            };
            k.max = function () {
                if (2 === arguments.length)return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
                var a = 1 === arguments.length ? arguments[0] : arguments;
                if (!("length"in a && 0 < a.length))throw"Non-empty array is expected";
                for (var b = a[0], d = a.length, c = 1; c < d; ++c)b < a[c] && (b = a[c]);
                return b
            };
            k.min = function () {
                if (2 === arguments.length)return arguments[0] < arguments[1] ? arguments[0] :
                    arguments[1];
                var a = 1 === arguments.length ? arguments[0] : arguments;
                if (!("length"in a && 0 < a.length))throw"Non-empty array is expected";
                for (var b = a[0], d = a.length, c = 1; c < d; ++c)b > a[c] && (b = a[c]);
                return b
            };
            k.norm = function (a, b, d) {
                return(a - b) / (d - b)
            };
            k.sq = function (a) {
                return a * a
            };
            k.degrees = function (a) {
                return 180 * a / Math.PI
            };
            k.random = function () {
                if (0 === arguments.length)return a();
                if (1 === arguments.length)return a() * arguments[0];
                var b = arguments[0], c = arguments[1];
                return a() * (c - b) + b
            };
            n.createRandomized = function () {
                var a =
                    new Date;
                return new n(a / 6E4 & 4294967295, a & 4294967295)
            };
            k.randomSeed = function (b) {
                a = (new n(b)).doubleGenerator
            };
            k.Random = function (a) {
                var b = !1, d, c;
                this.nextGaussian = function () {
                    if (b)return b = !1, d;
                    var a, e, g;
                    do a = 2 * c() - 1, e = 2 * c() - 1, g = a * a + e * e; while (1 <= g || 0 === g);
                    g = Math.sqrt(-2 * Math.log(g) / g);
                    d = e * g;
                    b = !0;
                    return a * g
                };
                c = a === g ? Math.random : (new n(a)).doubleGenerator
            };
            var b = g, e = 4, c = 0.5, m = g;
            k.noise = function (a, k, d) {
                b === g && (b = new l(m));
                for (var n = b, ca = 1, G = 1, A = 0, y = 0; y < e; ++y) {
                    ca *= c;
                    switch (arguments.length) {
                        case 1:
                            A += ca *
                                (1 + n.noise1d(G * a)) / 2;
                            break;
                        case 2:
                            A += ca * (1 + n.noise2d(G * a, G * k)) / 2;
                            break;
                        case 3:
                            A += ca * (1 + n.noise3d(G * a, G * k, G * d)) / 2
                    }
                    G *= 2
                }
                return A
            };
            k.noiseDetail = function (a, b) {
                e = a;
                b !== g && (c = b)
            };
            k.noiseSeed = function (a) {
                m = a;
                b = g
            }
        }
    }, {}], 23: [function (D, y, Q) {
        y.exports = function (k) {
            var g = {trim: function (g) {
                if (g instanceof Array) {
                    for (var k = [], a = 0; a < g.length; a++)k.push(g[a].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, ""));
                    return k
                }
                return g.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, "")
            }, radians: function (g) {
                return g /
                    180 * Math.PI
            }, nfCoreScalar: function (g, l, a, b, e, c) {
                l = 0 > g ? a : l;
                a = 0 === e;
                e = e === k || 0 > e ? 0 : e;
                g = Math.abs(g);
                if (a)for (e = 1, g *= 10; 1E-6 < Math.abs(Math.round(g) - g) && 7 > e;)++e, g *= 10; else 0 !== e && (g *= Math.pow(10, e));
                a = 2 * g;
                Math.floor(g) === g ? a = g : Math.floor(a) === a ? (g = Math.floor(g), a = g + g % 2) : a = Math.round(g);
                g = "";
                for (b += e; 0 < b || 0 < a;)b--, g = "" + a % 10 + g, a = Math.floor(a / 10);
                if (c !== k)for (b = g.length - 3 - e; 0 < b;)g = g.substring(0, b) + c + g.substring(b), b -= 3;
                return 0 < e ? l + g.substring(0, g.length - e) + "." + g.substring(g.length - e, g.length) : l + g
            }, nfCore: function (k, l, a, b, e, c) {
                if (k instanceof Array) {
                    for (var m = [], p = 0, r = k.length; p < r; p++)m.push(g.nfCoreScalar(k[p], l, a, b, e, c));
                    return m
                }
                return g.nfCoreScalar(k, l, a, b, e, c)
            }, nf: function (k, l, a) {
                return g.nfCore(k, "", "-", l, a)
            }, nfs: function (k, l, a) {
                return g.nfCore(k, " ", "-", l, a)
            }, nfp: function (k, l, a) {
                return g.nfCore(k, "+", "-", l, a)
            }, nfc: function (k, l) {
                return g.nfCore(k, "", "-", 0, l, ",")
            }, withCommonFunctions: function (k) {
                "trim radians nf nfs nfp nfc".split(" ").forEach(function (l) {
                    k[l] = g[l]
                })
            }};
            return g
        }()
    }, {}], 24: [function (D, y, Q) {
        y.exports = function (k, g, n, l, a, b) {
            function e(a, b) {
                var c = a, e = 0, g = 0;
                k.pmouseX = k.mouseX;
                k.pmouseY = k.mouseY;
                if (c.offsetParent) {
                    do e += c.offsetLeft, g += c.offsetTop; while (c = c.offsetParent)
                }
                c = a;
                do e -= c.scrollLeft || 0, g -= c.scrollTop || 0; while (c = c.parentNode);
                var m, n, p, y;
                l.defaultView && l.defaultView.getComputedStyle && (m = parseInt(l.defaultView.getComputedStyle(a, null).paddingLeft, 10) || 0, n = parseInt(l.defaultView.getComputedStyle(a, null).paddingTop, 10) || 0, p = parseInt(l.defaultView.getComputedStyle(a, null).borderLeftWidth,
                    10) || 0, y = parseInt(l.defaultView.getComputedStyle(a, null).borderTopWidth, 10) || 0);
                e = e + m + p;
                g = g + n + y;
                e += window.pageXOffset;
                g += window.pageYOffset;
                return{X: e, Y: g}
            }

            function c(a, b) {
                var c = e(a, b);
                k.mouseX = b.pageX - c.X;
                k.mouseY = b.pageY - c.Y
            }

            function m(a) {
                var b = e(a.changedTouches[0].target, a.changedTouches[0]), c;
                for (c = 0; c < a.touches.length; c++) {
                    var g = a.touches[c];
                    g.offsetX = g.pageX - b.X;
                    g.offsetY = g.pageY - b.Y
                }
                for (c = 0; c < a.targetTouches.length; c++)g = a.targetTouches[c], g.offsetX = g.pageX - b.X, g.offsetY = g.pageY - b.Y;
                for (c =
                         0; c < a.changedTouches.length; c++)g = a.changedTouches[c], g.offsetX = g.pageX - b.X, g.offsetY = g.pageY - b.Y;
                return a
            }

            n(g, "touchstart", function (e) {
                g.setAttribute("style", "-webkit-user-select: none");
                g.setAttribute("onclick", "void(0)");
                g.setAttribute("style", "-webkit-tap-highlight-color:rgba(0,0,0,0)");
                for (var d = 0, p = eventHandlers.length; d < p; d++) {
                    var l = eventHandlers[d].type;
                    "mouseout" !== l && "mousemove" !== l && "mousedown" !== l && "mouseup" !== l && "DOMMouseScroll" !== l && "mousewheel" !== l && "touchstart" !== l || detachEventHandler(eventHandlers[d])
                }
                k.touchStart !==
                    b || k.touchMove !== b || k.touchEnd !== b || k.touchCancel !== b ? (n(g, "touchstart", function (a) {
                    k.touchStart !== b && (a = m(a), k.touchStart(a))
                }), n(g, "touchmove", function (a) {
                    k.touchMove !== b && (a.preventDefault(), a = m(a), k.touchMove(a))
                }), n(g, "touchend", function (a) {
                    k.touchEnd !== b && (a = m(a), k.touchEnd(a))
                }), n(g, "touchcancel", function (a) {
                    k.touchCancel !== b && (a = m(a), k.touchCancel(a))
                })) : (n(g, "touchstart", function (b) {
                    c(g, b.touches[0]);
                    k.__mousePressed = !0;
                    k.mouseDragging = !1;
                    k.mouseButton = a.LEFT;
                    "function" === typeof k.mousePressed &&
                    k.mousePressed()
                }), n(g, "touchmove", function (a) {
                    a.preventDefault();
                    c(g, a.touches[0]);
                    "function" !== typeof k.mouseMoved || k.__mousePressed || k.mouseMoved();
                    "function" === typeof k.mouseDragged && k.__mousePressed && (k.mouseDragged(), k.mouseDragging = !0)
                }), n(g, "touchend", function (a) {
                    k.__mousePressed = !1;
                    "function" !== typeof k.mouseClicked || k.mouseDragging || k.mouseClicked();
                    "function" === typeof k.mouseReleased && k.mouseReleased()
                }));
                g.dispatchEvent(e)
            });
            (function () {
                var a = !0, b = function (a) {
                    a.preventDefault();
                    a.stopPropagation()
                };
                k.disableContextMenu = function () {
                    a && (n(g, "contextmenu", b), a = !1)
                };
                k.enableContextMenu = function () {
                    a || (detachEventHandler({elem: g, type: "contextmenu", fn: b}), a = !0)
                }
            })();
            n(g, "mousemove", function (a) {
                c(g, a);
                "function" !== typeof k.mouseMoved || k.__mousePressed || k.mouseMoved();
                "function" === typeof k.mouseDragged && k.__mousePressed && (k.mouseDragged(), k.mouseDragging = !0)
            });
            n(g, "mouseout", function (a) {
                "function" === typeof k.mouseOut && k.mouseOut()
            });
            n(g, "mouseover", function (a) {
                c(g, a);
                "function" === typeof k.mouseOver &&
                k.mouseOver()
            });
            g.onmousedown = function () {
                g.focus();
                return!1
            };
            n(g, "mousedown", function (b) {
                k.__mousePressed = !0;
                k.mouseDragging = !1;
                switch (b.which) {
                    case 1:
                        k.mouseButton = a.LEFT;
                        break;
                    case 2:
                        k.mouseButton = a.CENTER;
                        break;
                    case 3:
                        k.mouseButton = a.RIGHT
                }
                "function" === typeof k.mousePressed && k.mousePressed()
            });
            n(g, "mouseup", function (a) {
                k.__mousePressed = !1;
                "function" !== typeof k.mouseClicked || k.mouseDragging || k.mouseClicked();
                "function" === typeof k.mouseReleased && k.mouseReleased()
            });
            var p = function (a) {
                var b = 0;
                a.wheelDelta ?
                    (b = a.wheelDelta / 120, window.opera && (b = -b)) : a.detail && (b = -a.detail / 3);
                (k.mouseScroll = b) && "function" === typeof k.mouseScrolled && k.mouseScrolled()
            };
            n(l, "DOMMouseScroll", p);
            n(l, "mousewheel", p)
        }
    }, {}], 25: [function (D, y, Q) {
        y.exports = function (k, g) {
            function n() {
                var a = "abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random Random randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
                c && Object.keys(c).forEach(function (b) {
                    a.push(b)
                });
                var b = {}, e, g;
                e = 0;
                for (g = a.length; e < g; ++e)b[a[e]] = null;
                for (var m in k.lib)if (k.lib.hasOwnProperty(m) && k.lib[m].exports) {
                    var p = k.lib[m].exports;
                    e = 0;
                    for (g = p.length; e < g; ++e)b[p[e]] = null
                }
                return b
            }

            function l(a) {
                function d(a) {
                    var b = /^\s*/.exec(a);
                    if (b[0].length === a.length)a = {left: b[0], middle: "", right: ""}; else {
                        var d = /\s*$/.exec(a);
                        a = {left: b[0], middle: a.substring(b[0].length, d.index), right: d[0]}
                    }
                    a.untrim = function (a) {
                        return this.left + a + this.right
                    };
                    return a
                }

                function c(a) {
                    return a.replace(/^\s+/,
                        "").replace(/\s+$/, "")
                }

                function g(a, b) {
                    for (var d = 0, c = b.length; d < c; ++d)a[b[d]] = null;
                    return a
                }

                function k(a) {
                    for (var b in a)if (a.hasOwnProperty(b))return!1;
                    return!0
                }

                function m(a) {
                    return a.substring(2, a.length - 1)
                }

                function l(a, b) {
                    var d = N.length;
                    N.push(a);
                    return'"' + b + d + '"'
                }

                function v(a) {
                    a = a.replace(qa, function (a) {
                        return l(a, "E")
                    });
                    a = a.replace(la, function (a) {
                        return l(a, "D")
                    });
                    return a = a.replace(jb, function (a) {
                        return l(a, "H")
                    })
                }

                function y(a, b) {
                    return a.replace(Db, function (a, d, c, f, e, Zb) {
                        return c !== b ? a : l(a,
                            "G")
                    })
                }

                function q(a) {
                    this.name = a
                }

                function D(a, b) {
                    this.params = a;
                    this.methodArgsParam = b
                }

                function K(a) {
                    var b = c(a.substring(1, a.length - 1));
                    a = [];
                    var d = null;
                    if ("" !== b)for (var b = b.split(","), f = 0; f < b.length; ++f) {
                        var e = /\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[f]);
                        if (f === b.length - 1 && 0 <= b[f].indexOf("...")) {
                            d = new q(e[1]);
                            break
                        }
                        a.push(new q(e[1]))
                    }
                    return new D(a, d)
                }

                function Q(a) {
                    function b(a, c, e, g) {
                        a = N[g];
                        f = !0;
                        a = d(a.substring(1, a.length - 1));
                        return"__" + e + ("" === a.middle ? l("(" + c.replace(/\.\s*$/, "") +
                            ")", "B") : l("(" + c.replace(/\.\s*$/, "") + "," + a.middle + ")", "B"))
                    }

                    function c(a, b, d) {
                        f = !0;
                        return"__instanceof" + l("(" + b + ", " + d + ")", "B")
                    }

                    a = a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g, function (a, b, d) {
                        return d
                    });
                    a = a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g, function (a, b, d) {
                        return l(a, "F")
                    });
                    a = a.replace(jb, function (a) {
                        return l(a, "H")
                    });
                    a = a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
                        function (a, b, d) {
                            a = d.replace(/"C(\d+)"/g,function (a, b) {
                                return N[b]
                            }).replace(/\[\s*\]/g, "[null]").replace(/\s*\]\s*\[\s*/g, ", ");
                            a = "{" + a.substring(1, a.length - 1) + "}";
                            b = "('" + b + "', " + l(a, "A") + ")";
                            return"$p.createJavaArray" + l(b, "B")
                        });
                    a = a.replace(/(\.\s*length)\s*"B\d+"/g, "$1");
                    a = a.replace(/#([0-9A-Fa-f]{6})\b/g, function (a, b) {
                        return"0xFF" + b
                    });
                    a = a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g, function (a, b, d) {
                        b = N[b];
                        if (!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
                        if (/^\(\s*int\s*\)$/.test(b))return"(int)" + d;
                        b = b.split(/"C(\d+)"/g);
                        return 1 < b.length && !/^\[\s*\]$/.test(N[b[1]]) ? a : "" + d
                    });
                    a = a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g, function (a, b) {
                        var c = d(b);
                        return c.untrim("__int_cast(" + c.middle + ")")
                    });
                    a = a.replace(/\bsuper(\s*"B\d+")/g, "$$superCstr$1").replace(/\bsuper(\s*\.)/g, "$$super$1");
                    a = a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/, function (a, b, d) {
                        return b === d ? a : "" === d ? "0" + b : b
                    });
                    a = a.replace(/\b(\.?\d+\.?)[fF]\b/g, "$1");
                    a =
                        a.replace(/([^\s])%([^=\s])/g, "$1 % $2");
                    a = a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g, "__$1");
                    a = a.replace(/\b(boolean|byte|char|float|int)\s*"B/g, function (a, b) {
                        return"parse" + b.substring(0, 1).toUpperCase() + b.substring(1) + '"B'
                    });
                    a = a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g, function (a, b, d, c, f, e) {
                        return d ? (a = N[c], f ? "pixels.setPixel" + l("(" + a.substring(1, a.length - 1) + "," + e + ")", "B") : "pixels.getPixel" + l("(" + a.substring(1, a.length - 1) + ")", "B")) : b ? "pixels.getLength" +
                            l("()", "B") : f ? "pixels.set" + l("(" + e + ")", "B") : "pixels.toArray" + l("()", "B")
                    });
                    var f;
                    do f = !1, a = a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g, b); while (f);
                    do f = !1, a = a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
                        c); while (f);
                    return a = a.replace(/\bthis(\s*"B\d+")/g, "$$constr$1")
                }

                function u(a, b) {
                    this.baseInterfaceName = a;
                    this.body = b;
                    b.owner = this
                }

                function nd(a) {
                    var b = RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);
                    a = ja;
                    var d = "class" + ++ab;
                    ja = d;
                    var c = b[1] + "$" + d, b = new u(c, ea(N[b[2]], c, "", "implements " + b[1]));
                    b.classId = d;
                    b.scopeId = a;
                    Y[d] = b;
                    ja = a;
                    return b
                }

                function Ia(a, b, d) {
                    this.name = a;
                    this.params = b;
                    this.body = d
                }

                function U(a) {
                    a = RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
                    return new Ia("function" !== a[1] ? a[1] : null, K(N[a[2]]), ra(N[a[3]]))
                }

                function Z(a) {
                    this.members = a
                }

                function V(a) {
                    a = a.split(",");
                    for (var b = 0; b < a.length; ++b) {
                        var d = a[b].indexOf(":");
                        a[b] = 0 > d ? {value: ma(a[b])} : {label: c(a[b].substring(0, d)), value: ma(c(a[b].substring(d + 1)))}
                    }
                    return new Z(a)
                }

                function $(a) {
                    if ("(" === a.charAt(0) || "[" === a.charAt(0))return a.charAt(0) + $(a.substring(1, a.length - 1)) + a.charAt(a.length - 1);
                    if ("{" === a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a) ? "{" + l(a.substring(1, a.length -
                        1), "I") + "}" : "[" + $(a.substring(1, a.length - 1)) + "]";
                    a = d(a);
                    var b = Q(a.middle), b = b.replace(/"[ABC](\d+)"/g, function (a, b) {
                        return $(N[b])
                    });
                    return a.untrim(b)
                }

                function sa(a) {
                    return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g, function (a, b, d, c, f, e) {
                        return b ? a : C({name: d, member: f, callSign: !!e}) + (c === p ? "" : c)
                    })
                }

                function ta(a, b) {
                    this.expr = a;
                    this.transforms = b
                }

                function $b(a, b, d) {
                    this.name = a;
                    this.value = b;
                    this.isDefault = d
                }

                function bb(a, b) {
                    var d = a.indexOf("="), f, e;
                    0 > d ? (f = a, d =
                        b, e = !0) : (f = a.substring(0, d), d = ma(a.substring(d + 1)), e = !1);
                    return new $b(c(f.replace(/(\s*"C\d+")+/g, "")), d, e)
                }

                function Sa(a) {
                    return"int" === a || "float" === a ? "0" : "boolean" === a ? "false" : "color" === a ? "0x00000000" : "null"
                }

                function cb(a, b) {
                    this.definitions = a;
                    this.varType = b
                }

                function Eb(a) {
                    this.expression = a
                }

                function db(a) {
                    if (Fb.test(a)) {
                        var b = tb.exec(a);
                        a = a.substring(b[0].length).split(",");
                        for (var d = Sa(b[2]), c = 0; c < a.length; ++c)a[c] = bb(a[c], d);
                        return new cb(a, b[2])
                    }
                    return new Eb(ma(a))
                }

                function Gb(a, b, d) {
                    this.initStatement =
                        a;
                    this.condition = b;
                    this.step = d
                }

                function Hb(a, b) {
                    this.initStatement = a;
                    this.container = b
                }

                function wa(a, b) {
                    this.initStatement = a;
                    this.container = b
                }

                function za(a) {
                    if (/\bin\b/.test(a))return a = a.substring(1, a.length - 1).split(/\bin\b/g), new Hb(db(c(a[0])), ma(a[1]));
                    if (0 <= a.indexOf(":") && 0 > a.indexOf(";"))return a = a.substring(1, a.length - 1).split(":"), new wa(db(c(a[0])), ma(a[1]));
                    a = a.substring(1, a.length - 1).split(";");
                    return new Gb(db(c(a[0])), ma(a[1]), ma(a[2]))
                }

                function Ta(a) {
                    a.sort(function (a, b) {
                        return b.weight -
                            a.weight
                    })
                }

                function Ja(a, b, d) {
                    this.name = a;
                    this.body = b;
                    this.isStatic = d;
                    b.owner = this
                }

                function Ib(a, b, d) {
                    this.name = a;
                    this.body = b;
                    this.isStatic = d;
                    b.owner = this
                }

                function Jb(a) {
                    var b = qa.exec(a);
                    qa.lastIndex = 0;
                    var d = 0 <= b[1].indexOf("static"), c = N[m(b[6])];
                    a = ja;
                    var f = "class" + ++ab;
                    ja = f;
                    b = "interface" === b[2] ? new Ja(b[3], eb(c, b[3], b[4]), d) : new Ib(b[3], ea(c, b[3], b[4], b[5]), d);
                    b.classId = f;
                    b.scopeId = a;
                    Y[f] = b;
                    ja = a;
                    return b
                }

                function Kb(a, b, d, c) {
                    this.name = a;
                    this.params = b;
                    this.body = d;
                    this.isStatic = c
                }

                function fb(a) {
                    a =
                        la.exec(a);
                    la.lastIndex = 0;
                    var b = 0 <= a[1].indexOf("static"), d = ";" !== a[6] ? N[m(a[6])] : "{}";
                    return new Kb(a[3], K(N[m(a[4])]), ra(d), b)
                }

                function Lb(a, b, d) {
                    this.definitions = a;
                    this.fieldType = b;
                    this.isStatic = d
                }

                function Ua(a) {
                    var b = tb.exec(a), d = 0 <= b[1].indexOf("static");
                    a = a.substring(b[0].length).split(/,\s*/g);
                    for (var c = Sa(b[2]), f = 0; f < a.length; ++f)a[f] = bb(a[f], c);
                    return new Lb(a, b[2], d)
                }

                function Mb(a, b) {
                    this.params = a;
                    this.body = b
                }

                function ac(a) {
                    a = RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);
                    var b = K(N[a[1]]);
                    return new Mb(b,
                        ra(N[a[2]]))
                }

                function Ka(a, b, d, c, f, e) {
                    this.name = a;
                    this.interfacesNames = b;
                    this.methodsNames = d;
                    this.fields = c;
                    this.innerClasses = f;
                    this.misc = e;
                    a = 0;
                    for (b = c.length; a < b; ++a)c[a].owner = this
                }

                function H(a, b, d, c, f, e, g, h, k) {
                    this.name = a;
                    this.baseClassName = b;
                    this.interfacesNames = d;
                    this.functions = c;
                    this.methods = f;
                    this.fields = e;
                    this.cstrs = g;
                    this.innerClasses = h;
                    this.misc = k;
                    a = 0;
                    for (b = e.length; a < b; ++a)e[a].owner = this
                }

                function lb(a, b) {
                    this.name = a;
                    this.body = b;
                    b.owner = this
                }

                function mb(a, b) {
                    this.name = a;
                    this.body = b;
                    b.owner =
                        this
                }

                function Nb(a) {
                    var b = qa.exec(a);
                    qa.lastIndex = 0;
                    var d = N[m(b[6])];
                    a = ja;
                    var c = "class" + ++ab;
                    ja = c;
                    b = "interface" === b[2] ? new lb(b[3], eb(d, b[3], b[4])) : new mb(b[3], ea(d, b[3], b[4], b[5]));
                    b.classId = c;
                    b.scopeId = a;
                    Y[c] = b;
                    ja = a;
                    return b
                }

                function ub(a, b, d) {
                    this.name = a;
                    this.params = b;
                    this.body = d
                }

                function rc(a) {
                    a = la.exec(a);
                    la.lastIndex = 0;
                    return new ub(a[3], K(N[m(a[4])]), ra(N[m(a[6])]))
                }

                function Ob(a, b) {
                    this.argument = a;
                    this.misc = b
                }

                function bc(a, b) {
                    this.argument = a;
                    this.misc = b
                }

                function T(a, b, d) {
                    this.name = a;
                    this.argument =
                        b;
                    this.misc = d
                }

                function Pb(a) {
                    this.expr = a
                }

                function vb(a) {
                    this.label = a
                }

                function f(a) {
                    for (var b = [], d = 0, c = a.length; d < c; ++d) {
                        var f = a[d];
                        f instanceof cb ? b = b.concat(f.getNames()) : f instanceof Ob && f.argument.initStatement instanceof cb ? b = b.concat(f.argument.initStatement.getNames()) : (f instanceof Ja || f instanceof Ib || f instanceof lb || f instanceof mb || f instanceof ub || f instanceof Ia) && b.push(f.name)
                    }
                    return g({}, b)
                }

                function h(a) {
                    this.statements = a
                }

                function da(a) {
                    this.statements = a
                }

                var ha = n(), R = [];
                a = a.replace(/\r\n?|\n\r/g,
                    "\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g, function (a, b, d, c, f, e, g, h) {
                        return b || d ? (b = R.length, R.push(a), "'" + b + "'") : c ? (b = R.length, R.push(e), f + "'" + b + "'") : "" !== h ? " " : "\n"
                    });
                a = a.replace(/__x([0-9A-F]{4})/g, function (a, b) {
                    return"__x005F_x" + b
                });
                a = a.replace(/\$/g, "__x0024");
                a = a.replace(/return\s*[\n\r]+/g, "return ");
                var ka, La = function (a, b, d, c) {
                    if (b || c)return a;
                    ka = !0;
                    return""
                };
                do ka = !1, a = a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g, La); while (ka);
                var N = function (a) {
                        var b = [];
                        a = a.split(/([\{\[\(\)\]\}])/);
                        for (var d = a[0], c = [], f = 1; f < a.length; f += 2) {
                            var e = a[f];
                            if ("[" === e || "{" === e || "(" === e)c.push(d), d =
                                e; else if ("]" === e || "}" === e || ")" === e) {
                                var g = "}" === e ? "A" : ")" === e ? "B" : "C", h = b.length;
                                b.push(d + e);
                                d = c.pop() + '"' + g + (h + 1) + '"'
                            }
                            d += a[f + 1]
                        }
                        b.unshift(d);
                        return b
                    }(a), C, Y = {}, ja, ab = 0, ea, eb, ra, Da, ma, qa = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
                    la = /\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g, Fb = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
                    Db = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g, tb = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/, jb = /\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;
                q.prototype.toString = function () {
                    return this.name
                };
                D.prototype.getNames = function () {
                    for (var a = [], b = 0, d = this.params.length; b < d; ++b)a.push(this.params[b].name);
                    return a
                };
                D.prototype.prependMethodArgs = function (a) {
                    return this.methodArgsParam ? "{\nvar " + this.methodArgsParam.name + " = Array.prototype.slice.call(arguments, " + this.params.length + ");\n" + a.substring(1) : a
                };
                D.prototype.toString = function () {
                    if (0 === this.params.length)return"()";
                    for (var a = "(", b = 0, d = this.params.length; b < d; ++b)a += this.params[b] + ", ";
                    return a.substring(0, a.length - 2) + ")"
                };
                u.prototype.toString =
                    function () {
                        return"new (" + this.body + ")"
                    };
                Ia.prototype.toString = function () {
                    var a = C, b = g({"this": null}, this.params.getNames());
                    C = function (d) {
                        return b.hasOwnProperty(d.name) ? d.name : a(d)
                    };
                    var d = "function";
                    this.name && (d += " " + this.name);
                    var c = this.params.prependMethodArgs(this.body.toString()), d = d + (this.params + " " + c);
                    C = a;
                    return d
                };
                Z.prototype.toString = function () {
                    var a = C;
                    C = function (b) {
                        return"this" === b.name ? "this" : a(b)
                    };
                    for (var b = "", d = 0, c = this.members.length; d < c; ++d)this.members[d].label && (b += this.members[d].label +
                        ": "), b += this.members[d].value.toString() + ", ";
                    C = a;
                    return b.substring(0, b.length - 2)
                };
                ta.prototype.toString = function () {
                    var a = this.transforms;
                    return sa(this.expr).replace(/"!(\d+)"/g, function (b, d) {
                        return a[d].toString()
                    })
                };
                ma = function (a) {
                    var b = [];
                    a = $(a);
                    a = a.replace(/"H(\d+)"/g, function (a, d) {
                        b.push(U(N[d]));
                        return'"!' + (b.length - 1) + '"'
                    });
                    a = a.replace(/"F(\d+)"/g, function (a, d) {
                        b.push(nd(N[d]));
                        return'"!' + (b.length - 1) + '"'
                    });
                    a = a.replace(/"I(\d+)"/g, function (a, d) {
                        b.push(V(N[d]));
                        return'"!' + (b.length - 1) + '"'
                    });
                    return new ta(a, b)
                };
                $b.prototype.toString = function () {
                    return this.name + " = " + this.value
                };
                cb.prototype.getNames = function () {
                    for (var a = [], b = 0, d = this.definitions.length; b < d; ++b)a.push(this.definitions[b].name);
                    return a
                };
                cb.prototype.toString = function () {
                    return"var " + this.definitions.join(",")
                };
                Eb.prototype.toString = function () {
                    return this.expression.toString()
                };
                Gb.prototype.toString = function () {
                    return"(" + this.initStatement + "; " + this.condition + "; " + this.step + ")"
                };
                Hb.prototype.toString = function () {
                    var a = this.initStatement.toString();
                    0 <= a.indexOf("=") && (a = a.substring(0, a.indexOf("=")));
                    return"(" + a + " in " + this.container + ")"
                };
                wa.iteratorId = 0;
                wa.prototype.toString = function () {
                    var a = this.initStatement.toString(), b = "$it" + wa.iteratorId++, a = a.replace(/^\s*var\s*/, "").split("=")[0];
                    return"(" + ("var " + b + " = new $p.ObjectIterator(" + this.container + "), " + a + " = void(0)") + "; " + (b + ".hasNext() && ((" + a + " = " + b + ".next()) || true)") + ";)"
                };
                Ja.prototype.toString = function () {
                    return"" + this.body
                };
                Ib.prototype.toString = function () {
                    return"" + this.body
                };
                Kb.prototype.toString =
                    function () {
                        var a = g({}, this.params.getNames()), b = C;
                        C = function (d) {
                            return a.hasOwnProperty(d.name) ? d.name : b(d)
                        };
                        var d = this.params.prependMethodArgs(this.body.toString()), d = "function " + this.methodId + this.params + " " + d + "\n";
                        C = b;
                        return d
                    };
                Lb.prototype.getNames = function () {
                    for (var a = [], b = 0, d = this.definitions.length; b < d; ++b)a.push(this.definitions[b].name);
                    return a
                };
                Lb.prototype.toString = function () {
                    var a = C({name: "[this]"});
                    if (this.isStatic) {
                        for (var b = this.owner.name, d = [], c = 0, f = this.definitions.length; c < f; ++c) {
                            var e =
                                this.definitions[c], g = e.name, h = b + "." + g;
                            d.push("if(" + h + " === void(0)) {\n " + h + " = " + e.value + "; }\n$p.defineProperty(" + a + ", '" + g + "', { get: function(){return " + h + ";}, set: function(val){" + h + " = val;} });\n")
                        }
                        return d.join("")
                    }
                    return a + "." + this.definitions.join("; " + a + ".")
                };
                Mb.prototype.toString = function () {
                    var a = g({}, this.params.getNames()), b = C;
                    C = function (d) {
                        return a.hasOwnProperty(d.name) ? d.name : b(d)
                    };
                    var d = "function $constr_" + this.params.params.length + this.params.toString(), c = this.params.prependMethodArgs(this.body.toString());
                    /\$(superCstr|constr)\b/.test(c) || (c = "{\n$superCstr();\n" + c.substring(1));
                    C = b;
                    return d + c + "\n"
                };
                Ka.prototype.getMembers = function (a, b, d) {
                    this.owner.base && this.owner.base.body.getMembers(a, b, d);
                    var c, f, e, g;
                    c = 0;
                    for (e = this.fields.length; c < e; ++c) {
                        var h = this.fields[c].getNames();
                        f = 0;
                        for (g = h.length; f < g; ++f)a[h[f]] = this.fields[c]
                    }
                    c = 0;
                    for (e = this.methodsNames.length; c < e; ++c)b[this.methodsNames[c]] = !0;
                    c = 0;
                    for (e = this.innerClasses.length; c < e; ++c)a = this.innerClasses[c], d[a.name] = a
                };
                Ka.prototype.toString = function () {
                    for (var a =
                        this.owner, b = 0; a;)++b, a = a.scope;
                    var a = this.name, d = b = "";
                    this.getMembers({}, {}, {});
                    var c, f;
                    if (this.owner.interfaces) {
                        var e = [], g;
                        c = 0;
                        for (f = this.interfacesNames.length; c < f; ++c)this.owner.interfaces[c] && (g = C({name: this.interfacesNames[c]}), e.push(g), b += "$p.extendInterfaceMembers(" + a + ", " + g + ");\n");
                        d += a + ".$interfaces = [" + e.join(", ") + "];\n"
                    }
                    d = d + (a + ".$isInterface = true;\n") + (a + ".$methods = ['" + this.methodsNames.join("', '") + "'];\n");
                    Ta(this.innerClasses);
                    c = 0;
                    for (f = this.innerClasses.length; c < f; ++c)e = this.innerClasses[c],
                        e.isStatic && (b += a + "." + e.name + " = " + e + ";\n");
                    c = 0;
                    for (f = this.fields.length; c < f; ++c)e = this.fields[c], e.isStatic && (b += a + "." + e.definitions.join(";\n" + a + ".") + ";\n");
                    return"(function() {\nfunction " + a + "() { throw 'Unable to create the interface'; }\n" + b + d + "return " + a + ";\n})()"
                };
                eb = function (a, b, c) {
                    a = a.substring(1, a.length - 1);
                    a = v(a);
                    a = y(a, b);
                    var f = [], e = [];
                    a = a.replace(/"([DE])(\d+)"/g, function (a, b, d) {
                        "D" === b ? f.push(d) : "E" === b && e.push(d);
                        return""
                    });
                    a = a.split(/;(?:\s*;)*/g);
                    var g, h;
                    c !== p && (g = c.replace(/^\s*extends\s+(.+?)\s*$/g,
                        "$1").split(/\s*,\s*/g));
                    c = 0;
                    for (h = f.length; c < h; ++c) {
                        var k = fb(N[f[c]]);
                        f[c] = k.name
                    }
                    c = 0;
                    for (h = a.length - 1; c < h; ++c)k = d(a[c]), a[c] = Ua(k.middle);
                    k = a.pop();
                    c = 0;
                    for (h = e.length; c < h; ++c)e[c] = Jb(N[e[c]]);
                    return new Ka(b, g, f, a, e, {tail: k})
                };
                H.prototype.getMembers = function (a, b, d) {
                    this.owner.base && this.owner.base.body.getMembers(a, b, d);
                    var c, f, e, g;
                    c = 0;
                    for (e = this.fields.length; c < e; ++c) {
                        var h = this.fields[c].getNames();
                        f = 0;
                        for (g = h.length; f < g; ++f)a[h[f]] = this.fields[c]
                    }
                    c = 0;
                    for (e = this.methods.length; c < e; ++c)a = this.methods[c],
                        b[a.name] = a;
                    c = 0;
                    for (e = this.innerClasses.length; c < e; ++c)b = this.innerClasses[c], d[b.name] = b
                };
                H.prototype.toString = function () {
                    var a = "$this_" + function (a) {
                        for (var b = 0; a;)++b, a = a.scope;
                        return b
                    }(this.owner), b = this.name, d = "var " + a + " = this;\n", f = "", e = "", g = {}, h = {}, k = {};
                    this.getMembers(g, h, k);
                    var m = C;
                    C = function (d) {
                        var c = d.name;
                        return"this" === c ? d.callSign || !d.member ? a + ".$self" : a : g.hasOwnProperty(c) ? g[c].isStatic ? b + "." + c : a + "." + c : k.hasOwnProperty(c) ? a + "." + c : h.hasOwnProperty(c) ? h[c].isStatic ? b + "." + c : a + ".$self." +
                            c : m(d)
                    };
                    var p;
                    this.baseClassName ? (p = m({name: this.baseClassName}), d = d + ("var $super = { $upcast: " + a + " };\n") + ("function $superCstr(){" + p + ".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"), e += b + ".$base = " + p + ";\n") : d += "function $superCstr(){$p.extendClassChain(" + a + ")}\n";
                    this.owner.base && (f += "$p.extendStaticMembers(" + b + ", " + p + ");\n");
                    var l, n, r;
                    if (this.owner.interfaces) {
                        n = [];
                        p = 0;
                        for (l = this.interfacesNames.length; p < l; ++p)this.owner.interfaces[p] && (r = m({name: this.interfacesNames[p]}),
                            n.push(r), f += "$p.extendInterfaceMembers(" + b + ", " + r + ");\n");
                        e += b + ".$interfaces = [" + n.join(", ") + "];\n"
                    }
                    0 < this.functions.length && (d += this.functions.join("\n") + "\n");
                    Ta(this.innerClasses);
                    p = 0;
                    for (l = this.innerClasses.length; p < l; ++p)n = this.innerClasses[p], n.isStatic ? (f += b + "." + n.name + " = " + n + ";\n", d += a + "." + n.name + " = " + b + "." + n.name + ";\n") : d += a + "." + n.name + " = " + n + ";\n";
                    p = 0;
                    for (l = this.fields.length; p < l; ++p) {
                        var v = this.fields[p];
                        if (v.isStatic)for (f += b + "." + v.definitions.join(";\n" + b + ".") + ";\n", n = 0, r = v.definitions.length; n <
                            r; ++n)var u = v.definitions[n].name, q = b + "." + u, d = d + ("$p.defineProperty(" + a + ", '" + u + "', {get: function(){return " + q + "}, set: function(val){" + q + " = val}});\n"); else d += a + "." + v.definitions.join(";\n" + a + ".") + ";\n"
                    }
                    n = {};
                    p = 0;
                    for (l = this.methods.length; p < l; ++p)r = this.methods[p], v = n[r.name], u = r.name + "$" + r.params.params.length, q = !!r.params.methodArgsParam, v ? (++v, u += "_" + v) : v = 1, r.methodId = u, n[r.name] = v, r.isStatic ? (f += r, f += "$p.addMethod(" + b + ", '" + r.name + "', " + u + ", " + q + ");\n") : d += r, d += "$p.addMethod(" + a + ", '" + r.name +
                        "', " + u + ", " + q + ");\n";
                    d += c(this.misc.tail);
                    0 < this.cstrs.length && (d += this.cstrs.join("\n") + "\n");
                    d += "function $constr() {\n";
                    n = [];
                    p = 0;
                    for (l = this.cstrs.length; p < l; ++p)r = this.cstrs[p].params.params.length, n.push("if(arguments.length " + (this.cstrs[p].params.methodArgsParam ? ">=" : "===") + " " + r + ") { $constr_" + r + ".apply(" + a + ", arguments); }");
                    0 < n.length && (d += n.join(" else ") + " else ");
                    d += "$superCstr();\n}\n";
                    d += "$constr.apply(null, arguments);\n";
                    C = m;
                    return"(function() {\nfunction " + b + "() {\n" + d + "}\n" + f + e +
                        "return " + b + ";\n})()"
                };
                ea = function (a, b, c, f) {
                    a = a.substring(1, a.length - 1);
                    a = v(a);
                    a = y(a, b);
                    var e = [], g = [], h = [], k = [];
                    a = a.replace(/"([DEGH])(\d+)"/g, function (a, b, d) {
                        "D" === b ? e.push(d) : "E" === b ? g.push(d) : "H" === b ? k.push(d) : h.push(d);
                        return""
                    });
                    a = a.replace(/^(?:\s*;)+/, "").split(/;(?:\s*;)*/g);
                    var m, n;
                    c !== p && (m = c.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g, "$1"));
                    f !== p && (n = f.replace(/^\s*implements\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g));
                    for (c = 0; c < k.length; ++c)k[c] = U(N[k[c]]);
                    for (c = 0; c < e.length; ++c)e[c] = fb(N[e[c]]);
                    for (c = 0; c < a.length - 1; ++c)f = d(a[c]), a[c] = Ua(f.middle);
                    f = a.pop();
                    for (c = 0; c < h.length; ++c)h[c] = ac(N[h[c]]);
                    for (c = 0; c < g.length; ++c)g[c] = Jb(N[g[c]]);
                    return new H(b, m, n, k, e, a, h, g, {tail: f})
                };
                lb.prototype.toString = function () {
                    return"var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
                };
                mb.prototype.toString = function () {
                    return"var " + this.name + " = " + this.body + ";\n$p." + this.name + " = " + this.name + ";\n"
                };
                ub.prototype.toString = function () {
                    var a = g({}, this.params.getNames()),
                        b = C;
                    C = function (d) {
                        return a.hasOwnProperty(d.name) ? d.name : b(d)
                    };
                    var d = this.params.prependMethodArgs(this.body.toString()), d = "function " + this.name + this.params + " " + d + "\n$p." + this.name + " = " + this.name + ";\n" + this.name + " = " + this.name + ".bind($p);";
                    C = b;
                    return d
                };
                Ob.prototype.toString = function () {
                    return this.misc.prefix + this.argument.toString()
                };
                bc.prototype.toString = function () {
                    return this.misc.prefix + this.argument.toString()
                };
                T.prototype.toString = function () {
                    var a = this.misc.prefix;
                    this.argument !== p && (a += this.argument.toString());
                    return a
                };
                Pb.prototype.toString = function () {
                    return"case " + this.expr + ":"
                };
                vb.prototype.toString = function () {
                    return this.label
                };
                Da = function (a, b, f) {
                    var e = RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g), g = [];
                    a = a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g, "$1");
                    for (var h = 0, k, m; null !== (k = e.exec(a));) {
                        if (k[1] !== p)m = a.lastIndexOf('"B', e.lastIndex), h = a.substring(h,
                            m), "for" === k[1] ? g.push(new Ob(za(N[k[2]]), {prefix: h})) : "catch" === k[1] ? g.push(new bc(K(N[k[2]]), {prefix: h})) : g.push(new T(k[1], ma(N[k[2]]), {prefix: h})); else if (k[3] !== p)g.push(new T(k[3], p, {prefix: a.substring(h, e.lastIndex)})); else if (k[4] !== p) {
                            m = a.substring(h, e.lastIndex - k[4].length);
                            if (0 !== c(m).length)continue;
                            g.push(m);
                            h = k[4].charAt(1);
                            k = k[5];
                            "D" === h ? g.push(b(N[k])) : "E" === h ? g.push(f(N[k])) : "H" === h ? g.push(U(N[k])) : g.push(ra(N[k]))
                        } else if (k[6] !== p)g.push(new Pb(ma(c(k[7])))); else if (k[8] !== p) {
                            m =
                                a.substring(h, e.lastIndex - k[8].length);
                            if (0 !== c(m).length)continue;
                            g.push(new vb(a.substring(h, e.lastIndex)))
                        } else k = d(a.substring(h, e.lastIndex - 1)), g.push(k.left), g.push(db(k.middle)), g.push(k.right + ";");
                        h = e.lastIndex
                    }
                    b = d(a.substring(h));
                    g.push(b.left);
                    "" !== b.middle && (g.push(db(b.middle)), g.push(";" + b.right));
                    return g
                };
                h.prototype.toString = function () {
                    var a = f(this.statements), b = C;
                    k(a) || (C = function (d) {
                        return a.hasOwnProperty(d.name) ? d.name : b(d)
                    });
                    var d = "{\n" + this.statements.join("") + "\n}";
                    C = b;
                    return d
                };
                ra = function (a) {
                    a = d(a.substring(1, a.length - 1));
                    return new h(Da(a.middle))
                };
                da.prototype.toString = function () {
                    for (var a = [], d = [], c, g = 0, h = this.statements.length; g < h; ++g)c = this.statements[g], c instanceof mb || c instanceof lb ? a.push(c) : d.push(c);
                    Ta(a);
                    var k = f(this.statements);
                    C = function (a) {
                        a = a.name;
                        return k.hasOwnProperty(a) ? a : ha.hasOwnProperty(a) || e.hasOwnProperty(a) || b.hasOwnProperty(a) ? "$p." + a : a
                    };
                    a = "// this code was autogenerated from PJS\n(function($p) {\n" + a.join("") + "\n" + d.join("") + "\n})";
                    C = null;
                    return a
                };
                a = function () {
                    var a = v(N[0]), a = a.replace(/\bimport\s+[^;]+;/g, "");
                    return new da(Da(a, rc, Nb))
                }();
                (function (a) {
                    function b(a, c) {
                        for (var f = c.split("."), e = a.scope, g; e;) {
                            if (e.hasOwnProperty(f[0])) {
                                g = e[f[0]];
                                break
                            }
                            e = e.scope
                        }
                        g === p && (g = d[f[0]]);
                        for (var e = 1, h = f.length; e < h && g; ++e)g = g.inScope[f[e]];
                        return g
                    }

                    var d = {}, c;
                    for (c in Y)if (Y.hasOwnProperty(c)) {
                        a = Y[c];
                        var f = a.scopeId, e = a.name;
                        f ? (f = Y[f], a.scope = f, f.inScope === p && (f.inScope = {}), f.inScope[e] = a) : d[e] = a
                    }
                    for (c in Y)if (Y.hasOwnProperty(c)) {
                        a = Y[c];
                        if (e = a.body.baseClassName)if (e =
                            b(a, e))a.base = e, e.derived || (e.derived = []), e.derived.push(a);
                        var e = a.body.interfacesNames, f = [], g, h;
                        if (e && 0 < e.length) {
                            g = 0;
                            for (h = e.length; g < h; ++g) {
                                var k = b(a, e[g]);
                                f.push(k);
                                k && (k.derived || (k.derived = []), k.derived.push(a))
                            }
                            0 < f.length && (a.interfaces = f)
                        }
                    }
                })(a);
                (function (a) {
                    function b(a, c) {
                        var f = d[a];
                        if (!f)return!1;
                        var e = f.indexOf(c);
                        if (0 > e)return!1;
                        f.splice(e, 1);
                        if (0 < f.length)return!1;
                        delete d[a];
                        return!0
                    }

                    a = [];
                    var d = {}, c, f, e;
                    for (c in Y)if (Y.hasOwnProperty(c))if (e = Y[c], e.inScope || e.derived) {
                        var g = [];
                        if (e.inScope)for (f in e.inScope)e.inScope.hasOwnProperty(f) &&
                        g.push(e.inScope[f]);
                        e.derived && (g = g.concat(e.derived));
                        d[c] = g
                    } else a.push(c), e.weight = 0;
                    for (; 0 < a.length;)if (c = a.shift(), e = Y[c], e.scopeId && b(e.scopeId, e) && (a.push(e.scopeId), Y[e.scopeId].weight = e.weight + 1), e.base && b(e.base.classId, e) && (a.push(e.base.classId), e.base.weight = e.weight + 1), e.interfaces)for (c = 0, f = e.interfaces.length; c < f; ++c)e.interfaces[c] && b(e.interfaces[c].classId, e) && (a.push(e.interfaces[c].classId), e.interfaces[c].weight = e.weight + 1)
                })(a);
                a = a.toString();
                a = a.replace(/\s*\n(?:[\t ]*\n)+/g,
                    "\n\n");
                a = a.replace(/__x([0-9A-F]{4})/g, function (a, b) {
                    return String.fromCharCode(parseInt(b, 16))
                });
                return function (a, b) {
                    return a.replace(/'(\d+)'/g, function (a, d) {
                        var c = b[d];
                        return"/" === c.charAt(0) ? c : /^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(c) ? "(new $p.Character(" + c + "))" : c
                    })
                }(a, R)
            }

            function a(a, b) {
                var c = RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);
                if (c && 2 === c.length)for (var e = [], c = c.splice(1, 2)[0].replace(/\{([\s\S]*?)\}/g, function () {
                    return function (a, b) {
                        e.push(b);
                        return"{" + (e.length -
                            1) + "}"
                    }
                }()).replace("\n", "").replace("\r", "").split(";"), g = function (a) {
                    return a.replace(/^\s*["']?/, "").replace(/["']?\s*$/, "")
                }, k = 0, m = c.length; k < m; k++) {
                    var p = c[k].split("=");
                    if (p && 2 === p.length) {
                        var n = g(p[0]), l = g(p[1]), p = [];
                        if ("preload" === n)for (p = l.split(","), n = 0, l = p.length; n < l; n++) {
                            var y = g(p[n]);
                            b.imageCache.add(y)
                        } else if ("font" === n)for (p = l.split(","), n = 0, l = p.length; n < l; n++) {
                            var y = g(p[n]), D = /^\{(\d*?)\}$/.exec(y);
                            PFont.preloading.add(D ? JSON.parse("{" + e[D[1]] + "}") : y)
                        } else"pauseOnBlur" === n ? b.options.pauseOnBlur =
                            "true" === l : "globalKeyEvents" === n ? b.options.globalKeyEvents = "true" === l : "param-" === n.substring(0, 6) ? b.params[n.substring(6)] = l : b.options[n] = l
                    }
                }
                return a
            }

            var b = g.defaultScope, e = b.PConstants, c = g.aFunctions, m = g.Browser.document, p;
            k.compile = function (b) {
                var d = new k.Sketch;
                b = a(b, d);
                b = l(b);
                d.sourceCode = b;
                return d
            };
            k.logger = new function (a) {
                var b = {BufferMax: 200};
                b.wrapper = a.createElement("div");
                b.wrapper.setAttribute("style", "opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
                b.dragger = a.createElement("div");
                b.dragger.setAttribute("style", "display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");
                b.closer = a.createElement("div");
                b.closer.onmouseover = function () {
                    b.closer.style.setProperty("background-color", "#ccc")
                };
                b.closer.onmouseout = function () {
                    b.closer.style.setProperty("background-color", "#ddd")
                };
                b.closer.innerHTML = "&#10006;";
                b.closer.setAttribute("style", "opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
                b.javaconsole = a.createElement("div");
                b.javaconsole.setAttribute("style", "overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");
                b.wrapper.appendChild(b.dragger);
                b.wrapper.appendChild(b.javaconsole);
                b.wrapper.appendChild(b.closer);
                b.dragger.onmousedown = function (c) {
                    b.divheight = b.wrapper.style.height;
                    a.selection ? a.selection.empty() : window.getSelection().removeAllRanges();
                    var e = c.screenY;
                    window.onmousemove = function (a) {
                        b.wrapper.style.height =
                            parseFloat(b.divheight) + (e - a.screenY) + "px";
                        b.javaconsole.style.height = parseFloat(b.divheight) + (e - a.screenY) - 10 + "px"
                    };
                    window.onmouseup = function (c) {
                        a.selection ? a.selection.empty() : window.getSelection().removeAllRanges();
                        b.wrapper.style.height = parseFloat(b.divheight) + (e - c.screenY) + "px";
                        b.javaconsole.style.height = parseFloat(b.divheight) + (e - c.screenY) - 10 + "px";
                        window.onmousemove = null;
                        window.onmouseup = null
                    }
                };
                b.BufferArray = [];
                b.print = b.log = function (a) {
                    b.BufferArray[b.BufferArray.length - 1] ? b.BufferArray[b.BufferArray.length -
                        1] += a + "" : b.BufferArray.push(a);
                    b.javaconsole.innerHTML = b.BufferArray.join("");
                    "hidden" === b.wrapper.style.visibility && (b.wrapper.style.visibility = "visible");
                    "hidden" === b.wrapper.style.visibility && (b.wrapper.style.visibility = "visible")
                };
                b.println = function (c) {
                    a.body.appendChild(b.wrapper);
                    b.print(c);
                    b.BufferArray.push("<br/>");
                    b.javaconsole.innerHTML = b.BufferArray.join("");
                    "hidden" === b.wrapper.style.visibility && (b.wrapper.style.visibility = "visible");
                    b.BufferArray.length > b.BufferMax ? b.BufferArray.splice(0,
                        1) : b.javaconsole.scrollTop = b.javaconsole.scrollHeight;
                    "hidden" === b.wrapper.style.visibility && (b.wrapper.style.visibility = "visible")
                };
                b.showconsole = function () {
                    b.wrapper.style.visibility = "visible"
                };
                b.hideconsole = function () {
                    b.wrapper.style.visibility = "hidden"
                };
                b.closer.onclick = function () {
                    b.hideconsole()
                };
                b.hideconsole();
                return b
            }(m);
            return k
        }
    }, {}], 26: [function (D, y, Q) {
        y.exports = function (k, g) {
            function n(a, b) {
                return a in m ? m[a] : "function" === typeof m[b] ? m[b] : function (a) {
                    if (a instanceof Array)return a;
                    if ("number" === typeof a) {
                        var b = [];
                        b.length = a;
                        return b
                    }
                }
            }

            var l = k.defaultScope, a = k.extend, b = k.Browser, e = b.ajax, c = b.navigator, m = b.window, p = b.document, r = k.noop, d = l.PConstants;
            PFont = l.PFont;
            PShapeSVG = l.PShapeSVG;
            PVector = l.PVector;
            Char = Character = l.Char;
            ObjectIterator = l.ObjectIterator;
            XMLElement = l.XMLElement;
            XML = l.XML;
            var y = m.HTMLCanvasElement, D = m.HTMLImageElement, G = m.localStorage;
            p.head || (p.head = p.getElementsByTagName("head")[0]);
            var A = n("Float32Array", "WebGLFloatArray"), Q = n("Int32Array", "WebGLIntArray"), v = n("Uint16Array",
                "WebGLUnsignedShortArray"), fa = n("Uint8Array", "WebGLUnsignedByteArray");
            if (9 <= p.documentMode && !p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";
            var q = [], Yb = {}, K = this.Processing = function (b, k, n) {
                function Ia(a, b, x) {
                    a.addEventListener ? a.addEventListener(b, x, !1) : a.attachEvent("on" + b, x);
                    vb.push({elem: a, type: b, fn: x})
                }

                function U(a, b, x, S) {
                    var d = Fa.locations[a];
                    d === g && (d = h.getUniformLocation(b, x), Fa.locations[a] = d);
                    null !== d &&
                    (4 === S.length ? h.uniform4fv(d, S) : 3 === S.length ? h.uniform3fv(d, S) : 2 === S.length ? h.uniform2fv(d, S) : h.uniform1f(d, S))
                }

                function Z(a, b, x, S) {
                    var d = Fa.locations[a];
                    d === g && (d = h.getUniformLocation(b, x), Fa.locations[a] = d);
                    null !== d && (4 === S.length ? h.uniform4iv(d, S) : 3 === S.length ? h.uniform3iv(d, S) : 2 === S.length ? h.uniform2iv(d, S) : h.uniform1i(d, S))
                }

                function V(a, b, x, S, d) {
                    var c = Fa.locations[a];
                    c === g && (c = h.getUniformLocation(b, x), Fa.locations[a] = c);
                    -1 !== c && (16 === d.length ? h.uniformMatrix4fv(c, S, d) : 9 === d.length ? h.uniformMatrix3fv(c,
                        S, d) : h.uniformMatrix2fv(c, S, d))
                }

                function $(a, b, x, S, d) {
                    var c = Fa.attributes[a];
                    c === g && (c = h.getAttribLocation(b, x), Fa.attributes[a] = c);
                    -1 !== c && (h.bindBuffer(h.ARRAY_BUFFER, d), h.vertexAttribPointer(c, S, h.FLOAT, !1, 0, 0), h.enableVertexAttribArray(c))
                }

                function sa(a, b, x) {
                    var d = Fa.attributes[a];
                    d === g && (d = h.getAttribLocation(b, x), Fa.attributes[a] = d);
                    -1 !== d && h.disableVertexAttribArray(d)
                }

                function ta(a, b, x, S) {
                    Va === d.HSB ? (x = f.color.toRGB(a, b, x), a = x[0], b = x[1], x = x[2]) : (a = Math.round(255 * (a / xa)), b = Math.round(255 * (b /
                        Ea)), x = Math.round(255 * (x / ya)));
                    S = Math.round(255 * (S / ia));
                    a = 0 > a ? 0 : a;
                    b = 0 > b ? 0 : b;
                    x = 0 > x ? 0 : x;
                    S = 0 > S ? 0 : S;
                    return(255 < S ? 255 : S) << 24 & d.ALPHA_MASK | (255 < a ? 255 : a) << 16 & d.RED_MASK | (255 < b ? 255 : b) << 8 & d.GREEN_MASK | (255 < x ? 255 : x) & d.BLUE_MASK
                }

                function $b(a) {
                    if (a <= xa && 0 <= a) {
                        if (Va === d.RGB)return ta(a, a, a, ia);
                        if (Va === d.HSB)return ta(0, 0, a / xa * ya, ia)
                    }
                    if (a)return 2147483647 < a && (a -= 4294967296), a
                }

                function bb(a) {
                    var b, x, S;
                    b = ((a & d.RED_MASK) >>> 16) / 255;
                    x = ((a & d.GREEN_MASK) >>> 8) / 255;
                    S = (a & d.BLUE_MASK) / 255;
                    a = f.max(f.max(b, x), S);
                    var c = f.min(f.min(b,
                        x), S);
                    if (c === a)return[0, 0, a * ya];
                    b = (b === a ? (x - S) / (a - c) : x === a ? 2 + (S - b) / (a - c) : 4 + (b - x) / (a - c)) / 6;
                    0 > b ? b += 1 : 1 < b && (b -= 1);
                    return[b * xa, (a - c) / a * Ea, a * ya]
                }

                function Sa() {
                    h.restore();
                    N = ab = !0
                }

                function cb() {
                    var a = (Date.now() - tc) / 1E3;
                    ec++;
                    var b = ec / a;
                    0.5 < a && (tc = Date.now(), ec = 0, f.__frameRate = b);
                    f.frameCount++
                }

                function Eb(a) {
                    a = parseInt("0x" + a, 16);
                    2147483647 < a && (a -= 4294967296);
                    return a
                }

                function db(a) {
                    if ("number" === typeof a)return 0 !== a;
                    if ("boolean" === typeof a)return a;
                    if ("string" === typeof a)return"true" === a.toLowerCase();
                    if (a instanceof Char)return 49 === a.code || 84 === a.code || 116 === a.code
                }

                function Gb(a) {
                    if ("number" === typeof a)return a;
                    if ("boolean" === typeof a)return a ? 1 : 0;
                    if ("string" === typeof a)return parseFloat(a);
                    if (a instanceof Char)return a.code
                }

                function Hb(a, b) {
                    if ("number" === typeof a)return a & 4294967295;
                    if ("boolean" === typeof a)return a ? 1 : 0;
                    if ("string" === typeof a)return parseInt(a, b || 10) & 4294967295;
                    if (a instanceof Char)return a.code
                }

                function wa() {
                    R && (N && (h.fillStyle = f.color.toString(La), N = !1), h.fill())
                }

                function za() {
                    C &&
                    (ab && (h.strokeStyle = f.color.toString(ja), ab = !1), h.stroke())
                }

                function Ta() {
                    wa();
                    za();
                    h.closePath()
                }

                function Ja(a, b, x) {
                    var d = Mc.shift();
                    d === g && (d = {}, d.canvas = p.createElement("canvas"), d.context = d.canvas.getContext("2d"));
                    Mc.push(d);
                    var c = d.canvas, f = d.context;
                    b = b || a.width;
                    x = x || a.height;
                    c.width = b;
                    c.height = x;
                    a ? "data"in a ? f.putImageData(a, 0, 0) : (f.clearRect(0, 0, b, x), f.drawImage(a, 0, 0, b, x)) : f.clearRect(0, 0, b, x);
                    return d
                }

                function Ib(a) {
                    return{getLength: function (a) {
                        return function () {
                            if (a.isRemote)throw"Image is loaded remotely. Cannot get length.";
                            return a.imageData.data.length ? a.imageData.data.length / 4 : 0
                        }
                    }(a), getPixel: function (a) {
                        return function (L) {
                            L *= 4;
                            var b = a.imageData.data;
                            if (a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";
                            return b[L + 3] << 24 & d.ALPHA_MASK | b[L] << 16 & d.RED_MASK | b[L + 1] << 8 & d.GREEN_MASK | b[L + 2] & d.BLUE_MASK
                        }
                    }(a), setPixel: function (a) {
                        return function (L, b) {
                            var c = 4 * L, f = a.imageData.data;
                            if (a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";
                            f[c + 0] = (b & d.RED_MASK) >>> 16;
                            f[c + 1] = (b & d.GREEN_MASK) >>> 8;
                            f[c + 2] = b & d.BLUE_MASK;
                            f[c + 3] = (b & d.ALPHA_MASK) >>> 24;
                            a.__isDirty = !0
                        }
                    }(a), toArray: function (a) {
                        return function () {
                            var L = [], b = a.imageData.data, c = a.width * a.height;
                            if (a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";
                            for (var f = 0, e = 0; f < c; f++, e += 4)L.push(b[e + 3] << 24 & d.ALPHA_MASK | b[e] << 16 & d.RED_MASK | b[e + 1] << 8 & d.GREEN_MASK | b[e + 2] & d.BLUE_MASK);
                            return L
                        }
                    }(a), set: function (a) {
                        return function (L) {
                            var b, c, f;
                            if (this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";
                            c = a.imageData.data;
                            for (var e = 0, g = L.length; e < g; e++)f =
                                L[e], b = 4 * e, c[b + 0] = (f & d.RED_MASK) >>> 16, c[b + 1] = (f & d.GREEN_MASK) >>> 8, c[b + 2] = f & d.BLUE_MASK, c[b + 3] = (f & d.ALPHA_MASK) >>> 24;
                            a.__isDirty = !0
                        }
                    }(a)}
                }

                function Jb(a, b, x, c) {
                    var e = new Ga(x, c, d.ARGB);
                    e.fromImageData(f.toImageData(a, b, x, c));
                    return e
                }

                function Kb(a, b, x, c, f) {
                    if (f.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";
                    var e = new Ga(x, c, d.ARGB), g = e.imageData.data, h = f.width, s = f.height;
                    f = f.imageData.data;
                    var k = Math.max(0, -b), m = Math.max(0, -a);
                    c = Math.min(c, s - b);
                    for (s = Math.min(x, h - a); k < c; ++k)for (var n =
                        4 * ((b + k) * h + (a + m)), p = 4 * (k * x + m), l = m; l < s; ++l)g[p++] = f[n++], g[p++] = f[n++], g[p++] = f[n++], g[p++] = f[n++];
                    e.__isDirty = !0;
                    return e
                }

                function fb() {
                    Qb && (h = Nc, Qb = !1, f.updatePixels())
                }

                function Lb() {
                    function a(L, b) {
                        L[b] = function () {
                            fb();
                            h[b].apply(h, arguments)
                        }
                    }

                    function b(a, L) {
                        f.defineProperty(a, L, {get: function () {
                            fb();
                            return h[L]
                        }, set: function (a) {
                            fb();
                            h[L] = a
                        }})
                    }

                    for (var x in h)"function" === typeof h[x] ? a(this, x) : b(this, x)
                }

                function Ua(a) {
                    return a instanceof String ? a : "number" === typeof a ? a === (0 | a) ? a.toString() : f.nf(a,
                        0, 3) : null === a || a === g ? "" : a.toString()
                }

                function Mb(a, b, x, c) {
                    var f;
                    0 > a.indexOf("\n") ? (a = [a], f = 1) : (a = a.split(/\r?\n/g), f = a.length);
                    var e = 0;
                    Wa === d.TOP ? e = Xa + Ma : Wa === d.CENTER ? e = Xa / 2 - (f - 1) * Aa / 2 : Wa === d.BOTTOM && (e = -(Ma + (f - 1) * Aa));
                    for (var g = 0; g < f; ++g)ha.text$line(a[g], b, x + e, c, nb), e += Aa
                }

                function ac(a, b, x, c, f, e) {
                    if (0 !== a.length && (0 !== c && 0 !== f) && !(Na > f)) {
                        for (var g = -1, h = 0, s = 0, k = [], m = 0, n = a.length; m < n; m++) {
                            var p = a[m], l = " " === p, r = ba.measureTextWidth(p);
                            if ("\n" !== p && s + r <= c)l && (g = m), s += r; else {
                                if (g + 1 === h)if (0 < m)g = m; else return;
                                "\n" === p ? (k.push({text: a.substring(h, m), width: s}), h = m + 1) : (k.push({text: a.substring(h, g + 1), width: s}), h = g + 1);
                                s = 0;
                                m = h - 1
                            }
                        }
                        h < n && k.push({text: a.substring(h), width: s});
                        a = 1;
                        g = Xa;
                        nb === d.CENTER ? a = c / 2 : nb === d.RIGHT && (a = c);
                        c = k.length;
                        h = Math.min(c, Math.floor(f / Aa));
                        Wa === d.TOP ? g = Xa + Ma : Wa === d.CENTER ? g = f / 2 - Aa * (h / 2 - 1) : Wa === d.BOTTOM && (g = Ma + Aa);
                        for (h = 0; h < c; h++) {
                            m = h * Aa;
                            if (g + m > f - Ma)break;
                            s = k[h];
                            ha.text$line(s.text, b + a, x + g + m, e, nb)
                        }
                    }
                }

                function Ka(a) {
                    ha = "3D" === a ? new B : "2D" === a ? new E : new F;
                    for (var b in F.prototype)F.prototype.hasOwnProperty(b) &&
                        0 > b.indexOf("$") && (f[b] = ha[b]);
                    ha.$init()
                }

                function H(a) {
                    return function () {
                        Ka("2D");
                        return ha[a].apply(this, arguments)
                    }
                }

                function lb(a) {
                    a = a.which || a.keyCode;
                    switch (a) {
                        case 13:
                            return 10;
                        case 91:
                        case 93:
                        case 224:
                            return 157;
                        case 57392:
                            return 17;
                        case 46:
                            return 127;
                        case 45:
                            return 155
                    }
                    return a
                }

                function mb(a) {
                    "function" === typeof a.preventDefault ? a.preventDefault() : "function" === typeof a.stopPropagation && a.stopPropagation();
                    return!1
                }

                function Nb() {
                    for (var a in hb)if (hb.hasOwnProperty(a)) {
                        f.__keyPressed = !0;
                        return
                    }
                    f.__keyPressed = !1
                }

                function ub(a, b) {
                    hb[a] = b;
                    ob = null;
                    f.key = b;
                    f.keyCode = a;
                    f.keyPressed();
                    f.keyCode = 0;
                    f.keyTyped();
                    Nb()
                }

                function rc(a) {
                    var b = lb(a);
                    if (b === d.DELETE)ub(b, new Char(127)); else if (0 > qd.indexOf(b))ob = b; else {
                        var x = new Char(d.CODED);
                        f.key = x;
                        f.keyCode = b;
                        hb[b] = x;
                        f.keyPressed();
                        ob = null;
                        Nb();
                        return mb(a)
                    }
                }

                function Ob(a) {
                    if (null !== ob) {
                        var b = ob, x;
                        x = a.which || a.keyCode;
                        var d = a.shiftKey || a.ctrlKey || a.altKey || a.metaKey;
                        switch (x) {
                            case 13:
                                x = d ? 13 : 10;
                                break;
                            case 8:
                                x = d ? 127 : 8
                        }
                        x = new Char(x);
                        ub(b, x);
                        return mb(a)
                    }
                }

                function bc(a) {
                    a =
                        lb(a);
                    var b = hb[a];
                    b !== g && (f.key = b, f.keyCode = a, f.keyReleased(), delete hb[a], Nb())
                }

                if (!(this instanceof K))throw"called Processing constructor as if it were a function: missing 'new'.";
                var T = {}, Pb = b === g && k === g, T = Pb ? p.createElement("canvas") : "string" === typeof b ? p.getElementById(b) : b;
                if (!("getContext"in T))throw"called Processing constructor without passing canvas element reference or id.";
                var vb = [], f = this;
                f.Char = f.Character = Char;
                a.withCommonFunctions(f);
                a.withMath(f);
                a.withProxyFunctions(f, function (a) {
                    return Array.prototype.slice.call(a,
                        1)
                });
                a.withTouch(f, T, Ia, p, d);
                n && Object.keys(n).forEach(function (a) {
                    f[a] = n[a]
                });
                f.externals = {canvas: T, context: g, sketch: g, window: m};
                f.name = "Processing.js Instance";
                f.use3DContext = !1;
                f.focused = !1;
                f.breakShape = !1;
                f.glyphTable = {};
                f.pmouseX = 0;
                f.pmouseY = 0;
                f.mouseX = 0;
                f.mouseY = 0;
                f.mouseButton = 0;
                f.mouseScroll = 0;
                f.mouseClicked = g;
                f.mouseDragged = g;
                f.mouseMoved = g;
                f.mousePressed = g;
                f.mouseReleased = g;
                f.mouseScrolled = g;
                f.mouseOver = g;
                f.mouseOut = g;
                f.touchStart = g;
                f.touchEnd = g;
                f.touchMove = g;
                f.touchCancel = g;
                f.key = g;
                f.keyCode =
                    g;
                f.keyPressed = r;
                f.keyReleased = r;
                f.keyTyped = r;
                f.draw = g;
                f.setup = g;
                f.__mousePressed = !1;
                f.__keyPressed = !1;
                f.__frameRate = 60;
                f.frameCount = 0;
                f.width = 100;
                f.height = 100;
                var h, da, ha, R = !0, ka = [1, 1, 1, 1], La = 4294967295, N = !0, C = !0, Y = [0, 0, 0, 1], ja = 4278190080, ab = !0, ea = 1, eb = !1, ra = !1, Da = !0, ma = 0, qa = d.CORNER, la = d.CENTER, Fb = 0, Db = 0, tb = 0, jb = d.NORMAL_MODE_AUTO, Zb = 60, Kc = 1E3 / Zb, od = T.style.cursor, aa = d.POLYGON, oc = 0, pc = 20, Lc = !1, kb = -3355444, qc = 20, ia = 255, xa = 255, Ea = 255, ya = 255, cc = 0, dc = 0, Va = d.RGB, gb = null, sc = null, Oc = Date.now(), tc = Oc, ec =
                        0, Ba, Rb, fc, wb, xb, uc, vc, Fa = {attributes: {}, locations: {}}, z, J, na, wc, xc, yc, gc, zc, Sb, Ac, Pc, Bc, Qc, hc, Rc, Sc, Tc, Uc = 0, Vc = 0, Wc = d.IMAGE, ua = !1, Cc, Dc, Ec, nb = d.LEFT, Wa = d.BASELINE, ic = d.MODEL, yb = "Arial", Na = 12, Xa = 9, Ma = 2, Aa = 14, ba = PFont.get(yb, Na), Nc, Fc = null, Qb = !1, Xc, Yc = 1E3, hb = [], ob = null, qd = [d.SHIFT, d.CONTROL, d.ALT, d.CAPSLK, d.PGUP, d.PGDN, d.END, d.HOME, d.LEFT, d.UP, d.RIGHT, d.DOWN, d.NUMLK, d.INSERT, d.F1, d.F2, d.F3, d.F4, d.F5, d.F6, d.F7, d.F8, d.F9, d.F10, d.F11, d.F12, d.META], O = 0, jc = 0, pb = 0, Oa = [], Pa = [], Qa = [], Tb = new A(d.SINCOS_LENGTH),
                    Ub = new A(d.SINCOS_LENGTH), P, qb, Ra, M, ga, zb, Ab, Vb, Ha, kc = !1, lc = 60 * (Math.PI / 180), Gc = f.width / 2, rb = f.height / 2, sb = rb / Math.tan(lc / 2), Zc = sb / 10, $c = 10 * sb, ad = f.width / f.height, t = [], va = [], oa = 0, Bb = !1, Cb = !1, ib = !0, Wb = d.CORNER, bd = [], cd = new A([0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
                        0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5]), dd = new A([0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5,
                        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]), rd = new A([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), Hc = new A([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]), sd = new A([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), td = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );" +
                        (/Windows/.test(c.userAgent) ? "  spotAttenuation = 1.0; " : "  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
                    Ic = function (a, b, x) {
                        var d = a.createShader(a.VERTEX_SHADER);
                        a.shaderSource(d, b);
                        a.compileShader(d);
                        if (!a.getShaderParameter(d, a.COMPILE_STATUS))throw a.getShaderInfoLog(d);
                        b = a.createShader(a.FRAGMENT_SHADER);
                        a.shaderSource(b, x);
                        a.compileShader(b);
                        if (!a.getShaderParameter(b, a.COMPILE_STATUS))throw a.getShaderInfoLog(b);
                        x = a.createProgram();
                        a.attachShader(x, d);
                        a.attachShader(x, b);
                        a.linkProgram(x);
                        if (!a.getProgramParameter(x, a.LINK_STATUS))throw"Error linking shaders.";
                        return x
                    }, ed = function (a, b, x, d, c) {
                        return{x: a,
                            y: b, w: x, h: d}
                    }, mc = ed, ud = function (a, b, x, d, c) {
                        return{x: a, y: b, w: c ? x : x - a, h: c ? d : d - b}
                    }, vd = function (a, b, x, d, c) {
                        return{x: a - x / 2, y: b - d / 2, w: x, h: d}
                    }, X = function () {
                    }, E = function () {
                    }, B = function () {
                    }, F = function () {
                    };
                E.prototype = new X;
                E.prototype.constructor = E;
                B.prototype = new X;
                B.prototype.constructor = B;
                F.prototype = new X;
                F.prototype.constructor = F;
                X.prototype.a3DOnlyFunction = r;
                f.shape = function (a, b, x, c, e) {
                    1 <= arguments.length && null !== arguments[0] && a.isVisible() && (f.pushMatrix(), Wb === d.CENTER ? 5 === arguments.length ? (f.translate(b -
                        c / 2, x - e / 2), f.scale(c / a.getWidth(), e / a.getHeight())) : 3 === arguments.length ? f.translate(b - a.getWidth() / 2, -a.getHeight() / 2) : f.translate(-a.getWidth() / 2, -a.getHeight() / 2) : Wb === d.CORNER ? 5 === arguments.length ? (f.translate(b, x), f.scale(c / a.getWidth(), e / a.getHeight())) : 3 === arguments.length && f.translate(b, x) : Wb === d.CORNERS && (5 === arguments.length ? (c -= b, e -= x, f.translate(b, x), f.scale(c / a.getWidth(), e / a.getHeight())) : 3 === arguments.length && f.translate(b, x)), a.draw(f), (1 === arguments.length && Wb === d.CENTER || 1 < arguments.length) &&
                        f.popMatrix())
                };
                f.shapeMode = function (a) {
                    Wb = a
                };
                f.loadShape = function (a) {
                    return 1 === arguments.length && -1 < a.indexOf(".svg") ? new PShapeSVG(null, a) : null
                };
                f.loadXML = function (a) {
                    return new XML(f, a)
                };
                var fd = function (a) {
                    for (var b = 0, x = 0; x < a.length; x++)b = 0 !== x ? Math.max(b, Math.abs(a[x])) : Math.abs(a[x]);
                    a = (b + "").indexOf(".");
                    0 === a ? a = 1 : -1 === a && (a = (b + "").length);
                    return a
                }, Ya = f.PMatrix2D = function () {
                    0 === arguments.length ? this.reset() : 1 === arguments.length && arguments[0]instanceof Ya ? this.set(arguments[0].array()) : 6 ===
                        arguments.length && this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                };
                Ya.prototype = {set: function () {
                    if (6 === arguments.length) {
                        var a = arguments;
                        this.set([a[0], a[1], a[2], a[3], a[4], a[5]])
                    } else 1 === arguments.length && arguments[0]instanceof Ya ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0]instanceof Array && (this.elements = arguments[0].slice())
                }, get: function () {
                    var a = new Ya;
                    a.set(this.elements);
                    return a
                }, reset: function () {
                    this.set([1, 0, 0, 0, 1, 0])
                }, array: function () {
                    return this.elements.slice()
                },
                    translate: function (a, b) {
                        this.elements[2] = a * this.elements[0] + b * this.elements[1] + this.elements[2];
                        this.elements[5] = a * this.elements[3] + b * this.elements[4] + this.elements[5]
                    }, invTranslate: function (a, b) {
                        this.translate(-a, -b)
                    }, transpose: function () {
                    }, mult: function (a, b) {
                        var x, d;
                        a instanceof PVector ? (x = a.x, d = a.y, b || (b = new PVector)) : a instanceof Array && (x = a[0], d = a[1], b || (b = []));
                        b instanceof Array ? (b[0] = this.elements[0] * x + this.elements[1] * d + this.elements[2], b[1] = this.elements[3] * x + this.elements[4] * d + this.elements[5]) :
                            b instanceof PVector && (b.x = this.elements[0] * x + this.elements[1] * d + this.elements[2], b.y = this.elements[3] * x + this.elements[4] * d + this.elements[5], b.z = 0);
                        return b
                    }, multX: function (a, b) {
                        return a * this.elements[0] + b * this.elements[1] + this.elements[2]
                    }, multY: function (a, b) {
                        return a * this.elements[3] + b * this.elements[4] + this.elements[5]
                    }, skewX: function (a) {
                        this.apply(1, 0, 1, a, 0, 0)
                    }, skewY: function (a) {
                        this.apply(1, 0, 1, 0, a, 0)
                    }, shearX: function (a) {
                        this.apply(1, 0, 1, Math.tan(a), 0, 0)
                    }, shearY: function (a) {
                        this.apply(1, 0, 1, 0,
                            Math.tan(a), 0)
                    }, determinant: function () {
                        return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
                    }, invert: function () {
                        var a = this.determinant();
                        if (Math.abs(a) > d.MIN_INT) {
                            var b = this.elements[0], x = this.elements[1], c = this.elements[2], f = this.elements[3], e = this.elements[4], g = this.elements[5];
                            this.elements[0] = e / a;
                            this.elements[3] = -f / a;
                            this.elements[1] = -x / a;
                            this.elements[4] = b / a;
                            this.elements[2] = (x * g - e * c) / a;
                            this.elements[5] = (f * c - b * g) / a;
                            return!0
                        }
                        return!1
                    }, scale: function (a, b) {
                        a && !b && (b = a);
                        a &&
                            b && (this.elements[0] *= a, this.elements[1] *= b, this.elements[3] *= a, this.elements[4] *= b)
                    }, invScale: function (a, b) {
                        a && !b && (b = a);
                        this.scale(1 / a, 1 / b)
                    }, apply: function () {
                        var a;
                        1 === arguments.length && arguments[0]instanceof Ya ? a = arguments[0].array() : 6 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                        for (var b = [0, 0, this.elements[2], 0, 0, this.elements[5]], x = 0, d = 0; 2 > d; d++)for (var c = 0; 3 > c; c++, x++)b[x] += this.elements[3 * d + 0] * a[c + 0] + this.elements[3 *
                            d + 1] * a[c + 3];
                        this.elements = b.slice()
                    }, preApply: function () {
                        var a;
                        1 === arguments.length && arguments[0]instanceof Ya ? a = arguments[0].array() : 6 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                        var b = [0, 0, a[2], 0, 0, a[5]];
                        b[2] = a[2] + this.elements[2] * a[0] + this.elements[5] * a[1];
                        b[5] = a[5] + this.elements[2] * a[3] + this.elements[5] * a[4];
                        b[0] = this.elements[0] * a[0] + this.elements[3] * a[1];
                        b[3] = this.elements[0] * a[3] + this.elements[3] * a[4];
                        b[1] =
                            this.elements[1] * a[0] + this.elements[4] * a[1];
                        b[4] = this.elements[1] * a[3] + this.elements[4] * a[4];
                        this.elements = b.slice()
                    }, rotate: function (a) {
                        var b = Math.cos(a);
                        a = Math.sin(a);
                        var x = this.elements[0], d = this.elements[1];
                        this.elements[0] = b * x + a * d;
                        this.elements[1] = -a * x + b * d;
                        x = this.elements[3];
                        d = this.elements[4];
                        this.elements[3] = b * x + a * d;
                        this.elements[4] = -a * x + b * d
                    }, rotateZ: function (a) {
                        this.rotate(a)
                    }, invRotateZ: function (a) {
                        this.rotateZ(a - Math.PI)
                    }, print: function () {
                        var a = fd(this.elements), a = "" + f.nfs(this.elements[0],
                            a, 4) + " " + f.nfs(this.elements[1], a, 4) + " " + f.nfs(this.elements[2], a, 4) + "\n" + f.nfs(this.elements[3], a, 4) + " " + f.nfs(this.elements[4], a, 4) + " " + f.nfs(this.elements[5], a, 4) + "\n\n";
                        f.println(a)
                    }};
                var I = f.PMatrix3D = function () {
                    this.reset()
                };
                I.prototype = {set: function () {
                    16 === arguments.length ? this.elements = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof I ? this.elements = arguments[0].array() : 1 === arguments.length && arguments[0]instanceof Array && (this.elements = arguments[0].slice())
                },
                    get: function () {
                        var a = new I;
                        a.set(this.elements);
                        return a
                    }, reset: function () {
                        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                    }, array: function () {
                        return this.elements.slice()
                    }, translate: function (a, b, x) {
                        x === g && (x = 0);
                        this.elements[3] += a * this.elements[0] + b * this.elements[1] + x * this.elements[2];
                        this.elements[7] += a * this.elements[4] + b * this.elements[5] + x * this.elements[6];
                        this.elements[11] += a * this.elements[8] + b * this.elements[9] + x * this.elements[10];
                        this.elements[15] += a * this.elements[12] + b * this.elements[13] + x * this.elements[14]
                    },
                    transpose: function () {
                        var a = this.elements[4];
                        this.elements[4] = this.elements[1];
                        this.elements[1] = a;
                        a = this.elements[8];
                        this.elements[8] = this.elements[2];
                        this.elements[2] = a;
                        a = this.elements[6];
                        this.elements[6] = this.elements[9];
                        this.elements[9] = a;
                        a = this.elements[3];
                        this.elements[3] = this.elements[12];
                        this.elements[12] = a;
                        a = this.elements[7];
                        this.elements[7] = this.elements[13];
                        this.elements[13] = a;
                        a = this.elements[11];
                        this.elements[11] = this.elements[14];
                        this.elements[14] = a
                    }, mult: function (a, b) {
                        var x, d, c, f;
                        a instanceof
                            PVector ? (x = a.x, d = a.y, c = a.z, f = 1, b || (b = new PVector)) : a instanceof Array && (x = a[0], d = a[1], c = a[2], f = a[3] || 1, !b || 3 !== b.length && 4 !== b.length) && (b = [0, 0, 0]);
                        b instanceof Array && (3 === b.length ? (b[0] = this.elements[0] * x + this.elements[1] * d + this.elements[2] * c + this.elements[3], b[1] = this.elements[4] * x + this.elements[5] * d + this.elements[6] * c + this.elements[7], b[2] = this.elements[8] * x + this.elements[9] * d + this.elements[10] * c + this.elements[11]) : 4 === b.length && (b[0] = this.elements[0] * x + this.elements[1] * d + this.elements[2] * c + this.elements[3] *
                            f, b[1] = this.elements[4] * x + this.elements[5] * d + this.elements[6] * c + this.elements[7] * f, b[2] = this.elements[8] * x + this.elements[9] * d + this.elements[10] * c + this.elements[11] * f, b[3] = this.elements[12] * x + this.elements[13] * d + this.elements[14] * c + this.elements[15] * f));
                        b instanceof PVector && (b.x = this.elements[0] * x + this.elements[1] * d + this.elements[2] * c + this.elements[3], b.y = this.elements[4] * x + this.elements[5] * d + this.elements[6] * c + this.elements[7], b.z = this.elements[8] * x + this.elements[9] * d + this.elements[10] * c + this.elements[11]);
                        return b
                    }, preApply: function () {
                        var a;
                        1 === arguments.length && arguments[0]instanceof I ? a = arguments[0].array() : 16 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                        for (var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], x = 0, d = 0; 4 > d; d++)for (var c = 0; 4 > c; c++, x++)b[x] += this.elements[c + 0] * a[4 * d + 0] + this.elements[c + 4] * a[4 * d + 1] + this.elements[c + 8] * a[4 * d + 2] + this.elements[c + 12] * a[4 * d + 3];
                        this.elements = b.slice()
                    }, apply: function () {
                        var a;
                        1 === arguments.length &&
                            arguments[0]instanceof I ? a = arguments[0].array() : 16 === arguments.length ? a = Array.prototype.slice.call(arguments) : 1 === arguments.length && arguments[0]instanceof Array && (a = arguments[0]);
                        for (var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], x = 0, d = 0; 4 > d; d++)for (var c = 0; 4 > c; c++, x++)b[x] += this.elements[4 * d + 0] * a[c + 0] + this.elements[4 * d + 1] * a[c + 4] + this.elements[4 * d + 2] * a[c + 8] + this.elements[4 * d + 3] * a[c + 12];
                        this.elements = b.slice()
                    }, rotate: function (a, b, x, d) {
                        if (x) {
                            var c = f.cos(a);
                            a = f.sin(a);
                            var e = 1 - c;
                            this.apply(e * b * b + c, e * b * x - a *
                                d, e * b * d + a * x, 0, e * b * x + a * d, e * x * x + c, e * x * d - a * b, 0, e * b * d - a * x, e * x * d + a * b, e * d * d + c, 0, 0, 0, 0, 1)
                        } else this.rotateZ(a)
                    }, invApply: function () {
                        Vb === g && (Vb = new I);
                        var a = arguments;
                        Vb.set(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
                        if (!Vb.invert())return!1;
                        this.preApply(Vb);
                        return!0
                    }, rotateX: function (a) {
                        var b = f.cos(a);
                        a = f.sin(a);
                        this.apply([1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1])
                    }, rotateY: function (a) {
                        var b = f.cos(a);
                        a = f.sin(a);
                        this.apply([b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1])
                    }, rotateZ: function (a) {
                        var b =
                            Math.cos(a);
                        a = Math.sin(a);
                        this.apply([b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                    }, scale: function (a, b, d) {
                        !a || b || d ? a && (b && !d) && (d = 1) : b = d = a;
                        a && (b && d) && (this.elements[0] *= a, this.elements[1] *= b, this.elements[2] *= d, this.elements[4] *= a, this.elements[5] *= b, this.elements[6] *= d, this.elements[8] *= a, this.elements[9] *= b, this.elements[10] *= d, this.elements[12] *= a, this.elements[13] *= b, this.elements[14] *= d)
                    }, skewX: function (a) {
                        a = Math.tan(a);
                        this.apply(1, a, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }, skewY: function (a) {
                        a = Math.tan(a);
                        this.apply(1,
                            0, 0, 0, a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }, shearX: function (a) {
                        a = Math.tan(a);
                        this.apply(1, a, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }, shearY: function (a) {
                        a = Math.tan(a);
                        this.apply(1, 0, 0, 0, a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }, multX: function (a, b, d, c) {
                        return d ? c ? this.elements[0] * a + this.elements[1] * b + this.elements[2] * d + this.elements[3] * c : this.elements[0] * a + this.elements[1] * b + this.elements[2] * d + this.elements[3] : this.elements[0] * a + this.elements[1] * b + this.elements[3]
                    }, multY: function (a, b, d, c) {
                        return d ? c ? this.elements[4] * a + this.elements[5] * b +
                            this.elements[6] * d + this.elements[7] * c : this.elements[4] * a + this.elements[5] * b + this.elements[6] * d + this.elements[7] : this.elements[4] * a + this.elements[5] * b + this.elements[7]
                    }, multZ: function (a, b, d, c) {
                        return c ? this.elements[8] * a + this.elements[9] * b + this.elements[10] * d + this.elements[11] * c : this.elements[8] * a + this.elements[9] * b + this.elements[10] * d + this.elements[11]
                    }, multW: function (a, b, d, c) {
                        return c ? this.elements[12] * a + this.elements[13] * b + this.elements[14] * d + this.elements[15] * c : this.elements[12] * a + this.elements[13] *
                            b + this.elements[14] * d + this.elements[15]
                    }, invert: function () {
                        var a = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4], b = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4], d = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4], c = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5], f = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5], e = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6], g = this.elements[8] *
                            this.elements[13] - this.elements[9] * this.elements[12], h = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12], s = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12], k = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13], m = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13], n = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14], p = a * n - b * m + d * k + c * s - f * h + e * g;
                        if (1E-9 >= Math.abs(p))return!1;
                        var l = [];
                        l[0] = +this.elements[5] *
                            n - this.elements[6] * m + this.elements[7] * k;
                        l[4] = -this.elements[4] * n + this.elements[6] * s - this.elements[7] * h;
                        l[8] = +this.elements[4] * m - this.elements[5] * s + this.elements[7] * g;
                        l[12] = -this.elements[4] * k + this.elements[5] * h - this.elements[6] * g;
                        l[1] = -this.elements[1] * n + this.elements[2] * m - this.elements[3] * k;
                        l[5] = +this.elements[0] * n - this.elements[2] * s + this.elements[3] * h;
                        l[9] = -this.elements[0] * m + this.elements[1] * s - this.elements[3] * g;
                        l[13] = +this.elements[0] * k - this.elements[1] * h + this.elements[2] * g;
                        l[2] = +this.elements[13] *
                            e - this.elements[14] * f + this.elements[15] * c;
                        l[6] = -this.elements[12] * e + this.elements[14] * d - this.elements[15] * b;
                        l[10] = +this.elements[12] * f - this.elements[13] * d + this.elements[15] * a;
                        l[14] = -this.elements[12] * c + this.elements[13] * b - this.elements[14] * a;
                        l[3] = -this.elements[9] * e + this.elements[10] * f - this.elements[11] * c;
                        l[7] = +this.elements[8] * e - this.elements[10] * d + this.elements[11] * b;
                        l[11] = -this.elements[8] * f + this.elements[9] * d - this.elements[11] * a;
                        l[15] = +this.elements[8] * c - this.elements[9] * b + this.elements[10] * a;
                        a = 1 / p;
                        l[0] *= a;
                        l[1] *= a;
                        l[2] *= a;
                        l[3] *= a;
                        l[4] *= a;
                        l[5] *= a;
                        l[6] *= a;
                        l[7] *= a;
                        l[8] *= a;
                        l[9] *= a;
                        l[10] *= a;
                        l[11] *= a;
                        l[12] *= a;
                        l[13] *= a;
                        l[14] *= a;
                        l[15] *= a;
                        this.elements = l.slice();
                        return!0
                    }, toString: function () {
                        for (var a = "", b = 0; 15 > b; b++)a += this.elements[b] + ", ";
                        return a += this.elements[15]
                    }, print: function () {
                        var a = fd(this.elements), a = "" + f.nfs(this.elements[0], a, 4) + " " + f.nfs(this.elements[1], a, 4) + " " + f.nfs(this.elements[2], a, 4) + " " + f.nfs(this.elements[3], a, 4) + "\n" + f.nfs(this.elements[4], a, 4) + " " + f.nfs(this.elements[5],
                            a, 4) + " " + f.nfs(this.elements[6], a, 4) + " " + f.nfs(this.elements[7], a, 4) + "\n" + f.nfs(this.elements[8], a, 4) + " " + f.nfs(this.elements[9], a, 4) + " " + f.nfs(this.elements[10], a, 4) + " " + f.nfs(this.elements[11], a, 4) + "\n" + f.nfs(this.elements[12], a, 4) + " " + f.nfs(this.elements[13], a, 4) + " " + f.nfs(this.elements[14], a, 4) + " " + f.nfs(this.elements[15], a, 4) + "\n\n";
                        f.println(a)
                    }, invTranslate: function (a, b, d) {
                        this.preApply(1, 0, 0, -a, 0, 1, 0, -b, 0, 0, 1, -d, 0, 0, 0, 1)
                    }, invRotateX: function (a) {
                        var b = Math.cos(-a);
                        a = Math.sin(-a);
                        this.preApply([1,
                            0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1])
                    }, invRotateY: function (a) {
                        var b = Math.cos(-a);
                        a = Math.sin(-a);
                        this.preApply([b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1])
                    }, invRotateZ: function (a) {
                        var b = Math.cos(-a);
                        a = Math.sin(-a);
                        this.preApply([b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                    }, invScale: function (a, b, d) {
                        this.preApply([1 / a, 0, 0, 0, 0, 1 / b, 0, 0, 0, 0, 1 / d, 0, 0, 0, 0, 1])
                    }};
                var Za = f.PMatrixStack = function () {
                    this.matrixStack = []
                };
                Za.prototype.load = function () {
                    var a = ha.$newPMatrix();
                    1 === arguments.length ? a.set(arguments[0]) : a.set(arguments);
                    this.matrixStack.push(a)
                };
                E.prototype.$newPMatrix = function () {
                    return new Ya
                };
                B.prototype.$newPMatrix = function () {
                    return new I
                };
                Za.prototype.push = function () {
                    this.matrixStack.push(this.peek())
                };
                Za.prototype.pop = function () {
                    return this.matrixStack.pop()
                };
                Za.prototype.peek = function () {
                    var a = ha.$newPMatrix();
                    a.set(this.matrixStack[this.matrixStack.length - 1]);
                    return a
                };
                Za.prototype.mult = function (a) {
                    this.matrixStack[this.matrixStack.length - 1].apply(a)
                };
                f.split = function (a, b) {
                    return a.split(b)
                };
                f.splitTokens = function (a, b) {
                    if (b === g)return a.split(/\s+/g);
                    var d = b.split(/()/g), c = "", f = a.length, e, h, k = [];
                    for (e = 0; e < f; e++)h = a[e], -1 < d.indexOf(h) ? ("" !== c && k.push(c), c = "") : c += h;
                    "" !== c && k.push(c);
                    return k
                };
                f.append = function (a, b) {
                    a[a.length] = b;
                    return a
                };
                f.concat = function (a, b) {
                    return a.concat(b)
                };
                f.sort = function (a, b) {
                    var d = [];
                    if (0 < a.length) {
                        for (var c = 0 < b ? b : a.length, f = 0; f < c; f++)d.push(a[f]);
                        "string" === typeof a[0] ? d.sort() : d.sort(function (a, b) {
                            return a - b
                        });
                        if (0 < b)for (c = d.length; c < a.length; c++)d.push(a[c])
                    }
                    return d
                };
                f.splice = function (a, b, d) {
                    if (0 === b.length)return a;
                    if (b instanceof Array)for (var c = 0; c < b.length; d++, c++)a.splice(d, 0, b[c]); else a.splice(d, 0, b);
                    return a
                };
                f.subset = function (a, b, d) {
                    return a.slice(b, d !== g ? b + d : a.length)
                };
                f.join = function (a, b) {
                    return a.join(b)
                };
                f.shorten = function (a) {
                    for (var b = [], d = a.length, c = 0; c < d; c++)b[c] = a[c];
                    b.pop();
                    return b
                };
                f.expand = function (a, b) {
                    var d = a.slice(0);
                    d.length = b || 2 * a.length;
                    return d
                };
                f.arrayCopy = function () {
                    var a, b = 0, d, c = 0, f;
                    2 === arguments.length ? (a = arguments[0], d = arguments[1], f = a.length) : 3 === arguments.length ? (a = arguments[0],
                        d = arguments[1], f = arguments[2]) : 5 === arguments.length && (a = arguments[0], b = arguments[1], d = arguments[2], c = arguments[3], f = arguments[4]);
                    for (var e = b; e < f + b; e++, c++)if (d[c] !== g)d[c] = a[e]; else throw"array index out of bounds exception";
                };
                f.reverse = function (a) {
                    return a.reverse()
                };
                f.mix = function (a, b, d) {
                    return a + ((b - a) * d >> 8)
                };
                f.peg = function (a) {
                    return 0 > a ? 0 : 255 < a ? 255 : a
                };
                f.modes = function () {
                    function a(b, L, d, c, x, f, yd, e, S, h, pd) {
                        b = g(((b & 4278190080) >>> 24) + L, 255) << 24;
                        d += (S - d) * L >> 8;
                        c += (h - c) * L >> 8;
                        L = x + ((pd - x) * L >> 8);
                        return b |
                            (0 > d ? 0 : 255 < d ? 255 : d) << 16 | (0 > c ? 0 : 255 < c ? 255 : c) << 8 | (0 > L ? 0 : 255 < L ? 255 : L)
                    }

                    var b = d.ALPHA_MASK, c = d.RED_MASK, f = d.GREEN_MASK, e = d.BLUE_MASK, g = Math.min, h = Math.max;
                    return{replace: function (a, b) {
                        return b
                    }, blend: function (a, L) {
                        var d = (L & b) >>> 24, h = a & c, k = a & f, w = a & e, m = L & c, l = L & f, n = L & e;
                        return g(((a & b) >>> 24) + d, 255) << 24 | h + ((m - h) * d >> 8) & c | k + ((l - k) * d >> 8) & f | w + ((n - w) * d >> 8) & e
                    }, add: function (a, L) {
                        var d = (L & b) >>> 24;
                        return g(((a & b) >>> 24) + d, 255) << 24 | g((a & c) + ((L & c) >> 8) * d, c) & c | g((a & f) + ((L & f) >> 8) * d, f) & f | g((a & e) + ((L & e) * d >> 8), e)
                    }, subtract: function (a, L) {
                        var d = (L & b) >>> 24;
                        return g(((a & b) >>> 24) + d, 255) << 24 | h((a & c) - ((L & c) >> 8) * d, f) & c | h((a & f) - ((L & f) >> 8) * d, e) & f | h((a & e) - ((L & e) * d >> 8), 0)
                    }, lightest: function (a, L) {
                        var d = (L & b) >>> 24;
                        return g(((a & b) >>> 24) + d, 255) << 24 | h(a & c, ((L & c) >> 8) * d) & c | h(a & f, ((L & f) >> 8) * d) & f | h(a & e, (L & e) * d >> 8)
                    }, darkest: function (a, L) {
                        var d = (L & b) >>> 24, h = a & c, k = a & f, w = a & e, m = g(a & c, ((L & c) >> 8) * d), l = g(a & f, ((L & f) >> 8) * d), n = g(a & e, (L & e) * d >> 8);
                        return g(((a & b) >>> 24) + d, 255) << 24 | h + ((m - h) * d >> 8) & c | k + ((l - k) * d >> 8) & f | w + ((n - w) * d >> 8) & e
                    }, difference: function (d, g) {
                        var h =
                            (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, h > W ? h - W : W - h, k > m ? k - m : m - k, w > l ? w - l : l - w)
                    }, exclusion: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, h + W - (h * W >> 7), k + m - (k * m >> 7), w + l - (w * l >> 7))
                    }, multiply: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, h * W >> 8, k * m >> 8, w * l >> 8)
                    }, screen: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g &
                            f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, 255 - ((255 - h) * (255 - W) >> 8), 255 - ((255 - k) * (255 - m) >> 8), 255 - ((255 - w) * (255 - l) >> 8))
                    }, hard_light: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, 128 > W ? h * W >> 7 : 255 - ((255 - h) * (255 - W) >> 7), 128 > m ? k * m >> 7 : 255 - ((255 - k) * (255 - m) >> 7), 128 > l ? w * l >> 7 : 255 - ((255 - w) * (255 - l) >> 7))
                    }, soft_light: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, (h * W >> 7) + (h * h >> 8) - (h *
                            h * W >> 15), (k * m >> 7) + (k * k >> 8) - (k * k * m >> 15), (w * l >> 7) + (w * w >> 8) - (w * w * l >> 15))
                    }, overlay: function (d, g) {
                        var h = (d & c) >> 16, k = (d & f) >> 8, w = d & e, W = (g & c) >> 16, m = (g & f) >> 8, l = g & e;
                        return a(d, (g & b) >>> 24, h, k, w, W, m, l, 128 > h ? h * W >> 7 : 255 - ((255 - h) * (255 - W) >> 7), 128 > k ? k * m >> 7 : 255 - ((255 - k) * (255 - m) >> 7), 128 > w ? w * l >> 7 : 255 - ((255 - w) * (255 - l) >> 7))
                    }, dodge: function (d, g) {
                        var h = (g & b) >>> 24, k = (d & c) >> 16, w = (d & f) >> 8, W = d & e, m = (g & c) >> 16, l = (g & f) >> 8, n = g & e, p = 255;
                        255 !== m && (p = (k << 8) / (255 - m), p = 0 > p ? 0 : 255 < p ? 255 : p);
                        var r = 255;
                        255 !== l && (r = (w << 8) / (255 - l), r = 0 > r ? 0 : 255 <
                            r ? 255 : r);
                        var t = 255;
                        255 !== n && (t = (W << 8) / (255 - n), t = 0 > t ? 0 : 255 < t ? 255 : t);
                        return a(d, h, k, w, W, m, l, n, p, r, t)
                    }, burn: function (d, g) {
                        var h = (g & b) >>> 24, k = (d & c) >> 16, w = (d & f) >> 8, W = d & e, m = (g & c) >> 16, l = (g & f) >> 8, n = g & e, p = 0;
                        0 !== m && (p = (255 - k << 8) / m, p = 255 - (0 > p ? 0 : 255 < p ? 255 : p));
                        var r = 0;
                        0 !== l && (r = (255 - w << 8) / l, r = 255 - (0 > r ? 0 : 255 < r ? 255 : r));
                        var t = 0;
                        0 !== n && (t = (255 - W << 8) / n, t = 255 - (0 > t ? 0 : 255 < t ? 255 : t));
                        return a(d, h, k, w, W, m, l, n, p, r, t)
                    }}
                }();
                f.color = function (a, b, c, f) {
                    return a !== g && b !== g && c !== g && f !== g ? ta(a, b, c, f) : a !== g && b !== g && c !== g ? ta(a, b, c,
                        ia) : a !== g && b !== g ? (a & d.ALPHA_MASK ? (b = Math.round(255 * (b / ia)), b = 255 < b ? 255 : b, a = a - (a & d.ALPHA_MASK) + ((0 > b ? 0 : b) << 24 & d.ALPHA_MASK)) : a = Va === d.RGB ? ta(a, a, a, b) : Va === d.HSB ? ta(0, 0, a / xa * ya, b) : void 0, a) : "number" === typeof a ? $b(a) : ta(xa, Ea, ya, ia)
                };
                f.color.toString = function (a) {
                    return"rgba(" + ((a & d.RED_MASK) >>> 16) + "," + ((a & d.GREEN_MASK) >>> 8) + "," + (a & d.BLUE_MASK) + "," + ((a & d.ALPHA_MASK) >>> 24) / 255 + ")"
                };
                f.color.toInt = function (a, b, c, f) {
                    return f << 24 & d.ALPHA_MASK | a << 16 & d.RED_MASK | b << 8 & d.GREEN_MASK | c & d.BLUE_MASK
                };
                f.color.toArray =
                    function (a) {
                        return[(a & d.RED_MASK) >>> 16, (a & d.GREEN_MASK) >>> 8, a & d.BLUE_MASK, (a & d.ALPHA_MASK) >>> 24]
                    };
                f.color.toGLArray = function (a) {
                    return[((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255, ((a & d.ALPHA_MASK) >>> 24) / 255]
                };
                f.color.toRGB = function (a, b, d) {
                    a = a > xa ? xa : a;
                    b = b > Ea ? Ea : b;
                    d = d > ya ? ya : d;
                    a = 360 * (a / xa);
                    b = 100 * (b / Ea);
                    d = 100 * (d / ya);
                    var c = Math.round(255 * (d / 100));
                    if (0 === b)return[c, c, c];
                    a %= 360;
                    var f = a % 60, e = Math.round(255 * (d * (100 - b) / 1E4)), g = Math.round(255 * (d * (6E3 - b * f) / 6E5));
                    b = Math.round(255 *
                        (d * (6E3 - b * (60 - f)) / 6E5));
                    switch (Math.floor(a / 60)) {
                        case 0:
                            return[c, b, e];
                        case 1:
                            return[g, c, e];
                        case 2:
                            return[e, c, b];
                        case 3:
                            return[e, g, c];
                        case 4:
                            return[b, e, c];
                        case 5:
                            return[c, e, g]
                    }
                };
                f.brightness = function (a) {
                    return bb(a)[2]
                };
                f.saturation = function (a) {
                    return bb(a)[1]
                };
                f.hue = function (a) {
                    return bb(a)[0]
                };
                f.red = function (a) {
                    return((a & d.RED_MASK) >>> 16) / 255 * xa
                };
                f.green = function (a) {
                    return((a & d.GREEN_MASK) >>> 8) / 255 * Ea
                };
                f.blue = function (a) {
                    return(a & d.BLUE_MASK) / 255 * ya
                };
                f.alpha = function (a) {
                    return((a & d.ALPHA_MASK) >>>
                        24) / 255 * ia
                };
                f.lerpColor = function (a, b, c) {
                    var e, g, h, k, m, s;
                    a = f.color(a);
                    b = f.color(b);
                    if (Va === d.HSB)return h = bb(a), a = ((a & d.ALPHA_MASK) >>> 24) / ia, g = bb(b), b = ((b & d.ALPHA_MASK) >>> 24) / ia, s = f.lerp(h[0], g[0], c), e = f.lerp(h[1], g[1], c), h = f.lerp(h[2], g[2], c), h = f.color.toRGB(s, e, h), c = f.lerp(a, b, c) * ia, c << 24 & d.ALPHA_MASK | h[0] << 16 & d.RED_MASK | h[1] << 8 & d.GREEN_MASK | h[2] & d.BLUE_MASK;
                    e = (a & d.RED_MASK) >>> 16;
                    g = (a & d.GREEN_MASK) >>> 8;
                    h = a & d.BLUE_MASK;
                    a = ((a & d.ALPHA_MASK) >>> 24) / ia;
                    k = (b & d.RED_MASK) >>> 16;
                    m = (b & d.GREEN_MASK) >>> 8;
                    s = b &
                        d.BLUE_MASK;
                    b = ((b & d.ALPHA_MASK) >>> 24) / ia;
                    e = f.lerp(e, k, c) | 0;
                    g = f.lerp(g, m, c) | 0;
                    h = f.lerp(h, s, c) | 0;
                    c = f.lerp(a, b, c) * ia;
                    return c << 24 & d.ALPHA_MASK | e << 16 & d.RED_MASK | g << 8 & d.GREEN_MASK | h & d.BLUE_MASK
                };
                f.colorMode = function () {
                    Va = arguments[0];
                    1 < arguments.length && (xa = arguments[1], Ea = arguments[2] || arguments[1], ya = arguments[3] || arguments[1], ia = arguments[4] || arguments[1])
                };
                f.blendColor = function (a, b, c) {
                    if (c === d.REPLACE)return f.modes.replace(a, b);
                    if (c === d.BLEND)return f.modes.blend(a, b);
                    if (c === d.ADD)return f.modes.add(a,
                        b);
                    if (c === d.SUBTRACT)return f.modes.subtract(a, b);
                    if (c === d.LIGHTEST)return f.modes.lightest(a, b);
                    if (c === d.DARKEST)return f.modes.darkest(a, b);
                    if (c === d.DIFFERENCE)return f.modes.difference(a, b);
                    if (c === d.EXCLUSION)return f.modes.exclusion(a, b);
                    if (c === d.MULTIPLY)return f.modes.multiply(a, b);
                    if (c === d.SCREEN)return f.modes.screen(a, b);
                    if (c === d.HARD_LIGHT)return f.modes.hard_light(a, b);
                    if (c === d.SOFT_LIGHT)return f.modes.soft_light(a, b);
                    if (c === d.OVERLAY)return f.modes.overlay(a, b);
                    if (c === d.DODGE)return f.modes.dodge(a,
                        b);
                    if (c === d.BURN)return f.modes.burn(a, b)
                };
                f.printMatrix = function () {
                    M.print()
                };
                E.prototype.translate = function (a, b) {
                    M.translate(a, b);
                    ga.invTranslate(a, b);
                    h.translate(a, b)
                };
                B.prototype.translate = function (a, b, d) {
                    M.translate(a, b, d);
                    ga.invTranslate(a, b, d)
                };
                E.prototype.scale = function (a, b) {
                    M.scale(a, b);
                    ga.invScale(a, b);
                    h.scale(a, b || a)
                };
                B.prototype.scale = function (a, b, d) {
                    M.scale(a, b, d);
                    ga.invScale(a, b, d)
                };
                E.prototype.transform = function (a) {
                    a = a.array();
                    h.transform(a[0], a[3], a[1], a[4], a[2], a[5])
                };
                B.prototype.transformm =
                    function (a) {
                        throw"p.transform is currently not supported in 3D mode";
                    };
                E.prototype.pushMatrix = function () {
                    zb.load(M);
                    Ab.load(ga);
                    h.save()
                };
                B.prototype.pushMatrix = function () {
                    zb.load(M);
                    Ab.load(ga)
                };
                E.prototype.popMatrix = function () {
                    M.set(zb.pop());
                    ga.set(Ab.pop());
                    Sa()
                };
                B.prototype.popMatrix = function () {
                    M.set(zb.pop());
                    ga.set(Ab.pop())
                };
                E.prototype.resetMatrix = function () {
                    M.reset();
                    ga.reset();
                    h.setTransform(1, 0, 0, 1, 0, 0)
                };
                B.prototype.resetMatrix = function () {
                    M.reset();
                    ga.reset()
                };
                X.prototype.applyMatrix =
                    function () {
                        var a = arguments;
                        M.apply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
                        ga.invApply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
                    };
                E.prototype.applyMatrix = function () {
                    for (var a = arguments, b = a.length; 16 > b; b++)a[b] = 0;
                    a[10] = a[15] = 1;
                    X.prototype.applyMatrix.apply(this, a)
                };
                f.rotateX = function (a) {
                    M.rotateX(a);
                    ga.invRotateX(a)
                };
                E.prototype.rotateZ = function () {
                    throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";
                };
                B.prototype.rotateZ = function (a) {
                    M.rotateZ(a);
                    ga.invRotateZ(a)
                };
                f.rotateY = function (a) {
                    M.rotateY(a);
                    ga.invRotateY(a)
                };
                E.prototype.rotate = function (a) {
                    M.rotateZ(a);
                    ga.invRotateZ(a);
                    h.rotate(a)
                };
                B.prototype.rotate = function (a) {
                    f.rotateZ(a)
                };
                E.prototype.shearX = function (a) {
                    M.shearX(a);
                    h.transform(1, 0, a, 1, 0, 0)
                };
                B.prototype.shearX = function (a) {
                    M.shearX(a)
                };
                E.prototype.shearY = function (a) {
                    M.shearY(a);
                    h.transform(1, a, 0, 1, 0, 0)
                };
                B.prototype.shearY = function (a) {
                    M.shearY(a)
                };
                f.pushStyle = function () {
                    h.save();
                    f.pushMatrix();
                    bd.push({doFill: R, currentFillColor: La, doStroke: C, currentStrokeColor: ja, curTint: gb, curRectMode: qa, curColorMode: Va, colorModeX: xa, colorModeZ: ya, colorModeY: Ea, colorModeA: ia, curTextFont: ba, horizontalTextAlignment: nb, verticalTextAlignment: Wa, textMode: ic, curFontName: yb, curTextSize: Na, curTextAscent: Xa, curTextDescent: Ma, curTextLeading: Aa})
                };
                f.popStyle = function () {
                    var a = bd.pop();
                    if (a)Sa(), f.popMatrix(), R = a.doFill, La = a.currentFillColor, C = a.doStroke, ja = a.currentStrokeColor, gb = a.curTint, qa = a.curRectMode, Va = a.curColorMode,
                        xa = a.colorModeX, ya = a.colorModeZ, Ea = a.colorModeY, ia = a.colorModeA, ba = a.curTextFont, yb = a.curFontName, Na = a.curTextSize, nb = a.horizontalTextAlignment, Wa = a.verticalTextAlignment, ic = a.textMode, Xa = a.curTextAscent, Ma = a.curTextDescent, Aa = a.curTextLeading; else throw"Too many popStyle() without enough pushStyle()";
                };
                f.year = function () {
                    return(new Date).getFullYear()
                };
                f.month = function () {
                    return(new Date).getMonth() + 1
                };
                f.day = function () {
                    return(new Date).getDate()
                };
                f.hour = function () {
                    return(new Date).getHours()
                };
                f.minute =
                    function () {
                        return(new Date).getMinutes()
                    };
                f.second = function () {
                    return(new Date).getSeconds()
                };
                f.millis = function () {
                    return Date.now() - Oc
                };
                E.prototype.redraw = function () {
                    cb();
                    h.lineWidth = ea;
                    var a = f.pmouseX, b = f.pmouseY;
                    f.pmouseX = cc;
                    f.pmouseY = dc;
                    h.save();
                    f.draw();
                    Sa();
                    cc = f.mouseX;
                    dc = f.mouseY;
                    f.pmouseX = a;
                    f.pmouseY = b
                };
                B.prototype.redraw = function () {
                    cb();
                    var a = f.pmouseX, b = f.pmouseY;
                    f.pmouseX = cc;
                    f.pmouseY = dc;
                    h.clear(h.DEPTH_BUFFER_BIT);
                    Fa = {attributes: {}, locations: {}};
                    f.noLights();
                    f.lightFalloff(1, 0, 0);
                    f.shininess(1);
                    f.ambient(255, 255, 255);
                    f.specular(0, 0, 0);
                    f.emissive(0, 0, 0);
                    f.camera();
                    f.draw();
                    cc = f.mouseX;
                    dc = f.mouseY;
                    f.pmouseX = a;
                    f.pmouseY = b
                };
                f.noLoop = function () {
                    eb = Da = !1;
                    clearInterval(ma);
                    da.onPause()
                };
                f.loop = function () {
                    eb || (tc = Date.now(), ec = 0, ma = m.setInterval(function () {
                        try {
                            da.onFrameStart(), f.redraw(), da.onFrameEnd()
                        } catch (a) {
                            throw m.clearInterval(ma), a;
                        }
                    }, Kc), eb = Da = !0, da.onLoop())
                };
                f.frameRate = function (a) {
                    Zb = a;
                    Kc = 1E3 / Zb;
                    Da && (f.noLoop(), f.loop())
                };
                f.exit = function () {
                    m.clearInterval(ma);
                    var a = f.externals.canvas.id;
                    q.splice(Yb[a], 1);
                    delete Yb[a];
                    delete T.onmousedown;
                    for (var b in K.lib)K.lib.hasOwnProperty(b) && K.lib[b].hasOwnProperty("detach") && K.lib[b].detach(f);
                    for (a = vb.length; a--;) {
                        var d = vb[a];
                        b = d.elem;
                        var c = d.type, d = d.fn;
                        b.removeEventListener ? b.removeEventListener(c, d, !1) : b.detachEvent && b.detachEvent("on" + c, d)
                    }
                    da.onExit()
                };
                f.cursor = function () {
                    if (1 < arguments.length || 1 === arguments.length && arguments[0]instanceof f.PImage) {
                        var a = arguments[0], b, d;
                        if (3 <= arguments.length) {
                            if (b = arguments[1], d = arguments[2], 0 > b || 0 >
                                d || d >= a.height || b >= a.width)throw"x and y must be non-negative and less than the dimensions of the image";
                        } else b = a.width >>> 1, d = a.height >>> 1;
                        a = 'url("' + a.toDataURL() + '") ' + b + " " + d + ", default";
                        T.style.cursor = a
                    } else T.style.cursor = 1 === arguments.length ? arguments[0] : od
                };
                f.noCursor = function () {
                    T.style.cursor = d.NOCURSOR
                };
                f.link = function (a, b) {
                    b !== g ? m.open(a, b) : m.location = a
                };
                f.beginDraw = r;
                f.endDraw = r;
                E.prototype.toImageData = function (a, b, d, c) {
                    a = a !== g ? a : 0;
                    b = b !== g ? b : 0;
                    d = d !== g ? d : f.width;
                    c = c !== g ? c : f.height;
                    return h.getImageData(a,
                        b, d, c)
                };
                B.prototype.toImageData = function (a, b, d, c) {
                    a = a !== g ? a : 0;
                    b = b !== g ? b : 0;
                    d = d !== g ? d : f.width;
                    c = c !== g ? c : f.height;
                    var e = p.createElement("canvas").getContext("2d").createImageData(d, c), k = new fa(4 * d * c);
                    h.readPixels(a, b, d, c, h.RGBA, h.UNSIGNED_BYTE, k);
                    a = 0;
                    b = k.length;
                    for (var w = e.data; a < b; a++)w[a] = k[4 * (c - 1 - Math.floor(a / 4 / d)) * d + a % (4 * d)];
                    return e
                };
                f.status = function (a) {
                    m.status = a
                };
                f.binary = function (a, b) {
                    var d;
                    if (0 < b)d = b; else if (a instanceof Char)d = 16, a |= 0; else for (d = 32; 1 < d && !(a >>> d - 1 & 1);)d--;
                    for (var c = ""; 0 < d;)c +=
                        a >>> --d & 1 ? "1" : "0";
                    return c
                };
                f.unbinary = function (a) {
                    for (var b = a.length - 1, d = 1, c = 0; 0 <= b;) {
                        var f = a[b--];
                        if ("0" !== f && "1" !== f)throw"the value passed into unbinary was not an 8 bit binary number";
                        "1" === f && (c += d);
                        d <<= 1
                    }
                    return c
                };
                f.hex = function (a, b) {
                    1 === arguments.length && (b = a instanceof Char ? 4 : 8);
                    var d = a, c = b, c = c === g || null === c ? c = 8 : c;
                    0 > d && (d = 4294967295 + d + 1);
                    for (d = Number(d).toString(16).toUpperCase(); d.length < c;)d = "0" + d;
                    d.length >= c && (d = d.substring(d.length - c, d.length));
                    return d
                };
                f.unhex = function (a) {
                    if (a instanceof
                        Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(Eb(a[d]));
                        return b
                    }
                    return Eb(a)
                };
                f.loadStrings = function (a) {
                    if (G[a])return G[a].split("\n");
                    a = e(a);
                    if ("string" !== typeof a || "" === a)return[];
                    a = a.replace(/(\r\n?)/g, "\n").replace(/\n$/, "");
                    return a.split("\n")
                };
                f.saveStrings = function (a, b) {
                    G[a] = b.join("\n")
                };
                f.loadBytes = function (a) {
                    a = e(a);
                    for (var b = [], d = 0; d < a.length; d++)b.push(a.charCodeAt(d));
                    return b
                };
                f.matchAll = function (a, b) {
                    for (var d = [], c, f = RegExp(b, "g"); null !== (c = f.exec(a));)d.push(c), 0 === c[0].length && ++f.lastIndex;
                    return 0 < d.length ? d : null
                };
                f.match = function (a, b) {
                    return a.match(b)
                };
                f.println = function (a) {
                    K.logger.println(a)
                };
                f.print = function (a) {
                    K.logger.print(a)
                };
                f.str = function (a) {
                    if (a instanceof Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(a[d].toString() + "");
                        return b
                    }
                    return a.toString() + ""
                };
                f.parseBoolean = function (a) {
                    if (a instanceof Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(db(a[d]));
                        return b
                    }
                    return db(a)
                };
                f.parseByte = function (a) {
                    if (a instanceof Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(0 -
                            (a[d] & 128) | a[d] & 127);
                        return b
                    }
                    return 0 - (a & 128) | a & 127
                };
                f.parseChar = function (a) {
                    if ("number" === typeof a)return new Char(String.fromCharCode(a & 65535));
                    if (a instanceof Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(new Char(String.fromCharCode(a[d] & 65535)));
                        return b
                    }
                    throw"char() may receive only one argument of type int, byte, int[], or byte[].";
                };
                f.parseFloat = function (a) {
                    if (a instanceof Array) {
                        for (var b = [], d = 0; d < a.length; d++)b.push(Gb(a[d]));
                        return b
                    }
                    return Gb(a)
                };
                f.parseInt = function (a, b) {
                    if (a instanceof
                        Array) {
                        for (var d = [], c = 0; c < a.length; c++)"string" !== typeof a[c] || /^\s*[+\-]?\d+\s*$/.test(a[c]) ? d.push(Hb(a[c], b)) : d.push(0);
                        return d
                    }
                    return Hb(a, b)
                };
                f.__int_cast = function (a) {
                    return 0 | a
                };
                f.__instanceof = function (a, b) {
                    if ("function" !== typeof b)throw"Function is expected as type argument for instanceof operator";
                    if ("string" === typeof a)return b === Object || b === String;
                    if (a instanceof b)return!0;
                    if ("object" !== typeof a || null === a)return!1;
                    var d = a.constructor;
                    if (b.$isInterface) {
                        for (var c = []; d;)d.$interfaces && (c =
                            c.concat(d.$interfaces)), d = d.$base;
                        for (; 0 < c.length;) {
                            d = c.shift();
                            if (d === b)return!0;
                            d.$interfaces && (c = c.concat(d.$interfaces))
                        }
                        return!1
                    }
                    for (; d.hasOwnProperty("$base");)if (d = d.$base, d === b)return!0;
                    return!1
                };
                X.prototype.size = function (a, b, c) {
                    C && f.stroke(0);
                    R && f.fill(255);
                    c = {fillStyle: h.fillStyle, strokeStyle: h.strokeStyle, lineCap: h.lineCap, lineJoin: h.lineJoin};
                    0 < T.style.length && (T.style.removeProperty("width"), T.style.removeProperty("height"));
                    T.width = f.width = a || 100;
                    T.height = f.height = b || 100;
                    for (var e in c)c.hasOwnProperty(e) &&
                    (h[e] = c[e]);
                    f.textFont(ba);
                    f.background();
                    Yc = Math.max(1E3, 0.05 * a * b);
                    f.externals.context = h;
                    for (a = 0; a < d.SINCOS_LENGTH; a++)Tb[a] = f.sin(0.5 * a * (d.PI / 180)), Ub[a] = f.cos(0.5 * a * (d.PI / 180))
                };
                E.prototype.size = function (a, b, d) {
                    h === g && (h = T.getContext("2d"), zb = new Za, Ab = new Za, M = new Ya, ga = new Ya);
                    X.prototype.size.apply(this, arguments)
                };
                B.prototype.size = function () {
                    var a = !1;
                    return function (b, d, c) {
                        if (a)throw"Multiple calls to size() for 3D renders are not allowed.";
                        a = !0;
                        try {
                            T.width = f.width = b || 100;
                            T.height = f.height =
                                d || 100;
                            for (var e = T, g = ["experimental-webgl", "webgl", "webkit-3d"], k, m = 0, s = g.length; m < s && !(k = e.getContext(g[m], {antialias: !1, preserveDrawingBuffer: !0})); m++);
                            h = k;
                            Sc = h.createTexture();
                            Tc = h.createTexture()
                        } catch (l) {
                            K.debug(l)
                        }
                        if (!h)throw"WebGL context is not supported on this browser.";
                        h.viewport(0, 0, T.width, T.height);
                        h.enable(h.DEPTH_TEST);
                        h.enable(h.BLEND);
                        h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA);
                        J = Ic(h, "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}",
                            "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
                        na = Ic(h, "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}",
                            "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
                        f.strokeWeight(1);
                        z = Ic(h, td, "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");
                        h.useProgram(z);
                        Z("usingTexture3d", z, "usingTexture", ua);
                        f.lightFalloff(1, 0, 0);
                        f.shininess(1);
                        f.ambient(255, 255, 255);
                        f.specular(0, 0, 0);
                        f.emissive(0, 0, 0);
                        wc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, wc);
                        h.bufferData(h.ARRAY_BUFFER, cd, h.STATIC_DRAW);
                        xc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, xc);
                        h.bufferData(h.ARRAY_BUFFER, rd, h.STATIC_DRAW);
                        yc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, yc);
                        h.bufferData(h.ARRAY_BUFFER, dd, h.STATIC_DRAW);
                        gc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, gc);
                        h.bufferData(h.ARRAY_BUFFER,
                            Hc, h.STATIC_DRAW);
                        zc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, zc);
                        h.bufferData(h.ARRAY_BUFFER, sd, h.STATIC_DRAW);
                        Sb = h.createBuffer();
                        Ac = h.createBuffer();
                        Pc = h.createBuffer();
                        Bc = h.createBuffer();
                        Qc = h.createBuffer();
                        Rc = h.createBuffer();
                        hc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, hc);
                        h.bufferData(h.ARRAY_BUFFER, new A([0, 0, 0]), h.STATIC_DRAW);
                        Cc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, Cc);
                        h.bufferData(h.ARRAY_BUFFER, new A([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0]), h.STATIC_DRAW);
                        Dc = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER,
                            Dc);
                        h.bufferData(h.ARRAY_BUFFER, new A([0, 0, 1, 0, 1, 1, 0, 1]), h.STATIC_DRAW);
                        Ec = h.createBuffer();
                        h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, Ec);
                        h.bufferData(h.ELEMENT_ARRAY_BUFFER, new v([0, 1, 2, 2, 3, 0]), h.STATIC_DRAW);
                        qb = new I;
                        Ra = new I;
                        M = new I;
                        ga = new I;
                        Ha = new I;
                        f.camera();
                        f.perspective();
                        zb = new Za;
                        Ab = new Za;
                        Rb = new I;
                        fc = new I;
                        wb = new I;
                        xb = new I;
                        uc = new I;
                        vc = new I;
                        vc.set(-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0);
                        X.prototype.size.apply(this, arguments)
                    }
                }();
                E.prototype.ambientLight = X.prototype.a3DOnlyFunction;
                B.prototype.ambientLight =
                    function (a, b, c, f, e, g) {
                        if (O === d.MAX_LIGHTS)throw"can only create " + d.MAX_LIGHTS + " lights";
                        f = new PVector(f, e, g);
                        e = new I;
                        e.scale(1, -1, 1);
                        e.apply(M.array());
                        e.mult(f, f);
                        a = ta(a, b, c, 0);
                        a = [((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255];
                        h.useProgram(z);
                        U("uLights.color.3d." + O, z, "uLights" + O + ".color", a);
                        U("uLights.position.3d." + O, z, "uLights" + O + ".position", f.array());
                        Z("uLights.type.3d." + O, z, "uLights" + O + ".type", 0);
                        Z("uLightCount3d", z, "uLightCount", ++O)
                    };
                E.prototype.directionalLight =
                    X.prototype.a3DOnlyFunction;
                B.prototype.directionalLight = function (a, b, c, f, e, g) {
                    if (O === d.MAX_LIGHTS)throw"can only create " + d.MAX_LIGHTS + " lights";
                    h.useProgram(z);
                    var k = new I;
                    k.scale(1, -1, 1);
                    k.apply(M.array());
                    k = k.array();
                    f = [k[0] * f + k[4] * e + k[8] * g, k[1] * f + k[5] * e + k[9] * g, k[2] * f + k[6] * e + k[10] * g];
                    a = ta(a, b, c, 0);
                    U("uLights.color.3d." + O, z, "uLights" + O + ".color", [((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255]);
                    U("uLights.position.3d." + O, z, "uLights" + O + ".position", f);
                    Z("uLights.type.3d." +
                        O, z, "uLights" + O + ".type", 1);
                    Z("uLightCount3d", z, "uLightCount", ++O)
                };
                E.prototype.lightFalloff = X.prototype.a3DOnlyFunction;
                B.prototype.lightFalloff = function (a, b, d) {
                    h.useProgram(z);
                    U("uFalloff3d", z, "uFalloff", [a, b, d])
                };
                E.prototype.lightSpecular = X.prototype.a3DOnlyFunction;
                B.prototype.lightSpecular = function (a, b, c) {
                    a = ta(a, b, c, 0);
                    a = [((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255];
                    h.useProgram(z);
                    U("uSpecular3d", z, "uSpecular", a)
                };
                f.lights = function () {
                    f.ambientLight(128, 128, 128);
                    f.directionalLight(128,
                        128, 128, 0, 0, -1);
                    f.lightFalloff(1, 0, 0);
                    f.lightSpecular(0, 0, 0)
                };
                E.prototype.pointLight = X.prototype.a3DOnlyFunction;
                B.prototype.pointLight = function (a, b, c, f, e, g) {
                    if (O === d.MAX_LIGHTS)throw"can only create " + d.MAX_LIGHTS + " lights";
                    f = new PVector(f, e, g);
                    e = new I;
                    e.scale(1, -1, 1);
                    e.apply(M.array());
                    e.mult(f, f);
                    a = ta(a, b, c, 0);
                    a = [((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255];
                    h.useProgram(z);
                    U("uLights.color.3d." + O, z, "uLights" + O + ".color", a);
                    U("uLights.position.3d." + O, z, "uLights" + O + ".position",
                        f.array());
                    Z("uLights.type.3d." + O, z, "uLights" + O + ".type", 2);
                    Z("uLightCount3d", z, "uLightCount", ++O)
                };
                E.prototype.noLights = X.prototype.a3DOnlyFunction;
                B.prototype.noLights = function () {
                    O = 0;
                    h.useProgram(z);
                    Z("uLightCount3d", z, "uLightCount", O)
                };
                E.prototype.spotLight = X.prototype.a3DOnlyFunction;
                B.prototype.spotLight = function (a, b, c, f, e, g, k, m, s, l, n) {
                    if (O === d.MAX_LIGHTS)throw"can only create " + d.MAX_LIGHTS + " lights";
                    h.useProgram(z);
                    f = new PVector(f, e, g);
                    e = new I;
                    e.scale(1, -1, 1);
                    e.apply(M.array());
                    e.mult(f, f);
                    e = e.array();
                    k = [e[0] * k + e[4] * m + e[8] * s, e[1] * k + e[5] * m + e[9] * s, e[2] * k + e[6] * m + e[10] * s];
                    a = ta(a, b, c, 0);
                    U("uLights.color.3d." + O, z, "uLights" + O + ".color", [((a & d.RED_MASK) >>> 16) / 255, ((a & d.GREEN_MASK) >>> 8) / 255, (a & d.BLUE_MASK) / 255]);
                    U("uLights.position.3d." + O, z, "uLights" + O + ".position", f.array());
                    U("uLights.direction.3d." + O, z, "uLights" + O + ".direction", k);
                    U("uLights.concentration.3d." + O, z, "uLights" + O + ".concentration", n);
                    U("uLights.angle.3d." + O, z, "uLights" + O + ".angle", l);
                    Z("uLights.type.3d." + O, z, "uLights" + O + ".type", 3);
                    Z("uLightCount3d", z, "uLightCount", ++O)
                };
                E.prototype.beginCamera = function () {
                    throw"beginCamera() is not available in 2D mode";
                };
                B.prototype.beginCamera = function () {
                    if (kc)throw"You cannot call beginCamera() again before calling endCamera()";
                    kc = !0;
                    M = Ra;
                    ga = qb
                };
                E.prototype.endCamera = function () {
                    throw"endCamera() is not available in 2D mode";
                };
                B.prototype.endCamera = function () {
                    if (!kc)throw"You cannot call endCamera() before calling beginCamera()";
                    M.set(qb);
                    ga.set(Ra);
                    kc = !1
                };
                f.camera = function (a, b, d, c, e, h, k, m, s) {
                    a === g && (Gc = f.width / 2, rb = f.height / 2, sb = rb / Math.tan(lc / 2), a = Gc, b = rb, d = sb, c = Gc, e = rb, k = h = 0, m = 1, s = 0);
                    c = new PVector(a - c, b - e, d - h);
                    var l = new PVector(k, m, s);
                    c.normalize();
                    s = PVector.cross(l, c);
                    l = PVector.cross(c, s);
                    s.normalize();
                    l.normalize();
                    k = s.x;
                    m = s.y;
                    s = s.z;
                    e = l.x;
                    h = l.y;
                    var l = l.z, n = c.x, p = c.y;
                    c = c.z;
                    qb.set(k, m, s, 0, e, h, l, 0, n, p, c, 0, 0, 0, 0, 1);
                    qb.translate(-a, -b, -d);
                    Ra.reset();
                    Ra.invApply(k, m, s, 0, e, h, l, 0, n, p, c, 0, 0, 0, 0, 1);
                    Ra.translate(a, b, d);
                    M.set(qb);
                    ga.set(Ra)
                };
                f.perspective = function (a, b, d, c) {
                    0 === arguments.length &&
                    (rb = T.height / 2, sb = rb / Math.tan(lc / 2), Zc = sb / 10, $c = 10 * sb, ad = f.width / f.height, a = lc, b = ad, d = Zc, c = $c);
                    var e, g;
                    e = d * Math.tan(a / 2);
                    g = -e;
                    f.frustum(g * b, e * b, g, e, d, c)
                };
                E.prototype.frustum = function () {
                    throw"Processing.js: frustum() is not supported in 2D mode";
                };
                B.prototype.frustum = function (a, b, d, c, f, e) {
                    Ha = new I;
                    Ha.set(2 * f / (b - a), 0, (b + a) / (b - a), 0, 0, 2 * f / (c - d), (c + d) / (c - d), 0, 0, 0, -(e + f) / (e - f), -(2 * e * f) / (e - f), 0, 0, -1, 0);
                    a = new I;
                    a.set(Ha);
                    a.transpose();
                    h.useProgram(J);
                    V("projection2d", J, "uProjection", !1, a.array());
                    h.useProgram(z);
                    V("projection3d", z, "uProjection", !1, a.array());
                    h.useProgram(na);
                    V("uProjectionUS", na, "uProjection", !1, a.array())
                };
                f.ortho = function (a, b, d, c, e, g) {
                    0 === arguments.length && (a = 0, b = f.width, d = 0, c = f.height, e = -10, g = 10);
                    var k = 2 / (b - a), m = 2 / (c - d), s = -2 / (g - e), l = -(b + a) / (b - a), n = -(c + d) / (c - d), p = -(g + e) / (g - e);
                    Ha = new I;
                    Ha.set(k, 0, 0, l, 0, m, 0, n, 0, 0, s, p, 0, 0, 0, 1);
                    k = new I;
                    k.set(Ha);
                    k.transpose();
                    h.useProgram(J);
                    V("projection2d", J, "uProjection", !1, k.array());
                    h.useProgram(z);
                    V("projection3d", z, "uProjection", !1, k.array());
                    h.useProgram(na);
                    V("uProjectionUS", na, "uProjection", !1, k.array())
                };
                f.printProjection = function () {
                    Ha.print()
                };
                f.printCamera = function () {
                    qb.print()
                };
                E.prototype.box = X.prototype.a3DOnlyFunction;
                B.prototype.box = function (a, b, d) {
                    b && d || (b = d = a);
                    var c = new I;
                    c.scale(a, b, d);
                    a = new I;
                    a.scale(1, -1, 1);
                    a.apply(M.array());
                    a.transpose();
                    R && (h.useProgram(z), V("model3d", z, "uModel", !1, c.array()), V("view3d", z, "uView", !1, a.array()), h.enable(h.POLYGON_OFFSET_FILL), h.polygonOffset(1, 1), U("color3d", z, "uColor", ka), 0 < O ? (b = new I, b.set(a), d = new I,
                        d.set(c), b.mult(d), d = new I, d.set(b), d.invert(), d.transpose(), V("uNormalTransform3d", z, "uNormalTransform", !1, d.array()), $("aNormal3d", z, "aNormal", 3, xc)) : sa("aNormal3d", z, "aNormal"), $("aVertex3d", z, "aVertex", 3, wc), sa("aColor3d", z, "aColor"), sa("aTexture3d", z, "aTexture"), h.drawArrays(h.TRIANGLES, 0, cd.length / 3), h.disable(h.POLYGON_OFFSET_FILL));
                    0 < ea && C && (h.useProgram(J), V("uModel2d", J, "uModel", !1, c.array()), V("uView2d", J, "uView", !1, a.array()), U("uColor2d", J, "uColor", Y), Z("uIsDrawingText2d", J, "uIsDrawingText",
                        !1), $("vertex2d", J, "aVertex", 3, yc), sa("aTextureCoord2d", J, "aTextureCoord"), h.drawArrays(h.LINES, 0, dd.length / 3))
                };
                f.sphereDetail = function (a, b) {
                    var c;
                    1 === arguments.length && (a = b = arguments[0]);
                    3 > a && (a = 3);
                    2 > b && (b = 2);
                    if (a !== pb || b !== jc) {
                        var f = d.SINCOS_LENGTH / a, e = new A(a), g = new A(a);
                        for (c = 0; c < a; c++)e[c] = Ub[c * f % d.SINCOS_LENGTH | 0], g[c] = Tb[c * f % d.SINCOS_LENGTH | 0];
                        c = a * (b - 1) + 2;
                        f = 0;
                        Oa = new A(c);
                        Pa = new A(c);
                        Qa = new A(c);
                        var k = 0.5 * d.SINCOS_LENGTH / b, m = k;
                        for (c = 1; c < b; c++) {
                            for (var s = Tb[m % d.SINCOS_LENGTH | 0], l = -Ub[m % d.SINCOS_LENGTH |
                                0], n = 0; n < a; n++)Oa[f] = e[n] * s, Pa[f] = l, Qa[f++] = g[n] * s;
                            m += k
                        }
                        pb = a;
                        jc = b;
                        P = [];
                        for (e = 0; e < pb; e++)P.push(0), P.push(-1), P.push(0), P.push(Oa[e]), P.push(Pa[e]), P.push(Qa[e]);
                        P.push(0);
                        P.push(-1);
                        P.push(0);
                        P.push(Oa[0]);
                        P.push(Pa[0]);
                        P.push(Qa[0]);
                        k = 0;
                        for (e = 2; e < jc; e++) {
                            g = c = k;
                            f = k += pb;
                            for (m = 0; m < pb; m++)P.push(Oa[g]), P.push(Pa[g]), P.push(Qa[g++]), P.push(Oa[f]), P.push(Pa[f]), P.push(Qa[f++]);
                            g = c;
                            f = k;
                            P.push(Oa[g]);
                            P.push(Pa[g]);
                            P.push(Qa[g]);
                            P.push(Oa[f]);
                            P.push(Pa[f]);
                            P.push(Qa[f])
                        }
                        for (e = 0; e < pb; e++)f = k + e, P.push(Oa[f]),
                            P.push(Pa[f]), P.push(Qa[f]), P.push(0), P.push(1), P.push(0);
                        P.push(Oa[k]);
                        P.push(Pa[k]);
                        P.push(Qa[k]);
                        P.push(0);
                        P.push(1);
                        P.push(0);
                        h.bindBuffer(h.ARRAY_BUFFER, Sb);
                        h.bufferData(h.ARRAY_BUFFER, new A(P), h.STATIC_DRAW)
                    }
                };
                E.prototype.sphere = X.prototype.a3DOnlyFunction;
                B.prototype.sphere = function (a) {
                    (3 > pb || 2 > jc) && f.sphereDetail(30);
                    var b = new I;
                    b.scale(a, a, a);
                    a = new I;
                    a.scale(1, -1, 1);
                    a.apply(M.array());
                    a.transpose();
                    if (R) {
                        if (0 < O) {
                            var d = new I;
                            d.set(a);
                            var c = new I;
                            c.set(b);
                            d.mult(c);
                            c = new I;
                            c.set(d);
                            c.invert();
                            c.transpose();
                            V("uNormalTransform3d", z, "uNormalTransform", !1, c.array());
                            $("aNormal3d", z, "aNormal", 3, Sb)
                        } else sa("aNormal3d", z, "aNormal");
                        h.useProgram(z);
                        sa("aTexture3d", z, "aTexture");
                        V("uModel3d", z, "uModel", !1, b.array());
                        V("uView3d", z, "uView", !1, a.array());
                        $("aVertex3d", z, "aVertex", 3, Sb);
                        sa("aColor3d", z, "aColor");
                        h.enable(h.POLYGON_OFFSET_FILL);
                        h.polygonOffset(1, 1);
                        U("uColor3d", z, "uColor", ka);
                        h.drawArrays(h.TRIANGLE_STRIP, 0, P.length / 3);
                        h.disable(h.POLYGON_OFFSET_FILL)
                    }
                    0 < ea && C && (h.useProgram(J), V("uModel2d",
                        J, "uModel", !1, b.array()), V("uView2d", J, "uView", !1, a.array()), $("aVertex2d", J, "aVertex", 3, Sb), sa("aTextureCoord2d", J, "aTextureCoord"), U("uColor2d", J, "uColor", Y), Z("uIsDrawingText", J, "uIsDrawingText", !1), h.drawArrays(h.LINE_STRIP, 0, P.length / 3))
                };
                f.modelX = function (a, b, d) {
                    var c = M.array(), f = Ra.array(), e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                    b = c[12] * a + c[13] * b + c[14] * d + c[15];
                    a = f[0] * e + f[1] * g + f[2] * h + f[3] * b;
                    f = f[12] * e + f[13] * g + f[14] * h + f[15] * b;
                    return 0 !== f ? a / f : a
                };
                f.modelY =
                    function (a, b, d) {
                        var c = M.array(), f = Ra.array(), e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                        b = c[12] * a + c[13] * b + c[14] * d + c[15];
                        a = f[4] * e + f[5] * g + f[6] * h + f[7] * b;
                        f = f[12] * e + f[13] * g + f[14] * h + f[15] * b;
                        return 0 !== f ? a / f : a
                    };
                f.modelZ = function (a, b, d) {
                    var c = M.array(), f = Ra.array(), e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                    b = c[12] * a + c[13] * b + c[14] * d + c[15];
                    a = f[8] * e + f[9] * g + f[10] * h + f[11] * b;
                    f = f[12] * e + f[13] * g + f[14] * h + f[15] * b;
                    return 0 !== f ? a / f :
                        a
                };
                E.prototype.ambient = X.prototype.a3DOnlyFunction;
                B.prototype.ambient = function (a, b, d) {
                    h.useProgram(z);
                    Z("uUsingMat3d", z, "uUsingMat", !0);
                    a = f.color(a, b, d);
                    U("uMaterialAmbient3d", z, "uMaterialAmbient", f.color.toGLArray(a).slice(0, 3))
                };
                E.prototype.emissive = X.prototype.a3DOnlyFunction;
                B.prototype.emissive = function (a, b, d) {
                    h.useProgram(z);
                    Z("uUsingMat3d", z, "uUsingMat", !0);
                    a = f.color(a, b, d);
                    U("uMaterialEmissive3d", z, "uMaterialEmissive", f.color.toGLArray(a).slice(0, 3))
                };
                E.prototype.shininess = X.prototype.a3DOnlyFunction;
                B.prototype.shininess = function (a) {
                    h.useProgram(z);
                    Z("uUsingMat3d", z, "uUsingMat", !0);
                    U("uShininess3d", z, "uShininess", a)
                };
                E.prototype.specular = X.prototype.a3DOnlyFunction;
                B.prototype.specular = function (a, b, d) {
                    h.useProgram(z);
                    Z("uUsingMat3d", z, "uUsingMat", !0);
                    a = f.color(a, b, d);
                    U("uMaterialSpecular3d", z, "uMaterialSpecular", f.color.toGLArray(a).slice(0, 3))
                };
                f.screenX = function (a, b, d) {
                    var c = M.array();
                    if (16 === c.length) {
                        var e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                        b = c[12] * a + c[13] * b + c[14] * d + c[15];
                        d = Ha.array();
                        a = d[0] * e + d[1] * g + d[2] * h + d[3] * b;
                        e = d[12] * e + d[13] * g + d[14] * h + d[15] * b;
                        0 !== e && (a /= e);
                        return f.width * (1 + a) / 2
                    }
                    return M.multX(a, b)
                };
                f.screenY = function (a, b, d) {
                    var c = M.array();
                    if (16 === c.length) {
                        var e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                        b = c[12] * a + c[13] * b + c[14] * d + c[15];
                        d = Ha.array();
                        a = d[4] * e + d[5] * g + d[6] * h + d[7] * b;
                        e = d[12] * e + d[13] * g + d[14] * h + d[15] * b;
                        0 !== e && (a /= e);
                        return f.height * (1 + a) / 2
                    }
                    return M.multY(a, b)
                };
                f.screenZ = function (a, b, d) {
                    var c = M.array();
                    if (16 !== c.length)return 0;
                    var f = Ha.array(), e = c[0] * a + c[1] * b + c[2] * d + c[3], g = c[4] * a + c[5] * b + c[6] * d + c[7], h = c[8] * a + c[9] * b + c[10] * d + c[11];
                    b = c[12] * a + c[13] * b + c[14] * d + c[15];
                    a = f[8] * e + f[9] * g + f[10] * h + f[11] * b;
                    f = f[12] * e + f[13] * g + f[14] * h + f[15] * b;
                    0 !== f && (a /= f);
                    return(a + 1) / 2
                };
                X.prototype.fill = function () {
                    var a = f.color.apply(this, arguments);
                    a === La && R || (R = !0, La = a)
                };
                E.prototype.fill = function () {
                    X.prototype.fill.apply(this, arguments);
                    N = !0
                };
                B.prototype.fill = function () {
                    X.prototype.fill.apply(this, arguments);
                    ka = f.color.toGLArray(La)
                };
                f.noFill = function () {
                    R = !1
                };
                X.prototype.stroke = function () {
                    var a = f.color.apply(this, arguments);
                    a === ja && C || (C = !0, ja = a)
                };
                E.prototype.stroke = function () {
                    X.prototype.stroke.apply(this, arguments);
                    ab = !0
                };
                B.prototype.stroke = function () {
                    X.prototype.stroke.apply(this, arguments);
                    Y = f.color.toGLArray(ja)
                };
                f.noStroke = function () {
                    C = !1
                };
                X.prototype.strokeWeight = function (a) {
                    ea = a
                };
                E.prototype.strokeWeight = function (a) {
                    X.prototype.strokeWeight.apply(this, arguments);
                    h.lineWidth = a
                };
                B.prototype.strokeWeight =
                    function (a) {
                        X.prototype.strokeWeight.apply(this, arguments);
                        h.useProgram(J);
                        U("pointSize2d", J, "uPointSize", a);
                        h.useProgram(na);
                        U("pointSizeUnlitShape", na, "uPointSize", a);
                        h.lineWidth(a)
                    };
                f.strokeCap = function (a) {
                    ha.$ensureContext().lineCap = a
                };
                f.strokeJoin = function (a) {
                    ha.$ensureContext().lineJoin = a
                };
                E.prototype.smooth = function () {
                    ra = !0;
                    var a = T.style;
                    a.setProperty("image-rendering", "optimizeQuality", "important");
                    a.setProperty("-ms-interpolation-mode", "bicubic", "important");
                    h.hasOwnProperty("mozImageSmoothingEnabled") &&
                    (h.mozImageSmoothingEnabled = !0)
                };
                B.prototype.smooth = function () {
                    ra = !0
                };
                E.prototype.noSmooth = function () {
                    ra = !1;
                    var a = T.style;
                    a.setProperty("image-rendering", "optimizeSpeed", "important");
                    a.setProperty("image-rendering", "-moz-crisp-edges", "important");
                    a.setProperty("image-rendering", "-webkit-optimize-contrast", "important");
                    a.setProperty("image-rendering", "optimize-contrast", "important");
                    a.setProperty("-ms-interpolation-mode", "nearest-neighbor", "important");
                    h.hasOwnProperty("mozImageSmoothingEnabled") &&
                    (h.mozImageSmoothingEnabled = !1)
                };
                B.prototype.noSmooth = function () {
                    ra = !1
                };
                E.prototype.point = function (a, b) {
                    C && (a = Math.round(a), b = Math.round(b), h.fillStyle = f.color.toString(ja), N = !0, 1 < ea ? (h.beginPath(), h.arc(a, b, ea / 2, 0, d.TWO_PI, !1), h.fill()) : h.fillRect(a, b, 1, 1))
                };
                B.prototype.point = function (a, b, d) {
                    var c = new I;
                    c.translate(a, b, d || 0);
                    c.transpose();
                    a = new I;
                    a.scale(1, -1, 1);
                    a.apply(M.array());
                    a.transpose();
                    h.useProgram(J);
                    V("uModel2d", J, "uModel", !1, c.array());
                    V("uView2d", J, "uView", !1, a.array());
                    0 < ea && C && (U("uColor2d",
                        J, "uColor", Y), Z("uIsDrawingText2d", J, "uIsDrawingText", !1), Z("uSmooth2d", J, "uSmooth", ra), $("aVertex2d", J, "aVertex", 3, hc), sa("aTextureCoord2d", J, "aTextureCoord"), h.drawArrays(h.POINTS, 0, 1))
                };
                f.beginShape = function (a) {
                    aa = a;
                    t = []
                };
                E.prototype.vertex = function (a, b, d) {
                    var c = [];
                    ib && (ib = !1);
                    c.isVert = !0;
                    c[0] = a;
                    c[1] = b;
                    c[2] = 0;
                    c[3] = 0;
                    c[4] = 0;
                    c[5] = La;
                    c[6] = ja;
                    t.push(c);
                    d && (t[t.length - 1].moveTo = d)
                };
                B.prototype.vertex = function (a, b, c, f, e) {
                    var h = [];
                    ib && (ib = !1);
                    h.isVert = !0;
                    e === g && ua && (e = f, f = c, c = 0);
                    f !== g && e !== g && (Wc === d.IMAGE &&
                        (f /= Uc, e /= Vc), f = 1 < f ? 1 : f, f = 0 > f ? 0 : f, e = 1 < e ? 1 : e, e = 0 > e ? 0 : e);
                    h[0] = a;
                    h[1] = b;
                    h[2] = c || 0;
                    h[3] = f || 0;
                    h[4] = e || 0;
                    h[5] = ka[0];
                    h[6] = ka[1];
                    h[7] = ka[2];
                    h[8] = ka[3];
                    h[9] = Y[0];
                    h[10] = Y[1];
                    h[11] = Y[2];
                    h[12] = Y[3];
                    h[13] = Fb;
                    h[14] = Db;
                    h[15] = tb;
                    t.push(h)
                };
                var gd = function (a, b) {
                    var d = new I;
                    d.scale(1, -1, 1);
                    d.apply(M.array());
                    d.transpose();
                    h.useProgram(na);
                    V("uViewUS", na, "uView", !1, d.array());
                    Z("uSmoothUS", na, "uSmooth", ra);
                    $("aVertexUS", na, "aVertex", 3, hc);
                    h.bufferData(h.ARRAY_BUFFER, new A(a), h.STREAM_DRAW);
                    $("aColorUS", na, "aColor",
                        4, Bc);
                    h.bufferData(h.ARRAY_BUFFER, new A(b), h.STREAM_DRAW);
                    h.drawArrays(h.POINTS, 0, a.length / 3)
                }, Ca = function (a, b, d) {
                    b = "LINES" === b ? h.LINES : "LINE_LOOP" === b ? h.LINE_LOOP : h.LINE_STRIP;
                    var c = new I;
                    c.scale(1, -1, 1);
                    c.apply(M.array());
                    c.transpose();
                    h.useProgram(na);
                    V("uViewUS", na, "uView", !1, c.array());
                    $("aVertexUS", na, "aVertex", 3, Ac);
                    h.bufferData(h.ARRAY_BUFFER, new A(a), h.STREAM_DRAW);
                    $("aColorUS", na, "aColor", 4, Qc);
                    h.bufferData(h.ARRAY_BUFFER, new A(d), h.STREAM_DRAW);
                    h.drawArrays(b, 0, a.length / 3)
                }, $a = function (a, b, d, c) {
                    b = "TRIANGLES" === b ? h.TRIANGLES : "TRIANGLE_FAN" === b ? h.TRIANGLE_FAN : h.TRIANGLE_STRIP;
                    var f = new I;
                    f.scale(1, -1, 1);
                    f.apply(M.array());
                    f.transpose();
                    h.useProgram(z);
                    V("model3d", z, "uModel", !1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                    V("view3d", z, "uView", !1, f.array());
                    h.enable(h.POLYGON_OFFSET_FILL);
                    h.polygonOffset(1, 1);
                    U("color3d", z, "uColor", [-1, 0, 0, 0]);
                    $("vertex3d", z, "aVertex", 3, Pc);
                    h.bufferData(h.ARRAY_BUFFER, new A(a), h.STREAM_DRAW);
                    ua && null !== gb && sc(d);
                    $("aColor3d", z, "aColor", 4, Bc);
                    h.bufferData(h.ARRAY_BUFFER,
                        new A(d), h.STREAM_DRAW);
                    sa("aNormal3d", z, "aNormal");
                    ua && (Z("uUsingTexture3d", z, "uUsingTexture", ua), $("aTexture3d", z, "aTexture", 2, Rc), h.bufferData(h.ARRAY_BUFFER, new A(c), h.STREAM_DRAW));
                    h.drawArrays(b, 0, a.length / 3);
                    h.disable(h.POLYGON_OFFSET_FILL)
                };
                E.prototype.endShape = function (a) {
                    if (0 !== t.length) {
                        (a = a === d.CLOSE) && t.push(t[0]);
                        var b = [], c = [], e = [], k = [], m;
                        ib = !0;
                        var w, l, s = t.length;
                        for (w = 0; w < s; w++)for (m = t[w], l = 0; 3 > l; l++)b.push(m[l]);
                        for (w = 0; w < s; w++)for (m = t[w], l = 5; 9 > l; l++)c.push(m[l]);
                        for (w = 0; w < s; w++)for (m =
                                                        t[w], l = 9; 13 > l; l++)e.push(m[l]);
                        for (w = 0; w < s; w++)m = t[w], k.push(m[3]), k.push(m[4]);
                        if (!Bb || aa !== d.POLYGON && aa !== g)if (!Cb || aa !== d.POLYGON && aa !== g)if (aa === d.POINTS)for (w = 0; w < s; w++)m = t[w], C && f.stroke(m[6]), f.point(m[0], m[1]); else if (aa === d.LINES)for (w = 0; w + 1 < s; w += 2)m = t[w], C && f.stroke(t[w + 1][6]), f.line(m[0], m[1], t[w + 1][0], t[w + 1][1]); else if (aa === d.TRIANGLES)for (w = 0; w + 2 < s; w += 3)m = t[w], h.beginPath(), h.moveTo(m[0], m[1]), h.lineTo(t[w + 1][0], t[w + 1][1]), h.lineTo(t[w + 2][0], t[w + 2][1]), h.lineTo(m[0], m[1]), R && (f.fill(t[w +
                            2][5]), wa()), C && (f.stroke(t[w + 2][6]), za()), h.closePath(); else if (aa === d.TRIANGLE_STRIP)for (w = 0; w + 1 < s; w++)m = t[w], h.beginPath(), h.moveTo(t[w + 1][0], t[w + 1][1]), h.lineTo(m[0], m[1]), C && f.stroke(t[w + 1][6]), R && f.fill(t[w + 1][5]), w + 2 < s && (h.lineTo(t[w + 2][0], t[w + 2][1]), C && f.stroke(t[w + 2][6]), R && f.fill(t[w + 2][5])), Ta(); else if (aa === d.TRIANGLE_FAN) {
                            if (2 < s)for (h.beginPath(), h.moveTo(t[0][0], t[0][1]), h.lineTo(t[1][0], t[1][1]), h.lineTo(t[2][0], t[2][1]), R && (f.fill(t[2][5]), wa()), C && (f.stroke(t[2][6]), za()), h.closePath(),
                                               w = 3; w < s; w++)m = t[w], h.beginPath(), h.moveTo(t[0][0], t[0][1]), h.lineTo(t[w - 1][0], t[w - 1][1]), h.lineTo(m[0], m[1]), R && (f.fill(m[5]), wa()), C && (f.stroke(m[6]), za()), h.closePath()
                        } else if (aa === d.QUADS)for (w = 0; w + 3 < s; w += 4) {
                            m = t[w];
                            h.beginPath();
                            h.moveTo(m[0], m[1]);
                            for (l = 1; 4 > l; l++)h.lineTo(t[w + l][0], t[w + l][1]);
                            h.lineTo(m[0], m[1]);
                            R && (f.fill(t[w + 3][5]), wa());
                            C && (f.stroke(t[w + 3][6]), za());
                            h.closePath()
                        } else if (aa === d.QUAD_STRIP) {
                            if (3 < s)for (w = 0; w + 1 < s; w += 2)m = t[w], h.beginPath(), w + 3 < s ? (h.moveTo(t[w + 2][0], t[w + 2][1]),
                                h.lineTo(m[0], m[1]), h.lineTo(t[w + 1][0], t[w + 1][1]), h.lineTo(t[w + 3][0], t[w + 3][1]), R && f.fill(t[w + 3][5]), C && f.stroke(t[w + 3][6])) : (h.moveTo(m[0], m[1]), h.lineTo(t[w + 1][0], t[w + 1][1])), Ta()
                        } else {
                            h.beginPath();
                            h.moveTo(t[0][0], t[0][1]);
                            for (w = 1; w < s; w++)m = t[w], m.isVert && (m.moveTo ? h.moveTo(m[0], m[1]) : h.lineTo(m[0], m[1]));
                            Ta()
                        } else {
                            h.beginPath();
                            for (w = 0; w < s; w++)m = t[w], t[w].isVert ? t[w].moveTo ? h.moveTo(m[0], m[1]) : h.lineTo(m[0], m[1]) : h.bezierCurveTo(t[w][0], t[w][1], t[w][2], t[w][3], t[w][4], t[w][5]);
                            Ta()
                        } else if (3 <
                            s) {
                            b = [];
                            c = 1 - oc;
                            h.beginPath();
                            h.moveTo(t[1][0], t[1][1]);
                            for (w = 1; w + 2 < s; w++)m = t[w], b[0] = [m[0], m[1]], b[1] = [m[0] + (c * t[w + 1][0] - c * t[w - 1][0]) / 6, m[1] + (c * t[w + 1][1] - c * t[w - 1][1]) / 6], b[2] = [t[w + 1][0] + (c * t[w][0] - c * t[w + 2][0]) / 6, t[w + 1][1] + (c * t[w][1] - c * t[w + 2][1]) / 6], b[3] = [t[w + 1][0], t[w + 1][1]], h.bezierCurveTo(b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]);
                            Ta()
                        }
                        Cb = Bb = !1;
                        va = [];
                        oa = 0;
                        a && t.pop()
                    }
                };
                B.prototype.endShape = function (a) {
                    if (0 !== t.length) {
                        var b = a === d.CLOSE;
                        a = [];
                        var c = [], f = [], e = [], k = [], m;
                        ib = !0;
                        var l, s, n = t.length;
                        for (l = 0; l < n; l++)for (m = t[l], s = 0; 3 > s; s++)c.push(m[s]);
                        for (l = 0; l < n; l++)for (m = t[l], s = 5; 9 > s; s++)f.push(m[s]);
                        for (l = 0; l < n; l++)for (m = t[l], s = 9; 13 > s; s++)e.push(m[s]);
                        for (l = 0; l < n; l++)m = t[l], k.push(m[3]), k.push(m[4]);
                        if (b) {
                            c.push(t[0][0]);
                            c.push(t[0][1]);
                            c.push(t[0][2]);
                            for (l = 5; 9 > l; l++)f.push(t[0][l]);
                            for (l = 9; 13 > l; l++)e.push(t[0][l]);
                            k.push(t[0][3]);
                            k.push(t[0][4])
                        }
                        if (!Bb || aa !== d.POLYGON && aa !== g)if (!Cb || aa !== d.POLYGON && aa !== g) {
                            if (aa === d.POINTS) {
                                for (l = 0; l < n; l++)for (m = t[l], s = 0; 3 > s; s++)a.push(m[s]);
                                gd(a, e)
                            } else if (aa ===
                                d.LINES) {
                                for (l = 0; l < n; l++)for (m = t[l], s = 0; 3 > s; s++)a.push(m[s]);
                                for (l = 0; l < n; l++)for (m = t[l], s = 5; 9 > s; s++)f.push(m[s]);
                                Ca(a, "LINES", e)
                            } else if (aa === d.TRIANGLES) {
                                if (2 < n)for (l = 0; l + 2 < n; l += 3) {
                                    c = [];
                                    k = [];
                                    a = [];
                                    f = [];
                                    e = [];
                                    for (s = 0; 3 > s; s++)for (b = 0; 3 > b; b++)a.push(t[l + s][b]), c.push(t[l + s][b]);
                                    for (s = 0; 3 > s; s++)for (b = 3; 5 > b; b++)k.push(t[l + s][b]);
                                    for (s = 0; 3 > s; s++)for (b = 5; 9 > b; b++)f.push(t[l + s][b]), e.push(t[l + s][b + 4]);
                                    C && Ca(a, "LINE_LOOP", e);
                                    (R || ua) && $a(c, "TRIANGLES", f, k)
                                }
                            } else if (aa === d.TRIANGLE_STRIP) {
                                if (2 < n)for (l = 0; l + 2 < n; l++) {
                                    a =
                                        [];
                                    c = [];
                                    e = [];
                                    f = [];
                                    k = [];
                                    for (s = 0; 3 > s; s++)for (b = 0; 3 > b; b++)a.push(t[l + s][b]), c.push(t[l + s][b]);
                                    for (s = 0; 3 > s; s++)for (b = 3; 5 > b; b++)k.push(t[l + s][b]);
                                    for (s = 0; 3 > s; s++)for (b = 5; 9 > b; b++)e.push(t[l + s][b + 4]), f.push(t[l + s][b]);
                                    (R || ua) && $a(c, "TRIANGLE_STRIP", f, k);
                                    C && Ca(a, "LINE_LOOP", e)
                                }
                            } else if (aa === d.TRIANGLE_FAN) {
                                if (2 < n) {
                                    for (l = 0; 3 > l; l++)for (m = t[l], s = 0; 3 > s; s++)a.push(m[s]);
                                    for (l = 0; 3 > l; l++)for (m = t[l], s = 9; 13 > s; s++)e.push(m[s]);
                                    C && Ca(a, "LINE_LOOP", e);
                                    for (l = 2; l + 1 < n; l++) {
                                        a = [];
                                        e = [];
                                        a.push(t[0][0]);
                                        a.push(t[0][1]);
                                        a.push(t[0][2]);
                                        e.push(t[0][9]);
                                        e.push(t[0][10]);
                                        e.push(t[0][11]);
                                        e.push(t[0][12]);
                                        for (s = 0; 2 > s; s++)for (b = 0; 3 > b; b++)a.push(t[l + s][b]);
                                        for (s = 0; 2 > s; s++)for (b = 9; 13 > b; b++)e.push(t[l + s][b]);
                                        C && Ca(a, "LINE_STRIP", e)
                                    }
                                    (R || ua) && $a(c, "TRIANGLE_FAN", f, k)
                                }
                            } else if (aa === d.QUADS)for (l = 0; l + 3 < n; l += 4) {
                                a = [];
                                for (s = 0; 4 > s; s++)for (m = t[l + s], b = 0; 3 > b; b++)a.push(m[b]);
                                C && Ca(a, "LINE_LOOP", e);
                                if (R) {
                                    c = [];
                                    f = [];
                                    k = [];
                                    for (s = 0; 3 > s; s++)c.push(t[l][s]);
                                    for (s = 5; 9 > s; s++)f.push(t[l][s]);
                                    for (s = 0; 3 > s; s++)c.push(t[l + 1][s]);
                                    for (s = 5; 9 > s; s++)f.push(t[l + 1][s]);
                                    for (s = 0; 3 > s; s++)c.push(t[l + 3][s]);
                                    for (s = 5; 9 > s; s++)f.push(t[l + 3][s]);
                                    for (s = 0; 3 > s; s++)c.push(t[l + 2][s]);
                                    for (s = 5; 9 > s; s++)f.push(t[l + 2][s]);
                                    ua && (k.push(t[l + 0][3]), k.push(t[l + 0][4]), k.push(t[l + 1][3]), k.push(t[l + 1][4]), k.push(t[l + 3][3]), k.push(t[l + 3][4]), k.push(t[l + 2][3]), k.push(t[l + 2][4]));
                                    $a(c, "TRIANGLE_STRIP", f, k)
                                }
                            } else if (aa === d.QUAD_STRIP) {
                                if (3 < n) {
                                    for (l = 0; 2 > l; l++)for (m = t[l], s = 0; 3 > s; s++)a.push(m[s]);
                                    for (l = 0; 2 > l; l++)for (m = t[l], s = 9; 13 > s; s++)e.push(m[s]);
                                    Ca(a, "LINE_STRIP", e);
                                    4 < n && 0 < n % 2 && (c.splice(c.length -
                                        3), t.pop());
                                    for (l = 0; l + 3 < n; l += 2) {
                                        a = [];
                                        e = [];
                                        for (s = 0; 3 > s; s++)a.push(t[l + 1][s]);
                                        for (s = 0; 3 > s; s++)a.push(t[l + 3][s]);
                                        for (s = 0; 3 > s; s++)a.push(t[l + 2][s]);
                                        for (s = 0; 3 > s; s++)a.push(t[l + 0][s]);
                                        for (s = 9; 13 > s; s++)e.push(t[l + 1][s]);
                                        for (s = 9; 13 > s; s++)e.push(t[l + 3][s]);
                                        for (s = 9; 13 > s; s++)e.push(t[l + 2][s]);
                                        for (s = 9; 13 > s; s++)e.push(t[l + 0][s]);
                                        C && Ca(a, "LINE_STRIP", e)
                                    }
                                    (R || ua) && $a(c, "TRIANGLE_LIST", f, k)
                                }
                            } else if (1 === n) {
                                for (s = 0; 3 > s; s++)a.push(t[0][s]);
                                for (s = 9; 13 > s; s++)e.push(t[0][s]);
                                gd(a, e)
                            } else {
                                for (l = 0; l < n; l++) {
                                    m = t[l];
                                    for (s =
                                             0; 3 > s; s++)a.push(m[s]);
                                    for (s = 5; 9 > s; s++)e.push(m[s])
                                }
                                C && b ? Ca(a, "LINE_LOOP", e) : C && !b && Ca(a, "LINE_STRIP", e);
                                (R || ua) && $a(c, "TRIANGLE_FAN", f, k)
                            }
                            ua = !1;
                            h.useProgram(z);
                            Z("usingTexture3d", z, "uUsingTexture", ua)
                        } else a = c, a.splice(a.length - 3), e.splice(e.length - 4), C && Ca(a, null, e), R && $a(c, "TRIANGLES", f); else C && Ca(c, null, e), R && $a(c, null, f);
                        Cb = Bb = !1;
                        va = [];
                        oa = 0
                    }
                };
                var hd = function (a, b) {
                    var c = 1 / a, d = c * c, f = d * c;
                    b.set(0, 0, 0, 1, f, d, c, 0, 6 * f, 2 * d, 0, 0, 6 * f, 0, 0, 0)
                }, id = function () {
                    wb || (Rb = new I, wb = new I, Lc = !0);
                    var a = oc;
                    Rb.set((a -
                        1) / 2, (a + 3) / 2, (-3 - a) / 2, (1 - a) / 2, 1 - a, (-5 - a) / 2, a + 2, (a - 1) / 2, (a - 1) / 2, 0, (1 - a) / 2, 0, 0, 1, 0, 0);
                    hd(pc, wb);
                    uc || (fc = new I);
                    fc.set(Rb);
                    fc.preApply(uc);
                    wb.apply(Rb)
                };
                E.prototype.bezierVertex = function () {
                    Cb = !0;
                    var a = [];
                    if (ib)throw"vertex() must be used at least once before calling bezierVertex()";
                    for (var b = 0; b < arguments.length; b++)a[b] = arguments[b];
                    t.push(a);
                    t[t.length - 1].isVert = !1
                };
                B.prototype.bezierVertex = function () {
                    Cb = !0;
                    if (ib)throw"vertex() must be used at least once before calling bezierVertex()";
                    if (9 === arguments.length) {
                        xb ===
                            g && (xb = new I);
                        var a = t.length - 1;
                        hd(qc, xb);
                        xb.apply(vc);
                        for (var b = xb.array(), c = t[a][0], d = t[a][1], a = t[a][2], e = b[4] * c + b[5] * arguments[0] + b[6] * arguments[3] + b[7] * arguments[6], h = b[8] * c + b[9] * arguments[0] + b[10] * arguments[3] + b[11] * arguments[6], k = b[12] * c + b[13] * arguments[0] + b[14] * arguments[3] + b[15] * arguments[6], l = b[4] * d + b[5] * arguments[1] + b[6] * arguments[4] + b[7] * arguments[7], m = b[8] * d + b[9] * arguments[1] + b[10] * arguments[4] + b[11] * arguments[7], n = b[12] * d + b[13] * arguments[1] + b[14] * arguments[4] + b[15] * arguments[7], p = b[4] *
                            a + b[5] * arguments[2] + b[6] * arguments[5] + b[7] * arguments[8], r = b[8] * a + b[9] * arguments[2] + b[10] * arguments[5] + b[11] * arguments[8], b = b[12] * a + b[13] * arguments[2] + b[14] * arguments[5] + b[15] * arguments[8], v = 0; v < qc; v++)c += e, e += h, h += k, d += l, l += m, m += n, a += p, p += r, r += b, f.vertex(c, d, a);
                        f.vertex(arguments[6], arguments[7], arguments[8])
                    }
                };
                f.texture = function (a) {
                    var b = ha.$ensureContext();
                    if (a.__texture)b.bindTexture(b.TEXTURE_2D, a.__texture); else {
                        if ("canvas" === a.localName)b.bindTexture(b.TEXTURE_2D, Sc), b.texImage2D(b.TEXTURE_2D,
                            0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b.generateMipmap(b.TEXTURE_2D); else {
                            var c = b.createTexture(), d = p.createElement("canvas"), f = d.getContext("2d"), e;
                            if (a.width & 0 === a.width - 1)d.width = a.width; else {
                                for (e = 1; e < a.width;)e *= 2;
                                d.width = e
                            }
                            if (a.height & 0 === a.height - 1)d.height = a.height; else {
                                for (e = 1; e < a.height;)e *= 2;
                                d.height = e
                            }
                            f.drawImage(a.sourceImg, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
                            b.bindTexture(b.TEXTURE_2D,
                                c);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                            b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, d);
                            b.generateMipmap(b.TEXTURE_2D);
                            a.__texture = c
                        }
                        Uc = a.width;
                        Vc = a.height
                    }
                    ua = !0;
                    b.useProgram(z);
                    Z("usingTexture3d", z, "uUsingTexture", ua)
                };
                f.textureMode = function (a) {
                    Wc = a
                };
                E.prototype.curveVertex =
                    function (a, b) {
                        Bb = !0;
                        f.vertex(a, b)
                    };
                B.prototype.curveVertex = function (a, b, c) {
                    Bb = !0;
                    Lc || id();
                    var d = [];
                    d[0] = a;
                    d[1] = b;
                    d[2] = c;
                    va.push(d);
                    oa++;
                    if (3 < oa) {
                        var e = va[oa - 4][0], g = va[oa - 4][1], h = va[oa - 4][2], k = va[oa - 3][0], l = va[oa - 3][1], m = va[oa - 3][2], n = va[oa - 2][0], p = va[oa - 2][1], r = va[oa - 2][2], t = va[oa - 1][0], v = va[oa - 1][1], u = va[oa - 1][2];
                        a = k;
                        b = l;
                        c = m;
                        var q = wb.array(), d = q[4] * e + q[5] * k + q[6] * n + q[7] * t, y = q[8] * e + q[9] * k + q[10] * n + q[11] * t, e = q[12] * e + q[13] * k + q[14] * n + q[15] * t, k = q[4] * g + q[5] * l + q[6] * p + q[7] * v, n = q[8] * g + q[9] * l + q[10] * p + q[11] *
                            v, g = q[12] * g + q[13] * l + q[14] * p + q[15] * v, l = q[4] * h + q[5] * m + q[6] * r + q[7] * u, p = q[8] * h + q[9] * m + q[10] * r + q[11] * u, h = q[12] * h + q[13] * m + q[14] * r + q[15] * u;
                        f.vertex(a, b, c);
                        for (m = 0; m < pc; m++)a += d, d += y, y += e, b += k, k += n, n += g, c += l, l += p, p += h, f.vertex(a, b, c)
                    }
                };
                E.prototype.curve = function (a, b, c, d, e, g, h, k) {
                    f.beginShape();
                    f.curveVertex(a, b);
                    f.curveVertex(c, d);
                    f.curveVertex(e, g);
                    f.curveVertex(h, k);
                    f.endShape()
                };
                B.prototype.curve = function (a, b, c, d, e, h, k, l, m, n, p, r) {
                    r !== g ? (f.beginShape(), f.curveVertex(a, b, c), f.curveVertex(d, e, h), f.curveVertex(k,
                        l, m), f.curveVertex(n, p, r)) : (f.beginShape(), f.curveVertex(a, b), f.curveVertex(c, d), f.curveVertex(e, h), f.curveVertex(k, l));
                    f.endShape()
                };
                f.curveTightness = function (a) {
                    oc = a
                };
                f.curveDetail = function (a) {
                    pc = a;
                    id()
                };
                f.rectMode = function (a) {
                    qa = a
                };
                f.imageMode = function (a) {
                    switch (a) {
                        case d.CORNER:
                            mc = ed;
                            break;
                        case d.CORNERS:
                            mc = ud;
                            break;
                        case d.CENTER:
                            mc = vd;
                            break;
                        default:
                            throw"Invalid imageMode";
                    }
                };
                f.ellipseMode = function (a) {
                    la = a
                };
                f.arc = function (a, b, c, e, g, h) {
                    if (!(0 >= c || h < g)) {
                        la === d.CORNERS ? (c -= a, e -= b) : la === d.RADIUS ?
                            (a -= c, b -= e, c *= 2, e *= 2) : la === d.CENTER && (a -= c / 2, b -= e / 2);
                        for (; 0 > g;)g += d.TWO_PI, h += d.TWO_PI;
                        h - g > d.TWO_PI && (g = 0, h = d.TWO_PI);
                        c /= 2;
                        e /= 2;
                        a += c;
                        b += e;
                        g = 0 | 0.5 + 2 * g * f.RAD_TO_DEG;
                        h = 0 | 0.5 + 2 * h * f.RAD_TO_DEG;
                        var k, l;
                        if (R) {
                            var m = C;
                            C = !1;
                            f.beginShape();
                            f.vertex(a, b);
                            for (k = g; k <= h; k++)l = k % d.SINCOS_LENGTH, f.vertex(a + Ub[l] * c, b + Tb[l] * e);
                            f.endShape(d.CLOSE);
                            C = m
                        }
                        if (C) {
                            m = R;
                            R = !1;
                            f.beginShape();
                            for (k = g; k <= h; k++)l = k % d.SINCOS_LENGTH, f.vertex(a + Ub[l] * c, b + Tb[l] * e);
                            f.endShape();
                            R = m
                        }
                    }
                };
                E.prototype.line = function (a, b, c, d) {
                    if (C)if (a = Math.round(a),
                        c = Math.round(c), b = Math.round(b), d = Math.round(d), a === c && b === d)f.point(a, b); else {
                        for (var e = g, k = g, l = !0, e = M.array(), m = [1, 0, 0, 0, 1, 0], s = 0; 6 > s && l; s++)l = e[s] === m[s];
                        l && (a === c ? (b > d && (e = b, b = d, d = e), d++, 1 === ea % 2 && h.translate(0.5, 0)) : b === d && (a > c && (e = a, a = c, c = e), c++, 1 === ea % 2 && h.translate(0, 0.5)), 1 === ea && (k = h.lineCap, h.lineCap = "butt"));
                        h.beginPath();
                        h.moveTo(a || 0, b || 0);
                        h.lineTo(c || 0, d || 0);
                        za();
                        l && (a === c && 1 === ea % 2 ? h.translate(-0.5, 0) : b === d && 1 === ea % 2 && h.translate(0, -0.5), 1 === ea && (h.lineCap = k))
                    }
                };
                B.prototype.line = function (a, b, c, d, e, k) {
                    if (e === g || k === g)k = 0, e = d, d = c, c = 0;
                    a === d && b === e && c === k ? f.point(a, b, c) : (a = [a, b, c, d, e, k], b = new I, b.scale(1, -1, 1), b.apply(M.array()), b.transpose(), 0 < ea && C && (h.useProgram(J), V("uModel2d", J, "uModel", !1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), V("uView2d", J, "uView", !1, b.array()), U("uColor2d", J, "uColor", Y), Z("uIsDrawingText", J, "uIsDrawingText", !1), $("aVertex2d", J, "aVertex", 3, Ac), sa("aTextureCoord2d", J, "aTextureCoord"), h.bufferData(h.ARRAY_BUFFER, new A(a), h.STREAM_DRAW), h.drawArrays(h.LINES, 0, 2)))
                };
                E.prototype.bezier =
                    function () {
                        if (8 !== arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";
                        f.beginShape();
                        f.vertex(arguments[0], arguments[1]);
                        f.bezierVertex(arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
                        f.endShape()
                    };
                B.prototype.bezier = function () {
                    if (12 !== arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";
                    f.beginShape();
                    f.vertex(arguments[0], arguments[1], arguments[2]);
                    f.bezierVertex(arguments[3], arguments[4], arguments[5], arguments[6], arguments[7],
                        arguments[8], arguments[9], arguments[10], arguments[11]);
                    f.endShape()
                };
                f.bezierDetail = function (a) {
                    qc = a
                };
                f.bezierPoint = function (a, b, c, d, e) {
                    return(1 - e) * (1 - e) * (1 - e) * a + 3 * (1 - e) * (1 - e) * e * b + 3 * (1 - e) * e * e * c + e * e * e * d
                };
                f.bezierTangent = function (a, b, c, d, e) {
                    return 3 * e * e * (-a + 3 * b - 3 * c + d) + 6 * e * (a - 2 * b + c) + 3 * (-a + b)
                };
                f.curvePoint = function (a, b, c, d, e) {
                    return 0.5 * (2 * b + (-a + c) * e + (2 * a - 5 * b + 4 * c - d) * e * e + (-a + 3 * b - 3 * c + d) * e * e * e)
                };
                f.curveTangent = function (a, b, c, d, e) {
                    return 0.5 * (-a + c + 2 * (2 * a - 5 * b + 4 * c - d) * e + 3 * (-a + 3 * b - 3 * c + d) * e * e)
                };
                f.triangle = function (a, b, c, e, g, h) {
                    f.beginShape(d.TRIANGLES);
                    f.vertex(a, b, 0);
                    f.vertex(c, e, 0);
                    f.vertex(g, h, 0);
                    f.endShape()
                };
                f.quad = function (a, b, c, e, g, h, k, l) {
                    f.beginShape(d.QUADS);
                    f.vertex(a, b, 0);
                    f.vertex(c, e, 0);
                    f.vertex(g, h, 0);
                    f.vertex(k, l, 0);
                    f.endShape()
                };
                E.prototype.rect = function (a, b, c, e, f, k, l, m) {
                    if (c || e)if (qa === d.CORNERS ? (c -= a, e -= b) : qa === d.RADIUS ? (c *= 2, e *= 2, a -= c / 2, b -= e / 2) : qa === d.CENTER && (a -= c / 2, b -= e / 2), a = Math.round(a), b = Math.round(b), c = Math.round(c), e = Math.round(e), f !== g) {
                        m === g && (m = l = k = f);
                        var s = c / 2, n = e / 2;
                        if (f > s || f > n)f =
                            Math.min(s, n);
                        if (k > s || k > n)k = Math.min(s, n);
                        if (l > s || l > n)l = Math.min(s, n);
                        if (m > s || m > n)m = Math.min(s, n);
                        R && !C || h.translate(0.5, 0.5);
                        h.beginPath();
                        h.moveTo(a + f, b);
                        h.lineTo(a + c - k, b);
                        h.quadraticCurveTo(a + c, b, a + c, b + k);
                        h.lineTo(a + c, b + e - l);
                        h.quadraticCurveTo(a + c, b + e, a + c - l, b + e);
                        h.lineTo(a + m, b + e);
                        h.quadraticCurveTo(a, b + e, a, b + e - m);
                        h.lineTo(a, b + f);
                        h.quadraticCurveTo(a, b, a + f, b);
                        R && !C || h.translate(-0.5, -0.5);
                        wa();
                        za()
                    } else C && 1 === ea % 2 && h.translate(0.5, 0.5), h.beginPath(), h.rect(a, b, c, e), wa(), za(), C && 1 === ea % 2 && h.translate(-0.5,
                        -0.5)
                };
                B.prototype.rect = function (a, b, c, e, f, k, l, m) {
                    if (f !== g)throw"rect() with rounded corners is not supported in 3D mode";
                    qa === d.CORNERS ? (c -= a, e -= b) : qa === d.RADIUS ? (c *= 2, e *= 2, a -= c / 2, b -= e / 2) : qa === d.CENTER && (a -= c / 2, b -= e / 2);
                    f = new I;
                    f.translate(a, b, 0);
                    f.scale(c, e, 1);
                    f.transpose();
                    b = new I;
                    b.scale(1, -1, 1);
                    b.apply(M.array());
                    b.transpose();
                    0 < ea && C && (h.useProgram(J), V("uModel2d", J, "uModel", !1, f.array()), V("uView2d", J, "uView", !1, b.array()), U("uColor2d", J, "uColor", Y), Z("uIsDrawingText2d", J, "uIsDrawingText", !1),
                        $("aVertex2d", J, "aVertex", 3, gc), sa("aTextureCoord2d", J, "aTextureCoord"), h.drawArrays(h.LINE_LOOP, 0, Hc.length / 3));
                    R && (h.useProgram(z), V("uModel3d", z, "uModel", !1, f.array()), V("uView3d", z, "uView", !1, b.array()), h.enable(h.POLYGON_OFFSET_FILL), h.polygonOffset(1, 1), U("color3d", z, "uColor", ka), 0 < O ? (a = new I, a.set(b), b = new I, b.set(f), a.mult(b), b = new I, b.set(a), b.invert(), b.transpose(), V("uNormalTransform3d", z, "uNormalTransform", !1, b.array()), $("aNormal3d", z, "aNormal", 3, zc)) : sa("normal3d", z, "aNormal"), $("vertex3d",
                        z, "aVertex", 3, gc), h.drawArrays(h.TRIANGLE_FAN, 0, Hc.length / 3), h.disable(h.POLYGON_OFFSET_FILL))
                };
                E.prototype.ellipse = function (a, b, c, e) {
                    a = a || 0;
                    b = b || 0;
                    if (!(0 >= c && 0 >= e))if (la === d.RADIUS ? (c *= 2, e *= 2) : la === d.CORNERS ? (c -= a, e -= b, a += c / 2, b += e / 2) : la === d.CORNER && (a += c / 2, b += e / 2), c === e)h.beginPath(), h.arc(a, b, c / 2, 0, d.TWO_PI, !1), wa(), za(); else {
                        c /= 2;
                        e /= 2;
                        var g = 0.5522847498307933 * c, k = 0.5522847498307933 * e;
                        f.beginShape();
                        f.vertex(a + c, b);
                        f.bezierVertex(a + c, b - k, a + g, b - e, a, b - e);
                        f.bezierVertex(a - g, b - e, a - c, b - k, a - c, b);
                        f.bezierVertex(a -
                            c, b + k, a - g, b + e, a, b + e);
                        f.bezierVertex(a + g, b + e, a + c, b + k, a + c, b);
                        f.endShape()
                    }
                };
                B.prototype.ellipse = function (a, b, c, e) {
                    a = a || 0;
                    b = b || 0;
                    if (!(0 >= c && 0 >= e)) {
                        la === d.RADIUS ? (c *= 2, e *= 2) : la === d.CORNERS ? (c -= a, e -= b, a += c / 2, b += e / 2) : la === d.CORNER && (a += c / 2, b += e / 2);
                        c /= 2;
                        e /= 2;
                        var g = 0.5522847498307933 * c, h = 0.5522847498307933 * e;
                        f.beginShape();
                        f.vertex(a + c, b);
                        f.bezierVertex(a + c, b - h, 0, a + g, b - e, 0, a, b - e, 0);
                        f.bezierVertex(a - g, b - e, 0, a - c, b - h, 0, a - c, b, 0);
                        f.bezierVertex(a - c, b + h, 0, a - g, b + e, 0, a, b + e, 0);
                        f.bezierVertex(a + g, b + e, 0, a + c, b + h, 0, a +
                            c, b, 0);
                        f.endShape();
                        if (R) {
                            for (g = e = c = 0; g < t.length; g++)c += t[g][0], e += t[g][1];
                            c /= t.length;
                            e /= t.length;
                            g = [];
                            a = [];
                            b = [];
                            g[0] = c;
                            g[1] = e;
                            g[2] = 0;
                            g[3] = 0;
                            g[4] = 0;
                            g[5] = ka[0];
                            g[6] = ka[1];
                            g[7] = ka[2];
                            g[8] = ka[3];
                            g[9] = Y[0];
                            g[10] = Y[1];
                            g[11] = Y[2];
                            g[12] = Y[3];
                            g[13] = Fb;
                            g[14] = Db;
                            g[15] = tb;
                            t.unshift(g);
                            for (g = 0; g < t.length; g++) {
                                for (c = 0; 3 > c; c++)a.push(t[g][c]);
                                for (c = 5; 9 > c; c++)b.push(t[g][c])
                            }
                            $a(a, "TRIANGLE_FAN", b)
                        }
                    }
                };
                f.normal = function (a, b, c) {
                    if (3 !== arguments.length || "number" !== typeof a || "number" !== typeof b || "number" !== typeof c)throw"normal() requires three numeric arguments.";
                    Fb = a;
                    Db = b;
                    tb = c;
                    0 !== aa && (jb === d.NORMAL_MODE_AUTO ? jb = d.NORMAL_MODE_SHAPE : jb === d.NORMAL_MODE_SHAPE && (jb = d.NORMAL_MODE_VERTEX))
                };
                f.save = function (a, b) {
                    return b !== g ? m.open(b.toDataURL(), "_blank") : m.open(f.externals.canvas.toDataURL(), "_blank")
                };
                var wd = 0;
                f.saveFrame = function (a) {
                    a === g && (a = "screen-####.png");
                    a = a.replace(/#+/, function (a) {
                        for (var b = "" + wd++; b.length < a.length;)b = "0" + b;
                        return b
                    });
                    f.save(a)
                };
                var xd = p.createElement("canvas").getContext("2d"), Mc = [g, g, g], Ga = function (a, b, c) {
                    this.__isDirty = !1;
                    if (a instanceof
                        D)this.fromHTMLImageData(a); else if (b || c) {
                        this.width = a || 1;
                        this.height = b || 1;
                        a = this.sourceImg = p.createElement("canvas");
                        a.width = this.width;
                        a.height = this.height;
                        this.imageData = a.getContext("2d").createImageData(this.width, this.height);
                        this.format = c === d.ARGB || c === d.ALPHA ? c : d.RGB;
                        if (this.format === d.RGB)for (c = 3, a = this.imageData.data, b = a.length; c < b; c += 4)a[c] = 255;
                        this.__isDirty = !0;
                        this.updatePixels()
                    } else this.height = this.width = 0, this.imageData = xd.createImageData(1, 1), this.format = d.ARGB;
                    this.pixels = Ib(this)
                };
                Ga.prototype = {__isPImage: !0, updatePixels: function () {
                    var a = this.sourceImg;
                    a && (a instanceof y && this.__isDirty) && a.getContext("2d").putImageData(this.imageData, 0, 0);
                    this.__isDirty = !1
                }, fromHTMLImageData: function (a) {
                    var b = Ja(a);
                    try {
                        var c = b.context.getImageData(0, 0, a.width, a.height);
                        this.fromImageData(c)
                    } catch (d) {
                        a.width && a.height && (this.isRemote = !0, this.width = a.width, this.height = a.height)
                    }
                    this.sourceImg = a
                }, get: function (a, b, c, d) {
                    if (!arguments.length)return f.get(this);
                    if (2 === arguments.length)return f.get(a,
                        b, this);
                    if (4 === arguments.length)return f.get(a, b, c, d, this)
                }, set: function (a, b, c) {
                    f.set(a, b, c, this);
                    this.__isDirty = !0
                }, blend: function (a, b, c, d, e, g, h, k, l, m) {
                    9 === arguments.length ? f.blend(this, a, b, c, d, e, g, h, k, l, this) : 10 === arguments.length && f.blend(a, b, c, d, e, g, h, k, l, m, this);
                    delete this.sourceImg
                }, copy: function (a, b, c, e, g, h, k, l, m) {
                    8 === arguments.length ? f.blend(this, a, b, c, e, g, h, k, l, d.REPLACE, this) : 9 === arguments.length && f.blend(a, b, c, e, g, h, k, l, m, d.REPLACE, this);
                    delete this.sourceImg
                }, filter: function (a, b) {
                    2 ===
                        arguments.length ? f.filter(a, b, this) : 1 === arguments.length && f.filter(a, null, this);
                    delete this.sourceImg
                }, save: function (a) {
                    f.save(a, this)
                }, resize: function (a, b) {
                    if (this.isRemote)throw"Image is loaded remotely. Cannot resize.";
                    if (0 !== this.width || 0 !== this.height) {
                        0 === a && 0 !== b ? a = Math.floor(this.width / this.height * b) : 0 === b && 0 !== a && (b = Math.floor(this.height / this.width * a));
                        var c = Ja(this.imageData).canvas, c = Ja(c, a, b).context.getImageData(0, 0, a, b);
                        this.fromImageData(c)
                    }
                }, mask: function (a) {
                    var b = this.toImageData(),
                        c, d;
                    if (a instanceof Ga || a.__isPImage)if (a.width === this.width && a.height === this.height)for (a = a.toImageData(), c = 2, d = 4 * this.width * this.height; c < d; c += 4)b.data[c + 1] = a.data[c]; else throw"mask must have the same dimensions as PImage."; else if (a instanceof Array)if (this.width * this.height === a.length)for (c = 0, d = a.length; c < d; ++c)b.data[4 * c + 3] = a[c]; else throw"mask array must be the same length as PImage pixels array.";
                    this.fromImageData(b)
                }, loadPixels: r, toImageData: function () {
                    return this.isRemote ? this.sourceImg :
                        this.__isDirty ? Ja(this.sourceImg).context.getImageData(0, 0, this.width, this.height) : this.imageData
                }, toDataURL: function () {
                    if (this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";
                    return Ja(this.imageData).canvas.toDataURL()
                }, fromImageData: function (a) {
                    var b = a.width, c = a.height, e = p.createElement("canvas"), f = e.getContext("2d");
                    this.width = e.width = b;
                    this.height = e.height = c;
                    f.putImageData(a, 0, 0);
                    this.format = d.ARGB;
                    this.imageData = a;
                    this.sourceImg = e
                }};
                f.PImage = Ga;
                f.createImage = function (a, b, c) {
                    return new Ga(a,
                        b, c)
                };
                f.loadImage = function (a, b, c) {
                    if (da.imageCache.images[a])return b = new Ga(da.imageCache.images[a]), b.loaded = !0, b;
                    b = new Ga;
                    var d = p.createElement("img");
                    b.sourceImg = d;
                    d.onload = function (a, b, c) {
                        return function () {
                            b.fromHTMLImageData(a);
                            b.loaded = !0;
                            c && c()
                        }
                    }(d, b, c);
                    d.src = a;
                    return b
                };
                f.requestImage = f.loadImage;
                f.get = function (a, b, c, e, g) {
                    if (void 0 !== g)return Kb(a, b, c, e, g);
                    if (void 0 !== e)return Jb(a, b, c, e);
                    if (void 0 !== c) {
                        if (c.isRemote)throw"Image is loaded remotely. Cannot get x,y.";
                        a = 4 * b * c.width + 4 * a;
                        c = c.imageData.data;
                        return c[a + 3] << 24 & d.ALPHA_MASK | c[a] << 16 & d.RED_MASK | c[a + 1] << 8 & d.GREEN_MASK | c[a + 2] & d.BLUE_MASK
                    }
                    return void 0 !== b ? (a >= f.width || 0 > a || 0 > b || b >= f.height ? c = 0 : Qb ? (a = 4 * ((0 | a) + f.width * (0 | b)), c = f.imageData.data, c = c[a + 3] << 24 & d.ALPHA_MASK | c[a] << 16 & d.RED_MASK | c[a + 1] << 8 & d.GREEN_MASK | c[a + 2] & d.BLUE_MASK) : (c = f.toImageData(0 | a, 0 | b, 1, 1).data, c = c[3] << 24 & d.ALPHA_MASK | c[0] << 16 & d.RED_MASK | c[1] << 8 & d.GREEN_MASK | c[2] & d.BLUE_MASK), c) : void 0 !== a ? Kb(0, 0, a.width, a.height, a) : Jb(0, 0, f.width, f.height)
                };
                f.createGraphics = function (a, b, c) {
                    var d = new K;
                    d.size(a, b, c);
                    d.background(0, 0);
                    return d
                };
                f.set = function (a, b, c, d) {
                    if (3 === arguments.length)"number" === typeof c ? a < f.width && (0 <= a && 0 <= b && b < f.height) && (Qb || (f.loadPixels(), null === Fc && (Nc = h, Fc = new Lb), Qb = !0, h = Fc, Xc = 0), f.pixels.setPixel((0 | a) + f.width * (0 | b), c), ++Xc > Yc && fb()) : (c instanceof Ga || c.__isPImage) && f.image(c, a, b); else if (4 === arguments.length) {
                        if (d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";
                        var e = f.color.toArray(c), g = 4 * b * d.width + 4 * a, k = d.imageData.data;
                        k[g] = e[0];
                        k[g +
                            1] = e[1];
                        k[g + 2] = e[2];
                        k[g + 3] = e[3]
                    }
                };
                f.imageData = {};
                f.pixels = {getLength: function () {
                    return f.imageData.data.length ? f.imageData.data.length / 4 : 0
                }, getPixel: function (a) {
                    a *= 4;
                    var b = f.imageData.data;
                    return b[a + 3] << 24 & 4278190080 | b[a + 0] << 16 & 16711680 | b[a + 1] << 8 & 65280 | b[a + 2] & 255
                }, setPixel: function (a, b) {
                    var c = 4 * a, d = f.imageData.data;
                    d[c + 0] = (b & 16711680) >>> 16;
                    d[c + 1] = (b & 65280) >>> 8;
                    d[c + 2] = b & 255;
                    d[c + 3] = (b & 4278190080) >>> 24
                }, toArray: function () {
                    for (var a = [], b = f.imageData.width * f.imageData.height, c = f.imageData.data, d = 0, e =
                        0; d < b; d++, e += 4)a.push(c[e + 3] << 24 & 4278190080 | c[e + 0] << 16 & 16711680 | c[e + 1] << 8 & 65280 | c[e + 2] & 255);
                    return a
                }, set: function (a) {
                    for (var b = 0, c = a.length; b < c; b++)this.setPixel(b, a[b])
                }};
                f.loadPixels = function () {
                    f.imageData = ha.$ensureContext().getImageData(0, 0, f.width, f.height)
                };
                f.updatePixels = function () {
                    f.imageData && ha.$ensureContext().putImageData(f.imageData, 0, 0)
                };
                f.hint = function (a) {
                    var b = ha.$ensureContext();
                    a === d.DISABLE_DEPTH_TEST ? (b.disable(b.DEPTH_TEST), b.depthMask(!1), b.clear(b.DEPTH_BUFFER_BIT)) : a === d.ENABLE_DEPTH_TEST ?
                        (b.enable(b.DEPTH_TEST), b.depthMask(!0)) : a === d.ENABLE_OPENGL_2X_SMOOTH || a === d.ENABLE_OPENGL_4X_SMOOTH ? ra = !0 : a === d.DISABLE_OPENGL_2X_SMOOTH && (ra = !1)
                };
                var jd = function (a, b, c, d) {
                    if (a instanceof Ga || a.__isPImage) {
                        if (!a.loaded)throw"Error using image in background(): PImage not loaded.";
                        if (a.width !== f.width || a.height !== f.height)throw"Background image must be the same dimensions as the canvas.";
                    } else a = f.color(a, b, c, d);
                    kb = a
                };
                E.prototype.background = function (a, b, c, d) {
                    a !== g && jd(a, b, c, d);
                    kb instanceof Ga || kb.__isPImage ?
                        (h.save(), h.setTransform(1, 0, 0, 1, 0, 0), f.image(kb, 0, 0)) : (h.save(), h.setTransform(1, 0, 0, 1, 0, 0), f.alpha(kb) !== ia && h.clearRect(0, 0, f.width, f.height), h.fillStyle = f.color.toString(kb), h.fillRect(0, 0, f.width, f.height), N = !0);
                    Sa()
                };
                B.prototype.background = function (a, b, c, d) {
                    0 < arguments.length && jd(a, b, c, d);
                    var e = f.color.toGLArray(kb);
                    h.clearColor(e[0], e[1], e[2], e[3]);
                    h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT)
                };
                E.prototype.image = function (a, b, c, d, e) {
                    b = Math.round(b);
                    c = Math.round(c);
                    if (0 < a.width) {
                        var f = mc(b ||
                            0, c || 0, d || a.width, e || a.height, 4 > arguments.length);
                        if (a.sourceImg && null === gb) {
                            var g = a.sourceImg;
                            a.__isDirty && a.updatePixels();
                            h.drawImage(g, 0, 0, g.width, g.height, f.x, f.y, f.w, f.h)
                        } else g = a.toImageData(), null !== gb && (gb(g), a.__isDirty = !0), h.drawImage(Ja(g).canvas, 0, 0, a.width, a.height, f.x, f.y, f.w, f.h)
                    }
                };
                B.prototype.image = function (a, b, c, d, e) {
                    0 < a.width && (b = Math.round(b), c = Math.round(c), d = d || a.width, e = e || a.height, f.beginShape(f.QUADS), f.texture(a), f.vertex(b, c, 0, 0, 0), f.vertex(b, c + e, 0, 0, e), f.vertex(b + d, c + e,
                        0, d, e), f.vertex(b + d, c, 0, d, 0), f.endShape())
                };
                f.tint = function (a, b, c, d) {
                    a = f.color(a, b, c, d);
                    var e = f.red(a) / xa, g = f.green(a) / Ea, h = f.blue(a) / ya, k = f.alpha(a) / ia;
                    gb = function (a) {
                        var b = a.data;
                        a = 4 * a.width * a.height;
                        for (var c = 0; c < a;)b[c++] *= e, b[c++] *= g, b[c++] *= h, b[c++] *= k
                    };
                    sc = function (a) {
                        for (var b = 0; b < a.length;)a[b++] = e, a[b++] = g, a[b++] = h, a[b++] = k
                    }
                };
                f.noTint = function () {
                    sc = gb = null
                };
                f.copy = function (a, b, c, e, h, k, l, m, n) {
                    n === g && (n = m, m = l, l = k, k = h, h = e, e = c, c = b, b = a, a = f);
                    f.blend(a, b, c, e, h, k, l, m, n, d.REPLACE)
                };
                f.blend = function (a, b, c, d, e, h, k, l, m, n, p) {
                    if (a.isRemote)throw"Image is loaded remotely. Cannot blend image.";
                    n === g && (n = m, m = l, l = k, k = h, h = e, e = d, d = c, c = b, b = a, a = f);
                    d = b + d;
                    e = c + e;
                    l = h + l;
                    m = k + m;
                    var r = p || f;
                    p !== g && n !== g || f.loadPixels();
                    a.loadPixels();
                    a === f && f.intersect(b, c, d, e, h, k, l, m) ? f.blit_resize(f.get(b, c, d - b, e - c), 0, 0, d - b - 1, e - c - 1, r.imageData.data, r.width, r.height, h, k, l, m, n) : f.blit_resize(a, b, c, d, e, r.imageData.data, r.width, r.height, h, k, l, m, n);
                    p === g && f.updatePixels()
                };
                var kd = function (a, b) {
                    var c = 0, d = b.pixels.getLength(), e = new Q(d),
                        f, g, h, k, l, m, n, p, r, t, q, v;
                    if (a)for (; c < d;)for (f = c, g = c + b.width; c < g;)h = k = b.pixels.getPixel(c), m = c - 1, l = c + 1, n = c - b.width, p = c + b.width, m < f && (m = c), l >= g && (l = c), 0 > n && (n = 0), p >= d && (p = c), n = b.pixels.getPixel(n), m = b.pixels.getPixel(m), p = b.pixels.getPixel(p), l = b.pixels.getPixel(l), h = 77 * (h >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (h & 255), t = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (m & 255), r = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (l & 255), q = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (n & 255), v = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (p & 255), t < h && (k = m, h = t), r < h && (k =
                        l, h = r), q < h && (k = n, h = q), v < h && (k = p), e[c++] = k; else for (; c < d;)for (f = c, g = c + b.width; c < g;)h = k = b.pixels.getPixel(c), m = c - 1, l = c + 1, n = c - b.width, p = c + b.width, m < f && (m = c), l >= g && (l = c), 0 > n && (n = 0), p >= d && (p = c), n = b.pixels.getPixel(n), m = b.pixels.getPixel(m), p = b.pixels.getPixel(p), l = b.pixels.getPixel(l), h = 77 * (h >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (h & 255), t = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (m & 255), r = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (l & 255), q = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (n & 255), v = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (p & 255), t > h &&
                        (k = m, h = t), r > h && (k = l, h = r), q > h && (k = n, h = q), v > h && (k = p), e[c++] = k;
                    b.pixels.set(e)
                };
                f.filter = function (a, b, c) {
                    var e, h, k, l;
                    3 === arguments.length ? (c.loadPixels(), e = c) : (f.loadPixels(), e = f);
                    b === g && (b = null);
                    if (e.isRemote)throw"Image is loaded remotely. Cannot filter image.";
                    var m = e.pixels.getLength();
                    switch (a) {
                        case d.BLUR:
                            var n = b || 1, p = e, r, t, q, v, u, y, z, C, D;
                            k = p.pixels.getLength();
                            l = new A(k);
                            m = new A(k);
                            h = new A(k);
                            k = new A(k);
                            var F = 0, G, E, H, n = f.floor(3.5 * n), B, n = 1 > n ? 1 : 248 > n ? n : 248;
                            if (f.shared.blurRadius !== n) {
                                f.shared.blurRadius =
                                    n;
                                f.shared.blurKernelSize = 1 + (f.shared.blurRadius << 1);
                                f.shared.blurKernel = new A(f.shared.blurKernelSize);
                                var I = f.shared.blurKernel, J = f.shared.blurKernelSize;
                                for (B = 0; B < J; B++)I[B] = 0;
                                J = (n - 1) * (n - 1);
                                for (B = 1; B < n; B++)I[n + B] = I[void 0] = J;
                                I[n] = n * n
                            }
                            n = p.height;
                            B = p.width;
                            I = f.shared.blurKernelSize;
                            C = f.shared.blurRadius;
                            var J = f.shared.blurKernel, K = p.imageData.data;
                            for (E = 0; E < n; E++) {
                                for (G = 0; G < B; G++) {
                                    q = t = r = v = p = 0;
                                    y = G - C;
                                    if (0 > y)u = -y, y = 0; else {
                                        if (y >= B)break;
                                        u = 0
                                    }
                                    for (H = u; H < I && !(y >= B); H++)z = 4 * (y + F), u = J[H], v += u * K[z + 3], r += u *
                                        K[z], t += u * K[z + 1], q += u * K[z + 2], p += u, y++;
                                    z = F + G;
                                    k[z] = v / p;
                                    l[z] = r / p;
                                    m[z] = t / p;
                                    h[z] = q / p
                                }
                                F += B
                            }
                            F = 0;
                            C = -C;
                            D = C * B;
                            for (E = 0; E < n; E++) {
                                for (G = 0; G < B; G++) {
                                    q = t = r = v = p = 0;
                                    if (0 > C)u = z = -C, y = G; else {
                                        if (C >= n)break;
                                        u = 0;
                                        z = C;
                                        y = G + D
                                    }
                                    for (H = u; H < I && !(z >= n); H++)u = J[H], v += u * k[y], r += u * l[y], t += u * m[y], q += u * h[y], p += u, z++, y += B;
                                    z = 4 * (G + F);
                                    K[z] = r / p;
                                    K[z + 1] = t / p;
                                    K[z + 2] = q / p;
                                    K[z + 3] = v / p
                                }
                                F += B;
                                D += B;
                                C++
                            }
                            break;
                        case d.GRAY:
                            if (e.format === d.ALPHA) {
                                for (l = 0; l < m; l++)h = 255 - e.pixels.getPixel(l), e.pixels.setPixel(l, 4278190080 | h << 16 | h << 8 | h);
                                e.format = d.RGB
                            } else for (l =
                                            0; l < m; l++)h = e.pixels.getPixel(l), k = 77 * (h >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (h & 255) >> 8, e.pixels.setPixel(l, h & d.ALPHA_MASK | k << 16 | k << 8 | k);
                            break;
                        case d.INVERT:
                            for (l = 0; l < m; l++)e.pixels.setPixel(l, e.pixels.getPixel(l) ^ 16777215);
                            break;
                        case d.POSTERIZE:
                            if (null === b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
                            h = f.floor(b);
                            if (2 > h || 255 < h)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";
                            k = h - 1;
                            for (l = 0; l < m; l++)F = e.pixels.getPixel(l) >> 16 & 255, n = e.pixels.getPixel(l) >> 8 & 255, B =
                                e.pixels.getPixel(l) & 255, F = 255 * (F * h >> 8) / k, n = 255 * (n * h >> 8) / k, B = 255 * (B * h >> 8) / k, e.pixels.setPixel(l, 4278190080 & e.pixels.getPixel(l) | F << 16 | n << 8 | B);
                            break;
                        case d.OPAQUE:
                            for (l = 0; l < m; l++)e.pixels.setPixel(l, e.pixels.getPixel(l) | 4278190080);
                            e.format = d.RGB;
                            break;
                        case d.THRESHOLD:
                            null === b && (b = 0.5);
                            if (0 > b || 1 < b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
                            h = f.floor(255 * b);
                            for (l = 0; l < m; l++)k = f.max((e.pixels.getPixel(l) & d.RED_MASK) >> 16, f.max((e.pixels.getPixel(l) & d.GREEN_MASK) >> 8, e.pixels.getPixel(l) &
                                d.BLUE_MASK)), e.pixels.setPixel(l, e.pixels.getPixel(l) & d.ALPHA_MASK | (k < h ? 0 : 16777215));
                            break;
                        case d.ERODE:
                            kd(!0, e);
                            break;
                        case d.DILATE:
                            kd(!1, e)
                    }
                    e.updatePixels()
                };
                f.shared = {fracU: 0, ifU: 0, fracV: 0, ifV: 0, u1: 0, u2: 0, v1: 0, v2: 0, sX: 0, sY: 0, iw: 0, iw1: 0, ih1: 0, ul: 0, ll: 0, ur: 0, lr: 0, cUL: 0, cLL: 0, cUR: 0, cLR: 0, srcXOffset: 0, srcYOffset: 0, r: 0, g: 0, b: 0, a: 0, srcBuffer: null, blurRadius: 0, blurKernelSize: 0, blurKernel: null};
                f.intersect = function (a, b, c, d, e, f, g, h) {
                    c = c - a + 1;
                    d = d - b + 1;
                    g = g - e + 1;
                    h = h - f + 1;
                    e < a ? (g += e - a, g > c && (g = c)) : (a = c + a - e, g > a &&
                        (g = a));
                    f < b ? (h += f - b, h > d && (h = d)) : (b = d + b - f, h > b && (h = b));
                    return!(0 >= g || 0 >= h)
                };
                var pa = {};
                pa[d.BLEND] = f.modes.blend;
                pa[d.ADD] = f.modes.add;
                pa[d.SUBTRACT] = f.modes.subtract;
                pa[d.LIGHTEST] = f.modes.lightest;
                pa[d.DARKEST] = f.modes.darkest;
                pa[d.REPLACE] = f.modes.replace;
                pa[d.DIFFERENCE] = f.modes.difference;
                pa[d.EXCLUSION] = f.modes.exclusion;
                pa[d.MULTIPLY] = f.modes.multiply;
                pa[d.SCREEN] = f.modes.screen;
                pa[d.OVERLAY] = f.modes.overlay;
                pa[d.HARD_LIGHT] = f.modes.hard_light;
                pa[d.SOFT_LIGHT] = f.modes.soft_light;
                pa[d.DODGE] = f.modes.dodge;
                pa[d.BURN] = f.modes.burn;
                f.blit_resize = function (a, b, c, e, g, h, k, l, m, n, p, r, t) {
                    0 > b && (b = 0);
                    0 > c && (c = 0);
                    e >= a.width && (e = a.width - 1);
                    g >= a.height && (g = a.height - 1);
                    e -= b;
                    g -= c;
                    p -= m;
                    r -= n;
                    if (!(0 >= p || 0 >= r || 0 >= e || 0 >= g || m >= k || n >= l || b >= a.width || c >= a.height)) {
                        e = Math.floor(e / p * d.PRECISIONF);
                        g = Math.floor(g / r * d.PRECISIONF);
                        var q = f.shared;
                        q.srcXOffset = Math.floor(0 > m ? -m * e : b * d.PRECISIONF);
                        q.srcYOffset = Math.floor(0 > n ? -n * g : c * d.PRECISIONF);
                        0 > m && (p += m, m = 0);
                        0 > n && (r += n, n = 0);
                        p = Math.min(p, k - m);
                        r = Math.min(r, l - n);
                        b = n * k + m;
                        var v;
                        q.srcBuffer =
                            a.imageData.data;
                        q.iw = a.width;
                        q.iw1 = a.width - 1;
                        q.ih1 = a.height - 1;
                        c = pa[t];
                        var u, y, z, C;
                        m = d.ALPHA_MASK;
                        n = d.RED_MASK;
                        var A = d.GREEN_MASK, B = d.BLUE_MASK, F = d.PREC_MAXVAL, D = d.PRECISIONB, G = d.PREC_RED_SHIFT, H = d.PREC_ALPHA_SHIFT, E = q.srcBuffer, I = Math.min;
                        for (t = 0; t < r; t++) {
                            q.sX = q.srcXOffset;
                            q.fracV = q.srcYOffset & F;
                            q.ifV = F - q.fracV;
                            q.v1 = (q.srcYOffset >> D) * q.iw;
                            q.v2 = I((q.srcYOffset >> D) + 1, q.ih1) * q.iw;
                            for (a = 0; a < p; a++)l = 4 * (b + a), v = h[l + 3] << 24 & m | h[l] << 16 & n | h[l + 1] << 8 & A | h[l + 2] & B, q.fracU = q.sX & F, q.ifU = F - q.fracU, q.ul = q.ifU * q.ifV >>
                                D, q.ll = q.ifU * q.fracV >> D, q.ur = q.fracU * q.ifV >> D, q.lr = q.fracU * q.fracV >> D, q.u1 = q.sX >> D, q.u2 = I(q.u1 + 1, q.iw1), u = 4 * (q.v1 + q.u1), y = 4 * (q.v1 + q.u2), z = 4 * (q.v2 + q.u1), C = 4 * (q.v2 + q.u2), q.cUL = E[u + 3] << 24 & m | E[u] << 16 & n | E[u + 1] << 8 & A | E[u + 2] & B, q.cUR = E[y + 3] << 24 & m | E[y] << 16 & n | E[y + 1] << 8 & A | E[y + 2] & B, q.cLL = E[z + 3] << 24 & m | E[z] << 16 & n | E[z + 1] << 8 & A | E[z + 2] & B, q.cLR = E[C + 3] << 24 & m | E[C] << 16 & n | E[C + 1] << 8 & A | E[C + 2] & B, q.r = q.ul * ((q.cUL & n) >> 16) + q.ll * ((q.cLL & n) >> 16) + q.ur * ((q.cUR & n) >> 16) + q.lr * ((q.cLR & n) >> 16) << G & n, q.g = q.ul * (q.cUL & A) + q.ll * (q.cLL & A) + q.ur *
                                (q.cUR & A) + q.lr * (q.cLR & A) >>> D & A, q.b = q.ul * (q.cUL & B) + q.ll * (q.cLL & B) + q.ur * (q.cUR & B) + q.lr * (q.cLR & B) >>> D, q.a = q.ul * ((q.cUL & m) >>> 24) + q.ll * ((q.cLL & m) >>> 24) + q.ur * ((q.cUR & m) >>> 24) + q.lr * ((q.cLR & m) >>> 24) << H & m, v = c(v, q.a | q.r | q.g | q.b), h[l] = (v & n) >>> 16, h[l + 1] = (v & A) >>> 8, h[l + 2] = v & B, h[l + 3] = (v & m) >>> 24, q.sX += e;
                            b += k;
                            q.srcYOffset += g
                        }
                    }
                };
                f.loadFont = function (a, b) {
                    if (a === g)throw"font name required in loadFont.";
                    if (-1 === a.indexOf(".svg"))return b === g && (b = ba.size), PFont.get(a, b);
                    var c = f.loadGlyphs(a);
                    return{name: a, css: "12px sans-serif",
                        glyph: !0, units_per_em: c.units_per_em, horiz_adv_x: 1 / c.units_per_em * c.horiz_adv_x, ascent: c.ascent, descent: c.descent, width: function (b) {
                            for (var c = 0, d = b.length, e = 0; e < d; e++)try {
                                c += parseFloat(f.glyphLook(f.glyphTable[a], b[e]).horiz_adv_x)
                            } catch (g) {
                                K.debug(g)
                            }
                            return c / f.glyphTable[a].units_per_em
                        }}
                };
                f.createFont = function (a, b) {
                    return f.loadFont(a, b)
                };
                f.textFont = function (a, b) {
                    b !== g && (a.glyph || (a = PFont.get(a.name, b)), Na = b);
                    ba = a;
                    yb = ba.name;
                    Xa = ba.ascent;
                    Ma = ba.descent;
                    Aa = ba.leading;
                    ha.$ensureContext().font = ba.css
                };
                f.textSize = function (a) {
                    ba = PFont.get(yb, a);
                    Na = a;
                    Xa = ba.ascent;
                    Ma = ba.descent;
                    Aa = ba.leading;
                    ha.$ensureContext().font = ba.css
                };
                f.textAscent = function () {
                    return Xa
                };
                f.textDescent = function () {
                    return Ma
                };
                f.textLeading = function (a) {
                    Aa = a
                };
                f.textAlign = function (a, b) {
                    nb = a;
                    Wa = b || d.BASELINE
                };
                E.prototype.textWidth = function (a) {
                    a = Ua(a).split(/\r?\n/g);
                    var b = 0, c, d = a.length;
                    h.font = ba.css;
                    for (c = 0; c < d; ++c)b = Math.max(b, ba.measureTextWidth(a[c]));
                    return b | 0
                };
                B.prototype.textWidth = function (a) {
                    a = Ua(a).split(/\r?\n/g);
                    var b = 0, c,
                        d = a.length;
                    Ba === g && (Ba = p.createElement("canvas"));
                    var e = Ba.getContext("2d");
                    e.font = ba.css;
                    for (c = 0; c < d; ++c)b = Math.max(b, e.measureText(a[c]).width);
                    return b | 0
                };
                f.glyphLook = function (a, b) {
                    try {
                        switch (b) {
                            case "1":
                                return a.one;
                            case "2":
                                return a.two;
                            case "3":
                                return a.three;
                            case "4":
                                return a.four;
                            case "5":
                                return a.five;
                            case "6":
                                return a.six;
                            case "7":
                                return a.seven;
                            case "8":
                                return a.eight;
                            case "9":
                                return a.nine;
                            case "0":
                                return a.zero;
                            case " ":
                                return a.space;
                            case "$":
                                return a.dollar;
                            case "!":
                                return a.exclam;
                            case '"':
                                return a.quotedbl;
                            case "#":
                                return a.numbersign;
                            case "%":
                                return a.percent;
                            case "&":
                                return a.ampersand;
                            case "'":
                                return a.quotesingle;
                            case "(":
                                return a.parenleft;
                            case ")":
                                return a.parenright;
                            case "*":
                                return a.asterisk;
                            case "+":
                                return a.plus;
                            case ",":
                                return a.comma;
                            case "-":
                                return a.hyphen;
                            case ".":
                                return a.period;
                            case "/":
                                return a.slash;
                            case "_":
                                return a.underscore;
                            case ":":
                                return a.colon;
                            case ";":
                                return a.semicolon;
                            case "<":
                                return a.less;
                            case "=":
                                return a.equal;
                            case ">":
                                return a.greater;
                            case "?":
                                return a.question;
                            case "@":
                                return a.at;
                            case "[":
                                return a.bracketleft;
                            case "\\":
                                return a.backslash;
                            case "]":
                                return a.bracketright;
                            case "^":
                                return a.asciicircum;
                            case "`":
                                return a.grave;
                            case "{":
                                return a.braceleft;
                            case "|":
                                return a.bar;
                            case "}":
                                return a.braceright;
                            case "~":
                                return a.asciitilde;
                            default:
                                return a[b]
                        }
                    } catch (c) {
                        K.debug(c)
                    }
                };
                E.prototype.text$line = function (a, b, c, e, g) {
                    e = e = 0;
                    if (ba.glyph) {
                        e = f.glyphTable[yb];
                        h.save();
                        h.translate(b, c + Na);
                        g !== d.RIGHT && g !== d.CENTER || e.width(a);
                        b = 1 / e.units_per_em * Na;
                        h.scale(b, b);
                        b = 0;
                        for (c = a.length; b < c; b++)try {
                            f.glyphLook(e, a[b]).draw()
                        } catch (k) {
                            K.debug(k)
                        }
                        Sa()
                    } else if (a && "fillText"in h) {
                        N && (h.fillStyle = f.color.toString(La), N = !1);
                        if (g === d.RIGHT || g === d.CENTER)e = ba.measureTextWidth(a), e = g === d.RIGHT ? -e : -e / 2;
                        h.fillText(a, b + e, c)
                    }
                };
                B.prototype.text$line = function (a, b, c, e, f) {
                    Ba === g && (Ba = p.createElement("canvas"));
                    var k = h;
                    h = Ba.getContext("2d");
                    h.font = ba.css;
                    var l = ba.measureTextWidth(a);
                    Ba.width = l;
                    Ba.height = Na;
                    h = Ba.getContext("2d");
                    h.font = ba.css;
                    h.textBaseline = "top";
                    E.prototype.text$line(a,
                        0, 0, 0, d.LEFT);
                    a = Ba.width / Ba.height;
                    h = k;
                    h.bindTexture(h.TEXTURE_2D, Tc);
                    h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, Ba);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
                    k = 0;
                    f === d.RIGHT ? k = -l : f === d.CENTER && (k = -l / 2);
                    f = new I;
                    l = 0.5 * Na;
                    f.translate(b + k - l / 2, c - l, e);
                    f.scale(-a * l, -l, l);
                    f.translate(-1, -1,
                        -1);
                    f.transpose();
                    b = new I;
                    b.scale(1, -1, 1);
                    b.apply(M.array());
                    b.transpose();
                    h.useProgram(J);
                    $("aVertex2d", J, "aVertex", 3, Cc);
                    $("aTextureCoord2d", J, "aTextureCoord", 2, Dc);
                    Z("uSampler2d", J, "uSampler", [0]);
                    Z("uIsDrawingText2d", J, "uIsDrawingText", !0);
                    V("uModel2d", J, "uModel", !1, f.array());
                    V("uView2d", J, "uView", !1, b.array());
                    U("uColor2d", J, "uColor", ka);
                    h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, Ec);
                    h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0)
                };
                f.text = function () {
                    ic !== d.SHAPE && (3 === arguments.length ? Mb(Ua(arguments[0]),
                        arguments[1], arguments[2], 0) : 4 === arguments.length ? Mb(Ua(arguments[0]), arguments[1], arguments[2], arguments[3]) : 5 === arguments.length ? ac(Ua(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], 0) : 6 === arguments.length && ac(Ua(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]))
                };
                f.textMode = function (a) {
                    ic = a
                };
                f.loadGlyphs = function (a) {
                    var b, c, d, e, k, l, n, q, r, t, v, u, y = function (a, b) {
                        var c = 0, d = [], e, f = RegExp(a, "g");
                        for (e = d[c] = f.exec(b); e;)c++, e = d[c] = f.exec(b);
                        return d
                    }, z =
                        function (a) {
                            var f = y("[A-Za-z][0-9\\- ]+|Z", a);
                            u = "return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";
                            q = a = l = k = e = d = c = b = 0;
                            r = "";
                            t = f.length - 1;
                            for (var g = 0; g < t; g++) {
                                var m = f[g][0];
                                a = y("[0-9\\-]+", m);
                                switch (m[0]) {
                                    case "M":
                                        b = parseFloat(a[0][0]);
                                        c = parseFloat(a[1][0]);
                                        u += "curContext.moveTo(" + b + "," + -c + ");";
                                        break;
                                    case "L":
                                        b = parseFloat(a[0][0]);
                                        c = parseFloat(a[1][0]);
                                        u += "curContext.lineTo(" + b + "," + -c + ");";
                                        break;
                                    case "H":
                                        b = parseFloat(a[0][0]);
                                        u += "curContext.lineTo(" + b + "," + -c + ");";
                                        break;
                                    case "V":
                                        c = parseFloat(a[0][0]);
                                        u += "curContext.lineTo(" + b + "," + -c + ");";
                                        break;
                                    case "T":
                                        k = parseFloat(a[0][0]);
                                        l = parseFloat(a[1][0]);
                                        "Q" === r || "T" === r ? (a = Math.sqrt(Math.pow(b - d, 2) + Math.pow(e - c, 2)), q = Math.PI + Math.atan2(d - b, e - c), d = b + Math.sin(q) * a, e = c + Math.cos(q) * a) : (d = b, e = c);
                                        u += "curContext.quadraticCurveTo(" + d + "," + -e + "," + k + "," + -l + ");";
                                        b = k;
                                        c = l;
                                        break;
                                    case "Q":
                                        d = parseFloat(a[0][0]);
                                        e = parseFloat(a[1][0]);
                                        k = parseFloat(a[2][0]);
                                        l = parseFloat(a[3][0]);
                                        u += "curContext.quadraticCurveTo(" + d + "," + -e + "," + k + "," + -l + ");";
                                        b = k;
                                        c = l;
                                        break;
                                    case "Z":
                                        u += "curContext.closePath();"
                                }
                                r = m[0]
                            }
                            u += "afterPathDraw();";
                            u += "curContext.translate(" + v + ",0);";
                            u += "}}";
                            return(new Function("beforePathDraw", "afterPathDraw", u))(function () {
                                h.save();
                                return ha.$ensureContext()
                            }, function () {
                                wa();
                                za();
                                Sa()
                            })
                        }, A = function (b) {
                        var c = b.getElementsByTagName("font");
                        f.glyphTable[a].horiz_adv_x = c[0].getAttribute("horiz-adv-x");
                        c = b.getElementsByTagName("font-face")[0];
                        f.glyphTable[a].units_per_em = parseFloat(c.getAttribute("units-per-em"));
                        f.glyphTable[a].ascent =
                            parseFloat(c.getAttribute("ascent"));
                        f.glyphTable[a].descent = parseFloat(c.getAttribute("descent"));
                        b = b.getElementsByTagName("glyph");
                        for (var c = b.length, d = 0; d < c; d++) {
                            var e = b[d].getAttribute("unicode"), h = b[d].getAttribute("glyph-name");
                            v = b[d].getAttribute("horiz-adv-x");
                            null === v && (v = f.glyphTable[a].horiz_adv_x);
                            n = b[d].getAttribute("d");
                            n !== g && (u = z(n), f.glyphTable[a][h] = {name: h, unicode: e, horiz_adv_x: v, draw: u.draw})
                        }
                    };
                    f.glyphTable[a] = {};
                    (function () {
                        var b;
                        try {
                            b = p.implementation.createDocument("", "", null)
                        } catch (c) {
                            K.debug(c.message);
                            return
                        }
                        try {
                            b.async = !1, b.load(a), A(b.getElementsByTagName("svg")[0])
                        } catch (d) {
                            K.debug(d);
                            try {
                                var e = new m.XMLHttpRequest;
                                e.open("GET", a, !1);
                                e.send(null);
                                A(e.responseXML.documentElement)
                            } catch (f) {
                                K.debug(d)
                            }
                        }
                    })(a);
                    return f.glyphTable[a]
                };
                f.param = function (a) {
                    var b = "data-processingjs-" + a;
                    if (T.hasAttribute(b))return T.getAttribute(b);
                    for (var b = 0, c = T.childNodes.length; b < c; ++b) {
                        var d = T.childNodes.item(b);
                        if (1 === d.nodeType && "param" === d.tagName.toLowerCase() && d.getAttribute("name") === a)return d.getAttribute("value")
                    }
                    return da.params.hasOwnProperty(a) ?
                        da.params[a] : null
                };
                F.prototype.translate = H("translate");
                F.prototype.transform = H("transform");
                F.prototype.scale = H("scale");
                F.prototype.pushMatrix = H("pushMatrix");
                F.prototype.popMatrix = H("popMatrix");
                F.prototype.resetMatrix = H("resetMatrix");
                F.prototype.applyMatrix = H("applyMatrix");
                F.prototype.rotate = H("rotate");
                F.prototype.rotateZ = H("rotateZ");
                F.prototype.shearX = H("shearX");
                F.prototype.shearY = H("shearY");
                F.prototype.redraw = H("redraw");
                F.prototype.toImageData = H("toImageData");
                F.prototype.ambientLight =
                    H("ambientLight");
                F.prototype.directionalLight = H("directionalLight");
                F.prototype.lightFalloff = H("lightFalloff");
                F.prototype.lightSpecular = H("lightSpecular");
                F.prototype.pointLight = H("pointLight");
                F.prototype.noLights = H("noLights");
                F.prototype.spotLight = H("spotLight");
                F.prototype.beginCamera = H("beginCamera");
                F.prototype.endCamera = H("endCamera");
                F.prototype.frustum = H("frustum");
                F.prototype.box = H("box");
                F.prototype.sphere = H("sphere");
                F.prototype.ambient = H("ambient");
                F.prototype.emissive = H("emissive");
                F.prototype.shininess = H("shininess");
                F.prototype.specular = H("specular");
                F.prototype.fill = H("fill");
                F.prototype.stroke = H("stroke");
                F.prototype.strokeWeight = H("strokeWeight");
                F.prototype.smooth = H("smooth");
                F.prototype.noSmooth = H("noSmooth");
                F.prototype.point = H("point");
                F.prototype.vertex = H("vertex");
                F.prototype.endShape = H("endShape");
                F.prototype.bezierVertex = H("bezierVertex");
                F.prototype.curveVertex = H("curveVertex");
                F.prototype.curve = H("curve");
                F.prototype.line = H("line");
                F.prototype.bezier = H("bezier");
                F.prototype.rect = H("rect");
                F.prototype.ellipse = H("ellipse");
                F.prototype.background = H("background");
                F.prototype.image = H("image");
                F.prototype.textWidth = H("textWidth");
                F.prototype.text$line = H("text$line");
                F.prototype.$ensureContext = H("$ensureContext");
                F.prototype.$newPMatrix = H("$newPMatrix");
                F.prototype.size = function (a, b, c) {
                    Ka(c === d.WEBGL ? "3D" : "2D");
                    f.size(a, b, c)
                };
                F.prototype.$init = r;
                E.prototype.$init = function () {
                    f.size(f.width, f.height);
                    h.lineCap = "round";
                    f.noSmooth();
                    f.disableContextMenu()
                };
                B.prototype.$init =
                    function () {
                        f.use3DContext = !0;
                        f.disableContextMenu()
                    };
                X.prototype.$ensureContext = function () {
                    return h
                };
                T.getAttribute("tabindex") || T.setAttribute("tabindex", 0);
                if (Pb)da = new K.Sketch, Ka(), f.size = function (a, b, c) {
                    c && c === d.WEBGL ? Ka("3D") : Ka("2D");
                    f.size(a, b, c)
                }; else {
                    da = k instanceof K.Sketch ? k : "function" === typeof k ? new K.Sketch(k) : k ? K.compile(k) : new K.Sketch(function () {
                    });
                    f.externals.sketch = da;
                    Ka();
                    T.onfocus = function () {
                        f.focused = !0
                    };
                    T.onblur = function () {
                        f.focused = !1;
                        da.options.globalKeyEvents || (f.__keyPressed = !1, hb = [], ob = null)
                    };
                    da.options.pauseOnBlur && (Ia(m, "focus", function () {
                        Da && f.loop()
                    }), Ia(m, "blur", function () {
                        Da && eb && (f.noLoop(), Da = !0);
                        f.__keyPressed = !1;
                        hb = [];
                        ob = null
                    }));
                    var Jc = da.options.globalKeyEvents ? m : T;
                    Ia(Jc, "keydown", rc);
                    Ia(Jc, "keypress", Ob);
                    Ia(Jc, "keyup", bc);
                    for (var Xb in K.lib)K.lib.hasOwnProperty(Xb) && (K.lib[Xb].hasOwnProperty("attach") ? K.lib[Xb].attach(f) : K.lib[Xb]instanceof Function && K.lib[Xb].call(this));
                    var ld = function (a) {
                        if (da.imageCache.pending || PFont.preloading.pending(100))m.setTimeout(function () {
                                ld(a)
                            },
                            100); else {
                            if (m.opera) {
                                var b, c, d = da.imageCache.operaCache;
                                for (b in d)d.hasOwnProperty(b) && (c = d[b], null !== c && p.body.removeChild(c), delete d[b])
                            }
                            da.attach(a, l);
                            da.onLoad(a);
                            a.setup && (a.setup(), a.resetMatrix(), da.onSetup());
                            fb();
                            a.draw && (Da ? a.loop() : a.redraw())
                        }
                    };
                    this.externals.canvas.id !== g && this.externals.canvas.id.length || (this.externals.canvas.id = "__processing" + q.length);
                    Yb[this.externals.canvas.id] = q.length;
                    q.push(this);
                    ld(f)
                }
            };
            K.debug = function () {
                return"console"in m ? function (a) {
                    m.console.log("Processing.js: " +
                        a)
                } : r
            }();
            K.prototype = l;
            K.instances = q;
            K.getInstanceById = function (a) {
                return q[Yb[a]]
            };
            (function (a) {
                function b(a) {
                    return function () {
                        throw"Processing.js does not support " + a + ".";
                    }
                }

                for (var c = "open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "), d = c.length, e, g; d--;)e = c[d], g = e.replace("()", ""), a[g] = b(e)
            })(l);
            return K
        }
    }, {}],
        27: [function (D, y, Q) {
            var k = {virtEquals: D("./Helpers/virtEquals"), virtHashCode: D("./Helpers/virtHashCode"), ObjectIterator: D("./Helpers/ObjectIterator"), PConstants: D("./Helpers/PConstants"), ArrayList: D("./Objects/ArrayList"), HashMap: D("./Objects/HashMap"), PVector: D("./Objects/PVector"), PFont: D("./Objects/PFont"), Char: D("./Objects/Char"), XMLAttribute: D("./Objects/XMLAttribute"), XMLElement: D("./Objects/XMLElement"), PMatrix2D: D("./Objects/PMatrix2D"), PMatrix3D: D("./Objects/PMatrix3D"), PShape: D("./Objects/PShape"),
                colors: D("./Objects/webcolors"), PShapeSVG: D("./Objects/PShapeSVG"), CommonFunctions: D("./P5Functions/commonFunctions"), defaultScope: D("./Helpers/defaultScope"), Processing: D("./Processing"), setupParser: D("./Parser/Parser"), finalize: D("./Helpers/finalizeProcessing")};
            k.extend = {withMath: D("./P5Functions/Math.js"), withProxyFunctions: D("./P5Functions/JavaProxyFunctions")(k.virtHashCode, k.virtEquals), withTouch: D("./P5Functions/touchmouse"), withCommonFunctions: k.CommonFunctions.withCommonFunctions};
            y.exports =
                function (g, n) {
                    var l = function () {
                        }, a = k.virtEquals, b = k.virtHashCode, e = k.PConstants, c = k.CommonFunctions, m = k.ObjectIterator, p = k.Char, r = k.XMLAttribute(), d = k.ArrayList({virtHashCode: b, virtEquals: a}), a = k.HashMap({virtHashCode: b, virtEquals: a}), b = k.PVector({PConstants: e}), y = k.PFont({Browser: g, noop: l}), r = k.XMLElement({Browser: g, XMLAttribute: r}), Q = k.PMatrix2D({p: c}), G = k.PMatrix3D({p: c}), Q = k.PShape({PConstants: e, PMatrix2D: Q, PMatrix3D: G}), c = k.PShapeSVG({CommonFunctions: c, PConstants: e, PShape: Q, XMLElement: r, colors: k.colors}),
                        e = k.defaultScope({ArrayList: d, HashMap: a, PVector: b, PFont: y, PShapeSVG: c, ObjectIterator: m, PConstants: e, Char: p, XMLElement: r, XML: r}), m = k.Processing({defaultScope: e, Browser: g, extend: k.extend, noop: l}), m = k.setupParser(m, {Browser: g, aFunctions: n, defaultScope: e});
                    return m = k.finalize(m, {version: D("../package.json").version, isDomPresent: g.isDomPresent, window: g.window, document: g.document, noop: l})
                }
        }, {"../package.json": 2, "./Helpers/ObjectIterator": 3, "./Helpers/PConstants": 4, "./Helpers/defaultScope": 5, "./Helpers/finalizeProcessing": 6,
            "./Helpers/virtEquals": 7, "./Helpers/virtHashCode": 8, "./Objects/ArrayList": 9, "./Objects/Char": 10, "./Objects/HashMap": 11, "./Objects/PFont": 12, "./Objects/PMatrix2D": 13, "./Objects/PMatrix3D": 14, "./Objects/PShape": 15, "./Objects/PShapeSVG": 16, "./Objects/PVector": 17, "./Objects/XMLAttribute": 18, "./Objects/XMLElement": 19, "./Objects/webcolors": 20, "./P5Functions/JavaProxyFunctions": 21, "./P5Functions/Math.js": 22, "./P5Functions/commonFunctions": 23, "./P5Functions/touchmouse": 24, "./Parser/Parser": 25, "./Processing": 26}]},
    {}, [1]);