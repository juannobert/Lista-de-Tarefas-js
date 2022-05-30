class App{
  enviarDados(){
    let ul = document.querySelector('.tarefas ul');
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
    let containerBtn = document.createElement('div')
    containerBtn.classList.add('container-btn')
    let li = document.createElement('li')
    li.innerHTML = nomeTarefa;
    li.appendChild(containerBtn)
    ul.appendChild(li)
    app.criarBtn(containerBtn)
  }
  criarBtn(containerBtn){
    let btnWarning = document.createElement('button')
    btnWarning.innerHTML = "Excluir"
    btnWarning.classList.add('btn')
    btnWarning.classList.add('btn-danger')
    btnWarning.setAttribute('onclick','app.deletar(this)')
    containerBtn.appendChild(btnWarning)
    let btnSuccess = document.createElement('button')
    btnSuccess.innerHTML = "Concluir"
    btnSuccess.classList.add('btn')
    btnSuccess.classList.add('btn-success')
    btnSuccess.setAttribute('onclick','app.concluir(this)')
    containerBtn.appendChild(btnSuccess)
  }
  selecionarLista(btn){
    let container = btn.parentNode
    return container.parentNode
  }
  deletar(btn){
    let list =  this.selecionarLista(btn)
    let className = list.parentNode.className
    document.querySelector("." + className).removeChild(list)
  }
 
  concluir(btn){
    let ul = document.querySelector('.concluidas ul')
    let list = this.selecionarLista(btn)
    this.deletar(btn)
    let container = list.children[0]
    container.removeChild(container.children[1])
    ul.appendChild(list)
    
    
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