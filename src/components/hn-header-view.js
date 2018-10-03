import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class HNHeaderView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: #2d3033;
          padding: 0.5rem 0;
        }

        .header {
          width: 1100px;
          max-width: 100%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
        }

        .header a {
          color: #00b4f0;
          transition: all .2s ease-in-out;
        }

        .header .logo,
        .header .top-nav {
          display: inline-block;
        }

        .header .logo img {
          height: 15px;
        }

        .top-nav .nav-list {
          margin: 0;
          list-style: none;
          padding-left: 1rem;
          display: inline-block;
        }

        .nav-list .nav-item {
          margin-left: 1.3rem;
          display: inline-block; 
        }

        .nav-list .nav-item a {
          text-decoration: none;
          padding: 0.2rem 0;
          font-weight: 500;
          border-bottom: 2px solid transparent;
        }

        .nav-list .nav-item a:hover,
        .nav-list .nav-item a:active {
          border-color: #00b4f0;
          color: #fff;
        }
      </style>
      <header class="header">
          <div class="logo">
            <a href="/"><img src="/images/logo.svg" alt="Vaadin"></a>
          </div>
          <nav class="top-nav">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="/">New</a>
              </li>
              <li class="nav-item">
                <a href="/show">Show</a>
              </li>
              <li class="nav-item">
                <a href="/ask">Ask</a>
              </li>
            </ul>
          </nav>
      </header>
    `;
  }
}

window.customElements.define('hn-header-view', HNHeaderView);
