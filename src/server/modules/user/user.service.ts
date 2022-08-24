import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUser(userID:String): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createUserDTO);
    return newUser.save();
  }

  async editUser(userID:String, createUserDTO: CreateUserDTO): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return editedUser;
  }

  async deleteUser(userID:String): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
