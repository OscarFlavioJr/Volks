document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.style.opacity = "1";
    } else {
      console.error("Elemento com ID 'scroll' não encontrado.");
    }
  }, 3000);

  setTimeout(() => {
    const nivideoElement = document.querySelector(
      ".nivideo"
    ) as HTMLElement | null;
    if (nivideoElement) {
      nivideoElement.style.opacity = "1";
    } else {
      console.error("Elemento com classe 'nivideo' não encontrado.");
    }
  }, 5200);

  setTimeout(() => {
    const headElement = document.querySelector(".head") as HTMLElement | null;
    if (headElement) {
      headElement.style.opacity = "1";
    } else {
      console.error("Elemento com classe 'head' não encontrado.");
    }
  }, 5500);

  const logoElement = document.querySelector<HTMLElement>(".logo");
  const modelosSection = document.getElementById("carros");

  if (!logoElement || !modelosSection) {
    console.error("Elementos necessários não foram encontrados.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoElement.style.visibility = "hidden";
          logoElement.style.opacity = "0";
        } else {
          logoElement.style.visibility = "visible";
          logoElement.style.opacity = "1";
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  observer.observe(modelosSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("menu") as HTMLButtonElement;
  const modal = document.getElementById("modal") as HTMLDivElement;
  const fechar = document.querySelector(".fechar") as HTMLButtonElement;

  botao.onclick = () => {
    modal.style.left = "0";
  };

  fechar.onclick = () => {
    modal.style.left = "-500px";
  };
});
