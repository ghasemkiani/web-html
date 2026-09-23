import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class ImportGoogleFont extends Component {
  static {
    this.is("gk-html-import-google-font");
    cutil.extend(this.prototype, {
      ss: null,
      name: null,
    });
  }
  create({ x, node }) {
    let cmp = this;
    
    const { name, ss } = cmp;
    
    ss.instruction(
      `@import url(https://fonts.googleapis.com/css?family=${encodeURIComponent(name)});`,
    );
  }
}

export { ImportGoogleFont };
