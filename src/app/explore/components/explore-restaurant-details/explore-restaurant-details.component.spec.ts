import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRestaurantDetailsComponent } from './explore-restaurant-details.component';

describe('ExploreRestaurantDetailsComponent', () => {
  let component: ExploreRestaurantDetailsComponent;
  let fixture: ComponentFixture<ExploreRestaurantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRestaurantDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreRestaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
