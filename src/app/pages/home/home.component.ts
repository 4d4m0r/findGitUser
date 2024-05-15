import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserGit } from '../../_models/userGit';
import { githubService } from '../../_services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: UserGit | undefined;
  username: string = '';

  constructor(private githubService: githubService) {}

  getUser() {
    this.githubService
      .getGitUser(this.username)
      .subscribe((response: UserGit) => {
        this.user = response;
      },(e) => console.log(e.message));
  }
}
