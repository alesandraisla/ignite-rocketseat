// const repositoryName = 'uniform2';

import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'uniform',
    descripton: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="Repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />  
                <RepositoryItem repository={repository} />   
                <RepositoryItem repository={repository} />   
                <RepositoryItem repository={repository} />    
            </ul>
        </section>
    )
}