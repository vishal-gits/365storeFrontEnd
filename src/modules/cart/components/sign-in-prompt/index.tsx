import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="text-[#e6af2e] flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge text-ui-fg-on-color">
          Already have an account?
        </Heading>
        <Text className="txt-medium text-ui-fg-on-color mt-2">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10">
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
