import Button from "@/components/UI/button";

export default function MainPage() {
    return (
        <div>
            <h1>HaYoungKwon Blog</h1>

            <Button link={`/products`}>product</Button>
            <Button link={`/user`}>user</Button>
            <Button link={`/last-sales`}>last-sales</Button>
        </div>
    );
}