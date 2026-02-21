import { SectionHeader } from "@/components/primitives";

import { SubPageLayout } from "../_layout";
import { settingsContainerRecipe, settingsSectionRecipe } from "./settings.recipe";
import { SettingsItem } from "./SettingsItem/SettingsItem";

export default function SettingsPage() {
  return (
    <SubPageLayout title="設定">
      <div className={settingsContainerRecipe()}>

        <section>
          <SectionHeader title="表示" />
          <div className={settingsSectionRecipe()}>
            <SettingsItem label="テーマ" />
            <SettingsItem label="通貨・単位" />
          </div>
        </section>

        <section>
          <SectionHeader title="通知" />
          <div className={settingsSectionRecipe()}>
            <SettingsItem label="リマインダー" />
          </div>
        </section>

        <section>
          <SectionHeader title="データ" />
          <div className={settingsSectionRecipe()}>
            <SettingsItem label="エクスポート" />
            <SettingsItem label="リセット" description="すべてのデータを削除" />
          </div>
        </section>

        <section>
          <SectionHeader title="アプリ情報" />
          <div className={settingsSectionRecipe()}>
            <SettingsItem label="バージョン" description="0.1.0" />
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
