import {Injectable} from '@nestjs/common'
import {URL_MOVIE} from '../../requests/api/index'
import axios from 'axios'
@Injectable()
export class WebSearchService{
    async getApiFilmes(query){
        const url = `${URL_MOVIE.URL}&query=${query}`;

        console.log(url)

        return await axios.get(url);
    }
}