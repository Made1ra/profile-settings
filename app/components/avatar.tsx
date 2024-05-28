import Image from 'next/image';

export default function Avatar({
    width,
    height,
    className,
}: {
    width: number;
    height: number;
    className?: string
}) {
    return (
        <Image
            src="https://github.com/shadcn.png"
            alt="Avatar"
            width={width}
            height={height}
            className={`rounded-full object-cover ${className}`}
        />
    );
}
