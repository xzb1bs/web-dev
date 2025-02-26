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
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 2,
      category : 'Phone',
      name: 'iPhone 16 Pro Max',
      description: 'iPhone 16 Pro Max features a 6.9-inch display, A18 Pro chip, and a 48MP Ultra Wide camera',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
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
}