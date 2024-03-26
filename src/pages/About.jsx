import Navbar from "@/components/Navbar";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />
      <header className="text-center pt-3">
        <p className="tracking-widest">Our team</p>
        <h1 className="py-5 font-[500] text-4xl tracking-widest">ANNOUNSYNC</h1>
        <p className="pt-2 tracking-widest">We're aspiring tech enthusiasts</p>
      </header>
      <main className="grid px-40 pt-20 pb-5 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="">
          <div className="flex justify-center ">
            <img
              // width={150}
              // height={150}
              className="  rounded-full w-[150px] h-[150px]"
              src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.6435-9/161606133_4579753708706753_4274815879707431603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H_DJGKlBxMcAX9GM9b7&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfA3NcOhEKhPrRwnWtsCjy6MneQ6uZmhnfjLhbmFmnaouw&oe=66225C7A"
              alt="gem"
            />
          </div>
          <div className="pt-5 text-[13.5px] text-center">
            Joshua Gem Vicente
          </div>
          <div className="pt-1 text-center italic text-[12px]">
            BSIT Student
          </div>
          <div className="flex justify-center py-5 gap-3">
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandFacebook />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandInstagram />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:pb-10">
          <div className="flex justify-center">
            <img
              // height={150}
              // width={150}
              className="rounded-full h-[150px] w-[150px]"
              src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.6435-9/159883813_2895079590739092_8284724739654231144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pp-5ZmZUk6YAX-PVVEs&_nc_oc=AdjyszD53my_33a5nNJJ2xQ4VGbOxypop5Bj5JsGh3h4USEtVPnUy9nf5NKLxvn1q-8&_nc_ht=scontent.fmnl37-2.fna&oh=00_AfCsOATPVJNhGRaQ5Tag8QLaJRAvKz0Vb1RcP2RGSNgWKQ&oe=66227643"
              alt="cris"
            />
          </div>
          <div className="text-center text-[13.5px] pt-5">
            Cristian Fernandez
          </div>
          <div className="pt-1 text-center italic text-[12px]">
            BSIT Student
          </div>
          <div className="flex justify-center py-5 gap-3">
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandFacebook />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandInstagram />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:pb-10">
          <div className="flex justify-center">
            <img
              // height={150}
              // width={150}
              className="rounded-full h-[150px] w-[150px]"
              src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/432733835_784129443640722_6733694570148811607_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ngyNuOUoQXoAX8TPejH&_nc_ht=scontent.fmnl37-2.fna&oh=00_AfDqotsioSTLALmR6czwS0Wcbc8_aFTbwG7RS7xKVJGlZg&oe=660052F0"
              alt="pola"
            />
          </div>
          <div className="text-center text-[13.5px] pt-5">Pola Marzan</div>
          <div className="pt-1 text-center italic text-[12px]">
            BSIT Student
          </div>
          <div className="flex justify-center py-5 gap-3">
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandFacebook />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandInstagram />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:pb-10">
          <div className="flex justify-center">
            <img
              // height={150}
              // width={150}
              className="rounded-full h-[150px] w-[150px]"
              src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/415759755_2985124254956469_100661375837616438_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSBnSxN0Pam-5gwdDeZvRXnFJimdHeOcKcUmKZ0d45wogArfOh5Ma1BQCdQKybFdD-pxThr6cYVJ5ASO17utGs&_nc_ohc=BEQ9WPwaiFYAX80-JZa&_nc_ht=scontent.fmnl37-2.fna&oh=00_AfD2uQyhgMt9u4nFH_oWum_hW_5Eq58kqxj29x6WBQAhew&oe=66007C57"
              alt="cris"
            />
          </div>
          <div className="text-center text-[13.5px] pt-5">Railey Murillo</div>
          <div className="pt-1 text-center italic text-[12px]">
            BSIT Student
          </div>
          <div className="flex justify-center py-5 gap-3">
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandFacebook />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandInstagram />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:pb-10">
          <div className="flex justify-center sm">
            <img
              // height={150}
              // width={150}
              className="rounded-full h-[150px] w-[150px]"
              src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.18169-9/25552286_366190087126015_9158602899386554633_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhh3hTq9SEEfKKuNeq6WXEswyftq_p5DuzDJ-2r-nkO2MZwKC4FICmH9h9L3YNau1EaPWy46xwV9QyMWlxL1eR&_nc_ohc=yvZFqxZ9hcsAX-ResIh&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfAAY4jroGZIp6gPr0BirLui5Lp3AH6d2FGxQ301ejLe4w&oe=6622CAF5"
              alt="cris"
            />
          </div>
          <div className="text-center text-[13.5px] pt-5">Daniel Dupra</div>
          <div className="pt-1 text-center italic text-[12px]">
            BSIT Student
          </div>
          <div className="flex justify-center py-5 gap-3">
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandFacebook />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandInstagram />
              </Link>
            </div>
            <div className="">
              <Link href="" passHref={true}>
                <IconBrandGithub />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className="py-5 lg:py-20 xl:py-24">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-widesm:text-4xl md:text-5xl">
              About Us
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're on a mission to empower creativity and innovation by making
              it easier to deploy web apps.
            </p>
          </div>
          <div className="mx-auto max-w-3xl grid gap-4 lg:gap-8">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                Our Mission
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                We believe in the power of the web to connect people and enable
                new experiences. Our mission is to remove the barriers to
                creativity and innovation by providing the best platform for
                deploying web apps.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                Our Values
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                - Creativity: We embrace the creative spirit in all of us and
                strive to enable new ideas to flourish.
                <br />- Innovation: We are constantly pushing the boundaries of
                what's possible on the web and driving innovation in the
                industry.
                <br />- Inclusivity: We believe the web should be open and
                accessible to all, and we work to make it a more inclusive
                space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
