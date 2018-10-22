import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import {Router} from '@vaadin/router';
import './components/hn-header-view';
import './components/hn-news-list';

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

        #outlet {
          width: 1100px;
          max-width: 100%;
          margin: auto;
          background-color: #f0f3f7;
          padding-bottom: 2rem;
        }
      </style>
      <div class="main">
        <hn-header-view></hn-header-view>
        <div id="outlet"></div>
        <hn-offline-view></hn-offline-view>
      </div>
    `;
  }

  ready() {
    super.ready();

    const outlet = this.$.outlet;
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'hn-news-list'},
      {path: '/new', component: 'hn-news-list'},
      {path: '/show', component: 'hn-news-list'},
      {path: '/ask', component: 'hn-news-list'},
      {path: '/jobs', component: 'hn-news-list'},
      {path: '/item/:id', component: 'hn-item-view'}
    ])
  }

  connectedCallback() {
    super.connectedCallback();

    this._lazyLoad();
  }

  _lazyLoad() {
    if (this.loadComplete) {
      return true;
    }
    afterNextRender(this, () => {
      import('./lazy-resources.js').then(() => {
        // Register service worker if supported.
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('service-worker.js', {scope: '/'});
        }
        this.loadComplete = true;
      });
    });
  }
}

window.customElements.define('vaadin-hn-app', VaadinHnApp);
