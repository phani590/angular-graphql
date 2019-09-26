import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleErrorComponent } from './title-error.component';

describe('TitleErrorComponent', () => {
  let component: TitleErrorComponent;
  let fixture: ComponentFixture<TitleErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
