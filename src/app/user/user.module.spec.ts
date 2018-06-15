import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModule } from './user.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserModule', () => {
  let component: UserModule;
  let fixture: ComponentFixture<UserModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
