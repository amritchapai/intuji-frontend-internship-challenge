const companyLogos = [
  "./assets/open-zeppelin.png",
  "./assets/oracle.png",
  "./assets/morpheus.png",
  "./assets/samsung.png",
  "./assets/monday.png",
  "./assets/segment.png",
  "./assets/protonet.png",
];

console.log("hello");
document.addEventListener("DOMContentLoaded", () => {
  const clientLogoSection = document.getElementById("client-logos");

  if (clientLogoSection) {
    clientLogoSection.innerHTML = companyLogos
      .map((logo) => `<img src="${logo}" alt="Company Logo"/>`)
      .join("");
  } else {
    console.error("Element with ID 'client-logos' not found.");
  }
});
