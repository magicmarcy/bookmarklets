/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet allows you to make notes about
individual web pages that you can refer to again
and again. The notes are stored in your browser's
LocalStorage and remain available until you clear
it. This means that your notes will survive a
browser restart and will still be available.

Clicking on the bookmarklet opens a modal dialog
where you can enter your note. If a note has
already been saved for this site, you can edit
the existing text.

The code is relatively easy to read, so you can
customize it to your liking.

@author magicmarcy
 */

javascript:(function () {
    let savedNote = localStorage.getItem('mm_note');

    let modalWrapper = document.createElement('div');
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.top = '0';
    modalWrapper.style.left = '0';
    modalWrapper.style.width = '100%';
    modalWrapper.style.height = '100%';
    modalWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalWrapper.style.display = 'flex';
    modalWrapper.style.justifyContent = 'center';
    modalWrapper.style.alignItems = 'center';
    modalWrapper.style.zIndex = '9999';

    let modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.width = '700px';
    modalContent.style.height = '450px';
    modalContent.style.overflow = 'auto';

    let headline = document.createElement('div');
    headline.style.fontFamily = 'monospace';
    headline.style.color = '#000';
    headline.style.width = '100%';

    let headlinetext = document.createElement('h3');
    headlinetext.textContent = 'Notiz f%C3%BCr diese Seite';
    headlinetext.style.fontSize = '24px';
    headline.appendChild(headlinetext);

    let noteTextarea = document.createElement('textarea');
    noteTextarea.className = 'note-textarea';
    noteTextarea.style.width = '100%';
    noteTextarea.style.minHeight = '350px';
    noteTextarea.style.border = '1px solid #ccc';
    noteTextarea.style.padding = '10px';
    noteTextarea.style.fontFamily = 'monospace';
    noteTextarea.style.fontSize = '14px !important';
    noteTextarea.style.boxSizing = 'border-box';
    noteTextarea.value = savedNote || '';

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Speichern';
    saveButton.style.marginTop = '10px';
    saveButton.style.padding = '10px 20px';
    saveButton.style.fontSize = '16px';
    saveButton.style.backgroundColor = '#007bff';
    saveButton.style.color = '#fff';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';

    modalContent.appendChild(headline);
    modalContent.appendChild(noteTextarea);
    modalContent.appendChild(saveButton);
    modalWrapper.appendChild(modalContent);
    document.body.appendChild(modalWrapper);

    noteTextarea.focus();

    saveButton.addEventListener('click', function () {
        let newNote = noteTextarea.value;
        localStorage.setItem('mm_note', newNote);
        document.body.removeChild(modalWrapper);
    });

    modalWrapper.addEventListener('click', function (event) {
        if (event.target === modalWrapper) {
            document.body.removeChild(modalWrapper);
        }
    });
})();
