import { MarkdownEditor } from "./markdown-editor.js";

// Initialize the MarkdownEditor.
document.addEventListener('DOMContentLoaded', () => {
    new MarkdownEditor();
    initHelpDialog();
});

function initHelpDialog() {
    const button = document.getElementById('help-button');
    const overlay = document.getElementById('help-overlay');
    const closeBtn = overlay.querySelector('.help-close');
    const dialog = overlay.querySelector('.help-dialog');

    const open = () => { overlay.hidden = false; };
    const close = () => { overlay.hidden = true; };

    button.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (!dialog.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.hidden) close();
    });
}
