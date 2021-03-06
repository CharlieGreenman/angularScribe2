/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixelColorPickerComponent } from './pixel-color-picker.component';

import { StoreModule } from '@ngrx/store';
import { environment } from '../../../reducers/show-hide';
import { colors } from '../../../reducers/color-picker';
import { gridSettings } from '../../../reducers/grid-settings';

describe('PixelColorPickerComponent', () => {
  let component: PixelColorPickerComponent;
  let fixture: ComponentFixture<PixelColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        environment, colors, gridSettings
      })],
      declarations: [ PixelColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
