import { useState, useCallback, useEffect } from 'react';
import { Container, Form, SubmitButton, List, DeleteButton } from './style';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../Services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const repoStorage = localStorage.getItem('@repos');

        if(repoStorage){
            setRepos(JSON.parse(repoStorage));
        }
    },[]);


    useEffect(() => {
        localStorage.setItem('@repos', JSON.stringify(repos));
    }, [repos]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true)
            try {

                if(newRepo === ''){
                    toast.error("Digite o espaço em branco!")
                }

                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repos.find(repo => repo.name === newRepo);

                if(hasRepo){
                    toast.info("Repositório já adicionado!")
                    return;
                }

                const data = {
                    name: response.data.full_name,
                };

                toast.success('Repositorio adicionado com sucesso!')
                setRepos([...repos, data]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        submit();

    }, [newRepo, repos])


    const handleDelete = useCallback((repo) => {
        const find = repos.filter( r => r.name !== repo);
        
        setRepos(find);
    }, [repos])

    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meu Repositorios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicionar Repositorios"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner size={14} color="#FFF" />
                    ) : (
                        <FaPlus size={14} color="#FFF" />
                    )}
                </SubmitButton>
            </Form>

            <List>
                {repos.map((item) => {
                    return(
                        <li key={item.name}>
                            <span>
                                <DeleteButton onClick={() => handleDelete(item.name)}>
                                    <FaTrash size={14}/>
                                </DeleteButton>
                                {item.name}
                                </span>
                            <Link to={`/repositorio/${encodeURIComponent(item.name)}`}>
                                <FaBars size={14}/>
                            </Link>
                        </li>
                    )
                })}
            </List>
        </Container>
    )
}