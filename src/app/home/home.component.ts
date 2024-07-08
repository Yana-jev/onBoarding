import { Component, inject} from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../i-steps';
import { CommonModule } from '@angular/common';
import { StepsService } from '../steps.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})

export class HomeComponent{
  steps: IStep[] = [];
  currentStep = 0;

  stepService = inject(StepsService)

  constructor() { 
    this.loadSteps()
  }

  loadSteps(): void {
    this.steps = this.stepService.getSteps();
  }



}


