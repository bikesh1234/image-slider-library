const images = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
    caption: "Himalayan Views",
    alt: "Himalayan mountains in Nepal"
  },
  {
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    caption: "Nepali Heritage",
    alt: "Traditional architecture in Nepal"
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef2852c3b?auto=format&fit=crop&w=1200&q=85",
    caption: "Peaceful Lake",
    alt: "A peaceful lake and mountain landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    caption: "Mountain Night",
    alt: "Mountains beneath a starry sky"
  }
];

let current = 0;
const image = document.getElementById("slide-image");
const caption = document.getElementById("caption");
const dots = document.getElementById("dots");

images.forEach((item, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Show image ${index + 1}`);
  dot.addEventListener("click", () => showImage(index));
  dots.appendChild(dot);
});

function showImage(index) {
  current = (index + images.length) % images.length;
  image.src = images[current].src;
  image.alt = images[current].alt;
  caption.textContent = images[current].caption;

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

document.getElementById("prev").addEventListener("click", () => showImage(current - 1));
document.getElementById("next").addEventListener("click", () => showImage(current + 1));
showImage(0);
