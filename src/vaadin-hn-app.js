import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './components/hn-top-news';

/**
 * @customElement
 * @polymer
 */
class VaadinHnApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <hn-top-news></hn-top-news>
    `;
  }
}

window.customElements.define('vaadin-hn-app', VaadinHnApp);
