import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContatosComponent } from './list-contatos.component';

describe('ListContatosComponent', () => {
  let component: ListContatosComponent;
  let fixture: ComponentFixture<ListContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
