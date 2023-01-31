import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from '@/models/GeneralModels';

export default function timeFormat(rawDate: string) {
  return dayjs(rawDate).format(DATE_TIME_FORMAT);
}
