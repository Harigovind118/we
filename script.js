let counter = {
  value: 0
};

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader_number").text(progress);
}

let tl = gsap.timeline({});
tl.to(counter, {
  onUpdate: updateLoaderText,
  value: 100,
  duration: 7
});
tl.to(".loader_progress", {
  width: "100%",
  duration: 7
}, 0);


