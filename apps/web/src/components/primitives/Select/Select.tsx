"use client";

import { Field } from "@base-ui/react/field";
import { Select as BaseSelect } from "@base-ui/react/select";

import {
  selectFieldRootClass,
  selectIconClass,
  selectItemClass,
  selectItemIndicatorClass,
  selectLabelClass,
  selectListClass,
  selectPopupClass,
  selectPositionerClass,
  selectTriggerClass,
  selectValueClass,
} from "./Select.recipe";

export interface SelectItem {
  label: string;
  value: string;
}

export interface SelectProps {
  items: SelectItem[];
  label?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

export function Select({ items, label, placeholder = "Select...", onValueChange }: SelectProps) {
  return (
    <Field.Root className={selectFieldRootClass}>
      {label && (
        <Field.Label nativeLabel={false} render={<div />} className={selectLabelClass}>
          {label}
        </Field.Label>
      )}

      <BaseSelect.Root
        items={items}
        onValueChange={(nextValue) => {
          if (nextValue != null && onValueChange) {
            onValueChange(String(nextValue));
          }
        }}
      >
        <BaseSelect.Trigger className={selectTriggerClass}>
          <BaseSelect.Value placeholder={placeholder} className={selectValueClass} />
          <BaseSelect.Icon className={selectIconClass}>
            <ChevronIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>

        <BaseSelect.Portal>
          <BaseSelect.Positioner
            sideOffset={8}
            alignItemWithTrigger={false}
            className={selectPositionerClass}
          >
            <BaseSelect.Popup className={selectPopupClass}>
              <BaseSelect.List className={selectListClass}>
                {items.map((item) => (
                  <BaseSelect.Item key={item.value} value={item.value} className={selectItemClass}>
                    <BaseSelect.ItemIndicator className={selectItemIndicatorClass}>
                      <CheckIcon />
                    </BaseSelect.ItemIndicator>
                    <BaseSelect.ItemText>{item.label}</BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </Field.Root>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
