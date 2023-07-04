/* <div class="divcard">
                <div class="divimgcard">
                    <img src="./src/img/image 3.png" alt="imagem de Silmara Souza sorrindo com logo da kenzie no fundo">
                </div>
                <div class="textoscard">
                    <div class="divcategoria">
                        <h3>Negócios</h3>
                    </div>
                    <div class="titulocard">
                        <h4>Silmara Souza é a nova CMO da Kenzie Academy Brasil</h4>
                    </div>
                    <div class="paragrafocard">
                        <p>A executiva acumula 15 anos de experiência em branding e comunicação digital</p>
                    </div>
                    <div class="fontecard">
                        <p>Fonte: Metropoles</p>
                    </div>
                </div>
            </div> 
*/
import { API } from "./app.js";
import { DOM } from "./dom.js";

const news = await API.getNews()

DOM.mostrarNoticias(news)