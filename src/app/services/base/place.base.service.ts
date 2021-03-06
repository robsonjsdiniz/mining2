/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE placeBaseService PLEASE EDIT ../place.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Place } from '../../domain/locations_db/place';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Place.service.ts
 */

/*
 * SCHEMA DB Place
 *
	{
		latitude: {
			type: 'Number',
			required : true
		},
		longitude: {
			type: 'Number',
			required : true
		},
		name: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class PlaceBaseService {

    private placeCollection: AngularFirestoreCollection<Place>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.placeCollection = afs.collection<Place>('place');
    }


    // CRUD METHODS

    /**
    * PlaceService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Place): Promise<DocumentReference> {
        return this.placeCollection.add(item);
    }

    /**
    * PlaceService.delete
    *   @description CRUD ACTION delete
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.placeCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * PlaceService.get
    *   @description CRUD ACTION get
    *
    */
    get(id: string): AngularFirestoreDocument<Place> {
        return this.afs.doc<Place>('place/' + id);
    }

    /**
    * PlaceService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Place[]> {
        return this.afs.collection('place').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Place;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * PlaceService.update
    *   @description CRUD ACTION update
    *
    */
    update(itemDoc: AngularFirestoreDocument<Place>, item: Place): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
