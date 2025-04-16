import Image from 'next/image';


interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="bg-white  rounded-lg ">
      <div className='p-8 border-gray-200 border-1 border-b-0'>
        <Image src={imageUrl} alt={title} width={500} height={192} className="  w-full h-auto object-cover object-center" />
      </div>
      <hr className='border-gray-200' />
      <div className="bg-white p-4 md:p-8 h-auto md:h-auto w-full flex flex-col justify-between border-gray-200 border-1 border-t-0 ">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div className='pt-8'>
          <a href={link} target="_blank" rel="noopener noreferrer"
            className=" inline-block rounded-md w-fit font-semibold px-6 py-2 text-white bg-blue-500">
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  );
}