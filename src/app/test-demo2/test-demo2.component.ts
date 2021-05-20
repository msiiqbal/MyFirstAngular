import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestData2 } from '../models/Test2.model';
import { SerTest2Service } from '../ser-test2.service';

@Component({
  selector: 'app-test-demo2',
  templateUrl: './test-demo2.component.html',
  styleUrls: ['./test-demo2.component.css']
})
export class TestDemo2Component implements OnInit,OnDestroy {

  Test2Subscription:any;
  
  TestData:TestData2[]=[];

  constructor(private test1OBj:SerTest2Service ) { }

  ngOnInit(): void {
    this.Test2Subscription = this.test1OBj.GetTestData1().subscribe(
      Testdata =>{
        this.TestData=Testdata
      }
    )

  }
  ngOnDestroy(){
    this.Test2Subscription.unsubscribe();
  }

}
