import { Component, OnInit } from '@angular/core';
import { GetallticketsService } from './getalltickets.service';

@Component({
  selector: 'app-getalltickets',
  templateUrl: './getalltickets.component.html',
  styleUrls: ['./getalltickets.component.scss'],
})

export class GetallticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'assignees', field: 'assignees'  },{ headerName: 'ticket_status', field: 'ticketstatus'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
        private getallticketsService: GetallticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetAllValues() {
        this.getallticketsService.GpGetAllValues().subscribe((data:any) => {
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