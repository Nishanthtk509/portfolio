 const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const menuLinks = menu.querySelectorAll("a");

  // Toggle open/close when clicking hamburger
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("show");
  });

  // Close menu when clicking any link
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("show");
    });
  });

const titles = [ "Artist", "Freelancer"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % titles.length;
    document.getElementById("dynamic-text").textContent = titles[index];
  }, 2000); // Change every 2 seconds