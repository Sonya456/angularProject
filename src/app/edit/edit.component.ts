interface MyWindow extends Window {
  updateParams: () => void;
}

declare var window: MyWindow;

import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  param1 = 'Value 1';
  param2 = 'Value 2';
  param3 = 'Value 3';
  param4 = 'Value 4';

  // param11 = 'kk';
  // param22 = 'Value 2';
  // param33 = 'Value 3';
  // param44 = 'Value 4';

  openEditWindow() {
    const editWindow = window.open('', '_blank', 'width=400,height=400');
    
    if (editWindow) {
      

      editWindow.document.write('<html><head><title>Edit Parameters</title></head><body>');
      editWindow.document.write('<div><label for="param1">Parameter 1: </label><input id="param1" value="' + this.param1 + '"></div>');
      editWindow.document.write('<div><label for="param2">Parameter 2: </label><input id="param2" value="' + this.param2 + '"></div>');
      editWindow.document.write('<div><label for="param3">Parameter 3: </label><input id="param3" value="' + this.param3 + '"></div>');
      editWindow.document.write('<div><label for="param4">Parameter 4: </label><input id="param4" value="' + this.param4 + '"></div>');
      editWindow.document.write('<button onclick="window.opener.updateParams()">Update</button>');
      editWindow.document.write('</body></html>');
      editWindow.document.close();

      
      window.updateParams = () => {
        //this.param11 = (editWindow.document.getElementById('param1') as HTMLInputElement)?.value;
        this.param1 = (editWindow.document.getElementById('param1') as HTMLInputElement)?.value || this.param1;
        this.param2 = (editWindow.document.getElementById('param2') as HTMLInputElement)?.value || this.param2;
        this.param3 = (editWindow.document.getElementById('param3') as HTMLInputElement)?.value || this.param3;
        this.param4 = (editWindow.document.getElementById('param4') as HTMLInputElement)?.value || this.param4;

      };
      
      
    } else {
      alert('The edit window could not be opened. Please make sure pop-up blockers are disabled for this site.');
    }
  }
}
