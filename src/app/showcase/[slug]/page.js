import { caseStudiesData } from '@/component/show-case/Index'
import React from 'react'


 

const page = async ({params}) => {
    const slug = (await params).slug

    // get the data for the post
    const pageData = caseStudiesData.find((caseStudy) => caseStudy.slug === slug)
    return <div>My Post: {pageData.desc}
    
        <img src={pageData.images[0]}/>
    </div>
}

export default page
