import { Component, OnInit } from '@angular/core';
import { SearchticketsService } from './searchtickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchtickets',
  templateUrl: './searchtickets.component.html',
  styleUrls: ['./searchtickets.component.scss'],
})

export class SearchticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'assignees', field: 'assignees'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },{ headerName: 'ticket_status', field: 'ticketstatus'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number;

    constructor (
        private searchticketsService: SearchticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    severityGpGetAllValues() {
        this.searchticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.searchticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchticketsService.GpSearch(this.tickets).subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updatetickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}