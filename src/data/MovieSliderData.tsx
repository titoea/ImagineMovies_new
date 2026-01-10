import { ImageSourcePropType } from 'react-native';

export type MovieSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const MovieSlider = [
    {
        title: 'Archer',
        image: require('../assets/images/archer.jpg'),
        description: '',

    },
    {
        title: 'Ghost Busters',
        image: require('../assets/images/ghostbusters.jpeg'),
        description: '',

    },
    {
        title: 'It',
        image: require('../assets/images/it.jpeg'),
        description: '',

    },
    {
        title: 'Joker',
        image: require('../assets/images/joker.jpeg'),
        description: '',

    },
    {
        title: 'Moonlight',
        image: require('../assets/images/moonlight.jpg'),
        description: '',

    },
    {
        title: 'Oceans 8',
        image: require('../assets/images/oceans8.png'),
        description: '',

    },
    {
        title: 'Shrek',
        image: require('../assets/images/shrek.png'),
        description: '',

    },
];

