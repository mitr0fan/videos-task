import { Movie } from '../types/movie';
import { Channel } from '../types/channel';
import { User } from '../types/user';

interface Constants {
    MOVIES: Movie[];
    CHANNELS: Channel[];
    USERS: User[];
}

export let CONSTANTS: Constants = {
    MOVIES: [
        {
            id: 0,
            name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
            imageUrl: '../../../assets/image.png',
            description:
                'Здесь должно быть описание мультфильма. Здесь должно быть описание мультфильма. Здесь должно быть описание мультфильма.',
        },
        {
            id: 1,
            name: 'Новый Бэтмен',
            imageUrl: '../../../assets/image (1).png',
            description:
                'предстоящий американский супергеройский фильм, основанный на одноимённых комиксах издательства DC Comics. Картина будет выпущена компанией Warner Bros. и будет перезагрузкой всех фильмов о Бэтмене.',
        },
        {
            id: 2,
            name: 'Однажды в... Голливуде',
            imageUrl: '../../../assets/hw.png',
            description:
                '1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        },
        {
            id: 3,
            name: 'Стриптизёрши',
            imageUrl: '../../../assets/image (2).png',
            description:
                'Они — яркие, сексуальные и очень амбициозные. Они — танцовщицы элитного стриптиз-клуба, клиенты которого — известные финансисты с Уолл-Стрит. Но когда банковский кризис в одночасье превращает накопления девушек в пыль, подруги по несчастью жаждут отомстить. Они разрабатывают дерзкий план как вернуть потерянные деньги, чтобы снова вести роскошную гламурную жизнь, и отплатить биржевым гениям, оставив их без гроша.',
        },
    ],
    CHANNELS: [
        {
            id: 0,
            name: 'Первый канал',
            logoUrl: '../../../assets/1channel.png',
            schedule: [
                { time: '13:00', description: 'Новости (с субтитрами)' },
                { time: '14:00', description: 'Давай поженимся' },
                { time: '15:00', description: 'Другие новости' },
            ],
        },
        {
            id: 1,
            name: '2х2',
            logoUrl: '../../../assets/2x2.png',
            schedule: [
                { time: '13:00', description: 'МУЛЬТ ТВ. Сезон 4, 7 серия' },
                {
                    time: '14:00',
                    description: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
                },
                { time: '15:00', description: 'БУРДАШЕВ. Сезон 1, 20 серия' },
            ],
        },
        {
            id: 2,
            name: 'РБК',
            logoUrl: '../../../assets/rbc.png',
            schedule: [
                {
                    time: '13:00',
                    description:
                        'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
                },
                { time: '14:00', description: 'ДЕНЬ. Главные темы' },
                { time: '15:00', description: 'Главные новости' },
            ],
        },
        {
            id: 3,
            name: 'AMEDIA PREMIUM',
            logoUrl: '../../../assets/Amedia.png',
            schedule: [
                { time: '13:00', description: 'Клиент всегда мёртв' },
                {
                    time: '14:00',
                    description: 'Голодные игры: Сойка-пересмешница. Часть I',
                },
                { time: '15:00', description: 'Секс в большом городе' },
            ],
        },
    ],
    USERS: [
        {
            id: 0,
            email: 'u',
            password: '0',
            name: 'Константин К.',
        }
    ]
};
