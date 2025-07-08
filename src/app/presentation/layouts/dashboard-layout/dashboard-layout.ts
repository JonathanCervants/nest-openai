import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarMenuItemComponent } from '../../components/sidebarMenuItem/sidebarMenuItem.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule,RouterModule,SidebarMenuItemComponent],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayout {
  // route = routes.children[0].data
}
