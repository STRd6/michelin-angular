import type { RegisteredComponent } from '@builder.io/sdk-angular';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ThemingModule,
  MATERIAL_ICONS_DEFAULT_FONT,
  MaterialIconFonts,
} from '@michelin/theme';
import { Component } from '@angular/core';

@Component({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ThemingModule,
    MatInputModule,
  ],
  inputs: [
    'placeholder',
    'value',
    'disabled',
    'errorState',
    'type',
    'required',
    'readonly',
    'autocomplete',
    'autofocus',
    'labelText',
  ],
  providers: [
    {
      provide: MATERIAL_ICONS_DEFAULT_FONT,
      useValue: MaterialIconFonts.filled,
    },
  ],
  template: `<mat-form-field
    [style.margin-top.px]="type === 'textarea' ? 40 : undefined"
    [style.width]="type === 'textarea' ? '100%' : undefined"
  >
    <mat-label>{{ labelText }}</mat-label>
    <input
      matInput
      value="{{ value }}"
      [autocomplete]="autocomplete"
      [autofocus]="autofocus"
      [disabled]="disabled"
      [readonly]="readonly"
      [required]="required"
      [type]="type"
      [style.display]="type !== 'textarea' ? 'block' : 'none'"
    />
    <textarea
      matInput
      [autocomplete]="autocomplete"
      [autofocus]="autofocus"
      [disabled]="disabled"
      [readonly]="readonly"
      [required]="required"
      [type]="type"
      style="height: 140px; width: 100%"
      [style.display]="type === 'textarea' ? 'block' : 'none'"
      >{{ value }}</textarea
    >
  </mat-form-field>`,
})
export class MatInput {
  placeholder: string = '';
  value: string = '';
  disabled: boolean = false;
  errorState: boolean = false;
  type: string = 'text';
  required: boolean = false;
  readonly: boolean = false;
  autocomplete: string = 'off';
  autofocus: boolean = false;
  labelText: string = '';
}

@Component({
  imports: [MatIconModule],
  template: `<mat-icon>{{ name }}</mat-icon>`,
})
export class Avatar {
  name: string = '';
}

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: MatInput,
    name: 'MatInput',
    meta: {
      selector: 'mat-input',
    },
    inputs: [
      { name: 'labelText', type: 'string', defaultValue: '' },
      { name: 'value', type: 'string', defaultValue: '' },
      { name: 'autocomplete', type: 'string', defaultValue: 'off' },
      { name: 'autofocus', type: 'boolean', defaultValue: false },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'errorState', type: 'boolean', defaultValue: false },
      { name: 'placeholder', type: 'string', defaultValue: '' },
      { name: 'readonly', type: 'boolean', defaultValue: false },
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'type', type: 'string', defaultValue: 'text' },
    ],
  },
];
