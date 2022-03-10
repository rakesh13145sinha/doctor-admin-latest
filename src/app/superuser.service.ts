import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperuserService {
  url="http://3.132.212.116:8000/api/"
  imageurl="http://3.132.212.116:8000"

  username:any;

  // private _loading = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this._loading.asObservable();

  constructor(private http:HttpClient) { }


  //HEADER
  headers=new HttpHeaders()
  .set('Authorization',"Token"+" "+this.GetToken());

  ///LOADER SHOW
  // show(){
  //   this._loading.next(true);

  // }

  ///LOADER HIDE
  // hide(){
  //   this._loading.next(false);
  // }


  //LOGGIN RELATED API START
  SetUsername(username:any,status:any){
    localStorage.setItem("username",username),
    localStorage.setItem("status",status)

  }

  SetToken(token:any){
    localStorage.setItem("token",token)
  }
  GetToken(){
    return localStorage.getItem("token")
  }

  GetAdmin(){
    return localStorage.getItem("username")
  }

  isLoggedIn(){
    this.username=this.GetAdmin()
    return this.GetToken()

  }
  adminLogin(data:any):Observable<any>{
    return this.http.post<any>(this.url+"admin/login",data)
  }
  adminLogout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem('status')
  }

  //END LOGGIN API

  Dashboarddata():Observable<any>{
    return this.http.get<any>(this.url+"admin/dashboard",{"headers":this.headers})
  }
  //ALL USERS GET
  AllUser():Observable<any>{
    return this.http.get<any>(this.url+"admin/user/detail",{"headers":this.headers})

  }
  //SINGLE USER DETAIL
  SingleUser(id:any):Observable<any>{
    return this.http.get<any>(this.url+"admin/user/detail"+"?user_id="+id,{"headers":this.headers})
  }
  //DELETE USER
  DeleteUser(id:any):Observable<any>{
    return this.http.delete(this.url+"admin/user/detail"+"?user_id="+id,{"headers":this.headers})
  }


  //CATEGORY RELATED API
  Allcategory():Observable<any>{
    return this.http.get<any>(this.url+"admin/category/post",{"headers":this.headers})
  }

  //POST CATEGORY
  PostCategory(data:any):Observable<any>{
    return this.http.post<any>(this.url+"admin/category/post",data,{"headers":this.headers})

  }
  //DELETE CATEGORY
  DeleteCategory(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"admin/category/post"+"?category_id="+id,{"headers":this.headers})

  }


/////////////////////////////////////
///ALL JOBS
ShowAllJobs():Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/",{"headers":this.headers})
}

///SINGLE JOB DETAILS
Jobdetails(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?job_id="+id,{"headers":this.headers})
}
//GET ALL APPLIED JOBS
AppliedJob():Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/applied",{"headers":this.headers})
}
//GET DELETED JOBS
DeletedJobs():Observable<any>{
  return this.http.get<any>(this.url+"admin/category/deleted/jobs",{"headers":this.headers})
}


/////ALL CASE DETAILS
GetAllCase():Observable<any>{
  return this.http.get<any>(this.url+"admin/case",{"headers":this.headers})
}

///GET CASE BY ID
Case(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/case"+"?case_id="+id,{"headers":this.headers})
}

///ALL POLL GET

  GetAllPoll():Observable<any>{
    return this.http.get<any>(this.url+"admin/poll",{"headers":this.headers})
  }

  ///GET POLL BY ID
  Poll(id:any):Observable<any>{
    return this.http.get<any>(this.url+"admin/poll"+"?poll_id="+id,{"headers":this.headers})
  }



  ///ALL ARTICAL GET

  GetAllArticals():Observable<any>{
    return this.http.get<any>(this.url+"admin/artical",{"headers":this.headers})
  }

  ///GET ARTICAL BY ID
  Artical(id:any):Observable<any>{
    return this.http.get<any>(this.url+"admin/artical"+"?artical_id="+id,{"headers":this.headers})
  }

///ALL NEW PAGE GET

GetAllNewPage():Observable<any>{
  return this.http.get<any>(this.url+"admin/page/post",{"headers":this.headers})
}

///GET NEW PAGE BY ID
NewPage(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/page/post"+"?page_id="+id,{"headers":this.headers})
}


}
