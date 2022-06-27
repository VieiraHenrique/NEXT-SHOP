export default function Brands({ brands }) {
    return (
        <div className="brands">
            <div className="wrapper">
                {brands &&
                    brands.data.map((brand) => {
                        return <img key={brand.id} src={brand.attributes.logo.data.attributes.url || brand.attributes.logo.data.attributes.formats.thumbnail.url} alt={brand.attributes.name} />;
                    })}
            </div>
        </div>
    );
}
