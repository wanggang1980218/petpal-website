import type { I3DProduct } from './three-d-print';

export interface IPricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonType: 'primary' | 'secondary';
  isPopular: boolean;
}

export const MOCK_PRICING_PLANS: IPricingPlan[] = [
  {
    id: '1',
    name: '基础版',
    price: 19.9,
    description: '单只宠物入门体验',
    features: ['单只宠物', '5个基础动作', 'Shimeji标准格式', '48小时内交付'],
    buttonText: '淘宝下单',
    buttonType: 'secondary',
    isPopular: false,
  },
  {
    id: '2',
    name: '推荐版',
    price: 49.9,
    description: '人气之选，丰富动作',
    features: [
      '单只宠物',
      '12个丰富动作',
      '专属命名配置',
      '24小时优先交付',
      '免费微调1次',
    ],
    buttonText: '立即定制',
    buttonType: 'primary',
    isPopular: true,
  },
  {
    id: '3',
    name: '全家福',
    price: 99,
    description: '多只宠物打包优惠',
    features: ['3只宠物打包', '全部12个动作', '互动彩蛋', '优先处理'],
    buttonText: '淘宝下单',
    buttonType: 'secondary',
    isPopular: false,
  },
];

// Re-export 3D products for pricing tab
export { MOCK_3D_PRODUCTS } from './three-d-print';
export type { I3DProduct };
