import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { leaderBoardResponse } from '../../mocks/leader-board.response';
import { LeaderBoardUser } from '../../models/leader-board.interface';

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
    clubName = environment.clubName;
    leaderBoard: { id: number; leaderBoardUsers: LeaderBoardUser[] };
    leaderBoardResponse = leaderBoardResponse;
    fanPointsWin: number = 55;

    constructor(
        private toastController: ToastController,
        private animationCtrl: AnimationController,
    ) {}

    ngOnInit(): void {
        this.getQuestions();

        this.leaderBoard = {
            id: leaderBoardResponse.id,
            leaderBoardUsers: leaderBoardResponse.leaderBoardUsers.slice(0, 4),
        };
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
                    label: 'In which country was Alfredo David Moreno born?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Argentina',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'Spain',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Mexico',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Italy',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 2,
                    label: 'For which Mexican club did Alfredo Moreno first play?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Club Tijuana',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'Club América',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Necaxa',
                            isCorrect: true,
                        },
                        {
                            id: 4,
                            label: 'Atlas',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 3,
                    label: 'In which year did Alfredo Moreno make his professional debut?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: '1999',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: '2000',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: '2001',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: '2002',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 4,
                    label: "What is Moreno's nickname?",
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'El Mago',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'Chango',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            label: 'El Tanque',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'El Águila',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 5,
                    label: "Which Argentine city is Alfredo Moreno's birthplace?",
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Buenos Aires',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'Rosario',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Córdoba',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Santiago del Estero',
                            isCorrect: true,
                        },
                    ],
                },
                {
                    id: 6,
                    label: 'For which team did Alfredo Moreno make his professional debut?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Boca Juniors',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            label: 'River Plate',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Racing Club',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'San Lorenzo',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 7,
                    label: 'How many goals did Moreno score in his debut season with Boca Juniors?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: '5',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: '7',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: '9',
                            isCorrect: true,
                        },
                        {
                            id: 4,
                            label: '11',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 8,
                    label: "What is notable about Moreno's playing style or abilities?",
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Exceptional speed',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'Aerial prowess',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Free-kick expertise',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: 'Clinical finishing',
                            isCorrect: true,
                        },
                    ],
                },
                {
                    id: 9,
                    label: 'Towards the end of his career, Moreno played for which team?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: 'Club Tijuana',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: 'Atlético San Luis',
                            isCorrect: false,
                        },
                        {
                            id: 3,
                            label: 'Celaya F.C.',
                            isCorrect: true,
                        },
                        {
                            id: 4,
                            label: 'Dorados de Sinaloa',
                            isCorrect: false,
                        },
                    ],
                },
                {
                    id: 10,
                    label: 'How many goals did Moreno score in his entire career?',
                    answered: false,
                    answers: [
                        {
                            id: 1,
                            label: '187',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            label: '203',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            label: '221',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            label: '259',
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
