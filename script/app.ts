if (window.innerWidth <= 767) {
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
      console.error(
        "Elementos necessários para controle do logotipo não foram encontrados."
      );
      return;
    }

    let logoHidden = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!logoHidden) {
              logoElement.style.visibility = "hidden";
              logoElement.style.opacity = "0";
              logoHidden = true;
            }
          } else {
            if (logoHidden) {
              logoElement.style.visibility = "hidden";
              logoElement.style.opacity = "0";
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(modelosSection);

    const botao = document.getElementById("menu") as HTMLButtonElement;
    const modal = document.getElementById("modal") as HTMLDivElement;
    const fechar = document.querySelector(".fechar") as HTMLButtonElement;

    if (botao && modal && fechar) {
      botao.onclick = () => {
        modal.style.left = "0";
      };

      fechar.onclick = () => {
        modal.style.left = "-5000px";
      };
    } else {
      console.error(
        "Elementos necessários para o menu lateral não foram encontrados."
      );
    }

    const modelos = document.getElementById("modelos") as HTMLDivElement | null;
    const voltar = document.querySelector(
      ".voltar"
    ) as HTMLButtonElement | null;
    const carros = document.querySelector(".mc") as HTMLButtonElement | null;

    if (modelos && voltar && carros) {
      carros.onclick = () => {
        modelos.style.left = "0";
      };

      voltar.onclick = () => {
        modelos.style.left = "-5000px";
      };
    } else {
      console.error(
        "Algum elemento necessário para o menu de modelos não foi encontrado no DOM."
      );
    }
  });

  const searchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  const searchButton = document.getElementById(
    "search-button"
  ) as HTMLButtonElement;
  const resultParagraph = document.getElementById(
    "result"
  ) as HTMLParagraphElement;

  function handleSearch(): void {
    const query = searchInput.value.trim();

    if (!query) {
      resultParagraph.textContent =
        "Por favor, insira um termo para pesquisar.";
      resultParagraph.style.color = "red";
      return;
    }

    resultParagraph.textContent = `Você pesquisou: "${query}"`;
    resultParagraph.style.color = "green";

    console.log(`Buscando por: ${query}`);
  }

  searchButton.addEventListener("click", handleSearch);
}

if (window.innerWidth > 1024) {
  const botao = document.getElementById("menu") as HTMLButtonElement;
  const modal = document.getElementById("modal") as HTMLDivElement;
  const fechar = document.querySelector(".fechar") as HTMLButtonElement;
  const modelos = document.getElementById("modelos") as HTMLDivElement | null;
  const voltar = document.querySelector(".voltar") as HTMLButtonElement | null;
  const carros = document.querySelector(".mc") as HTMLButtonElement | null;

  console.log("Elementos iniciais:", {
    botao,
    modal,
    fechar,
    modelos,
    voltar,
    carros,
  });

  if (botao && modal) {
    botao.onclick = () => {
      console.log("Abrindo modal");
      modal.style.left = "0";
    };

    fechar.onclick = () => {
      console.log("Fechando modal");
      modal.style.left = "-5000px";
      if (modelos) {
        console.log("Fechando modelos");
        modelos.style.left = "-5000px";
      }
    };
  } else {
    console.error(
      "Elementos necessários para o menu lateral não foram encontrados."
    );
  }

  if (modelos && voltar && carros) {
    carros.onclick = () => {
      console.log("Abrindo modelos");
      modelos.style.left = "20%";
    };

    voltar.onclick = () => {
      console.log("Voltando modelos");
      modelos.style.left = "-5000px";
    };
  } else {
    console.error(
      "Algum elemento necessário para o menu de modelos não foi encontrado no DOM."
    );
  }
}
