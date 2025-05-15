import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoViewComponent } from './post-info-view.component';

describe('PostInfoViewComponent', () => {
  let component: PostInfoViewComponent;
  let fixture: ComponentFixture<PostInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
