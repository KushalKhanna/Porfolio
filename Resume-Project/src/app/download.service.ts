import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {
  downloadFile(fileName: string): void {
    const filePath = `assets/downloads/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}