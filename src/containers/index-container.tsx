import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css'
import scrool from '../assets/flecha-hacia-abajo-unscreen.gif'


const IndexContainer: React.FC = () => {
    return (
        <>
            <div className="indexContainer">
                <h1>
                    Aqualife
                </h1>

                <div>
                    <Typography
                        variant="h4"
                    >
                        Un maravilloso mundo bajo el agua
                    </Typography>
                </div>

                <div>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "center",
                            margin: 4,
                        }}
                    >
                        Bienvenidos a nuestro maravilloso mundo sumergido! Se calcula que mas del 90% de la Biodiversidad
                        del mundo reside en los oceanos. Sin dudas nos aguardan momentos emocionantes a medida que nos
                        profundicemos en la última frontera virgen del planeta.
                    </Typography>
                </div>

                <div>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            margin: 4,
                        }}
                    >
                        Sumérgete en este fascinante mundo !!
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            margin: 4,
                            color: 'rgb(250,145,54)',
                        }}
                    >
                        Proximamentemas detalles ...... !!
                    </Typography>
                </div>
            </div>
            <div className="indexButton">
                <Box
                    component='img'
                    src={scrool}
                    alt="scrool"
                    sx={{ width: 80, height: 120 }}
                />
                <NavLink
                    to={'/products/all'}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            mb: 3,
                        }}
                    >
                        Tienda Virtual
                    </Button>
                </NavLink>
            </div>
        </>

    )
}

export default IndexContainer
