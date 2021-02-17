// 解析xml
const Xml2js = require('xml2js');
const fs = require("fs");
const path = require("path");
const _ = require("loadsh");
const filePath = path.resolve("./test.xml");
const xml_body = fs.readFileSync(filePath).toString();
const Parser = new Xml2js.Parser({explicitArray: false, ignoreAttrs: false});
// console.log(xml_body)

const BASEURL = "http://otouch.shanghaichujie.com/2021sh/assets/krpano/"

Parser.parseString(xml_body, function (err, result) {
    result.krpano.include.$.url = `${BASEURL}${result.krpano.include.$.url}`
    // console.log(result.krpano.scene);
    result.krpano.scene.forEach(element => {
      const num = element.$.title
      element.$.thumburl = `${BASEURL}${element.$.thumburl}`
      element.preview.$.url = `${BASEURL}${element.preview.$.url}`
      element.image.cube.$.url = `${BASEURL}${element.image.cube.$.url}`
      console.log(num, element.image.cube.$.url)
      // console.log(element.$.thumburl)
    });
    // console.log(result.krpano.scene[0])

    // console.log(result.krpano.scene[0])
    // 将obj处理成xml
    buildToXml(result)
})
function buildToXml(obj) {
  const builder = new Xml2js.Builder();
  const xml = builder.buildObject(obj);
  fs.writeFileSync("out.xml", xml)
}
