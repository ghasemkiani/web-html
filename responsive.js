import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Responsive extends Component {
  static {
    this.is("gk-html-responsive");
    cutil.extend(this.prototype, {
      nhead: null,
    });
  }
  create({ x, node }) {
    let cmp = this;
    
    const { nhead } = cmp;
    
    if (cutil.a(nhead)) {
      node = nhead;
    }
    x.ch(node, "meta[name=viewport]", (node) => {
      x.attr(node, "content", "width=device-width,initial-scale=1");
    });
  }
}

export { Responsive };
