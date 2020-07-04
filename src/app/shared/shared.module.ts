import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './../shared/components/header/header.component';
import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { FooterComponent } from './../shared/components/footer/footer.component';

//FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

//highcharts angular
import { HighchartsChartModule } from 'highcharts-angular';

//angular material
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AreaComponent } from './widgets/area/area.component';
import { PieComponent } from './widgets/pie/pie.component';
import { CardComponent } from './widgets/card/card.component';

const MaterialModules = [
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    PieComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    MaterialModules,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    PieComponent,
    CardComponent,
  ],
})
export class SharedModule {}
