/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet corrects the selected text for
grammar and punctuation using deepl.com. It opens
a new popup with more options. By default the text
will be corrected in German. If you change the
abbreviation "de" in the source text, you can
choose another language.

@author magicmarcy
 */

javascript:(() => {
    window.open(`https://www.deepl.com/write#de/${window.getSelection().toString().trim()}`,
        "_blank",
        "height=800,width=600,noopener,noreferrer")
})();
