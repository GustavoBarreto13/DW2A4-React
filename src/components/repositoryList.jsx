import '../styles/reposiries.scss';
import { repositoryItem } from "./repositoryItem"


const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/GustavoBarreto13/DW2A4-React",
}

export function repositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                < repositoryItem repository={repository}/>
                < repositoryItem repository={repository}/>
                < repositoryItem repository={repository}/>
                < repositoryItem repository={repository}/>
            </ul>
        </section>
    )
}