import I18n from '@/models/i18n';

export default function useI18n() {
  /* Data */
  const i18n = new I18n('tw');

  /* Main */
  return i18n;
}
