import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import {fetchItems} from '../data/hn-api';

class HNNewsList extends PolymerElement {
  static get template() {
    return html `
          <style>
            :host {
              display: block;
              margin: 0 auto;
            }
    
            hn-news-item {
              margin-left: 1rem;
              border-bottom: 1px solid hsla(214, 53%, 23%, 0.16);
            }
          </style>
          <div class="news-list">
            <template is="dom-repeat" items="[[items]]" mutable-data>
              <hn-news-item item="[[item]]" index="[[index]]"></hn-news-item>
            </template>
          </div>
        `;
  }

  static get properties() {
    return {
      items: {
        type: Array,
        value: []
      }
    }
  }

  ready() {
    super.ready();

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