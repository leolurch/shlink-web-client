import { FC } from 'react';
import { OrderingDropdown } from '../utils/OrderingDropdown';
import { SHORT_URLS_ORDERABLE_FIELDS } from '../short-urls/data';
import { SimpleCard } from '../utils/SimpleCard';
import { LabeledFormGroup } from '../utils/forms/LabeledFormGroup';
import { DEFAULT_SHORT_URLS_ORDERING, Settings, ShortUrlsListSettings as ShortUrlsSettings } from './reducers/settings';

interface ShortUrlsListSettingsProps {
  settings: Settings;
  setShortUrlsListSettings: (settings: ShortUrlsSettings) => void;
}

export const ShortUrlsListSettings: FC<ShortUrlsListSettingsProps> = (
  { settings: { shortUrlsList }, setShortUrlsListSettings },
) => (
  <SimpleCard title="Short URLs list" className="h-100">
    <LabeledFormGroup noMargin label="Default ordering for short URLs list:">
      <OrderingDropdown
        items={SHORT_URLS_ORDERABLE_FIELDS}
        order={shortUrlsList?.defaultOrdering ?? DEFAULT_SHORT_URLS_ORDERING}
        onChange={(field, dir) => setShortUrlsListSettings({ defaultOrdering: { field, dir } })}
      />
    </LabeledFormGroup>
  </SimpleCard>
);
