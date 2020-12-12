const $btnPrint = document.querySelector("#btnPrint");


let random = Math.floor(Math.random() * 10000);

JsBarcode("#barcode", random.toString(), {
    format: "CODE39",
    lineColor: "black",
    width: 2,
    height: 40,
    displayValue: false
  });

$btnPrint.addEventListener("click", () => {
    window.print();
});