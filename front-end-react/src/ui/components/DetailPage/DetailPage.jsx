import React from 'react';
import cx from 'classnames';
import './style.css'
import LeftDetail from './LeftDetail';
import RightDetail from './RightDetail';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.linkName = "Ưu đãi/ Guccii / Túi xách tay xanh"
        this.image = "./images/product-back.jpg"
        this.logo = "./images/logo-small.jpg"
        this.slogan = "Ngày mai đã là quá khứ từ giờ"
        this.description = "Guccii là tập đoàn thời trang thể thao đa quốc gia đến từ Đức, chuyên thiết kế và sản xuất\
        các sản phẩm giày, quần áo và phụ kiện thể thao nổi tiếng toàn cầu. Từ khởi đầu khiêm tốn vào\
        năm 1924, thương hiệu adidas ngày nay đã trở thành nhà sản xuất đồ thể thao lớn nhất châu Âu và\
        lớn thứ hai trên thế giới. Được xem là biểu tượng quyền năng của lĩnh vực thể thao chuyên dụng,\
        adidas xứng đáng là thương hiệu của những nhà vô địch, mang đến những sản phẩm tốt nhất cho các\
        các siêu sao thể thao nổi tiếng nhất thế giới và đưa họ đến đỉnh cao vinh quang của những điều\
        tưởng như 'không thể'"
        this.label = "Guccii"
        this.name = "Túi xách tay xanh"
        this.oldPrice = "2.500.000"
        this.price = "1.900.000"
        this.sizeList = [
            {
                'name': 'XS',
                'childern': [
                    {
                        'name': 'Size tướng ứng',
                        'value': '32'
                    },
                    {
                        'name': 'Vòng ngực(cm)',
                        'value': '76 - 81'
                    },
                    {
                        'name': 'Vòng eo(cm)',
                        'value': '61 - 66'
                    }
                ]
            },
            {
                'name': 'S',
                'childern': [
                    {
                        'name': 'Size tướng ứng',
                        'value': '32'
                    },
                    {
                        'name': 'Vòng ngực(cm)',
                        'value': '76 - 81'
                    },
                    {
                        'name': 'Vòng eo(cm)',
                        'value': '61 - 66'
                    }
                ]
            },
            {
                'name': 'M',
                'childern': [
                    {
                        'name': 'Size tướng ứng',
                        'value': '32'
                    },
                    {
                        'name': 'Vòng ngực(cm)',
                        'value': '76 - 81'
                    },
                    {
                        'name': 'Vòng eo(cm)',
                        'value': '61 - 66'
                    }
                ]
            },
            {
                'name': 'L',
                'childern': null
            }
        ]
    }

    render() {
        return (
            <div className={"container"}>
                <p>{this.linkName}</p>
                <div className={cx("row", "mt-5")}>
                    <div className="col-md-7">
                        <LeftDetail image={this.image} logo={this.logo} description={this.description} />
                    </div>
                    <div className="col-md-5">
                        <RightDetail label={this.label} name={this.name} oldPrice={this.oldPrice} price={this.price} sizeList={this.sizeList}/>
                    <div className={cx("add-button", "pt-4")}>
                        <button className={cx("btn", "btn-primary")}>Thêm vào giỏ hàng</button>
                    </div>
                    <div className={"pt-2"} style={{"marginLeft": "60px"}}>
                        <p>Ưu đãi này sẽ kết thúc trong:</p>
                        <div style={{"marginLeft": "15px"}}>
                            <ul className={cx("list-inline", "count")}>
                                <li className="list-inline-item">23</li>
                                <li className="list-inline-item">14</li>
                                <li className="list-inline-item">54</li>
                                <li className="list-inline-item">12</li>
                            </ul>
                            <ul className={"list-inline"} style={{"marginTop": "-10px"}}>
                                <li className="list-inline-item">Ngày</li>
                                <li className="list-inline-item">Giờ</li>
                                <li className="list-inline-item">Phút</li>
                                <li className="list-inline-item">Giây</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("icon-branch", "text-left")}>
                        <ul style={{"listStyleType": "none"}}>
                            <li><i className={cx("fas", "fa-shield-alt")}></i>&nbsp;Cam kết 100% chính hãng</li>
                            <li><i className={cx("fas", "fa-truck")}></i>&nbsp;Giao hàng dự kiến:<strong> Thứ 7 24/11 - Thứ 6 30/11</strong></li>
                            <li><i className={cx("fas", "fa-sync-alt")}></i>&nbsp;Sản phẩm này được đổi trả</li>
                        </ul>
                    </div>
                    <hr/>
                    <ul className={cx("flex-column", "nav", "nav-pills", "info-right")}>
                        <li>
                            <a href={" "} id={"mydown"} className={cx("mydown", "nav-link")} data-toggle={"collapse"}>
                                THÔNG TIN SẢN PHẨM
                                <label className={"down"} id={"downchange"}>
                                    <i></i>
                                </label>
                            </a>
                            <div className={"collapse"} id={"collapseSkin"}>
                                <ul className={cx("nav", "flex-column")}>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;1</a>
                                    </li>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;2</a>
                                    </li>
                                </ul>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <a href=" " className={cx("mydown", "nav-link")} data-toggle={"collapse"}>
                                CHẤT LIỆU & CÁCH SỬ DỤNG
                                <label className={"down"} id={"downchange"}>
                                    <i></i>
                                </label>
                            </a>
                            <div className="collapse" id="collapseBody">
                                <ul className={cx("nav", "flex-column")}>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;1</a>
                                    </li>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;2</a>
                                    </li>
                                </ul>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <a href={" "} className={cx("mydown", "nav-link")} data-toggle={"collapse"}>
                                CHI TIẾT KÍCH CỠ
                                <label className={"down"} id={"downchange"}>
                                    <i></i>
                                </label>
                            </a>
                            <div className="collapse" id="collapseHair">
                                <ul className={cx("nav", "flex-column")}>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;1</a>
                                    </li>
                                    <li className={"sub-menu"}>
                                        <a className={"nav-link"} href={" "}>&gt;&nbsp;2</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={"col-md-12"}>
                    <hr/>
                    <div className={"row"}>
                        <div className={"col-md-6"} style={{"display": "inline-flex"}}>
                            <div className={"guarantee-logo"}>
                                <img src={require("./images/guarantee.jpg")} alt={"guarantee"} style={{"width": "130px", "height": "130px"}}/>
                            </div>
                            <div className={"guarantee-info"} style={{"paddingLeft": "15px"}}>
                                <p>BẢO ĐẢM 100% CHÍNH HÃNG</p>
                                <ul>
                                    <li>Leflair chỉ làm việc trực tiếp với các thương hiệu và nhà phân phối chính thức</li>
                                    <li>Leflair kiểm soát chặt chẽ quy trình hàng hóa được hợp pháp giao dịch, nhập khẩu và
                                        khai thuế</li>
                                    <li>Leflair vận hành nghiêm ngặt quy trình kiểm soát chất lượng của từng sản phẩm trước
                                        mỗi chương trình ưu đãi</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"col-md-6"}></div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className={cx("col", "text-center")}>
                <h3>Đã xem gần đây</h3>
                "BỎ CAROUSEL VÔ ĐÂY"
            </div>
            </div>
        )
    }
}

export default DetailPage