/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet allows you to hash any text with
SHA-256. Clicking on the bookmarklet opens a dialog
where you can enter the text. Clicking "ok" will
copy the hash value directly to the clipboard.

For the sake of simplicity, I left out the
confirmation dialog.

@author magicmarcy
*/

javascript:(()=> {
    const sh = async plain => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(plain))))
        .map(byte => ('00' + byte.toString(16)).slice(-2))
        .join('');
    const ui = prompt('Bitte geben Sie den String ein:','');
    if(ui) {
        sh(ui).then(res => navigator.clipboard.writeText(res));
    }
})();
