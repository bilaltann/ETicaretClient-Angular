import { Component, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('ETicaretClient');
  constructor(private toastrService:CustomToastrService){
    toastrService.message("merhaba","bilal",
      {messageType:ToastrMessageType.Info,
       position:ToastrPosition.TopCenter
      });
    toastrService.message("merhaba","bilal",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("merhaba","bilal",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("merhaba","bilal",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.TopCenter
    });

  }
}

