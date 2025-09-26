import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIntro } from './catalog-intro';

describe('CatalogIntro', () => {
  let component: CatalogIntro;
  let fixture: ComponentFixture<CatalogIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
