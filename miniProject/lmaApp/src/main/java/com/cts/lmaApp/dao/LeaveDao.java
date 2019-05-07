package com.cts.lmaApp.dao;

import com.cts.lmaApp.domain.LeaveHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.sql.*;
import java.time.LocalDate;
import java.util.List;

@Repository
public class LeaveDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<LeaveHistory> findLeaveByEmpId(BigInteger empId){
        return jdbcTemplate
                .query("SELECT * FROM LEAVE_HISTORY WHERE EMP_ID = ?",new Object[]{empId}, new LeaveRowMapper() );

    }
    public LeaveHistory findLeaveById(int leaveId){
        return jdbcTemplate
                .queryForObject("SELECT * FROM LEAVE_HISTORY WHERE LEAVE_ID = ?",new Object[]{leaveId}, new LeaveRowMapper() );
    }

    public  LeaveHistory applyLeave(LeaveHistory leave){
        String sql=" insert into LEAVE_HISTORY(NUMBER_OF_DAYS,START_DATE,END_DATE,LEAVE_STATUS,APPLIED_ON,MANAGER_COMMENTS,EMP_ID,REASONS,LEAVE_TYPE)\n" +
                "    values(?,?,?,?,?,?,?,?,?)";
        KeyHolder holder=new GeneratedKeyHolder();
        jdbcTemplate.update(con->{
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, leave.getNoOfDays());
            ps.setDate(2, new java.sql.Date(leave.getStartDate().getTime()));
            ps.setDate(3,new java.sql.Date(leave.getEndDate().getTime()));
            ps.setString(4, "PENDING");
            ps.setDate(5, java.sql.Date.valueOf(LocalDate.now()));
            ps.setString(6,  leave.getManagerComments());
            ps.setLong(7, leave.getEmpId().longValue());
            ps.setString(8,  leave.getReason());
            ps.setString(9,  leave.getLeaveType());
            return ps;
        },holder);
        int newLeaveId = holder.getKey().intValue();
        leave.setLeaveId(newLeaveId);

       return leave;
    }
}




 class LeaveRowMapper implements RowMapper<LeaveHistory>{

     @Nullable
     @Override
     public LeaveHistory mapRow(ResultSet rs, int rowNum) throws SQLException {
         LeaveHistory leaveHistory=new LeaveHistory();
         leaveHistory.setLeaveId(rs.getInt("LEAVE_ID"));
         leaveHistory.setNoOfDays(rs.getInt("NUMBER_OF_DAYS"));
         leaveHistory.setStartDate(rs.getDate("START_DATE"));
         leaveHistory.setEndDate(rs.getDate("END_DATE"));
         leaveHistory.setLeaveStatus(rs.getString("LEAVE_STATUS"));
         leaveHistory.setAppliedOn(rs.getDate("APPLIED_ON"));
         leaveHistory.setManagerComments(rs.getString("MANAGER_COMMENTS"));
         leaveHistory.setReason(rs.getString("REASONS"));
         leaveHistory.setLeaveType(rs.getString("LEAVE_TYPE"));
         leaveHistory.setEmpId(rs.getBigDecimal("EMP_ID").toBigInteger());
         return leaveHistory;
     }
 }