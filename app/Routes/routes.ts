import * as express from 'express';
import UserDBService from '../Controllers/UserController';

class Routes {
    public _router = express.Router();
    private _UserAPI = new UserDBService();
    //login
    constructor() {
        this._router.post('/api/dl/users/Connect', this._UserAPI.login);
    }
}
export default Routes;