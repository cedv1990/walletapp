import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';
import { Utilities } from '../../shared/utilities';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "header" contains "mobile" class when mobile is true', () => {
    const header = fixture.debugElement.query(By.css('header'));

    component.mobile = true;
    fixture.detectChanges();

    expect(header.classes.mobile).toBeTruthy();
  });

  it('should be "mobile" false', () => {
    spyOn(Utilities, 'isMobile').and.returnValue(false);
    component.ngOnInit();
    expect(component.mobile).toBe(false);
  });
});
