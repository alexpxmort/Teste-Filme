import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('filmes')
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
 async create(@Res() res,@Body() createFilmeDto: CreateFilmeDto) {
   try{
    let filme = await this.filmesService.create(createFilmeDto);
    return  res.status(HttpStatus.OK).json(filme).send();
   }catch(err){
    return res.status(HttpStatus.BAD_REQUEST).json({error:true,msg:err.message}).send();
   }
  }

  @Get()
  async findAll(@Res() res) {
    let filmes =  await this.filmesService.findAll();

    return  res.status(HttpStatus.OK).json(filmes).send();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id) {
    let filme = await  this.filmesService.findOne(+id);
    if (filme === undefined || filme  === null) {
     return res.status(HttpStatus.NOT_FOUND).json({error:true,msg:'Filme Não Encontrado'}).send();
    }else {
      return  res.status(HttpStatus.OK).json(filme).send();
    }
  }

  @Patch(':id')
 async update(@Res() res,@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    let resp  = await this.filmesService.update(+id, updateFilmeDto);

    if (resp.hasOwnProperty('error') && resp['error']) {
     return res.status(resp['status']).json(resp).send();
    }else {
      return  res.status(HttpStatus.OK).json().send({error:false,msg:'Filme atualizado com sucesso!'});
    }
  }

  @Delete(':id')
  async remove(@Res() res,@Param('id') id: string) {
    let resp = await this.filmesService.remove(+id);

    if (resp.hasOwnProperty('error') && resp['error']) {
     return res.status(resp['status']).json(resp).send();
    }else {
      return  res.status(HttpStatus.OK).json().send({error:false,msg:'Filme removido com sucesso!'});
    }
  }
}
