import { Component, OnInit } from '@angular/core';
import { GetalltypesService } from './getalltypes.service';

@Component({
  selector: 'app-getalltypes',
  templateUrl: './getalltypes.component.html',
  styleUrls: ['./getalltypes.component.scss'],
})

export class GetalltypesComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public types:any = {
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
        private getalltypesService: GetalltypesService,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetAllValues() {
        this.getalltypesService.GpGetAllValues().subscribe((data:any) => {
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