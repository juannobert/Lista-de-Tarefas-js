class App{
  enviarDados(){
    let ul = document.querySelector('ul');
    let nomeTarefa = document.getElementById('input-name')
    if(app.verificarTexto(nomeTarefa.value)){
      app.criarElemento(nomeTarefa.value,ul);
      app.removerErro()
    }
    else{
      app.exibirErro();
    }
    
    app.limparFormulario(nomeTarefa)
  }
  criarElemento(nomeTarefa,ul){
    let li = document.createElement('li')
    li.innerHTML = nomeTarefa;
    ul.appendChild(li)
    app.criarBtn(li)
  }
  criarBtn(li){
    let btn = document.createElement('button')
    btn.innerHTML = "Excluir"
    btn.classList.add('btn')
    btn.classList.add('btn-danger')
    btn.setAttribute('onclick','app.deletar(this)')
    li.appendChild(btn)
  }
  deletar(btn){
    let list = btn.parentNode
    document.querySelector('ul').removeChild(list)
  }
  limparFormulario(nomeTarefa){
    nomeTarefa.value = "";
  }
  verificarTexto(texto){
    if(texto == ""){
      return false
    }
    return true
  }
  exibirErro(){
    let warning = document.querySelector('.warning-container')
    warning.style.display = 'block'
  }
  removerErro(){
    let warning = document.querySelector('.warning-container')
    warning.style.display = 'none'
  }
}