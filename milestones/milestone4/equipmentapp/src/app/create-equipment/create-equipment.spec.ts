import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipment } from './create-equipment';

describe('CreateEquipment', () => {
  let component: CreateEquipment;
  let fixture: ComponentFixture<CreateEquipment>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEquipment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
