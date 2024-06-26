interface antecedente {
    titulo: string;
    subtitulo: string;
    link: string;
    descripcion: string;
    imageSrc: string;
    imageAlt: string;
  }
  
const antecedentes: antecedente[] = [
    {
        titulo: 'INTERPRETES',
        subtitulo: 'de lengua de señas',
        link: 'antecedentes',
        descripcion: 'Son servicios de interpretación LESCO para actividades. Tienen intérpretes LESCO que hablan distintos idiomas, por lo que pueden hacer la interpretación desde lenguaje de señas sin problema alguno. Tienen equipos de interpretación simultánea que pueden complementar el servicio.',
        imageSrc: 'https://www.ucr.ac.cr/medios/fotos/2023/aks_5165-copia-64b1a6edd44ef.jpg',
        imageAlt: 'INTERPRETES'
    },
    {
        titulo: 'PIELS',
        subtitulo: 'IncluTec',
        link: 'https://www.tec.ac.cr/traductor-lesco',
        descripcion: 'PIELS buscaba realizar un traductor de texto a LESCO, pero al realizar el avatar en la plataforma Unity notaron que la programación era elaborada, así que, decidieron simplificar la acción de programar cada seña que hiciera el avatar. Inclu- TEC, grupo de investigación de interés de la escuela de ingeniería en computación, se ha dedicado a investigar y aplicar tecnologías que ofrezcan facilidades para las personas con discapacidad.',
        imageSrc: 'https://i.ytimg.com/vi/tvRJh1PdbWU/maxresdefault.jpg',
        imageAlt: 'PIELS INCLUTEC'
    },
    {
        titulo: 'ACE-ASL',
        subtitulo: 'SignAll Technologies Inc',
        link: 'https://ace-asl-learn-fingerspelling.softonic.com/android',
        descripcion: 'Es una aplicación gratuita desarrollada por SignAl Technologies Inc., tiene el fin de enseñar la Lengua de Señas Americana (ASL). Esta consta con una parte interactiva en ella se puede practicar las la lengua con una persona sorda y una persona oyente, a través del uso de la cámara del teléfono.',
        imageSrc: 'https://ph-files.imgix.net/0076d9d4-b7af-4e1c-9a7c-80f49392d0c3.jpeg?auto=format&fit=crop',
        imageAlt: 'ACE ASL'
    },
    {
        titulo: 'HETAH',
        subtitulo: '@fundacionhetah',
        link: 'https://hetah.net/',
        descripcion: 'La fundación hetah se ha encargado de crear herramientas para enfrentar los desafíos que presenta la humanidad, una de estas herramientas es un traductor de lenguaje de señas a avatar, ya sea en 2D o 3D. Con el avatar 2D han logrado traducir 884 señas de diferentes lenguajes de señas de distintos países, con el 3D han logrado traducir 1365 señas. De igual manera, este traductor se encuentra en desarrollo, por lo que aún le faltan muchas cosas por mejorar.',
        imageSrc: 'https://s3.amazonaws.com/ideame-images/resizers/47941_686_387_fill_undefined_projectImageOriginalUrl.jpeg',
        imageAlt: 'HETAH'
    },
    {
        titulo: 'Sign-Speak',
        subtitulo: '@Sign_Speak_',
        link: 'https://www.sign-speak.com/',
        descripcion: 'Sign Speak es una aplicación móvil que utiliza inteligencia artificial para traducir el lenguaje de señas al lenguaje hablado. La aplicación fue creada por Yamilet Payano, una emprendedora sorda, con el objetivo de hacer la comunicación más accesible para las personas sordas o con problemas de audición. La aplicación utiliza una combinación de visión artificial y aprendizaje automático para identificar y traducir gestos en lenguaje de señas. El usuario simplemente utiliza la cámara del dispositivo y la aplicación mostrará el texto correspondiente en la pantalla, de igual manera se encuentra en desarrollo.',
        imageSrc: 'https://elcomercio.pe/resizer/nqgouXT6X5s0E6FLjl3JmQly7MQ=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/G36MF5GLVJGKXAQYYBKLRDMFQM.jpg',
        imageAlt: 'SIGN SPEAK'
    },
];
export default antecedentes;

