/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet translates the selected text with
deepl.com. After clicking on it, a new popup will
be opened where you can change the settings. By
default this bookmarklet translates text to German.
However, by changing the abbreviation "de" in the
source code, translation into other languages is
also possible. It is also possible to select a
different target language in the popup that opens.

@author magicmarcy
 */

javascript:(() => {
    window.open(`https://www.deepl.com/translator#/de/${window.getSelection().toString().trim()}`,
        "_blank",
        "height=800,width=600,noopener,noreferrer")
})();
