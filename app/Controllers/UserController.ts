import { Request, Response } from "express";
import usrRepo from '../Repository/UserRepository'

class UserDBService {
    constructor() {
    }
    //User Login
    async login(req: Request, res: Response) {
        try {
            return usrRepo.checkUserCredentials(req).then(
                (userData) => {
                    let UserData = userData;
                    console.log(userData);
                    if (UserData.length > 0) {
                        return res.status(200).json({ response: { _isSucceed: true, _data: UserData, _msg: "Valid User" } });
                    }
                    else {
                        return res.status(400).json({ response: { _isSucceed: false, _data: [], _msg: "No user data found" } });
                    }
                }
            );
        } catch (error) {
            return res.status(500).json({ response: { _isSucceed: true, _data: [], _msg: error } });
        }
    }
}
export default UserDBService;