export interface IFaq {
  id: string
  question: string
  answer: string
}

export const MOCK_FAQS: IFaq[] = [
  {
    id: '1',
    question: '做出来的桌宠是什么格式的？',
    answer: '标准Shimeji格式，支持Windows和Mac系统，解压后双击即可运行。'
  },
  {
    id: '2',
    question: '需要我提供什么照片？',
    answer: '一张清晰的宠物正面照即可，光线充足、背景干净效果最好。猫咪、狗狗、仓鼠、兔子等都可以做。'
  },
  {
    id: '3',
    question: '多久能做好？',
    answer: '基础版48小时内，推荐版和全家福24小时内。高峰期可能略有延迟。'
  },
  {
    id: '4',
    question: '可以修改吗？',
    answer: '推荐版包含1次免费微调，基础版如需修改需额外付费。'
  },
  {
    id: '5',
    question: '怎么付款？',
    answer: '通过淘宝或微店拍下对应套餐，安全有保障。收到成品确认无误后再确认收货。'
  }
]
