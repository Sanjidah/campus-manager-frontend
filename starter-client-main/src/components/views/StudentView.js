const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus.name}</h3>
      <h3>{student.email}</h3>
      <h3>{student.gpa}</h3>
    </div>
  );

};

export default StudentView;