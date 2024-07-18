import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Box } from '@mui/material';
import userLogo from '../../assets/userLogo.jpg';

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
            name: "Code",
            lastName: "Book",
            image: userLogo,
            link: 'https://github.com/anuragaffection/FullStackNotes'
        },
        {
            name: 'Anurag',
            lastName: "Affection",
            image: userLogo,
            link: 'https://anuragaffection.vercel.app/'
        },
        {
            name: 'Resume',
            lastName: 'Builder',
            image: userLogo,
            link: 'https://resume-builder-anurag.vercel.app/'
        },
    ];

    return (
        <Box>
            <IconButton
                sx={{
                    color: '#5A698F',
                    backgroundColor: '#161D2F',
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
                        width: '32ch',
                        maxHeight: ITEM_HEIGHT * 6.5,
                        backgroundColor: '#000000',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                        padding: '16px',
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
                                }}
                            >
                                <Button
                                    variant={'text'}
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
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
                                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                                    />
                                    <span
                                        style={{
                                            maxWidth: '80px',
                                            textAlign: 'center',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                    <span
                                        style={{
                                            maxWidth: '80px',
                                            textAlign: 'center',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {item.lastName}
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
