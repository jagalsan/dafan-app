import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChallengesComponent } from './containers/challenges/challenges.component';
import { RouterModule } from '@angular/router';
import { challengesRoutes } from './challenges.routing';
import { PhysicalChallengesComponent } from './components/physical-challenges/physical-challenges.component';
import { ChallengeComponent } from './containers/challenge/challenge.component';
import { BetChallengeComponent } from './components/bet-challenge/bet-challenge.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { QuizChallengeComponent } from './components/quiz-challenge/quiz-challenge.component';

const COMPONENTS = [
    ChallengesComponent,
    PhysicalChallengesComponent,
    ChallengeComponent,
    BetChallengeComponent,
    LeaderBoardComponent,
    QuizChallengeComponent,
];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(challengesRoutes)],
    declarations: COMPONENTS,
})
export class ChallengesModule {}
