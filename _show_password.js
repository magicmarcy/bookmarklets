/*
DO NOT COPY THIS COMMENT LINES TO YOUR BOOKMARK
-----------------------------------------------
This bookmarklet shows you all passwords available
on this site.

Important: It only shows passwords that have already
been entered or passwords that the browser has already
filled in and unmasks them!

@author magicmarcy
*/

javascript: (() => {
    let s, F, j, f, i;
    s = ""; F = document.forms; 
    for (j = 0; j < F.length; ++j) { 
        f = F[j]; 
        for (i = 0; i < f.length; ++i) { 
            if (f[i].type.toLowerCase() === "password") {
                s += f[i].value + "\n";
            }
        } 
    }

    if (s) {
        alert("Passwords in forms on this page:\n\n" + s);
    } else {
        alert("There are no passwords in forms on this page.");
    }
})();
