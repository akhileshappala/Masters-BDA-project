import Cell from './Cell';
import DistrictRow from './DistrictRow';
import HeaderCell from './HeaderCell';
import Tooltip from './Tooltip';

import {
  STATE_NAMES,
  STATISTIC_CONFIGS,
  UNKNOWN_DISTRICT_KEY,
} from '../constants';
import {capitalize, formatLastUpdated} from '../utils/commonFunctions';

import {
  AlertIcon,
  ClockIcon,
  SortAscIcon,
  SortDescIcon,
  FoldUpIcon,
  GraphIcon,
  InfoIcon,
} from '@primer/octicons-react';
import classnames from 'classnames';
import equal from 'fast-deep-equal';
import produce from 'immer';
import {memo, useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';
import {useSessionStorage} from 'react-use';

function Row({
  data,
  tableStatistics,
  stateCode,
  districtName,
  regionHighlighted,
  setRegionHighlighted,
  expandTable,
  getTableStatistic,
  tableWidth,
  noDistrictData,
}) {
  const [showDistricts, setShowDistricts] = useState(false);
  const [sortData, setSortData] = useSessionStorage('districtSortData', {
    sortColumn: 'confirmed',
    isAscending: false,
    delta: false,
  });

  const history = useHistory();
  const {t} = useTranslation();

  const rowElement = useRef();

  const handleSortClick = useCallback(
    (statistic) => {
      if (sortData.sortColumn !== statistic) {
        setSortData(
          produce(sortData, (draftSortData) => {
            if (
              sortData.sortColumn === 'districtName' ||
              statistic === 'districtName'
            ) {
              draftSortData.isAscending = !sortData.isAscending;
            }
            draftSortData.sortColumn = statistic;
          })
        );
      } else {
        setSortData(
          produce(sortData, (draftSortData) => {
            draftSortData.isAscending = !sortData.isAscending;
          })
        );
      }
    },
    [sortData, setSortData]
  );

  const sortingFunction = useCallback(
    (districtNameA, districtNameB) => {
      if (sortData.sortColumn !== 'districtName') {
        const statisticConfig = STATISTIC_CONFIGS[sortData.sortColumn];
        const dataType =
          sortData.delta && statisticConfig?.showDelta ? 'delta' : 'total';

        const statisticA = getTableStatistic(
          data.districts[districtNameA],
          sortData.sortColumn,
          dataType
        );
        const statisticB = getTableStatistic(
          data.districts[districtNameB],
          sortData.sortColumn,
          dataType
        );
        return sortData.isAscending
          ? statisticA - statisticB
          : statisticB - statisticA;
      } else {
        return sortData.isAscending
          ? districtNameA.localeCompare(districtNameB)
          : districtNameB.localeCompare(districtNameA);
      }
    },
    [sortData, data, getTableStatistic]
  );

  const highlightState = useCallback(() => {
    if (stateCode) {
      if (regionHighlighted.stateCode !== stateCode) {
        setRegionHighlighted(
          produce(regionHighlighted, (draftRegionHighlighted) => {
            draftRegionHighlighted.stateCode = stateCode;
            draftRegionHighlighted.districtName = null;
          })
        );
      }
    } else if (districtName) {
      if (
        regionHighlighted.districtName !== districtName ||
        regionHighlighted.stateCode !== data.stateCode
      ) {
        setRegionHighlighted(
          produce(regionHighlighted, (draftRegionHighlighted) => {
            draftRegionHighlighted.stateCode = data.stateCode;
            draftRegionHighlighted.districtName = districtName;
          })
        );
      }
    }
  }, [
    data.stateCode,
    districtName,
    regionHighlighted,
    setRegionHighlighted,
    stateCode,
  ]);

  const _setShowDistrict = useCallback(() => {
    if (data.districts) {
      setShowDistricts(!showDistricts);
    }
  }, [showDistricts, data]);

  let districtNameStr = t(districtName);
  if (districtName === UNKNOWN_DISTRICT_KEY) {
    districtNameStr = `${t(UNKNOWN_DISTRICT_KEY)} [${t(
      STATE_NAMES[data.stateCode]
    )}]`;
  }

  const handleStatePageClick = useCallback(
    (stateCode) => {
      history.push(`state/${stateCode}`);
    },
    [history]
  );

  const handleCollapse = useCallback(() => {
    setShowDistricts(false);
    rowElement.current.scrollIntoView({
      block: 'start',
    });
  }, []);

  return (
    <>
      <div
        className={classnames(
          'row',
          {'is-total': stateCode === 'TT'},
          {
            'is-highlighted':
              (stateCode && regionHighlighted?.stateCode === stateCode) ||
              (districtName &&
                regionHighlighted?.districtName === districtName &&
                regionHighlighted?.stateCode === data.stateCode),
          }
        )}
        onMouseEnter={highlightState}
        onClick={_setShowDistrict}
        ref={rowElement}
      >
        <div className="cell">
          <div className="state-name fadeInUp">
            {t(STATE_NAMES[stateCode]) || districtNameStr}
          </div>
          {data?.meta?.notes && (
            <Tooltip message={data.meta.notes}>
              <InfoIcon size={16} />
            </Tooltip>
          )}
        </div>

        {tableStatistics.map((statistic) => (
          <Cell
            key={statistic}
            noDistrictData={
              !stateCode &&
              districtName !== UNKNOWN_DISTRICT_KEY &&
              noDistrictData
            }
            {...{
              data,
              statistic,
              getTableStatistic,
            }}
          />
        ))}
      </div>

      {showDistricts && (
        <>
          <div className="state-meta" style={{width: tableWidth}}>
            <div className="state-meta-top"></div>
          </div>

          <div className={classnames('row', 'heading')}>
            <div
              className="cell heading"
              onClick={handleSortClick.bind(this, 'districtName')}
            >
              <div className="district-name">{t('District')}</div>
              {sortData.sortColumn === 'districtName' && (
                <div className={'sort-icon'}>
                  {sortData.isAscending ? (
                    <SortAscIcon size={12} />
                  ) : (
                    <SortDescIcon size={12} />
                  )}
                </div>
              )}
            </div>

            {tableStatistics.map((statistic) => (
              <HeaderCell
                key={statistic}
                {...{statistic, sortData, setSortData}}
                handleSort={handleSortClick.bind(this, statistic)}
              />
            ))}
          </div>
        </>
      )}

      {showDistricts &&
        Object.keys(data.districts || {})
          .sort((a, b) => sortingFunction(a, b))
          .map((districtName) => (
            <DistrictRow
              data={data.districts[districtName]}
              key={districtName}
              noDistrictData={
                districtName !== UNKNOWN_DISTRICT_KEY && noDistrictData
              }
              {...{
                tableStatistics,
                districtName,
                regionHighlighted,
                setRegionHighlighted,
                stateCode,
                expandTable,
                getTableStatistic,
              }}
            />
          ))}

      {showDistricts && (
        <div className="spacer-row" style={{width: tableWidth}}>
          <div className="spacer">
            <p>{`End of ${t(STATE_NAMES[stateCode])}'s districts`}</p>
            <div className="fold" onClick={handleCollapse}>
              <FoldUpIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const isEqual = (prevProps, currProps) => {
  if (!equal(prevProps.data?.total, currProps.data?.total)) {
    return false;
  } else if (!equal(prevProps.data?.delta, currProps.data?.delta)) {
    return false;
  } else if (
    (!equal(
      prevProps.regionHighlighted.stateCode,
      currProps.regionHighlighted.stateCode
    ) &&
      equal(prevProps.regionHighlighted.stateCode, prevProps.stateCode)) ||
    equal(currProps.regionHighlighted.stateCode, currProps.stateCode)
  ) {
    return false;
  } else if (
    (!equal(
      prevProps.regionHighlighted.districtName,
      currProps.regionHighlighted.districtName
    ) &&
      equal(
        prevProps.regionHighlighted.districtName,
        prevProps.districtName
      )) ||
    equal(currProps.regionHighlighted.districtName, currProps.districtName)
  ) {
    return false;
  } else if (!equal(prevProps.expandTable, currProps.expandTable)) {
    return false;
  } else if (!equal(prevProps.noDistrictData, currProps.noDistrictData)) {
    return false;
  } else if (!equal(prevProps.tableWidth, currProps.tableWidth)) {
    return false;
  } else if (!equal(prevProps.getTableStatistic, currProps.getTableStatistic)) {
    return false;
  } else if (!equal(prevProps.tableStatistics, currProps.tableStatistics)) {
    return false;
  } else return true;
};

export default memo(Row, isEqual);
