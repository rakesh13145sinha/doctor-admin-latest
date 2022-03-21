import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pg-neet',
  templateUrl: './pg-neet.component.html',
  styleUrls: ['./pg-neet.component.css']
})
export class PgNeetComponent implements OnInit {
  question:any;
  exam:any[]=[];
  id:any;
  pageSize:any=5;
  currentPage:any=1;
  departments:any[]=[];
  options=["A","B","C","D"]
  constructor(
              private admin:SuperuserService,
              private toater:ToastrService,
              private fb:FormBuilder,
              private router:Router,

            ) { 
              this.question=fb.group({
                exam:[""],
                question:[""],
                subject:[""],
                option1:[""],
                option2:[""],
                option3:[""],
                option4:[""],
                detail:[""],
                correct_answer:[""]




              })
            }

  ngOnInit(): void {
    this.singleExam()
    this.speciality()
    
  }

  singleExam(){
    this.admin.ExamGET().subscribe(
      (r)=>{
        this.exam=r
        console.log(r)
      }
    )

  }
  
  Questionpost(){
    this.admin.Exam(this.question.value).subscribe(
      (r)=>{
        this.toater.success("Question posted")
        this.ngOnInit()
        this.question.reset()
        
      }
    )

  }
  //DEPARTMENT
  speciality(){
    this.admin.Department().subscribe(
      (r)=>{
        this.departments=r
        // console.log(r)
      }

    )
  }
  ChangeExam(event:any){
    console.log(event?.target.value)
    this.admin.ExamcourseGET(event.target.value).subscribe(
      (r)=>{
        this.exam=r
        
      }
    )

  }

  selectoption(event:any){
    console.log("============")
    console.log(event.target.value)
  }
  ChangeSubject(event:any){

  }
  deletequestion(id:any){
    this.id=id
  }
  delete(){
  this.admin.Examdelete(this.id).subscribe(
    (r)=>{
      console.log(r)
      this.toater.success("Question deleted")
      this.ngOnInit()
      //window.location.reload()
    }
  )
  }
}
