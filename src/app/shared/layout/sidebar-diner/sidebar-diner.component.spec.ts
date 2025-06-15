import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDinerComponent } from './sidebar-diner.component';

describe('SidebarDinerComponent', () => {
  let component: SidebarDinerComponent;
  let fixture: ComponentFixture<SidebarDinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
