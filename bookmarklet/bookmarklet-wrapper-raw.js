javascript: (function() {
    function callback() {
        (function($) {
            var jQuery = $;
            function callback() {
              main()
            }
            var s = document.createElement("script");
            s.src = "https://cdn.rawgit.com/LRCFS/HLA_reformatter/master/bookmarklet/hla_clean.js";
            if (s.addEventListener) {
                s.addEventListener("load", callback, false)
            } else if (s.readyState) {
                s.onreadystatechange = callback
            }
            document.body.appendChild(s);
        })()
    }
    var s = document.createElement("script");
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
    if (s.addEventListener) {
        s.addEventListener("load", callback, false)
    } else if (s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
})()
