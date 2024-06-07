
import { ImageWidget } from 'apps/admin/widgets.ts';

interface BannerProps {
  /**
   * @widget ImageWidget
   */
  image?: ImageWidget;

  /**
   * @widget ImageWidget
   */
  secondImage?: ImageWidget;

  /**
   * @widget ImageWidget
   */
  thirdImage?: ImageWidget;

  /**
   * @format rich-text
   * @description The main title of the banner.
   */
  title?: string;

  /**
   * @format textarea
   * @description The description or subtitle of the banner.
   */
  description?: string;

  /**
   * @format color-input
   * @description The background color of the banner.
   * @default #ffffff
   */
  backgroundColor?: string;

  /**
   * @format color-input
   * @description The text color of the banner.
   * @default #000000
   */
  textColor?: string;
}

export default function Banner({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  secondImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  thirdImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  title = "Welcome to My Blog",
  description = "Discover insightful articles and engaging content.",
  backgroundColor = "#ffffff",
  textColor = "#000000",
}: BannerProps) {
  return (
    <div
      class={`flex flex-col items-center justify-center p-8 bg-[${backgroundColor}] text-[${textColor}]`}
    >
      <img src={image} alt="Banner Image" class="w-full max-w-4xl mb-8" />
      <h1 class="text-4xl font-bold mb-4">{title}</h1>
      <p class="text-lg mb-8">{description}</p>
      <div class="flex justify-center mb-8">
        <img src={secondImage} alt="Second Image" class="w-1/3 mr-4" />
        <img src={thirdImage} alt="Third Image" class="w-1/3" />
      </div>
    </div>
  );
}
