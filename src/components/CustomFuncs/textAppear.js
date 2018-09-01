const textAppear = (text, domTarget, timeBetween = 100, initialDelay = 0) => {
  let arr = text.split("");
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      let span = document.createElement("span");
      span.innerText += arr[i];
      span.classList.add("textAppear");
      domTarget.appendChild(span);
    }, initialDelay + i * timeBetween);
  }
};

export default textAppear;
