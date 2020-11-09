import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-javaq',
  templateUrl: './javaq.component.html',
  styleUrls: ['./javaq.component.css','./javaq.style.css']
})
export class JavaqComponent implements OnInit {

  private quizSourse="assets/jquiz.json";
  public quizQuestions;
  public question:string;
  public options;
  public toggle = true;
  public status = 'Enable'; 
  public hoverclass:string;  
  public totalPoints:number;
  public maxPoints:number;
  public value:string;


  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.quizSourse).subscribe(data=>{
      this.quizQuestions=data;
      this.question=this.quizQuestions[0]["question"];
      this.options=this.quizQuestions[0]["options"];
      this.totalPoints=0;
      this.maxPoints=this.quizQuestions.length;
      //console.log(this.options)
    }, err=>{
      console.log(err)
    } )
  }

  resetPoints(){
    this.totalPoints=0;
  }

  changeQuestion(qest:string): void{
    this.question=qest;
    for(var q of this.quizQuestions){
      if(q["question"]==qest)
        this.options=q["options"]
    }
  }

  onItemChange(v1){
    this.value=v1;
  }

  noteAnswer(){
    var i=0;
    for(var q of this.quizQuestions){
      if(q["question"]==this.question){
        
        if(this.value=="option1"){
          if(q["options"][0]==q["answer"])
            this.quizQuestions[i]["rightOrWrong"]=true;
          else
            this.quizQuestions[i]["rightOrWrong"]=false;
          this.quizQuestions[i]["testAnswer"]=q["options"][0];
        }
        else if(this.value=="option2"){
          if(q["options"][1]==q["answer"])
            this.quizQuestions[i]["rightOrWrong"]=true;
          else
            this.quizQuestions[i]["rightOrWrong"]=false;
          this.quizQuestions[i]["testAnswer"]=q["options"][1];
        }
        else if(this.value=="option3"){
          if(q["options"][2]==q["answer"])
           this.quizQuestions[i]["rightOrWrong"]=true;
          else
            this.quizQuestions[i]["rightOrWrong"]=false;
          this.quizQuestions[i]["testAnswer"]=q["options"][2];
        }
        else if(this.value=="option4"){
          if(q["options"][3]==q["answer"])
            this.quizQuestions[i]["rightOrWrong"]=true;
          else
            this.quizQuestions[i]["rightOrWrong"]=false;
          this.quizQuestions[i]["testAnswer"]=q["options"][3];
        }
        break;
      }
      i++;
    }
 }

 calculatePoints(){
   for(var q of this.quizQuestions){
     if(q["rightOrWrong"]&&(q["rightOrWrong"]==true))
       this.totalPoints++;
   }
 }

}


