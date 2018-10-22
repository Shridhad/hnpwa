import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

class HNOfflineView extends PolymerElement {
  static get template() {
    return html `
          <style>
            .offline-view {
              display: block;
              text-align: center;
              position: fixed;
              width: 300px;
              bottom: 0;
              left: 50%;
              color: #EEE;
              background: #2d3033;
              margin-left: -150px;
              border-radius: 5px 5px 0 0;
              visibility: hidden;
              will-change: transform;
              transform: translate3d(0, 100%, 0);
              transition-property: visibility, transform, opacity;
              transition-duration: 0.3s;      
            }

            .offline-view[open] {
                visibility: visible;
                transform: translate3d(0, 0, 0);
            }
          </style>
          <div class="offline-view" open$="[[offline]]">
            <p>You are offline.</p>
          </div>
        `;
  }

  static get properties() {
    return {
      offline: {
        type: Boolean,
        value: false
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    afterNextRender(this, () => {
      window.addEventListener("online", this.handleNetworkChange.bind(this));  
      window.addEventListener("offline", this.handleNetworkChange.bind(this));  
      window.addEventListener("load", this.handleNetworkChange.bind(this));  
    }); 
  }

  handleNetworkChange() {
    this.offline = !navigator.onLine;
  }
}

window.customElements.define('hn-offline-view', HNOfflineView);