class Subject {
    constructor(id, analysis, answer, checkState, stem, uploadTime, epartment_id, subjectLevel_id, subjectType_id, topic_id, user_id){
        this.id = id;
        this.analysis = analysis;
        this.answer = answer;
        this.checkState = checkState;
        this.stem = stem;
        this.uploadTime = uploadTime;
        this.epartment_id = epartment_id;
        this.subjectLevel_id = subjectLevel_id;
        this.subjectType_id = subjectType_id;
        this.topic_id = topic_id;
        this.user_id = user_id;
    }
}
export default Subject;