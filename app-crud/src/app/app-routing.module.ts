
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosEditarComponent } from './produtos-editar/produtos-editar.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosListaComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produtos-editar/:id',
    component: ProdutosEditarComponent,
    data: { title: 'Editar Produtos' }
  },
  {
    path: 'produtos-cadastro',
    component: ProdutosCadastroComponent,
    data: { title: 'Cadastro de Produtos' }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
