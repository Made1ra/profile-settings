import Image from 'next/image';

export default function Avatar() {
    return (
        <Image
            src="https://github.com/shadcn.png"
            alt="Avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover mr-2"
        />
    );
}
