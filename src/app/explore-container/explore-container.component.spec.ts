import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { MockModule } from 'ng-mocks';

describe('ExploreContainerComponent', () => {
    let component: ExploreContainerComponent;
    let fixture: ComponentFixture<ExploreContainerComponent>;

    beforeEach(async () => {
        return await TestBed.configureTestingModule({
            declarations: [ExploreContainerComponent],
            imports: [MockModule(IonicModule)],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
