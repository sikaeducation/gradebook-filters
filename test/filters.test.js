const assert = require('chai').assert;
const filters = require('../filters');

describe('Filters', () => {
  describe('#getSubmissionsByStudent()', () => {
    it('returns an empty array if no student matches', () => {
      const submissions = [{
        studentId: 1
      }, {
        studentId: 1
      }, {
        studentId: 2
      }];
      assert.deepEqual(filters.getSubmissionsByStudent(submissions, 3), []);
    });
    it('returns an array of submissions based on the student', () => {
      const submissions = [{
        studentId: 1
      }, {
        studentId: 1
      }, {
        studentId: 2
      }];
      assert.deepEqual(filters.getSubmissionsByStudent(submissions, 1), [{
        studentId: 1
      }, {
        studentId: 1
      }]);
    });
  });
  describe('#getPassedSubmissions()', () => {
    it('returns an array of passed submissions based on the student', () => {
      const submissions = [{
        studentId: 1,
        didPass: true
      }, {
        studentId: 1,
        didPass: false
      }, {
        studentId: 2,
        didPass: true
      }];
      assert.deepEqual(filters.getPassedSubmissions(submissions), [{
        studentId: 1,
        didPass: true
      }, {
        studentId: 2,
        didPass: true
      }]);
    });
  });
  describe('#getFailedAssessments()', () => {
    it('returns an array of failed submissions based on the student', () => {
      const submissions = [{
        studentId: 1,
        didPass: true
      }, {
        studentId: 1,
        didPass: false
      }, {
        studentId: 2,
        didPass: true
      }];
      assert.deepEqual(filters.getFailedSubmissions(submissions), [{
        studentId: 1,
        didPass: false
      }]);
    });
  });
});
