import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEquipment } from './display-equipment';

describe('DisplayAlbum', () => {
  let component: DisplayEquipment;
  let fixture: ComponentFixture<DisplayEquipment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEquipment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEquipment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
