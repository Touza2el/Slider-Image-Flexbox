// if (document.documentElement.clientWidth < 600)

function myFunction(x) {
  if (x.matches) {
    // If media query matches

    // HTML element
    const productContent = document.querySelector(".product-content");
    const productContentItems = document.querySelectorAll(
      ".product-content-item"
    );

    // Buttons
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // Counter
    let counter = 1;
    let itemSize = productContentItems[0].clientWidth;

    productContent.style.transform =
      "translateX(" + -itemSize * counter + "px)";

    nextBtn.addEventListener("click", () => {
      if (counter >= productContentItems.length - 1) return;
      productContent.style.transition = "transform 0.4s ease-in-out";
      counter++;
      productContent.style.transform =
        "translateX(" + -itemSize * counter + "px)";
    });
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      productContent.style.transition = "transform 0.4s ease-in-out";
      counter--;
      productContent.style.transform =
        "translateX(" + -itemSize * counter + "px)";
    });

    productContent.addEventListener("transitionend", () => {
      if (productContentItems[counter].id === "last-item-clone") {
        productContent.style.transition = "none";
        counter = productContentItems.length - 2;
        productContent.style.transform =
          "translateX(" + -itemSize * counter + "px)";
      }
      if (productContentItems[counter].id === "first-item-clone") {
        productContent.style.transition = "none";
        counter = productContentItems.length - counter;
        productContent.style.transform =
          "translateX(" + -itemSize * counter + "px)";
      }
    });
  }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
