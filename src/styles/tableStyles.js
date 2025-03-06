import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #007bff;
  color: #fff;
  padding: 12px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
