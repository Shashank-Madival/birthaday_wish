// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery img");

// Create modal dynamically
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-inner">
    <span class="close-btn">&times;</span>
    <div class="modal-content">
      <img src="" alt="Full Image">
    </div>
  </div>
`;
document.body.appendChild(modal);

const modalInner = modal.querySelector(".modal-inner");
const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close-btn");

// Open modal when image clicked
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src; // only show the image
  });
});

// Close modal when close button clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal when clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Prevent modal content click from closing
modalInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Optional: Close modal on Esc key
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    modal.classList.remove("active");
  }
});
