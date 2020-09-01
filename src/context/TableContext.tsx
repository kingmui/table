import * as React from 'react';
import { GetComponent } from '../interface';
import { FixedInfo } from '../utils/fixUtil';

export interface TableContextProps {
  // Table context
  prefixCls: string;

  getComponent: GetComponent;

  scrollbarSize: number;

  direction: 'ltr' | 'rtl';

  fixedInfoList: FixedInfo[];

  isSticky: boolean;

  isSummaryShowTop: boolean;
}

const TableContext = React.createContext<TableContextProps>(null);

export default TableContext;
