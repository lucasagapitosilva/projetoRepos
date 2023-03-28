import { useParams } from 'react-router-dom';
import { Container, Owner, BackButton, Loading, IssuesList } from './style';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import api from '../../Services/api';

export default function Repositorio() {

    const [repos, setRepos] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    const { repositorio } = useParams();


    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(repositorio);
            const [reposData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepos(reposData.data);
            setIssues(issuesData.data);
            setLoading(false);
        };

        load();
    }, [repositorio]);


    if (loading) {
        return (
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }


    return (
        <Container>
            <BackButton to="/">
                <FaArrowLeft size={30} color="#000" />
            </BackButton>

            <Owner>
                <img src={repos.owner.avatar_url} alt={repos.owner.login} />
                <h1>{repos.name}</h1>
                <p>{repos.description}</p>
            </Owner>

            <IssuesList>
                {issues.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={item.user.avatar_url} alt={item.user.login} />

                            <div>
                                <strong>
                                    <a href={item.html_url}>{item.title}</a>

                                    {item.labels.map(label => (
                                        <span key={label.id}>{label.name}</span>
                                    ))}

                                </strong>

                                <p>{item.user.login}</p>

                            </div>
                        </li>
                    )
                })}
            </IssuesList>

        </Container>
    )
}