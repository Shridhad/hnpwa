import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import {fetchTopNews} from '../data/hn-api';
import './hn-news-item';

class HNTopNews extends PolymerElement {
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

  ready() {
    super.ready();

    fetchTopNews()
      .then(news => this.news = news)
      .then(_ => console.log("news", this.news))
      .catch(err => console.error("Error ", err));
  }
}

window.customElements.define('hn-top-news', HNTopNews);