import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { FilmesService } from './filmes/filmes.service';
import { WebSearchService } from './filmes/web_search/web_serach_sevice';

@Module({
  imports: [FilmesModule],
  controllers: [AppController],
  providers: [AppService,FilmesService,WebSearchService,AppModule],
})
export class AppModule {}
