import { Box, Grid2 } from "@mui/material";
import "./review-list.css"

const getReviewComponent = (item) => (
    <Grid2 size={{ xs: 6, md: 6 }} sx={{ display: "flex", flexDirection: 'row', width: '100%', border: '1px solid black' }}>
        <Box className={"review-box-title"}>
            <Box>
                <span className="review-box-username">{item.username}</span>
                <span></span>
            </Box>
            <Box>
                
            </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>

        </Box>
        <Box>

        </Box>
    </Grid2>
)

const ReviewList = ({ data }) => {
    console.log(data)

    return (
        data && data.length &&
        <Grid2 container spacing={1} sx={{ width: "100%" }}>
            {data.map((item) => getReviewComponent(item))}
        </Grid2>


    )
}

export default ReviewList;