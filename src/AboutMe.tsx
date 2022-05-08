import "./AboutMe.css";
import nloginJs from "./nlogin-js.png"
import tastebinGif from "./tastebin.gif"
export default function AboutMe(){
    
    return <>
        <section className="flex">
            <div>
                <img src={nloginJs} height="200" />
            </div>
            <div>
                <h1>nLogin JS</h1>
                <p>Permite integrar o nlogin usando java script de maneira muito mais facil</p>
                <p>Source: <a href="https://gitlab.com/tiagodinis33/nlogin-js">Gitlab</a></p>
            </div>
        </section>

        <section className="flex">
            <div>
                <h1>TasteBin</h1>
                <p>É só uma copia do paste bin... foi a primeira vez que usei cypress :)</p>
                <p>Source: <a href="https://github.com/tiagodinis33/tastebin">GitHub</a></p>
                <p>Site: <a href="https://tastebin.vercel.app">tastebin.vercel.app</a></p>
            </div>
            <div>
                <img height="300" src={tastebinGif}/>
            </div>
        </section>
        <section className="flex">
            <div>
                <h1>Yet Another NES Emulator (YANE)</h1>
                <p>É um emulador de NES feito em rust que estou programando por curiosidade</p>
                <p>Está em <u>desenvolvimento</u>, não é usável <u>ainda</u></p>
                <p>Source: <a href="https://github.com/tiagodinis33/yane">GitHub</a></p>
            </div>
        </section>
        <footer>
            <h3>Contatos:</h3>
            <p>Email: <a href="mailto:tiagodinis33@gmail.com">tiagodinis33@gmail.com</a></p>
            <p>Discord: Trustacean#7722</p>
            
        </footer>

    </>
}