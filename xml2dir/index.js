// 解析xml
const Xml2js = require('xml2js');
const fs = require("fs");
const path = require("path");
const _ = require("loadsh");
const xmlPath = path.resolve("./xml");
const data = fs.readdirSync(xmlPath)
const mkdirp = require("mkdirp");
data.forEach(e => {
  const everyOneXmlPath = path.join(xmlPath, e)
  const xml_body = fs.readFileSync(everyOneXmlPath).toString();
  const Parser = new Xml2js.Parser({explicitArray: false, ignoreAttrs: false});
  Parser.parseString(xml_body, function (err, result) {
    // console.log(result.krpano.scene.hotspot.length);
    const tempLen = result.krpano.scene.hotspot.length
    const tempData = result.krpano.scene.hotspot
    if (tempLen === undefined) {
      const tempclick = tempData.$.onclick
      const matResult = tempclick.match(/(scene_\d+_\S+\d+)/ig)
      if (matResult == null) {
        return
      }
      const sceneLen = matResult.split("_")
      if (sceneLen < 3) {
        return
      }
      mkdirsSync('out\\' + matResult)
    }
    tempData.forEach(element => {
      const tempclick = element.$.onclick
      const matResult = tempclick.match(/(scene_\d+_\S+\d+)/ig)
      if (matResult == null) {
        return
      }
      console.log(matResult[0])
      const sceneLen = matResult[0].split("_")
      if (sceneLen < 3) {
        return
      }
      mkdirsSync('out\\' + matResult[0])
    })
    // buildToXml(result, `${e}.json`)
    // fs.writeFileSync(`${e}.json`, JSON.stringify(result.krpano.scene.hotspot, null, 4))
  })
})


function returnType(params) {
  return params.substring(14, params.length-2)
}


// const BASEURL = "http://otouch.shanghaichujie.com/2021sh/assets/krpano/"


function buildToXml(obj, fileName) {
  const builder = new Xml2js.Builder();
  const xml = builder.buildObject(obj);
  // const uuid = uuid.
  fs.writeFileSync(fileName, xml)
}

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}