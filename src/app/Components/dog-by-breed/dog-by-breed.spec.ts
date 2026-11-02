import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogByBreed } from './dog-by-breed';

describe('DogByBreed', () => {
  let component: DogByBreed;
  let fixture: ComponentFixture<DogByBreed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogByBreed],
    }).compileComponents();

    fixture = TestBed.createComponent(DogByBreed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
