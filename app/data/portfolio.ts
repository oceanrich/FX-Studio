export type Category = 'all' | 'commercial' | 'portrait' | 'wedding';

export interface PortfolioImage {
  filename: string;
  category: Category;
}

export const portfolioImages: PortfolioImage[] = [
  // 商业摄影 (43张)
  { filename: '00bf5818074e8969e2f21fb43cb59ef2.JPG', category: 'commercial' },
  { filename: '084c34a5118919ffaab1d5b5c619e972.JPG', category: 'commercial' },
  { filename: '0d9f7636ba28175b04f5dd99ab3a3c04.JPG', category: 'commercial' },
  { filename: '1529d688ff719f4892218995167d8928.JPG', category: 'commercial' },
  { filename: '167dd99ff9602081737ec90a7622d97b.JPG', category: 'commercial' },
  { filename: '1d6c98837c192c24ea5af55e36044aeb.JPG', category: 'commercial' },
  { filename: '1e3582477ae3bb5470c4ca5bf517d86f.JPG', category: 'commercial' },
  { filename: '2bbcffbba833733153f083e6e4de1364.JPG', category: 'commercial' },
  { filename: '3ba0c5ae1063b340170cafc5ccb87928.JPG', category: 'commercial' },
  { filename: '3ca3c1d07338226662249e1dcb7c9da5.JPG', category: 'commercial' },
  { filename: '4f36dfb23f44282d28739999544300b6.JPG', category: 'commercial' },
  { filename: '52f52206092ffbfc04e611033f49e1dd.JPG', category: 'commercial' },
  { filename: '538a6efff8574ecf46a37df6e9d17e69.JPG', category: 'commercial' },
  { filename: '575a7398884524fa79baeed5d324adfe.JPG', category: 'commercial' },
  { filename: '58653028cf310dac6f0097897c9439d9.jpg', category: 'commercial' },
  { filename: '5a17d9ff4f117d999a33bb1857bf1eb0.JPG', category: 'commercial' },
  { filename: '6ddbe1fb3c9adae288554b6323a7f7ec.JPG', category: 'commercial' },
  { filename: '7bdd27c9bf6722385ee1a2c8557865dd.jpg', category: 'commercial' },
  { filename: '886d3d621c0d312947896480bda8396d.JPG', category: 'commercial' },
  { filename: '8a3f4bfc45b8be1f8f47ac8de45e9178.JPG', category: 'commercial' },
  { filename: '8a455e1810950c2138001e0738d354b2.JPG', category: 'commercial' },
  { filename: '8a76b4cd7475aa5d732849f101f7f17e.jpg', category: 'commercial' },
  { filename: '9236fcf738baa6e56545dd3f0ed69191.JPG', category: 'commercial' },
  { filename: '9910b0031ef5a048e17e97cde3f8e41e.jpg', category: 'commercial' },
  { filename: '9c21d91cb24286034ca5e09063018966.JPG', category: 'commercial' },
  { filename: 'a0bde7033aeab966d328cb93c7ce1f47.JPG', category: 'commercial' },
  { filename: 'a745f4a28b4adf92d95b4f4d43f66f19.JPG', category: 'commercial' },
  { filename: 'aa8a93ac117aca03d3b321959c45617b.JPG', category: 'commercial' },
  { filename: 'ad1d58e2a083635ba8a12256fba77d87.JPG', category: 'commercial' },
  { filename: 'aed30a29c0a5a9e0042faf1fadbe7e5c.JPG', category: 'commercial' },
  { filename: 'bc3ca6323a855a2bfd65305fe63482b8.JPG', category: 'commercial' },
  { filename: 'c23ced6b969ef73d3b9e9f336d437acb.JPG', category: 'commercial' },
  { filename: 'c3e253b2800e4e9ee510612904032111.jpg', category: 'commercial' },
  { filename: 'c53ab2c2be752c10233e45c388caf697.JPG', category: 'commercial' },
  { filename: 'cf00bf0b766789b8754d2ff3bd8e5d6f.JPG', category: 'commercial' },
  { filename: 'd820b9efe299d64337ad7dfee60a4bb2.jpg', category: 'commercial' },
  { filename: 'daed625a18675d2368e07d4ee37c786f.jpg', category: 'commercial' },
  { filename: 'e13e6f422c7d285a177b95ff10989f77.JPG', category: 'commercial' },
  { filename: 'e85d6752aba07eb440a347e97703aa86.JPG', category: 'commercial' },
  { filename: 'f592629d186ac3c5a2d76edff7fca97b.JPG', category: 'commercial' },
  { filename: 'f91cc11981771c49f137772196b5219e.jpg', category: 'commercial' },
  { filename: 'fb90c659e11d85bc517c451b27adba40.JPG', category: 'commercial' },
  { filename: 'ffe04a1b2a2a9b871bdaf0b03d137752.JPG', category: 'commercial' },
  
  // 人像摄影 (7张)
  { filename: '09b0fe01424577b398c86df3b7646f29.jpg', category: 'portrait' },
  { filename: '102d796d12f8a57fbf65dc9c431d7b66.jpg', category: 'portrait' },
  { filename: '6a7e5b7d85ad5d3ecd732f9b9f7da563.jpg', category: 'portrait' },
  { filename: '9ed574b459ce39daa3c6a82162377b80.jpg', category: 'portrait' },
  { filename: 'a7c4c3767587a95880265d0b4566d532.JPG', category: 'portrait' },
  { filename: 'c7c19b650c21503669a969577254d59d.jpg', category: 'portrait' },
  { filename: 'ff19fa64a7442b9a2069ab017cddd87f.JPG', category: 'portrait' },
  
  // 婚礼摄影 (6张)
  { filename: 'DSC00718-2.JPG', category: 'wedding' },
  { filename: 'DSC00805.JPG', category: 'wedding' },
  { filename: 'DSC01004-2.JPG', category: 'wedding' },
  { filename: 'DSC01089.JPG', category: 'wedding' },
  { filename: 'DSC01247.JPG', category: 'wedding' },
  { filename: 'DSC01294-2.JPG', category: 'wedding' },
];

export function getImagePath(image: PortfolioImage): string {
  return `/images/${image.category}/${image.filename}`;
}

