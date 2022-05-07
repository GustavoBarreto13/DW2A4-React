import '../styles/reposiries.scss';
import { repositoryItem } from "./repositoryItem"
import { useState, useEffect } from "react";
import { CleanPlugin } from 'webpack';

interface repository {
    id : number;
    name: string;
    description: string;
    html_url: string;
}

export function repositoryList() {

    const [repositories, setRepositories] = useState<repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/santicioli/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return < repositoryItem repository={repository} key={repository.id}/>
                })}
                
                
            </ul>
        </section>
    )
}