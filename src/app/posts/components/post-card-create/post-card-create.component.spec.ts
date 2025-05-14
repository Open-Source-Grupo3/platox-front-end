import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardCreateComponent } from './post-card-create.component';

describe('PostCardCreateComponent', () => {
  let component: PostCardCreateComponent;
  let fixture: ComponentFixture<PostCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
