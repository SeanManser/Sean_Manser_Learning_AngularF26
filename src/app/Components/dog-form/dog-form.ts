import {Component, computed, effect, inject, input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {DogService} from '../../services/dog';
import {Router} from '@angular/router';

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
    name: ['', [Validators.required, Validators.minLength(2)]],
    breed: ['', Validators.required],
    furType: ['long'],
    isHypoallergenic: [false],
  });

  constructor() {
    // An effect reruns when id() changes, so going from /edit/1 to /edit/2
    // refills the form even though Angular reuses the same component.
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
      }
      const dog = this.dogService.getDog(Number(id));
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
    const id = this.isEditMode() ? Number(this.id()) : this.dogService.nextId();

    if (this.isEditMode()) {
      this.dogService.updateDog({ id, ...formValue });
    } else {
      this.dogService.addDog({ id, ...formValue });
    }

    this.dogForm.reset();
    this.router.navigate(['/dogs', id]);
  }

}
