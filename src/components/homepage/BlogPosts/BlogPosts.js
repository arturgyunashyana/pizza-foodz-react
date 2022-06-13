import React, { useState } from "react"
import './blogposts.scss'
import BlogPostImgOne from "../../../assets/images/blogpostimgone.jpg"
import BlogPostImgSecond from "../../../assets/images/blogpostimgsecond.jpg"
import BlogPostImgThree from "../../../assets/images/blogpostimgthree.jpg"

export default function BlogPosts() {

    const [post, setPost] = useState([
        {
            id: 1,
            img: BlogPostImgOne,
            address: 'APRIL 1, 2019',
            asd: 'in',
            link: 'UNCATEGORIZED',
            paragraph: 'Few quips galvanized the mock jury box',
            text: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.',
            submit: 'Continue Reading'
        },
        {
            id: 2,
            img: BlogPostImgSecond,
            address: 'APRIL 1, 2019',
            asd: 'in',
            link: 'UNCATEGORIZED',
            paragraph: 'A quick movement of the enemy will jeopardize six gunboats',
            text: 'My faxed joke won a pager in the cable TV quiz show.',
            submit: 'Continue Reading'
        },
        {
            id: 3,
            img: BlogPostImgThree,
            address: 'APRIL 1, 2019',
            asd: 'in',
            link: 'UNCATEGORIZED',
            paragraph: 'Brawny gods just flocked up to quiz and vex him',
            text: 'The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.',
            submit: 'Continue Reading'
        },
    ])

    return (
        <>
            <div className="BlogPosts">
                <div className="BlogPosts__container">
                    <h1 className="BlogPosts__title">
                        BLOG POSTS
                    </h1>
                    <div className="BlogPosts__info">
                        {post.map(item => {
                            return (
                                <div className="BlogPosts__content">
                                    <div className="content">
                                        <img
                                            className="content__image"
                                            src={item.img}
                                        />
                                    </div>

                                    <div className="content__item">
                                        <div className="content__address">
                                            <span className="address-link">
                                                {item.address}
                                            </span>
                                            <div className="content__user">
                                                <span className="user">{item.asd}</span>
                                                <a href="#" className="content__link">
                                                    {item.link}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="content__section">
                                            <p className="content__paragraphLink">
                                                {item.paragraph}
                                            </p>
                                        </div>

                                        <p className="content__text">
                                            {item.text}
                                        </p>
                                        <div className="content__find">
                                            <a href="#" className="content__findLink">
                                                {item.submit}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
