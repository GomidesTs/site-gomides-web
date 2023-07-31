import { SocialItems } from '@/models';

import Instagram from '@/image/instagram.svg';
import Linkedin from '@/image/linkedin.svg';
import Site from '@/image/site.svg';
import Whatsapp from '@/image/whatsapp.svg';

export const socialConfig: SocialItems = {
  mainSocial: [
    {
      icon: Instagram.src,
      url: 'https://www.instagram.com/gomides.dev/',
      text: 'Explore meu mundo no Instagram'
    },
    {
      icon: Linkedin.src,
      url: 'https://www.linkedin.com/in/gomidests/',
      text: 'Conecte-se profissionalmente'
    },
    {
      icon: Whatsapp.src,
      url: 'https://wa.me/5531997390128',
      text: 'Entre em contato'
    },
    {
      icon: Site.src,
      url: '/',
      text: 'Descubra mais'
    }
  ]
};
