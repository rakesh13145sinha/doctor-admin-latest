import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  id:any;
  question:any;
  options:any[]=["A","B","C","D"]
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private router:Router,
              private activaterouter:ActivatedRoute
            ) { 
              this.activaterouter.paramMap.subscribe(
                (r)=>this.id=r.get('id')
              )
            }

  ngOnInit(): void {
    this.admin.ExamSingleGET(this.id).subscribe(
      (r)=>{
        this.question=r
      console.log(r)
      }
    )
  }

  onSubmit(){
    var formData= new FormData();
    formData.append("exam",this.question.exam)
    formData.append("question",this.question.question)
    formData.append("option1",this.question.option1)
    formData.append("option2",this.question.option2)
    formData.append("option3",this.question.option3)
    formData.append("option4",this.question.option4)
    formData.append("detail",this.question.detail)
    formData.append('correct_answer',this.question.correct_answer)
    this.admin.ExamUpdate(this.id,formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("!Question updated successfull")
        this.router.navigate(['/admin/post/pg-neet'])
      }
    )

    

    
  }
}
