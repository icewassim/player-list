import { connect } from 'react-redux';

import { getPlayers } from './domains/mappers';

import {
    fetchPlayersActionCreator,
} from './domains/actions';

import Dashboard from './container';

const mapStateToProps = ({ players, isLoadingPlayers }) => {
    return {
        players: getPlayers(players),
        isLoadingPlayers,
    };
};

export default connect(mapStateToProps, {
    fetchPlayers: fetchPlayersActionCreator,
})(Dashboard);