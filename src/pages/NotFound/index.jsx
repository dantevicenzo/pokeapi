import teamRocketNotFound from '../../assets/teamRocketNotFound.png'
import { Button } from '../../components/Button/style';
import { Container } from './style';
import { useTheme } from 'styled-components';

export default function NotFound() {

    const { colors } = useTheme();

    return (
        <Container>
            <img src={ teamRocketNotFound }></img>
            <div><span style={{ color: colors.grey }}>The rocket team </span><span>has won this time.</span></div>
            <Button backgroundColor={ colors.primary } onClick={ () => location.href="/pokeapi/#/" }>Return</Button>
        </Container>
    )
}