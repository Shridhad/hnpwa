import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HNComment extends PolymerElement {
  static get template() {
    return html `
          <style>
            :host {
              display: block;
              font-size: 0.95rem;
              margin-top: 1rem;
            }

            .comment-meta {
                color: #666;
            }

            .comment-meta a {
                color: #666;
                text-transform: lowercase;    
            }

            .content {
                margin: 0;
                padding-left: 0.5rem;
                border-left: 1px solid rgba(0, 0, 0, 0.1);
            }

            .content p {
                margin: 0.5rem 0 0;
            }

            .content a {
                color: inherit;
            }

            .comments {
                padding-left: 1rem;
            }

          </style>
          <div class="comment-view">
            <div class="comment-meta">
                <template is="dom-if" if="[[!_isNull(comment.user)]]">
                <span>by</span>
                <a href="[[_userProfile(comment.user)]]" target="_blank" rel="noopener">[[comment.user]]</a>
                </template>
                <span class="time">[[comment.time_ago]]</span>
            </div>
            <p class="content" inner-h-t-m-l="[[comment.content]]"></p>
            <div class="comments">
                <template is="dom-repeat" items="[[comment.comments]]">
                    <hn-comment comment="[[item]]"></hn-comment>
                </template>
            </div>
          </div>
        `;
  }

  static get properties() {
    return {
      comment: {
        type: Object
      }
    };
  }

    _userProfile(user) {
        return `https://news.ycombinator.com/user?id=${user}`;
    }

    _isNull(value) {
        return value == null;
    }
}

window.customElements.define('hn-comment', HNComment);
