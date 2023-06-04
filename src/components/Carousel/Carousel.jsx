import s from './Carousel.module.scss'
import {useState, useEffect, Children, cloneElement} from 'react'
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa'

 const Carousel = ({children}) =>{
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const page_width = 371

    const handleLeftArrowClick = () =>{
        setOffset(currentOffset =>{
            const newOffset = currentOffset + page_width
            return newOffset
        })
        console.log('handleLeftArrowClick')
    }
    const handleRightArrowClick = () =>{
        console.log('handleRightArrowClick')

        setOffset(()=>{
            const newOffset = currentOffset - page_width
            console.log(newOffset)
            return newOffset
        })
    }

    useEffect(()=>{
        setPages(
            Children.map(children, child =>{
                return cloneElement(child,{
                    style: {
                        height:'100%',
                        minWidth: `${page_width}px`,
                        maxWidth: `${page_width}px`
                    },
                })
            })
        )
    }, [])

    return (
        <div className={s.mainContainer}>
            <FaChevronLeft className={s.arrow} onclick={handleLeftArrowClick}/>
            <div className={s.window}>
                <div className={s.allItemsContainer} style={{
                    tranform: `translateX(${offset}px)`,
                }}>{pages}</div>
            </div>
            <FaChevronRight className={s.arrow} onclick={handleRightArrowClick}/>
        </div>
    )
}

export default Carousel