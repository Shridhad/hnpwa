import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import {fetchItems} from '../data/hn-api';
import './hn-news-item';

class HNNewsList extends PolymerElement {
  static get template() {
    return html `
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
          <vaadin-grid items="[[items]]">
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
      items: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    let type =  this.getType(this.location.pathname);
    fetchItems(type)
      .then(news => this.items = news)
      .then(_ => console.log("Items", this.items))
      .catch(err => console.error("Error ", err));
  }

  getType(type) {
    switch (type) {
      case "/new" : return "/newest";
      case "/top" : 
      case  "/"   : return "/news";
      default     : return type;
    }
  }
}

window.customElements.define('hn-news-list', HNNewsList);