import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Favicon extends Component {
  static {
    this.is("gk-html-favicon");
    cutil.extend(this.prototype, {
      _url: null,
      nhead: null,
      
      nlink: null,
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
  create({ x, node }) {
    let cmp = this;
    
    const { url, nhead } = cmp;
    
    let nlink;
    if (cutil.a(nhead)) {
      node = nhead;
    }
    x.ch(node, "link[rel=icon]", (node) => {
      nlink = node;
      if (/\.ico$/i.test(url)) {
        x.attr(node, "type", "image/x-icon");
      }
      x.attr(node, "href", url);
    });
    cutil.assign(cmp, { nlink });
  }
}

export { Favicon };
