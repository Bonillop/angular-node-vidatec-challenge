import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CsvService } from '../csv.service'

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

  constructor(private _csv: CsvService) { }

  get file() {return this.uploadForm.get('file')}

  ngOnInit(): void {
  }

  onSelectedFile(event){
    const file = <File>event.target.files[0];
    if(this.isValidCSVFile(file)){
      console.log(file);
      this.csv = file;
    } else {
      console.log("Invalid file");
    }
  }

  onSubmit(){
    console.log("submit");
    console.log(this.csv);

    const formData = new FormData();
    formData.append('file', this.csv);

    this._csv.uploadCsv(formData).subscribe(
      data => console.log("Success", data),
      error => console.log("Something went wrong", error)
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
