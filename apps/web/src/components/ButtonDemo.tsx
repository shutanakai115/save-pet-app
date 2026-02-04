import { css } from "../../styled-system/css";
import { Button } from "./primitives";

export function ButtonDemo() {
  return (
    <div className={css({ padding: 8, backgroundColor: "secondary.50", borderRadius: "lg" })}>
      <h3 className={css({ fontSize: "lg", fontWeight: "semibold", marginBottom: 6 })}>
        Button Primitive コンポーネント
      </h3>

      {/* Variants */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 4 })}>Variants</h4>
        <div className={css({ display: "flex", gap: 4, flexWrap: "wrap" })}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 4 })}>Sizes</h4>
        <div className={css({ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" })}>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* States */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 4 })}>States</h4>
        <div className={css({ display: "flex", gap: 4, flexWrap: "wrap" })}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      {/* With Sections */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 4 })}>
          With Icons/Sections
        </h4>
        <div className={css({ display: "flex", gap: 4, flexWrap: "wrap" })}>
          <Button leftSection={<span className={css({ fontSize: "sm" })}>📧</span>}>
            Send Email
          </Button>
          <Button
            rightSection={<span className={css({ fontSize: "sm" })}>→</span>}
            variant="outline"
          >
            Next Step
          </Button>
          <Button
            leftSection={<span className={css({ fontSize: "sm" })}>⚙️</span>}
            rightSection={<span className={css({ fontSize: "sm" })}>▼</span>}
            variant="secondary"
          >
            Settings
          </Button>
        </div>
      </div>

      {/* Full Width */}
      <div>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 4 })}>
          Full Width
        </h4>
        <Button fullWidth variant="primary" size="lg">
          Full Width Button
        </Button>
      </div>

      {/* API Example */}
      <div
        className={css({
          marginTop: 6,
          padding: 4,
          backgroundColor: "white",
          borderRadius: "md",
          border: "1px solid",
          borderColor: "secondary.200",
        })}
      >
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 2 })}>
          Mantine-like API
        </h4>
        <pre
          className={css({
            fontSize: "xs",
            fontFamily: "mono",
            color: "secondary.700",
            whiteSpace: "pre-wrap",
          })}
        >
          {`<Button variant="primary" size="md">
  Primary Button
</Button>

<Button 
  variant="outline" 
  size="lg"
  leftSection={<Icon />}
  loading={isLoading}
  fullWidth
>
  Submit Form
</Button>`}
        </pre>
      </div>
    </div>
  );
}
