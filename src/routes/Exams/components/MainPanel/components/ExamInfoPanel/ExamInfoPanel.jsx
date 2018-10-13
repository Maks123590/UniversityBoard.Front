import React, { PureComponent } from 'react';
import {
  Card, Icon, Popconfirm, message,
} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';

import { formModes } from '../../../../../../constants/constants';

import styles from './ExamInfoPanel.less';

class ExamInfoPanel extends PureComponent {
  render() {
    const { dispatch, attestation } = this.props;

    return (
      <div>
        <Card
          className={styles.Card}
          actions={[
            <Icon
              type="edit"
              onClick={() => {
                dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: formModes.edit } });
              }}
            />,
            <Popconfirm
              title="Вы действительно хотите удалить предмет?"
              onConfirm={() => {
                dispatch({ type: 'attestations/deleteAttestation', payload: { id: attestation.id } });
                message.success('Удалено');
              }}
            >
              <Icon
                type="delete"
              />
            </Popconfirm>,
          ]}
        >
          <div className={styles.infoWrapper}>
            <div>
              <span className={styles.descr}>Название дисциплины:</span>
              <span className={styles.val}>{`${attestation.academicDiscipline && attestation.academicDiscipline.name}`}</span>
            </div>
            <div>
              <span className={styles.descr}>Код дисциплины:</span>
              <span className={styles.val}>{attestation.academicDisciplineCode}</span>
            </div>
            <div>
              <span className={styles.descr}>Количество часов:</span>
              <span className={styles.val}>{attestation.hoursCount !== null ? attestation.hoursCount : 'нет'}</span>
            </div>
            <div>
              <span className={styles.descr}>Дата проведения зачета/экзамена:</span>
              <span className={styles.val}>{attestation.date !== null ? moment(attestation.date).format('MM.DD.YYYY') : 'нет'}</span>
            </div>
            <div>
              <span className={styles.descr}>Вид отчетности:</span>
              <span className={styles.val}>{attestation.appraisalType === 1 ? 'Зачет' : 'Экзамен'}</span>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

ExamInfoPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  attestation: PropTypes.instanceOf(Object).isRequired,
};

ExamInfoPanel.defaultProps = {
};

export default ExamInfoPanel;
