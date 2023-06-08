import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit 
{

  constructor(private service:SharedService) { 

  }

  @Input() emp:any;
  EmployeeId:string | undefined;
  EmployeeName:string | undefined;
  Department:string | undefined;
  DateOfJoining:Date | undefined ;
  PhotoFileName:string | undefined;
  PhotoFilePath:string | undefined;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining ;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


    uploadPhoto(event: { target: { files: any[]; }; }){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
    this.PhotoFileName=data.toString();
    this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

  closeClick(){
   
  }
  DataOfJoining(){
    this.toLocaleString();
  }

  textInput!: string;

  emptyError!: boolean;
  
 numberError!: boolean;
 numbererror!: boolean;
  
 lastnameInput!: string;

 emptyAddressError: boolean = false;

 numberlastnameError: boolean = false;
  
 validateLastNameInput() {

  if (this.lastnameInput === '') {

    this.emptyError = true;

    this.numbererror = false;

  } else if (/\d/.test(this.lastnameInput)) {

    this.emptyAddressError = false;

    this.numbererror = true;

  } else {

    this.emptyAddressError = false;

    this.numbererror = false;

  }

}



  
  
   validateInput() {
  
  if (this.textInput === '') {
  
   this.emptyError = true;
  
   this.numberError = false;
  
  } else if (/\d/.test(this.textInput)) {
  
  this.emptyError = false;
  
  this.numberError = true;
  
   } else {
  
  this.emptyError = false;
  
   this.numberError = false;
  
  }
  
   }






   textInput1!: string;


   validateInput1() {
  
    if (this.textInput1 === '') {
    
     this.emptyError = true;
    
    
    
    } else if (/\d/.test(this.textInput1)) {
    
    this.emptyError = false;
    
  
    
     } else {
    
    this.emptyError = false;
    
     this.numberError = false;
    
    }
    
     }


}



