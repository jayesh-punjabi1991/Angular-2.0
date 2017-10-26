import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers:[PostsService]
})
export class UserComponent {
  name : string;
  email : string;
  address : address;
  hobbies : string[];
  showHobbies : boolean;
  posts: string[];

  constructor(private PostsService : PostsService){
    this.name  = 'Jayesh Punjabi';
    this.email = 'Jayesh.punjabi@genpact.com';
    this.address ={
      City:'Gurgaon',
      State:'Haryana',
      Country:'India'
    }
    this.hobbies = ['Basketball','Dance']
    this.showHobbies=false
    this.PostsService.getPosts().subscribe(posts => {
      this.posts=posts;
    })
  }
  ToggleHobbies(){
    this.showHobbies=!this.showHobbies;
  }
  AddHobby(hobby : string){
    this.hobbies.push(hobby);
  }
  DeleteHobby(i : number){
    this.hobbies.splice(i,1);
  }
}

interface address{
  City : string;
  State : string;
  Country : string;
}
