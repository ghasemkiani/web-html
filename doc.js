import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Doc extends Component {
  static {
    this.is("gk-html-doc");
    cutil.extend(this.prototype, {
      document: null,
      nhtml: null,
      title: null,
      description: null,
      keywords: null,
      author: null,
      noMetaCharset: false,
      cs: "UTF-8",
      
      nhead: null,
      nbody: null,
      ndescription: null,
      nkeywords: null,
      nauthor: null,
      ntitle: null,
    });
  }
  create({ x, node }) {
    const cmp = this;
    let {
      document,
      nhtml,
      title,
      description,
      keywords,
      author,
      noMetaCharset = false,
      cs = "UTF-8",
    } = cmp;
    if (cutil.na(document)) {
      if (cutil.a(nhtml)) {
        document = x.odoc(nhtml);
      } else {
        document = x.doc();
      }
    }
    if (cutil.na(nhtml)) {
      nhtml = x.root(document);
    }
    let nhead = x.q(document, "head") || x.ch(nhtml, "head");
    let ndescription;
    let nkeywords;
    let nauthor;
    let ntitle;
    x.chain(nhead, (node) => {
      if (!noMetaCharset && x.qq(node, "meta[charset]").length === 0) {
        x.ch(node, "meta", (node) => {
          x.attr(node, "charset", cs);
        });
      }
      ntitle = x.q(node, "title") || x.ch(node, "title");
      x.chain(ntitle, (node) => {
        if (cutil.a(title)) {
          x.cl(node);
          x.t(node, title);
        }
      });
      if (cutil.a(description)) {
        ndescription = x.ch(node, "meta[name=description]", (node) => {
          x.attr(node, "content", description);
        });
      }
      if (cutil.a(keywords)) {
        nkeywords = x.ch(node, "meta[name=keywords]", (node) => {
          x.attr(node, "content", keywords);
        });
      }
      if (cutil.a(author)) {
        nauthor = x.ch(node, "meta[name=author]", (node) => {
          x.attr(node, "content", author);
        });
      }
    });
    let nbody = x.q(document, "body") || x.ch(nhtml, "body");
    cutil.assign(cmp, {
      document,
      nhtml,
      nhead,
      ntitle,
      nbody,
      ndescription,
      nkeywords,
      nauthor,
    });
  }
}

export { Doc };
