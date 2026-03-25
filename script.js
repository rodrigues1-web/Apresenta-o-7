document.getElementById("btnCriar").addEventListener("click", function ()
{
const titulo = document.getElementById("titulo").value;
const conteudo= document.getElementById("conteudo").value;

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
 },
 body: JSON.stringify({
      title: titulo,
      body: conteudo,
      userId: 1
      })
      })
      .then(res=> res.json())
      .then(novoPost => {


      //Convertendo para o padrão JSON:API
      const jsonApiformat ={
        data: {
            type: "POSTS",
            id: novoPost.id,
            attributes: {
                title: novoPost.title,
                body: novoPost.body
                }
        }        
    };
    document.getElementById("saida").textContent =
    JSON.stringify(jsonApiformat, null, 4)
    })
    });