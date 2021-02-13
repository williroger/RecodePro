import Image from 'next/image';


export default function BabyYoda() {
    return (
        <div>
            <Image
                src="/yoda.gif"
                alt="yoda"
                width={500}
                height={300}
                priority="true"
            />
        </div>
    )
}