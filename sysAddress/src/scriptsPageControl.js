function openTab(event, tabId) {
  // Esconde todo o conteúdo das abas
  const contents = document.getElementsByClassName("tab-content");
  for (const content of contents) {
      content.style.display = "none";
  }

  // Remove a classe ativa de todas as abas
  const tabs = document.getElementsByClassName("tab-button");
  for (const tab of tabs) {
      tab.classList.remove("active");
  }

  // Exibe a aba selecionada e adiciona a classe ativa
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
}
