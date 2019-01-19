var xml = `
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
<channel>
<title>Title A</title>
<item>
<title>Title A - Item 1</title>
<enclosure url="https://mayok-sandbox.github.io/podcast/a/" length="1" type="text/plain"/>
<guid isPermaLink="true">https://mayok-sandbox.github.io/podcast/a/</guid>
<pubDate>today</pubDate>
</item>
<item>
<title>Title A - Item 2</title>
<enclosure url="https://mayok-sandbox.github.io/podcast/a/" length="2" type="text/plain"/>
<guid isPermaLink="true">https://mayok-sandbox.github.io/podcast/a/</guid>
<pubDate>tomorrow</pubDate>
</item>
</channel>
</rss>`;

var convert = require("xml-js");
var result1 = convert.xml2json(xml, { compact: true, trim: true });
var json = JSON.parse(result1);
// console.log(json.rss[0].channel[0].title[0]._text[0]);
// console.log(json.rss[0].channel[0].item.map(e => e));
console.log(json.rss.channel.item instanceof Array);
console.log(json.rss.channel.title._text);
console.log(json.rss.channel.item);
