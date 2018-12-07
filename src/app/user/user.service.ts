import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
    getUsers():any[]{
    return[
      {"id":1,"name":"Rajesh",},
      {"id":2,"name":"Ritesh",},
      {"id":3,"name":"Snephal",}
    ];
  }

}