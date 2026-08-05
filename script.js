const EVENT = {
  dateText: "October 5, 2026",
  location: "Fairways of Halfmoon",
  prices: {
    single: "$150",
    team: "$600",
    dinner: "TBD"
  },
  paymentLinks: {
    single: "",
    team: "",
    dinner: "",
    hole: "",
    contest: "",
    premier: ""
  }
};

document.getElementById("event-date").textContent = EVENT.dateText;
document.getElementById("event-location").textContent = EVENT.location;
document.getElementById("single-price").textContent = EVENT.prices.single;
document.getElementById("team-price").textContent = EVENT.prices.team;
document.getElementById("dinner-price").textContent = EVENT.prices.dinner;

document.querySelectorAll(".payment-link").forEach(link => {
  const key = link.dataset.payment;
  const url = EVENT.paymentLinks[key];
  if (url) {
    link.href = url;
    link.removeAttribute("aria-disabled");
    link.textContent = ["single","team","dinner"].includes(key) ? "Register Now" : "Become a Sponsor →";
  }
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
