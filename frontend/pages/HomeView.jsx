import React from "react";
import { useNavigate } from "react-router-dom";
import HeroView from "./HeroView";
import RecView from "./RecView";
import ListView from "./ListView";

const HomeView = () => {




    return (

        <div className="home-view">
            <HeroView />

            <div id="recommendations">
                <RecView />
            </div>

            <div id="movie-section">
                <ListView />

            </div>

        </div>
    )
}

export default HomeView;