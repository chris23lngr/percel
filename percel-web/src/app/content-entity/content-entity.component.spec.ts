import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEntityComponent } from './content-entity.component';

describe('ContentEntityComponent', () => {
  let component: ContentEntityComponent;
  let fixture: ComponentFixture<ContentEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
