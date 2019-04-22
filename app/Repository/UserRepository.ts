import { UsersEntity } from '../DatabaseEntities/UsersEntity';
import { getManager } from 'typeorm';

class UserRepository {
    constructor() {
    }

    async checkUserCredentials(request: any) {
        try {
            let LoginModel = new UsersEntity();
            LoginModel.EmailID = request.body.EmailID;
            LoginModel.Password = request.body.Password;
            return await getManager().getRepository(UsersEntity).find(LoginModel);
        } catch (error) {
            return error;
        }
    }
}
let usrRepo = new UserRepository();
export default usrRepo;