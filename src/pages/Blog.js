import React from 'react'
import MainLayout from '../layout/MainLayout'

function Blog() {
    return (
        <div>
            <MainLayout>
                <div>Blog Page</div>
            </MainLayout>
            <iframe width="1058" height="595" src="https://www.youtube.com/embed/QyrDgEz3DR0" title="The Emperors New Groove: Oh Yeah It&#39;s All Coming Together" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="1058" height="595" src="https://www.youtube.com/embed/oNBu7cWhD9s" title="Emperor&#39;s New Groove- Dinner scene HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
    )
}

export default Blog