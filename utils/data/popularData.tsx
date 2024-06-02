const images = [
  {src: require('../../assets/images/biryanione.png'), text: 'Biriyani'},
  {src: require('../../assets/images/biryanione.png'), text: 'Rice,Oils'},
  {src: require('../../assets/images/biryanione.png'), text: 'Rice,Oils'},
  {src: require('../../assets/images/biryanione.png'), text: 'Biriyani'},
];

const imagesOpenStore = [
  {
    src: require('../../assets/images/biryanione.png'),
    text: 'Atta /Flour',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
  {
    src: require('../../assets/images/rice.png'),
    text: 'Rice,Oils',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
  {
    src: require('../../assets/images/pizza.png'),
    text: 'Masala and ..',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
];

export {images, imagesOpenStore};

interface ItemOption {
  id: string;
  title: string;
  image: any;
  marginTopValue?: number;
}

const rowsData: ItemOption[][] = [
  [
    {
      id: '1',
      title: 'Biriyani',
      image: require('../../assets/images/biryanione.png'),
      marginTopValue: 20,
    },
    {
      id: '2',
      title: 'Rice,Oils',
      image: require('../../assets/images/pizza.png'),
      marginTopValue: 20,
    },
    {
      id: '3',
      title: 'Masala and Snacks',
      image: require('../../assets/images/rice.png'),
      marginTopValue: 8,
    },
    {
      id: '4',
      title: 'Rice,Oils',
      image: require('../../assets/images/riceoil.png'),
      marginTopValue: 20,
    },
  ],
  [
    {
      id: '5',
      title: 'Atta /Flour',
      image: require('../../assets/images/biryanione.png'),
      marginTopValue: 20,
    },
    {
      id: '6',
      title: 'Rice,Oils',
      image: require('../../assets/images/pizza.png'),
      marginTopValue: 20,
    },
    {
      id: '7',
      title: 'Masala and Snacks',
      image: require('../../assets/images/rice.png'),
      marginTopValue: 8,
    },
    {
      id: '8',
      title: 'Rice,Oils',
      image: require('../../assets/images/riceoil.png'),
      marginTopValue: 20,
    },
  ],
];

interface MoodItem {
  text: string;
  AliasName: string;
  source: any;
  item?: any;
  marginTopValue?: number;
}

interface ListItemDataCardCompleted {
  id?: string;
  image?: any;
  name?: string;
}

const ListItemDataCardCompleted: ListItemDataCardCompleted[] = [
  {
    id: '1',
    image: require('../../assets/images/store.png'),
    name: '3.2',
  },
  {
    id: '2',
    image: require('../../assets/images/store.png'),
    name: '',
  },
  {
    id: '3',
    image: require('../../assets/images/store.png'),
    name: '3.2',
  },
];

interface storeDataTypes {
  id: string;
  image: any;
  name: string;
  rating: string;
  type?: string;
  address?: string;
}

const storeData: storeDataTypes[] = [
  {
    id: '1',
    image: require('../../assets/images/store.png'),
    name: 'Punjabi Rasoi',
    rating: '4',
    type: 'Deals in Food',
    address: 'Court More, Opposite Orodental Hospital Asansol',
  },
  {
    id: '2',
    image: require('../../assets/images/store.png'),
    name: 'Hotel Grand',
    rating: '4',
    type: 'Deals in Food',
    address: 'Court More, Opposite Orodental Hospital Asansol',
  },
  {
    id: '3',
    image: require('../../assets/images/store.png'),
    name: 'Raju Chicken Pakora',
    rating: '4',
    type: 'Deals in Food',
    address: 'Court More, Opposite Orodental Hospital Asansol',
  },
];

export {rowsData, ListItemDataCardCompleted, storeData};

const rowsDataNew: ItemOption[][] = [
  [
    {
      id: '1',
      title: 'Biriyani',
      image: require('../../assets/images/biryanione.png'),
      marginTopValue: 20,
    },
    {
      id: '2',
      title: 'Rice,Oils',
      image: require('../../assets/images/pizza.png'),
      marginTopValue: 20,
    },
    {
      id: '3',
      title: 'Masala and Snacks',
      image: require('../../assets/images/rice.png'),
      marginTopValue: 8,
    },
    {
      id: '4',
      title: 'Rice,Oils',
      image: require('../../assets/images/riceoil.png'),
      marginTopValue: 20,
    },
  ],
  [
    {
      id: '5',
      title: 'Atta /Flour',
      image: require('../../assets/images/biryanione.png'),
      marginTopValue: 20,
    },
    {
      id: '6',
      title: 'Rice,Oils',
      image: require('../../assets/images/pizza.png'),
      marginTopValue: 20,
    },
    {
      id: '7',
      title: 'Masala and Snacks',
      image: require('../../assets/images/rice.png'),
      marginTopValue: 8,
    },
    {
      id: '8',
      title: 'Rice,Oils',
      image: require('../../assets/images/riceoil.png'),
      marginTopValue: 20,
    },
  ],
];

export {rowsDataNew};

const imagesNewRow = [
  {src: require('../../assets/images/biryanione.png'), text: 'Biriyani'},
  {src: require('../../assets/images/biryanione.png'), text: 'Rice,Oils'},
  {src: require('../../assets/images/biryanione.png'), text: 'Rice,Oils'},
  {src: require('../../assets/images/biryanione.png'), text: 'Biriyani'},
];

export {imagesNewRow};

const imagesOpenStoreNew = [
  {
    src: require('../../assets/images/biryanione.png'),
    text: 'Atta /Flour',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
  {
    src: require('../../assets/images/rice.png'),
    text: 'Rice,Oils',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
  {
    src: require('../../assets/images/pizza.png'),
    text: 'Masala and ..',
    topRightIcon: require('../../assets/images/discountTwenty.png'),
    quantity: '1kg',
    price: '₹550.00',
    discountPrice: '₹650.00',
  },
];

export {imagesOpenStoreNew};