import {Component, computed, effect, inject, input} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroup
} from '@angular/forms';
import {DogService} from '../../services/dog';
import {Router} from '@angular/router';
import {ValidationError} from '@angular/forms/signals';



function noWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null{
  const value = control.value?.trim();
  return value ? null: { whitespace : true};
}

function malteseValidator(control: AbstractControl): ValidationErrors | null{
  const breed = control.get('breed')?.value;
  const hypoallergenic = control.get('isHypoallergenic')?.value;
  if (breed === 'Maltese' && !hypoallergenic){
    return {malteseRule : true};
  }
  return null;
}



@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-dog-form',
  styleUrl: './dog-form.css',
  templateUrl: './dog-form.html',
})
export class DogForm {

  private fb = inject(FormBuilder);
  private dogService = inject(DogService);
  private router = inject(Router);

  id = input<string>();

  protected isEditMode = computed(() => this.id() !== undefined);

  protected dogForm = this.fb.nonNullable.group({
    country: ['', [Validators.required, Validators.minLength(2), noWhiteSpaceValidator]],
    breed: ['', Validators.required],
    furType: ['Long'],
    isHypoallergenic: [false],
  },
    {validators: malteseValidator}
    );

  constructor() {
    // An effect reruns when id() changes, so going from /edit/1 to /edit/2
    // refills the form even though Angular reuses the same component.
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
      }
      const dog = this.dogService.getDog(id);
      if (dog) {
        // patchValue() fills only the fields it is given. The form has no id field,
        // so the id is ignored here and added back on submit.
        this.dogForm.patchValue({ ...dog, isHypoallergenic: dog.isHypoallergenic ?? false });
      }
    });
  }

  protected onSubmit(): void {
    if (this.dogForm.invalid) {
      return;
    }

    // getRawValue() includes disabled controls too. value would skip them.
    const formValue = this.dogForm.getRawValue();
    const id = this.isEditMode() ? this.id()! : this.dogService.nextId();

    if (this.isEditMode()) {
      this.dogService.updateDog({ id, ...formValue });
    } else {
      this.dogService.addDog({ id, ...formValue });
    }

    this.dogForm.reset();
    this.router.navigate(['/dogs', id]);
  }

}
