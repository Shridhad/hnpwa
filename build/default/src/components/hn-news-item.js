import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";

class HNNewsItem extends PolymerElement {
  static get template() {
    return html`
          <style>
            :host {
              display: block;
              padding: 0.2rem 0.5rem;
              position: relative;
              padding-left: 40px;
              white-space: normal;
            }

            .item-title a {
                color: #333;
                text-decoration: none;
                font-weight: 500;
            }

            .index  {
                position: absolute;
                top: 50%;
                left: 0;
                width: 20px;
                height: 20px;
                margin-top: -10px;
            }

            .item-details {
                color: #666;
            }

            .item-details a {
                color: #666;
                text-transform: lowercase;    
            }

            .item-details .comments:before {
                content: "|";
                padding-right: 2px;        
            }

          </style>
          <span class="index">[[_index(index)]]</span>
          <div class="item-title">
            <a href="[[item.url]]">[[item.title]]</a>
          </div>
          <div class="item-details">
            <span class="points">[[item.points]] points</span>
            <span>by</span>
            <a href="[[_userProfile(item.user)]]" target="_blank">[[item.user]]</a>
            <span class="time">[[item.time_ago]]</span>
            <span class="comments">[[item.comments_count]] comments</span>
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

  _index(index) {
    return index + 1;
  }

  _userProfile(user) {
    return `https://news.ycombinator.com/user?id=${user}`;
  }

}

window.customElements.define('hn-news-item', HNNewsItem);