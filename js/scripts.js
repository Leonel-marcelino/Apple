const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        /*Aqui descobrimos o target do botão que está a ser clicado*/
        console.log(e);

        /*Aqui removemos a class selected, que faz cm que fique slecionado azul */
        buttons.forEach((btn) =>{
            btn.querySelector(".color").classList.remove("selected");
        });

        /*Aqui vamos ver o target e adicionar ao botão que realmente clicamos */
        const button = e.target

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        /*Aqui adicionamos a class changing que tira a opacidade */
        image.classList.add("changing");
        /*Aqui trocamos a imagem, conforme o ID pois o ID está no nome da imagem */
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        
        /*Aqui vamos remover a class changing que tira a opacidade após 200ms */
        setTimeout(() => {
            image.classList.toggle("changing");
        },200)

    });
});
 