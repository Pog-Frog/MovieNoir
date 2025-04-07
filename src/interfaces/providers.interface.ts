interface DisplayPriorities {
    [key: string]: number;
}

export default interface Provider {
    display_priorities: DisplayPriorities;
    display_priority: number;
    logo_path: string;
    provider_id: string;
    provider_name: string;
};
