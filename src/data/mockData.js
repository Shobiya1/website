export const categories = [
  {
    id: '1',
    name: 'T-Shirts',
    description: 'Comfortable and stylish t-shirts',
    image_url: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'
  },
  {
    id: '2',
    name: 'Jerseys',
    description: 'Sports jerseys and athletic wear',
    image_url: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg'
  },
  {
    id: '3',
    name: 'Hoodies',
    description: 'Warm and cozy hoodies',
    image_url: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg'
  },
  {
    id: '4',
    name: 'Accessories',
    description: 'Fashion accessories and more',
    image_url: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'
  }
];

export const products = [
  {
    id: '1',
    category_id: '1',
    name: 'Classic Cotton T-Shirt',
    description: 'Premium quality cotton t-shirt for everyday comfort',
    price: 29.99,
    compare_price: 39.99,
    stock_quantity: 100,
    image_url: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Black', 'White', 'Navy'],
    featured: true
  },
  {
    id: '2',
    category_id: '2',
    name: 'Football Jersey Pro',
    description: 'Professional grade football jersey with breathable fabric',
    price: 49.99,
    compare_price: 69.99,
    stock_quantity: 50,
    image_url: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
    images: ['https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
    featured: true
  },
  {
    id: '3',
    category_id: '3',
    name: 'Comfort Hoodie',
    description: 'Soft and warm hoodie perfect for casual wear',
    price: 59.99,
    compare_price: null,
    stock_quantity: 75,
    image_url: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    images: ['https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'Navy'],
    featured: false
  },
  {
    id: '4',
    category_id: '1',
    name: 'Graphic Print Tee',
    description: 'Trendy graphic print t-shirt with unique designs',
    price: 34.99,
    compare_price: 44.99,
    stock_quantity: 80,
    image_url: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg',
    images: ['https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    featured: true
  },
  {
    id: '5',
    category_id: '2',
    name: 'Basketball Jersey',
    description: 'Premium basketball jersey for the court',
    price: 54.99,
    compare_price: 74.99,
    stock_quantity: 40,
    image_url: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg',
    images: ['https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Orange', 'Blue', 'Black'],
    featured: true
  },
  {
    id: '6',
    category_id: '3',
    name: 'Zip-Up Hoodie',
    description: 'Comfortable zip-up hoodie with pockets',
    price: 64.99,
    compare_price: null,
    stock_quantity: 60,
    image_url: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    images: ['https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    featured: false
  },
  {
    id: '7',
    category_id: '4',
    name: 'Sports Cap',
    description: 'Adjustable sports cap with embroidered logo',
    price: 19.99,
    compare_price: 24.99,
    stock_quantity: 150,
    image_url: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    images: ['https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'],
    sizes: ['One Size'],
    colors: ['Black', 'Red', 'Blue', 'White'],
    featured: true
  },
  {
    id: '8',
    category_id: '1',
    name: 'V-Neck T-Shirt',
    description: 'Classic v-neck t-shirt in soft cotton',
    price: 27.99,
    compare_price: 35.99,
    stock_quantity: 90,
    image_url: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
    images: ['https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    featured: false
  }
];
