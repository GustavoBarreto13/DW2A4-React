import '../styles/reposiries.scss';
import { repositoryItem } from "./repositoryItem"
import { useState, useEffect } from "react";
import { CleanPlugin } from 'webpack';

// https://api.github.com/users/santicioli/repos

export function repositoryList() {

    const [repositories, setRepositories] = useState([])

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
                    return < repositoryItem repository={repository}/>
                })}
                < repositoryItem repository={repository} key={repository.id}/>
                
            </ul>
        </section>
    )
}