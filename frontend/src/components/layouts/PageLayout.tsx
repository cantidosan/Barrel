
import React, { FC, ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'


interface PageProps {

    children: ReactNode

}

const PageLayout: FC<PageProps> = ({ children }) => {



    return (
        <>
            <Header />
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )


}

export default PageLayout;
