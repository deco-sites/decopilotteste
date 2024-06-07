import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The banner title.
   */
  title?: string;
  /**
   * @description The banner description.
   * @format textarea
   */
  description?: string;
  /**
   * @description The banner background color.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The banner image.
   */
  image?: ImageWidget;
}

export default function Banner({ title = "Welcome to My Website", description = "This is a sample description for the banner component.", backgroundColor = "#4CAF50", image }: Props) {
  return (
    <div class={`py-12 px-6 bg-[${backgroundColor}]`}>
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-white mb-4">{title}</h2>
        <p class="text-white text-lg mb-8">{description}</p>
        {image && (
          <div class="flex justify-center">
            <img src={image} alt="Banner" class="w-full max-w-3xl rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}