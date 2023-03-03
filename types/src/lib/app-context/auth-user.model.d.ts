export interface AuthUser {
    photoUrl?: string;
    userId: string | number;
    handle: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
}
