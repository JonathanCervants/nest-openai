import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-generation-page',
  imports: [],
  template: `<p>imageGenerationPage works!</p>`,
  styleUrl: './imageGenerationPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGenerationPageComponent { }
