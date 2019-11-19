import { message } from 'antd';

import euro from '../../../apis/euro';
import config from '../../../config';
import { ACTION_TYPE } from '../../../constants';

export const fetchPlayersActionCreator = () => async dispatch => {
    try {
        dispatch({ type: ACTION_TYPE.LOADING_PLAYERS });

        const { data } = await euro.get(config.playersPath);
        dispatch({
            type: ACTION_TYPE.FETCH_PLAYERS,
            payload: data.players,
        });
    } catch (err) {
        message.error('Something went wrong could not fetch players');
    }
};