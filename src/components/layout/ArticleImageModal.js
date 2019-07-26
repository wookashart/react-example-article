import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

const ImageWrapper = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    height: 0;
    padding-bottom: 56%;

    ${media.tablet} {
        height: 400px;
        width: 600px;  
        padding: 0;
    }
`;

const ImageModal = styled.div`
    position: ${props => props.isOpen ? 'fixed' : 'absolute'};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
    max-width: 100%;
    transition: 120ms linear position 250ms;

    img {
        display: block;
    }
`;

class ArticleImageModal extends Component {
    state = {
        open: false
    }

    imageClick = () => {
        this.setState({ open: !this.state.open });
    }

    componentWillUnmount() {
        this.setState({ open: false })
    }

    render () {
        const { image, alt } = this.props;

        return (
            <ImageWrapper>
                <ImageModal isOpen={this.state.open} onClick={this.imageClick}>
                    <img src={image} alt={alt} />
                </ImageModal>
            </ImageWrapper>
        )
    }
}

export default ArticleImageModal;
