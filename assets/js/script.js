// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey &&
      (event.key === "u" ||
        event.key === "i" ||
        event.key === "j" ||
        event.key === "s")) ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "I" || event.key === "J" || event.key === "C")) ||
    event.key === "F12"
  ) {
    event.preventDefault();
    console.log("Inspect Element telah dinonaktifkan!"); // Debugging
  }
});
// Mencegah Klik Kanan
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
// Mencegah Drag & Drop pada Semua Gambar
document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
// Mencegah Klik Kanan pada Gambar Secara Spesifik
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("contextmenu", (event) => event.preventDefault());
});

// NAVBAR
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
    menuList.style.transform = "translateY(-10px)";
    menuList.style.opacity = "0";

    setTimeout(() => {
      menuList.style.transform = "translateY(0)";
      menuList.style.opacity = "1";
    }, 10);
  } else {
    menuList.style.transform = "translateY(-10px)";
    menuList.style.opacity = "0";

    setTimeout(() => {
      menuList.classList.add("hidden");
    }, 300);
  }
});
document.querySelectorAll("#menu-list a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah loncatan instan ke bagian yang diklik

    const targetId = link.getAttribute("href").substring(1); // Mengambil ID tujuan
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Sesuaikan offset agar tidak tertutup navbar
        behavior: "smooth", // Efek transisi scroll
      });
    }

    // Tutup menu setelah diklik di tampilan mobile
    if (window.innerWidth <= 768) {
      menuList.style.transform = "translateY(-10px)";
      menuList.style.opacity = "0";
      setTimeout(() => {
        menuList.classList.add("hidden");
      }, 300);
    }
  });
});

// HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
  let getStartedBtn = document.querySelector(".btn-primary");
  let aboutSection = document.getElementById("about");

  // Ketika tombol Get Started diklik, scroll ke bagian About
  getStartedBtn.addEventListener("click", function () {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});

//  FAQ SECTION - ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((accordion) => {
    accordion.addEventListener("change", function () {
      // Menutup accordion lainnya saat yang ini dibuka
      accordions.forEach((item) => {
        if (item !== this) item.checked = false;
      });
    });
  });
});

// POPUP CONTACT SECTION
document.addEventListener("DOMContentLoaded", function () {
  let contactBtn = document.querySelector(".faq-section button");
  let popup = document.getElementById("contact");
  let closeBtn = document.querySelector(".close-btn");

  // Ketika tombol Contact Us diklik
  contactBtn.addEventListener("click", function () {
    popup.style.display = "flex"; // Tampilkan popup
  });

  // Ketika tombol close (X) diklik
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none"; // Sembunyikan popup
  });

  // Menutup popup saat klik di luar kotak popup
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});