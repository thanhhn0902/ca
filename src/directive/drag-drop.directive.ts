import { Input } from "@angular/core";
import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File,
  url: SafeUrl
}

@Directive({
  selector: "[appDrag]"
})
export class DragDirective {
  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if(this.disabled) return; 
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if(this.disabled) return;
    this.background = "#eee";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if(this.disabled) return;
    this.background = '#eee';
    let files: FileHandle[] = [];
    if (evt.dataTransfer) {
      const lstFile = this.multiple ? evt.dataTransfer.files : [evt.dataTransfer.files[0]];
      for (let i = 0; i < lstFile?.length; i++) {
        const file = evt.dataTransfer?.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        files.push({ file, url });
      }
    }
    if (files.length > 0) this.files.emit(files);
  }
}
