import styled from 'styled-components';

export const DetailsContainer = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
  padding: 10px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 14px;
`;

export const PaginationButton = styled.button`
  margin: 5px 5px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#333')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #007bff;
    color: #fff;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: #1abc9c;
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CustomerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const CustomerCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CustomerName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const CustomerRewards = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
  color: #3498db;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

export const DashboardHeader = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  align-items: center;

  &:hover {
    color: #1abc9c;
  }
`;

export const DashboardContent = styled.div`
  padding: 20px;
  background-color: #fff;
  flex: 1;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 24px;
    color: #3498db;
    font-weight: bold;
  }
`;

export const GraphContainer = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #333;
  }
`;

// Table styled components
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e9ecef;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f1f5f9;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
`;

export const RewardsCell = styled(TableCell)`
  font-weight: 600;
  color: #3498db;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const PageInfo = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e9ecef;
  background-color: ${props => (props.active ? '#3498db' : 'white')};
  color: ${props => (props.active ? 'white' : '#333')};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => (props.active ? '#3498db' : '#f1f5f9')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f8f9fa;
  }
`;

export const RewardsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;
