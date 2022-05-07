interface repositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function repositoryItem(props: repositoryItemProps) {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <li>
                    <strong>{props.repository?.name ?? 'Repositório Padrão'}</strong>
                    <p>{props.repository?.description}</p>
                    <a href={props.repository?.html_url}>Acesso ao Repositório</a>
                </li>
            </ul>
        </section>
    )
}