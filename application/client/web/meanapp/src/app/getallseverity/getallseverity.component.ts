import { Component, OnInit } from '@angular/core';
import { GetallseverityService } from './getallseverity.service';

@Component({
  selector: 'app-getallseverity',
  templateUrl: './getallseverity.component.html',
  styleUrls: ['./getallseverity.component.scss'],
})

export class GetallseverityComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public severity:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number;

    constructor (
        private getallseverityService: GetallseverityService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetAllValues() {
        this.getallseverityService.GpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}