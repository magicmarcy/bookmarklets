/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet converts the selected text
alternately into lowercase and uppercase letters
and copies the result to the clipboard. Works with
texts of any length.

Thus the word "Boomer" becomes the word "bOoMeR"

@author magicmarcy
*/

javascript:(() => {
    navigator.clipboard.writeText(
        window.getSelection().toString().split('')
            .map((char,index)=> index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
            .join(''));
})();
