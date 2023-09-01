const inputDom = document.querySelector("#input");
const handleDom = document.querySelector("#handle");
const outputDom = document.querySelector("#output");

handleDom.onclick = async function () {
  let inputVal = inputDom.value || "";
  inputVal = inputVal.trim();
  if (!inputVal) return;
  var result = await Terser.minify(inputVal, { sourceMap: false });
  outputDom.value = result.code;
};
