import Image from 'next/image';

export default function Avatar() {
    return (
        <Image
            src="https://github.com/shadcn.png"
            alt="Avatar"
            width={144}
            height={144}
            className="w-36 h-36 rounded-full object-cover max-sm:mb-4 sm:mr-4"
        />
    );
}
