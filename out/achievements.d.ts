export interface Achievements {
    sourceSheet: SourceSheet;
    name: string;
    awardCriteria: string;
    num: number;
    internalId: number;
    internalName: string;
    internalCategory: string;
    numOfTiers: number;
    tier1: number;
    tier2: number;
    tier3: number;
    tier4: number;
    tier5: number;
    rewardTier1: number;
    rewardTier2: number;
    rewardTier3: number;
    rewardTier4: number;
    rewardTier5: number;
    rewardTier6: number;
    sequential: boolean;
    version: Version;
    uniqueEntryId: string;
}
export declare enum SourceSheet {
    Achievements = "Achievements"
}
export declare enum Version {
    The100 = "1.0.0",
    The120 = "1.2.0"
}
