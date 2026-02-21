import {
  settingsItemBadgeRecipe,
  settingsItemBodyRecipe,
  settingsItemDescriptionRecipe,
  settingsItemLabelRecipe,
  settingsItemRootRecipe,
} from "./SettingsItem.recipe";

interface SettingsItemProps {
  label: string;
  description?: string;
}

export function SettingsItem({ label, description }: SettingsItemProps) {
  return (
    <div className={settingsItemRootRecipe()}>
      <div className={settingsItemBodyRecipe()}>
        <span className={settingsItemLabelRecipe()}>{label}</span>
        {description && (
          <span className={settingsItemDescriptionRecipe()}>{description}</span>
        )}
      </div>
      <span className={settingsItemBadgeRecipe()}>準備中</span>
    </div>
  );
}
