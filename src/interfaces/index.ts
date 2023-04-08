export interface Items {
    id?: string;
    name: string;
    category: 'phones' | 'headset' | 'jewelry' | ' instruments';
    price: number;
    description?: string;
    photo: string;
}