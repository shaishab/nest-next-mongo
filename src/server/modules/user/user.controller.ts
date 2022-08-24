import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Query,
  Put,
  Delete,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { ParseIntPipe } from '../shared/pipes/parse-int.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Fetch all users
  @Get('users')
  async getUsers(@Req() req:Request, @Res() res: Response) {
    try {
      console.log('Server API called to retrieve user==============');
      const users = await this.userService.getUsers();
      return res.send(users);
    } catch(e) {
      console.log('catch error=====', e);
    }
    
  }

  // Fetch a particular user using ID
  @Get('user/:userID')
  async getUser(@Res() res: Response, @Param('userID', new ValidateObjectId()) userID:String) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  // Submit a user
  @Post('/user')
  async addUser(@Res() res:Response, @Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  // Edit a particular user using ID
  @Put('/edit')
  async editUser(
    @Res() res:Response,
    @Query('userID', new ValidateObjectId()) userID:String,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    const editedUser = await this.userService.editUser(userID, createUserDTO);
    if (!editedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }

  // Delete a user using ID
  @Delete('/delete')
  async deleteUser(
    @Res() res:Response,
    @Query('userID', new ValidateObjectId()) userID:String,
  ) {
    const deletedUser = await this.userService.deleteUser(userID);
    if (!deletedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted!',
      user: deletedUser,
    });
  }
}
