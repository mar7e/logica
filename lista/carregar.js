// ===== Botão carregar =====
const btnCarregar = document.createElement('button');
btnCarregar.textContent = 'Carregar Lista';
btnCarregar.style.display = 'block';
btnCarregar.style.margin = '10px auto';
btnCarregar.style.padding = '6px 12px';
btnCarregar.style.cursor = 'pointer';
btnCarregar.style.border = 'none';
btnCarregar.style.borderRadius = '5px';
btnCarregar.style.backgroundColor = '#2196F3';
btnCarregar.style.color = '#fff';
btnCarregar.style.fontWeight = 'bold';
btnCarregar.style.transition = 'background-color 0.3s';
container.appendChild(btnCarregar);

// ===== Efeito hover no botão =====
btnCarregar.addEventListener('mouseover', () => {
  btnCarregar.style.backgroundColor = '#1976D2';
});
btnCarregar.addEventListener('mouseout', () => {
  btnCarregar.style.backgroundColor = '#00c3ff';
});

// ===== Input de arquivo oculto =====
const inputArquivo = document.createElement('input');
inputArquivo.type = 'file';
inputArquivo.accept = '.txt';
inputArquivo.style.display = 'none';
document.body.appendChild(inputArquivo);

// ===== Função para criar item com checkbox =====
function criarItemComCheckbox(texto) {
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.style.alignItems = 'center';
  li.style.justifyContent = 'space-between';
  li.style.padding = '4px 8px';
  li.style.borderBottom = '1px solid #ddd';

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  // Texto do item
  const span = document.createElement('span');
  span.textContent = texto;
  span.style.flexGrow = '1';

  // Quando o checkbox for marcado, risca o texto
  checkbox.addEventListener('change', () => {
    span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    span.style.color = checkbox.checked ? '#777' : '#000';
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  return li;
}

// ===== Função carregar lista =====
function carregarListaDoArquivo(file) {
  const reader = new FileReader();
  reader.onload = function () {
    lista.innerHTML = '';
    const linhas = reader.result.split(/\r?\n/).filter(l => l.trim() !== '');
    if (linhas.length === 0) {
      alert('O arquivo está vazio!');
      return;
    }
    linhas.forEach(linha => {
      const li = criarItemComCheckbox(linha);
      lista.appendChild(li);
    });
  };
  reader.readAsText(file);
}

// ===== Eventos carregar =====
btnCarregar.addEventListener('click', () => inputArquivo.click());
inputArquivo.addEventListener('change', () => {
  const file = inputArquivo.files[0];
  if (file) {
    carregarListaDoArquivo(file);
    inputArquivo.value = '';
  }
});

// ===== Rodapé =====
const rodape = document.createElement('div');
rodape.textContent = `© ${new Date().getFullYear()} Maria Allana`;
rodape.style.textAlign = 'center';
rodape.style.marginTop = '20px';
rodape.style.fontSize = '0.6em';
rodape.style.color = '#555';
rodape.style.padding = '10px 0';
container.appendChild(rodape);

