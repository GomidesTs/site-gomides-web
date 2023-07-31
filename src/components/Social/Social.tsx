import Image from 'next/image';
import Link from 'next/link';

import { SocialItems } from '@/models';

type SocialProps = {
  items: SocialItems;
};

export const Social = ({ items }: SocialProps) => {
  return (
    <div>
      {items.mainSocial.map((item) => (
        <Link
          href={item.url}
          target="_blank"
          key={item.text}
          className="group mt-5 flex max-h-20 items-center gap-4 overflow-hidden rounded-lg bg-gray-300 text-white-100 transition-all duration-300 ease-linear hover:bg-gray-500"
        >
          <div className="relative flex h-24 w-20 items-center justify-center bg-blue-300 p-2 transition-all duration-300 ease-linear group-hover:bg-blue-500">
            <Image
              src={item.icon}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
          {item.text}
        </Link>
      ))}
    </div>
  );
};
