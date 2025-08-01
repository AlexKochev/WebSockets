import { Routes } from '@angular/router';
import {NameEntryScreenComponent} from "./name-entry-screen/name-entry-screen.component";
import {ChatComponent} from "./chat/chat.component";

export const routes: Routes = [
  { path: '', component: NameEntryScreenComponent },
  { path: 'chat', component: ChatComponent }
];
