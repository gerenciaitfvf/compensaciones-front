import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDashboardComponent } from './club-dashboard.component';

describe('ClubDashboardComponent', () => {
  let component: ClubDashboardComponent;
  let fixture: ComponentFixture<ClubDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubDashboardComponent]
    });
    fixture = TestBed.createComponent(ClubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
