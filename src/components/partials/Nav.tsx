import React from 'react'
import { MediaQuery, Button, Header, Text } from '@mantine/core'
import { Logo } from '../common/logo'

export const Nav = (): any => {
    return (
        <Header
            style={{ backgroundColor: 'black' }}
            height={{ base: 60, md: 80 }}
            p="md"
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <MediaQuery
                    smallerThan="sm"
                    styles={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'white',
                    }}
                >
                    <div
                        className="flex items-center nav-items"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Logo height={60} />
                        <div
                            className="flex "
                            style={{
                                color: 'white',
                                justifyContent: 'space-between',
                                width: '15%',
                            }}
                        >
                            <div className="nav-item">
                                <Text fw={700}>Home</Text>
                            </div>
                            <div className="nav-item">
                                <Text fw={700}>Blog</Text>
                            </div>
                            <div className="nav-item">
                                <Text fw={700}>About</Text>
                            </div>
                        </div>
                        <div
                            className="flex "
                            style={{
                                color: 'white',
                                justifyContent: 'space-between',
                                width: '12%',
                            }}
                        >
                            <Button color="cyan">Log In</Button>
                            <Button color="cyan">Sign Up</Button>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        </Header>
    )
}
