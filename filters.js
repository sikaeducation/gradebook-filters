function getSubmissionsByStudent (submissions, studentId) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].studentId === studentId) {
      result.push(submissions[i]);
    }
  }
  return result;
}

// Below is a different solution using the native array method 'filter'

// function getSubmissionsByStudent(submissions, studentId){
//   return submissions.filter(submission => submission.studentId == studentId);
// }

function getPassedSubmissions(submissions) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === true) {
      result.push(submissions[i]);
    }
  }
  return result;
}

// Below is a different solution using the native array method 'filter'

// function getPassedSubmissions(submissions) {
//   return submissions.filter(submission => submission.didPass == true);
// }

function getFailedSubmissions(submissions) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === false) {
      result.push(submissions[i]);
    }
  }
  return result;
}

// Below is a different solution using the native array method 'filter'

// function getPassedSubmissions(submissions) {
//   return submissions.filter(submission => submission.didPass == false);
// }

module.exports = {
  getSubmissionsByStudent,
  getPassedSubmissions,
  getFailedSubmissions
};
