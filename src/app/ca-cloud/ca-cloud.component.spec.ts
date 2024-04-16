import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCloudComponent } from './ca-cloud.component';

describe('CaCloudComponent', () => {
  let component: CaCloudComponent;
  let fixture: ComponentFixture<CaCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
