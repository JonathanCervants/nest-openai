import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [RouterModule],
  template: `<a
    [routerLink]="path"
    routerLinkActive="bg-gray-800"
    class="flex justify-center items-center"
    >
    </a>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent { 
  @Input({required:true}) icon!: string;
  @Input({required:true}) title!: string;
  @Input({required:true}) description!: string;
  @Input({required:true}) path!: string;
}
