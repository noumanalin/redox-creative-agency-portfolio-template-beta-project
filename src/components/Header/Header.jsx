
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'
import { ShoppingBasket } from 'lucide-react'

const Header = () => {
    return (
        <>
            {/* top notification */}
            <section aria-label="Limited Offer" className="text-sm text-gray-100 tracking-tight p-2 center-center gap-4 md:gap-7 bg-gradient-to-r from-[#F3626C] to-[#6392eb]">
                <span className=' py-1 px-2 text-[10px] font-semibold rounded-lg bg-white text-zinc-900 '>Limited Offer</span>
                <span>👋</span>
                <span>On sale for a very limited time! Redox</span>
            </section>

            <header className='bg-zinc-950 text-gray-100'>
                <section className='wrapper flex justify-between items-center py-4 border-b-[0.5px] border-b-gray-700'>
                    <Link to={'/'}>Go to Home</Link>

                    {/* Nav Links */}
                    <nav>

                    </nav>

                    {/* Nav Action Buttons */}
                    <div>
                        <MyButton initialColor="bg-white text-gray-900" flipColor="bg-orange-500" className='px-6 py-3 hover:text-white'>
                           <Link to={'/'} className='flex gap-2'> <ShoppingBasket /> Buy Now</Link>
                        </MyButton>
                    </div>


                </section>
            </header>

        </>
    )
}

export default Header