import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

import { Script } from "./script.js";

class GoogleAnalytics0 extends Component {
  static {
    this.is("gk-html-google-analytics");
    cutil.extend(this.prototype, {
      _id: null,
      _asDataUri: null,
      _pretty: true,
      _cdata: null,
      
      nscript1: null,
      nscript2: null,
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
  get asDataUri() {
		if (cutil.na(this._asDataUri)) {
			this._asDataUri = cutil.asBooleanFromString(this.x.attr(this, "as-data-uri"));
		}
		return this._asDataUri;
	}
	set asDataUri(asDataUri) {
		this._asDataUri = asDataUri;
	}
  get pretty() {
		if (this.x.has(this, "as-data-uri")) {
			this._pretty = cutil.asBooleanFromString(this.x.attr(this, "as-data-uri"));
		}
		return this._pretty;
	}
	set pretty(pretty) {
		this._pretty = pretty;
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
    
    const { id, asDataUri, cdata, pretty } = cmp;
    
    let nscript1;
    let nscript2;
    
    Script.run({
      x,
      node,
      url: `https://www.googletagmanager.com/gtag/js?id=${id}`,
    } => {
      ({ nscript: nscript1 } = node;);
    });
    Script.run({
      node,
      f: function ({ id }) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", id);
      },
      arg: { id },
      asDataUri,
      cdata,
      pretty,
    } => {
      ({ nscript: nscript2 } = node;);
    });
    cutil.assign(cmp, { nscript1, nscript2 });
  }
}

export { GoogleAnalytics0 };
