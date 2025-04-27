// Näyttää tai piilottaa mobiilivalikon
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
  
    if (toggleButton && nav) {
      toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
  
    // Korosta aktiivinen valikkokohta
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });
  