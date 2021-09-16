import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-company-candidates',
  templateUrl: './company-candidates.component.html',
  styleUrls: ['./company-candidates.component.css'],
})
export class CompanyCandidatesComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }
  companyName: any;
  users:any;
  ngOnInit(): void {
    this.companyName = this.activeRoute.snapshot.paramMap.get('name');
    this.getAllAppliedJobs();
  }

  getAllAppliedJobs() {
    this.userService.getUserData().subscribe((res: any) => {
      let data = res.rows
        .map((obj: any) => obj.doc)
        .filter((obj: any) => obj.role == 'USER');
      console.log(data);
      let arrayOfData: any = [];
      let resultArray:any = [];
      console.table(data);

      for (let user of data) {

        for (let appliedJob of user.appliedJobs) {

          arrayOfData.push(appliedJob);
        }

        if (arrayOfData.map((obj: any) => obj.companyName).includes(this.companyName)) {
          resultArray.push(user);
        }
        arrayOfData = [];
      }
      // }

    this.users=resultArray;
      console.table(resultArray);
    });
  }
}
