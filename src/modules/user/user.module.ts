import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersService } from './user.service';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UsersService],
})
export class UserModule {}
