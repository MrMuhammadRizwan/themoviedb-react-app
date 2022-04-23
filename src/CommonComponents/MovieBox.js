import React from "react";
import { Link } from "react-router-dom";
import { Col, Button, Progress, Tooltip} from 'antd';
import dateFormat from "dateformat";
import { imageURL } from "../Constants/Constants";

function MovieBox(props) {
    const newProps = props.movies[props.value]

    return (
        <Col className="gutter-row" span={4} key={props.movies[props.value].title}>
                <div className='box'>
                    <Link to={`/${newProps.id}`}>
                        <div className="box-image">
                            <img src={`${imageURL}${newProps.poster_path ? newProps.poster_path : newProps.profile_path}`} alt="Movie Image" />
                            <Tooltip placement="top" title="Rating">
                                <Progress type="circle" percent={newProps.vote_average*10} max={10} width={40} too/>
                            </Tooltip>
                        </div>
                        <h3>
                            { newProps.title ? newProps.title : newProps.name }
                        </h3>
                        <p>{dateFormat(newProps.release_date, "mmmm dS, yyyy")}</p>
                        <p>
                            <Button type="primary" size={'Large'}>
                                    Details
                            </Button>
                        </p>
                    </Link>
                </div>
        </Col>
    );
}

export default MovieBox;