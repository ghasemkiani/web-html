import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

import { Script } from "./script.js";

class GoogleAnalytics0 extends Component {
  static {
    this.is("gk-html-google-analytics-0");
    cutil.extend(this.prototype, {
      _id: null,
      _domain: null,
      _asDataUri: null,
      _cdata: null,
      
      nscript: null,
    });
  }
  get id() {
		if (cutil.na(this._id)) {
			this._id = this.x.attr(this, "id");
		}
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
  get domain() {
		if (cutil.na(this._domain)) {
			this._domain = this.x.attr(this, "domain");
		}
		return this._domain;
	}
	set domain(domain) {
		this._domain = domain;
	}
  get asDataUri() {
		if (cutil.na(this._asDataUri)) {
			this._asDataUri = cutil.asBooleanFromString(this.x.attr(this, "as-data-uri"));
		}
		return this._asDataUri;
	}
	set asDataUri(asDataUri) {
		this._asDataUri = asDataUri;
	}
  get cdata() {
		if (cutil.na(this._cdata)) {
			this._cdata = cutil.asBooleanFromString(this.x.attr(this, "cdata"));
		}
		return this._cdata;
	}
	set cdata(cdata) {
		this._cdata = cdata;
	}
  create({ x, node }) {
    let cmp = this;
    
    const { id, domain, asDataUri, cdata } = cmp;
    
    let nscript;
    
    Script.run({
      x,
      node,
      f: function ({ id, domain }) {
        (function (i, s, o, g, r, a, m) {
          i["GoogleAnalyticsObject"] = r;
          (i[r] =
            i[r] ||
            function () {
              (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(
          window,
          document,
          "script",
          "https://www.google-analytics.com/analytics.js",
          "ga",
        );
        ga("create", id, domain);
        ga("send", "pageview");
      },
    },  (node) => {
      ({ nscript } = node);
    });
    cutil.assign(cmp, { nscript });
  }
}

export { GoogleAnalytics0 };
