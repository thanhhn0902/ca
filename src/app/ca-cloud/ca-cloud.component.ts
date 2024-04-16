import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ca-cloud',
  templateUrl: './ca-cloud.component.html',
  styleUrls: ['./ca-cloud.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CaCloudComponent),
      multi: true
    }
  ]
})
export class CaCloudComponent {
  @Input() disabled: boolean = false;
  onChange: any = () => {};
  onTouched: any = () => {};
  files: any = [];

  constructor() { }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.files = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement this if you want to handle disabling the control
    this.disabled = isDisabled;
  }

  updateValue(newValue: string) {
    this.files = newValue;
    this.onChange(this.files);
    this.onTouched();
  }

  filesDropped(files: any): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
    this.onChange(this.files);
  }

  download(url: string){
    window.open(url);
  }
}
