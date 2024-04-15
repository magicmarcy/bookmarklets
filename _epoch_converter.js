/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
With this bookmarklet you can convert Unix times.

Simply enter the Unix time in the dialog that opens
and click on "ok" to get the correct date and time.

@author magicmarcy
*/

javascript:(() => {
    let utcSeconds = prompt("Enter epoch time:");
    let myDate = new Date(utcSeconds * 1000);
    alert(myDate.toGMTString() + " - " + myDate.toLocaleString());
})();
