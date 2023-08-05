import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, ToastController } from '@ionic/angular';

@Component({
    selector: 'df-quiz-challenge',
    templateUrl: 'quiz-challenge.component.html',
    styleUrls: ['quiz-challenge.component.scss'],
})
export class QuizChallengeComponent implements OnInit {
    quizQuestions: any[];
    quizQuestionAnswersCorrect: number = 0;
    quizCompleted = false;
    quizInProgress: boolean;
    displayedQuestion: any;
    indexDisplayedQuestion = 1;
    animation: Animation;

    constructor(
        private toastController: ToastController,
        private animationCtrl: AnimationController,
    ) {}

    ngOnInit(): void {
        this.getQuestions();
    }

    sendQuiz(): void {
        const toast = this.toastController.create({
            color: this.quizQuestionAnswersCorrect > 5 ? 'success' : 'warning',
            message: `Your score in the quiz is ${this.quizQuestionAnswersCorrect}/${this.quizQuestions.length}`,
            position: 'top',
            duration: 1500,
            icon: 'checkmark-circle-outline',
            cssClass: 'df-toast',
        });
        toast.then(e => e.present());
        this.quizCompleted = true;
        this.quizInProgress = false;
    }

    startQuiz(): void {
        this.quizInProgress = true;
        this.getQuestions();
        this.indexDisplayedQuestion = 1;
        this.quizQuestionAnswersCorrect = 0;
        setTimeout(() => {
            this.animateQuestion();
        }, 100);
    }

    getQuestions() {
        this.quizQuestions = [
            ...[
                {
                    id: 1,
                    label: '¿Cual es el mayor goleador de la historia del Deportivo?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Bebeto Retirado',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'Roy Makaay Retirado',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Diego Tristán Retirado',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Riki Retirado',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 2,
                    label: '¿Cual fue la primera temporada que juego el Deportivo en Primera división?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: '1994/95',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: '1990/91',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            label: '1989/90',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: '1993/94',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 3,
                    label: '¿Que paso en la temporada 1999-2000?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Ganamos la liga',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'Ganamos la copa del rey',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Clasificación en la champions',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Goleamos al Barcelona',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 4,
                    label: '¿Cuando se fundo el deportivo de la ocuruña?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'El 2 de Marzo de 1906',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'El 2 de Abril de 1906',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'El 2 de Marzo de 1907',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'El 2 de Marzo de 1908',
                            isCorrect: false,
                        },
                    ],
                },
            ],
        ];

        this.displayedQuestion = this.quizQuestions[0];
    }

    nextQuestion(): void {
        this.displayedQuestion = this.quizQuestions[this.indexDisplayedQuestion];
        this.indexDisplayedQuestion = this.indexDisplayedQuestion + 1;
        setTimeout(() => {
            this.animateQuestion();
        }, 100);
    }

    animateQuestion(): void {
        this.animation = this.animationCtrl
            .create()
            .addElement(document.getElementsByClassName('quiz-question')[0])
            .duration(1000)
            .iterations(1)
            .fromTo('opacity', '0', '1');
        this.animation.play();
    }

    previousQuestion(): void {
        this.displayedQuestion = this.quizQuestions[this.indexDisplayedQuestion - 2];
        this.indexDisplayedQuestion = this.indexDisplayedQuestion - 1;
        setTimeout(() => {
            this.animateQuestion();
        }, 100);
    }

    selectAnswer(answerSelected: any): void {
        if (!this.displayedQuestion.answered) {
            this.displayedQuestion.answered = true;
            this.displayedQuestion.answers.find(answer => answer.id === answerSelected.id).selected = true;
            if (answerSelected.isCorrect) this.quizQuestionAnswersCorrect = this.quizQuestionAnswersCorrect + 1;
        }
    }
}
