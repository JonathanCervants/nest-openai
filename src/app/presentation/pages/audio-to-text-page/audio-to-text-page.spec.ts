import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioToTextPage } from './audio-to-text-page';

describe('AudioToTextPage', () => {
  let component: AudioToTextPage;
  let fixture: ComponentFixture<AudioToTextPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioToTextPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioToTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
