import * as React from "react";

import { SubPageLayout } from "../_layout";
import { HistoryContent } from "./HistoryContent";

const ViewTransitionComponent =
  (
    React as typeof React & {
      ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).ViewTransition ??
  (
    React as typeof React & {
      unstable_ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).unstable_ViewTransition;

export default function HistoryPage() {
  const content = <HistoryContent />;

  return (
    <SubPageLayout title="履歴">
      {ViewTransitionComponent ? (
        <ViewTransitionComponent name="records-panel" share="shared-panel">
          {content}
        </ViewTransitionComponent>
      ) : (
        content
      )}
    </SubPageLayout>
  );
}
