
let txtBase = "Tache"
let taskList = document.querySelector("#listeTaches")
let addTaskButton = document.querySelector("#ajouterTache")

addTaskButton.addEventListener('click',function(event){
  event.preventDefault()
  addTask(txtBase)
})

/*
    AJOUTER TACHE
*/
function addTask(txtContent){
  //Ajouter une div avec la class tache
  let taskContainer = document.createElement("div")
  taskContainer.classList.add('tache')

    //Ajoute une div avec la classe tacheContenu dans la div précédente.
    let taskContent = document.createElement("div")
    taskContent.classList.add("tacheContenu")
    //Lui ajouter l'attribut contentEditable = true
    taskContent.setAttribute("contentEditable",true)
    // Lui ajoute le contenu "Tâche"


    // AJouter un lien avec la classe tacheInit dans la première div
    let resetLink = document.createElement('a')
    resetLink.classList.add("tacheInit")
    // lui ajouter les attributs href="#" et title="reset"
    resetLink.setAttribute('href','#')
    resetLink.setAttribute('title','reset')
    // Lui ajouter le contenu Reset


    // AJouter un lien avec la classe tacheSupprimer dans la première div
    let DeletLink = document.createElement('a')
    DeletLink.classList.add("tacheSupprimer")
    // lui ajouter les attributs href="#" et title="Delete"
    DeletLink.setAttribute('href','#')
    DeletLink.setAttribute('title','Delete')
    // Lui ajouter le contenu Delete


    // AJouter une div avec la classe clearBoth dans la première div
    let clearDiv = document.createElement('div')
    clearDiv.classList.add("clearBoth")

    taskList.appendChild(taskContainer)
    taskContainer.appendChild(taskContent)
    taskContainer.appendChild(resetLink)
    taskContainer.appendChild(DeletLink)
    taskContainer.appendChild(clearDiv)
    taskContent.innerHTML= txtContent
    resetLink.innerHTML='Delete'
    DeletLink.innerHTML='Reset'
}
