import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HNNewsItem extends PolymerElement {
  static get template() {
    return html `
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
          <template is="dom-if" if="[[!hideIndex]]">
            <span class="index">[[_index(index)]]</span>
          </template>
          <div class="item-title">
            <a href="[[_getUrl(item.url)]]" rel="noopener" target="_blank">[[item.title]]</a>
          </div>
          <div class="item-details">
            <template is="dom-if" if="[[!_isNull(item.points)]]">
              <span class="points">[[item.points]] points</span>
            </template>
            <template is="dom-if" if="[[!_isNull(item.user)]]">
              <span>by</span>
              <a href="[[_userProfile(item.user)]]" target="_blank" rel="noopener">[[item.user]]</a>
            </template>
            <span class="time">[[item.time_ago]]</span>
            <template is="dom-if" if="[[_isNonZero(item.comments_count)]]">
              <a class="comments" href$="/item/[[item.id]]">[[item.comments_count]] comments</a>
            </template>
          </div>
        `;
  }
  
  static get properties() {
    return {
      item: Object,
      index: Number,
      hideIndex: {
        type: Boolean,
        value: false
      }
    };
  }

  _index(index) {
      return index + 1;
  }

  _userProfile(user) {
      return `https://news.ycombinator.com/user?id=${user}`;
  }

  _isNull(value) {
    return value == null;
  }

  _isNonZero(count) {
    return count !== 0;
  }

  _getUrl(url, id) {
    return url.startsWith("item") ? `/item/${id}` : url;
  }
}

window.customElements.define('hn-news-item', HNNewsItem);