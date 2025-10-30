// ===== Container =====
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

container.style.backgroundColor = '#00f3';
container.style.border = '2px solid #ccc';
container.style.borderRadius = '10px';
container.style.padding = '20px';
container.style.maxWidth = '400px';
container.style.margin = '20px auto';
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
container.style.fontFamily = 'Arial, sans-serif';

// ===== Título =====
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
titulo.style.textAlign = 'center';
titulo.style.marginBottom = '15px';
container.appendChild(titulo);

// ===== Input e botão adicionar =====
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
inputItem.style.width = '70%';
inputItem.style.padding = '6px';
inputItem.style.borderRadius = '5px';
inputItem.style.border = '1px solid #aaa';
container.appendChild(inputItem);

const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.marginLeft = '10px';
btnAdd.style.padding = '6px 12px';
btnAdd.style.cursor = 'pointer';
btnAdd.style.border = 'none';
btnAdd.style.borderRadius = '5px';
btnAdd.style.backgroundColor = '#4CAF50';
btnAdd.style.color = '#fff';
btnAdd.style.fontWeight = 'bold';
container.appendChild(btnAdd);

// ===== Lista =====
const lista = document.createElement('ol');
lista.style.marginTop = '15px';
lista.style.paddingLeft = '20px';
container.appendChild(lista);

// ===== Função criar item com lixeira vermelha =====
function criarItemComLixeira(texto) {
  const li = document.createElement('li');
  li.style.position = 'relative';
  li.style.paddingRight = '30px';
  li.style.paddingTop = '4px';
  li.style.paddingBottom = '4px';
  li.style.borderBottom = '1px solid #ccc';

  // Texto do item
  const spanTexto = document.createElement('span');
  spanTexto.textContent = texto;
  li.appendChild(spanTexto);

  // Ícone de lixeira
  const btnExcluir = document.createElement('span');
  btnExcluir.textContent = '🗑️';
  btnExcluir.style.position = 'absolute';
  btnExcluir.style.right = '0';
  btnExcluir.style.top = '50%';
  btnExcluir.style.transform = 'translateY(-50%)';
  btnExcluir.style.cursor = 'pointer';
  btnExcluir.style.color = '#e53935';            // vermelho
  btnExcluir.style.transition = 'color 0.2s ease';
  btnExcluir.title = 'Excluir item';

  // Hover: lixeira fica mais escura
  btnExcluir.addEventListener('mouseenter', () => btnExcluir.style.color = '#b71c1c');
  btnExcluir.addEventListener('mouseleave', () => btnExcluir.style.color = '#e53935');

  btnExcluir.addEventListener('click', () => li.remove());

  li.appendChild(btnExcluir);

  return li;
}

// ===== Adicionar item manualmente =====
function adicionarItem() {
  const valor = inputItem.value.trim();
  if (valor !== '') {
    const li = criarItemComLixeira(valor);
    lista.appendChild(li);
    inputItem.value = '';
    inputItem.focus();
  }
}

btnAdd.addEventListener('click', adicionarItem);
inputItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') adicionarItem();
});