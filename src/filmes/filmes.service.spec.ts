import { Test, TestingModule } from '@nestjs/testing';
import { FilmesService } from './filmes.service';
import { WebSearchService } from './web_search/web_serach_sevice';

describe('FilmesService', () => {
  let service: FilmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmesService,WebSearchService],
    }).compile();

    service = module.get<FilmesService>(FilmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
