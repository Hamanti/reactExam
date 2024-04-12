import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";
import { popular } from "../data";

export default function HomePage() {
    return (
        <>
            <div className="hello">
                <h1>Home Page</h1>
                <h2>This is the home page on the site</h2>
            </div>
            
            <div className="popular">
                <Slider></Slider>
            </div>
        </>
    )
}