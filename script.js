function toggleMode() {
  // Seleciona tag html
  const html = document.documentElement;

  /* // Verifica se a página já está em 'light' mode
  if (html.classList.contains('light')) {
    // Caso esteja, ocorre a remoção da classe
    html.classList.remove('light');
  } else {
    // Caso contrário, ocorre a adição da classe
    html.classList.add('light');
  } */

  html.classList.toggle('light');

  // Selecionar imagem
  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    // Se estiver no light mode, colocar avatar light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute("alt", "Foto de perfil do Mayk Brito com óculos escuro");
  } else {
    // Se estiver no light mode, colocar avatar normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil do Mayk Brito");
  }
}