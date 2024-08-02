import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './MainPage.css';




const MainPage = () => {


    // const [data, setData] = useState([]);
    // const [img , setImg] = useState([]);
    // const [movieName, setMovieName] = useState("Oopiri");

    // useEffect(() => {
    //     fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=7f9a3b82`)
    //         .then(response => response.json())
    //         .then(data => setData(data));
    //         setImg(data.Poster);
    // }, []);
    // console.log(data);
    // console.log(img);

    // const [searchTerm, setSearchTerm] = useState('');

    // const handleSearchClick = () => {
    //   // Perform search with searchTerm
    //   setMovieName(searchTerm);
    //   console.log(`Search for "${searchTerm}"`);
    // }

    // const handleInputChange = (event) => {
    //   setSearchTerm(event.target.value);
    // }

    // const [data, setData] = useState({});
    // const [img, setImg] = useState('');
    // const [movieName, setMovieName] = useState("Oopiri");
    // const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=7f9a3b82`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             setImg(data.Poster);
    //             console.log(data);
    //             console.log(img);
    //         });
    // }, [movieName, img]);

    // const handleSearchClick = () => {
    //     setMovieName(searchTerm);
    //     console.log(`Search for "${searchTerm}"`);
    // }

    // const handleInputChange = (event) => {
    //     setSearchTerm(event.target.value);
    // }

    const [data, setData] = useState({});
    const [img, setImg] = useState('');
    const [movieName, setMovieName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (Object.keys(movieName).length !== 0) {
            fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=7f9a3b82`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setImg(data.Poster);
                    console.log(data);
                    console.log(data.Poster);
                });
        }
    }, [movieName]);

    const handleSearchClick = (event) => {
        event.preventDefault();
        setMovieName(searchTerm);
        console.log(`Search for "${searchTerm}"`);
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('search-button').click();
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }

    

    return (
        <>
            {/* <div>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
                <button onClick={handleSearchClick}>Search</button>
            </div> */}

            <div>
                <div className='searchSec'>
                    <form className="search-box">
                        <input type="text" placeholder=" " value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} className="inputSearch" />
                        <button id="search-button" type="reset" onClick={handleSearchClick}></button>
                    </form>
                </div>
            </div>
            {data.Error && (
                <>
                    <div style={{ display: 'flex', justifyContent: "center" }}>{data.Error} or spelling wrong</div>
                </>
            )

            }

            {(movieName == '') && (
                <>
                    <p style={{ display: "flex", justifyContent: "center" }}>search any movie</p>
                </>
            )}
            {isLoading ?
                <div style={{ display: "flex", justifyContent: "center", marginTop:"50px" }}>
                    <div class="loader" ></div>

                </div>
                :
                <div>
                    {(Object.keys(movieName).length === 0) ?
                        <div>

                        </div> :
                        <>
                            <div className="mainscreen">
                                <meta content="width=device-width, initial-scale=1" name="viewport" />
                                <div id="home" className="first_page">
                                    <div className="wrapper">
                                        <div className="content-splitter" >
                                            <div className="left">

                                                <div className="block">
                                                    <div className="header">{data.Title}</div>
                                                    <div className="content">{data.Plot}</div>
                                                </div>
                                                {/* <div className="c2a">Contact me!</div> */}
                                            </div>
                                            <div className="nav" style={{ width: "100%" }}>
                                                <ul className="navbar navbar1" >
                                                    <li className="litag"><a className="atag">{data.Genre}</a></li>
                                                    <li className="litag"><a className="atag">{data.Released}</a></li>
                                                    <li className="litag"><a className="atag">{data.Runtime}</a></li>
                                                    <li className="litag"><a className="atag">{data.Language}</a></li>
                                                </ul>
                                                <ul className="navbar" >
                                                    <li className="litag">Director - <a className="atag">{data.Director}</a></li>
                                                    <li className="litag">Writer - <a className="atag">{data.Writer}</a></li>
                                                    <li className="litag">Actors - <a className="atag">{data.Actors}</a></li>
                                                </ul>
                                                <ul className="navbar">
                                                    <li className="litag">Awards - <a className="atag">{data.Awards}</a></li>
                                                    <li className="litag">imdbRating - <a className="atag">{data.imdbRating}</a></li>
                                                    <li className="litag">imdbVotes - <a className="atag">{data.imdbVotes}</a></li>
                                                    <li className="litag">Type - <a className="atag">{data.Type}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <img src={img} alt="" style={{ marginLeft: "15%", height: "395px" }} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mobileSection"> 
                                <div className="MobileBox">
                                    <h3>{data.Title}</h3>
                                    <div className="firstLineMob">
                                        <div className="leftSideMob">
                                            <p>Plot:- <br />{data.Plot}</p>
                                        </div>
                                        <div className="RightSideMObImg">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                    <div className="secondLineMOb" >
                                        <h6>{data.Genre}</h6>
                                        <h6>{data.Released}</h6>
                                        <h6>{data.Runtime}</h6>
                                        <h6>{data.Language}</h6>
                                    </div>
                                    <div className="secondLineMOb">
                                        <h6><span>Director-</span><br />{data.Director}</h6>
                                        <h6>Writer-<br />{data.Writer}</h6>
                                        <h6>Cast-<br />{data.Actors}</h6>
                                        <h6>Language-<br />{data.Language}</h6>
                                    </div>
                                    <div className="secondLineMOb">
                                        <h6>Awards-<br />{data.Awards}</h6>
                                        <h6>imdbRating-<br />{data.imdbRating}</h6>
                                        <h6>imdbVotes-<br />{data.imdbVotes}</h6>
                                        <h6>Type-<br />{data.Type}</h6>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>}




        </>
    )
}
export default MainPage;