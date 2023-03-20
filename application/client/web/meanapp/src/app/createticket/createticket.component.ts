import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
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
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.createticketService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.tickets).subscribe((data:any) => {
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
}