import * as React from 'react';
import TableContext from '../context/TableContext';
import Cell from './Cell';
import Row from './Row';

export interface FooterProps {
  children: React.ReactNode;
}

function Footer({ children }: FooterProps) {
  const { prefixCls, isSummaryShowTop } = React.useContext(TableContext);
  return isSummaryShowTop ? (
    <thead className={`${prefixCls}-thead ${prefixCls}-summary-content`}>{children}</thead>
  ) : (
    <tfoot className={`${prefixCls}-tfoot ${prefixCls}-summary-content`}>{children}</tfoot>
  );
}

export default Footer;

export const FooterComponents = {
  Cell,
  Row,
};
