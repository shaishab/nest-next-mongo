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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Fetch all users
  @Get('users')
  async getUsers(@Res() res) {
    console.log('Server API called to retrieve user==============');
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  // Fetch a particular user using ID
  @Get('user/:userID')
  async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  // Submit a user
  @Post('/user')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  // Edit a particular user using ID
  @Put('/edit')
  async editUser(
    @Res() res,
    @Query('userID', new ValidateObjectId()) userID,
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
    @Res() res,
    @Query('userID', new ValidateObjectId()) userID,
  ) {
    const deletedUser = await this.userService.deleteUser(userID);
    if (!deletedUser) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted!',
      user: deletedUser,
    });
  }
}
