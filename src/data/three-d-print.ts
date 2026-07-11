export interface I3DProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  process: string;
  size: string;
  leadTime: string;
  features: string[];
  iconName: 'Box' | 'KeyRound' | 'Flame' | 'Crown';
  gradientFrom: string;
  gradientTo: string;
}

export const MOCK_3D_PRODUCTS: I3DProduct[] = [
  {
    id: '1',
    name: '树洞摆件',
    price: 99,
    category: '人气之选',
    process: '光固化树脂',
    size: '约 8cm 高',
    leadTime: '3-5 个工作日',
    features: [
      '高精度外部轮廓',
      '主体人工上妆涂装',
      '多色手工上色',
      '精雕镂空光花边',
    ],
    iconName: 'Box',
    gradientFrom: 'from-orange-100',
    gradientTo: 'to-amber-50',
  },
  {
    id: '2',
    name: '金属钥匙扣',
    price: 129,
    category: '随身携带',
    process: '锌合金电镀',
    size: '约 5cm 高',
    leadTime: '10 个工作日',
    features: [
      '锌合金一体铸造',
      '精雕流线·3D 高度立体',
      '3D 金属感·赠送',
      '耐摔不晃不破',
    ],
    iconName: 'KeyRound',
    gradientFrom: 'from-slate-100',
    gradientTo: 'to-zinc-50',
  },
  {
    id: '3',
    name: '石膏香薰',
    price: 69,
    category: '情怀礼物',
    process: '食品级硅胶模',
    size: '约 8cm 高',
    leadTime: '5-7 个工作日',
    features: [
      '食品级硅胶模型',
      '经典工艺定制',
      '可精油扩香',
      '永磁·精美礼盒',
    ],
    iconName: 'Flame',
    gradientFrom: 'from-rose-50',
    gradientTo: 'to-orange-50',
  },
  {
    id: '4',
    name: '全金属雕像',
    price: 299,
    category: '收藏臻品',
    process: '精雕黄金金属',
    size: '约 12cm 高',
    leadTime: '15+ 个工作日',
    features: [
      '精雕全金属外壳',
      '精雕黄金金属',
      '15+ 工时手工打磨',
      '精雕镂空光花边',
    ],
    iconName: 'Crown',
    gradientFrom: 'from-amber-100',
    gradientTo: 'to-yellow-50',
  },
];
