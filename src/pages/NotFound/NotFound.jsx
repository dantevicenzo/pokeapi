import teamRocketNotFound from '../../assets/teamRocketNotFound.png'
import { Button, NotFoundContainer } from '../../components/styled/styled';
import { useTheme } from 'styled-components';

export default function NotFound() {

    const { colors } = useTheme();

    return (
        <NotFoundContainer>
            <img src={ teamRocketNotFound }></img>
            <div><span style={{ color: colors.grey }}>The rocket team </span><span>has won this time.</span></div>
            <Button backgroundColor={ colors.primary } onClick={ () => location.href="/pokeapi/#/" }>Return</Button>
        </NotFoundContainer>
    )
}