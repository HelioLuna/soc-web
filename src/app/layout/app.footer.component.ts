import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <span class="footer-text-left">2020 - SOC V1.0.0-SNAPSHOT</span>
                <span class="footer-text-right">
                    <span class="material-icons ui-icon-copyright"></span>
                    <span>SOCOCO</span>
                </span>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
