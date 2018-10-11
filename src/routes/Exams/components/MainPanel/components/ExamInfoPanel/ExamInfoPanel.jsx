import React, { PureComponent } from 'react';
import { Card, Icon, Spin } from 'antd';
import PropTypes from 'prop-types';
import styles from './ExamInfoPanel.less';

class ExamInfoPanel extends PureComponent {
  render() {
    const { attestation } = this.props;

    if (attestation.id === null) {
      return (
        <Spin />
      );
    }

    return (
      <div>
        <Card
          className={styles.Card}
          actions={[<Icon type="edit" />, <Icon type="delete" />]}
        >
          <div styles={{ minHeight: '100%' }}>
            <div>
              {`Название дисциплины ${attestation.academicDiscipline.name}`}
            </div>
            <div>
              {`Код дисциплины ${attestation.academicDisciplineCode}`}
            </div>
            <div>
              {`Количество часов ${attestation.hoursCount}`}
            </div>
            <div>
              {`Дата проведения зачета/экзамена ${attestation.date}`}
            </div>
            <div>
              {`Вид отчетности ${attestation.appraisalType === 1 ? 'Зачет' : 'Экзамен'}`}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

ExamInfoPanel.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  attestation: PropTypes.instanceOf(Object).isRequired,
};

ExamInfoPanel.defaultProps = {
};

export default ExamInfoPanel;
