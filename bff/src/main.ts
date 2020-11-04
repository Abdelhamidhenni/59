import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { NextFunction, Request, Response } from 'express';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { ConfigurationService } from './modules/configuration/configuration.service';
import { LoggerService } from './modules/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  const config = app.get(ConfigurationService);

  app.setGlobalPrefix(config.getGlobalPrefix());

  // Logger setup
  const logger = app.get(LoggerService);
  app.useLogger(logger);

  if (process.env.LOG_CATEGORIES && process.env.LOG_CATEGORIES.includes('REQUEST')) {
    app.use((req: Request, _res: Response, next: NextFunction) => {
      logger.log('request', 'request', { path: req.path, query: req.query });
      next();
    });
  }

  // ------------------------------------------------------
  // Security configuration
  // ------------------------------------------------------
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Cache-Control',
      'Content-Type',
      'If-Modified-Since',
      'Origin',
      'Pragma',
      'X-Data-Count',
      'X-Requested-With',
    ],
  });

  app.use(
    bodyParser.json({
      limit: '5mb',
    }),
  );

  // Change secret with your own
  app.use(cookieParser('1nm^n3YQQm!<R@8?Z9sj^oQYId]Jl2'));

  app.use(helmet());

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 100,
    }),
  );

  // ------------------------------------------------------
  // Start server
  // ------------------------------------------------------
  const options = new DocumentBuilder().setTitle('59 BFF').setDescription('59 BFF').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${config.getGlobalPrefix()}/swagger`, app, document);
  await app.listen(config.getPort());
}

bootstrap();
