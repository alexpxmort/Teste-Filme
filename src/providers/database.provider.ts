import { Sequelize } from 'sequelize-typescript';
import { Filme } from 'src/filmes/entities/filme.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'aquela123',
        database: 'nest',
      });
      sequelize.addModels([Filme]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
