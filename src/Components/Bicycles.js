import "./Logoanima.css"
import bicycler from "./Bicycler.png"
import bicycler2 from "./Bicycler2.png"
function Bicycler () {
    return(
        <div className="bicucler">
            <img src={bicycler}/>
        </div>
    );
}

function Bicycler2 () {
    return(
        <div className="bicucler2">
            <img src={bicycler2}/>
        </div>
    );
}
export default function() {
return (
    <>
            <Bicycler></Bicycler>
            <Bicycler2></Bicycler2>
    </>
);
}