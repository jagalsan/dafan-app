export interface Experience {
    id: number;
    name: string;
    label: string;
    type: ExperienceType;
    previewImage: string;
    percentageDiscount?: number;
    pointsCost?: number;
    description?: string;
    images?: string[];
    levelRequired: number;
}

interface ExperienceType {
    id: number;
    name: string;
    label: string;
}

export interface ClubExperience {
    type: ExperienceType;
    experiences: Experience[];
}
