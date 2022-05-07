import { counter } from "./counter"
import { repositoryItem } from "./repositoryItem"

const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/GustavoBarreto13/DW2A4-React",
}



export function repositoryList() {
    return (
        <>
            <repositoryItem repository={repository} />
            <counter />
        </>
    )
}