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
                    label: 'In which year did Bebeto make his debut for the Brazil national team?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: '1985',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: '1987',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: '1990',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: '1982',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 2,
                    label: 'Bebeto is best known for his goal celebration in the 1994 FIFA World Cup. What was special about it?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'He unveiled a shirt with a message underneath',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'He did a backflip',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'He mimicked a rocking baby ',
                            isCorrect: true,
                        },
                        {
                            id: 4,
                            label: 'He ran around the field with his shirt off',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 3,
                    label: 'Bebeto played for several clubs in his career. Which of these clubs did he NOT play for?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Flamengo',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'Sevilla',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            label: 'Vasco da Gama',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Deportivo La Coruña',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 4,
                    label: 'Bebeto won the Silver Ball at the FIFA World Cup in 1994. Who won the Golden Ball in the same tournament?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Romário',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'Roberto Baggio',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Dunga',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Hristo Stoichkov',
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
