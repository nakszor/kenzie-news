export class DOM{
    static mostrarNoticias(array){
        const ul = document.querySelector("ul")

        array.forEach(noticia => {
            const categoria             = document.createElement("h3")
            const divcategoria          = document.createElement("div")
            const titulo                = document.createElement("h4")
            const divtitulo             = document.createElement("div")
            const paragrafo             = document.createElement("p")
            const divparagrafo          = document.createElement("div")
            const fonte                 = document.createElement("p")
            const divfonte              = document.createElement("div")
            const link                  = document.createElement("a")
            const divlink               = document.createElement("div")
            const divfontelink          = document.createElement("div")
            const divtextos             = document.createElement("div")
            const imgcard               = document.createElement("img")
            const divimg                = document.createElement("div")
            const divcard               = document.createElement("div")
            const licard                = document.createElement("li")

            categoria.innerHtml = noticia.categoria
            titulo.innerHTML    = noticia.titulo
            paragrafo.innerHTML = noticia.resumo
            imgcard.src         = noticia.imagem
            fonte.innerHTML     = `Fonte: ${noticia.fonte}`
            link.href           = noticia.noticia_completa
            link.innerHTML      = "Continuar Lendo"
            link.target         ="_blank"

            licard.classList.add("licard")
            divcard.classList.add("divcard")
            divimg.classList.add("divimgcard")
            divtextos.classList.add("textoscard")
            divcategoria.classList.add("divcategoria")
            divtitulo.classList.add("titulocard")
            divparagrafo.classList.add("paragrafocard")
            divfontelink.classList.add("divfontelink")
            fonte.classList.add("fontecard")
            divlink.classList.add("divlinkcard")
            link.classList.add("linkcard")

            divcategoria.appendChild(categoria)
            divtitulo.appendChild(titulo)
            divparagrafo.appendChild(paragrafo)
            divfonte.appendChild(fonte)
            divlink.appendChild(link)
            divfontelink.append(divfonte,divlink)
            divtextos.append(divcategoria, divtitulo, divparagrafo, divfontelink)
            divimg.appendChild(imgcard)
            divcard.append(divimg, divtextos)
            licard.appendChild(divcard)
            ul.appendChild(licard)
        });
        return ul
    } 
}