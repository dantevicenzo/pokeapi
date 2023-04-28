
import teamRocketNotFound from '../../assets/teamRocketNotFound.png'
import './NotFound.css'
import ButtonBig from '../../components/ButtonBig/ButtonBig'
import {Link} from 'react-router-dom';

<Link to="/benefits">Benefits</Link>
export default function NotFound() {
    return (
        <div className='notFoundContainer'>
            <img src={teamRocketNotFound}></img>
            <div><span className='white'>The rocket team </span><span className='black'>has won this time.</span></div>
            <ButtonBig href="/pokeapi/#/" text="Return" color="#F2CB07" />
        </div>
    )
}