import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user';
import { MainService } from '../services/main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stay-updated',
  templateUrl: './stay-updated.component.html',
  styleUrls: ['./stay-updated.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StayUpdatedComponent implements OnInit {
  emailForm!: FormGroup;
  email!: User;

  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
    });
  }

  submit() {
    if (this.emailForm.valid) {
      this.service.AddEmail(this.emailForm.value).subscribe(
        (response) => {
          console.log('Email Add', response);
          let res = response.id;
          console.log(res);
          this.emailForm.reset();
          this.router.navigateByUrl(`alert/${res}`);
        },
        (error) => {
          console.error('Error Email', error);
        }
      );
    } else {
      console.log('Error ad valid Email');
    }
  }
}
