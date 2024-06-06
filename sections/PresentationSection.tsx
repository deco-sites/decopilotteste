import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The main title of the AI assistant section.
   */
  title?: string;
  /**
   * @description A brief description of the AI assistant.
   * @format textarea
   */
  description?: string;
  /**
   * @description An image to represent the AI assistant.
   */
  image?: ImageWidget;
  /**
   * @description The background color for the section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The text color for the section.
   * @format color-input
   */
  textColor?: string;
}

export default function AIAssistantSection({
  title = "Meet Your AI Assistant",
  description = "Our AI assistant is here to help you with all your needs. Whether you have a question or need guidance, our intelligent assistant is ready to assist you 24/7.",
  image,
  backgroundColor = "#d1e7dd",
  textColor = "#0f766e"
}: Props) {
  return (
    <section class={`bg-[${backgroundColor}] py-12`}>
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class={`text-4xl font-bold mb-4 text-[${textColor}]`}>{title}</h2>
          <p class={`text-xl text-[${textColor}]`}>{description}</p>
        </div>
        <div class="md:w-1/2">
          {image && (
            <img
              src={image}
              alt="AI Assistant"
              class="w-full rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  )
}