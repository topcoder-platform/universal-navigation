export interface AuthUser {
    createdAt: string;
    photoUrl?: string;
    userId: string | number;
    handle: string;
    firstName: string;
    lastName: string;
    email: string;
}
