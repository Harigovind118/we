let counter = {
  value: 0
};

function updateLoaderText() {
  $(".Loader_number").text(counter.value);
}

let tl = gsap.timeline({});
tl.to(counter, {
  onUpdate: updateLoaderText,
  value: 100,
  duration: 7
});