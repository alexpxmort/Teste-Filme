import {Logger,INestApplication} from '@nestjs/common'
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'

export const setupSwagger = (app:INestApplication)=>{
    const logger = new Logger('Swagger');
    const swaggerEndPoint = '/api/v2/api-docs';

    const options = new DocumentBuilder()
    .setTitle('API DE FILMES')
    .setDescription('Api de Filmes NodeJs')
    .setVersion('1.0.0')
    .addTag('Base')
    .build();

    const document = SwaggerModule.createDocument(app,options);
    SwaggerModule.setup(swaggerEndPoint,app,document);
    logger.log(`Added Swagger on endpoint ${swaggerEndPoint}`);
}