import HomeClient from '@/components/HomeClient'
import Navbar from '@/components/Navbar'
import { db } from '@/db';
import { foodsTable } from '@/db/schema';
export const dynamic = 'force-dynamic'

const home = async () => {
    const foods= await db.select().from(foodsTable);
    ;
  return (
    <div className='bg-white w-full h-full'>
      <Navbar/>
      <HomeClient foods={foods}/>
    </div>
  )
}

export default home
