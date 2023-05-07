import Tooltip from './Tooltip';

import {formatDate, retry} from '../utils/commonFunctions';

import {BellIcon, BellSlashIcon, HistoryIcon} from '@primer/octicons-react';
import {useMemo, useCallback, lazy, Suspense} from 'react';
import {useTranslation} from 'react-i18next';

const Timeline = lazy(() => retry(() => import('./Timeline')));

const ActionsPanel = ({
  lastUpdatedDate,
  newUpdate,
  isTimelineMode,
  setIsTimelineMode,
  showUpdates,
  date,
  setDate,
  dates,
  setNewUpdate,
  setShowUpdates,
}) => {
  const {t} = useTranslation();

  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${500 + index * 250}ms`,
      });
      return null;
    });
    return styles;
  }, []);

  const handleTimelineClick = useCallback(() => {
    setIsTimelineMode(true);
    if (showUpdates) setShowUpdates(!showUpdates);
  }, [setIsTimelineMode, setShowUpdates, showUpdates]);

  const handleBellClick = useCallback(() => {
    if (!showUpdates) setNewUpdate(false);
    setShowUpdates(!showUpdates);
  }, [showUpdates, setShowUpdates, setNewUpdate]);

  return <div className="ActionsPanel"></div>;
};

export default ActionsPanel;
