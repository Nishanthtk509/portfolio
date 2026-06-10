window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.transform = "translateY(-100%)";

        setTimeout(() => {
            preloader.remove();
        }, 1000);
    }, 1000);
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        menu.classList.remove("translate-x-full");

        line1.classList.remove("-translate-y-2");
        line3.classList.remove("translate-y-2");

        line1.classList.add("rotate-45");
        line3.classList.add("-rotate-45");

        line2.classList.add("opacity-0");

        document.body.classList.add("overflow-hidden");
    } else {
        menu.classList.add("translate-x-full");

        line1.classList.add("-translate-y-2");
        line3.classList.add("translate-y-2");

        line1.classList.remove("rotate-45");
        line3.classList.remove("-rotate-45");

        line2.classList.remove("opacity-0");

        document.body.classList.remove("overflow-hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".fade-up").forEach((el) => {
        observer.observe(el);
    });

});


// Close menu when clicking a menu link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {

        isOpen = false;

        menu.classList.add("translate-x-full");

        line1.classList.add("-translate-y-2");
        line3.classList.add("translate-y-2");

        line1.classList.remove("rotate-45");
        line3.classList.remove("-rotate-45");

        line2.classList.remove("opacity-0");

        document.body.classList.remove("overflow-hidden");
    });
});



document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(
        ".reveal, .project-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.12
    });

    items.forEach(el => observer.observe(el));

});

document.querySelectorAll(".faq-btn").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const content = item.querySelector(".faq-content");
        const icon = item.querySelector(".faq-icon");
        const isOpen = !content.classList.contains("hidden");

        document.querySelectorAll(".faq-content").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".faq-icon").forEach(el => el.textContent = "+");

        if (!isOpen) {
            content.classList.remove("hidden");
            icon.textContent = "−";
        }
    });
});



const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");
const modal = document.getElementById("successModal");
const modalContent = modal.querySelector("div");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.6";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            form.reset();
            modal.classList.remove("opacity-0", "pointer-events-none");
            setTimeout(() => {
                modalContent.classList.remove("scale-90");
                modalContent.classList.add("scale-100");
            }, 10);
            setTimeout(() => closeSuccessModal(), 4000);
        }
    } catch (error) {
        console.error(error);
    }

    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
});

function closeSuccessModal() {
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-90");
    setTimeout(() => modal.classList.add("opacity-0", "pointer-events-none"), 300);
}

closeModal.addEventListener("click", closeSuccessModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeSuccessModal(); });



