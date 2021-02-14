import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [

      {
        path: '',
        redirectTo: '/tablinks/battery',
        pathMatch: 'full'
      },
      {
        path: 'battery',
        loadChildren: () => import('../battery/battery.module').then(m => m.BatteryPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'acceleration',
        loadChildren: () => import('../acceleration/acceleration.module').then(m => m.AccelerationPageModule)
      },
      {
        path: 'sound',
        loadChildren: () => import('../sound/sound.module').then(m => m.SoundPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/battery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }
