document.querySelectorAll("i").forEach((s) =>
  s.addEventListener("click", function () {
    const classSelected = this.getAttribute("class");

    if (classSelected === "ph-heart-straight") {
      s.classList.add("ph-heart-straight-fill");
      s.classList.remove("ph-heart-straight");
    } else {
      s.classList.remove("ph-heart-straight-fill");
      s.classList.add("ph-heart-straight");
    }
  })
);

const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".card", { delay: 200 });
ScrollReveal().reveal(".date", { delay: 400 });
ScrollReveal().reveal(".title", { delay: 500 });
ScrollReveal().reveal(".paragraph", { delay: 600 });
