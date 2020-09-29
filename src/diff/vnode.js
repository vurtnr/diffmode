//虚拟dom的构造函数
class Element {
  constructor(type, key, props, child, text) {
    this.type = type;
    this.key = key;
    this.props = props;
    this.children = child;
    this.text = text;
  }
}

function vNode(type, key, props, child, text) {
  return new Element(type, key, props, child, text);
}

export {Element, vNode}