
import  Image  from 'next/image';
import  CloudImage  from "../../public/cloud-hosting.png";
const About = () => {
  return (
    <section className='h-screen'>
      <h1 className="flex items-center justify-center text-slate-600 font-semibold ">About Page</h1>
      <Image 
      src = {CloudImage}
      alt='cloud image'
      width = {500}
      height={500}
      priority = {false}
      />
    </section>
  );
};

export default About;