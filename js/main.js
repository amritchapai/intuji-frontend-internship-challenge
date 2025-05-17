const companyLogos = [
  "./assets/open-zeppelin.png",
  "./assets/oracle.png",
  "./assets/morpheus.png",
  "./assets/samsung.png",
  "./assets/monday.png",
  "./assets/segment.png",
  "./assets/protonet.png",
];

//for tracking methods
const trackingMethod = [
  {
    Color: "blue",
    title: "Connect wallets & companies",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
  },
  {
    Color: "orange",
    title: "Review transactions",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
  },
  {
    Color: "yellow",
    title: "Get income insights",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
  },
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

  const trackingSection = document.getElementById("tracking-methods");
  if (trackingSection) {
    trackingSection.innerHTML = trackingMethod
      .map(
        (item, index) => `<div class="tracking-card">
            <div>
              <div class="upper-box"></div>
              <div class="lower-box ${item.Color}"></div>
            </div>
            <h2>${item.title}</h2>
            <p>
              Indulgence way everything joy alteration boisterous the
              attachment. Party we years to order allow asked of.
            </p>
            <div class="number">0${index + 1}</div>
          </div>`
      )
      .join("");
  }
});
