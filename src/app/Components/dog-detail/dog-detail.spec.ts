import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetail } from './dog-detail';

describe('DogDetail', () => {
  let component: DogDetail;
  let fixture: ComponentFixture<DogDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(DogDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
