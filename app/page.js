import Carousel from '@/components/Carousel'
import Products from '@/components/Products'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Email from '@/components/Email'

export default function Home() {
  return (
    <div>
      <Carousel />
      <Products />
      <Stats />
      <Services />
      <Email />
    </div>
  )
}
