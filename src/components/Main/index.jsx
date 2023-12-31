import { ButtonLink } from '../Button';

export default function Main() {
  return (
    <main className="relative bg-[url(https://cdn.shopify.com/s/files/1/0738/1409/products/subscription_6095fcca-65e3-45d7-87f0-9e7fa6cfa4a9.jpg?v=1661784005)] bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Coffee made with love
            <strong className="block font-extrabold text-orange-800">
              Baker 75 Street.
            </strong>
          </h1>
          <blockquote className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            You will taken by the power that savoring a simple
            cup of coffee can have to connect people and create community...
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <ButtonLink href="/marketplace">Buy coffee</ButtonLink>
            <ButtonLink href="/about">About us</ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
