// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { PlaceService } from '../../services/place.service';

import { Place } from '../../domain/locations_db/place';

// START - USED SERVICES
/**
* PlaceService.create
*	@description CRUD ACTION create
*
* PlaceService.get
*	@description CRUD ACTION get
*
* PlaceService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Place
 */
@Component({
    selector: 'app-place-edit',
    templateUrl: 'place-edit.component.html',
    styleUrls: ['place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Place>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private placeService: PlaceService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.placeService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Place
     *
     * @param {boolean} formValid Form validity check
     * @param Place item Place to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.placeService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.placeService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
