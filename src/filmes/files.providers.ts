import { Filme } from "./entities/filme.entity";

export const filmesProviders = [
    {
        provider:'FILMES_REPOSITORY',
        useValue:Filme
    }
];