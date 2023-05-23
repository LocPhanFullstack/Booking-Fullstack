import React, { useRef, useState } from 'react';
import './ManageSpecialty.scss';
import { connect } from 'react-redux';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import CommonUtils from '../../../utils/CommonUtils';
import { createNewSpecialtyAPI } from '../../../services/userService';
import { toast } from 'react-toastify';

const ManageSpecialty = () => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const aRef = useRef(null);

    const [info, setInfo] = useState({
        name: '',
        imageBase64: '',
        descriptionHTML: '',
        descriptionMarkdown: '',
    });

    const resetInput = () => {
        aRef.current.value = null;
    };

    const handleOnChangeInput = (e, id) => {
        let stateCopy = { ...info };
        stateCopy[id] = e.target.value;
        setInfo({ ...stateCopy });
    };

    const handleEditorChange = ({ html, text }) => {
        setInfo({
            ...info,
            descriptionHTML: html,
            descriptionMarkdown: text,
        });
    };

    const handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            setInfo({ ...info, imageBase64: base64 });
        } else {
            return;
        }
    };

    const handleSaveNewSpecialty = async () => {
        let res = await createNewSpecialtyAPI(info);
        if (res && res.errCode === 0) {
            toast.success('New Specialty Created!!!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setInfo({
                name: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            });
            aRef.current.value = null;
        } else {
            toast.error('Something went wrong!!!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };

    return (
        <div className="manage-specialty-container">
            <div className="ms-title">Quản lý chuyên khoa</div>
            <div className="add-new-specialty row g-3">
                <div className="col-6 form-group">
                    <label className="form-label">Tên chuyên khoa</label>
                    <input
                        className="form-control"
                        type="text"
                        value={info.name}
                        onChange={(e) => handleOnChangeInput(e, 'name')}
                    />
                </div>
                <div className="col-6 form-group">
                    <label className="form-label">Ảnh chuyên khoa</label>
                    <input ref={aRef} className="form-control" type="file" onChange={(e) => handleOnChangeImage(e)} />
                </div>
                <div className="col-12">
                    <MdEditor
                        style={{ height: '500px', marginTop: '16px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                        value={info.descriptionMarkdown}
                    />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" onClick={() => handleSaveNewSpecialty()}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
