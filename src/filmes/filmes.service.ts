import { Injectable,Inject } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';
import { WebSearchService } from './web_search/web_serach_sevice';

@Injectable()
export class FilmesService {

  constructor(private readonly webSearchService: WebSearchService) {}

  async create(createFilmeDto: CreateFilmeDto) {
    let filmeWeb = await this.webSearchService.getApiFilmes(createFilmeDto.nome);

    if(filmeWeb.data !==null){
      if(filmeWeb.data){
        if(filmeWeb.data.results && filmeWeb.data.results.length > 0 ){
          createFilmeDto.nome = filmeWeb.data.results[0].original_title
        }
      }
    }

    let filme = await Filme.create(createFilmeDto);

    return filme;
  }

  async findAll() {
    let filmes = await Filme.findAll();

    return filmes;
  }

  async findOne(id: number) {
    let filme = await Filme.findByPk(id);

    if(filme === null){
      console.log('sd')
    }

    return filme;
  }

    async update(id: number, updateFilmeDto: UpdateFilmeDto) {
    let filme = await  this.findOne(id);

      if (filme === undefined || filme  === null) {
      return {error:true,msg:'Filme Não Encontrado',status:404};
      }else {
        return     Filme.update(updateFilmeDto,{
          where:{id:id}
        });
      }
  }


  remove(id: number) {
    return Filme.destroy({
      where:{
        id:id
      }
    });
  }
}
