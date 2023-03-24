import { Container, Form, SubmitButton } from './style';
import { FaGithub, FaPlus } from 'react-icons/fa';

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meu Repositorios
            </h1>

            <Form onSubmit={() => {}}>
                <input
                type="text"
                placeholder="Adicionar Repositorios"
                />

                <SubmitButton>
                    <FaPlus size={14} color="#FFF"/>
                </SubmitButton>
            </Form>
        </Container>
    )
}