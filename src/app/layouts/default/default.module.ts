import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { PostsComponent } from './../../modules/posts/posts.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';

//providers
import { DashboardService } from './../../modules/dashboard.service';

//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

//angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const MaterialModules = [
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModules
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
