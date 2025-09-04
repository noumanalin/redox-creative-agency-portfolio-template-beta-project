import { Link } from "react-router-dom"
import { MyButton } from "../MyButton"
import { ArrowRight } from "lucide-react"

import cusImage1 from '../../assets/faqs/cus-img1.jpg'
import cusImage2 from '../../assets/faqs/cus-img2.png'
import cusImage3 from '../../assets/faqs/cus-img3.png'

const dataArray = [
    { title: "Team UI/UX Designers", img: cusImage1, src: '/' },
    { title: "Team Developers", img: cusImage2, src: '/' },
    { title: "Team SEO Designers", img: cusImage3, src: '/' },
]

const OnlineDocs = () => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-3">
            {/* 1. Left Section */}
            <article className="md:flex-1/2 center-center gap-2">
                <section className="p-2 md:p-4 rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-700 text-white flex flex-col justify-between h-full w-[320px] shadow-zinc-950 shadow-md">
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="font-semibold tracking-tight text-lg">Contact</h2>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                        <h2 className="text-left text-2xl font-medium mb-4">Dedicated <br /> Team</h2>
                        <div className="flex -space-x-2">
                            {dataArray && dataArray.map((data, index) => (
                                <Link key={index} title={data.title} to={data.src} className="hover:scale-110 transition-transform duration-200">
                                    <div className="relative">
                                        <img className="w-14 h-14 rounded-full object-cover border-2 border-zinc-800" src={data.img} alt={data.title} />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-800"></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="p-3 md:p-5 rounded-3xl bg-white h-full flex flex-col justify-between gap-5">
                    <div>
                        <h1 className="text-2xl text-zinc-950"><strong>Online <br /> Documentation</strong></h1>
                        <p className="tracking-tight text-lg text-zinc-700">Nope, you can have as many requests or project goals as you want! We'll Keep</p>
                    </div>
                    <div>
                        <MyButton initialColor="bg-zinc-950 text-gray-100" flipColor="bg-orange-500" className='px-6 py-4'>
                            <Link to={'/'} className='center-center gap-2'>Learn more <ArrowRight size={20} /></Link>
                        </MyButton>
                    </div>
                </section>
            </article>
            {/* 2. Right Section */}
             <article className="md:w-1/2 p-6 flex flex-col justify-center gap-6">
                <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-tight">
                    Dedicated <br className="hidden md:block" /> <span className="text-orange-500">fast</span>  customer <br className="hidden md:block" /> support
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                   Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
                </p> 
            </article>

        </div>
    )
}

export default OnlineDocs