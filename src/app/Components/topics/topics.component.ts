import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {


  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({

      topics: new FormArray([new FormControl('data 1 '),
                            new FormControl('data 2 ') ])
    });
  }

  addTopic(input: HTMLInputElement){
    this.topics.push(new FormControl(input.value));

    input.value = '';
  }

  removeTopic(input: FormControl){
   const index = this.topics.controls.indexOf(input);
   this.topics.removeAt(index);
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
