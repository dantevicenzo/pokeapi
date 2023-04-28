import teamRocketNotFound from '../../assets/teamRocketNotFound.png'
import './NotFound.css'
import {Link} from 'react-router-dom';
import { Button } from '../../components/styled/ButtonBig.styled';

<Link to="/benefits">Benefits</Link>
export default function NotFound() {
    return (
        <div className='notFoundContainer'>
            <img src={teamRocketNotFound}></img>
            <div><span className='white'>The rocket team </span><span className='black'>has won this time.</span></div>
            <Button backgroundColor="#F2CB07" onClick={ () => location.href="/pokeapi/#/" }>Return</Button>
        </div>
    )
}