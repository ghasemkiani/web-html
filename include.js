import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Include extends Component {
  static {
    this.is("gk-html-include");
    cutil.extend(this.prototype, {
      fn: null,
      _cs: "UTF-8",
      
      text: null,
    });
  }
  get fn() {
		if (cutil.na(this._fn)) {
			this._fn = this.x.attr(this, "fn");
		}
		return this._fn;
	}
	set fn(fn) {
		this._fn = fn;
	}
  get cs() {
		if (this.x.has(this, "cs")) {
			this._cs = this.x.attr(this, "cs");
		}
		return this._cs;
	}
	set cs(cs) {
		this._cs = cs;
	}
  create({ x, node }) {
    let cmp = this;
    
    const { fn, cs } = cmp;
    
    const text = new Textual({ fn, cs }).read().string;
    
    node.innerHTML = text;
    
    cutil.assign(cmp, { text });
  }
}

export { Include };
