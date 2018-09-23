import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js";
import "./hn-news-item.js";

class HNTopNews extends PolymerElement {
  static get template() {
    return html`
          <style>
            :host {
              display: block;
              width: 1100px;
              height: 90vh;
              margin: 0 auto;
              max-width: 100%;
            }
    
            vaadin-grid {
              height: 100%;
              border: none;
            }
          </style>
          <vaadin-grid items="[[news]]">
            <vaadin-grid-column>
              <template>
                <hn-news-item item="[[item]]" index="[[index]]"></hn-news-item>
              </template>
            </vaadin-grid-column>
          </vaadin-grid>
        `;
  }

  static get properties() {
    return {
      news: {
        type: Array
      }
    };
  }

}

window.customElements.define('hn-top-news', HNTopNews);