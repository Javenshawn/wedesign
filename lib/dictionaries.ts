/*
 * Dictionaries used across the application for industries, styles and colour combinations.
 */

export const INDUSTRIES: { value: string; label: string }[] = [
  { value: 'tech', label: 'Technology / Software' },
  { value: 'fin', label: 'Finance / Investment' },
  { value: 'edu', label: 'Education' },
  { value: 'health', label: 'Healthcare / Medical' },
  { value: 'food', label: 'Food & Beverage' },
  { value: 'retail', label: 'Retail / E-commerce' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'auto', label: 'Automotive' },
  { value: 'travel', label: 'Travel & Hospitality' },
  { value: 'fashion', label: 'Fashion & Apparel' },
  { value: 'sports', label: 'Sports & Fitness' },
  { value: 'media', label: 'Media & Entertainment' },
  { value: 'logistics', label: 'Logistics & Shipping' },
  { value: 'energy', label: 'Energy / Green' },
  { value: 'ngo', label: 'NGO / Non-profit' },
  { value: 'beauty', label: 'Beauty & Personal Care' },
  { value: 'construction', label: 'Construction & Architecture' },
  { value: 'other', label: 'Other' },
];

export const STYLES: { value: 'icon' | 'wordmark' | 'combination'; label: string }[] = [
  { value: 'icon', label: '图形标志' },
  { value: 'wordmark', label: '文字标志' },
  { value: 'combination', label: '图文标志' },
];

export const COLOR_COMBOS: { value: string; label: string; mood: string }[] = [
  { value: 'black_gold', label: '黑 + 金', mood: '高端、权威、奢华' },
  { value: 'white_gold', label: '白 + 金', mood: '优雅、纯净、贵气' },
  { value: 'brown_gold', label: '棕 + 金', mood: '沉稳、复古、可信赖' },
  { value: 'navy_gold', label: '海军蓝 + 金', mood: '专业、坚毅、企业级' },
  { value: 'emerald_gold', label: '祖母绿 + 金', mood: '环保、质感、精致' },
  { value: 'blue_orange', label: '蓝 + 橙', mood: '活力、科技、友好' },
  { value: 'blue_green', label: '蓝 + 绿', mood: '理性、清新、可靠' },
  { value: 'purple_pink', label: '紫 + 粉', mood: '创意、前卫、年轻' },
  { value: 'red_black', label: '红 + 黑', mood: '力量、速度、进取' },
  { value: 'cyan_black', label: '青 + 黑', mood: '冷静、科幻、未来感' },
  { value: 'teal_white', label: '蓝绿 + 白', mood: '现代、清爽、平衡' },
  { value: 'coffee_cream', label: '咖啡色 + 奶油白', mood: '温暖、生活方式、手作感' },
  { value: 'olive_gold', label: '橄榄绿 + 金', mood: '自然、品质、克制' },
  { value: 'wine_gold', label: '酒红 + 金', mood: '经典、仪式感、厚重' },
  { value: 'yellow_gray', label: '黄 + 灰', mood: '明快、可视化、友好' },
  { value: 'sky_white', label: '天蓝 + 白', mood: '科技、云服务、轻量' },
  { value: 'violet_gold', label: '靛紫 + 金', mood: '神秘、艺术、精品' },
  { value: 'mono', label: '黑白灰', mood: '极简、通用、耐看' },
];