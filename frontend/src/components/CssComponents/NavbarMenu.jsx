
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Box } from '@mui/material';



export default function NavbarMenu() {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const items = [
        {
            name: 'Resume Builder',
            image: "https://logo.gklite.in/resume_builder.jpg",
            link: 'https://resume-builder-anurag.vercel.app/'
        },
        {
            name: 'Anurag Affection',
            image: "https://logo.gklite.in/anuragaffection.jpg",
            link: 'https://anuragaffection.gklite.in/'
        },
    ];

    return (
        <Box>
            <IconButton
                sx={{
                    color: '#06b6d4',
                    backgroundColor: '#020617',
                    '&:hover': {
                        color: '#06b6d4',
                    },
                }}
                aria-label='more'
                aria-controls='long_menu'
                aria-expanded='true'
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AppsIcon sx={{ fontSize: '36px' }} />
            </IconButton>
            <Menu
                id='long_menu'
                anchorEl={anchorEl}
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '24ch',
                        maxHeight: ITEM_HEIGHT * 6.5,
                        backgroundColor: '#000000',
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: '12px',

                    }}
                >
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleClose}
                            sx={{ padding: 0 }}
                        >
                            <a
                                href={item.link}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    width: '100%',
                                    paddingLeft: "8px"

                                }}
                            >
                                <Button
                                    variant={'text'}
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        gap: "10px",
                                        justifyContent: 'flex-start', // Align items horizontally to the start
                                        alignItems: 'center',
                                        '&:hover': {
                                            color: '#000000',
                                            backgroundColor: '#06b6d4',
                                        },
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '32px', height: '32px', borderRadius: "50%" }}
                                    />
                                    <span
                                        style={{
                                            textAlign: 'center',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {item.name}
                                    </span>

                                </Button>
                            </a>
                        </MenuItem>
                    ))}
                </Box>
            </Menu >
        </Box >
    );
}

