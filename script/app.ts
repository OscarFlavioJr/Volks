document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const messageContainer = document.getElementById(
      "scroll"
    ) as HTMLElement | null;

    if (messageContainer) {
      messageContainer.style.opacity = "1";
    } else {
      console.error("Elemento com id 'scroll' não foi encontrado.");
    }
  }, 3000);

  setTimeout(() => {
    const nivideoElement = document.querySelector(
      ".nivideo"
    ) as HTMLElement | null;

    if (nivideoElement) {
      nivideoElement.style.opacity = "1";
    } else {
      console.error("Elemento com classe 'nivideo' não foi encontrado.");
    }
  }, 5200);

  setTimeout(() => {
    const nivideoElement = document.querySelector(
      ".head"
    ) as HTMLElement | null;

    if (nivideoElement) {
      nivideoElement.style.opacity = "1";
    } else {
      console.error("Elemento com classe 'nivideo' não foi encontrado.");
    }
  }, 5500);
});
