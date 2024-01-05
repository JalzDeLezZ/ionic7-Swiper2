/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

export const story_adds_api_responce = [
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
      name: 'company name',
      logo: 'https://picsum.photos/150/150',
    },
  },
  {
    id: 123,
    type: 'link',
    company: {
      id: 1,
      name: 'company name',
      logo: 'https://picsum.photos/150/150',
    },
    post: {
      title: 'Nuevos Kids Super Pollo',
      subtitle: 'Nueva presentación, te invitamos a probarlos',
      navigate: 'https://www.google.com',
    }
  },
  // {
  //   id: 222,
  //   type: 'form',
  // },
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
