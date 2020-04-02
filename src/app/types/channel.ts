export interface Channel {
    id: number;
    name: string;
    logoUrl: string;
    schedule: { time: string; description: string }[];
}
