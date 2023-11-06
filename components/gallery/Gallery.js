"use client";
import React, { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Gallery() {
  const [images, setImages] = useState([
    {
      id: "img1",
      src: "images/1.jpg",
    },
    {
      id: "img2",
      src: "images/2.jpg",
    },
    {
      id: "img3",
      src: "images/3.jpg",
    },
    {
      id: "img4",
      src: "images/4.jpg",
    },
    {
      id: "img5",
      src: "images/5.jpg",
    },
    {
      id: "img6",
      src: "images/6.jpg",
    },
    {
      id: "img7",
      src: "images/7.jpg",
    },
    {
      id: "img8",
      src: "images/8.jpg",
    },
    {
      id: "img9",
      src: "images/9.jpg",
    },
    {
      id: "img10",
      src: "images/10.jpg",
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.index !== destination.index) {
      const newImages = Array.from(images);
      console.log("newImages:", newImages);
      const [removed] = newImages.splice(source.index, 1);
      newImages.splice(destination.index, 0, removed);

      setImages(newImages);
    }
  };

  const [selectedImageIds, setSelectedImageIds] = useState(new Set());

  const toggleSelection = (id) => {
    const newSelection = new Set(selectedImageIds);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedImageIds(newSelection);
  };

  const deleteSelectedImages = () => {
    setImages(images.filter((image) => !selectedImageIds.has(image.id)));
    setSelectedImageIds(new Set()); // Clear the selection
  };

  return (
    <div className="h-full p-3">
      <div className="h-auto flex flex-col justify-center items-center mb-4 bg-[#FFF] py-5 rounded-md">
        <p className="text-[2rem] font-bold my-2">Feature Image</p>
        <img src={images[0]?.src} className="w-1/2 h-full pb-5" alt="photo" />
        {selectedImageIds.size > 0 && (
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={deleteSelectedImages}
          >
            Delete Selected
          </button>
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-images" direction="horizontal">
          {(provided) => (
            <div
              className="grid grid-cols-4 gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex justify-center p-1 ${
                        selectedImageIds.has(image.id) ? "bg-blue-300" : ""
                      }`}
                      onClick={() => toggleSelection(image.id)}
                    >
                      <img
                        src={image.src}
                        alt={`image-${index}`}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
