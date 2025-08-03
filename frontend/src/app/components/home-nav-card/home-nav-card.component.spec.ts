import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavCardComponent } from './home-nav-card.component';

describe('HomeNavCardComponent', () => {
  let component: HomeNavCardComponent;
  let fixture: ComponentFixture<HomeNavCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
