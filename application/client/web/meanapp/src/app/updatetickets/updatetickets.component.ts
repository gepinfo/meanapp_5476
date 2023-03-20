import { Component, OnInit } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
    queryId: any;
    severityitemArray: any = [];
    typesitemArray: any = [];
    public tickets:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
        description: '',
        assignees: '',
        types: '',
        severity: '',
        ticketstatus: '',
    }

    constructor (
        private updateticketsService: UpdateticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
 	 	this.GpGetNounById();
 	 	});
    }
    severityGpGetAllValues() {
        this.updateticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.updateticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.assignees = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.ticketstatus = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updateticketsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetNounById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketsService.GpGetNounById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}