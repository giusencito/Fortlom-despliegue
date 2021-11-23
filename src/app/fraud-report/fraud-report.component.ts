import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../models/report';
import { Usuario } from '../models/usuario';
import {ReportService} from "../services/report/report.service";
import { UsuarioService } from '../services/usuario/usuario.service';

export interface DialogData {
  id: string;
  description: string;
}

@Component({
  selector: 'app-fraud-report',
  templateUrl: './fraud-report.component.html',
  styleUrls: ['./fraud-report.component.css']
})
export class FraudReportComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(id:string): void{
    const dialogRef = this.dialog.open(FraudReportDialog, {
      width: '80%',
      maxWidth: '350px',
      data: {id: id}
    });
  }
}

@Component({
  selector: 'fraud-report-dialog',
  templateUrl: './fraud-report-dialog.component.html',
})
export class FraudReportDialog {

  report!:Report;
  relatedUser!: Usuario;

  constructor(private reportService: ReportService,
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<FraudReportDialog>,
    private $route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.report={} as Report;
    }

    ngOnInit() {
      this.usuarioService.getById(this.data.id) //->AQUI DEBE IR EL USUARIO ARTISTA
      .subscribe((response: any) => {
        this.relatedUser = response;
      });
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  createReport(id:string, description:string): void{
    this.report.reportDescription=description;

    this.reportService.create(this.report,this.$route.snapshot.params['id'], this.$route.snapshot.params['id'])
    .subscribe((response: any) => {
      console.log(response);
    });
  }


}
