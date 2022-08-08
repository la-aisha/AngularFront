import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Observable, of} from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders , HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,
    private Http: HttpClient,
    private router :Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name : '',
      email : '',
      password : ''
    }) ;  

  
  }

  submit(): void{
    this.Http.post('http://127.0.0.1:8000/api/users',this.form.getRawValue()).
    subscribe(res => {
      this.router.navigate(['/']);
      
/*       console.log(res);
 */
    });
    

  } 
/* 
  public submit(user : any): Observable<string> {
    return this.Http.post<string>('http://127.0.0.1:8000/api/users', {}, {
      observe: 'body', responseType: 'text'
    });
  }
  */
}
