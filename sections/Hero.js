import Buttons from "../components/button"

const Hero = () => {
  return (
      <div className="mt-16">
        <h1 className="text-7xl font-bold">Hi I`m <br /> <span className="dark:text-purple-600"> Mohammed Junaid</span></h1>
        <h3 className="text-4xl my-3">MERN Stack Developer</h3>
        <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia doloremque cupiditate! Quae ut aspernatur, tempora iusto illo fugiat pariatur sequi necessitatibus! Velit ea quidem, doloribus minus assumenda veritatis magni.</p>
        <Buttons
        className='bg-purple-600 text-white px-6'
        >Hire Me!</Buttons>
      </div> 
  )
}

export default Hero