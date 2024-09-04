// Código que mostra o efeito das imagens digitando...
var typed = new Typed("#text-typing", {
  strings: ["vendem", "atraem", "convertem", "engajam", "fidelizam"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  backDelay: 1000,
});

// Esse foi o que o Igor colocou pra passar os parâmetros lá pro checkout (pra gente conseguir ver no analytics da Hotmart de onde estão vindo as visitas ao checkout)

let search = window.location.search;
document.querySelectorAll("a").forEach((element) => {
  if (element.href.includes("hotmart.com"))
    if (element.href.includes("?")) {
      search = search.replace("?", "&");
    }
  element.href += search;
});
