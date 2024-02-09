import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { MainService } from '../services/main.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  email: User | undefined;
  id: number | undefined;

  constructor(
    private service: MainService,
    private activRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activRouter.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.fetchEmailById(this.id);
      }
    });
  }

  fetchEmailById(id: number): void {
    this.service.getEmailById(id).subscribe(
      (data: User) => {
        this.email = data;
      },
      (error) => {
        console.error('Error fetching email by ID:', error);
      }
    );
  }
  return() {
    this.router.navigateByUrl('home');
  }
}
