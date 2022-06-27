import axios from "axios";
import Brands from "../components/home/Brands";
import Hero from "../components/home/Hero";
import { CMS_URL } from "../lib/variables";

export default function HomePage({ brands }) {
    return (
        <>
            <Hero />
            <Brands brands={brands} />
        </>
    );
}

export async function getStaticProps(context) {
    const props = {};

    try {
        const { data: brands } = await axios.get(CMS_URL + "/api/brands?populate=*");
        props["brands"] = brands;
    } catch (err) {
        console.log(err);
    }

    return {
        props,
    };
}
