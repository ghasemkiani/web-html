import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Script extends Component {
  static {
    this.is("gk-html-script");
    cutil.extend(this.prototype, {
      _url: null,
      f: null,
      arg: null,
      pretty: false,
      _asDataUri: null,
      _integrity: null,
      _crossorigin: null,
      _cdata: null,
      
      nscript: null,
    });
  }
  get url() {
		if (cutil.na(this._url)) {
			this._url = this.x.attr(this, "url");
		}
		return this._url;
	}
	set url(url) {
		this._url = url;
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
  get integrity() {
		if (cutil.na(this._integrity)) {
			this._integrity = this.x.attr(this, "integrity");
		}
		return this._integrity;
	}
	set integrity(integrity) {
		this._integrity = integrity;
	}
  get crossorigin() {
		if (cutil.na(this._crossorigin)) {
			this._crossorigin = this.x.attr(this, "crossorigin");
		}
		return this._crossorigin;
	}
	set crossorigin(crossorigin) {
		this._crossorigin = crossorigin;
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
    let nscript;
    x.ch(node, "script", (node) => {
      nscript = node;
      if (cutil.a(url)) {
        x.attr(node, "src", url);
      } else {
        let script = x.js(f, arg, pretty);
        if (asDataUri) {
          x.attr(node, "src", script.dataUri);
        } else {
          if (cdata) {
            x.cdata(node, script.string);
          } else {
            x.t(node, script.string);
          }
        }
      }
      if (cutil.a(integrity)) {
        x.attr(node, "integrity", integrity);
      }
      if (cutil.a(crossorigin)) {
        x.attr(node, "crossorigin", crossorigin);
      }
    });
    cutil.assign(cmp, { nscript });
  }
}

export { Script };
