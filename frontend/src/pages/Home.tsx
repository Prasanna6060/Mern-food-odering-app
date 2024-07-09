import landingImage from '../assets/landing.png';
import appDownloadImage from '../assets/appDownload.png';

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 text-center -mt-16 gap-5">
             <h1 className="font-bold text-5xl text-orange-600 tracking-tight">
                Tuck into the take away
             </h1>
             <span className="text-xl">Food is just a click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
           <img src={landingImage} />
           <div className='flex flex-col items-center justify-center text-center gap-4'>
            <span className='font-bold text-3xl tracking-tighter'>
              Order take away even faster</span>
              <span>Download the MernEats App for faster odering and personalized 
                recommendentions
              </span>
              <img src={appDownloadImage}  />
           </div>
        </div>

    </div>
  )
}

export default Home;