import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Timeline } from 'antd';
import moment from 'moment';

class ExamsHistoryPanel extends Component {
    onClose = () => {
      const { dispatch } = this.props;

      dispatch({ type: 'switches/switchHistoryPanelVisible' });
    };

    static getColor(score) {
      if (score > 85) {
        return 'green';
      }

      if (score > 71) {
        return '#fde910';
      }

      if (score > 51) {
        return 'blue';
      }

      return 'red';
    }

    static getLevelName(level) {
      switch (level) {
        case 5: return 'Отлично';
        case 4: return 'Хорошо';
        case 3: return 'Удовлетворительно';
        default: return 'Не зачтено';
      }
    }

    render() {
      const { visible, oneStudentExams: { student, examInfoList } } = this.props;
      return (
        <Drawer
          title={`История экзаменов: ${student.lastName} ${student.firstName} ${student.middleName}`}
          placement="right"
          width={400}
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          {examInfoList.length === 0 ? 'Нет данных' : <div />}
          <Timeline>
            {examInfoList.map((examInfo) => {
              if (examInfo.appraisalType === 1) {
                return (
                  <Timeline.Item color="blue" key={examInfo.id}>
                    {`${moment(examInfo.date).format('MM.DD.YYYY')} - ${examInfo.academicDiscipline.disciplineCode}: ${examInfo.academicDiscipline.name} - Зачет с результатом - ${examInfo.setOff ? 'Зачтено' : 'Не зачтено'} (${examInfo.score} баллов)`}
                  </Timeline.Item>
                );
              }

              return (
                <Timeline.Item color={ExamsHistoryPanel.getColor(examInfo.score)} key={examInfo.id}>
                  {`${moment(examInfo.date).format('MM.DD.YYYY')} - ${examInfo.academicDiscipline.disciplineCode}: ${examInfo.academicDiscipline.name} - Экзамен с результатом - ${ExamsHistoryPanel.getLevelName(examInfo.level)} (${examInfo.score} баллов)`}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Drawer>
      );
    }
}

ExamsHistoryPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  oneStudentExams: PropTypes.instanceOf(Object).isRequired,
};

export default ExamsHistoryPanel;
