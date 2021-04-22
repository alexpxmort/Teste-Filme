import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { DatabaseModule } from './database.module';
import { WebSearchService } from './web_search/web_serach_sevice';

@Module({
  imports:[DatabaseModule],
    controllers: [FilmesController],
  providers: [
    FilmesService,
    WebSearchService
  ]
})
export class FilmesModule {}
