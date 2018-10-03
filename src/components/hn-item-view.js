
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HNItemView extends PolymerElement {
  static get template() {
    return html `
          <style>
            :host {
              display: block;
            }
          </style>
          <h2>Item View</h2>
        `;
  }

  static get properties() {
    return {
      item: {
        type: Object
      }
    };
  }

  onBeforeEnter(location, commands, router) {
      console.log("location ", location);
  }
}

window.customElements.define('hn-item-view', HNItemView);