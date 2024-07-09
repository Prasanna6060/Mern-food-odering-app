import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <img src={hero} className='object-cover max-h-[600px] w-full'/>
    </div>
  );
};

export default Hero;
