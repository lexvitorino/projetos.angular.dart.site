import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ComboClientesComponent } from './combo-clientes/combo-clientes.component';
import { ComboFornecedoresComponent } from './combo-fornecedores/combo-fornecedores.component';
import { ComboProdutosComponent } from './combo-produtos/combo-produtos.component';
import { DataComponent } from './data/data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ComboClientesComponent, ComboFornecedoresComponent, ComboProdutosComponent, DataComponent],
  exports: [ComboClientesComponent, ComboFornecedoresComponent, ComboProdutosComponent, DataComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class ComponentsModule { }
