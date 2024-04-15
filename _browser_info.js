/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet gives you some useful information
about the browser you are using.

Some properties are already depricated and there is
no guarantee that they will return the correct value
in the future.

@author magicmarcy
*/

javascript:(() => {
    let msg =
        "Browser-Name:\n" + window.navigator.appName + "\n" +
        "\nBrowser-Engine:\n" + window.navigator.product + "\n" +
        "\nBrowser-Version1a:\n" + window.navigator.appVersion + "\n" +
        "\nBrowser-Version1b:\n" + window.navigator.userAgent + "\n" +
        "\nBrowser-Language:\n" + window.navigator.language + "\n" +
        "\nPageOn:\n" + window.location.pathname + "\n" +
        "\nReferer:\n" + document.referrer + "\n" +
        "\nPrevious Site:\n" + history.length;
    alert(msg);}
)();
