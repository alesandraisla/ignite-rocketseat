// const repositoryName = 'uniform2';

import { RepositoryItem } from "./RepositoryItem";
import { useState } from 'react';
import '../styles/repositories.scss';
import { useEffect } from "react";

// estática
// const repository = {
//     name: 'uniform',
//     descripton: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="Repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}