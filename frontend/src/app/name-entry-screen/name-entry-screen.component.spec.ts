import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEntryScreenComponent } from './name-entry-screen.component';

describe('NameEntryScreenComponent', () => {
  let component: NameEntryScreenComponent;
  let fixture: ComponentFixture<NameEntryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameEntryScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameEntryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
