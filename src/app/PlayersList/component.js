import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Empty } from 'antd';

import LoadingSkeleton from './LoadingSkeleton';
import PlayerCard from './PlayerCard';

const PlayersList = ({ players, isLoadingPlayers }) => {
    if (isLoadingPlayers) {
        return <LoadingSkeleton />
    }

    if (!players.length) {
        return <Empty data-cy={`no-players`} className="empty-result" />
    }

    return (
        <Row className="players-list-container">
            <Col span={16} offset={8}>
                {
                    players.map((playerInfo, idx) => (
                        <PlayerCard
                            idx={idx}
                            key={`${playerInfo.shortname}-${playerInfo.age}`}
                            {...playerInfo}
                        />
                    ))
                }
            </Col>
        </Row>
    )
};

PlayersList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoadingPlayers: PropTypes.bool.isRequired,
};

export default PlayersList;