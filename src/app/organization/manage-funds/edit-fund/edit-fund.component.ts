import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from 'app/organization/organization.service';

@Component({
  selector: 'mifosx-edit-fund',
  templateUrl: './edit-fund.component.html',
  styleUrls: ['./edit-fund.component.scss']
})
export class EditFundComponent implements OnInit {

  /** Selected Data. */
  fundData: any;
  /** Charge form. */
  fundForm: FormGroup;
  /** GL Accounts */
  glAccountOptions: any;

  /**
   * Retrieves the charge data from `resolve`.
   * @param {ProductsService} productsService Products Service.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private organizationService: OrganizationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.data.subscribe((data: { fundData: any, glAccounts: any }) => {
      this.fundData = data.fundData;
      this.glAccountOptions = data.glAccounts.filter((glAccount: any) => {
        return (glAccount.type.value === 'ASSET' || glAccount.type.value === 'LIABILITY');
      });
    });
  }

  ngOnInit() {
    this.createFundForm();
  }

  /**
   * Edit Fund form.
   */
  createFundForm() {
    this.fundForm = this.formBuilder.group({
      'name': [this.fundData.name, Validators.required],
      'externalId': [this.fundData.externalId],
      'active': [this.fundData.active],
      'glAccountId': [this.fundData.glAccount.id, Validators.required]
    });
  }


  submit() {
    const payload = this.fundForm.getRawValue();
    this.organizationService.editFund(this.fundData.id.toString(), payload)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }
}
