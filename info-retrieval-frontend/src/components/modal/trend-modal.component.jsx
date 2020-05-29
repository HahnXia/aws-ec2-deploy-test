import React from "react";
import {Button, Modal} from "reactstrap";
// import * as Constants from '../../constant/application-properties';

/**
 * The TrendModal component is for showing the trend image for the query trend analysis in the embedding mode
 * NOTICE: The img src part can be diffferent among various results
 * @param {*} props 
 */
function TrendModal(props) {
    const [liveDemo,
        setLiveDemo] = React.useState(false);
        let filename = 'plot';
        if(props.title !== undefined && props.title !== null) {
            filename = props.title.replace(' ', "_");
        }
    return (
        <div>
            <Button color="primary" type="button" onClick={() => setLiveDemo(true)}>
                View Search Trend for this embedding query
            </Button>
            <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">
                        {props.title}
                    </h5>
                </div>
                <div className="modal-body">
                    <img style={{maxWidth: '100%'}} src={'https://covid19-python-backend-data.s3.us-east-2.amazonaws.com/WechatIMG118.jpeg'} alt=''/>
                </div>
            </Modal>
        </div>
    );
}

export default TrendModal;