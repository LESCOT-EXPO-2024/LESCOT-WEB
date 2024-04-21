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
        imageSrc: 'https://www.tec.ac.cr/hoyeneltec/sites/default/files/media/img/main/avatar._lesco_.png',
        imageAlt: 'PIELS INCLUTEC'
    },
    {
        titulo: 'ACE-ASL',
        subtitulo: 'SignAll Technologies Inc',
        link: 'https://ace-asl-learn-fingerspelling.softonic.com/android',
        descripcion: 'Es una aplicación gratuita desarrollada por SignAl Technologies Inc., tiene el fin de enseñar la Lengua de Señas Americana (ASL). Esta consta con una parte interactiva en ella se puede practicar las la lengua con una persona sorda y una persona oyente, a través del uso de la cámara del teléfono.',
        imageSrc: 'https://images.sftcdn.net/images/t_app-icon-m/p/e2eb5825-1ae7-4bf3-a1e7-3aded6f3d895/2983533438/ace-asl-learn-fingerspelling-logo',
        imageAlt: 'ACE ASL'
    },
    {
        titulo: 'HETAH',
        subtitulo: '@fundacionhetah',
        link: 'antecedentes',
        descripcion: 'Descripcion',
        imageSrc: 'https://s3.amazonaws.com/ideame-images/resizers/47941_686_387_fill_undefined_projectImageOriginalUrl.jpeg',
        imageAlt: 'HETAH'
    },
    {
        titulo: 'Sign-Speak',
        subtitulo: '@Sign_Speak_',
        link: 'https://www.sign-speak.com/',
        descripcion: 'Descripcion',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpwvjuCiCE54hT38vXKZy3pGFD6gbNbG4W9nHmiKT_Q&s',
        imageAlt: 'SIGN SPEAK'
    },
];
export default antecedentes;

