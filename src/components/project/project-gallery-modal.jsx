'use client';

import Lightbox from 'yet-another-react-lightbox';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';

import 'yet-another-react-lightbox/plugins/thumbnails.css';

const ProjectGalleryModal = ({
    images,
    currentIndex,
    isOpen,
    onClose,
}) => {
    return (
        <Lightbox
            open={isOpen}
            close={onClose}
            index={currentIndex}
            slides={images.map(
                (image) => ({
                    src: image,
                })
            )}
            plugins={[
                Zoom,
                Thumbnails,
            ]}
            carousel={{
                finite: false,
            }}
            controller={{
                closeOnBackdropClick: true,
            }}
            animation={{
                fade: 300,
                swipe: 250,
            }}
            thumbnails={{
                position: 'bottom',
                width: 40,
                height: 80,
                border: 0,
                borderRadius: 10,
                padding: 2,
                gap: 8,
            }}
            zoom={{
                maxZoomPixelRatio: 3,
                scrollToZoom: true,
            }}
            render={{
                buttonPrev: images.length <= 1
                    ? () => null
                    : undefined,

                buttonNext: images.length <= 1
                    ? () => null
                    : undefined,
            }}
        />
    );
};

export default ProjectGalleryModal;