import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss"

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlined fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={ 70 } text={ '70%' } strokeWidth={ 5 } />
                </div>
                <p className="title">Total Sales Mad oday</p>
                <p className="amount">Rp. 2909990</p>
                <p className="desc">
                    Previous transaction processing. Last payments may not included
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize='small' />
                            <div className="resultAmount">Rp.20409</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlined fontSize='small' />
                            <div className="resultAmount">Rp.20409</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize='small' />
                            <div className="resultAmount">Rp.20409</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Featured
