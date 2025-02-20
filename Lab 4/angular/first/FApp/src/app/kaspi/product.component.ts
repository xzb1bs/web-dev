
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface Product {
  id: number;
  name: string;
 
  description: string;
  rating: number;
  price: number;
  link: string;
  image: string;
  gallery: string[];
}

@Component({                    
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class HeaderComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'чехол для iPhone 13',
      
      description: 'Чехол Для Apple iPhone 13 прозрачный.',
      rating: 5,
      price: 100,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium',
      gallery: [
]
    },
    
    
    {
      id: 2,
      name: 'iPhone 13',
      
      description: 'iPhone 13 offers a sleek design, A15 Bionic chip, and an improved dual-camera system. ',
      rating: 4.6,
      price: 271525,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/hed/86009675382814.png?format=gallery-medium'
      ]
    },
    
    
    {
      id: 3,
      name: 'iPhone 16 Pro Max',
      
      description: 'iPhone 16 Pro Max features a 6.9-inch display, A18 Pro chip, and a 48MP Ultra Wide camera.',
      rating: 5,
      price: 670968,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
      ]
    },
   
   
    {
      id: 4,
      name: 'Xiaomi Redmi 13C 8',
      
      description: 'Xiaomi Redmi 13C 8GB features a 6.74-inch display, Helio G85 chip, and 256GB storage.',
      rating: 4.5,
      price: 48442,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium'      ]
    },
    
    
    {
      id: 5,
      name: 'Huawei P40 Pro',
      
      description: 'Premium smartphone with an excellent camera.',
      rating: 4.3,
      price: 449885,
      link: 'https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-chernyi-120278768/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hde/86302132928542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h29/h08/86302132994078.jpg?format=gallery-medium'
      ]
    },
    
    
    {
      id: 6,
      name: 'OnePlus 9 Pro',
      
      description: 'Flagship killer with high-end performance.',
      rating: 4.7,
      price: 342400,
      link: 'https://kaspi.kz/shop/p/oneplus-9-pro-8-256gb-chernyi-101353185/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h06/64116512194590.jpg?format=gallery-medium',
      gallery: [
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbcnheMZDcHrcboOInH-wxByzKbB-CAu_kg&s'
      ]
    },
    
    
    {
      id: 7,
      name: 'Oppo Reno 6',
      
      description: 'Stylish design with powerful features.',
      rating: 4.2,
      price: 148080,
      link: 'https://kaspi.kz/shop/p/oppo-reno-6-8-gb-128-gb-chernyi-102372847/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h36/h90/64144398614558.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h36/h90/64144398614558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h95/64144401137694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/hf2/64144406675486.jpg?format=gallery-medium'
      ]
    },
    
    
    {
      id: 8,
      name: 'Realme GT Master',
      
      description: 'High performance at a reasonable price.',
      rating: 4.0,
      price: 294297,
      link: 'https://kaspi.kz/shop/p/realme-gt-6-12-gb-256-gb-zelenyi-122177937/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/hfe/86731990466590.png?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h97/ha8/86731991121950.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/he0/86731991384094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h77/86731991908382.png?format=gallery-medium'
      ]
    },
    
    
    {
      id: 9,
      name: 'Google Pixel 6',
      
      description: 'Smartphone with excellent camera and software experience.',
      rating: 4.6,
      price: 264990,
      link: 'https://kaspi.kz/shop/p/google-pixel-6-8-128gb-chernyi-102811207/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h34/64059214888990.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h34/64059214888990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h50/64059217412126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/ha6/64059222818846.jpg?format=gallery-medium'
      ]
    },
    
    
    {
      id: 10,
      name: 'Sony Xperia 1 VI',
      
      description: 'Compact design with powerful features.',
      rating: 4.1,
      price: 719900,
      link: 'https://kaspi.kz/shop/p/sony-xperia-1-vi-12-gb-512-gb-krasnyi-134495455/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p7c/24147537.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p96/p7c/24147537.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pac/24148557.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pac/24148559.png?format=gallery-medium'
      ]
    }
  ];

  
  
  constructor() { }

  ngOnInit(): void { }

  shareViaWhatsApp(product: Product): void {
    const url = `https://wa.me/?text=${product.link}`;
    window.open(url);
    console.log(product);
  }

  shareViaTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${product.link}&text=${product.name}`;
    window.open(url);
  }

  buyProduct(product: Product): void {
    alert(product.name +' was bought');
  }

  on(product: Product, img: string){
    product.image = img;
  }


}