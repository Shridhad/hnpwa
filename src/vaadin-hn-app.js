import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {fetchTopNews} from './data/hn-api';
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
      <hn-top-news news=[[news]]></hn-top-news>
    `;
  }

  ready() {
    super.ready();

    fetchTopNews()
      .then(news => this.news = news)
      .then(_ => console.log(this.news));
  }
}

window.customElements.define('vaadin-hn-app', VaadinHnApp);
