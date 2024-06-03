import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type {ForcedError} from "../../loaders/generateError.ts";
import type { CTA } from "../Content/CallToAction.tsx";
// import { AppContext } from "../../apps/site.ts";

interface Product {
  title: string;
  description?: string;
  imageSrc?: string | ImageWidget;
  price: number;
}

export interface Props {
  product: Product;

  /** @format textarea */
  adDescription?: string;
  imageWidth?: number;
  imageHeight?: number;
  buttons?: CTA[];
  forcedError?: ForcedError | null;
}

export function ErrorFallback({error}: {error?: Error}) {
  return (
    <ProductAd 
      adDescription="This is a fallback product, but the shirt is still beautiful :)" 
      product={
        {
          title: "Shirt with flowers", 
          price: 16, 
          description: error?.message, 
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4THbb81iDcJEwgQkqOQOTJGMUlDOyTCfjw&s'
        }
      } 
      imageHeight={300} 
      imageWidth={300} 
      buttons={
        [
          {
            text: "para saber mais",
            href: "/culturas",
            variant: "Normal"
          }
        ]
      }
      />
    );
  
}

// export const loader = (props: Props, req: Request, ctx: AppContext) => {
//   if (!props.product.imageSrc) {
//     return {
//       product: {
//         title: "Loading...",
//         description: "Loading...",
//         imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_8xuBVttgoIei52J4NiD6ve1Q0nB588Fvg&s',
//         price: 0
//       },
//       adDescription: "Loading...",

//      }
//   }
// }

export default function ProductAd({product, adDescription, imageWidth = 300, imageHeight = 300, forcedError, buttons}: Props) {
  return (
    <section className="container border border-solid rounded border-black relative flex flex-col items-center p-2 lg:flex-row lg:justify-around lg:p-3 lg:gap-3">
      {forcedError}
      <Image
        src={product.imageSrc}
        alt={product.title}
        width={imageWidth}
        height={imageHeight}
        className="rounded-lg"
        />
      <button className="absolute right-2 top-2">Save</button>
      <div className="flex flex-col justify-between w-full text-center lg:text-left">
        <h2>{product.title}</h2>
        <p>{adDescription || product.description}</p>
        <span className="lg:self-end">$ {product.price}</span>
        <div className="flex gap-2 justify-center flex-col lg:flex-row lg:justify-end lg:self-end">
          {buttons?.map((button) => (
            <button><a href={button.href}>{button.text}</a></button>
          ))}
          {/* <button>Mais detalhes</button>
          <button>Comprar</button> */}
        </div>
      </div>

    </section>
  )
}