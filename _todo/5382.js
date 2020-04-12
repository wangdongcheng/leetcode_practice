// 5382. HTML 实体解析器

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    let str = text.replace(/&amp;/g, "&");
    str = str.replace(/&quot;/g, "\"");
    str = str.replace(/&apos;/g, "'");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&frasl;/g, "/")

    return str;
};

// let text = "!&amp; Welcome to Microsoft!&amp; ";
// console.log(text.replace(/&amp;/g, "W3School"));
// console.log("Welcome to Microsoft!&amp; ".replace(/&amp;/g, "W3School"));
console.log(entityParser("&amp; is an HTML entity but &ambassador; is not.") === "& is an HTML entity but &ambassador; is not.");
console.log(entityParser("and I quote: &quot;...&quot;") === "and I quote: \"...\"");
console.log(entityParser("Stay home! Practice on Leetcode :)") === "Stay home! Practice on Leetcode :)");
console.log(entityParser("x &gt; y &amp;&amp; x &lt; y is always false") === "x > y && x < y is always false");
console.log(entityParser("leetcode.com&frasl;problemset&frasl;all") === "leetcode.com/problemset/all");