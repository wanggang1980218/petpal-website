export interface ICase {
  id: string;
  name: string;
  petType: string;
  actionCount: number;
  iconName: 'Cat' | 'Dog' | 'Hamster' | 'Rabbit';
  gradientFrom: string;
  gradientTo: string;
}

export const MOCK_CASES: ICase[] = [
  {
    id: '1',
    name: '橘座',
    petType: '橘猫',
    actionCount: 12,
    iconName: 'Cat',
    gradientFrom: 'from-orange-100',
    gradientTo: 'to-amber-50',
  },
  {
    id: '2',
    name: '奶基',
    petType: '柯基',
    actionCount: 12,
    iconName: 'Dog',
    gradientFrom: 'from-amber-100',
    gradientTo: 'to-orange-50',
  },
  {
    id: '3',
    name: '团子',
    petType: '仓鼠',
    actionCount: 5,
    iconName: 'Hamster',
    gradientFrom: 'from-yellow-100',
    gradientTo: 'to-amber-50',
  },
  {
    id: '4',
    name: '奶糖',
    petType: '垂耳兔',
    actionCount: 12,
    iconName: 'Rabbit',
    gradientFrom: 'from-orange-50',
    gradientTo: 'to-rose-50',
  },
];
