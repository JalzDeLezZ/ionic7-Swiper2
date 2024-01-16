/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

export const story_adds_api_responce = [

  {
    id: 222,
    type: 'form',
    company: {
      id: 1,
      name: 'Form NAME company',
      logo: 'https://picsum.photos/150/150',
    },
    form: {
      title: 'Pre-regístrate en nuestro programa La Crianza',
      subtitle: 'Nueva presentación, te invitamos a probarlos',
      navigate: 'https://www.google.com',
      fields: [
        {
          id: 1,
          type: 'text',
          label: 'Nombre',
          placeholder: 'Nombre',
          required: true,
        },
        // {
        //   id: 2,
        //   type: 'text',
        //   label: 'Apellido',
        //   placeholder: 'Apellido',
        //   required: true,
        // },
        {
          id: 3,
          type: 'email',
          label: 'Email',
          placeholder: 'Email',
          required: true,
        },
        // {
        //   id: 4,
        //   type: 'number',
        //   label: 'Telefono',
        //   placeholder: 'Telefono',
        //   required: true,
        // },
        // {
        //   id: 5,
        //   type: 'select',
        //   label: 'Departamento',
        //   placeholder: 'Departamento',
        //   required: true,
        //   options: [
        //     {
        //       id: 1,
        //       value: 'Montevideo',
        //     },
        //     {
        //       id: 2,
        //       value: 'Canelones',
        //     },
        //     {
        //       id: 3,
        //       value: 'Maldonado',
        //     },
        //   ],
        // },
        // {
        //   id: 6,
        //   type: 'checkbox',
        //   label: 'Acepto los terminos y condiciones',
        //   placeholder: 'Acepto los terminos y condiciones',
        //   required: true,
        // },
      ],
    }
  },
  {
    id: 1,
    desctiption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, voluptate, quibusdam, quia voluptas quos
      exercitationem voluptatibus quod quas doloribus quidem
      voluptatem. Quisquam voluptatum, voluptate, quibusdam, quia
      voluptas quos exercitationem voluptatibus quod quas doloribus
      quidem voluptatem.`,
    likes: 10,
    type: 'image',
    url: 'https://picsum.photos/450/800',
    company: {
      id: 1,
      name: 'Super Chicken',
      logo: 'https://picsum.photos/150/150',
    },
  },
  {
    id: 123,
    type: 'link',
    company: {
      id: 1,
      name: 'Company Second',
      logo: 'https://picsum.photos/150/150',
    },
    post: {
      title: 'Nuevos Kids Super Pollo',
      subtitle: 'Nueva presentación, te invitamos a probarlos',
      navigate: 'https://www.google.com',
    }
  },
  {
    id: 0,
    // desctiption:
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    likes: 900,
    type: 'carousel',
    images: [
      'https://picsum.photos/450/800',
      'https://picsum.photos/450/800',
      'https://picsum.photos/450/800',
      'https://picsum.photos/450/800',
    ],
    company: {
      id: 0,
      name: 'First company name',
      logo: 'https://picsum.photos/150/150',
    },
  },
  /* {
    id: 2,
    desctiption: 'This is a test string for the description of the video',
    likes: 6,
    type: 'video',
    url: 'https://exit109.com/~dnn/clips/RW20seconds_1.mp4',
    company: {
      id: 2,
      name: 'Second company name',
      logo: 'https://via.placeholder.com/150',
    }
  }, */
  {
    id: 3,
    desctiption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    likes: 900,
    type: 'image',
    url: 'https://picsum.photos/450/810',
    company: {
      id: 3,
      name: 'Third',
      logo: 'https://picsum.photos/150/150',
    },
  },
  {
    id: 4,
    desctiption:
      'Fourt ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    likes: 900,
    type: 'image',
    url: 'https://picsum.photos/450/810',
    company: {
      id: 3,
      name: 'Third',
      logo: 'https://picsum.photos/150/150',
    },
  },
  {
    id: 5,
    desctiption:
      'Five ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    likes: 900,
    type: 'image',
    url: 'https://picsum.photos/450/810',
    company: {
      id: 3,
      name: 'Third',
      logo: 'https://picsum.photos/150/150',
    },
  },
  // ! %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

];

export interface IFakeRes {
  id: number;
  desctiption: string;
  likes: number;
  type: string;
  url: string;
  company: Company;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
}
