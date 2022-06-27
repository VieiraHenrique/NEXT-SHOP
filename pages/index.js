import axios from "axios";
import Brands from "../components/home/Brands";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import { CMS_URL } from "../lib/variables";
import qs from "qs";

export default function HomePage({ brands, categories }) {

    return (
        <>
            <Hero />
            <Brands brands={brands} />
            {categories &&
                categories.map((category) => {
                    return <Products key={category.id} products={category.attributes.products.data} category={category.attributes.name} />;
                })}
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

    const query = qs.stringify(
        {
            populate: {
                products: {
                    populate: ["image"],
                },
            },
        },
        {
            encodedValuesOnly: true,
        }
    );

    try {
        const { data: categories } = await axios.get(CMS_URL + `/api/categories?${query}`);
        props["categories"] = categories.data;
    } catch (err) {
        console.log(err);
    }

    return {
        props,
    };
}
