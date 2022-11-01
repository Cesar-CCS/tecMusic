import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  MyUserService, RefreshTokenServiceBindings, TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {Request, Response, RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import morgan from 'morgan';
import path from 'path';
import {TecMusicDsDataSource} from './datasources';
import {MailerServiceBindings} from './key';
import {MySequence} from './sequence';
import {EmailService} from './services';
export {ApplicationConfig};

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

    this.setupLogging();

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
    this.bind(RefreshTokenServiceBindings.REFRESH_EXPIRES_IN).to("216000")

    this.bind(MailerServiceBindings.MAILER_SERVICE).toClass(EmailService)
      .to(new EmailService("francodrg99@gmail.com", "ybhbnryixldxsxfp"));
  }
  private setupLogging() {
    // Register `mrgan` express middleware
    // Create a middleware factory wrapper for `morgan(format, options)`
    const morganFactory = (config?: morgan.Options<Request, Response>) => {
      this.debug('Morgan configuration', config);
      return morgan('combined', config);
    };

    // Print out logs using `debug`
    const defaultConfig: morgan.Options<Request, Response> = {
      stream: {
        write: str => {
          this._debug(str);
        },
      },
    };
    this.expressMiddleware(morganFactory, defaultConfig, {
      injectConfiguration: 'watch',
      key: 'middleware.morgan',
    });
  }

}