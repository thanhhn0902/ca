import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';
  frm: FormGroup;
  isDisabled: boolean = false;
  constructor(private fb: FormBuilder){
    this.frm = this.fb.group({
      files: ['']
    });
  }
  ngOnInit(): void {
    this.frm.get('files')?.valueChanges.subscribe(res=>{
      console.log(res);
    });
  }
  demo(){
    this.isDisabled = !this.isDisabled;
  }
}
