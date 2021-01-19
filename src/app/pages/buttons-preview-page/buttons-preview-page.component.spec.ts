import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPreviewPageComponent } from './buttons-preview-page.component';

describe('ButtonsPreviewPageComponent', () => {
  let component: ButtonsPreviewPageComponent;
  let fixture: ComponentFixture<ButtonsPreviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsPreviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
