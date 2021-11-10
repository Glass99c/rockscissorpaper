import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';
const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
};

function HandIcon({value}) {
    const src = IMAGES[value];
    return <img className ="HandButton-icon Hand-icon" src={src} alt={value} />;
}

export default HandIcon;
