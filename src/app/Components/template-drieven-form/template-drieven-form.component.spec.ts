import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrievenFormComponent } from './template-drieven-form.component';

describe('TemplateDrievenFormComponent', () => {
  let component: TemplateDrievenFormComponent;
  let fixture: ComponentFixture<TemplateDrievenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrievenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrievenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
