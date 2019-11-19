import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './PlayersList.css';

import PlayersListComponent  from './component';

const PlayersList = ({players, fetchPlayers, isLoadingPlayers}) => {
    useEffect(() => {
        fetchPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
            <PlayersListComponent 
                players={players}
                isLoadingPlayers={isLoadingPlayers}
            />
        </>)
}

PlayersList.propTypes = {
    players: PropTypes.array,
    isLoadingPlayers: PropTypes.bool.isRequired,
    fetchPlayers: PropTypes.func.isRequired,
};

PlayersList.defaultProps = {
    isLoadingPlayers: false,
    players: [],
}

export default PlayersList;