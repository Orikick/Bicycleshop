import "./Logoanima.css";

function Animatedline() {
    return (
        <marquee direction={'left'}>
            <ul className="anima_line animated">
                <li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li>
            </ul>
        </marquee>
    );
}

function AnimatedlineRev() {
    return (
    <>
    <marquee direction={'right'}>
        <ul className="anima_line">
            <li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li><li>OnMyWay</li>
        </ul>
    </marquee>
    </>
    );
}

export default function () {
    return (
        <div>            

            <Animatedline></Animatedline>
            <AnimatedlineRev></AnimatedlineRev>
            <Animatedline></Animatedline>
            <AnimatedlineRev></AnimatedlineRev>
            <Animatedline></Animatedline>
            <AnimatedlineRev></AnimatedlineRev>

        </div>
    );
}