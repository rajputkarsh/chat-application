
import { connect } from 'getstream';
import bcrypt from 'bcrypt';
import { StreamChat } from 'stream-chat';
import crypto from 'crypto';

class AuthController{

  async login(email: string, password: string){
    try{
      const serverClient = connect(process.env.STREAM_API_KEY as string, process.env.STREAM_API_SECRET as string, process.env.STREAM_APP_ID as string)
      const client = StreamChat.getInstance(process.env.STREAM_API_KEY as string, process.env.STREAM_API_SECRET as string);

      const { users } = await client.queryUsers({ email: email });
      if(!users.length) return Promise.reject('User Not Found');

      const success = await bcrypt.compare(password, users[0].hashedPassword);
      const token = serverClient.createUserToken(users[0].id);

      if(!success) return Promise.reject('Incorrect Password');
      
      return { token, fullName: users[0].fullName, email, userId: users[0].id};
      
    } catch(error){
      throw error;
    }
  }

  async signup(fullName: string, phoneNumber: string, email: string, password: string){
    try{

      const userId = `cus_${crypto.randomBytes(16).toString('hex')}`;
      const passwordHash = await bcrypt.hash(password, 10);

      const serverClient = connect(process.env.STREAM_API_KEY as string, process.env.STREAM_API_SECRET as string, process.env.STREAM_APP_ID as string);

      const token = serverClient.createUserToken(email);

      return { token, fullName, email, userId, passwordHash, phoneNumber };

    } catch(error){
      throw error;
    }    
  }

}

export default new AuthController();