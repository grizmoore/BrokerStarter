import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile-welcome/company-profile.component'
import { CompanyProfileEntityComponent } from './company-profile/company-profile-entity/company-profile-entity.component'
import { CompanyFleetComponent } from './company-profile/company-fleet/company-fleet.component';
import { CompanyProfileRiskComponent } from './company-profile/company-profile-risk/company-profile-risk.component'
import { CompanyShareholderComponent } from './company-profile/company-shareholder/company-shareholder.component';
import { CompanyProfileSetupComponent } from './company-profile/company-profile-setup/company-profile-setup.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    },
    
    children: [
      {
        path: 'company-welcome',
        component: CompanyWelcomeProfileComponent,
        
      },
      {
        path: 'company-setup',
        component: CompanyProfileSetupComponent
      },
      {
        path: 'company-entity',
        component: CompanyProfileEntityComponent,
        
      },
      {
        path: 'fleet',
        component: CompanyFleetComponent,
        
      },
      {
        path: 'risk',
        component: CompanyProfileRiskComponent,
        
      },
      {
        path: 'company-shareholder',
        component: CompanyShareholderComponent,
        
      }
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}