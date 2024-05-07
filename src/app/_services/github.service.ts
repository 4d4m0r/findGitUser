import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { UserGit } from "../_models/userGit";

@Injectable({
  providedIn: 'root'
})

export class githubService {
  url: string = 'https://api.github.com/'

  constructor( private http : HttpClient ){}

  getUsuarios(){
    return this.http.get<any>(this.url + 'users').pipe(
      map((response) => {
        return response; 
      })
    )
  }

  getGitUser(username: string){
    return this.http.get<UserGit>(this.url + 'users/' + username).pipe(
      map((response: UserGit) => {
        return response;
      })
    );
  }
}