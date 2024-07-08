import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { IStep } from '../i-steps';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];
  @Input() currentStep: number = 0;


  onNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  onPrev() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(stepIndex: number): void {
    this.currentStep = stepIndex;
  }
}










