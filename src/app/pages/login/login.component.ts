import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders , HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form : FormGroup;
  
  constructor(private fb : FormBuilder,
  private Http : HttpClient,
  private router :Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email : '',
      password : ''
    })
  }

   submit(): void{
    this.Http.post('http://127.0.0.1:8000/api/login_check',this.form.getRawValue(), {
      responseType: 'text'}).subscribe(
        res => {
          console.log(res); })



         /*  if (res.status == 200) {
            this.router.navigate(['/'])
          }
          else {
            alert(res.status)
          }
        },
        err => alert(err)
      );
    */
    }
    

  

/*  login(username: string, password: string) {
    const dummyUser = { username, password };
    this.loginService.login(dummyUser).subscribe((data) => {
      console.log('data', data);
      this.user = data;
      console.log('user', this.user);
    }); */


/* 
  submit(): void{
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk1NjQ2NDMsImV4cCI6MTY1OTU2ODI0Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiUm9zYWxlZS5TdHJhY2tlNDNAaG90bWFpbC5jb20gIn0.VsB4R7i9OSk-_bC1PFkSD4Uy7QcPKkRjcATsa7CWhVLkSPNaWGw3SWfqLiUJQfmais6h1u5Zz6GYQXTkw9Lta6dzH6BREbQjWRvvineDZ75MPM1xl13S1t_guaO6B-t5h4QS9FJyCYGAxQsyFGx11fFf3xB0e9NpAYZisae_MnQ4Qq60xWUT6zqxo7kXl80HkpDGnwV2gxqYbjMLt4y-REOXhG9G6O43CEpqnYQcNTnplpCGd7iUaFgNVrS5YKhA_5l_-zoeTq-0_UlaPNvoG_zjyP0LRbgJt6iy83wUNgKmunljQSgoZUxMooTh_y2QEqiwW8ZCQ6BN72SvUCvuiQ'
    const headers = new HttpHeaders({
     'custom-header': 'aisha',
     'Content-Type': 'application/json',
     'cache-control':'no-cache',
     'Authorization': ` ${token}`,
     'X-Requested-With'  : 'XMLHttpRequest',
     'Authenticationtoken': ` ${token}`


    });
    
    this.Http.post('http://127.0.0.1:8000/api/login_check',this.form.getRawValue(),{ headers: headers } ).
    subscribe(res => {
      this.router.navigate(['/login'])
 
      });
      
  }
  */
  
  
  
}
