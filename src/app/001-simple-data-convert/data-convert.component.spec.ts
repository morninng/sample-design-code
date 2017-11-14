import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataConvertComponent } from './data-convert.component';

describe('StringEnumsComponent', () => {
  let component: DataConvertComponent;
  let fixture: ComponentFixture<DataConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
