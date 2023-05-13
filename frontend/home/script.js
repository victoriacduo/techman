function carregarEquipamentos() {
  const options = { method: 'GET' };

  fetch('http://localhost:3000/equipamentos/read', options)
    .then(response => response.json())
    .then(equipamento => {
      equipamento.forEach(e => {
        if (e.ativo !== false) {

          var div = document.querySelector(".clone").cloneNode(true)
          div.classList.remove("model")

          const img = new Image();
          img.onload = function () {
            div.querySelector(".pic").src = e.imagem
          };
          img.onerror = function () {
            div.querySelector(".pic").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="
          };

          img.src = e.imagem;



          div.querySelector("#nomeEquipamento").innerHTML = e.equipamento
          div.querySelector("#descricao").innerHTML = e.descricao
          div.querySelector('.btnComent').id = e.id
          div.querySelector('.btnComent').addEventListener('click', () => abrirModalComentario(e.Comentarios, e.id))
          div.querySelector('.btnDel').id = e.id

          document.querySelector("main").appendChild(div)
        }
      })
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
      document.querySelector(".ms-fetch").classList.remove("model")
    })
}

var idDel = 0

function abrirModalDelete(e) {
  idDel = e.id
  document.querySelector('.delComent-modal').classList.remove('model')
}

function abrirModalComentario(com, id) {
  com.forEach(c => {
    let model = document.querySelector('.mod-comentario').cloneNode(true)
    model.querySelector('#perfil').innerHTML = c.perfis.perfil
    model.querySelector('#data').innerHTML = new Date(c.data).toLocaleDateString('pt-br')
    model.querySelector('.comenbody').innerHTML = c.comentario
    model.classList.remove('model')
    document.querySelector('.comentarios').appendChild(model)
  })
  document.querySelector("#sendComentario").setAttribute('ideq', id)
  document.querySelector('.comentarios-modal').classList.remove('model')
}

function fecharModalComentario() {
  document.querySelector('.comentarios-modal').classList.add('model')
  let model = document.querySelector('.mod-comentario').cloneNode(true)
  document.querySelector('.comentarios').innerHTML = ""
  document.querySelector('.comentarios').appendChild(model)
}

function excluirEquipamento() {
  const options = { method: 'DELETE' };

  fetch('http://localhost:3000/equipamentos/' + idDel, options)
    .then(response => response.json())
    .then(response => window.location.reload())
}

function abrirAdicionarComentario() {
  document.querySelector('.comentarios-modal').classList.add('model')
  document.querySelector(".comentar-modal").classList.remove("model")
}

function sair() {
  localStorage.clear()
  window.location.href = "../login/index.html"
}

function habilitarBotao() {
  const input = document.getElementById('textArea');
  const botao = document.getElementById('sendComentario');

  if (input.value.trim() !== '') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function cadastrarComentario(e) {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: [JSON.stringify({
      "comentario": document.querySelector("#textArea").value,
      "id_perfil": parseInt(localStorage.getItem("userIDPerfil")),
      "id_equipamentos": parseInt(e.getAttribute('ideq'))
    })]
  };

  fetch('http://localhost:3000/comentarios/create', options)
    .then(response => response.json())
    .then(response => {
      console.log(response.count);
      if (response.count > 0) {
        document.querySelector(".ms-ok").classList.remove("model")
      } else {
        document.querySelector(".ms-ko").classList.remove("model")
      }
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
      document.querySelector(".ms-ko").classList.remove("model")

      setTimeout(() => {
        window.location.reload()
      }, 1000)
    })
}

function habilitarBotaoEq() {
  const input = document.getElementById('nomeEquipamentoCad');
  const input2 = document.getElementById('endImage');
  const input3 = document.getElementById('textEquipamento');
  const botao = document.getElementById('addEqui');

  if (input.value.trim() !== '' && input2.value.trim() !== '' && input3.value.trim() !== '') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function adicionarEquipamento() {

  var ok = 1

  const xhr = new XMLHttpRequest()
  xhr.open('GET', document.querySelector("#endImage").value, true)
  xhr.responseType = 'blob'

  xhr.onload = function (e) {
    switch (this.status) {
      case 200:
        const blob = this.response
        const img = new Image()
        img.onload = function () {
          document.querySelector("#endImage").value = "Imagem carregado com sucesso"
        };
        img.onerror = function () {
          ok = 2
          document.querySelector("#endImage").value = "Erro ao carregar a imagem!"
        };
        img.src = URL.createObjectURL(blob);
        break;
      case 404:
        ok = 2
        document.querySelector("#endImage").value = "A imagem não foi encontrada."
        break;
      default:
        ok = 2
        document.querySelector("#endImage").value = "Ocorreu um erro durante o carregamento da imagem."
    }
  };

  xhr.send();

  if (ok === 1) {
   document.querySelector("#checkeq").value

   var boolean = true
    
    if (document.querySelector("#checkeq").value !== "true") {
      boolean = false
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "equipamento": document.querySelector("#nomeEquipamentoCad").value,
        "imagem": document.querySelector("#endImage").value,
        "descricao": document.querySelector("#textEquipamento").value,
        "ativo": boolean
      })
    };

    fetch('http://localhost:3000/equipamentos/create', options)
      .then(response => response.json())
      .then(response => {
        window.location.reload()
      })
  }

}

function checkeq(e) {

  if (e.querySelector('input').value !== "true") {
    e.querySelector('input').value = "true"
    e.querySelector('span').innerHTML = "Ativo"
  } else {
    e.querySelector('input').value = "false"
    e.querySelector('span').innerHTML = "Desativado"
  }

}