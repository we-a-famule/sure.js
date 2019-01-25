var fs= require("fs") // 引入fs模块
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
// 判断的方法fs.exists(path, callback)
if(dirName == undefined){
    console.log("没有输入目录")
    process.exit(0);    
}
fs.exists(dirName, function(exists) {
if(exists){
    console.log("目录存在或您输入错误");
}
if(!exists){
console.log("HTML5 Boilerplate开始初始化...");
fs.mkdirSync("./" + dirName);
process.chdir("./" + dirName);
console.log("进入建立的文件夹,开始初始化模板文件...");
fs.mkdirSync('css');
fs.mkdirSync('js');
fs.mkdirSync('img');
fs.mkdirSync('dos');
console.log("文件夹初始化完毕，开始初始化文件...");
// --------------------------------------CSS-------------------------------------------------------------
fs.writeFileSync("./css/main.css",`
/*! HTML5 Boilerplate v6.1.0 | MIT License | https://html5boilerplate.com/ */
/*
* What follows is the result of much research on cross-browser styling.
* Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,
* Kroc Camen, and the H5BP dev community and team.
*/
/* ==========================================================================
Base styles: opinionated defaults
========================================================================== */
html {
color: #222;
font-size: 1em;
line-height: 1.4;
}
/*
* Remove text-shadow in selection highlight:
* https://twitter.com/miketaylr/status/12228805301
*
* Vendor-prefixed and regular ::selection selectors cannot be combined:
* https://stackoverflow.com/a/16982510/7133471
*
* Customize the background color to match your design.
*/

::-moz-selection {
background: #b3d4fc;
text-shadow: none;
}

::selection {
background: #b3d4fc;
text-shadow: none;
}

/*
* A better looking default horizontal rule
*/

hr {
display: block;
height: 1px;
border: 0;
border-top: 1px solid #ccc;
margin: 1em 0;
padding: 0;
}

/*
* Remove the gap between audio, canvas, iframes,
* images, videos and the bottom of their containers:
* https://github.com/h5bp/html5-boilerplate/issues/440
*/

audio,
canvas,
iframe,
img,
svg,
video {
vertical-align: middle;
}

/*
* Remove default fieldset styles.
*/

fieldset {
border: 0;
margin: 0;
padding: 0;
}

/*
* Allow only vertical resizing of textareas.
*/

textarea {
resize: vertical;
}

/* ==========================================================================
Browser Upgrade Prompt
========================================================================== */

.browserupgrade {
margin: 0.2em 0;
background: #ccc;
color: #000;
padding: 0.2em 0;
}

/* ==========================================================================
Author's custom styles
========================================================================== */ 

/* ==========================================================================
Helper classes
========================================================================== */

/*
* Hide visually and from screen readers
*/

.hidden {
display: none !important;
}

/*
* Hide only visually, but have it available for screen readers:
* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
*
* 1. For long content, line feeds are not interpreted as spaces and small width
*    causes content to wrap 1 word per line:
*    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
*/

.visuallyhidden {
border: 0;
clip: rect(0 0 0 0);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
width: 1px;
white-space: nowrap; /* 1 */
}

/*
* Extends the .visuallyhidden class to allow the element
* to be focusable when navigated to via the keyboard:
* https://www.drupal.org/node/897638
*/

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
clip: auto;
height: auto;
margin: 0;
overflow: visible;
position: static;
width: auto;
white-space: inherit;
}

/*
* Hide visually and from screen readers, but maintain layout
*/

.invisible {
visibility: hidden;
}

/*
* Clearfix: contain floats
*
* For modern browsers
* 1. The space content is one way to avoid an Opera bug when the
*   ' contenteditable' attribute is included anywhere else in the document.
*    Otherwise it causes space to appear at the top and bottom of elements
*    that receive the 'clearfix' class.
* 2. The use of 'table rather than 'block' is only necessary if using
*    ':before' to contain the top-margins of child elements.
*/

.clearfix:before,
.clearfix:after {
content: " "; /* 1 */
display: table; /* 2 */
}

.clearfix:after {
clear: both;
}

/* ==========================================================================
EXAMPLE Media Queries for Responsive Design.
These examples override the primary ('mobile first') styles.
Modify as content requires.
========================================================================== */

@media only screen and (min-width: 35em) {
/* Style adjustments for viewports that meet the condition */
}

@media print,
    (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 1.25dppx),
    (min-resolution: 120dpi) {
/* Style adjustments for high resolution devices */
}

/* ==========================================================================
Print styles.
Inlined to avoid the additional HTTP request:
https://www.phpied.com/delay-loading-your-print-css/
========================================================================== */

@media print {
*,
*:before,
*:after {
    background: transparent !important;
    color: #000 !important; /* Black prints faster */
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}

a,
a:visited {
    text-decoration: underline;
}

a[href]:after {
    content: " (" attr(href) ")";
}

abbr[title]:after {
    content: " (" attr(title) ")";
}

/*
    * Don't show links that are fragment identifiers,
    * or use the 'javascript:' pseudo protocol
    */

a[href^="#"]:after,
a[href^="javascript:"]:after {
    content: "";
}

pre {
    white-space: pre-wrap !important;
}
pre,
blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
}

/*
    * Printing Tables:
    * http://css-discuss.incutio.com/wiki/Printing_Tables
    */

thead {
    display: table-header-group;
}

tr,
img {
    page-break-inside: avoid;
}

p,
h2,
h3 {
    orphans: 3;
    widows: 3;
}

h2,
h3 {
    page-break-after: avoid;
}
}

`)
// ---------------------------------normalize---------------------------------------
fs.writeFileSync("./css/normalize.css",`
    /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

    /* Document
    ========================================================================== */

    /**
     * 1. Correct the line height in all browsers.
     * 2. Prevent adjustments of font size after orientation changes in iOS.
     */

    html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    }

    /* Sections
    ========================================================================== */

    /**
     * Remove the margin in all browsers.
     */

    body {
    margin: 0;
    }

    /**
     * Correct the font size and margin on 'h1' elements within 'section' and
     * 'article' contexts in Chrome, Firefox, and Safari.
     */

    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }

    /* Grouping content
    ========================================================================== */

    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */

    hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
    }

    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd 'em' font sizing in all browsers.
     */

    pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
    }

    /* Text-level semantics
    ========================================================================== */

    /**
     * Remove the gray background on active links in IE 10.
     */

    a {
    background-color: transparent;
    }

    /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */

    abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
    }

    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */

    b,
    strong {
    font-weight: bolder;
    }

    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd 'em' font sizing in all browsers.
     */

    code,
    kbd,
    samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
    }

    /**
     * Add the correct font size in all browsers.
     */

    small {
    font-size: 80%;
    }

    /**
     * Prevent 'sub' and 'sup' elements from affecting the line height in
     * all browsers.
     */

    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }

    sub {
    bottom: -0.25em;
    }

    sup {
    top: -0.5em;
    }

    /* Embedded content
    ========================================================================== */

    /**
     * Remove the border on images inside links in IE 10.
     */

    img {
    border-style: none;
    }

    /* Forms
    ========================================================================== */

    /**
     * 1. Change the font styles in all browsers.
     * 2. Remove the margin in Firefox and Safari.
     */

    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    }

    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */

    button,
    input { /* 1 */
    overflow: visible;
    }

    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */

    button,
    select { /* 1 */
    text-transform: none;
    }

    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }

    /**
     * Remove the inner border and padding in Firefox.
     */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }

    /**
     * Restore the focus styles unset by the previous rule.
     */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }

    /**
     * Correct the padding in Firefox.
     */

    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }

    /**
     * 1. Correct the text wrapping in Edge and IE.
     * 2. Correct the color inheritance from 'fieldset' elements in IE.
     * 3. Remove the padding so developers are not caught out when they zero out
     *    'fieldset' elements in all browsers.
     */

    legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
    }

    /**
     * Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */

    progress {
    vertical-align: baseline;
    }

    /**
     * Remove the default vertical scrollbar in IE 10+.
     */

    textarea {
    overflow: auto;
    }

    /**
     * 1. Add the correct box sizing in IE 10.
     * 2. Remove the padding in IE 10.
     */

    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    }

    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }

    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */

    [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
    }

    /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */

    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    /**
     * 1. Correct the inability to style clickable types in iOS and Safari.
     * 2. Change font properties to 'inherit' in Safari.
     */

    ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
    }

    /* Interactive
    ========================================================================== */

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
    display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
    display: list-item;
    }

    /* Misc
    ========================================================================== */

    /**
     * Add the correct display in IE 10+.
     */

    template {
    display: none;
    }

    /**
     * Add the correct display in IE 10.
     */

    [hidden] {
    display: none;
    }
`);  
console.log("CSS文件夹初始化完成！");
// ----------------------------js-------------------------------
fs.writeFileSync("./js/main.js",'');
fs.writeFileSync("./js/plugins.js",`
    // Avoid 'console' errors in browsers that lack a console.
    (function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    
    while (length--) {
        method = methods[length];
    
        // Only stub undefined methods.
        if (!console[method]) {
        console[method] = noop;
        }
    }
    }());
    
    // Place any jQuery/helper plugins in here.
`)
console.log("JS文件夹初始化完成")
console.log("开始初始化模板文件...")
fs.writeFileSync("./404.html",`
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'self'">
    <title>Page not found</title>
    <style type="text/css" media="screen">
        body {
            background-color: #f1f1f1;
            margin: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .container { margin: 50px auto 40px auto; width: 600px; text-align: center; }

        h1 { width: 800px; position:relative; left: -100px; letter-spacing: -1px; line-height: 60px; font-size: 60px; font-weight: 100; margin: 0px 0 50px 0; text-shadow: 0 1px 0 #fff; }
        p { color: rgba(0, 0, 0, 0.5); margin: 20px 0; line-height: 1.6; }
    </style>
</head>
<body>

    <div class="container">

        <h1>404</h1>
        <p><strong>File not found</strong></p>

        <p>
            The site configured at this address does not
            contain the requested file.
        </p>

        <p>
            If this is your site, make sure that the filename case matches the URL.<br>
            For root URLs (like <code>http://example.com/</code>) you must provide an
            <code>index.html</code> file.
        </p>
    </div>
</body>
</html>
`);
fs.writeFileSync("./index.html",`
<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <p>Hello world! This is HTML5 Boilerplate.</p>
    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>
</html>
`);
fs.writeFileSync("icon.png",`
ffd8 ffe0 0010 4a46 4946 0001 0100 0001
0001 0000 ffdb 0043 0010 0b0c 0e0c 0a10
0e0d 0e12 1110 1318 281a 1816 1618 3123
251d 283a 333d 3c39 3338 3740 485c 4e40
4457 4537 3850 6d51 575f 6267 6867 3e4d
7179 7064 785c 6567 63ff db00 4301 1112
1218 1518 2f1a 1a2f 6342 3842 6363 6363
6363 6363 6363 6363 6363 6363 6363 6363
6363 6363 6363 6363 6363 6363 6363 6363
6363 6363 6363 6363 6363 6363 6363 ffc0
0011 0802 0002 0003 0122 0002 1101 0311
01ff c400 1b00 0002 0301 0101 0000 0000
0000 0000 0000 0203 0104 0500 0607 ffc4
003c 1000 0202 0103 0205 0303 0302 0503
0403 0001 0200 1103 0412 2131 4105 1322
5161 3271 8114 2391 0642 5233 a115 2443
b1c1 5362 8234 7292 d135 e1f1 ffc4 0018
0101 0101 0101 0000 0000 0000 0000 0000
0000 0102 0304 ffc4 001b 1101 0101 0101
0101 0100 0000 0000 0000 0000 0111 0212
3121 41ff da00 0c03 0100 0211 0311 003f
00db 56a0 4591 628c ace1 94da 3711 bcfd
5dbb c875 1b49 51c4 e1aa 58c8 e0d9 3721
d8bf 2671 3c91 706e 0452 d748 35f3 24b7
1049 be90 6343 4390 be06 4636 53bc 1ca7
703f 0247 8755 6535 c102 7653 58dc 9ec0
c18c cc05 f7b0 66ea 65d4 1d0e e945 1d4b
2b0e 844b 4091 ed44 7494 38e6 5663 7cd4
95d5 0048 a94d 9b6b 4353 08b4 7520 0e09
b8a3 9ae0 2d57 2210 5a10 68bc cc84 8a62
07c4 2395 d578 668b 5ebc 430d b588 e088
0c4d 5652 4292 4afc c67e a72e e344 6d1d
0189 db7d e46c 37f1 2606 e4d5 33f2 005e
dc44 af94 0d16 ebef 0b60 3c5c 5b60 ea7a
c60b 2318 5f58 ca07 794f 2b23 642c 493e
f716 e181 e4f6 e90b 673f 712e 02f3 1197
82df 10d0 13e9 2490 4778 944a 12c6 353b
2142 e2aa 2b32 fa7a 4a58 f57a 8624 64ae
0f15 0fcf 7268 ccb6 95e5 8830 cb50 1714
0d35 c32c 08e8 4fda 15dd 408b 70c0 9e38
860b 7408 c7f1 1a98 3505 4fed 311e f06a
a25d fda6 8622 bfa7 249e 6257 4d9b 192e
71ee 1545 655c b95b 1fa2 88f8 9116 b236
dc60 88bc 8e4f 3baa 561a 82e2 a73b 31ef
2876 0cb5 9002 491f 32c9 7da2 838b 1de6
70e0 dc6b e40d 7425 c416 5cad 4298 1f79
2b94 d700 0882 2c42 0bb4 1b30 2fe0 c94a
4d0b 8e04 5eed a2cc cfc1 9312 5872 7996
7f53 8ea8 34ce 29c5 d493 5c08 b23b c58c
f8eb ac9f 3948 eb18 6872 b6d2 4a9b 3017
2364 c86e bf30 11ac 9be9 7389 5f32 eb88
c5d3 796
`)
console.log("png图片初始化")
fs.writeFileSync("browserconfig.xml","");
fs.writeFileSync("browserconfig.xml","");
fs.writeFileSync("humans.txt","");
fs.writeFileSync("LICENSE.txt","");
fs.writeFileSync("robots.txt","");
console.log("索引构建完成！");
console.log("初始化模板完成");
}
});