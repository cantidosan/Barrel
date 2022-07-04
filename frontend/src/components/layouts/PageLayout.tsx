
import React, { FC, ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useStateValue } from '../../state/index'


interface PageProps {

    children: ReactNode

}

const PageLayout: FC<PageProps> = ({ children }) => {

    const [{ headerState }, dispatch] = useStateValue();

    const handleClick = (value: any) => {
        console.log('value', value)
        dispatch({ type: 'headerState', payload: value });
    }

    return (
        <>
            <Header />
            {/* allows header to return to original state if clicked off */}
            <div >
                <main >
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )


}

export default PageLayout;
