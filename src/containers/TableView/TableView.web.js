import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from "react-router-dom";
import EnhancedTable from '../../components/Table/Table.web';
import { withRouter } from 'react-router-dom';

const TableView = ({ history }) => {
  const currentState = useSelector((state) => state);
  console.log(currentState);
  return (
    <div>
      {currentState.studentDetails ? 
        <EnhancedTable rows={currentState.studentDetails} />
      : history.push('/')}
      {currentState.studentDetails ? <div>
        <Link to={`/`}  style={{marginRight: '20px'}}>Create New Student Details</Link>
      </div> : null}
    </div>
  );
};

export default withRouter(TableView);
