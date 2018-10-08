
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {fetchItems} from '../data/hn-api';
import './hn-news-item';
import './hn-comment';

class HNItemView extends PolymerElement {
  static get template() {
    return html `
          <style>
            :host {
              display: block;
              padding-top: 1rem;
            }

            hn-news-item,
            .comments {
              padding-left: 1rem;
              padding-right: 0.5rem;
            }
          </style>
          <div class="item-detail-view">
            <hn-news-item item="[[item]]" hide-index></hn-news-item>
            <div class="comments">
              <template is="dom-repeat" items="[[item.comments]]">
                <hn-comment comment="[[item]]"></hn-comment>  
              </template>
            </div>
          </div>
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
    fetchItems(location.pathname)
    .then(item => this.item = item)
    .then(_ => console.log("Item", this.item))
    .catch(err => console.error("Error ", err));
  }
}

window.customElements.define('hn-item-view', HNItemView);