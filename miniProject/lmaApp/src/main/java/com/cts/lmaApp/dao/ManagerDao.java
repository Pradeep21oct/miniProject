package com.cts.lmaApp.dao;

public class ManagerDao {

   /* private static final String PENDING_SQL="select * from Employee  e inner join LEAVE_HISTORY h on e.emp_id=h.emp_id  where e.emp_mng_id=?";


    @Autowired
    private JdbcTemplate jdbcTemplate;

    List<ManagerDashboard> findAllPendingLeavsById(int empId) {
       return jdbcTemplate.query(PENDING_SQL, new Object[]{empId},
               (rs,rowNum)->{
                    MangerResultSetExtractor extractor=new MangerResultSetExtractor();
                    return extractor.extractData(rs);
                });
    }

    public class MangerResultSetExtractor implements ResultSetExtractor {

        public Object extractData(ResultSet rs) throws SQLException,
                DataAccessException {
            ManagerDashboard managerDashboard=new ManagerDashboard();
            UserDetails userDetails=new UserDetails();

            userDetails.setEmpId(rs.getBigDecimal("EMP_ID").toBigInteger());
            userDetails.setName(rs.getString("EMP_NAME"));
            userDetails.setBalanceLeave(BigInteger.valueOf(rs.getInt("LEAVE_BALANCE")));
            managerDashboard.setUserDetails(userDetails);
            List<LeaveHistory> list = managerDashboard.getLeaves();
            if(list == null){
                list = new ArrayList<>();
            }
            LeaveHistory leaveHistory = new LeaveHistory();
            leaveHistory.setFundId(rs.getInt(3));
            fund.setName(rs.getString(4));
            fund.setPrice(rs.getBigDecimal(5));
            fund.setQuanity(rs.getInt(6));
            list.add(fund);
            portfolio.setFunds(list);
            return portfolio;
        }

    }
    }*/
}
