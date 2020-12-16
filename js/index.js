function changeColor(color) {
  [...toChangeColor].forEach((element) => element.setAttribute("fill", color));
}

window.addEventListener("click", changeColor);

window.addEventListener("load", function () {
  const body = document.querySelector("body");
  const injection = document.createElement("script");
  injection.innerHTML = `
    const svgObjects = document.getElementsByTagName("object");
    const svgDocuments = [...svgObjects].map((obj) => obj.contentDocument);
    const htmlCollectionArray = svgDocuments.map(doc => doc.getElementsByClassName("colorChange"));
    const toChangeColor = htmlCollectionArray.reduce((agg, val)=>{
        return [...agg, ...val]
    }, [])
    `;
  body.appendChild(injection);
});
