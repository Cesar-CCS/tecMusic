import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  MyUserService, RefreshTokenServiceBindings, TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';
import {TecMusicDsDataSource} from './datasources';
import {MailerServiceBindings} from './key';
import {EmailService} from './services';

export class TechmusicApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    this.component(AuthenticationComponent);
    // Mount jwt component
    this.component(JWTAuthenticationComponent);
    // Bind datasource
    this.dataSource(TecMusicDsDataSource, UserServiceBindings.DATASOURCE_NAME);
    this.dataSource(TecMusicDsDataSource, RefreshTokenServiceBindings.DATASOURCE_NAME)
    //new
    this.bind(UserServiceBindings.USER_SERVICE).toClass(MyUserService);
    //for jwt acces token
    this.bind(TokenServiceBindings.TOKEN_SECRET).to("CLAVE SECRETA")
    //for refresh token
    this.bind(RefreshTokenServiceBindings.REFRESH_SECRET).to("CLAVE SECRETA")

    //for jwt acces token
    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to("3600")
    //
    this.bind(RefreshTokenServiceBindings.REFRESH_REPOSITORY).to("216000")

    this.bind(MailerServiceBindings.MAILER_SERVICE).toClass(EmailService)
      .to(new EmailService("francodrg99@gmail.com", "franco12"));
  }
}
