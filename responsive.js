import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Responsive extends Component {
  static run({ x, node, nhead }) {
    if (cutil.a(nhead)) {
      node = nhead;
    }
    x.ch(node, "meta[name=viewport]", (node) => {
      x.attr(node, "content", "width=device-width,initial-scale=1");
    });
  }
}

export { Responsive };
