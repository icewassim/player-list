import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Tag } from 'antd';

import './PlayerCard.css';


const { Meta } = Card;

const PlayerCard = (props) => {
        const {
            idx,
            firstname,
            lastname,
            shortname,
            picture,
            height,
            age,
            rank,
            weight,
            country,
            sex,
            matchesInfo,
        } = props;

        return (<Card className="player-card" data-cy={`card-result-${idx}`}>
            <div className="country-tag" data-cy={`country-${idx}`} >
                <Tag size="large">
                    <img alt={country.code} src={country.picture} className="country-pic"/>
                    <b data-cy={`country-code-${idx}`} >{country.code}</b>
                </Tag>
            </div>
            <Meta
                avatar={
                    <Avatar src={picture} size="large" />
                }
                title={`#${rank}  ${shortname}`}
                description={`${firstname} - ${lastname}`}
            />
            <br />
            <div className="player-details-container">
                <p className="player-detail" data-cy={`age-${idx}`} ><b>Age</b>:  {age}</p>
                <p className="player-detail" data-cy={`sex-${idx}`} ><b>Sex</b>:  {sex}</p>
                <p className="player-detail" data-cy={`height-${idx}`} ><b>Height</b>:  {height}m</p>
                <p className="player-detail" data-cy={`weight-${idx}`} ><b>Weight</b>:  {weight}Kg</p>
            </div>
            <span className="matches-details-container">
                <h3>Matches</h3>
                <Tag className="match-detail" color="green">{matchesInfo.wins} win{matchesInfo.wins !== 1 && 's'}</Tag>
                <Tag className="match-detail" color="red">{matchesInfo.losses} loss{matchesInfo.losses !== 1 && 'es'}</Tag>
                <br />
                <Tag className="match-detail points-detail" color="blue">{matchesInfo.points} Points</Tag>
            </span>
        </Card>)
}

PlayerCard.propTypes = {  
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    country: PropTypes.shape({
        code: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    sex: PropTypes.string.isRequired,
    matchesInfo: PropTypes.shape({
        wins: PropTypes.number.isRequired,
        losses: PropTypes.number.isRequired,
        points: PropTypes.number.isRequired,
    }),
};

PlayerCard.defaultProps = {
    firstname: '',
    lastname: '',
    shortname: '',
    picture: '',
    height: 0,
    age: 0,
    rank: 0,
    weight: 0,
    country: {
        code: '',
        picture: '',
    },
    sex: '',
    matchesInfo: {
        wins: 0,
        losses: 0,
        points: 0,
    },
};

export default PlayerCard;