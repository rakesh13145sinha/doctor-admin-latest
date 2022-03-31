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

  //CATEGORY GET BY ID
  categroyGEt(id:any):Observable<any>{
    return this.http.get<any>(this.url+"admin/category/post?category_id="+id,{"headers":this.headers})
  }
  
  //UPDATE CATEGORY
  Updatecategory(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.url+"admin/category/post?category_id="+id,data,{"headers":this.headers})
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


//CREATE JOBS
CreateJobs(id:any,data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/category/jobs/"+"?category_id="+id,data,{"headers":this.headers})
}

//CATEGORY JOBS
CategoryJobs(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?category_id="+id,{"headers":this.headers})
}

//DESIGNATION JOBS

DesignationJobs(name:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?designation="+name,{"headers":this.headers})
}

//Qualification JOBS

QualificationJobs(name:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?qualification="+name,{"headers":this.headers})
}
//UPDATE JOB

//STATE JOBS
StateJobs(name:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?state="+name,{"headers":this.headers})
}

Updatedetails(id:any,data:any):Observable<any>{
  return this.http.put<any>(this.url+"admin/category/jobs/"+"?job_id="+id,data,{"headers":this.headers})
}

///SINGLE JOB DETAILS
Jobdetails(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/"+"?job_id="+id,{"headers":this.headers})
}
//GET ALL APPLIED JOBS
AppliedJob():Observable<any>{
  return this.http.get<any>(this.url+"admin/category/jobs/applied",{"headers":this.headers})
}

///HIDE THE JOB
//CREATE JOBS
HideJob(id:any,data:any):Observable<any>{
  return this.http.patch<any>(this.url+"admin/category/jobs/"+"?job_id="+id,data,{"headers":this.headers})
}

//GET DELETED JOBS
DeletedJobs():Observable<any>{
  return this.http.get<any>(this.url+"admin/category/deleted/jobs",{"headers":this.headers})
}
Recoverjobs(id:any,):Observable<any>{
  return this.http.get<any>(this.url+"admin/category/deleted/jobs"+"?job_id="+id,{"headers":this.headers})
}

///DEPARTMENT JOBS
Departmentjobs(dep:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/dropdownlist/speciality_department"+"?department="+dep,{"headers":this.headers})

}

///CATEGORY DEPARTMENT
categoryDepartment(category:any):Observable<any>{
  return this.http.get<any>(this.url+"job/category/designation/"+category)
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



///SHOW DEPARTMENT
Department():Observable<any>{
  return this.http.get<any>(this.url+"user/profession/hospital/department",{"headers":this.headers})
}
CategoryReletedDepatment(name:any):Observable<any>{
  return this.http.get<any>(this.url+"job/category/name?category="+name,{"headers":this.headers})
}


//SHOW HOSPITAL TYPE
HospitalType():Observable<any>{
  return this.http.get<any>(this.url+"user/profession/hospital/type",{"headers":this.headers})
}
//DESIGNATION
Designation():Observable<any>{
  return this.http.get<any>(this.url+"job/designations/",{"headers":this.headers})

}
// SHOW ALL STATE

State():Observable<any>{
  return this.http.get<any>(this.url+"job/search/state",{"headers":this.headers})

}
//CITIES
Cities():Observable<any>{
  return this.http.get<any>(this.url+"job/search/state/location",{"headers":this.headers})

}
Qualification():Observable<any>{
  return this.http.get<any>(this.url+"user/profession/info",{"headers":this.headers})
}
///NEET-PG SS-NEET
Exam(data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/create/question",data,{"headers":this.headers})
}
ExamGET():Observable<any>{
  return this.http.get<any>(this.url+"admin/create/question",{"headers":this.headers})
}
ExamSingleGET(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/create/question"+"?id="+id,{"headers":this.headers})
}
ExamcourseGET(exam:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/create/question"+"?exam="+exam,{"headers":this.headers})
}
ExamUpdate(id:any,exam:any):Observable<any>{
  return this.http.put<any>(this.url+"admin/create/question"+"?id="+id,exam,{"headers":this.headers})
}
Examdelete(id:any):Observable<any>{
  return this.http.delete<any>(this.url+"admin/create/question"+"?id="+id,{"headers":this.headers})
}
///HOSPITAL TOUR BANNER IMAGE UPLOAD
Hospitaltourimage(id:any,data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/hospital/image/"+id,data,{"headers":this.headers})
}

Hospitaltourimageget(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/image/"+id,{"headers":this.headers})
}

Hospitaltourimagedelete(id:any):Observable<any>{
  return this.http.delete<any>(this.url+"admin/hospital/image/"+id,{"headers":this.headers})
}

Hospitaltourighlights(id:any,data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/hospital/highlight/"+id,data,{"headers":this.headers})
}

Hospitaltourighlightsget(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/highlight/"+id,{"headers":this.headers})
}

Hospitaltourighlightsdelete(id:any):Observable<any>{
  return this.http.delete<any>(this.url+"admin/hospital/highlight/"+id,{"headers":this.headers})
}
HospitalSpeciality(id:any,data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/hospital/speciality/"+id,data,{"headers":this.headers})
}

HospitalSpecialityget(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/speciality/"+id,{"headers":this.headers})
}
HospitalSpecialitydelete(id:any):Observable<any>{
  return this.http.delete<any>(this.url+"admin/hospital/speciality/"+id,{"headers":this.headers})
}


HospitalINFO(data:any):Observable<any>{
  return this.http.post<any>(this.url+"admin/hospital/information/",data,{"headers":this.headers})
}
HospitalINFOGET():Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/information/",{"headers":this.headers})
}

HospitalINFOGETid(id:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/information/"+"?hospitalid="+id,{"headers":this.headers})
}

HospitalINFOName(name:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/information/"+"?name="+name,{"headers":this.headers})
}
HospitalNamenandLocation(name:any,location:any):Observable<any>{
  return this.http.get<any>(this.url+"admin/hospital/information/"+"?name="+name+"&location="+location,{"headers":this.headers})
}
HospitalINFOupdate(id:any,data:any):Observable<any>{
  return this.http.put<any>(this.url+"admin/hospital/information/"+"?hospitalid="+id,data,{"headers":this.headers})
}
HospitalINFOdelete(id:any,):Observable<any>{
  return this.http.delete<any>(this.url+"admin/hospital/information/"+id,{"headers":this.headers})
}

}
