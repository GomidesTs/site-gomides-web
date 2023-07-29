import Image from 'next/image';

import { ServicesItems } from '@/models';

type ServicesProps = {
  items: ServicesItems;
};

export const Services = ({ items }: ServicesProps) => {
  return (
    <>
      {items.mainServices.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-start gap-2 bg-white-100 p-4"
        >
          <Image
            src={item.icon}
            width={25}
            height={25}
            alt="Picture of the author"
          />

          <h3 className="font-bold uppercase text-blue-300">{item.title}</h3>

          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </>
  );
};
