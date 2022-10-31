import Image from "next/image"
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"
import Author from "./_child/author"

import fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section3() {

    const { data, isLoading, isError } = fetcher('api/popular')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            {/* swiper */}
            <Swiper
                breakpoints={{
                    640:{
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}>
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}>
                            <Post data={value}></Post>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

function Post({data}) {

    const { id, description, title, category, img, published, author } = data;

    return (
        <div className="grid px-5">
            <div className="images">
                <Link href={`/posts/${id}`}><a><Image src={img || "/"} width={500} height={300} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600"> - {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-3xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "Unknown"}
                </p>
                {author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}
