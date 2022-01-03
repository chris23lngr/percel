import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAvatarComponent } from './content-avatar.component';

describe('ContentAvatarComponent', () => {
  let component: ContentAvatarComponent;
  let fixture: ComponentFixture<ContentAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
