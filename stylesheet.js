import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Stylesheet extends Component {
  static {
    this.is("gk-html-stylesheet");
    cutil.extend(this.prototype, {
      _url: null,
      f: null,
      _asDataUri: null,
      _integrity: null,
      _crossorigin: null,
      _cdata: null,
      
      nlink: null,
      nstyle: null,
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
    
    const { url, f, asDataUri, integrity, crossorigin, cdata } = cmp;
    
    let nlink;
    let nstyle;
    if (url) {
      x.ch(node, "link[rel=stylesheet,type=text/css]", (node) => {
        nlink = node;
        x.attr(node, "href", url);
        if (cutil.a(integrity)) {
          x.attr(node, "integrity", integrity);
        }
        if (cutil.a(crossorigin)) {
          x.attr(node, "crossorigin", crossorigin);
        }
      });
    } else {
      let ss = x.ss(onStylesheet);
      if (asDataUri) {
        let url = ss.dataUri;
        Stylesheet.run({ x, node, url }, (node) => {
          ({ nlink, nstyle } = node);
        });
      } else {
        x.ch(node, "style[type=text/css]", (node) => {
          nstyle = node;
          if (cdata) {
            x.cdata(node, ss.string);
          } else {
            x.t(node, ss.string);
          }
        });
      }
    }
    cutil.assign(cmp, { nlink, nstyle });
  }
}

export { Stylesheet };
