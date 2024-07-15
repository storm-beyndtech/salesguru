import mapIMG from '../assets/map.svg'

export default function Map() {
  return (
    <section>
      <div className='w-full py-20 bg-gray-900'>
        <img src={mapIMG} alt='map' className='w-full'/>
      </div>
    </section>
  )
}
