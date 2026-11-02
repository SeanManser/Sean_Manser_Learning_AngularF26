import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogForm } from './dog-form';

describe('DogForm', () => {
  let component: DogForm;
  let fixture: ComponentFixture<DogForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DogForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
