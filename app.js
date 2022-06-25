// declara um conjunto inicial de contatos
var db_perg_inicial = {
    "data": [
        {
          "id": 1,
          "perg": "Como salvar vídeos?",
          "categoria": "YouTube",
          "resp": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
        },
        {
          "id": 2,
          "perg": "Como editar uma postagem?",
          "categoria": "Facebook",
          "resp": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
       {
          "id": 3,
          "perg": "Como por filtro nas fotos?",
          "categoria": "Instagram",
          "resp": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_perg'));
if (!db) {
    db = db_perg_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertPerg(perg) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoPerg = {
        "id": novoId,
        "perg": perg.perg,
        "categoria": perg.categoria,
        "resp": perg.resp
    };

    // Insere o novo objeto no array
    db.data.push(novoPerg);
    displayMessage("Pergunta inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_perg', JSON.stringify(db));
}

function updatePerg(id, perg) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].perg = perg.perg,
    db.data[index].categoria = perg.categoria,
    db.data[index].resp = perg.resp

    displayMessage("Pergunta alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_perg', JSON.stringify(db));
}

function deletePerg(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Pergunta removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_perg', JSON.stringify(db));
}
