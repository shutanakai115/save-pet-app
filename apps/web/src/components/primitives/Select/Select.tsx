import { Select as ArkSelect, createListCollection } from "@ark-ui/react";
import { css } from "$styled-system/css";

export interface SelectItem {
  label: string;
  value: string;
}

export interface SelectProps {
  items: SelectItem[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

export function Select({ items, placeholder = "Select...", onValueChange }: SelectProps) {
  const collection = createListCollection({ items });
  return (
    <ArkSelect.Root
      collection={collection}
      onValueChange={(details) => {
        if (details.value && onValueChange) {
          onValueChange(details.value[0]);
        }
      }}
    >
      <ArkSelect.Trigger
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "full",
          height: 10,
          paddingX: 4,
          border: "1px solid",
          borderColor: "secondary.300",
          borderRadius: "md",
          backgroundColor: "white",
          cursor: "pointer",
          _hover: {
            borderColor: "secondary.400",
          },
          _focus: {
            borderColor: "primary.500",
            outline: "none",
          },
        })}
      >
        <ArkSelect.ValueText placeholder={placeholder} />
        <ArkSelect.Indicator>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-label="Open select dropdown"
          >
            <title>Open select dropdown</title>
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArkSelect.Indicator>
      </ArkSelect.Trigger>

      <ArkSelect.Positioner>
        <ArkSelect.Content
          className={css({
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "secondary.200",
            borderRadius: "md",
            boxShadow: "md",
            minWidth: "8rem",
            maxHeight: "15rem",
            overflowY: "auto",
            padding: 1,
          })}
        >
          {items.map((item) => (
            <ArkSelect.Item
              key={item.value}
              item={item}
              className={css({
                display: "flex",
                alignItems: "center",
                padding: 2,
                cursor: "pointer",
                borderRadius: "sm",
                _hover: {
                  backgroundColor: "primary.50",
                },
                _highlighted: {
                  backgroundColor: "primary.100",
                },
                _selected: {
                  backgroundColor: "primary.500",
                  color: "white",
                },
              })}
            >
              <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
            </ArkSelect.Item>
          ))}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </ArkSelect.Root>
  );
}
