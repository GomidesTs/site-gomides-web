import Link from 'next/link';

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return (
    <div className="mt-4 flex h-12 w-2/4 cursor-pointer items-center justify-center rounded bg-blue-300 text-base font-medium text-white-300 transition delay-200 ease-out hover:bg-blue-400">
      <Link href="https://wa.me/5531997390128" target="_blank">
        {text}
      </Link>
    </div>
  );
};
