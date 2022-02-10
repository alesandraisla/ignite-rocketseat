interface RepositoryItemProps {
    repository: {
        name: string;
        descripton: string;
        html_url: string;
    }
}

//funciondadeli semelhaten do type
//Para tipagem o ideal é colocar o nome do arquivo + o que tem no parametro
// que no caso é RepositoryItemProps
// o importante é tipar somente as informacoes que serão utilizadas na aplicacao
// nao precisa tipar todas informacoes vindas da API 

export function RepositoryItem(props: RepositoryItemProps ) {
    return(
        <li>
        <strong>{props.repository.name ?? 'Default'}</strong>
        <p>{props.repository.descripton}</p>
        <a href={props.repository.html_url}>
            Acessar repositório
        </a>
    </li>
    )
}