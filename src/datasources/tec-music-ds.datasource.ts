import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tecMusicDS',
  connector: 'mysql',
  url: '',
  host: 'tecsoundbd.ctek3palvpaf.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'C3m0nchi2828.',
  database: 'tecsoundbd'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TecMusicDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tecMusicDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tecMusicDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
