// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { PlaceService } from '../../services/place.service';

// START - USED SERVICES
/**
* PlaceService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * Home Component
 */
@Component({
    selector: 'app-home',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
        private placeService: PlaceService,
        private location: Location
        ) {

    }
}
