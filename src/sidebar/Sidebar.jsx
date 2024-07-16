import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Drawer from '@mui/material/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import LoopIcon from '@mui/icons-material/Loop';
import ScienceIcon from '@mui/icons-material/Science';
import EventIcon from '@mui/icons-material/Event';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 290;

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const [expandedSection, setExpandedSection] = React.useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleExpand = (section) => {
        setExpandedSection(expandedSection === section ? '' : section);
    };

    const menuItems = [
        { text: 'Dashboard', route: '/', icon: <DashboardIcon /> },
        {
            text: 'Patient Registration',
            route: '/patient-registration',
            icon: <PersonAddIcon />,
            subItems: [
                { text: 'Interaction Center', route: '/interaction-center' },
                { text: 'Outbound & customer', route: '/outbound-customer' },
            ],
        },
        { text: 'Patients', route: '/patients', icon: <PeopleIcon /> },
        { text: 'Cycles', route: '/cycles', icon: <LoopIcon /> },
        { text: 'ART', route: '/art', icon: <ScienceIcon /> },
        { text: 'Appointments', route: '/appointments', icon: <EventIcon /> },
        { text: 'HR Module', route: '/hr', icon: <BusinessCenterIcon /> },
        { text: 'Pharmacy Module', route: '/pharmacy', icon: <LocalPharmacyIcon /> },
        { text: 'Laboratory Module', route: '/laboratory', icon: <BiotechIcon /> },
        { text: 'Finance Module', route: '/finance', icon: <AccountBalanceWalletIcon /> },
        { text: 'Billing', route: '/billing', icon: <ReceiptIcon /> },
        { text: 'Reports', route: '/reports', icon: <AssessmentIcon /> },
        { text: 'Clinic Settings', route: '/settings', icon: <SettingsIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex', fontFamily: 'Poppins, sans-serif' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    border: 'none',
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#f8f7fa',
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderRight: 'none',
                    },
                }}
            >
                <List sx={{ margin: 0, padding: 2 }}>
                    {menuItems.map((item, index) => {
                        const isSelected = location.pathname === item.route;

                        if (item.subItems) {
                            return (
                                <Accordion
                                    key={index}
                                    expanded={expandedSection === item.text}
                                    onChange={() => handleExpand(item.text)}
                                    sx={{
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' },
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{
                                            padding: '8px 16px',
                                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 40, color: isSelected ? '#A06BD3' : '#A3AED0' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            sx={{
                                                color: isSelected ? '#A06BD3' : '#A3AED0',
                                                '& .MuiTypography-root': {
                                                    fontWeight: 700,
                                                    fontSize: '16px',
                                                },
                                            }}
                                        />
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: 0 }}>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <ListItem key={subIndex} disablePadding>
                                                <ListItemButton
                                                    onClick={() => navigate(subItem.route)}
                                                    sx={{
                                                        pl: 4,
                                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                                                        borderRadius: '8px',
                                                    }}
                                                >
                                                    <ListItemText primary={subItem.text} sx={{ color: '#666' }} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        }

                        return (
                            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                <ListItemButton
                                    onClick={() => navigate(item.route)}
                                    sx={{
                                        borderRadius: '8px',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                                        ...(isSelected && { backgroundColor: '#e3e0ee' }),
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 40, color: isSelected ? '#A06BD3' : '#A3AED0' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            color: isSelected ? '#A06BD3' : '#A3AED0',
                                            '& .MuiTypography-root': {
                                                fontWeight: 700,
                                                fontSize: '16px',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </Box>
    );
}
