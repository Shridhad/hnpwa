import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {Router} from '@vaadin/router';
import './components/hn-header-view';
import './components/hn-news-list';
import './components/hn-item-view';

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
      <div class="main">
        <hn-header-view></hn-header-view>
        <div id="outlet"></div>
      </div>
    `;
  }

  ready() {
    super.ready();

    const outlet = this.$.outlet;
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'hn-news-list'},
      {path: '/show', component: 'hn-news-list'},
      {path: '/ask', component: 'hn-news-list'},
      {path: '/item/:id', component: 'hn-item-view'}
    ])

  }
}

window.customElements.define('vaadin-hn-app', VaadinHnApp);
