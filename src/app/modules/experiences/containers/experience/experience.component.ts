import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from '../../models/experience.interface';

@Component({
    selector: 'df-experience',
    templateUrl: 'experience.component.html',
    styleUrls: ['experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
    experience: Experience;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.experience = this.route.snapshot.data['experience'];
    }
}
