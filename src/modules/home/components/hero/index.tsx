import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
// absolute inset-0 z-10
const Hero = () => {
  return (
    <div className="h-[200px] w-full bg-[#e6af2e]  relative  flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center text-center small:p-4 gap-6 ">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal"
          >
            Shop all 365 days with great Deals
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            Powered up on all 365 days
          </Heading>
        </span>
        {/* <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
