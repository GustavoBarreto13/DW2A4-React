export function repositoryItem(props) {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <li>
                    <strong>{props.repository?.name ?? 'Repositório Padrão'}</strong>
                    <p>{props.repository?.description}</p>
                    <a href={props.repository?.link}>Acesso ao Repositório</a>
                </li>
            </ul>
        </section>
    )
}