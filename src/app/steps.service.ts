import { Injectable } from '@angular/core';
import { IStep } from './i-steps';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps: IStep[] =
     [
      {
        title: 'Dedica muchas horas',
        description: 'Al menos 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
        img: 'assets/time_managment.svg',
        bgcolor: '#4da2a9'
      },

      {
        title: 'Programa proyectos propios',
        description: 'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
        img: 'assets/programming.svg',
        bgcolor: '#d3d4d9'
      },

      {
        title: 'Procura descansar',
        description: 'Descansar bien y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y afianzarás tu aprendizaje.',
        img: 'assets/meditation.svg',
        bgcolor: '#ffd167'
      },

    ];

    getSteps(): IStep[]{
      return this.steps
    }

}






