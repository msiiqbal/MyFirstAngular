import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestData1 } from '../models/Test1.model';
import { SerTest1Service } from '../ser-test1.service';


@Component({
  selector: 'app-test-demo1',
  templateUrl: './test-demo1.component.html',
  styleUrls: ['./test-demo1.component.css']
})
export class TestDemo1Component implements OnInit, OnDestroy {

  Test1Subscription: any;
  alpha: any = []
  TestData: TestData1[] = [];

  constructor(private test1OBj: SerTest1Service) { }

  ngOnInit(): void {
    this.Test1Subscription = this.test1OBj.GetTestData1().subscribe(
      TestdataTemp => {
        // console.log(this.Testdata)
        this.alpha = TestdataTemp.data;
        this.TestData = this.alpha;

      }
    )

  }
  ngOnDestroy() {
    this.Test1Subscription.unsubscribe();
  }

}
