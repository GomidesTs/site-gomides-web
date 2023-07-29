import { ServicesItems } from '@/models';

import Adaptation from '@/image/adaptation.svg';
import Figma from '@/image/figma.svg';
import Presence from '@/image/presence.svg';
import Target from '@/image/target.svg';

export const servicesConfig: ServicesItems = {
  mainServices: [
    {
      icon: Figma.src,
      title: 'layouts fascinantes',
      text: 'Antes de desencadearmos o poder do código, elaboramos minuciosamente o layout no Figma, proporcionando aos nossos estimados clientes a oportunidade de visualizar e testar sua futura obra-prima.'
    },
    {
      icon: Adaptation.src,
      title: 'Adaptação flexível',
      text: 'Materializamos cada projeto com visão além do desktop, adaptando-o com maestria para tablets e dispositivos móveis. Assim, seu projeto deslumbrará e funcionará perfeitamente em todas as telas.'
    },
    {
      icon: Target.src,
      title: 'Desenvolvimento',
      text: 'Nossa abordagem principal para a criação de sites consiste em utilizar código 100% puro, construído com maestria, proporcionando uma experiência incrível no projeto.'
    },
    {
      icon: Presence.src,
      title: 'presença online',
      text: 'Elevamos seu projeto ao topo e o configuramos para que esteja online assim que finalizado. Uma abordagem impecável, organizada e pronta para crescer junto com suas conquistas.'
    }
  ]
};
