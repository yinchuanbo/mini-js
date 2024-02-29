// js
const jsInput = document.querySelector("#js-input");
const jsButton = document.querySelector("#js-button");
const jsOutput = document.querySelector("#js-output");

jsButton.onclick = async function () {
  let inputVal = jsInput.value || "";
  inputVal = inputVal.trim();
  if (!inputVal) return;
  const options = {
    compress: {
      dead_code: true,
      drop_console: true,
    },
    mangle: true,
    output: {
      comments: false,
    },
  };
  var result = await Terser.minify(inputVal, options);
  jsOutput.value = result.code;
};

// css
const cssInput = document.querySelector("#css-input");
const cssButton = document.querySelector("#css-button");
const cssOutput = document.querySelector("#css-output");

cssButton.onclick = async function () {
  let inputVal = cssInput.value || "";
  inputVal = inputVal.trim();
  if (!inputVal) return;
  let res;
  //去除注释
  res = inputVal.replace(/\/\*((.|\n|\t)*?)\*\//g, "");
  //除去首尾空格
  res = res.replace(/(\s)*{\s*/g, "{").replace(/(\s)*}\s*/g, "}");
  //去除样式间空格
  res = res.replace(/(\s)*;\s*/g, ";");
  //去除样式名称后面空格
  res = res.replace(/:(\s)*/g, ":");
  //去除换行符
  res = res.replace(/(\n|\t)+/g, "");
  //去除末尾分号
  res = res.replace(/;}/g, "}");
  cssOutput.value = res;
};

// html
const htmlInput = document.querySelector("#html-input");
const htmlButton = document.querySelector("#html-button");
const htmlOutput = document.querySelector("#html-output");

htmlButton.onclick = async function () {
  let inputVal = htmlInput.value || "";
  inputVal = inputVal.trim();
  if (!inputVal) return;
  let res;
  var rep = /\n+/g;
  var repone = /<!--.*?-->/gi;
  var reptwo = /\/\*.*?\*\//gi;
  var reptree = /[ ]+</gi;
  var sourceZero = inputVal.replace(rep, "");
  var sourceOne = sourceZero.replace(repone, "");
  var sourceTwo = sourceOne.replace(reptwo, "");
  var sourceTree = sourceTwo.replace(reptree, "<");
  htmlOutput.value = sourceTree;
};
