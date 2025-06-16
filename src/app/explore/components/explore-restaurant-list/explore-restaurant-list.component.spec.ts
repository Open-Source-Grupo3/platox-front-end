import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRestaurantListComponent } from './explore-restaurant-list.component';

describe('ExploreRestaurantListComponent', () => {
  let component: ExploreRestaurantListComponent;
  let fixture: ComponentFixture<ExploreRestaurantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRestaurantListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
