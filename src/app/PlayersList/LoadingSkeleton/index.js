import React from 'react';

import { Row, Col, Card, Skeleton, Avatar } from 'antd';

const { Meta } = Card;

const LoadingSkeleton = () => (
    <Row>
        <Col span={16} offset={8}>
            <Card className="player-card">
                <Skeleton loading avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>

            <Card className="player-card">
                <Skeleton loading avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </Col>
    </Row>
);

export default LoadingSkeleton;