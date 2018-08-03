# This is advance Reactive form with Calculation.
# FormGroup
This is the aggregates the values of FormControl it can contain also FormArrays which is for other childs data.
We can validate our FormControls with validator even also with async validators.
When instantiating a FormGroup, pass in a collection of child controls as the first argument. The key for each child registers the name for the control.

# FormBuilder
The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray. It reduces the amount of boilerplate needed to build complex forms.

# Syntactic sugar
In computer science,
syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. 
It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.
### Pre-configuration
```
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
imports: [FormsModule,ReactiveFormsModule]
```
### Import in the Component
```
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '../../../node_modules/@angular/forms';

 ```
## Declaration of FormGroup
  `simpleForm: FormGroup;`
  `formWithFormArray:FormGroup;`
 

### This is initialize formGroup with form builder and  form array watching for value changes 
```
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
  ```
  
  ### Otherside we need to create our new rows for New Value add so 
  ```
   createItem(): FormGroup {
    return this.fb.group({
      quantity: new FormControl(''),
      price: new FormControl(''),
      totalAmount: new FormControl(0)
  });;
  }
  ```
  ### Adding the created Item in the form array
  ```
   addNewRow(){
    var formGroupArray = this.formWithFormArray.controls.formArrayItem as FormArray;
    formGroupArray.push(this.createItem());
  }
  ```
  ### Removing row from the FormArray
  ```
   removeRow(index) {
    var formGroupArray = this.formWithFormArray.controls.formArrayItem as FormArray;
    formGroupArray.removeAt(index);
  }
```
