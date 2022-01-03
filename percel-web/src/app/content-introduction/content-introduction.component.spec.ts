import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIntroductionComponent } from './content-introduction.component';

describe('ContentIntroductionComponent', () => {
  let component: ContentIntroductionComponent;
  let fixture: ComponentFixture<ContentIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
