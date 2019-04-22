/** App SERVER required Modules */
import "reflect-metadata";
import * as helmet from 'helmet';
import * as express from 'express';
import * as RateLimit from 'express-rate-limit';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import { createConnection } from 'typeorm';

// import config from '../../webpack.config';
/** END App SERVER required Modules */

import routes from './Routes/routes';
import * as appConfig from './Config/config'

const app = express();

let port : any;
/** Will be used only for Development */
if (process.env.NODE_ENV === 'development') {
    port = '5001';
    const allowCrossDomain = (req: any, res: any, next: any) => {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Origin', '*');
        next();
    }
    app.use(allowCrossDomain);
    app.use(helmet({ frameguard: false }));
}
else {
    app.use(helmet());
    const apiLimiter = new RateLimit({
        windowMs: 1 * 60 * 1000, // 1 Minute
        delayMs: 0,
        max: 100 // Max 100 hits
    });
    app.use(apiLimiter);
}
app.set('port', port);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////
// API Routes setup
/////////////////////////////////////////////////////////////////////
const _routes = new routes();
app.use('/', _routes._router);

/**
 * Create connection to DB using configuration provided in 
 * appconfig file.
 */
createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'),
        app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});

module.exports = app;