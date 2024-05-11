
const tableBody = document.querySelector('tbody');
const addButton = document.querySelector('button');


function addNovaLinha() {

    event.preventDefault()
  
  const name = document.getElementById('nome_input').value;
  const product = document.getElementById('produto_select').value;
  const quantity = document.getElementById('qtde_input').value;
  const unitPrice = document.getElementById('valorUnitario_input').value;

  // Verifica se a quantidade é válida
  if (quantity <= 0 || isNaN(quantity)) {
    alert("A quantidade deve ser um número positivo maior que zero.");
    document.querySelector('.excel-table').classList.add('tabela-invalida');
    return;
}

// Verifica se o valor unitário é válido
if (unitPrice <= 0 || isNaN(unitPrice)) {
    alert("O valor unitário deve ser um número positivo maior que zero.");
    document.querySelector('.excel-table').classList.add('tabela-invalida');
    return;
}

  // Verifica se todos os campos estão preenchidos
if (name && product && quantity && unitPrice) {
  const novaLinha = document.createElement('tr');
  novaLinha.classList.add('cliente'); 

  const nome = document.createElement('td');
  nome.textContent = name;
  novaLinha.appendChild(nome);

  const produto = document.createElement('td');
  produto.textContent = product;
  novaLinha.appendChild(produto);

  const qtde = document.createElement('td');
  qtde.textContent = quantity;
  novaLinha.appendChild(qtde);

  const valorUni = document.createElement('td');
  valorUni.textContent = parseFloat(unitPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  novaLinha.appendChild(valorUni);

  const totalPrice = quantity * parseFloat(unitPrice);
  const totalPriceCell = document.createElement('td');
  totalPriceCell.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });; 
  novaLinha.appendChild(totalPriceCell);


  tableBody.appendChild(novaLinha);


  document.getElementById('nome_input').value = '';
  document.getElementById('qtde_input').value = '';
  document.getElementById('valorUnitario_input').value = '';


  // Adiciona evento de clique duplo para remover a linha
  novaLinha.addEventListener('dblclick', function() {
    this.remove();
});
} else {
  // Se algum campo estiver vazio, exibe uma mensagem de erro
  alert("Por favor, preencha todos os campos antes de adicionar um produto.");
  }
}


addButton.addEventListener('click', addNovaLinha);

// Captura todas as linhas da tabela
const linhasTabela = document.querySelectorAll('.cliente');

// Adiciona evento de clique duplo a cada linha da tabela
linhasTabela.forEach(function(linha) {
  linha.addEventListener('dblclick', function() {
      this.remove();
  });
});
