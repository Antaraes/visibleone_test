/**
 * Base Component Class
 * Implements Single Responsibility Principle
 * All components extend from this base class
 */
export class BaseComponent {
  constructor(props = {}) {
    this.props = props;
    this.element = null;
  }

  /**
   * Create DOM element from HTML string
   */
  createElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }

  /**
   * Render method to be implemented by child classes
   */
  render() {
    throw new Error("Render method must be implemented");
  }

  /**
   * Mount component to DOM
   */
  mount(parent) {
    if (!this.element) {
      this.element = this.render();
    }
    parent.appendChild(this.element);
    this.onMount();
    return this.element;
  }

  /**
   * Lifecycle hook - called after component is mounted
   */
  onMount() {
    // Override in child classes
  }

  /**
   * Unmount component from DOM
   */
  unmount() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.onUnmount();
  }

  /**
   * Lifecycle hook - called before component is unmounted
   */
  onUnmount() {
    // Override in child classes
  }

  /**
   * Update component props
   */
  update(newProps) {
    this.props = { ...this.props, ...newProps };
    if (this.element && this.element.parentNode) {
      const parent = this.element.parentNode;
      this.unmount();
      this.mount(parent);
    }
  }
}
