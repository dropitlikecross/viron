import clipboard from 'clipboard-js';
import i18n from '../../core/i18n';

export default function() {
  /**
   * 入力値をhtmlに変換します。
   */
  const compile = () => {

  };

  const store = this.riotx.get();

  // クリップっボードコピーをサポートしているか否か。
  let isClipboardCopySupported = true;
  // モバイル用レイアウトか否か。
  this.isMobile = store.getter('layout.isMobile');

  // タブの選択状態。
  this.isEditorMode = true;
  this.isPreviewMode = false;

  this.on('mount', () => {
    compile();
    this.update();
  }).on('update', () => {
    compile();
  });

  this.handleEditorTabTap = () => {
    this.isEditorMode = true;
    this.isPreviewMode = false;
    this.update();
  };

  this.handlePreviewTabTap = () => {
    this.isEditorMode = false;
    this.isPreviewMode = true;
    this.update();
  };

  /**
   * editor値が変更された時の処理。
   * @param {String} newText
   */
  this.handleEditorChange = newText => {
    if (!this.opts.onchange) {
      return;
    }
    this.opts.onchange(newText);
  };

  this.handleEditorFocus = () => {
    if (!this.opts.onfocus) {
      return;
    }
    this.opts.onfocus();
  };

  this.handleEditorBlur = () => {
    if (!this.opts.onblur) {
      return;
    }
    this.opts.onblur();
  };

  this.handleBlockerTap = e => {
    e.stopPropagation();
    if (this.isMobile || !isClipboardCopySupported || !this.opts.val) {
      return;
    }
    Promise
      .resolve()
      .then(() => {
        return clipboard.copy(this.opts.val);
      })
      .then(() => store.action('toasts.add', {
        message: i18n.get('cmp.html.copy_message')
      }))
      .catch(() => {
        isClipboardCopySupported = false;
        store.action('toasts.add', {
          type: 'error',
          message: i18n.get('cmp.html.error_copy_message')
        });
      });
  };
}
