import { Select } from "./primitives";
import { css } from "$styled-system/css";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const countries = [
  { label: "United States", value: "us" },
  { label: "Japan", value: "jp" },
  { label: "Germany", value: "de" },
];

export function SelectDemo() {
  return (
    <div className={css({ padding: 8, backgroundColor: "secondary.50", borderRadius: "lg" })}>
      <h3 className={css({ fontSize: "lg", fontWeight: "semibold", marginBottom: 6 })}>
        Select Primitive コンポーネント (ArkUI - Minimal)
      </h3>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 4,
        })}
      >
        <div>
          <p className={css({ fontSize: "sm", fontWeight: "medium", marginBottom: 2 })}>Fruits</p>
          <Select
            items={fruits}
            placeholder="Select a fruit"
            onValueChange={(value) => console.log("Fruit selected:", value)}
          />
        </div>

        <div>
          <p className={css({ fontSize: "sm", fontWeight: "medium", marginBottom: 2 })}>
            Countries
          </p>
          <Select
            items={countries}
            placeholder="Select a country"
            onValueChange={(value) => console.log("Country selected:", value)}
          />
        </div>
      </div>

      <div
        className={css({
          marginTop: 4,
          padding: 4,
          backgroundColor: "white",
          borderRadius: "md",
          fontSize: "xs",
          color: "secondary.600",
        })}
      >
        <strong>Minimal Select:</strong> ArkUI + PandaCSS, basic functionality only.
        <br />
        Check console for selection callbacks.
      </div>
    </div>
  );
}
