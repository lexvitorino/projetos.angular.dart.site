import { Component, OnInit, ViewChild } from '@angular/core';
import { ContasPagarService } from '../contas-pagar.service';
import { ContasPagar } from '../contas-pagar.model';
import { DatatablesService } from 'src/app/shared/utils/datatables.service';
import { Router } from '@angular/router';
import { FuncoesService } from 'src/app/shared/utils/funcoes.service';
import { MessageService } from 'src/app/shared/utils/messge.service';
import { StatusPagamento } from 'src/app/config/enum.enumerable';

declare var $;

@Component({
  selector: 'app-contas-pagar-index',
  templateUrl: './contas-pagar-index.component.html'
})
export class ContasPagarIndexComponent implements OnInit {

  @ViewChild('dataTable', { static: true }) table;
  private dataTable: {};

  public dados: ContasPagar[];
  public data = new ContasPagar();

  constructor(
    private router: Router,
    private contasPagarService: ContasPagarService,
    private datatablesService: DatatablesService,
    private funcoesService: FuncoesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.contasPagarService.get().subscribe(resp => {
      if (this.funcoesService.isNotUndefinedOrNull(resp['error'])) {
        this.messageService.error('Cadastro de Contas a Pagar', resp['error']);
      }
      this.dados = resp['data'];
      const columns = [
        this.datatablesService.getDataID(),
        this.datatablesService.getDataDateTime('data', 'Data', 'DD/MM/YYYY', '10%'),
        this.datatablesService.getDataString('numero', 'Número', '10%'),
        this.datatablesService.getDataString('parcela', 'Parcela', '10%'),
        this.datatablesService.getDataString('fornecedor', 'Fornecedor'),
        this.datatablesService.getDataDouble('valor', 'Valor', 2, '10%'),
        this.datatablesService.getDataSelect('status', 'Status', new StatusPagamento(), '10%')
      ];
      this.dataTable = $(this.table.nativeElement);
      this.datatablesService.monta(this.dataTable, columns, this.dados, aData => {
        this.data = aData;
      });
    });
  }

  public create() {
    this.router.navigate(['pages/contasPagar/create']);
  }

  public edit() {
    this.selectedRow(() => {
      this.router.navigate([`pages/contasPagar/edit/${this.data.id}`])
    });
  }

  public delete() {
    this.selectedRow(() => {
      this.messageService.removeConfirm(() => {
        this.contasPagarService.delete(this.data).subscribe(resp => {
          if (this.funcoesService.isNotUndefinedOrNull(resp['error'])) {
            this.messageService.error('Cadastro de Contas a Pagar', resp['error']);
          } else {
            this.messageService.info('Cadastro de Contas a Pagar', 'Registro removido com sucesso');
            $(`.table .info`).remove();
          }
        });
      });
    });
  }

  private selectedRow(callback) {
    if (this.funcoesService.isUndefinedOrNull(this.data.id)) {
      this.messageService.warning('Cadastro de Contas a Pagar', 'Selecione um registro');
    } else {
      callback();
    }
  }

}
