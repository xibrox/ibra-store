import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("f36b3836-08a8-4d13-977d-d3e23cbcfbca");

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}
 
export default HomePage;