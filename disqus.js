import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

import { Script } from "./script.js";

class Discus extends Component {
  static {
    this.is("gk-html-disqus");
    cutil.extend(this.prototype, {
      username,
      title,
      url,
      uri,
      _asDataUri: true,
      _pretty: true,
      _cdata: false,
      
      nscript: null,
    });
  }
  get username() {
		if (cutil.na(this._username)) {
			this._username = this.x.attr(this, "username");
		}
		return this._username;
	}
	set username(username) {
		this._username = username;
	}
  get title() {
		if (cutil.na(this._title)) {
			this._title = this.x.attr(this, "title");
		}
		return this._title;
	}
	set title(title) {
		this._title = title;
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
  get uri() {
		if (cutil.na(this._uri)) {
			this._uri = this.x.attr(this, "uri");
		}
		return this._uri;
	}
	set uri(uri) {
		this._uri = uri;
	}
  get asDataUri() {
		if (this.x.has(this, "as-data-uri")) {
			this._asDataUri = cutil.asBooleanFromString(this.x.attr(this, "as-data-uri"));
		}
		return this._asDataUri;
	}
	set asDataUri(asDataUri) {
		this._asDataUri = asDataUri;
	}
  get pretty() {
		if (this.x.has(this, "pretty")) {
			this._pretty = cutil.asBooleanFromString(this.x.attr(this, "pretty"));
		}
		return this._pretty;
	}
	set pretty(pretty) {
		this._pretty = pretty;
	}
  get cdata() {
		if (this.x.has(this, "cdata")) {
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
    
    let nscript;
    
    x.ch(node, "div#disqus_thread");
    
    Script.run({
      x,
      node,
      f: ({ username, title, url, uri }) => {
        var disqus_config = (window.disqus_config = function () {
          this.page.title = title;
          this.page.url = url;
          this.page.identifier = uri;
        });
        (function () {
          var d = window.document,
            s = d.createElement("script");
          s.src = `https://${username}.disqus.com/embed.js`;
          s.setAttribute("data-timestamp", new Date().getTime());
          (d.head || d.body).appendChild(s);
        })();
      },
      arg: { username, title, url, uri },
      asDataUri,
      cdata,
      pretty,
    }, node => {
      ({ nscript: nscript2 } = node);
    });
    x.ch(node, "noscript", (node) => {
      x.t(node, "Please enable JavaScript to view the ");
      x.ch(node, "a[href=https://disqus.com/?ref_noscript]", (node) => {
        x.t(node, "comments powered by Disqus");
      });
      x.t(node, ".");
    });
    cutil.assign(cmp, { nscript });
  }
}

export { Discus };
