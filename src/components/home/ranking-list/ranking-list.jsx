import { Box, Divider, Grid2, Typography } from "@mui/material"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import './ranking-list.css'

const RankingList = ({ title, data }) => {
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
            <Box sx={{ display: 'flex' }} onClick={handleClick}>
                <Typography
                    variant="body"
                    sx={{
                        flexGrow: 1,
                        cursor: 'pointer',
                        color: '#fcba03',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    {title}
                </Typography>
                <DoubleArrowIcon fontSize='12' sx={{ color: '#fcba03', cursor: 'pointer', }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 3 }}>
                {(Array.isArray(data) && data.length > 0) &&
                    (<Box>
                        <Grid2 container spacing={1}>
                            <Grid2 size={{ sx: 12, md: 1 }}>
                                <WorkspacePremiumIcon sx={{ color: '#FFD700' }} />
                            </Grid2>
                            <Grid2 size={{ sx: 12, md: 8 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ marginBottom: 0.5 }}>
                                        <Typography variant="body2" component="span" sx={{
                                            fontWeight: 'bold', fontSize: 14, cursor: 'pointer',
                                            '&:hover': {
                                                color: '#fcba03',
                                            },
                                        }}>
                                            {data[0].title}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginBottom: 3 }}>
                                        <Typography variant="body2" component="span" sx={{ fontSize: 14, color: '#fcba03' }}>
                                            <span style={{ fontWeight: 'bold' }}>{`${data[0].currentView} `}</span>Người đang đọc
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5 }}>
                                        <AccountCircleOutlinedIcon fontSize="12" sx={{ marginRight: 0.5 }} />
                                        <Typography variant="subtitle2" component="span" sx={{ fontSize: 12 }}>
                                            {data[0].author}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5 }}>
                                        <LayersOutlinedIcon fontSize="12" sx={{ marginRight: 0.5 }} />
                                        <Typography variant="subtitle2" component="span" sx={{ fontSize: 12 }}>
                                            {data[0].genre}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ sx: 12, md: 3 }} className="book-img">
                                <a
                                    className="book-container"
                                    rel="noreferrer noopener"
                                    href=""
                                >
                                    <div className="book">
                                        <img
                                            src='https://static.cdnno.com/poster/tu-hai-nhi-bat-dau-nhap-dao/150.jpg?1714738581' alt={data[0].title}
                                        />
                                    </div>
                                </a>
                            </Grid2>
                        </Grid2>
                        <Divider variant="fullWidth" />
                    </Box>)}
                {(Array.isArray(data) && data.length > 1) &&
                    data.slice(1).map((item, index) => (<Box key={`${item.title}-${index}`} sx={{ paddingTop: 1 }}>
                        <Grid2 container spacing={1} sx={{ marginBottom: 1 }}>
                            <Grid2 size={{ sx: 12, md: 1 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                {index === 0 && (<WorkspacePremiumIcon sx={{ color: '#C0C0C0' }} />)}
                                {index === 1 && (<WorkspacePremiumIcon sx={{ color: '#CD7F32' }} />)}
                                {index > 1 && (<Typography sx={{ marginLeft: 1 }} variant="subtitle2">{index + 2}</Typography>)}
                            </Grid2>
                            <Grid2 size={{ sx: 12, md: 9 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body2" component="span" sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#fcba03',
                                    },
                                }}>
                                    {item.title}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ sx: 12, md: 2 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="body2" component="span" sx={{ fontSize: 14 }}>
                                    {item.view || ''}
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <Divider variant="fullWidth" />
                    </Box>))
                }
            </Box>
        </>
    )
}

export default RankingList