import piels from '../assets/images/antecedentes/piels.png';
import ucla from '../assets/images/antecedentes/ucla.png';
import lenguantec from '../assets/images/antecedentes/lenguantec.jpeg';
import lemelson from '../assets/images/antecedentes/lemelson-mit.jpg';

interface Antecedente {
    titulo: string;
    subtitulo: string;
    link: string;
    descripcion: string;
    imageSrc: string;
    imageAlt: string;
}

const antecedentes: Antecedente[] = [
    {
        titulo: 'PIELS TRADUCTOR LESCO',
        subtitulo: 'Tecnológico de Costa Rica, Costa Rica',
        link: 'https://www.tec.ac.cr/traductor-lesco',
        descripcion: 'PIELS tenía como objetivo desarrollar un traductor de texto a LESCO en avatar. Sin embargo, al crear el avatar en la plataforma Unity, se dieron cuenta de que la programación de cada seña era muy compleja. Esto los llevó a buscar una solución más sencilla para la programación de los movimientos del avatar, asi que decidieron hacer un tipo de software que permite al usuario crear una serie de movimientos. Inclu-TEC, un grupo de investigación de la Escuela de Ingeniería en Computación, se ha enfocado en investigar y aplicar tecnologías que faciliten la vida de las personas con discapacidad.',
        imageSrc: piels,
        imageAlt: 'PIELS TRADUCTOR LESCO'
    },
    {
        titulo: 'UCLA',
        subtitulo: 'Universidad de California, Los Ángeles, Estados Unidos',
        link: 'https://www.forbes.com.mx/tecnologia-guantes-que-traducen-el-lenguaje-de-signos/',
        descripcion: 'Un grupo de estudiantes de la UCLA desarollaron unos innovadores guantes que traducen la lengua de señas americana (ASL) en habla audible a través de un teléfono inteligente. Estos guantes están equipados con tecnología wearable, utilizando sensores delgados y elásticos hechos de hilo conductor que se extienden a lo largo de los cinco dedos. Los sensores recogen los movimientos de las manos y la posición de los dedos, permitiendo representar cada una de las señas y letras del alfabeto. Los datos recopilados son enviados a un teléfono inteligente, que los traduce en voz audible.',
        imageSrc: ucla,
        imageAlt: 'UCLA'
    },
    {
        titulo: 'LENGUANTEC',
        subtitulo: 'Tecnológico de Monterrey, Mexico',
        link: 'https://conecta.tec.mx/es/noticias/san-luis-potosi/educacion/crean-prototipo-de-guante-que-ensena-lengua-de-senas-personas',
        descripcion: 'El Tecnológico de Monterrey ha creado un prototipo de guante que enseña la lengua de señas mexicana (LSM). Este dispositivo utiliza sensores de flexión y se conecta a otros dispositivos mediante WiFi y Bluetooth, utilizando el microcontrolador ESP32. Los estudiantes desarrollaron una aplicación propia para facilitar la interacción con el guante y su uso en la enseñanza del LSM, brindando una herramienta innovadora para la inclusión de personas sordas.',
        imageSrc: lenguantec,
        imageAlt: 'lenguantec'
    },
    {
        titulo: 'SignAloud',
        subtitulo: 'Lemelson-MIT, Estados Unidos',
        link: 'https://theindexproject.org/award/nominees/2051',
        descripcion: 'El proyecto SignAloud ha desarrollado guantes capaces de reconocer los gestos de la mano y las señas correspondientes en ASL (American Sign Language). Cada guante cuenta con un sensor que envía los datos a través de Bluetooth a una computadora central. Esta computadora procesa la información utilizando regresiones estáticas secuenciales, imitando el funcionamiento del sistema neurológico. Si los datos coinciden con un gesto específico, el sistema reproduce la palabra o frase correspondiente a través de un altavoz. Este innovador proyecto fue creado por dos estudiantes de la Universidad de Washington, Thomas Pryor y Navid Azodi para el gran premio de inventores Lemelson-MIT',
        imageSrc: lemelson,
        imageAlt: 'ACE ASL'
    },
];

export default antecedentes;
