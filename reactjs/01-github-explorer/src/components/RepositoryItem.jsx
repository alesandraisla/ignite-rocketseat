export function RepositoryItem(props) {
    return(
        <li>
        <strong>{props.repository.name ?? 'Default'}</strong>
        <p>{props.repository.descripton}</p>
        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>
    )
}