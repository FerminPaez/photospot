import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargarFotoPage } from './cargar-foto.page';

describe('CargarFotoPage', () => {
  let component: CargarFotoPage;
  let fixture: ComponentFixture<CargarFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
