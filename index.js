const loginSalvo = "admin@email.com";
const nomeSalvo = "Edmilson";
const senhaSalva = "password123";
const cabecalho = document.querySelector(".nomeUsuario");

function cadastrarContato() {
  swal("Obrigado por se cadastrar!", {
    text: "Deseja incluir um contato de emergência?",
    buttons: {
      negacao: {
        text: "Não",
        value: "Não",
      },
      afirmacao: {
        text: "Sim",
        value: "Sim",
      },
    },
  }).then((value) => {
    switch (value) {
      case "Não":
        swal(
          "Tudo certo!",
          "Seu cadastro foi realizado com sucesso",
          "success"
        ).then((value) => {
          window.location.href = "./index.html";
        });
        break;
      case "Sim":
        swal("Vamos cadastrar seu contato de emergência?", {
          buttons: {
            prosseguir: {
              text: "Não",
              value: "No",
            },
            retornar: {
              text: "Sim",
              value: "Ok",
            },
          },
        }).then((value) => {
          switch (value) {
            case "Ok":
              window.location.href = "./cadastroContato.html";
              break;
            case "No":
              swal(
                "Que pena!",
                "Estaremos cadastrando seu contato de emergência em uma outra oportunidade.",
                "info"
              ).then((value) => {
                window.location.href = "./index.html";
              });
              break;
          }
        });
        break;
    }
  });
}

function confirmacaoCtt() {
  swal(
    "Tudo certo!",
    "Você cadastrou seu contato de emergência",
    "success"
  ).then((value) => (window.location.href = "./index.html"));
}

function validaUsuario() {
  const login = document.querySelector("#emailLogin").value;
  const senha = document.querySelector("#senhaLogin").value;

  if (login === loginSalvo && senha === senhaSalva) {
    window.location.href = "./Usuario.html";
  } else {
    alert("Login ou senha incorretos");
  }
}

cabecalho.innerHTML = `Seja bem vindo<br>${nomeSalvo}`;

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
