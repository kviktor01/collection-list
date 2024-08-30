import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({
      projectId: 'collection-list-2a7ba',
      appId: '1:511129198833:web:74df114a3c969432f18950',
      databaseURL: 'https://collection-list-2a7ba-default-rtdb.europe-west1.firebasedatabase.app',
      storageBucket: 'collection-list-2a7ba.appspot.com',
      apiKey: 'AIzaSyBzFTaViFjbAiDssDPu1eRQUJO_NjB-yVs',
      authDomain: 'collection-list-2a7ba.firebaseapp.com',
      messagingSenderId: '511129198833'
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
