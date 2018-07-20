import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  simpleForm: FormGroup;
  formWithFormArray:FormGroup;
  formArrayItem: FormGroup;
  /**
   *
   */
  constructor(private fb:FormBuilder) {
    this.simpleForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.email)
    });
    this.formWithFormArray = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      totalValue:new FormControl(''),
      formArrayItem: this.fb.array([ this.createItem() ,this.createItem()])
    });
    this.formWithFormArray.controls.formArrayItem.valueChanges
  .subscribe((newVal) => {
    this.formWithFormArray.controls.totalValue.patchValue(
      //use newVal
      newVal.reduce((acc, curr) => {
        return acc + curr.totalAmount;
      }, 0)
    )
  });
  }
  createItem(): FormGroup {
    return this.fb.group({
      quantity: new FormControl(''),
      price: new FormControl(''),
      totalAmount: new FormControl(0)
  });;
  }
  calculate(submittedFormGroup:FormGroup){
    var values = submittedFormGroup.value;
    submittedFormGroup.controls.totalAmount.setValue(parseInt(values.price)*parseInt(values.quantity)|0);
  }
  addNewRow(){
    var formGroupArray = this.formWithFormArray.controls.formArrayItem as FormArray;
    formGroupArray.push(this.createItem());
  }
  removeRow(index) {
    var formGroupArray = this.formWithFormArray.controls.formArrayItem as FormArray;
    formGroupArray.removeAt(index);
  }
}
