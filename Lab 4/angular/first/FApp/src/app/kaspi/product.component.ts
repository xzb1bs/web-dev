import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent {

  categories = ['Phone', 'Laptop', 'Watches', 'Headphones', 'Audio equipment'];
  selected = 'Phone';

  products = [
    {
      id : 1,
      category : 'Phone',
      name: 'Iphone 13',
      description: 'iPhone 13 offers a sleek design, A15 Bionic chip, and an improved dual-camera system. ',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium']
    },
    {
      id : 2,
      category : 'Phone',
      name: 'iPhone 16 Pro Max',
      description: 'iPhone 16 Pro Max features a 6.9-inch display, A18 Pro chip, and a 48MP Ultra Wide camera',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium']
    },
    {
      id : 3,
      category : 'Laptop',
      name: 'Apple MacBook Pro 16 2021',
      description: 'Apple M1 Pro chip, 16-inch Liquid Retina XDR display, and up to 64GB of unified memory',
      rating: 5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h31/64373794570270.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-16-gb-ssd-1024-gb-macos-mk193-102866164/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h67/hc7/64373797191710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h2e/64373799714846.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h3e/64373803089950.jpg?format=gallery-medium']
    },
    {
      id : 4,
      category : 'Laptop',
      name: 'ThundeRobot 911 X Wild Hunter G2 Pro',
      description: 'Intel Core i7-11800H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3060 6GB',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/86274830204958.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h88/86274830336030.jpg?format=gallery-medium']
    },
    {
      id : 5,
      category : 'Watches',
      name: 'Apple Watch SE GPS Gen.2 2024',
      description: 'Apple S8 chip, 40mm Retina display, and up to 18 hours of battery life',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium']
    },
    {
      id : 6,
      category : 'Watches',
      name: 'Huawei Watch GT 5 Pro',
      description: 'Huawei Kirin A1 chip, 1.39-inch AMOLED display, and up to 14 days of battery life',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h7d/87248467787806.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-5-pro-46-mm-chernyi-chernyi-124097507/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h87/h56/87248467853342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/h3b/87248467984414.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h3d/87248468049950.jpg?format=gallery-medium']
    },
    {
      id : 7,
      category : 'Headphones',
      name: ' Apple AirPods Pro 2',
      description: 'Active Noise Cancellation, Transparency mode, and up to 6 hours of listening time',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium']
    },
    {
      id : 8,
      category : 'Headphones',
      name: 'Apple AirPods 4 Active Noise Cancellation',
      description: 'Active Noise Cancellation, Adaptive EQ, and up to 6 hours of listening time',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium']
    },
    {
      id : 9,
      category : 'Audio equipment',
      name: 'speaker BT SPEAKER ZQS-4239',
      description: 'Bluetooth speaker with 10W output power, 1200mAh battery, and 10 hours of playback time',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000',
      },
    {
      id : 10,
      category : 'Audio equipment',
      name: 'Yandex Station Light 2 smart speaker',
      description: 'Smart speaker with voice assistant, 2.1 sound system.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h3d/86887758200862.jpg?format=gallery-medium']
    },
    {
      id : 11,
      category : 'Phone',
      name: 'Iphone 16',
      description: 'iPhone 16 offers a sleek design, A18 Bionic chip, and an improved dual-camera system. ',
      rating: 5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium']
    },
    {
      id : 12,
      category : 'Phone',
      name: 'Samsung Galaxy A55',
      description: 'Samsung Galaxy A55 features a 6.7-inch display, Exynos 128 chip, and a 48MP Ultra Wide camera',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h7b/85428543750174.jpg?format=gallery-medium']
    },
    {
      id : 13,
      category : 'Phone',
      name: 'OPPO A78',
      description: 'OPPO A78 offers a 6.5-inch display, Dimensity 700 chip, and a 48MP Ultra Wide camera',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/p43/p46/19319587.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p46/19319585.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/p46/19319588.png?format=gallery-medium']
    },
    {
      id : 14,
      category : 'Laptop',
      name: 'Lenovo IdeaPad 3',
      description: 'Intel Core i5-1135G7, 8GB RAM, 512GB SSD, Intel Iris Xe Graphics, 15.6-inch display',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h0f/h2c/65053326376990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hf8/65053328080926.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/hbf/65053329457182.jpg?format=gallery-medium']
    },
    {
      id : 15,
      category : 'Laptop',
      name: 'Acer Aspire 3',
      description: 'AMD Ryzen 5 3500U, 8GB RAM, 512GB SSD, AMD Radeon Vega 8 Graphics, 15.6-inch display',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h99/84558389084190.jpg?format=gallery-medium']
    },
    {
      id : 16,
      category : 'Laptop',
      name: 'HYDRA H14',
      description: 'Intel Core i5-1135G7, 8GB RAM, 512GB SSD, Intel Iris Xe Graphics, 14-inch display',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/pa2/9286440.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hydra-h14-14-12-gb-ssd-256-gb-win-10-mkii-119194958/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/p09/pa0/9286441.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb2/pa0/9286447.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pce/pa0/9286448.jpg?format=gallery-medium']
    },
    {
      id : 17,
      category : 'Watches',
      name: 'Samsung Galaxy Watch6',
      description: 'Samsung Exynos W920 chip, 40mm Super AMOLED display, and up to 48 hours of battery life',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-grafitovyi-chernyi-112368202/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/hb6/hc3/82569351299102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/haf/82569351331870.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h47/82569351364638.jpg?format=gallery-medium']
    },
    {
      id : 18,
      category : 'Watches',
      name: ' Xiaomi Redmi Watch 5',
      description: 'Sleek smartwatch with a 1.97" AMOLED display, health tracking, 100+ sports modes, built-in GPS, and long battery life for an all-in-one smart experience.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/h70/87197780181022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/hf2/87197780312094.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h60/87197780443166.jpg?format=gallery-medium']
    },
    {
      id : 19,
      category : 'Watches',
      name: 'Apple Watch Series 9',
      description: 'Apple S9 chip, 40mm Retina display, and up to 18 hours of battery life',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/ha6/83874218115102.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-41-mm-sinii-chernyi-113398134/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/hce/83874218180638.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/hf0/83874218246174.png?format=gallery-medium']
    },
    {
      id : 20,
      category : 'Headphones',
      name: ' Apple EarPods Lightning',
      description: 'Apple EarPods with Lightning Connector, built-in remote, and microphone',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h49/h9c/63764029636638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hdb/63764030423070.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h89/h89/63764030947358.jpg?format=gallery-medium']
    },
    {
      id : 21,
      category : 'Headphones',
      name: ' JBL Tune 510BT',
      description: 'JBL Tune 510BT Wireless On-Ear Headphones with JBL Pure Bass Sound, Bluetooth 5.0, and up to 40 hours of battery life',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium']
    },
    {
      id : 22,
      category : 'Headphones',
      name: ' Sony WH-1000XM4 ',
      description: 'Sony WH-1000XM4 Wireless Noise-Canceling Over-Ear Headphones with 30 hours of battery life, touch controls, and voice assistant',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pde/11569146.jpg?format=gallery-medium']
    },
    {
      id : 23,
      category : 'Audio equipment',
      name: 'speaker JBL GO 4',
      description: 'JBL GO 4 Portable Bluetooth Speaker with 5 hours of playtime, IPX7 waterproof rating, and built-in noise-canceling speakerphone',
      rating: 4.9,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h6c/87088702521374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-go-4-chernyi-117967868/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h5a/hfb/87088702586910.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h25/87088702652446.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h5f/h67/87088702717982.jpg?format=gallery-medium']
    },
    {
      id : 24,
      category : 'Audio equipment',
      name: 'Яндекс Станция Миди',
      description: 'Smart speaker with voice assistant, 2.1 sound system.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/h82/84530104533022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/h9b/84530104598558.jpg?format=gallery-medium']
    },
    {
      id : 25,
      category : 'Audio equipment',
      name: 'speaker KINYO K12 +2 microphones',
      description: 'KINYO K12 Portable Bluetooth Speaker with 2 microphones, 5 hours of playtime, and built-in noise-canceling speakerphone',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h75/85036953567262.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-kinyo-k12-2-mikrofona-bezhevyi-116279030/?c=750000000',
      gallerry: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h06/85036953632798.jpg?format=gallery-medium']
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
  constructor() { }
  on(productId: number, img: string){
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.image = img;
    }
  }
}