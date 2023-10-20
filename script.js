const inputDom = document.querySelector("#input");
const handleDom = document.querySelector("#handle");
const outputDom = document.querySelector("#output");

handleDom.onclick = async function () {
  let inputVal = inputDom.value || "";
  inputVal = inputVal.trim();
  if (!inputVal) return;
  const options = {
    compress: {
      dead_code: true, // 删除无用的代码
      //drop_console: true, // 删除 console 语句
    },
    mangle: {
      toplevel: true,
    }, // 混淆变量名
    output: {
      comments: false, // 去除注释
    },
  };
  var result = await Terser.minify(inputVal, options);
  outputDom.value = result.code;
};
