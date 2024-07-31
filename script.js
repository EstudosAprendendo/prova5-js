const formulario = document.querySelector("#formulario")

const texto = document.querySelector("#texto")
const lista_resultado = document.querySelector("#lista_resultado")


formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const novo_elemento = document.createElement("li") 
    const checkbox = document.createElement("input") 
    const span = document.createElement("span")
    const remover = document.createElement("button")


    checkbox.type="checkbox"
    remover.textContent="remover-tarefa"
    span.textContent = texto.value
    span.style.color = "red"
    novo_elemento.appendChild(checkbox)
    novo_elemento.appendChild(span)
    novo_elemento.appendChild(remover)
    

    lista_resultado.appendChild(novo_elemento) 

    texto.value = ""
    texto.focus()



checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "green";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "red";

            
        }
    });

remover.addEventListener("click", () => {
        lista_resultado.removeChild(novo_elemento);
    });

})