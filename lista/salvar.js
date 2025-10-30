// ===== Botão salvar =====
const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'Salvar Lista';
btnSalvar.style.display = 'block';
btnSalvar.style.margin = '10px auto';
btnSalvar.style.padding = '6px 12px';
btnSalvar.style.cursor = 'pointer';
btnSalvar.style.border = 'none';
btnSalvar.style.borderRadius = '5px';
btnSalvar.style.backgroundColor = '#FF9800';
btnSalvar.style.color = '#fff';
btnSalvar.style.fontWeight = 'bold';
btnSalvar.style.transition = 'background-color 0.3s';
container.appendChild(btnSalvar);

// Hover bonito
btnSalvar.addEventListener('mouseover', () => {
  btnSalvar.style.backgroundColor = '#F57C00';
});
btnSalvar.addEventListener('mouseout', () => {
  btnSalvar.style.backgroundColor = '#FF9800';
});

// ===== Função salvar e limpar lista =====
function salvarLista() {
  const itens = Array.from(lista.querySelectorAll('li')).map(li => {
    const span = li.querySelector('span');
    const checkbox = li.querySelector('input[type="checkbox"]');
    const texto = span ? span.textContent.trim() : '';
    const comprado = checkbox ? checkbox.checked : false;
    // indica se foi comprado
    return comprado ? `${texto} [X]` : texto;
  }).filter(l => l !== '').join('\n');

  if (!itens) {
    alert('A lista está vazia!');
    return;
  }

  const blob = new Blob([itens], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'lista.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  // Limpa a lista e storage
  lista.innerHTML = '';
  localStorage.removeItem('listaCompras');
}

btnSalvar.addEventListener('click', salvarLista);