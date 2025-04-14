import Image from 'next/image';


interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="bg-white border-gray-200 border-1 rounded-lg ">
      <Image src={imageUrl} alt={title} width={500} height={192} className="w-full p-8 object-cover object-center" />
      <hr className='border-gray-200' />
      <div className="md:p-8 max-h-62 h-full w-full flex flex-col justify-between ">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md w-fit font-semibold px-6 py-2 text-white bg-blue-500">
          Ver projeto
        </a>
      </div>
    </div>
  );
}