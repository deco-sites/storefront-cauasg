import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Product {
  title: string;
  description?: string;
  imageSrc: string | ImageWidget;
  price: number;
}

export interface Props {
  product: Product;

  /** @format textarea */
  adDescription?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ProductAd({product, adDescription, imageWidth = 300, imageHeight = 300}: Props) {
  return (
    <section className="container border border-solid rounded border-black relative flex flex-col items-center lg:flex-row lg:justify-around">
      <Image
        src={product.imageSrc}
        alt={product.title}
        width={imageWidth}
        height={imageHeight}
        className="rounded-lg"
        />
      <button className="absolute right-2 top-2">Save</button>
      <div className="flex flex-col justify-between w-full text-center">
        <h2>{product.title}</h2>
        <p>{adDescription || product.description}</p>
        <span className="lg:self-end">$ {product.price}</span>
        <div className="flex gap-2 justify-center flex-col lg:flex-row lg:justify-end lg:self-end">
          <button>Mais detalhes</button>
          <button>Comprar</button>
        </div>
      </div>

    </section>
  )
}