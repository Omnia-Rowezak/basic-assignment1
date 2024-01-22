import {Component} from '@angular/core';

@Component({
    selector:'app-warningAlert',
    template: `<h3>this is a warning message</h3>
     <app-successAlert></app-successAlert>` ,
  
    styles:`
         h3{
            color:rgba(146, 0, 0, 0.973);
            background: rgba(235, 167, 167, 0.932);

            margin: 170px;
            width: 50%;
            border: 3px solid rgb(3, 30, 70);
            padding: 10px;
             
            }
            `
})

export class warningAlertComponent{
    
}