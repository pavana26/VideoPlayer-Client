import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideouploadComponent } from './videoupload.component';

describe('VideouploadComponent', () => {
  let component: VideouploadComponent;
  let fixture: ComponentFixture<VideouploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideouploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
