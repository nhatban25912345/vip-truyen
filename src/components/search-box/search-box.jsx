import React, { useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = React.forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    React.useImperativeHandle(ref, () => ({
        openSearchBox: openCloseSearchBox,
    }))

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log("Search term:", searchTerm);
        // Thực hiện logic tìm kiếm tại đây
    };

    const openCloseSearchBox = () => {
        setOpen(!open)
    }

    return open ? (
        <div style={{marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '5px', minHeight: '30px' }}>
            <input
                type="text"
                placeholder="tên truyện, tác giả, ..."
                value={searchTerm}
                onChange={handleInputChange}
                style={{ border: 'none', outline: 'none', flex: 1 }}
            />
            <SearchOutlinedIcon
                onClick={handleSearch}
                style={{ cursor: 'pointer', color: '#888', marginLeft: '5px' }}
            />
        </div>) : <></>
})

export default SearchBox