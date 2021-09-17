import { BCRYPT_SALT_ROUNDS } from '../libs/constant';
import * as bcrypt from 'bcrypt';


const  hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    password = await bcrypt.hash(password, salt);
    return password;
  };

export default {hashPassword};