export interface ICase {
  id: string;
  name: string;
  petType: string;
  actionCount: number;
  iconName: 'Cat' | 'Dog' | 'Hamster' | 'Rabbit';
  gradientFrom: string;
  gradientTo: string;
  image: string;
}

export const MOCK_CASES: ICase[] = [
  {
    id: '1',
    name: '姗樺骇',
    petType: '姗樼尗',
    actionCount: 12,
    iconName: 'Cat',
    gradientFrom: 'from-orange-100',
    gradientTo: 'to-amber-50',
    image: '/images/cases/cat.png',
  },
  {
    id: '2',
    name: '濂跺熀',
    petType: '鏌熀',
    actionCount: 12,
    iconName: 'Dog',
    gradientFrom: 'from-amber-100',
    gradientTo: 'to-orange-50',
    image: '/images/cases/dog.png',
  },
  {
    id: '3',
    name: '鍥㈠瓙',
    petType: '浠撻紶',
    actionCount: 5,
    iconName: 'Hamster',
    gradientFrom: 'from-yellow-100',
    gradientTo: 'to-amber-50',
    image: '/images/cases/hamster.png',
  },
  {
    id: '4',
    name: '濂剁硸',
    petType: '鍨傝€冲厰',
    actionCount: 12,
    iconName: 'Rabbit',
    gradientFrom: 'from-orange-50',
    gradientTo: 'to-rose-50',
    image: '/images/cases/rabbit.png',
  },
];
