import './Banner.css'

interface BannerProps {
    imageAddress: string,
    altText?: string,
}

const Banner = ( {imageAddress, altText} :BannerProps) => {
    return (
        <header className="banner">
            <img src={imageAddress} alt={altText}/>
        </header>
    )
}

export default Banner

