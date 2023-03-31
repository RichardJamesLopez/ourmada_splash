import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingDots from "@/components/app/loading-dots";
import toast, { Toaster } from "react-hot-toast";

const pageTitle = "Login";
const logo = "/pixelated_boats_under-construction copy.png";
const description =
  "Ourmada ships tooling for DAOs";

export default function Login() {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const { query } = useRouter();
  const { error } = query;

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <div className="min-h-screen bg-white-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={logo} />
        <link rel="shortcut icon" type="image/x-icon" href={logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={logo} />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Elegance" />
        <meta name="twitter:creator" content="@StevenTey" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo_background"
          width={1000}
          height={1000}
          className="relative mx-auto h-128 w-auto group-hover:animate-wiggle"
          src="/pixelated_boats_under-construction.png"
        />
        <h2 className="mt-6 text-center text-6xl font-extrabold" style={{ color: "#4285f4" }}>
          Ourmada
        </h2>
        <p className="mt-2 text-center text-2xl text-black-600">
          we ship DAO tools <br /> {" "}
          <a
            className="font-medium text-grey hover:text-blue-800" 
            href="https://calendly.com/rich-daotools/chat-with-ourmada"
            rel="noreferrer"
            target="_blank"
          >
            <br /> <br /> Click here to chat with us about the future. 
          </a>
        </p>
      </div>

      
      <Toaster />
    </div>
  );
}
