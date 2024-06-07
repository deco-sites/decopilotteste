import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The main title text.
   */
  title?: string;
  /**
   * @description The subtitle text.
   */
  subtitle?: string;
  /**
   * @description The background image for the banner.
   */
  backgroundImage?: ImageWidget;
  /**
   * @description The text content for the banner.
   * @format textarea
   */
  content?: string;
  /**
   * @description The text for the call-to-action button.
   */
  buttonText?: string;
  /**
   * @description The URL for the call-to-action button.
   */
  buttonUrl?: string;
}

export default function SoccerBanner({
  title = "Experience the Thrill of Soccer",
  subtitle = "Discover the Latest News, Matches, and More",
  backgroundImage,
  content = "Stay up-to-date with the exciting world of soccer. From live matches to in-depth analysis, we've got you covered. Join our passionate community of soccer enthusiasts today!",
  buttonText = "Explore Now",
  buttonUrl = "/soccer",
}: Props) {
  return (
    <section
      class="relative bg-cover bg-center py-20"
      style={`background-image: url(${backgroundImage})`}
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="container mx-auto relative z-10 text-white text-center">
        <h2 class="text-4xl font-bold mb-4">{title}</h2>
        <p class="text-xl mb-8">{subtitle}</p>
        <p class="mb-8">{content}</p>
        <a
          href={buttonUrl}
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}