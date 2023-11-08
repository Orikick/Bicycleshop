import Navbar from "./Navbar.css"
import bike from "./bike.gif"
import face from "./face.png"
import twiter from "./twitter.png"
import inst from "./inst.png"
export default function () {
    return (
        <footer className="footer">
            <hr />
            <span> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sit aliquid amet voluptatem similique quis provident, impedit ullam, quae, nobis dolore rerum! Facere, fugiat pariatur. Soluta doloribus porro eum. Ipsam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sit aliquid  </p>
            <span className="footer_image">
                <img src={bike} />
                <br/>
                <p>--OnMyWay--</p>
            </span>
            <div className="footer_buttons">
                <div class="socialsy bgtw">
                <a target="_blank" href="https://www.instagram.com/">
                        <img className="imggg" src={inst}/>
                    </a>
                </div>
                <div class="socialsy bgtw">
                <a target="_blank" href="https://twitter.com/">
                        <img className="imggg" src={twiter}/>
                    </a>
                </div>
                <div class="socialsy bgtw">
                    <a target="_blank" href="https://www.facebook.com/">
                        <img className="imggg f" src={face}/>
                    </a>
                </div>
            </div>
</span>            

        </footer>

    );

}