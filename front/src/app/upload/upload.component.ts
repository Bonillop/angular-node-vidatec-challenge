import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required, this.validCSVFile]),
  })
  csv: File = null;
  success: boolean = false;

  constructor(private _csv: MovieService) { }

  get file() {return this.uploadForm.get('file')}

  ngOnInit(): void {
  }

  onSelectedFile(event){
    this.success = false;
    const file = <File>event.target.files[0];
    if(this.isValidCSVFile(file)){
      this.csv = file;
    } else {
      console.log("Invalid file");
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.csv);

    this._csv.uploadCsv(formData).subscribe(
      data => {
        this.success = true;
        this.uploadForm.reset({file: ''});
      },
      error => {
        console.log("Something went wrong", error)
        this.uploadForm.reset({file: ''});
      }
    )
  }

  isValidCSVFile(file: any) {
    return file?.name?.endsWith(".csv");
  }

  validCSVFile(control: AbstractControl): ValidationErrors | null{
    const file = control.value;
    console.log(file);
    if(file.endsWith(".csv")){
      return null;
    } else {
      return {"notValidCsv": true}
    }
  }
}
