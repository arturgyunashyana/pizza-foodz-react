import { v4 as uuidv4 } from "uuid";

const dataSlider = [
    {
        id: uuidv4(),
        img: require('../../../assets/images/japanese-tea.webp'),
        title: 'JAPANESE TEA',
        subtitle: 'TRADITIONAL'
    },
    {
        id: uuidv4(),
        img: require('../../../assets/images/pepperoni.webp'),
        title: 'PEPPERONI',
        subtitle: 'SPICY'
    },
    {
        id: uuidv4(),
        img: require('../../../assets/images/bruschettas.webp'),
        title: 'BRUSCHETTAS',
        subtitle: 'GOUDA CHEESE'
    },
];

export default dataSlider;
