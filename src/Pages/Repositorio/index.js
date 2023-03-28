import { useParams } from 'react-router-dom';
import { Container } from './style';
import { useState, useEffect } from 'react';

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
    }, []);


    return (
        <Container>
            <span style={{ color:'#FFF' }}>
                {issues.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    )
                })}
            </span>
        </Container>
    )
}